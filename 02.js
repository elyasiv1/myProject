let box = document.getElementsByClassName(".box")
let moves = []

let board = document.querySelector('#game')
let boxes = document.querySelectorAll("div #box")

let player1 = {

    css: "ex",
    shape: "x",
    winner: 0
}
let player2 = {
    css: "circle",
    shape: "o",
    winner: 0
}
let playerActive;



// פונקציה שפועלת לפני תחילת המשחק
// ובוחרת שחקנים, שמות , צורות והגדרות
function clinCss() {
    let new1 = document.getElementById("new")
    new1.onclick = classList.remove("ex", "circle");
}
function init() {
    // פונקציה שנותנת שמות למשתמשים
    let p1_name = prompt('הקלד שם שחקן ראשון')
    let p2_name = prompt('הקלד שם שחקן שני')
    player1.name = p1_name
    player1.css = "ex"// האם זה נכון שיהיה פה?
    player1.shape = "x"// האם זה נכון שיהיה פה?
    player1.winner = 0// האם זה נכון שיהיה פה?
    player2.name = p2_name
    player2.css = "circle"// האם זה נכון שיהיה פה?
    player2.shape = "O"// האם זה נכון שיהיה פה?
    player2.winner = 0// האם זה נכון שיהיה פה?

    playerActive = player2;
    document.getElementById('player1').innerHTML = player1.name, player1.shaip
    document.getElementById('player2').innerHTML = player2.name, player2.shaip

    //לעבור על כל ה-clin
    // ובכל פעם לעשות className="box"
    // clean the board
    // clinCss()
    // let clin = document.querySelectorAll('td.box');
    // clean the moves
    moves.pop(0, 8)
}

// function chekWinner(pos, shape) {
//     board.addEventListener('click', function (event) {
//         let pos = event.target;
//         let shape = playerActive.shaip
//         // chek(playerActive.shaip,event.target)

//     })
//     if (moves.length > 4) {
//         return false
//     }
//     else if (pos, shape == myArray[0]) {
//         if (myArray[0] == myArray[1] && myArray[2] || myArray[3] && myArray[6] || myArray[4] && myArray[8]) {
//             return alert('winner'), playerActive.winner++
//         }
//     }
//     else if (pos, shape == myArray[1]) {
//         if (myArray[1] == myArray[0] && myArray[2] || myArray[4] && myArray[7]) {
//             return alert('winner'), playerActive.winner++
//         }
//     }
//     else if (pos, shape == myArray[2]) {
//         if (myArray[2] == myArray[0] && myArray[1] || myArray[5] && myArray[8] || myArray[4] && myArray[6]) {
//             return alert('winner'), playerActive.winner++
//         }
//     }
//     else if (myArray[3] == myArray[4] && myArray[5] || myArray[0] && myArray[6]) {
//         return alert('winner'), playerActive.winner++
//     }
//     else if (myArray[4] == myArray[0] && myArray[8] || myArray[2] && myArray[6] || myArray[3] && myArray[5] || myArray[1] && myArray[7]) {
//         return alert('winner'), playerActive.winner++
//     }
//     else if (myArray[5] == myArray[2] && myArray[8] || myArray[3] && myArray[4]) {
//         return alert('winner'), playerActive.winner++
//     }
//     else if (myArray[6] == myArray[7] && myArray[8] || myArray[0] && myArray[3] || myArray[2] && myArray[4]) {
//         return alert('winner'), playerActive.winner++
//     }
//     else if (myArray[7] == myArray[1] && myArray[4] || myArray[6] && myArray[8]) {
//         return alert('winner'), playerActive.winner++
//     }
//     else if (myArray[8] == myArray[6] && myArray[7] || myArray[2] && myArray[5] || myArray[0] && myArray[4]) {
//         return alert('winner'), playerActive.winner++
//     }
//     else { return false }


// }




// פונקציית שפועלת בעת סימון
function sign(box) {

    // בדיקת תא פנוי
    if (box.classList.contains("ex") || box.classList.contains("circle")) {
        return false
    }

    // סימון צורה 
    box.classList.add(playerActive.css)

    // בדיקת נצחון
    // chekWinner(playerActive.shaip, Number(box.id.replace("box", "")))
    // chekWinner()
    // שמירת צעד
    moves.push(event.target)
    // החלפת תור
    playerActive = (playerActive.css == "ex") ? player2 : player1;
}

// let myArray = [[1, 1, playerActive.shape][1, 2, playerActive.shape][1, 3, playerActive.shape]
// [2, 1, playerActive.shape][2, 2, playerActive.shape][2, 3, playerActive.shape]
// [3, 1, playerActive.shape][3, 2, playerActive.shape][3, 3, playerActive.shape]]

// sign()



// function chek(this) {
//     let targ = Number(this)//number(this)sign(event.target
//     targ = myArray[targ]
//     samting(targ)

// }
function samting(number) {
    if (targ == myArray[targ]) {
        return chekWinner([this])
    }
}
board.addEventListener('click', function (event) {
    sign(event.target);
    // chek(playerActive.shaip,event.target)

})

init()
