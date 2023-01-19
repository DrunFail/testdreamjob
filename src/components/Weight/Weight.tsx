import styles from './Weight.module.scss';


interface WeightProps {
    weight: number
}

export default function Weight({weight }: WeightProps) {
    return (
        <div className={styles.weight}>
            <span>{weight}</span>
            <span>кг</span>
        </div>
        
        );
}