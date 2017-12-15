$('#check-box').prop('indeterminate', true);
var num = 0; // for the number of rows


$("#submit").click(function () {
    
    var tableObject = {
        name: $("#full-name").val(),
        game: $("#game").val(),
        date: $("#date").val(),
        score: $("#score").val(),
        trashTalk: ""
    };
    
    var trashTalk = ["I donate blood every day, but its not all mine.", "You are the reason they put instructions on shampoo.", "Man, you're like school on Sunday. No Class.", "If I had a dollar for every brain you don't have, I'd have ONE dollar.", "Let me just get you a menu, because you're about to get served.", "I'd agree with you but then we'd both be wrong.", "The jerk store called and they're all out of YOU!", "Did you hear a bell ring? Because someone just got schooled.", "Shut up, you'll never be the man your mother is."];
    var randomNum = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    if(tableObject.name === "" || tableObject.game === "" || tableObject.date === "" || tableObject.score === "") {
        alert("Please Fill in All Fields");
    }else {
        if(Number(tableObject.score) <= 0) {
            alert("HA-HA, LOSER!!!");
        }else {
            tableSort.push(tableObject);
            if($("#check-box").prop("checked")) {
                var randomTrashTalk = trashTalk[randomNum(0, trashTalk.length - 1)];
                $("tbody tr:last td:nth-child(6)").append(randomTrashTalk);
                tableObject["trashTalk"] = randomTrashTalk;
            }
            localStorage.setItem('tableSort', JSON.stringify(tableSort));
            appendRows();
        }
    }
    $("#full-name").val("");
    $("#game").val("");
    $("#date").val("");
    $("#score").val("");

});


var nameClickNum = 0; //if the number of clicks is odd the sort will be descending , and vice versa
$('.name-btn').click(function() {
    nameClickNum++;
    if(nameClickNum % 2 != 0) {
        tableSort.sort(function(a, b) {
            if(a.name < b.name) {
                return -1;
            }
            if(a.name > b.name) {
                return 1;
            }
            if(a.name == b.name) { // in case the same name has different score , it will sort according to the score
                return a.score - b.score;
            }
        });
    }else {
        tableSort.reverse();
    }
    appendRows()
    sortClickNum = 0; //to reset the number of clicks to zero so it always start sorting descendingly
    gameClickNum = 0; //to reset the number of clicks to zero so it always start sorting descendingly
    dateClickNum = 0; //to reset the number of clicks to zero so it always start sorting descendingly
});


var gameClickNum = 0; //if the number of clicks is odd the sort will be descending , and vice versa
$(".game-btn").click(function() {
    gameClickNum++;
    if(gameClickNum % 2 != 0) {
        tableSort.sort(function(a, b) {
            if (a.game < b.game) {
                return -1;
            }
            if (a.game > b.game) {
                return +1;
            }
        });
    }else {
        tableSort.reverse();
    }
    appendRows();
    sortClickNum = 0; //to reset the number of clicks to zero so it always start sorting descendingly
    nameClickNum = 0; //to reset the number of clicks to zero so it always start sorting descendingly
    dateClickNum = 0; //to reset the number of clicks to zero so it always start sorting descendingly
});


var dateClickNum = 0; //if the number of clicks is odd the sort will be descending , and vice versa
$(".date-btn").click(function() {
    dateClickNum++;
    if(dateClickNum % 2 != 0) {
        tableSort.sort(function (a, b) {
            if (a.date < b.date) {
                return -1;
            }
            if (a.date > b.date) {
                return 1;
            }
        });
    }else {
        tableSort.reverse();
    }
    appendRows();
    gameClickNum = 0; //to reset the number of clicks to zero so it always start sorting descendingly
    sortClickNum = 0; //to reset the number of clicks to zero so it always start sorting descendingly
    nameClickNum = 0; //to reset the number of clicks to zero so it always start sorting descendingly
})


var sortClickNum = 0; //if the number of clicks is odd the sort will be descending , and vice versa
$('.high-score-btn').click(function() {
    sortClickNum++;
    if(sortClickNum % 2 != 0) {
        tableSort.sort(function(a, b) {
            return a.score - b.score;
            if(Number(a.score) == Number(b.score)) { // in case the same score with different names , it will sort according to the name
                if(a.name < b.name) {
                    return -1;
                }
                if(a.name > b.name) {
                    return +1;
                }
            }
        })
    }else {
        tableSort.reverse();
    }
    appendRows()
    nameClickNum = 0; //to reset the number of clicks to zero so it always start sorting descendingly
    gameClickNum = 0; //to reset the number of clicks to zero so it always start sorting descendingly
    dateClickNum = 0; //to reset the number of clicks to zero so it always start sorting descendingly
});


var appendRows = function() {
    $('.table-body tr').remove() // to remove rows
    var num = 0; // for the number of rows
    for(var i = 0; i < tableSort.length; i++) {
        num++
        $(".table tbody").append('<tr><td>' + num + '</td><td>' + tableSort[i].name + '</td><td>' + tableSort[i].game + '</td><td>' + tableSort[i].date + '</td><td>' + tableSort[i].score + '</td><td>' + tableSort[i].trashTalk + '</td></tr>');
    }
};


if(localStorage.getItem('tableSort')) {
    var tableSort = JSON.parse(localStorage.getItem('tableSort'));
    appendRows();
}else {
    var tableSort = [];
}