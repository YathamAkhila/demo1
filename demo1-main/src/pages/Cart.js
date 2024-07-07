import React from 'react'
import { CartIndv } from './CartIndv'

const Cart = ({cart}) => {
  return (
    <center>
        <div>
            {
                cart.map(function(item){
                    return(
                        <CartIndv key={item.id} image={item.image} title={item.title} alt ="image"/>
                    )
                })

                }
            
        </div>

    </center>
  )
}

export default Cart