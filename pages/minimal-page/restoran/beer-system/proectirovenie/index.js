import BackButton from "@/components/BackBtn/BackButton";
import PhoneButton from "@/components/PhoneButton/PhoneButton";


export default function BeerSystmProectirovenie() {
  return (
      <div className="proetirovenie bg price_styles">
        <div className='price_styles_wrap '>
          <span> - проектно изыскательные работы по вашему ТЗ - от 5000 </span>
          <span> - подбор и поставка оборудования - от 19000</span>
          <button>Получить полный прайс</button>
        </div>
        
        <div className="btn_bottom">
          <BackButton />
          <PhoneButton />
        </div>

      </div>
  )
}