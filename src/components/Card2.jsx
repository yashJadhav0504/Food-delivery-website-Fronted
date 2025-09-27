import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { AddItem, RemoveItem } from "../redux/cartSlice";

function Card2({name,image,price,id,qty}) {
  const dispatch = useDispatch();   // ✅ hook component ke andar hai
       if (!name||!image||!price||qty< 0){
        return null
       }
  return (
    <div className='w-full h-auto p-2 shadow-lg flex justify-between'>
      <div className='w-[70%] h-full flex gap-3'>
        <div className='w-[80px] h-[80px] overflow-hidden rounded-lg'>
          <img src={image} alt="" className='w-full h-full object-cover '/>                                                                                                                                             
        </div>
        <div className='w-[40%] h-full flex flex-col gap-2'>
          <div className='text-lg text-gray-600 font-bold'>{name}</div>
          <div className='w-[90px] h-[40px] bg-slate-400 flex rounded-lg 
          overflow-hidden shadow-lg font-bold border-2 border-green-400 text-xl'>

            {/* - button */}
            <button 
              className='w-[30%] h-[100%] bg-white flex justify-center items-center text-green-400 hover:bg-gray-200'
              onClick={() => dispatch(RemoveItem(id))}
            >-</button>

            {/* qty */}
            <span className='w-[40%] h-[100%] bg-slate-200 flex justify-center items-center text-green-400'>
              {qty}
            </span>

            {/* + button */}
            <button 
              className='w-[30%] h-[100%] bg-white flex justify-center items-center text-green-400 hover:bg-gray-200'
              onClick={() => dispatch(AddItem({ id, name, image, price }))}
            >+</button>
          </div>
        </div>
      </div>

      {/* Delete button */}
      <div className='flex flex-col justify-start items-end gap-3'>
        <span className='text-xl text-green-400 font-bold'>{price}</span>
        <RiDeleteBin6Line 
          className='w-[30px] h-[30px] text-red-400 cursor-pointer'
          onClick={() => dispatch(RemoveItem(id))}
        />
      </div>
    </div>
  )
}

export default Card2


