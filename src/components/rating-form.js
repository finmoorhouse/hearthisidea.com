import React, { useState } from "react"
//import StarPicker from "react-star-picker"
import StarPicker from "./star-picker"
import "../styles/rating-form.scss"
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}



const Rate = props => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  const handleSubmit = e => {
    fetch(props.redirectUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "article-rating",
        'rating-of':  props.ratingOf,
        stars: rating,
        episode: props.episode,
        comments: feedback,
      }),
    })
      .then(res => {
        if (res.ok) {
          setSuccessMessage("Feedback received. Thank you!")
        } else {
          throw Error(`${res.status} ${res.message}`)
        }
      })
      .catch(error =>
        setErrorMessage(
          `Looks like there was a problem receiving the form on our end. Sorry!`
        )
      )

    e.preventDefault()
  }
  const [feedback, setFeedback] = useState(null)
  const handleFeedback = event => {
    setFeedback(event.target.value)
  }

  const [rating, setRating] = useState(null)

  const onChange = value => {
    setRating(value)
  }
  /*
  const [starRating, setStarRating] = useState(null)

  const onStarChange = value => {
    setStarRating(value)
  }
  */

  // action={props.redirectUrl || '/thanks-for-rating'}
  return (
    <form
      onSubmit={handleSubmit}
      name="article-rating"
      method="POST"
      data-netlify="true"
      className="rating-form"
    >
      <input type="hidden" name="form-name" value="article-rating" />
      <input type="hidden" name="episode" value={props.episode} />
      <input type="hidden" name="rating-of" value={props.ratingOf} />
      <label for="stars">Your rating:</label>
      <input type="hidden" name="stars" value={rating} />

      <br />
      <StarPicker onChange={onChange} value={rating || 0} halfStars="true" size={46}/>
      {/* Ideally the button should only appear once a rating has been made */}
      {/*<StarRatingComponent
        starColor="gold"
        name="rate1"
        emptyStarColor="#dddddd"
        starCount={5}
        value={starRating}
        onStarClick={onStarChange}
      />*/}

      <details>
        <summary>Further comments</summary>
        <textarea
          name="comments"
          rows="4"
          value={feedback}
          onChange={handleFeedback}
        ></textarea>
      </details>
      {(rating && ! (successMessage)) && (
        <button class="rating-button" type="submit">
          📨 Send this rating
        </button>
      )}
      {errorMessage && <p className='error-message'>{errorMessage.toString()}</p>}
      {successMessage && <p className='success-message'>{successMessage.toString()}</p>}
    </form>
  )
}

export default Rate
