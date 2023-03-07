import { useCallback, useEffect, useRef, useState } from "react";
import CheckListItem from "./CheckListItem";

const CheckList = () => {
  const [list, setList] = useState(['sample task']);
  const [listInput, setListInput] = useState('');

  const listRef = useRef(null)

  useEffect(() => {
    listRef.current.textContent = `There are ${list.length} item(s) in the list`
  })

  
  const addToList = () => {
    setList([...list, listInput])
    
    setListInput('')
  }

  const removeListItem = (itemName) => {
    setList(
      list.filter((item) => item !== itemName)
    )
  }

  const cachedAddToList = useCallback(addToList, [list, listInput])


  return (
    <>
      <div ref={listRef} />

      <div className="input-group">
        <input type={'text'} className="form-control" value={listInput} onChange={(e) => setListInput(e.target.value)} />
        <button className="btn btn-primary" onClick={() => cachedAddToList()}>Add</button>
      </div>

      <div>
        <ul className="list-group list-group-flush">
          { list.map((item, index) => 
            <CheckListItem key={index} itemName={item} removeItem={(item) => removeListItem(item)} />
          ) }
        </ul>
      </div>
    </>
  )
}

export default CheckList