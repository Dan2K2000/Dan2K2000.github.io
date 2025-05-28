import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  ResponsiveContainer,
  Tooltip as RechartsTooltip
} from "recharts";

type SpiceType = "paprika" | "turmeric";

interface SpiceData {
  subject: string;
  value: number;
  fullMark: number;
}

const paprikaData: SpiceData[] = [
  { subject: 'Острота', value: 70, fullMark: 100 },
  { subject: 'Сладость', value: 50, fullMark: 100 },
  { subject: 'Аромат', value: 60, fullMark: 100 },
  { subject: 'Цвет', value: 90, fullMark: 100 },
  { subject: 'Витамин С', value: 80, fullMark: 100 },
  { subject: 'Антиоксиданты', value: 65, fullMark: 100 },
];

const turmericData: SpiceData[] = [
  { subject: 'Острота', value: 30, fullMark: 100 },
  { subject: 'Горечь', value: 60, fullMark: 100 },
  { subject: 'Аромат', value: 70, fullMark: 100 },
  { subject: 'Цвет', value: 95, fullMark: 100 },
  { subject: 'Куркумин', value: 90, fullMark: 100 },
  { subject: 'Противовоспалительные св-ва', value: 85, fullMark: 100 },
];

const spiceInfo = {
  paprika: {
    title: "Паприка",
    description: "Паприка — это молотая специя, получаемая из сушеных плодов стручкового перца. Она придает блюдам красивый красный цвет и слегка сладковатый вкус с различной степенью остроты в зависимости от сорта.",
    origin: "Центральная Америка",
    color: "#D92B2B",
    facts: [
      "Богата витамином С и антиоксидантами",
      "Бывает сладкой, полуострой и острой",
      "Основной ингредиент венгерского гуляша",
      "Помогает улучшить кровообращение"
    ]
  },
  turmeric: {
    title: "Куркума",
    description: "Куркума — это ярко-желтая специя, получаемая из корневища растения семейства имбирных. Она имеет слегка горьковатый, землистый вкус и является основным ингредиентом карри.",
    origin: "Южная Азия (Индия)",
    color: "#E6B325",
    facts: [
      "Содержит куркумин — мощный антиоксидант",
      "Обладает противовоспалительными свойствами",
      "Используется в аюрведической медицине тысячи лет",
      "Придает блюдам характерный золотистый цвет"
    ]
  }
};

const InfographicSection: React.FC = () => {
  const [activeSpice, setActiveSpice] = useState<SpiceType>("paprika");

  const currentSpice = spiceInfo[activeSpice];
  const chartData = activeSpice === "paprika" ? paprikaData : turmericData;
  const chartColor = currentSpice.color;

  return (
    <section id="infographic" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-spice-brown mb-4">
            Инфографика Специй
          </h2>
          <p className="text-lg text-spice-copper max-w-2xl mx-auto">
            Изучите характеристики и свойства популярных специй в интерактивном формате
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <Button
            color={activeSpice === "paprika" ? "primary" : "default"}
            variant={activeSpice === "paprika" ? "solid" : "flat"}
            className={activeSpice === "paprika" ? "bg-[#D92B2B] text-white" : "bg-spice-light text-spice-brown"}
            onPress={() => setActiveSpice("paprika")}
          >
            Паприка
          </Button>
          <Button
            color={activeSpice === "turmeric" ? "primary" : "default"}
            variant={activeSpice === "turmeric" ? "solid" : "flat"}
            className={activeSpice === "turmeric" ? "bg-[#E6B325] text-spice-brown" : "bg-spice-light text-spice-brown"}
            onPress={() => setActiveSpice("turmeric")}
          >
            Куркума
          </Button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSpice}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <Card className="bg-spice-light border-none shadow-lg">
              <CardBody className="p-4 sm:p-6">
                <h3 className="text-2xl font-bold mb-4" style={{ color: chartColor }}>
                  {currentSpice.title}
                </h3>
                <p className="text-spice-copper mb-4">{currentSpice.description}</p>
                
                <div className="flex items-center gap-2 mb-4">
                  <Icon icon="lucide:map-pin" className="text-spice-copper" />
                  <span className="text-sm text-spice-brown font-medium">Происхождение: {currentSpice.origin}</span>
                </div>
                
                <h4 className="text-lg font-bold text-spice-brown mb-2">Интересные факты:</h4>
                <ul className="space-y-2">
                  {currentSpice.facts.map((fact, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Icon icon="lucide:check-circle" className="text-spice-copper mt-1" />
                      <span className="text-spice-copper">{fact}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>

            <Card className="bg-spice-light border-none shadow-lg">
              <CardBody className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center" style={{ color: chartColor }}>
                  Характеристики
                </h3>
                <div className="h-[300px] sm:h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                      <PolarGrid stroke="#BF7636" strokeOpacity={0.3} />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#592202', fontSize: 12 }} />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#592202' }} />
                      <Radar
                        name={currentSpice.title}
                        dataKey="value"
                        stroke={chartColor}
                        fill={chartColor}
                        fillOpacity={0.5}
                      />
                      <RechartsTooltip />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default InfographicSection;