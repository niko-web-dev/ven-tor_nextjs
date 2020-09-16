import Link from 'next/link'

import style from'./menuStyles.module.scss'



export default function Btn({ url, img, text }) {
  
  // let asUrl = `/mimimal-page${url}`

  return (
      <div className={style.menu}>
        <Link href={url}>
          <a className={style.menu_link}>
            <div>
            <img className={style.menu_btn} src={img} /> 
            <p className={style.menu_text}>
              {text}
            </p>
            </div>
          </a>
        </Link>
      </div>
  )
}
