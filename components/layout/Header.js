import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { AiOutlineInstagram } from 'react-icons/ai';
import styles from './Header.module.css';

const Header = () => {
    const router = useRouter();

    return(
        <header className={styles.header}>
                <h2>
                    <Link href='/'>
                        <div className={styles.line}>
                            <span className={styles.headerline}>
                                Lovely Snakes
                            </span><br/>
                            <span>
                                маїсові полози різних морф
                            </span>
                        </div>
                    </Link>
                </h2>
                <Link href='https://instagram.com/lovely_snakesss?igshid=YmMyMTA2M2Y='>
                    <a href='https://instagram.com/lovely_snakesss?igshid=YmMyMTA2M2Y='
                        className={styles.instagram}
                    >
                        <Image                            
                            layout='intrinsic'
                            alt='instagram'
                            src='/pic/logo.png'
                            width={75}
                            height={75}
                            quality='75'
                        /><br/>
                        <AiOutlineInstagram/>lovely_snakesss
                    </a>
                </Link>                                  
        </header>
    );
};

export default Header;