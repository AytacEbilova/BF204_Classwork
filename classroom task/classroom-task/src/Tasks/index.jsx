import React, { useState } from "react";
import Swal from "sweetalert2";
import { post } from "../services/request";
import { DatePicker, Form } from "antd";
import Task from "../classes/task.class";
const Tasks = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [topic, setTopic] = useState("");
  const [deadline, setDeadline] = useState("");
  const { RangePicker } = DatePicker;
  const handleSubmit = async (event) => {
    event.preventDefault();
    const teacher = JSON.parse(localStorage.getItem("teacher"));
    const teacherId = teacher.id;
    const newTask = new Task( title, description, topic, deadline, teacherId );
    try {
      await post("/tasks", newTask);
      Swal.fire({
        title: "Task Successfully Added!",
        text: "You have successfully added a new task.",
        icon: "success",
      });
      setTitle("");
      setDescription("");
      setTopic("");
      setDeadline("");
    } catch (error) {
      Swal.fire({
        title: "Task Addition Failed!",
        text: "Please try again later.",
        icon: "error",
      });
      console.error(error);
    }
  };

  const config = {
    rules: [{ type: 'object', required: true, message: 'Please select time!' }],
  };    
  const onFinish = (fieldsValue) => {
    const rangeValue = fieldsValue['range-picker'];
    const rangeTimeValue = fieldsValue['range-time-picker'];
    const values = {
      ...fieldsValue,
      'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
      'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
      'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
      'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
      'range-time-picker': [
        rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
        rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
      ],
      'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
    };
    console.log('Received values of form: ', values);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control my-3"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="form-control my-3"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          minLength={5}
        />
        <input
          type="text"
          className="form-control my-3"
          placeholder="Enter topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          minLength={5}
        />
         <Form.Item
          label="Deadline"
          name="RangePicker"
          rules={[{ required: true, message: "Please input!" }]}
        >
         <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"
         onChange={(date, dateString) => {
          setDeadline(dateString);
        }}
         />
        </Form.Item>
   
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Tasks;
