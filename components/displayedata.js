import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function Displayedata() {
  const [data,setData] = useState([])
useEffect(() => {
    const result = axios.get('http://localhost:4000/formdata').then(response=>{console.log(response.data) 
    setData(response.data)
})


},[]) 
console.log(data,"data from json")

    return (
<div className="m-8 border-gray-500 shadow p-6"> 
<div className="container justify-center ">
        {data.map((jsonData)=>{
            return(
                <div mb-4 >
<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-3">{jsonData?.fieldname}</label>
<input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
 placeholder={jsonData?.placeholder} required={jsonData?.requiredfield}></input></div>

            )
        })}
</div>
 <center><button type="submit"
              className="text-white bg-blue-500 mt-4 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 
              font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 
            dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Submit</button>
            </center>
</div>

    /* <div> {data.length>0?data.map((e,i)=><input key={i}/>):null} </div> */
  )
}
