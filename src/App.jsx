import React,{useState} from 'react'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Card from './components/Card'


function App() {
let data = [{
  items:"Shirts",
  isItems:true,
  isSale:true,
  isPrice:true,
  hcost:"$40.00",
  lcost:"$80.00",
  option1:"Add to cart",
  option:"Remove to cart"
},
{
  items:"Suits",
  isItems:true,
  isSale:true,
  isPrice:true,
  hcost:"$20.00",
  lcost:"$18.00",
  option1:"Add to cart",
  option:"Remove to cart"
},
{
  items:"T-Shirts",
  isItems:false,
  isSale:false,
  isPrice:false,
  hcost:"$50.00",
  lcost:"$25.00",
  option1:"Add to cart",
  option2:"Remove to cart"
},
{
  items:"Formal Wear",
  isItems:false,
  isSale:true,
  isPrice:true,
  hcost:"$40.00",
  option1:"Add to cart",
  option2:"Remove to cart"
},
{
  items:"Swimwear",
  isItems:true,
  isSale:false,
  isPrice:false,
  hcost:"$50.00",
  lcost:"$25.00",
  option1:"Add to cart",
  option2:"Remove to cart"
},
{
  items:"Sweaters",
  isItems:true,
  isSale:true,
  isPrice:true,
  hcost:"$120.00",
  lcost:"$280.00",
  option1:"Add to cart",
  option2:"Remove to cart"
},
{
  items:"Traditional",
  isItems:false,
  isSale:false,
  isPrice:false,
  hcost:"$20.00",
  lcost:"$18.00",
  option1:"Add to cart",
  option2:"Remove to cart"
},
{
  items:"Traditional and Cultural Clothing",
  isItems:false,
  isSale:true,
  isPrice:true,
  hcost:"$40.00",
  option1:"Add to cart",
  option2:"Remove to cart"
}]

let [cart,setCart] = useState(0)
  return <>
  
        <TopBar cart={cart} setCart={setCart}/>
        
        <Header/>
        
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    
                      {
                        data.map((e,i)=>{
                          return <Card data={e} key={i} cart={cart} setCart={setCart}/>
                        })
                      }
                    
                   
                </div>
            </div>
        </section>
  </>
}

export default App