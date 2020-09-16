import Router from 'next/router'

import style from'./backButton.module.scss'


export default function BackButton() {
    return (
        <div onClick={() => Router.back()}>
          <img className={style.menu_back_btn} src="/assets/images/menu-btn/menu-back.png" alt="back"/>
        </div>
    )
}