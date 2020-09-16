import BackButton from "@/components/BackButton";
import PhoneButton from "@/components/PhoneButton";


export default function TeplOborRemont() {
  return (
      <div className="proetirovenie bg price_styles">
        
        <div className='price_styles_wrap'>
          <span> - замена нагревающего элемента электрической плиты - от 7900 </span>
          <span> - ремонт платы пароконвектомата - от 6900</span>
          <span> - ремонт посудомоечной машины  - от 3600</span>
          <span> - выезд специалиста на диагностику - от 2900</span>
          <button>Получить полный прайс</button>
        </div>

        <div className="btn_bottom">
          <BackButton />
          <PhoneButton />
        </div>

      </div>
  )
}