let box = document.getElementsByClassName(".box")
let moves = []

let board = document.querySelector('#game')
let boxes = document.querySelectorAll("div #box")

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
    player2.shaip = "O"

    playerActive = player2

    //לעבור על כל ה-clin
    // ובכל פעם לעשות className="box"
    // clean the board
    let clin = document.querySelectorAll('div.box');
   
    // clean the moves
    moves.pop(0, 8)


}

function chekWinner(shape, pos) {
    // if(moves.length>4){
    //     return false
    // }
    // else{
    //     if()
    // }

}

// פונקציית שפועלת בעת סימון
function sign(box) {

    // בדיקת תא פנוי
    if (box.classList.contains("ex") || box.classList.contains("circle")) {
        return false
    }

    // סימון צורה 
    box.classList.add(playerActive.css)
    debugger
    // בדיקת נצחון
    chekWinner(playerActive.shaip, Number(box.id.replace("box","")))
    // שמירת צעד
    moves.push(event.target)
    // החלפת תור
    playerActive = (playerActive.css == "ex") ? player2 : player1;
}


board.addEventListener('click', function (event) {
    sign(event.target);

})

init()
// sign()




