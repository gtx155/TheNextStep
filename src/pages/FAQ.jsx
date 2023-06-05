import { Header } from "/src/components/Header";
import Footer from "/src/components/Footer";

export function FAQ (){
    return (
    <>
    <Header />
    <h1 style={{color: '#FBFEF9', textAlign: 'center'}}>FAQ</h1>
    <div className="genreOne-content-container border-gradient border-gradient-purple">
        <div className="genreTilte border-gradient border-gradient-purple only-bottom">
            <h1>Why are the albums ordered in this way?</h1>
        </div>
        <div className="genreDescBox border-gradient border-gradient-purple only-bottom">
            <p>Albums are generally ordered from the most to least accessible left to right and top to bottom.
                <br />• Accessibility refers to the greater likelihood of enjoying the music if you're not familiar with the genre or specific albums.</p>
        </div>
    </div>
    <div className="genreOne-content-container border-gradient border-gradient-purple">
        <div className="genreTilte border-gradient border-gradient-purple only-bottom">
            <h1>Why isn't X genre featured?</h1>
        </div>
        <div className="genreDescBox border-gradient border-gradient-purple only-bottom">
            <p>It's mostly because either I'm not a big fan of it or I haven't really listened to it enough.</p>
        </div>
    </div>
    <div className="genreOne-content-container border-gradient border-gradient-purple">
        <div className="genreTilte border-gradient border-gradient-purple only-bottom">
            <h1>Will there be more album additions?</h1>
        </div>
        <div className="genreDescBox border-gradient border-gradient-purple only-bottom">
            <p>Not in the near future.</p>
        </div>
    </div>
        <Footer page={"home"}/>
        </>
    )
}
