/* eslint-disable @typescript-eslint/no-explicit-any */
type Content = {
  content: {
    title: string;
    subtitle: string;
    a: {
      title: string;
      description: string;
    };
    b: {
      title: string;
      description: string;
    }
  };
}

const ContentAB = ({content}: Content) => {
  return (
    <>
      <h2
        className="text-center"
      >
        {content.a.title}
      </h2>
      <div className="mt-2">
        {content.a.description}
      </div>
    </>
  )
}

export default ContentAB
