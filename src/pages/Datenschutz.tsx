import React from 'react';
import { Link } from 'react-router-dom';
import { MainWordLogoLizardo, LizardDrawing } from '../components/icons';

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans selection:bg-g-yellow selection:text-charcoal overflow-x-hidden flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-10 md:px-16 pointer-events-none bg-cream/80 backdrop-blur-md">
        <Link to="/" className="w-24 md:w-32 text-g-blue pointer-events-auto">
          <MainWordLogoLizardo />
        </Link>
        <Link 
          to="/"
          className="bg-g-red text-white px-8 py-3 rounded-full font-sans text-xs uppercase tracking-[0.2em] hover:bg-g-yellow hover:text-charcoal transition-colors pointer-events-auto shadow-sm font-bold"
        >
          Zurück
        </Link>
      </nav>

      <main className="flex-grow pt-48 pb-32 px-6 max-w-3xl mx-auto w-full">
        <h1 className="text-5xl md:text-7xl font-serif font-black tracking-wide mb-16 text-charcoal">
          Datenschutzerklärung
        </h1>
        
        <div className="space-y-12 text-lg font-sans font-light text-charcoal/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif font-black text-charcoal mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl font-bold text-charcoal mb-2 mt-6">Allgemeine Hinweise</h3>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-black text-charcoal mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-xl font-bold text-charcoal mb-2 mt-6">Datenschutz</h3>
            <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
            <h3 className="text-xl font-bold text-charcoal mb-2 mt-6">Verantwortliche Stelle</h3>
            <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <p className="mt-2">
              Daniel Lizardo<br />
              <span className="reverse-contact">31 .rtsregälhcsleO</span><br />
              <span className="reverse-contact">tragttutS 91607</span><br />
              Telefon: <span className="reverse-contact">85166603751 94+</span><br />
              E-Mail: <span className="text-g-blue" dangerouslySetInnerHTML={{ __html: 'daniel&#64;lizardo&#46;co' }} />
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-black text-charcoal mb-4">3. Datenerfassung auf dieser Website</h2>
            <h3 className="text-xl font-bold text-charcoal mb-2 mt-6">Server-Log-Dateien</h3>
            <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mt-2">Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.</p>

            <h3 className="text-xl font-bold text-charcoal mb-2 mt-6">Kontaktformular (Formspark)</h3>
            <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
            <p className="mt-2">Für die sichere und zuverlässige Abwicklung unseres Kontaktformulars nutzen wir den Dienst <strong>Formspark</strong> (formspark.io), einen Service aus Belgien (EU). Wenn Sie das Formular absenden, werden Ihre eingegebenen Daten an die Server von Formspark in der Europäischen Union übermittelt und dort verarbeitet, um sie an unser E-Mail-Postfach weiterzuleiten.</p>
            <p className="mt-2">Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO). Wir haben mit Formspark einen Vertrag zur Auftragsverarbeitung (AVV) geschlossen, um den Schutz Ihrer Daten sicherzustellen.</p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-charcoal text-cream py-24 mt-auto">
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
