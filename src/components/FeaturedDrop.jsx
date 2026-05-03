import { motion } from 'framer-motion';

const FeaturedDrop = () => {
  return (
    <section className="relative w-full min-h-screen bg-brand-dark py-24 px-8 overflow-hidden" dir="rtl">
      
      {/* Massive Background Watermark Number */}
      <div className="absolute top-10 right-10 text-[20rem] font-black text-brand-muted opacity-20 select-none z-0 pointer-events-none leading-none font-sans">
        01
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-arabic-heavy uppercase text-brand-light">
            الإصدار <span className="text-brand-accent">الحصري</span>
          </h2>
          <p className="font-arabic-elegant text-zinc-400 text-xl md:text-2xl mt-4 italic max-w-2xl">
            نكسر القواعد. نصنع المعايير. مجموعة الخريف تتحدى المألوف بتصاميم مستوحاة من الشارع التجريدي.
          </p>
        </motion.div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Right Column (Primary Focus in RTL) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-7 group relative overflow-hidden h-150 md:h-200"
          >
            <img 
              src="https://images.unsplash.com/photo-1617397960309-847e9262e3d3?q=80&w=2400&auto=format&fit=crop" 
              alt="Main Look" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
            />
            {/* Hover Tag */}
            <div className="absolute bottom-6 right-6 bg-brand-accent text-brand-dark px-6 py-3 font-bold uppercase tracking-wider text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              تسوق القطعة ←
            </div>
          </motion.div>

          {/* Left Column (Secondary Focus) */}
          <div className="md:col-span-5 flex flex-col gap-8 lg:gap-12 justify-center">
            
            {/* Top Small Image */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-75 md:h-100 overflow-hidden group"
            >
              <img 
                src="https://images.unsplash.com/photo-1523398002811-999aa8e9f5b9?q=80&w=2400&auto=format&fit=crop" 
                alt="Detail Shot" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>

            {/* Bottom Info/Action Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-brand-muted p-8 md:p-10 border-l-4 border-brand-accent"
            >
              <h3 className="text-2xl font-arabic-heavy text-brand-light mb-4">
                جاكيت "الفراغ" التكتيكي
              </h3>
              <p className="text-zinc-400 font-sans text-sm leading-relaxed mb-8">
                مصنوع من أقمشة تقنية مقاومة للتمزق. تصميم متعدد الجيوب يدمج بين الوظيفة والجماليات القاسية. كمية محدودة جداً.
              </p>
              <button className="w-full bg-brand-light text-brand-dark font-arabic-heavy py-4 hover:bg-brand-accent hover:text-brand-light transition-colors duration-300">
                أضف إلى السلة - $240
              </button>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedDrop;