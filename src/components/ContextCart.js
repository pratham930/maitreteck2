import React, {useContext} from 'react'
import "./cart.css"
import Atom from './Atom'
import  {CartContext}  from './Cart'
import { Link } from 'react-router-dom'
  const ContextCart = () => {  
    
      
    const {item,clear,totalAmount,totalItem} = useContext(CartContext);
    return (
        <div >
            { item.map((event)=>{
             return <Atom key={event.id} {...event} />
            })

            } <div>
            <div className='downside'>
            <h1> item: <span>{totalItem}/-</span></h1>
         
      
       <h1> total: <span>{totalAmount}₹</span></h1> </div>
      <Link className='check' to='/checkout'>checkout</Link>
     
        <button className='cancel' onClick={clear} >cancel</button></div>
        </div>
    )
}

export default ContextCart
