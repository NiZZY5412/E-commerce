import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ShoppingBag, Utensils, Package } from "lucide-react";
import { Button } from "../components/Button";
import { Card, CardContent } from "../components/Card";
import type { Product } from "../types"; // ✅ type-only import

interface HomePageProps {
  featuredProducts?: Product[];
  onAddToCart?: (product: Product) => void;
}

const Home: React.FC<HomePageProps> = ({
  featuredProducts = [],
  onAddToCart = () => {},
}) => {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Clothes",
      icon: ShoppingBag,
      description: "Latest fashion trends",
      colorClass: "category-blue",
    },
    {
      name: "Utensils",
      icon: Utensils,
      description: "Quality kitchenware",
      colorClass: "category-green",
    },
    {
      name: "Bags",
      icon: Package,
      description: "Stylish accessories",
      colorClass: "category-purple",
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Welcome to ShopHub</h1>
          <p>
            Discover amazing products for your lifestyle — quality clothes, premium utensils, and
            stylish bags all in one place.
          </p>
          <Button onClick={() => navigate("/products")}>
            Shop Now <ArrowRight size={18} style={{ marginLeft: "8px" }} />
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2>Shop by Category</h2>
        <div className="categories-grid">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.name}
                className="category-card"
                onClick={() => navigate("/products")}
              >
                <CardContent>
                  <div className={`category-icon ${category.colorClass}`}>
                    <Icon size={28} />
                  </div>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-section">
        <div className="featured-header">
          <h2>Featured Products</h2>
          <Button onClick={() => navigate("/products")}>
            View All <ArrowRight size={16} style={{ marginLeft: "6px" }} />
          </Button>
        </div>
        <div className="featured-grid">
          {featuredProducts.length > 0 ? (
            featuredProducts.map((product: Product) => (
              <Card key={product.id} className="product-card">
                <CardContent>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <h4>{product.name}</h4>
                  <p>${product.price}</p>
                  <Button onClick={() => onAddToCart(product)}>Add to Cart</Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <p>No featured products available.</p>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Shopping?</h2>
          <p>Join thousands of happy customers and find exactly what you need.</p>
          <Button onClick={() => navigate("/register")}>Create Account</Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
