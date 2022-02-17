import React from "react";
import img from "./img.css"

const Images = (props) => {
   const cimages =  props.images.map((image)=>{
         return(
         <div key={image.id}>
              <img src={image.webformatURL} alt="image"/>
         </div>
         
         )
     })
    return(
        <div>
        <ul className="imagerender">
<li>
{cimages}
</li>
        </ul>
           
        </div>
    )
}

export default Images;