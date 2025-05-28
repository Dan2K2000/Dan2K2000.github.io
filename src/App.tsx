import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import IntroSection from "./components/IntroSection";
import TimelineSection from "./components/TimelineSection";
import InfographicSection from "./components/InfographicSection";
import SpiceTypesSection from "./components/SpiceTypesSection";
import TopSpicesSection from "./components/TopSpicesSection";
import RecipesSection from "./components/RecipesSection";

function App() {
  return (
    <div className="min-h-screen bg-spice-cream bg-spice-pattern">
      <Navbar className="bg-spice-gold/90 backdrop-blur-md border-b border-spice-copper/20">
        <NavbarBrand>
          <Icon icon="lucide:leaf" className="text-spice-brown text-2xl mr-2" />
          <p className="font-bold text-spice-brown font-serif text-xl">Мир Специй</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#intro" className="text-spice-brown">
              О специях
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#timeline" className="text-spice-brown">
              История
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#infographic" className="text-spice-brown">
              Инфографика
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#types" className="text-spice-brown">
              Виды
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#top" className="text-spice-brown">
              Топ-5
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#recipes" className="text-spice-brown">
              Рецепты
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="sm:hidden">
            <Button
              isIconOnly
              variant="light"
              className="text-spice-brown"
              aria-label="Menu"
              onPress={() => document.getElementById('mobile-menu')?.classList.toggle('hidden')}
            >
              <Icon icon="lucide:menu" className="text-2xl" />
            </Button>
          </NavbarItem>
          <NavbarItem className="hidden sm:flex">
            <Button 
              color="primary" 
              variant="flat" 
              className="bg-spice-copper text-spice-light hover:bg-spice-brown"
              endContent={<Icon icon="lucide:book-open" />}
            >
              Каталог
            </Button>
          </NavbarItem>
        </NavbarContent>

        {/* Mobile menu */}
        <div id="mobile-menu" className="hidden sm:hidden fixed inset-0 z-50 bg-spice-gold/95 backdrop-blur-md pt-16">
          <div className="container mx-auto px-4 py-8">
            <Button
              isIconOnly
              variant="light"
              className="absolute top-4 right-4 text-spice-brown"
              aria-label="Close menu"
              onPress={() => document.getElementById('mobile-menu')?.classList.add('hidden')}
            >
              <Icon icon="lucide:x" className="text-2xl" />
            </Button>
            
            <div className="flex flex-col gap-6 items-center">
              {[
                { href: "#intro", label: "О специях" },
                { href: "#timeline", label: "История" },
                { href: "#infographic", label: "Инфографика" },
                { href: "#types", label: "Виды" },
                { href: "#top", label: "Топ-5" },
                { href: "#recipes", label: "Рецепты" }
              ].map((item) => (
                <Link 
                  key={item.href}
                  href={item.href}
                  className="text-spice-brown text-xl font-medium"
                  onPress={() => document.getElementById('mobile-menu')?.classList.add('hidden')}
                >
                  {item.label}
                </Link>
              ))}
              
              <Button 
                color="primary" 
                variant="flat" 
                className="bg-spice-copper text-spice-light hover:bg-spice-brown mt-4 w-full max-w-xs"
                endContent={<Icon icon="lucide:book-open" />}
              >
                Каталог
              </Button>
            </div>
          </div>
        </div>
      </Navbar>

      <main>
        <IntroSection />
        <TimelineSection />
        <InfographicSection />
        <SpiceTypesSection />
        <TopSpicesSection />
        <RecipesSection />
      </main>

      <footer className="bg-spice-brown text-spice-light p-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Мир Специй</h3>
              <p className="text-sm opacity-80">
                Ваш путеводитель в мире ароматных специй и трав. Откройте для себя новые вкусы и ароматы.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Ссылки</h3>
              <ul className="space-y-2">
                <li><Link href="#intro" className="text-spice-light opacity-80 hover:opacity-100">О специях</Link></li>
                <li><Link href="#timeline" className="text-spice-light opacity-80 hover:opacity-100">История</Link></li>
                <li><Link href="#recipes" className="text-spice-light opacity-80 hover:opacity-100">Рецепты</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <div className="flex items-center gap-2 mb-2">
                <Icon icon="lucide:mail" className="text-spice-light" />
                <span className="opacity-80">info@mirspecy.ru</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="lucide:phone" className="text-spice-light" />
                <span className="opacity-80">+7 (999) 123-45-67</span>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-spice-light/20 text-center text-sm opacity-60">
            © 2024 Мир Специй. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;