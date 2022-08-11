const getDogs = async (breed) => {
    const url = `https://dog.ceo/api/breed/${breed}/images`
    if (!breed) return null
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)


    const dogsImages  = data.message
    return  dogsImages;
    
}
export default getDogs