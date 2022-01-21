import React, { Component } from "react";
import axios from "axios";
//It is a library which is used to make requests to an API, 
//return data from the API, and then do things with that data in our React application. 

class AddAlbum extends Component {
  state = {
   albumCover: null,
   album: "",
   artist: "",
  };

  fileClickHandleChange = (e) => {
    const file = e.target.files[0];
    this.setState({
      albumCover: URL.createObjectURL(file),
    });
    console.log(file);
  //The URL.createObjectURL() static method creates a DOMString containing a URL representing the object given in the parameter.  
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { album, artist, albumCover } = this.state;
    const newAlbum = {
      id: new Date().getTime().toString(),
      album: album,
      artist: artist,
      albumCover: albumCover,
    };

    const albumList = this.props.onAdd(newAlbum);

    this.setState({
     
      albumCover: null,
      albumList: albumList,
      album: "",
      artist: "",
      
    });


    
    const formdata = new FormData();
    formdata.append("image", newAlbum.albumCover);
    formdata.append("albumTitle", newAlbum.album);
    formdata.append("artist", newAlbum.artist);

    let config = {
      Headers: {
        Authorization: "Client-ID e25d086f3e906eb",
        Accept: "application/json",
      },
    };




    axios
      .post("https://api.imgur.com/3/image", formdata, config)
      .then((res) => {
        return console.log(res);
      })
      .catch((error) => {
        return console.log("error", error);
      });
  };

  render() {
    return (
      <>
        <div className="form-header">
          <form onSubmit={this.handleSubmit}>
            <h2>Add Album Here</h2>
            <input
              type="text"
              name="album"
              placeholder="Add Title"
              onChange={(e) => this.setState({ album: e.target.value })}
              value={this.state.album}
              required={true}
            />
            <input
              type="text"
              name="artist"
              placeholder="Add Artist Name"
              onChange={(e) => this.setState({ artist: e.target.value })}
              value={this.state.artist}
              required={true}
            />
            <input
              type="file"
              name="albumCover"
              onChange={this.fileClickHandleChange}
              required={true}
            />
            <button className="btn">Upload</button>
          </form>
        </div>
      </>
    );
  }
}
export default AddAlbum;
//client secret:17f5c378988c6895608c7c62ff1c88aa4a6bc0a2