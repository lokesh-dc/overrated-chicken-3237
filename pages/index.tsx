import Head from 'next/head'
import clientPromise from '../lib/mongodb'
import { InferGetServerSidePropsType } from 'next'

import { Grid, Img } from "@chakra-ui/react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


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

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Footer />
    </div>
  )
}
