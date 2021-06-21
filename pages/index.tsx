import axios from 'axios';
import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import Button from '../Components/Button/Button';
import Htag from '../Components/HTag/Htag';
import P from '../Components/Paragaraph/Paragraph';
import Raiting from '../Components/Raiting/Raiting';
import Tag from '../Components/Tag/Tag';
import { MenuItem } from '../interfaces/menu.interface';
import { withLayout } from '../layout/Layout';

function Home({ menu }: HomeProps): JSX.Element {
    const [raiting, setRaiting] = useState<number>(4);
    return (
        <>
            <Htag tag="h1">Lorem ipsum dolor sit amet consectetu</Htag>
            <Button arrow="down" appearance="ghost" className="test">
                Button
            </Button>
            <Button arrow="right" appearance="primary">
                Button
            </Button>
            <P size="l">Большой</P>
            <P>Средний</P>
            <P size="s">Малкнький</P>
            <Tag color="red" size="s">
                Малкнький red
            </Tag>
            <Tag color="red" size="m">
                Большой red
            </Tag>
            <Tag color="gray" size="s">
                Большой gray
            </Tag>
            <Tag color="green" size="s">
                Большой green
            </Tag>
            <Tag color="ghost" size="s">
                Большой ghost
            </Tag>
            <Raiting raiting={raiting} isEditable setRaiting={setRaiting} />
            <ul>
                {menu.map((e) => {
                    return (
                        <li key={e._id.secondCategory}>
                            {e._id.secondCategory}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
export default withLayout(Home);
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(
        process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
        {
            firstCategory,
        }
    );

    return {
        props: {
            menu,
            firstCategory,
        },
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}
