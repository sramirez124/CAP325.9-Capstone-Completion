import { useState } from 'react'
import Create from '../Create'
import "../App.css"

const CreateModal = ({ open, close }) => {
    if (!open || !close) return null;
    
    return (
        <div className='overlay'>
            <div className='create-modal'>
                <Create />
            </div>
        </div>
    );
}

export default CreateModal
