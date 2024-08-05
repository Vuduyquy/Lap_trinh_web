import Product from "../components/Product";

const Content = () => {
    return <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <Product name = "Fancy Product" type = {1} price1='40.000' price2='80.000'/>
                <Product name = "Special Item" isSale={true} isReview = {true} type={2} price1='20.00' price2='18.00'/>
                <Product name = "Sale Item" isSale={true} type={2} price1='50.00' price2='25.00'/>
                <Product name = "Popular Item" isReview = {true} price1='40.00'/>
                <Product name = "Sale Item" isSale={true} type={2} price1='50.00' price2='25.00'/>
                <Product name = "Fancy Product" type = {1} price1='120.000' price2='280.000'/>
                <Product name = "Special Item" isSale={true} isReview = {true} type={2} price1='20.00' price2='18.00'/>
                <Product name = "Popular Item" isReview = {true} price1='40.00'/>
            </div>
        </div>
    </section>
}

export default Content;