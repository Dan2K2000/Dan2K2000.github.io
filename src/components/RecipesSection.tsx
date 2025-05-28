import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, CardFooter, Image, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  author: string;
  authorAvatar: string;
  mainSpice: string;
  spices: string[];
  experience: string;
}

const recipes: Recipe[] = [
  {
    id: "moroccan-tagine",
    title: "Марокканский тажин с курицей",
    description: "Ароматное блюдо с курицей, оливками и лимоном, приготовленное в традиционной марокканской посуде.",
    image: "https://img.heroui.chat/image/food?w=600&h=400&u=moroccan",
    author: "Анна К.",
    authorAvatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=anna",
    mainSpice: "Куркума",
    spices: ["Куркума", "Корица", "Имбирь", "Кумин", "Кориандр"],
    experience: "Куркума придает блюду не только яркий цвет, но и глубокий, землистый вкус, который прекрасно сочетается с сладостью корицы и остротой имбиря."
  },
  {
    id: "indian-curry",
    title: "Индийское карри с нутом",
    description: "Вегетарианское карри с нутом, томатами и кокосовым молоком в индийском стиле.",
    image: "https://img.heroui.chat/image/food?w=600&h=400&u=curry",
    author: "Михаил П.",
    authorAvatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=mikhail",
    mainSpice: "Гарам масала",
    spices: ["Гарам масала", "Куркума", "Кориандр", "Чили", "Кардамон"],
    experience: "Гарам масала — это целая симфония вкусов в одной смеси. Она придает блюду сложный, многослойный аромат, который раскрывается постепенно с каждым кусочком."
  },
  {
    id: "italian-risotto",
    title: "Ризотто с шафраном",
    description: "Кремовое ризотто с шафраном, белым вином и пармезаном в лучших традициях итальянской кухни.",
    image: "https://img.heroui.chat/image/food?w=600&h=400&u=risotto",
    author: "Елена С.",
    authorAvatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=elena",
    mainSpice: "Шафран",
    spices: ["Шафран", "Белый перец", "Тимьян"],
    experience: "Шафран превращает обычное ризотто в настоящий праздник вкуса. Его медовые, цветочные ноты и характерный золотистый цвет делают блюдо по-настоящему особенным."
  },
  {
    id: "mexican-tacos",
    title: "Мексиканские такос с говядиной",
    description: "Острые такос с говядиной, свежей сальсой и гуакамоле в мексиканском стиле.",
    image: "https://img.heroui.chat/image/food?w=600&h=400&u=tacos",
    author: "Дмитрий В.",
    authorAvatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=dmitry",
    mainSpice: "Копченая паприка",
    spices: ["Копченая паприка", "Кумин", "Орегано", "Чили", "Кориандр"],
    experience: "Копченая паприка придает мясу глубокий, дымный вкус, который напоминает о приготовлении на открытом огне. Это не просто острота — это целая история в каждом кусочке."
  },
  {
    id: "thai-curry",
    title: "Тайское зеленое карри",
    description: "Ароматное карри с курицей, баклажанами и зеленым горошком в кокосовом молоке.",
    image: "https://img.heroui.chat/image/food?w=600&h=400&u=thai",
    author: "Ольга Н.",
    authorAvatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=olga",
    mainSpice: "Лемонграсс",
    spices: ["Лемонграсс", "Галангал", "Кафир-лайм", "Кориандр", "Чили"],
    experience: "Лемонграсс создает яркий, цитрусовый аромат, который пронизывает все блюдо. В сочетании с кокосовым молоком он создает неповторимый вкусовой профиль, который мгновенно переносит в Таиланд."
  },
  {
    id: "french-ratatouille",
    title: "Французский рататуй с прованскими травами",
    description: "Классическое овощное рагу с баклажанами, цуккини и томатами, приправленное прованскими травами.",
    image: "https://img.heroui.chat/image/food?w=600&h=400&u=ratatouille",
    author: "Сергей К.",
    authorAvatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=sergey",
    mainSpice: "Прованские травы",
    spices: ["Тимьян", "Розмарин", "Орегано", "Базилик", "Лавровый лист"],
    experience: "Смесь прованских трав создает аромат, который напоминает о солнечных полях Прованса. Каждая трава вносит свою ноту, и вместе они создают гармоничную композицию, которая подчеркивает вкус свежих овощей."
  }
];

const RecipesSection: React.FC = () => {
  return (
    <section id="recipes" className="py-20 px-4 bg-spice-gold/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-spice-brown mb-4">
            Рецепты от Пользователей
          </h2>
          <p className="text-lg text-spice-copper max-w-2xl mx-auto">
            Откройте для себя уникальные рецепты, в которых специи играют главную роль
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {recipes.map((recipe, index) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="recipe-card bg-spice-light border-none shadow-lg h-full">
                <CardBody className="p-0">
                  <Image
                    removeWrapper
                    alt={recipe.title}
                    className="w-full h-40 sm:h-48 object-cover"
                    src={recipe.image}
                  />
                  <div className="p-4 sm:p-5">
                    <h3 className="text-lg sm:text-xl font-bold text-spice-brown mb-2">{recipe.title}</h3>
                    <p className="text-sm sm:text-base text-spice-copper mb-4">{recipe.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon icon="lucide:flame" className="text-spice-copper" />
                        <span className="text-sm font-medium text-spice-brown">Главная специя: <span className="font-bold">{recipe.mainSpice}</span></span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {recipe.spices.map((spice, i) => (
                          <span 
                            key={i} 
                            className="bg-spice-gold/20 text-spice-brown text-xs px-2 py-1 rounded-full"
                          >
                            {spice}
                          </span>
                        ))}
                      </div>
                      
                      <div className="bg-spice-cream p-3 rounded-md">
                        <h4 className="text-sm font-bold text-spice-brown mb-2">Впечатления:</h4>
                        <p className="text-sm text-spice-copper italic">
                          {recipe.experience.split(recipe.mainSpice).map((part, i, arr) => 
                            i === arr.length - 1 ? part : (
                              <React.Fragment key={i}>
                                {part}<span className="spice-highlight">{recipe.mainSpice}</span>
                              </React.Fragment>
                            )
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardBody>
                <CardFooter className="border-t border-spice-gold/20 p-3 sm:p-4">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <Image
                        alt={recipe.author}
                        className="w-8 h-8 rounded-full object-cover"
                        src={recipe.authorAvatar}
                      />
                      <span className="text-sm text-spice-brown">{recipe.author}</span>
                    </div>
                    <Button 
                      size="sm" 
                      variant="flat" 
                      color="primary"
                      className="bg-spice-copper/10 text-spice-copper"
                    >
                      Подробнее
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipesSection;