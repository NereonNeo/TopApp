import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import React from 'react';
import Htag from '../../Components/HTag/Htag';
import Tag from '../../Components/Tag/Tag';
import Card from '../../Components/Card/Card';
import HhData from '../../Components/HhData/HhData';
import { TopLevelCategoroy } from '../../interfaces/page.interface';
const TopPageComponent = ({
    page,
    products,
    firstCategory,
}: TopPageComponentProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag="h1">{page.title}</Htag>
                {products && (
                    <Tag color="gray" size="m">
                        {products.length}{' '}
                    </Tag>
                )}
                <span>Сартировка</span>
            </div>
            <div>
                {products &&
                    products.map((p) => {
                        return <div key={p._id}>{p.title}</div>;
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
            {firstCategory == TopLevelCategoroy.Courses && (
                <HhData {...page.hh} />
            )}
        </div>
    );
};

export default TopPageComponent;
