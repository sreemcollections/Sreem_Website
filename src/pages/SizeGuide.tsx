export default function SizeGuide() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-playfair font-bold text-primary mb-4">Size Guide</h1>
        <p className="text-sm text-muted-foreground mb-8">Find your perfect fit for sarees and jewelry</p>

        <div className="prose prose-sm max-w-none space-y-8">
          {/* Saree Measurements */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Saree Measurements</h2>
            
            <div className="bg-muted/30 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Standard Saree Dimensions</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden">
                  <thead className="bg-primary/10">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Type</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Length</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Width</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Border Width</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm text-foreground/90">Standard Saree</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">5.5 - 6 meters</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">1.1 - 1.2 meters</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">2 - 4 inches</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm text-foreground/90">Petite Saree</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">4.5 - 5 meters</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">1.0 - 1.1 meters</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">2 - 3 inches</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-foreground/90">Plus Size Saree</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">6 - 6.5 meters</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">1.2 - 1.3 meters</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">3 - 5 inches</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm text-foreground/90">Half Saree/Lehenga</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">2.5 - 3 meters</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">Variable</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">Variable</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground italic mt-3">
                * All our sarees include an unstitched blouse piece (0.75 - 1 meter) unless specified otherwise
              </p>
            </div>
          </section>

          {/* Blouse Size Chart */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Blouse Size Chart</h2>
            
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">How to Measure for Blouse</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">📏 Measurements Needed:</h4>
                  <ul className="space-y-2 text-foreground/90">
                    <li><strong>Bust:</strong> Measure around the fullest part</li>
                    <li><strong>Waist:</strong> Measure around natural waistline</li>
                    <li><strong>Shoulder:</strong> From shoulder edge to shoulder edge (back)</li>
                    <li><strong>Sleeve Length:</strong> From shoulder to wrist</li>
                    <li><strong>Blouse Length:</strong> From shoulder to desired length</li>
                    <li><strong>Armhole:</strong> Around the armpit</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">💡 Measuring Tips:</h4>
                  <ul className="space-y-2 text-foreground/90">
                    <li>• Wear a well-fitted bra while measuring</li>
                    <li>• Stand straight with arms relaxed</li>
                    <li>• Use a fabric measuring tape</li>
                    <li>• Don't pull tape too tight or too loose</li>
                    <li>• Get someone to help for accuracy</li>
                    <li>• Measure twice to confirm</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">Standard Blouse Sizes</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden">
                  <thead className="bg-primary/10">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Size</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Bust (inches)</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Waist (inches)</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Shoulder (inches)</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Length (inches)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-foreground">XS</td>
                      <td className="px-4 py-3 text-sm text-foreground/90">30 - 32</td>
                      <td className="px-4 py-3 text-sm text-foreground/90">24 - 26</td>
                      <td className="px-4 py-3 text-sm text-foreground/90">13 - 14</td>
                      <td className="px-4 py-3 text-sm text-foreground/90">13 - 14</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 text-sm font-medium text-foreground">S</td>
                      <td className="px-4 py-3 text-sm text-foreground/90">32 - 34</td>
                      <td className="px-4 py-3 text-sm text-foreground/90">26 - 28</td>
                      <td className="px-4 py-3 text-sm text-foreground/90">14 - 15</td>
                      <td className="px-4 py-3 text-sm text-foreground/90">14 - 15</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-foreground">M</td>
                      <td className="px-4 py-3 text-sm text-foreground/90">34 - 36</td>
                      <td className="px-4 py-3 text-sm text-foreground/90">28 - 30</td>
                      <td className="px-4 py-3 text-sm text-foreground/90">15 - 16</td>
                      <td className="px-4 py-3 text-sm text-foreground/90">15 - 16</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 text-sm font-medium text-foreground">L</td>
                      <td className="px-4 py-3 text-sm text-foreground/90">36 - 38</td>
                      <td className="px-4 py-3 text-sm text-foreground/90">30 - 32</td>
                      <td className="px-4 py-3 text-sm text-foreground/90">16 - 17</td>
                      <td className="px-4 py-3 text-sm text-foreground/90">16 - 17</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-foreground">XL</td>
                      <td className="px-4 py-3 text-sm text-foreground/90">38 - 40</td>
                      <td className="px-4 py-3 text-sm text-foreground/90">32 - 34</td>
                      <td className="px-4 py-3 text-sm text-foreground/90">17 - 18</td>
                      <td className="px-4 py-3 text-sm text-foreground/90">17 - 18</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 text-sm font-medium text-foreground">XXL</td>
                      <td className="px-4 py-3 text-sm text-foreground/90">40 - 42</td>
                      <td className="px-4 py-3 text-sm text-foreground/90">34 - 36</td>
                      <td className="px-4 py-3 text-sm text-foreground/90">18 - 19</td>
                      <td className="px-4 py-3 text-sm text-foreground/90">18 - 19</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-foreground">3XL</td>
                      <td className="px-4 py-3 text-sm text-foreground/90">42 - 44</td>
                      <td className="px-4 py-3 text-sm text-foreground/90">36 - 38</td>
                      <td className="px-4 py-3 text-sm text-foreground/90">19 - 20</td>
                      <td className="px-4 py-3 text-sm text-foreground/90">19 - 20</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground italic mt-3">
                * For custom blouse stitching, we'll contact you for detailed measurements after order placement
              </p>
            </div>
          </section>

          {/* Jewelry Size Guide */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Jewelry Size Guide</h2>
            
            {/* Necklace Lengths */}
            <div className="bg-muted/30 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">💎 Necklace Lengths</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden">
                  <thead className="bg-primary/10">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Style</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Length</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-foreground">Choker</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">14 - 16 inches</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">Sits at base of neck, formal occasions</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-foreground">Princess/Short</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">16 - 18 inches</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">Most versatile, everyday wear</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-foreground">Matinee/Medium</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">20 - 24 inches</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">Falls above bust, casual & formal</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-foreground">Opera/Long</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">28 - 34 inches</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">Dramatic look, special events</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-foreground">Rope/Extra Long</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">36+ inches</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">Can be wrapped, versatile styling</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bangle Sizes */}
            <div className="bg-muted/30 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">💫 Bangle Size Chart</h3>
              
              <h4 className="font-semibold text-foreground mb-3">How to Measure Bangle Size:</h4>
              <ol className="list-decimal pl-6 space-y-2 text-foreground/90 mb-4">
                <li>Bring your thumb and little finger together</li>
                <li>Measure across your knuckles at the widest point</li>
                <li>This measurement is your bangle diameter</li>
              </ol>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden">
                  <thead className="bg-primary/10">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Size</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Diameter (inches)</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Diameter (cm)</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Circumference (inches)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-foreground">2.4 (XS)</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">2.4"</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">6.1 cm</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">7.5"</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-foreground">2.6 (S)</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">2.6"</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">6.6 cm</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">8"</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-foreground">2.8 (M)</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">2.8"</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">7.1 cm</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">8.75"</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-foreground">2.10 (L)</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">2.10"</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">7.6 cm</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">9.25"</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-foreground">2.12 (XL)</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">2.12"</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">8.1 cm</td>
                      <td className="px-6 py-4 text-sm text-foreground/90">9.75"</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Ring Sizes */}
            <div className="bg-muted/30 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">💍 Ring Size Chart</h3>
              
              <h4 className="font-semibold text-foreground mb-3">How to Measure Ring Size:</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="font-semibold text-foreground mb-2">Method 1: Using a Ring</p>
                  <ol className="list-decimal pl-6 space-y-1 text-sm text-foreground/90">
                    <li>Use a ring that fits well</li>
                    <li>Measure the inner diameter</li>
                    <li>Match with chart below</li>
                  </ol>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Method 2: Using String</p>
                  <ol className="list-decimal pl-6 space-y-1 text-sm text-foreground/90">
                    <li>Wrap string around finger</li>
                    <li>Mark where it overlaps</li>
                    <li>Measure length in mm</li>
                    <li>Match circumference in chart</li>
                  </ol>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden">
                  <thead className="bg-primary/10">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">US Size</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">India Size</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Diameter (mm)</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Circumference (mm)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr><td className="px-4 py-3 text-sm text-foreground/90">4</td><td className="px-4 py-3 text-sm text-foreground/90">8</td><td className="px-4 py-3 text-sm text-foreground/90">14.9</td><td className="px-4 py-3 text-sm text-foreground/90">46.8</td></tr>
                    <tr className="bg-gray-50"><td className="px-4 py-3 text-sm text-foreground/90">5</td><td className="px-4 py-3 text-sm text-foreground/90">10</td><td className="px-4 py-3 text-sm text-foreground/90">15.7</td><td className="px-4 py-3 text-sm text-foreground/90">49.3</td></tr>
                    <tr><td className="px-4 py-3 text-sm text-foreground/90">6</td><td className="px-4 py-3 text-sm text-foreground/90">12</td><td className="px-4 py-3 text-sm text-foreground/90">16.5</td><td className="px-4 py-3 text-sm text-foreground/90">51.9</td></tr>
                    <tr className="bg-gray-50"><td className="px-4 py-3 text-sm text-foreground/90">7</td><td className="px-4 py-3 text-sm text-foreground/90">14</td><td className="px-4 py-3 text-sm text-foreground/90">17.3</td><td className="px-4 py-3 text-sm text-foreground/90">54.4</td></tr>
                    <tr><td className="px-4 py-3 text-sm text-foreground/90">8</td><td className="px-4 py-3 text-sm text-foreground/90">16</td><td className="px-4 py-3 text-sm text-foreground/90">18.2</td><td className="px-4 py-3 text-sm text-foreground/90">57.2</td></tr>
                    <tr className="bg-gray-50"><td className="px-4 py-3 text-sm text-foreground/90">9</td><td className="px-4 py-3 text-sm text-foreground/90">18</td><td className="px-4 py-3 text-sm text-foreground/90">19.0</td><td className="px-4 py-3 text-sm text-foreground/90">59.7</td></tr>
                    <tr><td className="px-4 py-3 text-sm text-foreground/90">10</td><td className="px-4 py-3 text-sm text-foreground/90">20</td><td className="px-4 py-3 text-sm text-foreground/90">19.8</td><td className="px-4 py-3 text-sm text-foreground/90">62.2</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Earring Weight Guide */}
            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">👂 Earring Comfort Guide</h3>
              <ul className="space-y-2 text-foreground/90">
                <li><strong>Lightweight (Under 5g):</strong> Comfortable for all-day wear, ideal for sensitive ears</li>
                <li><strong>Medium (5-10g):</strong> Suitable for events and special occasions, 4-6 hours wear</li>
                <li><strong>Statement (10-15g):</strong> Best for photoshoots and short events, 2-3 hours wear</li>
                <li><strong>Heavy (15g+):</strong> Traditional temple jewelry, bridal wear, limited duration</li>
              </ul>
              <p className="text-sm text-muted-foreground italic mt-3">
                * Weight mentioned on each product page. Contact us for lighter alternatives.
              </p>
            </div>
          </section>

          {/* Need Help? */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Need Help with Sizing?</h2>
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
              <p className="text-foreground/90 leading-relaxed mb-4">
                Still confused about sizing? Our customer support team is here to help you find the perfect fit!
              </p>
              <div className="space-y-2">
                <p className="text-foreground/90"><strong>📧 Email:</strong> support@sreem.com</p>
                <p className="text-foreground/90"><strong>📞 Phone:</strong> +91-XXXX-XXXXXX</p>
                <p className="text-foreground/90"><strong>💬 WhatsApp:</strong> +91-XXXX-XXXXXX (Send your measurements for personalized assistance)</p>
                <p className="text-foreground/90"><strong>⏰ Hours:</strong> Monday-Saturday, 10:00 AM - 6:00 PM IST</p>
              </div>
              <div className="mt-4 pt-4 border-t border-primary/20">
                <p className="text-sm text-foreground/90">
                  <strong>💡 Pro Tip:</strong> When in doubt, size up for bangles and rings. It's easier to add padding than to resize smaller jewelry.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t pt-6 mt-8">
            <p className="text-sm text-muted-foreground italic">
              Size charts are general guidelines. Individual fit may vary based on body type and personal preference. 
              For custom sizing or alterations, please contact our customer support team. We offer free size exchanges 
              on unworn items within 7 days of delivery.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
