// components/BackgroundLights.tsx
'use client';

export default function BackgroundLights() {
  return (
    <>
      <div className="absolute top-[8%] left-[8%] w-64 h-64 bg-fuchsia-400 rounded-full mix-blend-screen opacity-[5%] blur-3xl z-0 pointer-events-none" />
      <div className="absolute top-[8%] left-[55%] w-80 h-80 bg-fuchsia-400 rounded-full mix-blend-screen opacity-[5%] blur-3xl z-0 pointer-events-none" />
      <div className="absolute top-[40%] right-[15%] -translate-y-1/2 w-96 h-96 bg-fuchsia-400 rounded-full mix-blend-screen opacity-[10%] blur-3xl z-0 pointer-events-none" />
      <div className="absolute top-[30%] left-[15%] w-80 h-80 bg-fuchsia-400 rounded-full mix-blend-screen opacity-[10%] blur-3xl z-0 pointer-events-none" />
      <div className="absolute top-[60%] left-[10%] w-80 h-80 bg-fuchsia-400 rounded-full mix-blend-screen opacity-[10%] blur-3xl z-0 pointer-events-none" />
      <div className="absolute top-[70%] right-[15%] w-60 h-60 bg-fuchsia-400 rounded-full mix-blend-screen opacity-[10%] blur-3xl z-0 pointer-events-none" />
      <div className="absolute top-[4%] left-1/2 -translate-x-1/2 w-96 h-96 bg-fuchsia-400 rounded-full mix-blend-screen opacity-[15%] blur-3xl z-0 pointer-events-none" />
      <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-88 h-88 bg-fuchsia-400 rounded-full mix-blend-screen opacity-[10%] blur-3xl z-0 pointer-events-none" />
      <div className="absolute top-[15%] right-[5%] w-60 h-60 bg-fuchsia-400 rounded-full mix-blend-screen opacity-[10%] blur-3xl z-0 pointer-events-none" />
      <div className="absolute top-[50%] left-[30%] w-52 h-52 bg-fuchsia-400 rounded-full mix-blend-screen opacity-[10%] blur-3xl z-0 pointer-events-none" />
      <div className="absolute bottom-[5%] right-[5%] w-72 h-72 bg-pink-400 rounded-full mix-blend-screen opacity-[8%] blur-3xl z-0 pointer-events-none" />
      <div className="absolute top-[25%] left-[70%] w-56 h-56 bg-pink-400 rounded-full mix-blend-screen opacity-[7%] blur-3xl z-0 pointer-events-none" />
    </>
  );
}
