import styles from './SideBar.module.css';

import { UserNav } from '../UserNav/UserNav';

export const SideBar = () => {
  return (
    <div className={styles.container}>
      <a href="/" className={styles.logo}>
        <span>BBO</span>
      </a>
      <UserNav />
    </div>
  );
};
