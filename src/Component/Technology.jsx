import React from 'react'
import { techdata } from './Api'
import { Link } from 'react-router-dom'
const Technology = () => {
  return (
    <>
      <h1 style={{ position: 'absolute', left: '50px' }}>TECHNOLOGY  <hr /></h1>
      <div id='hr21'>
        <img src={techdata[0].ImageAsset} alt="" className='ltimg1' />
        <div className="latbox">
        <p><Link to='/Technology-data'>{techdata[0].Title}</Link></p>
          <p >{techdata[0].BlogContent}</p>
        </div>
      </div>
      <div id='hr22'>
        <img src={techdata[1].ImageAsset} alt="" className='ltimg1' />
        <div className="latbox">
        <p><Link to='/Technology-data'>{techdata[1].Title}</Link></p>
          <p >{techdata[1].BlogContent}</p>
        </div>
      </div>
      <div id='hr23'></div>

      <p style={{ fontSize: '30px', position: 'absolute', top: '180px', left: '890px' }}>Top Posts
        <hr style={{ width: '200px', height: '3px', backgroundColor: 'lightblue' }} /><br /></p>


      <div className='sidebox21' >
        <img src={techdata[0].ImageAsset} alt="" width='280px' height='200px' />
        <p><Link to='/Technology-data'>{techdata[0].Title}</Link></p>
        <p>{techdata[0].BlogContent}</p>
        <p>{techdata[0].PublishedDate}</p>
        <hr /></div>

      <div className='sidebox32' >
        <img src={techdata[1].ImageAsset} alt="" width='280px' height='200px' />
        <p><Link to='/Technology-data'>{techdata[1].Title}</Link></p>
        <p>{techdata[1].BlogContent}</p>
        <p>{techdata[1].PublishedDate}</p>
        <hr /></div>

      <div className='sidebox33' >
        <img src={techdata[2].ImageAsset} alt="" width='280px' height='200px' />
        <p><Link to='/Technology-data'>{techdata[2].Title}</Link></p>
        <p>{techdata[2].BlogContent}</p>
        <p>{techdata[2].PublishedDate}</p>
        <hr /></div>

    </>
  )
}

export default Technology