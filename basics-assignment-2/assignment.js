const task3Element = document.getElementById('task-3');

// task 1 
function assignment(){
    alert('Good luck');
}
function assign(userName){
    alert('Hello '+ userName);
}

//task 2 
//assignment();
assign('Cyndy');

//task 3 - adding an event listener
task3Element.addEventListener('click',assignment)

//task 4 - creating a new function with three parameters
function task4 (string1, string2, string3){
    let result = string1 + string2 + string3;
    return result;
}

alert(task4('Ready', ' to', ' go!'))
