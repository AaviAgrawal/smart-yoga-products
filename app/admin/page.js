"use client";

import { useState } from "react";
import styles from "./AdminPanel.module.css";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("products");

  return (
    <div className={styles.adminPanel}>
      <h1 className={styles.header}>Admin Panel</h1>
      <div className={styles.tabs}>
        <button
          className={`${styles.tabButton} ${activeTab === "products" ? styles.active : ""}`}
          onClick={() => setActiveTab("products")}
        >
          Manage Products
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === "blogs" ? styles.active : ""}`}
          onClick={() => setActiveTab("blogs")}
        >
          Manage Blogs
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === "social" ? styles.active : ""}`}
          onClick={() => setActiveTab("social")}
        >
          Social Media Links
        </button>
      </div>
      <div className={styles.tabContent}>
        {activeTab === "products" && <ManageProducts />}
        {activeTab === "blogs" && <ManageBlogs />}
        {activeTab === "social" && <ManageSocialLinks />}
      </div>
    </div>
  );
}

function ManageProducts() {
  const initialProducts = [
    { id: 1, name: "Product 1", description: "Description 1", price: 100, image: "/product1.jpeg" },
    { id: 2, name: "Product 2", description: "Description 2", price: 200, image: "/product2.webp" },
    { id: 3, name: "Product 3", description: "Description 3", price: 300, image: "/product3.webp" }
  ];

  const [products, setProducts] = useState(initialProducts);
  const [productForm, setProductForm] = useState({ name: "", description: "", price: "", image: "" });
  const [editingProduct, setEditingProduct] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = () => {
    const newProduct = { ...productForm, id: Date.now() };
    setProducts((prev) => [...prev, newProduct]);
    setProductForm({ name: "", description: "", price: "", image: "" });
  };

  const handleEditProduct = (product) => {
    setProductForm(product);
    setEditingProduct(product.id);
  };

  const handleSaveProduct = () => {
    setProducts((prev) =>
      prev.map((prod) => (prod.id === editingProduct ? { ...prod, ...productForm } : prod))
    );
    setEditingProduct(null);
    setProductForm({ name: "", description: "", price: "", image: "" });
  };

  const handleDeleteProduct = (id) => {
    setProducts((prev) => prev.filter((prod) => prod.id !== id));
  };

  return (
    <div>
      <h2>Manage Products</h2>
      <div>
        <h3>{editingProduct ? "Edit Product" : "Add Product"}</h3>
        <input
          type="text"
          name="name"
          value={productForm.name}
          onChange={handleChange}
          placeholder="Product Name"
        />
        <input
          type="text"
          name="description"
          value={productForm.description}
          onChange={handleChange}
          placeholder="Product Description"
        />
        <input
          type="number"
          name="price"
          value={productForm.price}
          onChange={handleChange}
          placeholder="Product Price"
        />
        <input
          type="text"
          name="image"
          value={productForm.image}
          onChange={handleChange}
          placeholder="Product Image URL"
        />
        <button onClick={editingProduct ? handleSaveProduct : handleAddProduct}>
          {editingProduct ? "Save Changes" : "Add Product"}
        </button>
      </div>

      <h3 className="my-4">Product List</h3>
      <ul className="flex gap-3 flex-wrap">
        {products.map((product) => (
          <li key={product.id} className="bg-slate-100 p-4 rounded w-auto">
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <img src={product.image} alt={product.name} width="100" />
            <button className="mr-3" onClick={() => handleEditProduct(product)}>Edit</button>
            <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ManageBlogs() {
  const initialBlogs = [
    { id: 1, title: "Blog 1", content: "This is the content of blog 1." },
    { id: 2, title: "Blog 2", content: "This is the content of blog 2." },
    { id: 3, title: "Blog 3", content: "This is the content of blog 3." }
  ];

  const [blogs, setBlogs] = useState(initialBlogs);
  const [blogForm, setBlogForm] = useState({ title: "", content: "" });
  const [editingBlog, setEditingBlog] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddBlog = () => {
    const newBlog = { ...blogForm, id: Date.now() };
    setBlogs((prev) => [...prev, newBlog]);
    setBlogForm({ title: "", content: "" });
  };

  const handleEditBlog = (blog) => {
    setBlogForm(blog);
    setEditingBlog(blog.id);
  };

  const handleSaveBlog = () => {
    setBlogs((prev) =>
      prev.map((blog) => (blog.id === editingBlog ? { ...blog, ...blogForm } : blog))
    );
    setEditingBlog(null);
    setBlogForm({ title: "", content: "" });
  };

  const handleDeleteBlog = (id) => {
    setBlogs((prev) => prev.filter((blog) => blog.id !== id));
  };

  return (
    <div>
      <h2>Manage Blogs</h2>
      <div>
        <h3>{editingBlog ? "Edit Blog" : "Add Blog"}</h3>
        <input
          type="text"
          name="title"
          value={blogForm.title}
          onChange={handleChange}
          placeholder="Blog Title"
        />
        <textarea
          name="content"
          value={blogForm.content}
          onChange={handleChange}
          placeholder="Blog Content"
        />
        <button onClick={editingBlog ? handleSaveBlog : handleAddBlog}>
          {editingBlog ? "Save Changes" : "Add Blog"}
        </button>
      </div>

      <h3>Blog List</h3>
      <ul className="flex gap-3 flex-wrap">
        {blogs.map((blog) => (
          <li key={blog.id} className="bg-slate-100 p-4 rounded w-auto">
            <h4>{blog.title}</h4>
            <p>{blog.content}</p>
            <button className="mr-3" onClick={() => handleEditBlog(blog)}>Edit</button>
            <button onClick={() => handleDeleteBlog(blog.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ManageSocialLinks() {
  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSocialLinks((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveLinks = () => {
    // For now, we can just log the updated links to the console.
    console.log("Updated Social Links: ", socialLinks);
    // You can further implement saving to a backend or local storage.
  };

  return (
    <div>
      <h2>Update Social Media Links</h2>
      <div>
        <label>
          Facebook URL:
          <input
            type="text"
            name="facebook"
            value={socialLinks.facebook}
            onChange={handleChange}
            placeholder="Enter Facebook URL"
          />
        </label>
        <label>
          Twitter URL:
          <input
            type="text"
            name="twitter"
            value={socialLinks.twitter}
            onChange={handleChange}
            placeholder="Enter Twitter URL"
          />
        </label>
        <label>
          Instagram URL:
          <input
            type="text"
            name="instagram"
            value={socialLinks.instagram}
            onChange={handleChange}
            placeholder="Enter Instagram URL"
          />
        </label>
        <label>
          LinkedIn URL:
          <input
            type="text"
            name="linkedin"
            value={socialLinks.linkedin}
            onChange={handleChange}
            placeholder="Enter LinkedIn URL"
          />
        </label>
        <button onClick={handleSaveLinks}>Save Links</button>
      </div>
    </div>
  );
}
