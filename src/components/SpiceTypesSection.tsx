import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Card, CardBody, Image } from "@heroui/react";
import { Icon } from "@iconify/react";

type SpiceCategory = "seeds" | "fruits" | "roots" | "leaves" | "flowers";

interface SpiceInfo {
  name: string;
  description: string;
  origin: string;
  uses: string[];
  image: string;
}

interface CategoryInfo {
  title: string;
  description: string;
  icon: string;
  spices: SpiceInfo[];
}

const spiceCategories: Record<SpiceCategory, CategoryInfo> = {
  seeds: {
    title: "Семена",
    description: "Специи, получаемые из семян растений, часто обладают насыщенным ароматом и маслянистой текстурой.",
    icon: "lucide:seedling",
    spices: [
      {
        name: "Кориандр",
        description: "Семена кориандра имеют сладковатый, цитрусовый аромат, который раскрывается при обжаривании.",
        origin: "Средиземноморье",
        uses: ["Карри", "Маринады", "Выпечка", "Соленья"],
        image: "https://img.heroui.chat/image/food?w=400&h=300&u=coriander"
      },
      {
        name: "Тмин",
        description: "Тмин имеет теплый, землистый вкус с легкой горчинкой и является основой многих смесей специй.",
        origin: "Ближний Восток",
        uses: ["Хлеб", "Сыры", "Тушеные блюда", "Соусы"],
        image: "https://img.heroui.chat/image/food?w=400&h=300&u=cumin"
      },
      {
        name: "Кумин",
        description: "Кумин придает блюдам дымный, ореховый аромат и является ключевым ингредиентом во многих кухнях мира.",
        origin: "Индия",
        uses: ["Карри", "Чили", "Гуакамоле", "Хумус"],
        image: "https://img.heroui.chat/image/food?w=400&h=300&u=cumin2"
      }
    ]
  },
  fruits: {
    title: "Плоды",
    description: "Специи из плодов растений часто обладают яркими вкусовыми характеристиками и насыщенным цветом.",
    icon: "lucide:apple",
    spices: [
      {
        name: "Паприка",
        description: "Паприка производится из высушенных и молотых плодов перца и варьируется от сладкой до острой.",
        origin: "Центральная Америка",
        uses: ["Гуляш", "Колбасы", "Соусы", "Маринады"],
        image: "https://img.heroui.chat/image/food?w=400&h=300&u=paprika"
      },
      {
        name: "Кардамон",
        description: "Кардамон имеет сложный аромат с нотами мяты, лимона и эвкалипта.",
        origin: "Индия",
        uses: ["Выпечка", "Кофе", "Карри", "Десерты"],
        image: "https://img.heroui.chat/image/food?w=400&h=300&u=cardamom"
      },
      {
        name: "Ваниль",
        description: "Ваниль получают из стручков орхидеи и ценят за её сладкий, теплый аромат.",
        origin: "Мексика",
        uses: ["Десерты", "Выпечка", "Напитки", "Соусы"],
        image: "https://img.heroui.chat/image/food?w=400&h=300&u=vanilla"
      }
    ]
  },
  roots: {
    title: "Корни",
    description: "Специи из корней растений обычно имеют интенсивный вкус и часто обладают лечебными свойствами.",
    icon: "lucide:sprout",
    spices: [
      {
        name: "Имбирь",
        description: "Имбирь имеет острый, пряный вкус с легкой сладостью и цитрусовыми нотками.",
        origin: "Юго-Восточная Азия",
        uses: ["Выпечка", "Карри", "Маринады", "Чай"],
        image: "https://img.heroui.chat/image/food?w=400&h=300&u=ginger"
      },
      {
        name: "Куркума",
        description: "Куркума придает блюдам яркий желтый цвет и слегка горьковатый, землистый вкус.",
        origin: "Индия",
        uses: ["Карри", "Рис", "Супы", "Смузи"],
        image: "https://img.heroui.chat/image/food?w=400&h=300&u=turmeric"
      },
      {
        name: "Хрен",
        description: "Хрен обладает острым, жгучим вкусом, который раскрывается при измельчении корня.",
        origin: "Восточная Европа",
        uses: ["Соусы", "Маринады", "Мясные блюда", "Закуски"],
        image: "https://img.heroui.chat/image/food?w=400&h=300&u=horseradish"
      }
    ]
  },
  leaves: {
    title: "Листья",
    description: "Травы из листьев растений придают блюдам свежий аромат и часто используются в свежем виде.",
    icon: "lucide:leaf",
    spices: [
      {
        name: "Базилик",
        description: "Базилик имеет сладковатый, пряный аромат с нотками аниса и перца.",
        origin: "Индия",
        uses: ["Песто", "Салаты", "Соусы", "Пицца"],
        image: "https://img.heroui.chat/image/food?w=400&h=300&u=basil"
      },
      {
        name: "Тимьян",
        description: "Тимьян обладает теплым, слегка острым ароматом с нотками мяты и лимона.",
        origin: "Средиземноморье",
        uses: ["Мясо", "Супы", "Соусы", "Маринады"],
        image: "https://img.heroui.chat/image/food?w=400&h=300&u=thyme"
      },
      {
        name: "Розмарин",
        description: "Розмарин имеет хвойный, древесный аромат с нотками лимона и сосны.",
        origin: "Средиземноморье",
        uses: ["Мясо", "Картофель", "Хлеб", "Оливковое масло"],
        image: "https://img.heroui.chat/image/food?w=400&h=300&u=rosemary"
      }
    ]
  },
  flowers: {
    title: "Цветы",
    description: "Специи из цветов обычно имеют нежный аромат и часто используются в десертах и напитках.",
    icon: "lucide:flower",
    spices: [
      {
        name: "Шафран",
        description: "Шафран — самая дорогая специя в мире, получаемая из рылец крокуса. Имеет сложный, медовый аромат.",
        origin: "Иран",
        uses: ["Ризотто", "Паэлья", "Десерты", "Хлеб"],
        image: "https://img.heroui.chat/image/food?w=400&h=300&u=saffron"
      },
      {
        name: "Лаванда",
        description: "Лаванда придает блюдам цветочный аромат с нотками мяты и розмарина.",
        origin: "Средиземноморье",
        uses: ["Десерты", "Выпечка", "Чай", "Коктейли"],
        image: "https://img.heroui.chat/image/food?w=400&h=300&u=lavender"
      },
      {
        name: "Гвоздика",
        description: "Гвоздика имеет сильный, сладкий аромат с нотками перца и цитрусовых.",
        origin: "Индонезия",
        uses: ["Выпечка", "Маринады", "Глинтвейн", "Соусы"],
        image: "https://img.heroui.chat/image/food?w=400&h=300&u=cloves"
      }
    ]
  }
};

const SpiceTypesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SpiceCategory>("seeds");

  const currentCategory = spiceCategories[activeCategory];

  return (
    <section id="types" className="py-20 px-4 bg-spice-gold/10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-spice-brown mb-4">
            Виды Специй и Трав
          </h2>
          <p className="text-lg text-spice-copper max-w-2xl mx-auto">
            Исследуйте разнообразие специй и трав, классифицированных по частям растений
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 px-2">
          {(Object.keys(spiceCategories) as SpiceCategory[]).map((category) => (
            <Button
              key={category}
              size="sm"
              color={activeCategory === category ? "primary" : "default"}
              variant={activeCategory === category ? "solid" : "flat"}
              className={`mb-2 ${activeCategory === category ? "bg-spice-copper text-spice-light" : "bg-spice-light text-spice-brown"}`}
              onPress={() => setActiveCategory(category)}
              startContent={<Icon icon={spiceCategories[category].icon} />}
            >
              {spiceCategories[category].title}
            </Button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-spice-light border-none shadow-lg mb-8">
              <CardBody className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-spice-gold p-3 rounded-full">
                    <Icon icon={currentCategory.icon} className="text-spice-brown text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-spice-brown">{currentCategory.title}</h3>
                </div>
                <p className="text-spice-copper mb-4">{currentCategory.description}</p>
              </CardBody>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCategory.spices.map((spice, index) => (
                <motion.div
                  key={spice.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-spice-light border-none shadow-lg h-full">
                    <CardBody className="p-0">
                      <Image
                        removeWrapper
                        alt={spice.name}
                        className="w-full h-48 object-cover"
                        src={spice.image}
                      />
                      <div className="p-4">
                        <h4 className="text-xl font-bold text-spice-brown mb-2">{spice.name}</h4>
                        <p className="text-spice-copper mb-4">{spice.description}</p>
                        
                        <div className="flex items-center gap-2 mb-3">
                          <Icon icon="lucide:map-pin" className="text-spice-copper" />
                          <span className="text-sm text-spice-brown">Происхождение: {spice.origin}</span>
                        </div>
                        
                        <h5 className="text-sm font-bold text-spice-brown mb-2">Применение:</h5>
                        <div className="flex flex-wrap gap-2">
                          {spice.uses.map((use, i) => (
                            <span 
                              key={i} 
                              className="bg-spice-gold/20 text-spice-brown text-xs px-2 py-1 rounded-full"
                            >
                              {use}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SpiceTypesSection;