class Teacher{
    constructor(fullName,username,email, password, major ){
        this.fullName=fullName;
        this.username=username;
        this.email=email;
        this.password=password;
        this.major=major;
        this.id=nanoid();
    }
}
  
