export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-playfair font-bold text-primary mb-4">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-8">Last Updated: October 16, 2025</p>

        {/* Catalog-Only Notice */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold text-primary mb-2">📢 Catalog Showcase</h3>
          <p className="text-foreground/90 leading-relaxed mb-4">
            Currently, our website serves as a product showcase only. Online transactions are not yet enabled. 
            These terms apply to website usage and will extend to e-commerce transactions when that functionality launches. 
            For current purchases, please contact us directly.
          </p>
          <div className="space-y-1 text-sm">
            <p className="text-foreground/90"><strong>📧 Email:</strong> support@sreem.com</p>
            <p className="text-foreground/90"><strong>📞 Phone:</strong> +91-XXXX-XXXXXX</p>
            <p className="text-foreground/90"><strong>💬 WhatsApp:</strong> +91-XXXX-XXXXXX</p>
          </div>
        </div>

        <div className="prose prose-sm max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">1. Acceptance of Terms</h2>
            <p className="text-foreground/90 leading-relaxed">
              Welcome to Sreem. By accessing or using our website and services, you agree to be bound by these Terms of Service 
              and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from 
              using or accessing this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">2. Company Information</h2>
            <div className="bg-muted/30 p-4 rounded-lg">
              <p className="text-foreground/90"><strong>Business Name:</strong> Sreem - Authentic Craftsmanship</p>
              <p className="text-foreground/90"><strong>GSTIN:</strong> [Your GST Number]</p>
              <p className="text-foreground/90"><strong>Registered Address:</strong> [Your Business Address]</p>
              <p className="text-foreground/90"><strong>Email:</strong> support@sreem.com</p>
              <p className="text-foreground/90"><strong>Phone:</strong> +91-XXXX-XXXXXX</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">3. Product Information and Availability</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">3.1 Product Descriptions</h3>
            <p className="text-foreground/90 leading-relaxed">
              We strive to provide accurate descriptions, images, and pricing for all handcrafted sarees and jewelry. However, 
              due to the handmade nature of our products, slight variations in color, design, and dimensions may occur. 
              We reserve the right to limit quantities and discontinue products without prior notice.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">3.2 Pricing</h3>
            <p className="text-foreground/90 leading-relaxed">
              All prices displayed on our website are for informational purposes and are listed in Indian Rupees (INR) inclusive 
              of applicable GST. For actual purchases, please contact us directly. Prices are subject to change without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">4. Intellectual Property Rights</h2>
            <p className="text-foreground/90 leading-relaxed">
              All content on this website, including text, graphics, logos, images, designs, and software, is the property 
              of Sreem and protected by Indian and international copyright laws. Unauthorized use, reproduction, or distribution 
              is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">5. User Accounts</h2>
            <p className="text-foreground/90 leading-relaxed mb-2">
              When creating an account, you must:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-foreground/90">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your password</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">6. Prohibited Uses</h2>
            <p className="text-foreground/90 leading-relaxed mb-2">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-1 text-foreground/90">
              <li>Use the website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Transmit viruses, malware, or harmful code</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Engage in fraudulent activities or payment disputes</li>
              <li>Scrape or extract data from the website without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">7. Limitation of Liability</h2>
            <p className="text-foreground/90 leading-relaxed">
              To the maximum extent permitted by law, Sreem shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages arising from your use of our website or products. Our total liability 
              shall not exceed the amount paid by you for the specific product giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">8. Indemnification</h2>
            <p className="text-foreground/90 leading-relaxed">
              You agree to indemnify and hold Sreem harmless from any claims, damages, losses, liabilities, and expenses 
              arising from your violation of these Terms or your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">9. Governing Law and Jurisdiction</h2>
            <p className="text-foreground/90 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising 
              from these Terms or your use of our services shall be subject to the exclusive jurisdiction of the courts 
              in [Your City], India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">10. Dispute Resolution</h2>
            <p className="text-foreground/90 leading-relaxed">
              In the event of any dispute, we encourage you to contact our customer support first. If the dispute cannot 
              be resolved amicably, it shall be resolved through arbitration in accordance with the Arbitration and 
              Conciliation Act, 1996.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">11. Modifications to Terms</h2>
            <p className="text-foreground/90 leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. 
              Your continued use of the website after changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">12. Contact Information</h2>
            <p className="text-foreground/90 leading-relaxed mb-2">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-muted/30 p-4 rounded-lg">
              <p className="text-foreground/90"><strong>Customer Support Email:</strong> support@sreem.com</p>
              <p className="text-foreground/90"><strong>Phone:</strong> +91-XXXX-XXXXXX</p>
              <p className="text-foreground/90"><strong>Business Hours:</strong> Monday-Saturday, 10:00 AM - 6:00 PM IST</p>
            </div>
          </section>

          <section className="border-t pt-6 mt-8">
            <p className="text-sm text-muted-foreground italic">
              These Terms of Service comply with the Consumer Protection Act, 2019, Consumer Protection (E-Commerce) Rules, 2020, 
              and the Information Technology Act, 2000.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
