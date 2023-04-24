export function MyAlbums(props) {
    // Check if music and albums are defined, otherwise set default values
    const albums = props.albums || {};
  
    return (
      <div className="genreOne-content-container border-gradient border-gradient-purple" id={props.id}>
        <div className="genreTilte border-gradient border-gradient-purple only-bottom">
          <h1>{props.name}</h1>
        </div>
        <div className="genreDescBox border-gradient border-gradient-purple only-bottom">
          <p>{props.desc}</p>
        </div>
        <div className="albumHolderBox border-gradient border-gradient-purple only-bottom">
          <p className="albumsTitle">Recommended Albums</p>
          <div className="albumFlexHolder">
            {albums.albumsData.map((album, index) => (
            <div key={index}>
              <img className="border-gradient border-gradient-purple only-bottom" src={album.albumImg} height="200px"></img>
              <p>{album.albumName}</p>
            </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  