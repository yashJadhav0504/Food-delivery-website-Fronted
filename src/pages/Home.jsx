// import React, { use, useContext, useState } from 'react'
// import Nav from "../components/Nav";
// import Categories from "../components/Category";
// import Card from "../components/Card";
// import Card2 from "../components/Card2";
// import { dataContext } from "../context/UserContext"; 
// import { food_items } from "../food";
// import { RxCross2 } from "react-icons/rx";
// import { useSelector } from 'react-redux';
// import { toast } from 'react-toastify';






// function Home() {
//     let{cate,setCate,input,showCart,setShowCart}=useContext(dataContext)

// function filter(category){
//     if(category==="All"){
//         setCate(food_items)
//         return;
//     }else{
//         let newList=food_items.filter((item)=>item.food_category===category)
//         setCate(newList)
//     }
// }
// let items=useSelector((state)=>state.cart)
// let subtotal=items.reduce((total, item) => total + item.price * item.qty, 0);
// let deliverycharge=subtotal>0?40:0;
// let taxes=subtotal*0.5/100;
// let total=Math.floor(subtotal+deliverycharge+taxes);
// return (
// <div className='bg-slate-200 w-full min-h-[100vh]'>
// <Nav/>
// {!input?<div className='flex flex-wrap justify-center items-center
// gap-5 w-[100%]' >
// {Categories.map((item) => {
// return (
// <div key={item.name}className='w-[140px] h-[150px] bg-white flex 
// flex-col items-start gap-5 p-5 justify-start text-[20px] 
// font-semibold text-gray-700 rounded-lg shadow-xl hover:bg-green-200
// cursor-pointer transition-all duration-200' onClick={() => filter(item.name)}>
// {item.image}
// {item.name}
// </div>
// );
// })}
// </div>:null}

// <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center
// pt-8 pb-8'>
//     {cate.length>1? cate.map((item)=>(
//         <Card  key={item.id}  name={item.food_name} image={item.food_image} 
//         price={item.price} id={item.id} type={item.food_type}/>
//     )):<div className='text-center text-2xl text-green-600 font-bold pt-5'> Not displayed</div>}
   
// </div>

// <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 
//     transition-all duration-700 overflow-auto
//     ${showCart?"translate-x-0":"translate-x-[100vw]"}`}>
//     <header className='w-[100%] flex justify-between items-center'>
// <span className='text-green-400 text-[18px] font-semibold'>Order items</span>
// <RxCross2 className='w-[30px] h-[20px] text-green-400 text-[18px] font-semibold cursor-pointer
// hover:text-gray-600 'onClick={()=>setShowCart(false)}/>
//     </header>
//     {items.length>0?<>
//     <div className='w-full mt-9 flex flex-col gap-8'>
//       {items.map((item)=>(
//          <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty}/>
//       ))}  
//     </div>  
//     < div className='w-full border-t-2 border-b-2 border-gray-600 mt-7 flex flex-col gap-2 p-8 '>
//      <div className='w-full flex justify-between items-center'>
//         <span className='text-xl  text-gray-600 font-bold'>Subtotal</span>
//         <span className='text-green-500 font-bold text-lg'>Rs {subtotal}/-</span>
//      </div>
//      <div className='w-full flex justify-between items-center'>
//         <span className='text-xl  text-gray-600 font-bold'>Delivery Charge</span>
//         <span className='text-green-500 font-bold text-lg'>Rs {deliverycharge}/-</span>
//      </div>
//      <div className='w-full flex justify-between items-center'>
//         <span className='text-xl  text-gray-600 font-bold'>Taxes</span>
//         <span className='text-green-500 font-bold text-lg'>Rs {taxes}/-</span>
//      </div>
     
//     </div>
//     <Card2/>
   
//         <div className='w-full flex justify-between items-center p-9'>
//         <span className='text-2xl  text-gray-600 font-bold'>Total</span>
//         <span className='text-green-500 font-bold  text-2xl'>Rs {total}/-</span>
//     </div>
// <button className='w-full p-3 rounded-lg bg-green-500
//       text-white hover:bg-green-400 transition-all cursor-pointer' onClick={()=>{
//         toast.success("Order placed successfully!")
//         setShowCart(false)
//       }}>Place Order</button>  </>  
//     :<div className='text-center text-2xl text-green-600 font-bold pt-5'>Empty Card...</div>}

    
// </div>
// </div>
// )
// }


// export default Home   


import React, { useContext, useState } from 'react'
import Nav from "../components/Nav";
import Categories from "../components/Category";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import { dataContext } from "../context/UserContext"; 
import { food_items } from "../food";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function Home() {
    let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext)
    const [activeFilter, setActiveFilter] = useState("All")
    const [isLoading, setIsLoading] = useState(false)
    const [deliveryTime, setDeliveryTime] = useState("30-45")

    function filter(category) {
        setIsLoading(true)
        setActiveFilter(category)
        setTimeout(() => {
            if (category === "All") {
                setCate(food_items)
            } else {
                let newList = food_items.filter((item) => item.food_category === category)
                setCate(newList)
            }
            setIsLoading(false)
        }, 300)
    }

    let items = useSelector((state) => state.cart)
    let subtotal = items.reduce((total, item) => total + item.price * item.qty, 0);
    let deliverycharge = subtotal > 0 ? 40 : 0;
    let taxes = Math.ceil(subtotal * 5 / 100);
    let total = Math.floor(subtotal + deliverycharge + taxes);

    return (
        <div className='bg-gradient-to-br from-orange-50 via-white to-red-50 w-full min-h-[100vh] relative'>
<div className='w-full h-[220px] sm:h-[250px] md:h-[300px] lg:h-[350px] bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-700 relative overflow-hidden'>
  <div className='absolute inset-0 bg-black/30'></div>
  
  <div className='relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4 sm:px-6 lg:px-20 pt-4 sm:pt-6 lg:pt-10'>
    
    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-2xl mb-2 sm:mb-3 tracking-wide leading-tight'>
      Delicious Food Delivered
    </h1>
    
    <p className='text-sm sm:text-base md:text-lg font-medium text-white/90 drop-shadow-md'>
      Delicious & • Fast • Freshly Made
    </p>
    
    {/* Restaurant Description */}
    <p className='mt-2 text-xs sm:text-sm md:text-base lg:text-lg text-white/85 max-w-xl drop-shadow-sm leading-snug'>
      🌮🍴 Welcome to <span className='font-semibold'>TastyBites</span> — every dish crafted with love and served hot at your doorstep. Enjoy a wide range of flavors from local favorites to international delights. Your perfect meal is just a click away!
    </p>
    
    {/* Delivery & Rating */}
    <div className='mt-5 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 bg-black/20 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 shadow-lg text-center'>
      <span className='text-xs sm:text-sm md:text-base font-semibold'>⭐ 4.8 Rating ⏰ Open till 11 PM</span>
      
     
    </div>
    
  </div>
  
  <div className='absolute -bottom-1 left-0 w-full h-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-t-3xl'></div>
</div>





            <Nav />

            {/* Filter Section */}
            <div className='w-full px-6 py-4'>
                <div className='flex justify-between items-center mb-6'>
                    <h2 className='text-2xl font-bold text-gray-800'>Browse Categories</h2>
                </div>
            </div>

            {!input ?
                <div className='flex flex-wrap justify-center items-center gap-6 w-[100%] px-6 py-4'>
                    {Categories.map((item) => {
                        return (
                            <div key={item.name} className={`w-[140px] h-[160px] bg-white flex 
                            flex-col items-center gap-4 p-6 justify-center text-[16px] 
                            font-semibold rounded-2xl shadow-lg hover:shadow-2xl
                            cursor-pointer transition-all duration-300 transform hover:-translate-y-3
                            border-2 backdrop-blur-sm relative overflow-hidden group
                            ${activeFilter === item.name
                                    ? 'border-orange-400 bg-gradient-to-br from-orange-50 to-red-50 text-orange-600'
                                    : 'border-gray-100 text-gray-700 hover:border-orange-200'}`}
                                onClick={() => filter(item.name)}>
                                <div className='absolute inset-0 bg-gradient-to-br from-orange-500/0 to-red-500/0 group-hover:from-orange-500/5 group-hover:to-red-500/5 transition-all duration-300'></div>
                                <div className='relative z-10 flex flex-col items-center gap-3'>
                                    <div className='text-3xl transform group-hover:scale-110 transition-transform duration-300'>
                                        {item.image}
                                    </div>
                                    <span className='text-center leading-tight'>{item.name}</span>
                                    {activeFilter === item.name && (
                                        <div className='w-full h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full'></div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
                : null}

            {/* Loading State */}
            {isLoading && (
                <div className='w-full flex justify-center items-center py-20'>
                    <div className='flex flex-col items-center'>
                        <div className='w-12 h-12 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin mb-4'></div>
                        <p className='text-gray-600 font-semibold'>Loading delicious food...</p>
                    </div>
                </div>
            )}

            {/* Food Items Grid */}
            <div className='w-full flex flex-wrap gap-6 px-6 justify-center items-center pt-8 pb-8'>
                {!isLoading && (cate.length > 1 ? cate.map((item) => (
                    <Card key={item.id} name={item.food_name} image={item.food_image}
                        price={item.price} id={item.id} type={item.food_type} />
                )) : <div className='text-center bg-white rounded-2xl p-12 shadow-xl border border-gray-100'>
                    <div className='text-6xl mb-4'>🔍</div>
                    <div className='text-2xl text-gray-700 font-bold mb-2'>No items found</div>
                    <div className='text-gray-500'>Try a different category or search term</div>
                </div>)}
            </div>

            {/* Shopping Cart Sidebar */}
            <div className={`w-full md:w-[420px] h-[100%] fixed top-0 right-0 
                bg-gradient-to-b from-white via-gray-50 to-orange-50/30 shadow-2xl 
                transition-all duration-500 overflow-auto backdrop-blur-xl
                border-l-2 border-orange-200/50 z-50
                ${showCart ? "translate-x-0" : "translate-x-[100vw]"}`}>

                {/* Cart Header */}
                <div className='sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-10'>
                    <header className='w-[100%] flex justify-between items-center p-6'>
                        <div>
                            <span className='text-[22px] font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent'>
                                Your Order
                            </span>
                            <div className='text-sm text-gray-500 mt-1'>
                                {items.length} {items.length === 1 ? 'item' : 'items'} • Delivery in {deliveryTime} mins
                            </div>
                        </div>
                        <button
                            onClick={() => setShowCart(false)}
                            className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-100 hover:text-red-500 transition-all duration-200 group'>
                            <RxCross2 className='w-5 h-5 group-hover:rotate-90 transition-transform duration-200' />
                        </button>
                    </header>
                </div>

                <div className='p-6'>
                    {items.length > 0 ? <>
                        {/* Cart Items */}
                        <div className='space-y-4 mb-8'>
                            {items.map((item) => (
                                <div key={item.id} className='bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow'>
                                    <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />
                                </div>
                            ))}
                        </div>

                        {/* Bill Summary */}
                        <div className='bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mb-6'>
                            <div className='bg-gradient-to-r from-gray-50 to-orange-50 p-4 border-b border-gray-200'>
                                <h3 className='font-bold text-gray-800 text-lg'>Bill Summary</h3>
                            </div>
                            <div className='p-6 space-y-4'>
                                <div className='flex justify-between items-center'>
                                    <span className='text-gray-700'>Subtotal ({items.length} items)</span>
                                    <span className='font-semibold text-gray-800'>₹{subtotal}</span>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span className='text-gray-700 flex items-center gap-2'>
                                        🚚 Delivery Charge
                                    </span>
                                    <span className='font-semibold text-gray-800'>₹{deliverycharge}</span>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span className='text-gray-700'>Taxes & Charges</span>
                                    <span className='font-semibold text-gray-800'>₹{taxes}</span>
                                </div>
                                <div className='border-t-2 border-dashed border-gray-300 pt-4'>
                                    <div className='flex justify-between items-center'>
                                        <span className='text-xl font-bold text-gray-800'>Total Amount</span>
                                        <span className='text-2xl font-bold text-orange-600'>₹{total}</span>
                                    </div>
                                    {subtotal < 299 && (
                                        <div className='text-xs text-gray-500 mt-2'>
                                            Add ₹{299 - subtotal} more for free delivery!
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Order Button */}
                        <button
                            className='w-full p-4 rounded-2xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-500
                            text-white font-bold text-lg hover:from-orange-600 hover:via-red-600 hover:to-pink-600
                            transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl
                            transform hover:-translate-y-1 active:translate-y-0 relative overflow-hidden group'
                            onClick={() => {
                                toast.success("🎉 Order placed successfully! Preparing your meal...")
                                setShowCart(false)
                            }}>
                            <div className='absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></div>
                            <div className='relative z-10 flex items-center justify-center gap-3'>
                                <span>🛵 Place Order</span>
                                <span className='bg-white/20 px-3 py-1 rounded-full'>₹{total}</span>
                            </div>
                        </button>

                        {/* Additional Info */}
                        <div className='mt-4 text-center space-y-2'>
                            <div className='text-sm text-gray-600 flex items-center justify-center gap-2'>
                                🔒 100% Safe & Secure Payment
                            </div>
                            <div className='text-xs text-gray-500'>
                                By placing order, you agree to our Terms & Conditions
                            </div>
                        </div>
                    </> :
                        /* Empty Cart State */
                        <div className='text-center py-20'>
                            <div className='text-8xl mb-6 animate-bounce'>🛒</div>
                            <div className='text-2xl text-gray-700 font-bold mb-3'>Your cart is empty</div>
                            <div className='text-gray-500 mb-6'>Add some delicious items to get started!</div>
                            <button
                                onClick={() => setShowCart(false)}
                                className='bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:-translate-y-1'>
                                Start Shopping
                            </button>
                        </div>}
                </div>
            </div>

            {/* Overlay */}
            {showCart && (
                <div
                    className='fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300'
                    onClick={() => setShowCart(false)}
                ></div>
            )}
        </div>
    )
}

export default Home
