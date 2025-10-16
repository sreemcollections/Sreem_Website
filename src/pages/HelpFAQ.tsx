export default function HelpFAQ() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-playfair font-bold text-primary mb-4">Help & FAQ</h1>
        <p className="text-sm text-muted-foreground mb-8">Find answers to commonly asked questions</p>

        {/* Catalog-Only Notice */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold text-primary mb-2">📢 Catalog Showcase</h3>
          <p className="text-foreground/90 leading-relaxed mb-4">
            Currently, our website is a showcase of our exquisite handcrafted sarees and jewelry collection. 
            Online ordering is not yet available. Please contact us directly to inquire about products and make purchases.
          </p>
          <div className="space-y-1 text-sm">
            <p className="text-foreground/90"><strong>📧 Email:</strong> support@sreem.com</p>
            <p className="text-foreground/90"><strong>📞 Phone:</strong> +91-XXXX-XXXXXX</p>
            <p className="text-foreground/90"><strong>💬 WhatsApp:</strong> +91-XXXX-XXXXXX</p>
            <p className="text-foreground/90"><strong>⏰ Hours:</strong> Monday-Saturday, 10:00 AM - 6:00 PM IST</p>
          </div>
        </div>

        <div className="prose prose-sm max-w-none space-y-8">
          {/* Ordering & Payment */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Ordering & Payment</h2>
            
            <div className="space-y-4">
              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">How do I place an order?</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Browse our collection, select your desired product, choose size/specifications, add to cart, 
                  and proceed to checkout. You'll need to provide shipping details and payment information to complete your order.
                </p>
              </div>

              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">What payment methods do you accept?</h3>
                <p className="text-foreground/90 leading-relaxed mb-2">We accept multiple payment options:</p>
                <ul className="list-disc pl-6 space-y-1 text-foreground/90">
                  <li>Credit/Debit Cards (Visa, Mastercard, RuPay, American Express)</li>
                  <li>UPI (Google Pay, PhonePe, Paytm, etc.)</li>
                  <li>Net Banking (all major banks)</li>
                  <li>Digital Wallets (Paytm, PhonePe, Amazon Pay)</li>
                  <li>Cash on Delivery (COD) - available for select locations</li>
                </ul>
              </div>

              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">Is it safe to use my credit card on your website?</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Yes, absolutely! All payment transactions are processed through secure, PCI-DSS compliant payment gateways. 
                  We use 256-bit SSL encryption to protect your financial information. We never store your complete card details on our servers.
                </p>
              </div>

              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">Can I modify or cancel my order?</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Orders can be modified or cancelled within 2 hours of placement. After this time, if the order hasn't been 
                  shipped, please contact our customer support immediately at support@sreem.com or call +91-XXXX-XXXXXX.
                </p>
              </div>

              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">Will I receive an invoice for my purchase?</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Yes, a GST-compliant tax invoice will be sent to your registered email address within 24 hours of order 
                  confirmation. A physical copy will also be included with your shipment.
                </p>
              </div>
            </div>
          </section>

          {/* Shipping & Delivery */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Shipping & Delivery</h2>
            
            <div className="space-y-4">
              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">How long does delivery take?</h3>
                <p className="text-foreground/90 leading-relaxed mb-2">Delivery timeframes vary by location:</p>
                <ul className="list-disc pl-6 space-y-1 text-foreground/90">
                  <li><strong>Metro Cities:</strong> 5-7 business days</li>
                  <li><strong>Tier 2 Cities:</strong> 7-10 business days</li>
                  <li><strong>Remote Areas:</strong> 10-15 business days</li>
                  <li><strong>International:</strong> 10-21 business days (contact us for availability)</li>
                </ul>
              </div>

              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">What are the shipping charges?</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Shipping charges are calculated based on your delivery location and order value. 
                  <strong> Free shipping is available on orders above ₹10,000.</strong> Exact charges will be displayed at checkout.
                </p>
              </div>

              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">How can I track my order?</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Once your order is shipped, you'll receive a tracking link via email and SMS. You can also track your 
                  order by logging into your account and visiting the "My Orders" section.
                </p>
              </div>

              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">Do you ship internationally?</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Yes, we ship to select international locations. International shipping charges, customs duties, and 
                  delivery times vary by country. Please contact our customer support for international orders.
                </p>
              </div>

              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">What if I'm not available to receive my order?</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Our delivery partner will attempt delivery 2-3 times. If you're unavailable, they'll leave a notification. 
                  You can also provide alternate delivery instructions or reschedule delivery by contacting the courier directly.
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
                  Each piece is handcrafted using traditional techniques passed down through generations. We provide 
                  authenticity certificates with premium products.
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
                <h3 className="text-lg font-semibold text-foreground mb-2">Do you provide product customization?</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Yes, we offer customization services for select products including saree blouse stitching and jewelry 
                  modifications. Please contact our customer support with your requirements for availability and pricing.
                </p>
              </div>

              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">How do I verify the purity of jewelry?</h3>
                <p className="text-foreground/90 leading-relaxed">
                  All gold and silver jewelry comes with BIS hallmark certification. You'll receive a certificate of 
                  authenticity detailing the metal purity, weight, and artisan details. We stand behind the quality of 
                  every piece we sell.
                </p>
              </div>
            </div>
          </section>

          {/* Account & Privacy */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Account & Privacy</h2>
            
            <div className="space-y-4">
              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">Do I need an account to place an order?</h3>
                <p className="text-foreground/90 leading-relaxed">
                  You can checkout as a guest, but creating an account offers benefits like order tracking, wishlist, 
                  faster checkout, exclusive offers, and early access to new collections.
                </p>
              </div>

              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">How do I reset my password?</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Click on "Forgot Password" on the login page, enter your registered email, and you'll receive a 
                  password reset link. Follow the instructions in the email to create a new password.
                </p>
              </div>

              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">Is my personal information safe?</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Yes, we take data security seriously. All personal information is encrypted and stored securely. 
                  We never share or sell your information to third parties. Read our Privacy Policy for complete details.
                </p>
              </div>

              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">How do I update my account information?</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Log into your account, go to "Profile Settings," and update your personal information, addresses, 
                  or contact details. Changes are saved automatically.
                </p>
              </div>
            </div>
          </section>

          {/* Offers & Discounts */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Offers & Discounts</h2>
            
            <div className="space-y-4">
              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">How do I apply a coupon code?</h3>
                <p className="text-foreground/90 leading-relaxed">
                  During checkout, you'll find a "Apply Coupon" field. Enter your coupon code and click "Apply." 
                  The discount will be reflected in your order total. Only one coupon can be used per order.
                </p>
              </div>

              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">Can I combine multiple offers?</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Unless specifically mentioned, only one promotional offer or coupon code can be used per order. 
                  The system will automatically apply the best available discount.
                </p>
              </div>

              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">How do I get notified about sales and new arrivals?</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Subscribe to our newsletter at the bottom of our homepage. You'll receive updates about new collections, 
                  exclusive offers, festivals sales, and artisan stories directly in your inbox.
                </p>
              </div>
            </div>
          </section>

          {/* Still Have Questions? */}
          <section className="border-t pt-8 mt-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Still Have Questions?</h2>
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
              <p className="text-foreground/90 leading-relaxed mb-4">
                Can't find the answer you're looking for? Our customer support team is here to help!
              </p>
              <div className="space-y-2">
                <p className="text-foreground/90"><strong>📧 Email:</strong> support@sreem.com</p>
                <p className="text-foreground/90"><strong>📞 Phone:</strong> +91-XXXX-XXXXXX</p>
                <p className="text-foreground/90"><strong>💬 WhatsApp:</strong> +91-XXXX-XXXXXX</p>
                <p className="text-foreground/90"><strong>⏰ Hours:</strong> Monday-Saturday, 10:00 AM - 6:00 PM IST</p>
                <p className="text-foreground/90 text-sm italic mt-3">We typically respond within 24 hours</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
