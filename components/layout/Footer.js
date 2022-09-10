import styles from './Footer.module.css';

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <b>&copy;&nbsp;Copyright&nbsp;
            <a href='https://www.linkedin.com/in/tereza-teresa-konstari-8b9594131/'>
            Tereza Konstari
            </a>
            &nbsp;2022
            <br />
            MIT License</b>
        </footer>
    );
};

export default Footer;