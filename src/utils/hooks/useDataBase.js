
const useDataBase = (n) => {
    const filledArr = Array.from({length:n},(_,i)=>({
        id: i + 1,
        img: "https://media.istockphoto.com/id/1085241552/photo/red-sneakers-backpack-with-camera-and-headphones.jpg?s=612x612&w=0&k=20&c=vaNhLHAfteVsuPh7p_ORGch1EizcEoLV_PIbnxOxNmU=",
        title:"Backpack & Footwear",
        price: 50,
        quantity: 1,
        category: "Bags & Wears",
        description: "Multi-purpose Backpack and Footwear collection plus gift(s)"
    }));
    
  return filledArr; 
}

export default useDataBase;