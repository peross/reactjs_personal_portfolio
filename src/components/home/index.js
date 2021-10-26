import React from 'react'
import './home.scss';
import Header from "../header";
import Footer from "../footer";
import Body from "../body";

function Home(){
    return(
        <div className="home">
            <div>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        </div>
    )
}

export default Home