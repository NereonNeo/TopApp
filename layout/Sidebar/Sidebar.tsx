import { SidebarProps } from './Sidebar.props';
import styles from './Siderbar.module.css';
import cn from 'classnames';
import Menu from '../Menu/Menu';
import Logo from '../Logo.svg';
const SideBar = ({ className, ...props }: SidebarProps): JSX.Element => {
    return (
        <div className={cn(className, styles.sidebar)} {...props}>
            <Logo />
            <div>Search</div>
            <Menu />
        </div>
    );
};

export default SideBar;
