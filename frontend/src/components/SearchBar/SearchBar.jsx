import {  useState  }  from 'react';




const SearchBar = (props) => {
    
    const [searchTerm, setSearchTerm] = useState('')       
                     //I am taking the search term from here and giving it to searchpage as
console.log(props)
function handleSubmit(e){
    e.preventDefault();
    let search = searchTerm
    props.searchTermProps(search)



    
}  

    return ( 
    <div className='searchBar' onClick={handleSubmit}>
        <input type='search' placeholder='Search' value = {searchTerm} onChange={(event)=> setSearchTerm(event.target.value)} />
        <button className= 'button' type='submit'>Search</button> 
    </div> );
}
 
export default SearchBar;

