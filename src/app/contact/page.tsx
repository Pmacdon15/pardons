import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl grid md:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Whether you're ready to start your pardon application or just have
              some questions, we're here to help.
            </p>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <p className="font-bold text-slate-900">Email Us</p>
                <p className="text-primary hover:underline cursor-pointer">
                  help@pardonsareus.ca
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <p className="font-bold text-slate-900">Business Hours</p>
                <p className="text-slate-600">
                  Mon - Fri: 9:00 AM - 5:00 PM EST
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
            <form className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block font-bold text-sm uppercase tracking-wider text-slate-500"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block font-bold text-sm uppercase tracking-wider text-slate-500"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="block font-bold text-sm uppercase tracking-wider text-slate-500"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none"
                >
                  <option>General Inquiry</option>
                  <option>Interested in $100 Consultation</option>
                  <option>Eligibility Question</option>
                </select>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block font-bold text-sm uppercase tracking-wider text-slate-500"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="Tell us about your situation..."
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary-hover transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
