import Image from "next/image";
import PageContainer from "../components/UI/PageContainer";

export default function Reproduction() {
    return(
        <PageContainer>
            <h2>Сплячка</h2>
            <h3>
                <p>
                    Маїсів можна не вводити у сплячку, особливо маленьких.
                    Загалом, змій вводять у сплячку для хорошої репродуктивності.
                    Але маїсові полози прекрасно розмножуються і так, тому перепад температур для них можна і не робити.
                </p>
            </h3>
            <h2>Розмноження</h2>
            <h3>
                <p>
                    Маїсові полози можуть розмножуватись уже у віці 2-3 років.
                    Після спарювання, коли буде видно, що самка завагітніла, потрібно її добре годувати, можливо, трохи частіше ніж зазвичай.
                    Спарюватись маїси починають на весні.
                    За рік може бути дві кладки у період пізня весна - рання осінь.
                </p>
                <p>
                    Вагітність полоза триває 36-38 днів. За дві неділі до відкладання яєць, самка може перестати їсти, як би довго ви не пропонували їй мишей.
                    Залиште її у спокої, вона буде їсти до тих пір, поки не відкладе яйця.
                    Незадовго до відкладання, самка буде активно шукати вологе та затишне місце, де б вона змогла відкласти яйця.
                    Обов’язково влаштуйте їй це. Покладіть їй добру купку моху, наприклад сфагнума, і вона швидко в ньому освоїться.
                    Після відкладання самка не буде їсти деякий час і це нормально, просто дайте їй прийти до тями і, коли прийде час, вона сама вилізе з моху для пошуку їжі.
                    Тоді й годуйте її, та не забувайте, що після кладки їй потрібно багато сил на відновлення, тому ні в якому разі не давайте їй голодувати.
                </p>
                <p>
                    Після відкладання заберіть яйця в інкубатор.
                    Купувати його не обов’язково, можна зробити власноруч.
                    Вологість в інкубаторі повинна триматись від 75% до 90% на постійній основі.
                    А температура - 27-29ºС. На ніч обігрів <span>НЕ</span> вимикається.
                    Майте на увазі, що не всі яйця можуть бути запліднені, деякі з них можуть бути жировики.
                    Але це стане зрозумілим, коли в інкубаторі через деякий час вони пропадуть.
                </p>
                <p>
                    Найкращий наповнювач для інкубатора — вермикуліт.
                    Перед тим, як покласти у вермикуліт яйця, його треба змочити у воді та вижати, щоб він був досить вологий, але не мокрий.
                    Зробіть у ньому невеликі лунки та помістіть в них яйця не більш ніж на 2/3.
                    Ні в якому разі не закопуйте їх глибше, це не потрібно.
                </p>
                <p>
                    Період інкубації — 60 - 65 днів.
                    Після вилуплення маленьких маїсів, розмістіть їх по завчасно підготовлених контейнерах та чекайте до двох тижнів поки вони не перелиняють.
                    Тільки після линяння їх можна почати годувати найменшими голими мишками (одноденними голишами).
                </p>
            </h3>
            <div>
                <Image                            
                    layout='intrinsic'
                    alt='reproduction'
                    src='/pic/reproduction/reproduction.png'
                    width={319}
                    height={446}
                    quality='100'
                />
            </div>
            <h3>
                <p>
                    Є вірогідність, що малеча не з першого разу буде їсти успішно.
                    Маленькі полози можуть відмовлятись від мишки. Тому можете пропонувати і розморожену, і живу.
                    Також, якщо мишка мертва, то спробуйте надрізати їй череп для запаху, це може спровокувати змію все ж таки поїсти.
                    Також не всі одразу будуть брати мишку з пінцету.
                    Спершу спробуйте покласти мишку в контейнер до маїса на ніч, можливо зранку її вже там не побачите.
                </p>
                <p>
                    Без наслідків для здоров’я, голодувати маленькі маїсові полози можуть до трьох тижнів.
                    Тому, якщо вже минув місяць, а змія так і не поїла — годуйте насильно.
                    Як це робити, можна подивитись на платформі youtube або проконсультуйтеся у лікаря-герпетолога.
                </p>
                <p>
                    Оскільки маїсовий полоз більш активний увечері та вночі, пропонуйте давати корм саме в пізню годину.
                    Так змія може краще зреагувати і більш вірогідно, що не відмовиться від мишки.
                </p>
            </h3>
            <div>
                <Image                            
                    layout='intrinsic'
                    alt='reproduction'
                    src='/pic/reproduction/albino.jpg'
                    width={327}
                    height={351}
                    quality='100'
                />
                <Image                            
                    layout='intrinsic'
                    alt='reproduction'
                    src='/pic/reproduction/bubble.png'
                    width={327}
                    height={351}
                    quality='100'
                />
            </div>
        </PageContainer>
    );
}