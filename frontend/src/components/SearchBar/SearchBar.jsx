import {  useState  }  from 'react';




const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');


    function handleSubmit(e)  {
        e.preventDefault();
        let video = {searchTerm: searchTerm};
        console.log(video);
        props.searchTermProperties(video)
    }


    return ( 
    <form className='searchBar' onSubmit={handleSubmit} >
        <input type='text' value= {searchTerm} onChange = {(e) => setSearchTerm(e.target.value)}/>
        <button className= 'button'  type='submit'></button> 
    </form> );
}
 
export default SearchBar;

