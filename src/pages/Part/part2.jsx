import React, {  useContext, useEffect, useRef, useState} from "react";
import part2style from './part2.module.less'
import { Button, Form, Input, Popconfirm,Space, Table,Flex } from 'antd';

import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);


const EditableContext = React.createContext(null);
const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};
const EditableCell = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
}) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);
    const form = useContext(EditableContext);
    useEffect(() => {
        if (editing) {
            inputRef.current.focus();
        }
    }, [editing]);
    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex],
        });
    };
    const save = async () => {
        try {
            const values = await form.validateFields();
            toggleEdit();
            handleSave({
                ...record,
                ...values,
            });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };
    let childNode = children;
    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{
                    margin: 0,
                }}
                name={dataIndex}
                account={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title} is required.`,
                    },
                ]}
            >
                <Input ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
            <div
                className="editable-cell-value-wrap"
                style={{
                    paddingRight: 24,
                }}
                onClick={toggleEdit}
            >
                {children}
            </div>
        );
    }
    return <td {...restProps}>{childNode}</td>;
};

// Part2
const Part2 = () => {
    const [dataSource, setDataSource] = useState([
        {
            key: '0',
            num: '0',
            head:<button>更新图片</button>,
            account: '2355',
            name: '测试员0',
            sex: '女',
            birthday: "2001.10.11",
            phone:'*********'
        },
        {
            key: '1',
            num: '1',
            head:<button>更新图片</button>,
            account: '2355',
            name: '测试员1',
            sex: '男',
            birthday: "2001.10.11",
            phone:'*********'
        },
    ]);
    const [count, setCount] = useState(2);
    const handleDelete = (key) => {
        const newData = dataSource.filter((item) => item.key !== key);
        setDataSource(newData);
    };
    const defaultColumns = [
        {
            title: ' ',
            dataIndex: 'num',
            width: '5%',
            // editable: true,
        },{
            title: '头像',
            dataIndex: 'head',
            width: '10%',
            // editable: true,
        },{
            title: '账号',
            dataIndex: 'account',
            width: '10%',
            editable: true,
        },{
            title: '用户名',
            dataIndex: 'name',
            width: '15%',
            editable: true,
        },
        {
            title: '性别',
            dataIndex: 'sex',
            width: '10%',
            editable: true,

        },
        {
            title: '生日',
            dataIndex: 'birthday',
            width: '15%',
            editable: true,

        },
        {
            title: '电话',
            dataIndex: 'phone',
            width: '16%',
            editable: true,

        },
        {
            title: '操作',
            dataIndex: 'operation',
            render: (_, record) =>
                dataSource.length >= 1 ? (
                    <Popconfirm title="是否删除?" onConfirm={() => handleDelete(record.key)}>
                        <a><DeleteTwoTone /></a>
                    </Popconfirm>
                ) : null,
                width: '40%',

        },
    ];
    const handleAdd = () => {
        const newData = {
            key: count,
            num:`${count}`,
            head:<button>更新照片</button>,
            account:`2355`,
            name: `测试员 ${count}`,
            sex: '男',
            birthday: "2001.10.11",
            phone:'*********'
            
        };
        setDataSource([...dataSource, newData]);
        setCount(count + 1);
    };
    const handleSave = (row) => {
        const newData = [...dataSource];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        setDataSource(newData);
    };
    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
    };
    const columns = defaultColumns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record) => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave,
            }),
        };
    });

    // return

    return (
        
        <div className={part2style.all}>
             <div className={part2style.searchbox}>
                <Space direction="vertical">
                    <Search
                        placeholder="请输入账号进行查询"
                        onSearch={onSearch}
                        style={{
                            width: 500,
                        }}
                    // value={name}
                    // onChange={e => setName(e.target.value)}
                    />
                </Space>
                <Button
                        onClick={handleAdd}
                        type="primary"
                        style={{
                            marginBottom: 16,
                            

                        }}
                    >
                        添加用户
                    </Button>
                </div>
                <div className={part2style.text2}>
                    <Table
                        components={components}
                        rowClassName={() => 'editable-row'}
                        bordered
                        dataSource={dataSource}
                        columns={columns}
                    />
                </div>
       
        </div>
    );
};
export default Part2;