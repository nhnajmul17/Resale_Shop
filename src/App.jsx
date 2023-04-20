
import { RouterProvider } from 'react-router-dom'
import { Router } from './Router/Router'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Utils/Firebase/firebase.config';
import { setUser } from './Utils/Redux/AuthSlice/AuthSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ email: user.email, name: user.displayName }))
      }
    }, [])
  })
  return (
    <div className="max-w[1440px]">
      <RouterProvider router={Router}></RouterProvider>
    </div>

  )
}

export default App
