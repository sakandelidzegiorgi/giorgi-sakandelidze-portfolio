// src/components/Badge.tsx
interface BadgeProps {
  text: string;
}

export default function Badge({ text }: BadgeProps) {
  return (
    // შევცვალეთ ფერები მუქ თემაზე მორგებული ნახევრად გამჭვირვალე (Glass) ეფექტით
    <span className="inline-block bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-full font-medium tracking-wide">
      {text}
    </span>
  );
}