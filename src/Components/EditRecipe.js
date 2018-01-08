import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';


/* Componant Class to Edit Ingrediants List, along with returning the edit form...
-------- 4 Levels Deep ----------- */


class EditRecipe extends React.Component{


constructor(props){
   super(props);

   this.state = {
    changeIngredients: this.props.changeIngredients,
   }
   this.handleEdits = this.handleEdits.bind(this);
   this.submitEditsBtn = this.submitEditsBtn.bind(this);
}

handleEdits(event){
this.setState({
changeIngredients: event.target.value
});
}

submitEditsBtn(){
this.props.submitEdits(this.state.changeIngredients);
}



render(){
	return(

   <CSSTransitionGroup component="div" transitionName="grow" transitionAppear={true} transitionAppearTimeout={500} transitionEnter={false} transitionLeave={false} className="editFormContainer"> 
     <form className="editRecipeForm">
       <input type="text" value={this.state.changeIngredients} onChange={this.handleEdits} />
       <button className="submitEditsBtn" type="button" onClick={this.submitEditsBtn}> Save Changes </button>
     </form>
   </CSSTransitionGroup>  


		);
}




}

export default EditRecipe;