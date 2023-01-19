import styles from './Weight.module.scss';


interface WeightProps {
    weight: number,
    selected: boolean,
    active: boolean
}

export default function Weight({weight, selected, active }: WeightProps) {

    const setClass = () => {
        if (!active) {
            return 'none'
        }
        if (selected) {
            return 'active'
        }
        return 'weight'
    }


    return (
        <div className={styles[setClass()]}>
            <span>{weight}</span>
            <span>кг</span>
        </div>
        
        );
}