import { useState } from 'react'
import cx from 'classnames'

import { EyeOpen, EyeClose, Checked } from '../../assets/svgs'

import styles from './input.module.scss'

function Input() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isPasswordOpen, setIsPasswordOpen] = useState(false)
  const [isEmailValidation, setIsEmailValidation] = useState(false)
  const [isEmailInputFocus, setIsEmailInputFocus] = useState(false)

  const handlePasswordOpen = () => {
    setIsPasswordOpen((prev) => !prev)
  }

  const handleIsEmailInputFocus = () => {
    setIsEmailInputFocus((prev) => !prev)
  }

  const handleEmailChange = (e) => {
    const emailValue = e.currentTarget.value
    setEmail(emailValue)
    const validationRegx = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    setIsEmailValidation(emailValue.match(validationRegx))
  }

  const handlePasswordChange = (e) => {
    const passwordValue = e.currentTarget.value
    setPassword(passwordValue)
  }

  const isVisibleValidationMsg = !email || isEmailInputFocus ? false : !isEmailValidation

  return (
    <div className={styles.container}>
      <label htmlFor='e-mail'>E-mail</label>
      <input
        value={email}
        name='e-mail'
        type='text'
        placeholder='E-mail'
        onFocus={handleIsEmailInputFocus}
        onBlur={handleIsEmailInputFocus}
        onChange={handleEmailChange}
      />
      <p
        className={cx(styles.validationMsg, {
          [styles.valid]: !isVisibleValidationMsg,
        })}
      >
        Invalid E-mail address
      </p>
      <label htmlFor='password'>Password</label>
      <input
        name='password'
        value={password}
        type={isPasswordOpen ? 'text' : 'password'}
        placeholder='Password'
        onChange={handlePasswordChange}
      />
      <Checked className={cx(styles.checkedIcon, { [styles.indigo]: email.length > 0 && isEmailValidation })} />
      <div
        role='button'
        className={styles.eyeIcon}
        onClick={handlePasswordOpen}
        onKeyPress={handlePasswordOpen}
        tabIndex='0'
      >
        {isPasswordOpen ? <EyeOpen className={styles.indigo} /> : <EyeClose />}
      </div>
    </div>
  )
}

export default Input
