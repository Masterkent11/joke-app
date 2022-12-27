import React, { useEffect, useState } from 'react'
import Axios from 'axios'


function Menu() {
  // Store all the jokes in an array
  const [jokes, getJokes] = useState([])
  // Store the filtered jokes by categories
  const [filter, getFilter] = useState([])
 

  // Function that gets the API data using async, await, Axios
  async function getAllJokes() {
    try {
      const response = await Axios.get("https://api.chucknorris.io/jokes/search?query=all&page=1")
      getJokes(response.data.result)
      getFilter(response.data.result)
    }
    catch (error) {
      console.error(error)
    }
  }

  // 
  useEffect(() => {
    getAllJokes()
  }, [])

  // Stores all the categories in jokes
  const [categories, getCategories] = useState([])


  // Function that gets all the categories of Jokes
  async function getAllCategories() {
    try {
      const response = await Axios.get("https://api.chucknorris.io/jokes/categories?")
      getCategories(response.data)
    }
    catch (error) {
      console.error(error)
    }
  }

  // 
  useEffect(() => {
    getAllCategories()
  }, [])

  // Stores the button that is active
  const [active, getActive] = useState("all")

  function filterJokes() {
    if(active === "all") {
      getFilter(jokes)
      return
    }
    const filtered = jokes.filter((joke) => joke.categories.includes(active))
    getFilter(filtered)
  }

  useEffect(() => {
    filterJokes();
  }, [active])



  return (
    <div>
      <div id="filter-btn">
        <button className={active === "all" ? "active" : ""} onClick={() => getActive("all")}>All</button>
        {categories.map((category) => {
          return (
            <button key={category} className={active === category ? "active" : ""} onClick={() => getActive(category)}>{category.toUpperCase()}  </button>
          )
        })}
        <button className={active === "uncategorized" ? "active" : ""} onClick={() => getActive("uncategorized")}>UNCATEGORIZED</button>
      </div>
      <div id="joke-cards">
        {filter.map((joke, index) => {
          return (
            <p key={joke.id} id={`joke${index}`} className={joke.categories.length === 0 ? "uncategorized" : joke.categories[0]}>{joke.value}</p>
          )
        })}
      </div>
      <div id='loadMore'>
      
      </div>
    </div>
  )
}

export default Menu