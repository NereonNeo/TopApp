import { RProps } from './Raiting.props';
import styles from './Raiting.module.css';
import cn from 'classnames';
import { useEffect, useState, KeyboardEvent } from 'react';
import StarIcon from './Star.svg';
const Raiting = ({
    isEditable = false,
    raiting,
    setRaiting,
    ...props
}: RProps): JSX.Element => {
    const [raitingArr, setRaitingArr] = useState<JSX.Element[]>(
        new Array(5).fill(<></>)
    );

    useEffect(() => {
        constructRaiting(raiting);
    }, [raiting]);

    const constructRaiting = (currentRaiting: number) => {
        const updatedArr = raitingArr.map((r: JSX.Element, i: number) => {
            return (
                <span
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRaiting,
                        [styles.editable]: isEditable,
                    })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(raiting)}
                    onClick={() => onclick(i + 1)}
                >
                    <StarIcon
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGElement>) =>
                            isEditable && handleSpace(i + 1, e)
                        }
                    />
                </span>
            );
        });
        setRaitingArr(updatedArr);
    };
    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }
        constructRaiting(i);
    };
    const onclick = (i: number) => {
        if (!isEditable || !setRaiting) {
            return;
        }
        setRaiting(i);
    };
    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
        if (e.code != 'Space' || !setRaiting) {
            return;
        }
        setRaiting(i);
    };
    return (
        <div {...props}>
            {raitingArr.map((r, i) => {
                return <span key={i}>{r}</span>;
            })}
        </div>
    );
};

export default Raiting;
