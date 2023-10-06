import React from 'react';
import Poster from '../Poster/Poster';
import Products from '../Products/Products'
import { useSelector } from 'react-redux';
const Home = () => {
    const { list } = useSelector(({ products }) => products)
    return (
        <>
            <Poster />
            <Products title="Trending" products={list} amount={5} />
        </>
    );
};

export default Home;