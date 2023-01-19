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


export default function ProductCard({product }: ProductCardProps) {

    return (
        <div className={styles.container}>
            <CardWrapper>
                <CardHeader />
                <Brand brandName={product.brand} />
                <ProductType productType={product.title } />
                <CountBonus countPortion={product.countPortion} countMouse={product.countMouse } />
                <Weight weight={product.weight} />
                </CardWrapper>
            <UnderCardString />
        </div>
        );
}