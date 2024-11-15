import React from 'react'

const AddProduct = () => {
  return (
    <div className=' h-full  flex items-center justify-center  '>

      <div className='bg-[#1E201E] p-10 rounded-xl  text-white font-semibold text-xl '>
        
       <h1 className='flex item  justify-center font-bold text-2xl'>Adding Item To Inventory</h1>
        <form className='pt-5 ' action="">

        <div className='p-2  space-x-14'>
          <label htmlFor="">ID</label>
          <input  className='text-black focus:outline-none focus:ring-0 pl-3 rounded-xl'  type="text" />
          </div>
         

          <div className='p-2 space-x-9' >
            <label htmlFor=""> Type</label>
            <input className='text-black focus:outline-none focus:ring-0 pl-3 rounded-xl'  type="text" />
          </div>
          
          <div className='p-2  space-x-5'>
          <label htmlFor="">Length</label>
          <input  className='text-black focus:outline-none focus:ring-0 pl-3 rounded-xl'  type="text" />
          </div>
         
          <div className='p-2  space-x-6'>
          <label htmlFor="">Colour</label>
          <input  className='text-black focus:outline-none focus:ring-0 pl-3 rounded-xl' type="text" />
          </div>

          <div className='p-2  space-x-10'>
          <label htmlFor="">Date</label>
          <input className='text-black focus:outline-none focus:ring-0 pl-3 rounded-xl' type="date" />
          </div>

          <div className='bg-pink-600  text-white rounded-xl p-2 mt-5 w-40 ml-28'>
            <button className='ml-7'>Add item</button>
          </div>

          
          
          



         </form>
   





      </div>
     
      



    </div>
  )
}

export default AddProduct