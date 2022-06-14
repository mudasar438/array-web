import React from 'react'
import Images from '../images/Images'
// import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Footer = () => {
    const navigate = useNavigate()
  return (
  <>
  <div className="max-w-screen-2xl mx-auto bg-skin-bblack">
      <div className="flex flex-col md:flex-row w-[90%] mx-auto py-12 justify-between">
          <div className="w-full text-center md:text-left md:w-[30%]">
           <div className="flex justify-center md:justify-start">
               <img src={Images.Array} alt="" />
           </div>
           <p className='text-skin-cgray text-sm py-3'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ducimus architecto, perspiciatis error esse unde officia earum asperiores </p>
           <div className="flex mt-8 mx-auto justify-center ">
               <img src={Images.twiter} alt="l1" className='ficon '/>
               <img src={Images.git} alt="l2" className='ficon'/>
               <img src={Images.arroup} alt="l3"className='ficon' />
               <img src={Images.discod} alt="l4" className='ficon' />
               <img src={Images.m} alt="l5"className='ficon' />
               
           </div>

          </div>
          <div className="flex space-x-11 w-full mt-10-- :mt-0 md:w-[30%]   ">
              <div className="w-[80%] flex mx-auto space-x-10">
              <div className="">
              <h1 className='text-white mb-5 text-sm'>Site Links</h1>
              <ul>
                  <li className='text-skin-cgray flex flex-col space-y-3 text-left text-sm'>
                  <button className='text-left' onClick={() => navigate('/lounchpad')}>Lounchpad</button>
                  <button className='text-left' onClick={() => navigate('/dex')}>DEX</button>
                  <button className='text-left' onClick={() => navigate('/stack')}>Stack</button>
                  <button className='text-left' onClick={() => navigate('/stats')}>Stats</button>
                  </li>
              </ul>
              </div>

              <div className="">
              <h1 className='text-white mb-5 text-sm'>Usefull Links</h1>
              <ul>
                  <li className='text-skin-cgray flex flex-col space-y-3 text-sm '>
                  <button className='text-left' onClick={() => navigate('/lounchpad')}>Contqct Us</button>
                  <button className='text-left' onClick={() => navigate('/dex')}>MarketPlace</button>
                  <button className='text-left' onClick={() => navigate('/stack')}>Privicy Policy</button>
                  <button className='text-left' onClick={() => navigate('/stats')}>Terms & Conditons</button>
                  </li>
              </ul>
              </div>
              </div>
            
          </div>
          <div className=" w-[30%] ">
              <div className="items-center px-5">
              <h1 className='text-white text-2xl p-2  '>Never miss a sale!</h1>
              <p className='text-skin-cgray text-sm p-1 ml-2'>subscribe for the lates news aridrops $ sale</p>
              <div className="flex">

              <input type="email" placeholder=' Email' className='p-2 m-3 ficon'/>
              <button className='text-white bg-skin-rgbblue px-3 bgbtn'>subscribe</button>
              </div>
          </div>
          </div>
      </div>
      <div className="text-center text-sm">
          <p className='text-skin-cgray p-3 bg-skin-ffgray'>

                 Array © Copyright 2022. All Rights Reserved.
          </p>
      </div>

  </div>
  </>
  )
}

export default Footer