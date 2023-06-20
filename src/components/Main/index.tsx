import { useState } from 'react'
import { Button, Space, Typography, message } from 'antd'
import { CopyFilled } from '@ant-design/icons'
import { copyNumberFromState } from '../../utils/clipboard'
import { handleRandomNumber } from '../../utils/randomNumber'
import { NoticeType } from 'antd/es/message/interface'

const Main: React.FC = (): JSX.Element => {
  const [randomNumber, setRandomNumber] = useState<number>(0)
  const [messageApi, contextHolder] = message.useMessage()
  const { Title } = Typography

  const alert = (message: Message) => {
    messageApi.open({
      type: message.type,
      content: message.content,
    })
  }

  const errorMessage: Message = {
    type: 'error',
    content: 'Number must be greater than zero',
  }

  const copySuccessMessage: Message = {
    type: 'success',
    content: 'Copied to clipboard',
  }

  const generateSuccessMessage: Message = {
    type: 'success',
    content: 'Generated',
  }

  return (
    <main className="main">
      {contextHolder}
      <Typography>
        <div className="content">
          <Title level={1}>{randomNumber}</Title>
          <Space className="button-group">
            <Button
              type="primary"
              onClick={() => {
                const number = handleRandomNumber()
                setRandomNumber(number)
                alert(generateSuccessMessage)
              }}
            >
              Random
            </Button>
            <Button
              type="default"
              icon={<CopyFilled />}
              onClick={() => {
                if (randomNumber === 0) {
                  alert(errorMessage)
                } else {
                  copyNumberFromState(randomNumber)
                  alert(copySuccessMessage)
                }
              }}
            >
              Copy
            </Button>
          </Space>
        </div>
      </Typography>
    </main>
  )
}

export default Main

interface Message {
  type: NoticeType
  content: string
}
