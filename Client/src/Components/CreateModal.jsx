import { useState } from 'react'
import Create from '../Create'

const CreateModal = ({ open, close}) => {
    if(!open) return null

    return (
        <div className='create-modal'>
            <Create />
        </div>
    )
}

export default CreateModal
