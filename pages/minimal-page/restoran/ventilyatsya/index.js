import Btn from '../../../../components/Btn'
import BackButton from '../../../../components/BackButton'
import PhoneButton from '../../../../components/PhoneButton'

import btns from '../../../../db'

export default function Ventilyatsya() {
  let btnList = btns.btnVentilyatsya.map((b) => 
    <Btn 
      key={b.id + b.text}
      url={b.url} 
      img={b.img} 
      text={b.text}
    />
  )
  return (
      <div className="restoran bg">
        <div className="main">
          {btnList}
        </div>
        <div className="btn_bottom">
          <BackButton />
          <PhoneButton />
        </div>
      </div>
  )
}