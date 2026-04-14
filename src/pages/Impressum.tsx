import React from 'react';
import { Link } from 'react-router-dom';
import { MainWordLogoLizardo, LizardDrawing } from '../components/icons';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-twilight text-sand font-sans selection:bg-phosphor selection:text-ink overflow-x-hidden flex flex-col">
      {/* Navbar - Minimalist & Elegant */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-10 md:px-16 pointer-events-none bg-twilight/80 backdrop-blur-md">
        <Link to="/" className="w-24 md:w-32 text-sand pointer-events-auto">
          <MainWordLogoLizardo />
        </Link>
        <Link 
          to="/"
          className="bg-phosphor text-ink px-8 py-3 rounded-full font-sans text-xs uppercase tracking-[0.2em] hover:bg-sand transition-colors pointer-events-auto shadow-sm font-bold"
        >
          Zurück
        </Link>
      </nav>

      <main className="flex-grow pt-48 pb-32 px-6 max-w-3xl mx-auto w-full">
        <h1 className="text-5xl md:text-7xl font-serif font-black tracking-wide mb-16 text-sand">
          Impressum
        </h1>
        
        <div className="space-y-12 text-lg font-sans font-light text-sand/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif font-black text-sand mb-4">Angaben gemäß § 5 DDG</h2>
            <p>
              Daniel Lizardo<br />
              Oelschlägerstr. 13<br />
              70619 Stuttgart
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-black text-sand mb-4">Kontakt</h2>
            <p>
              Telefon: +49 15730666158<br />
              E-Mail: <a href="mailto:daniel@lizardo.com" className="text-phosphor hover:underline">daniel@lizardo.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-black text-sand mb-4">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p>
              Daniel Lizardo<br />
              Oelschlägerstr. 13<br />
              70619 Stuttgart
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-black text-sand mb-4">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-phosphor hover:underline break-all">
                https://ec.europa.eu/consumers/odr/
              </a>.
            </p>
            <p className="mt-4">
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-black text-sand mb-4">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-ink text-sand py-24 mt-auto">
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
