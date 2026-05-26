import React from 'react'
import ShinyText from '../../../../../components/Navbar/reactbits/ShinyText/ShinyText'
import Classes from '../Hero.module.css'
import useScreenWidth from '../../../../../Hooks/useScreenWidth';

export default function SubHeading() {
    const text = window.innerWidth < 480
        ? `Leading full stack developers specializing in AI,\n & website development solutions.`
        : window.innerWidth < 600
            ? `Leading full stack developers specializing in AI, providing \n affordable and reliable website development solutions.`
            : `Leading full stack developers specializing in AI, providing affordable and reliable\n website development solutions.`;

    return (
        <>
            <ShinyText
                text={text}
                disabled={false}
                speed={3}
                className={Classes.subHeadingCon}
            />
        </>
    )
}
