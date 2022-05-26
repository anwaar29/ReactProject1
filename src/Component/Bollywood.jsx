import React, { useContext } from 'react'
import {happy} from './Api'
import './Style.css'
const Bollywood = () => {
    const [data,setData]=useContext(happy)
  return (<>
    <h1 style={{position:'absolute',left:'50px'}}>BOLLYWOOD   <hr/></h1>
     
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    <div>
      {data.map(item=><img src={item.ImageAsset}  alt='BollyImg'/>)}
    </div>
 
 
 
 
 
 
 
 
 
 
    </>)
}
export default Bollywood



