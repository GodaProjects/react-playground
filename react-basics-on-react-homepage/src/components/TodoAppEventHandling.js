import React from 'react'

export class TodoApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTodo: '',
            todoItems : []
        }
        this.handleChangeInTodoTextBox = this.handleChangeInTodoTextBox.bind(this)
        this.handleSubmitOfTodo = this.handleSubmitOfTodo.bind(this)
    }

    handleChangeInTodoTextBox(event) {
        this.setState(state => ({currentTodo: event.target.value}))
    }

    handleSubmitOfTodo(event){
        event.preventDefault();

        const newTodo = {
            text: this.state.currentTodo,
            id: Date.now()
        }

        this.setState(state => ({
            todoItems: state.todoItems.concat(newTodo),
            text: ''
        }))
    }

    render(){
        return (
            <div>
                <h3>Todo App</h3>
                <TodoList list={this.state.todoItems}/>
                <form onSubmit={this.handleSubmitOfTodo}>
                    <label htmlFor="todo-text">Todo</label>
                    <input id="todo-text" onChange={this.handleChangeInTodoTextBox}/>
                    {/* <!-- Default type is submit --> */}
                    <button>Add #{this.state.todoItems.length + 1}</button>
                </form>
            </div>
        )
    }
}

export class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div>
                {this.props.list.map(todo => <li key={todo.id}>{todo.text}</li>)}
            </div>
        )
    }
}