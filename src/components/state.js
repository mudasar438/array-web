import React from 'react'
import Images from '../images/Images'

const State = () => {
  return (
    <>
    <div className="max-w-screen-2xl mx-auto">
      <div className="">
      <div className=" w-full md:w-[25%] mx-auto my-10 text-center">
        <span className='font-bold text-transparent text-lg bg-clip-text bg-gradient-to-r from-[#d34c4c] to-[#466DFD]'>Status</span>
      <p className='text-xl md:text-2xl mt-3 text-white font-bold'>Stats Analysis</p>
        </div>
        <div className="w-[90%] mx-auto text-white font-bold">
          <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4  gap-3  ">
            <div className="space-y-2">

            <div className="bg-[#466efd21] text-center space-y-5 py-5 rounded-md border border-[#466efd38]">
             <p className='text-skin-cgray'>Successfull sale</p>
             <p className='text-xl'>1,240</p>
            </div>
            <div className="bg-[#466efd21] text-center space-y-5 py-5 rounded-md border border-[#466efd38] h-[220px] ">
             <p className='text-skin-cgray'>Total Participants</p>
             <p className='text-xl'>361,234</p>
             <img src={Images.line1} alt="" />
            </div>
            </div>
            <div className="space-y-2">

            <div className="bg-[#466efd21] text-center space-y-5 py-5 rounded-md border border-[#466efd38]">
             <p className='text-skin-cgray'>Successfull sale</p>
             <p className='text-xl'>1,240</p>
            </div>
            <div className="bg-[#466efd21] text-center space-y-5 py-5 rounded-md border border-[#466efd38] h-[220px] " >
             <p className='text-skin-cgray'>Total Value Locked (TVL)</p>
             <p className='text-xl'>$12,232,233</p>
             <img src={Images.line2} alt="" />
            </div>
            </div>
            <div className="space-y-2">

            <div className="bg-[#466efd21] text-center space-y-5 py-5 rounded-md border border-[#466efd38]">
             <p className='text-skin-cgray'>Successfull sale</p>
             <p className='text-xl'>1,240</p>
            </div>
            <div className="bg-[#466efd21] text-center space-y-5 py-5 rounded-md border border-[#466efd38] h-[220px]">
             <p className='text-skin-cgray'>Total Volum</p>
             <p className='text-xl'>361,234</p>
             <img src={Images.line3} alt="" />
            </div>
            </div>
            <div className="space-y-2">

            <div className="bg-[#466efd21] text-center space-y-5 py-5 rounded-md border border-[#466efd38]">
             <p className='text-skin-cgray'>Successfull sale</p>
             <p className='text-xl'>1,240</p>
            </div>
            <div className="bg-[#466efd21] text-center space-y-5 py-5 rounded-md border border-[#466efd38] h-[220px] ">
             <p className='text-skin-cgray'>Treasury</p>
             <p className='text-xl'>361,234</p>
             <img src={Images.line4} alt="" />
            </div>
            </div>
          
          
            {/* line is start ..............................*/}
           
            

          
          </div>
        </div>
      </div>
      <div className=" my-12">
      <div className=" w-full md:w-[25%] mx-auto my-10 text-center">
        <span className='font-bold text-transparent text-lg bg-clip-text bg-gradient-to-r from-[#d34c4c] to-[#466DFD]'>Chart</span>
      <p className='text-xl md:text-2xl mt-3 text-white font-bold'>ARRAY to USD</p>
        </div>
        <div className="w-[90%] mx-auto"></div>

      </div>
      <div className="w-[40%] mx-auto flex justify-between space-x-4 font-bold">
        <div className="w-[35%] flex justify-between bg-[#466efd21] border border-[#466efd38] rounded-md p-3 ">
          <p className='text-transparent text-lg bg-clip-text bg-gradient-to-r from-[#d34c4c] to-[#466DFD]'>Price</p>
          <p className='text-[#81A9D8]'>Mariket Cap</p>
        </div>
        <div className=" w-[65%] flex justify-between bg-[#466efd21] border border-[#466efd38] rounded-md p-3">
          <span className='text-transparent text-lg bg-clip-text  bg-gradient-to-r from-[#d34c4c] to-[#466DFD]'>ID</span>
          <p className='text-[#81A9D8]'>7D</p>
          <p className='text-[#81A9D8]'>1M</p>
          <p className='text-[#81A9D8]'>3M</p>
          <p className='text-[#81A9D8]'>1y</p>
          <p className='text-[#81A9D8]'>YTD</p>
          <p className='text-[#81A9D8]'>All</p>
          <p className='text-[#81A9D8]'>log</p>
          
        </div>
      </div>


      <div className="flex justify-between w-[90%] mx-auto my-12 py-12 text-center">
        <div className="w-[48%] mx-auto border border-[#466efd38] text-white space-x-3 space-y-4 bg-[#466efd21] p-5 rounded-md">
          <p className='text-2xl font-bold p-2'>Number of Participants</p>
          <img src={Images.xline} alt="" />
          <p className='font-bold p-2'>Number of Participents</p>
        </div>
        <div className="w-[48%] mx-auto border border-[#466efd38] text-white space-x-3 space-y-4 bg-[#466efd21] p-5 rounded-md">
          <p className='text-2xl font-bold p-2'>Number of Participants</p>
          <img src={Images.xline} alt="" />
          <p className='font-bold p-2'>Number of Participents</p>
        </div>
       
      </div>
       
       <div className="">
       <div className=" w-full md:w-[25%] mx-auto my-10 text-center">
        <span className='font-bold text-transparent text-lg bg-clip-text bg-gradient-to-r from-[#d34c4c] to-[#466DFD]'>Chart</span>
      <p className='text-xl md:text-2xl mt-3 text-white font-bold'>ARRAY to USD</p>
        </div>
        <div className=" ">
        <div class="text-white w-[90%] mx-auto">
  <table class="w-full " >
    
    <thead>
      <tr class=" bgtable text-white rounded-lg  ">
        
        <th class="p-3">Project Name</th>
        <th class="p-3">IDO Token Price</th>
        <th class="p-3">Current Price</th>
        <th class="p-3">ATH</th>
        <th class="p-3">ATH ROI</th>
        <th class="p-3">No. Participants</th>
        <th class="p-3">Total Raised</th>
        <th class="p-3">Total Tokens Sold</th>
        <th class="p-3">Sale Ended At</th>
      </tr>
    </thead>

    <tbody class="divide-y divide-gray-100">
      <tr className='w-full bg-[#466efd21] my-3'>
        <td className='flex space-x-2 p-3 '><img src={Images.tp1} alt="" className='w-[60px] ' /> <div className=""><p>Snail Trail</p> <p>Slim</p></div></td>
        
        <td class="px-4 py-2 ">John Doe</td>
        <td class="px-4 py-2 ">24/05/1995</td>
        <td class="px-4 py-2 ">Web Developer</td>
        <td class="px-4 py-2 ">$120,000</td>
      </tr>

      <tr>
       
        <td class="px-4 py-2 font-medium whitespace-nowrap">Jane Doe</td>
        <td class="px-4 py-2 text-gray-700 whitespace-nowrap">04/11/1980</td>
        <td class="px-4 py-2 text-gray-700 whitespace-nowrap">Web Designer</td>
        <td class="px-4 py-2 text-gray-700 whitespace-nowrap">$100,000</td>
      </tr>

      <tr>
        
        <td class="px-4 py-2 font-medium whitespace-nowrap">Gary Barlow</td>
        <td class="px-4 py-2 text-gray-700 whitespace-nowrap">24/05/1995</td>
        <td class="px-4 py-2 text-gray-700 whitespace-nowrap">Singer</td>
        <td class="px-4 py-2 text-gray-700 whitespace-nowrap">$20,000</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
       </div>
     

    </div>
    </>
  )
}

export default State