import React from "react";
import { HashLink } from 'react-router-hash-link';
import subRock from '/src/Rock.json';
import subMetal from '/src/Metal.json';


export function SubgenresR() {
  return (
    <>
      {subRock.map((subgenre, index) => (
        <HashLink to={`/AlbumsPage#${subgenre.subRock.replace(/\s+/g, '')}`} key={index}>
          <div className="item border-gradient border-gradient-purple only-bottom">{subgenre.subRock}</div>
        </HashLink>
      ))}
    </>
  );
}

export function SubgenresM() {
  return (
    <>
      {subMetal.map((subgenre, index) => (
        <HashLink to={`/AlbumsPage#${subgenre.subMetal.replace(/\s+/g, '')}`} key={index}>
        <div className="item border-gradient border-gradient-purple only-bottom">{subgenre.subMetal}</div>
        </HashLink>
      ))}
    </>
  );
}
