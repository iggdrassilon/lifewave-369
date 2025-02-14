import '@/src/styles/comingSoon.css';

const FullScreenBackground = ({props}: {props: string}) => {
  return (
    <div className='wrap'>
      <div className='top-plane'></div>
      <div className='bottom-plane'></div>
      <div className='flex justify-center items-center w-[100%] h-[100vh]'>
          <div className='absolute z-1 w-[90%] text-center md:w-[60%] h-[100px] flex justify-center items-center bg-violet-100/5 rounded-xl backdrop-blur-md p-3 font-bold text-xl md:text-4xl text-rose-500/70'>{props} IS COMING SOON...</div>
      </div>
    </div>
  );
};

export default FullScreenBackground;