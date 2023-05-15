import { alertType } from '../components/Alert'
import { alert } from './alert'

export const handleRandomNumber = () => {
  const randomSixDigitsNumber: number = Math.floor(100000 + Math.random() * 900000)
  alert(alertType.success, 'Successful')
  return randomSixDigitsNumber
}
