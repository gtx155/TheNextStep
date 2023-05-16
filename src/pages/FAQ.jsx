import { Header } from "/src/components/Header";
import Footer from "/src/components/Footer";

export function FAQ (){
    return (
    <>
    <Header />
    <div className="genreOne-content-container border-gradient border-gradient-purple" id='1'>
        <div className="genreTilte border-gradient border-gradient-purple only-bottom">
            <h1>Why are the albums oredered in this way?</h1>
        </div>
        <div className="genreDescBox border-gradient border-gradient-purple only-bottom">
            <p>Albums are generally ordered from the most to least accessible.</p>
        </div>
    </div>
    <div className="genreOne-content-container border-gradient border-gradient-purple" id='1'>
        <div className="genreTilte border-gradient border-gradient-purple only-bottom">
            <h1>Why is X album in X genre</h1>
        </div>
        <div className="genreDescBox border-gradient border-gradient-purple only-bottom">
            <p>Albums are sorted not by </p>
        </div>
    </div>
        <Footer page={"home"}/>
        </>
    )
}
