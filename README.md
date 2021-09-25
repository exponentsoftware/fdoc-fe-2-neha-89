# Day 7

## Spotify: Add album and lifting up the state

### 1. Add Album
- a. Create a component called `AddAlbum` which renders 2 input( text ) fields for `album_title` and `artist` and 1 upload field for `album_cover`. Insert this `AddAlbum` component in the render output of `App` Component.  
- b. Add change event listeners on each input and on change set each of the values in state of `AddAlbum`  
- c. Add a submit event listener to `AddAlbum`. Make sure you set it on a 'form' element. Inside the submit event handler create an object which will have an 'id' (which should be incremented on each insert), 'artist', 'album' and 'cover' property taken from state which was set in step 2.
> User [Imgur](https://api.imgur.com/endpoints/image/) or any other similar API to upload an image and get the url. Store the image url in an Array once it is uploaded
### 2. Uplifting the state
- a. Create a receiver method in `App` and pass it to `AddAlbum` as props. Inside the submit handler of `AddAlbum`, call the receiver function prop and pass in the album object created in previous step.
- b. Add functionality to receiver method in `App` to add the album object passed in to the albums array in state of `App` created in the previous challenge ( Day 6 )
- c. Add a delete method to `App` component and pass it to `Albums` as props and from `Albums` pass it to each `Album` component as props.
- d. Add a delete button to `Album` component and an event handler to listen for click events. Inside the click handler call the delete method in props and pass in the id of current album.
- e. Implement the functionality of delete method in `App` by filtering out the album from the array in state which has the id received by the method.
> Implement components which do not implement state as functional components
