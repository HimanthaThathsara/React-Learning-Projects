import React from 'react'
import Classes from './Hero.module.css'
import Heading from './comp/Heading'
import SubHeading from './comp/SubHeading'
import BottomToTop from '../../../../Animations/BottomToTop'
import { useNavigate } from 'react-router-dom'
import BgScene from './comp/BgScene'
import { StarBorder } from '@mui/icons-material'

export default function Hero() {
    const navigateTo = useNavigate();
    const redirectTo = (page) => {
        navigateTo(page);
    }

    return (
        <div id='hero' className={Classes.hero} >
            <div className={Classes.main} >
                <div className={Classes.content} >
                    <BottomToTop fromY={100} delay={0.5} duration={0.4}>
                        <Heading />
                    </BottomToTop>
                    <BottomToTop fromY={100} delay={0.65} duration={0.4}>
                        <SubHeading />
                    </BottomToTop>
                    <BottomToTop fromY={100} delay={0.75} duration={0.4}>
                        <div className={Classes.buttons} >
                            <button className={Classes.btn1} onClick={() => { redirectTo('/portfolio') }} > <h5>See our work</h5> </button>
                            <button className={Classes.btn2} onClick={() => { redirectTo('/contact-us') }} > <h5>Get a quote</h5> </button>
                        </div>
                    </BottomToTop>
                </div>
            </div>
            <BottomToTop fromY={0} delay={1.5} duration={0.5}>
                <div className={Classes.splineBgCon} >
                    {/* <iframe
                    src='https://my.spline.design/dunes-2ea1415c70da19c201f33da9268a0410/'
                    frameborder='0'
                    width='100%'
                    height='100%'
                ></iframe> */}
                    {/* <iframe src='https://my.spline.design/spaceparticlesanimation-c3acd83275e18c33c70e85d9d198be8e/' frameborder='0' width='100%' height='100%'></iframe> */}
                    {/* <iframe src='https://my.spline.design/glowingplanetparticles-a0c785ee0407074c17c66d95be23c018/' frameborder='0' width='100%' height='100%'></iframe> */}
                    <BgScene />
                </div>
            </BottomToTop>
        </div>
    )
}
