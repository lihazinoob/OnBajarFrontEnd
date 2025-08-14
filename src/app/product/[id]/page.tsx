"use client";
import ImageSlider from "@/components/ImageSlider";
import React from "react";
import { use } from "react";

import QuantitySelector from "@/components/QuantitySelector";
import PrimaryActionButton from "@/components/PrimaryActionButton";
import ProductBadges from "@/components/ProductBadges";
import SizeSelector from "@/components/SizeSelector";
import ColorSelector from "@/components/ColorSelector";
import ProductPrice from "@/components/ProductPrice";
import ProductInfo from "@/components/ProductInfo";
import StockIndicator from "@/components/StockIndicator";
import ProductAvailability from "@/components/ProductAvailability";
import ProductDetailsSkeleton from "@/components/ProductDetailsSkeleton";
import ProductNotFound from "@/components/ProductNotFound";
import { useCart } from "@/context/CartContext";

interface ProductSize {
  size: string;
  quantity: number;
}

interface Product {
  id: number;
  created_at: string;
  product_name: string;
  product_description: string;
  product_price: number;
  product_sale_percentage: number;
  is_featured_product: boolean;
  is_new_product: boolean;
  product_quantity: number;
  product_colors: string[];
  product_category_id: number;
  is_sold_out: boolean;
  product_image: string[];
  product_size: ProductSize[];
}

export default function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { addToCart, openCartDrawer } = useCart();
  const { id } = use(params);
  const [product, setProduct] = React.useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);
  const [quantity, setQuantity] = React.useState(1);
  const [selectedColor, setSelectedColor] = React.useState<string | null>(null);
  const [selectedSize, setSelectedSize] = React.useState<string | null>(null);

  const fetchProduct = React.useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(
        `https://raw-node-js.onrender.com/api/fetchProductById/${id}`,
        { cache: "no-store" }
      );
      if (!res.ok) throw new Error("Failed to fetch product details");

      const data = await res.json();
      setProduct(data.productInformation);
      setSelectedImage(data.productInformation.product_image[0]);
    } catch (error) {
      console.error(error);
      setError(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [id]);

  React.useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const selectImage = (e: React.MouseEvent<HTMLImageElement>) => {
    setSelectedImage(e.currentTarget.src);
  };

  if (loading) {
    return <ProductDetailsSkeleton />;
  }

  if (error || !product) {
    return <ProductNotFound message={error || "Product not found"} onRetry={fetchProduct} />;
  }

  const handleAddToCart = () => {
    // Check if color selection is required
    const hasColors = product.product_colors && product.product_colors.length > 0;
    
    if (hasColors && !selectedColor) {
      alert("Please select a color before adding to cart.");
      return;
    }
    
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }

    addToCart({
      id,
      name: product.product_name,
      price: product.product_price,
      image: product.product_image[0],
      quantity,
      color: selectedColor || "Default",
      size: selectedSize,
    });
    openCartDrawer();
  };

  const handleBuyNow = () => {
    const hasColors = product.product_colors && product.product_colors.length > 0;
    
    if (hasColors && !selectedColor) {
      alert("Please select a color before buying.");
      return;
    }
    
    if (!selectedSize) {
      alert("Please select a size before buying.");
      return;
    }
    
    // Add buy now logic here
    console.log("Buy now clicked");
  };

  const getMaxQuantityForSize = () => {
    if (!selectedSize) return 0;
    const sizeInfo = product.product_size.find(s => s.size === selectedSize);
    return sizeInfo ? sizeInfo.quantity : 0;
  };

  return (
    <div className="font-lufga mt-8">
      {/* Mobile Layout */}
      <div className="md:hidden">
        {/* Product Header */}
        <div className="px-6 space-y-4">
          <ProductInfo 
            name={product.product_name} 
            description={product.product_description}
            className="text-center"
          />
          <div className="flex justify-center">
            <StockIndicator totalQuantity={product.product_quantity} />
          </div>
        </div>

        {/* Product Images with Badges */}
        <div className="mt-8 relative">
          <ProductBadges
            isNewProduct={product.is_new_product}
            isFeaturedProduct={product.is_featured_product}
            isSoldOut={product.is_sold_out}
            salePercentage={product.product_sale_percentage}
          />
          <ImageSlider
            images={product.product_image}
            name={product.product_name}
          />
        </div>

        {/* Price Section */}
        <div className="px-6 py-6">
          <ProductPrice 
            price={product.product_price}
            salePercentage={product.product_sale_percentage}
          />
        </div>

        <div className="px-4">
          <hr className="border-t border-gray-300" />
        </div>

        {/* Color Selection */}
        {product.product_colors && product.product_colors.length > 0 && (
          <div className="px-6 py-6">
            <ColorSelector
              colors={product.product_colors}
              selectedColor={selectedColor}
              onColorSelect={setSelectedColor}
            />
          </div>
        )}

        <div className="px-4">
          <hr className="border-t border-gray-300" />
        </div>

        {/* Size Selection */}
        <div className="px-6 py-6">
          <SizeSelector
            sizes={product.product_size}
            selectedSize={selectedSize}
            onSizeSelect={setSelectedSize}
          />
          <div className="mt-4">
            <ProductAvailability
              sizes={product.product_size}
              selectedSize={selectedSize}
            />
          </div>
        </div>

        {/* Quantity and Action Buttons */}
        <div className="px-6 space-y-4">
          <div className="flex gap-4">
            <QuantitySelector
              maxQuantity={getMaxQuantityForSize()}
              value={quantity}
              onChange={setQuantity}
            />
            <PrimaryActionButton
              type="addToCart"
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
              disabled={product.is_sold_out || getMaxQuantityForSize() === 0}
              className="flex-1"
            />
          </div>
          <PrimaryActionButton
            type="buyNow"
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            disabled={product.is_sold_out || getMaxQuantityForSize() === 0}
            className="w-full"
          />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="flex md:px-10 xl:px-32 gap-8 xl:gap-16 mb-8">
          {/* Image Section */}
          <div className="flex gap-8 xl:gap-16">
            {/* Thumbnail Images */}
            <div className="flex flex-col gap-4 w-20 xl:w-28 overflow-y-auto max-h-[90vh] pr-1">
              {product.product_image.map((image: string, index: number) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product Image ${index + 1}`}
                  className="w-full h-20 xl:h-28 object-cover rounded-md cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={selectImage}
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="relative flex-1 max-w-[650px] h-[400px] xl:h-[650px]">
              <ProductBadges
                isNewProduct={product.is_new_product}
                isFeaturedProduct={product.is_featured_product}
                isSoldOut={product.is_sold_out}
                salePercentage={product.product_sale_percentage}
              />
              <img
                src={selectedImage}
                alt="Selected Product"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Product Details Section */}
          <div className="flex-1 space-y-6">
            <ProductInfo 
              name={product.product_name} 
              description={product.product_description}
            />

            <StockIndicator totalQuantity={product.product_quantity} />

            <ProductPrice 
              price={product.product_price}
              salePercentage={product.product_sale_percentage}
            />

            <hr className="border-t border-gray-300" />

            {/* Color Selection */}
            {product.product_colors && product.product_colors.length > 0 && (
              <>
                <ColorSelector
                  colors={product.product_colors}
                  selectedColor={selectedColor}
                  onColorSelect={setSelectedColor}
                />
                <hr className="border-t border-gray-300" />
              </>
            )}

            {/* Size Selection */}
            <SizeSelector
              sizes={product.product_size}
              selectedSize={selectedSize}
              onSizeSelect={setSelectedSize}
            />

            <ProductAvailability
              sizes={product.product_size}
              selectedSize={selectedSize}
            />

            {/* Quantity Selector */}
            <QuantitySelector
              maxQuantity={getMaxQuantityForSize()}
              value={quantity}
              onChange={setQuantity}
            />

            {/* Action Buttons */}
            <div className="flex gap-4">
              <PrimaryActionButton
                type="addToCart"
                onAddToCart={handleAddToCart}
                onBuyNow={handleBuyNow}
                disabled={product.is_sold_out || getMaxQuantityForSize() === 0}
                className="flex-1"
              />
              <PrimaryActionButton
                type="buyNow"
                onAddToCart={handleAddToCart}
                onBuyNow={handleBuyNow}
                disabled={product.is_sold_out || getMaxQuantityForSize() === 0}
                className="flex-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
