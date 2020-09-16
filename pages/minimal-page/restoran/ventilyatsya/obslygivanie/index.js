import BackButton from "../../../../../components/BackButton";
import PhoneButton from "../../../../../components/PhoneButton";


export default function RestoranObslygivanie() {
  return (
      <div className="proetirovenie bg price_styles">
        
        <div className='price_styles_wrap'>
          <span> - Очистка вытяжки от жировых отложений - от  14000 </span>
          <span> - Замена фильтра приточной установки - от 1500</span>
          <span> - Полное техническое обслуживание приточно-вытяжной системы - от 6000</span>
          <span> - Дезинфекция приточной системы - от 10000</span>
          <button>Получить полный прайс</button>
        </div>

        <div className="btn_bottom">
          <BackButton />
          <PhoneButton />
        </div>

      </div>
  )
}