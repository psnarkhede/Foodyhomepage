import React from 'react'
import Styles from "./Filters.module.css"

const Filters = (props) => {
  return (
    <div className={Styles.filters}>

        <button className={Styles.btn} onClick={() => {
          let filter = props.data.sort((a,b) => b.rating - a.rating)
          props.filter(filter)
        }} >Sort By Ratings</button>

        <select className={Styles.btn} onChange={(e) => {
          let opt = props.data.filter((data) => (e.target.value==="none" ? data : data.payment === e.target.value))
          props.filter(opt)
        }}>
          <option value="none">Sort by Payment</option>
          <option value="Card">Card</option>
          <option value="Cash and Card">Cash and Card</option>
          <option value="Cash, Card and UPI">Cash, Card and UPI</option>
        </select>

        <button className={Styles.btn} onClick={() => {
          let HTL = props.data.sort((a,b) => b.costforone - a.costforone)
          props.filter(HTL)
        }}>Sort by High to Low</button>

        <button className={Styles.btn} onClick={() => {
          let LTH = props.data.sort((a,b) => a.costforone - b.costforone)
          props.filter(LTH)
        }}>Sort by Low to High </button>

        <button className={Styles.btn} onClick={() => {
          let offer = props.data.sort((a,b) => b.offer - a.offer)
          props.filter(offer)
        }}>Sort by Offers </button>

        <button className={Styles.btn} onClick={() => {
          let votes = props.data.sort((a,b) => b.votes - a.votes)
          props.filter(votes)
        }}>Sort by Votes </button>
    </div>

  )
}

export default Filters