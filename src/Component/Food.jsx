import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
const Food = () => {
  const [val,setval]=useState([])

  useEffect(()=>{
    const url='https://blogbackend2.herokuapp.com/api/food';
    fetch(url).then(foodres=>foodres.json())
    .then(foodres=>setval(foodres))
  },[])
  

  return (
    <>
     {
    val.map((foodres)=>{
  return(
  <>
      <h1 style={{ position: 'absolute', left: '50px' }}>FOOD   <hr /></h1>
      <div id='hr21'>
        <img src={foodres.ImageAsset} alt="" className='ltimg1' />
        <div className="latbox">
        <p><Link to='/Food-data'>{foodres.Title}</Link></p>
          <p >{foodres.BlogContent}</p>
        </div>
      </div>
      <div id='hr22'>
        <img src={foodres.ImageAsset} alt="" className='ltimg1' />
        <div className="latbox">
        <p><Link to='/Food-data'>{foodres.Title}</Link></p>
          <p >{foodres.BlogContent}</p>
        </div>
      </div>
      <div id='hr23'></div>

      <p style={{ fontSize: '30px', position: 'absolute', top: '180px', left: '890px' }}>Top Posts
        <hr style={{ width: '200px', height: '3px', backgroundColor: 'lightblue' }} /><br /></p>


      <div className='sidebox21' >
        <img src={foodres.ImageAsset} alt="" width='280px' height='200px' />
        <p><Link to='/Food-data'>{foodres.Title}</Link></p>
        <p>{foodres.BlogContent}</p>
        <p>{foodres.PublishedDate}</p>
        <hr /></div>

      <div className='sidebox32' >
        <img src={foodres.ImageAsset} alt="" width='280px' height='200px' />
        <p><Link to='/Food-data'>{foodres.Title}</Link></p>
        <p>{foodres.BlogContent}</p>
        <p>{foodres.PublishedDate}</p>
        <hr /></div>

      <div className='sidebox33' >
        <img src={foodres.ImageAsset} alt="" width='280px' height='200px' />
        <p><Link to='/Food-data'>{foodres.Title}</Link></p>
        <p>{foodres.BlogContent}</p>
        <p>{foodres.PublishedDate}</p>
        <hr /></div>

        </>)})
}
    </>
  )
}

export default Food