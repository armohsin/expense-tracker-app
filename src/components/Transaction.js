import React from 'react'
import { Globalcontext } from '../context/Globalstate'
import { useContext } from 'react'
import { Tran } from './Tran'


export const Transaction = () => {

  const { transactions } = useContext(Globalcontext);
  console.log({transactions})

  return (
    <div>
        <h3>Transaction History</h3>
        <ul className='list' >
           
             {transactions.map(transaction => 
                    (
                    <Tran key={transaction.id} transaction={transaction} />
                    )
                )}
            
        </ul>
    </div>
  )
}
