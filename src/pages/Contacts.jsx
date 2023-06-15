import { Header } from "/src/components/Header";
import Footer from "/src/components/Footer";
import "/src/pages/InfoPages.css"

export function Contacts (){
    return (
        <>
            <Header />
            <h1 className="CA-Title">Contacts</h1>
            <div className="ContactsContainer">
            <a href="https://github.com/gtx155/TheNextStep" className="item border-gradient border-gradient-purple only-bottom">
                Github
            </a>
            </div>
            <Footer page={"absolute"}/>
        </>
    )
}
