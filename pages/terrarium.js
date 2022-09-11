import Image from "next/image";
import PageContainer from "../components/UI/PageContainer";

export default function Terrarium() {
    return(
        <PageContainer>
            <h2>Тераріум</h2>
            <h3>
                <p>
                    Мінімальний розмір 60х40х40. Обов’язково горизонтального типу.
                    Дуже великий тераріум теж не потрібен. Оптимальний розмір 70(або 80)х40х40 (чи 45-50, не важливо).
                </p>
                <p>
                    Замість тераріуму можна використовувати харчовий контейнер,
                    але тоді в ньому потрібно буде зробити <span>правильну проточну вентиляцію</span>.
                    Дивіться, щоб дірки були не такі великі, щоб змія змогла втекти. Якщо голова пролізе — пролізе і змія.
                    Приклад проточної вентиляції на фото:
                </p>
            </h3>
            <div>
                <Image                            
                    layout='intrinsic'
                    alt='terrarium'
                    src='/pic/terrarium/terrarium1.png'
                    width={258}
                    height={175}
                    quality='100'
                />
                <Image
                    layout='intrinsic'
                    alt='terrarium'
                    src='/pic/terrarium/terrarium2.png'
                    width={225}
                    height={224}
                    quality='100'
                />
            </div>            
        </PageContainer>
    );
}