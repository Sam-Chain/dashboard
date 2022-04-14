import styles from './Sidebar.module.scss';
import samanthaImage from '../assets/png/samantha.png';
import { Link, useLocation } from 'react-router-dom';

const sidebarNaveLinks = ['dashboard', 'expences', 'wallets', 'summery', 'accounts', 'settings']

export default function Sidebar() {
    const location = useLocation();

    return (
        <>
            <aside className={styles.sidebar}>
                <div className={styles.sidebarContent}>
                    <div className={styles.profileDetails}>
                        <div className={styles.profileImage}>
                            <img src={samanthaImage} alt="profile" />
                            <p className={styles.notification}>4</p>
                        </div>
                        <p className={styles.userName}>Samantha</p>
                        <p className={styles.UserEmail}>Samantha@email.com</p>
                    </div>

                    <nav className={styles.sidebarNav} >
                        <ul>
                            {
                                sidebarNaveLinks.map((link, index) => (
                                    <li className={styles.sidebarNavItem} key={index}>
                                        <Link to={`/${link}`}
                                            className={location.pathname === `/${link}`
                                            ? styles.sidebarLinkActive 
                                            : styles.sidebarlink} >{link}
                                        </Link>
                                    </li>
                                ))
                            }   
                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    )
}