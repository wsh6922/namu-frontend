import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import MainView from './views/MainView';
import Main from './page/Main';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Blog from './page/Blog';
import Resume from './page/Resume'
import Footer from './components/Footer';
import Releases from './page/Releases';

const App = () => {
  return (
  <BrowserRouter>
    <Header/>
    <SideBar/>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/Blog" element={<Blog/>}/>
      <Route path="/Books" element={<Blog/>}/>
      <Route path="/Resume" element={<Resume/>}/>
      <Route path="/Releases" element={<Releases/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
};

export default App;