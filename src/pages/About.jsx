import { Header } from "/src/components/Header";
import Footer from "/src/components/Footer";

export function About (){
    return (
        <>
            <Header />
            <h1 style={{color: '#FBFEF9', textAlign: 'center'}}>About</h1>
    <div className="genreOne-content-container border-gradient border-gradient-purple">
        <div className="genreDescBox border-gradient border-gradient-purple only-bottom">
            <p>Welcome to The Next Step, the perfect platform to showcase my music taste and share killer recommendations. Join me in exploring an incredible collection of albums across genres, as we celebrate the power of great music. Discover some amazing hidden gems! The site features over 200 albums in 43 genres. Get ready to elevate your music game and enjoy the experience!</p>
        </div>
    </div>
    <Footer page={"absolute"}/>
        </>
    )
}
