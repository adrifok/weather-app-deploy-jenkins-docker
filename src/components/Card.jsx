import React from 'react';
import Temp from './Temp';
import style from "./Card.module.css"


export default function Card({name, min,max,img,onClose, main}) {   //destructuring
  
  return (
    <div className={[style.card, main ? style.mainCard : ''].join(' ')}>
      <span className={style.name}>{name}</span>
      <button onClick={onClose} className={style.cardBtn}> X </button>
      <section>
        <Temp className={style.temp} label ='Min' value={min}/>
        <Temp className={style.temp} label ='Max' value={max}/>
    
      <img src={`http://openweathermap.org/img/wn/${img}@${main ? 4 : 2}x.png`} alt="weather icon"/>
  </section>
 
  </div>
  );

}
 


// **max**: Temperatura Máxima.
// - **min**: Temperatura Mínima.
// - **name**: Nombre de la ciudad.
// - **img**: nombre de la imagen que se debe mostrar.
// - **onClose**: recibe una función que se va a ejecutar cuando el usuario haga click en el botón de cerrar.