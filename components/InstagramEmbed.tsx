/** Swap the post URL as needed. */
export default function InstagramEmbed({ post = "DYNQWrVGLE4" }: { post?: string }) {
  return (
    <iframe
      src={`https://www.instagram.com/p/${post}/embed/`}
      width={400}
      height={500}
      loading="lazy"
      scrolling="no"
      title="CDE Instagram"
      className="max-w-full border border-cream/[0.14] bg-inkAlt"
    />
  );
}
