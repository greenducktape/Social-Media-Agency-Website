import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MainWordLogoLizardo, LizardDrawing, SmallBushDrawing } from '../components/icons';

export default function Leistungen() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    setFormStatus('submitting');

    try {
      const response = await fetch('https://submit-form.com/AiJr23JHo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        setFormStatus('success');
        setTimeout(() => {
          setIsModalOpen(false);
          setTimeout(() => setFormStatus('idle'), 300);
        }, 2000);
      } else {
        setFormStatus('idle');
        alert('Hoppla! Da ist etwas schiefgelaufen. Bitte versuche es später noch einmal.');
      }
    } catch {
      setFormStatus('idle');
      alert('Hoppla! Da ist etwas schiefgelaufen. Bitte versuche es später noch einmal.');
    }
  };

  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans selection:bg-g-yellow selection:text-charcoal overflow-x-hidden">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-10 md:px-16 pointer-events-none">
        <Link to="/" className="w-24 md:w-32 text-g-blue pointer-events-auto">
          <MainWordLogoLizardo />
        </Link>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-g-red text-white px-8 py-3 rounded-full font-sans text-xs uppercase tracking-[0.2em] hover:bg-g-yellow hover:text-charcoal transition-colors pointer-events-auto shadow-sm font-bold"
        >
          Hallo sagen
        </button>
      </nav>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            onClick={() => setIsModalOpen(false)}
            className="absolute inset-0 bg-cream/90 backdrop-blur-md"
          />
          <div className="bg-white rounded-[2rem] p-12 md:p-16 max-w-xl w-full relative z-10 shadow-2xl border border-cream">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-8 right-8 text-charcoal/50 hover:text-g-red transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-5xl font-serif font-black tracking-wide mb-4 text-charcoal">Hallo sagen</h3>
            <p className="text-charcoal/60 font-sans mb-12 text-lg">Lass uns über dein nächstes Projekt sprechen.</p>
            {formStatus === 'success' ? (
              <div className="bg-cream text-charcoal p-8 rounded-2xl text-center font-serif text-2xl font-black">
                Danke! Wir melden uns in Kürze bei dir.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="email" className="block text-xs font-sans uppercase tracking-[0.2em] text-charcoal/50 mb-3 pl-4 font-bold">
                    Deine E-Mail-Adresse
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-6 py-4 bg-cream border-none focus:ring-2 focus:ring-g-blue transition-shadow font-sans text-lg rounded-full outline-none text-charcoal placeholder:text-charcoal/30"
                    placeholder="hallo@beispiel.de"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-sans uppercase tracking-[0.2em] text-charcoal/50 mb-3 pl-4 font-bold">
                    Wonach suchst du?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-6 py-4 bg-cream border-none focus:ring-2 focus:ring-g-blue transition-shadow font-sans text-lg resize-none rounded-[2rem] outline-none text-charcoal placeholder:text-charcoal/30"
                    placeholder="Erzähl uns von deinen Zielen..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-g-blue text-white px-8 py-5 rounded-full font-sans uppercase tracking-[0.2em] text-sm hover:bg-g-red transition-colors disabled:opacity-50 shadow-md flex items-center justify-center font-bold"
                >
                  {formStatus === 'submitting' ? 'Wird gesendet...' : 'Nachricht senden'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Header */}
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-charcoal/40 font-bold mb-8">
              Social Media Agentur Stuttgart
            </p>
            <h1 className="text-6xl md:text-8xl font-serif font-black tracking-wide leading-[0.95] text-charcoal mb-12">
              Unsere<br />
              <span className="text-g-blue italic">Leistungen.</span>
            </h1>
            <p className="text-xl md:text-2xl font-sans font-light text-charcoal/70 max-w-2xl leading-relaxed">
              Von der Strategie bis zum fertigen Reel — wir übernehmen deinen Social Media Auftritt.
              Kein Agentur-Bullshit. Nur das, was wirklich wirkt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-4">

          {/* Service 1 */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-[2rem] p-10 md:p-14 border border-cream/80"
          >
            <div className="flex items-start gap-6 mb-8">
              <SmallBushDrawing className="w-8 h-8 text-g-green flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-black tracking-wide text-charcoal mb-4">
                  Social Media Strategie
                </h2>
                <p className="font-sans font-light text-lg text-charcoal/70 leading-relaxed">
                  Kein Copy-Paste-Plan. Wir analysieren deine Ziele, deine Zielgruppe und deine Ressourcen — und bauen
                  daraus eine Strategie, die zu dir passt. Plattformwahl, Posting-Frequenz, Content-Säulen, Tonalität.
                  Alles aufeinander abgestimmt.
                </p>
              </div>
            </div>
            <ul className="ml-14 space-y-2 font-sans text-sm text-charcoal/50 uppercase tracking-[0.15em] font-bold">
              <li>— Zielgruppenanalyse</li>
              <li>— Plattformstrategie (Instagram, TikTok, LinkedIn)</li>
              <li>— Content-Konzept & Themenplanung</li>
              <li>— Wöchentliches Reporting</li>
            </ul>
          </motion.article>

          {/* Service 2 */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-g-yellow rounded-[2rem] p-10 md:p-14"
          >
            <div className="flex items-start gap-6 mb-8">
              <SmallBushDrawing className="w-8 h-8 text-charcoal/40 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-black tracking-wide text-charcoal mb-4">
                  Content Creation & Reels
                </h2>
                <p className="font-sans font-light text-lg text-charcoal/80 leading-relaxed">
                  Wir produzieren Content, der hält was er verspricht. TikToks, Reels, Story-Formate — kreativ,
                  aber immer mit Ziel. Wir entwickeln Formate, die zu deiner Marke passen und drehen
                  sie so, dass sie die richtige Zielgruppe stoppen.
                </p>
              </div>
            </div>
            <ul className="ml-14 space-y-2 font-sans text-sm text-charcoal/60 uppercase tracking-[0.15em] font-bold">
              <li>— TikTok & Reels Produktion</li>
              <li>— Formatentwicklung & Storytelling</li>
              <li>— Schnitt & Post-Production</li>
              <li>— Caption & Hashtag-Optimierung</li>
            </ul>
          </motion.article>

          {/* Service 3 */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-[2rem] p-10 md:p-14 border border-cream/80"
          >
            <div className="flex items-start gap-6 mb-8">
              <SmallBushDrawing className="w-8 h-8 text-g-green flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-black tracking-wide text-charcoal mb-4">
                  TikTok Marketing Stuttgart
                </h2>
                <p className="font-sans font-light text-lg text-charcoal/70 leading-relaxed">
                  TikTok ist nicht für jeden — aber wenn es für dich passt, ist es der schnellste Weg zur
                  Sichtbarkeit. Wir sind aufgewachsen mit dem Algorithmus. Wir wissen, was funktioniert,
                  was nicht — und vor allem warum.
                </p>
              </div>
            </div>
            <ul className="ml-14 space-y-2 font-sans text-sm text-charcoal/50 uppercase tracking-[0.15em] font-bold">
              <li>— Kanalaufbau & Optimierung</li>
              <li>— Trend-Analyse & Content-Ideen</li>
              <li>— Hooks & Scriptwriting</li>
              <li>— Analyse & Optimierung</li>
            </ul>
          </motion.article>

          {/* Service 4 */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-g-blue rounded-[2rem] p-10 md:p-14"
          >
            <div className="flex items-start gap-6 mb-8">
              <SmallBushDrawing className="w-8 h-8 text-white/50 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-black tracking-wide text-white mb-4">
                  Community Management
                </h2>
                <p className="font-sans font-light text-lg text-white/80 leading-relaxed">
                  Deine Marke lebt nicht nur durch Posts — sondern durch Interaktion. Wir beantworten
                  Kommentare, pflegen deine Community und sorgen dafür, dass deine Follower sich gesehen fühlen.
                  Weil echte Bindung langfristig mehr wert ist als Reichweite.
                </p>
              </div>
            </div>
            <ul className="ml-14 space-y-2 font-sans text-sm text-white/50 uppercase tracking-[0.15em] font-bold">
              <li>— Kommentar- & DM-Management</li>
              <li>— Community-Aufbau</li>
              <li>— Tonalität & Markenstimme</li>
              <li>— Monatliche Auswertung</li>
            </ul>
          </motion.article>

        </div>
      </section>

      {/* CTA */}
      <section className="py-48 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-serif font-black tracking-wide text-charcoal mb-10 leading-[1.05]">
            Bereit loszulegen?
          </h2>
          <p className="text-xl font-sans font-light text-charcoal/60 mb-14 leading-relaxed">
            Schreib uns kurz — kein Sales-Pitch, kein Druck.
            Wir schauen gemeinsam, was Sinn macht.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-4 bg-g-blue text-white px-10 py-5 rounded-full font-sans uppercase tracking-[0.2em] text-sm hover:bg-g-red transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 font-bold"
          >
            Jetzt Kontakt aufnehmen <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-cream py-24">
        <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
          <div className="flex items-center gap-4 text-cream">
            <Link to="/" className="w-32 md:w-40 text-white">
              <MainWordLogoLizardo />
            </Link>
            <div className="w-12 md:w-16 text-g-green">
              <LizardDrawing className="w-full h-auto" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 font-sans text-xs uppercase tracking-[0.2em] text-cream/50 font-bold">
            <Link to="/" className="hover:text-g-yellow transition-colors">Home</Link>
            <Link to="/leistungen" className="hover:text-g-yellow transition-colors">Leistungen</Link>
            <Link to="/impressum" className="hover:text-g-yellow transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-g-yellow transition-colors">Datenschutz</Link>
          </div>
          <div className="font-sans text-xs uppercase tracking-[0.2em] text-cream/30 font-bold">
            © {new Date().getFullYear()} Lizardo.
          </div>
        </div>
      </footer>
    </div>
  );
}
