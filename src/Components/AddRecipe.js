import React from 'react';
import Photos from './Photos';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

var FontAwesome = require('react-fontawesome');

/* Componant Class that adds a Recipe to RecipeList, and return add recipe form....
------- 2 Levels Deep --------- */


class AddRecipe extends React.Component{

	constructor(props){
		super(props);

	this.state={
	  title: "",
    ingrediants: "",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
    photosVisible: this.props.photosVisible,
	}
	this.onTitleChange = this.onTitleChange.bind(this);
	this.onIngrediantsChange = this.onIngrediantsChange.bind(this);
	this.onSubmit = this.onSubmit.bind(this);
  this.receiveImage = this.receiveImage.bind(this);
	}


   /* ------ Event Handlers ------ */
	onTitleChange(event){
     this.setState({
     	title: event.target.value,
     });
	}

	onIngrediantsChange(event){
		this.setState({
			ingrediants: event.target.value,
		});
	}


/* Function that takes paramater called back by PhotoDisplay Component */
    receiveImage(photoUrl){
        this.setState({
         image: photoUrl,
         photosVisible: false,
         addRecipeVisible: true,
        });

        
    }

/* Functions gets called on "Add Button" onClick */
	onSubmit(){
		this.props.addRecipe(this.state.title, this.state.ingrediants, this.state.image);

        this.setState({
           title: "",
           ingrediants: "",
           image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
        });
	}
  
	

render(){
console.log(this.state.photosVisible);
return(
	<div className="hey">

    {this.props.addRecipeVisible ?
     <FontAwesome 
         className="backBtn" 
         name="arrow-circle-o-left" 
         size="4x"
         onClick={this.props.toggleForm}
          /> 
    :null}

    
	{this.props.addRecipeVisible ?
       <CSSTransitionGroup component="div" transitionName="fadeIn" transitionAppear={true} transitionAppearTimeout={500} transitionEnter={false} transitionLeave={false}> 
        <h2 className="addRecipeTitle"> Add Recipe </h2>
      <div className="addRecipe-flex">
        <div className="choosePhoto-container">
         <img className="displayImage" src={this.state.image} alt="displayImage" />
         <button type="button" className="choosePhotoBtn" onClick={this.props.choosePhoto}> Choose Photo </button>  
        </div>

       <form className="addRecipe-form">     
         <input type="text" placeholder="Enter recipe title" value={this.state.title} onChange={this.onTitleChange} />
         <textarea type="text" placeholder="Enter ingredients seperated by comma" value={this.state.ingredients} onChange={this.onIngrediantsChange} />
    
      <FontAwesome 
         className="submitRecipeBtn" 
         name="plus-circle" 
         size="5x"
         onClick={this.onSubmit}
          />
       </form> 
      </div> 
       
       </CSSTransitionGroup>
       : null}
        

     
     {this.props.photosVisible ?
        <Photos 
         hidePhotosOnClick={this.props.hidePhotosOnClick}
         addPhoto={this.receiveImage}
         goBack={this.props.goBack}
        />
        :null}  
        
    </div>   
	);
	
}
}

export default AddRecipe;