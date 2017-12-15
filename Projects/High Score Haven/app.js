var arr = [
    {name: "mohammed", age: 10},
    {name: "ahmed", age: 30},
    {name: "omar", age: 5},
    {name: "hassan", age: 46},
    {name: "khaled", age: 19},
    {name: "omar", age: 15},
]

arr.sort(function(a,b) {
    
        if(a.age < b.age) {
            return 1;
        }
        if(a.name > b.name) {
        return -1;
    }

})
console.log(arr);