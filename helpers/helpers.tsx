import { FirstLevelMenuItem } from '../interfaces/menu.interface';
import { TopLevelCategoroy } from '../interfaces/page.interface';
import BookIcon from './icons/book.svg';
import BoxIcon from './icons/box.svg';
import CloudIcon from './icons/cloud.svg';
import HatIcon from './icons/hat.svg';
export const firstLevelMenu: FirstLevelMenuItem[] = [
    {
        route: 'courses',
        name: 'Курсы',
        icon: <HatIcon />,
        id: TopLevelCategoroy.Courses,
    },
    {
        route: 'services',
        name: 'Сервисы',
        icon: <CloudIcon />,
        id: TopLevelCategoroy.Services,
    },
    {
        route: 'books',
        name: 'Книги',
        icon: <BookIcon />,
        id: TopLevelCategoroy.Books,
    },
    {
        route: 'products',
        name: 'Товары',
        icon: <BoxIcon />,
        id: TopLevelCategoroy.Products,
    },
];
export const priceRu = (price: number): string =>
    price
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
        .concat(' ₽');
