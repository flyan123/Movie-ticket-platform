import React,{useState} from "react";
import PRODUCTS from '../Searchmain/products.json'
import sermaistyle from './searchmain.module.less'
import Buttonzu from '../../components/Buttonzu/index'
import './searchmain.less'

// const PRODUCTS = [
//     {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
//     {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
//     {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
//     {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
//     {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
//     {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
//   ];

const Searchmain = () =>{
    {/* PRODUCTS：数据 */}
    return <FilterableProductTable products={PRODUCTS} />;
}

export default Searchmain

// 总的
function FilterableProductTable({ products }) {

    const [filterText, setFilterText] = useState('');

    return (
      <div>
        <SearchBar
          filterText={filterText}
          onFilterTextChange={setFilterText} />
        <ProductTable
          products={products}
          filterText={filterText} />
        <Buttonzu/>
      </div>
    );
  }

// 搜索框
  function SearchBar({
    filterText,
    onFilterTextChange,
  }) {
    return (
        <div className='HomeSearch'>
        <div >
            <img className='home-search-tu'
            src='https://tse4-mm.cn.bing.net/th/id/OIP-C.dBr7MmPncuvzT0NLXUwm2wAAAA?w=161&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' />
        </div>

        <div >
            <form >
                <input
                    placeholder='搜索'
                    className='home-search'
                    value={filterText}
                    onChange={(e) => onFilterTextChange(e.target.value)} 
                />
            </form>
        </div>
    </div>
    );
  }

// 内容
  function ProductTable({ products, filterText }) {
    const rows = [];
  
    products.forEach((product) => {
      if (
        product.name.toLowerCase().indexOf(
          filterText.toLowerCase()
        ) === -1
      ) {
        return;
      }
      rows.push(
        // 主要内容
        <ProductRow
          product={product}
          key={product.name} />
      );
    });
  
    return (
      <table className={sermaistyle.main}>
        <tbody
        style={{width:'1200px',display: "flex",
        flexWrap: "wrap"}}
        >{rows}</tbody>
      </table>
    );
  }

  
  function ProductRow({ product }) {
    
  
    return (
    //   <tr>
        <td>
            <ul className={sermaistyle.tuqun}>
                <li key={product.id} className={sermaistyle.li}>
                    <div className='seletu-name' >
                        {/* 图片 */}
                        <div className='seletu-tu'>
                            <a href=' http://localhost:3000/?#/searchmain' >
                                <div >
                                    {/* src={src} */}
                                    <img
                                        src={product.src} />
                                </div>
                            </a>
                        </div>
                        {/* 购票小标 */}
                        <div className='seletu-biao'>购票</div>
                        {/* 电影名：name={name} */}
                        <div className='seletu-tu-name'><a href=' http://localhost:3000/?#/searchmain' style={{ color: 'black' }}>{product.name}</a></div>
                        {/* 评分：score={score} */}
                        <div className='seletu-tu-score'>{product.score}</div>
                    </div>
                </li>
            </ul>
           
            
         </td>
    // </tr>

        
       

    );
  }