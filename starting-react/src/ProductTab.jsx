import Product  from "./Product"
// function ProductTab(){
//     return <>
//     <Product/>
//     <Product/>
//     <Product/>
//     </>
// }

//props
function ProductTab(){
    let options =["hi-tech","fast","durable"];
    // let option2 ={a:"pradeep",b:"varsha"};
    // you can pass directly array and object in feature or feature2
    return <>
    <Product title="Phone" price={65000} feature={options} feature2={{ a:"pradeep"}}/>
    <Product title="Laptop" price={150000}/>
    <Product title="Ninja" price={1700000}/>
    </>
}
export default ProductTab;