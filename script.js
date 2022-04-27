let input = (prompt('What would you like to do?').toLowerCase());

const todos = ['Make bed', 'Clean floors'];

while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('*************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log('*************')
    } else if (input === 'new') {
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`)
    }
    else if (input === 'delete') {
        const index = parseInt(prompt('Enter an Index to delete:'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Deleted ${deleted[0]}`);
        } else {
            console.log('Unknown index')
        }
    }
    input = (prompt('What would you like to do?').toLowerCase());
}
console.log('Good bye, have a great day!')
