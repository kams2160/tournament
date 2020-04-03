import { MatchPlayer } from '~/models/MatchPlayer';

export interface Match {
  upperPart: MatchPlayer;
  lowerPart: MatchPlayer;
  winner: "upper" | "lower" | null;
  firstChild?: Match;
  secondChild?: Match;
}