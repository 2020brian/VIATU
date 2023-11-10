import { useEffect, useState } from "react"
import Product from "./Product";
import Filter from "./Filter";
export default function Products(){
    const[sneakers, setSneakers] = useState([]);
    const[sname, setName] = useState("");
    const[selectedGender,setSelectedGender] = useState("All");
    const[selectedBrand, setSelectedBrand] = useState("All");
 
    useEffect(()=>{
        fetch('https://json-server-ogfs.onrender.com/sneakers')
        
        .then(res => res.json())
        .then(data => setSneakers(data))
    },[])
    function handleName(e){
        e.preventDefault();
        setName(e.target.value);
    }
  
    const sneakersDisplay = sneakers.filter(sneaker=>{
        if(sneakers === "") return true;
        return sneaker.name.toLowerCase().includes(sname.toLowerCase())
    })
   
    function handleGender(e){
        e.preventDefault();
        setSelectedGender(e.target.value);
    }
    const sortedGender = selectedGender ==="All"? sneakersDisplay: sneakersDisplay.filter(s=>s.gender.toLowerCase() === selectedGender.toLowerCase());
  
    function handleBrand(e){
        e.preventDefault();
        setSelectedBrand(e.target.value);
    }
    const sortedBrand = selectedBrand ==="All"? sortedGender: sortedGender.filter(s=>s.brand.toLowerCase() === selectedBrand.toLowerCase());
    if (!sneakers.length) {
        return <h2>Loading...</h2>;
    }
    return (
        <div id ="products-cont">
        <Filter handleName={handleName} handleGender={handleGender} handleBrand={handleBrand} selectedBrand={selectedBrand}/>
        <div id="products">
            {}
        {sortedBrand.map(sneaker=>{
            return <Product key={sneaker.id} id={sneaker.id} name={sneaker.name} brand={sneaker.brand} gender={sneaker.gender} category={sneaker.category} price={sneaker.price} stock={sneaker.items_left} url={sneaker.imageURL}/>
        })}
        </div>
        </div>
    )
}