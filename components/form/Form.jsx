import React from 'react'

export default function Form() {
  return (
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
  )
}
