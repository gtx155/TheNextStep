import { useState, useEffect, useRef } from 'react';

function AlbumCovers(props) {
  const [albumInfo, setAlbumInfo] = useState(null);
  const [imgSrc, setImgSrc] = useState('');
  const API_KEY = import.meta.env.VITE_API_KEY;
  const ARTIST_NAME = props.artistName;
  const ALBUM_NAME = props.albumName;
  const API_URL = `https://ws.audioscrobbler.com/2.0/?method=album.getinfo&artist=${ARTIST_NAME}&album=${ALBUM_NAME}&api_key=${API_KEY}&format=json`;

  const imgRef = useRef(null);

  useEffect(() => {
    const cachedAlbumInfo = localStorage.getItem(API_URL);
    if (cachedAlbumInfo) {
      setAlbumInfo(JSON.parse(cachedAlbumInfo));
    } else {
      fetch(API_URL)
        .then(response => response.json())
        .then(data => {
          setAlbumInfo(data.album);
          localStorage.setItem(API_URL, JSON.stringify(data.album));
        })
        .catch(error => console.error(error));
    }
  }, [API_URL]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          setImgSrc(albumInfo?.image?.filter(image => image.size === 'large')[0]?.['#text'] || ''); //image sizes: small, medium, large, extralarge
        }
      });
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    }
  }, [albumInfo]);

  return (
    <div>
      <img 
        className="border-gradient border-gradient-purple only-bottom" 
        src={imgSrc ||"/noimg-holder.webp"} 
        height="200px" 
        alt={albumInfo?.name} 
        ref={imgRef}
      />
    </div>
  );
}

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
              <AlbumCovers artistName={album.artistName} albumName={album.albumName} />
              <p>{album.artistName} - {album.albumName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
