type TestimonialProps = {
  quote: string;
  author: string;
  role?: string;
};

export function Testimonial({ quote, author, role }: TestimonialProps) {
  return (
    <figure className="relative overflow-hidden rounded-3xl border border-white/10 bg-secondary/60 p-6">
      <span className="absolute -top-10 right-6 text-8xl text-white/10">“</span>
      <blockquote className="text-base text-white/90">{quote}</blockquote>
      <figcaption className="mt-6 text-sm text-muted-foreground">
        <span className="block font-semibold text-white">{author}</span>
        {role && <span>{role}</span>}
      </figcaption>
    </figure>
  );
}