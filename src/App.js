import React ,{useState}from 'react';
import pic1 from "./photos/product.jpg"
import pic2 from "./photos/special.jpg"
import pic3 from "./photos/sale.jpg"
import pic4 from "./photos/popular.webp"
import './App.css';

function App() {
  const pricecard = [
    {
      id : "1",
      pic : pic1,
      item : "Fancy Product",
      price : "$40.00 - $80.00",
      view : "View Options",
    },
    {
      id : "2",
      pic : pic2,
      item : "Special Item",
      strike : "$20.00",
      sale : "Sale",
      price : '$18.00',
      button : "Add to cart",
    },
    {
      id : "3",
      pic : pic3,
      item : "Sale Item",
      sale : "Sale",
      strike : "$50.00",
      price : "$25.00",
      button : "Add to cart",
    },
    {
      id : "4",
      pic : pic4,
      item : "Popular Item",
      price : "$40.00",
      button : "Add to cart",
    },
  ]
  
  const [count , setcount] = useState(0);
  console.log(count,"out")
  const HandleAdd=(e)=>{

  var press = e.target.innerText
  console.log(press,count)
  if(press === "Add to cart"){
    setcount(count+1);
    console.log(count)
    e.target.innerText = "Remove from cart"
  }
  else if (press === "Remove from cart"){
    e.target.innerText = "Add to cart"
    setcount(count-1)
    console.log(count,"remove")
  }
}
  return (
    
  <div className='App'>
    <div className='header'>
      <div className='grid-1'>Home</div>
      <div className='grid-2'>About</div>
      <div className='grid-3'>Shop</div>
      <div className='grid-4'>🛒 Cart  <span className='count'>{count}</span></div>
    </div>
    <div className='style'>
      <section className='first-line'>Shop in style</section>
      <section className='second-line'>With this shop home page template</section>
    </div>
    <section className='card-list'>
      {pricecard.map(({id,pic,item,sale,strike,price,button,view,index})=>(
        <div className='card-container'>
        <div className='img'>
         <img className='card-image'
         src={pic}
         alt={"card pic"}/>
         {sale?<span className='sale'>{sale}</span> : <span> </span>}
        </div>
        <div className='card-specs'>
          <span className='item'>{item}</span>
          <span className='price'><strike className='strike'>{strike} </strike> {price}</span>
        </div>
        
        <button className='button' onClick={HandleAdd}>{button}{view}</button> 
      </div>
      ))}
    </section>
    <div className='footer'>
      Copyright © www.company.com
    </div>
  </div>
  );
}
export default App;
