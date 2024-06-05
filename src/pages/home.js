
import { Input } from "antd";
import { useEffect, useState } from "react";

const { Search } = Input;

function ProductSearch() {
  const [search, setSearch] = useState("");

  const [product, setProduct] = useState([
    {
      name: "Grocery",
      image:
        "https://m.media-amazon.com/images/I/6131TzZaKXL._AC_UL320_.jpg",
     
    },
    {
      name: "Mobiles",
      image:
        "https://m.media-amazon.com/images/I/61SmnheBBRL._AC_UY218_.jpg",
      
    },
    {
      name:"Fashion",
      image:
        "https://m.media-amazon.com/images/I/41wv42oAkVL._AC_UL320_.jpg",
      
    },
    {
      name: "Electronics",
     
      image:
        "https://m.media-amazon.com/images/I/61aEl-5WVuL._AC_UY218_.jpg",
     
    },
    {
      name:"Home & Furnitures",
      image:
        "https://m.media-amazon.com/images/I/81vRCHFfZGL._AC_UL320_.jpg",
     
    },
    {
      name: "Appliances",
     
      image: "https://m.media-amazon.com/images/I/21wu3RPxAHL._AC_UY218_.jpg",
     
    },
    {
      name: "Travel",
    
      image: "https://m.media-amazon.com/images/I/616bfrpGQ7L._AC_UL320_.jpg",
    
    },
    {
      name: "Beauty,Toys & More",
     
      image: "https://m.media-amazon.com/images/I/51tmWG7u5cL._AC_UL320_.jpg",
     
    },
    {
      name: "Two wheelers",
     
      image:
        "https://m.media-amazon.com/images/I/71SQOhxzHlL._AC_UL640_QL65_.jpg",
      
    },
  ]);
  const [filterProducts, setFilterProducts] = useState(product);

  const onSearch = (value) => {
    setSearch(value);
    add();
  };
  const[count,setCount]=useState(0);

  useEffect(() => {
    if (search.length && count <= 20) {
      // write filter logic and update filter car state

      let filteredData = product.filter(function (el) {
        return el.name == search;
      });

      setFilterProducts(filteredData);
    } else {
      // reset to all car state
      setFilterProducts(product);
      if (count > 20) {
        alert("search limit can exceed");
      }
    }
  }, [search, count]);

  function add() {
    setCount(count + 1);
  }

  return (
    <>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="search"
        size="large"
        onSearch={onSearch}
      />
      <p>Search Count:{count}</p>

      {filterProducts.map((elem, index, arr) => {
        return (
          <div key={index} className="product-detail">
            <p>
              <img src={elem.image}></img>
            </p>
            <div>
              <p>
                <span className="title"> name : </span> {elem.name}
              </p>
              
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductSearch;
