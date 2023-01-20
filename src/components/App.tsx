import ProductCard from "./ProductCard/ProductCard";
import productData from '../data/productData.json';
import { useState } from "react";
import { Product } from "../interfaces/product";
import styles from './App.module.scss';


export default function App() {
    const [products] = useState<Product []>(productData)

    return (

        <div className={styles.container }>
            <h1>Ты сегодня покормил кота?</h1>

            <div className={styles.productList }>
                {products.map(product =>
                    <ProductCard
                        key={product.id}
                        product={product} />)}
            </div>
        </div>
            );
}