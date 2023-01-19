import styles from './ProductType.module.scss';


interface ProductTypeProps {
    productType: string
}

export default function ProductType({productType }: ProductTypeProps) {
    return (
        <h4 className={styles.type }>{productType}</h4>
        );
}