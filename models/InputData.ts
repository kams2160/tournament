import { Bracket } from '~/models/Bracket';

export interface InputData {
  type: "single-elimination" | "double-elimination" | "double-elimination-finals";
  brackets: {
    upper: Bracket;
    lower?: Bracket; //only if type = "double-elimination" | "double-elimination-finals"
    final?: Bracket; //only if type = "double-elimination-finals"
  }
}
