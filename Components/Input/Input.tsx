import { InputProps } from './Input.props';
import styles from './Input.module.css';
import cn from 'classnames';
const Input = ({ className, ...props }: InputProps): JSX.Element => {
    return (
        <input type="text" className={cn(className, styles.input)} {...props} />
    );
};

export default Input;
