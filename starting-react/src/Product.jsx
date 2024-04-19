import "./Product.css"
function Product({title,price,feature,feature2}){
     
        // console.log(feature);
        console.log(feature2);
    return <div className="Product">
        <h2>Title: { title}</h2>
        <h3>Price:{price}</h3>
        <p>{feature}</p>
        <p>{feature2.a}</p>
    </div>
}
export default Product; 