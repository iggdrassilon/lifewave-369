import usePublic from "@/src/hooks/use-lang"
import DOMPurify from "dompurify"

const Privacy = () => {
  const privacy = usePublic().PRIVACY
  const sanitizePrivacy = DOMPurify.sanitize(privacy)

  return (
    <div
      className='md:container px-2 flex justify-center items-center w-[100vw] h-[100vh]'
    >
      <div
        className='rounded-xl px-4 py-6 md:p-12 text-description'
        style={{
          border: '1px solid rgba(1,1,1, .1)',
          backgroundColor: 'rgba(27,103,154, .1)',
          boxShadow: '0 4px 15px rgba(1,1,1, .1)'
        }}
        dangerouslySetInnerHTML={{ __html: sanitizePrivacy }}
      />
    </div>
  )
}

export default Privacy
