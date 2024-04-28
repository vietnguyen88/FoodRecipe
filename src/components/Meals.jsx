import { useContext } from 'react'
import { useGlobalContext } from '../context'
import { BsHandThumbsUp } from 'react-icons/bs'

const Meals = () => {
  const { meals, loading, selectMeal,addToFavorites } = useGlobalContext()

  if (loading) {
    return (
      <section className='section'>
        <h5>Loading...</h5>
      </section>
    )
  }
  if (meals.length < 1) {
    return (
      <section className='section'>
        <h4>No meals matched your search. Please try again.</h4>
      </section>
    )
  }
  return (
    <section className='section-center'>
      {meals.map((single) => {
        const { idMeal, strMeal: title, strMealThumb: image } = single
        return (
          <article key={idMeal} className='single-meal'>
            <img src={image} className='img' onClick={() => selectMeal(idMeal)} />
            <footer>
              <h5>{title}</h5>
              <button className='like-btn' onClick={()=>addToFavorites(idMeal)}><BsHandThumbsUp /></button>
            </footer>
          </article>
        )

      }
      )}
    </section>
  )
}

export default Meals