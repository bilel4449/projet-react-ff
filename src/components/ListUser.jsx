import React from 'react'
import CardUser from './CardUser'
import { useSelector } from 'react-redux'

const ListUser = ({users}) => {
    
  return (
    <div>
        {
            React.Children.toArray(users.map(el=><CardUser user={el}/>))
            
        }
        
    </div>
  )
}

export default ListUser