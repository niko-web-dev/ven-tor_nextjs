import BackButton from "@/components/BackBtn/BackButton";
import PhoneButton from "@/components/PhoneButton/PhoneButton";


export default function HolodRemont() {
  return (
      <div className="proetirovenie bg price_styles">
        
        <div className='price_styles_wrap '>
          <span> - выезд специалиста на диагностику - 2900 </span>
          <span> - замена компрессора - от 3500</span>
          <span> - замена контроллера - от 1500</span>
          <span> - замена</span>
          <button>Получить полный прайс</button>
        </div>

        <div className="btn_bottom">
          <BackButton />
          <PhoneButton />
        </div>

      </div>
  )
}