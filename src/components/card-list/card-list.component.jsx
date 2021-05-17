import React from 'react';
import './card-list.style.css'
import {Card} from '../card/card.component';

export const CardList = (props) =>{    
    const {monsters}= props
    return ( 
    <div className="card-list"> 
    {monsters.length > 0 ? monsters.map((monster) => (
       <Card key={monster.id} monster={monster}/>
      )): <p className="noMonster">sorry this monster doesn't exists</p>}
      </div>
    )
}