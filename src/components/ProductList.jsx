import ProductCard from "./ProductCard";

export default function ProductList({ products, onEdit, onDelete }) {
  return (
    <div className="row g-4">
      {products.length !== 0 ? products.map(p => (
        <div key={p.id} className="col-md-4">
          <ProductCard
            product={p}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      )) : <div style={{ textAlign: "center", marginBottom: 15 }}>
        <span
          style={{
            color: "Grey",
            padding: "8px 16px",
          }}
        >
          Product match not found.
        </span>
      </div>}
    </div>
  );
}
