import { Match } from '~/models/Match'

export interface Bracket {
  type: "upper" | "lower" | "final"
  bracketTops: Match[]
}