import React from 'react'
import { store } from '../../config'

const Home = () => {

  console.log("ligne 1 " , store.getUserId(12));
  console.log("ligne 2 " , store.getUserActivity(12));
  console.log("ligne 3 " , store.getUserAverageSession(12));
  console.log("ligne 4 " , store.getUserPerformance(12));



  return (
    <div>heo</div>
  )
}

export default Home