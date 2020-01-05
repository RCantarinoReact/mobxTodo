import { observable, action, computed, reaction } from 'mobx'
import { createContext } from 'react'
import uuidv4 from "uuid/v4"


export interface Todo {
    id?: string
    title: string
    completed: boolean

}



class TodoStore {

    @observable todos: Todo[] = [
        { id: uuidv4(), title: "Item #1", completed: false },
        { id: uuidv4(), title: "Item #2", completed: false },
        { id: uuidv4(), title: "Item #3", completed: false },
        { id: uuidv4(), title: "Item #4", completed: false },
        { id: uuidv4(), title: "Item #5", completed: true },
        { id: uuidv4(), title: "Item #6", completed: false },
    ]
    constructor() {
        reaction(() => this.todos, _ => console.log(this.todos.length))
    }

    @action addTodo = (todo: Todo) => {
        this.todos.push({ ...todo, id: uuidv4() })
    }

    @action toggleTodo = (id: string) => {
        this.todos = this.todos.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }

            return item
        })
    }

    @action removeTodo = (id: string) => {
        this.todos = this.todos.filter(i => i.id !== id)
    }

    @computed get info() {
        return {
            total: this.todos.length,
            completed: this.todos.filter(todo => todo.completed).length,
            notCompleted: this.todos.filter(todo => !todo.completed).length,
        }
    }


}

export default createContext(new TodoStore())