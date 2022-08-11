import React, {useState, useEffect} from 'react'
import Select from "./components/Select";
import Card from "./components/Card";
import getDogs from './helpers/getDog';

function App() {
  const[dogImages, setDogImages] = useState()
  useEffect(()=>{
    updateDog();
  }, [])
  const updateDog = (breed) =>{
    getDogs(breed)
    .then((dogImages)=> {
      if(!dogImages) return 
      setDogImages(dogImages)
    })
  }
  return <div className="app">
    <div className='box'>
    <Select onChange={updateDog}/>
    </div>
    <div className='images'>
    {
      dogImages?.map(dogImage => 
        <Card dogImage = {dogImage} key ={dogImage}/>
        )
    }
    </div>
  </div>;
}

export default App;
