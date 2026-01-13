const NoiseOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-[9000] opacity-[0.02] mix-blend-overlay">
    <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
  </div>
);

export default NoiseOverlay;
