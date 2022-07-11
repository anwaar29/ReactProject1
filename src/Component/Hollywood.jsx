import React from 'react';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
const Hollywood = () => {

  const [val,setval]=useState([])

  useEffect(()=>{
    const url='https://blogbackend2.herokuapp.com/api/holly';
    fetch(url).then(hollyres=>hollyres.json())
    .then(hollyres=>setval(hollyres))
  },[])
  return (<>
  {
    val.map((hollyres)=>{
  return(
  <>

    <h1 style={{ position: 'absolute', left: '50px' }}>HOLLYWOOD   <hr /></h1>
    <div id='hr21'>
      <img src={hollyres.ImageAsset} alt="" className='ltimg1' />
      <div className="latbox">
      <p><Link to='/Hollywood-data'>{hollyres.Title}</Link></p>
        <p >{hollyres.BlogContent}</p>
      </div>
    </div>
    <div id='hr22'>
      <img src={hollyres.ImageAsset} alt="" className='ltimg1' />
      <div className="latbox">
      <p><Link to='/Hollywood-data'>{hollyres.Title}</Link></p>
        <p >{hollyres.BlogContent}</p>
      </div>
    </div>
    <div id='hr23'></div>

    <p style={{ fontSize: '30px', position: 'absolute', top: '180px', left: '890px' }}>Top Posts
      <hr style={{ width: '200px', height: '3px', backgroundColor: 'lightblue' }} /><br /></p>


    <div className='sidebox21' >
      <img src={hollyres.ImageAsset} alt="" width='280px' height='200px' />
      <p><Link to='/Hollywood-data'>{hollyres.Title}</Link></p>
      <p>{hollyres.BlogContent}</p>
      <p>{hollyres.PublishedDate}</p>
      <hr /></div>

    <div className='sidebox32' >
      <img src={hollyres.ImageAsset} alt="" width='280px' height='200px' />
      <p><Link to='/Hollywood-data'>{hollyres.Title}</Link></p>
      <p>{hollyres.BlogContent}</p>
      <p>{hollyres.PublishedDate}</p>
      <hr /></div>

    <div className='sidebox33' >
      <img src={hollyres.ImageAsset} alt="" width='280px' height='200px' />
      <p><Link to='/Hollywood-data'>{hollyres.Title}</Link></p>
      <p>{hollyres.BlogContent}</p>
      <p>{hollyres.PublishedDate}</p>
      <hr /></div>
      </>)})
}
  </>
  )
}

export default Hollywood