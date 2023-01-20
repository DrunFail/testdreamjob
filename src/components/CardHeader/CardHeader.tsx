import { HeaderCardMessage } from '../../interfaces/product';
import styles from './CardHeader.module.scss';


interface CardHeaderProps {
    mouseOut: boolean, 
    active: boolean,
    header: HeaderCardMessage
}

export default function CardHeader({ mouseOut, active, header }: CardHeaderProps) {

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
            <p className={styles[setClass()]}>{mouseOut && active ? `${header.secondary}` : `${header.default}`}</p> 
            </>
       
        );
}