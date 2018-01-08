import React from 'react';
import AddRecipe from './AddRecipe';
var FontAwesome = require('react-fontawesome');

/* Componant that return the NavBar...
AddRecipe Form is nested in this componant
-------- 1 Level Deep -------- */


function Navigation(props){
 
return(
	<div>
     <div className="navBar">

     {props.recipesVisible ?
       <p> Recipe Box </p>
       : null}
        
        {props.recipesVisible ?
         <FontAwesome 
         className="addRecipe" 
         name="plus-circle" 
         size="4x"
         onClick={props.toggleForm}
          />    
          : null}
     </div>

    
       <AddRecipe 
        addRecipeVisible={props.addRecipeVisible}
        toggleForm={props.toggleForm}
        addRecipe={props.addRecipe} 
        choosePhoto={props.choosePhoto}
        photosVisible={props.photosVisible}
        goBack={props.goBack}
        hidePhotosOnClick={props.hidePhotosOnClick}
         />
        
        
  </div> 

	);

}


export default Navigation;