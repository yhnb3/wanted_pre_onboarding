import { useState } from 'react'
import cx from 'classnames'

import styles from './Toggle.module.scss'

function Toggle() {
  const [isToggle, setIsToggle] = useState(true)

  const handleToggle = () => {
    setIsToggle((prev) => !prev)
  }

  return (
    <div className={styles.container}>
      <div className={cx(styles.onToggle, { [styles.selected]: isToggle })} />
      <button type='button' onClick={() => handleToggle()} className={cx(styles.button, { [styles.gray]: isToggle })}>
        기본
      </button>
      <button type='button' onClick={() => handleToggle()} className={cx(styles.button, { [styles.gray]: !isToggle })}>
        상세
      </button>
    </div>
  )
}

export default Toggle
