import React, { useState } from 'react'
import cart from "../Images/Cart.svg"
import Checkbox from '@mui/material/Checkbox';
import { Unstable_NumberInput as BaseNumberInput, numberInputClasses } from '@mui/base/Unstable_NumberInput';
import { styled } from '@mui/system';
import axios from '../Axios/Axios';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const NumberInput = React.forwardRef(function CustomNumberInput(props, ref) {
  return (
    <BaseNumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInputElement,
        incrementButton: StyledButton,
        decrementButton: StyledButton,
      }}
      slotProps={{
        incrementButton: {
          children: '▴',
        },
        decrementButton: {
          children: '▾',
        },
      }}
      {...props}
      ref={ref}
    />
  );
});

function CheckoutForm({handleClose, selectedform, setOpen}) {
  const [cart, setCart] = useState({})
  const [plastic, setPlastic] = useState(false)
  const [wood, setWood] = useState(false)
  const [metal, setMetal] = useState(false)
 
  const handlePlastic = () => {
    setPlastic(!plastic);
    if (!plastic) {
      setCart({ ...cart, plasticCard: 1});
    } else {
      const updatedCart = { ...cart };
      delete updatedCart.plasticCard;
      setCart(updatedCart);
    }
  };

  const handleWood = () =>{
    setWood(!wood);
    if(!wood){
        setCart({...cart, woodCard: 1});
    }else{
        const updatedCart = {...cart};
        delete updatedCart.woodCard;
        setCart(updatedCart);
    }
  };

  const handleMetal = () =>{
    setMetal(!metal);
    if(!metal){
        setCart({...cart, metalCard: 1});
    }else{
        const updatedCart = {...cart};
        delete updatedCart.metalCard;
        setCart(updatedCart);
    }
  };
  const token = localStorage.getItem("token");
  const handleSubmit = async () => {
    console.log(selectedform);
    try {
      const res = await axios.post(`users/saveToCart/${selectedform}`,
       { cardQuantity: cart },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setOpen(false);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  
  console.log(cart)

  return (
    <div className='cart-container flex bg-yellow-100 gap-12 p-6 h-[90vh] w-[80vw]'>
    <div className='flex flex-col justify-between flex-1'>
    <button
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={handleClose}
                >
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span class="sr-only">Close modal</span>
    </button>
    <div className="card-img flex gap-12 justify-center">
        <span className='flex flex-col justify-center'>
        <img src="/card-demo.svg" alt="" />
        <Checkbox {...label} onClick={handlePlastic} checked={plastic}/>
        {plastic? (<NumberInput
        aria-label="Demo number input"
        placeholder="Type a number…"
        min={1}
        value={cart.plasticCard}
        onChange={(event, val)=> setCart({...cart, plasticCard: val})}
        />):''}
        </span>
        <span className='flex flex-col justify-center'>
        <img src="/card-demo.svg" alt="" />
        <Checkbox {...label} onClick={handleWood} checked={wood}/>
        {wood?(<NumberInput
        aria-label="Demo number input"
        placeholder="Type a number…"
        min={1}
        value={cart.woodCard}
        onChange={(event, val)=> setCart({...cart, woodCard: val})}
        />):''}
        </span>
        <span className='flex flex-col justify-center'>
        <img src="/card-demo.svg" alt="" />
        <Checkbox {...label} onClick={handleMetal} checked={metal}/>
        {metal?(<NumberInput
        aria-label="Demo number input"
        placeholder="Type a number…"
        min={1}
        value={cart.metalCard}
        onChange={(event, val)=> setCart({...cart, metalCard: val})}
        />):''}
        </span>
    </div>
    <button onClick={handleSubmit} className='bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full w-[20%] self-end'>Save</button>
    </div>
    </div>
  )
}

export default CheckoutForm
const blue = {
  100: '#DAECFF',
  200: '#80BFFF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const StyledInputRoot = styled('div')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 400;
  border-radius: 8px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  display: grid;
  grid-template-columns: 1fr 19px;
  grid-template-rows: 1fr 1fr;
  overflow: hidden;
  column-gap: 8px;
  padding: 4px;

  &.${numberInputClasses.focused} {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
  }

  &:hover {
    border-color: ${blue[400]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);

const StyledInputElement = styled('input')(
  ({ theme }) => `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.5;
  grid-column: 1/2;
  grid-row: 1/3;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: inherit;
  border: none;
  border-radius: inherit;
  padding: 8px 12px;
  outline: 0;
`,
);

const StyledButton = styled('button')(
  ({ theme }) => `
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  appearance: none;
  padding: 0;
  width: 19px;
  height: 19px;
  font-family: system-ui, sans-serif;
  font-size: 0.875rem;
  line-height: 1;
  box-sizing: border-box;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 0;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
    cursor: pointer;
  }

  &.${numberInputClasses.incrementButton} {
    grid-column: 2/3;
    grid-row: 1/2;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border: 1px solid;
    border-bottom: 0;
    &:hover {
      cursor: pointer;
      background: ${blue[400]};
      color: ${grey[50]};
    }

  border-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
  }

  &.${numberInputClasses.decrementButton} {
    grid-column: 2/3;
    grid-row: 2/3;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border: 1px solid;
    &:hover {
      cursor: pointer;
      background: ${blue[400]};
      color: ${grey[50]};
    }

  border-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
  }
  & .arrow {
    transform: translateY(-1px);
  }
`,
);