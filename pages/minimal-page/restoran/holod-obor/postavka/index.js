import BackButton from "@/components/BackBtn/BackButton";
import PhoneButton from "@/components/PhoneButton/PhoneButton";

export default function Postavka() {
  return (
      <div className="montag bg price_styles">
        <div className='price_styles_wrap '>
          <span> - холодильный стол  - от ******</span>
          <span> - морозильная камера  - от ****</span>
          <span> - поставка и запуск в эксплуатацию - 5000</span>
          <button>Получить полный прайс</button>
        
          <div className="btn_bottom">
            <BackButton />
            <PhoneButton />
          </div>
        </div>
      </div>
  )
}