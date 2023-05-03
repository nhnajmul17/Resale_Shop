import React, { useEffect } from 'react';
import { Form, useParams } from 'react-router-dom';
import { useBookProductMutation, useGetProductsQuery } from '../../../Utils/Redux/ProductSlice/ProductsApi';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const ProductDetails = () => {
    const { id } = useParams()
    const { isLoading, data = [] } = useGetProductsQuery()
    const [booking, { data: bookdata }] = useBookProductMutation()
    const { register, reset } = useForm()


    const product = data?.data?.filter(product => product._id === id)


    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const productName = form.productName.value
        const productPrice = form.productPrice.value
        const buyerName = form.buyerName.value
        const buyerEmail = form.buyerEmail.value
        const bookingdata = {
            productPrice,
            productName,
            buyerName,
            buyerEmail,
            productId: id
        }
        booking(bookingdata)
    }

    useEffect(() => {
        if (bookdata?.success) {
            toast.success("Product Booked")
            reset()
        }
    }, [bookdata?.success])

    let content;
    if (isLoading) {
        content = <h1 className=' text-center h-screen text-xl font-bold'>Loading ...</h1>
    }

    if (!isLoading && product) {
        const { productImage, productName, description, brand, price, resalePrice, sellerName, location, yearUsed, phoneNumber } = product[0]
        content =
            <>

                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={productImage} alt={productName} /></figure>
                    <div className="card-body">
                        <h2 className="font-semibold text-3xl">{productName}</h2>
                        <p>{description}</p>
                        <p >Actual Price: <span className='font-bold'> ${price}</span></p>
                        <p >Resale Price: <span className='font-bold'> ${resalePrice}</span></p>
                        <p >Brand: <span className='font-bold'> {brand}</span></p>

                        <p >Year of used: <span className='font-bold'> {yearUsed}yrs</span></p>
                        <p >Seller: <span className='font-bold'> {sellerName}</span></p>
                        <p >Location: <span className='font-bold'> {location}</span></p>
                        <p >Phone Number: <span className='font-bold'> {phoneNumber}</span></p>
                        <div className="card-actions justify-center">
                            <label htmlFor="my-modal-3" className='btn btn-primary'>
                                Buy Now
                            </label>
                        </div>

                    </div>

                </div>

                {/* Booking Modal */}
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <label htmlFor="my-modal-3" className="modal cursor-pointer">
                    <label className="modal-box relative" htmlFor="">
                        <label htmlFor="my-modal-3" className="btn btn-primary btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <div className=''>
                            <form onSubmit={handleSubmit}>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Product Name</span>
                                    </label>
                                    <input disabled type="text" name="productName" value={productName} className="input input-bordered w-full " />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input disabled type="text" name="productPrice" value={`$${resalePrice}`} className="input input-bordered w-full " />
                                </div>
                                <div className="form-control w-full my-2">
                                    <label className="label">
                                        <span className="label-text">Buyer Name</span>
                                    </label>
                                    <input type="text"{...register("buyerName")} placeholder="Your Name" className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full my-2">
                                    <label className="label">
                                        <span className="label-text">Buyer Email</span>
                                    </label>
                                    <input type="email"{...register("buyerEmail")} placeholder="Your Mail" className="input input-bordered w-full" />
                                </div>
                                <button type="submit" className='btn btn-accent w-full my-2' >Book Now</button>
                            </form>
                        </div>
                    </label>
                </label>
            </>

    }
    return (
        <>
            {content}

        </>
    );
};

export default ProductDetails;