import React from 'react'
import { ethers } from 'ethers';
import { Link } from 'react-router-dom';
const Header = () => {

     async function connectToMetamask(){
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      console.log(signer.address);
      alert(`${signer.address} is successfully loggedIn`)
      
     }
  return (
    <div className='flex justify-around'>
      <div className="col"></div>
      <div className="col p-5">
        <ul className='flex gap-5 '>
            <li className='bg-sky-500 text-white p-2 cursor-pointer'><Link to="/issue">IssueCertificate</Link> </li>
            <li className='bg-green-500 text-white p-2 cursor-pointer	' onClick={connectToMetamask}>connectToMetamask</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
