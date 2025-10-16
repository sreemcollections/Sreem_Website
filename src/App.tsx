import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/components/layouts/MainLayout";
import { AccountLayout } from "@/components/layouts/AccountLayout";
import { ProtectedRoute } from "@/components/shared/ProtectedRoute";
import Home from "./pages/Home";
import Sarees from "./pages/Sarees";
import Jewelry from "./pages/Jewelry";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Designers from "./pages/Designers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import GSTPolicy from "./pages/GSTPolicy";
import HelpFAQ from "./pages/HelpFAQ";
import ReturnsExchange from "./pages/ReturnsExchange";
import CareGuide from "./pages/CareGuide";
import SizeGuide from "./pages/SizeGuide";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Layout Routes */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="sarees" element={<Sarees />} />
            <Route path="jewelry" element={<Jewelry />} />
            <Route path="product/:slug" element={<ProductDetail />} />
            <Route path="designers" element={<Designers />} />
            <Route path="artisans" element={<div>Artisans (Phase 9)</div>} />
            <Route path="help" element={<HelpFAQ />} />
            <Route path="returns" element={<ReturnsExchange />} />
            <Route path="care-guide" element={<CareGuide />} />
            <Route path="size-guide" element={<SizeGuide />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<TermsOfService />} />
            <Route path="gst" element={<GSTPolicy />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
          </Route>

          {/* Account Layout Routes (Protected) */}
          <Route path="/account" element={<AccountLayout />}>
            <Route path="profile" element={
              <ProtectedRoute>
                <div>Profile (Phase 3)</div>
              </ProtectedRoute>
            } />
            <Route path="orders" element={
              <ProtectedRoute>
                <div>Orders (Phase 6)</div>
              </ProtectedRoute>
            } />
            <Route path="addresses" element={
              <ProtectedRoute>
                <div>Addresses (Phase 4)</div>
              </ProtectedRoute>
            } />
          </Route>

          {/* Standalone Protected Routes */}
          <Route path="/checkout" element={
            <ProtectedRoute>
              <div>Checkout (Phase 4)</div>
            </ProtectedRoute>
          } />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
