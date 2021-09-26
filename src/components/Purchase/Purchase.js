import React from 'react'
import { useHistory } from 'react-router'

export default function Purchase() {
const history = new useHistory()
    return (
        <div>
       
            <h1>Puchase page</h1>
             <button onClick={()=>{
                 history.push("/")
             }}>Go Back</button>
        </div>
    )
}
