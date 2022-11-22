import React from 'react';
import styles from '../styles/BottomNav.module.css';
import home from '../assets/home.png';
import search from '../assets/search.svg';
import videos from '../assets/videos.png';
import live from '../assets/live.png';
import tv from '../assets/tv.png';
import perfil from '../assets/perfil.png'


function BottomNav() {
    // const {data: session} = useSession();
    // const value= useSelector(select);
    return (
        <div className={styles.mainNav}>
            <div className={styles.home} >
                <img src={home} alt='home'/>
                <div className={styles.navbarText}>Noticias</div>
            </div>
            <a href="">
                <div className={styles.search} >
                    <img src={videos} alt='home'/>
                    <div className={styles.navbarText}>Videos</div>
                </div>
            </a>
            <div className={styles.newpost} >
                    <img src={tv} alt='newpost'/>
                    <div className={styles.navbarText}>TV</div>
                </div>
            <div className={styles.heart} >
                <img src={live} alt='radio'/>
                <div className={styles.navbarText}>Radio</div>
            </div>
            <div className={styles.heart} >
                <img src={perfil} alt='perfil'/>
                <div className={styles.navbarText}>Perfil</div>
            </div>
        </div>
    )
}

export default BottomNav
