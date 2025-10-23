import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface Tour {
  id: number;
  title: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  category: string;
}

const tours: Tour[] = [
  {
    id: 1,
    title: 'Байкал: Легенды и природа',
    description: 'Незабываемое путешествие по самому глубокому озеру планеты. Вы увидите уникальные пейзажи и услышите древние легенды.',
    duration: '2 дня',
    price: '15 000 ₽',
    image: 'https://cdn.poehali.dev/projects/96a3b66c-092f-4aff-8ac2-9833904970e9/files/328b6dd6-fb12-435f-ad02-ea5cb8b6a6f8.jpg',
    category: 'Природа'
  },
  {
    id: 2,
    title: 'Архитектура старого города',
    description: 'Прогулка по историческим кварталам с посещением деревянных построек и музеев.',
    duration: '4 часа',
    price: '3 500 ₽',
    image: 'https://cdn.poehali.dev/projects/96a3b66c-092f-4aff-8ac2-9833904970e9/files/161cd83c-e830-46f8-83de-4ac7ca460fce.jpg',
    category: 'Культура'
  },
  {
    id: 3,
    title: 'Зимнее приключение',
    description: 'Активный зимний тур с катанием на санях, посещением ледяных пещер и чаепитием у костра.',
    duration: '1 день',
    price: '8 000 ₽',
    image: 'https://cdn.poehali.dev/projects/96a3b66c-092f-4aff-8ac2-9833904970e9/files/68c74c97-49eb-4a04-973d-de5124e7b573.jpg',
    category: 'Приключения'
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Мария Иванова',
    text: 'Потрясающая экскурсия на Байкал! Гид был очень профессиональным и интересным. Обязательно вернусь еще.',
    rating: 5
  },
  {
    id: 2,
    name: 'Алексей Петров',
    text: 'Отличная организация, комфортабельный транспорт и незабываемые впечатления. Рекомендую всем!',
    rating: 5
  },
  {
    id: 3,
    name: 'Екатерина Смирнова',
    text: 'Зимний тур превзошел все ожидания! Море эмоций и красивейшие виды. Спасибо команде!',
    rating: 5
  }
];

export default function Index() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { toast } = useToast();

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время для подтверждения бронирования.',
    });
    setIsBookingOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Compass" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-secondary">Сибирский гид</span>
            </div>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('tours')} className="text-gray-700 hover:text-primary transition-colors">Экскурсии</button>
              <button onClick={() => scrollToSection('prices')} className="text-gray-700 hover:text-primary transition-colors">Цены</button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-primary transition-colors">Галерея</button>
              <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary transition-colors">О нас</button>
              <button onClick={() => scrollToSection('contacts')} className="text-gray-700 hover:text-primary transition-colors">Контакты</button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
                Откройте для себя Красноярск
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Незабываемые индивидуальные экскурсии по самым красивым местам Красноярска и его природным объектам. 
                Профессиональный гид с многолетним стажем, комфортный трансфер и море впечатлений.
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('tours')} className="text-lg px-8">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Забронировать
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('about')} className="text-lg px-8">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src={tours[0].image} 
                alt="Байкал" 
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="tours" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-secondary mb-4">Наши экскурсии</h2>
            <p className="text-xl text-gray-600">Выберите идеальное путешествие для себя</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {tour.category}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{tour.title}</CardTitle>
                  <CardDescription className="text-base">{tour.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Wallet" size={16} />
                      <span className="font-semibold text-primary">{tour.price}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Dialog open={isBookingOpen && selectedTour?.id === tour.id} onOpenChange={(open) => {
                    setIsBookingOpen(open);
                    if (open) setSelectedTour(tour);
                  }}>
                    <DialogTrigger asChild>
                      <Button className="w-full" size="lg">
                        <Icon name="Calendar" className="mr-2" size={18} />
                        Забронировать
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>Бронирование экскурсии</DialogTitle>
                        <DialogDescription>{tour.title}</DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleBooking} className="space-y-4">
                        <div>
                          <Label>Выберите дату</Label>
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            className="rounded-md border mt-2"
                            disabled={(date) => date < new Date()}
                          />
                        </div>
                        <div>
                          <Label htmlFor="time">Время</Label>
                          <Select>
                            <SelectTrigger id="time">
                              <SelectValue placeholder="Выберите время" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="09:00">09:00</SelectItem>
                              <SelectItem value="12:00">12:00</SelectItem>
                              <SelectItem value="15:00">15:00</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="name">Ваше имя</Label>
                          <Input id="name" placeholder="Иван Иванов" required />
                        </div>
                        <div>
                          <Label htmlFor="phone">Телефон</Label>
                          <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" required />
                        </div>
                        <div>
                          <Label htmlFor="guests">Количество человек</Label>
                          <Input id="guests" type="number" min="1" defaultValue="1" required />
                        </div>
                        <Button type="submit" className="w-full" size="lg">
                          Отправить заявку
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Цены</h2>
            <p className="text-xl text-gray-600">Прозрачные цены без скрытых платежей</p>
          </div>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="divide-y">
                {tours.map((tour) => (
                  <div key={tour.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-lg text-secondary">{tour.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">Продолжительность: {tour.duration}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{tour.price}</div>
                        <p className="text-gray-500 text-sm">за человека</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <div className="mt-8 text-center text-gray-600">
            <p>* Групповые скидки при бронировании для 5+ человек</p>
            <p>* Дети до 12 лет - скидка 50%</p>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Галерея</h2>
            <p className="text-xl text-gray-600">Фотографии из наших путешествий</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tours.map((tour, index) => (
              <div key={tour.id} className="relative group overflow-hidden rounded-xl animate-scale-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-semibold p-4">{tour.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Отзывы</h2>
            <p className="text-xl text-gray-600">Что говорят наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">О нас</h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p className="text-xl leading-relaxed">
              <strong className="text-secondary">Сибирский гид</strong> - это команда профессиональных гидов и энтузиастов, 
              влюбленных в природу и историю Сибири.
            </p>
            <p className="leading-relaxed">
              Мы организуем экскурсии с 2015 года и за это время показали красоты нашего региона 
              более чем 10 000 туристам из разных уголков России и мира.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <p className="text-gray-600">лет опыта</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">10 000+</div>
                <p className="text-gray-600">довольных туристов</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15</div>
                <p className="text-gray-600">уникальных маршрутов</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6 bg-secondary text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-gray-300">Свяжитесь с нами для бронирования</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Icon name="MapPin" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                  <p className="text-gray-300">г. Иркутск, ул. Ленина, 1</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Phone" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                  <p className="text-gray-300">+7 (3952) 123-456</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Mail" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-gray-300">info@sibirgid.ru</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Clock" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Режим работы</h3>
                  <p className="text-gray-300">Ежедневно с 9:00 до 20:00</p>
                </div>
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Напишите нам</CardTitle>
                  <CardDescription>Мы ответим в течение 24 часов</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="contact-name">Имя</Label>
                      <Input id="contact-name" placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Label htmlFor="contact-email">Email</Label>
                      <Input id="contact-email" type="email" placeholder="your@email.com" />
                    </div>
                    <div>
                      <Label htmlFor="message">Сообщение</Label>
                      <Textarea id="message" placeholder="Ваш вопрос..." rows={4} />
                    </div>
                    <Button type="submit" className="w-full">
                      <Icon name="Send" className="mr-2" size={18} />
                      Отправить
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary/90 text-white py-8 px-6 border-t border-gray-700">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Compass" className="text-primary" size={28} />
            <span className="text-xl font-bold">Сибирский гид</span>
          </div>
          <p className="text-gray-400">© 2024 Сибирский гид. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}