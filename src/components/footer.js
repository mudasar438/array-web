import React from 'react'
import Images from '../images/Images'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
  <>
  <div className="w-full bg-skin-bblack">
      <div className="flex w-[90%] mx-auto">
          <div className="w-[30%]">
           <div className="">
               <img src={Images.Array} alt="" />
           </div>
           <p className='text-skin-cgray'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ducimus architecto, perspiciatis error esse unde officia earum asperiores </p>
           <div className="">
               <Link to=""><a ><img src={Images.git} alt="" />g</a></Link>
           </div>

          </div>
          <div className=""></div>
          <div className=""></div>
      </div>
      <div className=""></div>

  </div>
  </>
  )
}

export default Footer