import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdRestartAlt } from "react-icons/md";
import { IoPlayCircleOutline } from "react-icons/io5";

export default function TaskCart() {
    return (
        <div className='p-3 mb-5 rounded-md mt-2 border-2 border-[#f97315] relative h-[150px] '>
            <h1 className=' text-center  font-semibold'>Task Name</h1>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div class="bg-[#f97315] h-2.5 rounded-full" style={{ "width": "45%" }}></div>
            </div>

            <p className='font-thin'>Stay productive !</p>
            <div className="flex justify-between">
                <RiDeleteBin6Line className='font-bold text-lg absolute bottom-2 ' />
                <IoPlayCircleOutline className='font-bold  text-5xl absolute -bottom-6  right-[50%]' />
                <MdRestartAlt className='font-bold text-lg absolute bottom-2 right-2' />

            </div>
        </div >
    )
}
