export default function ReturnsExchange() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-playfair font-bold text-primary mb-4">Returns & Exchange Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Learn about our product return and exchange guidelines for future purchases.</p>

        {/* Catalog-Only Notice */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold text-primary mb-2">📢 Catalog Showcase</h3>
          <p className="text-foreground/90 leading-relaxed mb-4">
            Currently, our website is a showcase of our exquisite handcrafted sarees and jewelry collection. 
            Online ordering is not yet available. The policy below will apply when we launch our e-commerce platform. 
            For current purchases, please contact us directly to discuss return/exchange terms.
          </p>
          <div className="space-y-1 text-sm">
            <p className="text-foreground/90"><strong>📧 Email:</strong> support@sreem.com</p>
            <p className="text-foreground/90"><strong>📞 Phone:</strong> +91-XXXX-XXXXXX</p>
            <p className="text-foreground/90"><strong>💬 WhatsApp:</strong> +91-XXXX-XXXXXX</p>
            <p className="text-foreground/90"><strong>⏰ Hours:</strong> Monday-Saturday, 10:00 AM - 6:00 PM IST</p>
          </div>
        </div>

        <div className="prose prose-sm max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">1. Overview</h2>
            <p className="text-foreground/90 leading-relaxed">
              At Sreem, customer satisfaction is our priority. We accept returns and exchanges within <strong>7 days</strong> of delivery 
              for eligible products. Please review our policy carefully to ensure a smooth return/exchange experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">2. Eligibility Criteria</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">2.1 Products Eligible for Return/Exchange</h3>
            <div className="bg-green-50 border-l-4 border-primary p-4 my-3">
              <p className="text-foreground/90 font-semibold mb-2">✅ Eligible:</p>
              <ul className="list-disc pl-6 space-y-1 text-foreground/90">
                <li>Sarees (unstitched blouse piece)</li>
                <li>Ready-to-wear sarees (unused and unworn)</li>
                <li>Jewelry in sealed packaging</li>
                <li>Accessories in original condition</li>
                <li>Products with manufacturing defects</li>
                <li>Incorrect items delivered</li>
                <li>Damaged products received</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">2.2 Non-Returnable Products</h3>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 my-3">
              <p className="text-foreground/90 font-semibold mb-2">❌ Not Eligible:</p>
              <ul className="list-disc pl-6 space-y-1 text-foreground/90">
                <li>Customized or personalized items</li>
                <li>Stitched blouses or altered sarees</li>
                <li>Worn, washed, or used products</li>
                <li>Products with removed tags or labels</li>
                <li>Jewelry with broken seals</li>
                <li>Discounted or clearance sale items (unless defective)</li>
                <li>Products purchased during special promotional events (unless specified)</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">2.3 Conditions for Acceptance</h3>
            <p className="text-foreground/90 leading-relaxed mb-2">To be eligible for return or exchange, products must:</p>
            <ul className="list-disc pl-6 space-y-1 text-foreground/90">
              <li>Be in original, unused, and unworn condition</li>
              <li>Have all original tags, labels, and packaging intact</li>
              <li>Include the original invoice/bill</li>
              <li>Be returned within 7 days of delivery</li>
              <li>Have no signs of wear, alterations, or damage</li>
              <li>Include all accessories and free gifts (if any)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">3. How to Initiate a Return/Exchange</h2>
            
            <div className="bg-muted/30 p-5 rounded-lg mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-3">Step-by-Step Process:</h3>
              <ol className="list-decimal pl-6 space-y-3 text-foreground/90">
                <li>
                  <strong>Contact Us:</strong> Email us at returns@sreem.com or call +91-XXXX-XXXXXX within 7 days of delivery. 
                  Provide your order number, reason for return/exchange, and product details.
                </li>
                <li>
                  <strong>Request Approval:</strong> Our team will review your request and respond within 24-48 hours. 
                  You'll receive a Return Authorization Number (RAN) and return instructions.
                </li>
                <li>
                  <strong>Pack the Product:</strong> Securely pack the product in its original packaging with all tags, 
                  labels, invoice, and accessories. Include the RAN in the package.
                </li>
                <li>
                  <strong>Ship the Return:</strong> We'll arrange a pickup from your address (for eligible returns) or 
                  provide courier details. You may also drop off at our store (if applicable).
                </li>
                <li>
                  <strong>Quality Check:</strong> Once we receive your return, our team will inspect the product (within 3-5 business days) 
                  to ensure it meets return criteria.
                </li>
                <li>
                  <strong>Refund/Exchange:</strong> Upon successful quality check, your refund or exchange will be processed.
                </li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">4. Return Shipping</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">4.1 Return Shipping Costs</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>
                <strong>Defective/Incorrect Items:</strong> We'll arrange free reverse pickup at no cost to you.
              </li>
              <li>
                <strong>Change of Mind:</strong> Customer is responsible for return shipping costs. 
                We'll deduct ₹200-₹500 from your refund to cover reverse shipping.
              </li>
              <li>
                <strong>Exchange:</strong> First exchange is free; subsequent exchanges may incur shipping charges.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">4.2 Return Packaging</h3>
            <p className="text-foreground/90 leading-relaxed">
              Please ensure products are packed securely to avoid damage during transit. We recommend using bubble wrap 
              for jewelry and protective covering for sarees. We're not responsible for products damaged during return shipment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">5. Refund Policy</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">5.1 Refund Processing Time</h3>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-3">
              <ul className="space-y-2 text-foreground/90">
                <li><strong>Quality Check:</strong> 3-5 business days after receiving the product</li>
                <li><strong>Refund Initiation:</strong> Within 2 business days of approval</li>
                <li><strong>Credit to Account:</strong> 5-7 business days (varies by bank/payment method)</li>
                <li><strong>Total Timeline:</strong> 10-15 business days from return pickup</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">5.2 Refund Method</h3>
            <p className="text-foreground/90 leading-relaxed mb-2">Refunds will be processed to the original payment method:</p>
            <ul className="list-disc pl-6 space-y-1 text-foreground/90">
              <li><strong>Credit/Debit Card:</strong> 5-7 business days</li>
              <li><strong>UPI/Net Banking:</strong> 3-5 business days</li>
              <li><strong>Digital Wallets:</strong> 2-3 business days</li>
              <li><strong>Cash on Delivery:</strong> Bank transfer (provide account details)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">5.3 Refund Amount</h3>
            <p className="text-foreground/90 leading-relaxed">
              The refund amount includes the product price and applicable taxes. <strong>Original shipping charges are non-refundable</strong> 
              unless the return is due to our error (defective/incorrect item). Return shipping costs may be deducted for non-defective returns.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">5.4 Store Credit Option</h3>
            <p className="text-foreground/90 leading-relaxed">
              You may opt for store credit instead of a refund. Store credit can be used for future purchases and never expires. 
              Store credit refunds are processed instantly upon quality check approval.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">6. Exchange Policy</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">6.1 Exchange Options</h3>
            <p className="text-foreground/90 leading-relaxed mb-2">We offer exchanges for:</p>
            <ul className="list-disc pl-6 space-y-1 text-foreground/90">
              <li>Different size (if available)</li>
              <li>Different color/design of the same product</li>
              <li>Same value product from our collection</li>
              <li>Higher value product (pay the difference)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">6.2 Exchange Process</h3>
            <p className="text-foreground/90 leading-relaxed">
              Follow the same return process. Mention "Exchange" and specify your preference. The exchange product will be 
              shipped once we receive and approve your returned item. Subject to product availability.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">6.3 Price Difference</h3>
            <ul className="list-disc pl-6 space-y-1 text-foreground/90">
              <li><strong>Lower Value:</strong> Difference will be refunded as store credit</li>
              <li><strong>Higher Value:</strong> Pay the difference via online payment</li>
              <li><strong>Equal Value:</strong> Direct exchange at no additional cost</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">7. Damaged or Defective Products</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">7.1 Reporting Damage</h3>
            <p className="text-foreground/90 leading-relaxed mb-2">
              If you receive a damaged or defective product:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-foreground/90">
              <li>Do not accept the delivery if outer packaging is visibly damaged</li>
              <li>Record an unboxing video for your protection</li>
              <li>Report damage within 48 hours of delivery with photos/video</li>
              <li>Email evidence to support@sreem.com with your order number</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">7.2 Resolution</h3>
            <p className="text-foreground/90 leading-relaxed">
              For damaged or defective products, we'll offer:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-foreground/90">
              <li>Free replacement (if available)</li>
              <li>Full refund including shipping charges</li>
              <li>Store credit with 10% bonus value</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">8. Wrong Item Delivered</h2>
            <p className="text-foreground/90 leading-relaxed">
              If you receive an incorrect item, contact us immediately at support@sreem.com with order details and product photos. 
              We'll arrange free pickup and send the correct item at no additional cost. You may also choose a full refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">9. Order Cancellation</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">9.1 Before Shipment</h3>
            <p className="text-foreground/90 leading-relaxed">
              You can cancel your order within 2 hours of placement at no charge. After 2 hours, cancellation may incur 
              a processing fee of ₹100-₹200. Email cancellation@sreem.com with your order number.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">9.2 After Shipment</h3>
            <p className="text-foreground/90 leading-relaxed">
              Once shipped, the order cannot be cancelled. You may refuse delivery and initiate a return once you receive the product.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">9.3 Cancellation Refund</h3>
            <p className="text-foreground/90 leading-relaxed">
              Cancellation refunds are processed within 3-5 business days to the original payment method.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">10. Important Notes</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-3">
              <ul className="space-y-2 text-foreground/90">
                <li>⚠️ Quality check photos will be taken upon receiving returns for verification</li>
                <li>⚠️ We reserve the right to reject returns that don't meet our policy criteria</li>
                <li>⚠️ Partial returns are not accepted for combo/set products</li>
                <li>⚠️ Returns after 7 days will not be accepted under any circumstances</li>
                <li>⚠️ Free gifts/accessories must be returned with the main product</li>
                <li>⚠️ COD orders may require identity verification for refunds</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">11. Contact Returns Team</h2>
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
              <p className="text-foreground/90 leading-relaxed mb-4">
                Have questions about returns or exchanges? Our dedicated returns team is here to assist you.
              </p>
              <div className="space-y-2">
                <p className="text-foreground/90"><strong>📧 Email:</strong> returns@sreem.com</p>
                <p className="text-foreground/90"><strong>📞 Phone:</strong> +91-XXXX-XXXXXX</p>
                <p className="text-foreground/90"><strong>💬 WhatsApp:</strong> +91-XXXX-XXXXXX</p>
                <p className="text-foreground/90"><strong>⏰ Hours:</strong> Monday-Saturday, 10:00 AM - 6:00 PM IST</p>
              </div>
            </div>
          </section>

          <section className="border-t pt-6 mt-8">
            <p className="text-sm text-muted-foreground italic">
              This Returns & Exchange Policy is subject to change without prior notice. Please refer to the latest version 
              on our website. All returns and exchanges are subject to final approval by Sreem management.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
