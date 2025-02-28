
import { cn } from "@/src/lib/utils"

interface GridSectionProps {
  title?: string;
  description?: string;
  image: {
    src: string;
    alt: string;
  };
  content: React.ReactNode;
  imageOnRight?: boolean;  // Controls desktop (column) layout
  imageOnTop?: boolean;    // Controls mobile (row) layout
  headerOnTop?: boolean;
  imageFirstInColumn?: boolean; // New prop for desktop column order
}

const GridSectionSimple = ({
  title,
  description,
  image,
  content,
  imageOnRight = true,
  imageOnTop = false,
  headerOnTop = true,
  imageFirstInColumn = true,
}: GridSectionProps) => {
  return (
    <section 
      className="w-full max-w-7xl mx-auto px-4 py-16 flex flex-col gap-8 text-black"
    >
      <h2 
        className="text-3xl font-semibold tracking-tight text-center"
      >
        {title}
      </h2>
      
      <div
        className={cn(
          "text-center max-w-3xl mx-auto",
          headerOnTop ? "order-1" : "order-2"
        )}
      >
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>

      <div
        className={cn(
          "grid gap-8 items-center",
          "md:grid-cols-2",
          imageOnRight ? "md:grid-flow-row" : "md:grid-flow-row-dense",
          headerOnTop ? "order-2" : "order-1"
        )}
      >
        <div
          className={cn(
            "space-y-4",
            // Mobile order
            imageOnTop ? "order-1" : "order-2",
            imageFirstInColumn ? "md:order-1" : "md:order-2"
          )}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto rounded-lg object-cover aspect-video m-auto"
            loading="lazy"
          />
        </div>
        <div
          className={cn(
            "space-y-4",
            // Mobile order
            imageOnTop ? "order-2" : "order-1",
            // Desktop order (overrides mobile on md screens and up)
            imageFirstInColumn ? "md:order-2" : "md:order-1"
          )}
        >
          {content}
        </div>
      </div>
    </section>
  )
}

export default GridSectionSimple
