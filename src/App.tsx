import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Heart, Users, Zap, X } from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate network request
    setTimeout(() => {
      setFormStatus('success');
      // Close modal after showing success message
      setTimeout(() => {
        setIsModalOpen(false);
        setTimeout(() => setFormStatus('idle'), 300); // Reset after animation
      }, 2000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-display selection:bg-emerald-200">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-2xl font-display font-bold tracking-tight">
          <span className="text-3xl">🦎</span>
          <span>Lizardo</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-500">
          <a href="#services" className="hover:text-emerald-500 transition-colors">Leistungen</a>
          <a href="#about" className="hover:text-emerald-500 transition-colors">Über uns</a>
          <a href="#work" className="hover:text-emerald-500 transition-colors">Projekte</a>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-emerald-500 transition-colors"
        >
          Hallo sagen
        </button>
      </nav>

      {/* Contact Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative z-10"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-3xl font-display font-bold mb-2">Hallo sagen 👋</h3>
              <p className="text-slate-500 mb-8">Lass uns über dein nächstes Projekt sprechen.</p>

              {formStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-emerald-50 text-emerald-700 p-6 rounded-2xl text-center font-medium border border-emerald-100"
                >
                  Danke! Wir melden uns in Kürze bei dir. 🦎
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Deine E-Mail-Adresse
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all bg-slate-50 focus:bg-white"
                      placeholder="hallo@beispiel.de"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Wonach suchst du?
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all resize-none bg-slate-50 focus:bg-white"
                      placeholder="Erzähl uns von deinen Zielen..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-emerald-400 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {formStatus === 'submitting' ? 'Wird gesendet...' : 'Nachricht senden'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-sm mb-6">
            ✨ Der neue beste Freund deiner Marke
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight mb-8 leading-tight">
            Bunte Strategien.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-400 to-rose-400">
              Glückliche Marken.
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Wir sind Lizardo. Eine minimalistische Social-Media-Agentur, die dir hilft, dich anzupassen, aufzufallen und online die beste Aufmerksamkeit zu erregen. 🦎
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-emerald-400 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2"
            >
              Jetzt wachsen <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto bg-slate-100 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-200 transition-colors">
              Unsere Arbeit
            </button>
          </div>
        </motion.div>
      </section>

      {/* Services */}
      <section id="services" className="bg-slate-50 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-display font-bold mb-4">Wie wir dir helfen, dich anzupassen & aufzufallen</h2>
            <p className="text-slate-500 text-lg">Alles, was du brauchst, um eine glückliche, florierende Community aufzubauen.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div whileHover={{ y: -10 }} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-rose-100 text-rose-500 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">Chamäleon-Content</h3>
              <p className="text-slate-500 leading-relaxed">
                Content, der sich perfekt an die Stimme deiner Marke anpasst und in vollen Feeds heraussticht.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div whileHover={{ y: -10 }} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-amber-100 text-amber-500 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">Gecko-Wachstum</h3>
              <p className="text-slate-500 leading-relaxed">
                Organisches Community-Management, das haftet. Wir bauen Beziehungen auf, die Follower zu Fans machen.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div whileHover={{ y: -10 }} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-violet-100 text-violet-500 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">Leguan-Insights</h3>
              <p className="text-slate-500 leading-relaxed">
                Blitzschnelle Analysen und Paid-Ad-Strategien, um die besten Leads wie Fliegen zu fangen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Big Motto Banner */}
      <section className="py-32 bg-emerald-400 text-slate-900 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-black tracking-tight mb-6"
          >
            Anpassen. Auffallen.<br />Gute Vibes einfangen. 🦎
          </motion.h2>
          <p className="text-xl font-medium opacity-80 max-w-2xl mx-auto">
            Bereit, deine Farben zu ändern und deine Marke wachsen zu lassen?
          </p>
        </div>
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-display font-bold tracking-tight mb-4 md:mb-0">
            <span>🦎</span>
            <span>Lizardo</span>
          </div>
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Lizardo Agentur. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
}
