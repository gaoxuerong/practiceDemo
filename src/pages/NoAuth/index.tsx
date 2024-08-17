/*
 * @Description:
 * @version:
 * @Author: jenny.gao
 * @Date: 2023-07-24 15:40:14
 * @LastEditTime: 2023-07-24 17:35:07
 * @LastEditors: jenny.gao
 */
import { Result } from 'antd';

const NoAuth = () => (
  <Result status="403" title="暂无权限" subTitle="没有权限，请联系管理员" />
);
export default NoAuth;
