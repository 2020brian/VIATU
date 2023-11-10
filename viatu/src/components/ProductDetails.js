import { useState,useEffect } from "react"
import { useParams,useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "./CartContext";
export default function ProductDetail(){
    const navigate = useNavigate();
    const[details, setDetails] = useState(null);
    const [size,setSize] =useState("");
    const [cart, setCart] = useState([]);
    const [addedToCart, setAddedToCart] = useState(false);
    const params = useParams()
    const { addToCart } = useCart();
    const handleGoBack = () => {
        navigate(-1);
      };
    // console.log(params)
    useEffect(()=>{
        fetch(`https://json-server-ogfs.onrender.com/sneakers/${params.id}`)
        .then(res => res.json())
        .then(data => setDetails(data))
    },[params.id])
    // console.log(details)
    if (!details) return <h2>Loading...</h2>
    function handleFocus(e){
        e.preventDefault();
        setSize(e.target.value);
    }
    // console.log(size)
    function handleAddCart(){
        // if(!cart.find(item => item.id === details.id)){
            addToCart(details);
            setAddedToCart(true);
            
        // }
    // console.log(cart);
    }
    // console.log(cart.length)
    return(
        <div id="details">
            <div id="details_img">
            <p id="back" onClick={handleGoBack} style={{fontSize:"30px",position:"absolute"}}>←<span style={{fontSize:"30px"}}>Products</span></p>
            <img src={details.imageURL} alt={details.name}/>
            <div id="cart-bottom">
               <div>
               <p>Price: <b>${details.price}</b></p>
               <p>Size: <button onFocus={handleFocus} className="details_btn" value="4">4</button><button onFocus={handleFocus} className="details_btn" value="5">5</button><button onFocus={handleFocus} className="details_btn" value="6">6</button><button onFocus={handleFocus} className="details_btn" value="7">7</button><button onFocus={handleFocus} className="details_btn" value="8">8</button></p>
                </div> 
                {addedToCart && <p style={{color:"green", fontWeight:"1000"}}>Item has been added to the cart!</p>}
           
            <button onClick={addedToCart ? () => navigate("/cart") : handleAddCart} className="btn" > <FontAwesomeIcon icon={faShoppingCart} /> {addedToCart ? " View Cart" : " Add to Cart"}</button>
             </div>

            </div>
            <div id="product_info">
                <div id="desc">
                    <h2>{details.name}</h2>
                    <p>{details.description}</p>
                    <button className="btn" onClick={addedToCart ? () => navigate("/cart") : handleAddCart} style={{width:"90%"}}><FontAwesomeIcon icon={faShoppingCart} />  {addedToCart ? " View Cart" : " Add to Cart"}</button>
                </div>
            <h4>Product Info</h4>
           
            <p><b>Category: </b>{details.category.toLowerCase()}</p>
            <p><b>Brand:    </b>{details.brand.toLowerCase()}</p>
            <p><b>Gender:   </b>{details.gender.toLowerCase()}</p>
            




            </div>
        </div>
    )
}