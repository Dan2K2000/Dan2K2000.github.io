import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardBody, Tooltip } from "@heroui/react";
import { Icon } from "@iconify/react";

interface TimelineItem {
  id: string;
  era: string;
  year: string;
  title: string;
  content: string;
  icon: string;
}

const timelineData: TimelineItem[] = [
  {
    id: "egypt",
    era: "Древний Египет",
    year: "3000 до н.э.",
    title: "Специи в Древнем Египте",
    content: "Египтяне использовали специи для бальзамирования, медицины и кулинарии. Особенно ценились корица, кардамон и тмин. Специи также играли важную роль в религиозных ритуалах.",
    icon: "lucide:pyramid"
  },
  {
    id: "rome",
    era: "Древний Рим",
    year: "100 до н.э.",
    title: "Римская империя",
    content: "Римляне были одними из первых, кто начал масштабную торговлю специями. Перец был настолько ценным, что использовался как валюта. Римские повара использовали шафран, кориандр и тмин.",
    icon: "lucide:landmark"
  },
  {
    id: "silk",
    era: "Шелковый путь",
    year: "200 н.э.",
    title: "Великий шелковый путь",
    content: "Шелковый путь стал главной артерией торговли специями между Востоком и Западом. По нему в Европу попадали экзотические пряности из Индии, Китая и Юго-Восточной Азии.",
    icon: "lucide:route"
  },
  {
    id: "middle",
    era: "Средние века",
    year: "1000 н.э.",
    title: "Средневековая Европа",
    content: "В средневековой Европе специи были символом богатства и статуса. Гвоздика, мускатный орех и корица стоили дороже золота. Венецианские и генуэзские купцы контролировали торговлю специями.",
    icon: "lucide:crown"
  },
  {
    id: "columbus",
    era: "Эпоха открытий",
    year: "1492 н.э.",
    title: "Путешествия Колумба",
    content: "Христофор Колумб отправился на поиски нового пути в Индию именно за специями. Хотя он открыл Америку, а не Индию, это привело к обмену кулинарными традициями между Старым и Новым Светом.",
    icon: "lucide:ship"
  },
  {
    id: "modern",
    era: "Современность",
    year: "Наши дни",
    title: "Глобальная кухня",
    content: "Сегодня специи доступны по всему миру. Глобализация привела к смешению кулинарных традиций и созданию фьюжн-кухни, где специи из разных уголков мира сочетаются в новых интересных комбинациях.",
    icon: "lucide:globe"
  }
];

const TimelineSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <section id="timeline" className="py-20 px-4 bg-spice-gold/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-spice-brown mb-4">
            История Специй Сквозь Века
          </h2>
          <p className="text-lg text-spice-copper max-w-2xl mx-auto">
            Путешествие специй через времена и цивилизации, от древних времен до наших дней
          </p>
        </motion.div>

        <div className="timeline-container relative py-8">
          <div className="timeline-line"></div>
          
          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="timeline-item"
              onMouseEnter={() => setActiveItem(item.id)}
              onMouseLeave={() => setActiveItem(null)}
            >
              <div className="timeline-dot"></div>
              <Tooltip 
                content={
                  <div className="p-2 max-w-md">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                }
                placement={window.innerWidth > 640 ? (index % 2 === 0 ? "right" : "left") : "right"}
                isOpen={activeItem === item.id}
                onOpenChange={(open) => {
                  if (open) setActiveItem(item.id);
                  else if (activeItem === item.id) setActiveItem(null);
                }}
              >
                <Card className={`rotate-20 hover:rotate-0 transition-transform duration-300 bg-spice-light border-none shadow-md`}>
                  <CardBody className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-spice-gold p-2 rounded-full">
                        <Icon icon={item.icon} className="text-spice-brown text-xl" />
                      </div>
                      <div>
                        <h4 className="font-bold text-spice-brown">{item.era}</h4>
                        <p className="text-sm text-spice-copper">{item.year}</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Tooltip>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;