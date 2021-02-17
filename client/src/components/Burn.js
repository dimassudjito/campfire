import React, {useState} from 'react';
import {IoBonfireOutline} from 'react-icons/io5'

const Burn = ({story}) => {
    const [burn, setBurn] = useState(story.burn)

    /* update story's burn */
    const updateBurn  = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/stories/${story.id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
            });
            setBurn(burn+1);
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <div className="">
            <button 
                className="btn mx-2"
                onClick={updateBurn}
            >
                <IoBonfireOutline size={25} className="text-danger mx-1"/>
                <span className="text-danger">{burn}</span>
            </button>
        </div>
    );
}

export default Burn;