import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            // router.go(-1)
            router.push('/');
        }, 5000)
    }, [])

    return (
        <>
            <Head>
                <title>Onur | Full-Stack Developer</title>
                <meta name="description" content="Junior Full-Stack Developer" />
                <meta name="keywords" content="Onur Belek" />
                <link rel="icon" href="/favicon.ico" />
                meta
            </Head>
            
            <div className="not-found">
                <h1>Oops...</h1>
                <h2>That page cannot be found</h2>
                <p>Go back to the <Link href="/"><a>Home Page</a></Link></p>
            </div>
        </>

    )
}

export default NotFound