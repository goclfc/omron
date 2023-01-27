import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Link,
  useLocation,
} from "react-router-dom";
import React from "react";
import omr from "../resources/products/omr1.jpg";
import db from "../resources/db.js";
import japan from "../resources/images/japan.png";
import waranty from "../resources/images/waranty.png";
const Products = () => {
  const Product = (props) => {
    return (
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
        <a href="#">
          <img className="p-8 rounded-t-lg" src={omr} alt="product image" />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {props.name}
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Second star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Third star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fourth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fifth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              5.0
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {props.price}
            </span>
            <Link to="../productpage" state={{ id: props.id }}>
              <button className="text-white bg-omronBlue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                სრულად
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  const Presures = () => {
    return (
      <div className="w-4/6 flex flex-wrap justify-center lg:w-5/6">
        <Product
          name="omron m6"
          desc="Omron M 1 Basic
• Intellisense – ინტელექტუალური გაზომვის ტექნოლოგია
• მარაოს ფორმის მანჟეტი (იმეორებს მკლავის ანატომიურ ფორმას) 
მანჟეტის ზომა: CM 22-32 სმ."
          price="50.00 ₾"
          id="1"
        />
        <Product name="omron m6" price="50.00 ₾" />
        <Product name="omron m6" price="50.00 ₾" />
        <Product name="omron m6" price="50.00 ₾" />
        <Product name="omron m6" price="50.00 ₾" />
        <Product name="omron m6" price="50.00 ₾" />
        <Product name="omron m6" price="50.00 ₾" />
        <Product name="omron m6" price="50.00 ₾" />
        <Product name="omron m6" price="50.00 ₾" />
      </div>
    );
  };
  const Nebuliser = () => {
    return (
      <div className="w-4/6 flex flex-wrap justify-center lg:w-5/6">
        <Product name="omron m6" desc="Omron M 1 Basic" price="50.00 ₾" />
        <Product name="nebu m6" price="50.00 ₾" />
        <Product name="nebu m6" price="50.00 ₾" />
        <Product name="nebu m6" price="50.00 ₾" />
        <Product name="nebu m6" price="50.00 ₾" />
        <Product name="nebu m6" price="50.00 ₾" />
        <Product name="nebu m6" price="50.00 ₾" />
        <Product name="nebu m6" price="50.00 ₾" />
        <Product name="nebu m6" price="50.00 ₾" />
      </div>
    );
  };
  const Layout = () => {
    return (
      <>
        <div
          className="drawer w-2/6 flex flex-col bg-omronBlue text-white items-start pt-6 lg:w-1/6 h-auto"
          style={{ minHeight: "90vh" }}
        >
          <Link to="/presures">
            <button className="p-2 rounded-xl ml-2">წნევის აპარატი</button>
          </Link>
          <Link to="/nebuliser">
            <button className="p-2 rounded-xl ml-2">ნებულაიზერი</button>
          </Link>

          <button className="p-2 rounded-xl ml-2">სასწორი</button>
          <button className="p-2 rounded-xl ml-2">თერმომეტრი</button>
          <button className="p-2 rounded-xl ml-2">აქსესუარები</button>
        </div>
        <Outlet />
      </>
    );
  };
  const ProductPage = () => {
    let { state } = useLocation();
    console.log(db, 11111);
    const product = db.filter((item) => item.id == state.id);
    console.log(product, 2222);
    return (
      <div className="w-4/6 flex items-center flex-wrap justify-center lg:w-5/6">
        <div className="img flex justify-center w-full lg:w-1/2">
          <div className="left-panel w-1/4 m-2">
            <img src={omr} className="w-full border-2 rounded-xl shadow m-2" />
            <img src={omr} className="w-full border-2 rounded-xl shadow m-2" />
            <img src={omr} className="w-full border-2 rounded-xl shadow m-2" />
            <img src={omr} className="w-full border-2 rounded-xl shadow m-2" />
          </div>
          <div className="main-photo">
            <img src={omr} />
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-4 flex h-full flex-col border-l-2">
          <div className="m-4 flex items-center border-b-2 pb-4">
            <img src={japan} style={{ width: "80px" }} />
            <p className="ml-4 text-omronBlue text-xl">
              #1 რეკომენდებული ბრენდი სამედიცინო სფეროში
            </p>
          </div>
          <h1 className="text-3xl mt-4 text-omronBlue mb-4 text-center">
            {product[0].name}
          </h1>
          <p className="border-b-2 pb-2">{product[0].descr}</p>
          <div className="details p-2">
            <div className="waranty" style={{height:'70px'}}>
                <img src={waranty} style={{height:'150px'}}/>
            <div className="price text-omronBlue text-3xl p-2 m-2">ფასი : {product[0].price} ₾</div>
            <div className="buynowbtn p-2 m-2 rounded-xl bg-omronBlue text-white flex w-20 justify-center">შეძენა</div>
            </div>
          </div>
        </div>
        {/* <div className="footer">
            <div> ფასი : {product[0].price}</div>
        </div> */}
      </div>
    );
  };
  return (
    <div className="flex flex-wrap justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Presures />} />
            <Route path="presures" element={<Presures />} />
            <Route path="nebuliser" element={<Nebuliser />} />
            <Route path="productpage" element={<ProductPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Products;
