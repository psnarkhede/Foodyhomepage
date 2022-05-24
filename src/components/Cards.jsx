import React from 'react'
import { GoStar } from 'react-icons/go';
import Styles from "./Cards.module.css"

const Cards = (props) => {

  return (

    props.data.map((el) => (
        <div className={Styles.carddata} key={el.id}>
            <img className={Styles.image} src={el.image}/>
            <p className={Styles.time} >{el.deliverytime} mins</p>
            <p className={Styles.name}>{el.heading}</p>
            <p className={Styles.serves}>{el.serves.join(", ")}</p>

            <div className={Styles.info}>
            <p className={Styles.rating}> <span className={Styles.starlogo}><GoStar className={Styles.star} /></span> {el.rating}</p>
            <p>{el.votes}+ Votes</p>
            </div>

            <div className={Styles.cost} >
                <p>{el.offer}% off</p>
                <p>RS. {el.costforone} for one</p>
            </div>
            
            <p className={Styles.payment}>Accepts payment through {el.payment}.</p>
        </div>
    ))

    
    
  )
}

export default Cards