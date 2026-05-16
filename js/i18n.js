/**
 * i18n.js - Translations and localization
 * Handles English and Chinese language switching
 */

const TRANSLATIONS = {
  en: {
    // Nav
    'nav.why':'Why Us', 'nav.services':'Services', 'nav.studio-menu':'Our Studio', 'nav.studio':'Studio Gallery', 'nav.concerns':'Concerns',
    'nav.book':'Book', 'nav.book-now':'Book Now', 'mob.book':'Book Appointment', 'nav.contact':'Contact Us', 'nav.contact-menu':'Contact',
    // Hero
    'hero.badge':'30 Years · Certified Senior Beautician',
    'hero.h1':'Where <em>Science</em> Meets<br>Beauty',
    'hero.p':'Every bespoke treatment is designed to repair your skin barrier and nurture a radiant glow, while helping you shed fatigue and anxiety, and listen to your body\'s inner voice. With gentle force, we guard your inner core and anchor you to life\'s true essence.',
    'hero.cta1':'Book Appointment', 'hero.cta2':'Explore Treatments',
    'hero.stat1':'Expertise', 'hero.stat2':'From / Session', 'hero.stat3':'Targeted Solutions',
    // Hannah's motto
    'quote.hook':'Life is like a battery — draining from the moment you\'re born. If you don\'t want to be left behind by time, begin the journey of self-renewal — amidst the flood of beauty standards and life\'s chaos, rebuild your steady order, inside and out.',
    'quote.close':'Every treatment is a gentle recalibration of body and mind. Skincare has nothing to do with age — it\'s about loving yourself well, at every stage of life.',
    'quote.sig':', Senior Beauty Specialist',
    // Hero card
    'card.label':'⭐ Most Popular', 'card.title':'Classic Pore Purifying Treatment', 'card.dur':'/ 60 min',
    'card.btn':'Book This Treatment',
    // Hero card 3 (Studio)
    'card3.label':'🏥 Our Studio', 'card3.title':'Premium Private Treatment Space',
    'card3.desc':'Medical-grade sterilisation protocols. Fresh supplies and full sanitisation for every client — a worry-free private environment.',
    'card3.btn':'Learn More',
    // Why Us
    'why.tag':'Why Choose Us', 'why.h2':'The Beauty Expert<br>Difference',
    'why1.h4':'Top-Tier Device',
    'why1.p':'Korea\'s Q Facial — the pinnacle of beauty tech. The only cleansing device that penetrates the dermis, hailed as the "anti-aging ceiling." Celebrity favourite.',
    'why2.h4':'Clinic-Grade Products',
    'why2.p':'Authentic clinic-exclusive skincare, fully traceable through authorised channels. Gentle formulas with zero unnecessary additives — safe even for sensitive skin.',
    'why3.h4':'Senior Beautician',
    'why3.p':'Dual China–NZ qualified, 30-year senior beautician performs every treatment personally. A rare calibre in the industry — one-on-one bespoke plans for truly effective skincare.',
    'why4.h4':'Medical-Grade Sterilisation',
    'why4.p':'Rigorous sterilisation protocols. Instruments and accessories freshly sanitised for every client — a safe, private treatment space.',
    // Services intro
    'svc.tag':'Our Treatments', 'svc.h2':'Targeted Beauty<br>Solutions',
    'svc.p':'Every service is designed to deliver real, visible results — backed by science, delivered with care.',
    'svc.cat-facial':'Facial Treatments',
    // Q-Facial Series
    'qf.badge':'Korea Q Facial Skin Renewal Series',
    'qf.title':'Q Facial Skin Renewal Treatment Series',
    'qf.desc':'A top-tier Korean salon-grade facial treatment, a must-have for celebrities visiting Korea',
    'qf1.h3':'Purifying Glow Treatment', 'qf1.dur':'/ 45 min', 'qf1.pkg':'10-session pack $1280',
    'qf1.f1':'Three professional-grade solutions (Formula A repair, B purification, C soothing)',
    'qf1.f2':'Deeply cleanses skin and repairs the skin barrier',
    'qf1.f3':'Enhances absorption and achieves gentle rejuvenation',
    'qf1.f4':'Ideal for daily maintenance of all skin types',
    'qf1.btn':'Book This Treatment →',
    'qf2.h3':'Intensive Repair Infusion', 'qf2.dur':'/ 50 min', 'qf2.pkg':'10-session pack $1580',
    'qf2.f1':'Includes full Purifying Glow Treatment ($148) + customized ampoule infusion',
    'qf2.f2':'5 ampoule options: anti-wrinkle, brightening, pore-minimizing, soothing, radiance',
    'qf2.f3':'Deeply repairs the skin base and targets specific concerns',
    'qf2.f4':'Enhances overall radiance and skin health',
    'qf2.btn':'Book This Treatment →',
    'qf3.h3':'Hydra Repair Treatment', 'qf3.dur':'/ 60 min', 'qf3.pkg':'10-session pack $1780',
    'qf3.f1':'Includes complete Purifying Glow Treatment cleansing, combined with medical-grade dual-frequency precision ultrasound therapy',
    'qf3.f2':'10MHz high-frequency ultrasound acts on the epidermis to strengthen the skin barrier, reduce redness and sensitivity, and refine pores for a smoother complexion',
    'qf3.f3':'3MHz deep-frequency ultrasound penetrates the dermis to stimulate collagen and elastin synthesis, repair broken fibers, improve fine lines, and restore skin elasticity',
    'qf3.f4':'Dual-frequency synergy boosts microcirculation and accelerates skin renewal, delivering anti-aging and soothing effects for visibly firmer, more even-toned skin',
    'qf3.btn':'Book This Treatment →',
    'qf4.h3':'Multi-Dimensional Sculpting Treatment', 'qf4.dur':'/ 75 min', 'qf4.pkg':'10-session pack $2080',
    'qf4.f1':'All-in-one premium treatment combining Purifying Glow Cleansing + Intensive Repair Infusion + Dual-Frequency Lifting Ultrasound',
    'qf4.f2':'Deep cleansing opens skin absorption channels, followed by concentrated ampoule infusion, then ultrasound deep penetration',
    'qf4.f3':'Three-step synergy amplifies results beyond individual standalone treatments',
    'qf4.f4':'Delivers comprehensive benefits of deep cleansing, intensive repair, collagen anti-aging, and lifting rejuvenation',
    'qf4.btn':'Book This Treatment →',
    // Service 1
    's1.h3':'Classic Pore Purifying Treatment', 's1.dur':'/ 60 min',
    's1.f1':'Deep clean — removes dead skin and pore buildup so skin breathes easy',
    's1.f2':'Even tone — fades dullness, lines, acne marks & dry patches',
    's1.f3':'Acne & oil fix — unclogs pores, less blackheads and blemishes',
    's1.f4':'Glow boost — bright, fresh peeled-egg look, even without makeup',
    's1.btn':'Book This Treatment →',
    // Service 7
    's7.h3':'Dermaplaning', 's7.dur':'/ 45 min',
    's7.f1':'Smoother Texture — Gently removes dead skin cells and fine facial fuzz for instantly soft, smooth skin',
    's7.f2':'Better Product Absorption — Exfoliates surface buildup to allow serums and moisturizers to work more effectively',
    's7.f3':'Healthy Radiance — Improves dullness to reveal an even, fresh, and glowing complexion',
    's7.f4':'Gentle for All Skin — Non-invasive and suitable for every skin type, perfect alongside other facial treatments',
    's7.btn':'Book This Treatment →',
    // Service 2
    's2.h3':'LED Light Therapy', 's2.dur':'/ 30 min',
    's2.f1':'Boosts dermal blood flow, stimulating collagen & elastin production',
    's2.f2':'Speeds wound healing and eases pain (backed by global studies)',
    's2.f3':'Blue LED targets acne-causing bacteria deep under the skin',
    's2.f4':'Brightens and evens skin tone, fades dullness and redness, stabilises skin condition',
    's2.btn':'Book This Treatment →',
    // Service 3
    's3.h3':'Enhanced Microneedling with Mesolinfu', 's3.dur':'/ 30 min',
    's3.f1':'Micro-channel activation — creates controlled pathways to trigger natural skin repair',
    's3.f2':'Collagen renewal — stimulates fibroblasts for collagen formation and remodeling',
    's3.f3':'Dermal repair — restores structural damage within deeper skin layers',
    's3.f4':'Deep skin fix — targets acne scars, enlarged pores and static wrinkles beyond daily skincare',
    's3.btn':'Book This Treatment →',
    // Service 4
    's4.h3':'Aromatherapy Facial Meridian Kneading', 's4.dur':'/ 60 min',
    's4.f1':'Essential Oil Purification — Selected pure aromatic essential oils absorb through the skin into the bloodstream, carrying away waste and purifying the body, while the natural aroma soothes the nerves and heals body and mind',
    's4.f2':'Acupoint Therapy — Opens facial acupoints corresponding to internal-organ reflex points, unblocks meridian channels, awakens qi-blood circulation, and harmonises the physiological functions of the internal organs',
    's4.f3':'Meridian Stimulation — Jade meridian wand deeply loosens fascial blockages and nodules, lifts and firms facial contours, and brightens the complexion',
    's4.f4':'Gua Sha Detoxification — Jade gua sha board targets and metabolises subcutaneous impurities and eases facial puffiness, reducing the skin\'s internal inflammatory environment to slow collagen breakdown and delay aging',
    's4.btn':'Book This Treatment →',
    // Service 5
    's5.h3':'Professional Electrolysis Wart Removal', 's5.dur':'per wart',
    's5.f1':'Root-targeted treatment precisely acts on wart hyperplastic tissue for deep and thorough removal',
    's5.f2':'Gentle and non-invasive, less likely to cause blisters or scarring than cryotherapy',
    's5.f3':'Delivers more thorough removal and cleaner skin results than laser or topical treatments',
    's5.f4':'Fast recovery with visible results after one session, no disruption to daily life',
    's5.btn':'Book This Treatment →',
    // Add-on
    'addon.h4':'Add-Ons',
    'addon.i1':'Neck + Decolletage <span class="addon-price">$49</span>',
    'addon.i2':'Neck Only <span class="addon-price">$29</span>',
    'addon.i3':'Hands <span class="addon-price">$39</span>',
    // Body Treatments
    'svc.cat-body':'Body Treatments',
    'bd.badge':'Magic Health Master',
    'bd.title':'Magic Health Master',
    'bd.desc':'Precisely releases energy through advanced equipment for deep penetration, physical & mental regulation, internal vitality boosting, and slim body contouring',
    'bd1.h3':'Dai Meridian Rejuvenation', 'bd1.dur':'/ 45 min', 'bd1.pkg':'10-session pack $1180',
    'bd1.f1':'Warms the uterus to dispel cold',
    'bd1.f2':'Promotes waist & abdomen circulation and metabolism',
    'bd1.f3':'Relieves local stagnation and discomfort',
    'bd1.btn':'Book This Treatment →',
    'bd2.h3':'Breast & Lymphatic Drainage Therapy', 'bd2.dur':'/ 45 min', 'bd2.pkg':'10-session pack $1180',
    'bd2.f1':'Low-frequency energy softens nodules',
    'bd2.f2':'Unblocks chest & armpit lymphatic vessels',
    'bd2.f3':'Relieves meridian stagnation and chest discomfort',
    'bd2.btn':'Book This Treatment →',
    'bd3.h3':'Shoulder, Neck & Lower Back Pain Relief', 'bd3.dur':'/ 60 min', 'bd3.pkg':'10-session pack $1680',
    'bd3.f1':'Advanced energy technology releases fascial adhesions and muscle knots',
    'bd3.f2':'Relieves fibrous hyperplasia, muscle fatigue, and frozen shoulder',
    'bd3.f3':'Eases stiff/painful limbs and restricted movement',
    'bd3.btn':'Book This Treatment →',
    'bd4.h3':'Full Body Sculpting & Contouring', 'bd4.dur':'/ 75 min', 'bd4.pkg':'10-session pack $2280',
    'bd4.f1':'High-tech precision energy for targeted fat reduction',
    'bd4.f2':'Comprehensive body contouring and skin tightening',
    'bd4.f3':'Visible slimming and sculpting results',
    'bd4.btn':'Book This Treatment →',
    // Concerns
    'con.tag':'Targeted Solutions', 'con.h2':'We Treat Your<br>Specific Concerns',
    'con.p':'Select your concern below to explore the causes and a tailored care plan.',
    'con.chip-sens':'Skin Sensitivity', 'con.chip-dull':'Dullness & Pigmentation',
    'con.chip-age':'Sagging & Aging', 'con.chip-pore':'Enlarged Pores',
    'con.chip-acne':'Acne & Oily Skin', 'con.chip-eye':'Eye Concerns',
    'con.empty':'Pick a concern above to see causes and a recommended care plan.',
    'con.h-internal':'Internal Causes', 'con.h-external':'External Causes',
    'con.h-rec':'Recommended Treatments', 'con.h-consult':'Need Personal Guidance?',
    'con.btn-book':'Book This Treatment', 'con.btn-consult':'Book a Free Consultation',
    // Promise
    'pro.tag':'Our Promise', 'pro.h2':'Expertise. Honesty. Results.',
    'pro.p':'Beauty meets truth — we only recommend what your skin genuinely needs, and we deliver results you can see and feel.',
    'pro.p1':'Expertise', 'pro.p2':'Honesty', 'pro.p3':'Results',
    // Booking
    'bk.tag':'Book an Appointment', 'bk.h2':'Ready for Your<br>Glow-Up?',
    'bk.p':'Fill in the form and we\'ll confirm your appointment promptly. Walk-ins also welcome!',
    'bk.c1':'Call or text anytime', 'bk.c2':'New Zealand',
    'bk.c3h':'Mon – Sat \u00a09am – 7pm', 'bk.c3s':'Sun by appointment',
    'bk.formh3':'Book Your Treatment',
    'bk.lbl-fn':'First Name *', 'bk.ph-fn':'Jane',
    'bk.lbl-ln':'Last Name *', 'bk.ph-ln':'Smith',
    'bk.lbl-ph':'Phone *', 'bk.lbl-em':'Email', 'bk.ph-em':'jane@email.com',
    'bk.lbl-tr':'Treatment *', 'bk.opt-sel':'— Select a treatment —',
    'bk.og-qf':'Q Facial Skin Renewal Series', 'bk.og-facial':'More Facial Treatments', 'bk.og-body':'Body Treatments',
    'bk.t-qf1':'Purifying Glow Treatment — $148 / 45\'',
    'bk.t-qf2':'Intensive Repair Infusion — $178 / 50\'',
    'bk.t-qf3':'Hydra Repair Treatment — $208 / 60\'',
    'bk.t-qf4':'Multi-Dimensional Sculpting Treatment — $238 / 75\'',
    'bk.t-s1':'Classic Pore Purifying Treatment — $89 / 60\'',
    'bk.t-s2':'LED Light Therapy — $69 / 30\'',
    'bk.t-s3':'Enhanced Microneedling with Mesolinfu — $229 / 30\'',
    'bk.t-s4':'Aromatherapy Facial Meridian Kneading — $129 / 60\'',
    'bk.t-s5':'Electrolysis Wart Removal — $10-15',
    'bk.t-s7':'Dermaplaning — $59 / 45\'',
    'bk.t-bd1':'Dai Meridian Rejuvenation — $138 / 45\'',
    'bk.t-bd2':'Breast & Lymphatic Drainage Therapy — $138 / 45\'',
    'bk.t-bd3':'Shoulder, Neck & Back Pain Relief — $198 / 60\'',
    'bk.t-bd4':'Full Body Sculpting & Contouring — $258 / 75\'',
    'bk.lbl-ao':'Add-Ons',
    'bk.opt-no':'No thanks',
    'bk.lbl-dt':'Preferred Date *', 'bk.lbl-tm':'Preferred Time *',
    'bk.lbl-no':'Skin Concerns / Notes',
    'bk.ph-no':'Tell us about your skin concerns or any questions you have…',
    'bk.submit':'Confirm Appointment ✦',
    'bk.note':'We\'ll text or call to confirm within a few hours. No payment needed upfront.',
    // Footer
    'ft.brand':'Professional beauty treatments with 30 years of certified expertise. Honest advice, luxury results, unbeatable value.',
    'ft.svc':'Treatments',
    'ft.qf':'Q Facial Skin Renewal Series',
    'ft.s1':'Classic Pore Purifying Treatment', 'ft.s2':'LED Light Therapy',
    'ft.s3':'Microneedling + Meso', 'ft.s4':'Aromatherapy Facial Meridian Kneading',
    'ft.s5':'Wart Removal',
    'ft.s7':'Dermaplaning', 'ft.bd':'Magic Health Master Series',
    'ft.links':'Quick Links',
    'ft.l1':'Why Choose Us', 'ft.l2':'Skin Concerns', 'ft.l3':'Book Appointment',
    'ft.hours':'Hours', 'ft.h1':'Mon – Sat: 9am – 7pm', 'ft.h2':'Sun: By appointment',
    'ft.copy':'© 2026 Beauty Expert Studio · Glen Innes, Auckland · All rights reserved.',
    // Modals
    'mod.ok-title':'Appointment Sent!',
    'mod.ok-msg':'Your booking request has been emailed to us. We\'ll confirm via call or text within a few hours. We can\'t wait to see you!',
    'mod.ok-btn':'Great, thanks!',
    'mod.err-title':'Couldn\'t Send Email',
    'mod.err-msg':'Please call or text us directly on <strong><a href="tel:021901118" style="color:var(--rose)">021 901 118</a></strong> to book your appointment. Sorry for the inconvenience!',
    'mod.err-btn':'Got it',
    // Sticky CTA
    'cta.call':'📞 Call', 'cta.book':'Book Now',
    // Gallery page
    'gal.back':'Back to Home', 'gal.tag':'Our Studio',
    'gal.h2':'Step Inside<br>Beauty Expert Studio',
    'gal.p':'A private, sterilised treatment space equipped with clinic-grade devices and premium skincare.',
    'gal.env.h':'Private Treatment Room',
    'gal.env.p':'A calm, private space where every session begins — fully sanitised between clients.',
    'gal.hero.h':'Hands-On Expertise',
    'gal.hero.p':'Every treatment performed personally by Hannah — 30 years of certified expertise, one-on-one.',
    'gal.dev1.h':'Q Facial — Flagship Device',
    'gal.dev1.p':'Korea\'s top-tier cleansing device, KC & MFDS dual-certified, standard in 20,000+ premium clinics.',
    'gal.dev2.h':'Clinic-Grade Products',
    'gal.dev2.p':'Authorised premium skincare — personally tested, gentle yet precisely targeted formulas.',
    // Nav - Q Facial page
    'nav.qfacial':'Q Facial',
    'nav.consent':'Consent Form',
    // Q Facial Page (qfp.*)
    'qfp.back':'Back to Home',
    'qfp.tag':'Our Device',
    'qfp.h2':'Q Facial<br>Water Shining System',
    'qfp.subtitle':'3-in-1 Skin Management System with Ultrasonic',
    'qfp.intro':'Q-facial is a comprehensive skin management device using three types of management systems. It sprays three formula solutions onto the skin for absorption and management, removing dead skin cells, sebum, and blackheads to accelerate skin turnover. A high-concentration skin booster soothes and improves skin that lacks elasticity. The ultrasonic system increases hydration to improve the skin\'s regenerative ability and maintain elastic skin.',
    // Benefits
    'qfp.ov-tag':'Key Benefits',
    'qfp.ov-h2':'What Q Facial Does',
    'qfp.b1-h':'Improves Acne Skin', 'qfp.b1-p':'Targets acne-causing buildup and promotes clearer, healthier skin.',
    'qfp.b2-h':'Reduces Folliculitis', 'qfp.b2-p':'Calms inflamed follicles through gentle deep-cleansing action.',
    'qfp.b3-h':'Removes Blackheads', 'qfp.b3-p':'Vacuum suction extracts whiteheads and blackheads from pores.',
    'qfp.b4-h':'Brightens Skin Tone', 'qfp.b4-p':'Improves skin tone and promotes a radiant, even complexion.',
    'qfp.b5-h':'Deep Hydration', 'qfp.b5-p':'Provides intense hydration and nutrition to the skin.',
    'qfp.b6-h':'Enhanced Absorption', 'qfp.b6-p':'Through sebum removal and exfoliation, helps products absorb into the skin.',
    // Core Functions
    'qfp.fn-h':'Three Core Functions',
    'qfp.fn1':'Exfoliation<br>of the Skin', 'qfp.fn2':'Sebum &<br>Pore Care', 'qfp.fn3':'Manages<br>Skin Hydration',
    // Mechanism
    'qfp.mech-tag':'How It Works',
    'qfp.mech-h2':'3-Step Mechanism',
    'qfp.s1-h':'Spray', 'qfp.s1-p':'The solution is sprayed, turning clockwise through the centre of the nozzle tip, dissolving impurities on the skin surface.',
    'qfp.s2-h':'Vacuum', 'qfp.s2-p':'Skin impurities and solution residue are vacuumed into the waste bottle through the mouth of the nozzle.',
    'qfp.s3-h':'Deliver', 'qfp.s3-p':'The solution or booster ampoule is delivered to the skin surface according to the setting for deep hydration and soothing.',
    // Solutions
    'qfp.sol-tag':'Professional Solutions',
    'qfp.sol-h2':'Three Formula Solutions',
    'qfp.fa-h':'Formula-A: Glycolic Acid (AHA)',
    'qfp.fa-p':'Water-soluble exfoliation formula. Helps with overall skin cell turnover and cleanses the pores, softening impurities inside pores.',
    'qfp.fa-skin':'Recommended: Normal / Dry / Sensitive Skin',
    'qfp.fb-h':'Formula-B: Salicylic Acid (BHA)',
    'qfp.fb-p':'Oil-soluble exfoliation formula. Helps to remove the sebum and cleanse the pores for residue inside pores.',
    'qfp.fb-skin':'Recommended: Oily / Problem Skin',
    'qfp.fc-h':'Formula-C: Hydrating & Soothing (TON)',
    'qfp.fc-p':'Strong hydrating and soothing finishing formula. Contains hyaluronic acid (sodium hyaluronate) and vitamin E (tocopheryl acetate) to balance skin hydration and oil.',
    'qfp.fc-skin':'Final step for all skin types',
    // BELLELUMIE Skin Boosters
    'qfp.bst-tag':'BELLELUMIE Skin Boosters',
    'qfp.bst-h2':'Five Targeted Ampoules',
    'qfp.bst-p':'High-concentration skin boosters for customised treatment \u2014 each targets a specific skin concern.',
    'qfp.bf-tag':'Wrinkles \u00B7 Elasticity',
    'qfp.bf-p':'Nurtures resilient and supple skin. Patented wrinkle and elasticity peptides with 27 moisturizing ingredients for smooth, firm texture.',
    'qfp.bb-tag':'Troubles \u00B7 Soothing',
    'qfp.bb-p':'Effortlessly organizes and soothes problematic skin. Soothing peptides and tea tree oil calm breakouts. Salicylic acid and niacinamide refine pores.',
    'qfp.bd-tag':'Whitening \u00B7 Radiance',
    'qfp.bd-p':'Naturally imparts a radiant glow. Whitening peptides, tranexamic acid, and niacinamide address dark spots. 27 soothing ingredients for clear, dewy skin.',
    'qfp.bh-tag':'Heating \u00B7 Pores',
    'qfp.bh-p':'Gentle warmth contracts pores and imparts skin elasticity. Infuses vitality into fatigued skin through a mild thermal sensation.',
    'qfp.bc-tag':'Cooling \u00B7 Whitening',
    'qfp.bc-p':'Refreshing cooling sensation calms the skin. Peppermint oil and menthol rapidly reduce skin temperature. Seven soothing ingredients comfort post-treatment skin.',
    // Ultrasonic
    'qfp.us-tag':'Ultrasonic Technology',
    'qfp.us-h2':'Dual-Frequency Precision',
    'qfp.us-10d':'~1.5mm Epidermal Layer',
    'qfp.us-10p':'High-density ultrasound delivers energy to the epidermal layer for surface-level skin renewal.',
    'qfp.us-3d':'~3mm Dermal Layer',
    'qfp.us-3p':'Reaches the boundary between the dermis and subcutaneous fat for deep tissue treatment.',
    'qfp.us-l1':'Accelerates collagen synthesis inside the skin for firmer, healthier texture',
    'qfp.us-l2':'Balances hydration to create resilient, elastic skin',
    'qfp.us-l3':'Warm heat allows no irritation on the skin \u2014 gentle for all skin types',
    'qfp.us-l4':'Improves skin breakouts and sensitive skin conditions',
    'qfp.us-l5':'Prevents various skin inflammations and improves aging',
    'qfp.us-l6':'Effects may be anticipated after just one treatment session',
    // CTA
    'qfp.cta-h':'Experience Q Facial at Our Studio',
    'qfp.cta-p':'Ready to discover the difference Korea\'s top-tier device makes? Book your Q Facial treatment today.',
    'qfp.cta-btn1':'Book Q Facial Treatment',
    'qfp.cta-btn2':'View All Services',
  },
  zh: {
    // Nav
    'nav.why':'为何选择我们', 'nav.services':'服务项目', 'nav.studio-menu':'工作室', 'nav.studio':'工作室展示', 'nav.concerns':'肌肤问题',
    'nav.book':'预约', 'nav.book-now':'立即预约', 'mob.book':'预约护理', 'nav.contact':'联系我们', 'nav.contact-menu':'联系',
    // Hero
    'hero.badge':'30年经验，认证高级美容师',
    'hero.h1':'科学与<em>美丽</em>的<br>完美融合',
    'hero.p':'所有定制护理旨在：修护肌肤屏障，养出透亮外在；卸下疲惫焦虑，聆听身体内在的声音。以温柔力量，守护心灵内核，锚定生命本真。',
    'hero.cta1':'立即预约', 'hero.cta2':'探索疗程',
    'hero.stat1':'专业经验', 'hero.stat2':'起 / 次', 'hero.stat3':'针对性解决方案',
    // Hannah's motto
    'quote.hook':'人生这块电池，从出生起便开始消耗。若不想被时光抛下，请开启自愈之路——在审美洪流与生活纷扰里，重建内外安稳的秩序。',
    'quote.close':'每一次护理，都是对身心的一次温柔校准。保养无关年龄，而是每个阶段的你，都在好好爱自己。',
    'quote.sig':'，资深高级美容师',
    // Hero card
    'card.label':'⭐ 最受欢迎', 'card.title':'经典毛孔净化护理', 'card.dur':'/ 60分钟',
    'card.btn':'立即预约此疗程',
    // Hero card 3 (Studio)
    'card3.label':'🏥 我们的工作室', 'card3.title':'高端私密护理空间',
    'card3.desc':'执行行业高标准无菌消毒流程。坚持一客一换一消毒，打造安心无忧的私密护理空间。',
    'card3.btn':'了解更多',
    // Why Us
    'why.tag':'为何选择我们', 'why.h2':'Beauty Expert Studio<br>的与众不同',
    'why1.h4':'顶级仪器',
    'why1.p':'韩国Q Facial，科技美容巅峰之作，清洁保养类仪器中唯一可穿透真皮层，被誉为"清洁界抗衰天花板"，众多明星同款。',
    'why2.h4':'院线正品',
    'why2.p':'院线专属正品，正规渠道可溯源，配方温和，零冗余添加，敏弱肌安心使用。',
    'why3.h4':'资深美容师',
    'why3.p':'中、新双资质，30年高级美容师亲自主理，业内稀缺，一对一定制方案，以专业技术实现真正有效护肤。',
    'why4.h4':'无菌消毒',
    'why4.p':'高标准无菌消毒，仪器、配件一客一换一消杀，打造安心私密护理空间。',
    // Services intro
    'svc.tag':'我们的疗程', 'svc.h2':'精准美肤<br>解决方案',
    'svc.p':'每一项服务均致力于提供真实可见的效果——以科学为后盾，以用心呈现。',
    'svc.cat-facial':'面部护理',
    // Q-Facial Series
    'qf.badge':'Q Facial 焕肤护理系列',
    'qf.title':'Q Facial 肌肤焕新护理系列',
    'qf.desc':'韩国顶级面部护理，明星赴韩必做项目',
    'qf1.h3':'净澈焕肤', 'qf1.dur':'/ 45分钟', 'qf1.pkg':'10次套餐 $1280',
    'qf1.f1':'三款院线专属溶液（Formula-A修复 + B净肤 + C舒缓）',
    'qf1.f2':'深层清洁肌肤，修复屏障',
    'qf1.f3':'增强肌肤吸收能力，实现温和焕肤',
    'qf1.f4':'适合所有肤质的日常维护',
    'qf1.btn':'立即预约此疗程 →',
    'qf2.h3':'肌底修复护肤', 'qf2.dur':'/ 50分钟', 'qf2.pkg':'10次套餐 $1580',
    'qf2.f1':'净澈焕肤（$148）+ 专属安瓶精华导入',
    'qf2.f2':'5款对症选择：抗皱 / 美白 / 收毛孔 / 舒缓 / 提亮',
    'qf2.f3':'深层修护肌底，针对性改善肤质问题',
    'qf2.f4':'提升肌肤光泽与健康状态',
    'qf2.btn':'立即预约此疗程 →',
    'qf3.h3':'水滴修复', 'qf3.dur':'/ 60分钟', 'qf3.pkg':'10次套餐 $1780',
    'qf3.f1':'包含完整的净澈焕肤清洁护理，搭配医用级双频精准超声波疗法',
    'qf3.f2':'10MHz高频超声波作用于表皮层，强化皮肤屏障、减轻泛红敏感，同时细化毛孔，打造更平滑的肤质',
    'qf3.f3':'3MHz深层频率超声波穿透真皮层，刺激胶原蛋白与弹性纤维合成，帮助修复断裂纤维、改善细纹，恢复皮肤弹性',
    'qf3.f4':'双频协同作用促进微循环、加速皮肤更新，同时实现抗衰与舒缓效果，让皮肤明显更紧致、肤色更均匀',
    'qf3.btn':'立即预约此疗程 →',
    'qf4.h3':'多维塑颜焕肤', 'qf4.dur':'/ 75分钟', 'qf4.pkg':'10次套餐 $2080',
    'qf4.f1':'一站式整合净澈焕肤清洁 + 肌底精华导入 + 双频紧致超声三大核心护理',
    'qf4.f2':'先深度清洁打通肌肤吸收通道，再通过安瓶精华密集补给营养，最后超声波深层促渗',
    'qf4.f3':'三步层层递进、协同增效，在单一步骤护理的优质基础上，实现效果叠加放大',
    'qf4.f4':'同时实现深层净透、肌底修护、胶原抗衰、紧致提拉多重进阶功效，肌肤状态全面焕活',
    'qf4.btn':'立即预约此疗程 →',
    // Service 1
    's1.h3':'经典毛孔净化护理', 's1.dur':'/ 60分钟',
    's1.f1':'深层清洁——清除老废角质与毛孔污垢，让肌肤自由呼吸',
    's1.f2':'均匀肤色——淡化暗沉、细纹、痘印与干燥脱皮',
    's1.f3':'祛痘控油——疏通毛孔，减少黑头和瑕疵',
    's1.f4':'即刻提亮——告别彩妆依赖，呈现如剥壳鸡蛋般的光泽裸肌',
    's1.btn':'立即预约此疗程 →',
    // Service 7
    's7.h3':'面部除绒护理', 's7.dur':'/ 45分钟',
    's7.f1':'柔滑肤质——温和去除老废角质与面部绒毛，肌肤即刻细腻柔滑',
    's7.f2':'优化吸收——清理表层多余角质，让后续护肤产品渗透更充分、效果更佳',
    's7.f3':'焕亮光泽——改善肤色暗沉，打造通透匀净的健康光泽肌',
    's7.f4':'温和亲肤——无创舒缓，适配各类肤质，可搭配任意面部护理项目',
    's7.btn':'立即预约此疗程 →',
    // Service 2
    's2.h3':'LED光疗', 's2.dur':'/ 30分钟',
    's2.f1':'促进真皮层血液循环，刺激胶原蛋白与弹力蛋白生成',
    's2.f2':'加速伤口愈合，缓解疼痛（获全球研究证实）',
    's2.f3':'蓝光LED精准靶向深层痘痘细菌',
    's2.f4':'提亮匀净肤色，淡化暗沉与泛红，维稳肤质状态',
    's2.btn':'立即预约此疗程 →',
    // Service 3
    's3.h3':'中胚层导入微针', 's3.dur':'/ 30分钟',
    's3.f1':'微通道激活——创建控制性微通道，激发肌肤自然修复机制',
    's3.f2':'胶原再生——刺激成纤维细胞，促进胶原蛋白形成与重塑',
    's3.f3':'真皮修护——修复深层肌肤结构性损伤',
    's3.f4':'深层肌肤改善——针对痘疤、毛孔粗大及静态皱纹，超越日常护肤效果',
    's3.btn':'立即预约此疗程 →',
    // Service 4
    's4.h3':'芳香疗法面部拨筋', 's4.dur':'/ 60分钟',
    's4.f1':'精油净化 — 甄选纯芳香精油，经肌肤吸收进入血液循环，带走体内废物，净化身体；同步借由天然芳香气息舒缓神经，疗愈身心',
    's4.f2':'穴位调理 — 打开面部穴位对应的脏腑反射点位，疏通经络通道，唤醒气血循环，调和内在脏腑的生理机能',
    's4.f3':'拨筋提拉 — 玉石拨筋，深层松解筋膜淤堵与结节，提拉紧致面部轮廓，提亮肤色',
    's4.f4':'刮痧排浊 — 玉石刮痧，定向代谢皮下浊质、消除面部水肿，减轻肌肤内在炎症环境，从而减少胶原分解，延缓衰老',
    's4.btn':'立即预约此疗程 →',
    // Service 5
    's5.h3':'专业电解疣体去除', 's5.dur':'每粒',
    's5.f1':'根源靶向，精准作用于疣体增生组织，实现深层彻底清除',
    's5.f2':'温和无创，相比冷冻疗法不易起水疱，不留疤痕，体验舒适',
    's5.f3':'高效洁净，较激光与外用药物清除更彻底，术后肤质洁净度更高',
    's5.f4':'恢复迅速，单次治疗即可见效，恢复期短，不影响日常工作生活',
    's5.btn':'立即预约此疗程 →',
    // Add-on
    'addon.h4':'附加项目',
    'addon.i1':'颈部 + 胸口护理 <span class="addon-price">$49</span>',
    'addon.i2':'颈部护理 <span class="addon-price">$29</span>',
    'addon.i3':'手部护理 <span class="addon-price">$39</span>',
    // Body Treatments
    'svc.cat-body':'身体护理',
    'bd.badge':'生命能量焕活系列',
    'bd.title':'魔力养生大师',
    'bd.desc':'运用仪器精准释放能量，深层渗透、调理身心，焕发内在活力，同步塑造纤盈身体线条',
    'bd1.h3':'带脉焕活调理', 'bd1.dur':'/ 45分钟', 'bd1.pkg':'10次套餐 $1180',
    'bd1.f1':'暖宫驱寒',
    'bd1.f2':'促进腰腹循环代谢',
    'bd1.f3':'疏通局部淤堵不适',
    'bd1.btn':'立即预约此疗程 →',
    'bd2.h3':'胸部淋巴疏通护理', 'bd2.dur':'/ 45分钟', 'bd2.pkg':'10次套餐 $1180',
    'bd2.f1':'低频能量软化结节',
    'bd2.f2':'疏通胸腋淋巴管道',
    'bd2.f3':'缓解经络淤堵及胸部不适',
    'bd2.btn':'立即预约此疗程 →',
    'bd3.h3':'肩颈腰背痛舒缓护理', 'bd3.dur':'/ 60分钟', 'bd3.pkg':'10次套餐 $1680',
    'bd3.f1':'松解筋膜粘连与肌肉结节，促进软组织放松',
    'bd3.f2':'改善纤维增生与肌肉劳损，缓解慢性不适',
    'bd3.f3':'缓解肩周炎及肢体僵硬疼痛，提升活动灵活性',
    'bd3.btn':'立即预约此疗程 →',
    'bd4.h3':'全身塑形紧致护理', 'bd4.dur':'/ 75分钟', 'bd4.pkg':'10次套餐 $2280',
    'bd4.f1':'靶向燃脂，促进局部脂肪分解',
    'bd4.f2':'深层松解筋膜粘连，改善组织紧张',
    'bd4.f3':'提拉紧致肌肤，塑造流畅身体线条',
    'bd4.btn':'立即预约此疗程 →',
    // Concerns
    'con.tag':'精准解决方案', 'con.h2':'针对您的<br>肌肤问题',
    'con.p':'点击下方选择您的肌肤问题，了解成因解析与专属护理建议。',
    'con.chip-sens':'肌肤敏感', 'con.chip-dull':'肤色暗沉',
    'con.chip-age':'肌肤松弛', 'con.chip-pore':'毛孔粗大',
    'con.chip-acne':'肌肤油腻', 'con.chip-eye':'眼周专护',
    'con.empty':'点击上方任一肌肤问题，查看成因解析与专属护理建议。',
    'con.h-internal':'内源性因素', 'con.h-external':'外源性因素',
    'con.h-rec':'推荐项目', 'con.h-consult':'不确定护理方案？',
    'con.btn-book':'预约此项目', 'con.btn-consult':'免费预约面诊',
    // Promise
    'pro.tag':'我们的承诺', 'pro.h2':'专业·诚信·效果',
    'pro.p':'美丽与真诚并行——我们只推荐肌肤真正需要的，并呈现您看得见、感受得到的实际效果。',
    'pro.p1':'专业', 'pro.p2':'诚信', 'pro.p3':'效果',
    // Booking
    'bk.tag':'预约护理', 'bk.h2':'准备好<br>焕发光彩了吗？',
    'bk.p':'填写表单后，我们将尽快为您确认预约。欢迎随时来访！',
    'bk.c1':'随时来电或发短信', 'bk.c2':'新西兰',
    'bk.c3h':'周一至周六\u00a0上午9时–下午7时', 'bk.c3s':'周日 需提前预约',
    'bk.formh3':'预约您的护理疗程',
    'bk.lbl-fn':'名字 *', 'bk.ph-fn':'如：芳',
    'bk.lbl-ln':'姓氏 *', 'bk.ph-ln':'如：王',
    'bk.lbl-ph':'电话 *', 'bk.lbl-em':'电子邮箱', 'bk.ph-em':'example@email.com',
    'bk.lbl-tr':'护理项目 *', 'bk.opt-sel':'— 请选择疗程 —',
    'bk.og-qf':'Q Facial 肌肤焕新系列', 'bk.og-facial':'更多面部护理', 'bk.og-body':'身体护理',
    'bk.t-qf1':'净澈焕肤 — $148 / 45分钟',
    'bk.t-qf2':'肌底修复护肤 — $178 / 50分钟',
    'bk.t-qf3':'水滴修复 — $208 / 60分钟',
    'bk.t-qf4':'多维塑颜焕肤 — $238 / 75分钟',
    'bk.t-s1':'经典毛孔净化护理 — $89 / 60分钟',
    'bk.t-s2':'LED光疗 — $69 / 30分钟',
    'bk.t-s3':'中胚层导入微针 — $229 / 30分钟',
    'bk.t-s4':'芳香疗法面部拨筋 — $129 / 60分钟',
    'bk.t-s5':'专业电解疣体去除 — $10-15',
    'bk.t-s7':'面部除绒护理 — $59 / 45分钟',
    'bk.t-bd1':'带脉焕活调理 — $138 / 45分钟',
    'bk.t-bd2':'胸部淋巴疏通护理 — $138 / 45分钟',
    'bk.t-bd3':'肩颈腰背痛舒缓护理 — $198 / 60分钟',
    'bk.t-bd4':'全身塑形紧致护理 — $258 / 75分钟',
    'bk.lbl-ao':'附加项目',
    'bk.opt-no':'不需要',
    'bk.lbl-dt':'期望预约日期 *', 'bk.lbl-tm':'期望预约时间 *',
    'bk.lbl-no':'肌肤问题 / 备注',
    'bk.ph-no':'请描述您的肌肤问题或任何疑问……',
    'bk.submit':'确认预约 ✦',
    'bk.note':'我们将在数小时内以电话或短信确认，无需预付款。',
    // Footer
    'ft.brand':'30年认证高级美容师，专业美肤护理，诚实建议，奢华效果，超值定价。',
    'ft.svc':'护理项目',
    'ft.qf':'Q Facial 肌肤焕新系列',
    'ft.s1':'经典毛孔净化护理', 'ft.s2':'LED光疗',
    'ft.s3':'微针 + 美塑导入', 'ft.s4':'芳香疗法面部拨筋',
    'ft.s5':'疣体去除',
    'ft.s7':'面部除绒护理', 'ft.bd':'魔力养生大师系列',
    'ft.links':'快速导航',
    'ft.l1':'为何选择我们', 'ft.l2':'肌肤问题', 'ft.l3':'预约护理',
    'ft.hours':'营业时间', 'ft.h1':'周一至周六：上午9时–下午7时', 'ft.h2':'周日：需提前预约',
    'ft.copy':'© 2026 Beauty Expert Studio · 奥克兰格伦英尼斯 · 版权所有',
    // Modals
    'mod.ok-title':'预约已发送！',
    'mod.ok-msg':'您的预约请求已发送至我们邮箱，我们将在数小时内以电话或短信确认。期待您的到来！',
    'mod.ok-btn':'好的，谢谢！',
    'mod.err-title':'邮件发送失败',
    'mod.err-msg':'请直接拨打或发送短信至 <strong><a href="tel:021901118" style="color:var(--rose)">021 901 118</a></strong> 进行预约。给您带来不便，深感抱歉！',
    'mod.err-btn':'知道了',
    // Sticky CTA
    'cta.call':'📞 致电', 'cta.book':'立即预约',
    // Gallery page
    'gal.back':'返回首页', 'gal.tag':'我们的工作室',
    'gal.h2':'走进<br>Beauty Expert Studio',
    'gal.p':'私密无菌护理空间，配备院线级专业仪器与高端护肤产品。',
    'gal.env.h':'私密护理房间',
    'gal.env.p':'宁静的私密空间，每位客户之间全面消毒，安心无忧。',
    'gal.hero.h':'亲手操作的专业技艺',
    'gal.hero.p':'每次护理均由Hannah亲自操作——三十年认证资深美容师，一对一专属服务。',
    'gal.dev1.h':'Q Facial——旗舰仪器',
    'gal.dev1.p':'韩国顶级清洁仪器，KC与MFDS双重认证，全球超20,000家高端院线标配。',
    'gal.dev2.h':'院线级产品',
    'gal.dev2.p':'正规授权高端护肤——主理人亲自试用，温和精准，零冗余添加。',
    // Nav - Q Facial page
    'nav.qfacial':'Q Facial',
    'nav.consent':'知情同意书',
    // Q Facial Page (qfp.*)
    'qfp.back':'返回首页',
    'qfp.tag':'我们的仪器',
    'qfp.h2':'Q Facial<br>水光焕肤系统',
    'qfp.subtitle':'三合一超声波皮肤管理系统',
    'qfp.intro':'Q-facial是一款使用三种管理系统的复合皮肤管理设备。将3种配方溶液喷射到皮肤后进行吸收和管理的系统，去除角质、皮脂和黑头，促进皮肤再生。此外，使用高浓度肌肤补充剂，镇定和改善没有弹性的皮肤和有问题的皮肤。超声波系统可以增加皮肤中的水分，提高皮肤再生能力，维持有弹性的皮肤。',
    // Benefits
    'qfp.ov-tag':'核心功效',
    'qfp.ov-h2':'Q Facial 的作用',
    'qfp.b1-h':'改善粉刺', 'qfp.b1-p':'针对致痘堆积物，促进更清透、更健康的肌肤。',
    'qfp.b2-h':'缓解毛囊炎', 'qfp.b2-p':'通过温和的深层清洁舒缓发炎的毛囊。',
    'qfp.b3-h':'去除黑头', 'qfp.b3-p':'真空吸力从毛孔中提取白头和黑头。',
    'qfp.b4-h':'提亮肤色', 'qfp.b4-p':'改善肤色，打造亮泽均匀的肤色。',
    'qfp.b5-h':'深层补水', 'qfp.b5-p':'为肌肤提供密集补水和营养。',
    'qfp.b6-h':'促进吸收', 'qfp.b6-p':'通过去除皮脂和角质，帮助护肤品更好地吸收。',
    // Core Functions
    'qfp.fn-h':'三大核心功能',
    'qfp.fn1':'去除<br>死皮', 'qfp.fn2':'去除皮脂<br>&黑头', 'qfp.fn3':'肌肤<br>补水',
    // Mechanism
    'qfp.mech-tag':'工作原理',
    'qfp.mech-h2':'三步操作机制',
    'qfp.s1-h':'喷射', 'qfp.s1-p':'顺时针旋转，溶液从喷嘴内部喷射，溶解皮肤表面的杂质。',
    'qfp.s2-h':'吸引', 'qfp.s2-p':'将皮质和角质等杂质和残留溶液排入废水桶。',
    'qfp.s3-h':'导入', 'qfp.s3-p':'溶液通过喷嘴到达皮肤表面，达到补水舒缓的效果。',
    // Solutions
    'qfp.sol-tag':'专业溶液',
    'qfp.sol-h2':'三种配方溶液',
    'qfp.fa-h':'Formula-A：乙醇酸（AHA）',
    'qfp.fa-p':'基于AHA（乙醇酸）的水溶性去角质配方。去除皮肤表面的死皮细胞和杂质。',
    'qfp.fa-skin':'推荐皮肤类型：中性 / 干燥 / 敏感皮肤',
    'qfp.fb-h':'Formula-B：水杨酸（BHA）',
    'qfp.fb-p':'基于BHA（水杨酸）的油溶性去角质配方。清洁和去除毛孔中的皮脂。',
    'qfp.fb-skin':'推荐皮肤类型：油性 / 问题皮肤',
    'qfp.fc-h':'Formula-C：保湿舒缓（TON）',
    'qfp.fc-p':'最后一步的强烈保湿和舒缓效果。含有透明质酸（透明质酸钠）和维生素E（Tocopheryl Acetate），用于油/水平衡。',
    'qfp.fc-skin':'适合所有肤质的最后步骤',
    // BELLELUMIE Skin Boosters
    'qfp.bst-tag':'BELLELUMIE 肌肤补充剂',
    'qfp.bst-h2':'五款定制安瓶精华',
    'qfp.bst-p':'高浓度肌肤补充剂，定制化护理——每款针对特定肌肤问题。',
    'qfp.bf-tag':'皱纹 \u00B7 弹性',
    'qfp.bf-p':'打造水润、紧致、光滑的肌肤。专利皱纹与弹性肽，配合27种保湿成分，深入皮肤核心层层补水，让皮肤变得光滑、紧致。',
    'qfp.bb-tag':'过敏 \u00B7 镇静',
    'qfp.bb-p':'专注问题性肌肤，清爽打理、温和镇静。镇静肽及茶树叶精油镇静问题肌肤。水杨酸和烟酰胺打理毛孔和角质，淡化斑痕。',
    'qfp.bd-tag':'美白 \u00B7 光亮',
    'qfp.bd-p':'让皮肤焕发天然的生机与光彩。美白肽、氨甲环酸和烟酰胺改善黑斑、提亮肤色。含27种补水、镇静成分，打造水光肌肤。',
    'qfp.bh-tag':'温热 \u00B7 毛孔',
    'qfp.bh-p':'涂抹后瞬间产生的温热感可以收缩毛孔，并赋予皮肤弹力感。适度的温热感为疲惫的肌肤赋予旺盛的活力。',
    'qfp.bc-tag':'降温 \u00B7 敏感',
    'qfp.bc-p':'涂抹后瞬间产生的清凉感有助于镇静肌肤。薄荷油和薄荷醇快速降低皮肤热感，含7种镇静成分，让微整形后受到刺激的肌肤回归镇静。',
    // Ultrasonic
    'qfp.us-tag':'超声波技术',
    'qfp.us-h2':'双频精准技术',
    'qfp.us-10d':'约1.5mm 表皮层',
    'qfp.us-10p':'高密度超声波将能量传递至约1.5mm表皮层，进行表层肌肤更新。',
    'qfp.us-3d':'约3mm 真皮层',
    'qfp.us-3p':'可将能量传递至约3mm的皮下脂肪边界位置，进行深层组织护理。',
    'qfp.us-l1':'促进皮肤内胶原蛋白的生成，打造更紧致健康的肌肤质感',
    'qfp.us-l2':'调节水分平衡，打造健康富有弹力的肌肤',
    'qfp.us-l3':'温暖的热感不会刺激皮肤——适合所有肤质',
    'qfp.us-l4':'改善皮肤问题和改善敏感性皮肤',
    'qfp.us-l5':'预防各种皮肤炎症，改善老化',
    'qfp.us-l6':'仅需一次施术即可达到预期效果',
    // CTA
    'qfp.cta-h':'在我们工作室体验 Q Facial',
    'qfp.cta-p':'准备好体验韩国顶级仪器的不同之处了吗？立即预约您的Q Facial护理。',
    'qfp.cta-btn1':'预约 Q Facial 护理',
    'qfp.cta-btn2':'查看全部服务',
  }
};

const concernsData = {
  en: {
    sensitivity: {
      title: 'Skin Sensitivity',
      intro: 'Redness, stinging, dryness and a compromised barrier — caused by a combination of inherent traits and external triggers.',
      internal: [
        'Naturally thin stratum corneum and low sebum production weaken moisture retention and barrier defence',
        'Hyper-reactive nerve endings cause burning and stinging at the slightest stimulus',
        'Weak self-repair ability allows sensitivity to recur',
      ],
      external: [
        'Seasonal temperature shifts, UV exposure and air pollution damage the skin',
        'Over-cleansing and frequent acid peels destroy the natural protective barrier',
        'Improper aftercare following high-intensity aesthetic treatments deepens fragility',
        'Late nights and stress trigger inflammation, worsening redness and reactivity',
      ],
      warning: 'Without consistent professional care, surface discomfort progresses to persistent sensitivity and visible capillaries.',
      recommendations: [
        {
          name: 'Q-Facial Multi-Dimensional Sculpting Treatment',
          price: '$238',
          body: 'After purifying cleansing, the dedicated SKIN BOOSTER COOL+ soothing ampoule is infused to rapidly calm heat and redness, comfort the damaged base layer, ease dryness and stinging, and strengthen the corneum — reducing recurring sensitivity at its source. Paired with Korea-patented high-density dual-frequency ultrasound to drive nutrients deep into the dermis for layered, gentle repair.',
          service: 'Multi-Dimensional Sculpting Treatment',
        },
        {
          name: 'LED Spectrum Recovery Therapy',
          price: '$69',
          body: 'Gently repairs the barrier, calms inflammation, accelerates skin metabolism and fades redness and heat. Non-invasive with no downtime — ideal for post-procedure recovery and daily maintenance.',
          service: 'LED Light Therapy',
        },
      ],
      consult: 'Not sure which plan is right for you? Book a complimentary one-on-one consultation with our 30-year senior beautician for a bespoke programme to strengthen your barrier, soothe redness and repair sensitive skin from within.',
    },
    dullness: {
      title: 'Dullness & Pigmentation',
      intro: 'Uneven tone, lacklustre skin and pigment deposits forming various spots — driven by internal metabolic imbalance and external triggers.',
      internal: [
        'With age and hormonal fluctuation, melanin metabolism slows and pigments easily accumulate into spots',
        'Glycation produces AGEs that damage collagen, robbing skin of clarity and leaving it rough and aged',
        'Sluggish facial microcirculation traps metabolic waste, deepening cloudiness and dullness',
      ],
      external: [
        'Long-term UV exposure activates tyrosinase, accelerating melanin production and triggering spots and photo-pigmentation',
        'Poor wound healing easily forms acne marks and stubborn post-inflammatory pigmentation',
        'Improper cleansing and over-exfoliation weaken the barrier, allowing pigment to deposit and resist metabolism',
        'Environmental free radicals continuously oxidise the skin, intensifying dullness and loss of glow',
        'Improper aftercare following high-intensity aesthetic treatments can trigger thermal-stress inflammation and pigment rebound',
      ],
      warning: 'Without ongoing professional care, surface pigment darkens into connected patches, forming stubborn spots and persistent dullness.',
      recommendations: [
        {
          name: 'Q-Facial Multi-Dimensional Sculpting Treatment',
          price: '$238',
          body: 'After purifying cleansing, the dedicated SKIN BOOSTER DULL FADE IN patented brightening ampoule is infused to inhibit tyrosinase activity, neutralise free radicals, block pigment formation, accelerate metabolism of deposited pigment, fade spots and acne marks, and visibly enhance clarity and luminosity. Paired with Korea-patented high-density dual-frequency ultrasound to disperse settled pigment and unify skin tone.',
          service: 'Multi-Dimensional Sculpting Treatment',
        },
        {
          name: 'Brightening Serum Infusion (Microneedling)',
          price: '$229',
          body: 'Microneedles open absorption channels and deliver a high-concentration brightening serum to the base layer, targeting the source of melanin to fade stubborn spots, acne marks and deep pigmentation.',
          service: 'Enhanced Microneedling with Mesolinfu',
        },
        {
          name: 'LED Spectrum Brightening Therapy',
          price: '$69',
          body: 'Professional light wavelengths suppress melanin activity and repair photo-aging damage, improving overall dullness. Non-invasive with no downtime — suitable for daily maintenance on all skin types.',
          service: 'LED Light Therapy',
        },
        {
          name: 'Aromatherapy Facial Meridian Kneading',
          price: '$129',
          body: 'Clears facial lymph and microcirculation, metabolises old waste and dead keratin, improves circulation-related dullness and awakens delicate, translucent skin from within.',
          service: 'Aromatherapy Facial Meridian Kneading',
        },
      ],
      consult: 'Not sure which plan is right for you? Book a complimentary one-on-one consultation with our 30-year senior beautician for a bespoke brightening programme — evening tone, dissolving pigment and restoring your skin\'s translucent native clarity.',
    },
    aging: {
      title: 'Sagging & Aging',
      intro: 'Loose skin and deepening lines — driven by internal natural aging and external environmental stress.',
      internal: [
        'Collagen loss accelerates with age (~1% per year), fibroblast activity drops, and synthesis of collagen and elastin slows',
        'Thinning subcutaneous fat and loss of hyaluronic acid weaken support and hydration, leaving contours slack and dry lines visible',
      ],
      external: [
        'Photo-aging: UV destroys collagen fibres, accelerating sagging and line formation',
        'Oxidative stress: free radicals from the environment and daily metabolism attack cell structures, accelerating aging',
        'Glycation: excess sugar binds with collagen to form AGEs, making collagen brittle and inelastic',
        'Lifestyle: late nights, high-sugar diet and stress amplify sagging and lines',
        'Improper aftercare following high-intensity aesthetic treatments damages skin function and speeds up aging',
      ],
      warning: 'Without consistent professional care, fine dry lines deepen into static wrinkles and contours continue to sag.',
      recommendations: [
        {
          name: 'Q-Facial Multi-Dimensional Sculpting Treatment',
          price: '$238',
          body: 'After purifying cleansing, the dedicated SKIN BOOSTER REJUVENILE FILI patented anti-aging ampoule is infused to replenish collagen nutrients, fade dry lines, restore elasticity and support, and revitalise tired, dull skin — visibly lifting sagging contours for taut, plump, silky-smooth skin. Paired with Korea-patented high-density dual-frequency ultrasound for layered activation and repair.',
          service: 'Multi-Dimensional Sculpting Treatment',
        },
        {
          name: 'Anti-Aging Serum Infusion (Microneedling)',
          price: '$229',
          body: 'Microneedles open absorption channels and deliver a high-concentration anti-aging serum to the base layer, activating fibroblasts, inducing new collagen and elastin, smoothing deep static lines and improving slackness.',
          service: 'Enhanced Microneedling with Mesolinfu',
        },
        {
          name: 'LED Spectrum Anti-Aging Therapy',
          price: '$69',
          body: 'Professional light wavelengths activate fibroblasts, boost collagen synthesis, repair photo-aging damage, fade fine lines and tighten skin texture. Non-invasive with no downtime — suitable for daily anti-aging on all skin types.',
          service: 'LED Light Therapy',
        },
        {
          name: 'Aromatherapy Facial Meridian Kneading',
          price: '$129',
          body: 'Professional techniques lift facial contours, clear lymphatic circulation and relieve muscular tension and puffiness — creating taut, uplifted, youthful skin.',
          service: 'Aromatherapy Facial Meridian Kneading',
        },
      ],
      consult: 'Not sure which plan is right for you? Book a complimentary one-on-one consultation with our 30-year senior beautician for a bespoke anti-aging and firming programme — reinforcing collagen support, softening lines and restoring your skin\'s elastic vitality.',
    },
    pores: {
      title: 'Enlarged Pores',
      intro: 'Coarse, oily skin with enlarged pores prone to clogging and breakouts — driven by internal oil imbalance and external damage.',
      internal: [
        'Collagen and elastin loss with age weakens support around pores, creating slack, enlarged pores',
        'Overactive sebaceous glands flood pores with oil, stretching them and triggering blockages and closed comedones',
        'Slow metabolism causes dead keratin to accumulate, widening pore openings and roughening texture',
      ],
      external: [
        'UV photo-aging destroys collagen around pores, worsening sagging-type pore enlargement',
        'Improper cleansing, over-exfoliation and frequent squeezing damage pore walls, causing irreversible enlargement',
        'Improper aftercare following high-intensity aesthetic treatments worsens inflammation and pore roughness',
        'Late nights, high-fat/high-sugar diet and pollution stimulate oil production and intensify clogging',
      ],
      warning: 'Without consistent professional care, coarse pores continue to widen, skin becomes increasingly uneven, and closed comedones and breakouts recur.',
      recommendations: [
        {
          name: 'Q-Facial Multi-Dimensional Sculpting Treatment',
          price: '$238',
          body: 'After purifying cleansing, the dedicated SKIN BOOSTER PORE CARE patented refining ampoule is infused to balance sebum, clear pore blockages, tighten enlarged pores and smooth rough texture — reinforcing collagen support around pores to address recurring enlargement at the source. Paired with Korea-patented high-density dual-frequency ultrasound for layered refinement and repair.',
          service: 'Multi-Dimensional Sculpting Treatment',
        },
        {
          name: 'Refining Serum Infusion (Microneedling)',
          price: '$229',
          body: 'Microneedles open absorption channels and deliver a high-concentration refining serum to the base layer, repairing pore walls, restoring collagen support, tightening slack pores and smoothing uneven texture.',
          service: 'Enhanced Microneedling with Mesolinfu',
        },
        {
          name: 'LED Spectrum Refining Therapy',
          price: '$69',
          body: 'Professional light wavelengths balance oil, calm inflammation, repair pore damage and refine texture. Non-invasive with no downtime — ideal for daily maintenance of oily, acne-prone and enlarged-pore skin.',
          service: 'LED Light Therapy',
        },
        {
          name: 'Aromatherapy Facial Meridian Kneading',
          price: '$129',
          body: 'Clears facial lymph and circulation, metabolises old keratin and oil build-up, relieves puffiness and creates a refined, smooth, clear complexion.',
          service: 'Aromatherapy Facial Meridian Kneading',
        },
      ],
      consult: 'Not sure which plan is right for you? Book a complimentary one-on-one consultation with our 30-year senior beautician for a bespoke pore-refining programme — balancing oil, tightening pores and restoring your skin\'s smooth native texture.',
    },
    acne: {
      title: 'Acne & Oily Skin',
      intro: 'Recurring breakouts, oily shine, inflammatory redness and frequent closed comedones — driven by internal oil imbalance and external triggers.',
      internal: [
        'Overactive sebaceous glands clog pores with excess oil, forming comedones, blackheads and inflammatory acne',
        'Disrupted metabolism causes abnormal keratin build-up, recurring pore blockages and acne that\'s slow to clear',
        'Weak self-repair and anti-inflammatory ability leaves acne to heal slowly, leaving marks, scars and pigmentation',
      ],
      external: [
        'UV exposure intensifies inflammation, deepening redness and acne marks',
        'Improper cleansing, over-care and frequent exfoliation damage the barrier and worsen oil-water imbalance',
        'Makeup residue, pollution and incomplete pore cleansing trigger clogging and inflammatory acne',
        'Late nights, high-sugar/high-fat diet and stress drive oil surges and recurring breakouts',
        'Improper aftercare following high-intensity aesthetic treatments triggers inflammatory breakouts and deeper marks',
      ],
      warning: 'Without consistent professional care, inflammatory acne recurs and easily leaves permanent marks, scars and rough, fragile skin.',
      recommendations: [
        {
          name: 'Q-Facial Multi-Dimensional Sculpting Treatment',
          price: '$238',
          body: 'After purifying cleansing, the dedicated SKIN BOOSTER ACNE CONTROL patented clarifying ampoule is infused to balance sebum, unclog pores, calm inflammation, reduce red swollen pimples, address closed comedones and fade new acne marks — strengthening the barrier to prevent recurring breakouts. Paired with Korea-patented high-density dual-frequency ultrasound for layered clarifying repair and restored, fresh skin.',
          service: 'Multi-Dimensional Sculpting Treatment',
        },
        {
          name: 'Clarifying Serum Infusion (Microneedling)',
          price: '$229',
          body: 'Microneedles open absorption channels and deliver a high-concentration clarifying serum to the base layer, suppressing inflammation, unclogging pores, repairing acne damage, fading marks and reducing recurring breakouts.',
          service: 'Enhanced Microneedling with Mesolinfu',
        },
        {
          name: 'LED Spectrum Clarifying Therapy',
          price: '$69',
          body: 'Professional light wavelengths calm inflammation, suppress acne bacteria, balance oil, repair the acne-prone barrier and reduce red swollen pimples. Non-invasive with no downtime — ideal for daily maintenance of oily, acne-prone skin.',
          service: 'LED Light Therapy',
        },
        {
          name: 'Aromatherapy Facial Meridian Kneading',
          price: '$129',
          body: 'Clears facial lymph circulation, metabolises oil build-up and dead keratin, calms inflammatory puffiness and creates fresh, smooth, healthy skin.',
          service: 'Aromatherapy Facial Meridian Kneading',
        },
      ],
      consult: 'Not sure which plan is right for you? Book a complimentary one-on-one consultation with our 30-year senior beautician for a bespoke acne and oil-control programme — balancing hydration and oil, calming breakouts and restoring your skin\'s fresh, clear native texture.',
    },
    eyes: {
      title: 'Dark Circles, Eye Bags & Fine Lines',
      intro: 'Dull dark circles, puffy bags, dry fine lines and sagging around the eyes — driven by internal circulatory slowdown and external aging damage.',
      internal: [
        'Eye-area skin is delicate and thin, with extremely low collagen and elastin, weak support, and easily develops dry lines, slackness and fine lines',
        'Late nights and overuse of the eyes cause poor microcirculation, accumulating metabolic waste and forming vascular and pigment dark circles',
        'Poor lymphatic flow around the eyes traps water and waste, triggering persistent bags, puffiness and sagging',
        'With age, collagen around the eyes is rapidly lost; surface dry lines deepen into static lines and contours grow slack',
      ],
      external: [
        'UV photo-aging destroys collagen around the eyes, worsening fine lines, slackness, dark circles and pigmentation',
        'Frequent blinking, expression movement and improper tugging accelerate eye-area lines and slackness',
        'Dry environments and free-radical oxidation worsen dehydration, dryness, dullness and roughness',
        'Improper aftercare following high-intensity aesthetic treatments worsens fragility, redness, dullness and deepening lines',
      ],
      warning: 'Without consistent professional care, eye-area dry lines deepen, dark circles and bags grow stubborn, and the face looks tired and aged overall.',
      recommendations: [
        {
          name: 'Q-Facial Multi-Dimensional Eye-Area Treatment',
          price: '$238',
          body: 'After purifying eye-area cleansing, the matched functional ampoule is infused to deeply hydrate and lock in moisture, fade dry lines and fine lines, improve pigment-type dark circles, ease eye fatigue, strengthen collagen support, tighten slack bags and contours, and smooth and refine the eye area. Paired with Korea-patented high-density dual-frequency ultrasound for precision delivery and layered activation — gentle, non-invasive and suitable for every skin type.',
          service: 'Multi-Dimensional Sculpting Treatment',
        },
        {
          name: 'Aromatherapy Eye-Area Meridian Kneading',
          price: '$129',
          body: 'Gentle professional techniques clear eye-area lymph and microcirculation, metabolise trapped waste and excess fluid, improve puffy bags, fade dark circles and lift contours — creating smooth, taut, bright, youthful eyes.',
          service: 'Aromatherapy Facial Meridian Kneading',
        },
      ],
      consult: 'Not sure which plan is right for you? Book a complimentary one-on-one consultation with our 30-year senior beautician for a bespoke eye-area programme — softening lines, fading dark circles, addressing bags and repairing the eye base for taut, bright, youthful eyes.',
    },
  },
  zh: {
    sensitivity: {
      title: '肌肤敏感',
      intro: '肌肤敏感泛红、刺痛干痒、屏障脆弱，由先天与后天因素共同导致。',
      internal: [
        '先天角质层薄，皮脂分泌不足，锁水防御能力弱',
        '神经末梢敏感，受刺激易出现灼热、刺痛不适感',
        '自身修护力薄弱，肌肤敏感问题容易反复',
      ],
      external: [
        '换季温差、紫外线、空气污染等外界刺激损伤肌肤',
        '过度清洁、频繁刷酸，直接破坏肌肤天然保护屏障',
        '各类高能量医美项目术后养护不当，加重肌肤脆弱',
        '熬夜、精神压力大，诱发肌肤炎症，加重泛红敏感',
      ],
      warning: '长期疏于专业护理，浅层不适会发展为持续性敏感、红血丝明显。',
      recommendations: [
        {
          name: 'Q-Facial 多维塑颜焕肤',
          price: '$238',
          body: '净澈焕肤后，针对敏感脆弱肌，导入专属 SKIN BOOSTER COOL+ 舒敏修护安瓶，快速镇静降温、舒缓燥热泛红，安抚受损肌底、缓解干痒刺痛，强韧角质屏障，从根源减少敏感反复问题。搭配韩国专利高密度双频超声波，助推营养成分深层渗透肌底，分层舒缓修护，唤醒肌肤原生修复力。',
          service: 'Multi-Dimensional Sculpting Treatment',
        },
        {
          name: 'LED 光谱修护光疗',
          price: '$69',
          body: '温和修护屏障、舒缓炎症，加速代谢，淡化泛红灼热。非侵入、无恢复期，适合术后修护与日常维稳。',
          service: 'LED Light Therapy',
        },
      ],
      consult: '不确定护理方案？可免费预约 30 年高级美容师一对一精准面诊，定制专属维稳方案，强韧屏障、舒缓泛红、修护脆弱肌底。',
    },
    dullness: {
      title: '肤色暗沉',
      intro: '肤色不均、暗沉无光、色素沉积形成色斑，由内源性代谢失衡与外源性刺激共同诱发。',
      internal: [
        '年龄增长与内分泌波动，黑色素代谢减慢，色素易堆积形成各类色斑',
        '体内糖化反应生成 AGEs，破坏胶原质感，肌肤失去通透度，肤质粗糙老化',
        '面部微循环滞缓，代谢废物淤积，加重肤色浑浊、暗沉无光',
      ],
      external: [
        '紫外线长期照射激活酪氨酸酶，加速黑色素生成，诱发色斑与光损伤色沉',
        '肌肤炎症愈合不当，易形成痘印与顽固性炎症后色素沉着',
        '不当清洁、过度刷酸削弱肌肤屏障，色素更易沉积且难以代谢',
        '环境自由基持续氧化肌肤，加剧肌肤暗沉、失去光泽',
        '各类高能量医美项目术后养护不当，易引发热应激炎症，进而诱发色素反黑与肤色不均',
      ],
      warning: '长期疏于专业护理，浅层色素会逐步加深连片，形成顽固色斑与持续性暗沉。',
      recommendations: [
        {
          name: 'Q-Facial 多维塑颜焕肤',
          price: '$238',
          body: '净澈焕肤后，针对色素暗沉肌，导入专属 SKIN BOOSTER DULL FADE IN 专利焕白安瓶，抑制酪氨酸酶活性、中和自由基、阻断色素生成，加速代谢色素沉积，淡化色斑与痘印，提升肌肤通透亮泽度。搭配韩国专利高密度双频超声波，助推营养成分深层渗透，打散沉积色素，匀净焕亮肤质。',
          service: 'Multi-Dimensional Sculpting Treatment',
        },
        {
          name: '美白原液导入护理（微针）',
          price: '$229',
          body: '微针打开肌肤吸收通道，将高浓度美白原液输送至肌底，直击黑色素生成源头，淡化顽固色斑、痘印与深层色沉。',
          service: 'Enhanced Microneedling with Mesolinfu',
        },
        {
          name: 'LED 光谱美白光疗',
          price: '$69',
          body: '以专业光调作用抑制黑素活性、修护光老化损伤，改善全域暗沉，非侵入、无恢复期，适合全肤质日常维稳。',
          service: 'LED Light Therapy',
        },
        {
          name: '芳香疗法面部拨筋',
          price: '$129',
          body: '疏通面部淋巴与微循环，代谢老旧废物与角质，改善循环型肤色浑浊，由内唤醒肌肤细腻透亮质感。',
          service: 'Aromatherapy Facial Meridian Kneading',
        },
      ],
      consult: '不确定护理方案？可免费预约 30 年高级美容师一对一精准面诊，定制专属焕白淡斑方案，匀净提亮、分解色素、修复肌底，还原肌肤通透匀净的原生质感。',
    },
    aging: {
      title: '肌肤松弛',
      intro: '肌肤松弛、纹路加深，由内源性自然老化与外源性环境刺激共同引发。',
      internal: [
        '年龄增长，胶原蛋白每年流失约 1%，成纤维细胞活性下降，胶原与弹力纤维合成减少',
        '皮下脂肪层变薄、透明质酸流失，肌肤支撑力与锁水力下降，轮廓松垮、干纹出现',
      ],
      external: [
        '光老化损伤：紫外线破坏胶原纤维，加速松弛与纹路形成',
        '氧化应激：环境与肌肤日常代谢时刻产生自由基，攻击细胞结构，加速肌肤老化',
        '糖化反应：多余糖分与胶原生成 AGEs，使胶原变脆、失去弹性',
        '不良习惯：熬夜、高糖饮食等，加重松弛与纹路',
        '各类高能量医美项目术后养护不当，易引发肌肤机能受损，加速松弛老化',
      ],
      warning: '长期疏于专业护理，干纹细纹会发展为深层静态纹，轮廓持续松弛下垂。',
      recommendations: [
        {
          name: 'Q-Facial 多维塑颜焕肤',
          price: '$238',
          body: '净澈焕肤后，针对松弛老化肌，导入专属 SKIN BOOSTER REJUVENILE FILI 专利抗衰安瓶，补充胶原养分、淡化干纹细纹，提升肌肤弹性与支撑力，焕活疲惫暗沉肌质，改善面部松弛下垂，令肌肤紧致饱满、细腻柔滑。搭配韩国专利高密度双频超声波，助推营养成分深层渗透肌底，分层修护激活、唤醒肌肤原生修复力。',
          service: 'Multi-Dimensional Sculpting Treatment',
        },
        {
          name: '抗衰原液导入护理（微针）',
          price: '$229',
          body: '微针打开肌肤吸收通道，将高浓度抗衰精华输送至肌底，激活成纤维细胞活性，诱导胶原与弹力纤维新生，淡化深层静态纹、改善轮廓松垮。',
          service: 'Enhanced Microneedling with Mesolinfu',
        },
        {
          name: 'LED 光谱抗衰光疗',
          price: '$69',
          body: '以专业光调作用激活成纤维细胞活性，促进胶原合成，修护光老化损伤，淡化细纹、紧致肤质。非侵入、无恢复期，适合全肤质日常抗衰维稳。',
          service: 'LED Light Therapy',
        },
        {
          name: '芳香疗法面部拨筋',
          price: '$129',
          body: '专业手法提拉面部轮廓、疏通淋巴循环，缓解肌肉紧张与浮肿，打造紧致上扬的年轻肤质。',
          service: 'Aromatherapy Facial Meridian Kneading',
        },
      ],
      consult: '不确定护理方案？可免费预约 30 年高级美容师一对一精准面诊，定制专属抗衰紧致方案，强韧胶原支撑、淡化纹路、修复肌底，还原肌肤紧致弹性。',
    },
    pores: {
      title: '毛孔粗大',
      intro: '肌肤毛孔粗大、粗糙油腻、易堵塞长痘，由内源性油脂失衡与外源性损伤共同引发。',
      internal: [
        '年龄增长，胶原与弹力纤维流失，毛孔周围支撑力不足，出现松弛型粗大毛孔',
        '皮脂腺分泌旺盛，油脂过量堆积，撑大毛孔、诱发堵塞与闭口',
        '肌肤代谢循环减慢，老废角质堆积，毛孔开口变粗、肤质粗糙不平',
      ],
      external: [
        '紫外线光老化损伤，破坏毛孔周围胶原结构，加剧毛孔松弛下垂',
        '不当清洁、过度去角质、频繁挤压，损伤毛孔壁，导致毛孔不可逆粗大',
        '各类高能量医美项目术后养护不当，加重肌肤炎症与毛孔粗糙问题',
        '熬夜、高油高糖饮食、环境污染，刺激油脂分泌，加重毛孔堵塞与粗大',
      ],
      warning: '长期疏于专业护理，粗糙毛孔会持续扩大，肤质愈发凹凸不平，易反复出现闭口、痘痘问题。',
      recommendations: [
        {
          name: 'Q-Facial 多维塑颜焕肤',
          price: '$238',
          body: '净澈焕肤后，针对粗毛孔油腻肌，导入专属 SKIN BOOSTER PORE CARE 专利细肤安瓶，平衡油脂分泌、清理毛孔堵塞，收敛粗大毛孔、平滑粗糙肤质，强韧毛孔周围胶原支撑，从根源改善毛孔粗大反复问题。搭配韩国专利高密度双频超声波，助推营养成分深层渗透肌底，分层细肤修护、唤醒肌肤原生修复力，还原细腻平滑肤质。',
          service: 'Multi-Dimensional Sculpting Treatment',
        },
        {
          name: '细肤原液导入护理（微针）',
          price: '$229',
          body: '微针打开肌肤吸收通道，将高浓度细肤精华输送至肌底，修护毛孔壁、补充胶原支撑，收敛松弛型粗大毛孔，改善肤质凹凸粗糙。',
          service: 'Enhanced Microneedling with Mesolinfu',
        },
        {
          name: 'LED 光谱细肤光疗',
          price: '$69',
          body: '以专业光调作用平衡油脂、舒缓炎症，修护毛孔损伤，细腻肤质、收敛毛孔。非侵入、无恢复期，适合油痘肌、粗毛孔肌日常维稳。',
          service: 'LED Light Therapy',
        },
        {
          name: '芳香疗法面部拨筋',
          price: '$129',
          body: '疏通面部淋巴与循环，代谢老废角质与油脂堆积，缓解肌肤浮肿油腻，打造细腻平滑的净透肤质。',
          service: 'Aromatherapy Facial Meridian Kneading',
        },
      ],
      consult: '不确定护理方案？可免费预约 30 年高级美容师一对一精准面诊，定制专属细肤收孔方案，平衡油脂、收敛毛孔、修复肌底，还原肌肤细腻平滑的原生质感。',
    },
    acne: {
      title: '肌肤油腻',
      intro: '肌肤反复长痘、油腻泛光、炎症泛红、闭口频发，由内源性油脂失衡与外源性刺激共同引发。',
      internal: [
        '皮脂腺分泌旺盛，油脂过量堵塞毛孔，形成闭口、粉刺与炎性痘痘',
        '肌肤代谢紊乱，老废角质堆积异常，毛孔堵塞反复，痘痘难以消退',
        '自身抗炎修护力弱，痘痘愈合慢，易留下痘印、痘坑与色素沉着',
      ],
      external: [
        '紫外线照射刺激炎症加重，诱发痘痘泛红、痘印色素加深',
        '不当清洁、过度护肤、频繁去角质，破坏肌肤屏障，加重水油失衡',
        '化妆品残留、环境污染、毛孔清洁不到位，诱发堵塞与炎性痘痘',
        '熬夜、高糖高油饮食、精神压力，刺激油脂爆发，加重痘痘反复',
        '各类高能量医美项目术后养护不当，诱发炎症爆痘、痘印加重',
      ],
      warning: '长期疏于专业护理，炎性痘痘会反复爆发，易留下永久性痘印、痘坑，肤质粗糙脆弱。',
      recommendations: [
        {
          name: 'Q-Facial 多维塑颜焕肤',
          price: '$238',
          body: '净澈焕肤后，针对油痘炎症肌，导入专属 SKIN BOOSTER ACNE CONTROL 专利净痘安瓶，平衡油脂分泌、疏通毛孔堵塞，舒缓炎症泛红、消退红肿痘痘，改善闭口粉刺、淡化新生痘印，强韧屏障减少反复爆痘。搭配韩国专利高密度双频超声波，助推营养成分深层渗透肌底，分层净痘修护、唤醒肌肤原生修复力，还原清爽净透肤质。',
          service: 'Multi-Dimensional Sculpting Treatment',
        },
        {
          name: '净痘原液导入护理（微针）',
          price: '$229',
          body: '微针打开肌肤吸收通道，将高浓度净痘精华输送至肌底，抑制炎症、疏通堵塞毛孔，修护痘肌损伤，淡化痘印、改善反复爆痘问题。',
          service: 'Enhanced Microneedling with Mesolinfu',
        },
        {
          name: 'LED 光谱净痘光疗',
          price: '$69',
          body: '以专业光调作用舒缓炎症、抑制痤疮杆菌，平衡油脂分泌，修护痘肌屏障，消退红肿痘痘。非侵入、无恢复期，适合油痘肌日常维稳修护。',
          service: 'LED Light Therapy',
        },
        {
          name: '芳香疗法面部拨筋',
          price: '$129',
          body: '疏通面部淋巴循环，代谢油脂堆积与老废角质，缓解肌肤炎症浮肿，打造清爽平滑的健康肤质。',
          service: 'Aromatherapy Facial Meridian Kneading',
        },
      ],
      consult: '不确定护理方案？可免费预约 30 年高级美容师一对一精准面诊，定制专属净痘控油方案，平衡水油、消退痘痘、修复肌底，还原肌肤清爽净透的原生质感。',
    },
    eyes: {
      title: '黑眼圈 · 眼袋 · 细纹',
      intro: '眼周暗沉黑眼圈、浮肿眼袋、干纹细纹、松弛下垂，由内源性代谢循环减弱与外源性老化损伤共同引发。',
      internal: [
        '眼周肌肤薄嫩脆弱，胶原与弹力纤维含量极低，支撑力薄弱，极易出现干纹、松弛与细纹',
        '熬夜、过度用眼导致眼周微循环不畅，代谢废物淤积，形成血管型与色素型黑眼圈',
        '眼周淋巴循环不畅，水分与废物堆积，诱发持续性眼袋、浮肿与松弛下垂',
        '年龄增长，眼周胶原加速流失，浅层干纹会逐步加深为静态细纹，轮廓愈发松垮',
      ],
      external: [
        '紫外线光老化损伤，破坏眼周胶原结构，加剧细纹、松弛、黑眼圈与色沉问题',
        '日常频繁眨眼、表情牵动、不当拉扯眼部肌肤，加速眼周纹路生成与松弛',
        '环境干燥、自由基氧化，加重眼周缺水干纹、暗沉疲惫与粗糙感',
        '各类高能量医美项目术后养护不当，易加重眼周脆弱、泛红、暗沉与纹路加深',
      ],
      warning: '长期疏于专业护理，眼周干纹会持续加深，黑眼圈与眼袋愈发顽固，整体面容显疲惫、显老态。',
      recommendations: [
        {
          name: 'Q-Facial 多维眼周焕肤',
          price: '$238',
          body: '净澈柔肤眼周后，针对眼周脆弱肤质，按需搭配对应功效安瓶导入，深层补水锁水、淡化眼周干纹细纹，改善色素型黑眼圈，舒缓眼部疲惫，强韧眼周胶原支撑力，收紧松弛眼袋与眼周轮廓，平滑细腻眼周肤质。搭配韩国专利高密度双频超声波，精准助推营养成分深层渗透眼周肌底，分层激活修护、唤醒眼周原生修复力，温和无创、全肤质眼周适配。',
          service: 'Multi-Dimensional Sculpting Treatment',
        },
        {
          name: '芳香疗法眼周专属拨筋',
          price: '$129',
          body: '专业轻柔手法疏通眼周淋巴与微循环，代谢淤积废物与多余水分，改善眼袋浮肿、淡化黑眼圈，提拉紧致眼周轮廓，打造平滑紧致、透亮有神的年轻眼周状态。',
          service: 'Aromatherapy Facial Meridian Kneading',
        },
      ],
      consult: '不确定护理方案？可免费预约 30 年高级美容师一对一精准面诊，定制专属眼周专护方案，淡纹紧致、淡化黑眼圈、改善眼袋、修护眼周肌底，还原紧致透亮的年轻眼周质感。',
    },
  },
};

/**
 * Set language and update all translated elements
 */
function setLang(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;

  // Update text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  // Update innerHTML (elements with <em>, <br>, <strong>, etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  // Update placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });
  // Update select option text
  document.querySelectorAll('[data-i18n-opt]').forEach(el => {
    const key = el.getAttribute('data-i18n-opt');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  // Update optgroup labels
  document.querySelectorAll('[data-i18n-label]').forEach(el => {
    const key = el.getAttribute('data-i18n-label');
    if (t[key] !== undefined) el.setAttribute('label', t[key]);
  });

  // Update lang toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll(`[data-lang="${lang}"], #btn-${lang}`).forEach(btn => btn.classList.add('active'));

  // Update html lang attribute
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  // Save preference
  localStorage.setItem('lang', lang);

  // Re-render the active concern panel in the new language
  if (typeof window.renderActiveConcern === 'function') {
    window.renderActiveConcern();
  }
}

/**
 * Initialize language on page load
 */
function initLang() {
  const saved = localStorage.getItem('lang') || 'en';
  if (saved === 'zh') setLang('zh');
}

// Export for use in main script
window.TRANSLATIONS = TRANSLATIONS;
window.concernsData = concernsData;
window.setLang = setLang;
window.initLang = initLang;
