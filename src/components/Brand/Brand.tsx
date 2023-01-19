import styles from './Brand.module.scss';

interface BrandProps {
    brandName: string
}


export default function Brand({brandName }: BrandProps) {
    return (
        <h1 className={styles.name }>{brandName}</h1>
        );
}