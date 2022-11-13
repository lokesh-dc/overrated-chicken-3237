import Head from 'next/head'
// import clientPromise from '../lib/mongodb'
import { InferGetServerSidePropsType } from 'next'

import { Grid, Img } from "@chakra-ui/react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Homepage from '../components/Homepage/Homepage';
import axios from 'axios';


// export async function getServerSideProps(context) {
//   try {
//     await clientPromise
//     // `await clientPromise` will use the default database passed in the MONGODB_URI
//     // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
//     //
//     // `const client = await clientPromise`
//     // `const db = client.db("myDatabase")`
//     //
//     // Then you can execute queries against your database like so:
//     // db.find({}) or any of the MongoDB Node Driver commands

//     return {
//       props: { isConnected: true },
//     }
//   } catch (e) {
//     console.error(e)
//     return {
//       props: { isConnected: false },
//     }
//   }
// }

export default function Home({props}:any) {
  return (
    <div className="container">
      <Navbar />
      <Homepage/>
      <Footer />
    </div>
  )
}

// export async function getServerSideProps({req}: any){
//   console.log('SERVER SIDE ', req.cookies)
//   // let {token} = JSON.parse(req.cookies.mohollamartJwt);
//   let {token} = JSON.parse(req.cookies.mohallaMartJwt);
//     let resp = await axios.get("http://localhost:3000/api/users/details", {headers: {token}})
//     if(resp.data.ack===false){
//       let {token, refreshToken} = JSON.parse(req.cookies.mohallaMartJwt);
//       console.log(refreshToken)
//       resp = await axios.get("http://localhost:3000/api/users/refresh", {headers: {"token": refreshToken}})
//       if(resp.data.ack){
//         let {token} = JSON.parse(req.cookies.mohallaMartJwt);
//         resp = await axios.get("http://localhost:3000/api/users/details", {headers: {token}})
//       }
//     }
//     let data = resp.data;
//     console.log(data)
//   return {
//       props: {props: data}
//   }
// }
