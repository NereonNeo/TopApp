import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import React, { useReducer } from 'react';
import Htag from '../../Components/HTag/Htag';
import Tag from '../../Components/Tag/Tag';
import Card from '../../Components/Card/Card';
import HhData from '../../Components/HhData/HhData';
import { TopLevelCategoroy } from '../../interfaces/page.interface';
import Advantages from '../../Components/Advantages/Advantages';
import Paragraph from '../../Components/Paragaraph/Paragraph';
import Sort from '../../Components/Sort/Sort';
import { SortEnum } from '../../Components/Sort/Sort.props';
import { sortReducer } from './sort.reducer';
import Product from '../../Components/Product/Product';
const TopPageComponent = ({
    page,
    products,
    firstCategory,
}: TopPageComponentProps): JSX.Element => {
    const [{ products: sortProducts, sort }, dispatchSort] = useReducer(
        sortReducer,
        {
            products,
            sort: SortEnum.Raiting,
        }
    );
    const setSort = (sort: SortEnum) => {
        dispatchSort({ type: sort });
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag="h1">{page.title}</Htag>
                {products && (
                    <Tag color="gray" size="m">
                        {products.length}{' '}
                    </Tag>
                )}
                <Sort sort={sort} setSort={setSort} />
            </div>
            <div>
                {sortProducts &&
                    sortProducts.map((p) => {
                        return <Product key={p._id} product={p} />;
                    })}
            </div>
            <div className={styles.hhTitle}>
                <Htag tag="h2">Вакансии - {page.category}</Htag>
                {products && (
                    <Tag color="red" size="m">
                        hh.ru
                    </Tag>
                )}
            </div>
            {firstCategory == TopLevelCategoroy.Courses && page.hh && (
                <HhData {...page.hh} />
            )}
            {page.advantages && page.advantages.length > 0 && (
                <>
                    <Htag tag="h2">Преимущества</Htag>
                    <Advantages advantages={page.advantages} />
                </>
            )}
            {page.seoText && (
                <div
                    className={styles.seo}
                    dangerouslySetInnerHTML={{ __html: page.seoText }}
                />
            )}
            <Htag tag="h2">Получаемые навыки</Htag>
            {page.tags.map((t) => (
                <Tag key={t} color="primary">
                    {t}
                </Tag>
            ))}
        </div>
    );
};

export default TopPageComponent;
