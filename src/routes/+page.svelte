<script>
  import TodoForm from '$lib/components/TodoForm.svelte';
  import Todo from '$lib/components/Todo.svelte';
  import {todos} from '$stores/todoStore.js';
  import { onMount } from 'svelte';

  onMount(() => {
    const savedTodos = localStorage.getItem('todos');
    if(savedTodos) {
      todos.set(JSON.parse(savedTodos))
    }
  })
</script>

<h1 class="text-2xl text-center text-gray-800 md:text-3xl">My Todos</h1>
<TodoForm />
{#each $todos as todo}
  <Todo todo={todo} />
{/each}

<style lang="postcss">
   :global(html) {
     background-color: theme(colors.gray.100);
   }
</style>
