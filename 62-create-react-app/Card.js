import React from 'react';

const Card = () => {
    return (
        // ONLY RETURN ONE COMPOUND ELEMENT
        <div>
            <img src='https://robohash.org/test?200x200' alt='Robots' />
            <div>
                <h2> Jane Doe</h2>
                <p>jane.doe@gmail.com</p>
            </div>
        </div>
    );
}

export default Card;