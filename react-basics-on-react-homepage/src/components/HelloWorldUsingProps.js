import React from 'react'

export default class HelloWorldUsingProps extends React.Component {
    render(){
        return (
            <div>
                <h3>Simple component with props</h3>
                Hello {this.props.name}
            </div>
        )
    }
}