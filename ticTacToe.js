var t = 1;

document.getElementById("game").style.visibility = "hidden"
var player1 = document.getElementById("p1");
var player2 = document.getElementById("p2");
var user1Score =0
var user2Score =0

function restart(){
    t=1
    if(user1Score==2){
        alert(player1.value+" Wins")
        document.getElementById("game").style.visibility = "hidden"
        document.getElementById("NameWrapper").style.display = "flex"   
        user1Score =0
        user2Score =0
        document.getElementById("user1_score").innerHTML = user1Score
        document.getElementById("user2_score").innerHTML = user2Score
        player1.value=""
        player2.value=""
    }
    if(user2Score==2){
        alert(player2.value+" Wins")
        document.getElementById("game").style.visibility = "hidden"
        document.getElementById("NameWrapper").style.display = "flex"
        user1Score =0
        user2Score =0
        document.getElementById("user1_score").innerHTML = user1Score
        document.getElementById("user2_score").innerHTML = user2Score
        player1.value=""
        player2.value=""
    }
    var a = document.getElementById("b1").value = ""
    var b = document.getElementById("b2").value = ""
    var c = document.getElementById("b3").value = ""
    var d = document.getElementById("b4").value = ""
    var e = document.getElementById("b5").value = ""
    var f = document.getElementById("b6").value = ""
    var g = document.getElementById("b7").value = ""
    var h = document.getElementById("b8").value = ""
    var i = document.getElementById("b9").value = ""
}
function winner() {
    var a = document.getElementById("b1").value
    var b = document.getElementById("b2").value
    var c = document.getElementById("b3").value
    var d = document.getElementById("b4").value
    var e = document.getElementById("b5").value
    var f = document.getElementById("b6").value
    var g = document.getElementById("b7").value
    var h = document.getElementById("b8").value
    var i = document.getElementById("b9").value

    if (a.length != 0 && b.length != 0 && c.length != 0) {
        //check row for X or O winning condition
        if (a == b && a == c) {
            if (a == 'X') {
                user1Score++
                document.getElementById("user1_score").innerHTML = user1Score
                restart()
            }
            else {
                user2Score++
                document.getElementById("user2_score").innerHTML = user2Score
                restart()
            }
        }
    }
    if (d.length != 0 && e.length != 0 && f.length != 0) {
        //check row for X or O winning condition
        if (d == e && d == f) {
            if (d == 'X') {
                user1Score++
                document.getElementById("user1_score").innerHTML = user1Score
                restart()
            }
            else {
                user2Score++
                document.getElementById("user2_score").innerHTML = user2Score
                restart()
            }
        }
    }
    if (g.length != 0 && h.length != 0 && i.length != 0) {
        //check row for X or O winning condition
        if (g == h && g == i) {
            if (g == 'X') {
                user1Score++
                document.getElementById("user1_score").innerHTML = user1Score
                restart()
            }
            else {
                user2Score++
                document.getElementById("user2_score").innerHTML = user2Score
                restart()
            }
        }
    }
    if (a.length != 0 && d.length != 0 && g.length != 0) {
        //check row for X or O winning condition
        if (a == d && a == g) {
            if (a == 'X') {
                user1Score++
                document.getElementById("user1_score").innerHTML = user1Score
                restart()
            }
            else {
                user2Score++
                document.getElementById("user2_score").innerHTML = user2Score
                restart()
            }
        }
    }
    if (b.length != 0 && e.length != 0 && h.length != 0) {
        //check row for X or O winning condition
        if (b == e && b == h) {
            if (b == 'X') {
                user1Score++
                document.getElementById("user1_score").innerHTML = user1Score
                restart()
            }
            else {
                user2Score++
                document.getElementById("user2_score").innerHTML = user2Score
                restart()
            }
        }
    }
    if (c.length != 0 && f.length != 0 && i.length != 0) {
        //check row for X or O winning condition
        if (c == f && c == i) {
            if (c == 'X') {
                user1Score++
                document.getElementById("user1_score").innerHTML = user1Score
                restart()
            }
            else {
                user2Score++
                document.getElementById("user2_score").innerHTML = user2Score
                restart()
            }
        }
    }
    if (a.length != 0 && e.length != 0 && i.length != 0) {
        //check row for X or O winning condition
        if (a == e && a == i) {
            if (a == 'X') {
                user1Score++
                document.getElementById("user1_score").innerHTML = user1Score
                restart()
            }
            else {
                user2Score++
                document.getElementById("user2_score").innerHTML = user2Score
                restart()
            }
        }
    }
    if (c.length != 0 && e.length != 0 && g.length != 0) {
        //check row for X or O winning condition
        if (c == e && c == g) {
            if (c == 'X') {
                user1Score++
                document.getElementById("user1_score").innerHTML = user1Score
                restart()
            }
            else {
                user2Score++
                document.getElementById("user2_score").innerHTML = user2Score
                restart()
            }
        }
    }
}




function startGame(){
    document.getElementById("game").style.visibility = "visible"

    if(player1.value.length === 0){
        player1.value="Player 1"
    }
    if(player2.value.length === 0){
        player2.value="Player 2"
    }
    document.getElementById("user1").innerHTML = player1.value
    document.getElementById("user2").innerHTML = player2.value

    document.getElementById("NameWrapper").style.display = "none"
}




function show1() {
    if (document.getElementById("b1").value.length == 0) {
        if (t % 2 == 1) {
            document.getElementById("b1").value = "X";
        }
        else {
            document.getElementById("b1").value = "O"
        }
        t++
        winner();
    }

}
function show2() {
    if (document.getElementById("b2").value.length == 0) {
        if (t % 2 == 1) {
            document.getElementById("b2").value = "X";
        }
        else {
            document.getElementById("b2").value = "O"
        }
        t++
        winner();
    }

}
function show3() {
    if (document.getElementById("b3").value.length == 0) {
        if (t % 2 == 1) {
            document.getElementById("b3").value = "X";
        }
        else {
            document.getElementById("b3").value = "O"
        }
        t++
        winner();
    }

}
function show4() {
    if (document.getElementById("b4").value.length == 0) {
        if (t % 2 == 1) {
            document.getElementById("b4").value = "X";
        }
        else {
            document.getElementById("b4").value = "O"
        }
        t++
        winner();
    }

}
function show5() {
    if (document.getElementById("b5").value.length == 0) {
        if (t % 2 == 1) {
            document.getElementById("b5").value = "X";
        }
        else {
            document.getElementById("b5").value = "O"
        }
        t++
        winner();
    }

}
function show6() {
    if (document.getElementById("b6").value.length == 0) {
        if (t % 2 == 1) {
            document.getElementById("b6").value = "X";
        }
        else {
            document.getElementById("b6").value = "O"
        }
        t++
        winner();
    }

}
function show7() {
    if (document.getElementById("b7").value.length == 0) {
        if (t % 2 == 1) {
            document.getElementById("b7").value = "X";
        }
        else {
            document.getElementById("b7").value = "O"
        }
        t++
        winner();
    }

}
function show8() {
    if (document.getElementById("b8").value.length == 0) {
        if (t % 2 == 1) {
            document.getElementById("b8").value = "X";
        }
        else {
            document.getElementById("b8").value = "O"
        }
        t++
        winner();
    }

}
function show9() {
    if (document.getElementById("b9").value.length == 0) {
        if (t % 2 == 1) {
            document.getElementById("b9").value = "X";
        }
        else {
            document.getElementById("b9").value = "O"
        }
        t++
        winner();
    }

}