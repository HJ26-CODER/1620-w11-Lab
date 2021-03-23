const todoList = [
    {
        todo: 'clone repo for starter code',
        status: 'complete'
    },
    {
        todo: 'link js and styles files to index.html',
        status: 'complete'
    },
    {
        todo: 'add js',
        status: 'started'
    },
    {
        todo: 'Finish 1620 with good grades',
        status: 'started'
    }
];

const completedTodos = [];

for (const todo of todoList) {
    if (todo.status == 'complete') {
        completedTodos.push(todo)
    }
}

for (const todoObj of completedTodos) {
    ({ todo } = todoObj)
    console.log(todo)
}