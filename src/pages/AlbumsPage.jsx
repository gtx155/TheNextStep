import { Header } from "/src/components/Header";
import { MyAlbums } from "/src/components/MyAlbums";
import Footer from "/src/components/Footer"
import RockData from "/src/Rock.json"
import MetalData from "/src/Metal.json"
import './StyleAlbums.css'

export function AlbumsPage (){
    return (
        <>
            <Header />
            <GenresTextDataLoader />
            <Footer page={"albums"}/>
        </>
    )
}

function GenresTextDataLoader() {
  const ROCKDATA = RockData;
  const METALDATA = MetalData;

  // Merge the two arrays of objects into one
  const combinedMusicData = [...ROCKDATA, ...METALDATA,];

  return (
    <>
      {combinedMusicData.map((music, index) => {
        // Check if music.subRock is defined, otherwise check music.subMetal, and fallback to empty string
        const name = music.subRock || music.subMetal;
        const desc = music.descRock || music.descMetal;

        return (
          <MyAlbums key={index} name={name} desc={desc} albums={music} id={name.replace(/\s/g, '')}/>
        );
      })}
    </>
  );
}
