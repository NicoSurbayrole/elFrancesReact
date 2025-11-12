const getAllProducts = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products/");
    if (!res.ok) throw new Error("Error al obtener productos");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error en getAllProducts:", error);
    return [];
  }
};

export default getAllProducts;
