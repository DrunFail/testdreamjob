import styles from './UnderCardString.module.scss';


interface UnderCardStringProps {
    selected: boolean,
    message: string,
    handleSelected: () => void,
    active: boolean,
    productType: string
}

export default function UnderCardString({ selected, message, handleSelected, active, productType }: UnderCardStringProps) {

    if (!active) {
        return <p className={styles.none}>{`Печалька, ${productType} закончился` }</p>
    }

    return (
        <>
            {selected ||
                <p className={styles.under}>
                    Чего сидишь? Порадуй котэ,
                    <a href='#' onClick={handleSelected }>купи.</a>
                </p>
            }

            {selected &&
                <p className={styles.under}>
                    {message }
                </p>}

            { }
        </>


    );
}