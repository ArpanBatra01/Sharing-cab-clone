import { useState, useEffect } from "react";
 
function ProductSearch() {
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

const[selectedProduct, setSelectedProduct]=useState("");
const[searchResult, setSearchResult]=useState("");

  const handleSearch = () => {
    console.log("hello")

  }
  const reset = () => {
    setSearchResult("")
  }

  
 
  useEffect(()=>{
    console.log(selectedProduct)
    let findProduct = product.find((element)=> element.name == selectedProduct)
    console.log(findProduct)
    setSearchResult(findProduct)


  },[selectedProduct]);

  return (
    <>
      <label>
        Select the product:
        <span>
          <select
            name="Select the product"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
          >
           {
            product.map((element, index) => {
              return <option value={element.name}> {element.name} </option>
            })
           }
          </select>
        </span>
      </label>
      <button type="submit" onClick={handleSearch}>submit</button>
      <button type="button" onClick={reset}>Reset</button>
      <div><label>Output:</label></div>
      <div>{searchResult?.name}</div>
     

     
      <div><label>Image:</label><img src={searchResult?.image}></img></div>
      
      

    </>
  );
}
export default ProductSearch
