import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdRestartAlt } from "react-icons/md";

export default function ProjectCart() {
    return (
        <div className='p-3 mb-5 rounded-md mt-2 border-2 border-[#22C55D] relative h-[150px] '>
            <h1 className=' text-center  font-semibold'>Keeper App</h1>
            <p className=' font-thin'>Stay productive !</p>
            <div className="grid grid-cols-2">
                <p className='font-bold text-lg absolute bottom-2 '><RiDeleteBin6Line /></p>
                <p className='font-bold text-lg absolute bottom-2 right-2'><MdRestartAlt /></p>

            </div>
        </div>
    )
}
