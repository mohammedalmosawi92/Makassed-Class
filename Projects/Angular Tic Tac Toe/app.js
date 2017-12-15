var app = angular.module("app", []);
app.controller("ctrl", function ($scope) {

    var randomNum = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    $scope.loadData = function () {
        $scope.grid = [];
        $scope.start = false;
        $scope.msg = "";
        $scope.num = randomNum(0, 1);
        $scope.gameOver = false;
        for (var i = 0; i < 3; i++) {
            var row = [];
            for (var j = 0; j < 3; j++) {
                row.push({
                    x: i,
                    y: j,
                    value: "-"
                })
            }
            $scope.grid.push(row)
        }
        console.log($scope.num)
    }

    $scope.saveOpt = function () {
        $scope.start = true;
        if ($scope.players == "PC" && $scope.num % 2 != 0) {
            $scope.clicked();
        }
    }

    $scope.clicked = function (x, y) {
        if ($scope.gameOver == false) {
            if ($scope.num % 2 == 0) {
                while ($scope.grid[x][y].value == "-") {
                    $scope.grid[x][y].value = $scope.first;
                    $scope.num++
                        break;
                }
            } else if ($scope.players == "PC" && $scope.num % 2 != 0) {
                while (true) {
                    var x = randomNum(0, 2);
                    var y = randomNum(0, 2);
                    if ($scope.grid[x][y].value == "-") {
                        $scope.grid[x][y].value = $scope.second;
                        $scope.num++
                            break;
                    }
                }
            } else {
                while ($scope.grid[x][y].value == "-") {
                    $scope.grid[x][y].value = $scope.second;
                    $scope.num++
                        break;
                }
            }
            compare();
        }
    }
    var comp = ["X", "O"];
    var compare = function () {
        for (var i = 0; i < $scope.grid.length; i++) {
            for (var j = 0; j < comp.length; j++) {
                var condition = true;
                for (var k = 0; k < $scope.grid[i].length; k++) {
                    if (comp[j] != $scope.grid[i][k].value) {
                        condition = false
                    }
                }
                if (condition == true) {
                    $scope.msg = "the " + comp[j] + " won the game"
                    $scope.gameOver = true
                }
            }
        }
        for (var i = 0; i < $scope.grid.length; i++) {
            for (var j = 0; j < comp.length; j++) {
                var condition = true;
                for (var k = 0; k < $scope.grid[i].length; k++) {
                    if (comp[j] != $scope.grid[k][i].value) {
                        condition = false
                    }
                }
                if (condition == true) {
                    $scope.msg = "the " + comp[j] + " won the game"
                    $scope.gameOver = true
                }
            }
        }
        for (var i = 0; i < comp.length; i++) {
            if ($scope.grid[0][0].value == comp[i] && $scope.grid[1][1].value == comp[i] && $scope.grid[2][2].value == comp[i]) {
                $scope.msg = "the " + comp[i] + " won the game"
                $scope.gameOver = true
            } else if ($scope.grid[0][2].value == comp[i] && $scope.grid[1][1].value == comp[i] && $scope.grid[2][0].value == comp[i]) {
                $scope.msg = "the " + comp[i] + " won the game"
                $scope.gameOver = true
            }
        }
        if ($scope.players == "PC" && $scope.num % 2 != 0) {
            $scope.clicked();
        }
    }
    $scope.restart = function () {
        $scope.loadData();
        $scope.first = undefined;
        $scope.second = undefined;
    }
})