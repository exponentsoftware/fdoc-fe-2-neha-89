import React from "react";

const Album = (props) => {
  console.log(props.id);
  return (
    <>
      <div className="album">
        <div className="album_info">
          <img src={props.albumCover} alt="Album-cover" className="album_img" />
          <p className="album-title">{props.album}</p>
          <span className="album_artist">{props.artist}</span>
          <button className="btn mt" onClick={() => props.onRemove(props.id)}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Album;