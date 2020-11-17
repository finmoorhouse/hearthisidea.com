import React, { useState, useEffect } from "react"
import StarPicker from "react-star-picker"
import "../styles/rating-form.scss"


const Rate = props => {
useEffect(()=>{
  import ("react-star-picker")
  .then((StarPicker) => {
    this.StarPicker = StarPicker;
  })
  .catch((error) => console.error(error));


})
  const [rating, setRating] = useState(null)

  const onChange = value => {
    setRating(value)
  }

  return (
    <form
      action="/thanks-for-rating"
      name="article-rating"
      method="POST"
      data-netlify="true"
      className="rating-form"
    >
      <hr class='rating-hr'/>
      <input type="hidden" name="form-name" value="article-rating" />
      <input type="hidden" name="episode" value={props.episode} />

      <label for="stars">Your rating:</label>
      <input type="hidden" name="stars" value={rating} />
      <StarPicker onChange={onChange} value={rating} halfStars="true" />
      <details> 
      <summary>Further comments</summary>
        <textarea name="comments" rows="4" ></textarea>
      </details>
      <button class='rating-button' type="submit">📨 Send Feedback</button>
    </form>
  )
}

export default Rate
