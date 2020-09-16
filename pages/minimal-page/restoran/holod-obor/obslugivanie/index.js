import BackButton from "@/components/BackButton";
import PhoneButton from "@/components/PhoneButton";


export default function RestoranObslygivanie() {
  return (
      <div className="proetirovenie bg price_styles">

        <div className='price_styles_wrap'>
          <span> - Чистка теплообменника - от 1500 </span>
          <span> - чистка теплообменника и испарителя, дозаправка фреоном - от 2500</span>
          <button>Получить полный прайс</button>
        </div>

        <div className="btn_bottom">
          <BackButton />
          <PhoneButton />
        </div>

      </div>
  )
}