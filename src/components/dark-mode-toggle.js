import React, { useCallback, useState } from "react"
import "../styles/dark-mode-toggle.scss"

const DarkModeToggle = () => {
  if (typeof window === 'undefined') {
    // Never server-side render this, since we can't determine
    // the correct initial state until we get to the client.
    // Alternatively, use a loading placeholder here.
    return null;
  }
  const [checked, setChecked] = useState(window.__theme === "dark")
  const onChange = useCallback(e => {
    window.__setPreferredTheme(checked ? "light" : "dark")
    setChecked(!checked)
  })

  return (
    <>
      <button
        className={
          "dark-mode-toggle" + (checked ? " toggle-dark" : " toggle-light")
        }
        amIChecked={checked}
        onClick={onChange}
      >
        <span className={"circle" + (checked ? " sun" : " moon")}></span>
        <span
          className={"sun-rays" + (checked ? " shining" : " hiding")}
        ></span>
      </button>
    </>
  )
}

export default DarkModeToggle
