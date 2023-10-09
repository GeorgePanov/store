import React from 'react';

import styles from '../../styles/Product.module.css'


const Product = ({ images, price, title }) => {

    const currentImage = images[0]

    return (
        <section className={styles.product}>
            <div className={styles.images}>
                <div
                    className={styles.current}
                    style={{ backgroundImage: `url(${currentImage})` }}
                />
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={styles.image}
                        style={{ backgroundImage: `url(${image})` }}
                        onClick={() => { }}
                    />
                ))}
            </div>
            <div className={styles.info}>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.price}>
                    {price}
                </div>
                <div className={styles.color}>
                    <span>Color: </span> Green
                </div>
            </div>
        </section>
    );
};

export default Product;