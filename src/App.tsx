import { Container } from 'react-bootstrap'
import './App.css'
import Frame from './chards/Frame'
import CallCountDonutChart from './chards/CallCountDonutChart/CallCountDonutChart'

function App() {
  return (
    <Container>
      <Frame width={18} height={21} >
        <CallCountDonutChart />
      </Frame>
    </Container>
  )
}

export default App
