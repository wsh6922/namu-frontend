import { Route, Routes, useLocation } from 'react-router-dom';
// import MainView from './views/MainView';
import Main from './page/Main';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Blog from './page/Blog';
import Resume from './page/Resume'
import Footer from './components/Footer';
import Releases from './page/Releases';
import Content from './page/Content';
import Login from './page/Login';

const App = () => {

  const location = useLocation();
  const isLoginPage = location.pathname === '/Login';

  return (
    <>
      {!isLoginPage && <Header />}
      {!isLoginPage && <SideBar />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Books" element={<Blog />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Releases" element={<Releases />} />
        <Route path="/Content" element={<Content />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </>
  );
};

export default App;