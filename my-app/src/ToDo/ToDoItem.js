import React from 'react'
import PropTypes from 'prop-types'

 function ToDoItem({ todo, index, onChange }){
   return (
       <li>
       <span>
           <input type="checkbox"
           onChange={() => onChange(todo.id)}/>
           <strong>{ index + 1 }</strong>
           &nbsp;
           {todo.title}
       </span>
       <button className='red-btn'>&times;</button>
       </li>
    )
}

ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default ToDoItem