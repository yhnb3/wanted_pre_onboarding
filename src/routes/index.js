import styles from './Routes.module.scss'

import Toggle from '../components/Toggle'
import Tab from '../components/Tab'
import Input from '../components/Input'

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        {/* <Toggle /> */}
        {/* <Tab /> */}
        <Input />
      </div>
    </div>
  )
}

export default App
