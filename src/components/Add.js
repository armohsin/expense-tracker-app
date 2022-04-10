import React from 'react'

export const Add = () => {
  return (
    <div>
        <h3>Add new Transactions </h3>
        <form>
            <div className='form-control'>
                <label htmlFor='description' >
                    Description
                </label>
                <input type="text" id="description" placeholder='Detail of transaction' />
            </div>
            <div  className='form-control' >
                <label htmlFor='teansactionamount' >
                    Transaction Amount
                </label>
                <input type="number" id="transactionamount" placeholder='Transaction amount' />
            </div>
            <button className='btn' >Add transaction</button>
        </form>
    </div>
  )
}
