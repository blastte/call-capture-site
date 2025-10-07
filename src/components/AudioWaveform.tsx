const AudioWaveform = () => {
  return (
    <div className="flex items-center justify-center gap-1 h-16">
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="w-1 bg-gradient-premium rounded-full animate-waveform"
          style={{
            animationDelay: `${i * 0.05}s`,
            height: '100%',
            minHeight: '8px',
          }}
        />
      ))}
    </div>
  );
};

export default AudioWaveform;
