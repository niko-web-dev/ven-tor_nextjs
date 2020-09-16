import BackButton from "@/components/BackBtn/BackButton";
import PhoneButton from "@/components/PhoneButton/PhoneButton";

export default function BeerSystemObslugivanie() {
  return (
      <div className="proetirovenie bg price_styles">
        <div className='price_styles_wrap'>
          <span> - Промыка пивной системы - от 330 за 1 сорт </span>
          <span> - Полное техническхое обслуж\ивание всех узлов пивной системы - от 7000</span>
          <span> - Техническое обслужвиание пивного охладителя  - 2500</span>
          <button>Получить полный прайс</button>
        </div>

        <div className="btn_bottom">
          <BackButton />
          <PhoneButton />
        </div>

      </div>
  )
}