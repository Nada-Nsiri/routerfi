import React from "react";

const Filter = ({ changeInput }) => {
    return (
        <div>
            <br></br>
            <input className='buu'
                type="text"
                placeholder="search movie"
                size="80"
                onChange={(e) => changeInput(e.target.value)}
            />
            
        </div>
    );
};

export default Filter;