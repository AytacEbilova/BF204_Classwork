class Task{
    constructor(title, description, topic , deadline ,teacherId){
        this.title=title;
        this.description=description;
        this.topic=topic;
        this.deadline=deadline;
        this.teacherId=teacherId;
        this.id=Date.now();
        this.createdAt=new Date().getSeconds;
    }
}
  
