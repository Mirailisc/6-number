import { alertType } from '../components/Alert'
import { alert } from './alert'

export const copyNumberFromState = (number: number) => {
  if (number === 0) return alert(alertType.error, 'Number must be greater than zero')
  else {
    navigator.clipboard.writeText(number.toString())
    alert(alertType.success, 'Copied to clipboard')
  }
}
