import ProductCard from "./ProductCard";

export default function ProductList({ products, onEdit, onDelete }) {
  return (
    <div className="row g-4">
      {products.map(p => (
        <div key={p.id} className="col-md-4">
          <ProductCard
            product={p}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      ))}
    </div>
  );
}
