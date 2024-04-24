import React, { useState, useContext } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { IoMoonSharp } from "react-icons/io5";
import { MdOutlineAddBox, MdOutlineWbSunny } from "react-icons/md";
import { fetchProjectData } from "../store/slices/projectSlice";
import { useSelector, useDispatch } from "react-redux"
import { DarkModeContext } from '../contex/DarkModeContex'
import { useEffect } from "react";
import ProjectForm from "./ProjectForm";
export default function Navbar() {
    const dispatch = useDispatch();
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    const [nav, setNav] = useState(false)
    const { data, loading } = useSelector((state) => state.app);
    useEffect(() => {
        console.log(data)
        dispatch(fetchProjectData());
    }, []);
    return (
        <div className={darkMode ? " bg-[#302e81] max-w-[1640px] text-white mx-auto flex justify-between items-center p-4 shadow-sm" :
            "max-w-[1640px] bg-[#9657e7]  mx-auto flex justify-between items-center p-4 shadow-sm"}>
            {/* Left side */}
            <div className="flex text-white items-center text-xl">
                <div onClick={() => { setNav(!nav); }} className="cursor-pointer">
                    <AiOutlineMenu size={30} />
                </div> <h1 className=' text-xl pl-3'>KEEPER</h1>
            </div>
            <div className='flex items-center text-xl text-white  gap-x-5 '>
                <CiUser />
                <MdOutlineAddBox />
                {
                    darkMode ? <IoMoonSharp onClick={() => toggleDarkMode()} /> : <MdOutlineWbSunny onClick={() => toggleDarkMode()} />
                }

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
                    className={darkMode ? "text-black absolute right-4 top-4 cursor-pointer" : "absolute right-4 top-4 cursor-pointer"}
                />
                <div className=" text-black">
                    <div className={darkMode ? 'p-5 m-2 mt-11' : 'rounded-lg bg-[#dfe7ff] p-5 m-2 mt-11'}>
                        <h1 className='px-3 mt-2 text-lg'><IoIosAddCircleOutline className=' inline-block h-8 w-8 mr-2 -mt-1'></IoIosAddCircleOutline>
                            Add Project</h1>
                        <ProjectForm />
                    </div>
                    <div className=' bg-[#dfe7ff] mx-1'>
                        <h1 className='text-lg  font-semibold '>STATS</h1>
                    </div>
                    <p className='text-center font-light'>Projects</p>
                    {loading ? (
                        <div role="status">
                            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>

                    ) : (
                        <div className='font-medium p-2'>


                        </div >)}

                </div>
            </div>
        </div>
    );
};
