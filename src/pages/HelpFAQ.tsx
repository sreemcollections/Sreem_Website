export default function HelpFAQ() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-playfair font-bold text-primary mb-4">Help & FAQ</h1>
        <p className="text-sm text-muted-foreground mb-8">Find answers to commonly asked questions about browsing our catalog</p>

        {/* Catalog-Only Notice */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold text-primary mb-2">Catalog Showcase</h3>
          <p className="text-foreground/90 leading-relaxed mb-4">
            Sreem is a digital catalog showcasing our exquisite collection of handcrafted sarees and jewelry. 
            Browse our curated collections, explore product details, and discover the artistry behind each piece. 
            For inquiries and purchases, please contact us directly @email.
          </p>

        </div>

        <div className="prose prose-sm max-w-none space-y-8">
          {/* Browsing & Navigation */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Browsing & Navigation</h2>
            
            <div className="space-y-4">
              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">How do I browse the collections?</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Navigate through our main sections - Sarees and Jewelry. Each section features filters to help you 
                  find specific styles, collections, and price ranges. On mobile, simply scroll through products and 
                  tap on any item to see detailed information.
                </p>
              </div>

              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">How do I view product images on mobile?</h3>
                <p className="text-foreground/90 leading-relaxed">
                  On product detail pages, swipe left or right on the main image to view different angles. You can also 
                  tap the thumbnail images below to jump to a specific view. When scrolling through product listings, 
                  cards automatically show preview overlays as they come into view.
                </p>
              </div>

              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">What are the jewelry collections available?</h3>
                <p className="text-foreground/90 leading-relaxed">
                  We offer two main jewelry collections: Panchaloham (sacred five-metal traditional jewelry) and 
                  Silver (sterling silver jewelry with intricate craftsmanship). Each collection showcases different 
                  styles including necklaces, earrings, bangles, and rings.
                </p>
              </div>

              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">How do filters work?</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Use the filter sidebar (or filter button on mobile) to refine products by price range, type, and 
                  collection. You can also sort products by featured items, price (low to high or high to low), and 
                  newest arrivals. Apply multiple filters to narrow down your search.
                </p>
              </div>
            </div>
          </section>

          {/* Products & Quality */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Products & Quality</h2>
            
            <div className="space-y-4">
              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">Are your products authentic and handcrafted?</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Yes, absolutely! All our sarees and jewelry are sourced directly from master artisans across India. 
                  Each piece is handcrafted using traditional techniques passed down through generations. Every item 
                  in our catalog represents genuine craftsmanship and cultural heritage.
                </p>
              </div>

              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">Why do colors look different on my screen?</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Product colors may vary slightly due to photographic lighting, screen settings, and display quality. 
                  We strive to represent colors as accurately as possible. Due to the handcrafted nature, natural variations 
                  in fabric dye and texture are expected and add to the uniqueness of each piece.
                </p>
              </div>

              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">What information is included for each product?</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Each product page displays detailed information including fabric/material type, weave style, dimensions, 
                  care instructions, pricing with GST details, and information about the artisan who crafted it. Product 
                  images show multiple angles to give you a comprehensive view.
                </p>
              </div>

              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">Are the prices inclusive of GST?</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Yes, all prices displayed on our catalog are inclusive of GST. We provide transparent pricing with 
                  a breakdown showing the base price and GST amount. GST invoices are available for all purchases.
                </p>
              </div>
            </div>
          </section>

          {/* Inquiries & Purchases */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Inquiries & Purchases</h2>
            
            <div className="space-y-4">
              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">How do I purchase a product I see in the catalog?</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Our website is currently a digital showcase. To purchase any product, please contact us directly via 
                  email or phone with the product name/ID you're interested in. We'll assist you with availability, 
                  customization options, pricing, and complete the transaction personally.
                </p>
              </div>

              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">Can I request more pictures or videos of a product?</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Absolutely! Contact us with the product details and we'll be happy to send additional photographs, 
                  videos, or specific angle shots to help you make an informed decision. We want you to see exactly 
                  what you're interested in.
                </p>
              </div>

              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">Do you offer customization services?</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Yes, we offer customization for select products including saree blouse stitching, jewelry modifications, 
                  and custom designs. Contact us with your specific requirements and we'll work with our artisans to bring 
                  your vision to life.
                </p>
              </div>

              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">How long does it take to respond to inquiries?</h3>
                <p className="text-foreground/90 leading-relaxed">
                  We typically respond to all inquiries within 24 hours during business days. For urgent requests, 
                  please call us directly. We're committed to providing personalized attention to every customer.
                </p>
              </div>
            </div>
          </section>

          {/* Still Have Questions? */}
          <section className="border-t pt-8 mt-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Still Have Questions?</h2>
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
              <p className="text-foreground/90 leading-relaxed mb-4">
                Can't find the answer you're looking for? We're here to help with any questions about our catalog, 
                products, or inquiries about purchases.
              </p>
              <div className="space-y-2">
                <p className="text-foreground/90"><strong>Email:</strong> hello@sreem.com</p>
                <p className="text-foreground/90 text-sm italic mt-3">We typically respond to inquiries within 24 hours</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
