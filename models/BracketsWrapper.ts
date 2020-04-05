import { Bracket } from '~/models/Bracket'

export interface BracketsWrapper {
  upper: Bracket
  lower?: Bracket //only if type = "double-elimination" | "double-elimination-finals"
  final?: Bracket //only if type = "double-elimination-finals"
}