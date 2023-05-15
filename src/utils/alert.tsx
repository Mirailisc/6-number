import toast from 'react-hot-toast'
import AlertComponent, { alertType } from '../components/Alert'

export const alert = (type: alertType, message: string) => {
  return toast.custom(() => <AlertComponent type={type} message={message} />)
}
