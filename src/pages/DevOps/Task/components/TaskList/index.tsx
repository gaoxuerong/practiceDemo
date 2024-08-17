/*
 * @Description:
 * @version:
 * @Author: jenny.gao
 * @Date: 2023-07-24 17:53:04
 * @LastEditTime: 2024-08-17 21:30:30
 * @LastEditors: jenny.gao
 */
import { history } from '@umijs/max';
import { Button, Table } from 'antd';
import React from 'react';
import styles from './index.less';

const TaskList: React.FC = () => {
  const handleAdd = () => {
    history.push(`/DevOps/createTask?modelId=${1}`);
  };
  return (
    <>
      <div className={styles.add}>
        <Button type="primary" onClick={handleAdd}>
          创建
        </Button>
      </div>
      <Table />
    </>
  );
};

export default TaskList;
