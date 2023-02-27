var isGame=false;
var x = 'x';
var o = 'o';

// choose player 
// first player turn
// check winner 
// change turn
// second player turn

var player1,player2


let arrayEle = document.getElementsByClassName("inner-box");

for(let k=0;k<arrayEle.length;k++){
    // console.log(id);
    arrayEle[k].addEventListener("click",startGame,{once:true});
}

var board = [["","",""],["","",""],["","",""]];
var turn = true;

var checkBoard = 9;

function startGame(arrayEle){

    // startFun();

    let curPlayer = turn? "x":"o";

    let pos = this.id.split("play")
    // console.log(pos);
    let r=pos[0],c=pos[1];
    // console.log(r);
    // console.log(c);
    
    // placemark
    let activeTurn = turn? x:o
    this.classList.add(activeTurn);
    board[r][c] = curPlayer;
    checkBoard--;
    // console.log(board[r][c]);

    // checkWinner
    if(checkWinner(board,curPlayer)){
        console.log("win");
        return false;
    }
    else if(checkDraw(board)){
        console.log("draw");
        return false;
    }
    else{
    // changeTurn
    turn = !turn;
    }
}

    // [
    // [0,1,2],[3,4,5],[6,7,8],
    // [0,3,6],[1,4,7],[2,5,8]
    // [0,4,8],[2,4,6]
    // ]

function checkWinner(board,curPlayer){
    if(horizondalCheck(board,curPlayer)){
        console.log("win");
    }
    else if(verticalCheck(board,curPlayer)){
        console.log("win");
    }
    else if(crtDiagonalCheck(board,curPlayer)){
        console.log("win");
    }
    else if(wrongDiagonalCheck(board,curPlayer)){
        console.log("win");
    }
}

function horizondalCheck(board,curPlayer){
    for(let i=0;i<3;i++){
        if((board[i][0]==board[i][1] && board[i][1]==board[i][2] && board[i][0]==board[i][2]) && board[i][0]!=""){
            // alert("winner is " + curPlayer);
            toshow("win");
            announceWinner(curPlayer);
            
        }
    }
}

function verticalCheck(board,curPlayer){
    for(let i=0;i<3;i++){
        if((board[0][i]==board[1][i] && board[1][i]==board[2][i] && board[0][i]==board[2][i]) && board[0][i]!=""){
            // alert("winner is " + curPlayer);
            toshow("win");
            announceWinner(curPlayer);
        }
    }
}

function crtDiagonalCheck(board,curPlayer){
    if((board[0][0]==board[1][1] && board[1][1]==board[2][2] && board[0][0]==board[2][2]) && board[0][0]!=""){
        // alert("winner is " + curPlayer);
        toshow("win");
        announceWinner(curPlayer);
    }
}

function wrongDiagonalCheck(board,curPlayer){
    if((board[0][2]==board[1][1] && board[2][0]==board[1][1] && board[0][2]==board[2][0]) && board[2][0]!=""){
        // alert("winner is " + curPlayer);
        toshow("win");
        announceWinner(curPlayer);
    }
}

function checkDraw(board){
    // console.log(board);
    if(checkBoard == 0){
        // window.alert("draw");
        toshow("draw");
        announceDraw()
        console.log("draw");
        return
    }
}

function announceWinner(curPlayer){
    document.getElementById("winner").innerText = curPlayer + " is the winner!!!!. congrats!!!!";
}

function toshow(par){
    if(par == "win"){
        document.getElementById("winner").style.display = "block";
        document.getElementById("head").style.display = "none";
        document.getElementById("bodyColor").style.backgroundColor = "rgba(47,157,184,0.5)";
        document.getElementById("main-board").style.display = "none";
        document.getElementById("draw").style.display = "none";
    }
    else if(par == "head"){
        document.getElementById("winner").style.display = "none";
        document.getElementById("head").style.display = "block";
        // document.getElementById("bodyColor").style.backgroundColor = "rgba(47,157,184,0.5)";
        document.getElementById("main-board").style.display = "none";
    }
    else if(par == "draw"){
        document.getElementById("winner").style.display = "none";
        document.getElementById("head").style.display = "none";
        document.getElementById("bodyColor").style.backgroundColor = "rgba(47,157,184,0.5)";
        document.getElementById("main-board").style.display = "none";
        document.getElementById("draw").style.display = "block";
    }
}

// function startFun(){
//     toshow("head");
//     let playerSelect = document.getElementById("option").value;
// }

function announceDraw(){
    document.getElementById("draw").innerText = "Match Draw!!...Try Again!!";
}
