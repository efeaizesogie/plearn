import React, { useState } from 'react';
import { MessageSquare, Users, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { Mascot } from './Mascot';

export const CommunitySection: React.FC = () => {
  const [selectedChannel, setSelectedChannel] = useState<'discord' | 'whatsapp'>('discord');
  const [joinedSuccess, setJoinedSuccess] = useState(false);

  const memberQuotes = [
    {
      author: 'Sarah L., Parent',
      channel: 'Discord #show-and-tell',
      avatar: 'S',
      color: '#7B61FF',
      quote:
        'My 10yo daughter posted her first platformer code in the channel and woke up to 5 encouraging comments from other kids. The vibe is so wholesome!',
      time: '2 hours ago',
    },
    {
      author: 'Coach Julian',
      channel: 'Discord #weekend-challenges',
      avatar: 'J',
      color: '#FF5A36',
      quote:
        'This weekend’s mini-jam is adding retro sound effects to your games with our free synth kit. Over 40 kids have already shared prototypes!',
      time: '5 hours ago',
    },
    {
      author: 'Vikram D., Parent',
      channel: 'WhatsApp Parent Circle',
      avatar: 'V',
      color: '#7B61FF',
      quote:
        'The WhatsApp parent circle has been wonderful for trading tips on healthy screen time habits and arranging collaborative weekend game-testing.',
      time: '1 day ago',
    },
  ];

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    setJoinedSuccess(true);
    setTimeout(() => {
      setJoinedSuccess(false);
    }, 4000);
  };

  return (
    <section id="community" className="py-20 sm:py-28 bg-[#FF5A36] text-[#1D1A2F] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Join the plearn community
          </h2>
          <p className="text-white text-base sm:text-xl leading-relaxed font-semibold max-w-2xl mx-auto">
            Where curious young creators share their games, celebrate each
            other’s milestones, and inspire new ideas.
          </p>
        </div>

        {/* Community Illustration Showcase Banner */}
        <div className="max-w-4xl mx-auto mb-14 chunky-card bg-[#FFF8EE] p-3 sm:p-4 overflow-hidden -rotate-0.5">
          <div className="rounded-2xl border-2 border-[#1D1A2F] overflow-hidden aspect-[21/9] sm:aspect-[24/9] relative group">
            <img
              src="/assets/illustration.jpg"
              alt="Kids coding and collaborating in the plearn community"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-3 left-3 bg-[#FFE9D2] border-2 border-[#1D1A2F] rounded-full px-3 py-1 text-xs font-display font-bold text-[#1D1A2F] shadow-[2px_2px_0px_#1D1A2F]">
              🎉 Community Game Jam & Code Club
            </div>
          </div>
        </div>

        {/* 3 Member Quotes Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {memberQuotes.map((q, idx) => (
            <div
              key={q.author}
              className={`chunky-card bg-[#FFF8EE] p-6 flex flex-col justify-between ${
                idx === 1 ? 'rotate-1' : '-rotate-1'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-display font-bold text-[#FF5A36] bg-[#FFE9D2] px-2.5 py-1 rounded-full border-2 border-[#1D1A2F] shadow-[1px_1px_0px_#1D1A2F]">
                    {q.channel}
                  </span>
                  <span className="text-xs font-bold text-[#1D1A2F]">
                    {q.time}
                  </span>
                </div>
                <p className="text-[#1D1A2F] text-base leading-relaxed mb-4 font-medium">
                  “{q.quote}”
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-[#1D1A2F]/10">
                <div
                  className="w-8 h-8 rounded-full border-2 border-[#1D1A2F] flex items-center justify-center font-display font-bold text-xs text-[#FFF8EE] shadow-[1px_1px_0px_#1D1A2F]"
                  style={{ backgroundColor: q.color }}
                >
                  {q.avatar}
                </div>
                <span className="font-display font-bold text-sm text-[#1D1A2F]">
                  {q.author}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Big Join Card with Channel Selection */}
        <div className="max-w-2xl mx-auto chunky-card bg-[#FFE9D2] p-8 sm:p-10 text-center relative">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto -mt-14 mb-4 bg-[#FFF8EE] rounded-3xl border-2 border-[#1D1A2F] flex items-center justify-center shadow-[3px_3px_0px_#1D1A2F]">
            <Mascot pose="celebrating" size={64} />
          </div>

          <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#1D1A2F] mb-2">
            Hop into our parent & learner spaces
          </h3>
          <p className="text-[#1D1A2F] font-semibold text-base sm:text-lg mb-6">
            Get invites to weekly game jams, mentor AMA office hours, and monthly
            coding challenge badges.
          </p>

          {/* Channel Selector Toggle */}
          <div className="inline-flex p-1.5 bg-[#FFF8EE] border-2 border-[#1D1A2F] rounded-full shadow-[2px_2px_0px_#1D1A2F] mb-6">
            <button
              type="button"
              onClick={() => setSelectedChannel('discord')}
              className={`px-5 py-2 rounded-full font-display font-bold text-sm transition-all cursor-pointer ${
                selectedChannel === 'discord'
                  ? 'bg-[#7B61FF] text-white border-2 border-[#1D1A2F] shadow-[1px_1px_0px_#1D1A2F]'
                  : 'text-[#1D1A2F] hover:text-[#7B61FF]'
              }`}
            >
              Discord Community
            </button>
            <button
              type="button"
              onClick={() => setSelectedChannel('whatsapp')}
              className={`px-5 py-2 rounded-full font-display font-bold text-sm transition-all cursor-pointer ${
                selectedChannel === 'whatsapp'
                  ? 'bg-[#7B61FF] text-white border-2 border-[#1D1A2F] shadow-[1px_1px_0px_#1D1A2F]'
                  : 'text-[#1D1A2F] hover:text-[#7B61FF]'
              }`}
            >
              WhatsApp Parent Circle
            </button>
          </div>

          {joinedSuccess ? (
            <div className="bg-[#FFF8EE] border-2 border-[#1D1A2F] p-4 rounded-2xl flex items-center justify-center gap-2 text-[#1D1A2F] font-display font-bold shadow-[3px_3px_0px_#1D1A2F] animate-in fade-in">
              <CheckCircle2 className="w-5 h-5 text-[#FF5A36]" />
              <span>Invite link sent! Welcome to the plearn family!</span>
            </div>
          ) : (
            <form onSubmit={handleJoin} className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="text"
                placeholder={
                  selectedChannel === 'discord'
                    ? 'Enter your Discord username or email'
                    : 'Enter parent phone number or email'
                }
                required
                className="bg-[#FFF8EE] border-2 border-[#1D1A2F] rounded-full px-5 py-3 text-base text-[#1D1A2F] placeholder-[#1D1A2F]/60 focus:outline-none focus:ring-2 focus:ring-[#7B61FF] grow max-w-md shadow-[2px_2px_0px_#1D1A2F]"
              />
              <button
                type="submit"
                className="chunky-btn bg-[#7B61FF] hover:bg-[#684be6] text-white font-display font-bold px-8 py-3 text-base flex items-center justify-center gap-2 cursor-pointer shadow-[3px_3px_0px_#1D1A2F]"
              >
                <Send className="w-4 h-4" />
                <span>Join {selectedChannel === 'discord' ? 'Discord' : 'WhatsApp'}</span>
              </button>
            </form>
          )}

          <p className="text-xs text-[#1D1A2F] mt-4 font-bold">
            🛡️ Safe, moderated environment • No public advertisements • Strict anti-bullying code
          </p>
        </div>
      </div>
    </section>
  );
};
