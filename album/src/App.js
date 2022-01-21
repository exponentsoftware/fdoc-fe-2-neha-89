
import React, { Component } from "react";
import Albums from "./Components/Albums";
import AddAlbum from "./Components/AddAlbum";
import AlbumData from "./Components/AlbumData";

class App extends Component {
  state = {
    albums: AlbumData,
  };
//Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected,
// or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

  addAlbum = (albumItem) => {
    const newAlbumList = [albumItem, ...this.state.albums];
    return this.setState({ albums: newAlbumList });
  };
//setState:we use the setState() method to change the state object. It ensures that the component has been updated and calls for re-rendering of the component.
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