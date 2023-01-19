import { useState } from 'react';
import { Product } from '../../interfaces/product';
import Brand from '../Brand/Brand';
import CardHeader from '../CardHeader/CardHeader';
import CardWrapper from '../CardWrapper/CardWrapper';
import CountBonus from '../CountBonus/CountBonus';
import ProductType from '../ProductType/ProductType';
import UnderCardString from '../UnderCardString/UnderCardString';
import Weight from '../Weight/Weight';
import styles from './ProductCard.module.scss'

interface ProductCardProps {
    product: Product
}


export default function ProductCard({ product }: ProductCardProps) {
    const [selected, setSelected] = useState(false);
    const [mouseOut, setMouseOut] = useState(false);


    const handleSelected = () => {
        setSelected(selected => !selected);
        if (mouseOut) {
            setMouseOut(mouseOut => !mouseOut)
            setSelected(true)
        }
    }


    const handleMouseOut = () => {
        if (!selected) {
            setMouseOut(mouseOut => !mouseOut);
            setSelected(selected => !selected);
        }
    }

    return (
        <div className={styles.container}>

            <CardWrapper
                selected={selected}
                handleSelected={handleSelected}
                handleMouseOut={handleMouseOut}
                active={product.active}>

                <CardHeader
                    mouseOut={mouseOut}
                    active={product.active}
                    header={product.header} />

                <Brand
                    brandName={product.brand}
                    active={product.active} />

                <ProductType
                    productType={product.title}
                    active={product.active} />

                <CountBonus
                    countPortion={product.countPortion}
                    countMouse={product.countMouse}
                    active={product.active} />

                <Weight
                    weight={product.weight}
                    selected={selected}
                    active={product.active} />

            </CardWrapper>

            <UnderCardString
                selected={selected}
                message={product.selectedMessage}
                handleSelected={handleSelected}
                active={product.active}
                productType={product.title} />
        </div>
    );
}