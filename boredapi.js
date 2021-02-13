
function doSomething() {
    fetch('https://www.boredapi.com/api/activity/')
        .then(response => response.json())
        .then(json => doTask(json));

    function doTask(json) {
        document.getElementById('task').innerText = json.activity;
        document.getElementById('type').innerText = json.type;
    }
}

setInterval(() => {
    doSomething();
}, 3000);