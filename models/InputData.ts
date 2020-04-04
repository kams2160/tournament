import { BracketsWrapper } from '~/models/BracketsWrapper';

export interface InputData {
  type: "single-elimination" | "double-elimination" | "double-elimination-finals";
  brackets: BracketsWrapper;
}

