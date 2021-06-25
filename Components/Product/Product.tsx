import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import cn from 'classnames';
import Card from '../Card/Card';
import React from 'react';
import Raiting from '../Raiting/Raiting';
import Tag from '../Tag/Tag';
import Button from '../Button/Button';
import { priceRu } from '../../helpers/helpers';
import Divider from '../Divider/Divider';
const Product = ({
    product,
    className,
    ...props
}: ProductProps): JSX.Element => {
    return (
        <Card className={styles.product}>
            <div className={styles.logo}>
                <img
                    src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
                    alt={product.title}
                />
            </div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>
                {priceRu(product.price)}
                {product.oldPrice && (
                    <Tag color="green">
                        {priceRu(product.price - product.oldPrice)}
                    </Tag>
                )}
            </div>
            <div className={styles.credit}>
                {priceRu(product.credit)}/
                <span className={styles.month}>мес</span>
            </div>
            <div className={styles.rating}>
                <Raiting raiting={product.reviewAvg ?? product.initialRating} />
            </div>
            <div className={styles.tags}>
                {product.categories.map((c) => {
                    return (
                        <Tag key={c} color="ghost">
                            {c}
                        </Tag>
                    );
                })}
            </div>
            <div className={styles.priceTitle}>цена</div>
            <div className={styles.creditTitle}>кредит</div>
            <div className={styles.rateTitle}>
                {product.reviewCount} отзывов
            </div>

            <div className={styles.hr}>
                <Divider />
            </div>

            <div className={styles.description}>{product.description}</div>
            <div className={styles.feature}>фичи</div>
            <div className={styles.advBlock}>
                <div className={styles.advantages}>
                    <div>Преимущества</div>
                    <div>{product.advantages}</div>
                </div>
                <div className={styles.disadvantages}>
                    <div>Недостатки</div>
                    <div>{product.disadvantages}</div>
                </div>
            </div>

            <div className={styles.hr}>
                <Divider />
            </div>

            <div className={styles.actions}>
                <Button appearance="primary">Узнать подробнее</Button>
                <Button appearance="ghost" arrow="right">
                    Читать отзывы
                </Button>
            </div>
        </Card>
    );
};

export default Product;
