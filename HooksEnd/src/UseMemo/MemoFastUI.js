import React,{useState,useMemo} from 'react'

function MemoFastUI() {
    const [icecream, CountIcecrem] = useState(5)
    const [chocolate, CountChocolate] = useState(5)

    const setIcecream = () => {
        CountIcecrem(icecream+1)
    }
    const setChocolate= () => {
        setChocolate(chocolate+1)
    }
   
    const FindFool = useMemo( () => {
        return !(icecream && chocolate)
    },[])
  return (
    <div>
      <h1>------ | Number of Orders | ------</h1>
      <h2> Icecream : {icecream}</h2>
      <h2> Chocolate : {chocolate}</h2>
      <h2> {FindFool ? "In Fools Paradise!" : "People are not fool here!"}</h2>
      <button onClick={setIcecream}>Order Icecream</button>
      <button onClick={setChocolate}>Order Chocolate</button>
    </div>
  )
}

export default MemoFastUI
