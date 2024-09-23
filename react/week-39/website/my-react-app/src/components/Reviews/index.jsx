import { Link } from 'react-router-dom'

const reviews = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam inventore illo consectetur veniam.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid hic id omnis blanditiis libero, dolor voluptatem asperiores. Voluptatem atque provident esse!"
]

function List() {
  const listItems = reviews.map((review, index) =>
    <p key={index}>{review}</p>
  );
  return <ul>{listItems}</ul>;
}

function Reviews() {
  // fetch reviews
  // show latest review
  // show slide gallery?

  return (
    <article className='review'>
      <h3>Vad andra säger om oss</h3>
      <List />

      <Link className='button button--review' to="tyck-till">Lämna omdöme</Link>
    </article>
  )
}

export default Reviews;