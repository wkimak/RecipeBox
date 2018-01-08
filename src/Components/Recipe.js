import React from 'react';
import Ingredients from './Ingredients';



/* Componant that returns individual Recipes...
Ingrediants component is nested in this componant. 
------- 2 Levels Deep ---------
*/


function Recipe(props){

return(
 <div> 
  {props.recipesVisible ?
  <div className="recipe-container">
     <img src = {props.image} alt="" />
     <h2> {props.title} </h2>
     <button className="viewIngredientsBtn" type="button" onClick={props.toggleIngredients}> View Ingredients </button>
     </div>
     : null}


   {props.ingredientsVisible ?
  <Ingredients 
  title={props.title}
  ingredients={props.ingredients} 
  exitIngredients={props.toggleIngredients}
  deleteRecipe = {props.deleteRecipe}
  showEditForm = {props.showEditForm}
  editFormVisible = {props.editFormVisible}
  submitEdits = {props.submitEdits}
   />
: null}

</div>


	);

}

export default Recipe;