import { Button, Space, Table, Tooltip, message } from "antd";
import { Popconfirm } from "antd";
import { deleteProducts } from "../../services/request";

const Tablee = ({ products, setProducts }) => {
  const handleDelete = (id) => {
    deleteProducts(id).then((res) => {
      if (res.status == 200) {
        const filtered = [...products].filter((q) => q.id !== id);
        setProducts(filtered);
      }
    });
  };
  const confirm = (id) => {
    handleDelete(id);
    message.success("Deleted succesfully!");
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Click on no");
  };
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      sorter: (a, b) => a.id.localeCompare(b.id),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (image) => <img src={image} alt={image} height={50} width={50} />,
      sorter: (a, b) => a.image.localeCompare(b.image),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Name",
      dataIndex: "title",
      sorter: (a, b) => a.title.localeCompare(b.title),
      sortDirections: ["ascend", "descend"],
      render: (element) => (
        <Tooltip title={element}>
          <span>{element.slice(0, 30)}...</span>
        </Tooltip>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      render: (element) => (
        <Tooltip title={element}>
          <span>{element.slice(0, 50)}...</span>
        </Tooltip>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Delete",
      dataIndex: "DELETE",
      render: (element, data, idx) => (
        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this task?"
          onConfirm={() => confirm(data.id)}
          
          okText="Yes"
          cancelText="No"
        >
          <Button type="primary"danger>Delete</Button>
        </Popconfirm>
      ),
    },
    {
      title: "Edit",
      render: () => <Button type="primary">Edit</Button>


    },
  ];

  return (
    <>
      <Space
        style={{
          marginBottom: 16,
        }}
      ></Space>
      <Table rowKey="id" columns={columns} dataSource={products} pagination={{pageSize:4}} />
    </>
  );
};
export default Tablee;
