
import { cn } from '@/src/lib/utils'

interface GridSectionProps {
  title?: string;
  description?: string | React.ReactNode  ;
  imageMode: boolean;
  image?: {
    src: string;
    alt: string;
  };
  content: React.ReactNode;
  contentOther?: React.ReactNode;
  imageOnRight?: boolean;  // Controls desktop (column) layout
  imageOnTop?: boolean;    // Controls mobile (row) layout
  headerOnTop?: boolean;
  imageFirstInColumn?: boolean; // New prop for desktop column order
  customStyle?: {
    title?: string;
    description?: string;
    parent?: string;
    content?: string;
  };
}

const GridSectionSimple = ({
  title,
  description,
  imageMode,
  image,
  content,
  contentOther,
  imageOnRight = true,
  imageOnTop = false,
  headerOnTop = true,
  imageFirstInColumn = true,
  customStyle
}: GridSectionProps) => {
  return (
    <section 
      className={cn(
        'w-full max-w-7xl mx-auto px-4 py-8 md:py-16',
        'flex flex-col gap-8 text-black',
        `${customStyle?.parent}`
      )}
    >
      {title && (
        <h2 
          className={cn(
            'text-3xl text-title font-semibold',
            'tracking-tight text-center',
            `${customStyle?.title}`
          )}
        >
          {title}
        </h2>
      )}
      {description && (
        <div
          className={cn(
            'text-center max-w-3xl mx-auto',
            headerOnTop ? 'order-1' : 'order-2'
          )}
        >
          <div className={cn(
            `${customStyle?.description}`,
          )}>
            {description}
          </div>
        </div>
      )}
      {!imageMode && (
        <img
          src={image.src}
          alt={image.alt}
          className="md:w-[70%] h-auto rounded-lg object-cover aspect-video m-auto"
          // loading="lazy"
        />
      )}
      <div
        className={cn(
          'grid gap-8 items-center',
          'md:grid-cols-2',
          `${customStyle?.content}`,
          imageOnRight ? 'md:grid-flow-row' : 'md:grid-flow-row-dense',
          headerOnTop ? 'order-2' : 'order-1'
        )}
      >
        <div
          className={cn(
            'space-y-4',
            // Mobile order
            imageOnTop ? 'order-1' : 'order-2',
            imageFirstInColumn ? 'md:order-1' : 'md:order-2'
          )}
        >
          {imageMode ? (
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto rounded-lg object-cover m-auto"
              // loading="lazy"
            />
          ) : (
            <div>
              {contentOther}
            </div>
          )}
        </div>
        <div
          className={cn(
            'space-y-4',
            // Mobile order
            imageOnTop ? 'order-2' : 'order-1',
            // Desktop order (overrides mobile on md screens and up)
            imageFirstInColumn ? 'md:order-2' : 'md:order-1'
          )}
        >
          <div>
            {content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GridSectionSimple
