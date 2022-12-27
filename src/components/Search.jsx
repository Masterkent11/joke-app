import React, {useState} from 'react';
import Button from './Button';

const Search = () => {
    const [query, setQuery] = useState('');
    const [jokes, setJokes] =useState()

    const searchJokes = async(e)=>{
        e.preventDefault();
        const url = `https://api.chucknorris.io/jokes/search?query=${query}`;
        try{
            const res = await fetch(url)
            const data = await res.json();
            setJokes(data.result.slice(0,5));  
        }catch(err){
            console.error(err);
        }
    }
    return (
        <div className='search-bar'>
            <form id="form" onSubmit={searchJokes}>
              <input id="search" type="text" name="query"
                  placeholder="jokes here"
                  value={query}
                  onChange={(e)=>setQuery(e.target.value)}
                  />
                  <button className="button" type="submit">Search</button>
              </form>
                <div className="cardContainer">
                    <div id='cardJokes'>
                        {jokes && jokes.length>0 && jokes.filter(joke=>joke.categories).map(joke=>(    
                        <div key={joke.id}  className='cards' >
                            <h1>{joke.categories}</h1>
                            <p>{joke.value} </p>   
                            <Button/>
                        </div> 
                        ))}
                    </div>   
                </div>
            <div>
            </div>
        </div>
    );
};

export default Search;