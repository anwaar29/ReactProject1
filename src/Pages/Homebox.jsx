import React, { useContext } from 'react'
import { happy } from '../Component/Api'
import {Link} from 'react-router-dom'
const Homebox = () => {
  const [data,setData]=useContext(happy)

  return (
<>

{data.map(item=><img src={item.ImageAsset}  className='p1' alt='BollyImg'/>)}

<img src="https://cdn.pixabay.com/photo/2021/01/03/13/02/fantasy-5884447_960_720.jpg" className='p2'/>
<span className='sp2'> 14 Feb 2024</span>
<img src="https://cdn.pixabay.com/photo/2021/01/03/13/02/fantasy-5884447_960_720.jpg" className='p3' />
<span className='sp3'> 20 Nov 2022</span>
<p style={{fontSize:'40px',position:'absolute',top:'700px',left:'110px'}}>The Latest 
<hr style={{width:'200px',height:'3px',backgroundColor:'lightblue'}}/></p>
<div id='container'>
    <img src="" alt="" /> 
   <div id='box1'>
     <img src="https://cdn.pixabay.com/photo/2021/01/03/13/02/fantasy-5884447_960_720.jpg"  className='imgc' alt="" />
      
      <Link className='l1' to='/food'>Baby food for your six-month-old:<br/> Things to keep in mind</Link>
    <p className='content1'>A six-month-old baby is primarily <br/>breastfed or formula-fed. However, solid <br/>food can be introduced for breakfast <br/>or lunch.
           Food / Januaury 16 2022</p>
     </div>
   
   
   
   <div id='box2'>
     <img src="https://cdn.pixabay.com/photo/2021/01/03/13/02/fantasy-5884447_960_720.jpg"  className='imgc' alt="" />
     <Link className='l2' to='/food'>Baby food for your six-month-old:<br/> Things to keep in mind </Link>
      <p className='content2'>A six-month-old baby is primarily <br/>breastfed or formula-fed. However, solid <br/>food can be introduced for breakfast <br/>or lunch.
             Food / Januaury 16 2022</p>
   </div>



   <div id='box3'>
     <img src="https://cdn.pixabay.com/photo/2021/01/03/13/02/fantasy-5884447_960_720.jpg" className='imgc' alt="" />
     <Link className='l3' to='/food'>Baby food for your six-month-old:<br/> Things to keep in mind </Link>
      <p className='content3'>A six-month-old baby is primarily <br/>breastfed or formula-fed. However, solid <br/>food can be introduced for breakfast <br/>or lunch.
             Food / Januaury 16 2022</p>
   </div>
</div>
<p style={{fontSize:'40px',position:'absolute',top:'1200px',left:'110px'}}> Latest Article 
<hr style={{width:'200px',height:'3px',backgroundColor:'lightblue'}}/></p><br/>
<hr  style={{position:'absolute',top:'1250px'}}/>
</> 
 )
}
export default Homebox

