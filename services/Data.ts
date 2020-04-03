import { config } from '~/config/Config';
import { InputData } from '~/models/InputData';

export const fetchData = (): Promise<InputData> => {
  return require('fs-extra').readJson(config.sourcePath);
};
