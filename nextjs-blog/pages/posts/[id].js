import Layout from '../../components/Layout123'
import { getAllPostIds, getPostData } from '../../lib/MarkdownFetchingLibrary'

//https://github.com/vercel/next.js/issues/7755#issuecomment-624544303 - dont included a function here which refers to something like fs if you dont use it otherwise it will make its way in to the browser bundle which is a problem and you will get an error.

// props is the same as {postData} as long as you refer it properly. If using props then refer to it as props.postData and if using {postData} then use postData directly.
export default function Post(props) {
    return (<Layout>
        {props.postData.title}
        <br />
        {props.postData.id}
        <br />
        {props.postData.date}
    </Layout>)
}


export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}