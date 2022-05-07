import styles from './Routes.module.scss'

import { Toggle, Tab, Input, Dropdown } from '../components'

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        {/* <Toggle /> */}
        {/* <Tab /> */}
        {/* <Input /> */}
        <Dropdown />
      </div>
    </div>
  )
}

export default App
