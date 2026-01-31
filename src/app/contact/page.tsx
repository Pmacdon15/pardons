import { Suspense } from "react";
import { ContactForm } from "@/components/forms/contact-form";
import { ContactFormFallback } from "@/components/forms/contact-form-fallback";

export default function ContactPage(props: PageProps<"/contact">) {
  const subjectPromise = props.searchParams.then((params) =>
    Array.isArray(params.subject)
      ? params.subject[0]
      : (params.subject ?? "inquiry"),
  );

  return (
    <main className="grow py-20 bg-slate-50">
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
                help@notifications.pardonsareus.ca
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <p className="font-bold text-slate-900">Business Hours</p>
              <p className="text-slate-600">Mon - Fri: 9:00 AM - 5:00 PM EST</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
          <Suspense fallback={<ContactFormFallback />}>
            <ContactForm subjectPromise={subjectPromise} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
