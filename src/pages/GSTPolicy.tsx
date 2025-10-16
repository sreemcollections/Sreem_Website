export default function GSTPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-playfair font-bold text-primary mb-4">GST Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last Updated: October 16, 2025</p>

        {/* Catalog-Only Notice */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold text-primary mb-2">📢 Informational Purpose</h3>
          <p className="text-foreground/90 leading-relaxed mb-4">
            This page provides information about GST (Goods and Services Tax) applicable to our products. 
            While online ordering is not yet available, this information helps you understand the pricing structure 
            when you make purchases by contacting us directly.
          </p>
          <div className="space-y-1 text-sm">
            <p className="text-foreground/90"><strong>📧 Email:</strong> support@sreem.com</p>
            <p className="text-foreground/90"><strong>📞 Phone:</strong> +91-XXXX-XXXXXX</p>
            <p className="text-foreground/90"><strong>💬 WhatsApp:</strong> +91-XXXX-XXXXXX</p>
          </div>
        </div>

        <div className="prose prose-sm max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">1. Introduction</h2>
            <p className="text-foreground/90 leading-relaxed">
              Sreem is a GST-registered business entity operating in compliance with the Goods and Services Tax (GST) 
              laws of India. This policy explains how GST is applicable to your purchases and our compliance procedures.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">2. GST Registration Details</h2>
            <div className="bg-muted/30 p-4 rounded-lg">
              <p className="text-foreground/90"><strong>Legal Business Name:</strong> Sreem - Authentic Craftsmanship</p>
              <p className="text-foreground/90"><strong>GSTIN:</strong> [Your 15-digit GST Number]</p>
              <p className="text-foreground/90"><strong>Registered Address:</strong> [Your Business Address]</p>
              <p className="text-foreground/90"><strong>State:</strong> [Your State]</p>
              <p className="text-foreground/90"><strong>State Code:</strong> [Your State Code]</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">3. GST Rates on Products</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">3.1 Sarees</h3>
            <div className="bg-muted/30 p-4 rounded-lg mb-4">
              <p className="text-foreground/90 mb-2"><strong>GST Rate: 5%</strong></p>
              <p className="text-foreground/90 text-sm">
                Handloom and handcrafted sarees attract a GST rate of 5% as per HSN Code 5208/5407/5408 
                (subject to classification and specifications).
              </p>
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">3.2 Jewelry</h3>
            <div className="bg-muted/30 p-4 rounded-lg mb-4">
              <p className="text-foreground/90 mb-2"><strong>Gold/Silver Jewelry: 3%</strong></p>
              <p className="text-foreground/90 text-sm mb-3">
                Gold and silver jewelry attracts GST at 3% as per HSN Code 7113/7114.
              </p>
              <p className="text-foreground/90 mb-2"><strong>Imitation Jewelry: 12%</strong></p>
              <p className="text-foreground/90 text-sm">
                Imitation jewelry attracts GST at 12% as per HSN Code 7117.
              </p>
            </div>

            <p className="text-sm text-muted-foreground italic">
              *GST rates are subject to change as per government notifications. Current applicable rates will be displayed 
              at checkout.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">4. Price Display and GST Inclusion</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">4.1 Inclusive Pricing</h3>
            <p className="text-foreground/90 leading-relaxed">
              All prices displayed on our website are <strong>inclusive of applicable GST</strong> unless explicitly 
              mentioned otherwise. The GST component is separately shown on your invoice for transparency.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">4.2 Price Breakdown</h3>
            <p className="text-foreground/90 leading-relaxed">
              Your invoice will clearly show:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-foreground/90">
              <li>Base Price of the product</li>
              <li>Applicable GST rate and amount</li>
              <li>Total amount payable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">5. GST Invoicing</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">5.1 Tax Invoice</h3>
            <p className="text-foreground/90 leading-relaxed mb-2">
              Every purchase will be accompanied by a GST-compliant tax invoice containing:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-foreground/90">
              <li>Invoice number and date</li>
              <li>Supplier details (Sreem's GSTIN and address)</li>
              <li>Buyer details (your name, address, and GSTIN if provided)</li>
              <li>Product description and HSN/SAC codes</li>
              <li>Quantity and unit price</li>
              <li>Taxable value</li>
              <li>GST rate and amount (CGST/SGST or IGST)</li>
              <li>Total invoice value</li>
              <li>Place of supply</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">5.2 Digital Invoice</h3>
            <p className="text-foreground/90 leading-relaxed">
              GST invoices will be sent to your registered email address in PDF format. Physical invoices will be 
              included with the shipped product.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">6. Intra-State vs Inter-State Supply</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">6.1 Intra-State Supply</h3>
            <p className="text-foreground/90 leading-relaxed">
              When the delivery address is in the same state as our registered business location, GST will be charged 
              as CGST (Central GST) + SGST (State GST).
            </p>
            <div className="bg-blue-50 border-l-4 border-primary p-4 my-3">
              <p className="text-sm text-foreground/90">
                <strong>Example:</strong> For a ₹10,000 saree with 5% GST (intra-state):<br/>
                CGST: 2.5% = ₹250<br/>
                SGST: 2.5% = ₹250<br/>
                Total GST: ₹500
              </p>
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">6.2 Inter-State Supply</h3>
            <p className="text-foreground/90 leading-relaxed">
              When the delivery address is in a different state from our registered business location, GST will be 
              charged as IGST (Integrated GST).
            </p>
            <div className="bg-blue-50 border-l-4 border-primary p-4 my-3">
              <p className="text-sm text-foreground/90">
                <strong>Example:</strong> For a ₹10,000 saree with 5% GST (inter-state):<br/>
                IGST: 5% = ₹500<br/>
                Total GST: ₹500
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">7. Input Tax Credit (ITC)</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">7.1 For Business Buyers</h3>
            <p className="text-foreground/90 leading-relaxed">
              If you are a GST-registered business purchasing for commercial purposes, you can claim Input Tax Credit (ITC) 
              on the GST paid. Please ensure you provide your GSTIN during checkout to receive a proper business invoice.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">7.2 GSTIN Required</h3>
            <p className="text-foreground/90 leading-relaxed">
              To claim ITC, your invoice must contain your valid GSTIN. Please add your GSTIN in your account settings 
              or provide it during checkout.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">8. Returns, Refunds, and GST</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">8.1 Return Process</h3>
            <p className="text-foreground/90 leading-relaxed">
              When you return a product, the refund amount will include the proportionate GST paid on that product.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">8.2 Credit Notes</h3>
            <p className="text-foreground/90 leading-relaxed">
              For returned products, we will issue a GST-compliant credit note within 30 days. This credit note can be 
              used for ITC reversal by business buyers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">9. Reverse Charge Mechanism (RCM)</h2>
            <p className="text-foreground/90 leading-relaxed">
              Reverse Charge Mechanism does not apply to our products as we are selling directly to end consumers and 
              registered businesses. GST is charged by us as the supplier.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">10. Composition Scheme</h2>
            <p className="text-foreground/90 leading-relaxed">
              Our business does not operate under the Composition Scheme. We are registered under the regular GST scheme 
              and issue proper tax invoices with full GST details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">11. GST Compliance</h2>
            <p className="text-foreground/90 leading-relaxed mb-2">
              We maintain strict compliance with GST regulations:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-foreground/90">
              <li>Timely filing of GSTR-1, GSTR-3B, and annual returns</li>
              <li>Proper maintenance of books of accounts</li>
              <li>Regular reconciliation of input and output GST</li>
              <li>Compliance with e-invoicing requirements (if applicable)</li>
              <li>Adherence to anti-profiteering provisions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">12. HSN/SAC Codes Used</h2>
            <div className="bg-muted/30 p-4 rounded-lg space-y-2">
              <p className="text-foreground/90"><strong>Silk Sarees:</strong> HSN Code 5007 (5% GST)</p>
              <p className="text-foreground/90"><strong>Cotton Sarees:</strong> HSN Code 5208 (5% GST)</p>
              <p className="text-foreground/90"><strong>Synthetic Sarees:</strong> HSN Code 5407/5408 (5% GST)</p>
              <p className="text-foreground/90"><strong>Gold Jewelry:</strong> HSN Code 7113 (3% GST)</p>
              <p className="text-foreground/90"><strong>Silver Jewelry:</strong> HSN Code 7114 (3% GST)</p>
              <p className="text-foreground/90"><strong>Imitation Jewelry:</strong> HSN Code 7117 (12% GST)</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">13. Changes in GST Rates</h2>
            <p className="text-foreground/90 leading-relaxed">
              GST rates are determined by the Government of India and may change from time to time. In case of any rate 
              changes announced by the GST Council, the new rates will be applicable immediately and will be reflected 
              in your invoice. We will make reasonable efforts to notify customers of significant rate changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">14. GST on Shipping Charges</h2>
            <p className="text-foreground/90 leading-relaxed">
              Shipping and handling charges, if applicable, will attract GST at 18% as per the applicable service tax 
              category. This will be clearly shown on your invoice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">15. Contact for GST Queries</h2>
            <p className="text-foreground/90 leading-relaxed mb-2">
              For any GST-related queries, invoice corrections, or compliance questions, please contact:
            </p>
            <div className="bg-muted/30 p-4 rounded-lg">
              <p className="text-foreground/90"><strong>Accounts Department</strong></p>
              <p className="text-foreground/90">Email: accounts@sreem.com</p>
              <p className="text-foreground/90">Phone: +91-XXXX-XXXXXX</p>
              <p className="text-foreground/90">Business Hours: Monday-Saturday, 10:00 AM - 6:00 PM IST</p>
            </div>
          </section>

          <section className="border-t pt-6 mt-8">
            <p className="text-sm text-muted-foreground italic">
              This GST Policy is in accordance with the Central Goods and Services Tax Act, 2017, and the respective 
              State GST Acts. We reserve the right to modify this policy in compliance with changes in GST laws and regulations.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
