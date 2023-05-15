import { useState } from 'react'
import { Button, Space, Typography } from 'antd'
import { CopyFilled } from '@ant-design/icons'
import { copyNumberFromState } from '../../utils/clipboard'
import { handleRandomNumber } from '../../utils/randomNumber'

const Main: React.FC = (): JSX.Element => {
  const [randomNumber, setRandomNumber] = useState<number>(0)

  const { Title } = Typography

  return (
    <main className="main">
      <Typography>
        <div className="content">
          <Title level={1}>{randomNumber}</Title>
          <Space className="button-group">
            <Button
              type="primary"
              onClick={() => {
                const number = handleRandomNumber()
                setRandomNumber(number)
              }}
            >
              Random
            </Button>
            <Button type="default" icon={<CopyFilled />} onClick={() => copyNumberFromState(randomNumber)}>
              Copy
            </Button>
          </Space>
        </div>
      </Typography>
    </main>
  )
}

export default Main
