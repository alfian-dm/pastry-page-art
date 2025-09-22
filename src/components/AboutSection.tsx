const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-bakery-chocolate mb-8">
            Our Story
          </h2>
          
          <div className="w-24 h-1 bg-bakery-gold mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 1985 by master baker Marie Laurent, Golden Crust Bakery began as a dream to bring authentic French baking traditions to our beloved neighborhood.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Every morning before dawn, our skilled bakers hand-craft each loaf, roll every croissant, and carefully prepare our signature pastries using time-honored techniques and the finest ingredients.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                From our family to yours, we're committed to creating moments of joy with every bite, whether it's your daily bread or a celebration cake for life's special occasions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-warm">
              <h3 className="text-2xl font-display font-semibold text-bakery-chocolate mb-4">
                What Makes Us Special
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-bakery-gold rounded-full flex-shrink-0 mt-1 mr-4"></div>
                  <span className="text-muted-foreground">Baked fresh daily at 4 AM</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-bakery-gold rounded-full flex-shrink-0 mt-1 mr-4"></div>
                  <span className="text-muted-foreground">Organic, locally-sourced ingredients</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-bakery-gold rounded-full flex-shrink-0 mt-1 mr-4"></div>
                  <span className="text-muted-foreground">Traditional French techniques</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-bakery-gold rounded-full flex-shrink-0 mt-1 mr-4"></div>
                  <span className="text-muted-foreground">Custom cakes for special occasions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;