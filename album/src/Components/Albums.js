import React from "react";
import Album from "./Album";




const Albums = ({ albums, removeAlbum }) => {
  return albums.map((album) => (
    <Album
      key={album.id}
      id={album.id}
      album={album.album}
      artist={album.artist}
      albumCover={album.albumCover}
      albumData={albums}
      onRemove={removeAlbum}
    />
  ));
};

export default Albums;