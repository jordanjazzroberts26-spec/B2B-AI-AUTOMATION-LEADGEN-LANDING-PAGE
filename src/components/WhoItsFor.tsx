import { useState } from 'react';
import { Check, X } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const goodFit = [
  'Running a business with real operations — teams, workflows, and recurring processes that need to work reliably',
  'Watching your team spend time on work that feels like it should already be automated',
  'Curious about AI but want to understand what it actually means for your specific situation before committing to anything',
  'A founder or operator who values clarity and wants a grounded perspective — not a pitch',
];

const badFit = [
  'Are looking for a tool that solves everything automatically without understanding your business first',
  'Are exploring AI as a side project or early-stage experiment without operational infrastructure in place',
  'Expect immediate results without a structured process for understanding what needs to change',
];

export function WhoItsFor() {
  const ref = useReveal();
  const [workflowMode, setWorkflowMode] = useState<'before' | 'after'>('before');

  return (
    <section id="for" className="bg-mesh-for py-20 md:py-36">
      <div ref={ref} className="max-w-container mx-auto px-6 md:px-12">
        <span className="reveal label inline-block text-xs font-semibold tracking-widest uppercase text-accent-2 mb-5">
          Fit & Clarity
        </span>
        <h2 className="reveal delay-r1 text-white">
          This work is specific.<br />So is who it's right for.
        </h2>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-auto gap-5 mt-14 max-w-[1040px] mx-auto">
          {/* Main Interactive Tile (2x2) */}
          <div className="reveal md:col-span-2 md:row-span-2 bg-surface border border-border rounded-2xl overflow-hidden flex flex-col shadow-[0_8px_30px_rgba(0,0,0,0.4)] group hover:border-accent-2/30 transition-colors">
             {/* Simulator Header / Buttons */}
             <div className="p-5 md:p-6 border-b border-border/50 flex flex-wrap items-center justify-between gap-4 bg-surface-2/30">
               <h3 className="text-sm font-semibold text-white m-0">System Architecture Simulator</h3>
               <div className="bg-bg border border-border p-1 rounded-full inline-flex gap-1 relative">
                 <button
                   onClick={() => setWorkflowMode('before')}
                   className={`px-4 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-wider transition-all duration-300 border-none cursor-pointer ${
                     workflowMode === 'before'
                       ? 'bg-red-500/10 text-red-400 border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.15)]'
                       : 'text-muted hover:text-white bg-transparent'
                   }`}
                 >
                   Tangled Stack
                 </button>
                 <button
                   onClick={() => setWorkflowMode('after')}
                   className={`px-4 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-wider transition-all duration-300 border-none cursor-pointer ${
                     workflowMode === 'after'
                       ? 'bg-accent/15 text-accent-2 border border-accent/20 shadow-[0_0_15px_rgba(108,99,255,0.20)]'
                       : 'text-muted hover:text-white bg-transparent'
                   }`}
                 >
                   Automated Highway
                 </button>
               </div>
             </div>
             
             {/* Simulator Area */}
             <div className="relative flex-1 min-h-[380px] bg-bg/50">
               {workflowMode === 'before' ? (
                 <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                   {/* Lines representation */}
                   <svg className="absolute inset-0 w-full h-full stroke-red-500/10 stroke-dasharray-4 stroke-[1.5]" style={{ pointerEvents: 'none' }}>
                     <line x1="20%" y1="30%" x2="50%" y2="50%" />
                     <line x1="80%" y1="30%" x2="50%" y2="50%" />
                     <line x1="20%" y1="70%" x2="50%" y2="50%" />
                     <line x1="80%" y1="70%" x2="50%" y2="50%" />
                   </svg>
     
                   {/* Red Data Packet Flowing */}
                   <div className="flow-red-packet" />
     
                   {/* Node items */}
                   <div className="absolute left-[8%] top-[15%] bg-surface-2 border border-border px-3.5 py-2 rounded-lg text-xs font-semibold text-muted/80 flex items-center gap-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                     Incoming Email
                   </div>
                   <div className="absolute right-[8%] top-[15%] bg-surface-2 border border-border px-3.5 py-2 rounded-lg text-xs font-semibold text-muted/80 flex items-center gap-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                     Manual Sheet Entry
                   </div>
                   <div className="absolute left-[5%] bottom-[15%] bg-surface-2 border border-border px-3.5 py-2 rounded-lg text-xs font-semibold text-muted/80 flex items-center gap-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                     Legacy ERP System
                   </div>
                   <div className="absolute right-[5%] bottom-[15%] bg-surface-2 border border-border px-3.5 py-2 rounded-lg text-xs font-semibold text-muted/80 flex items-center gap-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                     Customer CRM
                   </div>
     
                   {/* Center Bottleneck */}
                   <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 bg-red-500/10 border border-red-500/30 rounded-xl p-5 text-center anim-red-node max-w-[210px] z-10">
                     <div className="text-xs font-bold text-red-400 uppercase tracking-widest mb-1 alert-pop-error">Friction Point</div>
                     <div className="text-[10px] text-muted leading-tight">Human copying data across systems. Delay & errors occur here.</div>
                   </div>
                 </div>
               ) : (
                 <div className="absolute inset-0 w-full h-full flex items-center justify-center px-6 md:px-16">
                   {/* Straight solid highway line */}
                   <div className="absolute left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-accent/20 via-accent-2/50 to-accent/20" />
                   
                   {/* Glowing Purple packets zipping */}
                   <div className="flow-purple-packet" />
                   <div className="flow-purple-packet" style={{ animationDelay: '0.7s' }} />
                   <div className="flow-purple-packet" style={{ animationDelay: '1.4s' }} />
     
                   {/* Linear Nodes */}
                   <div className="absolute left-[5%] md:left-[10%] bg-surface-2 border border-border px-4 py-3 rounded-lg text-xs font-semibold text-muted/95 flex items-center gap-2 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
                     <span className="w-2 h-2 rounded-full bg-accent-2" />
                     Data Source
                   </div>
     
                   <div className="absolute left-[50%] -translate-x-1/2 bg-accent/10 border border-accent-2/30 rounded-xl px-5 py-4 text-center anim-purple-node shadow-[0_0_25px_rgba(108,99,255,0.15)] z-10 max-w-[240px]">
                     <div className="text-xs font-bold text-accent-2 uppercase tracking-widest mb-0.5">Meridian Engine</div>
                     <div className="text-[10px] text-white/90 font-medium">Automatic verification, sync, & reporting</div>
                   </div>
     
                   <div className="absolute right-[5%] md:right-[10%] bg-surface-2 border border-border px-4 py-3 rounded-lg text-xs font-semibold text-muted/95 flex items-center gap-2 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
                     <span className="w-2 h-2 rounded-full bg-accent-2" />
                     CRM & Slack
                   </div>
                   
                   <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-accent-2 font-bold tracking-widest uppercase animate-pulse">
                     Active & Unified Flow (100% automated)
                   </div>
                 </div>
               )}
             </div>
          </div>

          {/* Secondary Tile: Good Fit */}
          <div className="reveal delay-r2 md:col-span-1 bg-surface border border-border rounded-2xl p-6 flex flex-col group hover:border-accent-2/30 transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-accent-2" />
              </div>
              <span className="text-sm font-semibold text-white">The Ideal Fit</span>
            </div>
            <ul className="flex flex-col gap-3.5 flex-1 justify-center">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[12px] text-muted leading-relaxed">
                  <span className="flex-shrink-0 mt-0.5 w-[14px] h-[14px] rounded-full bg-accent/20 text-accent-2 flex items-center justify-center">
                    <Check className="w-[8px] h-[8px]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Tertiary Tile: Bad Fit */}
          <div className="reveal delay-r3 md:col-span-1 bg-surface border border-border rounded-2xl p-6 flex flex-col group hover:border-accent-2/30 transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                <X className="w-4 h-4 text-faint" />
              </div>
              <span className="text-sm font-semibold text-white">Not a Fit If</span>
            </div>
            <ul className="flex flex-col gap-3.5 flex-1 justify-center">
              {badFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[12px] text-muted leading-relaxed">
                  <span className="flex-shrink-0 mt-0.5 w-[14px] h-[14px] rounded-full bg-white/5 text-faint flex items-center justify-center">
                    <X className="w-[8px] h-[8px]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
