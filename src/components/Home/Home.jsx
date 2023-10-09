import React from 'react';
import Poster from '../Poster/Poster';
import Products from '../Products/Products'
import { useSelector } from 'react-redux';
import Categories from '../Categories/Categories';
import Banner from '../Banner/Banner';

const Home = () => {
    const { products, categories } = useSelector((state) => state)

    return (
        <>
            <Poster />
            <Products title="Trending" products={products.list} amount={5} />
            <Categories title="Worth seeing" products={categories.list} amount={5} />
            <Banner />
        </>
    );
};

export default Home;