import { Games } from '~/config/Games';
export const mapParams = (param: string): string => {
  switch (param) {
    case Games.SingleElimination: return 'singleElimination'
    case Games.DoubleElimination: return 'doubleElimination'
    case Games.DoubleEliminationFinals: return 'doubleEliminationFinals'
    default: return 'singleElimination'
  }
}