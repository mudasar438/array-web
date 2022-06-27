import React from 'react'
import Images from '../images/Images'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Homepage = () => {
  const array = [
    {
      img:Images.arroup,
      title:'KYC',
      des:"DEX aggregators are a relatively new type of blockchain-based service that allow cryptocurrency traders to benefit from a large variety of financial tools"
    },
    {
      img:Images.cards,
      title:'Multisig',
      des:"DEX aggregators are a relatively new type of blockchain-based service that allow cryptocurrency traders to benefit from a large variety of financial tools"
    },
    {
      img:Images.cardalldoc,
      title:'Audit',
      des:"DEX aggregators are a relatively new type of blockchain-based service that allow cryptocurrency traders to benefit from a large variety of financial tools"
    },
    {
      img:Images.carddis,
      title:'Fire Lounch',
      des:"DEX aggregators are a relatively new type of blockchain-based service that allow cryptocurrency traders to benefit from a large variety of financial tools"
    },
    {
      img:Images.carddocs2,
      title:'Premissionless Listing',
      des:"DEX aggregators are a relatively new type of blockchain-based service that allow cryptocurrency traders to benefit from a large variety of financial tools"
    },
    {
      img:Images.card5,
      title:'Visting and Distribution',
      des:"DEX aggregators are a relatively new type of blockchain-based service that allow cryptocurrency traders to benefit from a large variety of financial tools"
    },
  ]

  const array2 = [   {
    img:Images.actor1,
    title:'Mark Stanwyck',
    auth:"Director",
    des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae convallis imperdiet ultrices turpis. Molestie euismod tortor dignissim sed lacus sit quis. Eget dui tellus."
  },
  {
  img:Images.actor2,
  title:'Mark Stanwyck',
  auth:"Director",
  des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae convallis imperdiet ultrices turpis. Molestie euismod tortor dignissim sed lacus sit quis. Eget dui tellus."
},
{
  img:Images.actor3,
  title:'Mark Stanwyck',
  auth:"Director",
  des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae convallis imperdiet ultrices turpis. Molestie euismod tortor dignissim sed lacus sit quis. Eget dui tellus."
},
      
  ]
  const array3 = [
    {
      img:Images.meet1
    },
    {
      img:Images.meet2
    },
    {
      img:Images.meet3
    },
    {
      img:Images.meet4
    },
    {
      img:Images.meet5
    },
    {
      img:Images.meet6
    },
    {
      img:Images.meet7
    },
    {
      img:Images.meet8
    },
  ]
  return (
  <>
  <div className="max-w-screen-2xl mx-auto">
    <div className="w-full bgimg1 h-[813px] ">
      <div className=" w-[80%] md:w-[60%] mx-auto pt-12">

            <p className='font-bold text-transparent text-xl md:text-4xl bg-clip-text bg-gradient-to-r from-[#FF3E3D] to-[#466DFD] text-left md:text-center'>Launchpad & DeFi hub of the Avalanche
                    Ecosystem.</p>
             <p className='text-white text-sm text-center mt-8'>The DeFi hub on AVALANCHE ecosystem to bootstrap innovations, monitor and manage digital assets.</p>
             <div className="flex w-full  space-y-3 md:space-y-0 flex-col md:flex-row justify-between mt-12 ">
               <div className="flex border-2 md:border-none bg-skin-bgcard p-3 rounded-xl w-full md:w-[48%] justify-between items-center ">
                 <div className="">

                 <img src={Images.p1} alt="" width={71} height={71}/>
                 </div>
                 <div className="">
                   <p className='text-white text-lg md:text-2xl font-bold'>Dex</p>
                   <p className='text-skin-cardtext text-sm md:text-lg'>Go to PAD.FI’s DEX</p>
                                          
                 </div>
                 <div className="">
                   <img src={Images.cardarro} alt="" width={41} height={1} />
                 </div>


               </div>
               <div className="flex border-2 md:border-none  bg-skin-bgcard p-3 rounded-xl w-full md:w-[48%] justify-between items-center ">
                 <div className="">

                 <img src={Images.p2} alt="" width={71} height={71}/>
                 </div>
                 <div className="">
                   <p className='text-white text-lg md:text-2xl font-bold'>Launchpad</p>
                   <p className='text-skin-cardtext text-sm md:text-lg'>Go to PAD.FI’s DEX</p>
                                          
                 </div>
                 <div className="">
                   <img src={Images.cardarro} alt="" width={41} height={1} />
                 </div>


               </div>
               
             </div>
      </div>
    

    </div>
          {/* next dive start */}

    <div className="w-full mx-auto flex flex-col md:flex-row justify-between md:mt-0  mt-[-270px] md:p-12">
      <div className=" w-full p-5 text-center md:text-left md:w-[45%]">
        <h1 className='font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#FF3E3D] to-[#466DFD] py-3'>Bootstrap your innovations</h1>
        <p className='text-skin-cgray '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, accumsan  viverra. Tellus est nunc, donec arcu. Neque, nunc ultricies justo, mi viverra nulla risus. Arcu malesuada sed aenean nullam ac turpis. A aliquam a ultricies luctus et nisi. </p><br />

        <p className='text-skin-cgray'>Nisi, gravida pharetra, neque ut malesuada parturient auctor. Gravida porta nisi lacus volutpat nunc id porta. Leo nibh donec id ullamcorper eget. Vel blandit urna sed volutpat libero.</p>


      </div>
      <div className="w-[80%] mx-auto rounded-xl md:w-[33%] bgimg2 p-3 flex items-center ">
       <img src={Images.puss} alt="" width={81} height={81} className="mx-auto "/>
  
     
      </div>

    </div>
    <div className="w-full mx-auto p-12">
      <div className="w-full md:w-[40%] mx-auto text-center space-y-3">
        <p className='font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#FF3E3D] to-[#466DFD] text-center '>PAD.FI PRODUCTS</p>
        <h2 className='text-white text-xl md:text-2xl'>Everything you need in one place</h2>
        <p className='text-skin-cgray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at at libero tincidunt arcu tellus. Nunc, orci cursus blandit.</p>

      </div>
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-6">
         {array.map((value)=>{
           return(

             <div className="w-full border-2 border-[#4767FB] bgcard rounded-lg sahdow-lg p-3 flex flex-col  ">
           <div className="text-white flex items-center justify-items-start space-x-6 ml-1 py-2">
             <img src={value.img} alt="" />
                <p className='text-2xl '>{value.title}</p>

           </div>
           <div className="text-skin-cgray">
           {value.des}
           </div>
          </div>
           
           )
           

         })}
          
          
        </div>

      </div>
    </div>
    <div className="w-full mx-auto p-12">
      <div className=" w-full md:w-[25%] mx-auto text-center mb-12">
        <h3 className='font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#FF3E3D] to-[#466DFD] '>The Rodemap</h3>
        <h3 className='text-2xl md:text-3xl text-white py-3'>Our Rodemap</h3>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between space-y-10 md:space-y-0">
        <div className="w-full md:w-[22%] flex flex-col items-center">
          <img src={Images.path1} alt="" />
          <ul className='space-y-3 bgcard2 p-3 mt-12 w-full'>
            <li>
              <div className="flex space-x-2 ">

              <img src={Images.tik} alt="" />
              <p className='text-skin-cgray'>Lounch Plateform</p>
              </div>
            </li>
            <li>
              <div className="flex space-x-2">

              <img src={Images.tik} alt="" />
              <p className='text-skin-cgray'>Beta test platform</p>
              </div>
            </li>
            <li>
              <div className="flex space-x-2">

              <img src={Images.tik} alt="" />
              <p className='text-skin-cgray'>Protocol Complete</p>
              </div>
            </li>
            <li>
              <div className="flex space-x-2">

              <img src={Images.tik} alt="" />
              <p className='text-skin-cgray'>Start Marketing</p>
              </div>
            </li>
          </ul>
        </div>
        <div className= "w-full md:w-[22%] flex flex-col items-center">
          <img src={Images.path1} alt="" />
          <ul className='space-y-3 bgcard2 p-3 mt-12 w-full'>
            <li>
              <div className="flex space-x-2 ">

              <img src={Images.tik} alt="" />
              <p className='text-skin-cgray'>Lounch Plateform</p>
              </div>
            </li>
            <li>
              <div className="flex space-x-2">

              <img src={Images.tik} alt="" />
              <p className='text-skin-cgray'>Beta test platform</p>
              </div>
            </li>
            <li>
              <div className="flex space-x-2">

              <img src={Images.tik} alt="" />
              <p className='text-skin-cgray'>Protocol Complete</p>
              </div>
            </li>
            <li>
              <div className="flex space-x-2">

              <img src={Images.tik} alt="" />
              <p className='text-skin-cgray'>Airdrop event</p>
              </div>
            </li>
            <li>
              <div className="flex space-x-2">

              <img src={Images.tik} alt="" />
              <p className='text-skin-cgray'>Launch staking</p>
              </div>
            </li>
            <li>
              <div className="flex space-x-2">

              <img src={Images.tik} alt="" />
              <p className='text-skin-cgray'>First launch IDO</p>
              </div>
            </li>
            <li>
              <div className="flex space-x-2">

              <img src={Images.tik} alt="" />
              <p className='text-skin-cgray'>Strategic partnerships</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-[22%] flex flex-col items-center">
          <img src={Images.path1} alt="" />
          <ul className='space-y-3 bgcard2 p-3 mt-12 w-full'>
            <li>
              <div className="flex space-x-2 ">

              <img src={Images.tik} alt="" />
              <p className='text-skin-cgray'>Governance</p>
              </div>
            </li>
            <li>
              <div className="flex space-x-2">

              <img src={Images.tik} alt="" />
              <p className='text-skin-cgray'>Launch NFT</p>
              </div>
            </li>
            <li>
              <div className="flex space-x-2">

              <img src={Images.tik} alt="" />
              <p className='text-skin-cgray'>NFT Integration</p>
              </div>
            </li>
            <li>
              <div className="flex space-x-2">

              <img src={Images.tik} alt="" />
              <p className='text-skin-cgray'>Listing on CEX</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-[22%] flex flex-col items-center">
          <img src={Images.path1} alt="" />
          <ul className='space-y-3 bgcard2 p-3 mt-12 w-full'>
            <li>
              <div className="flex space-x-2 ">

              <img src={Images.tik} alt="" />
              <p className='text-skin-cgray'>Launch on a New CEX</p>
              </div>
            </li>
            <li>
              <div className="flex space-x-2">

              <img src={Images.tik} alt="" />
              <p className='text-skin-cgray'>Launchpad refinement</p>
              </div>
            </li>
            
           
          </ul>
        </div>
        
        
        

     

      </div>
    </div>
    <div className="w-full">
    <div className="w-full md:w-[25%] mx-auto text-center mb-12">
        <h3 className='font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#FF3E3D] to-[#466DFD] '>Tokenomics</h3>
        <h3 className='text-2xl md:text-3xl text-white py-3'>The Tokenomics</h3>
      </div>
      <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between space-x-4 space-y-10 md:space-y-0">
        <div className="w-full md:w-[40%] bgcard3 p-5 border border-[#466efd3a] space-y-2">
          <p className='text-white text-2xl text-center mb-8 font-bold '>Token Distribution</p>
          <div className="w-full ">
            <div className=" bgcard2 p-3 border border-[#4768fb8c]">
              <div className="flex justify-between  ">

            <p className='text-skin-cgray'>Staking Rewards</p>
            <p className='text-white text-2xl font-bold'>30 m</p>
              </div>
                <div className="w-full h-4  rounded-full  progres">
                  <div className=" h-4 rounded-r-full bg-gradient-to-r from-[#FF3E3D] to-[#466DFD]" style={{width: "40%"}}></div>
                      </div>
            </div>
          </div>
          <div className="w-full">
            <div className=" bgcard2 p-3 border  border-[#4768fb8c]">
              <div className="flex justify-between">

            <p className='text-skin-cgray'>Staking Rewards</p>
            <p className='text-white text-2xl font-bold'>30 m</p>
              </div>
                <div className="w-full h-4  rounded-full  progres">
                  <div className=" h-4 rounded-r-full bg-gradient-to-r from-[#FF3E3D] to-[#466DFD]" style={{width: "40%"}}></div>
                      </div>
            </div>
          </div>
          <div className="w-full">
            <div className=" bgcard2 p-3 border  border-[#4768fb8c]">
              <div className="flex justify-between">

            <p className='text-skin-cgray'>Staking Rewards</p>
            <p className='text-white text-2xl font-bold'>15 m</p>
              </div>
                <div className="w-full h-4  rounded-full  progres">
                  <div className=" h-4 rounded-r-full bg-gradient-to-r from-[#FF3E3D] to-[#466DFD]" style={{width: "20%"}}></div>
                      </div>
            </div>
          </div>
          <div className="w-full">
            <div className=" bgcard2 p-3 border  border-[#4768fb8c]">
              <div className="flex justify-between">

            <p className='text-skin-cgray'>Staking Rewards</p>
            <p className='text-white text-2xl font-bold'>10 m</p>
              </div>
                <div className="w-full h-4  rounded-full  progres">
                  <div className=" h-4 rounded-r-full bg-gradient-to-r from-[#FF3E3D] to-[#466DFD]" style={{width: "15%"}}></div>
                      </div>
            </div>
          </div>
          <div className="w-full">
            <div className=" bgcard2 p-3 border  border-[#4768fb8c]">
              <div className="flex justify-between">

            <p className='text-skin-cgray'>Staking Rewards</p>
            <p className='text-white text-2xl font-bold'>5 m</p>
              </div>
                <div className="w-full h-4  rounded-full  progres">
                  <div className=" h-4 rounded-r-full bg-gradient-to-r from-[#FF3E3D] to-[#466DFD]" style={{width: "5%"}}></div>
                      </div>
            </div>
          </div>
          <div className="w-full">
            <div className=" bgcard2 p-3 border  border-[#4768fb8c]">
              <div className="flex justify-between">

            <p className='text-skin-cgray'>Staking Rewards</p>
            <p className='text-white text-2xl font-bold'>5 m</p>
              </div>
                <div className="w-full h-4  rounded-full  progres">
                  <div className=" h-4 rounded-r-full bg-gradient-to-r from-[#FF3E3D] to-[#466DFD]" style={{width: "5%"}}></div>
                      </div>
            </div>
          </div>
          <div className="w-full">
            <div className=" bgcard2 p-3 border  border-[#4768fb8c]">
              <div className="flex justify-between">

            <p className='text-skin-cgray'>Staking Rewards</p>
            <p className='text-white text-2xl font-bold'>3 m</p>
              </div>
                <div className="w-full h-4  rounded-full  progres">
                  <div className=" h-4 rounded-r-full bg-gradient-to-r from-[#FF3E3D] to-[#466DFD]" style={{width: "3%"}}></div>
                      </div>
            </div>
          </div>
          <div className="w-full">
            <div className=" bgcard2 p-3 border  border-[#4768fb8c]">
              <div className="flex justify-between">

            <p className='text-skin-cgray'>Staking Rewards</p>
            <p className='text-white text-2xl font-bold'>2 m</p>
              </div>
                <div className="w-full h-4  rounded-full  progres">
                  <div className=" h-4 rounded-r-full bg-gradient-to-r from-[#FF3E3D] to-[#466DFD]" style={{width: "2%"}}></div>
                      </div>
            </div>
            
          </div>
          <div className="w-full mt-3">
            <div className=" bgcard2 p-3 border  border-[#4768fb8c]">
              <div className="flex justify-between">
                <button className='flex items-center mx-auto space-x-5'>
                  <div className="flex items-center space-x-2">

                <img src={Images.token1} alt="" />
                <p className='text-skin-cgray'>Total Tokens</p>
                  </div>

                <p className='text-white text-3xl font-bold'>100 M</p>
                </button>

           
              </div>
                
            </div>
            
          </div>
        </div>
        <div className="w-full md:w-[60%] bgcard3  border border-[#466efd3a] space-y-3 ">
          <p className='text-white text-2xl text-center my-8'>Vesting Schedule</p>
          <div className="w-[95%] mx-auto space-y-3">
          <div className="flex text-skin-cgray justify-center space-x-9 p-2 mt-3 bgcard4">
            <p>Initial Unlock</p>
            <p>Vesting Schedule</p>
            
          </div>
          <div className="flex  text-skin-cgray justify-center items-center space-x-9  mt-3 bgcard2  border-2 border-[#466efd15]">
            <div className="w-[30%]  ">

            <p className='bg-[#466efd15] p-5 rounded-xl '>Team Advisors</p>
            </div>
            <div className="w-[20%] ">
              
            <p>0%</p>
            </div>
            <div className="w-[50%]">
            <p>12 months lockup,next 30 months subsequent linear vesting</p>

            </div>

                                  
            
          </div>
          <div className="flex text-skin-cgray justify-center items-center space-x-9  mt-3 bgcard2  border-2 border-[#466efd15]">
            <div className="w-[30%]  ">

            <p className='bg-[#466efd15] p-5 rounded-xl '>Treasury</p>
            </div>
            <div className="w-[20%] ">
              
            <p>5%</p>
            </div>
            <div className="w-[50%]">
            <p>6 months cliff & subsequent,36 months linear vesting</p>


            </div>

                                  
            
          </div>
          <div className="flex text-skin-cgray justify-center items-center space-x-9  mt-3 bgcard2  border-2 border-[#466efd15]">
            <div className="w-[30%]  ">

            <p className='bg-[#466efd15] p-5 rounded-xl '>Private Sale</p>
            </div>
            <div className="w-[20%] ">
              
            <p>10%</p>
            </div>
            <div className="w-[50%]">
            <p>3 months lockup,next 30 months subsequent linear vesting</p>


            </div>

                                  
            
          </div>
          <div className="flex text-skin-cgray justify-center items-center space-x-9  mt-3 bgcard2  border-2 border-[#466efd15]">
            <div className="w-[30%]  ">

            <p className='bg-[#466efd15] p-5 rounded-xl '>Public Sale</p>
            </div>
            <div className="w-[20%] ">
              
            <p>10%</p>
            </div>
            <div className="w-[50%]">
            <p>Monthly vesting for 12 months</p>

            </div>

                                  
            
          </div>
          <div className="flex text-skin-cgray justify-center items-center space-x-9  mt-3 bgcard2  border-2 border-[#466efd15]">
            <div className="w-[30%]  ">

            <p className='bg-[#466efd15] p-5 rounded-xl '>DEX Liquidity</p>
            </div>
            <div className="w-[20%] ">
              
            <p>50%</p>
            </div>
            <div className="w-[50%]">
            <p>6 months cliff & subsequent,6 months linear vesting</p>


            </div>

                                  
            
          </div>
          <div className="flex text-skin-cgray justify-center items-center space-x-9  mt-3 bgcard2  border-2 border-[#466efd15]">
            <div className="w-[30%]  ">

            <p className='bg-[#466efd15] p-5 rounded-xl '>Liquidity Mining</p>
            </div>
            <div className="w-[20%] ">
              
            <p>N/A</p>
            </div>
            <div className="w-[50%]">
            <p>The unlock is discretionary & Contigentupon a number of factors that the team
                          has identified. Any incentive unlocks will be
                          annouced.</p>


            </div>

                                  
            
          </div>
          <div className="flex text-skin-cgray justify-center items-center space-x-9  mt-3 bgcard2  border-2 border-[#466efd15]">
            <div className="w-[30%]  ">

            <p className='bg-[#466efd15] p-5 rounded-xl '>Team Advisors</p>
            </div>
            <div className="w-[20%] ">
              
            <p>0%</p>
            </div>
            <div className="w-[50%]">
            <p>12 months lockup,next 30 months subsequent linear vesting</p>

            </div>

                                  
            
          </div>
          </div>

          
         
         
         

        </div>
      </div>

    </div>
    <div className=" my-12">
    <div className="w-full md:w-[25%] mx-auto text-center mb-12">
        <h3 className='font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#FF3E3D] to-[#466DFD] '>Model</h3>
        <h3 className='text-2xl md:text-3xl text-white py-3'>Financial Model</h3>
      </div>
      <div className="w-[90%] mx-auto  mb-12">
        <img src={Images.Groupimg} alt="" />
      </div>

    </div>
    <div className="mt-12 w-[90%] mx-auto ">
    <div className="w-full md:w-[25%] mx-auto text-center mb-12 ">
        <h3 className='font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#FF3E3D] to-[#466DFD] '>Meet with our</h3>
        <h3 className='text-3xl text-white py-3'>Creative Team</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-8 md:gap-6">
      {array2.map((item)=>{
        return(
          <div className="  border border-[#466efd3a]  relative  text-center bgcard2 my-[150px]  ">
        <div className="  absolute -top-[130px] left-[50px] md:left-[70px]">
          <img src={item.img} alt="actor" width={247} height={247}  />
        </div>
        <div className="mt-24 pt-12">
          <p className='text-white text-2xl p-3'>Mark Stanwyck</p>
          <p className='text-skin-cgray p-2'>Director</p>
        </div>
        <div className="text-skin-cgray p-3 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae convallis imperdiet ultrices turpis. Molestie euismod tortor dignissim sed lacus sit quis. Eget dui tellus.
        
        </div>
        <div className=" ">
        <div className="flex p-5 justify-center">
               <img src={Images.twiter} alt="l1" className='ficon '/>
               <img src={Images.git} alt="l2" className='ficon'/>
             
               <img src={Images.discod} alt="l4" className='ficon' />
             
               
           </div>
        </div>

      </div>

        )
      })

      }
      
      
      
      </div>

    </div>
    <div className=" bg-[#30273d3f] p-10 rounded-lg">
    <div className="w-full md:w-[25%] mx-auto text-center mb-12 ">
        <h3 className='font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#FF3E3D] to-[#466DFD] '>Partnerships</h3>
        <h3 className='text-2xl md:text-3xl text-white py-3'>Meet our Partner</h3>
      </div>
      <div className="w-[90%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
          {array3.map((item)=>{
            return(
              <div className="flex items-center  border border-[#466efd3a]">
            <img src={item.img} alt="" srcset="" className='mx-auto' />
            </div>

            )
          })}
            

        </div>
      </div>
    </div>
    <div className="my-12 p-5">
    <div className="w-full md:w-[25%] mx-auto text-center mb-12 ">
        <h3 className='font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#FF3E3D] to-[#466DFD] '>FAQ’s</h3>
        <h3 className='text-2xl md:text-3xl text-white py-3'>Frequently asked Questions</h3>
      </div>
      <div className="">
      <div className='space-y-2 '>
        <div className="">
      <Accordion sx={{ borderRadius: '10px'}}>
        <AccordionSummary className='bg-red-400'
        sx={{
          backgroundColor:"#0c101f",
        }}
          expandIcon={<img src={Images.plus} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='flex items-center text-white '>
          <img src={Images.ques} alt=""  className='pr-5'/>
         What are Minted Fingers?
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{
          backgroundColor:"#0c101f",border:'1px solid #23346e' , 
        }}>
          <Typography className='text-skin-cgray'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <div className="">
      <Accordion sx={{ borderRadius: '10px'}}>
        <AccordionSummary className='bg-red-400'
        sx={{
          backgroundColor:"#0c101f",
        }}
          expandIcon={<img src={Images.plus} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='flex items-center text-white '>
          <img src={Images.ques} alt=""  className='pr-5'/>
         What are Minted Fingers?
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{
          backgroundColor:"#0c101f",border:'1px solid #23346e', 
        }}>
          <Typography  className='text-skin-cgray'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <div className="">
      <Accordion sx={{ borderRadius: '10px'}}>
        <AccordionSummary className='bg-red-400'
        sx={{
          backgroundColor:"#0c101f",
        }}
          expandIcon={<img src={Images.plus} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='flex items-center text-white '>
          <img src={Images.ques} alt=""  className='pr-5'/>
         What are Minted Fingers?
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{
          backgroundColor:"#0c101f",border:'1px solid #23346e', 
        }}>
          <Typography  className='text-skin-cgray'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <div className="">
      <Accordion sx={{ borderRadius: '10px'}}>
        <AccordionSummary className='bg-red-400'
        sx={{
          backgroundColor:"#0c101f",
        }}
          expandIcon={<img src={Images.plus} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='flex items-center text-white '>
          <img src={Images.ques} alt=""  className='pr-5'/>
         What are Minted Fingers?
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{
          backgroundColor:"#0c101f",border:'1px solid #23346e', 
        }}>
          <Typography  className='text-skin-cgray'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <div className="">
      <Accordion sx={{ borderRadius: '10px'}}>
        <AccordionSummary className='bg-red-400'
        sx={{
          backgroundColor:"#0c101f",
        }}
          expandIcon={<img src={Images.plus} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='flex items-center text-white '>
          <img src={Images.ques} alt=""  className='pr-5'/>
         What are Minted Fingers?
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{
          backgroundColor:"#0c101f",border:'1px solid #23346e', 
        }}>
          <Typography  className='text-skin-cgray'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
     
     
    
    
       
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>

      </div>
    </div>
    <div className="">
    <div className="w-full md:w-[25%] mx-auto text-center mb-12 ">
        <h3 className='font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#FF3E3D] to-[#466DFD] '>Newsletter</h3>
        <h3 className='text-2xl md:text-3xl text-white py-3'>Let’s Get in Touch</h3>
      </div>
      <div className="w-full md:w-[70%] mx-auto">
        <div className="flex justify-between ">
        <input type="email" placeholder=' Email' className='p-2 m-3 w-[48%]  bg-[#3b1a6d3f] h-[70px] rounded-xl'/>
        <input type="email" placeholder=' Telegram handle' className='p-2 m-3 w-[48%]  bg-[#3b1a6d3f] h-[70px] rounded-xl'/>
        </div>
        <div className="">
          <textarea name="" id="" cols="30" rows="10" className='p-4 text-skin-cgray m-3 w-[98%] bg-[#3b1a6d3f] h-[70px] rounded-xl'>
           write your Message
          </textarea>
        </div>
        <div className="">
        <button className='text-white bg-skin-rgbblue p-5 bgbtn w-full '>send Message</button>
        </div>


      </div>
    </div>



  </div>
  </>
  )
}

export default Homepage