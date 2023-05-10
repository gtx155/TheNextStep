import "../components/Footer.css"

function Footer(props) {
    const { page } = props;
  
    return (
      <footer className={`footer-${page}`}>
        <p style={{marginLeft: '5px' ,marginRight: '5px'}}>API provided by</p>
        <a href="https://www.last.fm/home">
            <img className="icon-api" src="/lastfm.webp" alt="lastfm"></img>
        </a>
        <p style={{marginLeft: '5px'}}>This website is not affiliated with last.fm</p>
      </footer>
    );
  }

export default Footer

