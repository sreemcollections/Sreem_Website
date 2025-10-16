export default function CareGuide() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-playfair font-bold text-primary mb-4">Care Guide</h1>
        <p className="text-sm text-muted-foreground mb-8">Preserve the beauty and longevity of your handcrafted treasures</p>

        <div className="prose prose-sm max-w-none space-y-8">
          {/* Saree Care */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Saree Care Instructions</h2>
            
            {/* Silk Sarees */}
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">🌟 Silk Sarees (Banarasi, Kanjivaram, Patola)</h3>
              
              <h4 className="text-lg font-semibold text-foreground mt-4 mb-2">Washing</h4>
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                <li><strong>Dry Clean Only:</strong> Always dry clean silk sarees with a professional cleaner experienced in handling delicate fabrics</li>
                <li><strong>Avoid Water:</strong> Never wash silk sarees in water as it can damage the fabric and zari work</li>
                <li><strong>Spot Cleaning:</strong> For minor stains, gently dab with a clean, dry cloth. Avoid rubbing</li>
                <li><strong>Frequency:</strong> Dry clean only when necessary, not after every wear</li>
              </ul>

              <h4 className="text-lg font-semibold text-foreground mt-4 mb-2">Storage</h4>
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                <li><strong>Fold Carefully:</strong> Fold along different lines each time to prevent permanent creases</li>
                <li><strong>Muslin Wrapping:</strong> Wrap in unstarched muslin or cotton cloth, never plastic</li>
                <li><strong>Air Circulation:</strong> Store in a cool, dry place with good ventilation</li>
                <li><strong>Naphthalene Balls:</strong> Use to prevent insect damage, but don't let them touch the fabric directly</li>
                <li><strong>Refold Monthly:</strong> Take out and refold along different lines every month</li>
                <li><strong>Avoid Hangers:</strong> Don't hang silk sarees as they can lose shape</li>
              </ul>

              <h4 className="text-lg font-semibold text-foreground mt-4 mb-2">Ironing</h4>
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                <li><strong>Low Heat:</strong> Use the lowest heat setting on your iron</li>
                <li><strong>Inside Out:</strong> Always iron on the reverse side</li>
                <li><strong>Cotton Cloth:</strong> Place a thin cotton cloth between the iron and saree</li>
                <li><strong>Steam Carefully:</strong> Use steam sparingly; excess moisture can damage silk</li>
                <li><strong>Zari Work:</strong> Never iron directly on zari/embroidery work</li>
              </ul>
            </div>

            {/* Cotton Sarees */}
            <div className="bg-muted/30 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">🌿 Cotton Sarees (Handloom, Khadi, Chanderi)</h3>
              
              <h4 className="text-lg font-semibold text-foreground mt-4 mb-2">Washing</h4>
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                <li><strong>Hand Wash:</strong> Prefer hand washing in cold or lukewarm water</li>
                <li><strong>Mild Detergent:</strong> Use gentle, pH-neutral detergent without bleach</li>
                <li><strong>Separate Colors:</strong> Wash dark and light colors separately, especially for the first few washes</li>
                <li><strong>Gentle Handling:</strong> Don't wring or twist; gently squeeze out excess water</li>
                <li><strong>First Wash:</strong> Add a teaspoon of salt to prevent color bleeding</li>
                <li><strong>Machine Wash:</strong> If necessary, use gentle cycle with cold water in a mesh bag</li>
              </ul>

              <h4 className="text-lg font-semibold text-foreground mt-4 mb-2">Drying</h4>
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                <li><strong>Shade Dry:</strong> Always dry in shade to prevent color fading</li>
                <li><strong>Avoid Direct Sunlight:</strong> Sun exposure can fade colors and weaken fibers</li>
                <li><strong>Proper Spread:</strong> Spread evenly on a clothesline or drying rack</li>
                <li><strong>Avoid Dryer:</strong> Never use a tumble dryer</li>
              </ul>

              <h4 className="text-lg font-semibold text-foreground mt-4 mb-2">Storage</h4>
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                <li><strong>Clean Before Storing:</strong> Always wash before long-term storage</li>
                <li><strong>Breathable Fabric:</strong> Store in cotton or muslin bags</li>
                <li><strong>Neem Leaves:</strong> Place dried neem leaves to prevent insects</li>
                <li><strong>Avoid Moisture:</strong> Store in a dry place to prevent mildew</li>
              </ul>
            </div>

            {/* Georgette & Chiffon */}
            <div className="bg-muted/30 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">✨ Georgette & Chiffon Sarees</h3>
              
              <h4 className="text-lg font-semibold text-foreground mt-4 mb-2">Washing</h4>
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                <li><strong>Dry Clean Recommended:</strong> Especially for embellished pieces</li>
                <li><strong>Hand Wash Option:</strong> If hand washing, use cold water and mild detergent</li>
                <li><strong>Gentle Swirl:</strong> Gently swirl in water; don't scrub or wring</li>
                <li><strong>Quick Wash:</strong> Don't soak for more than 5-10 minutes</li>
              </ul>

              <h4 className="text-lg font-semibold text-foreground mt-4 mb-2">Drying & Ironing</h4>
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                <li><strong>Drip Dry:</strong> Hang on a padded hanger to drip dry</li>
                <li><strong>Low Heat Iron:</strong> Iron on low heat while slightly damp</li>
                <li><strong>Steam Method:</strong> Steaming is ideal for removing wrinkles</li>
              </ul>
            </div>
          </section>

          {/* Jewelry Care */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Jewelry Care Instructions</h2>
            
            {/* Gold Jewelry */}
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-secondary p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">👑 Gold Jewelry</h3>
              
              <h4 className="text-lg font-semibold text-foreground mt-4 mb-2">Daily Care</h4>
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                <li><strong>Last On, First Off:</strong> Wear jewelry last when dressing and remove first</li>
                <li><strong>Avoid Chemicals:</strong> Remove before using perfume, hairspray, lotion, or cleaning products</li>
                <li><strong>Remove Before:</strong> Swimming, bathing, exercising, or sleeping</li>
                <li><strong>Wipe After Use:</strong> Gently wipe with soft cloth after each wear</li>
              </ul>

              <h4 className="text-lg font-semibold text-foreground mt-4 mb-2">Cleaning</h4>
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                <li><strong>Regular Cleaning:</strong> Clean every 2-3 months for daily wear pieces</li>
                <li><strong>Mild Solution:</strong> Use warm water with mild dish soap</li>
                <li><strong>Soft Brush:</strong> Gently brush with a soft toothbrush to remove dirt</li>
                <li><strong>Rinse & Dry:</strong> Rinse thoroughly and pat dry with soft, lint-free cloth</li>
                <li><strong>Professional Cleaning:</strong> Get professionally cleaned once a year</li>
                <li><strong>Avoid Harsh Cleaners:</strong> Never use bleach, chlorine, or abrasive cleaners</li>
              </ul>

              <h4 className="text-lg font-semibold text-foreground mt-4 mb-2">Storage</h4>
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                <li><strong>Separate Compartments:</strong> Store each piece separately to avoid scratches</li>
                <li><strong>Soft Pouches:</strong> Use velvet or silk pouches</li>
                <li><strong>Anti-Tarnish Strips:</strong> Place anti-tarnish strips in jewelry box</li>
                <li><strong>Avoid Humidity:</strong> Store in a cool, dry place</li>
                <li><strong>Silica Gel Packets:</strong> Add to jewelry box to absorb moisture</li>
              </ul>
            </div>

            {/* Silver Jewelry */}
            <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">⚪ Silver Jewelry</h3>
              
              <h4 className="text-lg font-semibold text-foreground mt-4 mb-2">Preventing Tarnish</h4>
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                <li><strong>Wear Regularly:</strong> Regular wear actually helps prevent tarnish</li>
                <li><strong>Remove Before:</strong> Bathing, swimming, or any water activities</li>
                <li><strong>Avoid Sulfur:</strong> Keep away from rubber, latex, and wool (contain sulfur)</li>
                <li><strong>Proper Storage:</strong> Store in airtight bags or anti-tarnish pouches</li>
              </ul>

              <h4 className="text-lg font-semibold text-foreground mt-4 mb-2">Cleaning Tarnished Silver</h4>
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                <li><strong>Silver Polish:</strong> Use quality silver polish or cleaning cloth</li>
                <li><strong>Baking Soda Method:</strong> Mix baking soda with water to form paste, gently rub, rinse, and dry</li>
                <li><strong>Professional Cleaning:</strong> For heavily tarnished or intricate pieces</li>
                <li><strong>Avoid Toothpaste:</strong> Despite popular belief, it's too abrasive</li>
              </ul>
            </div>

            {/* Temple Jewelry & Kundan */}
            <div className="bg-red-50 border-l-4 border-primary p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">🕉️ Temple Jewelry & Kundan Work</h3>
              
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                <li><strong>No Water Contact:</strong> Never wash or immerse in water</li>
                <li><strong>Dry Cloth Only:</strong> Wipe gently with soft, dry cloth after each use</li>
                <li><strong>Avoid Chemicals:</strong> Extremely sensitive to perfumes and cosmetics</li>
                <li><strong>Gentle Handling:</strong> Handle with extra care as settings can be delicate</li>
                <li><strong>Professional Repair:</strong> Only get repaired by specialized craftsmen</li>
                <li><strong>Storage:</strong> Store in original box with soft lining</li>
              </ul>
            </div>

            {/* Pearl Jewelry */}
            <div className="bg-pink-50 border-l-4 border-pink-400 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">🦪 Pearl Jewelry</h3>
              
              <h4 className="text-lg font-semibold text-foreground mt-4 mb-2">Special Care for Pearls</h4>
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                <li><strong>Last On, First Off:</strong> Wear after applying makeup/perfume; remove before skincare</li>
                <li><strong>Wipe After Each Wear:</strong> Use damp soft cloth to remove oils and acids</li>
                <li><strong>No Ultrasonic Cleaners:</strong> Can damage pearl surface</li>
                <li><strong>Restring Regularly:</strong> Restring pearl necklaces every 1-2 years</li>
                <li><strong>Wear Often:</strong> Pearls benefit from natural oils in your skin</li>
                <li><strong>Flat Storage:</strong> Store pearl necklaces flat to prevent stretching</li>
                <li><strong>Breathable Storage:</strong> Don't store in airtight containers</li>
              </ul>
            </div>
          </section>

          {/* General Tips */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">General Care Tips</h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">📋 Do's and Don'ts</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">✅ DO:</h4>
                  <ul className="space-y-1 text-sm text-foreground/90">
                    <li>• Read care labels carefully</li>
                    <li>• Test cleaning methods on small areas first</li>
                    <li>• Store items clean and dry</li>
                    <li>• Use proper storage materials</li>
                    <li>• Check items periodically</li>
                    <li>• Seek professional help when needed</li>
                    <li>• Handle delicate items with clean hands</li>
                    <li>• Air out items before storage</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">❌ DON'T:</h4>
                  <ul className="space-y-1 text-sm text-foreground/90">
                    <li>• Use harsh chemicals or bleach</li>
                    <li>• Store in plastic bags long-term</li>
                    <li>• Expose to direct sunlight</li>
                    <li>• Ignore minor damage</li>
                    <li>• Use high heat settings</li>
                    <li>• Store damp or dirty items</li>
                    <li>• Mix different metals together</li>
                    <li>• Attempt DIY repairs on valuable pieces</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Emergency Care */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Emergency Care</h2>
            
            <div className="space-y-4">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">🚨 Stain on Saree?</h3>
                <p className="text-foreground/90">
                  Blot immediately with a clean cloth. Don't rub. For silk and delicate fabrics, take to professional 
                  cleaner immediately. For cotton, pre-treat with mild soap before washing.
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">🚨 Jewelry Tangled?</h3>
                <p className="text-foreground/90">
                  Place on flat surface, use two pins/needles to gently work out tangles. Never force or pull aggressively. 
                  Apply baby powder to lubricate if needed.
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">🚨 Stone Loose or Missing?</h3>
                <p className="text-foreground/90">
                  Stop wearing immediately. Keep loose stones safe. Contact us or a professional jeweler for repair. 
                  Don't use glue or attempt DIY fixes.
                </p>
              </div>
            </div>
          </section>

          {/* Professional Services */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Professional Services</h2>
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
              <p className="text-foreground/90 leading-relaxed mb-4">
                Need expert help? We offer professional care services for products purchased from us:
              </p>
              <ul className="space-y-2 text-foreground/90">
                <li>✨ <strong>Saree Cleaning & Restoration</strong> - Partner dry cleaners specializing in handloom fabrics</li>
                <li>✨ <strong>Jewelry Cleaning & Polishing</strong> - Professional jeweler services</li>
                <li>✨ <strong>Repair Services</strong> - Zari work repair, stone replacement, thread work restoration</li>
                <li>✨ <strong>Blouse Stitching & Alterations</strong> - Expert tailoring services</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-primary/20">
                <p className="text-foreground/90"><strong>📧 Contact:</strong> care@sreem.com</p>
                <p className="text-foreground/90"><strong>📞 Phone:</strong> +91-XXXX-XXXXXX</p>
              </div>
            </div>
          </section>

          <section className="border-t pt-6 mt-8">
            <p className="text-sm text-muted-foreground italic">
              These care instructions are general guidelines. Always check product-specific care labels. For rare or extremely 
              valuable pieces, we recommend professional conservation services. Proper care ensures your handcrafted treasures 
              remain beautiful for generations.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
