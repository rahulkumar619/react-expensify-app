import React from 'react';
import {Link} from 'react-router-dom';




const ExpenseListItem = ({id,description,amount,createdAt}) => (
<Link className="list-item" to={`/edit/${id}`}>
  <div>
  <h3 className="list-item-title">{description}</h3>
  <span className="list-item-sub">{createdAt}</span>

  </div>
  <div>
  <h3 className="list-item-data">{amount}</h3>

  </div>


  </Link>

);
export default ExpenseListItem;