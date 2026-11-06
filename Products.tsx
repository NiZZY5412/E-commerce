import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import type { Product } from "../types";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";


function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  // 🔍 Filter & Sort Logic
  const filteredProducts = products
    .filter((product: Product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        categoryFilter === "All" ||
        product.category.toLowerCase() === categoryFilter.toLowerCase();
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="products-page">
      <h2 className="page-title">Our Products</h2>

      {/* Filters Section */}
      <div className="filters-container">
        {/* Search Box */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search product..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && setSearchTerm(e.currentTarget.value)}
          />
          <FiSearch className="search-icon" size={20} />
        </div>

        {/* Category Filter */}
        <select
          className="filter-select"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Clothes">Clothes</option>
          <option value="Utensils">Utensils</option>
          <option value="Shoes">Shoes</option>
          <option value="Bags">Bags</option>
        </select>

        {/* Sort Filter */}
        <select
          className="filter-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Sort by: Name (A–Z)</option>
          <option value="price-low">Price (Low → High)</option>
          <option value="price-high">Price (High → Low)</option>
        </select>
      </div>

      {/* Products Display */}
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => console.log(`Added ${product.name} to cart`)}
            />
          ))
        ) : (
          <p className="no-results">No products found.</p>
        )}
      </div>
    </div>
  );
}

export default Products;
