import React, {useState, useEffect} from "react"
import './hero.scss'
import Social from "../../common/social-contact";

function Hero(){

    const [quote, setQuote] = useState('');
    const getQuote = () =>{
        fetch("https://raw.githubusercontent.com/skolakoda/programming-quotes-api/master/Api/Data/quotes.json")
            .then(res => res.json())
            .then(data => {
                let randomQuote = Math.floor(Math.random() * data.length);
                setQuote(data[randomQuote]);
            });
    }

    useEffect(() => {
        getQuote();
    },[]);

    return(
        <div className="hero">
            <div className="hero-top">
                <div className="hero-top-info">
                    Hi there🤗👋, I am <br/>
                    <span className="hero-top-info-name">Pero Soldat</span>. <br/>
                    I love experimenting with the web.
                </div>
                <div className="hero-top-photo">
                    <img src={require('../../../assets/coding.svg').default} alt="_blank" className="hero-img"/>
                </div>
            </div>
            <Social/>
            <div className="quotes">
                <p className="quote">{quote.en}</p>
                <p className="author">{quote.author}</p>
            </div>
        </div>
    )
}

export default Hero