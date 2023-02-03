import React, { useEffect, useRef, useState } from "react";
import { useCart, useDispatchCart } from "./ContextReducer";
function Card(props) {
  let data = useCart();
  const priceRef = useRef();
  let dispatch = useDispatchCart();
  let options = props.options;
  let priceoptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const handleAddtoCart = async () => {
    let food = []
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;
        break;
      }
    }
    if (food !== []) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
        return
      }

      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
        return
        // await console.log(data);
      }
      return
    }
    await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
  }
  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value)
  }, []);
  return (
    <>
      <div>
        <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "400px" }}>
          <img src={props.foodItem.img} className="card-img-top" style={{ "height": "200px", "objectFit": "fill" }} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>

            <div className='container w-100 '>
              <select className='m-2 h-100  bg-success rounded' onChange={(e) => setQty(e.target.value)}>
                {
                  Array.from(Array(6), (element, i) => {
                    return (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    )
                  })
                }
              </select>
              <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                {priceoptions.map((data) => {
                  return (
                    <option key={data} value={data}>{data}</option>
                  )
                })}
              </select>
              <div className='d-inline h-100 fs-5'>
                {finalPrice}/-
              </div>
            </div>
            <hr />

            <button className="btn btn-success justify-content-center ms-2 " onClick={handleAddtoCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Card;