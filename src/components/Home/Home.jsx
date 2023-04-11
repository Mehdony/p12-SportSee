import React from 'react'
import { store } from '../../config'

const Home = () => {

  console.log("ligne 1 " , store.getUserId(12));


  return (
    <div>heo</div>
  )
}

export default Home