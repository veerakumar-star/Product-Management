import { useEffect, useState } from "react";

export default function ProductForm({ onSubmit, editing }) {
    const [form, setForm] = useState({ title: "", price: "", category: "" });

    useEffect(() => {
        if (editing) setForm(editing);
    }, [editing]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
        setForm({ title: "", price: "", category: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="card p-3 mb-4 shadow-sm">
            <div className="col-md-12 mb-2">
                <input placeholder="Title"
                    className="form-control"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })} required
                />
            </div>
            <div className="col-md-12 mb-2">
                <input type="number" placeholder="Price"
                    className="form-control"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })} required
                />
            </div>
            <div className="col-md-12 mb-2">
                <input placeholder="Category"
                    className="form-control"
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    required
                />
            </div>


            <div className="col-md-12 d-grid">
                <button className="btn btn-primary">
                    {editing ? "Update" : "Add"}
                </button>
            </div>
        </form>
    );
}
