import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { deleteOne, getAll, getOne } from "../services/request";
import axios from "axios";
import ColumnGroup from "antd/es/table/ColumnGroup";
import Swal from "sweetalert2";

const ExpandMore = styled(IconButton)(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));



const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = (index) => {
    setExpanded(expanded === index ? -1 : index);
  };

  async function GetStudentNameById(studentId){
    console.log('student id : '+studentId);
    let student = await getOne('/students',studentId);
    console.log( student)
    return student.firstName + " " + student.lastName;
  }
  
  const fetchTasks = async () => {
    try {
      const fetchedTasks = await getAll("/tasks");
      let newTasks = [];

      for (const task of fetchedTasks) {
        let teacher = await getOne("/teachers", task.teacherId);
        let localTeacher = JSON.parse(localStorage.getItem("teacher"));
        
        let assignmentsWithNames = [];
        task.assignments.forEach(async (assignment) => {
          let studentName = await GetStudentNameById(assignment.studentId);
          assignmentsWithNames.push({ ...assignment, studentName }); 
        });

        newTasks.push({
          ...task,
          name: teacher.firstName + " " + teacher.lastName,
          hasPermission: localTeacher.id === task.teacherId,
          assignmentsWithNames
        });
      }
      setTasks(newTasks);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  };


  async function DeleteTask(taskId) {
    try {
      await deleteOne('/tasks', taskId); 
      Swal.fire('Deleted successfully');

      await fetchTasks();
    } catch (error) {
      console.error('Failed to delete task:', error);
      Swal.fire('Failed to delete task', '', 'error');
    }
  }
  
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      {tasks.map((task, index) => (
        <Card key={task.id} sx={{ maxWidth: 1000, marginBottom: 2 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="task">
                {task.title[0]}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={task.title}
            subheader={`Deadline: ${task.deadline}`}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {`Teacher name: ${task.name}`} <br />
              {task.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            {task.hasPermission && (
              <>
                <IconButton aria-label="delete task" onClick={()=>{DeleteTask(task.id)}}>
                  <DeleteFilled  />
                </IconButton>
                <IconButton aria-label="edit task">
                  <EditFilled />
                </IconButton>
              </>
            )}

            <ExpandMore
              expand={expanded === index}
              onClick={() => handleExpandClick(index)}
              aria-expanded={expanded === index}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded === index} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Topic: {task.topic}</Typography>
              {task.hasPermission && task.assignmentsWithNames && task.assignmentsWithNames.length > 0 && (
                <div>
                  <Typography paragraph>Assignments:</Typography>
                  {task.assignmentsWithNames.map((assignment, idx) => (
                    <Typography key={idx} paragraph>
                      {assignment.studentName} - Due: {assignment.taskUrl}
                    </Typography>
                  ))}
                </div>
              )}
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </div>
  );
};

export default Home;
