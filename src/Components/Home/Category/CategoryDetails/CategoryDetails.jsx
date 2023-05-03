import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../../../../Utils/Redux/ProductSlice/ProductsApi';


const CategoryDetails = () => {
    const { name } = useParams()
    const { data = [] } = useGetProductsQuery()
    return (
        <div className='m-5 grid gap-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            {
                data?.data?.filter(product => product.brand === name).map(product =>
                    <div data-aos="zoom-in-up" data-aos-duration="2000" className="card  bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={product.productImage} alt={product.productName} className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{product.productName}</h2>
                            <p>Actual Price: ${product.price}</p>
                            <p>Resale Price: ${product.resalePrice}</p>
                            <div className="card-actions">
                                <Link to={`/category/${product.brand}/${product._id}`}> <button className="btn btn-primary">View Details</button></Link>
                            </div>
                        </div>
                    </div>

                )
            }

        </div>
    );
};

export default CategoryDetails;