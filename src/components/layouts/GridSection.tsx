
import { cn } from "@/src/lib/utils"
import { motion } from "framer-motion"
import React, { Ref, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface GridSectionProps {
  ref: Ref<HTMLElement>;
  title: {
    title?: React.ReactNode;
    customCl?: string; 
  };
  customClasses?: {
    header?: string;
    body?: string;
    wrapper?: string;
  };
  description?: {
    description: React.ReactNode;
    customCl: string;
    style?: object;
  };
  image?: {
    src: string;
    alt: string;
    customCl: string;
    motion: {
      init: {
        opacity?: number;
        translateX: string;
        translateY: string;
      };
      animate: {
        opacity?: number;
        translateX: string;
        translateY: string;
      };
      transition: {
        duration?: number;
        delay?: number;
      }
    }
    artefact?: React.ReactNode;
  };
  content?: {
    text: React.ReactNode;
    customCl?: string;
    style?: object;
    motion: {
      init: {
        opacity?: number;
        translateX: string;
        translateY: string;
      };
      animate: {
        opacity?: number;
        translateX: string;
        translateY: string;
      };
      transition: {
        duration?: number;
        delay?: number;
      }
    }
  };
  imageOnRight?: boolean;
  imageOnTop?: boolean;
  headerOnTop?: boolean;
  isColumnTotal?: boolean;
  reverseTotalColumn?: boolean;
}

const GridSection = React.forwardRef<HTMLDivElement, GridSectionProps>((props, ref) => {
  const reff = useRef(null)
  useEffect(() => {
    if (reff.current) {
      console.log(reff.current.offsetHeight)
    }
  }, [reff.current, reff.current?.offsetHeight])

  const [ imgRef, imgRefInView ] = useInView({
    triggerOnce: true
  })
  const [ contentRef, contentRefInView ] = useInView({
    triggerOnce: true
  })

  const { 
    title,
    customClasses,
    description,
    image,
    content,
    imageOnRight,
    imageOnTop,
    isColumnTotal,
    reverseTotalColumn,
    headerOnTop
  } = props

  const paddingBody = 'md:m-4'

  return (
    <section
      ref={ref}
      className={cn(
        "relative w-full max-w-7xl mx-auto px-4 pt-16 pb-8 flex flex-col",
        customClasses.wrapper
      )}>
      {title && (
        <h2 className={cn(
          'tracking-tight overflow-hidden',
          'text-3xl',
          `${title.customCl}`
        )}>
          {title.title}
        </h2>
      )}
      <div className={cn(
        "text-center max-w-3xl md:max-w-[100%] mx-auto",
        customClasses.header,
        headerOnTop ? "order-1" : "order-2"
      )}>
        {description && (
          <p className={cn(
            'text-muted-foreground leading-relaxed',
            description.customCl
          )}
            style={description.style}
          >
            {description.description}
          </p>
        )}
      </div>
      <div  
        ref={reff}
        className={cn(
          "grid md:gap-5 items-center",
          "md:grid-cols-2",
          customClasses.body,
          !isColumnTotal && (imageOnRight ? "md:grid-flow-row" : "md:grid-flow-row-dense"),
          headerOnTop ? "order-2" : "order-1",
          isColumnTotal ? "md:grid-cols-1 md:max-w-3x1 md:mx-auto" : "md:grid-cols-2",
        )}
      >
        {image && (
          <div
          className={cn(
            "relative",
            "space-y-4",
            image.customCl,
            isColumnTotal
              ? reverseTotalColumn ? "order-2" : "order-1"
              : [
                imageOnTop ? "order-1" : "order-2",
                imageOnRight ? "md:order-1" : "md:order-2"
              ]
            // imageOnRight ? "md:order-1" : "md:order-2"
          )}
        >
          <motion.img
            ref={imgRef}
            initial={{ 
              opacity: image.motion.init.opacity,
              translateX: image.motion.init.translateX 
            }}
            animate={{
              opacity: 
                imgRefInView ? image.motion.animate.opacity : image.motion.init.opacity,
              translateX: 
                imgRefInView ? image.motion.animate.translateX : image.motion.init.translateX
            }}
            transition={{ 
              duration: image.motion.transition.duration,
              delay: image.motion.transition.delay
            }}
            src={image.src}
            alt={image.alt}
            className={cn(
              'w-full h-auto object-cover -z-[99] rounded-xl',
              // paddingBody,
            )}
            // loading="lazy"
          />
            {image.artefact && image.artefact}
          </div>
        )}
        {content && (
          <motion.div
            ref={contentRef}
            initial={{ 
              opacity: content.motion.init.opacity,
              translateX: content.motion.init.translateX,
              translateY: content.motion.init.translateY
            }}
            animate={{
              opacity: 
                contentRefInView ? content.motion.animate.opacity : content.motion.init.opacity,
              translateX: 
                contentRefInView ? content.motion.animate.translateX : content.motion.init.translateX,
              translateY: 
                contentRefInView ? content.motion.animate.translateY : content.motion.init.translateY
            }}
            transition={{ 
              duration: content.motion.transition.duration,
              delay: content.motion.transition.delay
            }}
            className={cn(
              "space-y-4 md:space-y-8",
              `${content.customCl}`,
              'mt-4 md:mt-0 md:pt-0',
              isColumnTotal
                ? reverseTotalColumn ? "order-1" : "order-2"
                : [
                  imageOnTop ? "order-2" : "order-1",
                  imageOnRight ? "md:order-2" : "md:order-1"
                ]
            )}
            style={content.style}
          >
            {content.text}
          </motion.div>
        )}
      </div>
    </section>
  )
})

GridSection.displayName = 'GridSection'

export default GridSection
