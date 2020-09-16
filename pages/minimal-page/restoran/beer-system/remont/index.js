import BackButton from "@/components/BackButton";
import PhoneButton from "@/components/PhoneButton";

export default function BeerSystemRemont() {
  return (
      <div className="proetirovenie bg price_styles">
        
        <div className='price_styles_wrap '>
          <span> - выезд специалиста на диагностику - 2900 </span>
          <span> - замена пивного крана - от 2600</span>
          <span> - ремонт пивного охладителя  - от 3700</span>
          <button>Получить полный прайс</button>
        </div>

        <div className="btn_bottom">
          <BackButton />
          <PhoneButton />
        </div>

      </div>
  )
}