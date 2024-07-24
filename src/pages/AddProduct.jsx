import axios from 'axios'
import React, { useState } from 'react'

function AddProduct() {

    const [name, setname] = useState("")
    const [unitPrice, setunitPrice] = useState(0)
    const [unitInStock, setunitInStock] = useState(0)

    const add = ()=>{
        axios.post("https://northwind.vercel.app/api/products",
            {
                name:name,
                unitPrice:unitPrice,
                unitInStock:unitInStock
            })
            .then(res => {
                alert("Ürün ekleme işlemi başarıyla tamamlandı!")
            })
    }


  return <>
    <div style={{margin:5}}>
        <label>Name</label>
        <input type='text' onChange={(e)=> setname(e.target.value)}/>
    </div>
    <div style={{margin:5}}>
        <label>Unit Price</label>
        <input type='text' onChange={(e)=> setunitPrice(e.target.value)}/>
    </div>
    <div style={{margin:5}}>
        <label>Unit In Stock</label>
        <input type='text' onChange={(e)=> setunitInStock(e.target.value)}/>
    </div>
    <button onClick={add}>ADD</button>

  </>
}

export default AddProduct