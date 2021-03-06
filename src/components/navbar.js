import React from "react";
import Images from "../images/Images";
import { RiArrowDropDownLine } from "react-icons/ri";
import { resolvePath, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import{ useHref} from 'react-router-dom'
import { ConstructionOutlined, Title } from "@mui/icons-material";

const Navbar = () => {
  
  const navigate = useNavigate();
  return (
    <>
      <div className="max-w-screen-2xl mx-auto bg-skin-bblack">
        <div className="w-[95%] mx-auto flex flex-col md:flex-row justify-between item-center p-3">
          <div className=" flex flex-col md:flex-row md:item-center justify-between  md:w-[25%] ">
            <div className="text-white md:items-center flex w-full  my-3  md:flex-row">
              <img
                src={Images.logo1}
                alt="Picture of the author"
                width={20}
                height={20}
              />
              <Link to="/">
                <div className=" ml-3 mt-3">
                  <img src={Images.Array} alt="" />
                </div>
              </Link>

              {/* <h1 className='ml-2 text-2xl'>Array</h1> */}
            </div>
            <div className="text-white flex justify-center  nbtn p-2 w-full md:w-[80%]   items-center ">
              <img src={Images.logo2} alt="" width={20} height={20} srcset="" />
              <button className="ml-4">Home</button>
              <RiArrowDropDownLine className="text-white text-3xl" />
            </div>
          </div>
          <div className="w-full mt-5 md:mt-0 md:w-[30%] text-white flex md:items-center ml-2">
            <ul className="flex flex-col w-full  md:flex-row md:mx-2 items-center justify-between ">
              
              <Navlinks title="DEX" href = '/dex'/>
              <Navlinks title="Lounchpad" href='/lounchpad'/>
              <Navlinks title="Stack" href='/stack'/>
              <Navlinks title="Status" href= '/state'/>
            
              
              
              
            </ul>
          </div>
          <div className="  md:w-[45%]  flex flex-col md:flex-row justify-between items-center space-y-5 md:space-y-0 ">
            <div className="text-white items-center -0 w-[60%] mx-auto md:w-[23%] flex nbtn1">
              <img
                img
                src={Images.logo3}
                alt="Picture of the author"
                width={29}
                height={29}
              />
              <h1 className="ml-1 text-center  w-[50%] mx-auto">Avalance</h1>
            </div>
            <div className="text-white items-center text-center ml-1 w-[60%] md:w-[23%] flex nbtn1">
              <h1 className="ml-1 text-center w-[90%]">
                0.013 <span className="text-gray-400 ">AVAX</span>{" "}
              </h1>
            </div>
            <div className="flex md:ml-5 bgld p-1 justify-around md:justify-between w-[60%] md:w-[10%]  ">
              <div className=" mr-3">
                <img src={Images.light} alt="logo2" srcset="" className="" />
              </div>
              <div className="  ml-3">
                <img
                  src={Images.dark}
                  alt="logo3"
                  srcset=""
                  width={12}
                  height={12}
                  className=""
                />
              </div>
            </div>
            <div className="hidden md:block md:ml-5">
              <img
                src={Images.flag}
                alt="log5"
                width={18}
                height={18}
                srcset=""
              />
            </div>
            <div className="text-white items-center flex md:justify-center nbtn2 ml-3 py-1 px-3 w-[60%] md:w-[18%]">
              <img
                src={Images.logo4}
                alt="Picture of the "
                width={29}
                height={29}
              />
              <h1 className="ml-1 ">$ 1.01</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;


const Navlinks = ({href , title})=>{
  const {pathname} = useLocation();
  console.log(pathname)


  return(
    <Link to={href}>
    <li className="mx-2">
      <button className={
        pathname === href? 'cursor-pointer text-white bg-gradient-to-r from-[#FF3E3D] to-[#466DFD] hover:from-[#FF3E3D] hover:to-[#466DFD] px-4 p-2 rounded   transition'
        : 'cursor-pointer hover:text-white bg-gradient-to-r  hover:from-[#FF3E3D] hover:to-[#466DFD] px-4 p-2 rounded  transition'
      }>
        {title}
      </button>
    </li>
    
    </Link>

  )

}
