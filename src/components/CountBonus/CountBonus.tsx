import styles from './CountBonus.module.scss';


interface CountBonusProps {
    countPortion: number,
    countMouse: string,
    active: boolean
}

export default function CountBonus({ countPortion, countMouse, active }: CountBonusProps) {
    return (
        <p className={styles[active ? 'bonus' : 'none'] }>{countPortion} порций {countMouse} в подарок</p>
        );
}