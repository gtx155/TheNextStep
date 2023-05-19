import { Header } from "/src/components/Header";
import Footer from "/src/components/Footer";

export function FAQ (){
    return (
    <>
    <Header />
    <h1 style={{color: 'white', textAlign: 'center'}}>FAQ</h1>
    <div className="genreOne-content-container border-gradient border-gradient-purple">
        <div className="genreTilte border-gradient border-gradient-purple only-bottom">
            <h1>Why are the albums ordered in this way?</h1>
        </div>
        <div className="genreDescBox border-gradient border-gradient-purple only-bottom">
            <p>Albums are generally ordered from the most to least accessible.</p>
        </div>
    </div>
    <div className="genreOne-content-container border-gradient border-gradient-purple">
        <div className="genreTilte border-gradient border-gradient-purple only-bottom">
            <h1>Bacon ipsum dolor amet pork andouille dolor picanha proident ball tip spare ribs?</h1>
        </div>
        <div className="genreDescBox border-gradient border-gradient-purple only-bottom">
            <p>Beef filet mignon pork belly commodo lorem ea aute eiusmod do.</p>
        </div>
    </div>
    <div className="genreOne-content-container border-gradient border-gradient-purple">
        <div className="genreTilte border-gradient border-gradient-purple only-bottom">
            <h1>Bacon ipsum dolor amet pork andouille dolor picanha proident ball tip spare ribs?</h1>
        </div>
        <div className="genreDescBox border-gradient border-gradient-purple only-bottom">
            <p>Beef filet mignon pork belly commodo lorem ea aute eiusmod do.</p>
        </div>
    </div>
    <div className="genreOne-content-container border-gradient border-gradient-purple">
        <div className="genreTilte border-gradient border-gradient-purple only-bottom">
            <h1>Bacon ipsum dolor amet pork andouille dolor picanha proident ball tip spare ribs?</h1>
        </div>
        <div className="genreDescBox border-gradient border-gradient-purple only-bottom">
            <p>Beef filet mignon pork belly commodo lorem ea aute eiusmod do.</p>
        </div>
    </div>
        <Footer page={"home"}/>
        </>
    )
}
