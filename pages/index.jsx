import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'

export default function Home() {
    useEffect(() => {
        window.location.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0'
    })
    const title = "boon4681 (@boon4681) • Instagram profile"
    const url = "https://ig.boon4681.com/"
    const description = "540 Followers, 545 Following, 9 Posts - See Instagram photos and videos from boon4681"
    const image = "/kokowa.png"
    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <meta name="theme-color" content="#FFFFFF" />
                <meta name="title" content={title} />
                <meta name="description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={url} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image}></meta>
                <meta property="twitter:url" content={url} />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={description} />
                <meta property="twitter:image" content={image}></meta>
            </Head>
        </div>
    )
}
