import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GetTask from './Components/GetTask';
import Create from "./Create";
import Sidebar from "./Sidebar";
import axios from 'axios'
import './App.css'

function Home() {
    const { id } = useParams();

    return (
        <div className="App" >
            <h2 className='title'>Herculean Task List</h2>
            <div className='app-display'>
                <div className='app-create'>
                    <Create />
                </div>

                <div className='app-task'>
                    <GetTask id={id} />
                </div>
            </div>
            
            {/* This did not work at all */}
            {/* <Sidebar /> */}
            
        </div>
    );
}

export default Home