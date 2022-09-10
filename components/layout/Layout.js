import React, { useState } from 'react';
import Head from 'next/head';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from './Layout.module.css';

const Layout = (props) => {
  const [showMenu, setShowMenu] = useState(true);
  const [icon, setIcon] = useState(null);

  const showMenuHandler = (event) => {
    event.preventDefault();
    setShowMenu(true);
    setIcon(null);
  };

  const closeMenuHandler = () => {
    setShowMenu(false);
    setIcon(<span><GiHamburgerMenu className={styles.icon}/></span>);
  };

  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <div className={styles.row}>
        {showMenu && <div className={styles.navcol}>          
          <Navigation onClose={closeMenuHandler} />
        </div>}
        <main className={styles.main}>
          <div onClick={showMenuHandler}>{icon}</div>
          {props.children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
