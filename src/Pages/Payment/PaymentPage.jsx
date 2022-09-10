// import styles from "./PaymentPage.module.css";
// import React from "react";
// import { Box } from "@chakra-ui/react";
// import { Image } from "@chakra-ui/react";
// import { Button } from "@chakra-ui/react";
// import { Input } from "@chakra-ui/react";
// import { Select } from "@chakra-ui/react";
// import { Container } from "@chakra-ui/react";
// import { Radio } from "@chakra-ui/react";
// import {
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   TableContainer,
// } from "@chakra-ui/react";

// export function PaymentPage() {
//   const [data, setData] = React.useState([]);
//   React.useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     fetch(`https://fakestoreapi.com/products`)
//       .then((res) => res.json())
//       .then((res) => setData(res))
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div style={{ backgroundColor: "whitesmoke" }}>
//       <Box boxSize="100px" bg="white" w="100%" p={4}>
//         <Image
//           marginTop="10px"
//           marginLeft="15%"
//           height="50px"
//           src="data:image/png;base64,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"
//         />
//       </Box>
//       <br /> <br />
//       <div style={{ display: "flex" }}>
//         <Box
//           boxSize="100px"
//           bg="white"
//           w="400px"
//           p={4}
//           id={styles.stickBox}
//           height="700px"
//         >
//           <p style={{ fontWeight: "600" }}>Order Summary</p>
//           <p>Order Number : 4567819</p>
//           <br />
//           <Box overflow="scroll" height="400px" id={styles.scrollBox}>
//             <Table>
//               <Tbody>
//                 {data.map((product) => (
//                   <Tr>
//                     <Td>
//                       <img
//                         style={{ height: "70px" }}
//                         src={product.image}
//                         alt="ProductImage"
//                       />
//                     </Td>
//                     <Td style={{ fontSize: "14px" }}>
//                       {product.title} <br /> {product.price}
//                     </Td>
//                   </Tr>
//                 ))}
//               </Tbody>
//             </Table>
//           </Box>
//           <br />
//           <hr style={{ backgroundColor: "grey", height: "1px" }} />
//           <br />
//           <p
//             style={{ marginLeft: "10px", fontSize: "18px", fontWeight: "600" }}
//           >
//             Sales Tax
//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//             $40.53
//           </p>
//           <br />
//           <hr style={{ backgroundColor: "grey", height: "1px" }} />
//           <br />
//           <p
//             style={{ marginLeft: "10px", fontSize: "20px", fontWeight: "700" }}
//           >
//             Total:
//           </p>
//         </Box>
//         <Box height="750px" width="650px" bg="white" p={5} id={styles.main}>
//           <p style={{ fontWeight: "700", fontSize: "30px" }}>Checkout</p>
//           <br />
//           <br />
//           <p style={{ fontWeight: "600", fontSize: "20px" }}>
//             1. Email and delivery address
//           </p>
//           <br />
//           *Email
//           <Input size="md" />
//           We'll send the purchase receipt to this email.
//           <br />
//           <br />
//           <br />
//           *Country/Region
//           <br />
//           <Select placeholder="Please select" bg="white">
//             <option value="Can">Canada</option>
//             <option value="Us">United States</option>
//           </Select>
//           <br />
//           <br />
//           *Full Name
//           <Input size="md" />
//           <br />
//           <br />
//           <br />
//           *Address
//           <Input size="md" />
//           <br />
//           <br />
//           <br />
//           *Contact Number
//           <Input size="md" />
//         </Box>
//       </div>
//       <Box bg="white" marginLeft="20%" marginTop="100px" w="650px" p={4}>
//         <br />
//         <p style={{ fontWeight: "600", fontSize: "20px" }}>
//           2. Select Delivery Option
//         </p>
//         <br />
//         <br />
//         <Container
//           id={styles.contOne}
//           border="1px solid black"
//           borderRadius="5px"
//           boxsize="100px"
//           p={3}
//           height="150px"
//         >
//           <p style={{ fontWeight: "700", fontSize: "20px" }}>
//             Standard Delivery
//           </p>
//           <p style={{ fontWeight: "600", fontSize: "16px" }}>
//             Delivered within 1-3 working days
//           </p>
//           <br />
//           <p style={{ color: "green" }}>FREE</p>
//         </Container>
//         <Container
//           id={styles.contOne}
//           border="1px solid black"
//           borderRadius="5px"
//           boxsize="100px"
//           p={3}
//           height="150px"
//           marginTop="30px"
//         >
//           <p style={{ fontWeight: "700", fontSize: "20px" }}>Express - 2 Day</p>
//           <p style={{ fontWeight: "600", fontSize: "16px" }}>
//             Delivered within 2 working days
//           </p>
//           <p style={{ color: "green" }}>$10.95</p>
//           <br />
//           <p style={{ color: "grey" }}>
//             Applies to orders placed prior to 2pm ET.
//           </p>
//         </Container>
//         <Container
//           id={styles.contOne}
//           border="1px solid black"
//           borderRadius="5px"
//           boxsize="100px"
//           p={3}
//           height="150px"
//           marginTop="30px"
//         >
//           <p style={{ fontWeight: "700", fontSize: "20px" }}>
//             Overnight - Next Day
//           </p>
//           <p style={{ fontWeight: "600", fontSize: "16px" }}>
//             Usually delivered within 1 working day
//           </p>
//           <p style={{ color: "green" }}>$29.95</p>
//           <br />
//           <p style={{ color: "grey" }}>
//             Applies to orders placed prior to 2pm ET.
//           </p>
//         </Container>
//       </Box>
//       <Box bg="white" marginLeft="20%" marginTop="50px" w="650px" p={4}>
//         <br />
//         <p style={{ fontWeight: "600", fontSize: "20px" }}>
//           3. Select Payment Method
//         </p>
//         <br />
//         <br />
//         <Container
//           border="5px solid grey"
//           borderRadius="5px"
//           boxsize="100px"
//           p={7}
//           height="530px"
//         >
//           <p style={{ fontWeight: "600", fontSize: "16px" }}>
//             Credit/Debit Card
//           </p>
//           <br />
//           <br />
//           *Card Number
//           <Input size="md" />
//           <br />
//           <br />
//           <br />
//           *Name on Card
//           <Input size="md" />
//           <br />
//           <br />
//           <br />
//           *Expiry Date
//           <br />
//           <div style={{ display: "flex" }}>
//             <Select placeholder="Month" w="200px">
//               <option value="On">01</option>
//               <option value="Tw">02</option>
//               <option value="Th">03</option>
//               <option value="Fo">04</option>
//               <option value="Fi">05</option>
//               <option value="Si">06</option>
//               <option value="Se">07</option>
//               <option value="Ei">08</option>
//               <option value="Ni">09</option>
//               <option value="Te">10</option>
//               <option value="El">11</option>
//               <option value="Tw">12</option>
//             </Select>
//             <Select placeholder="Year" w="200px" marginLeft="100px">
//               <option>22</option>
//               <option>23</option>
//               <option>24</option>
//               <option>25</option>
//               <option>26</option>
//               <option>27</option>
//               <option>28</option>
//               <option>29</option>
//               <option>30</option>
//               <option>31</option>
//               <option>32</option>
//               <option>33</option>
//               <option>34</option>
//               <option>35</option>
//               <option>36</option>
//               <option>37</option>
//               <option>38</option>
//               <option>39</option>
//               <option>40</option>
//             </Select>
//           </div>
//           <br />
//           *Security Code(CVV)
//           <Input size="md" />
//         </Container>
//         <br />
//         <p style={{ marginLeft: "280px" }}>OR</p>
//         <br />
//         <Container
//           border="5px solid grey"
//           borderRadius="5px"
//           boxsize="100px"
//           p={7}
//           height="470px"
//         >
//           <p style={{ fontWeight: "600", fontSize: "16px" }}>
//             Use a different payment method
//           </p>
//           <br />
//           <hr />
//           <Radio p={2}>
//             <img
//               style={{ height: "60px" }}
//               src="data:image/png;base64,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"
//               alt="Sezzle"
//             />
//           </Radio>
//           <hr />
//           <Radio p={2}>
//             <img
//               style={{ height: "60px" }}
//               src="data:image/png;base64,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"
//               alt="Klarna"
//             />
//           </Radio>
//           <hr />
//           <Radio p={2}>
//             <img
//               style={{ height: "60px" }}
//               src="data:image/png;base64,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"
//               alt="afterpay"
//             />
//           </Radio>
//           <hr />
//           <Radio p={2}>
//             <img
//               style={{ height: "40px" }}
//               src="data:image/png;base64,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"
//               alt="gpay"
//             />
//           </Radio>
//           <hr />
//           <Radio p={2}>
//             <img
//               style={{ height: "60px" }}
//               src="data:image/png;base64,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"
//               alt="paypal"
//             />
//           </Radio>
//         </Container>
//       </Box>
//       <Box bg="white" marginLeft="20%" marginTop="50px" w="650px" p={4}>
//         <Button
//           bg="black"
//           color="white"
//           borderRadius="none"
//           w="600px"
//           p={2}
//           height="60px"
//           fontSize="20px"
//           onClick={() => {
//             alert("Payment Successful!");
//           }}
//         >
//           SUBMIT MY ORDER
//         </Button>
//       </Box>
//     </div>
//   );
// }
