export default function SearchBar({ search, setSearch }) {
  return (
    <input
      placeholder="Search by title or category..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      type="text"
      className="form-control mb-4"
    />
  );
}
