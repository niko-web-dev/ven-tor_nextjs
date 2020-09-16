import BackButton from "@/components/BackButton";
import PhoneButton from "@/components/PhoneButton";

export default function Raschot() {
  return (
      <div className="montag bg price_styles">
        <div className='price_styles_wrap '>
          <span> - Расчет производственной необходимости - от 15000</span>
          <button>Получить полный прайс</button>
          <div className="btn_bottom">
            <BackButton />
            <PhoneButton />
          </div>
        </div>
      </div>
  )
}