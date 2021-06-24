import { AdvantagesProps } from './Advantages.props';
import styles from './Advantages.module.css';
import cn from 'classnames';
import CheckIcon from './Check.svg';

const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
    return (
        <>
            {advantages.map((a) => {
                return (
                    <div key={a._id} className={styles.advantag}>
                        <CheckIcon />
                        <div className={styles.title}>{a.title}</div>
                        <hr className={styles.vline} />
                        <div className={styles.description}>
                            {a.description}
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Advantages;
