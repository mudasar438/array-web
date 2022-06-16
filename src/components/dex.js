import React from "react";
import Images from "../images/Images";

const Dex = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-[90%] mx-auto mt-[100px] flex flex-col md:flex-row items-center text-white">
          <div className="w-[50%] ">
            <img src={Images.def} alt="" />
          </div>
          <div className="w-full md:w-[50%] mt-12 md:mt-0 text-center md:text-left text-white space-y-4 ">
            <span className="font-bold text-transparent text-lg bg-clip-text bg-gradient-to-r from-[#d34c4c] to-[#466DFD]">
              Marketcap
            </span>
            <p className="text-xl md:text-4xl mt-3 text-white font-bold">
              Today’s Cryptocurrency prices{" "}
            </p>
            <p className="text-skin-cgray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
              accumsan blandit arcu, nec. Semper ut fusce feugiat libero
              volutpat turpis volutpat varius viverra. Tellus est nunc, donec
              arcu.
            </p>
            <p className="text-skin-cgray">
              {" "}
              Neque, nunc ultricies justo, mi viverra nulla risus. Arcu
              malesuada sed aenean nullam ac turpis. A aliquam a ultricies
              luctus et nisi.
            </p>
          </div>
        </div>
        <div className=" mt-[80px]">
          <div className="w-[90%] mx-auto text-white ">
            <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-3  ">
              <div className="space-y-2">
                <div className="bg-[#466efd21] text-center space-y-5 py-5 rounded-md border border-[#466efd38] h-[220px] ">
                  <div className="flex justify-around items-center">
                    <div className="">
                      <img src={Images.b} alt="" />
                    </div>
                    <div className="text-left">
                      <p className="text-[#81A9D8] font-bold">BTC/USDT</p>
                      <p className="text-2xl font-bold">36,248.02</p>
                      <p className="text-[#81A9D8]">36,248.02</p>
                    </div>
                    <div className="">
                      <button className=" border border-[#10FA51] rounded-2xl text-[#10FA51] px-2 bg-[#10fa521c]">
                        + 0.79
                      </button>
                    </div>
                  </div>
                  <img src={Images.line4} alt="" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-[#466efd21] text-center space-y-5 py-5 rounded-md border border-[#466efd38] h-[220px] ">
                  <div className="flex justify-around items-center">
                    <div className="">
                      <img src={Images.av} alt="" />
                    </div>
                    <div className="text-left">
                      <p className="text-[#81A9D8] font-bold">AVAX/USDT</p>
                      <p className="text-2xl font-bold">36,248.02</p>
                      <p className="text-[#81A9D8]">36,248.02</p>
                    </div>
                    <div className="">
                      <button className=" border border-[#10FA51] rounded-2xl text-[#10FA51] px-2 bg-[#10fa521c]">
                        + 0.79
                      </button>
                    </div>
                  </div>
                  <img src={Images.line3} alt="" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-[#466efd21] text-center space-y-5 py-5 rounded-md border border-[#466efd38] h-[220px] ">
                  <div className="flex justify-around items-center">
                    <div className="">
                      <img src={Images.eth} alt="" />
                    </div>
                    <div className="text-left">
                      <p className="text-[#81A9D8] font-bold">ETH/USDT</p>
                      <p className="text-2xl font-bold">36,248.02</p>
                      <p className="text-[#81A9D8]">36,248.02</p>
                    </div>
                    <div className="">
                      <button className=" border border-[#10FA51] rounded-2xl text-[#10FA51] px-2 bg-[#10fa521c]">
                        + 0.79
                      </button>
                    </div>
                  </div>
                  <img src={Images.line2} alt="" />
                </div>
              </div>

              {/* line is start ..............................*/}
            </div>
          </div>
        </div>
        <div className=" mt-[80px] borderl-g py-[1px] px-0 ">
          <div className=" bg-black py-[5vh] text-white w-full flex justify-center ">
            <div className="w-[80%] mx-auto flex flex-col md:flex-row justify-center items-center space-x-3  ">
              <div className="w-[90%] text-center md:text-left  md:w-[65%] flex flex-col md:flex-row   justify-between bg-[#466efd21] border border-[#466efd2d] rounded-md p-3">
                <span className="text-transparent text-lg bg-clip-text  bg-gradient-to-r from-[#d34c4c] to-[#466DFD]">
                  Cryptocurrency
                </span>
                <p className="text-[#81A9D8]">DeFi</p>
                <p className="text-[#81A9D8]">Innovation</p>
                <p className="text-[#81A9D8]">POS</p>
                <p className="text-[#81A9D8]">NFT</p>
                <p className="text-[#81A9D8]">POW</p>
             
              </div>
              <div className="w-full md:w-[10%] "><button className="bgbtn1 px-7 py-3 rounded-md  w-[97%] md:w-full mt-5 md:mt-0 mx-auto ">Trade</button></div>
            </div>
          </div>
        </div>
        <div className="">
        <div className=" w-full md:w-[25%] mx-auto my-10 text-center">
            <span className="font-bold text-transparent text-lg bg-clip-text bg-gradient-to-r from-[#d34c4c] to-[#466DFD]">
              Learn and earn

            </span>
            <p className="text-xl md:text-2xl mt-3 text-white font-bold">
              Stats Analysis
            </p>
          </div>
          <div className="w-[90%] mx-auto text-white ">
            <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-3  ">
              <div className="space-y-2">
                <div className="bg-[#466efd21] space-y-5 py-3 px-2 rounded-md border border-[#466efd38] h-[420px] ">
                  <div className=" space-y-5">
                    <div className="">
                      <img src={Images.coin} alt="" />
                    </div>
                    <div className="p-3">
                    <div className="">
                      <button className=" border border-[#10FA51] rounded-2xl text-[#10FA51] px-2 bg-[#10fa521c]">
                      Learn & Earn
                      </button>
                    </div>
                    <div className="text-left   border-b border-[#466efd38]">
                      <p className=" font-bold mb-5">Learn about UI8 coin and earn an All-Access Pass</p>
                    
                    </div>
                    <div className="flex justify-between mt-5">
                      <div className="flex space-x-3">
                      <img src={Images.user1} alt="" />
                      <p>Floyd Buckridge</p>
                      </div>
                      <div className="flex space-x-2">
                      <img src={Images.time} alt="" className="w-[20px]" />
                      <p>14 May, 2022</p>
                      </div>
                    </div>
                    </div>
                   
                  </div>
                  {/* <img src={Images.line4} alt="" /> */}
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-[#466efd21] space-y-5 py-3 px-2 rounded-md border border-[#466efd38] h-[420px] ">
                  <div className=" space-y-5">
                    <div className="">
                      <img src={Images.coin2} alt="" />
                    </div>
                    <div className="p-3">
                    <div className="">
                      <button className=" border border-[#10FA51] rounded-2xl text-[#10FA51] px-2 bg-[#10fa521c]">
                      Learn & Earn
                      </button>
                    </div>
                    <div className="text-left   border-b border-[#466efd38]">
                      <p className=" font-bold mb-5">Learn about UI8 coin and earn an All-Access Pass</p>
                    
                    </div>
                    <div className="flex justify-between mt-5">
                      <div className="flex space-x-3">
                      <img src={Images.user1} alt="" />
                      <p>Floyd Buckridge</p>
                      </div>
                      <div className="flex space-x-2">
                      <img src={Images.time} alt="" className="w-[20px]" />
                      <p>14 May, 2022</p>
                      </div>
                    </div>
                    </div>
                   
                  </div>
                  {/* <img src={Images.line4} alt="" /> */}
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-[#466efd21] space-y-5 py-3 px-2 rounded-md border border-[#466efd38] h-[420px] ">
                  <div className=" space-y-5">
                    <div className="">
                      <img src={Images.coin3} alt="" />
                    </div>
                    <div className="p-3">
                    <div className="">
                      <button className=" border border-[#10FA51] rounded-2xl text-[#10FA51] px-2 bg-[#10fa521c]">
                      Learn & Earn
                      </button>
                    </div>
                    <div className="text-left   border-b border-[#466efd38]">
                      <p className=" font-bold mb-5">Learn about UI8 coin and earn an All-Access Pass</p>
                    
                    </div>
                    <div className="flex justify-between mt-5">
                      <div className="flex space-x-3">
                      <img src={Images.user1} alt="" />
                      <p>Floyd Buckridge</p>
                      </div>
                      <div className="flex space-x-2">
                      <img src={Images.time} alt="" className="w-[20px]" />
                      <p>14 May, 2022</p>
                      </div>
                    </div>
                    </div>
                   
                  </div>
                  {/* <img src={Images.line4} alt="" /> */}
                </div>
              </div>
             
              

              {/* line is start ..............................*/}
            </div>
          </div>
        </div>
        <div className=" w-[80%] md:w-[25%] mt-[80px]  mx-auto bg-[#020203]">
          <div className="flex w-[50%] p-2 text-center md:w-[40%] mx-auto rounded-md border  border-[#466efd38]">
            <img src={Images.lode} alt="" />
            <button className="text-white ml-3">Lode more</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dex;
