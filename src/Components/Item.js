import React from 'react'
import { useCart } from 'react-use-cart'

const Item = (props) => {
    const { addItem } = useCart();

  return (
    <div className='food-menu'>
         <div className='menu-list1'>
          <div className='details'>
          <img src={props.img} alt='menu' className="food-image" onClick={() => addItem(props.item)} />
            <div>
                <h6 className='title'>{props.title}</h6>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Item