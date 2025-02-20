
import { cn } from "@/src/lib/utils"

interface GridSectionProps {
  title: React.ReactNode | null;
  customClasses: {
    header: string;
    body: string;
    wrapper: string;
  };
  description: {
    description: React.ReactNode;
    customCl: string;
  } | null;
  image: {
    src: string;
    alt: string;
    customCl: string;
    artefact: React.ReactNode | null;
  };
  content: React.ReactNode;
  imageOnRight?: boolean;
}

const GridSection = ({
  title,
  customClasses,
  description,
  image,
  content,
  imageOnRight,
}: GridSectionProps) => {
  const paddingBody = 'p-4'

  return (
    <section className={cn(
      "relative w-full max-w-7xl mx-auto px-4 py-16 space-y-8",
      `${customClasses.wrapper}`
    )}>
      <div className={cn(
        "text-center max-w-3xl md:max-w-[100%] mx-auto",
        `${customClasses.header}`
      )}>
        {title && <h2 className="text-3xl font-semibold tracking-tight overflow-hidden">{title}</h2>}
        {description && (
          <p className={cn(
            'text-muted-foreground leading-relaxed overflow-hidden',
            `${description.customCl}`
          )}>
            {description.description}
          </p>
        )}
      </div>
      <div
        className={cn(
          "grid gap-5 items-center",
          "md:grid-cols-2",
          `${customClasses.body}`,
          imageOnRight ? "md:grid-flow-row" : "md:grid-flow-row-dense"
        )}
      >
        <div
          className={cn(
            "relative",
            "space-y-4",
            `${image.customCl}`,
            imageOnRight ? "md:order-1" : "md:order-2"
          )}
        >
          <img
            src={image.src}
            alt={image.alt}
            className={cn(
              'w-full h-auto object-cover -z-[99]',
              'aspect-video',
              `${paddingBody}`,
            )}
            loading="lazy"
          />
          {image.artefact && (image.artefact)}
        </div>
        <div
          className={cn(
            "space-y-4 overflow-hidden",
            `${paddingBody}`,
            imageOnRight ? "md:order-2" : "md:order-1"
          )}
        >
          {content}
        </div>
      </div>
    </section>
  )
}

export default GridSection
