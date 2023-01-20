import styles from './CardWrapper.module.scss';

interface CardWrapperProps {
    children: React.ReactNode,
    selected: boolean,
    handleSelected: () => void,
    handleMouseOut: () => void,
    active: boolean
}


export default function CardWrapper({ children, selected, handleSelected, handleMouseOut, active }: CardWrapperProps) {

    const setClass = () => {
        if (!active) {
            return 'none'
        }
        if (selected) {
            return 'active'
        }
        return 'main'
    }


    return (
        <div className={styles[setClass()]}
            onClick={handleSelected}
            onMouseLeave={handleMouseOut}
        >
            {children}
        </div>
    );
}