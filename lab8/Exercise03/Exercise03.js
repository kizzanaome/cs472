(async function  fetchRecipes (){
    try{
        const response = await fetch("https://dummyjson.com/recipes")
        if (response.status === 200) {
            const data = await response.json();
            console.log(data)
            const recipeNames = data.recipes.map(recipe => recipe.name)
            console.log(recipeNames)
        }else{
            console.log("Failed to fetch recipes", response.status)
        }
    }catch(error){
        console.log("Error Fetching recipes:", error)
    }

}())