import styles from './Menu.module.css';
import cn from 'classnames';
import { useContext } from 'react';
import { AppContext } from '../../Context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import BookIcon from './icons/book.svg';
import BoxIcon from './icons/box.svg';
import CloudIcon from './icons/cloud.svg';
import HatIcon from './icons/hat.svg';
import { TopLevelCategoroy } from '../../interfaces/page.interface';
const firstLevelMenu: FirstLevelMenuItem[] = [
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
const Menu = (): JSX.Element => {
    const { menu, firstCategory, setMenu } = useContext(AppContext);
    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map((m) => {
                    return (
                        <div key={m.route}>
                            <a href={`/${m.route}`}>
                                <div
                                    className={cn(styles.firstLevel, {
                                        [styles.firstLevelActive]:
                                            m.id == firstCategory,
                                    })}
                                >
                                    {m.icon}
                                    <span>{m.name}</span>
                                </div>
                            </a>
                            {m.id == firstCategory && buildSecondLevel(m)}
                        </div>
                    );
                })}
            </>
        );
    };
    const buildSecondLevel = (menudata: FirstLevelMenuItem) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map((m) => {
                    return (
                        <div key={m._id.secondCategory}>
                            <div className={styles.secondLevel}>
                                {m._id.secondCategory}
                            </div>
                            <div
                                className={cn(styles.secondLevelBlock, {
                                    [styles.secondLevelBlockOpened]: m.isOpened,
                                })}
                            >
                                {buildThirdLevel(m.pages, menudata.route)}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };
    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return pages.map((p) => {
            return (
                <a
                    href={`/${route}/${p.alias}`}
                    className={cn(styles.thirdLevel, {
                        [styles.thirdLevelActive]: false,
                    })}
                >
                    {p.category}
                </a>
            );
        });
    };
    return <div className={styles.menu}>{buildFirstLevel()}</div>;
};

export default Menu;
