export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export const getCart = (): CartItem[] => {
  if (typeof window === "undefined") return [];
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

export const addToCart = (item: CartItem): CartItem[] => {
  const cart = getCart();
  const existingItem = cart.find((cartItem) => cartItem.id === item.id);

  if (existingItem) {
    existingItem.quantity += item.quantity;
  } else {
    cart.push(item);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  window.dispatchEvent(new Event("cartUpdated"));
  return cart;
};

export const updateCartItemQuantity = (id: number, quantity: number): CartItem[] => {
  const cart = getCart();
  const updatedCart = cart.map((item) => (item.id === id ? { ...item, quantity } : item));

  if (quantity <= 0) {
    return removeFromCart(id);
  }

  localStorage.setItem("cart", JSON.stringify(updatedCart));
  window.dispatchEvent(new Event("cartUpdated"));
  return updatedCart;
};

export const removeFromCart = (id: number): CartItem[] => {
  const cart = getCart();
  const updatedCart = cart.filter((item) => item.id !== id);

  localStorage.setItem("cart", JSON.stringify(updatedCart));
  window.dispatchEvent(new Event("cartUpdated"));
  return updatedCart;
};

export const getCartItemCount = (): number => {
  return getCart().reduce((total, item) => total + item.quantity, 0);
};

export const clearCart = (): void => {
  localStorage.removeItem("cart");
  window.dispatchEvent(new Event("cartUpdated"));
};
