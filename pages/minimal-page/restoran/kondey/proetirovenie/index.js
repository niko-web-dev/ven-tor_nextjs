import BackButton from "../../../../../components/BackBtn/BackButton";
import PhoneButton from "../../../../../components/PhoneButton/PhoneButton";


export default function KondeyProectirovenie() {
  return (
      <div className="proetirovenie bg price_styles">
        
        <div className='price_styles_wrap'>
          <span> - Разработка проекта ОВиК - от 15000 </span>
          <span> - проектно изыскательные работы - от 10000</span>
          <span> - Изготовление проекта по имеющимся системам - от 17000</span>
          <button>Получить полный прайс</button>
        </div>

        <div className="btn_bottom">
          <BackButton />
          <PhoneButton />
        </div>

      </div>
  )
}