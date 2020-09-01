// Iterator Example


// function nameIterator(names) {
//     let nextIndex = 0;
//     return {
//         next:function() {
//             return nextIndex < names.length ? { value: names[nextIndex++], done: false } : { done: true }
//         }
//     }
// }


// // Create an array of names
// const namesArr = ['Jack', 'Jull', 'John'];
// // Init iterator and pass in the names array

// const names = nameIterator(namesArr);

// console.log(names.next().value);


// Generators (They are basically function that can return multiple values)


// Gnerator Example

// function* sayNames() {
//     yield 'Jack';
//     yield 'Jill';
//     yield 'John';
// }


// const name = sayNames();
// console.log(name.next());



// ID Creator
// function* createIds() {
//     let index = 0;

//     while(true) {
//         yield index++;
//     }
// }


// const gen = createIds();

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// console.log(gen.next().value);


// Get things from the element

// console.log(document.getElementById('task-title'));
// console.log(document.getElementById('task-title'));


// Change Styling

// document.getElementById('task-title').style.background = '#333';
// document.getElementById('task-title').style.color = '#333';
// document.getElementById('task-title').style.padding = '5px';
// document.getElementById('task-title').style.display = 'none';

// Change Content 

// document.getElementById('task-title').textContent = 'Task List';
// document.getElementById('task-title').innerText = 'My Tasks';
// document.getElementById('task-title').innerHTML = '<span style="color:red">Task List</span>';


// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';

// document.querySelector('li:nth-child(odd)').textContent = '#ccc';
// document.querySelector('li:nth-child(even)').textContent = '#f4f4f4';


// const items = document.getElementsByClassName('collection-item');
// console.log(items);



// Travsering the DOM

const list = document.querySelector('ul.collection');

console.log(list);
