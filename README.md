# 🛍️ Product Management Dashboard (React.js)

A mini product management dashboard built using React.js (Hooks) that performs full CRUD operations using a mock REST API.

This project demonstrates component architecture, API abstraction, state management, and user feedback handling — similar to a real production frontend.

---

## 🚀 Features

- Fetch and display products from API
- Add new product (POST request)
- Edit existing product (PUT request)
- Delete product (DELETE request)
- Search & filter products by title/category
- Success status message after CRUD operations
- Optimistic UI updates (no refresh needed)
- Modular component architecture

---

## 🧠 Tech Stack

- React.js (Functional Components + Hooks)
- Axios (API calls)
- FakeStoreAPI (Mock backend)
- JavaScript (ES6+)
- CSS / Bootstrap (UI styling)

---

## 📂 Project Structure

src/
 ├─ components/
 │   ├─ ProductList.jsx
 │   ├─ ProductCard.jsx
 │   ├─ ProductForm.jsx
 │   └─ SearchBar.jsx
 │
 ├─ services/
 │   └─ productService.js
 │
 ├─ App.jsx
 └─ main.jsx

---

## ⚙️ Installation & Setup

1) Clone the repository
git clone <https://github.com/veerakumar-star/Product-Management>
cd product-dashboard

2) Install dependencies
npm install

3) Start development server
npm run dev

Open in browser:
http://localhost:5173

---

## 🌐 API Used

Fake Store API (Mock API)
https://fakestoreapi.com/products

Note:
This API does not permanently store data.
All POST/PUT/DELETE operations are simulated and reset after refresh.

---

## 🧩 Application Architecture

The application follows a container-presentational pattern:

App.jsx → State management & business logic
Components → UI rendering
Service Layer → API communication

This keeps the UI reusable and scalable.

---

## 🔔 User Feedback Handling

After every CRUD action, a temporary status message is displayed:

- Product added successfully
- Product updated successfully
- Product deleted successfully

Implemented using React state + timeout side effect.

---

## 🧪 Key Concepts Demonstrated

- React Hooks (useState, useEffect)
- Controlled forms
- Derived state (search filtering)
- API abstraction layer
- Optimistic UI updates
- Component reusability
- Separation of concerns

---

## 📌 Future Improvements

- Pagination
- Category dropdown filter
- Loading spinner
- Toast notifications
- Backend integration

---

## 👨‍💻 Author

Developed as part of a React practical assessment to demonstrate frontend engineering fundamentals.
