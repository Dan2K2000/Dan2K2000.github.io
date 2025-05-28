import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardBody, Progress } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useInView } from "react-intersection-observer";

interface TopSpice {
  id: number;
  rank: number;
  name: string;
  description: string;
  popularity: number;
  icon: string;
  color: string;
}

const topSpices: TopSpice[] = [
  {
    id: 5,
    rank: 5,
    name: "Корица",
    description: "Ароматная кора коричного дерева, используемая в сладких и пряных блюдах по всему миру.",
    popularity: 75,
    icon: "lucide:candy",
    color: "#8B4513"
  },
  {
    id: 4,
    rank: 4,
    name: "Базилик",
    description: "Ароматная трава с нотками перца и аниса, незаменимая в итальянской кухне.",
    popularity: 80,
    icon: "lucide:leaf",
    color: "#2D7D3A"
  },
  {
    id: 3,
    rank: 3,
    name: "Куркума",
    description: "Яркая желтая специя с противовоспалительными свойствами, основа многих карри.",
    popularity: 85,
    icon: "lucide:pill",
    color: "#E6B325"
  },
  {
    id: 2,
    rank: 2,
    name: "Черный перец",
    description: "Король специй, используемый практически во всех кухнях мира для придания остроты.",
    popularity: 95,
    icon: "lucide:circle-dot",
    color: "#333333"
  },
  {
    id: 1,
    rank: 1,
    name: "Чеснок",
    description: "Универсальная специя с ярким ароматом, используемая в кулинарии и медицине.",
    popularity: 98,
    icon: "lucide:flower",
    color: "#EAEAEA"
  }
];

const TopSpicesSection: React.FC = () => {
  const [visibleSpices, setVisibleSpices] = useState<number[]>([]);
  
  const spiceRefs = topSpices.map(() => useInView({
    triggerOnce: true,
    threshold: 0.5,
  }));

  useEffect(() => {
    spiceRefs.forEach(({ inView, entry }, index) => {
      if (inView && entry && !visibleSpices.includes(topSpices[index].id)) {
        setVisibleSpices(prev => [...prev, topSpices[index].id]);
      }
    });
  }, [spiceRefs, visibleSpices]);

  return (
    <section id="top" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-spice-brown mb-4">
            Топ-5 Самых Популярных Специй
          </h2>
          <p className="text-lg text-spice-copper max-w-2xl mx-auto">
            Прокрутите вниз, чтобы узнать о самых популярных специях в мире кулинарии
          </p>
        </motion.div>

        <div className="space-y-24 sm:space-y-32 md:space-y-40 relative">
          {/* Vertical line connecting spice circles */}
          <div className="absolute left-1/2 top-[60px] bottom-[60px] w-1 bg-spice-copper transform -translate-x-1/2 hidden md:block"></div>
          
          {topSpices.map((spice, index) => {
            const [ref, inView] = spiceRefs[index];
            const isVisible = visibleSpices.includes(spice.id);
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={spice.id} 
                ref={ref}
                className="relative"
              >
                <div className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} gap-4 sm:gap-8`}>
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:text-right' : ''}`}>
                    <Card className="bg-spice-light border-none shadow-lg">
                      <CardBody className="p-4 sm:p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-spice-gold p-2 rounded-full">
                            <span className="text-spice-brown font-bold">#{spice.rank}</span>
                          </div>
                          <h3 className="text-2xl font-bold text-spice-brown">{spice.name}</h3>
                        </div>
                        <p className="text-spice-copper mb-4">{spice.description}</p>
                        <div className="flex items-center gap-2 mb-1">
                          <Icon icon="lucide:trending-up" className="text-spice-copper" />
                          <span className="text-sm text-spice-brown font-medium">Популярность:</span>
                        </div>
                        <Progress 
                          aria-label="Popularity" 
                          value={spice.popularity} 
                          className="max-w-md" 
                          color="primary"
                          classNames={{
                            indicator: "bg-spice-copper"
                          }}
                        />
                      </CardBody>
                    </Card>
                  </div>
                  
                  <div 
                    className={`spice-circle ${isVisible ? 'visible' : ''} mx-auto md:mx-0`} 
                    style={{ backgroundColor: spice.color }}
                  >
                    <Icon icon={spice.icon} className="text-3xl sm:text-4xl text-white" />
                    
                    {/* Arrow pointing to the next spice (except for the last one) */}
                    {index < topSpices.length - 1 && (
                      <div 
                        className={`spice-arrow ${isVisible ? 'visible' : ''} hidden md:block`}
                        style={{
                          bottom: '-60px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          opacity: isVisible ? 1 : 0,
                          transition: 'opacity 0.5s ease 0.5s'
                        }}
                      ></div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopSpicesSection;