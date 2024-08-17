/*
 * @Description:
 * @version:
 * @Author: jenny.gao
 * @Date: 2024-06-28 17:55:05
 * @LastEditTime: 2024-06-28 19:56:53
 * @LastEditors: jenny.gao
 */
import { IApi } from '@umijs/max';
import path from 'path';

export default function (api: IApi) {
  api.onGenerateFiles(() => {
    api.writeTmpFile({
      path: 'Basic/index.tsx',
      content: `export default {};`,
    });
  });

  api.onGenerateFiles(() => {
    const { paths } = api;
    const { absPagesPath } = paths;

    const pagesPath = path.join(absPagesPath, 'Basic');
    const indexPath = path.join(pagesPath, 'index.tsx');

    api.writeTmpFile({
      path: indexPath,
      content: `export default {};`,
    });
  });
}
