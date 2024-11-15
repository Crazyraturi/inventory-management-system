import React from "react";

const ViewDetails = () => {
  return (
    <div className="flex  flex-col items-center justify-center gap-10 pt-10 ">
      <div >
        <h1 className="text-3xl  font-bold text-black"> view Details</h1>
      </div>
      <div className="space-x-5">
        <label  className='className="text-3xl  font-bold text-black"' htmlFor="">Enter Item ID :</label>
        <input   placeholder='Ex- 123456' className='focus:outline-none font-2xl p-1 rounded-xl pl-3 font-semibold' type="text" />
      </div>
      <button className="bg-black text-white p-3 rounded-xl"> View Details</button>
    </div>
  );
};

export default ViewDetails;
