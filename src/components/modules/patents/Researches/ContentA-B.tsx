/* eslint-disable @typescript-eslint/no-explicit-any */
type Content = {
  content: {
    title: string;
    description: string;
  }
}

const ContentAB = ({content}: Content) => {
  return (
    <>
      <h2
        className="text-center"
      >
        {content.title}
      </h2>
      <div className="mt-2">
        {content.description}
      </div>
    </>
  )
}

export default ContentAB
