import React, { useState, useEffect } from "react"
import StarPicker from "react-star-picker"
import StarRatingComponent from "./star-picker"
import "../styles/rating-form.scss"
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const handleSubmit = e => {
 
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'article-rating',
        stars: 5,
      }),
    })
      .then(res => {
        if (res.ok) {
          console.log("ok")
        } else {
          throw Error(
            `Something went wrong and your message was not sent! 🤯 ${res.status} ${res.message}`
          )
        }
      })
      .catch(error => alert(error))
  
  
}

const Rate = props => {
  
  const [rating, setRating] = useState(null)

  const onChange = value => {
    setRating(value)
  }
  
  const [starRating, setStarRating] = useState(null)

  const onStarChange = value => {
    setStarRating(value)
  }

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
      <StarPicker onChange={onChange} value={rating|| 0} halfStars="true" />
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
        <textarea name="comments" rows="4"></textarea>
      </details>
      {rating && (
        <button class="rating-button" type="submit">
          📨 Send this rating
        </button>
      ) }
    </form>
  )
}

export default Rate
