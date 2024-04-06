import React, { useEffect, useState } from 'react'
import CategoryMenu from './CategoryMenu';
import ProductBox from '../../components/ProductBox';
import Loading from '../../components/Loading';
import { categoryApi } from './../../Api/categoryApi';
import { productApi } from './../../Api/productApi';
import { useParams } from 'react-router-dom';
import Paginate from './../../components/Paginate';
import Filter from './Filter';

export default function ProductList() {
    var { pageNum } = useParams()
    var [categories, setCategories] = useState({})
    var [products, setProducts] = useState({})
    var [loading, setLoading] = useState(true);
    var [totalPage, setTotalPage] = useState(1)
    var [filterKey, setFilterKey] = useState('')
    var [maxPrice, setMaxPrice] = useState(100000)
    var [minPrice, setMinPrice] = useState(0);
    var [category, setCategory] = useState(null)
    const handleFilterByName = (e) => {
        setFilterKey(e.target.value)
    }
    const handleFilterByMaxPrice = (e) => {
        setMaxPrice(e.target.value)
    }
    const handleFilterByMinPrice = (e) => {
        setMinPrice(e.target.value)
    }

    const handleFilterByCategory = (e) => {
        if (e.target.innerText === 'All categories') setCategory(null)
        else
            setCategory(e.target.innerText)
    }
    var myView1 = loading === true ? <Loading /> : <CategoryMenu categories={categories} handleFilterByCategory={handleFilterByCategory} />
    var myView2 = loading === true ? <Loading /> : <ProductBox products={products} />
    var params = {
        populate: '*',
        pagination: {
            page: pageNum ? pageNum : 1,
            pageSize: 12,
            'filters[productName][$contains]': filterKey ? filterKey : null
        },
        filters: {
            productName: {
                $contains: filterKey ? filterKey : null,
            },
            price: {
                $lt: maxPrice ? maxPrice : null,
                $gt: minPrice ? minPrice : null
            },
            category: {
                categoryName: {
                    $eq: category ? category : null
                }
            }
        }
        // 'pagination[pageSize]': 12,
        // 'pagination[page]': pageNum ? pageNum : 1,
        // 'filters[productName][$contains]': filterKey ? filterKey : null,
        // 'filters[price][$lt]': maxPrice ? maxPrice : 100000
    }





    useEffect(() => {
        const fetchData = async () => {
            var response1 = await categoryApi.getAll();
            var response2 = await productApi.getAll(params);
            console.log(response2)
            setCategories(response1.data.data)
            setProducts(response2.data.data)
            setTotalPage(response2.data.meta.pagination.pageCount);
            setLoading(false);
            console.log(response2)

        }
        fetchData()
    }, [pageNum, filterKey, maxPrice, minPrice, category])


    return (
      <div className="row"><div id="sidebar" className="span3">
            {myView1}
        </div>
            <div className="span9">
                <Filter handleFilterByName={handleFilterByName} handleFilterByMaxPrice={handleFilterByMaxPrice} handleFilterByMinPrice={handleFilterByMinPrice} />
                {myView2}
                <Paginate totalPage={totalPage} currentPage={pageNum ? pageNum : 1} basePath='http://localhost:3000/product/page/' />

            </div>

        </div>

    )
}