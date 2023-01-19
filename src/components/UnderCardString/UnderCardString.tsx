import styles from './UnderCardString.module.scss';


export default function UnderCardString() {
    return (
        <p className={styles.under}>
            Чего сидишь? Порадуй котэ,
            <a href='#'>купи.</a>
        </p>
        );
}