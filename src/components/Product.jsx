import React from 'react';
import AppUrl from '../Api/AppUrl';
import { Link } from 'react-router-dom';




export default function Product({ product }) {
  // Kiểm tra xem product có tồn tại không trước khi truy cập thuộc tính
  if (!product || !product.attributes || !product.attributes.image || !product.attributes.image.data || !product.attributes.image.data[0] || !product.attributes.image.data[0].attributes) {
    return null; // Trả về null nếu product không tồn tại hoặc không có thuộc tính cần thiết
  }


  return (
    <div className="thumbnail" style={{height:'290px'}}>
      
      
      <Link to={'/product/'+product.id}><img src={AppUrl.ImageURL + product.attributes.image.data[0].attributes.url} alt='tam' /></Link>
      <div className="caption cntr">
      <Link to={'/product/'+product.id}>  <p>{product.attributes.productName}</p></Link>
        <p><strong> {product.attributes.price}</strong></p>
        <h4><a className="shopBtn" href="#st" title="add to cart"> Add to cart </a></h4>
        <div className="actionList">
          <a className="pull-left" href="#st">Add to Wish List </a> 
          <a className="pull-left" href="#st"> Add to Compare </a>
        </div> 
        <br className="clr" />
      </div>
    </div>
  );
}
