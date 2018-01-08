import React from 'react';

/* Display Images with click event
--------- 4 Levels Deep --------- */

class PhotosDisplay extends React.Component{

constructor(props){
	super(props);

	this.state = {
		image: this.props.images,
	}
	this.handlePhoto = this.handlePhoto.bind(this);
}


 handlePhoto(){
 	this.props.addPhoto(this.state.image);

 	this.props.hidePhotosOnClick();
}


render(){
return(

<div>

  <li>
    <img onClick={this.handlePhoto} src={this.props.images} alt="foodPhoto" />
  </li>

</div>

	);
}
}


export default PhotosDisplay;