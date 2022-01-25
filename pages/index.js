import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from "react";
import Link from "next/link";
import {signIn, signOut, useSession} from "next-auth/react";

export default function Home() {
  const {data: session} = useSession();

  console.log("session", session)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        {!session && (
          <>
            Not signed in <br />
            <button onClick={signIn}>Sign In</button>
            </>
        )}
        {
          session && (
            <>
            Signed in as {session.user.email} <br />
            <div> you now have access
              <button onClick={signOut}>Sign out</button>
            </div>
            </>
          )
        }

        
      </main>

      
    </div>
  )
}
