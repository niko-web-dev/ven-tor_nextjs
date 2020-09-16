import style from'./phoneButton.module.scss'


export default function PhoneButton() {
    return (
        <div>
          <a href="tel:+78142332211"><img className={style.menu_phone_btn} src="/assets/images/menu-btn/menu-phone.png" alt="back"/></a>
        </div>
    )
}