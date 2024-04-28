import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

const AppContext = React.createContext()
const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

const randomMeal = 'https://www.themealdb.com/api/json/v1/1/random.php'

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [favorites, setFavorites] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [selectedMeal, setSelectedMeal] = useState(null)

  const addToFavorites = (idMeal) => {
    let meal = meals.find(item => item.idMeal === idMeal)
    let alreadyFavorites = favorites.find(item => item.idMeal === meal.idMeal)
    if (alreadyFavorites) return
    const updatedFavorites = [...favorites, meal]
    setFavorites(updatedFavorites)
  }

  const removeFromFavorites = (idMeal) => {
    let updatedFavorites = favorites.filter(item => item.idMeal !== idMeal)
    setFavorites(updatedFavorites)
  }

  const selectMeal = (idMeal, favoriteMeal) => {
    let meal
    if (favoriteMeal) {
      meal = favorites.find((item) => item.idMeal === idMeal)
    }
    else {
      meal = meals.find((item) => item.idMeal === idMeal)
    }
    setSelectedMeal(meal)
    setShowModal(true)
  }
  const fetchMeals = async (url) => {
    setLoading(true)
    try {
      const { data } = await axios(url)
      if (data.meals) {
        setMeals(data.meals)
      }
      else {
        setMeals([])
      }
    }
    catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  const fetchRandomMeal = () => {
    fetchMeals(randomMeal)
  }

  useEffect(() => {
    fetchMeals(allMealsUrl)
  }, [])

  useEffect(() => {
    if (!searchTerm) return
    fetchMeals(`${allMealsUrl}${searchTerm}`)
    console.log(`${allMealsUrl}${searchTerm}`)
  }, [searchTerm])



  return <AppContext.Provider value={{ meals, loading, setSearchTerm, fetchRandomMeal, setShowModal, showModal, selectMeal, selectedMeal, addToFavorites, removeFromFavorites, favorites }} >
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }