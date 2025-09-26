export default function Jewelry() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-accent/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Handcrafted Jewelry
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our exquisite collection of traditional and contemporary jewelry pieces
          </p>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <p className="text-muted-foreground">Jewelry collection coming soon...</p>
        </div>
      </div>
    </div>
  );
}