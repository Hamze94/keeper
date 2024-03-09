import { IoAddCircleOutline } from "react-icons/io5";

export default function AddTask() {
    return (
        <>
            <div className="grid  grid-cols-2 grid-rows-2">
                <div className='flex'>
                    <h1 className='text-3xl'><IoAddCircleOutline /></h1>
                    <p className=' text-xl px-2'>Add task</p>
                </div>
                <div className='grid grid-rows-subgrid row-span-2'>
                    <div className='row-start-2'>
                        <h2 className='float-end text-xl font-bold'>Inbox</h2>
                    </div>
                </div>
            </div>
            <div className='flex justify-end gap-3'>
                <p>All</p>
                <p>Active</p>
                <p>Completed</p>
            </div>
        </>


    )
}
