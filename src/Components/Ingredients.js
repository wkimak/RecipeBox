import React from 'react';
import EditRecipe from './EditRecipe';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
var FontAwesome = require('react-fontawesome');


/* Componant that returns actual ingrediants...
Edit Recipe componant is nested here
-------- 3 Levels Deep ----------- */


function Ingredients(props){

var ingrArray = props.ingredients.split(",");


return(

<div>

 <FontAwesome 
         className="backBtn-ingredients" 
         name="arrow-circle-o-left" 
         size="4x"
         onClick={props.exitIngredients}
          /> 


<CSSTransitionGroup component="div" transitionName="fadeIn" transitionAppear={true} transitionAppearTimeout={500} transitionEnter={false} transitionLeave={false}>
 <div className="ingredients-container">
      <h1> {props.title} Ingredients </h1>
      
       <ul className="ingredients-list">
      {ingrArray.map(function(val, index){
      	return(
     <li className="ingredientItem" key={index}> {"~ " + val} </li>
          );
      })}
      </ul>


        {props.editFormVisible ?
         <EditRecipe submitEdits={props.submitEdits} changeIngredients={props.ingredients} />
         : null}
      
   </div>

   <div className="ingredients-btns-container">
     <button className="editBtn" type="button" onClick={props.showEditForm}> Edit </button>
     <button className="deleteBtn" type="button" onClick={props.deleteRecipe}> Delete </button>
   </div> 

   </CSSTransitionGroup>



    </div>  


	);

}


export default Ingredients;