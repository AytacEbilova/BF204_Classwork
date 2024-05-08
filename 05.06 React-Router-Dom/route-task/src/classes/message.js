
class Message{
    constructor(id,fullname,email,title,message,isRead=false){
        this.id=id;
        this.fullname=fullname;
        this.email=email;
        this.title=title;
        this.message=message;
        this.isRead=isRead;
    }
}
export default Message;
    
