const CheckListItem = ({itemName, removeItem}) => (
  <li className="list-group-item">
    <input type="radio" className="form-check-input me-2" id={itemName + 'radio'} onChange={() => removeItem(itemName)} />
    <label className="form-check-label" htmlFor={itemName + 'radio'}>{itemName}</label>
  </li>
)

export default CheckListItem