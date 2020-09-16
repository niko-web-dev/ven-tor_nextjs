import BackButton from "../../../../../components/BackButton";
import PhoneButton from "../../../../../components/PhoneButton";


export default function RestoranRemont() {
  return (
      <div className="proetirovenie bg price_styles">
        
        <div className='price_styles_wrap'>
          <span> - Выезд специалиста на диагностику - 2900 </span>
          <span> - Срочная замена вентилятора - от 25000</span>
          <span> - Замена или ремонт обогревателя/охладителя притока - от 10000</span>
          <button>Получить полный прайс</button>
        </div>

        <div className="btn_bottom">
          <BackButton />
          <PhoneButton />
        </div>

      </div>
  )
}