
import { MinusIcon, SmallAddIcon } from "@chakra-ui/icons";
//  import Razorpay from 'razorpay-checkout';
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Toast,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { Component, useContext, useEffect, useRef } from "react";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { setcartLength } from "../Context/action";
// import { AuthContext } from "../Context/AuthContext";
// import "../Styles/cart.css";

function Cart() {
    const [change, setchange] = useState(false);
    const [amount, setamount] = useState('');
//   const { dispatchA } = useContext(AuthContext); //set cart length on icon
  const { isOpen, onOpen, onClose } = useDisclosure(); // uset to open thanks purachase
  const [cartitem, setcartitem] = useState([]); // use to show items , cartmei is the ky on ls for items
  const [total, settotal] = useState(0); //set for total price
//   const navigate = useNavigate(); // set to move home page after purchase
  const [state, setState] = useState("");
  const arr = useRef([]);
  const prev = useRef(0);
  // const toast = useToast()
  //   const [isModalVisible, setIsModalVisible] = useState(false)
  const toast = useToast();
  //const status = ['success', 'error', 'warning', 'info']

  //var prevT;
  useEffect(() => {
    let totall = 0;

    cartitem?.forEach((el) => {
      return (totall += +el.price * +el.quantity);
    });
    settotal(totall);
    prev.current = totall;
  }, [cartitem]);



  // change1 is used to manage increase in quantity
  function change1(el, i) {
    if (Number(cartitem[i].quantity) < 9) {
      cartitem[i].quantity = Number(cartitem[i].quantity) + 1;
      setcartitem([...cartitem]);
    } else {
      alert("cant add more than 9 quantity");
    }
  }

  // change2 is used to manage decrease in quantity
  function change2(el, i) {
    if (Number(cartitem[i].quantity) > 1) {
      cartitem[i].quantity = Number(cartitem[i].quantity) - 1;
      setcartitem([...cartitem]);
    }
  }

  function handle(e) {
    setState(e.target.value);
  }

  function discount(e) {
    e.preventDefault();
    console.log(arr.current);
    if (
      state === "D20" &&
      arr.current.includes(state) === false &&
      +total > 10
    ) {
      let remove = (total * 20) / 100;
      let newT = total - remove;
      settotal(newT);
      arr.current.push(state);
      toast({
        title: `promocode applied successfully`,
        position: "bottom-left",
        duration: 3000,
        status: "success",
        isClosable: true,
      });

      //console.log(arr.current)
    } else {
      toast({
        position: "bottom-left",
        duration: 3000,
        title: `yu cant use same promocode again`,
        status: "warning",
        isClosable: true,
      });
    }
  }

  const nameRef:any = useRef<any>(null)
  const emailRef = useRef(null)
  const contactRef = useRef(null)
  const amountRef = useRef(null)

  const makePayment = async (name:string, email:string, contact:number, amount:number) => {
    console.log("here...", name);
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const data = await fetch("/api/razorpay", { 
      method: "POST", 
      body: JSON.stringify({
        name,
        email, 
        contact,
        amount
      })
    }).then((t) =>
      t.json()
    );
    // const data = axios.post('/api/razorpay', {
    //   name, email, contact, amount
    // }).then((res) => console.log(res, "DATA"))
    console.log(data, "DATA2");
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "Mohalla Mart Pvt Ltd",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou for your patronage",
      image: "https://manuarora.in/logo.png",
      handler: function (response:any) {
        // Validate payment at server - using webhooks is a better idea.
        alert(`Payment Id: ${response.razorpay_payment_id}`);
        alert(`Order Id: ${response.razorpay_order_id}`);
        alert(`Razorpay Signature${response.razorpay_signature}`);
      },
      prefill: {
        name: {name},
        email: {email},
        contact: {contact},
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };
 
  

  return (
    <div>
      <section className="cartstart ">
        <h2 className="cartheader">CART</h2>
        <br></br>
        <br></br>
        <div className="cart-row">
          <span className="cart-item cart-header cart-column">ITEM</span>
          <span className="cart-price cart-header cart-column">PRICE</span>
          <span className="cart-quantity cart-header cart-column">
            QUANTITY
          </span>
        </div>

        <div className="cart-items">
          {cartitem.map((el, i) => {
            return (
              <div className="cart-row">
                <div className="cart-item cart-column">
                  <img src={el.img} alt="" className="cart-item-image" />
                  <span className="cart-item-title">{el.name}</span>
                </div>
                <span
                  style={{
                    height: "80px",
                    paddingTop: "40px",
                    paddingBottom: "20px",
                  }}
                  className="cart-price cart-column"
                >
                  {el.price}
                </span>
                <div className="cart-quantity cart-column">
                  <InputGroup width="90px">
                    <InputLeftElement
                      onClick={() => change2(el, i)}
                      //   pointerEvents="none"
                      color="gray.300"
                      fontSize="1.2em"
                      children={<MinusIcon color="#EB5757" />}
                    />
                    <Input value={el.quantity} />
                    <InputRightElement
                      onClick={() => change1(el, i)}
                      children={<SmallAddIcon color="#EB5757" />}
                    />
                  </InputGroup>

                  {/* <button
                    onClick={() => {
                      cartitem.splice(i, 1);
                      setcartitem([...cartitem]);
                      //  if(arrdata.length==)
                      localStorage.setItem("cartmei", JSON.stringify(cartitem));
                      dispatchA(setcartLength(cartitem.length));
                    }}
                    className="btn btn-danger cart-quantity-button"
                  >
                    Remove
                  </button> */}
                </div>
              </div>
            );
          })}
        </div>
        <br></br>

        <form id="form1" onSubmit={discount}>
          <input
            id="name"
            value={state}
            onChange={handle}
            type="name"
            placeholder="promocode"
          />
          <input id="submit" type="submit"></input>
        </form>
        <br></br>
        <button
          onClick={() => {
            settotal(prev.current);
            setState("");
            arr.current.pop();
          }}
        >
          Remove discount
        </button>
        <div className="cart-total">
          <strong className="cart-total-title">Total</strong>
          <span className="cart-total-price">Rs:{total}</span>
        </div>
        <button
          onClick={()=>makePayment("testname", "aaryansinha16@gmail.com", 980988976, 899)}
          className="btn btn-primary btn-purchase"
          type="button"
        >
          PURCHASE
        </button>
      </section>
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Congratulations </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Order Successfully Placed !</Text>
            </ModalBody>
            <ModalFooter>
              {/* <Button
                onClick={() => {
                  localStorage.removeItem("cartmei");
                  setcartitem(null);
                  navigate("/");
                  dispatchA(setcartLength(0));
                }}
              >
                Go to home page
              </Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </div>
  );
}

export default Cart;