import React from 'react'
import { Transaction } from './Transaction'

export const Tran = ({transaction}) => {
  return (
    <div>
       <li className='plus' >
            {transaction.description}
            <span>{transaction.transactionAmount}</span>
            <button className='delete-btn' >X</button>
        </li> 
    </div>
  )
}
