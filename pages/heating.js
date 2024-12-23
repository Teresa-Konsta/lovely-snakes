import Image from "next/image";
import PageContainer from "../components/UI/PageContainer";
import styles from '../components/UI/PageContainer.module.css';

export default function Heating() {
    return(
        <PageContainer>
            <h2>Обігрів</h2>
            <h3>
                <p>
                    Рекомендую використовувати нагрівальну лампу (наприклад, інфрачервону) або термокилим.
                    Ультрафіолетова лампа <span>НЕ</span> потрібна. У тераріумі повинен бути теплий кут (з нагрівальною лампою) і холодний.
                    У точці нагріву оптимальна температура 27º-30ºС. У холодному куті температура буде близько 24-26ºС, за нею можна не слідкувати.&nbsp;
                    <span>У точці нагріву на рівні змії</span> потрібно розмістити термометр-гігрометр для слідкування за температурою та вологістю.
                    Оптимальна вологість 50-70%.
                    Для підтримання вологості треба обприскувати тераріум з розпилювача.
                    На ніч (тобто на 12 годин) обігрів (і світло) вимикається. Але температура вночі не повинна опускатись нижче 18ºС.
                </p>
                <p>
                    Як вибрати лампу нагріву і скільки потрібно ват? 
                </p>
                <p>
                    На яку потужність взяти лампу нагріву впливає:<br/>
                    - температура в приміщенні, де стоїть тераріум;<br/>
                    - висота тераріуму, тобто відстань від лампи до дна тераріуму.
                </p>
                <p>
                    Приклади ламп: інфрачервоні, керамічні, галогенні.
                </p>
                <p>
                    Рекомендую та використовую інфрачервону.
                    Проти галогенних нічого поганого не скажу, а от керамічні не сподобались.
                    Вони важкі, та дуже сильно нагріваються самі, а от тепла від них менше.
                </p>
                <p>
                    Розберемо вати (W) — тобто потужність. Лампа буває на 35, 50, 75, 100, 150, 200, 250 ват.
                </p>
                <p className={styles.stress}>
                    То яку ж вибрати?
                </p>
                <p>
                    Насправді це зовсім не важко.
                    Коли ви вибираєте лампу, то на упаковці намальована шкала з інформацією,
                    яку температуру буде давати лампа при різній висоті, на якій лампа буде висіти.
                    Наприклад, ось така шкала:
                </p>
            </h3>
            <div>
                <Image                            
                    layout='intrinsic'
                    alt='heating'
                    src='/pic/heating/scale.jpg'
                    width={663}
                    height={512}
                    quality='100'
                />
            </div>
            <p>
                Source:&nbsp;
                <a href="https://www.reptilienkosmos.de/en/exo-terra-ceramic-heater-ceramic-heater-for-terrariums_178_3233">
                    reptilienkosmos.de
                </a>
            </p>
            <h3>
                <p>
                    На фото ми бачимо, що, наприклад, лампа на 100 ват на висоті 40 см дає температуру 27ºС.
                </p>
                <p>
                    Але це все приблизна інформація, бо є ще один фактор, який впливає на температуру в тераріумі.
                    І це температура повітря в самому приміщенні.
                    Якщо в кімнаті температура 25ºС, то в тераріумі інфрачервона лампа на 100 ват дасть близько 32ºС, що вже забагато. 
                </p>
                <p>
                    Особисто в мене інфрачервона лампа на 75 ват на висоті 60 см дає 29ºС при температурі 24ºС у кімнаті.
                    Влітку, коли температура в кімнаті 28ºС, я взагалі не вмикаю обігрів. А взимку беру лампи на 100-150 ват.
                    Коли вмикаєте лампу, то почекайте мінімум годину, щоб вона розігрілася, і вже потім ви будете розуміти точну температуру,
                    яка буде триматися весь день.
                </p>
                <p>
                    З першого разу можна помилитися з вибором лампи, але не панікуйте.
                    Купіть і більш потужну, і менш потужну, бо взимку температура в приміщенні буде нижчою, і тоді вам потрібна буде більш потужна лампа.
                </p>
                <p className={styles.stress}>
                    Плафони для лампи нагріву
                </p>
                <p>
                    Плафони бувають різних розмірів та з різним обмеженням щодо потужності ламп.
                    Та це все написано на упаковці, тож при виборі ви не помилитесь. 
                </p>
                <p>
                    На щастя є ще така штука, яка називається кронштейн, на яку ви будете кріпити плафон для лампи нагріву.
                    Він продається окремо і не йде в комплекті з плафоном.
                    Завдяки йому ви зможете регулювати висоту плафону з лампою нагріву, а отже і трохи температуру в тераріумі.
                </p>
            </h3>
            <div>
                <Image                            
                    layout='intrinsic'
                    alt='heating'
                    src='/pic/heating/bracket1.png'
                    width={193}
                    height={212}
                    quality='100'
                />
                <Image                            
                    layout='intrinsic'
                    alt='heating'
                    src='/pic/heating/bracket2.png'
                    width={479}
                    height={212}
                    quality='100'
                />
            </div>            
            <h3>                
                <p className={styles.stress}>
                    Важливо!
                </p>
                <p>
                    Лампу для нагріву розмістіть ззовні тераріуму.
                    Якщо вона буде всередині — змія обпалиться.
                </p>
                <p>
                    Існують ще такі світильники (плафони):
                </p>
            </h3>
            <div>
                <Image                            
                    layout='intrinsic'
                    alt='heating'
                    src='/pic/heating/lamp1.png'
                    width={165}
                    height={103}
                    quality='100'
                />
                <Image                            
                    layout='intrinsic'
                    alt='heating'
                    src='/pic/heating/lamp2.png'
                    width={664}
                    height={103}
                    quality='100'
                />
            </div>
            <h3>
                <p>
                    Та вони не призначені для ламп розжарювання! Вони розраховані для ультрафіолетових ламп
                    та ламп денного світла, які майже не нагріваються.
                    Якщо не хочете спалити такий світильник — не використовуйте його для лампи накалювання.
                    А от, якщо захочете придбати лампу денного світла (до 26W), тоді сміливо використовуйте саме цей світильник.
                </p>
            </h3>
        </PageContainer>
    );
}