import React, {useState} from 'react'
import Login from './login';
import Signup from './signup';

export default function Auth() {
  const [isAuthComponent, setIsAuthComponent] = useState(true)

  let changeIsAuthComponent = () => {
    setIsAuthComponent(!isAuthComponent)
  }
  return (
    <div className="auth">
      <div className="title">
      <h2 onClick={changeIsAuthComponent}>Авторизация</h2>
      <h2 onClick={changeIsAuthComponent}>Регистрация</h2>
      </div>
    {isAuthComponent ?  <Login/> :  <Signup/>}
      
    <style jsx>{`
      .auth {
        width: 80%;
      }
      .title {
        display: flex;
        justify-content: space-around;
      }

      h2 {
        padding: 30px 50px;
        background: rgba(255,255,255,0.8);
        border-radius: 10%;
      }
      
  `}</style>
    </div>
  )
}
