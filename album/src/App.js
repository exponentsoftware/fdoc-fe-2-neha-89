
import React, { Component } from "react";
import Albums from "./Components/Albums";
import AddAlbum from "./Components/AddAlbum";
import AlbumData from "./Components/AlbumData";

class App extends Component {
  state = {
    albums: AlbumData,
  };

  addAlbum = (albumItem) => {
    const newAlbumList = [albumItem, ...this.state.albums];
    return this.setState({ albums: newAlbumList });
  };

  removeAlbum = (id) => {
    const removeArr = [...this.state.albums].filter((albumItem) => {
      return albumItem.id !== id;
    });
    this.setState({ albums: removeArr });
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="header">
            <AddAlbum onAdd={this.addAlbum} albums={this.state.albums} />
          </div>

          <div className="albums">
            <div className="albums-box">
              <h1 className="albums-heading">Albums</h1>
              <div className="album_item">
                <Albums
                  albums={this.state.albums}
                  removeAlbum={this.removeAlbum}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;