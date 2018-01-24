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
    if (gRadio["0"].checked === true) {
        gender = "Male";
    } else if (gRadio["1"].checked === true) {
        gender = "Female"
    };
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var sltSubject = document.getElementById("subject");
    var subject = sltSubject.options[sltSubject.selectedIndex].value;
    var fullName = firstName + " " + lastName;
    var arr = [fullName, dob, gender, subject];

    // create table row
    var tr = document.createElement("tr");

    for (var i = 0; i < arr.length; i++) {
        var td = document.createElement("td");
        var textNode = document.createTextNode(arr[i]);
        td.appendChild(textNode);
        tr.appendChild(td)
    }
    // table data elements
    //    var tdFullName = document.createElement("td");
    //    var tdDob = document.createElement("td");
    //    var tdGender = document.createElement("td");
    //    var tdSubject = document.createElement("td");
    //
    //    // converting the string to text node
    //    var tdFnNode = document.createTextNode(fullName);
    //    var tdDobNode = document.createTextNode(dob);
    //    var tdGenderNode = document.createTextNode(gender);
    //    var tdSubjectNode = document.createTextNode(subject);
    //
    //    //appending the text node to the corresponding table data
    //    tdFullName.appendChild(tdFnNode);
    //    tdDob.appendChild(tdDobNode);
    //    tdGender.appendChild(tdGenderNode);
    //    tdSubject.appendChild(tdSubjectNode);
    //
    //    //appending the table data to the table row
    //    tr.appendChild(tdFullName);
    //    tr.appendChild(tdDob);
    //    tr.appendChild(tdGender);
    //    tr.appendChild(tdSubject);


    //appending the table row to the selected table
    table.appendChild(tr);
}
