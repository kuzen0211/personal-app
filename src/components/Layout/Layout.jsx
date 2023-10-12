import { Suspense } from 'react';
import { Header } from '../Header/Header';
import { SideBar } from '../SideBar/SideBar';
import { Outlet } from 'react-router-dom';
// import styles from './Layout.module.css';

export const Layout = () => {
  return (
    <>
      <Header />
      <SideBar />;
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
