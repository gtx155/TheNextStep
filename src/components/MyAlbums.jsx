export function MyAlbums(props) {
    return (
    <div className="genreOne-content-container border-gradient border-gradient-purple" id={props.id}>
        <div className="genreTilte border-gradient border-gradient-purple only-bottom"><h1>{props.name}</h1></div>
        <div className="genreDescBox border-gradient border-gradient-purple only-bottom">
            <p>{props.desc}</p>
        </div>
        <div className="albumHolderBox border-gradient border-gradient-purple only-bottom">
            <p className="albumsTitle">Recommended Albums</p>
            <div className="albumFlexHolder">
                <img className="border-gradient border-gradient-purple only-bottom" src="/2.webp" height="200px" alt="Album"></img>
                <img className="border-gradient border-gradient-purple only-bottom" src="/2.webp" height="200px" alt="Album"></img>
                <img className="border-gradient border-gradient-purple only-bottom" src="/2.webp" height="200px" alt="Album"></img>
                <img className="border-gradient border-gradient-purple only-bottom" src="/2.webp" height="200px" alt="Album"></img>
                <img className="border-gradient border-gradient-purple only-bottom" src="/2.webp" height="200px" alt="Album"></img>
                <img className="border-gradient border-gradient-purple only-bottom" src="/2.webp" height="200px" alt="Album"></img>
            </div>
            <div className="textHolder">
                <p>Leprous - Holder</p>
                <p>Leprous - Holder</p>
                <p>Leprous - Holder</p>
                <p>Leprous - Holder</p>
                <p>Leprous - Holder</p>
                <p>Leprous - Holder</p>
            </div>
        </div>
    </div>
    );
  }
  