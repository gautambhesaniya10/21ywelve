import './App.css';
import Homepage from './pages/Homepage';
import { Routes ,Route } from 'react-router-dom';
import UserAlbum from './pages/UserAlbum';
import AlbumView from './pages/AlbumView';


function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/useralbum/:id' element={<UserAlbum />}></Route>
        <Route path='/albumpage/:id' element={<AlbumView />}></Route>
      </Routes>
    </div>
    </>
  );
}

export default App;
