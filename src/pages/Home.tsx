import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Bush1, Bush2, Bush3, 
  DryTree1, DryTree2, DryTree3, 
  DryTreeDrawing, LizardDrawing, 
  MainWordLogoLizardo, SmallBushDrawing, SunCircle 
} from '../components/icons';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [isHoveringCTA, setIsHoveringCTA] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => {
        setIsModalOpen(false);
        setTimeout(() => setFormStatus('idle'), 300);
      }, 2000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-twilight text-sand font-sans selection:bg-phosphor selection:text-ink overflow-x-hidden">
      {/* Navbar - Minimalist & Elegant */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-10 md:px-16 pointer-events-none">
        <Link to="/" className="w-24 md:w-32 text-sand pointer-events-auto">
          <MainWordLogoLizardo />
        </Link>
        <button 
          onClick={() => setIsModalOpen(true)}
          onMouseEnter={() => setIsHoveringCTA(true)}
          onMouseLeave={() => setIsHoveringCTA(false)}
          className="bg-phosphor text-ink px-8 py-3 rounded-full font-sans text-xs uppercase tracking-[0.2em] hover:bg-sand transition-colors pointer-events-auto shadow-sm font-bold"
        >
          Hallo sagen
        </button>
      </nav>

      {/* Contact Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-twilight/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              className="bg-sand rounded-[2rem] p-12 md:p-16 max-w-xl w-full relative z-10 shadow-2xl"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-8 right-8 text-ink/50 hover:text-phosphor transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-5xl font-serif font-black tracking-wide mb-4 text-ink">Hallo sagen</h3>
              <p className="text-ink/60 font-sans mb-12 text-lg">Lass uns über dein nächstes Projekt sprechen.</p>

              {formStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-twilight text-sand p-8 rounded-2xl text-center font-serif text-2xl font-black"
                >
                  Danke! Wir melden uns in Kürze bei dir.
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label htmlFor="email" className="block text-xs font-sans uppercase tracking-[0.2em] text-ink/50 mb-3 pl-4 font-bold">
                      Deine E-Mail-Adresse
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-6 py-4 bg-twilight/10 border-none focus:ring-2 focus:ring-ink transition-shadow font-sans text-lg rounded-full outline-none text-ink placeholder:text-ink/30"
                      placeholder="hallo@beispiel.de"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-sans uppercase tracking-[0.2em] text-ink/50 mb-3 pl-4 font-bold">
                      Wonach suchst du?
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      className="w-full px-6 py-4 bg-twilight/10 border-none focus:ring-2 focus:ring-ink transition-shadow font-sans text-lg resize-none rounded-[2rem] outline-none text-ink placeholder:text-ink/30"
                      placeholder="Erzähl uns von deinen Zielen..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-phosphor text-ink px-8 py-5 rounded-full font-sans uppercase tracking-[0.2em] text-sm hover:bg-ink hover:text-sand transition-colors disabled:opacity-50 shadow-md flex items-center justify-center font-bold"
                  >
                    {formStatus === 'submitting' ? 'Wird gesendet...' : 'Nachricht senden'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Hero Section - Atmospheric Isolation */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-48 pb-64">
        {/* Massive Sun - Ghostly Background */}
        <div 
          className={`absolute -top-32 -right-32 md:-top-64 md:-right-64 w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] text-phosphor/10 pointer-events-none transition-transform duration-1000 ease-out z-0 ${isHoveringCTA ? 'scale-[1.02] translate-y-4' : ''}`}
        >
          <SunCircle className="w-full h-full" />
        </div>

        {/* Asymmetrical Tree Anchor - Bleeding off left */}
        <div 
          className={`absolute top-1/4 -left-32 md:-left-64 w-[400px] md:w-[800px] text-ink/40 pointer-events-none transition-transform duration-1000 ease-out z-0 ${isHoveringCTA ? '-rotate-1 -translate-x-4' : ''}`}
        >
          <DryTreeDrawing className="w-full h-auto" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-20 max-w-6xl mx-auto"
        >
          <h1 className="text-[14vw] md:text-[9rem] font-serif font-black tracking-widest leading-[0.85] text-sand mb-12 relative">
            Langweilig war <br className="hidden md:block" />
            <span className="text-sand italic font-black relative">
              gestern.
              {/* Signature Lizard - Moved down and to the right */}
              <div 
                className={`absolute -bottom-16 -right-20 md:-bottom-32 md:-right-56 w-24 md:w-40 text-ink transition-transform duration-700 ease-out ${isHoveringCTA ? 'translate-x-4 -translate-y-2 rotate-2' : ''}`}
              >
                <LizardDrawing className="w-full h-auto" />
              </div>
            </span>
          </h1>
          
          <p className="text-xl md:text-3xl font-sans font-light text-sand/70 max-w-2xl mx-auto mb-16 tracking-wide leading-relaxed">
            Social Media, das sich anfühlt wie deine Marke auf ihrem besten Tag. Jeden Tag.
          </p>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            onMouseEnter={() => setIsHoveringCTA(true)}
            onMouseLeave={() => setIsHoveringCTA(false)}
            className="inline-flex items-center gap-4 bg-phosphor text-ink px-10 py-5 rounded-full font-sans uppercase tracking-[0.2em] text-sm hover:bg-sand transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 font-bold"
          >
            Lass uns reden <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </section>

      {/* Intro / Wer wir sind - Massive Negative Space */}
      <section id="about" className="py-48 md:py-64 px-6 relative">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-serif font-black tracking-wide mb-16 text-sand">
            Klein. Hungrig. Gen Z.
          </h2>
          <div className="space-y-10 text-xl md:text-2xl font-sans font-light text-sand/70 leading-relaxed">
            <p>
              Wir sind aufgewachsen mit dem Algorithmus. Wir wissen, wie Leute scrollen, was sie stoppt und was sie weiterscrollen lässt.
            </p>
            <p>
              Wir bauen Social Media, das die richtigen Leute anzieht — die Leute, die bei dir kaufen, buchen oder anfragen. Dafür erzählen wir Geschichten, die deine Marke spürbar machen. Und messen jede Woche, ob sie wirken.
            </p>
          </div>
        </div>
      </section>

      {/* Was uns antreibt */}
      <section className="py-48 md:py-64 px-6 bg-sand text-ink relative overflow-hidden">
        {/* Ghostly Tree in background */}
        <div className="absolute top-1/2 right-0 w-[800px] text-twilight/10 -translate-y-1/2 translate-x-1/4 pointer-events-none">
          <DryTree2 className="w-full h-auto" />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-8xl font-serif font-black tracking-wide mb-16 leading-[1.1]">
            Geschichten.<br/>Ergebnisse.<br/>Sonst nichts.
          </h2>
          <div className="space-y-10 text-xl md:text-2xl font-sans font-medium text-ink/80 leading-relaxed max-w-2xl">
            <p>
              Deine Marke soll sich anfühlen wie ein Erlebnis — nicht wie eine Werbeanzeige. Jedes Reel, jede Story, jeder Post hat einen Grund. Und dieser Grund ist immer derselbe: die Leute erreichen, die wirklich zu dir passen.
            </p>
            <p>
              Trends nutzen wir, wenn sie zu dir passen. Alles hat ein Ziel, alles hat eine Richtung.
            </p>
          </div>
        </div>
      </section>

      {/* So arbeiten wir — Schritt für Schritt */}
      <section id="services" className="py-48 md:py-64 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="mb-32 relative z-10">
            <h2 className="text-5xl md:text-7xl font-serif font-black tracking-wide mb-6 text-sand">Vier Schritte.<br/>Kein Blabla.</h2>
          </div>

          <div className="space-y-32 relative z-10">
            {/* Schritt 1 */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-start group">
              <div className="text-8xl font-serif font-black text-ink/50 group-hover:text-phosphor transition-colors duration-500">01</div>
              <div className="flex-1 pt-4">
                <h3 className="text-3xl font-serif font-black tracking-wide mb-6 text-sand flex items-center gap-4">
                  <SmallBushDrawing className="w-8 h-8 text-phosphor/60" />
                  Zuhören
                </h3>
                <p className="font-sans font-light text-xl text-sand/70 leading-relaxed max-w-2xl">
                  Bevor wir irgendwas posten, wollen wir verstehen: Was willst du eigentlich? Wachsen? Neue Kunden gewinnen? Eine Stimme aufbauen, die Leute wiedererkennen? Dein Ziel bestimmt alles, was danach kommt.
                </p>
              </div>
            </div>

            {/* Schritt 2 */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-start group">
              <div className="text-8xl font-serif font-black text-ink/50 group-hover:text-phosphor transition-colors duration-500">02</div>
              <div className="flex-1 pt-4">
                <h3 className="text-3xl font-serif font-black tracking-wide mb-6 text-sand flex items-center gap-4">
                  <SmallBushDrawing className="w-8 h-8 text-phosphor/60" />
                  Strategie bauen
                </h3>
                <p className="font-sans font-light text-xl text-sand/70 leading-relaxed max-w-2xl">
                  Wir schauen uns an, was du hast — Budget, Ressourcen, Zeit — und bauen daraus einen Plan, der realistisch ist. Kein Luftschloss. Sondern ein klarer Fahrplan, der mit dem arbeitet, was da ist.
                </p>
              </div>
            </div>

            {/* Schritt 3 */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-start group">
              <div className="text-8xl font-serif font-black text-ink/50 group-hover:text-phosphor transition-colors duration-500">03</div>
              <div className="flex-1 pt-4">
                <h3 className="text-3xl font-serif font-black tracking-wide mb-6 text-sand flex items-center gap-4">
                  <SmallBushDrawing className="w-8 h-8 text-phosphor/60" />
                  Geschichten erzählen
                </h3>
                <p className="font-sans font-light text-xl text-sand/70 leading-relaxed max-w-2xl">
                  Hier passiert die eigentliche Arbeit. Wir produzieren Reels, entwickeln Formate und erzählen die Geschichten, die deine Zielgruppe wirklich interessieren. Kreativ, aber immer mit Ziel.
                </p>
              </div>
            </div>

            {/* Schritt 4 */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-start group">
              <div className="text-8xl font-serif font-black text-ink/50 group-hover:text-phosphor transition-colors duration-500">04</div>
              <div className="flex-1 pt-4">
                <h3 className="text-3xl font-serif font-black tracking-wide mb-6 text-sand flex items-center gap-4">
                  <SmallBushDrawing className="w-8 h-8 text-phosphor/60" />
                  Messen und anpassen
                </h3>
                <p className="font-sans font-light text-xl text-sand/70 leading-relaxed max-w-2xl">
                  Jede Woche schauen wir auf die Zahlen. Was funktioniert? Was geht noch besser? Wir treffen Entscheidungen aus den Daten. Du bekommst ein wöchentliches Reporting — klar, ehrlich, auf den Punkt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Abschluss */}
      <section className="relative bg-twilight overflow-hidden pt-32 pb-48">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-serif font-black tracking-widest mb-12 leading-[1.1] text-sand"
          >
            Klingt gut? <br/>Schreib uns.
          </motion.h2>
          <p className="text-xl md:text-2xl font-sans font-light text-sand/70 mb-16 max-w-2xl mx-auto">
            Kein Sales-Pitch, kein Druck. Wir reden kurz, schauen ob's passt — und wenn ja, legen wir los.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            onMouseEnter={() => setIsHoveringCTA(true)}
            onMouseLeave={() => setIsHoveringCTA(false)}
            className="bg-phosphor text-ink px-12 py-6 rounded-full font-sans uppercase tracking-[0.2em] text-sm hover:bg-sand transition-all duration-300 inline-flex items-center gap-4 shadow-xl hover:shadow-2xl hover:-translate-y-1 font-bold"
          >
            Lass uns reden <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-sand py-24">
        <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
          <div className="flex items-center gap-4 text-sand">
            <Link to="/" className="w-32 md:w-40">
              <MainWordLogoLizardo />
            </Link>
            <div className="w-12 md:w-16">
              <LizardDrawing className="w-full h-auto" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 font-sans text-xs uppercase tracking-[0.2em] text-sand/50 font-bold">
            <Link to="/impressum" className="hover:text-phosphor transition-colors">Impressum</Link>
            <a href="#" className="hover:text-phosphor transition-colors">Datenschutz</a>
          </div>
          <div className="font-sans text-xs uppercase tracking-[0.2em] text-sand/30 font-bold">
            © {new Date().getFullYear()} Lizardo.
          </div>
        </div>
      </footer>
    </div>
  );
}
