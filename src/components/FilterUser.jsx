import React from 'react'
import { useSelector } from 'react-redux'

const FilterUser = ({filter,handleFilter}) => {
    const {users}=useSelector(state=>state);
  return (
    <div className='div-rech'>
        <form >
            <label className='recherche'>Filter</label>
            <input type="text" value={filter} onChange={e=>handleFilter(e.target.value)} className='filter'  />
           
        </form>
    </div>
  )
}

export default FilterUser