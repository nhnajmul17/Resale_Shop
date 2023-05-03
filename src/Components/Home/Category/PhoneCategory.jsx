import React from 'react';
import { Link } from 'react-router-dom';
import { useGetCategoriesQuery } from '../../../Utils/Redux/ProductSlice/CategoryApi';

const PhoneCategory = () => {

    const { data = [] } = useGetCategoriesQuery()
    return (
        <div className='text-center mt-20 pb-5'>
            <h1 className='text-4xl font-bold my-5'>CATEGORY</h1>
            <div className='grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                {data.data?.map(category =>
                    <div data-aos="flip-up" data-aos-duration="2000" key={category._id} className="card w-96 shadow-xl ">
                        <figure><img src={category.categoryImage} alt={category.categoryName} /></figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center font-bold text-2xl">{category.categoryName}</h2>
                            <div className="card-actions justify-center">
                                <Link to={`/category/${category.categoryName}`}>
                                    <button className="btn btn-primary">All Products</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                )}


            </div>
        </div>
    );
};

export default PhoneCategory;