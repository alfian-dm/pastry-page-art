import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "The croissants here are absolutely divine! They remind me of my trip to Paris. Golden Crust has become my family's go-to bakery for all occasions.",
      rating: 5,
      location: "Local Resident"
    },
    {
      name: "Michael Chen",
      text: "Best sourdough in town, hands down. The staff is incredibly friendly and the quality is consistently amazing. Worth the drive across town!",
      rating: 5,
      location: "Food Enthusiast"
    },
    {
      name: "Emily Rodriguez",
      text: "Marie created the most beautiful wedding cake for us. Not only was it stunning, but it tasted incredible. Our guests are still raving about it!",
      rating: 5,
      location: "Happy Bride"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span 
        key={i} 
        className={`text-xl ${i < rating ? 'text-bakery-gold' : 'text-muted'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-bakery-chocolate mb-8">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-bakery-gold mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who choose Golden Crust for their daily bread and special celebrations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-warm border-0 hover:shadow-elevated transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <blockquote className="text-muted-foreground italic mb-6 text-lg leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="border-t border-muted pt-6">
                  <h4 className="font-semibold text-bakery-chocolate text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-warm">
            <h3 className="text-2xl font-display font-semibold text-bakery-chocolate mb-4">
              Love Our Baked Goods?
            </h3>
            <p className="text-muted-foreground mb-6">
              Share your experience and help others discover the joy of fresh, artisan baking.
            </p>
            <button className="bg-bakery-gold hover:bg-bakery-gold/90 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Leave a Review
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;