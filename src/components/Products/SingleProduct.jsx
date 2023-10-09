import React, { useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";

import { useGetProductQuery } from '../../features/API/apiSlice';

import { ROUTES } from '../../utils/routes'
import Product from './Product';

const SingleProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });

    useEffect(() => {
        if (!isFetching && !isLoading && !isSuccess) {
            navigate(ROUTES.HOME);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading, isFetching, isSuccess]);

    // console.log(isSuccess);

    return isLoading ? (
        <section>Loading...</section>
    ) : (
        <Product {...data} />
    );
};

export default SingleProduct;