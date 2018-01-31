//select the table
var table = document.getElementById("std-list");
if(table.rows.length===1) {
    table.style.visibility = "hidden"
}
function submitBtn() {
    table.style.visibility = "visible"
    //saving the user input in variables
    var gRadio = document.getElementsByClassName("gender");
    var gender = "";
    if (gRadio[0].checked === true) {
        gender = "Male";
    } else if (gRadio[1].checked === true) {
        gender = "Female"
    };
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var sltSubject = document.getElementById("subject");
    var subject = sltSubject.options[sltSubject.selectedIndex].value;
    var fullName = firstName + " " + lastName;
    var info = [fullName, dob, gender, subject];

    // create table row
    var tr = document.createElement("tr");

//    for (var i = 0; i < info.length; i++) {
//        var td = document.createElement("td");
//        td.innerHTML = info[i];
//        tr.appendChild(td)
//    }
     //table data elements
        var tdFullName = document.createElement("td");
        var tdDob = document.createElement("td");
        var tdGender = document.createElement("td");
        var tdSubject = document.createElement("td");
    
        //put the variables inside the corresponding table data
        tdFullName.innerHTML = fullName;
        tdDob.innerHTML = dob;
        tdGender.innerHTML = gender;
        tdSubject.innerHTML = subject;
    
        //appending the table data to the table row
        tr.appendChild(tdFullName);
        tr.appendChild(tdDob);
        tr.appendChild(tdGender);
        tr.appendChild(tdSubject);
    
    //appending the table row to the selected table
    table.appendChild(tr);
}
