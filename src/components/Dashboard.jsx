import React, { useContext } from 'react'
import Navbar from './Navbar'
import AddTask from './AddTask'
import List from './List'
import { DarkModeContext } from '../contex/DarkModeContex'

export default function Dashboard() {
    const { darkMode } = useContext(DarkModeContext);
    return (

        <>
            <Navbar />
            <div className='m-5'>

                <AddTask />
                <List />
            </div>
        </>
    )
}
