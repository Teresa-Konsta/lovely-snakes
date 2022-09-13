import Image from "next/image";
import PageContainer from "../components/UI/PageContainer";
import styles from '../components/UI/PageContainer.module.css';

export default function Accessories() {
    return(
        <PageContainer>
            <h2>Декор та Обладнання</h2>
            <h3>
                <p className={styles.stress}>Декор</p>
                <p>
                    На ваш смак, бо змії все одно. Але, якщо поставити якусь колоду, то змія буде легше линяти, бо буде чіплятись шкуркою.
                </p>                
                <p>
                    Якщо ви хочете з природи принести у тераріум гарну колоду, щоб змійка по ній повзала (до речі і линяти їй буде легше), то ви повинні її продезінфікувати. 
                    Помістіть у кип’яток та прокип’ятіть 20 хвилин, або покладіть у духову піч на 150ºС, хвилин на 15-20, не більше.
                    Балка обов’язково повинна бути стійкою, щоб змія не впала разом з нею.
                </p>
            </h3>
            <div>
                <Image                            
                    layout='intrinsic'
                    alt='accessories'
                    src='/pic/accessories/wood.jpg'
                    width={669}
                    height={309}
                    quality='100'
                />
            </div>
            <h3>
                <p>
                    Мох з вулиці приносити — погана ідея. Звісно ви можете його обробити так само, як і колоду, але він тоді висохне.
                    Краще купіть у зоомагазині. Він буває спресований (його треба буде просто розмочити у воді), та живий не спресований.
                    З спресованих є лісовий мох та сфагнум.
                    Можете обирати будь-який, але сфагнум м’якіший.
                </p>
            </h3>
            <div>
                <Image                            
                    layout='intrinsic'
                    alt='accessories'
                    src='/pic/accessories/moss1.jpg'
                    width={365}
                    height={164}
                    quality='100'
                />
                <Image                            
                    layout='intrinsic'
                    alt='accessories'
                    src='/pic/accessories/moss2.jpg'
                    width={365}
                    height={164}
                    quality='100'
                />
            </div>
            <h3>
                <p className={styles.stress}>Укриття</p>
                <p>
                    Змії потрібне укриття в холодному куті, щоб вона там ховалась для уникнення стресу.
                    В укриття можна покласти мох, він м’який та добре тримає вологу.                    
                </p>
                <p>
                    По одному укритті для полоза можете поставити у холодному та в теплому куті,
                    щоб за потреби він переповзав туди, де йому буде комфортніше.
                    Укриття не повинне бути дуже великим тому, що маїси полюбляють щільно прилягати до стін.
                </p>
            </h3>
            <div>
                <Image                            
                    layout='intrinsic'
                    alt='accessories'
                    src='/pic/accessories/shelter1.jpg'
                    width={306}
                    height={163}
                    quality='100'
                />
                <Image                            
                    layout='intrinsic'
                    alt='accessories'
                    src='/pic/accessories/shelter2.jpg'
                    width={306}
                    height={163}
                    quality='100'
                />
                <Image                            
                    layout='intrinsic'
                    alt='accessories'
                    src='/pic/accessories/shelter3.jpg'
                    width={306}
                    height={163}
                    quality='100'
                />
            </div>
            <h3>
                <p className={styles.stress}>Напувалка/басейн</p>
                <p>
                    У жодному разі напувалка не має стояти у теплому куті, бо вона не повинна нагріватися.
                    Якщо змія не вилазить із басейну, то це означає, що їй спекотно.
                    Таким чином вона охолоджує своє тіло.
                    Обов’язково подивіться на термометр, скоріш за все температура зависока.
                </p>
                <p>
                    Напувалка повинна бути важкою, щоб змія її не перегорнула.
                </p>
            </h3>
            <div>
                <Image                            
                    layout='intrinsic'
                    alt='accessories'
                    src='/pic/accessories/pool.jpg'
                    width={502}
                    height={247}
                    quality='100'
                />
            </div>
            <h3>
                <p className={styles.stress}>Термометр-гігрометр (два в одному)</p>
                <p>
                    Бувають механічні та електронні.
                    Вибирайте краще електронний, він більш точний та довше служить.
                    І пам’ятайте, що якісний термометр-гігрометр не продається за безцінок.
                </p>
            </h3>
            <div>
                <Image                            
                    layout='intrinsic'
                    alt='accessories'
                    src='/pic/accessories/termo1.png'
                    width={218}
                    height={223}
                    quality='100'
                />
                <Image                            
                    layout='intrinsic'
                    alt='accessories'
                    src='/pic/accessories/termo2.png'
                    width={218}
                    height={223}
                    quality='100'
                />                
            </div>
        </PageContainer>
    );
}