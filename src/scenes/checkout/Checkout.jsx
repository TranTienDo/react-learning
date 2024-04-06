import React from 'react'

export default function Checkout() {
  return (
<table classname="table table-bordered">
  <tbody>
    <tr><td>CHECKOUT</td></tr>
    <tr> 
      <td>
        <form classname="form-horizontal">
          <div classname="control-group">
            <label classname="span2 control-label">Name</label>
            <div classname="controls">
              <input type="text" placeholder="name" />
            </div>
          </div>
          <div classname="control-group">
            <label classname="span2 control-label">Address</label>
            <div classname="controls">
              <input type="text" placeholder="Address" />
            </div>
          </div>
          <div classname="control-group">
            <label classname="span2 control-label">Phone</label>
            <div classname="controls">
              <input type="text" placeholder="Phone" />
            </div>
          </div>
          <div classname="control-group">
            <div classname="controls">
              <button type="submit" classname="shopBtn">Checkout</button>
            </div>
          </div>
        </form> 
      </td>
    </tr>
  </tbody>
</table>


  )
}
