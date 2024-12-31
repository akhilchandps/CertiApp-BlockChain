import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ABI from "../assets/CertiApp.json";
import address from "../assets/deployed_addresses.json";
import img from "../img/online-course.png";
import { ethers } from 'ethers';

const GetCert = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function getCertificates() {
    try {
      const id = document.getElementById("ID").value;

      console.log("Certificate ID:", id);

      if (!id || isNaN(id)) {
        setError("Invalid ID. Please enter a valid number.");
        return;
      }
      setError("");

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const cAbi = ABI.abi;
      const cAddress = address['CertiModule#CertiApp'];

      const certiInstance = new ethers.Contract(cAddress, cAbi, signer);
      console.log("Contract Instance:", certiInstance);

      // Fetch certificate
      const txValue = await certiInstance.certificates(id);

      console.log("Transaction Value:", txValue);

      // Check for empty result
      if (!txValue || txValue.length === 0) {
        setError("Certificate not found.");
        return;
      }

      // Navigate to /view with the data
      navigate('/view', {
        state: {
          data: {
            Name: txValue[0],
            Course: txValue[1],
            Grade: txValue[2],
            Date: txValue[3],
          },
        },
      });
    } catch (err) {
      console.error("Error fetching certificate:", err);
      setError("Error fetching certificate. Please check the ID and try again.");
    }
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-96 mt-24">
        <div>
          <img src={img} alt="" />
        </div>
        <input
          type="text"
          id="ID"
          placeholder="Search"
          className="p-2 w-full outline-none border border-slate-"
        />
        <div className="my-3 text-center">
          <button
            className="bg-sky-400 text-white w-18 px-5 py-2"
            onClick={getCertificates}
          >
            Search
          </button>
        </div>
        {error && <div className="text-red-500">{error}</div>}
      </div>
    </div>
  );
};

export default GetCert;
