import pastriesImage from "@/assets/pastries.jpg";
import breadImage from "@/assets/bread.jpg";
import cakesImage from "@/assets/cakes.jpg";

const MenuSection = () => {
  const menuItems = [
    {
      category: "Fresh Pastries",
      image: pastriesImage,
      items: [
        { name: "Butter Croissant", price: "RM3.50" },
        { name: "Pain au Chocolat", price: "RM4.25" },
        { name: "Almond Danish", price: "RM4.75" },
        { name: "Fruit Tart", price: "RM5.50" },
      ]
    },
    {
      category: "Artisan Breads",
      image: breadImage,
      items: [
        { name: "Sourdough Loaf", price: "RM6.00" },
        { name: "Baguette", price: "RM3.25" },
        { name: "Whole Wheat", price: "RM5.75" },
        { name: "Multigrain", price: "RM6.50" },
      ]
    },
    {
      category: "Custom Cakes",
      image: cakesImage,
      items: [
        { name: "Wedding Cake", price: "From RM150" },
        { name: "Birthday Cake", price: "From RM45" },
        { name: "Cupcakes (dozen)", price: "RM36" },
        { name: "Cheesecake", price: "RM28" },
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-bakery-chocolate mb-8">
            Our Menu
          </h2>
          <div className="w-24 h-1 bg-bakery-gold mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our daily selection of fresh-baked goods, made with love and the finest ingredients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((category, index) => (
            <div key={index} className="product-card group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.category}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bakery-chocolate/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-display font-semibold text-white">
                  {category.category}
                </h3>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-center border-b border-muted pb-2">
                      <span className="font-medium text-foreground">{item.name}</span>
                      <span className="text-bakery-gold font-semibold">{item.price}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-6 bg-bakery-gold hover:bg-bakery-gold/90 text-white py-3 rounded-lg font-medium transition-colors">
                  Order {category.category}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            All prices subject to change. Special dietary requirements? Just ask!
          </p>
          <button className="btn-hero">
            View Full Menu & Order Online
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;