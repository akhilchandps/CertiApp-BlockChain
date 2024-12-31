import React, { useState } from 'react'
import ABI from "../assets/CertiApp.json";
import address from "../assets/deployed_addresses.json"
import { ethers } from 'ethers';
import { useNavigate } from 'react-router-dom';


const IssueCert = () => {
 const navigate=useNavigate();
    const [formData,setFormData]=useState({
     id:0,
     name:'',
     course:'',
     grade:'',
     date:''
    })
   
   function handleChange(event){
     console.log(event.target);
     const {name, value} = event.target;
     console.log(name);
     setFormData((preState)=>({...preState,[name]:value}))
     console.log(formData);
     
   }


   async function handleSubmit(e){

    e.preventDefault();
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const cAbhi =ABI.abi;
    const cAddress = address['CertiModule#CertiApp']
    console.log(cAddress);
    const certiInstance = new ethers.Contract(cAddress,cAbhi,signer);
    console.log(certiInstance);
    const txnRecepit= await certiInstance.setCertificate(
      formData.id,
      formData.name,
      formData.course,
      formData.grade,
      formData.date
    )
    console.log(txnRecepit);
    navigate("/")
   }

  return (
    <div className='flex justify-center '>
    
      <form onSubmit={handleSubmit} className='w-[600px] mt-14 bg-slate-300 p-8 flex flex-col gap-5'>
        <div>
            <h1 className='font-bold text-3xl my-5'>Issue Certificate</h1>
        </div>
      <label>ID</label>
      <div>
        <input type="number" id='id' name='id' onChange={handleChange} className='w-full p-2 outline-none border border-md border-slate' />
      </div>
      <label>Name</label>
      <div>
        <input type="text" id='name' name='name' onChange={handleChange} className='w-full p-2 outline-none border border-md border-slate' />
      </div>
      <label>Course</label>
      <div>
        <input type="text" id='course'  name='course' onChange={handleChange} className='w-full p-2 outline-none border border-md border-slate' />
      </div>
      <label>Grade</label>
      <div>
        <input type="text" id='grade' name='grade' onChange={handleChange} className='w-full p-2 outline-none border border-md border-slate'  />
      </div>
      <label>Date</label>
      <div>
        <input type="date"  id='date' name='date' onChange={handleChange} className='w-full p-2 outline-none border border-md border-slate' />
      </div>
      <div className='text-center my-3'>
        <input type="submit"  className='bg-black text-white p-2' />
      </div>
      </form>
    </div>
  )
}

export default IssueCert
