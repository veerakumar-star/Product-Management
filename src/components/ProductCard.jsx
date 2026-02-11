export default function ProductCard({ product, onEdit, onDelete }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">

        <h5 className="card-title">{product.title}</h5>

        <p className="card-text text-muted mb-1">
          Category: {product.category}
        </p>

        <h6 className="text-success fw-bold">₹{product.price}</h6>

        <div className="d-flex gap-2 mt-3">
          <button
            className="btn btn-warning btn-sm"
            onClick={()=>onEdit(product)}
          >
            Edit
          </button>

          <button
            className="btn btn-danger btn-sm"
            onClick={()=>onDelete(product.id)}
          >
            Delete
          </button>
        </div>

      </div>
    </div>
  );
}
