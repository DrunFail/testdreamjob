import styles from './ProductCard.module.scss'


export default function ProductCard() {

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <p>Сказочное заморское яство</p>
                <h1>Нямушка</h1>
                <h4>с фуа-гра</h4>
                <p>10 порций мышь в подарок</p>
                <div className={styles.weight}>
                    <span>2</span>
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