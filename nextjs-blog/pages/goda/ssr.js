import { getSortedPostsData } from '../../lib/MarkdownFetchingLibrary'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/Layout123'

// Server side props for SSR and getStaticProps for SSG
export async function getServerSideProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}





export default function GodaSSG({ allPostsData }) {
    return (
        <>
            <Layout flag>
                <Head>
                    <title>Goda's SSR</title>
                </Head>
                <h1>Hi! This is Goda's SSR!</h1>
                <ul >
                    {allPostsData.map(({ id, date, title }) => (
                        <li key={id}>
                            {title}
                            <br />
                            {id}
                            <br />
                            {date}
                        </li>
                    ))}
                </ul>
            </Layout>

        </>
    )
}


