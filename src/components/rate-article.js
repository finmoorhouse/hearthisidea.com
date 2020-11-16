import React from "react"

const Rate = props => {
  return (
    <form action="http://localhost:9000/.netlify/functions/rate-article" method="post">
      <label for="rating">Your rating:</label>
      <select type="text" id="rating" name="rating" >
          <option value="1">⭐</option>
          <option value="2">⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
      </select>
      <button type="submit" name="your_name" value="your_value">
        Go
      </button>
    </form>
  )
}

export default Rate
