function test() {
    console.log('run');
}
function addline2() {
    // generate array of available numbers
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
    editButton.textContent = 'edit'
    editButton.classList.add('t-edit');
    editButton.addEventListener("click", editLine);
    newLine.appendChild(editButton);
    lines.appendChild(newLine);    
    
}
function ballGen() {
    let num = Math.floor(Math.random()*40);
    return num;
}
function editLine() {
    console.log("ping");
}

// number picker here
numberPicker();
function numberPicker() {
    console.log("number");
    let selected = [];
    //create window
    let pickerWrap = document.createElement('section');
    pickerWrap.classList.add("numPicker");
    //add numberpicker to body
    document.body.appendChild(pickerWrap);
    //create selected num container
    let lineWrap = document.createElement('div');
    lineWrap.classList.add("numPicker-selected");
    let pickLine = document.createElement('div');
    pickLine.classList.add("line");
    //create selector section
    let selectWrap = document.createElement('div');
    selectWrap.classList.add('numPicker-picker');
    for (i=0; i < 40; i++) {
        let ball = document.createElement('div');
        ball.classList.add('ball');
        ball.textContent = i+1;
        selectWrap.appendChild(ball);
    }
    //append children elements
    pickerWrap.appendChild(lineWrap);
    lineWrap.appendChild(pickLine);  
    pickerWrap.appendChild(selectWrap);
}