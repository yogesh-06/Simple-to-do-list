var para = document.querySelector('p');
para.addEventListener('click', updateName);

function updateName(){
    let name = prompt('Enter your Name');
    var output = para.textContent = 'Your name:'+" "+ name;
    var pure = document.createElement('li');
    var newText = document.createTextNode(output);
    pure.appendChild(newText);
    document.getElementById('list').appendChild(pure);
}
