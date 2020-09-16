import BackButton from "@/components/BackButton";
import PhoneButton from "@/components/PhoneButton";

export default function BeerSystemMontag() {
  return (
      <div className="montag bg price_styles">

        <div className='price_styles_wrap '>
          <span> - сбока пивной системы под ключ - от 49000</span>
          <span> - монтаж пивного крана - 1500</span>
          <span>  - монтаж пивной магиастрали - от 450р за мп</span>
          <button>Получить полный прайс</button>

          <div className="btn_bottom">
              <BackButton />
              <PhoneButton />
          </div>
        </div>
        
      </div>
  )
}