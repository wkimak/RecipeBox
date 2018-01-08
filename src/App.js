import React, { Component } from 'react';
import Navigation from './Components/Navigation';
import RecipeList from './Components/RecipeList';
import Footer from './Components/Footer';



/* RecipeList Array of Objects */
var recipes = [
  {
  image: "https://assets.epicurious.com/photos/583f2ecab80c02a24264c1c1/master/pass/apple-pie.jpg",
  title: "Apple Pie",
  ingredients: "2 cups all-purpose flour, 1/2 teaspoon salt, 6 ounces unsalted butter, 12 large apples, 1/4 cup brown sugar, 1 tablespoon ground cinnamon, 1 large egg beaten with 2 tablespoons water",
  ingredientsVisible: false,
  id:0,
  },
  {
  image: "https://www.onceuponachef.com/images/2015/01/Pasta-Fagioli-575x446.jpg",
  title: "Pasta E Fagioli",
  ingredients: "1lb Goya 16 Bean Soup Mix, 2 tablespoons olive oil, 6 ounces pancetta, 1 large onion, 1 tablespoon minced garlic, 1/2 teaspoon crushed red pepper flakes, 1 cup dry red wine, 4 to 6 cups good chicken stock, 1 cup miniature pasta",
  ingredientsVisible: false,
  id: 1,
  },
  {
  image: "https://lh6.googleusercontent.com/-zgsC9661HqE/T84vD55kg3I/AAAAAAAAHEc/ozqe4On72sw/s640/Miracle+Mac+front.jpg",
  title: "Mac N Cheese",
  ingredients: "1 tablespoon salt, 1 pound large elbow macaroni, 6 tablespoons butter, 6 tablespoons all-purpose flour, 3 cups milk, 1 cup heavy cream, 1 tablespoon freshly ground black pepper, 1 pound white cheddar, 4 ounces Romano, 4 ounces Asiago, 2 cups bread crumbs, 2 tablespoons chopped fresh parsley",
  ingredientsVisible: false,
  id: 2,
  }
]

var nextId = 3;


class App extends Component {

constructor(props){
  super(props);

  this.state = {
    recipes: recipes,
    recipesVisible: true,
    addRecipeVisible: false,
    editFormVisible: false,
    photosVisible: false,
    image: "",
  }

  this.toggleIngredients = this.toggleIngredients.bind(this);
  this.deleteRecipe = this.deleteRecipe.bind(this);
  this.toggleForm = this.toggleForm.bind(this);
  this.addRecipe = this.addRecipe.bind(this);
  this.showEditForm = this.showEditForm.bind(this);
  this.submitEdits = this.submitEdits.bind(this);
  this.choosePhoto = this.choosePhoto.bind(this);
  this.hidePhotosOnClick = this.hidePhotosOnClick.bind(this);
  this.goBack = this.goBack.bind(this);
}


/* View Ingrediants/ Exit Ingrediants Button */
toggleIngredients(indexToChange){
this.setState({  
editFormVisible: false,
recipesVisible: !this.state.recipesVisible,
recipes: this.state.recipes.map(function(val, index){
if(index === indexToChange){
return{
  ...val,
 ingredientsVisible: !val.ingredientsVisible,
}
};
return val;
})
});
}

/* Delete recipe Button */
deleteRecipe(index){
this.state.recipes.splice(index, 1);
this.setState(this.state);
this.setState({
recipesVisible: true,
});
}

/* --------- Add Recipe Form ----------- */
/* Show/Hide Form */
toggleForm(){
  this.setState({
    addRecipeVisible: !this.state.addRecipeVisible,
    recipesVisible: !this.state.recipesVisible,
  });
}

/* Add Recipe */
addRecipe(title, ingredients, photoUrl){
this.state.recipes.push({
image: photoUrl,  
title: title,
ingredients: ingredients,
ingredientsVisible: false,
id: nextId,
});

this.setState(this.state);

this.setState({ 
recipesVisible: true,
addRecipeVisible: false,
});

nextId++;
}

/* -----------  Show photo gallery ----------- */

/* choosePhoto Btn event Handler function */
choosePhoto(){
    this.setState({
    photosVisible: true,
    });
  }

  hidePhotosOnClick(){
    this.setState({
     addRecipeVisible: true,
     photosVisible: false,
    });
  }


  /* go back to add Recipe Form */
  goBack(){
    this.setState({
      photosVisible: false,
      addRecipeVisible: true,
    });
  }



/* ---------- Edit Recipe ------------- */
showEditForm(){
this.setState({
editFormVisible: !this.state.editFormVisible,
});
}



submitEdits(indexToChange, changeIngredients){
var recipes = this.state.recipes;
recipes[indexToChange].ingredients = changeIngredients;

this.setState({recipes: recipes});
}




  render() {

    return (
    <div className="mainContainer">
    
    <Navigation 
    recipesVisible = {this.state.recipesVisible}
    toggleForm={this.toggleForm} 
    addRecipe={this.addRecipe}
    addRecipeVisible={this.state.addRecipeVisible}
    photosVisible={this.state.photosVisible}
    choosePhoto={this.choosePhoto}
    goBack = {this.goBack}
    hidePhotosOnClick = {this.hidePhotosOnClick}
    />


    <RecipeList 
    recipes={this.state.recipes} 
    toggleIngredients={this.toggleIngredients} 
    recipesVisible = {this.state.recipesVisible}
    exitIngredients={this.exitIngredients}
    deleteRecipe = {this.deleteRecipe}
    showEditForm = {this.showEditForm}
    editFormVisible={this.state.editFormVisible}
    submitEdits = {this.submitEdits}
     />
    

   {this.state.recipesVisible ?
     <Footer />
     : null}
   

   </div>

    );
  }
}

export default App;
