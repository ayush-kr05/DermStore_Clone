// import React from "react";
// import "./Cart.module.css";
// import { Button } from "@chakra-ui/react";
// import { Box } from "@chakra-ui/react";
// import { Input } from "@chakra-ui/react";
// import { Image } from "@chakra-ui/react";
// import { Container } from "@chakra-ui/react";
// import { Fade } from "@chakra-ui/react";
// import { useDisclosure } from "@chakra-ui/react";
// import { TriangleDownIcon } from "@chakra-ui/icons";
// import { CheckIcon } from "@chakra-ui/icons";
// import {
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   TableContainer,
// } from "@chakra-ui/react";

// export function Cart() {
//   const [count, setCount] = React.useState(1);
//   const [data, setData] = React.useState([]);

//   const handleAdd = () => {
//     setCount(count + 1);
//   };
//   const handleSub = () => {
//     setCount(count - 1);
//   };

//   React.useEffect(() => {
//     fetchAndUpdateData();
//   }, []);

//   const fetchAndUpdateData = () => {
//     fetch(` http://localhost:8080/Cart`)
//       .then((res) => res.json())
//       .then((res) => setData(res))
//       .catch((err) => console.log(err));
//   };

//   const { isOpen, onToggle } = useDisclosure();
//   return (
//     <div>
//       <div>
//         <div style={{ display: "flex", fontSize: "20px", fontWeight: "400" }}>
//           <div
//             style={{
//               marginLeft: "6%",
//               fontFamily: '"Poly Regular","Times New Roman",serif',
//             }}
//           >
//             Your Cart
//           </div>
//           <Button
//             bg="black"
//             color="white"
//             borderRadius="none"
//             w="300px"
//             p={2}
//             marginLeft="60%"
//           >
//             CHECKOUT SECURELY NOW
//           </Button>
//         </div>
//         <br />
//         <div style={{ marginLeft: "5%" }}>
//           <Box
//             bg="#f2f9ff"
//             color="#267b9b"
//             border="1px solid #cce5ff"
//             fontFamily='"lato regular",Helvetica,Arial,sans-serif'
//             fontWeight="700"
//             fontSize="14px"
//             p={2}
//             w="90%"
//           >
//             New To Dermstore: Treat yourself to the Augustinus Bader Hand
//             Treatment (worth $53)
//           </Box>
//           <br />
//           <Box
//             bg="#e6f2e6"
//             color="#007d1e"
//             border="1px solid #c8dec8"
//             fontFamily='"lato regular",Helvetica,Arial,sans-serif'
//             fontWeight="700"
//             fontSize="14px"
//             p={2}
//             w="90%"
//           >
//             You have qualified for: Choose your gift with any purchase over $50
//             - Don't forget to make your selection below
//           </Box>
//         </div>
//         <br />
//         <br />
//         <div style={{ display: "flex" }}>
//           <div>
//             <TableContainer w="1100px">
//               <Table variant="simple">
//                 <Thead>
//                   <Tr>
//                     <Th>Items</Th>
//                     <Th></Th>
//                     <Th>Price</Th>
//                     <Th>Quantity</Th>
//                   </Tr>
//                 </Thead>
//                 <Tbody>
//                   {data.map((product) => (
//                     <Tr>
//                       <Td>
//                         <img
//                           style={{ height: "70px" }}
//                           src={product.img_url_1}
//                           alt="ProductImage"
//                         />
//                       </Td>
//                       <Td style={{ fontSize: "14px" }}>{product.title}</Td>
//                       <Td
//                         style={{ fontSize: "14px", fontWeight: "700" }}
//                         isNumeric
//                       >
//                         {product.price}
//                       </Td>
//                       <Td style={{ fontSize: "14px" }} isNumeric>
//                         <Button onClick={handleAdd}>+</Button> {count}{" "}
//                         <Button onClick={handleSub} disabled={count <= 1}>
//                           -
//                         </Button>
//                       </Td>
//                     </Tr>
//                   ))}
//                 </Tbody>
//               </Table>
//             </TableContainer>
//           </div>
//           <div>
//             <Box
//               bg="whitesmoke"
//               color="black"
//               w="330px"
//               height="120px"
//               p={2}
//               marginLeft="50px"
//             >
//               <div style={{ display: "flex" }}>
//                 <p style={{ fontSize: "18px", fontWeight: "700" }}>
//                   Gift Selection
//                 </p>
//                 <Button marginLeft="150px" onClick={onToggle}>
//                   <TriangleDownIcon />
//                 </Button>
//               </div>
//               <p style={{ color: "green", fontWeight: "700" }}>
//                 Qualified <CheckIcon />
//               </p>
//               <p style={{ color: "green", fontSize: "14px" }}>
//                 Select a free gift
//               </p>
//             </Box>
//             <Fade in={isOpen}>
//               <Box
//                 bg="whitesmoke"
//                 color="black"
//                 w="330px"
//                 height="330px"
//                 p={2}
//                 marginLeft="50px"
//               >
//                 <p style={{ fontWeight: "600", fontSize: "17px" }}>
//                   Choose your free gift
//                 </p>
//                 <br />
//                 <Box display="flex" p={2} bg="white">
//                   <img
//                     style={{ height: "50px" }}
//                     src="data:image/jpeg;base64,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"
//                     alt="theImage"
//                   />
//                   <span
//                     style={{
//                       fontSize: "13px",
//                       marginLeft: "30px",
//                       marginTop: "10px",
//                     }}
//                   >
//                     Augustinus Bader The Rich Cream 7ml
//                   </span>
//                 </Box>
//                 <br />
//                 <Box display="flex" p={2} bg="white">
//                   <img
//                     style={{ height: "50px" }}
//                     src="data:image/jpeg;base64,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"
//                     alt="theOneImage"
//                   />
//                   <span
//                     style={{
//                       fontSize: "13px",
//                       marginLeft: "30px",
//                       marginTop: "10px",
//                     }}
//                   >
//                     THE ROUTE THE GOLDEN RULE Next Generation Retinoid 8 ml.
//                     ($17 Value)
//                   </span>
//                 </Box>
//                 <br />
//                 <Box display="flex" p={2} bg="white">
//                   <br />
//                   <img
//                     style={{ height: "50px" }}
//                     src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0PDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxYVLTEhKDUrLy4uFx8zODMsOCgxLisBCgoKDg0NFQ8QFisdFh03Ny0tMC0tKystLisrKy03LSsrKystKy4rLS0rKystLSsrKystKy0tKy0rLSsrLS0tLf/AABEIARMAtwMBIgACEQEDEQH/xAAcAAEBAQADAQEBAAAAAAAAAAABAAIEBQcDBgj/xABCEAACAgECAgUIBgcHBQAAAAAAAQIRAwQhBRIGEzFBcSJRYYGRobHBFCMkMnJ0c4KSo7Kz0TM0UmKiwvAHQ0RTY//EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAJREBAAICAQIFBQAAAAAAAAAAAAECAzERIUEEIjNRYRITIzLw/9oADAMBAAIRAxEAPwD0kDQHge8ERAACAAQgBAIABCRBkDTAAChIDNAaYEGQNAFZYM0TQGCESDnkIG0AGgYAREAAJAZIQACEAADQAZIWAEAkQZA0BBkDQBWaEQA55CBpkEIBQBoAAKEgMkJAZJiAAQgAAaAAAWBBAIAANCRBkhAK54CRpkERABCAAwNAFACddxXiXUcu20mo2oTyPmfYqin7TNrRWOZWImZ4h2AHTrX5Xv5UVu7lBQitu9tbHUPpViUpL6XBpd0YNteNIx96PaWoxy/XEfjZdNtPH72pivxw5F7Wkd10b46tbCc44pwhFpQySjyxyrdNxV3s0arkixbHMRzLtyEDbAA0AAwFkAAJEGSEAOcAgaRERABCBAEJAZZ1nFFdeMPidocDXxtv0JfE8/ivTdMe35Hpgq0WpfesZ5jwDGvpWNVs9Jnk/S05Uz07pttw/VP/AOfzR5rwBfa8X5LU/GRjB6dnaezfGY3GvO4r2s9a6Br7IvGf8yR5TxGNzxR/xZsMfbNI9Y6Cr7M15p5F+8kbpusGT9ZfoyEj0PMyQkBkqEgMgaAAIiA5tFRoCozRUaIDBM00DAyQkBk4epXlS/D8jmnFy/2nqR5fF+m6Y9vx3TmN8M1X4Wv4TzPo/wD3nH5/oeo/3HpnTvyeH6tPujH3zijzTgC+14vyeo+MjGGfxW/uzt7OTnf1+m2v7Tpu39LE9T6CP6if6TL/ADsh5Zl/vGm/M6b+bE9U6Cr6jJ+Ob/ezNUnzVXJHkl+mASPW8jJGgoiskNEBkDRAZohogOYJUFFZNA0Q2BkDTCgrJDQ0BijiZf7X1I51HW62E3k8iST2tNPdV509meXxnpumL9n5T/qJkX0DW+mOJevrYnmnR5/asP5PU/FnpPTmKlotSs3WctQ5uVxlLyZxa7TzXgUorVYXF5HWlzuKljgm47ptvm7duw5+Hj8Vv7s7T2cr/wAnTfmNP/Gj1boSvqp+N/6pHlGrko5MTipNrLhUPL6vyudVbSdKz1LoDfVZFLtUpxpdi5ck1te+5aR56y1knyS/U0FG6Cj2vGzQG6CgMhRsKAwRoqCsEaogjlkJBAQkAUVCQGaA2AGLOPlxS5+anyut1uclo5GJeT62ZvijLH0ysX+nq/O8c0Gnz4M+PPtDJj5cktk4pdjTfY0eJ8BhBcWWFX1OOGrxwm9pzxJtJv3+0/ofPE6bV4IW3yxvz0r9pinhvtxMfVzy197ns8w4fw+L19ZMU5YMUrwz5ZSjJquWUmlXnfd3HonROKSyJRcUvOq3tv1nHnFX2HZ8C7MnivmYrh4vFudOlskzXh2oDYHocUREAAaADNEJAZIaIDlEJFQEJEAQkUBCRBkxxDrPomo6p8uXqM3VPmUaycj5Xb2W9bn0PjxXD1mi1ONvlWTT54OSjKbjzQavlW78Fubptm2nT8H1uty5si1Onz6fHGORxWZYabeeXIlLHKSbWPlT3Prr5SXYk/O3Kq9wcEyQn1rx8Sy6+EXGDx5Vp1PTy7afJjjJNpraRvXelpLvvvNXnolXR4M0p83PjeNqbSTakpR7pJruaO54ItsnivmdY4q9lSWy8DteCLbJ4x+Z5qzy7207EjVAdHMEIBUREAEIBBQkQVySIioiIQgEiACGwCos+RRwZJOaxKMMknkaTWNJN87T7a7fUJ8tf1X0bOs7rC8OZZWrtY+R83Z6LNU2zbT8/wBH8ks2bUajLqOtzdVhxdW9Dl4fkhhucoSnDJJylfNKpbLZqrs5+rRwOj+ZZc2oyz1kdTqI48eCWJaaWkyafHGU2uthJt9ZJyb7lVNJJ79hqjd0q6rItzs+Ddk/GPzOuyLc7Pgy8mfjH5nn7uvZzwNtGTTIoKNAAAaYBQREEAgIVySEioCIgIhACISABy4oSxThkSljlGcZxfY4NU17APpFXFp9m9mqbZtp0vD+GrTyzVqc+ZZpdY45pY5ck0lFyTUVLsUVu391et1RyNPGNzfMpNNxpOdpX3qUnR8NSaslXWTW52fBvuz8Y/M63J2nacGXkz8V8DhG3WdOeDRqiNMsUBugAywo1QAZA0wACEArlERFQEJAAkQEREBG6uDV1aavzGByc/Vvq65rVcytdu/eu41TbNtPjOMl2y5vFJP3HA1R9I66cskcc8MsblzeU3ttGL83+Zr9Vnz1JqyVdbM7Tg33JfiXwOtmdnwf7kvxfI4xt1nTngJGmQDNAQZBo0RRghAgANEFfcSIqAjSQqIGSo1sFgFDRFQEfHX8vUS5m1G47xSk0+ZVt371sfejGpbWKVcj7qyOoO3VNmqbZtp0uaclFyjqlytRk+scoUpShy7tPd7r9bZHXTjqp8/LqsUuWeNNw5ZVWOpxaS2blv7PB9nqcUer8vSya2S6qbnajJSTdPzpM4ubiG7rS6hW9/qkt/O9/wDlG7JAl2nZcFdwyejJXuR0uLPklOnglCNO5SlG0/NSORpuMYdOskcnM5OfMoxV7VR55nierrEcx0fogZ+V1PS//wBWFLzOcvkjq9R0k1U/+4oLzQil7yTlq1GK0v3kppbtpeLo4uTiemj97NjX6yPO82syT3nOUvGTZ8ecxOX4bjD7y9HjxbSvZZ8f7SOVDNGSuMoy8GmeWcxyNDkzKa6lz5r7I37xGX4Jw/L00yfDQvI8cet2nSs+52cEREByBSAUUaRSZIGiAEBRUNDQCgNKIZcUZRcZRUovtTVpipGm0/QajozLqdRwvFblHng328mScfXV1fp/qfCWHkio3KVd83cn4s7fJjb7HH3r+pxMukm/8H7T/oW0kOomj8jxvMnnaT3SXxZ+7zcKySTSywx33qDyP1W1XvOu0/QvSRk55J5885O5SyTSv1RSpHnvWbdIejHaK9ZfhnZ9cOkyz2hjnP8ADFy+B6Rp+D6XH9zBjVd7jzP2s5qilskkvRsZjD7y3Of2h55p+jesnX1XIvPOSj7u07PTdDpduXMl6Mcb97P2NAbjHVznLaXSaboxpIdsHkf+eVr2I7PBpMWNVjxwh+GKRyaCjUREaYm0ztiio0RUZIaID6kRFCmaTMEBtoKCxUgIrHmLYCsrCgr0hDzBZUDQUNgNByhBZWNFsFAhYEDYNgQDZA2ACyAgPsREUQEQERWQEQEA2VgAGuZhzBYWA2VgQFZEAEREAEREEBMgKyIgPsREyiIgAhAgKyAmBERBEAgFREQERAAgRABERBARAREQH2AiKEyRAIEQEREBAxIAIiAiIgICIgiIgAiIAIiAiIgP/9k="
//                     alt="theTwoImage"
//                   />
//                   <span
//                     style={{
//                       fontSize: "13px",
//                       marginLeft: "30px",
//                       marginTop: "10px",
//                     }}
//                   >
//                     SkinCeuticals Hyaluronic Acid Intensifier 2ml (Worth $6.50)
//                   </span>
//                 </Box>
//               </Box>
//             </Fade>
//           </div>
//         </div>
//         <div style={{ marginLeft: "5%" }}>
//           <hr style={{ width: "330px" }} />
//           <br />
//           <p style={{ fontWeight: "600", fontSize: "20px" }}>Cart Subtotal:</p>
//           <br />
//           <Input
//             marginLeft="200px"
//             fontSize="14px"
//             borderRadius="none"
//             size="lg"
//             focusBorderColor="black"
//             variant="outline"
//             borderColor="black"
//             placeholder="Got a coupon code? Enter it here:"
//             w="300px"
//           ></Input>{" "}
//           <Button bg="black" color="white" borderRadius="none" w="100px" p={2}>
//             Add
//           </Button>
//           <br />
//           <br />
//           <hr style={{ width: "1000px" }} />
//           <br />
//           <Button
//             bg="white"
//             color="black"
//             border="1px solid black"
//             w="250px"
//             p={2}
//             borderRadius="none"
//           >
//             Continue Shopping
//           </Button>
//           <Button
//             bg="black"
//             color="white"
//             w="300px"
//             p={2}
//             borderRadius="none"
//             marginLeft="30%"
//           >
//             CHECKOUT SECURELY NOW
//           </Button>
//           <br />
//           <br />
//           <div style={{ marginLeft: "44%" }}>
//             <Button bg="white" margin="1px">
//               <Image
//                 boxSize="40px"
//                 border="1px solid black"
//                 src="data:image/png;base64,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"
//                 alt="Klarna"
//               ></Image>
//             </Button>
//             <Button bg="white" margin="1px">
//               <Image
//                 boxSize="40px"
//                 border="1px solid black"
//                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAA8FBMVEX///8NOIMAnNoWKWcAmNkAlNcAltgAmtkANIEAHXkAGngAKX0AMYDs7vMAI3sAk9cALH4AH3kAJnwAJHuj0OwAF3cALn/M5PQAoN4zUY+psckAE3bo8/r2+v00pdyy1+8XIWHDytqLxei93fGgqsVtuOQMdrHu8fV9v+ZXsOHg7vjX2+bW6fbg5OyGk7bN0+BneaaazOu3v9NGXpZ3hq0TL3OTnr1Wap2xus8XGlwuTI1Jq98UPYYAAHNNZJlhtOIXSIISZZ+Bj7MRWZMAC3VidKMjRYkXF1oVMm4UQHtxgasMTJIKYKMIcrMGg8IKZqjcvCivAAALXElEQVR4nO2ceVvjOBLGQ8aOndjEcS5CEocQ7iPcHWhIQw+9MDvMbO/3/zab+FCVZFuymSeYZ7t+fzUmsuwXSVX1SulSiSAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiB+BdZTOPCKfrJPx9mgmkatY17f9E+KfsLPw25tTYbZtdzqxXbRT/lJeDWlYvnY7vyq6Of8FHTUWi0HmHt9UPSTFs/UzSTWYnQ1p0U/a+FsNzOKtWbW14t+2KLZtbKKtWa+Fv2wRXPTzSzWWnNW9NMWzHWGYMio/eJZaj2HVmvWbtGPWygH1TximZtFP2+hnOcaWWudop+3UPrZg+ES95fOtc4aucSqnxf9wEVya5NYmcmTOPzqYnmxMvq3FL58+bKWdc06mXdi1pi9eTFbqdIbhh7DGD1dbrznZg9OcAPnCF08EcvoNK1CxaqZumoljVfTbtTrz6srL3WjHMcwtIp+OMx7r2MnuoGD0vArsYyWi/Xb+DJDV9P03K07WFXFdKwnaBUq5kxy3mxHi9pq6OpMCIZfFGJ910bqikdqZLSucz541verpIq1eOWHfDe7jMQycMMLIRgqxBr/3jMMpVpyI6Nxm1OGnO+XrNaR+g6IvWhKG4fo6r2wuqjE+tkrGyNVVwojw73LK0Su90tG38pzs1F0M62NroqbFYpZ+HV5g0o7tZMAlZFh5pcix/ulrFtGnpux9a+CYmnMU1YtWT1fbkVXqnLTXUUKkb6+h0MrRwoxZDfTUSCNLcWKWbjvi1XZkXaFjYxmbUG1bnFjrbGCiDh0QBfNT5EqGjfWtBwRcYMFCx1dFZdixZL1NRzSh6ndLEFGRuuq5Hne+kn/Hndkv7xPkGzvV65sLfr0hqftEV7zjafsN2uzYIjXZ3Eplos1/tGL3yIOMjLm7OIzUmsVrhh7v7JRZhcPkVrquAQcsmC4h66KS7FcrD+ivivSrsDIwEMIxV3zPvtz536/soGyhJ7xLrEeWDDEOXgrz5IVDaxFDSDtCoyM7hlc3YX0dxUj6wjEQosTSr7yiAX5O1qdY56yXCzWsZ7eTwkbGRbKqFBhZa8gLYUhpKGMaguJlT0t9SAYHsPVmKcs0+rrfi+TWMjIqKPzN3ewaHWf0cen27uz2ay//c8qbHi/cuUULmOxcFQa7rQnk0l7J7nCPmXBAk+hO7EuyTQJFx3LnhsZGTV0PAJVoVY/ujg9M2stq9FoWM3afLaoo6ab95s+9/6gfI5+eoxZQ2ebIffn3PuVdVSOTZIG3PGhoWs+Fb08WXz6eBSxxUts9HCH2cvo8Z9IK2lZiuabhS6jWOKGA25620HR2LTc7dKNZQbYjcUH1r+Z0Y+u0MuzG/2q8VjihhCOPg8glh4OuOGRY6BlX9N3SnuaERKk2xMmFk43RE85Xazxd9BKkWfBEDKRwXCAXMbQFJsNREv7XyePkaTmUoLSHGY0f0LsZADDdxu/H/eXHKK0Plw6Jo5YFjmnD0LbJ5Y54ERWrOHS1ys0B1XFIRgZ3Zukq1FCcZ1g5LwydYJ1DYTH91qwxh69+8a9H/eXfEJDKBgkD3FvwkBTJmjLEg4cK2KectqwGu9jrdiITgYSKlibSjMUSlrLc3Heq9yaCNoiG9HGfdygPIR/P+wTTJDFFZRovUQ3tSy0ZZUTjhXZPOXxHz8MTitFTgp/gVZYMHtXm3gU+SvZvWJXKWwLxxJdFFnPoY/BCf9+zCfwdrhqx1+NFM5E2BY8Vz2npzz++kPnpeJrgBjIyDCvHx8frze7tSae7/55iRcutJi2La4I1SCVgHmIq28Q2grSXuQpGw9LRprO1dF+Kv7EzcHlgi6IFXgM7/KUx+Ov4+/7ZUEqlemAjYwgXAkyLOfTFcqGzWZt8+LiusanMWH0mzLDDaX9FxBCwhNjO7gIXIogyOC7WVtouV9EwdHT00jnl7AgCGT0lBfqRPz7z++/7//s9WJSqews1eG4wTJ4oc9Y8zDN72Mfh0kDK2AnStq2wbEchOmX3FNeRLzl/EKf0Xrh0t3G4y+siJI9ZfGc8mId50nsWJNv8Kg85eW8mYFYLmTzB3N4niDGlXBJGdVOHjRuRSegFJ5yZcILqoMKHhqE4fqS7CkLwdDeT1ZHQF4YKjxl1xcBZmod+4BTeKBGJMM6uxZZGC/sr2GzPE6+cuu+CChtxekTWu7CYcBiqMxTNjNppXLgZYefzWDXEAKLUFLDutBiOegmE7/m/4yWuyqrpmSecrhrCFtlQkkNyVjgMWTzlP/KIpbK6ZAcjjPr8yAfeGGadPiz9aAiHBOANdAX0IOEDXaJsKcsPm+lfCpoovPlM1RKgceQyVM2/84ilq7YCk87HGdbtfvo5djgsy/4xiesMRyag3noJ/WPUB/AqNxI2WBdxrwoCYeBJfjLosfQjn6WecrmfzKI5UiT9xJ/OM5u1X1ct2Pf7rKxAtO/KXzHBcQCPxotgouk4w5muQUZYxtnDpUQXdeOLpkfBUuTJuwgMrFCPzqTp2z/VIplOMr9JGRkWG/nASdTbhM7abIJv8F+NMjvTtEk76DKGjzlcmVvI+D0mOt0R5hsCb+JysdET1lYim3ZYYGgtSH0kwAYGal7ODD9q8LXgZjSOF0Hv6KxC3dvvKF2D4kGPAcMPnEhORQ8BmG9Dx9CWIptxcAyHGmZE5LsKXNA4VAV7FEmRRO3RfOQfcBcw+2SPWWOSapYBu8xZPOUX2ViGZpzpB5WqZ5yilhN3qTqNxPbJp0RHuAPpHjKKWJV+KUEhlzQNtlT7mcLhkv/UHNGl9kOhKV4yhwwDfloeAB/Pe6bHPHTiVH9HJLiKadowvsAyB8M2iZ7ys98GR0PhpruOE6lPHqapBj7CSAjo5n2mW3YgKuhAeKhaqfBNYgdEhY2HpGnnFq3olIb23G42snhKceCYb5DOiHJnjLPFB3dabEzItsNtAv7yDW4E62kDh9Fkz1lHuwwa2wi7qA6WvSUNYmnbAslg6JeTgF5ys+pH8Ld1l6upt7Bye4mjs1CW3Ee1oVvECV7ygLYtdGPdo69g9P2CCcAeTzlrjAJVal6Mq9JnrIIt6lkN92qeMxGbPvCTQJbHLOJnrLIBLs4hpZwzCZoC0ezJJ7yXJyFeXXygRnWSv/C/vpgTY542p63dF0xcsQ95QQk9SNum8lTNoUyOs/RAAAZGWIOhXlWGISxtngWVMX/BwCZLLLpcKgwCHN4yuZ/BbGyZKAxkJFRk31unmB6WbBJGDttjzzdbqwwwIFO1qnoNfuK9IS2mTxlMXN43/oOKZT8WNF6PabWoM+eKH7KBh3BacRuBhaofDoMK6JahtOGDdUcnrKYOWjyo5ApvDEjo3sh/eD6nJ+JlnleEvZN8adR/Rw/jwqesmI6DMv8TKwYG1DsSD1l4ZxyV5jRYm2ejbeqFfJNdcj2rGNFI6nbspaFc6MZtRULJdi1aNzE77QXHvNYFBqqc9QTJ4qAhlHxJ0+FtQ2C3yi6UEHru8pTlp9XS8PrR6i/EOX1b61a1a125jdB4FxPa3sGk3sev0/Ja0eoZ4PXPvKP5zrlveDDw6htODgOop9x3TQVwrcYDMvxjlaAtz5Vn8uK7z//w06Hx3lzyJtvNcRAKKPznO1dNRCJPsv/K3HJR4o8p8ZXDGx9fZrv/gvblKkm2odzhyLhZ/m/cIRtylQT7aNBWYObXm1+MILnkGqifTSwx2o/qj/9MQxFg6boBwqZoZ3+z/L3E7cp5UdsPw50dDRWPxfHFi+WrkqFP4hrljZY8vLpQ/F6DvqGvyP/2tfHMYuSwcGKvln9TrzEfxIEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAE8X/L/wC7nP4mDcelVQAAAABJRU5ErkJggg=="
//                 alt="paypal"
//               ></Image>
//             </Button>
//             <Button bg="white" margin="1px">
//               <Image
//                 boxSize="40px"
//                 border="1px solid black"
//                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAABfVBMVEX///9fYmc0qFPqQjVDhfX8vANfY2ddYGX//v90dXlfY2b///1eYWfr7O5SVV3t8f0gd/Tm5uhWWF1Fhfa5ubozffShv/lYW2BZXWDqQjNPUVfw8vPR3vqam57FxcfrQTj9uACRkpXU1ddCh/P/+/HoQjBqbHB9foHe3+CjpKdzd3z7wz9ck/Oys7dLTVIzqVbKy82Fh4xit3gmpEdMsWVUsm386uf84d341dH1xcL1urjyqqb1g37vY1rqLhbtTTzub2bxjozykITpNSXnJgrtWU/rfXDynZXoNSvtWErudnH/9PLlNhjtZ2DwhH75zsP868rxXgD8zWPzfCT2nxf91H/6rxHsWS/xbijqMjj76bz4xAD1jxn6voAAava90vv99t6Eqfb80HH95q7luweMuWSZtvzZ5/2xsi2Kxpl/rkDk8+dZkvNUsEn4xjG43sKYsTjKtQB1ofefz6o6guPS691AjtIAoDg7l6uNyZ47nYs2pmg4k8A0m5k2pH/CMG2NAAAQEUlEQVR4nO1ci3/T1hWWEqIrS3Igso1kKXZiO35R7NgxBAIlwAytmwDraLuOsvW9Upa22ZpmGeu2v33n3CvZetoqxI7D735AiG1Zlj5/556nJAgcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHKcFWZYFVYB/6lkfybmCqqqyrCLO+kjOFZAwmZPGMSWAukYP9rdv3Ny5Bdi5eWNb9m418+Oac4ys8sbtd+9Ud4e4e+/+rX1KK/cQYaDawHfu/K7/oN/PL1KsAeDnYPfBw9vbAnWtHH4gbdu3HwJl+cW1xfwiZQxQxYd3q/21926qXG0hACfv332ENFEsInf0lyoQBw+r/d29m3xt80IGNtTbILQq0kVVxqgbIQ/qGzx4si0kk1wxG4lieYXZ+Vth7UDE9p1+dc1HVBT6d28Bxwloq1l6FAyzVm8ic28DbXAOtwYDdAGTaMvnd+8nOueUKYqS6APBHxIhhtXtvB2RzMYeOIL82gTWqBbz/YfbCfaYIgHSRpA0Ta+vTP2cpo/tvf4idZ8TjRRQHdxNwBvQFscbqs6QitM/rSkCY7X9D/qwqiFnXtpAflX/c1Ual1T7d/Yn7zdFROSNiNoIIjyQ0E7hh9ZunWdDlWV1+4NBpKycwC3vmic4U/zX30vAGtCmScCbQjys0R/EFd1yYeonNz2o6v7jfuTav+iGIt7FDVi7t5/IJSBtomgScAEm/DRN0yCmYeiEyg6hN6d/etOCKt+LYg2j3sGg3x8MWKzL5Acm+ujxvi/njwPSpgA15fSKB41yq24xvQF37c70z29aeL+/GHYE+X7/7p177z558t69h4P+YLjYLQ5Aa4kSLEdtejr0SrmrM89AxNrKOYzfVBlk8/vdqscSIQhZBEfQX7u/c4OtYOr2zVt3+gOaM+QX+4+xFJLkVJE2TSLLQdqQ86YuMTerF4TzVwnFQtD+3bW8n7d8/tGdnQAxN+7vDmBZq/YfJxYHpU2RQrRRtHQnOiGNc1gcANk86a/5UoO16uCDHX/WiSGKcGPv0WL+0d5+4nMcR5sMeiOuVzh3rMER33gEWvPSlt99b1uQfU0ElRYn5du7GK9tJN33ONpgbyKh7lSTTuM8Zg35cb666GftlsDWn5E14gqI/3b25N+wEo2lTRWKBqOtnT53TkEVPvzDAIKKKvOkVYzLdihnaqTp/KbzG7u2CapdY2ublQ1+FP1i5HnmUn269NGzYSJaXcs/uEX962nsewJtQonVQ4zQ4jbPhFHIH64vPf847xa/1xbBQtG7nsqBT6KttUyN1Cg5tHk/VGZt2tM4jGngk/WlpaU/fuoUJ9cGe05X+TT2PYm2juWnjUG20+mVRjpt26dxDFPCEsOfnjF3sLZNm3pnRptdbNZrugXQpXopO4cVOeoqP1unrK0//zPk7HlqoqdnGGNpg8/JOhlWSaCOWlU7XWvZIG59hBi6Vcva1HXjFE+jdoUiVY5eQ1S5cCVVq8HfrjC9CBqOdIPZKOL5x58+W6zeUU/JG1BMoq1gUHpcl9DomkTUfMVMQvRa1jlaQRCBUoBZiLGFhkEUQgzRKrL4fCpAU9x4Zwl4cxT36TPqD0LBwCTEfsIE2uQa1ZWmswCkpStEDELTiNXFRQ55YOqUiB6z6kHeIWFRtGZP0RfjoW4sPXflBoL7qE9zgeDpTYc2wQ13RQh3VcHu6lqINFY812sNFkbajGcppkgnO1LVW6/JSCLgCX82Ig1oW/qLEI4y5YuTEPvNjqVNFlJOliDCI2BNpKVL1rUh7gqH9Tp4Ls06s00d68OSlIqUW9FgvOn2NAMXMNLR0kYtdf3DiM1WP780Hp9/EbcgMtrEEG2M55bOSrx0aevqCjKEWSrR22a9W1fakOojaRL42hR7ywq8BTsTeidsharaNbBJoemlN+NlIlThqVdtS0tfRmy0eqlyoVK5EI0KvJK7HJdVxNKGamjpEhUSIWCCTcu1StPoFm2qeDtbd57V3Nq5XEKBaqJSj/i0lTa+JGlG4004SQBVeMfH2jtRJ796KZO5kImhDZ7P5L6Ky+5jaKNbZw1CW8+SjlFbuaZjQ4tIZq1DdYQBhyB3NMPhjbAIrmwBMWC+ZkRA19RF7JSR7puRMhGysOGn7WnUVquXQFQoqyhk4KXMz3FLCavuhtWGsQYIiTYDiZimfqilGxKoqjSsITDFdcFS8Y9reU4P0Qg4BXgH9ReEKFZ5uuU7NUTb11GbAW1xWmNqy1wdT5tklFd8aGTrhgHrGpy/JraLTr1lpa5jviDQuUOaFSNvctdAURJt2aZsdEBS1EvYvg4r/Fp0YufU9EI2FwHaPonaBmmLW9oYdVfjYnKkjYj+ORAiGpZlEDcqc1WEmXtR74ZP2abdaHCPRfqSnWIuFiJa74fC2ppiQeBy9lSYGYOA2tZfmzY1ujbndq6IKPrjWMkNySTLF/Cno8LUImsOGgWWDbYcUdUDWzaohwGnO/UCwGnSFgmHtmD4OoShN92Tjx/bspmMgCcaidsS24VR9m/WZApenn5jIrFLmGikY2hjjjASRjCcj6a/wGiroYxgg4JJ36z7xyBsFicTszH9fo6qviZtGddJZJjaYgpNrpFKIwwXNY206zTAGr7TW+Yb7Q4y0WVGcpo109IWHb8RDdtLUBYjExGXynB6eLrAoPOpP26L6kmt5i6EeMt4fslAADKWNklRAjKDMEzX68XgtBFd8hvZQj1VA6TqhWzDhv2yqpyop50VtGtgokAMtwNBP7puapqiaVbAdKcApO1rf5YQmVzlMDzL+HDBR9tXcSOpjtoUMzCFarXFZhnPNviucqEGL1MXArxgua3UgRCX0eZGuGVwChqYZMrz7oYJUlNENwmbJvATvvHRtv5NxGarn2dyAYD4HOpolnB5XJYA7tJsZVsO2MhzwxaCHgDfX661IYPHWS5xONRlWLUCy/iHtMldhZaH2h5lFXQaPeszmDPEPPJLL23r3/41wp9d/O5yEN9VXDOltI1N5QmRwuUxNTRprgp2yVBwVBCsWmTroEhnVRVT8qsNAlsFQl4aG7unomsQzsHCac+gZ4PlXQ9p69/+2DsICydctRReDJNUTFcvvYg7Vqo2yVc4ii7TwQM7RettmDxgQIvWTQUnOhM2Htpkwl6VVgTnWiaaIUDsPJNhOZl2SYf4fnOz93LS5Dy9uuhyzusbKhfjNp5QpvTuNV0ztWGcYoLHsCwda244ehmgTRVaBn3Oajq02XXmoJVZzHzRTPAbJ9JdWvrb5ubmwsLBxN4FHOcPF1zPmgFv8fPrlSn9O62bEnGGUw0xVWpms61mKVUzzOGwuYe2NIa2GNmwLhtkCCxBKM2iMa16F7dvf9xcANqo3Ma/S1VXcyNPWsnlvovdNhltrI/gRMaiLnq6fHanZBlOZuExUqHE6kl6hz0ssISr3ZhJP19G4n6iavseOEOxLfQOJ7wJFvOr3opIJrcau21C2kA+EHRoioKl3ZbMnnPXP7vkdBx0T4mt4ZThupTztMKqxHXhlNriE4CfSUOQvyNjDjaEuMxcZWfzRc4T/ILc4o80sdroVAN4D+JmmrSWpDL/5CTvI9ogDegOFShjQ0uhxfBZXuWw8RMuaws9h7jN3nV2Y4GITVGdsnrRlzJUcl/Ff8NJaZPrTFCK0YmYPcoGaEMqyxbWLiVITOFIa8SkqccMr3RVhU/+gWwNxbbZ21JjZqSo1chXcxmf2FZfu+E3PISVGqPNaIY+edSE9hqpINOyiETz+0abvT7VNl/wmNWD3gL1BkMgb5HuFL5YVf4548tQcz+8fp/UPQShPGqYhru0HoN0jwPze4MGwwYYJmQREOgqykznRWThqDeiDBlc6F07jtwUxHbxKs2sPLR9cRq0WRqrDcmhNR2kqARpw6dtdB+QQ9QE26SJmDnT62kwet302Ciz096R6kyX0XCS3kQFNpYPf8lgpOaJda/aYwK9pLQ5NQ7SDbsinIwWw7TRPhX2TK1GlrmT9kzFhjHI4clCgDgw1EN6kx4nB2ISON46+fWfuYqbWcHPyqUvxk0zJFYbm2MgqQhPlFZCcRtFw6RdfKN0RaSrXH2m4+Z0Hvxlb7PnkxsGvtcOD9gWbMODw62Thd7Cyb9ymeHaVsn9MHZeNTltTFBWIBPHj667xboAbc4Eq+h0c8I+eKrAVV5Wr/nU5vzeW7j+8vD44ODg+Pjw1XV4yOLhf//i0FaBPy/ivC5Fck/qMBPuOjkJQARtDWrZbrW4NttrG9jdUo5P/Fa66XDX6530ACcnDmf4bO/XX3Ks+FFhlbY3V5vgpOJGLbhlAftRSiRtQt0c8Wa1zuCSEFjeel6djQMS9x/MEyqZXGw73kEy2kCtTrtAQ948haV0d1kj0WqTh5c1iLQXfxZzvnDgRydBfzoGvf8yK510e4akFRDVdkxNMpXikAC7VTNHo1thtck0SJacOPkMgKf/qpdIbAvUWk/+V8ldyLyYNACfmDY37wTd6KnsiizL6U6hpuPYFigw0pMCWs5A0qyjj+Fh4/n7ot5Jhtpb+E/lxcTLiJIaKezmCqs80qZWu73cbluGge0BRW92rCgjha/aGa4EsXXP5AIQmYa9h4l423TcxeZFYeJ4NI4HaVICtaEzxWlnIrJKuNuGkSSzLnTYmEJAbWghTYMSjdHHmV03IwvHm71kyxuo7fpBgl2mFJCLIkVcvRzGCqHqkkY9VSRQh1y9GKU2irRF17ZZtPligWnUy5PJnCG1vVeJLiQDI8WZ0SS0yYLdtUQtMPZAh8QZbVoEbbZFI5CZFtqCwDRaPrw2yVJRj9eOk10OVdMNw9QNK4naZEHOSgZxxrKweSWZpInFjmLbQOCyH/iqqJFKYu0srzJi+bp91BtPnDfPn4RCiaKb7LRUId0S2zqhY8+GYbULbAi3XCogSrZf4TKmq0ibebb3xMCaDdaij64NmQsvdb3NVwe0S/NblpNEATz7IhrNEo6ApLqFonOzMt9VbL6dstqI1J6TS9rsQ8hAe0POnOYMcta7fnQwxcuZGFQ7nbYnfStgGs6kmzHtEeeEQFM4ONqimShy5TB20ts6wvLlKV1r+obAjIy2AiVzyiPOSeGU2OSDw5dbW1vXAfDfq8MDdnBquAJ7NpAlWjOihba5OCB2E1mV/Wof2O61OM6dshPdKHD66Fg4aSNZxfm5i4js3H99+C3iwDu1znm57l+V6wTCFA17V/PC2rwDv7qOiVeKaMYs23xvAfCSXSJp8xJ9nBNg+4FIYuDuBBwTUDLwPo2ElOfGH8w92JQ9ljBJ1AWSHNEYXtOBU89z4tnPBZwBByP64m+OSAyvV5vpkNG5h2w79x/Q5yXROw/AQUF63YJxnm/aO3uoNQ2DD3Hq9xJ4u5BtL+N1C+05KbSdF3SyxSL+bfDog4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODIwb/B3wkqdCz5ZdwAAAAAElFTkSuQmCC"
//                 alt="gpay"
//               ></Image>
//             </Button>
//             <Button bg="white" margin="1px">
//               <Image
//                 boxSize="40px"
//                 border="1px solid black"
//                 src="data:image/png;base64,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"
//                 alt="afterpay"
//               ></Image>
//             </Button>
//             <Button bg="white" margin="1px">
//               <Image
//                 boxSize="40px"
//                 border="1px solid black"
//                 src="data:image/jpeg;base64,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"
//                 alt="sezzle"
//               ></Image>
//             </Button>
//           </div>
//         </div>
//         <br />
//         <br />
//         <Container
//           maxW="1000px"
//           border="1px solid black"
//           display="flex"
//           marginLeft="80px"
//           height="110px"
//           p={2}
//         >
//           <div>
//             <Box
//               bg="lightgrey"
//               color="black"
//               display="flex"
//               w="270px"
//               height="90px"
//               p={4}
//             >
//               <img
//                 style={{ height: "50px", padding: "5px", borderRadius: "50%" }}
//                 alt="logo"
//                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAgVBMVEUAAAD////8/PwEBAT6+vrg4OAjIyMICAj29vby8vI5OTnw8PChoaFZWVnb29vHx8ezs7OIiIgeHh7q6uqrq6sQEBAxMTFBQUHQ0NApKSlTU1OYmJhxcXGPj49sbGxHR0d4eHi6uro0NDReXl4XFxd/f3/Ly8u4uLilpaWUlJRNTU2LvwHTAAAIDUlEQVR4nO1ciXaqMBCFJAiKooILLrXaapf3/x/4sgBqnSBCAnrO3PeKrUqSm1kymSQ4DgKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCNugrdxiE76z6vF/ce9BrHrx3KeXZK7/aJsHZxIQ4jL3URD+EyTpeDj9HByvGXUF2a7HmbiESD7ixZtM17EUA5WXbmjx1tSgcUFGXkkQbd7nRaHtU6GO0BJSg4IikXPhQg3cYDKa0668AA2MSMTNfoLNwO/IowkDeVwiOYmrd9TL16ffBQ+nDok7iLZ+bvivTEQomDeiuYLRtuRjXiJS6cYDp+DityIbw0QKZ0Z+ZfN951UlQqRn5tEC8wY0k0orxmKWyGVpLNhyebRm8Ra8llQwJgbayVxJow31skKkIJTGrTnh6kSKWOZqLCTFBYS3kPLIXPEzECFXLVZhCcDrBskgi4fFxaaKVSOiWAi9Z/JSCMe9fAFvTAZ5aG/XUioTYYUQZNxezEfKC+DfSBaSgm1bqWwjeYyreFx9UlYGc5nXExJ5EiIZDaKazTI9I+qllAf/TjpvwXdVJ8Lk/zCd/J722/1pc4jCs5j0t4k7v+f2h5LqRIjrzT4XRdfyX+aL3Swpv4+pe6f2Q5U7RIJi/Ah/l1Cv+ssfIZg7oiFrx3YUfFciUqNItNN7nvnWu+h/GEnPIocqRJRHitZSGLCei4Ful1z7sduCZsJxdSoRl4RbX81cte2g1H8Lyvww/+DTsWskd8czMo79MkvNu/kjLS/KO9rN3N2TCJvSPOID2kFzKkK/hv0ycyebLiXCwlHeVAHISDKagucu0MbC/L3+wiKNe0SSj/M39ZO9Ikh/D8qSfbOOJMJNN4r9i5ZWwLIvmABsRDXMqkhgIiqOClePdiFd9uUgCnaL+2PTSjQSEZ3a/7h/+w3WjAEiUesPZCWJ2CFTolrCzh90mfzbW0i1iJLxNP+SBcBE+CyCvNWpkA85P9quYeH8fgl1oZEIcdNa4xf3wkcPcMCZSNbG219AS2Tl1FWCJVCcio/ZRHpBK7ql81pv9SukP2ChcgFV6lYLREieHUlqarNsY8x0ExQyorbmJX8ry4KMbc3iVPA11QbCQ2szxT8VqpHQ9eaNqovDi165QmJtIIGJnBrVRp2hZt6rfIgVgBX249o01I0f5Cb7lRH5tJVxBBdnJ42LTXXr978G2gwCnDyMGmvyHtQsjnFLxi7T0+TYoEDV0JVmikUSW5k6SI8PzYulkSY5FNjKC0Gq9Wag3JkmZUcGBgqHAI3s/wyUu9PlHkcGCocAEYmbF0sHsDxcd9+8cBCAjQQGvAo9whvziBG9hQCM7JGJcmkI0BAVDE2UDgAYEE04LceJYCLurHnpIP7aCP9vIP/EJ4qpJgBuHjXAACRiRvhjjWpNLGWEbm3E3RgpWEPEnbVIxERVVEukpTk7MWWOKaxZrdkI//vLSMFe50SIZ6Jcv69VLTubBwCJBCbygStd+sGMK7kFlEVpPq+mzrtGIFn+1zxuiKh1y8biP+my4ztLU8SbkV1Kv/lGsW94zm4v/QsQkVFjw1m7H7oaIraWrQAbIW7z6ejyYuvgFZitlQUg1iLuvnHuaaM7BGFkjgDhJkQRHZnKjxos8PueLq9lK4oHU6YuWTZ0LGtVGMCkbnb8LkAi7rChjzzIzXWASNi7sZb/Aezu+z1BpJ6h8A4Y3LQ/z2v0re2kKwkk6tSpxHi4KS/TMnZomQhhq3OzHga0iJhx2Zls+xV0i6Hfta2E+im00K4MZmVt84N2C8eoVoXCZcOZeCL2QH+1voUjIP1jzc5baDJzYi/31t4eDq1E2LiOXfrUj8AQS74ZGEjG6qAhInS6xuISd9kTWMRiUGEzx95xS/2mGiZcDK1etTq7M3U1G4C5vgVLOxzKiBBZ80is7VcLueRMzHd2ehpELrt1QMRljK2rHpigUnZ0z2CBqH4xse7yKBGOvqh+V7ET1ajzRvLuhzDuZE9joMZisqlkI0qxJlKO4Clm8a5NCynbCpi5zK9exUTEQqTkeMgbaMzE7iZTrURYER/1q6gX9fdBsbUIys2RsP5uigZESKHogtD4/krsMs3uY7A8+KBu+VCP3tiv1KL31w+f/+AfDA7gFlnVDXKHKbNr6ZWJMPKtMVXudUdjxrL23iBQbBh7eAuxHSKiNcl0cI6+irOFy42X9z0MdbjsM7upayJEbUH2ZqdlPJeDJFeo3vo0CdVMg+Vfg3gEKnf5FKqVT/DEr2GUpoev1FPDRXF8jxBQLPLt8bHzw2IXTFySWzRRyTfCzoddmWYVQQlSPcfG7hG+ikQudOfiaSj5W9kHmhmuOLth/2kpVY1dMzqct8VqMotcFdUo9CSqVQvSioJ/r/jMh0sOKlxL1rZFYZUIy68JH0ctHlGwTkSec+dOzrO1X641Iq7UrnEsQ7RXthExL2NDe4csWiPCo5ZAHWptydYtEeGljuMsqfhSEiH5EXySRWXBru0nnxmUCGN5cMmGcflx62cmIo+Eymk7O+TPcXpJIsWDaw5qLunXXbrrnIgrpBIO1c6G5ntAOiPCLaSfbueFw21pHDRNhFvI12mRrwT75xP7L0bEG45u9690IJGH2WRPPxIuKppM19afFXIffuRFSZR4DyMaTzan7fvHsWUN0qCzZ6gah4qHajt82niHmknUPVv8JM1XaBpmPw+bpnE2LS7dor35AgKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCEv4D4oQSolk537pAAAAAElFTkSuQmCC"
//               />
//               <div style={{ marginLeft: "10px" }}>
//                 <p style={{ fontSize: "30px", fontWeight: "700" }}>Live Chat</p>
//                 <p
//                   style={{
//                     fontSize: "14px",
//                     color: "darkgreen",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   Our Operators are Online
//                 </p>
//               </div>
//             </Box>
//           </div>
//           <div>
//             <p style={{ marginLeft: "300px" }}>
//               Average connection time 25 secs
//             </p>
//             <Button
//               fontWeight="400"
//               bg="black"
//               color="white"
//               w="550px"
//               p={2}
//               borderRadius="none"
//               marginLeft="30%"
//             >
//               START CHAT
//             </Button>
//           </div>
//         </Container>
//       </div>
//       <br />
//       <br />
//       <br />
//       <div style={{ fontSize: "25px", fontWeight: "600", marginLeft: "35%" }}>
//         Customers who bought this also bought:
//       </div>
//       <div style={{ display: "flex", padding: "10px" }}>
//         <div style={{ height: "250px", width: "300px", margin: "40px" }}>
//           <img
//             src="https://static.thcdn.com/images/large/webp//productimg/1600/1600/13309093-8554974693052359.jpg"
//             alt="img"
//           />
//           <br />
//           <p style={{ fontSize: "14px", fontWeight: "600", padding: "5px" }}>
//             Augustinus Bader The Cream Cleansing Gel
//           </p>
//           <br />
//           <p
//             style={{ fontSize: "20px", fontWeight: "600", marginLeft: "110px" }}
//           >
//             $69.00
//           </p>
//           <br />
//           <Button bg="black" color="white" borderRadius="none" w="300px" p={2}>
//             Quick Buy
//           </Button>
//         </div>
//         <div style={{ height: "250px", width: "300px", margin: "40px" }}>
//           <img
//             src="https://static.thcdn.com/images/small/webp//productimg/original/13309091-9064974672429345.jpg"
//             alt="img"
//           />
//           <br />
//           <p
//             style={{ fontSize: "14px", fontWeight: "600", marginLeft: "30px" }}
//           >
//             Augustinus Bader The Essence 100ml
//           </p>
//           <br />
//           <p
//             style={{ fontSize: "20px", fontWeight: "600", marginLeft: "110px" }}
//           >
//             $90.00
//           </p>
//           <br />
//           <Button bg="black" color="white" borderRadius="none" w="300px" p={2}>
//             Quick Buy
//           </Button>
//         </div>
//         <div style={{ height: "250px", width: "300px", margin: "40px" }}>
//           <img
//             src="https://static.thcdn.com/images/small/webp//productimg/original/13905817-4944976248566474.jpg"
//             alt="img"
//           />
//           <br />
//           <p
//             style={{ fontSize: "14px", fontWeight: "600", marginLeft: "20px" }}
//           >
//             Augustinus Bader The Conditioner 150ml
//           </p>
//           <br />
//           <p
//             style={{ fontSize: "20px", fontWeight: "600", marginLeft: "110px" }}
//           >
//             $55.00
//           </p>
//           <br />
//           <Button bg="black" color="white" borderRadius="none" w="300px" p={2}>
//             Quick Buy
//           </Button>
//         </div>
//         <div style={{ height: "250px", width: "300px", margin: "40px" }}>
//           <img
//             src="https://static.thcdn.com/images/small/webp//productimg/original/13309108-9414900850719170.jpg"
//             alt="img"
//           />
//           <br />
//           <p
//             style={{ fontSize: "14px", fontWeight: "600", marginLeft: "30px" }}
//           >
//             Augustinus Bader The Shampoo 200ml
//           </p>
//           <br />
//           <p
//             style={{ fontSize: "20px", fontWeight: "600", marginLeft: "110px" }}
//           >
//             $55.00
//           </p>
//           <br />
//           <Button bg="black" color="white" borderRadius="none" w="300px" p={2}>
//             Quick Buy
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cart;
