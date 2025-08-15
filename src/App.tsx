import './App.css'
import { BrowserRouter as  Router, Routes, Route, } from 'react-router';
import NavigationBar from './components/Navigation';
import Home from './components/Home';
import Browse from './components/Browse';
import Trending from './components/trending';
import Following from './components/Following';
import YourVideos from './components/YourVideos';
import PlayList from './components/Playlist';
import Header from './components/Header';

function App() {

  return (
    <>
      <Router>
        <Header/>
        <NavigationBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/browse' element={<Browse/>}/>
          <Route path='/trending' element={<Trending/>}/>
          <Route path='/following' element={<Following/>}/>
          <Route path='/your_videos' element={<YourVideos/>}/>
          <Route path='/playlist' element={<PlayList/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
