fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => display(json));

function display(json) {
    const ul = document.getElementById("container");
    for (let i = 0; i < json.length; i++) {
        const element = json[i];
        // console.log(element);
        const li = document.createElement('li');
        li.innerText = element.name;
        ul.appendChild(li)
    }
}


