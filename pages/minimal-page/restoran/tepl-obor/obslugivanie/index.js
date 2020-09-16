import BackButton from "@/components/BackBtn/BackButton";
import PhoneButton from "@/components/PhoneButton/PhoneButton";


export default function TeplOborObslugivanie() {
  return (
      <div className="proetirovenie bg price_styles">
        
        <div className='price_styles_wrap'>
          <span> - плановое обслуживание вакуумника - от 3500 </span>
          <span> - комплеское техническое обслуживание теплового оборудования вашей кухни - от 9000 </span>
          <button>Получить полный прайс</button>
        </div>
        

        <div className="btn_bottom">
          <BackButton />
          <PhoneButton />
        </div>

      </div>
  )
}