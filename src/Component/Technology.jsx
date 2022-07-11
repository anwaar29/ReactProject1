import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
const Technology = () => {


  const [val,setval]=useState([])

  useEffect(()=>{
    const url='https://blogbackend2.herokuapp.com/api/tech';
    fetch(url).then(techres=>techres.json())
    .then(techres=>setval(techres))
  },[])




  return (<>
{
    val.map((techres)=>{
  return(
  <>

      <h1 style={{ position: 'absolute', left: '50px' }}>TECHNOLOGY  <hr /></h1>
      <div id='hr21'>
        <img src={techres.ImageAsset} alt="" className='ltimg1' />
        <div className="latbox">
        <p><Link to='/Technology-data'>{techres.Title}</Link></p>
          <p >{techres.BlogContent}</p>
        </div>
      </div>
      <div id='hr22'>
        <img src={techres.ImageAsset} alt="" className='ltimg1' />
        <div className="latbox">
        <p><Link to='/Technology-data'>{techres.Title}</Link></p>
          <p >{techres.BlogContent}</p>
        </div>
      </div>
      <div id='hr23'></div>

      <p style={{ fontSize: '30px', position: 'absolute', top: '180px', left: '890px' }}>Top Posts
        <hr style={{ width: '200px', height: '3px', backgroundColor: 'lightblue' }} /><br /></p>


      <div className='sidebox21' >
        <img src={techres.ImageAsset} alt="" width='280px' height='200px' />
        <p><Link to='/Technology-data'>{techres.Title}</Link></p>
        <p>{techres.BlogContent}</p>
        <p>{techres.PublishedDate}</p>
        <hr /></div>

      <div className='sidebox32' >
        <img src={techres.ImageAsset} alt="" width='280px' height='200px' />
        <p><Link to='/Technology-data'>{techres.Title}</Link></p>
        <p>{techres.BlogContent}</p>
        <p>{techres.PublishedDate}</p>
        <hr /></div>

      <div className='sidebox33' >
        <img src={techres.ImageAsset} alt="" width='280px' height='200px' />
        <p><Link to='/Technology-data'>{techres.Title}</Link></p>
        <p>{techres.BlogContent}</p>
        <p>{techres.PublishedDate}</p>
        <hr /></div>
        </>)})
}

    </>
  )
}

export default Technology