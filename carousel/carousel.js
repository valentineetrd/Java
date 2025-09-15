const cards = [
    { id: 1, name: "Kehinde Durodola", age: 24, studentId: "E034155", gender: "Male", image: "images/kehinde.jpg" },
    { id: 2, name: "David Adeleke", age: 18, studentId: "E032416", gender: "Male", image: "images/david.png" },
    { id: 3, name: "Tiwa Savage", age: 29, studentId: "E036532", gender: "Female", image: "images/tiwa.jpg" },
    { id: 4, name: "Ayo Balogun", age: 19, studentId: "E035426", gender: "Male", image: "images/ayo.jpeg" }
];
let currentIndex = 0;
display()
function display() {
    cardContainer.innerHTML = `
        <div class="logo-container">
            <div class="id-logo">
                <span>UB</span>
                <h1>UNIVERSITY OF BALABLUE</h1>
            </div>
        </div>
        <div class="row id-card">
            <div class="col-4 ps-3 pe-0">
                <div class="id-image">
                    <img src="${card.image}" alt="">
                </div>
            </div>
            <div class="col-8 ps-3">
                <div class="id-card-header">
                    <h2>STUDENT CARD</h2>
                </div>
                <div class="id-card-text">
                    <p>Name&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;${card.name}</p>
                    <p>ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;${card.studentId}</p>
                    <p>Age&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;${card.age}</p>
                    <p>Gender&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;${card.gender}</p>
                </div>
            </div>
        </div>`;

    }

function next(params) {
    if (currentIndex === cards.lenght -1) {
        currentIndex = 0
    }else {
        currentIndex++
    }
    display()
}
function prev(params) {
    if(currentIndex === 0){

    }
}