// import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
// import Main from "../page/Main";
// import Development from "../page/Development";
import Content from "../page/Content";
import Footer from "../components/Footer";

const MainView = () => {
    return (
        <>
        <Header/>
        <SideBar/>
        {/*<Main/>*/}
        {/* <Development/> */}
        <Content/>
        <Footer/>
        </>
    );
};

export default MainView;
