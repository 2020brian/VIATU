import {Link} from "react-router-dom";
export default function Product({id,name,brand, gender,category,price,stock,url}){
//    console.log(gender.toLowerCase())

// console.log(params.id);
    return(
        <Link to={`/products/${id}`} id="product" style={{ textDecoration: 'none', color: 'black' }}>

           <img src={url} alt={name}/> 
            <div id="row2">
                <p id="brand">
                    {brand} | {gender.toLowerCase()}
                </p>
                <p>
                    ${price}
                </p>
            </div>
            <h3>{name}</h3>
        </Link>
    )
}