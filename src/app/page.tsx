"use client";

import Image from "next/image";
import {
  Search,
  Home as HomeIcon,
  Phone,
  Shield,
  CheckCircle,
  MapPin,
  Bed,
  Bath,
  Square,
  Users,
  Star,
  FileText,
  Calculator,
  Newspaper,
  Mail,
  Building2,
  LandPlot,
  Store,
  Briefcase,
  ArrowRight,
  ChevronDown,
  Award,
  Target,
  Zap,
  Heart,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-5">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Image
                  src="/logo.svg"
                  alt="Home Soo Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">
                  Home Soo
                </span>
                <span className="text-xs text-gray-500 -mt-1">
                  Nieruchomości
                </span>
              </div>
            </Link>

            <nav className="flex items-center gap-1">
              <Link
                href="#kupno"
                className="px-5 py-2.5 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200 font-medium text-sm"
              >
                Kupno
              </Link>
              <Link
                href="#sprzedaz"
                className="px-5 py-2.5 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200 font-medium text-sm"
              >
                Sprzedaż
              </Link>
              <Link
                href="#agenci"
                className="px-5 py-2.5 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200 font-medium text-sm"
              >
                Agenci
              </Link>
              <Link
                href="#o-nas"
                className="px-5 py-2.5 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200 font-medium text-sm"
              >
                O Nas
              </Link>
            </nav>

            <button className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-8 py-2.5 rounded-full hover:from-indigo-700 hover:to-indigo-600 transition-all duration-200 font-semibold text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Kontakt
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="Home Soo Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent leading-tight">
                  Home Soo
                </span>
                <span className="text-[10px] text-gray-500 -mt-0.5 leading-tight">
                  Nieruchomości
                </span>
              </div>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <nav
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen
                ? "max-h-96 opacity-100 mt-4 pb-4 border-t border-gray-200 pt-4"
                : "max-h-0 opacity-0 mt-0 pb-0 pt-0 border-t-0"
            }`}
          >
            <div className="flex flex-col gap-2">
              <Link
                href="#kupno"
                className="px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors font-medium"
              >
                Kupno
              </Link>
              <Link
                href="#sprzedaz"
                className="px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors font-medium"
              >
                Sprzedaż
              </Link>
              <Link
                href="#agenci"
                className="px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors font-medium"
              >
                Agenci
              </Link>
              <Link
                href="#o-nas"
                className="px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors font-medium"
              >
                O Nas
              </Link>
              <button className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-6 py-3 rounded-full hover:from-indigo-700 hover:to-indigo-600 transition-all font-semibold w-full mt-2 shadow-lg">
                Kontakt
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-65px)] md:min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-houses.jpg"
            alt="Modern houses"
            fill
            className="object-cover scale-105 transition-transform duration-700 hover:scale-100"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-12 md:py-16 pt-20 md:pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-left animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight animate-fade-in">
                Znajdź Wymarzoną
                <span className="block bg-gradient-to-r from-indigo-300 via-white to-indigo-300 bg-clip-text text-transparent animate-fade-in-delay">
                  Nieruchomość
                </span>
              </h1>

              <p className="text-base md:text-lg text-gray-200 mb-6 md:mb-8 leading-relaxed">
                Tysiące zweryfikowanych ofert. Profesjonalna obsługa.
                <span className="block mt-2">
                  Twoje wymarzone miejsce czeka.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-10">
                <button className="group bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:from-indigo-700 hover:to-indigo-600 transition-all duration-300 font-semibold text-base md:text-lg shadow-2xl hover:shadow-indigo-500/50 transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2 animate-fade-in-up">
                  <Search className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                  Szukaj Nieruchomości
                </button>
                <button
                  className="group bg-white/10 backdrop-blur-md text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-white/20 transition-all duration-300 font-semibold text-base md:text-lg border-2 border-white/30 hover:border-white/50 hover:scale-105 flex items-center justify-center gap-2 animate-fade-in-up"
                  style={{ animationDelay: "0.1s" }}
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                  Skontaktuj się
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-white/20">
                <div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">
                    500+
                  </div>
                  <div className="text-xs md:text-sm text-gray-300">
                    Transakcji
                  </div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">
                    15
                  </div>
                  <div className="text-xs md:text-sm text-gray-300">
                    Lat doświadczenia
                  </div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">
                    1000+
                  </div>
                  <div className="text-xs md:text-sm text-gray-300">
                    Zadowolonych
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Search form */}
            <div className="lg:pl-8 animate-slide-in-right">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 lg:p-8 animate-scale-in">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Szukaj nieruchomości
                </h2>
                <div className="space-y-4">
                  {/* Type selector */}
                  <div className="flex gap-2 p-1 bg-gray-100 rounded-lg">
                    <button className="flex-1 px-4 py-2.5 text-sm font-semibold rounded-md bg-indigo-600 text-white transition-all">
                      Kupno
                    </button>
                    <button className="flex-1 px-4 py-2.5 text-sm font-semibold rounded-md text-gray-700 hover:bg-white transition-all">
                      Wynajem
                    </button>
                  </div>

                  <div className="relative">
                    <Search
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <input
                      type="text"
                      placeholder="Lokalizacja"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                  </div>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
                    <option>Typ nieruchomości</option>
                    <option>Mieszkanie</option>
                    <option>Dom</option>
                    <option>Apartament</option>
                    <option>Działka</option>
                    <option>Lokal użytkowy</option>
                  </select>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
                    <option>Cena maksymalna</option>
                    <option>do 300 000 zł</option>
                    <option>do 500 000 zł</option>
                    <option>do 800 000 zł</option>
                    <option>do 1 200 000 zł</option>
                    <option>powyżej 1 200 000 zł</option>
                  </select>
                  <button className="w-full bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-6 py-4 rounded-lg hover:from-indigo-700 hover:to-indigo-600 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    Szukaj
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/80" />
        </div>
      </section>

      {/* Featured Properties */}
      <section className="container mx-auto px-4 py-20 animate-fade-in-up">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center lg:text-left animate-fade-in">
            Polecane Nieruchomości
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed text-center lg:text-left max-w-2xl lg:max-w-none">
            Home Soo to profesjonalne biuro nieruchomości oferujące kompleksową
            obsługę w zakresie kupna, sprzedaży i wynajmu nieruchomości. Nasz
            zespół doświadczonych agentów pomoże Ci znaleźć wymarzoną
            nieruchomość lub sprzedać Twoją obecną. Zapewniamy pełne wsparcie na
            każdym etapie transakcji oraz profesjonalne doradztwo dostosowane do
            Twoich potrzeb.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <PropertyCard
                image="/property-1.jpg"
                price="1 450 000 zł"
                beds={3}
                baths={2}
                sqft={140}
                location="WARSZAWA, MOKOTÓW"
              />
            </div>
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <PropertyCard
                image="/property-2.jpg"
                price="850 000 zł"
                beds={2}
                baths={1}
                sqft={65}
                location="KRAKÓW, STARE MIASTO"
              />
            </div>
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <PropertyCard
                image="/property-3.jpg"
                price="4 500 zł/mies."
                beds={1}
                baths={1}
                sqft={35}
                location="WROCŁAW, CENTRUM"
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
            <div className="w-3 h-3 rounded-full border-2 border-indigo-600"></div>
            <div className="w-3 h-3 rounded-full border-2 border-indigo-600"></div>
            <div className="w-3 h-3 rounded-full border-2 border-indigo-600"></div>
            <span className="ml-4 text-gray-600">01 / 04</span>
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section className="bg-gray-50 py-20 animate-fade-in-up">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center animate-fade-in">
            Eksperci w Nieruchomościach Lokalnych i Międzynarodowych
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ExpertCard
              icon={<HomeIcon className="w-8 h-8" />}
              title="Wybierz"
              description="Przeglądaj setki nieruchomości i znajdź idealną dla siebie. Nasze zaawansowane filtry wyszukiwania pomogą Ci szybko zawęzić wybór do najlepszych opcji."
              linkText="Czytaj więcej"
            />
            <ExpertCard
              icon={<Phone className="w-8 h-8" />}
              title="Skontaktuj się"
              description="Nasz doświadczony zespół profesjonalistów jest gotowy, aby Ci pomóc. Skontaktuj się z nami, aby otrzymać spersonalizowane doradztwo i wsparcie na każdym etapie procesu."
              linkText="Czytaj więcej"
            />
          </div>
        </div>
      </section>

      {/* Additional Property Listing */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <PropertyCard
            image="/property-4.jpg"
            price="6 500 000 zł"
            beds={4}
            baths={3}
            sqft={260}
            location="WARSZAWA, WILANÓW"
            featured
          />
        </div>
      </section>

      {/* Dlaczego my? Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Dlaczego My?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon={<Award className="w-10 h-10" />}
              title="15 lat doświadczenia"
              description="Ponad dekada na rynku nieruchomości z tysiącami zadowolonych klientów."
            />
            <FeatureCard
              icon={<Target className="w-10 h-10" />}
              title="Szybka realizacja"
              description="Średni czas sprzedaży nieruchomości to zaledwie 45 dni dzięki naszym metodom."
            />
            <FeatureCard
              icon={<Zap className="w-10 h-10" />}
              title="Najlepsze ceny"
              description="Negocjujemy najlepsze warunki transakcji, oszczędzając Twój czas i pieniądze."
            />
            <FeatureCard
              icon={<Heart className="w-10 h-10" />}
              title="Indywidualne podejście"
              description="Każdy klient jest dla nas ważny - dostosowujemy ofertę do Twoich potrzeb."
            />
          </div>
        </div>
      </section>

      {/* Kategorie Nieruchomości */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Kategorie Nieruchomości
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <CategoryCard
              icon={<HomeIcon className="w-8 h-8" />}
              title="Mieszkania"
              count="250+"
            />
            <CategoryCard
              icon={<Building2 className="w-8 h-8" />}
              title="Domy"
              count="180+"
            />
            <CategoryCard
              icon={<LandPlot className="w-8 h-8" />}
              title="Działki"
              count="120+"
            />
            <CategoryCard
              icon={<Store className="w-8 h-8" />}
              title="Lokale użytkowe"
              count="90+"
            />
            <CategoryCard
              icon={<Briefcase className="w-8 h-8" />}
              title="Inwestycje"
              count="45+"
            />
          </div>
        </div>
      </section>

      {/* O nas Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">O Nas</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Home Soo to wiodące biuro nieruchomości w Polsce, działające od
                2009 roku. Specjalizujemy się w kompleksowej obsłudze transakcji
                nieruchomościowych na terenie całego kraju.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nasz zespół składa się z doświadczonych agentów, prawników i
                doradców finansowych, którzy zapewniają pełne wsparcie na każdym
                etapie procesu kupna, sprzedaży lub wynajmu nieruchomości.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <StatCard number="500+" label="Zrealizowanych transakcji" />
                <StatCard number="15" label="Lat doświadczenia" />
                <StatCard number="98%" label="Zadowolonych klientów" />
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/about-us.jpg"
                alt="O nas"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Zespół Section */}
      <section id="agenci" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Nasi Agenci
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <AgentCard
              name="Anna Kowalska"
              role="Senior Agent"
              specialization="Mieszkania i apartamenty"
              phone="+48 123 456 789"
              email="anna@homesoo.pl"
            />
            <AgentCard
              name="Piotr Nowak"
              role="Senior Agent"
              specialization="Domy i działki"
              phone="+48 123 456 790"
              email="piotr@homesoo.pl"
            />
            <AgentCard
              name="Maria Wiśniewska"
              role="Agent"
              specialization="Lokale użytkowe"
              phone="+48 123 456 791"
              email="maria@homesoo.pl"
            />
            <AgentCard
              name="Tomasz Lewandowski"
              role="Senior Agent"
              specialization="Nieruchomości inwestycyjne"
              phone="+48 123 456 792"
              email="tomasz@homesoo.pl"
            />
          </div>
        </div>
      </section>

      {/* Jak działamy Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Jak Działamy
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <ProcessStep
                step={1}
                title="Kontakt"
                description="Skontaktuj się z nami telefonicznie, mailowo lub przez formularz."
                icon={<Phone className="w-8 h-8" />}
              />
              <ProcessStep
                step={2}
                title="Wizyta"
                description="Umówimy się na spotkanie, aby poznać Twoje potrzeby i wymagania."
                icon={<MapPin className="w-8 h-8" />}
              />
              <ProcessStep
                step={3}
                title="Oferta"
                description="Przygotujemy dla Ciebie najlepsze oferty dopasowane do Twoich kryteriów."
                icon={<FileText className="w-8 h-8" />}
              />
              <ProcessStep
                step={4}
                title="Transakcja"
                description="Zapewniamy pełne wsparcie prawne i finansowe podczas finalizacji."
                icon={<CheckCircle className="w-8 h-8" />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Opinie klientów Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Opinie Naszych Klientów
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <TestimonialCard
              name="Jan Kowalski"
              location="Warszawa"
              rating={5}
              text="Profesjonalna obsługa od początku do końca. Pomogli mi znaleźć wymarzone mieszkanie w ciągu miesiąca. Polecam!"
            />
            <TestimonialCard
              name="Magdalena Nowak"
              location="Kraków"
              rating={5}
              text="Sprzedaż mojego mieszkania przebiegła szybko i sprawnie. Zespół Home Soo był zawsze dostępny i pomocny."
            />
            <TestimonialCard
              name="Robert Wiśniewski"
              location="Gdańsk"
              rating={5}
              text="Najlepsze biuro nieruchomości w mieście! Pomogli mi w znalezieniu idealnego domu dla mojej rodziny."
            />
          </div>
        </div>
      </section>

      {/* Kalkulator kredytu Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Kalkulator Kredytu Hipotecznego
          </h2>
          <div className="max-w-2xl mx-auto bg-gray-50 rounded-lg p-8">
            <MortgageCalculator />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Najczęściej Zadawane Pytania
          </h2>
          <div className="max-w-3xl mx-auto">
            <FAQItem
              question="Jak długo trwa proces sprzedaży nieruchomości?"
              answer="Średni czas sprzedaży nieruchomości w naszym biurze to około 45-60 dni. Czas ten zależy od lokalizacji, ceny i stanu nieruchomości."
            />
            <FAQItem
              question="Jakie są koszty sprzedaży nieruchomości?"
              answer="Koszty sprzedaży obejmują prowizję biura (zwykle 2-3% wartości nieruchomości) oraz koszty notarialne. Szczegóły omawiamy indywidualnie z każdym klientem."
            />
            <FAQItem
              question="Czy pomagacie w uzyskaniu kredytu hipotecznego?"
              answer="Tak, współpracujemy z wieloma bankami i pomagamy naszym klientom w uzyskaniu najlepszych warunków kredytowych."
            />
            <FAQItem
              question="Jak wygląda proces kupna nieruchomości?"
              answer="Proces obejmuje: wstępne ustalenia, przegląd ofert, wizyty w nieruchomościach, negocjacje, weryfikację prawną, podpisanie umowy przedwstępnej i finalizację transakcji u notariusza."
            />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Aktualności i Porady
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <BlogCard
              title="Jak przygotować mieszkanie do sprzedaży?"
              date="15 marca 2024"
              excerpt="Praktyczne porady dotyczące przygotowania mieszkania do sprzedaży, które pomogą zwiększyć jego wartość..."
            />
            <BlogCard
              title="Rynek nieruchomości w 2024 - prognozy"
              date="10 marca 2024"
              excerpt="Analiza aktualnej sytuacji na rynku nieruchomości i prognozy na najbliższe miesiące..."
            />
            <BlogCard
              title="Kredyt hipoteczny - na co zwrócić uwagę?"
              date="5 marca 2024"
              excerpt="Kompleksowy przewodnik po kredytach hipotecznych - od wyboru banku po finalizację transakcji..."
            />
          </div>
        </div>
      </section>

      {/* Partnerzy Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Nasi Partnerzy
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Współpracujemy z wiodącymi bankami, kancelariami prawnymi i firmami
            remontowymi, aby zapewnić naszym klientom kompleksową obsługę.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            <PartnerLogo name="Bank PKO" />
            <PartnerLogo name="Bank Pekao" />
            <PartnerLogo name="Kancelaria Prawna" />
            <PartnerLogo name="Remont Expert" />
            <PartnerLogo name="Notariusz" />
            <PartnerLogo name="Ubezpieczenia" />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-indigo-600 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Zapisz się do Newslettera
            </h2>
            <p className="text-indigo-100 mb-8">
              Otrzymuj najnowsze oferty nieruchomości i porady rynkowe prosto na
              swoją skrzynkę
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Twój adres email"
                className="flex-1 px-6 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
              />
              <button
                type="submit"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                Zapisz się
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Formularz kontaktowy Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Skontaktuj się z Nami
          </h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Imię i nazwisko"
                  className="px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
                <input
                  type="tel"
                  placeholder="Telefon"
                  className="px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <select className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
                <option>Interesuje mnie kupno</option>
                <option>Interesuje mnie sprzedaż</option>
                <option>Interesuje mnie wynajem</option>
                <option>Inne pytanie</option>
              </select>
              <textarea
                placeholder="Wiadomość"
                rows={5}
                className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Wyślij wiadomość
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Mapa Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Lokalizacje Naszych Nieruchomości
          </h2>
          <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg">Mapa z lokalizacjami nieruchomości</p>
                <p className="text-sm mt-2">
                  (Integracja z Google Maps lub OpenStreetMap)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Easy and Safe Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Łatwy i Bezpieczny Sposób na Zakup Nieruchomości
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <PropertyCard
              image="/property-5.jpg"
              price="1 350 000 zł"
              beds={3}
              baths={2}
              sqft={120}
              location="GDAŃSK, OLIVIA"
            />
            <PropertyCard
              image="/property-6.jpg"
              price="1 680 000 zł"
              beds={3}
              baths={2}
              sqft={150}
              location="POZNAŃ, JEŻYCE"
            />
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <FeatureCard
              icon={<Shield className="w-10 h-10" />}
              title="Bezpieczne Transakcje"
              description="Wszystkie transakcje są chronione najwyższymi standardami bezpieczeństwa i zgodności z prawem."
            />
            <FeatureCard
              icon={<CheckCircle className="w-10 h-10" />}
              title="Zweryfikowane Nieruchomości"
              description="Każda nieruchomość jest weryfikowana i sprawdzana przez nasz profesjonalny zespół."
            />
            <FeatureCard
              icon={<Phone className="w-10 h-10" />}
              title="Wsparcie 24/7"
              description="Nasz zespół obsługi klienta jest dostępny przez całą dobę, aby Ci pomóc."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-indigo-400 mb-4">
                Home Soo
              </h3>
              <p className="text-gray-400">
                Twój zaufany partner w poszukiwaniu idealnej nieruchomości.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Szybkie linki</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#kupno" className="hover:text-white">
                    Kupno
                  </Link>
                </li>
                <li>
                  <Link href="#sprzedaz" className="hover:text-white">
                    Sprzedaż
                  </Link>
                </li>
                <li>
                  <Link href="#agenci" className="hover:text-white">
                    Znajdź Agenta
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Usługi</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Zarządzanie Nieruchomościami
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Doradztwo Inwestycyjne
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Wsparcie Prawne
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: biuro@homesoo.pl</li>
                <li>Telefon: +48 123 456 789</li>
                <li>Adres: ul. Nieruchomości 123, Warszawa</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2024 Home Soo. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function PropertyCard({
  image,
  price,
  beds,
  baths,
  sqft,
  location,
  featured = false,
}: {
  image: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  location: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 min-w-0 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="relative h-64">
        <Image src={image} alt="Property" fill className="object-cover" />
      </div>
      <div className="p-6">
        <div className="text-2xl font-bold text-gray-800 mb-3 break-words">
          {price}
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-600 mb-3">
          <div className="flex items-center gap-1 whitespace-nowrap">
            <Bed size={18} />
            <span className="text-sm">{beds} syp.</span>
          </div>
          <div className="flex items-center gap-1 whitespace-nowrap">
            <Bath size={18} />
            <span className="text-sm">{baths} łaz.</span>
          </div>
          <div className="flex items-center gap-1 whitespace-nowrap">
            <Square size={18} />
            <span className="text-sm">
              {sqft} m<sup>2</sup>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <MapPin size={16} className="flex-shrink-0" />
          <span className="text-sm break-words">{location}</span>
        </div>
      </div>
    </div>
  );
}

function ExpertCard({
  icon,
  title,
  description,
  linkText,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
}) {
  return (
    <div className="bg-white rounded-lg border-2 border-indigo-600 p-8 hover:shadow-lg transition-shadow">
      <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        href="#"
        className="text-indigo-600 font-semibold hover:text-indigo-700"
      >
        {linkText} →
      </Link>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function CategoryCard({
  icon,
  title,
  count,
}: {
  icon: React.ReactNode;
  title: string;
  count: string;
}) {
  return (
    <Link
      href="#"
      className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow border-2 border-transparent hover:border-indigo-600"
    >
      <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-indigo-600 font-semibold">{count} ofert</p>
    </Link>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-indigo-600 mb-2">{number}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}

function AgentCard({
  name,
  role,
  specialization,
  phone,
  email,
}: {
  name: string;
  role: string;
  specialization: string;
  phone: string;
  email: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="h-64 bg-gray-200 flex items-center justify-center">
        <Users className="w-24 h-24 text-gray-400" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
        <p className="text-indigo-600 text-sm mb-2">{role}</p>
        <p className="text-gray-600 text-sm mb-4">{specialization}</p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <Phone size={16} />
            <span>{phone}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Mail size={16} />
            <span>{email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProcessStep({
  step,
  title,
  description,
  icon,
}: {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="text-center relative">
      <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
        {icon}
      </div>
      <div className="absolute top-10 -right-4 hidden md:block">
        <ArrowRight className="w-8 h-8 text-indigo-300" />
      </div>
      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xl mx-auto mb-3">
        {step}
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function TestimonialCard({
  name,
  location,
  rating,
  text,
}: {
  name: string;
  location: string;
  rating: number;
  text: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-600 mb-4 italic">&ldquo;{text}&rdquo;</p>
      <div>
        <p className="font-semibold text-gray-800">{name}</p>
        <p className="text-sm text-gray-600">{location}</p>
      </div>
    </div>
  );
}

function MortgageCalculator() {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-gray-700 mb-2">
          Wartość nieruchomości (zł)
        </label>
        <input
          type="number"
          placeholder="500 000"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Wkład własny (zł)</label>
        <input
          type="number"
          placeholder="100 000"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Oprocentowanie (%)</label>
        <input
          type="number"
          step="0.1"
          placeholder="6.5"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">
          Okres kredytowania (lata)
        </label>
        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
          <option>10</option>
          <option>15</option>
          <option>20</option>
          <option>25</option>
          <option>30</option>
        </select>
      </div>
      <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
        <Calculator className="w-5 h-5" />
        Oblicz ratę
      </button>
      <div className="bg-indigo-50 rounded-lg p-4 text-center">
        <p className="text-sm text-gray-600 mb-1">Szacunkowa rata miesięczna</p>
        <p className="text-2xl font-bold text-indigo-600">~ 2 500 zł</p>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
      <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
        <span className="font-semibold text-gray-800">{question}</span>
        <ChevronDown className="w-5 h-5 text-gray-600" />
      </button>
      <div className="px-6 pb-4 text-gray-600">{answer}</div>
    </div>
  );
}

function BlogCard({
  title,
  date,
  excerpt,
}: {
  title: string;
  date: string;
  excerpt: string;
}) {
  return (
    <Link
      href="#"
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <Newspaper className="w-16 h-16 text-gray-400" />
      </div>
      <div className="p-6">
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{excerpt}</p>
        <span className="text-indigo-600 font-semibold text-sm flex items-center gap-1">
          Czytaj więcej <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}

function PartnerLogo({ name }: { name: string }) {
  return (
    <div className="bg-white rounded-lg p-6 h-24 flex items-center justify-center border-2 border-gray-200 hover:border-indigo-600 transition-colors">
      <span className="text-gray-600 font-semibold text-sm text-center">
        {name}
      </span>
    </div>
  );
}
