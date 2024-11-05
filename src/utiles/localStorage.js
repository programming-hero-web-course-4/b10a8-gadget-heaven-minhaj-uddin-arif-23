import toast from "react-hot-toast";

// get item 
const getItem =() => {
  const all = localStorage.getItem("favourite")
  if(all){
    const favourites = JSON.parse(all)
    console.log(favourites);
    return favourites
  }else{
    console.log([]);
    return []
  }
}


const addFavourite = (products) => {
  // console.log(products);
  const favourites = getItem()
  const isExit = favourites.find(item => item.product_id == products.product_id)
  if(isExit) return toast.error("Already exit")
  favourites.push(products)
  localStorage.setItem("favourite",JSON.stringify(favourites))
  toast.success("Successfully added")

}
export {addFavourite,getItem}