import * as React from 'react';

import { NavLink } from 'react-router-dom';
import styles from './UserNav.module.css';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';

export const UserNav = () => {
  return (
    <>
      <h3 className={styles.heading}>User Panel</h3>

      <div className={styles.userNav}>
        <NavLink
          to="/account"
          className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}
        >
          <AccountCircleRoundedIcon />
          My Account
        </NavLink>

        <NavLink
          to="/task"
          className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}
        >
          <FormatListBulletedRoundedIcon />
          Task
        </NavLink>
      </div>
    </>
  );
};
