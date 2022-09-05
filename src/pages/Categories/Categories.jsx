import React from 'react'
import HomeSales from '../../components/HomeSales/PopularSales'
import NewsLetter from '../../sections/NewsLetter/NewsLetter'
import { CategoriesWrapper, CatWrapperHeading, CategoryItemList, ItemList} from './CategoriesElement'
import ListImg1 from '../../images/image-s4.png'
function Categories() {
  return (
      <>
         <CategoriesWrapper>
          <CatWrapperHeading>Product Categories</CatWrapperHeading>

          <CategoryItemList>
             <ItemList className='main'>
              <article>
              <h4>Bungalow</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, facilis? Laboriosam quisquam excepturi consequuntur quae neque rem reiciendis iusto eos?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, facilis? Laboriosam quisquam excepturi consequuntur quae neque rem reiciendis iusto eos?
                </p>
              </article>
             </ItemList>
             <ItemList>
               <img src={ListImg1} alt="" />
             </ItemList>
             <ItemList>
               <img src={ListImg1} alt="" />
             </ItemList>
             <ItemList className='main'>
              <article>
              <h4>Skyscrapers</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, facilis? Laboriosam quisquam excepturi consequuntur quae neque rem reiciendis iusto eos?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, facilis? Laboriosam quisquam excepturi consequuntur quae neque rem reiciendis iusto eos?
                </p>
              </article>
             </ItemList>
             <ItemList className='main'>
              <article>
              <h4>2 Bedroom</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, facilis? Laboriosam quisquam excepturi consequuntur quae neque rem reiciendis iusto eos?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, facilis? Laboriosam quisquam excepturi consequuntur quae neque rem reiciendis iusto eos?
                </p>
              </article>
             </ItemList>
             <ItemList>
               <img src={ListImg1} alt="" />
             </ItemList>
          </CategoryItemList>
         </CategoriesWrapper>
         <HomeSales />
         <NewsLetter />
      </>
  )
}

export default Categories