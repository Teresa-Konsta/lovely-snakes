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
                    Змії потрібне укриття в холодному куті, щоб вона там ховалась для уникнення стресу.
                    В укриття можна покласти мох, він м’який та добре тримає вологу.
                    Також у холодному куті ставлять ємність з водою, в яку змія повинна повністю поміститися. Воду міняти раз у день.
                    Вона повинна бути питна (найкраща - фільтрована).
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
                    width={225}
                    height={285}
                    quality='100'
                />
                <Image                            
                    layout='intrinsic'
                    alt='filling'
                    src='/pic/filling/filling2.png'
                    width={241}
                    height={285}
                    quality='100'
                />
                <Image                            
                    layout='intrinsic'
                    alt='filling'
                    src='/pic/filling/filling3.png'
                    width={234}
                    height={285}
                    quality='100'
                />
                <Image                            
                    layout='intrinsic'
                    alt='filling'
                    src='/pic/filling/filling4.png'
                    width={225}
                    height={285}
                    quality='100'
                />
            </div>
        </PageContainer>
    );
}