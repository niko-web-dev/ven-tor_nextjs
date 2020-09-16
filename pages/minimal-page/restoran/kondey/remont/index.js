import BackButton from "../../../../../components/BackButton";
import PhoneButton from "../../../../../components/PhoneButton";


export default function KondeyRemont() {
  return (
      <div className="proetirovenie bg price_styles">

        <div className='price_styles_wrap'>
          <span> - выезд специалиста на диагностику - 2900 </span>
          <span> - замена компрессора  - от 6000</span>
          <span> - заправка фреоном (до 1кг) - 2500</span>
          <span> - ремонт трассы хладагента - от 2000</span>
          <button>Получить полный прайс</button>
        </div>

        <div className="btn_bottom">
          <BackButton />
          <PhoneButton />
        </div>

      </div>
  )
}