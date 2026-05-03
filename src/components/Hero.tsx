import { motion } from 'framer-motion';
import { ShoppingBag, Menu } from 'lucide-react'; 

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-zinc-950 text-white selection:bg-lime-400 selection:text-black">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 bg-black">
        
        {/* Mobile Only: Black Image with low opacity effect */}
        {/* FIX: Removed mix-blend-overlay and added absolute inset-0 */}
        <img 
          src="heroSection.jpg" 
          alt="Mobile Background Overlay"
          className="lg:hidden absolute inset-0 w-full h-full object-cover grayscale opacity-30" 
        />

        {/* Universal: Grainy overlay for texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 z-10 pointer-events-none"></div>
        
        {/* Desktop Only: Subtle glowing orb */}
        <div className="hidden lg:block absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-lime-400/5 rounded-full blur-[100px] pointer-events-none"></div>
      </div>

      {/* --- NAVIGATION BAR --- */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-zinc-950/60 border-b border-white/5">
        <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
          {/* Mobile Menu Icon */}
          <button className="md:hidden text-white hover:text-lime-400 transition-colors">
            <Menu size={28} />
          </button>

          {/* Logo */}
          <img
            src="logo.jpg"
            alt="logo"
            className="h-12 w-12 md:h-16 md:w-16 object-cover rounded-full shadow-lg border border-zinc-800" 
          />

          <ul className="hidden md:flex space-x-10 font-medium text-sm tracking-widest uppercase text-white" dir="rtl">
            <li className="hover:text-lime-400 transition-colors cursor-pointer relative group">
              الكوليكشنز
              <span className="absolute -bottom-2 right-0 w-0 h-0.5 bg-lime-400 transition-all group-hover:w-full"></span>
            </li>
            <li className="hover:text-lime-400 transition-colors cursor-pointer relative group">
              العروض
              <span className="absolute -bottom-2 right-0 w-0 h-0.5 bg-lime-400 transition-all group-hover:w-full"></span>
            </li>
            <li className="hover:text-lime-400 transition-colors cursor-pointer relative group">
              التيشرتات
              <span className="absolute -bottom-2 right-0 w-0 h-0.5 bg-lime-400 transition-all group-hover:w-full"></span>
            </li>
          </ul>

          {/* Cart Button */}
          <button className="flex cursor-pointer items-center gap-2 bg-white text-black px-5 py-2 md:py-2.5 rounded-full font-bold text-sm hover:bg-lime-400 hover:shadow-[0_0_15px_rgba(163,230,53,0.4)] transition-all">
            <ShoppingBag size={18} />
            <span className="hidden md:inline">سلة المشتريات</span> (2)
          </button>
        </div>
      </nav>

      {/* --- HERO CONTENT --- */}
      <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 md:px-12 max-w-7xl mx-auto pt-24 pb-24 gap-12" dir="rtl">
        
        {/* RIGHT SIDE (Typography & CTAs) */}
        {/* Centers text on mobile, aligns right on desktop */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start pt-10 lg:pt-0 z-20 text-center lg:text-right">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
            <p className="text-lime-400 font-mono text-sm md:text-base tracking-widest uppercase">
              كوليكشن Box fit جديد قادم 05
            </p>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="font-arabic-heavy italic text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] text-white"
          >
            اقوى <br />
            <span className="font-arabic-heavy text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-300 to-zinc-600 italic">
              الكوليكشنز
            </span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-10 lg:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto justify-center lg:justify-start"
          >
            {/* Primary Button */}
            <button className="bg-lime-400 cursor-pointer text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:scale-105 hover:shadow-[0_0_30px_rgba(163,230,53,0.5)] transition-all duration-300 w-full sm:w-auto text-center">
              عرض كل المنتجات
            </button>
            {/* Secondary Button - Fixed borders and rounding for mobile */}
            <button className="bg-white/5 cursor-pointer border border-white/20 text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all duration-300 w-full sm:w-auto text-center backdrop-blur-sm">
              التصفيات
            </button>
          </motion.div>
        </div>

        {/* LEFT SIDE (Single Animated Image) - HIDDEN ON MOBILE (hidden lg:flex) */}
        <div className="hidden lg:flex w-full lg:w-1/2 justify-center items-center relative mt-10 lg:mt-0 h-[40vh] lg:h-auto z-10" dir="ltr">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5, x: -50 }}
            animate={{ opacity: 1, scale: 1, rotate: 0, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div className="relative p-2 md:p-3 bg-zinc-900/80 backdrop-blur-md border border-zinc-700/50 rounded-[2.5rem] shadow-[0_20px_80px_rgba(0,0,0,0.9)] overflow-hidden">
                <div className="absolute inset-0 z-10 rounded-[calc(2.5rem-2px)] shadow-[inset_0_4px_12px_rgba(255,255,255,0.03)] pointer-events-none"></div>

                <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 overflow-hidden rounded-[2rem] bg-gradient-to-b from-zinc-800 to-zinc-950">
                  <div className="absolute inset-0 z-10 border border-white/5 rounded-[2rem] pointer-events-none"></div>

                  <img 
                    src="heroSection.jpg" 
                    alt="Featured Gen Z Drop"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out hover:scale-110" 
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent z-10"></div>
                </div>

                <div className="absolute bottom-6 right-6 flex items-center gap-2 z-20 bg-zinc-950/70 px-3 py-1.5 rounded-full border border-zinc-700 backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse shadow-[0_0_8px_rgba(163,230,53,1)]"></div>
                  <span className="font-mono text-[10px] text-zinc-300 tracking-widest uppercase">LIVE</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -top-6 -right-6 lg:-right-10 w-24 h-24 lg:w-32 lg:h-32 border border-zinc-700/40 rounded-full border-dashed pointer-events-none"
            />
            <div className="absolute -bottom-2 -left-4 lg:-bottom-6 lg:-left-10 text-lime-400/30 font-mono text-xs lg:text-sm tracking-widest transform -rotate-90 origin-bottom-left pointer-events-none">
              // DROP_05_EXCLUSIVE
            </div>
            <div className="absolute top-1/4 -left-4 lg:-left-8 w-1 h-12 bg-lime-400/50 rounded-full pointer-events-none"></div>
          </motion.div>
        </div>

      </div>

      {/* --- INFINITE MARQUEE --- */}
      <div className="absolute bottom-0 w-full bg-lime-400 text-black py-3 z-40 flex overflow-hidden">
        <div className="whitespace-nowrap animate-marquee flex items-center font-bold tracking-widest uppercase text-xs md:text-sm">
           <span>✦ FREE WORLDWIDE SHIPPING OVER $150 ✦ 100% ORGANIC COTTON ✦ NO RESTOCKS ✦ NEXT DROP IN 24:00:00 ✦</span>
           <span className="ml-4">✦ FREE WORLDWIDE SHIPPING OVER $150 ✦ 100% ORGANIC COTTON ✦ NO RESTOCKS ✦ NEXT DROP IN 24:00:00 ✦</span>
           <span className="ml-4">✦ FREE WORLDWIDE SHIPPING OVER $150 ✦ 100% ORGANIC COTTON ✦ NO RESTOCKS ✦ NEXT DROP IN 24:00:00 ✦</span>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}} />
    </div>
  );
};

export default HeroSection;