import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  const swap=()=>{
    setFrom(to)
    setTo(from)
    // setConvertedAmount(amount)
    // setAmount(convertedAmount)
  }

  const convert=()=>{
    setConvertedAmount(Math.round((amount*currencyInfo[to])*100)/100)
  }

  return (
    <>
      <div className='w-full h-screen bg-[url(https://i.pinimg.com/736x/d3/f4/1b/d3f41be339f89c1fb7bdad9d33a6fc81.jpg)] bg-cover text-white flex justify-center items-center p-2'>
        <div className='w-full max-w-md flex flex-col justify-center mx-auto  outline outline-2 outline-white rounded-lg p-4 bg-white bg-opacity-10'>
          <InputBox
            label={'From'}
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}

          />
          <div className='flex justify-center h-6 '>
            <button 
              onClick={swap}
              className='px-2 bg-blue-800 rounded-md text-sm border-white border-2 active:bg-blue-700 '
            >
              Swap
            </button>
          </div>
          <InputBox
            label={'To'}
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
          />
          <div className='mt-4'>
            <button className='bg-blue-800 flex w-full rounded-md py-2 px-4 justify-center active:bg-blue-700' onClick={convert}>
                Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
