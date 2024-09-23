import { Link } from "react-router-dom";

function Review() {
  return (
    <main className="review__container">
      <article className="review__input">
        <h1>Tyck till!</h1>
        <p>berätta vad du tycker</p>
        <textarea name="" id=""></textarea>
        <button className="button button--cta">Skicka</button>

        <Link to="/" className="button">Tillbaka</Link>
      </article>
    </main>
  )
}

export default Review;