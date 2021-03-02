import React from "react"
import ReactDOM from "react-dom"
import Layout from "./Layout"

const Dropdown = () => {

  return (
    <form>
      <label>
        Pick your price range:
        <select>
            <option value="0">Any</option>
            <option value="1">$0 to $9</option>
            <option value="2">$10 to $19</option>
            <option value="3">$20 to $29</option>
            <option value="4">$30 to $39</option>
            <option value="5">More than $40</option>
        </select>
      </label>
    </form>
  )
}

export default Dropdown