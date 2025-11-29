import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../firebase/config.js";
import { fetchItem } from "../../utils/getAllProducts.js";
import Loading from "../loading/Loading.jsx";
import NotFound from "../../pages/notFound/NotFound.jsx";
import ShowSingleProduct from "../showSingleProduct/ShowSingleProduct.jsx";

const SingleProduct = () => {
      const [items, setItems] = useState(null);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
    
    useEffect(() => {
        const db = getFirestore(app);
        const itemRef = collection(db, "productos");
        fetchItem(setItems,setLoading,setError,itemRef,getDocs);
      }, []);

    return(
    <main>
        {loading && <Loading fullscreen />}
        {error && <NotFound titel={error} />}
        {items && <ShowSingleProduct items={items} />}
    </main>
    )
}

export default SingleProduct;