import React, { useState } from 'react';
import Button from '../Components/Button/Button';
import Htag from '../Components/HTag/Htag';
import P from '../Components/Paragaraph/Paragraph';
import Raiting from '../Components/Raiting/Raiting';
import Tag from '../Components/Tag/Tag';

export default function Home(): JSX.Element {
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
        </>
    );
}
