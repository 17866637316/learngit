import { Button, message, Popconfirm, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { Fragment, useState } from 'react';


interface DataType {
  key: React.Key;
  tenantname: string;
  tenantidentification: string;
  //workId: number;
  //ten_admin: string;
  products: string[];
}

/* const [isOrgAddModalVisible, setIsOrgEditModalVisible] = useState(false); */

const handleOrgView = () => {
  message.success("查看");
};

const handleOrgSet = () => {
  message.success("设置");
};

const handleOrgEdit = () => {
  message.success("编辑");
};

const handleOrgLimit = () => {
  message.success("产品权限");
};

const hadnleonDelete = () => {
  message.success("删除成功");
};


const columns: ColumnsType<DataType> = [
  {
    title: '租户名称',
    dataIndex: 'tenantname',
    width: '20%'
  },
  {
    title: '租户标识',
    dataIndex: 'tenantidentification',
    width: '10%'
  },
  {
    title: 'gOS工作空间ID',
    dataIndex: 'workId',
    width: '10%',
    render: (_, record) => (
      <Button size='small' onClick={() => handleOrgView()}>
        查看
      </Button>
    ),
  },
  {
    title: '租户管理员',
    dataIndex: 'ten_admin',
    width: '10%',
    render: (_, record) => (
      <Button size='small' onClick={() => handleOrgSet()}>
        设置
      </Button>
    ),
  },
  {
    title: '已开通产品',
    key: 'products',
    dataIndex: 'products',
    width: '40%',
    //ellipsis: true,
    /* render: (_, { products }) => (
      <>
        {products.map(products => {
           let acproducts = products.length < 8 ? products : products.length-12;
           console.log(acproducts)
          return (
            <Space>
              <Tag color='blue' key={products} style={{ marginTop: 5 }}>
                {acproducts}
              </Tag>
            </Space>

          );
        })}
      </>
    ), */
    render: (_, { products }) => (
      <>
        {products.map(products => {
          let acproducts = products.length < 8 ? products : products.length - 12;
          console.log(acproducts)
          return (
            <Space>
              <Tag color='blue' key={products} style={{ marginTop: 5 }}>
                {products}
              </Tag>
            </Space>

          );
        })}
      </>
    ),
  },
  {
    title: '操作',
    key: 'action',
    width: '10%',
    render: (_, record) => (
      <Space>
        <Button
          type="link"
          //size="small"
          key="view"
          //uiKey="ui.org.detail"
          onClick={() => handleOrgLimit()}
        >
          产品权限
        </Button>
        <Button
          type="link"
          //size="small"
          key="edit"
          //uiKey="ui.org.edit"
          onClick={() => handleOrgEdit()}
        >
          编辑
        </Button>
        <Popconfirm
          title="确定要删除当前项目吗？"
          onConfirm={() => hadnleonDelete()}
        >
          <Button
            type="link"
            key="del"
          //uiKey="ui.org.delete"
          >
            删除
          </Button>
        </Popconfirm>
      </Space>
    ),
  },
];

const data: DataType[] = [];

for (let i = 0; i < 36; i++) {
  data.push({
    key: i,
    tenantname: `北京第 ${i} 建筑工程有限公司`,
    tenantidentification: 'zuhubiaoshi',
    //workId: 32,
    //ten_admin: `London, Park Lane no. ${i}`,
    products: ['物资AI风控系统', '全景视频AI巡检', 'CV产品3', 'CV产品4', 'CV产品5', 'CV产品6', 'CV产品7', 'CV产品8', 'CV产品9',
      'CV产品10', 'CV产品11', 'CV产品12', 'CV产品13', 'CV产品14'],
  });
}

const HomeForm: React.FC = () => {
  /*  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
   const [loading, setLoading] = useState(false);
 
   const start = () => {
     setLoading(true);
     // ajax request after empty completing
     setTimeout(() => {
       setSelectedRowKeys([]);
       setLoading(false);
     }, 1000);
   };
 
   const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
     console.log('selectedRowKeys changed: ', selectedRowKeys);
     setSelectedRowKeys(newSelectedRowKeys);
   };
 
   const rowSelection = {
     selectedRowKeys,
     onChange: onSelectChange,
   };
   const hasSelected = selectedRowKeys.length > 0; */

  return (
    <div  /* className='zuhutable' */ >
      {/* <div style={{ marginBottom: 16 }}>
         <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
          Reload
        </Button> 
         <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span> 
      </div> */}
      <Table /* rowSelection={rowSelection} */ columns={columns} dataSource={data} style={{ width: '95%', marginLeft: 35 }} />
    </div>
  );
};

export default HomeForm;