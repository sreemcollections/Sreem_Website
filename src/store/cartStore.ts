import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  slug: string;
}

interface CartState {
  items: CartItem[];
  isLoading: boolean;
  loadingItems: Set<string>;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
  setLoading: (loading: boolean) => void;
  setItemLoading: (itemId: string, loading: boolean) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isLoading: false,
      loadingItems: new Set(),
      
      addItem: (item) => set((state) => {
        const existingItem = state.items.find(i => i.id === item.id);
        if (existingItem) {
          return {
            items: state.items.map(i =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          };
        }
        return { items: [...state.items, { ...item, quantity: 1 }] };
      }),
      
      removeItem: (id) => set((state) => ({
        items: state.items.filter(item => item.id !== id),
      })),
      
      updateQuantity: (id, quantity) => set((state) => {
        if (quantity <= 0) {
          return { items: state.items.filter(item => item.id !== id) };
        }
        return {
          items: state.items.map(item =>
            item.id === id ? { ...item, quantity } : item
          ),
        };
      }),
      
      clearCart: () => set({ items: [] }),
      
      getTotalPrice: () => {
        const { items } = get();
        return items.reduce((total, item) => total + (item.price * item.quantity), 0);
      },
      
      getTotalItems: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.quantity, 0);
      },
      
      setLoading: (loading) => set({ isLoading: loading }),
      
      setItemLoading: (itemId, loading) => set((state) => {
        const newLoadingItems = new Set(state.loadingItems);
        if (loading) {
          newLoadingItems.add(itemId);
        } else {
          newLoadingItems.delete(itemId);
        }
        return { loadingItems: newLoadingItems };
      }),
    }),
    {
      name: 'mudhra-cart',
    }
  )
);