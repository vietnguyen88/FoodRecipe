import { useGlobalContext } from '../context'

const Modal = () => {
  const { selectedMeal, setShowModal } = useGlobalContext()
  const { strMeal: title, strMealThumb: image, strInstructions: text, strSource: source } = selectedMeal
  return (
    <aside className='modal-overlay'>
      <div className='modal-container'>
        <img src={image} alt='thumb' className='img modal-img' />
        <div className='modal-content'>
          <h4>{title}</h4>
          <p>Cooking Instructions</p>
          <p>{text}</p>
          <a href={source} target='_blank'>Original Source</a>
          <button type='button' className='btn close-btn' onClick={() => setShowModal(false)}>close</button>
        </div>
      </div>
    </aside>
  )
}

export default Modal