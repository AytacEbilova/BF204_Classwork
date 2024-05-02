import{ useState } from "react";
import { nanoid } from 'nanoid';

const AddForm = ({ data, setData }) => {
  const [courseName, setCourseName] = useState("");
  const [coursePrice, setCoursePrice] = useState(0);
  const [courseImage, setCourseImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let newCourse = {
      id: nanoid(),
      name: courseName,
      price: coursePrice,
      image: courseImage
    };

    setData([...data, newCourse]);
    setCourseName("");
    setCoursePrice(0);
    setCourseImage("");
  };

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          Course Name
          <br />
          <input type="text" name="name" onChange={(e) => setCourseName(e.target.value)} value={courseName}/>
          <br />
        </label>
        <br />
        <label>
          Course Price
          <br />
          <input type="number" name="price" onChange={(e) => setCoursePrice(e.target.value)} value={coursePrice} />
          <br />
        </label>
        <br />
        <label>
          Course Image
          <br />
          <input type="img" name="image" onChange={(e) => setCourseImage(e.target.value)} value={courseImage} />
          <br />
        </label>
        <br />
        <button type="submit" className="my-3 btn btn-info">Add Course</button>
      </form>
    </div>
  );
};

export default AddForm;
