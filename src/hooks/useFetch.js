export const useFetch = async (drink) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    const data = await response.json()
    return data
}