
let box = document.getElementsByClassName(".box")
let moves = []

let board = document.querySelector('#game')
let boxes= document.querySelectorAll("div #box")
moves.array.forEach(element => {
    
});


let player1 = {}
let player2 = {}
let playerActive

// פונקציה שפועלת לפני תחילת המשחק
// ובוחרת שחקנים, שמות , צורות והגדרות
function init() {
    // פונקציה שנותנת שמות למשתמשים
    let p1_name = prompt('הקלד שם שחקן ראשון')
    let p2_name = prompt('הקלד שם שחקן שני')
    player1.name = p1_name
    player1.css = "ex"
    player1.shaip = "x"
    player2.name = p2_name
    player2.css = "circle"
    player2.shaip="O"

    playerActive = player2

    // clean the board
    let box = document.querySelectorAll('div #box');
    clin.classList.remove("ex");
    // clean the moves
    moves.pop(0, 8)


}

// פונקציית שפועלת בעת סימון
function sign(box) {

    // בדיקת תא פנוי
    if (box.classList.contains("ex") || box.classList.contains("circle")) {
        return false
    }

    // סימון צורה 
    box.classList.add(playerActive.css)
    // בדיקת נצחון
    function chekWinner(locishin) {
        if(moves.length>4){
            return false
        }
        else{
            if()
        }

    }
    // שמירת צעד
    moves.push(event.target)
    // החלפת תור
    playerActive = (playerActive.css == "ex") ? player2 : player1;
}


board.addEventListener('click', function (event) {
    sign(event.target);

})

init()
sign()
let renew = document.getElementById('#new')// לא בטוח שזה נכון
renew.onclick=init()



