import { FormEvent, useState } from 'react';
import { Check, Copy, ExternalLink, Mail, Send } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface ContactSectionProps {
  data: PortfolioData;
}

export function ContactSection({ data }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(data.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!senderName.trim() || !senderEmail.trim() || !message.trim()) {
      setFormError('Please fill in your name, email address, and message.');
      return;
    }
    setFormError('');
    setSubmitted(true);
  };

  const handleResetForm = () => {
    setSenderName('');
    setSenderEmail('');
    setSubject('');
    setMessage('');
    setSubmitted(false);
  };

  const professionalLinks = [
    { label: 'GitHub', url: data.social.github, handle: 'Code repositories & open-source' },
    { label: 'LinkedIn', url: data.social.linkedin, handle: 'Academic & professional profile' },
    { label: 'LeetCode', url: data.social.leetcode, handle: 'Algorithms & problem solving' },
  ];

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Contact Info & Links */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <p className="text-sm font-medium text-blue-600">05. Contact</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 text-balance">
                Let’s connect on internships, projects, or research.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Open to software engineering internships, collaborative academic
                projects, and technical conversations. Reach out directly via email
                or connect on the platforms below.
              </p>
            </div>

            {/* Direct Email Block */}
            <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-3">
              <p className="text-xs font-medium text-slate-500">
                Primary Email Address
              </p>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <a
                  href={`mailto:${data.email}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm"
                >
                  <Mail className="w-4 h-4 text-blue-600 shrink-0" aria-hidden="true" />
                  <span>{data.email}</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Professional Links */}
            <div className="space-y-3">
              <p className="text-xs font-medium text-slate-500">
                Professional Profiles
              </p>
              <div className="divide-y divide-slate-200 border border-slate-200 bg-white rounded-xl">
                {professionalLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 px-5 py-3.5 hover:bg-slate-50 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    <div>
                      <p className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                        {link.label}
                      </p>
                      <p className="text-xs text-slate-500">{link.handle}</p>
                    </div>
                    <ExternalLink
                      className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors shrink-0"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl">
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-11 h-11 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-slate-900">
                    Thank you, {senderName}
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Your inquiry regarding{' '}
                    <span className="font-medium text-slate-800">
                      {subject || 'connecting'}
                    </span>{' '}
                    has been prepared. You can also send it directly via your
                    mail client to{' '}
                    <a
                      href={`mailto:${data.email}?subject=${encodeURIComponent(
                        subject || `Portfolio Inquiry from ${senderName}`
                      )}&body=${encodeURIComponent(message)}`}
                      className="text-blue-600 underline underline-offset-2"
                    >
                      {data.email}
                    </a>
                    .
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="px-4 py-2 text-xs font-medium text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="space-y-1">
                    <h3 className="font-display text-lg font-semibold text-slate-900">
                      Send a Direct Message
                    </h3>
                    <p className="text-xs text-slate-500">
                      Questions about my coursework, projects, or availability? Write below.
                    </p>
                  </div>

                  {formError && (
                    <p
                      role="alert"
                      className="text-xs font-medium text-rose-700 bg-rose-50 border border-rose-200 rounded-lg px-3.5 py-2.5"
                    >
                      {formError}
                    </p>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-medium text-slate-700"
                      >
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder="Priya Sharma"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F8F9FB] border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-medium text-slate-700"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        placeholder="priya@example.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F8F9FB] border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-medium text-slate-700"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Internship opportunity / Project collaboration"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F8F9FB] border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium text-slate-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your message here..."
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F8F9FB] border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors resize-y"
                    />
                  </div>

                  <div className="pt-1 flex items-center justify-between gap-4">
                    <span className="text-xs text-slate-500">
                      Responds within 24 hours
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                    >
                      <Send className="w-4 h-4" aria-hidden="true" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
