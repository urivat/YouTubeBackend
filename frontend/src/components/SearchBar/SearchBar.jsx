import {  useState  }  from 'react';




const SearchBar = ({search}) => {
    const [searchTerm, setSearchTerm] = useState('')                        //I am taking the search term from here and giving it to searchpage as

function handleSubmit(e){
    e.preventDefault();
    let searches = {searchTerm:searchTerm};
    
    console.log(handleSubmit)
    search.newSearchterm(searches);
}  

    return ( 
    <div className='searchBar'>
        <input type='search' placeholder='Search' value = {searchTerm} onChange={(event)=> setSearchTerm(event.target.value)} />
        <button className= 'button' onSubmit={handleSubmit} type='submit'>Search</button> 
    </div> );
}
 
export default SearchBar;

