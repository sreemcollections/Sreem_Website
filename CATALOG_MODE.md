# Catalog Mode - No E-Commerce Yet

## Changes Needed

This website is currently a **product showcase/catalog ONLY**. Online ordering is not yet available.

### Files to Modify:

1. **src/components/shared/Navbar.tsx**
   - Remove `ShoppingCart` icon import
   - Remove `useCartStore` import and `totalItems` variable
   - Remove the cart button (lines ~107-120)

2. **src/App.tsx**
   - Remove `import Cart from "./pages/Cart"`
   - Remove cart route: `<Route path="cart" element={<Cart />} />`
   - Remove checkout route: `<Route path="/checkout" element={...} />`
   - Remove orders route from account section

3. **Add Banner to All Pages**
   Add this notice to Home.tsx, Sarees.tsx, Jewelry.tsx:
   ```tsx
   <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary p-6 rounded-lg mb-8">
     <h3 className="text-xl font-semibold text-primary mb-2">📢 Catalog Showcase</h3>
     <p className="text-foreground/90 leading-relaxed">
       Currently, our website is a showcase of our exquisite handcrafted sarees and jewelry collection. 
       Online ordering is not yet available. Please contact us directly to inquire about products and make purchases.
     </p>
     <div className="mt-4">
       <p className="text-foreground/90"><strong>📧 Email:</strong> support@sreem.com</p>
       <p className="text-foreground/90"><strong>📞 Phone:</strong> +91-XXXX-XXXXXX</p>
       <p className="text-foreground/90"><strong>💬 WhatsApp:</strong> +91-XXXX-XXXXXX</p>
     </div>
   </div>
   ```

4. **Update Footer Links**
   - Keep: Help, Returns, Care Guide, Size Guide, Privacy, Terms, GST
   - These pages should explain catalog-only status

5. **Update Policy Pages**
   Add catalog notice to top of:
   - HelpFAQ.tsx
   - ReturnsExchange.tsx  
   - TermsOfService.tsx
   - GSTPolicy.tsx

## Contact Information for Purchases

Users should contact directly:
- Email: support@sreem.com
- Phone: +91-XXXX-XXXXXX
- WhatsApp: +91-XXXX-XXXXXX
- Hours: Monday-Saturday, 10:00 AM - 6:00 PM IST
