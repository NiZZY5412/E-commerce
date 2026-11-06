import { ShoppingCart } from "lucide-react";
import type { Product } from "../types";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="product-card">
      <div className="card-header">
        <div className="image-wrapper">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                "https://via.placeholder.com/300x300?text=No+Image";
            }}
          />
        </div>
      </div>

      <div className="card-content">
        <div className="title-section">
          <h3 className="product-name">{product.name}</h3>
          <span
            className={`badge ${
              product.stock > 10 ? "badge-default" : "badge-warning"
            }`}
          >
            {product.stock > 10 ? "In Stock" : `Only ${product.stock} left`}
          </span>
        </div>

        <p className="product-description">{product.description}</p>

        <div className="price-category">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <span className="product-category">{product.category}</span>
        </div>
      </div>

      <div className="card-footer">
        <button
          className="add-to-cart-btn"
          onClick={() => onAddToCart(product)}
          disabled={product.stock === 0}
        >
          <ShoppingCart className="cart-icon" size={18} />
          {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
