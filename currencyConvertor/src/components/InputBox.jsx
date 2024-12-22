import React,{useId} from "react";

function InputBox({
    label,
    className="",
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency="usd",

}){
    const amountInputId= useId()

    return(
        <div className={`bg-white flex w-full rounded-md py-2 px-4 justify-between ${className}`}>
            <div className='flex flex-col gap-1'>
              <label htmlFor="amountInputId" className="text-gray-600">
                {label}
              </label>
              <div className='text-black'>
                <input 
                id={amountInputId}
                placeholder='Amount'
                className='outline-none w-28'
                type='number'
                value={amount}
                onChange={(e)=>onAmountChange&&onAmountChange(Number(e.target.value))}
                min={0}
                />
              </div>
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="" className="text-gray-600">
                Currency Type
              </label>

              <div className='text-black text-right '>
                <select
                className='outline-none rounded-md bg-gray-200 cursor-pointer '
                value={selectCurrency}
                onChange={(e)=>onCurrencyChange&&onCurrencyChange(e.target.value)}
                >
                  {currencyOptions.map((currency)=>(
                    <option key={currency}
                    value={currency}
                    > {currency}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
    )
}

export default InputBox;