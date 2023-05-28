import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'

export default function Home() {
    useEffect(()=>{
        window.location.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0'
    })
    return (
        <div className={styles.container}>
            <Head>
                <title>Login • Instagram</title>
                <meta name="theme-color" content="#FFFFFF" />
                <meta name="title" content="Login • Instagram" />
                <meta name="description" content="Welcome back to Instagram. Sign in to check out what your friends, family & interests have been capturing & sharing around the world." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://ig.boon4681.com/" />
                <meta property="og:title" content="Login • Instagram" />
                <meta property="og:description" content="Welcome back to Instagram. Sign in to check out what your friends, family & interests have been capturing & sharing around the world." />
                <meta property="twitter:url" content="https://ig.boon4681.com/" />
                <meta property="twitter:title" content="Login • Instagram" />
                <meta property="twitter:description" content="Welcome back to Instagram. Sign in to check out what your friends, family & interests have been capturing & sharing around the world." />
            </Head>
        </div>
    )
}
