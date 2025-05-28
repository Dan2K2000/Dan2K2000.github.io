import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, Image } from "@heroui/react";
import { Icon } from "@iconify/react";

const IntroSection: React.FC = () => {
  return (
    <section id="intro" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-spice-brown mb-4">
            Мир Специй и Трав
          </h1>
          <p className="text-lg sm:text-xl text-spice-copper max-w-3xl mx-auto px-2">
            Погрузитесь в удивительный мир ароматов и вкусов, который открывают нам специи и травы
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-spice-light border-none shadow-lg overflow-hidden">
              <CardBody className="p-0">
                <Image
                  removeWrapper
                  alt="Разнообразные специи"
                  className="w-full h-[400px] object-cover"
                  src="https://img.heroui.chat/image/food?w=800&h=600&u=spices1"
                />
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="bg-spice-gold p-3 rounded-full">
                <Icon icon="lucide:leaf" className="text-spice-brown text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-spice-brown mb-2">Что такое специи?</h3>
                <p className="text-spice-copper">
                  Специи — это ароматические вещества растительного происхождения, которые используются для придания пище вкуса, аромата и цвета. Они могут быть получены из различных частей растений: семян, плодов, коры, корней, листьев или цветов.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-spice-gold p-3 rounded-full">
                <Icon icon="lucide:flower" className="text-spice-brown text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-spice-brown mb-2">Что такое травы?</h3>
                <p className="text-spice-copper">
                  Травы — это листья, стебли и цветы растений, которые используются в кулинарии для придания аромата и вкуса блюдам. В отличие от специй, травы обычно используются в свежем или сушеном виде и имеют более нежный аромат.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-spice-gold p-3 rounded-full">
                <Icon icon="lucide:sparkles" className="text-spice-brown text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-spice-brown mb-2">Значение в кулинарии</h3>
                <p className="text-spice-copper">
                  Специи и травы играют важнейшую роль в кулинарии по всему миру, формируя уникальные вкусовые профили национальных кухонь. Они не только улучшают вкус блюд, но и обладают полезными свойствами для здоровья, включая антиоксидантные и противовоспалительные эффекты.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;