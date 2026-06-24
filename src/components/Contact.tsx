import { useState } from 'react';
import { ArrowRight, Check, Mail, Calendar, MessageSquare } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const services = ['Instagram DM Automation', 'AI Chatbot', 'Email & Lead Automation', 'Not sure yet'];

export function Contact() {
  const ref = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', service: services[0], message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <div className="reveal">
            <span className="text-xs font-semibold tracking-widest uppercase text-accent-2">Get started</span>
            <h2 className="text-white mt-4 mb-5 text-balance">Let&apos;s find what to automate first.</h2>
            <p className="text-lg text-muted leading-relaxed mb-10 text-pretty">
              Tell me a little about your business and where the bottlenecks are. I&apos;ll reply
              within 24 hours with a few ideas — no pitch, no pressure.
            </p>

            <ul className="flex flex-col gap-5">
              <ContactItem icon={Calendar} title="Free strategy call" text="A 30-minute call to map your biggest automation wins." />
              <ContactItem icon={Mail} title="hello@nova.ai" text="Prefer email? Reach out anytime." />
              <ContactItem icon={MessageSquare} title="Fast turnaround" text="Most builds go live within 1–3 weeks." />
            </ul>
          </div>

          <div className="reveal delay-r1">
            <div className="bg-surface border border-border rounded-2xl p-7 md:p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]">
              {submitted ? (
                <div className="flex flex-col items-center text-center py-12">
                  <span className="flex items-center justify-center w-14 h-14 rounded-full bg-accent/15 text-accent-2 mb-5">
                    <Check className="w-7 h-7" />
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2">Message sent</h3>
                  <p className="text-muted max-w-xs">
                    Thanks, {form.name || 'there'}! I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <Field label="Name">
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="form-input"
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="form-input"
                    />
                  </Field>
                  <Field label="What do you need?">
                    <select name="service" value={form.service} onChange={handleChange} className="form-input">
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-surface">
                          {s}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Tell me about your business">
                    <textarea
                      required
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="We get a lot of Instagram DMs we can't keep up with..."
                      className="form-input resize-none"
                    />
                  </Field>
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 bg-accent text-bg text-sm font-semibold px-8 py-3.5 rounded-lg shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:bg-[#33ddff] hover:shadow-[0_8px_32px_rgba(0,212,255,0.45)] transition-all"
                  >
                    Send message
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-white">{label}</span>
      {children}
    </label>
  );
}

function ContactItem({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Mail;
  title: string;
  text: string;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-accent/15 text-accent-2 shrink-0">
        <Icon className="w-5 h-5" />
      </span>
      <div>
        <div className="text-sm font-semibold text-white">{title}</div>
        <div className="text-sm text-muted">{text}</div>
      </div>
    </li>
  );
}
