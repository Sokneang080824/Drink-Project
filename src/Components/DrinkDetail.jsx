import React from 'react';
import { useParams } from 'react-router-dom';
import { menuItems } from './Items';
import { useState } from 'react';
import './style.css';


const DrinkDetail = () => {
  const { id } = useParams(); 
  const drink = menuItems.find((item) => item.id === parseInt(id)); 
  const [num, setNum] = useState(1);
    const handleIncreased = () => {
        if (num <= 1) {
            setNum(1);
        } else {
            setNum(num - 1);
            setPrice(price - 1.5)
        }
    }
    const handleDecreased = () => {
        setNum(num + 1);
        setPrice(price + 1.5)
    }


  if (!drink) {
    return <div>Drink not found!</div>;
  }

  return (
    <div className="container my-5">
      <div className="row text-light">
        <div className="col-md-6 align-content-center">
          <img
            src={drink.image}
            alt={drink.name}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6 align-content-center">
          <h1>{drink.name}</h1>                                                   
          {/* <p className="lead"><strong>Category:</strong> {drink.category}</p> */}
          <p><strong>Price:</strong> {drink.price}</p>
          <p>THE PERFECT PICK ME UP</p>
          <p>Fresh brews and full of the flavor, our Ice coffe get you energisize and ready to go</p>
          <div className='text-light d-flex gap-3 align-items-center'>
              <label>
                  Size
              </label>
              <form className='select-size bg-danger' aria-label="Default select example">
                  {/* <option>Open this select menu</option> */}
                  <select name="" id="">
                  <option className='select-item' value="1">100ml</option>
                  <option className='select-item' value="2">30ml</option>
                  <option className='select-item' value="3">60ml</option>
                  </select>
              </form>
          </div>
          <div  className='text-light d-flex gap-3 align-items-center mt-2'>
            <label>
                order
            </label>
            <form className='d-flex  align-items-center gap-3 fw-bold pt-3' >
                <p className='btn-sub fs-4  ' onClick={handleIncreased}>-</p>
                <p className='mt-2 fs-5 price-drink text-light'>{num}</p>
                <p className='btn-sum  py-0 fs-5 ' onClick={handleDecreased}>+</p>
            </form>
          </div>
          <div className=' mt-2 d-flex align-items-center gap-5'>

            <button className=' btn btn-buy px-5 text-light'>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkDetail;