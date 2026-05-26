"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Activity, Crosshair } from "lucide-react";

const partnerships = [
	{
		name: "Pay-Per-Pre-Qualified Booking",
		icon: Crosshair,
		description:
			"A performance-based system localized for emerging clinics looking to scale specific aesthetic treatments without upfront agency retainer risks.",
		points: [
			"Targeted lead generation for specific procedures",
			"Robust pre-qualification filtering",
			"Automated WhatsApp lead follow-up",
			"Transparent cost-per-booking model",
			"Real-time ROI dashboard",
		],
		cta: "Apply for Tier 1",
	},
	{
		name: "Full Clinic Revenue Partnership",
		icon: Activity,
		description:
			"A comprehensive ecosystem overhaul for established dermatology clinics aggressively entering the high-ticket aesthetic market.",
		points: [
			"End-to-end patient acquisition funnel management",
			"Custom branded creative and Meta Ads deployed",
			"Complete WhatsApp and CRM automation build-out",
			"Consulting on internal sales protocols",
			"Dedicated account strategist and performance reviews",
		],
		cta: "Apply to Partner",
	},
];

export default function PricingCards() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section
			id="pricing"
			ref={ref}
			className="py-20 md:py-32 bg-black relative border-b border-zinc-800 w-full"
		>
			<div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
				{/* Header */}
				<motion.header
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-center mb-12 md:mb-20 max-w-3xl mx-auto"
				>
					<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 tracking-tight leading-tight">
						Partnership <span className="text-zinc-500">Tiers</span>
					</h2>

					<p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-light">
						We operate exclusively on performance models and strategic
						integrations. We succeed when you scale.
					</p>
				</motion.header>

				{/* Cards */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 max-w-6xl mx-auto w-full">
					{partnerships.map((item, index) => {
						const Icon = item.icon;
						return (
							<motion.article
								key={item.name}
								initial={{ opacity: 0, y: 40 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.6, delay: index * 0.2 }}
								className="bg-black border border-zinc-800 rounded-2xl p-6 md:p-8 lg:p-12 flex flex-col justify-between hover:border-zinc-700 transition-colors w-full h-full"
							>
								<div className="w-full">
									<div className="h-12 w-12 md:h-14 md:w-14 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 md:mb-8 border border-zinc-800 shrink-0">
										<Icon className="text-zinc-300" size={24} />
									</div>

									<h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
										{item.name}
									</h3>

									<p className="text-zinc-400 mb-6 md:mb-8 font-light leading-relaxed text-sm md:text-base">
										{item.description}
									</p>

									<ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 w-full">
										{item.points.map((point, i) => (
											<li
												key={i}
												className="flex items-start gap-3 md:gap-4 text-zinc-300"
											>
												<div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-zinc-600 mt-2 shrink-0 flex-none" />
												<span className="leading-snug text-sm md:text-base">
													{point}
												</span>
											</li>
										))}
									</ul>
								</div>

								<a
									href="#contact"
									className="block w-full text-center bg-white text-black py-3 md:py-4 px-4 rounded-md font-semibold text-sm md:text-base hover:bg-zinc-200 transition-colors mt-auto"
								>
									{item.cta}
								</a>
							</motion.article>
						);
					})}
				</div>
			</div>
		</section>
	);
}
