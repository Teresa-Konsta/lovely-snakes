import styles from './Footer.module.css';

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <b>&copy;&nbsp;Copyright&nbsp;
            <a href='https://www.linkedin.com/in/tereza-teresa-konstari-8b9594131/'>
                Тереза Констарі
            </a>
            &nbsp;2022<br/>            
            Фото з інтернету.
            Сайт не для комерції.<br/>
            MIT License</b>
        </footer>
    );
};

export default Footer;