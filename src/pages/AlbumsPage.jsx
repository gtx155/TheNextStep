import { Header } from "/src/components/Header";
import { MyAlbums } from "/src/components/MyAlbums";
import RockData from "/src/Rock.json"
import MetalData from "/src/Metal.json"
import RockDesc from "/src/RockDesc.json"
import './StyleAlbums.css'


export function AlbumsPage (){
    return (
        <>
            <Header />
            <MyMusicPages />
        </>
    )
}

function MyMusicPages() {
  const ROCKDATA = RockData;
  const METALDATA = MetalData;
  const ROCKDESC = RockDesc;

  // Merge the two arrays of objects into one
  const combinedMusicData = [...ROCKDATA, ...METALDATA, ...ROCKDESC];

  return (
    <>
      {combinedMusicData.map((music, index) => {
        // Check if music.subRock is defined, otherwise check music.subMetal, and fallback to empty string
        const name = music.subRock || music.subMetal || '⚠️Title';
        const desc = music.descRock || '⚠️Bacon ipsum dolor amet landjaeger buffalo dolore turkey. Nostrud exercitation sunt, aliquip fatback leberkas consequat.';
        console.log(music.descRock);

        return (
          <MyAlbums key={index} name={name} desc={desc} id={name.replace(/\s/g, '')}/>
        );
      })}
    </>
  );
}
