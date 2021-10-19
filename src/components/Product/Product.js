import React from 'react';
import './Product.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Product = (props) => {
  console.log(props.product);
  const { name, image, salary, adress, id,parmanentAdress } = props.product
  return (
    <div>
    
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col-9">
            <div class="card h-50% w-50% ">
              <img src={image} class="card-img-top" alt="..."></img>
             <div class="card-body">
               <h6>Id:{id}</h6>
               <h4>Name:{name}</h4>
               <h4>Salary:{salary}</h4>
               <h6>Adress:{adress}</h6>
               <h6>parmanentAdress:{parmanentAdress}</h6>
             </div>
              <div class="card-footer">
                <button class="bg-warning">Add to cart</button>

              </div>
            </div>
          </div>
        </div>

      


      <div class="row row-cols-1 row-cols-md-1">
      <div >
        <h5> Total man:</h5>
        <h5>Total-money</h5>


      </div>
      </div>


    </div>
  );
};

export default Product;