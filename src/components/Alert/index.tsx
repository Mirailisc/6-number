import { Alert } from 'antd'
const AlertComponent: React.FC<Props> = ({ type, message }: Props): JSX.Element => {
  return <Alert showIcon message={message} type={type} />
}

export default AlertComponent

type Props = {
  type: alertType
  message: string
}

export enum alertType {
  success = 'success',
  error = 'error',
  info = 'info',
  warning = 'warning',
}
