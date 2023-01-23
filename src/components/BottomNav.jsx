import React from 'react';
import styles from '../styles/BottomNav.module.css';
import home from '../assets/home.png';
import search from '../assets/search.svg';
import videos from '../assets/videos.png';
import live from '../assets/live.png';
import tv from '../assets/tv.png';
import perfil from '../assets/perfil.png'
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";


function BottomNav() {

    return (
        <div className={styles.mainNav}>
            <Link to='/'>
                <div className={styles.home} >
                    <img src={home} alt='home' style={{opacity: 1}}/>
                    <div className={styles.navbarText}>
                        <Typography variant="caption" mb={2} sx={{ color: "white", opacity: 1 }}>
                            Noticias
                        </Typography>
                    </div>
                </div>
            </Link>
            <Link to='/videos'>
                <div className={styles.search} >
                    <img src={videos} alt='home'/>
                    <div className={styles.navbarText}>
                        <Typography variant="caption" mb={2} sx={{ color: "white" }}>
                            Videos
                        </Typography>
                    </div>
                </div>
            </Link>
            <Link to='/tv'>
                <div className={styles.newpost} >
                    <img src={tv} alt='newpost' style={{opacity: 1}}/>
                    <div className={styles.navbarText}>
                        <Typography variant="caption" mb={2} sx={{ color: "white", opacity: 1 }}>
                            TV
                        </Typography>
                    </div>
                </div>
            </Link>

            <Link to='/radio'>
                <div className={styles.heart} >
                    <img src={live} alt='radio' style={{opacity: 1}}/>
                    <div className={styles.navbarText}>
                    <Typography variant="caption" mb={2} sx={{ color: "white", opacity: 1 }}>
                        Radio
                    </Typography>
                    </div>
                </div>
            </Link>

            {/* <Link to='/perfil'>
                <div className={styles.heart} >
                    <img src={perfil} alt='perfil' style={{opacity: 1}}/>
                    <div className={styles.navbarText}>
                    <Typography variant="caption" mb={2} sx={{ color: "white", opacity: 1 }}>
                        Perfil
                    </Typography>
                    </div>
                </div>
            </Link> */}

        </div>
    )
}

export default BottomNav
