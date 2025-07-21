import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const Index = () => {
  const balloonTypes = [
    { name: "Фольгированные", icon: "Sparkles", color: "bg-balloon-pink" },
    { name: "Латексные", icon: "Circle", color: "bg-balloon-turquoise" },
    { name: "Гелиевые", icon: "Wind", color: "bg-balloon-yellow" },
    { name: "Фигурные", icon: "Heart", color: "bg-balloon-cheerful" }
  ];

  const bouquets = [
    {
      name: "Радужное настроение",
      price: "2500₽",
      description: "12 разноцветных шаров",
      image: "/img/b35e474c-ef60-4e9a-9c17-8cfe8524a2ae.jpg"
    },
    {
      name: "Нежность",
      price: "1800₽", 
      description: "8 розовых шаров с сердцами",
      image: "/img/b35e474c-ef60-4e9a-9c17-8cfe8524a2ae.jpg"
    },
    {
      name: "Праздничный микс",
      price: "3200₽",
      description: "15 шаров разных форм",
      image: "/img/b35e474c-ef60-4e9a-9c17-8cfe8524a2ae.jpg"
    }
  ];

  const reviews = [
    {
      name: "Анна К.",
      text: "Быстрая доставка! Шары держались неделю 💕",
      rating: 5
    },
    {
      name: "Михаил П.", 
      text: "Отличное качество, яркие цвета. Рекомендую!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-balloon-pink to-balloon-turquoise text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="PartyPopper" size={32} />
            <h1 className="text-2xl font-bold">Воздушные шары Сочи</h1>
          </div>
          <nav className="flex gap-6">
            <a href="#catalog" className="hover:underline">Каталог</a>
            <a href="#delivery" className="hover:underline">Доставка</a>
            <a href="#reviews" className="hover:underline">Отзывы</a>
            <a href="#contact" className="hover:underline">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-balloon-yellow/20 to-balloon-pink/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            🎈 Воздушные шары с доставкой в Сочи
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Создайте незабываемую атмосферу праздника! Яркие композиции из воздушных шаров для любого события.
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <Button size="lg" className="bg-balloon-pink hover:bg-balloon-pink/90 text-white px-8 py-3">
              <Icon name="Sparkles" className="mr-2" size={20} />
              Заказать букет
            </Button>
            <Button variant="outline" size="lg" className="border-balloon-pink text-balloon-pink px-8 py-3">
              Конструктор букетов
            </Button>
          </div>
          <div className="max-w-md mx-auto">
            <img src="/img/b35e474c-ef60-4e9a-9c17-8cfe8524a2ae.jpg" alt="Воздушные шары" className="rounded-2xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* Balloon Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Виды воздушных шаров</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {balloonTypes.map((type, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <div className={`w-16 h-16 ${type.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon name={type.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800">{type.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Bouquets */}
      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Популярные композиции</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {bouquets.map((bouquet, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-balloon-yellow/20 to-balloon-pink/20 p-4">
                  <img src={bouquet.image} alt={bouquet.name} className="w-full h-full object-cover rounded-lg" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{bouquet.name}</CardTitle>
                  <CardDescription>{bouquet.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-balloon-pink">{bouquet.price}</span>
                    <Button className="bg-balloon-pink hover:bg-balloon-pink/90">
                      <Icon name="ShoppingCart" className="mr-2" size={16} />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Balloon Constructor */}
      <section className="py-16 bg-gradient-to-r from-balloon-turquoise/10 to-balloon-yellow/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Конструктор букетов</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Создайте уникальную композицию из воздушных шаров по своему вкусу!
          </p>
          <Card className="max-w-4xl mx-auto p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-balloon-pink rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Palette" size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Выберите цвета</h3>
                <p className="text-gray-600">12 ярких оттенков на выбор</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-balloon-turquoise rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shapes" size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Выберите форму</h3>
                <p className="text-gray-600">Круглые, сердечки, звезды, цифры</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-balloon-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Package" size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Соберите букет</h3>
                <p className="text-gray-600">От 5 до 50 шаров в композиции</p>
              </div>
            </div>
            <Button size="lg" className="mt-8 bg-balloon-pink hover:bg-balloon-pink/90 px-12">
              Создать букет
            </Button>
          </Card>
        </div>
      </section>

      {/* Delivery Info */}
      <section id="delivery" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Условия доставки</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <Icon name="Truck" size={48} className="text-balloon-pink mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">По Сочи от 1-3 часов</p>
              <Badge className="mt-2 bg-balloon-yellow text-gray-800">Бесплатно от 2000₽</Badge>
            </Card>
            <Card className="text-center p-6">
              <Icon name="Clock" size={48} className="text-balloon-pink mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Работаем 24/7</h3>
              <p className="text-gray-600">Доставим в любое время</p>
              <Badge className="mt-2 bg-balloon-turquoise text-white">Срочные заказы</Badge>
            </Card>
            <Card className="text-center p-6">
              <Icon name="MapPin" size={48} className="text-balloon-pink mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Вся территория Сочи</h3>
              <p className="text-gray-600">Центр, Адлер, Хоста, Красная поляна</p>
              <Badge className="mt-2 bg-balloon-pink text-white">+150₽ за МКАД</Badge>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-balloon-pink rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-balloon-yellow fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{review.text}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-gradient-to-r from-balloon-pink to-balloon-turquoise text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Свяжитесь с нами</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <Icon name="Phone" size={32} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p>+7 (862) 123-45-67</p>
            </div>
            <div>
              <Icon name="MessageCircle" size={32} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <p>+7 (862) 123-45-67</p>
            </div>
            <div>
              <Icon name="Instagram" size={32} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instagram</h3>
              <p>@balloons_sochi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="PartyPopper" size={24} />
            <span className="text-xl font-bold">Воздушные шары Сочи</span>
          </div>
          <p className="text-gray-400 mb-4">Создаем праздничное настроение с 2020 года</p>
          <div className="flex justify-center gap-4">
            <Icon name="Heart" size={20} className="text-balloon-pink" />
            <span className="text-gray-400">Сделано с любовью в Сочи</span>
            <Icon name="Heart" size={20} className="text-balloon-pink" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;