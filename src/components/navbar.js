import React from 'react'
import Images from '../images/Images'
import {RiArrowDropDownLine} from 'react-icons/ri'


const Navbar = () => {
  return (
  <>
  <div className="max-w-screen-2xl mx-auto bg-skin-bblack">
      <div className="w-[95%] mx-auto flex justify-between item-center p-3">
          <div className=" flex item-center justify-between  w-[25%] ">
              <div className="text-white items-center flex">
              <img
     
                    src={Images.logo1}
                    alt="Picture of the author"
                    width={20}
                    height={20}
                  />
                  <div className=" ml-3 mt-3">
               <img src={Images.Array} alt="" />
           </div>
                  {/* <h1 className='ml-2 text-2xl'>Array</h1> */}

              </div>
              <div className="text-white flex nbtn p-2">
                <img src={Images.logo2} alt=""  width={20} height={20} srcset="" />
                <button  className='ml-2'>Home</button>
                <RiArrowDropDownLine className='text-white text-3xl' />
              </div>
          </div>
          <div className="w-[30%]  text-white flex items-center ml-2">
            <ul className='flex mx-2 items-center justify-between '>
              <li className='mx-2'><button>DEX</button></li>
              <li className='mx-2'><button>Lanuchpad</button></li>
              <li className='mx-2'><button>Stake</button></li>
              <li className='mx-2 mt-1'><button className='flex'>Stats <RiArrowDropDownLine className='text-3xl text-center' /></button></li>
            </ul>
          </div>
          <div className="w-[45%]  flex items-center ">
          <div className="text-white items-center flex nbtn1">
              <img
            
                     img
                    src={Images.logo3}
                    alt="Picture of the author"
                    width={29}
                    height={29}
                  />
                  <h1  className='ml-1 '>Avalance</h1>

              </div>
              <div className="text-white items-center ml-1 flex nbtn1">
             
                  <h1  className='ml-1 '>0.013 <span className='text-gray-400'>AVAX</span> </h1>

              </div>
              <div className="flex ml-5 bgld p-1 justify-between   ">
                <div className=" mr-3">

                <img src={Images.light} alt="logo2" srcset="" className=''/>
                </div>
                <div className="  ml-3">

                <img src={Images.dark} alt="logo3" srcset="" width={12}height={12} className='' />
                </div>
              </div>
              <div className=" ml-5">
                <img src={Images.flag} alt="log5"width={18}height={18} srcset="" />
              </div>
              <div className="text-white items-center flex nbtn2 ml-3 py-1 px-3 ">
              <img
            
     
                    src={Images.logo4}
                    alt="Picture of the "
                    width={29}
                    height={29}
                  />
                  <h1  className='ml-1 '>$ 1.01</h1>

              </div>
              

          </div>
        
      </div>
  
  </div>
  </>
  )
}

export default Navbar;