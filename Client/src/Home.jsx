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
            {/* <Create /> */}
            <Sidebar />
            <GetTask id={id} />
        </div>
    );
}

export default Home