import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './Navigation.module.css';

const Navigation = (props) => {
  const router = useRouter();

  const navMenu = [
    { title: 'Тераріум', path: '/terrarium' },
    { title: 'Наповнення тераріуму', path: '/filling' },
    { title: 'Обігрів', path: '/heating' },    
    { title: 'Декор та Обладнання', path: '/accessories' },
    { title: 'Годування', path: '/feeding' },
    { title: 'Важливо!', path: '/important'}
  ];

  const closeMenuHandler = () => {
    props.onClose();
  };

  return (
    <nav className={styles.menu}>
      <div onClick={closeMenuHandler}><AiOutlineClose className={styles.icon}/></div>   
      {navMenu.map((item, index) => {
        return (
          <Link key={index} href={item.path}>
            <a
              className={`${
                router.pathname === item.path ? styles.activeLink : null
              }`}
            >
              {item.title}
            </a>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;