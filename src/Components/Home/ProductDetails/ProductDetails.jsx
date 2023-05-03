import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../../../Utils/Redux/ProductSlice/ProductsApi';

const ProductDetails = () => {
    const { id } = useParams()
    const { isLoading, data = [] } = useGetProductsQuery()


    const product = data?.data?.filter(product => product._id === id)
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
                        <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                        <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
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