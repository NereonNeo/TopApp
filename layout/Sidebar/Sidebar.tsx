import { SidebarProps } from './Sidebar.props';
import styles from './Siderbar.module.css';
import cn from 'classnames';
const SideBar = ({ ...props }: SidebarProps): JSX.Element => {
    return <div {...props}>SideBar</div>;
};

export default SideBar;
