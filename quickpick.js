function test() {
    console.log('run');
}
function addline2() {
    // generate array of available numbersß
    let numArray = [];
    for (i = 0; i < 40; i++) {
        numArray[i] = i+1;
    }
    // new line
    const numballs = 6;
    let lines = document.getElementById('lines');
    let newLine = document.createElement('div');
    newLine.classList.add('line');
    // create balls
    for (i = 0; i < numballs; i++) {;
        let newBall = document.createElement('div');
        newBall.classList.add('ball');
        let pos = Math.floor(Math.random()*numArray.length);
        let num = numArray[pos];
        newBall.innerHTML = "";
        newBall.textContent = num;
        newLine.appendChild(newBall);
        numArray.splice(pos, 1); //remove used ball from array
    }
    // add edit button
    let editButton = document.createElement('button');
    editButton.innerHTML = "";
    editButton.textContent = 'edit'
    editButton.classList.add('t-edit');
    newLine.appendChild(editButton);
    lines.appendChild(newLine);    
    editButton.onclick = editLine();                            
}
function ballGen() {
    let num = Math.floor(Math.random()*40);
    return num;
}
function editLine() {
    console.log("ping");
}