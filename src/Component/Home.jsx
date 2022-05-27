import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>

      <div>
        <p className='the'>The</p> <p className='siren'>Siren</p>
        <ul>
          <Link to="/Homebox" ><li>Home</li></Link>
          <Link to="/bollywood"><li>Bollywood</li></Link>
          <Link to="/technology"><li>Technology</li></Link>
          <Link to="/hollywood"><li>Hollywod</li></Link>
          <Link to="/fitness"><li>Fitess</li></Link>
          <Link to="/food"><li>Food</li></Link>
        </ul>
        <hr />
      </div>


      
    </>
  )
}

export default Home