import { Testimonial } from "@/components/Testimonial";

const testimonials = [
  {
    quote: "We closed more orders from phone traffic than ever.",
    author: "D2C Retailer"
  },
  {
    quote: "Setup took a day; our team loves the analytics.",
    author: "Ops Lead"
  },
  {
    quote: "Customers finish in one call. That's the win.",
    author: "Store Owner"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="mt-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Teams who trust</h2>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          CallSphere voice agents help commerce and service teams keep customers on the
          line and close the loop on every interaction.
        </p>
      </div>
      <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <Testimonial key={item.author} quote={item.quote} author={item.author} />
        ))}
      </div>
    </section>
  );
}
