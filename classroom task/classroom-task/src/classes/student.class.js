class Student{
    constructor(fullName,username,email, password, grades ){
        this.fullName=fullName;
        this.username=username;
        this.email=email;
        this.password=password;
        this.grades=grades;
        this.id=nanoid();
    }
}
  
