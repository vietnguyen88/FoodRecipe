import { useGlobalContext } from '../context'

const Favouries = () => {
  const { favorites, removeFromFavorites, selectMeal } = useGlobalContext()

  return (
    <section className='favorites'>
      <div className='favorites-content'>
        <h5>Favorites</h5>
        <div className='favorites-container'>
          {favorites.map((item) => {
            const { idMeal, strMealThumb } = item
            return (
              <div key={idMeal} className='favorite-item'>
                <img src={strMealThumb} alt='thumb' className='img favorites-img' onClick={() => selectMeal(idMeal, true)} />
                <button className='remove-btn' onClick={() => removeFromFavorites(idMeal)}>remove</button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Favouries