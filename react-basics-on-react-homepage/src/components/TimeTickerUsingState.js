import React from 'react'

export default class TimeTickerUsingState extends React.Component {
    constructor (props) {
        super(props)
        this.state = {seconds: 0}
    }

    componentDidMount() {
        this.interval = setInterval(() => {
                this.setState(state=>({
                    seconds: state.seconds + 1
                })
            )
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                {this.state.seconds}
            </div>
        )
    }
}