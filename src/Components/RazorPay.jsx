import axios from "../Axios/Axios";

export const handlePayment = (authData) => async () => {
  console.log("RazorPay", authData);
  try {
    const token = localStorage.getItem('tpt_token')
    const key = process.env.REACT_APP_RZP_KEY;
    const {data} = await axios.post("users/payment/checkout", authData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      // withCredentials: true
    });
    if (data) {
      console.log("data", data);
      const options = {
        key: key,
        amount: data.order.amount,
        currency: "INR",
        name: "Tap & Tag Inc.",
        description:
          "It is a payment during ordering cards from Tap & Tag Inc.",
        image:
          "https://tap-and-tag.vercel.app/static/media/logo.0449bfa0577d6e8e0065.png",
        order_id: data.order.id,
        prefill: {
          name: "Kaustubh Pathak",
          email: "kaustubhpathak9@gmail.com", //user email to be send
          contact: "8707887106",
        },
        notes: {
          address: "Razorpay Corporate Office",
          orderId: authData.orderId,  //order Id of order db mongo to be send
        },
        theme: {
          color: "#085e04",
          hide_topbar:true,
        },
        modal: {
          backdropclose: true,
          escape: true,
          handleback: true,
          confirm_close: false,  
          animation: true
        },
        callback_url: `https://ekdantinternational.in/users/payment/verification?orderId=${authData.orderId}`, //https://stack-overflow-server.vercel.app //mongodb order id to be send
      };

      const razor = new window.Razorpay(options);
      razor.open();
    }
  } catch (error) {
    console.log(error);
  }
};
