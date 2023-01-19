import styles from './ProductType.module.scss';


interface ProductTypeProps {
    productType: string,
    active: boolean
}

export default function ProductType({productType, active }: ProductTypeProps) {
    return (
        <h4 className={styles[active ? 'type' : 'none'] }>{productType}</h4>
        );
}