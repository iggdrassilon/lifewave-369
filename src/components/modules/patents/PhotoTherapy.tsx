import useInViewHook from "@/src/hooks/useInView"
import { motion } from "framer-motion"

type PhotoTherapyT = {
  
}

const PhotoTherapy = (props: PhotoTherapyT) => {
  const { images, content } = props
  const { ref, isInView } = useInViewHook()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.2,
        duration: 0.6
      }}
      className='bg-space-dark text-white py-24'
    >
      
    </motion.div>
  )
}

export default PhotoTherapy
