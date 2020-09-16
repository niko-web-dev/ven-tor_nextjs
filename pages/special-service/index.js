import BackButton from '../../components/BackBtn/BackButton'
import PhoneButton from '../../components/PhoneButton/PhoneButton'

export default function SpecialService() {
  return (
      <div className="your_teh_slugba bg">
        <div className="main">
          <img className='your_teh_slugba_img' src='../assets/images/special-service.png'></img>
        </div>
        
        <div className="btn_bottom">
          <BackButton />
          <PhoneButton />
        </div>
      </div>
  )
}