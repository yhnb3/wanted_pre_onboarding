import { useState } from 'react'
import cx from 'classnames'

import styles from './Tab.module.scss'

const ITEMS = ['고구마', '감자', '양파']
function Tab() {
  const [isTab, setIsTab] = useState('고구마')

  const handleTab = (e) => {
    const targetTab = e.currentTarget.dataset.name
    setIsTab(targetTab)
  }

  const bottomBorderPosition = ITEMS.findIndex((name) => name === isTab) * 100

  return (
    <div className={styles.container}>
      {ITEMS.map((item) => (
        <button
          data-name={item}
          key={`itme-${item}`}
          type='button'
          className={cx(styles.tab, { [styles.selected]: isTab === item })}
          onClick={handleTab}
        >
          {item}
        </button>
      ))}
      <div className={styles.itemBottomBorder} style={{ transform: `translate(${bottomBorderPosition}px)` }} />
    </div>
  )
}

export default Tab
