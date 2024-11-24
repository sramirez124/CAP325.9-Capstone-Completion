import plus from "./assets/plus.png"
import "./App.css"

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar-section">
            <h3 className="sidebar-title">
                <strong>Projects</strong>
                <a href="">
                    <img className="plus" src={plus} alt="" />
                </a>
            </h3>
                <div className="sidebar-list">
                    <h3>Project 1</h3>
                    <h3>Project 2</h3>
                    <h3>Project 3</h3>
                </div>
            </div>

            <div className="sidebar-section">
            <h3 className="sidebar-title">
                <strong>Tasks</strong>
                <a href="">
                    <img className="plus" src={plus} alt="" />
                </a>
            </h3>
                <div className="sidebar-list">
                    <h3>Task 1</h3>
                    <h3>Task 2</h3>
                    <h3>Task 3</h3>
                </div>
            </div>
        </div>
    )
}

export default Sidebar