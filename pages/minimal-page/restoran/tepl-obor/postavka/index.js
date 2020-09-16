import BackButton from "@/components/BackBtn/BackButton";
import PhoneButton from "@/components/PhoneButton/PhoneButton";


export default function TeplOborPostavka() {
  return (
      <div className="proetirovenie bg price_styles">
        
        <div className='price_styles_wrap'>
          <span> - Хоспер - от 148000 </span>
          <span> - Плита индукционная - от 14900 </span>
          <span> - Пароконвектомат - от 490000</span>
          <button>Получить полный прайс</button>
        </div>

        <div className="btn_bottom">
          <BackButton />
          <PhoneButton />
        </div>

      </div>
  )
}