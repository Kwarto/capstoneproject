import React from 'react'
import { HeaderCategoryWrapper, CategoryWrapper, CateItems } from './HeaderCategoriesElement'
function HeaderCategories() {
  return (
     <>
      <HeaderCategoryWrapper>
        <CategoryWrapper className='container'>
         <CateItems>APARTMENT</CateItems>
         <CateItems>BUNGALOW</CateItems>
         <CateItems>2 BEDROOM</CateItems>
         <CateItems>SKYSCRAPER</CateItems>
        </CategoryWrapper>
      </HeaderCategoryWrapper>
     </>
  )
}

export default HeaderCategories