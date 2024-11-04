import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./components/Coffee/CoffeeCard"
import { useState } from "react"


function App() {
  const loadedCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <>
      <h1 className="text-6xl text-slate-500 text-center mb-20">Coffee making website: {coffees.length}</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {
          coffees.map(coffee=><CoffeeCard 
            key={coffee._id} 
            coffees={coffees}
            setCoffees={setCoffees}
            coffee={coffee}>
            </CoffeeCard>)
        }
      </div>
    </>

  )
}

export default App
