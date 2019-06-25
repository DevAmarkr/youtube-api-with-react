import React from 'react'

const SearchBar = (props)=>{
   return[
       <div className = "ui form">
        <div class="ui icon input">
          <input type="text" placeholder="Search..." />
          <i aria-hidden="true" class="search circular link icon"></i>
       </div>
       </div>
   ]
}
export default SearchBar