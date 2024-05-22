import { useState, useEffect } from "react";

function CarSearch() {
  const [cars, setCars] = useState([
    {
      name: "alto",
      model: "2001",
      color: "red",
      price: "3 lakhs",
      image:
        "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20141017094314_gallery1.jpg",
      engine: "500cc",
      fueltype: "petrol",
      kmdriven: "10000",
      insurance: true,
      brand: "maruti",
    },
    {
      name: "thar",
      model: "2003",
      color: "black",
      price: "20 lakhs",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Mahindra_Thar_Photoshoot_At_Perupalem_Beach_%28West_Godavari_District%2CAP%2CIndia_%29_Djdavid.jpg/1280px-Mahindra_Thar_Photoshoot_At_Perupalem_Beach_%28West_Godavari_District%2CAP%2CIndia_%29_Djdavid.jpg",
      engine: "1500cc",
      fueltype: "petrol",
      kmdriven: "20000",
      insurance: true,
      brand: "mahindra",
    },
    {
      name: "nano",
      model: "2005",
      color: "yellow",
      price: "0.5 lakh",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Tata_Nano_Yellow.jpg/800px-Tata_Nano_Yellow.jpg",
      engine: "800cc",
      fueltype: "petrol",
      kmdriven: "10000",
      insurance: true,
      brand: "tata",
    },
    {
      name: "creta",
      model: "2024",
      color: "white",
      price: "18 lakhs",
      image:
        "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Creta/11434/1707294369951/227_Atlas-White_e2e3e5.jpg?tr=w-898",
      engine: "1500cc",
      fueltype: "petrol",
      kmdriven: "15000",
      insurance: false,
      brand: "hyundai",
    },
    {
      name: "audi",
      model: "2012",
      color: "white",
      price: "50 lakhs",
      image:
        "https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/106539/front-view1.jpeg?isig=0&wm=0&q=80",
      engine: "1000cc",
      fueltype: "petrol",
      kmdriven: "30000",
      insurance: true,
      brand: "volkswegan",
    },
    {
      name: "tiago",
      model: "2020",
      color: "white",
      price: "8 lakhs",
      image: "https://imgd-ct.aeplcdn.com/1056x660/n/8e6um4a_1527229.jpg?q=80",
      engine: "500cc",
      fueltype: "diesel",
      kmdriven: "30000",
      insurance: true,
      brand: "tata",
    },
    {
      name: "nexon",
      model: "2020",
      color: "white",
      price: "10 lakhs",
      image: "https://i.ytimg.com/vi/xbT2jcNvNZQ/maxresdefault.jpg",
      engine: "1000cc",
      fueltype: "petrol",
      kmdriven: "3000",
      insurance: true,
      brand: "tata",
    },
    {
      name: "xuv 300",
      model: "2021",
      color: "white",
      price: "9 lakhs",
      image: "https://imgd.aeplcdn.com/664x374/n/01n4f0b_1627097.jpg?q=80",
      engine: "12000 cc",
      fueltype: "petrol",
      kmdriven: "40000",
      insurance: true,
      brand: "mahindra",
    },
    {
      name: "xuv 700",
      model: "2022",
      color: "white",
      price: "20 lakhs",
      image:
        "https://i.pinimg.com/736x/c1/46/54/c14654518e68dc1784448d8d35f7a52f.jpg",
      engine: "20000cc",
      fueltype: "petrol",
      kmdriven: "5000",
      insurance: true,
      brand: "mahindra",
    },
  ]);

  useEffect(() => {

  });

  return (
    <>
  
  
      <label>
        Choose the Car:
        <select>
         
            
      
        </select> 
    
      </label>
    </>
  );
}

export default CarSearch;
