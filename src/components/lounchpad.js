import { ImagesearchRoller } from '@mui/icons-material'
import React from 'react'
import Images from '../images/Images'

const Lounchpads = () => {
  return (
    <>
    <div className='max-w-screen-2xl mx-auto'>
      <div className="w-full p-12  flex items-center">
        <div className="w-[50%]">
          <img src={Images.lonchpad} alt="" />
        </div>
        <div className="text-white w-[45%]">
          <span className='font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#d34c4c] to-[#466DFD]'>Launchpad</span>
          <p className='text-3xl font-bold'>Why you should choose Launchpad</p>
          <div className=" space-y-6 mt-5 text-skin-cgray">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, accumsan blandit arcu, nec. Semper ut fusce feugiat libero volutpat turpis volutpat varius viverra. Tellus est nunc, donec arcu. .</p>
              <p className='mt-5'> Neque, nunc ultricies justo, mi viverra nulla risus. Arcu malesuada sed aenean nullam ac turpis. A aliquam a ultricies luctus et nisi</p>

          
          </div>
        </div>
      </div>
      <div className="w-full text-white ">
        <div className="w-[25%] mx-auto  text-center">
        <span className='font-bold text-transparent text-lg bg-clip-text bg-gradient-to-r from-[#d34c4c] to-[#466DFD]'>Ongoing Sale</span>
      <p className='text-2xl mt-3'>Live Auction</p>
        </div>
        <div className="w-[70%] border-2 border-blue-900 mx-auto flex bg-[#375ada36] rounded-xl p-2">
          <div className="w-[40%]">
            <img src={Images.rectangular} alt="" srcset="" />
          </div>
          <div className="w-[70%] ">
            <div className="w-[90%] mx-auto flex justify-between p-3 border-b-2 border-[#2c4bbd4f]">
              <div className="flex space-x-3">

             
              <img src={Images.nft} alt="" />
              <div className="">
                <p className='text-2xl'>NFT Digital Arts</p>
                <p>1 SLIME = 0.019 AVAX</p>
                </div>
                </div>
                <button className='flex border-2 mt-3 border-red-400 items-center space-x-3 px-2 rounded-full h-8 text-red-500 bg-[#fb474725]'>
                                              
                                              
                  <img src={Images.solid} alt="" />
                  <p>Sold out</p>
                </button>
          
            </div>
            <div className="space-y-3 w-[90%] mx-auto my-3">
              <div className="flex justify-between text-skin-cgray">
                <p>Total Raised</p>
                <p>Time Left</p>
              </div>
              <div className="flex justify-between ">
                <p className='text-blue-500 text-xl font-bold'>$1,232,300 / $1,232,300</p>
                <p className='flex  justify-end  w-[30%] text-xl font-bold' ><img src={Images.clock} alt="" className='mr-2'/> 3h, 30Mins</p>
              </div>

            </div>
            <div className="">
            <div className="w-[90%] mx-auto">
            <div className=" bgcard2 p-3 border  border-[#4768fb8c]">
              <div className="flex justify-between">

            <p className='text-skin-cgray'>Current Sale</p>
            <p className='text-blue-500 text-2xl font-bold'>72%</p>
              </div>
                <div className="w-full h-4  rounded-full  progres">
                  <div className=" h-4 rounded-r-full bg-gradient-to-r from-[#FF3E3D] to-[#466DFD]" style={{width: "72%"}}></div>
                      </div>
                     <div className="flex justify-between items-center mt-3 ">
                       <div className="">
                       <p className='text-skin-cgray'>Participants</p>
                       <p>1235</p>
                       </div>
                       <div className="">
                       <p className='text-skin-cgray'>Start Date</p>
                       <p>05.03.2022</p>
                       </div>
                       <div className="">
                       <p className='text-skin-cgray'>Token Price</p>
                       <p>$0.001</p>
                       </div>
                      
                     </div>
                    
            </div>
          </div>
            </div>
           
          </div>

        </div>
    

        
      </div>
      <div className="my-12 text-white">
      <div className="w-[25%] mx-auto  text-center">
        <span className='font-bold text-transparent text-lg bg-clip-text bg-gradient-to-r from-[#d34c4c] to-[#466DFD]'>Upcoming Sale</span>
      <p className='text-2xl mt-3 text-white'>Upcoming Sale</p>
        </div>
        <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-8 md:gap-6">
          <div className="bgcard2 p-2">
            <div className="text-center bg-[#405abb4d] rounded-lg ">

           <p className='text-skin-cgray p-2'>Starts in</p>
           <span className='font-bold p-2 text-transparent text-lg bg-clip-text bg-gradient-to-r from-[#d34c4c] to-[#466DFD]'>2D : 18H : 30M UTC</span>
            </div>

            <img src={Images.rec1} alt="" className='my-2' />
            <div className="flex justify-between items-center">
              <div className="">
               <p>Total Raised</p>
               <p>$1,232,300 / $1,232,300</p>
              </div>
              <button className=' text-xl text-red-500 border-2 border-red-400 rounded-3xl h-9 px-2 bg-[#fb474725]'>upcoming</button>

            </div>
           
          </div>
          <div className="">
          </div>
         
          
           </div>
        </div>
      </div>


    </div>
    </>
  )
}

export default Lounchpads