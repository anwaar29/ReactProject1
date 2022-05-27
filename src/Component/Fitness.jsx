import React from 'react'
import { fittydata } from './Api'
const Fitness = () => {
  return (
    <>
      <h1 style={{ position: 'absolute', left: '50px' }}>FITNESS  <hr /></h1>
      <div id='hr21'>
        <img src={fittydata[0].ImageAsset} alt="" className='ltimg1' />
        <div className="latbox">
          <p >{fittydata[0].Title}</p>
          <p >{fittydata[0].BlogContent}</p>
        </div>
      </div>
      <div id='hr22'>
        <img src={fittydata[1].ImageAsset} alt="" className='ltimg1' />
        <div className="latbox">
          <p >{fittydata[1].Title}</p>
          <p >{fittydata[1].BlogContent}</p>
        </div>
      </div>
      <div id='hr23'></div>

      <p style={{ fontSize: '30px', position: 'absolute', top: '180px', left: '890px' }}>Top Posts
        <hr style={{ width: '200px', height: '3px', backgroundColor: 'lightblue' }} /><br /></p>


      <div className='sidebox21' >
        <img src={fittydata[0].ImageAsset} alt="" width='280px' height='200px' />
        <p>{fittydata[0].Title}</p>
        <p>{fittydata[0].BlogContent}</p>
        <p>{fittydata[0].PublishedDate}</p>
        <hr /></div>

      <div className='sidebox32' >
        <img src={fittydata[1].ImageAsset} alt="" width='280px' height='200px' />
        <p>{fittydata[1].Title}</p>
        <p>{fittydata[1].BlogContent}</p>
        <p>{fittydata[1].PublishedDate}</p>
        <hr /></div>

      <div className='sidebox33' >
        <img src={fittydata[2].ImageAsset} alt="" width='280px' height='200px' />
        <p>{fittydata[2].Title}</p>
        <p>{fittydata[2].BlogContent}</p>
        <p>{fittydata[2].PublishedDate}</p>
        <hr /></div>
    </>
  )
}

export default Fitness