import React from 'react';
import PhotosDisplay from './PhotosDisplay';
import $ from 'jquery';


/* Photos Component, using API to pull images...
----- 3 Levels Deep ------ */

class Photos extends React.Component{

constructor(props){
	super(props);

	this.state = {
		searchTerm: "",
		imagesApi: [],
	}
	this.onSearchTermChange = this.onSearchTermChange.bind(this);
	this.onSubmit = this.onSubmit.bind(this);
	this.sendRequest = this.sendRequest.bind(this);
}


onSearchTermChange(event){
	this.setState({
		searchTerm: event.target.value,
	});
}



onSubmit(event){
event.preventDefault();

this.sendRequest(this.state.searchTerm);
}



sendRequest(searchTerm){
	$.ajax({
		url: "https://api.flickr.com/services/feeds/photos_public.gne?tags=" + searchTerm + "&format=json&jsoncallback=?",
		dataType: "json",
		success: function(data){
			this.setState({
				imagesApi: data.items,
			});
			console.log("it works");
		}.bind(this),
		error: function(){
			console.log("error");
		}
	});
}




render(){
return(

<div className="photos-container">
 <form onSubmit={this.onSubmit}>
  <input className="photosInput" value={this.state.searchTerm} onChange={this.onSearchTermChange} type="text" placeholder="Search Photos" />
 </form> 
  <button className="exitBtn" onClick={this.props.goBack}> Exit </button>

<ul className="photos-ul">
{this.state.imagesApi.map(function(val,index){
return(
<PhotosDisplay 
addPhoto={this.props.addPhoto}
images={val.media.m}
hidePhotosOnClick={this.props.hidePhotosOnClick}
key={index}
 />
);
}.bind(this))}
</ul>  

</div>

);

}


}

export default Photos;