import { datas } from '../Component/Api'
const Homebox = () => {
  return (
    <>
      <img src={datas[0].ImageAsset} className='p1'  alt='??'/>
      <span className='sp1'>{datas[0].PublishedDate}</span>
      <img src={datas[1].ImageAsset} className='p2'  alt='??'/>
      <span className='sp2'> {datas[1].PublishedDate}</span>
      <img src={datas[2].ImageAsset} className='p3' alt='??' />
      <span className='sp3'>{datas[2].PublishedDate}</span>


      <p style={{ fontSize: '40px', position: 'absolute', top: '700px', left: '110px' }}>The Latest
        <hr style={{ width: '200px', height: '3px', backgroundColor: 'lightblue' }} /></p>

      <div className='container'>
        <div className='boxdetails'>
          <img src={datas[0].ImageAsset} alt="" height='250px' width='300px' />
          <h4>{datas[0].Title}</h4>
          <p>{datas[0].BlogContent}</p>
          <p>{datas[0].PublishedDate}</p>
        </div>
      </div>
      <div className='container2'>
        <div className='boxdetails2'>
          <img src={datas[1].ImageAsset} alt="" height='250px' width='300px' />
          <h4>{datas[1].Title}</h4>
          <p>{datas[1].BlogContent}</p>
          <p>{datas[1].PublishedDate}</p>
        </div>
      </div>
      <div className='container3'>
        <div className='boxdetails3'>
          <img src={datas[2].ImageAsset} alt="" height='250px' width='300px' />
          <h4>{datas[2].Title}</h4>
          <p>{datas[2].BlogContent}</p>
          <p>{datas[2].PublishedDate}</p>
        </div>
      </div>

      <p style={{ fontSize: '40px', position: 'absolute', top: '1260px', left: '120px' }}>Latest Articles
        <hr style={{ width: '200px', height: '3px', backgroundColor: 'lightblue' }} /><br /></p>


      <div id='hr1'>
        <img src={datas[1].ImageAsset} alt="" className='ltimg1' />
        <div className="latbox">
          <p >{datas[1].BlogContent}</p>
        </div>
      </div>
      <div id='hr2'>
        <img src={datas[2].ImageAsset} alt="" className='ltimg2' />
        <div className="latbox2">
          <p >{datas[2].BlogContent}</p>
        </div>
      </div>
      <div id='hr3'>
        <img src={datas[0].ImageAsset} alt="" className='ltimg2' />
        <div className="latbox2">
          <p >{datas[0].BlogContent}</p>
        </div>
      </div>
      <div id='hr4'></div>

       <div className='mazapic'>
         <img src="https://pbs.twimg.com/ext_tw_video_thumb/1489241225349804033/pu/img/TIHyrEO_FDijKpqF.jpg" alt=""  width='300px' height='590'  />
       </div>
   
       <p style={{ fontSize: '30px', position: 'absolute', top: '1980px', left: '960px' }}>Top Posts
        <hr style={{ width: '200px', height: '3px', backgroundColor: 'lightblue' }} /><br /></p>
         <div className='sidebox' >
         <img src={datas[0].ImageAsset} alt=""  width='250px'  height='150px' />
         <p>{datas[0].BlogContent}</p>
         <p>{datas[0].PublishedDate}</p>

       </div>
    </>
  )
}
export default Homebox

