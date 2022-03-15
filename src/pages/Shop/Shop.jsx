import React from 'react'
import Product from '../../sections/Products/Product'
import {
  ShopItemWrapper, ProductCard, 
  CardItems, ProductFilter, 
  FilterSelector,
  ShopSky, ShopHeading,
  Selectors, BungCate,
  SkyList, ShopBed} from './ShopElement'
import proImg from '../../images/seven.jpg'
import {FaComment, FaShoppingCart, FaStar} from 'react-icons/fa'
import SearchBar from '../../components/SearchBar/SearchBar'
import Testimonials from '../../sections/Testimonials/Testimonials'
function Shop() {
  return (
    <>
      <SearchBar />
      <ShopItemWrapper>
        <ProductCard>
          <CardItems>
          <Product
          productImg={proImg}
          name='Bungalow'
          description='lorem ipsum suite amet consecturture' 
          price='100, 500, 000'
          rate={<FaStar />}
          addCart={<FaShoppingCart/>}
          talkWit={<FaComment/>}
          />
          </CardItems>
          <CardItems>
          <Product
          productImg={proImg}
          name='Bungalow'
          description='lorem ipsum suite amet consecturture' 
          price='100, 500, 000'
          rate={<FaStar />}
          addCart={<FaShoppingCart/>}
          talkWit={<FaComment/>}
          />
          </CardItems>
          <CardItems>
          <Product
          productImg={proImg}
          name='Bungalow'
          description='lorem ipsum suite amet consecturture' 
          price='100, 500, 000'
          rate={<FaStar />}
          addCart={<FaShoppingCart/>}
          talkWit={<FaComment/>}
          />
          </CardItems>
          <CardItems>
          <Product
          productImg={proImg}
          name='Bungalow'
          description='lorem ipsum suite amet consecturture' 
          price='100, 500, 000'
          rate={<FaStar />}
          addCart={<FaShoppingCart/>}
          talkWit={<FaComment/>}
          />
          </CardItems>
          <CardItems>
          <Product
          productImg={proImg}
          name='Bungalow'
          description='lorem ipsum suite amet consecturture' 
          price='100, 500, 000'
          rate={<FaStar />}
          addCart={<FaShoppingCart/>}
          talkWit={<FaComment/>}
          />
          </CardItems>
          <CardItems>
          <Product
          productImg={proImg}
          name='Bungalow'
          description='lorem ipsum suite amet consecturture' 
          price='100, 500, 000'
          rate={<FaStar />}
          addCart={<FaShoppingCart/>}
          talkWit={<FaComment/>}
          />
          </CardItems>
        </ProductCard>
        <ProductFilter>
          <ShopHeading>Product Category</ShopHeading>
          <FilterSelector>
            <Selectors>
               <h1>Bungalow</h1>
               <BungCate>
                 Un-going  Bungalow
               </BungCate>
               <BungCate>
                  Finished Bungalows
               </BungCate>
               <BungCate>
                 Out For Sale  Bungalow
               </BungCate>
            </Selectors>
            <Selectors>
               <h1>Skyscrapers</h1>
               <BungCate>
                 Un-going  Bungalow
               </BungCate>
               <BungCate>
                  Finished Bungalows
               </BungCate>
               <BungCate>
                 Out For Sale  Bungalow
               </BungCate>
            </Selectors>
            <Selectors>
               <h1>2 Bed Room</h1>
               <BungCate>
                 Un-going  Bungalow
               </BungCate>
               <BungCate>
                  Finished Bungalows
               </BungCate>
               <BungCate>
                 Out For Sale  Bungalow
               </BungCate>
            </Selectors>
            <Selectors>
               <h1>Full Apartment</h1>
               <BungCate>
                 Un-going  Bungalow
               </BungCate>
               <BungCate>
                  Finished Bungalows
               </BungCate>
               <BungCate>
                 Out For Sale  Bungalow
               </BungCate>
            </Selectors>
          </FilterSelector>
        </ProductFilter>
      </ShopItemWrapper>

      <ShopSky>
        <SkyList>
        <ProductCard>
          <CardItems>
          <Product
          productImg={proImg}
          name='Bungalow'
          description='lorem ipsum suite amet consecturture' 
          price='100, 500, 000'
          rate={<FaStar />}
          addCart={<FaShoppingCart/>}
          talkWit={<FaComment/>}
          />
          </CardItems>
          <CardItems>
          <Product
          productImg={proImg}
          name='Bungalow'
          description='lorem ipsum suite amet consecturture' 
          price='100, 500, 000'
          rate={<FaStar />}
          addCart={<FaShoppingCart/>}
          talkWit={<FaComment/>}
          />
          </CardItems>
          <CardItems>
          <Product
          productImg={proImg}
          name='Bungalow'
          description='lorem ipsum suite amet consecturture' 
          price='100, 500, 000'
          rate={<FaStar />}
          addCart={<FaShoppingCart/>}
          talkWit={<FaComment/>}
          />
          </CardItems>
          <CardItems>
          <Product
          productImg={proImg}
          name='Bungalow'
          description='lorem ipsum suite amet consecturture' 
          price='100, 500, 000'
          rate={<FaStar />}
          addCart={<FaShoppingCart/>}
          talkWit={<FaComment/>}
          />
          </CardItems>
          <CardItems>
          <Product
          productImg={proImg}
          name='Bungalow'
          description='lorem ipsum suite amet consecturture' 
          price='100, 500, 000'
          rate={<FaStar />}
          addCart={<FaShoppingCart/>}
          talkWit={<FaComment/>}
          />
          </CardItems>
          <CardItems>
          <Product
          productImg={proImg}
          name='Bungalow'
          description='lorem ipsum suite amet consecturture' 
          price='100, 500, 000'
          rate={<FaStar />}
          addCart={<FaShoppingCart/>}
          talkWit={<FaComment/>}
          />
          </CardItems>
        </ProductCard>
        </SkyList>
      </ShopSky>

      <ShopBed className='container'>
      <ProductCard>
          <CardItems>
          <Product
          productImg={proImg}
          name='Bungalow'
          description='lorem ipsum suite amet consecturture' 
          price='100, 500, 000'
          rate={<FaStar />}
          addCart={<FaShoppingCart/>}
          talkWit={<FaComment/>}
          />
          </CardItems>
          <CardItems>
          <Product
          productImg={proImg}
          name='Bungalow'
          description='lorem ipsum suite amet consecturture' 
          price='100, 500, 000'
          rate={<FaStar />}
          addCart={<FaShoppingCart/>}
          talkWit={<FaComment/>}
          />
          </CardItems>
          <CardItems>
          <Product
          productImg={proImg}
          name='Bungalow'
          description='lorem ipsum suite amet consecturture' 
          price='100, 500, 000'
          rate={<FaStar />}
          addCart={<FaShoppingCart/>}
          talkWit={<FaComment/>}
          />
          </CardItems>
          <CardItems>
          <Product
          productImg={proImg}
          name='Bungalow'
          description='lorem ipsum suite amet consecturture' 
          price='100, 500, 000'
          rate={<FaStar />}
          addCart={<FaShoppingCart/>}
          talkWit={<FaComment/>}
          />
          </CardItems>
          <CardItems>
          <Product
          productImg={proImg}
          name='Bungalow'
          description='lorem ipsum suite amet consecturture' 
          price='100, 500, 000'
          rate={<FaStar />}
          addCart={<FaShoppingCart/>}
          talkWit={<FaComment/>}
          />
          </CardItems>
          <CardItems>
          <Product
          productImg={proImg}
          name='Bungalow'
          description='lorem ipsum suite amet consecturture' 
          price='100, 500, 000'
          rate={<FaStar />}
          addCart={<FaShoppingCart/>}
          talkWit={<FaComment/>}
          />
          </CardItems>
        </ProductCard>
      </ShopBed>

      <Testimonials />
    </>
  )
}

export default Shop