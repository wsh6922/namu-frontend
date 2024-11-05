// import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
// import Main from "../components/Main";
// import Development from "../components/Development";
import Content from "../components/Content";
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
