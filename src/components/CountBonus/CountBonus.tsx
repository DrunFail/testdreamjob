import styles from './CountBonus.module.scss';


interface CountBonusProps {
    countPortion: number,
    countMouse: string
}

export default function CountBonus({ countPortion, countMouse }: CountBonusProps) {
    return (
        <p className={styles.bonus }>{countPortion} порций {countMouse} в подарок</p>
        );
}