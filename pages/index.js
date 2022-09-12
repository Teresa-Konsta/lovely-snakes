import Image from 'next/image';
import PageContainer from '../components/UI/PageContainer';

export default function Home() {
  return (      
    <PageContainer>
      <div>
        <Image                            
          layout='intrinsic'
          alt='intro'
          src='/pic/intro/intro1.jpg'
          width={699}
          height={377}
          quality='100'
        />
      </div>
      <h3>
        <p>
          Маїсовий полоз (Pantherophis guttatus) — найпростіша у догляді змія.
          Максимальний розмір полоза — 150 см, хоча інколи трапляються навіть двохметрові екземпляри, але це вже рідкість.
          Живуть маїси до 15-20 років, але це тільки при хороших умовах домашнього утримання.
          Ця неотруйна змія зачаровує своїм різноманіттям морф, спокійною поведінкою та дуже терплячим ставленням до людини.
        </p>
        <p>
          Маїса можна утримувати як і одного в тераріумі, так і парами або групою з одного самця і декількох самок.
          Але за умовою, що вони спокійно себе ведуть і не агресивні один до одного.
        </p>
      </h3>
      <div>
        <Image                            
          layout='intrinsic'
          alt='intro'
          src='/pic/intro/intro2.png'
          width={546}
          height={295}
          quality='100'
        />
      </div>
      <h3>
        <p>
          Який сенс заводити змію?
        </p>
        <p>
          У першу чергу, змія — це естетика. По-друге, досить зручна рептилія.
          Вона німа, глуха, сама по собі не має запаху, їсть рідко, не потребує вашої уваги,
          в неї немає почуттів, а тому й сумувати за вами не буде.
          Взагалі, змій не потрібно дуже часто брати на руки, щоб вони не відчували стресу.
          Для людини, яка не має багато вільного часу, змія — це найзручніша тварина, а особливо така невибаглива, як маїсовий полоз.
        </p>
        <p>
          Так, любити вас змія не буде. Ніколи.
          У змій занадто простий мозок для любові й будь-яких почуттів.
          Для неї ви — тепле живе дерево і більше нічого.
          На емоційну віддачу у плані почуттів не розраховуйте.
          Тому віддавайте їй свою любов без користі, нічого не вимагаючи натомість.
          І така чудова змія, як маїсовий полоз, буде зачаровувати вас приємним дотиком, своєю красою та естетикою.
        </p>
      </h3>
      <div>
        <Image                            
          layout='intrinsic'
          alt='intro'
          src='/pic/intro/intro3.jpg'
          width={362}
          height={364}
          quality='100'
        />
      </div>
    </PageContainer>
  )
}
