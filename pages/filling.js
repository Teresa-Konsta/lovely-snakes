'use client'
import Image from "next/image";
import PageContainer from "../components/UI/PageContainer";

export default function Filling() {
    return(
        <PageContainer>
            <h2>Наповнення тераріуму</h2>
            <h3>
                <p>
                    Кора, субстрат для рептилій, кокосова стружка — цілком підходить.
                    Головне — купити її в зоомагазині, а не набрати з вулиці.
                    Не можна використовувати кедрову тирсу, оскільки вона отруйна для змій.
                </p>                
                <p>
                    Субстрат/наповнювач:
                    кокосовий субстрат, букова кора, інші субстрати (стружка, кора), спеціальні для рептилій.
                    Прибирайте за полозом локально, але раз на півроку повністю змінюйте субстрат на свіжий.
                </p>
            </h3>
            <div>
                <Image                            
                    layout='intrinsic'
                    alt='filling'
                    src='/pic/filling/filling1.jpg'
                    width={338}
                    height={178}
                    quality='100'
                />
                <Image                            
                    layout='intrinsic'
                    alt='filling'
                    src='/pic/filling/filling2.jpg'
                    width={338}
                    height={178}
                    quality='100'
                />
                <Image                            
                    layout='intrinsic'
                    alt='filling'
                    src='/pic/filling/filling3.jpg'
                    width={338}
                    height={178}
                    quality='100'
                />
            </div>
        </PageContainer>
    );
}