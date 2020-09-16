import BackButton from '@/components/BackButton'
import PhoneButton from '@/components/PhoneButton'

export default function Skud() {
  return (
    <div className="skud main-page">
      <div className="main">
      <h2 className='test-title'>
        Наша компания временно не занимается проектированием и монтажом СКУД, но мы знаем к кому обратиться.
        и ниже форма для обратной связи
      </h2>
      </div>
      <div className="btn_bottom">
        <BackButton />
        <PhoneButton />
        </div>
      <style jsx>{`

        .main-page {
          background-image: url('/assets/images/main-bg.jpg');
          height: 100vh;
          overflow: hidden;
        
        }
        .test-title{
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -100%);
          margin: 0;
      }
      .
       `}</style>
  </div>
  )
}