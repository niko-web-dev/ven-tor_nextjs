import BackButton from "../../../../../components/BackBtn/BackButton";
import PhoneButton from "../../../../../components/PhoneButton/PhoneButton";

export default function RestoranMontag() {
  return (
      <div className="montag bg price_styles">

        <div className='price_styles_wrap'>
          <span> - Монтаж воздуховодов - от 450р за м2</span>
          <span> - Монтаж приточновытяжной установки - от 10000</span>
          <span> - Монтаж вентилятора - от 3000</span>
          <span> - Монтаж частотного регулятора - от 4500</span>
          <button>Получить полный прайс</button>
          
          <div className="btn_bottom">
            <BackButton />
            <PhoneButton />
          </div>
        </div>
      </div>
  )
}




