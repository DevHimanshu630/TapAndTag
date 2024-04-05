import axios from "../Axios/Axios";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Navigate, useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { Icon, IconButton } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import { Unstable_NumberInput as BaseNumberInput } from "@mui/base/Unstable_NumberInput";
import { styled } from "@mui/system";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CardCart from "../Components/CardCart";

const NumberInput = React.forwardRef(function CustomNumberInput(props, ref) {
  return (
    <BaseNumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInput,
        incrementButton: StyledButton,
        decrementButton: StyledButton,
      }}
      slotProps={{
        incrementButton: {
          children: <AddIcon fontSize="small" />,
          className: "increment",
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

function CheckoutCart() {
  const token = localStorage.getItem("token");
  const [carts, setCarts] = useState("");
  const [orderArray, setOrderArray] = useState([]);
  const [delCart, setDelCart] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const navigate = useNavigate();
  const [show, setShow] = useState("");

  useEffect(() => {
    const getting = async () => {
      const res = await axios.get("users/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCarts(res.data.cart);
      console.log(res.data.cart);
    };
    getting();
  }, [delCart]);

  console.log(orderArray);
  const handleOrder = (ids, amount) => {
    let index = orderArray.indexOf(ids);
    if (index === -1) {
      setOrderArray([...orderArray, ids]);
      setSubtotal((prev) => prev + amount);
    } else {
      let updatedOrder = [...orderArray];
      updatedOrder.splice(index, 1);
      setOrderArray(updatedOrder);
      setSubtotal((prev) => prev - amount);
    }
  };

  const proceedToPay = async () => {
    try {
      const res = await axios.post(
        "users/order-now",
        { orderArray },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate(`payment/${res.data.orderId}`);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  const deleteCart = async (ids, amount) => {
    const res = await axios.delete(`users/cart/delete/${ids}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.error("Cart Deleted!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setDelCart(!delCart);
    setSubtotal((prev) => prev - amount);
  };
  return (
    // <div className='flex p-4'>
    //   <ToastContainer/>
    //   <main className='flex-[0.8]'>
    // {Object.keys(carts).map((key) => (
    // <div key={key} className='my-6'>
    // <Card sx={{ maxWidth: 1000 }}>
    //   <input type="checkbox" onClick={() => handleOrder(carts[key]._id, carts[key].amount)}/>
    //   <CardMedia
    //     sx={{ height: 140 }}
    //     image="/card-demo.svg"
    //     title="green iguana"
    //   />
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //       Cards
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //     <div className="flex justify-between">
    //       <div className="flex flex-col gap-2">
    //       Plastic :<NumberInput aria-label="Quantity Input" min={1} value={carts[key].cardQuantity.plasticCard}/>
    //       Wood :<NumberInput aria-label="Quantity Input" min={1} value={carts[key].cardQuantity.woodCard}/>
    //       Metal :<NumberInput aria-label="Quantity Input" min={1} value={carts[key].cardQuantity.metalCard}/>
    //       </div>
    //     <div className=''>
    //       <IconButton onClick={()=>deleteCart(carts[key]._id, carts[key].amount)}>
    //       <DeleteIcon/>
    //       </IconButton>
    //     </div>
    //     </div>
    //     </Typography>
    //   </CardContent>
    // </Card>
    // </div>
    // ))}
    //   </main>
    //   <section className='flex-[0.3] my-6'>
    //   <Card sx={{ maxWidth: 700 }}>
    //   <CardMedia
    //     sx={{ height: 140 }}
    //     image="/card-demo.svg"
    //     title="green iguana"
    //   />
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //       Cards
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //     hello
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     SubTotal : {subtotal}
    //   </CardActions>
    //   <Button onClick={proceedToPay} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" >Proceed To Pay</Button>
    // </Card>
    //   </section>
    // </div>
    <>
        <div
          className="w-full h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
          id="checkout"
        >
          <ToastContainer/>
          <div className="flex md:flex-row flex-col justify-end" id="cart">
            <div
              className="w-full pl-5 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
              id="scroll"
            >
              <p className="text-3xl mb-4 font-black text-gray-800">
               Cart :
              </p>
              <div className="md:flex items-center border-t border-gray-200">
                <div className="flex">
                    <CardCart/>
                    <CardCart/>
                    <CardCart/>
                </div>
              </div>
            </div>
            <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
              <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                <div>
                  <p className="text-4xl font-black leading-9 text-gray-800">
                    Summary
                  </p>
                  <div className="flex items-center justify-between pt-16">
                    <p className="text-base leading-none text-gray-800">
                      Subtotal
                    </p>
                    <p className="text-base leading-none text-gray-800">
                      $9,000
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800">
                      Shipping
                    </p>
                    <p className="text-base leading-none text-gray-800">$30</p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800">Tax</p>
                    <p className="text-base leading-none text-gray-800">$35</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                    <p className="text-2xl leading-normal text-gray-800">
                      Total
                    </p>
                    <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                      $10,240
                    </p>
                  </div>
                  <button
                    onClick={() => setShow(!show)}
                    className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      <style>
        {` /* width */
        #scroll::-webkit-scrollbar {
            width: 1px;
        }

        /* Track */
        #scroll::-webkit-scrollbar-track {
            background: #f1f1f1;
        }

        /* Handle */
        #scroll::-webkit-scrollbar-thumb {
            background: rgb(133, 132, 132);
        }
  `}
      </style>
    </>
  );
}

export default CheckoutCart;

const blue = {
  100: "#daecff",
  200: "#b6daff",
  300: "#66b2ff",
  400: "#3399ff",
  500: "#007fff",
  600: "#0072e5",
  700: "#0059B2",
  800: "#004c99",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const StyledInputRoot = styled("div")(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 400;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[500]};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`
);

const StyledInput = styled("input")(
  ({ theme }) => `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.375;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 4px ${
    theme.palette.mode === "dark" ? "rgba(0,0,0, 0.5)" : "rgba(0,0,0, 0.05)"
  };
  border-radius: 8px;
  margin: 0 8px;
  padding: 10px 12px;
  outline: 0;
  min-width: 0;
  width: 4rem;
  text-align: center;

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? blue[700] : blue[200]
    };
  }

  &:focus-visible {
    outline: 0;
  }
`
);

const StyledButton = styled("button")(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  line-height: 1.5;
  border: 1px solid;
  border-radius: 999px;
  border-color: ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
  background: ${theme.palette.mode === "dark" ? grey[900] : grey[50]};
  color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
  width: 32px;
  height: 32px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    cursor: pointer;
    background: ${theme.palette.mode === "dark" ? blue[700] : blue[500]};
    border-color: ${theme.palette.mode === "dark" ? blue[500] : blue[400]};
    color: ${grey[50]};
  }

  &:focus-visible {
    outline: 0;
  }

  &.increment {
    order: 1;
  }
`
);
