import React, { useState, useEffect } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from './Layout.module.css';

const Layout = (props) => {
  const [showMenu, setShowMenu] = useState(true);
  const [icon, setIcon] = useState(null);
  const [navStyle, setNavStyle] = useState(styles.navcol);

  useEffect(() => {
    if(showMenu) {
      setNavStyle(styles.navcol);
    } else {
      setNavStyle(styles.colclose);
    }
  }, [showMenu]);

  const showMenuHandler = () => {
    setShowMenu(true);
    setIcon(null);
  };

  const closeMenuHandler = () => {
    setShowMenu(false);
    setIcon(<span><GiHamburgerMenu className={styles.icon}/></span>);
  };

  return (
    <div>      
      <Header />
      <div className={styles.row}>
        {showMenu && <div className={navStyle}>          
          <Navigation onClose={closeMenuHandler}/>
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
