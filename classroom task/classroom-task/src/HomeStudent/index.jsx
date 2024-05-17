import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Modal, Button } from "antd";
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
import { DownloadOutlined } from "@ant-design/icons";
import { getAll, getOne, patchOne } from "../services/request";
import ColumnGroup from "antd/es/table/ColumnGroup";

const ExpandMore = styled(IconButton)(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const HomeStudent = () => {
  const [tasks, setTasks] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const [currentTaskId, setCurrentTaskId] = useState("");
  const [taskUrl, setTaskUrl] = useState("");
  const handleExpandClick = (index) => {
    setExpanded(expanded === index ? -1 : index);
  };

  const showModal = (taskId) => {
    setCurrentTaskId(taskId);
    setVisible(true);
  };

  const handleOk =async () => {
    // setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    let currentTask = await getOne('/tasks',currentTaskId);
    let studentId = JSON.parse(localStorage.getItem("student")).id;
    currentTask.assignments.push({studentId,taskUrl});
    let uptatedTask=await patchOne('/tasks',currentTaskId,currentTask);
    console.log(uptatedTask)
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const fetchedTasks = await getAll("/tasks");
        let newTasks = [];
        for (const task of fetchedTasks) {
          let teacher = await getOne("/teachers", task.teacherId);
          let name = teacher.firstName + " " + teacher.lastName;
          newTasks.push({
            ...task,
            name,
          });
        }
        console.log(newTasks);
        setTasks(newTasks);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      }
    };

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
            {new Date() < new Date(task.deadline) ? (
         <IconButton aria-label="download" onClick={() => showModal(task.id)}>
         <DownloadOutlined />
       </IconButton>
            ):
            (
                <div style={{color:'red'}}> Reached Deadline</div>
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
              <Typography paragraph>
                This is more detailed information about the task.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>
          <input
            type="text"
            placeholder="enter your url"
            className="form-control"
            value={taskUrl}
            onChange={(e) => setTaskUrl(e.target.value)}
          />
        </p>
      </Modal>
    </div>
  );
};

export default HomeStudent;
