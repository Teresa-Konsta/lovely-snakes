import Image from "next/image";
import PageContainer from "../components/UI/PageContainer";

export default function Lifehacks() {
    return(
        <PageContainer>
            <h2>Лайфхаки та Поради</h2>
            <h3>
                <p>
                    Щоб не вмикати і вимикати освітлення/обігрів у тераріумі кожного ранку і вночі, купіть таймер-розетку.
                    Налаштуйте його на 12 годин і вам не треба буде слідкувати за світловим режимом.
                    Таймер-розетку не купуйте в зоомагазинах, бо там вона дуже дорога тільки тому, що вона зроблена “спеціально”для тварин.
                    Але це ж просто таймер, це просто маркетинговий хід. Купуйте у звичайному магазині або в інтернеті.
                    Тоді її ціна буде у три рази менше.
                </p>
            </h3>
            <div>
                <Image                            
                    layout='intrinsic'
                    alt='lifehacks'
                    src='/pic/lifehacks/lifehacks1.png'
                    width={151}
                    height={233}
                    quality='100'
                />
                <Image                            
                    layout='intrinsic'
                    alt='lifehacks'
                    src='/pic/lifehacks/lifehacks2.png'
                    width={213}
                    height={233}
                    quality='100'
                />
                <Image                            
                    layout='intrinsic'
                    alt='lifehacks'
                    src='/pic/lifehacks/lifehacks3.png'
                    width={155}
                    height={233}
                    quality='100'
                />
            </div>
        </PageContainer>
    );
}