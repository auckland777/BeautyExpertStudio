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
    'qf2.h3':'Intensive Repair Infusion', 'qf2.dur':'/ 50 min', 'qf2.pkg':'10-session pack $1680',
    'qf2.f1':'Includes full Purifying Glow Treatment ($188) + customized ampoule infusion',
    'qf2.f2':'5 ampoule options: anti-wrinkle, brightening, pore-minimizing, soothing, radiance',
    'qf2.f3':'Deeply repairs the skin base and targets specific concerns',
    'qf2.f4':'Enhances overall radiance and skin health',
    'qf2.btn':'Book This Treatment →',
    'qf3.h3':'Hydra Repair Treatment', 'qf3.dur':'/ 60 min', 'qf3.pkg':'10-session pack $1980',
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
    's4.f1':'Premium essential oils absorb through the skin into the bloodstream — clearing waste and toxins, soothing the nerves, and relaxing body and mind',
    's4.f2':'Opens facial acupoints linked to visceral reflex points — unblocking meridians, awakening qi-blood circulation, and regulating internal organ function',
    's4.f3':'Exclusive jade meridian kneading deeply releases fascial stagnation and nodules — lifting facial contours and improving facial qi-blood circulation',
    's4.f4':'Exclusive jade gua-sha metabolises subcutaneous impurities and eases facial puffiness — fading dullness, harmonising qi and blood, healing body and mind',
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
    'bd1.h3':'Dai Meridian Rejuvenation', 'bd1.dur':'/ 45 min',
    'bd1.f1':'Warms the uterus to dispel cold',
    'bd1.f2':'Promotes waist & abdomen circulation and metabolism',
    'bd1.f3':'Relieves local stagnation and discomfort',
    'bd1.btn':'Book This Treatment →',
    'bd2.h3':'Breast & Lymphatic Drainage Therapy', 'bd2.dur':'/ 45 min',
    'bd2.f1':'Low-frequency energy softens nodules',
    'bd2.f2':'Unblocks chest & armpit lymphatic vessels',
    'bd2.f3':'Relieves meridian stagnation and chest discomfort',
    'bd2.btn':'Book This Treatment →',
    'bd3.h3':'Shoulder, Neck & Lower Back Pain Relief', 'bd3.dur':'/ 60 min',
    'bd3.f1':'Advanced energy technology releases fascial adhesions and muscle knots',
    'bd3.f2':'Relieves fibrous hyperplasia, muscle fatigue, and frozen shoulder',
    'bd3.f3':'Eases stiff/painful limbs and restricted movement',
    'bd3.btn':'Book This Treatment →',
    'bd4.h3':'Full Body Sculpting & Contouring', 'bd4.dur':'/ 75 min',
    'bd4.f1':'High-tech precision energy for targeted fat reduction',
    'bd4.f2':'Comprehensive body contouring and skin tightening',
    'bd4.f3':'Visible slimming and sculpting results',
    'bd4.btn':'Book This Treatment →',
    // Concerns
    'con.tag':'Targeted Solutions', 'con.h2':'We Treat Your<br>Specific Concerns',
    'con.p':'Select your concern below to explore the right treatment for you.',
    'con.chip-all':'All Treatments', 'con.chip-dull':'Dullness', 'con.chip-sens':'Sensitivity',
    'con.chip-acne':'Acne', 'con.chip-pore':'Pores', 'con.chip-wrin':'Wrinkles', 'con.chip-age':'Anti-Aging',
    'con.chip-glow':'Glow Rescue', 'con.chip-wart':'Warts', 'con.result-btn':'Book Recommended Treatment',
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
    'bk.t-qf1':'Purifying Glow Treatment — $188 / 45\'',
    'bk.t-qf2':'Intensive Repair Infusion — $228 / 50\'',
    'bk.t-qf3':'Hydra Repair Treatment — $258 / 60\'',
    'bk.t-qf4':'Multi-Dimensional Sculpting Treatment — $288 / 75\'',
    'bk.t-s1':'Classic Pore Purifying Treatment — $89 / 60\'',
    'bk.t-s2':'LED Light Therapy — $60 / 30\'',
    'bk.t-s3':'Enhanced Microneedling with Mesolinfu — $269 / 30\'',
    'bk.t-s4':'Aromatherapy Facial Meridian Kneading — $128 / 60\'',
    'bk.t-s5':'Electrolysis Wart Removal — $10-15',
    'bk.t-s7':'Dermaplaning — $59 / 45\'',
    'bk.t-bd1':'Dai Meridian Rejuvenation — $138 / 45\'',
    'bk.t-bd2':'Breast & Lymphatic Drainage Therapy — $138 / 45\'',
    'bk.t-bd3':'Shoulder, Neck & Back Pain Relief — $198 / 60\'',
    'bk.t-bd4':'Full Body Sculpting & Contouring — $288 / 75\'',
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
    'qf2.h3':'肌底修护肤', 'qf2.dur':'/ 50分钟', 'qf2.pkg':'10次套餐 $1680',
    'qf2.f1':'净澈焕肤（$188）+ 专属安瓶精华导入',
    'qf2.f2':'5款对症选择：抗皱 / 美白 / 收毛孔 / 舒缓 / 提亮',
    'qf2.f3':'深层修护肌底，针对性改善肤质问题',
    'qf2.f4':'提升肌肤光泽与健康状态',
    'qf2.btn':'立即预约此疗程 →',
    'qf3.h3':'水滴修复', 'qf3.dur':'/ 60分钟', 'qf3.pkg':'10次套餐 $1980',
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
    's4.f1':'甄选高定芳香精油，经肌肤吸收进入血液循环，带走体内废物与毒素，净化身体；同步借由天然芳香气息舒缓神经，令身心放松',
    's4.f2':'打开面部穴位对应的脏腑反射点位，疏通经络通道，唤醒气血循环，调和内在脏腑的生理机能',
    's4.f3':'专属玉石拨筋技法，深层松解筋膜淤堵与结节，提拉紧致面部轮廓，改善面部气血循环',
    's4.f4':'专属玉石刮痧手法，定向代谢皮下浊质、消除面部水肿，去除黄气与肤色晦暗；调和气血，疗愈身心',
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
    'bd1.h3':'带脉焕活调理', 'bd1.dur':'/ 45分钟',
    'bd1.f1':'暖宫驱寒',
    'bd1.f2':'促进腰腹循环代谢',
    'bd1.f3':'疏通局部淤堵不适',
    'bd1.btn':'立即预约此疗程 →',
    'bd2.h3':'胸部淋巴疏通护理', 'bd2.dur':'/ 45分钟',
    'bd2.f1':'低频能量软化结节',
    'bd2.f2':'疏通胸腋淋巴管道',
    'bd2.f3':'缓解经络淤堵及胸部不适',
    'bd2.btn':'立即预约此疗程 →',
    'bd3.h3':'肩颈腰背痛舒缓护理', 'bd3.dur':'/ 60分钟',
    'bd3.f1':'松解筋膜粘连与肌肉结节，促进软组织放松',
    'bd3.f2':'改善纤维增生与肌肉劳损，缓解慢性不适',
    'bd3.f3':'缓解肩周炎及肢体僵硬疼痛，提升活动灵活性',
    'bd3.btn':'立即预约此疗程 →',
    'bd4.h3':'全身塑形紧致护理', 'bd4.dur':'/ 75分钟',
    'bd4.f1':'靶向燃脂，促进局部脂肪分解',
    'bd4.f2':'深层松解筋膜粘连，改善组织紧张',
    'bd4.f3':'提拉紧致肌肤，塑造流畅身体线条',
    'bd4.btn':'立即预约此疗程 →',
    // Concerns
    'con.tag':'精准解决方案', 'con.h2':'针对您的<br>肌肤问题',
    'con.p':'点击下方选择您的肌肤问题，探索最适合您的疗程。',
    'con.chip-all':'全部疗程', 'con.chip-dull':'暗沉', 'con.chip-sens':'敏感',
    'con.chip-acne':'痘痘', 'con.chip-pore':'毛孔', 'con.chip-wrin':'皱纹', 'con.chip-age':'抗衰老',
    'con.chip-glow':'提亮急救', 'con.chip-wart':'疣体', 'con.result-btn':'预约推荐疗程',
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
    'bk.t-qf1':'净澈焕肤 — $188 / 45分钟',
    'bk.t-qf2':'肌底修护肤 — $228 / 50分钟',
    'bk.t-qf3':'水滴修复 — $258 / 60分钟',
    'bk.t-qf4':'多维塑颜焕肤 — $288 / 75分钟',
    'bk.t-s1':'经典毛孔净化护理 — $89 / 60分钟',
    'bk.t-s2':'LED光疗 — $60 / 30分钟',
    'bk.t-s3':'中胚层导入微针 — $269 / 30分钟',
    'bk.t-s4':'芳香疗法面部拨筋 — $128 / 60分钟',
    'bk.t-s5':'专业电解疣体去除 — $10-15',
    'bk.t-s7':'面部除绒护理 — $59 / 45分钟',
    'bk.t-bd1':'带脉焕活调理 — $138 / 45分钟',
    'bk.t-bd2':'胸部淋巴疏通护理 — $138 / 45分钟',
    'bk.t-bd3':'肩颈腰背痛舒缓护理 — $198 / 60分钟',
    'bk.t-bd4':'全身塑形紧致护理 — $288 / 75分钟',
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

const concernDataI18n = {
  en: {
    dullness:    { title: 'For Dullness',         text: 'We recommend the Classic Pore Purifying Treatment ($89), Dermaplaning ($59), or the Purifying Glow Treatment ($188) to restore radiance, even tone, and instant brightness. Aromatherapy Facial Meridian Kneading ($128) also enhances circulation for a natural, lasting glow.', service: 'Classic Pore Purifying Treatment' },
    sensitivity: { title: 'For Sensitivity',      text: 'LED Light Therapy ($60) is ideal for sensitive skin — it calms inflammation and supports the skin barrier without irritation.', service: 'LED Light Therapy' },
    acne:        { title: 'For Acne & Breakouts', text: 'Blue LED Light Therapy ($60) targets acne-causing bacteria. The Classic Pore Purifying Treatment ($89) unclogs pores and reduces excess oil. Enhanced Microneedling with Mesolinfu ($269) also fades acne scars and refines texture.', service: 'LED Light Therapy' },
    pores:       { title: 'For Large Pores',      text: 'The Classic Pore Purifying Treatment ($89) deep-cleans and unclogs pores. Enhanced Microneedling with Mesolinfu ($269) shrinks pores and smooths texture. The Intensive Repair Infusion ($228) offers a pore-minimizing ampoule option for visible refinement.', service: 'Classic Pore Purifying Treatment' },
    wrinkles:    { title: 'For Wrinkles & Lines',  text: 'Enhanced Microneedling with Mesolinfu ($269) deeply smooths wrinkles and fades lines. The Multi-Dimensional Sculpting Treatment ($288) uses dual-frequency ultrasound to stimulate collagen and lift contours. Aromatherapy Facial Meridian Kneading ($128) relieves stagnation and firms facial contours.', service: 'Enhanced Microneedling with Mesolinfu' },
    aging:       { title: 'For Anti-Aging',       text: 'The Multi-Dimensional Sculpting Treatment ($288) stimulates collagen production with dual-frequency ultrasound for firmer, younger-looking skin. Aromatherapy Facial Meridian Kneading ($128) provides holistic rejuvenation through meridian activation. Enhanced Microneedling with Mesolinfu ($269) reactivates collagen and smooths fine lines.', service: 'Multi-Dimensional Sculpting Treatment' },
    glow:        { title: 'For Glow Rescue',      text: 'The Classic Pore Purifying Treatment ($89) delivers an instant peeled-egg glow. Dermaplaning ($59) gives a smooth, radiant finish. Aromatherapy Facial Meridian Kneading ($128) enhances circulation for a natural, radiant complexion.', service: 'Classic Pore Purifying Treatment' },
    warts:       { title: 'For Warts',      text: 'Professional Electrolysis Wart Removal ($10-15/session) destroys the virus at its root — gentler than freezing with no blisters or scarring, and more complete than lasers or topicals. Typically resolved in a single session with minimal downtime.', service: 'Professional Electrolysis Wart Removal' },
  },
  zh: {
    dullness:    { title: '针对暗沉问题',       text: '推荐经典毛孔净化护理（$89）、面部除绒护理（$59）或净透焕肤护理（$188），即刻恢复光泽，均匀肤色，重焕亮采。芳香疗法面部拨筋（$128）亦可通过促进循环带来持久自然光泽。', service: 'Classic Pore Purifying Treatment' },
    sensitivity: { title: '针对敏感肌肤',       text: 'LED光疗（$60）专为敏感肌设计——有效平复炎症，修护皮肤屏障，全程无刺激。', service: 'LED Light Therapy' },
    acne:        { title: '针对痘痘与爆痘',     text: '蓝光LED光疗（$60）精准靶向痤疮细菌；经典毛孔净化护理（$89）有效疏通毛孔、减少多余油脂；中胚层导入微针（$269）还可淡化痘疤、细腻肤质。', service: 'LED Light Therapy' },
    pores:       { title: '针对毛孔粗大',       text: '经典毛孔净化护理（$89）深层清洁疏通毛孔；中胚层导入微针（$269）收缩毛孔、平滑肤质；精华密集修护导入（$228）提供缩毛孔安瓶选项，呈现显著细腻效果。', service: 'Classic Pore Purifying Treatment' },
    wrinkles:    { title: '针对皱纹与细纹',     text: '中胚层导入微针（$269）深度抚平皱纹、淡化细纹；多维紧塑焕颜护理（$288）运用双频超声技术刺激胶原生成，提拉面部轮廓；芳香疗法面部拨筋（$128）疏通淤堵，紧致面部轮廓。', service: 'Enhanced Microneedling with Mesolinfu' },
    aging:       { title: '针对肌肤抗衰',       text: '多维紧塑焕颜护理（$288）运用双频超声技术刺激胶原蛋白生成，令肌肤更紧致年轻；芳香疗法面部拨筋（$128）通过经络激活实现全面焕颜；中胚层导入微针（$269）激活胶原、抚平细纹。', service: 'Multi-Dimensional Sculpting Treatment' },
    glow:        { title: '针对急速提亮',       text: '经典毛孔净化护理（$89）带来即刻如剥壳鸡蛋般的嫩滑光泽；面部除绒护理（$59）令肌肤光滑亮丽；芳香疗法面部拨筋（$128）通过促进循环带来自然亮丽肤色。', service: 'Classic Pore Purifying Treatment' },
    warts:       { title: '针对疣体',    text: '专业电解疣体去除（$10-15/次）从根源消灭病毒——比冷冻治疗更温和，无水泡、无疤痕，比激光及外用药物更彻底。通常单次即可见效，恢复期极短。', service: 'Professional Electrolysis Wart Removal' },
  }
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

  // Rebuild concern data for current language
  Object.assign(window.concernData, concernDataI18n[lang]);
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
window.setLang = setLang;
window.initLang = initLang;
