import { Header } from "../components/Header";
import { SubgenresR } from "../components/SubgenresButtons";
import { SubgenresM } from "../components/SubgenresButtons";


export function Home (){
    return (
        <>
        <Header />
        <div className="homepage-container">
            <h1 className="NS-title">Elevate your rock and metal experience.</h1>
            <br />
            <p className="subTitle">Discover your genre!</p>
        </div>
        <div className="main-content-container">
            <SubgenresR />
            <SubgenresM />
        </div>
        {/*<footer className="footer">
            <p>Email: GOSHO</p>
        </footer> */}
        </>
    )
}
