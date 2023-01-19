import styles from './Brand.module.scss';

interface BrandProps {
    brandName: string,
    active: boolean
}


export default function Brand({brandName, active }: BrandProps) {
    return (
        <h1 className={styles[active ? 'name' : 'none'] }>{brandName}</h1>
        );
}