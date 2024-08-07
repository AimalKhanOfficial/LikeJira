import React from "react";
import { useNavigate } from 'react-router-dom';

const MegaNav = () => {
    const navigate = useNavigate();

    return <>
        <button className='border-1 rounded bg-black text-white ml-[5px]' onClick={() => {
            navigate('/');
        }}>Home</button>
        <button className='border-1 rounded bg-black text-white ml-[5px]' onClick={() => {
            navigate('backlog');
        }}>Backlog</button>
    </>
}

export default MegaNav;