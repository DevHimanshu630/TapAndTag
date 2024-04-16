import React, { useEffect, useState } from 'react'
import { Unstable_NumberInput as BaseNumberInput } from '@mui/base/Unstable_NumberInput';
import { styled } from '@mui/system';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import axios from '../Axios/Axios';
import { MdOutlineCurrencyRupee } from "react-icons/md";
import "../Css/home.css"

const NumberInput = React.forwardRef(function CustomNumberInput(props, ref) {
    return (
      <BaseNumberInput
        slots={{
          root: StyledInputRoot,
          input: StyledInput,
          incrementButton: StyledButtonPlus,
          decrementButton: StyledButton,
        }}
        slotProps={{
          incrementButton: {
            children: <AddIcon fontSize="small" />,
            className: 'increment',
          },
          decrementButton: {
            children: <RemoveIcon fontSize="small" />,
          },
        }}
        {...props}
        ref={ref}
      />
    );
  });

function CardCart({ show ,val ,cart, setCart, data, image, edit=false, index, selIndex}) {
  const [cardPrice, setCardPrice] = useState({})
  const token = localStorage.getItem('token')
  useEffect(()=>{
    const getCardPrice = async() =>{
      const res = await axios.get('admin/get_card_price',{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setCardPrice(res.data.priceObj[0])
      console.log(res.data.priceObj[0])
    }
    getCardPrice()
  },[])
  return (
    <div class="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
          <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
            <img class="object-cover" src={image} className='object-cover h-full w-full' alt="product image" />
            {/* <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{show}</span> */}
          </a>
          <div class="mt-4 px-5 pb-5">
            <span className='flex items-center gap-2'>
            <MdOutlineCurrencyRupee size={28}/>
            <span class="text-[28px] font-bold font-sans text-slate-900">{cardPrice[data]}</span>
            <span class="text-lg font-sans font-medium text-slate-400 red-line-through">$699</span>
            <span className='text-sm font-sans text-red-400'>(8.88% off)</span>
            </span>
            <div class="mt-2 mb-5 flex items-center justify-between">
              <p>
              <h5 class="text-xl tracking-tight font-sans font-bold text-[#146C60]">{show}</h5>
               
                
              </p>
              <div class="flex items-center">
              {(edit && index === selIndex) ? (
              <NumberInput
                aria-label="Quantity Input"
                min={0}
                value={val}
                onChange={(event, val) => setCart({ ...cart, [data]: val })}
              />
            ) : (
              <span>Qty: {val}</span>
            )}
              </div>
            </div>
          </div>
    </div>
  )
}

export default CardCart
const blue = {
  100: '#daecff',
  200: '#b6daff',
  300: '#66b2ff',
  400: '#3399ff',
  500: '#007fff',
  600: '#0072e5',
  700: '#0059B2',
  800: '#004c99',
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
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[500]};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`,
);

const StyledInput = styled('input')(
  ({ theme }) => `
  font-size: 0.8rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.375;
  background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
  border: 0px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};

  margin: 0 0px;
  padding: 5px 6px;
  outline: 0;
  min-width: 0;
  width: 3rem;
  text-align: center;
  background-color:#F6F6F6;
  // &:hover {
  //   border-color: ${grey[400]};
  // }

  &:focus {
    box-shadow: 0 0 0 0px;
  }

  &:focus-visible {
    outline: 0;
  }
`,
);

const StyledButton = styled('button')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.8rem;
  box-sizing: border-box;
  line-height: 1.5;
  border-right: 2px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  // border-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
  width: 28px;
  height: 28px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    cursor: pointer;
    background: ${theme.palette.mode === 'dark' ? grey[700] : grey[500]};
    border-color: ${theme.palette.mode === 'dark' ? grey[500] : grey[400]};
    color: ${grey[50]};
  }

  &:focus-visible {
    outline: 0;
  }

  &.increment {
    order: 1;
  }
`,
);

const StyledButtonPlus = styled('button')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.8rem;
  box-sizing: border-box;
  line-height: 1.5;
  border-left: 2px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  // border-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
  width: 28px;
  height: 28px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    cursor: pointer;
    background: ${theme.palette.mode === 'dark' ? grey[700] : grey[500]};
    border-color: ${theme.palette.mode === 'dark' ? grey[500] : grey[400]};
    color: ${grey[50]};
  }

  &:focus-visible {
    outline: 0;
  }

  &.increment {
    order: 1;
  }
`,
);