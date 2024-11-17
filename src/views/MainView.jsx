// import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
// import Main from "../page/Main";
import Blog from "../page/Blog";
// import Content from "../page/Content";
import Footer from "../components/Footer";

const MainView = () => {
    return (
        <>
        <Header/>
        <SideBar/>
        {/*<Main/>*/}
        <Blog/>
        {/* <Content/> */}
        <Footer/>
        </>
    );
};

export default MainView;
