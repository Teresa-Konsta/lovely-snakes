import Image from "next/image";
import PageContainer from "../components/UI/PageContainer";

export default function Feeding() {
    return(
        <PageContainer>
            <h2>Годування</h2>
            <h3>
                <p>
                    Раціон маїсового полоза — це миші. Розмір миші повинен бути не більше найтовщої частини змії.
                    Краще давати попередньо вбиту мишу, бо якщо вона вкусить, змія може і захворіти, і померти від бактерій та загноєння рани.
                    Розморожувати мишу треба не в гарячій воді, а в теплій.
                    Не годувати змію на руках. Після того, як змія поїла — не чіпати її 72 години, тобто три дні, оскільки вона може зригнути з&#39;їдене.
                </p>
                <p>
                    Якщо змія зригнула їжу, то не годуйте 10 днів, а потім дайте мишу в два рази меншу, ніж завжди.
                    Якщо змія зригнула ще раз, то швидко до лікаря!
                </p>
                <p>
                    Маленька змія їсть раз на 4-5 днів. Потім по мірі зростання годувати треба рідше. Десь до 5ти місяців годуйте змію на 5 день.
                    Потім — на 6ий день. Від року на-7-8 і тд.
                    Якщо ви бачите, що корм змія бере не охоче, то годуйте трохи рідше.
                    Доросла змія їсть раз у 10-14 днів.
                    Активно росте полоз перші три роки, а потім ще підростає, але повільно.
                </p>
                <p>
                    Змія може відмовитись від їжі. Скоріш за все, це означає, що вона буде линяти. Згодом в неї помутніють очі і вона стане бляклою.
                    Та незабаром очі знову просвітліють, і це буде означати, що скоро змія перелиняє.
                    Під час линяння вологість повинна бути трохи більшою, ніж зазвичай.
                </p>
                <p>
                    У період линяння змію <span>НЕ</span> можна чіпати та годувати.
                    Вона перелиняє максимум за 10 днів.
                    Шкурка повинна зійти цілою.
                    Якщо вона сходить шматками, то це може бути ознакою хвороби змії або в тераріумі вологість була недостатньою для зручного линяння.
                    Якщо полоз погано линяє на постійній основі — негайно до лікаря!
                    Після линяння можна годувати на наступний день, або через день.
                </p>
                <p>
                    Ожиріння! Як побачити та не довести до такого.
                </p>
                <p>
                    Якщо ви помітили, що у змії перехід від тулуба до хвоста став дуже різким, то садіть її на дієту, тобто почніть годувати рідше.
                    Але не одразу, а поступово.
                    Якщо не йдеться про вагітну самку, зад не повинен бути товще переда.
                    Збільшення товщини до хвоста – ознака того, ще ви перегодували змію.
                    Також при ожирінні луска розсувається і між нею починає проглядати шкіра.
                    Пам’ятайте — краще недогодувати, ніж перегодувати!
                </p>
            </h3>
            <div>
                <Image                            
                    layout='intrinsic'
                    alt='feeding'
                    src='/pic/lin1.jpg'
                    width={549}
                    height={365}
                    quality='100'
                />
            </div>
        </PageContainer>
    );
}