function Human(fullname,age) {
    this.fullname=fullname;
    this.age=age;
}
function Employee(salary,department,experieceYear) {
    this.salary=salary;
    this.department=department;
    this.experieceYear=experieceYear;
    
}

const emp1=new Employee(4000,"IT","5")
Object.setPrototypeOf(emp1,new Human("Aytac Ebilova",20));

const emp2=new Employee(3000,"HR","4")
Object.setPrototypeOf(emp1,new Human("Aysel Qenberova",19));

const emp3=new Employee(2200,"Business","2")
Object.setPrototypeOf(emp1,new Human("Davud Abbasov",23));

const emp4=new Employee(4000,"IT","7")
Object.setPrototypeOf(emp1,new Human("Leman Mesumova",27));

let employees=[];
let avgSalaryIT=0;
let counter=0;
for (let i = 0; i < employees.length; i++) {
    if(employees[i].department==='IT'&& employees[i].experieceYear>5){
                                                                                                                                                                                                                                
    }
    
}