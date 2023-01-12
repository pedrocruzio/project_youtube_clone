import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
// import CodeIcon from '@mui/icons-material/Code';
// import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
// import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
// import SchoolIcon from '@mui/icons-material/School';
// import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
// import CheckroomIcon from '@mui/icons-material/Checkroom';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import AccountCircle from '@mui/icons-material/AccountCircle';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import Subscriptions from '@mui/icons-material/Subscriptions';


// export const logo = 'https://i.ibb.co/s9Qys2j/logo.png';
import logo from '../assets/logo-white.png'

export const categories = [
  { name: 'Noticias', icon: <HomeIcon />, },
  { name: 'Música', icon: <MusicNoteIcon /> },
  { name: 'Podcast', icon: <GraphicEqIcon />, },
  { name: 'Deportes', icon: <FitnessCenterIcon />, },
  { name: 'El Palabreo', icon: <TheaterComedyIcon />, },
  { name: 'Zona Crypto', icon: <DeveloperModeIcon />, },
  { name: 'Live', icon: <LiveTvIcon />, },
];

export const radioList = [
  { name: 'Música', icon: <MusicNoteIcon /> },
  { name: 'Molusco Live', icon: <LiveTvIcon />, },
];

export const menuItems = [
  { name: 'Noticias', icon: <HomeIcon />, link: '/' },
  { name: 'Videos', icon: <Subscriptions />, link: '/videos' },
  { name: 'TV', icon: <LiveTvIcon />, link: '/tv' },
  { name: 'Radio', icon: <GraphicEqIcon />, link: '/radio'},
  { name: 'Perfil', icon: <AccountCircle />, link: '/perfil'},
];

export const demoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
export const demoChannelUrl = '/channel/UCBfg3Yc_8iIJ0e0MeMKg2Bw';
export const demoVideoUrl = '/video/CpCgo4Q7PEE';
export const demoChannelTitle = 'MoluscoTV';
export const demoVideoTitle = 'MoluscoTV Desc';
export const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png'

export const noticias = [
  { id: '1', caption: 'lol', likes: '2414', image: 'https://via.placeholder.com/500x500' },
  { id: '2', caption: 'lol', likes: '741214', image: 'https://via.placeholder.com/500x500' },
  { id: '3', caption: 'lol', likes: '4218', image: 'https://via.placeholder.com/500x500' },
  { id: '4', caption: 'lol', likes: '94414', image: 'https://via.placeholder.com/500x500/000000' },
]