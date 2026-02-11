import React from 'react';

const Titel = ({children}) => {
    return (
        <div className='bg-linear-60 from-sky-50 to-sky-200 text-black p-3 rounded'>
            <h2 className='text-3xl font-bold'>{children}</h2>
        </div>
    );
};

export default Titel;