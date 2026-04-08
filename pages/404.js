import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            // router.go(-1)
            router.push('/');
        }, 9000)

        return () => clearTimeout(timeoutId)
    }, [router])

    return (
        <>
            <Head>
                <title>Onur | Full-Stack Developer</title>
                <meta name="description" content="Junior Full-Stack Developer" />
                <meta name="keywords" content="Onur Belek" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <section className="notfound-page section-space pt-40 md:pt-44">
                <div className="container-edge">
                    <div className="notfound-shell glass-card">
                        <p className="notfound-kicker">Navigation anomaly</p>
                        <h1 className="notfound-code">404</h1>
                        <h2 className="notfound-title">This page has gone walkabout.</h2>
                        <p className="notfound-copy">
                            We checked every corner of the internet and only found a confused biscuit.
                            No worries, we can get you back to civilisation.
                        </p>

                        <div className="notfound-actions">
                            <Link href="/" className="pill-button primary-btn">
                                Take Me Home
                            </Link>
                            <button
                                type="button"
                                className="pill-button secondary-btn"
                                onClick={() => router.back()}
                            >
                                Go Back
                            </button>
                        </div>

                        <p className="notfound-meta">Auto-redirecting to the home page in about 9 seconds.</p>
                    </div>
                </div>
            </section>
        </>

    )
}

export default NotFound