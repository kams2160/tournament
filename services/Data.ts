import { config } from '~/config/Config';
import { InputData } from '~/models/InputData';

export const fetchData = (game?: string): Promise<InputData>[] => {
  const fse = require('fs-extra');
  const games = <Promise<InputData>[]>[];

  config.data.forEach(item => {
    item.files.forEach(file => games.push(
      fse.readJson(`${config.sourcePath}${item.name}/${file}`)
    ))
  });

  return games;
};
