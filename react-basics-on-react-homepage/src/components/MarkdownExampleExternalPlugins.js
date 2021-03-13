import React from 'react'
import { Remarkable } from 'remarkable'

export default class MarkDownExample extends React.Component {
    constructor(props) {
        super(props)
        this.state  = {
            markdownText : ''
        }
        this.md = new Remarkable()
        this.handleMarkup = this.handleMarkup.bind(this)

    }

    handleMarkup(event) {
        this.setState(state => ({
            markdownText: event.target.value
        }))
    }

    getRawmarkup(){
        return {__html: this.md.render(this.state.markdownText) }
    }

    render () {
        return (
            <div>
                <h3>Markdown render - testing of external plugins</h3>
                <form>
                    <label htmlFor="markdown">Markdown</label>
                    <textarea id="markdown" onChange={this.handleMarkup}>
                    </textarea> 
                    <h3>Output</h3>
                    <div dangerouslySetInnerHTML={{__html: this.md.render(this.state.markdownText) }}></div>
                </form>
            </div>
        )

    }
}