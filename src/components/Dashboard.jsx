import React, { useContext } from 'react'
import Navbar from './Navbar'
import AddTask from './AddTask'
import ProjectCart from './ProjectCart'
import TaskCart from './TaskCart'

export default function Dashboard() {
    return (

        <>
            <Navbar />
            <div className="m-5 " >

                <AddTask />
                <ProjectCart />
                <TaskCart />
            </div>
        </>
    )
}
