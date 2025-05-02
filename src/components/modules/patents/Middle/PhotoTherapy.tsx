import useInViewHook from '@/src/hooks/useInView'
import { motion } from 'framer-motion'
import GridSectionSimple from '@/src/components/layouts/GridSectionSimple'
import ContentElement from '@/src/components/modules/patents/Middle/ContentElement'

export type PhotoTherapyT = {
  images?: {
    background: string
    picture: string
  }
  content: {
    title: string
    description: string
    doc1: {
      title: string
      link: string
    }
    doc2: {
      title: string
      link: string
    }
  }
  readmore: string
}

const PhotoTherapy = (props: PhotoTherapyT) => {
  const { images, content, readmore } = props
  const { ref, isInView } = useInViewHook()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.2,
        duration: 0.6,
      }}
      className='bg-white'
    >
      <GridSectionSimple
        image={{
          src: images.picture,
          alt: 'acupressure image',
        }}
        imageMode={false}
        title={content.title}
        customStyle={{
          description: 'font-bold',
        }}
        description={
          <div
            dangerouslySetInnerHTML={{ __html: content.description }} // CHILD
          />
        }
        content={<ContentElement content={content.doc1} readmore={readmore} />}
        contentOther={
          <ContentElement content={content.doc2} readmore={readmore} />
        }
      />
    </motion.div>
  )
}

export default PhotoTherapy
