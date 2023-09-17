import React from 'react'

function Searchbar({search,setSearch,fetchFood}) {
  return (
    <div className='main flex justify-center p-10'>
      <input className='bg-gray-200 py-2 px-2 w-80 border-gray-200 rounded-l-lg outline-none' type='text' placeholder='Search Your Food' value={search} onChange={(e)=> setSearch(e.target.value)}></input>
      <button className='bg-gray-400 px-5 py-2 border-t-2  rounded-r-lg' onClick={fetchFood}>Search</button>
    </div>
  )
}

export default Searchbar