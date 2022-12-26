import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({children,changeMode}) => {
    return (
        <>
            <Header changeMode={changeMode} />
            {children}
            <Footer/>
        </>
    );
};

export default Layout;