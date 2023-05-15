import { Typography } from 'antd'

const Footer: React.FC = (): JSX.Element => {
  const { Text } = Typography

  return (
    <footer className="footer">
      <Text>
        Made with 😭 by&nbsp;
        <a href="https://github.com/Mirailisc" target="_blank" rel="noreferrer">
          Mirailisc
        </a>
      </Text>
    </footer>
  )
}

export default Footer
