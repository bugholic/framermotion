import { Button } from "@/components/Button";
import startBg from "@/assets/stars.png"

export const Hero = () => {
  return (
    <section className="h-[492px] flex items-center overflow-hidden relative" style={{backgroundImage: `url(${startBg.src})`}}>
        <div className="absolute h-64 w-64 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] boxShadow"></div>
        <div className="absolute h-[344px] w-[344px] border opacity-20  rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
        <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-5 w-5 border border-white left-full bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex justify-center items-center">
        <div className="h-2 w-2 bg-white rounded-full">
            </div></div>
            <div className="absolute h-[444px] w-[444px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed">
            </div>
            <div className="absolute h-[544px] w-[544px] rounded-full border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed">
            </div>
      <div className="container relative mt-16">
        <h1 className="text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">AI SEO</h1>
        <p className="text-lg text-white/70 mt-5 text-center">
            Elevate your site's visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.
        </p>
        <div className="flex justify-center mt-5">
       <Button>Join waitlist</Button>
        </div>
      </div>
    </section>
  );
};
