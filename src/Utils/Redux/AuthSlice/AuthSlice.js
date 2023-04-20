import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { auth } from "../../Firebase/firebase.config"
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth"

const initialState = {
    email: '',
    name: '',
    userImage: '',
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}


export const CreateUser = createAsyncThunk("auth/createuser", async ({ name, email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password)
    if (data) {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
        })
        return { email: data?.user.email, name: data?.user.displayName }
    }
})


export const SigninUser = createAsyncThunk("auth/SigninUser", async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password)
    return { email: data?.user.email, name: data?.user.displayName }

})

export const ResetPass = createAsyncThunk("auth/ResetPass", async ({ email }) => {
    await sendPasswordResetEmail(auth, email)

})




export const loginGoogle = createAsyncThunk('auth/loginGoogle', async (provider) => {
    const data = await signInWithPopup(auth, provider)

})



const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.email = "";
            state.name = "";
            state.userImage = '';
        },
        setUser: (state, action) => {
            state.email = action.payload.email
            state.name = action.payload.name
            state.userImage = action.payload.image
            state.isLoading = false
        },

    },
    extraReducers: (builder) => {
        builder.addCase(CreateUser.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
            state.message = "";
        })
            .addCase(CreateUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.email = action.payload.email;
                state.name = action.payload.name;
                state.message = "";

            })
            .addCase(CreateUser.rejected, (state, action) => {
                state.isLoading = false;
                state.email = "";
                state.isError = true;
                state.message = action.error.message;
            })
            .addCase(SigninUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(SigninUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.email = action.payload.email;
                state.name = action.payload.name;
                state.isError = false;
                state.message = "";

            })
            .addCase(SigninUser.rejected, (state, action) => {
                state.isLoading = false;
                state.email = "";
                state.isError = true;
                state.message = action.error.message;
            })
            .addCase(ResetPass.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(ResetPass.fulfilled, (state, action) => {
                state.isLoading = false;
                state.message = "An Email Sent";
                state.isError = false;

            })
            .addCase(ResetPass.rejected, (state, action) => {
                state.isLoading = false;
                state.email = "";
                state.isError = true;
                state.message = action.error.message;
            })

    }

})

export const { setUser, logout } = AuthSlice.actions;
export default AuthSlice.reducer