import { Header } from "/src/components/Header";
import Footer from "/src/components/Footer";

export function Contacts (){
    return (
        <>
            <Header />
            <h1 style={{color: "#FBFEF9", textAlign: 'center'}}>Contacts</h1>
            <a href="https://github.com/gtx155/TheNextStep">
                <h2 style={{color: "#FBFEF9", textAlign: 'center'}}>Github</h2>
            </a>
            <Footer page={"absolute"}/>
        </>
    )
}
