import Image from "next/image";
import PageContainer from "../components/UI/PageContainer";

export default function Accessories() {
    return(
        <PageContainer>
            <h2>Декор та Обладнання</h2>
            <h3>
                <p>Декор</p>
                <p>
                    На ваш смак, бо змії все одно. Але, якщо поставити якусь колоду, то змія буде легше линяти, бо буде чіплятись шкуркою.
                </p>
                <p>
                    Не садіть маленьку змію одразу в великий тераріум. Нехай спершу посидить у контейнері на 15-30л, не більше.
                    У великому тераріумі маленька змія може відчувати великий стрес і відмовлятись від їжі.
                    Пересадити можна буде десь через півроку — рік.
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
                    src='/pic/accessories/wood1.png'
                    width={320}
                    height={242}
                    quality='100'
                />
                <Image                            
                    layout='intrinsic'
                    alt='accessories'
                    src='/pic/accessories/wood2.png'
                    width={358}
                    height={227}
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
                    src='/pic/accessories/moss1.png'
                    width={230}
                    height={268}
                    quality='100'
                />
                <Image                            
                    layout='intrinsic'
                    alt='accessories'
                    src='/pic/accessories/moss2.jpg'
                    width={268}
                    height={268}
                    quality='100'
                />
                <Image                            
                    layout='intrinsic'
                    alt='accessories'
                    src='/pic/accessories/moss3.png'
                    width={218}
                    height={268}
                    quality='100'
                />
            </div>
            <h3>
                <p>Укриття</p>
                <p>
                    По одному укритті для полоза можете поставити у холодному та в теплому куті,
                    щоб за потреби він переповзав туди, де йому буде комфортніше.
                    Укриття не повинне бути дуже великим, щоб змія не відчувала стрес.
                </p>
            </h3>
            <div>
                <Image                            
                    layout='intrinsic'
                    alt='accessories'
                    src='/pic/accessories/shelter1.png'
                    width={231}
                    height={156}
                    quality='100'
                />
                <Image                            
                    layout='intrinsic'
                    alt='accessories'
                    src='/pic/accessories/shelter2.png'
                    width={256}
                    height={147}
                    quality='100'
                />
            </div>
            <h3>
                <p>Напувалка/басейн</p>
                <p>
                    Ні в якому разі напувалка не повинна стояти у теплому куті.
                    Якщо змія не вилазить із басейну, то це означає, що їй спекотно.
                    Таким чином вона охолоджує своє тіло.
                    Обов’язково подивіться на термометр, можливо температура зависока.
                </p>
                <p>
                    Напувалка повинна бути важкою, щоб змія її не перегорнула.
                </p>
            </h3>
            <div>
                <Image                            
                    layout='intrinsic'
                    alt='accessories'
                    src='/pic/accessories/pool.png'
                    width={259}
                    height={180}
                    quality='100'
                />
            </div>
            <h3>
                <p>Термометр-гігрометр (два в одному)</p>
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
                    src='/pic/accessories/termo1.jpg'
                    width={183}
                    height={181}
                    quality='100'
                />
                <Image                            
                    layout='intrinsic'
                    alt='accessories'
                    src='/pic/accessories/termo2.png'
                    width={132}
                    height={183}
                    quality='100'
                />                
            </div>
        </PageContainer>
    );
}