import { Product } from '../../interfaces/product';
import styles from './ProductCard.module.scss'

interface ProductCardProps {
    product: Product
}


export default function ProductCard({product }: ProductCardProps) {

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <p>Сказочное заморское яство</p>
                <h1>{product.brand}</h1>
                <h4>{product.title}</h4>
                <p>{product.countPortion} порций {product.countMouse} в подарок</p>
                <div className={styles.weight}>
                    <span>{product.weight}</span>
                    <span>кг</span>
                </div>
            </div>
            <p className={styles.under}>
                Чего сидишь? Порадуй котэ, 
                <a href=''>купи.</a>
                </p>
        </div>
        );
}