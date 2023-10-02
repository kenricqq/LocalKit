import { writable } from 'svelte/store'

export const todos = writable([])

export const addTodo = (text) => {
	todos.update((todos) => {
		const newTodos = [...todos, { text, completed: false, id: Date.now() }]
		localStorage.setItem('todos', JSON.stringify(newTodos))
		return newTodos
	})
}

export const deleteTodo = (id) => {
	todos.update((todos) => {
		const newTodos = todos.filter((todo) => todo.id !== id)
		localStorage.setItem('todos', JSON.stringify(newTodos))
		return newTodos
	})
}

export const toggleTodo = (id) => {
	todos.update((todos) => {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed }
			}
			return todo
		})
		localStorage.setItem('todos', JSON.stringify(updatedTodos))
		return updatedTodos
	})
}
