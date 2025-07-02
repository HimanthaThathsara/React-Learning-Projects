import React, { useState } from 'react';

export default function ImageCard({ img }) {
    const [imgLoaded, setImgLoaded] = useState(false);

    return (
        <>
            {!imgLoaded && (
                <div className='flex mb10'>
                    <div className="loader"></div>
                </div>
            )}
            <img
                alt='Portfolio'
                src={img}
                draggable={false}
                style={{ display: imgLoaded ? 'block' : 'none' }}
                onLoad={() => setImgLoaded(true)}
                onError={() => { }}
            />
        </>
    );
}
