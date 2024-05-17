import React, { useState, useEffect } from "react";
import { Button, Space, Table, Tooltip, message, Popconfirm, Modal, Form, Input } from "antd";
import { deleteOne, getAll, patchOne } from "../../../services/request";

const Countries = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCountry, setCurrentCountry] = useState(null);
  const [form] = Form.useForm();
  useEffect(() => {
    getAll('/countries').then(response => {
      setData(response.data);
    }).catch(err => {
      message.error('Failed to fetch data: ' + err.message);
    });
  }, []);

  const handleDelete = (id) => {
    deleteOne(`/countries`,id).then(res => {
      if (res.status === 200) {
        const filtered = data.filter(item => item.id !== id);
        setData(filtered);
        message.success("Deleted successfully!");
      }
    }).catch(err => {
      message.error('Delete failed: ' + err.message);
    });
  };

  const handleEdit = (country) => {
    setCurrentCountry(country);
    form.setFieldsValue(country);
    setIsModalOpen(true);
  };


  const handleOk = () => {
    form.validateFields().then(values => {
      patchOne('/countries', currentCountry.id, values).then(response => {
        if (response.status === 200) {
          const updatedCountries = data.map(item => {
            if (item.id === currentCountry.id) {
              return { ...item, ...values };
            }
            return item;
          });
          setData(updatedCountries);
          message.success('Country updated successfully');
        }
      }).catch(err => {
        message.error('Update failed: ' + err.message);
      });
      setIsModalOpen(false);
      setCurrentCountry(null);
    }).catch(info => {
      console.log('Validate Failed:', info);
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setCurrentCountry(null);
  };

  const columns = [
    {
      title: "Country Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortDirections: ["ascend", "descend"],  
    },
    {
      title: "Image",
      dataIndex: "flagImg",
      render: (image) => <img src={image} alt="Country flag" height={50} width={100} />,
    },
    {
      title: "Capital",
      dataIndex: "capital",
    },
    {
      title: "Description",
      dataIndex: "description",
      render: (text) => (
        <Tooltip title={text}>
          <span>{text.slice(0, 50)}...</span>
        </Tooltip>
      ),
    },
    {
      title: "Population",
      dataIndex: "population",
      sorter: (a, b) => a.population - b.population,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button type="primary" onClick={() => handleEdit(record)}>Edit</Button>
          <Popconfirm
            title="Are you sure you want to delete this country?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    }
  ];

  return (
    <>
      <Space style={{ marginBottom: 16 }}></Space>
      <Table rowKey="id" columns={columns} dataSource={data} pagination={{ pageSize: 4 }} />
      {currentCountry && (
        <Modal
          title="Edit Country"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
           <Form form={form} layout="vertical" onFinish={handleOk}>
          <Form.Item
            name="name"
            label="Country Name"
            rules={[{ required: true, message: 'Please input the country name!' }]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            name="capital"
            label="Capital"
            rules={[{ required: true, message: 'Please input the capital!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="population"
            label="Population"
            rules={[{ required: true, message: 'Please input the population!' }]}
          >
            <Input type="text" />
          </Form.Item>
        </Form>

        </Modal>
      )}
    </>
  );
};

export default Countries;
