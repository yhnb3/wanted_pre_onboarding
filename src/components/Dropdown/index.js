import { useState, useRef } from 'react'

import { useClickAway } from 'react-use'

import { Search, DownTriangle } from '../../assets/svgs'

import styles from './dropdown.module.scss'

const ITEMS = ['BTCUSD.PERP', 'ETHUSD.PERP', 'BCHUSD.PERP', 'LTCUSD.PERP', 'XRPUSD.PERP']

function Dropdown() {
  const [value, setValue] = useState('All Symbols')
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const ref = useRef(null)

  useClickAway(ref, () => {
    setInputValue('')
    setIsOpen(false)
  })

  const handleOptionClick = (e) => {
    const targetValue = e.currentTarget.dataset.name
    setValue(targetValue)
    setIsOpen((prev) => !prev)
  }

  const handleInputChange = (e) => {
    const targetValue = e.currentTarget.value
    setInputValue(targetValue)
  }

  const handleDropdownOpen = () => {
    setInputValue('')
    setIsOpen((prev) => !prev)
  }

  const filteredItems = ITEMS.filter((name) => name.toLowerCase().includes(inputValue.toLowerCase()))

  return (
    <div ref={ref} className={styles.container}>
      <DownTriangle className={styles.downTriangle} />
      <button type='button' className={styles.selectBox} onClick={handleDropdownOpen}>
        {value}
      </button>
      {isOpen ? (
        <div className={styles.dropdown}>
          <Search className={styles.searchIcon} />
          <input type='text' placeholder='Search Symbol' onChange={handleInputChange} />
          <button type='button'>All Symbols</button>
          {filteredItems.map((name) => (
            <button type='button' key={`option-${name}`} data-name={name} onClick={handleOptionClick}>
              {name}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default Dropdown
