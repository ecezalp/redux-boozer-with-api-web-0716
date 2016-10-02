const BASE_URL = 'http://localhost:3000/api/v1'

export function fetchCocktails(){
  // const cocktails = [{id: 1, name: 'Bloody Mary', description: 'Tomato Juice and Vodka mixed together for brunch', instructions: 'Mix together and serve over ice', proportions: [{amount: '1 oz', ingredient_name: 'Vodka'}, {amount: '3 oz', ingredient_name: 'Tomato Juice'}]}]
  const cocktails = fetch(`${BASE_URL}/cocktails`).then(
      response => {return response.json()}
    ).then(cocktailsPayload => { return cocktailsPayload}
    )
  return {
    type: 'FETCH_COCKTAILS',
    payload: cocktails
  }
}

export function createCocktail(params){
  const cocktail = fetch(`${BASE_URL}/cocktails`,
    {method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }});
    debugger
  return {
    type: 'CREATE_COCKTAIL',
    payload: params.cocktail
  }
}
