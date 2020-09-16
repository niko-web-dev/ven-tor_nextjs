import BackButton from "@/components/BackButton";
import PhoneButton from "@/components/PhoneButton";


export default function TeplOborRaschet() {
  return (
      <div className="proetirovenie bg price_styles">
        
        <div className='price_styles_wrap'>
          <span> - от 15000 выезд специалиста на диагностику - 2900 </span>
          <button>Получить полный прайс</button>
        </div>

        <div className="btn_bottom">
          <BackButton />
          <PhoneButton />
        </div>

      </div>
  )
}