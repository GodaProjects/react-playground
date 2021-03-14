import '../styles/global.css'

export default function App({ Component, pageProps }) {
    return (
        <div id="app-file-id" className="anotherClass">
            <Component  {...pageProps} />
        </div>
        
    )
}