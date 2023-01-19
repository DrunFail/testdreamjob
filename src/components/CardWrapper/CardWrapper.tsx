import styles from './CardWrapper.module.scss';

interface CardWrapperProps {
    children: React.ReactNode
}


export default function CardWrapper({children }: CardWrapperProps) {
    return (
        <div className={styles.main}>
            {children }
            </div>
        
        );
}