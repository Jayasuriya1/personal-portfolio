import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { BackButton } from './BackButton';
import { EmailChannelIcon, LinkedinIcon, GithubIcon, LeetCodeIcon, ExternalLinkIcon } from './AppIcons';

interface ContactViewProps {
  setPage: (page: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ setPage }) => {
  const { contact } = portfolioData;

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
    }
    if (errorMsg) setErrorMsg(null);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Valid email is required';
    }
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    setErrorMsg(null);

    const apiKey = import.meta.env.VITE_RESEND_API_KEY;
    const toEmail = import.meta.env.VITE_TO_EMAIL || 'jayasuriyaprogrammer@gmail.com';

    // If Resend API Key is not set or is still placeholder in .env
    if (!apiKey || apiKey === 'YOUR_RESEND_API_KEY') {
      setTimeout(() => {
        setSubmitted(true);
        setLoading(false);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }, 1000);
      return;
    }

    try {
      const endpoint = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? '/api/resend/emails'
        : 'https://api.resend.com/emails';

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          from: 'Portfolio Contact <onboarding@resend.dev>',
          to: [toEmail],
          subject: `New Portfolio Message from ${formData.name}`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; color: #1a1a1a; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; rounded: 8px;">
              <h2 style="color: #222; margin-top: 0;">New Inquiry from Portfolio Website</h2>
              <p style="font-size: 15px; margin: 6px 0;"><strong>Sender Name:</strong> ${formData.name}</p>
              <p style="font-size: 15px; margin: 6px 0;"><strong>Sender Email:</strong> <a href="mailto:${formData.email}" style="color: #0A66C2;">${formData.email}</a></p>
              <hr style="border: none; border-top: 1px solid #eeeeee; margin: 20px 0;" />
              <p style="font-size: 14px; font-weight: bold; color: #555; margin-bottom: 8px;">Message:</p>
              <blockquote style="background: #f8f9fa; border-left: 4px solid #f5e6a3; padding: 14px 18px; margin: 0; font-size: 15px; line-height: 1.6; color: #333;">
                ${formData.message.replace(/\n/g, '<br/>')}
              </blockquote>
            </div>
          `,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.message || 'Failed to send email via Resend. Please check your API key.');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Network error sending email. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  const getChannelBrand = (type: string) => {
    switch (type) {
      case 'email':
        return {
          icon: <EmailChannelIcon size={22} className="text-[#EA4335]" />,
          badgeBg: 'bg-[#EA4335]/10',
          badgeBorder: 'border-[#EA4335]/30',
          hoverBorder: 'hover:border-[#EA4335]/60',
          hoverText: 'group-hover:text-[#EA4335]',
        };
      case 'linkedin':
        return {
          icon: <LinkedinIcon size={22} className="text-[#0A66C2]" />,
          badgeBg: 'bg-[#0A66C2]/10',
          badgeBorder: 'border-[#0A66C2]/30',
          hoverBorder: 'hover:border-[#0A66C2]/60',
          hoverText: 'group-hover:text-[#0A66C2]',
        };
      case 'github':
        return {
          icon: <GithubIcon size={22} className="text-[#E6EDF3]" />,
          badgeBg: 'bg-[#E6EDF3]/10',
          badgeBorder: 'border-[#E6EDF3]/30',
          hoverBorder: 'hover:border-[#E6EDF3]/60',
          hoverText: 'group-hover:text-[#E6EDF3]',
        };
      case 'leetcode':
        return {
          icon: <LeetCodeIcon size={22} className="text-[#FFA116]" />,
          badgeBg: 'bg-[#FFA116]/10',
          badgeBorder: 'border-[#FFA116]/30',
          hoverBorder: 'hover:border-[#FFA116]/60',
          hoverText: 'group-hover:text-[#FFA116]',
        };
      default:
        return {
          icon: <EmailChannelIcon size={22} className="text-[var(--accent)]" />,
          badgeBg: 'bg-[var(--accent-dim)]',
          badgeBorder: 'border-[var(--accent)]/30',
          hoverBorder: 'hover:border-[var(--accent)]',
          hoverText: 'group-hover:text-[var(--accent)]',
        };
    }
  };

  const inputClass = (field: string) =>
    `w-full bg-[#1c1c1f] border rounded-xl px-4 py-3 text-[var(--text)] text-[0.92rem] outline-none placeholder:text-[var(--text-muted)] transition-all duration-200 ${
      errors[field]
        ? 'border-red-500/60 focus:border-red-400 focus:ring-1 focus:ring-red-400/30'
        : 'border-[#323238] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]/30'
    }`;

  return (
    <div className="min-h-screen pt-10 md:pt-14 noise-bg overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-10 md:py-14 page-enter">
        <BackButton setPage={setPage} />

        <p className="font-heading font-semibold text-xs text-[var(--accent)] uppercase tracking-widest mb-2">
          Get in touch
        </p>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[var(--text)] mb-8 md:mb-10 accent-line">
          Contact Me
        </h2>

        {/* 2-Column Grid with Equal Height Alignment */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-stretch">
          
          {/* Left Column: Intro & Direct Channels */}
          <div className="flex flex-col justify-between gap-5 h-full">
            <p className="text-[var(--text-dim)] text-[0.98rem] leading-[1.75] font-normal">
              {contact.intro}
            </p>

            <div className="flex flex-col justify-between flex-1 gap-3.5 mt-1">
              {contact.links.map((link) => {
                const brand = getChannelBrand(link.type);
                return (
                  <a
                    key={link.title}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center justify-between px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl bg-[var(--bg-card)] border border-[#323238] ${brand.hoverBorder} hover:bg-[var(--bg-card-hover)] transition-all duration-200 group shadow-md shadow-black/20`}
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 flex-1">
                      <div className={`shrink-0 p-2.5 sm:p-3 rounded-xl ${brand.badgeBg} ${brand.badgeBorder} border group-hover:scale-105 transition-transform duration-200 flex items-center justify-center`}>
                        {brand.icon}
                      </div>
                      <div className="min-w-0 flex-1 flex flex-col justify-center">
                        <span className={`font-heading font-semibold text-[0.95rem] sm:text-base text-[var(--text)] ${brand.hoverText} transition-colors leading-snug`}>
                          {link.title}
                        </span>
                        <span className="text-[0.78rem] sm:text-xs text-[var(--text-muted)] font-mono truncate leading-snug">
                          {link.subtitle}
                        </span>
                      </div>
                    </div>
                    <span className={`text-[var(--text-muted)] ${brand.hoverText} group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 ml-3`}>
                      <ExternalLinkIcon size={15} />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-between gap-4 bg-[var(--bg-card)] border border-[#323238] p-6 sm:p-7 rounded-2xl shadow-xl shadow-black/30 backdrop-blur-sm h-full"
            noValidate
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-[var(--accent)] text-lg">✉️</span>
                  <h3 className="font-heading font-semibold text-lg text-[var(--text)]">
                    Send a Message
                  </h3>
                </div>
                <span className="text-[0.68rem] font-mono text-[var(--text-muted)] bg-[#1a1a1d] px-2 py-0.5 rounded border border-[#323238]">
                  via Resend
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.75rem] font-medium text-[var(--text-muted)] uppercase tracking-wider">
                  Name
                </label>
                <input
                  className={inputClass('name')}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  disabled={loading}
                />
                {errors.name && <span className="text-red-400 text-xs font-medium">{errors.name}</span>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.75rem] font-medium text-[var(--text-muted)] uppercase tracking-wider">
                  Email
                </label>
                <input
                  className={inputClass('email')}
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jayasuriyaprogrammer@gmail.com"
                  disabled={loading}
                />
                {errors.email && <span className="text-red-400 text-xs font-medium">{errors.email}</span>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.75rem] font-medium text-[var(--text-muted)] uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  className={`${inputClass('message')} min-h-[110px] resize-y`}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  disabled={loading}
                />
                {errors.message && <span className="text-red-400 text-xs font-medium">{errors.message}</span>}
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              {submitted && (
                <div className="bg-[var(--accent-dim)] border border-[var(--accent)] text-[var(--accent)] text-sm px-4 py-3 rounded-xl font-medium flex items-center gap-2 animate-fadeIn">
                  <span>✅</span> Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {errorMsg && (
                <div className="bg-red-500/10 border border-red-500/40 text-red-300 text-sm px-4 py-3 rounded-xl font-medium flex items-center gap-2 animate-fadeIn">
                  <span>⚠️</span> {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="bg-[var(--accent)] text-[#1a1a1a] font-heading font-bold text-[0.9rem] px-7 py-3.5 rounded-xl w-full sm:w-fit hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 shadow-lg shadow-[var(--accent)]/15 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#1a1a1a] border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span className="text-base">→</span>
                  </>
                )}
              </button>
            </div>
          </form>

        </div>

      </div>
    </div>
  );
};


