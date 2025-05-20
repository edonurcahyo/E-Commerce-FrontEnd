
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "Grand Opening Sale",
    description: "Get up to 50% off on all building materials",
    buttonText: "Shop Now",
    buttonLink: "/category/1",
    image: "/placeholder.svg",
    bgClass: "from-brand-green/20 to-brand-light",
  },
  {
    id: 2,
    title: "New Tool Collection",
    description: "Professional tools for every project",
    buttonText: "Explore Tools",
    buttonLink: "/category/8",
    image: "/placeholder.svg",
    bgClass: "from-blue-100 to-brand-light",
  },
  {
    id: 3,
    title: "Premium Paint Selection",
    description: "Transform your space with our quality paints",
    buttonText: "View Paints",
    buttonLink: "/category/6",
    image: "/placeholder.svg",
    bgClass: "from-amber-100 to-brand-light",
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="flex transition-transform duration-500 ease-out h-[300px] md:h-[400px]" 
           style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide) => (
          <div 
            key={slide.id} 
            className={`flex-shrink-0 w-full h-full bg-gradient-to-r ${slide.bgClass} relative`}
          >
            <div className="container h-full flex flex-col md:flex-row items-center justify-between px-4 py-8">
              <div className="md:w-1/2 z-10 text-center md:text-left mb-4 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">{slide.title}</h2>
                <p className="text-muted-foreground mb-6">{slide.description}</p>
                <Link to={slide.buttonLink}>
                  <Button size="lg">{slide.buttonText}</Button>
                </Link>
              </div>
              <div className="md:w-1/2 flex justify-center md:justify-end">
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="h-[150px] w-[200px] md:h-[250px] md:w-[350px] object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 z-10"
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 z-10"
        aria-label="Next slide"
      >
        →
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-primary" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
