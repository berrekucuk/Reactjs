import axios from 'axios'
import React, { useState } from 'react'

function AddSupplier() {

    const [companyName, setcompanyName] = useState("")
    const [contactName, setcontactName] = useState("")
    const [contactTitle, setcontactTitle] = useState("")

    const add = ()=>{
        axios.post("https://northwind.vercel.app/api/suppliers",
            {
                companyName:companyName,
                contactName:contactName,
                contactTitle:contactTitle
            })
            .then(res => {alert("Tedarikçi başarıyla eklenmiştir!")})
    }


  return <>
    <div>
        <label>Company Name</label>
        <input type='text' onChange={(e) => setcompanyName(e.target.value)}/>
    </div>
    <div>
        <label>Contact Name</label>
        <input type='text' onChange={(e) => setcontactName(e.target.value)}/>
    </div>
    <div>
        <label>Contact Title</label>
        <input type='text' onChange={(e) => setcontactTitle(e.target.value)}/>
    </div>
    <button onClick={add}>ADD</button>
  </>
}

export default AddSupplier