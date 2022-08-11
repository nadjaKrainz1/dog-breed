const getBreeds = async () => {
    const url = "https://dog.ceo/api/breeds/list/all"
    const res = await fetch(url)
    return await res.json()
    
}
export default getBreeds