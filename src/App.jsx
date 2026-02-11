import { useEffect, useState } from "react";
import { getProducts, addProduct, updateProduct, deleteProduct } from "./services/productServices";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => { loadProducts(); }, []);

  const loadProducts = async () => {
    const res = await getProducts();
    setProducts(res.data);
  };

  const showStatus = (msg) => {
    setStatus(msg);
    setTimeout(() => setStatus(""), 2500);
  };

  const handleSubmit = async (data) => {
    if (editing) {
      await updateProduct(editing.id, data);
      setProducts(p => p.map(x => x.id === editing.id ? { ...x, ...data } : x));
      setEditing(null);
      showStatus("Product updated successfully");
    } else {
      const res = await addProduct(data);
      setProducts(p => [...p, { ...data, id: Date.now() }]);
      showStatus("Product added successfully");
    }
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    setProducts(p => p.filter(x => x.id !== id));
    showStatus("Product deleted successfully");
  };

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 text-primary">
        Product Management Dashboard
      </h1>
      {status && (
        <div style={{ textAlign: "center", marginBottom: 15 }}>
          <span
            style={{
              color: "green",
              padding: "8px 16px",
            }}
          >
            {status}
          </span>
        </div>
      )}
      <SearchBar search={search} setSearch={setSearch} />
      <ProductForm onSubmit={handleSubmit} editing={editing} />
      <ProductList products={filtered} onEdit={setEditing} onDelete={handleDelete} />
    </div>
  );
}
