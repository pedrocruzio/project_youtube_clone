import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import { 
  ChannelDetail, 
  VideoDetail, 
  SearchFeed, 
  Navbar, 
  NewsFeed, 
  Videos, 
  BottomNav, 
  Radio, 
  TV
} from './components';

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <BottomNav />
      <Routes>
        <Route exact path='/' element={<NewsFeed />} />
        <Route exact path='/videos' element={<Videos />} />
        <Route exact path='/tv' element={<TV />} />
        <Route exact path='/radio' element={<Radio />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
