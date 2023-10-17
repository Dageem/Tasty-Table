import React from 'react'
import { useGetTagsQuery } from '../reducers/api'

function AllRecipes() {
    const { data: tags, error, isLoading } = useGetTagsQuery();







  return (
    <div>
      {tags.map((tag)=>
      <div key={tag.id}>
        
      </div>
      )}
    </div>
  )
}

export default AllRecipes
