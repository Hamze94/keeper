import Navbar from './Navbar'
import AddTask from './AddTask'
import ProjectCart from './ProjectCart'
import TaskManagement from './TaskManagement'

export default function Dashboard() {
    return (
        <>
            <Navbar />
            <div className="m-5 " >

                <TaskManagement />
            </div>
        </>
    )
}
