import React, { useState, useEffect } from "react"
//import StarPicker from "react-star-picker"
import StarRatingComponent from "react-star-rating-component"
import "../styles/rating-form.scss"

const Rate = props => {
  /*
  const [rating, setRating] = useState(null)

  const onChange = value => {
    setRating(value)
  }
  */
  const [starRating, setStarRating] = useState(null)

  const onStarChange = value => {
    setStarRating(value)
  }

  return (
    <form
      action={props.redirectUrl || '/thanks-for-rating'}
      name="article-rating"
      method="POST"
      data-netlify="true"
      className="rating-form"
    >
      <input type="hidden" name="form-name" value="article-rating" />
      <input type="hidden" name="episode" value={props.episode} />
      <label for="stars">Your rating:</label>
      <input type="hidden" name="stars" value={starRating} />

      {/*<StarPicker onChange={onChange} value={rating|| 0} halfStars="true" />*/}
      <br />
      {/* Ideally the button should only appear once a rating has been made */}
      <StarRatingComponent
        starColor="gold"
        name="rate1"
        emptyStarColor="#dddddd"
        starCount={5}
        value={starRating}
        onStarClick={onStarChange}
      />

      <details>
        <summary>Further comments</summary>
        <textarea name="comments" rows="4"></textarea>
      </details>
      {starRating && (
        <button class="rating-button" type="submit">
          📨 Send this rating
        </button>
      ) }
    </form>
  )
}

export default Rate
