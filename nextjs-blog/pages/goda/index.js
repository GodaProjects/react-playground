import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/Layout123'



export default class Goda extends React.Component {
    render() {
        return (
            <>
                <Layout flag>
                    <Head>
                        <title>Goda's intro</title>
                    </Head>
                    <h1>Hi! I am Goda!</h1>
                    <p>To learn more about Next.js click <Link href="/"><a>here</a></Link></p>
                    <YourComponent />
                </Layout>

            </>
        )
    }
}


const YourComponent = () => (
    <Image
        src="/images/profile.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
    />
)