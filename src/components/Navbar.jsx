import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FiAlignJustify, } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { MdOutlineAddBox, MdOutlineWbSunny } from "react-icons/md"; import { TbTruckDelivery } from "react-icons/tb";
import { FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const menuItems = [
        { icon: <TbTruckDelivery size={25} className="mr-4" />, text: "Orders" },
        { icon: <MdFavorite size={25} className="mr-4" />, text: "Favorites" },
        { icon: <FaWallet size={25} className="mr-4" />, text: "Wallet" },
        { icon: <MdHelp size={25} className="mr-4" />, text: "Help" },
    ];

    return (
        <div className="max-w-[1640px] bg-[#9657e7]  mx-auto flex justify-between items-center p-4 shadow-sm">
            {/* Left side */}
            <div className="flex text-white items-center text-xl">
                <div onClick={() => setNav(!nav)} className="cursor-pointer">
                    <AiOutlineMenu size={30} />
                </div> <h1 className=' text-xl pl-3'>KEEPER</h1>
            </div>
            <div className='flex items-center text-xl text-white  gap-x-5 '>
                <CiUser />
                <MdOutlineAddBox />
                <MdOutlineWbSunny />
            </div>
            {/* Overlay */}
            {nav ? (
                <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
            ) : (
                ""
            )}

            {/* Side drawer menu */}
            <div
                className={
                    nav
                        ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
                        : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
                }
            >
                <AiOutlineClose
                    onClick={() => setNav(!nav)}
                    size={30}
                    className="absolute right-4 top-4 cursor-pointer"
                />
                <div className=' rounded-lg bg-[#dfe7ff] p-5 m-2 mt-11'>
                    <h1 className='px-3 mt-2 text-lg'><IoIosAddCircleOutline className=' inline-block h-8 w-8 mr-2 -mt-1'></IoIosAddCircleOutline>
                        Add Project</h1>
                </div>
                <div className=' bg-[#dfe7ff] mx-1'>
                    <h1 className=' text-lg  font-semibold '>STATS</h1>
                </div>
                <p className='text-center font-light'>Projects</p>
                <div className='font-medium p-2'>
                    <p className='mb-3 mx-2'>Inbox</p>
                    <p className='mb-3 mx-2'>Workspace</p>
                    <p className='mb-3 mx-2'>CLA</p>
                    <p className='mb-3 mx-2'>Project X</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;