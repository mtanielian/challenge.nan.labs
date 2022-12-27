import { definitions } from './defFunctions'

export const getDefFunction = ({ category = '', action = '' }) => {
  return definitions.find(d => d.display_name === action.toLocaleLowerCase() && d.category === category.toLocaleLowerCase())
}