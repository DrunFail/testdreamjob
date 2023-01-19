import styles from './CardHeader.module.scss';


interface CardHeaderProps {
    mouseOut: boolean, 
    active: boolean
}

export default function CardHeader({ mouseOut, active }: CardHeaderProps) {

    const setClass = () => {
        if (!active) {
            return 'none'
        }
        if (mouseOut) {
            return 'active'
        }
        return 'header'
    }

    return (
        <>
            <p className={styles[setClass()]}>{mouseOut && active ? 'Котэ не одобряет?' : 'Сказочное заморское яство'}</p> 
            </>
       
        );
}