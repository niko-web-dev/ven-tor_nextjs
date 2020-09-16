import BackButton from "../../../../../components/BackBtn/BackButton";
import PhoneButton from "../../../../../components/PhoneButton/PhoneButton";

export default function RestoranMontag() {
  return (
      <div className="montag bg price_styles">

        <div className='price_styles_wrap'>
          <span> - монтаж фреоновой магистрали - от 900 за 1мп</span>
          <span> - монтаж настенной сплит системы - от 9000</span>
          <span> - монтаж кассетного кондиционера - от 14000</span>
          <span> - монтаж "зимнего" пакета для кондиционера - от 4900</span>
          <button>Получить полный прайс</button>

          <div className="btn_bottom">
            <BackButton />
            <PhoneButton />
          </div>
        </div>
      </div>
  )
}
