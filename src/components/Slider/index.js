import { useState } from 'react'
import cx from 'classnames'
import styles from './slider.module.scss'

const BREAK_POINT = [1, 25, 50, 75, 100]
function Slider() {
  const [value, setValue] = useState(50)

  const handleSliderChange = (e) => {
    const targetValue = e.currentTarget.value
    setValue(targetValue)
  }

  const handleClickBtn = (e) => {
    const targetValue = e.currentTarget.dataset.point
    setValue(targetValue)
  }

  return (
    <div className={styles.container}>
      <div className={styles.valueBox}>
        <span className={styles.value}>{value}</span>
        <span className={styles.percentage}>%</span>
      </div>
      <div className={styles.progressBox}>
        <input type='range' value={value} min='1' max='100' onChange={handleSliderChange} />
        <div
          className={styles.progressBar}
          style={{
            background: `linear-gradient(
            to right,
            #5856d6 0%,
            #5856d6 ${value}%,
            #ebebeb ${value}%,
            #ebebeb 100%
          )`,
          }}
        />
        {BREAK_POINT.map((point) => (
          <div key={`dot-${point}`} className={cx(styles.progressDot, { [styles.fill]: point <= value })} />
        ))}
      </div>
      <div className={styles.breakPoint}>
        {BREAK_POINT.map((point) => (
          <button
            type='button'
            key={`slide-button-${point}`}
            data-point={point}
            className={styles.breakPointBtn}
            style={{ left: `${point * 0.96 - 3}%` }}
            onClick={handleClickBtn}
          >
            {point}%
          </button>
        ))}
      </div>
    </div>
  )
}

export default Slider
