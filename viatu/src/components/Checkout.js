import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate} from "react-router-dom"
import CartItem from './CartItem';

const CheckoutContainer = styled.div`
  padding: 40px;
`;

const CheckoutForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

const FormField = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  background-color: green;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: darkgreen;
  }
`;
const SuccessMsg = styled.p`
  color: green;
  font-weight: 1000;
`;

function Checkout({emptyCart}) {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [address, setAddress] = useState("");
  // const [paymentMethod, setPaymentMethod] = useState("");
  // const [paymentDetails, setPaymentDetails] = useState("");
  const[order, setOrder] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "",
    paymentDetails:"",
    orderId: "",
  });
  function handleChange(e) {
    e.preventDefault();
    const { id, value } = e.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [id]: value,
    }));
  }
  function generateRandomOrderId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const orderIdLength = 10; 
    let orderId = '';
  
    for (let i = 0; i < orderIdLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      orderId += characters.charAt(randomIndex);
    }
  
    return orderId;
  }
  const [showSuccessMsg, setShowSuccessMessage] = useState(false);
  const generatedOrderId = generateRandomOrderId();
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(order.name)
    

    const orderObj ={
      name: order.name,
      email: order.email,
      address: order.address,
      paymentMethod: order.paymentMethod,
      paymentDetails: order.paymentDetails,
      orderId: generatedOrderId,
      status: "On its way"
    }
    try {
      const response = await fetch("https://json-server-ogfs.onrender.com/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify( orderObj ),
      });

      if (response.ok) {
        console.log("Order submitted successfully");
        
        emptyCart();
        setOrder({
          name: "",
          email: "",
          address: "",
          paymentMethod: "",
          paymentDetails:"",
          orderId: generatedOrderId,
        });
        setShowSuccessMessage(true);
      } else {
        console.error("Failed to submit order");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
    
  };
  const navigate = useNavigate();
  const handleGoBack = () => {
      navigate(-1);
    };
    
  return (
    <>
     <p id="back" onClick={handleGoBack} style={{fontSize:"30px",position:"absolute", marginLeft:"40px",marginTop:"40px",color:"black"}}>←<span style={{fontSize:"30px"}}>Back</span></p>
    <CheckoutContainer>
      
      <CheckoutForm onSubmit={handleSubmit}>
        <input type="hidden" value={order.orderId}/>
        <FormField>
          <Label htmlFor="name">Name:</Label>
          <Input
            type="text"
            id="name"
            value={order.name}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            value={order.email}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="address">Address:</Label>
          <Input
            type="text"
            id="address"
            value={order.address}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="paymentMethod">Payment Method:</Label>
          <Select
            id="paymentMethod"
            value={order.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="">Select Payment Method</option>
            <option value="mpesa">M-Pesa</option>
            <option value="mastercard">Mastercard</option>
            
          </Select>
        </FormField>
      
        {order.paymentMethod === "mpesa" && (
          <FormField>
            <Label htmlFor="mpesaNumber">M-Pesa Number:</Label>
            <Input
              type="text"
              id="paymentDetails"
              value={order.paymentDetails}
              onChange={handleChange}
              required
            />
          </FormField>
        )}
        {order.paymentMethod === "mastercard" && (
          <FormField>
            <Label htmlFor="cardNumber">Card Number:</Label>
            <Input
              type="text"
              id="paymentDetails"
              value={order.paymentDetails}
              onChange={handleChange}
              required
            />
          </FormField>
        )}
        
        <SubmitButton type="submit" >Place Order</SubmitButton>
      </CheckoutForm>
      {showSuccessMsg && (
          <SuccessMsg>
            Order submitted successfully. Order ID: {order.orderId}
          </SuccessMsg>
        )}
    </CheckoutContainer>
    </>
  );
}

export default Checkout;
