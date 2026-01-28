import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Clearing Your Path Forward
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              In Canada, getting a pardon (record suspension) is accessible and
              straightforward. We're here to show you how, or help you every
              step of the way.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-hover transition-all"
              >
                Get Professional Help
              </Link>
              <Link
                href="#diy"
                className="bg-slate-100 text-slate-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-200 transition-all"
              >
                Learn to DIY
              </Link>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section
          id="how-it-works"
          className="py-24 bg-slate-50 border-y border-slate-200"
        >
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Why Get a Pardon?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto mb-16 italic">
              "A record suspension opens doors that were previously closed."
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-white p-8 rounded-xl border border-slate-200">
                <h3 className="text-xl font-bold mb-4 text-primary">
                  Employment
                </h3>
                <p className="text-slate-600">
                  Open more doors for career opportunities without the weight of
                  a past record holding you back.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-slate-200">
                <h3 className="text-xl font-bold mb-4 text-primary">Travel</h3>
                <p className="text-slate-600">
                  Regain the ability to travel across borders with confidence
                  and peace of mind.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-slate-200">
                <h3 className="text-xl font-bold mb-4 text-primary">
                  Peace of Mind
                </h3>
                <p className="text-slate-600">
                  Close a chapter of your past and move forward toward a better,
                  more secure future.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DIY Section */}
        <section id="diy" className="py-24 container mx-auto px-6">
          <div className="bg-slate-900 text-white rounded-3xl p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Do It Yourself for Under $300
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              You don't need expensive legal services. Many Canadians
              successfully complete the process on their own.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-12 text-left bg-slate-800 p-8 rounded-2xl">
              <div>
                <p className="text-primary font-bold text-2xl mb-1">$50</p>
                <p className="text-sm opacity-60 uppercase tracking-widest font-semibold text-white">
                  PBC Fee
                </p>
              </div>
              <div>
                <p className="text-primary font-bold text-2xl mb-1">$150-200</p>
                <p className="text-sm opacity-60 uppercase tracking-widest font-semibold text-white">
                  Documentation
                </p>
              </div>
              <div>
                <p className="text-primary font-bold text-2xl mb-1">
                  &lt; $300
                </p>
                <p className="text-sm opacity-60 uppercase tracking-widest font-semibold text-white">
                  Total Cost
                </p>
              </div>
            </div>

            <Link
              href="https://www.canada.ca/content/dam/pbc-clcc/Forms/record-suspension/44-015-PBC-RecordSuspensionApplicationGuide2024_EN_updated%20November%202025.pdf"
              className="inline-block bg-white text-slate-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download PDF Application Guide
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="our-services"
          className="py-24 bg-slate-50 border-y border-slate-200"
        >
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Professional Assistance
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                If you need help navigating the process, we provide expert
                guidance for a simple flat fee.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <div className="bg-primary p-8 text-white text-center">
                <span className="text-5xl font-extrabold">$300</span>
                <p className="text-sm uppercase tracking-widest font-bold opacity-80 mt-2">
                  Plus Government Fees
                </p>
              </div>
              <div className="p-10 space-y-6">
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 text-slate-700">
                    <span className="text-primary font-bold italic">✓</span>
                    <span>
                      <strong>Phone Consultations:</strong> 2 x 30 min or 4 x 15
                      min calls.
                    </span>
                  </li>
                  <li className="flex items-center gap-4 text-slate-700">
                    <span className="text-primary font-bold italic">✓</span>
                    <span>
                      <strong>Email Support:</strong> Dedicated help for 6
                      months.
                    </span>
                  </li>
                  <li className="flex items-center gap-4 text-slate-700">
                    <span className="text-primary font-bold italic">✓</span>
                    <span>
                      <strong>Quality Assurance:</strong> We review all your
                      documents before submission.
                    </span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="block text-center bg-slate-900 text-white p-4 rounded-lg font-bold hover:bg-slate-800 transition-colors"
                >
                  Sign Up Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section
          id="eligibility"
          className="py-24 container mx-auto px-6 mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Eligibility & Wait Times
            </h2>
            <p className="text-slate-500">
              Ensure you have waited the necessary time before starting your
              application.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-10 rounded-2xl border border-slate-200 hover:border-primary transition-colors">
              <p className="text-primary font-black text-4xl mb-4">5 Years</p>
              <h3 className="text-xl font-bold mb-2">Summary Convictions</h3>
              <p className="text-slate-600 text-sm">
                Waiting period begins once all parts of your sentence are fully
                completed.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl border border-primary relative shadow-lg">
              <span className="absolute -top-3 right-8 bg-primary text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                Most Common
              </span>
              <p className="text-primary font-black text-4xl mb-4">10 Years</p>
              <h3 className="text-xl font-bold mb-2">Indictable Offenses</h3>
              <p className="text-slate-600 text-sm">
                Waiting period begins once all parts of your sentence are fully
                completed.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
