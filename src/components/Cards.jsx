import React from 'react';
import Card from './Card';
import style from "./Cards.module.css"


export default function Cards({cities, onClose}) {
  
   // console.log(props.cities); //watch on web console  F12
  return (
  <div className={style.cards}>
    {cities.map((city) => (
      <Card 
      key= {city.id}
      max={city.max}
      min={city.min}
      name={city.name}
      img={city.img}
      onClose={() => onClose(city.id)}
      />
        ))}
         <h3 className={style.love}>Made with &hearts; from Adriana Ferrari</h3>
    </div>
  );
};
