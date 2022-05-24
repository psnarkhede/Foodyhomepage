import React, { useState } from 'react'
import Cards from './Cards'
import Styles from "./Apps.module.css"
import Filters from './Filters'
import data from "../data.json"

const Apps = () => {

  const [Inputdata, setInputdata] = React.useState(data)

  const filterfn = (val) => {
    setInputdata([]);
    setInputdata([...val])
  }

  return (
    <div>

        <Filters filter={filterfn} data={[...data]} />

        <div className={Styles.card}>
            <Cards data={[...Inputdata]}/>
        </div>
    </div> 
  )
}

export default Apps