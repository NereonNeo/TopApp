import { SidebarProps } from './Sidebar.props';
import styles from './Siderbar.module.css';
import cn from 'classnames';
import Menu from '../Menu/Menu';
const SideBar = ({ ...props }: SidebarProps): JSX.Element => {
    return (
        <div {...props}>
            <Menu />
        </div>
    );
};

export default SideBar;
