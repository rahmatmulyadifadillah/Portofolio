import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquareText } from 'lucide-react';
import { WhatsAppIcon, InstagramIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

interface ContactSectionProps {
  language: 'en' | 'id';
}

export function ContactSection({ language }: ContactSectionProps) {
  const [senderName, setSenderName] = useState('');
  const [senderMessage, setSenderMessage] = useState('');
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSendViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo Rahmat, nama saya ${senderName ? senderName : 'Calon Klien'}. %0A%0A${senderMessage || 'Saya ingin berdiskusi mengenai proyek website.'}`;
    window.open(`https://wa.me/6281339638842?text=${text}`, '_blank');
  };

  const handleSendViaEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Proyek Website dari ${senderName || 'Calon Klien'}`);
    const body = encodeURIComponent(`Halo Rahmat,\n\nNama: ${senderName}\n\nPesan:\n${senderMessage || 'Saya ingin berkonsultasi mengenai pembuatan website.'}`);
    window.location.href = `mailto:rahmatmulyadifadillah@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-10 relative border-t border-[#8B001F]/40 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Title: LET'S WORK TOGETHER with Dual Language Subtitle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block relative mb-6"
        >
          <span className="text-xs font-bold tracking-widest text-[#FF003C] uppercase block mb-1">
            {language === 'id' ? 'MULAI KOLABORASI · START A CONVERSATION' : 'START A CONVERSATION · MULAI KOLABORASI'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            LET'S <span className="text-[#FF003C] drop-shadow-[0_0_20px_rgba(255,0,60,0.8)]">WORK TOGETHER</span>
          </h2>
          <div className="h-1 w-16 bg-[#FF003C] rounded-full mt-2 mx-auto shadow-[0_0_12px_#FF003C]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-lg mx-auto font-light mb-14 space-y-1 text-sm sm:text-base text-gray-300"
        >
          <p>Ready to discuss your project vision? Reach out via WhatsApp, Email, or Instagram.</p>
          <p className="text-gray-400 italic text-xs sm:text-sm">
            Siap mendiskusikan visi proyek Anda? Hubungi saya langsung melalui WhatsApp, Email, atau Instagram.
          </p>
        </motion.div>

        {/* 3 Main Contact Cards with Glowing Red Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          
          {/* 1. WhatsApp Card & Button */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, boxShadow: "0 14px 40px rgba(255, 0, 60, 0.35), 0 0 1px 1px #FF003C" }}
            className="p-7 rounded-2xl bg-[#090204]/95 border border-[#8B001F]/50 hover:border-[#FF003C] transition-colors duration-300 flex flex-col items-center justify-between group"
          >
            <div className="w-14 h-14 rounded-full bg-[#050505] border border-[#FF003C]/40 group-hover:bg-[#FF003C] flex items-center justify-center mb-4 transition-all duration-300 shadow-[0_0_15px_rgba(255,0,60,0.25)]">
              <WhatsAppIcon className="w-7 h-7 text-[#FF003C] group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="text-sm font-bold text-white mb-1 font-heading">WhatsApp</div>
            <div className="text-xs text-gray-400 font-mono mb-5 tracking-wider">081339638842</div>
            
            <div className="flex flex-col w-full gap-2">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="https://wa.me/6281339638842"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#FF003C] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-neon-button flex items-center justify-center gap-2 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Me</span>
              </motion.a>
              <button
                type="button"
                onClick={() => handleCopy('081339638842', 'whatsapp')}
                className="text-[11px] text-gray-400 hover:text-white py-1 transition-colors cursor-pointer"
              >
                {copiedType === 'whatsapp' ? '✓ Tersalin!' : (language === 'id' ? 'Salin Nomor' : 'Copy Number')}
              </button>
            </div>
          </motion.div>

          {/* 2. Email Card & Button */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, boxShadow: "0 14px 40px rgba(255, 0, 60, 0.35), 0 0 1px 1px #FF003C" }}
            className="p-7 rounded-2xl bg-[#090204]/95 border border-[#8B001F]/50 hover:border-[#FF003C] transition-colors duration-300 flex flex-col items-center justify-between group"
          >
            <div className="w-14 h-14 rounded-full bg-[#050505] border border-[#FF003C]/40 group-hover:bg-[#FF003C] flex items-center justify-center mb-4 transition-all duration-300 shadow-[0_0_15px_rgba(255,0,60,0.25)]">
              <Mail className="w-6 h-6 text-[#FF003C] group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="text-sm font-bold text-white mb-1 font-heading">Email</div>
            <div className="text-xs text-gray-400 truncate max-w-[210px] font-mono mb-5" title="rahmatmulyadifadillah@gmail.com">
              rahmatmulyadifadillah@gmail.com
            </div>

            <div className="flex flex-col w-full gap-2">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="mailto:rahmatmulyadifadillah@gmail.com"
                className="w-full py-3 px-4 bg-[#FF003C] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-neon-button flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me</span>
              </motion.a>
              <button
                type="button"
                onClick={() => handleCopy('rahmatmulyadifadillah@gmail.com', 'email')}
                className="text-[11px] text-gray-400 hover:text-white py-1 transition-colors cursor-pointer"
              >
                {copiedType === 'email' ? '✓ Tersalin!' : (language === 'id' ? 'Salin Email' : 'Copy Email')}
              </button>
            </div>
          </motion.div>

          {/* 3. Instagram Card & Button */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, boxShadow: "0 14px 40px rgba(255, 0, 60, 0.35), 0 0 1px 1px #FF003C" }}
            className="p-7 rounded-2xl bg-[#090204]/95 border border-[#8B001F]/50 hover:border-[#FF003C] transition-colors duration-300 flex flex-col items-center justify-between group"
          >
            <div className="w-14 h-14 rounded-full bg-[#050505] border border-[#FF003C]/40 group-hover:bg-[#FF003C] flex items-center justify-center mb-4 transition-all duration-300 shadow-[0_0_15px_rgba(255,0,60,0.25)]">
              <InstagramIcon className="w-6 h-6 text-[#FF003C] group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="text-sm font-bold text-white mb-1 font-heading">Instagram</div>
            <div className="text-xs text-gray-400 font-mono mb-5">@rhmtmlydifdllh</div>

            <div className="flex flex-col w-full gap-2">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="https://instagram.com/rhmtmlydifdllh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#FF003C] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-neon-button flex items-center justify-center gap-2 cursor-pointer"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Instagram</span>
              </motion.a>
              <button
                type="button"
                onClick={() => handleCopy('@rhmtmlydifdllh', 'instagram')}
                className="text-[11px] text-gray-400 hover:text-white py-1 transition-colors cursor-pointer"
              >
                {copiedType === 'instagram' ? '✓ Tersalin!' : (language === 'id' ? 'Salin Akun' : 'Copy Username')}
              </button>
            </div>
          </motion.div>

        </div>

        {/* Quick Message Composer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 rounded-3xl bg-[#080103] border border-[#8B001F]/60 max-w-2xl mx-auto shadow-[0_0_50px_rgba(255,0,60,0.15)] text-left"
        >
          <div className="flex items-center gap-2 mb-4 text-[#FF003C] font-bold text-sm font-heading">
            <MessageSquareText className="w-5 h-5" />
            <span>
              {language === 'id' 
                ? 'KIRIM PESAN LANGSUNG KE WHATSAPP / EMAIL' 
                : 'SEND DIRECT INQUIRY VIA WHATSAPP / EMAIL'}
            </span>
          </div>
          
          <form className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                {language === 'id' ? 'Nama Anda:' : 'Your Name:'}
              </label>
              <input
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder={language === 'id' ? 'Masukkan nama Anda...' : 'Enter your name...'}
                className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-[#8B001F]/60 focus:border-[#FF003C] focus:outline-none text-white text-sm transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                {language === 'id' ? 'Kebutuhan / Rencana Proyek:' : 'Project Details / Inquiry:'}
              </label>
              <textarea
                rows={3}
                value={senderMessage}
                onChange={(e) => setSenderMessage(e.target.value)}
                placeholder={language === 'id' ? 'Jelaskan kebutuhan website Anda...' : 'Tell me briefly about your project...'}
                className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-[#8B001F]/60 focus:border-[#FF003C] focus:outline-none text-white text-sm transition-colors resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSendViaWhatsApp}
                className="flex-1 py-3 px-5 bg-[#FF003C] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-neon-button flex items-center justify-center gap-2 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>{language === 'id' ? 'Kirim via WhatsApp' : 'Send via WhatsApp'}</span>
              </motion.button>

              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSendViaEmail}
                className="flex-1 py-3 px-5 bg-[#050505] hover:bg-[#8B001F]/30 text-gray-200 hover:text-white border border-[#FF003C]/40 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>{language === 'id' ? 'Kirim via Email' : 'Send via Email'}</span>
              </motion.button>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
