import React, {useState} from 'react'

export const Add = () => {
    const [description,setDesc]=useState();
    const [transaction,setTrans]=useState();

  return (
    <div>
        <h3>Add new Transactions </h3>
        <form>
            <div className='form-control'>
                <label htmlFor='description' >
                    Description
                </label>
                <input type="text" id="description" placeholder='Detail of transaction' value={description} onChange={(e) => setDesc(e.target.value)} />
            </div>
            <div  className='form-control' >
                <label htmlFor='teansactionamount' >
                    Transaction Amount
                </label>
                <input type="number" id="transactionamount" placeholder='Transaction amount' value={transaction} onChange={ (e) => setTrans(e.target.value) } />
            </div>
            <button className='btn' >Add transaction</button>
        </form>
    </div>
  )
}
