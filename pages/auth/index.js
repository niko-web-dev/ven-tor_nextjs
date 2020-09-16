import BackButton from '@/components/BackBtn/BackButton'
import PhoneButton from '@/components/PhoneButton/PhoneButton'

const isAuth = true

const AuthPage = () => {

  return (
      <div className="bg">
        <div className="main">
        {isAuth 
          ? 
          <div className="form">
            <h2>
              Введите свою имя и email для просмотра полного прайса
            </h2>
            <form>
              <input name="name" placeholder="Введите имя" type="text"/>
              <input name="mail" placeholder="Введите email" type="text"/>

            <button>Получить прайс</button>
            </form>
          </div> 
          : 
          <div className="price">
            <h2>
              Прайсы
            </h2>
            <div className="price_list">

            </div>
          </div>
        }
        </div>

        <div className="btn_bottom">
        <BackButton />
        <PhoneButton />
        </div>

        <style jsx>{`
            h2 {
              padding: 30px 50px;
              background: rgba(255, 255, 255, 0.8);
              border-radius: 10%;s
            }
            form {
              display: flex;
              flex-direction: column;
            }
          `}</style>
      </div>
      
    )
}

export default AuthPage