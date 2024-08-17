/*
 * @Description:
 * @version:
 * @Author: jenny.gao
 * @Date: 2023-07-24 16:01:18
 * @LastEditTime: 2023-07-25 22:44:35
 * @LastEditors: jenny.gao
 */
import { FormattedMessage } from '@umijs/max';
import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import React from 'react';
import TaskCalendar from './components/TaskCalendar';
import TaskList from './components/TaskList';

const Task: React.FC = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: <FormattedMessage id="taskList" />,
      children: <TaskList />,
    },
    {
      key: '2',
      label: <FormattedMessage id="taskCalendar" />,
      children: <TaskCalendar />,
    },
  ];
  const handleTabs = () => {};
  return <Tabs defaultActiveKey="1" items={items} onChange={handleTabs} />;
};

export default Task;
