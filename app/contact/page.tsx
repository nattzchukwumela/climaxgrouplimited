import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Climax Group Limited",
  description:
    "Get in touch with Climax Group Limited to discuss real estate partnership opportunities.",
};

const contactDetails = [
  { label: "Email", value: "info@climaxgrouplimited.com" },
  { label: "Phone", value: "+000 000 0000" },
  { label: "Address", value: "To be updated" },
];

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="bg-[#1487be] text-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 text-center">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Interested in a partnership opportunity? We&apos;d love to hear
            from you.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Get in Touch
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Our contact details are being finalized. In the meantime, feel
            free to send us a message using the form.
          </p>
          <dl className="mt-8 flex flex-col gap-4">
            {contactDetails.map((item) => (
              <div key={item.label}>
                <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {item.label}
                </dt>
                <dd className="text-base text-zinc-900 dark:text-zinc-50">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
