import preloaderGif from '../../assets/preloader.gif';

export const Preloader = () => {
  return (
    <div style={{ position: 'absolute', margin: '20% 30% 30% 30%' }}>
      <img src={preloaderGif} alt="preloader" />
    </div>
  );
};
