import React from 'react'
import Todo from './Todo'
import tick from '../assets/tick.png'
import deleteIcon from '../assets/delete.png'
import not_tick from '../assets/not_tick.png';


const Todo_items = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
      <div className='flex items-center my-3 gap-2'>
          <div onClick={()=> {toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
              <img src={isComplete ?tick : not_tick} alt="tick" className='w-7'/>
              <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${ isComplete ? "line-through" : ""}`}>{ text } </p>
      </div>
      
      <img onClick={() => {deleteTodo(id)}} src={deleteIcon} alt='delete' className='w-3.5 cursor-pointer'/>
          
    </div>
  )
}

export default Todo_items
