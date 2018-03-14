var employees = [];
function Employee (name, jobTitle, salary, status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status || "Full Time";
    this.printEmployeeForm = function(){
        console.log("name : " + this.name + ", job Title : " + this.jobTitle + ", Salary : " + this.salary + ", status : " + this.status )
    }
}
employees[0] = new Employee("mohammed", "engineer", 1500);
employees[1] = new Employee("aziz", "doctor", 2000);
employees[2] = new Employee("toqa", "nurse", 1000);
for (var i = 0; i < 3; i++) {
    employees[i].printEmployeeForm()
}