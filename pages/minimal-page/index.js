import Btn from '@/components/Btn/Btn'
import BackButton from '@/components/BackBtn/BackButton'
import PhoneButton from '@/components/PhoneButton/PhoneButton'

import btns from '../../db'

const MinimalPage = () => {
  let btnList = btns.btnMinPage.map( b => 
    <Btn 
      key={b.id + b.text}
      url={b.url} 
      img={b.img} 
      text={b.text}
    />
  )
  return (
      <div className="minimal_page bg">
        <div className="main">
        { btnList } 
      </div>
        <div className="btn_bottom">
        <BackButton />
        <PhoneButton />
        </div>
      </div>
    )
}

export default MinimalPage