import React from 'react'

export default class HelloWorldUsingProps extends React.Component {
    render(){
        return (
            <div>
                Hello {this.props.name}
            </div>
        )
    }
}