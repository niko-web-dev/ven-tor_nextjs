import React from 'react'

export default function Price() {
  return (
    <div className="price">
    <h2>
      Прайсы
    </h2>
    <div className="price_list">
      Тут будут Прайсы или ссылки на них
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
    </div>
    <style jsx>{`
    spun {
      display: block;
    }
      h2 {
        padding: 30px 50px;
        background: rgba(255,255,255,0.8);
        border-radius: 10%;
      }
      .price_list {
        margin-top: 50px;
        font-size: 20px;
        padding: 30px 50px;
        background: rgba(255,255,255,0.8);
        border-radius: 10%;
      }
      `}</style>
  </div>
  )
}
