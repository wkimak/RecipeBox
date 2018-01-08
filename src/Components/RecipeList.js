import React from 'react';
import Recipe from './Recipe';


/* Function to Map through all Recipes....
 Passing props down to individual recipes and other componants
 --------- 1 Level Deep ----------- 
  */

function RecipeList(props){

if(props.recipesVisible){
return(
	 <div className="flex-container">
	{props.recipes.map(function(val, index){
       return(
        <Recipe
         image = {val.image}
         title = {val.title}
         recipesVisible = {props.recipesVisible}
         toggleIngredients = {function(){props.toggleIngredients(index)}}
         key = {val.id}
         />
       	);
	})}
	</div>
	);
   } else{
    return(
        <div>
    {props.recipes.map(function(val, index){
     return(
      <Recipe
         title = {val.title}
         ingredients = {val.ingredients}
         ingredientsVisible = {val.ingredientsVisible}
         recipesVisible = {props.recipesVisible}
         toggleIngredients = {function(){props.toggleIngredients(index)}}
         deleteRecipe = {function(){props.deleteRecipe(index)}}
         showEditForm = {function(){props.showEditForm(index)}}
         editFormVisible = {props.editFormVisible}
         submitEdits = {function(changeIngredients){props.submitEdits(index,changeIngredients)}}
         key = {val.id}
          />
        );
    })}
    </div>
        )
   }
}


export default RecipeList;