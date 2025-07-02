import React, { useState } from 'react';
import Classes from './Portfolio.module.css';
import SkeletonLoading from './SkeletonLoading/SkeletonLoading';
import ViewProjectPopup from './ViewProjectPopup/ViewProjectPopup';
import { AnimatePresence } from 'framer-motion';

const ViewIcon = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 576 512">
            <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
        </svg>
    );
};

const LinkIcon = (props) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 640 512">
                <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.9l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
            </svg>
        </>
    );
};

export default function Card({ item }) {
    const [imgLoaded, setImgLoaded] = useState(false);

    const LoadingPlaceholder = (
        <div style={{ height: '150px', background: '#333', borderRadius: '5px' }}>
            <p style={{ color: '#ccc', textAlign: 'center', paddingTop: '3rem' }}>
                Loading...
            </p>
        </div>
    );

    const [openViewCard, setOpenViewCard] = useState(false);
    const handleCloseCard = () => {
        setOpenViewCard(false);
    };
    const handleOpenCard = () => {
        setOpenViewCard(true);
    };

    return (
        <>
            <div className={Classes.card}>
                <div className={`${Classes.flexBetween10} mb10`}>
                    {item?.link ? (
                        <a href={item?.link} target='_blank' rel="noreferrer" className="flexAlign5">
                            <h4> {item?.name} </h4>
                            <LinkIcon height="12px" fill="white" cursor="pointer" />
                        </a>
                    ) : (
                        <div className="flexAlign5">
                            <h4> {item?.name} </h4>
                        </div>
                    )}
                    <div className="flexAlign5">
                        <button onClick={handleOpenCard} >
                            <ViewIcon height="13px" fill="white" />
                            <h5>View</h5>
                        </button>
                    </div>
                </div>

                <div className={Classes.card_img}>
                    {/* Show the loading UI while the image hasn't loaded yet */}
                    {!imgLoaded && LoadingPlaceholder}

                    <img
                        src={item?.thumbnail}
                        className={Classes.card_inner_img}
                        draggable={false}
                        alt={item?.name}
                        style={{ display: imgLoaded ? 'block' : 'none' }}
                        onLoad={() => setImgLoaded(true)}
                        onError={() => { }}
                    />
                </div>

                {!imgLoaded && (
                    <div className={Classes.Loader}>
                        {/* Could add a skeleton or spinner here */}
                    </div>
                )}
            </div>

            <AnimatePresence mode='wait'>
                {openViewCard && <ViewProjectPopup handleClose={handleCloseCard} item={item} />}
            </AnimatePresence>
        </>
    );
}
