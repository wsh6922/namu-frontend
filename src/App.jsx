import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
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
import Writer from './page/Writer';
import UserProfileLoader from './api/UserProfileLoader';

const App = () => {

  const location = useLocation();
  const isLoginPage = location.pathname === '/Login';
  const isWriterPage = location.pathname === '/Writer';

  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      })
    }, [pathname])
    return null;
  }

  return (
    <>
      <UserProfileLoader />
      <ScrollToTop />
      {!isLoginPage && !isWriterPage && <Header />}
      {!isLoginPage && !isWriterPage && <SideBar />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Blog" element={<Blog type="Blog" id={1} />} />
        <Route path="/Books" element={<Blog type="Books" id={2} />} />
        <Route path="/Resume" element={<Resume type="Resume" />} />
        <Route path="/Releases" element={<Releases type="Releases" />} />
        <Route path="/Content/:id" element={<Content />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Writer" element={<Writer />} />
      </Routes>
      {!isLoginPage && !isWriterPage && <Footer />}
    </>
  );
};

export default App;