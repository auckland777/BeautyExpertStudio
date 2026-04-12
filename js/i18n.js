/**
 * i18n.js - Translations and localization
 * Handles English and Chinese language switching
 */

const TRANSLATIONS = {
  en: {
    // Nav
    'nav.why':'Why Us', 'nav.services':'Services', 'nav.studio':'Studio', 'nav.concerns':'Concerns',
    'nav.book':'Book', 'nav.book-now':'Book Now', 'mob.book':'Book Appointment',
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
    'qf.badge':'★ Korea Q Facial Skin Renewal Series',
    'qf.title':'Q Facial Skin Renewal Treatment Series',
    'qf.desc':'A top-tier Korean salon-grade facial treatment, a must-have for celebrities visiting Korea',
    'qf1.h3':'Purifying Glow Treatment', 'qf1.dur':'/ 45 min',
    'qf1.f1':'Three professional-grade solutions (Formula A repair, B purification, C soothing)',
    'qf1.f2':'Deeply cleanses skin and repairs the skin barrier',
    'qf1.f3':'Enhances absorption and achieves gentle rejuvenation',
    'qf1.f4':'Ideal for daily maintenance of all skin types',
    'qf1.btn':'Book This Treatment →',
    'qf2.h3':'Intensive Repair Infusion', 'qf2.dur':'/ 60 min',
    'qf2.f1':'Includes full Purifying Glow Treatment + customized ampoule infusion',
    'qf2.f2':'5 ampoule options: anti-wrinkle, brightening, pore-minimizing, soothing, radiance',
    'qf2.f3':'Deeply repairs the skin base and targets specific concerns',
    'qf2.f4':'Enhances overall radiance and skin health',
    'qf2.btn':'Book This Treatment →',
    'qf3.h3':'Multi-Dimensional Sculpting Treatment', 'qf3.dur':'/ 75 min',
    'qf3.f1':'Combines Intensive Repair Infusion with dual-frequency precision ultrasound',
    'qf3.f2':'10MHz + 3MHz delivers ampoule ingredients into the dermis',
    'qf3.f3':'Stimulates collagen production for firmer, younger-looking skin',
    'qf3.f4':'Tightens and lifts skin contours for visible sculpting results',
    'qf3.btn':'Book This Treatment →',
    // Service 1
    's1.h3':'Classic Pore Purifying Treatment', 's1.dur':'/ 60 min',
    's1.f1':'Deep clean — removes dead skin and pore buildup so skin breathes easy',
    's1.f2':'Even tone — fades dullness, lines, acne marks & dry patches',
    's1.f3':'Acne & oil fix — unclogs pores, less blackheads and blemishes',
    's1.f4':'Glow boost — bright, fresh peeled-egg look, even without makeup',
    's1.btn':'Book This Treatment →',
    // Service 7
    's7.h3':'Dermaplaning', 's7.dur':'/ 45 min',
    's7.f1':'Smoother Texture — Gently exfoliates dead skin cells and removes fine peach fuzz for instantly softer, smoother skin',
    's7.f2':'Enhanced Absorption — Eliminates surface barriers so serums, moisturizers and treatments penetrate deeper and perform more effectively',
    's7.btn':'Book This Treatment →',
    // Service 2
    's2.h3':'LED Light Therapy', 's2.dur':'/ 30 min',
    's2.f1':'Boosts dermal blood flow, stimulating collagen & elastin production',
    's2.f2':'Speeds wound healing and eases pain (backed by global studies)',
    's2.f3':'Blue LED targets acne-causing bacteria deep under the skin',
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
    's4.f1':'Aromatherapy infusion — premium essential oils enhance relaxation and skin vitality',
    's4.f2':'Meridian activation — stimulates facial acupoints to restore internal balance',
    's4.f3':'Circulation boost — relieves stagnation through targeted meridian kneading',
    's4.f4':'Detox & sculpt — jade gua sha reduces turbidity, puffiness, and sagging',
    's4.f5':'Natural revitalisation — supports the flow of qi and blood for holistic rejuvenation',
    's4.btn':'Book This Treatment →',
    // Service 5
    's5.h3':'Professional Electrolysis HPV Wart Removal', 's5.dur':'per session',
    's5.f1':'Root-targeting — destroys the virus at its source',
    's5.f2':'Gentler than freezing — no blisters or scarring',
    's5.f3':'More complete removal versus lasers and topicals',
    's5.f4':'1-session solution with minimal downtime',
    's5.btn':'Book This Treatment →',
    // Add-on
    'addon.h4':'Add-Ons',
    // Body Treatments
    'svc.cat-body':'Body Treatments',
    'bd.badge':'★ Vitality Revival Series',
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
    'ft.s5':'HPV Wart Removal',
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
  },
  zh: {
    // Nav
    'nav.why':'为何选择我们', 'nav.services':'服务项目', 'nav.studio':'工作室', 'nav.concerns':'肌肤问题',
    'nav.book':'预约', 'nav.book-now':'立即预约', 'mob.book':'预约护理',
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
    'qf.badge':'★ 韩国Q Facial 焕肤护理系列',
    'qf.title':'Q Facial 肌肤焕新护理系列',
    'qf.desc':'韩国顶级院线级面部护理，明星赴韩必做项目',
    'qf1.h3':'净透焕肤护理', 'qf1.dur':'/ 45分钟',
    'qf1.f1':'三重专业级配方（A修护液、B净化液、C舒缓液）',
    'qf1.f2':'深层清洁肌肤，修护皮肤屏障',
    'qf1.f3':'增强吸收力，实现温和焕肤',
    'qf1.f4':'适合所有肤质的日常维护',
    'qf1.btn':'立即预约此疗程 →',
    'qf2.h3':'精华密集修护导入', 'qf2.dur':'/ 60分钟',
    'qf2.f1':'包含完整净透焕肤护理 + 定制安瓶精华导入',
    'qf2.f2':'5种安瓶可选：抗皱、亮白、缩毛孔、舒缓、提亮',
    'qf2.f3':'深层修护肌底，精准针对肌肤问题',
    'qf2.f4':'全面提升光泽度与肌肤健康',
    'qf2.btn':'立即预约此疗程 →',
    'qf3.h3':'多维紧塑焕颜护理', 'qf3.dur':'/ 75分钟',
    'qf3.f1':'融合精华密集修护导入与双频精准超声技术',
    'qf3.f2':'10MHz + 3MHz 将安瓶精华导入真皮层',
    'qf3.f3':'刺激胶原蛋白生成，令肌肤更紧致年轻',
    'qf3.f4':'紧致提拉面部轮廓，呈现显著塑形效果',
    'qf3.btn':'立即预约此疗程 →',
    // Service 1
    's1.h3':'经典毛孔净化护理', 's1.dur':'/ 60分钟',
    's1.f1':'深层清洁——清除老废角质与毛孔污垢，让肌肤自由呼吸',
    's1.f2':'均匀肤色——淡化暗沉、细纹、痘印与干燥脱皮',
    's1.f3':'祛痘控油——疏通毛孔，减少黑头和瑕疵',
    's1.f4':'即刻提亮——告别彩妆依赖，呈现如剥壳鸡蛋般的光泽裸肌',
    's1.btn':'立即预约此疗程 →',
    // Service 7
    's7.h3':'面部刮痧焕肤', 's7.dur':'/ 45分钟',
    's7.f1':'平滑肤质——温和去除老废角质与细小绒毛，令肌肤即刻柔滑细腻',
    's7.f2':'促进吸收——清除表层屏障，令精华、保湿及后续护理渗透更深、效果更佳',
    's7.btn':'立即预约此疗程 →',
    // Service 2
    's2.h3':'LED光疗', 's2.dur':'/ 30分钟',
    's2.f1':'促进真皮层血液循环，刺激胶原蛋白与弹力蛋白生成',
    's2.f2':'加速伤口愈合，缓解疼痛（获全球研究证实）',
    's2.f3':'蓝光LED精准靶向深层痘痘细菌',
    's2.btn':'立即预约此疗程 →',
    // Service 3
    's3.h3':'强化微针导入美塑疗程', 's3.dur':'/ 30分钟',
    's3.f1':'微通道激活——创建控制性微通道，激发肌肤自然修复机制',
    's3.f2':'胶原再生——刺激成纤维细胞，促进胶原蛋白形成与重塑',
    's3.f3':'真皮修护——修复深层肌肤结构性损伤',
    's3.f4':'深层肌肤改善——针对痘疤、毛孔粗大及静态皱纹，超越日常护肤效果',
    's3.btn':'立即预约此疗程 →',
    // Service 4
    's4.h3':'芳疗经络面部揉捏护理', 's4.dur':'/ 60分钟',
    's4.f1':'芳疗注入——高端精油增强放松感与肌肤活力',
    's4.f2':'经络激活——刺激面部穴位，恢复内在平衡',
    's4.f3':'促进循环——通过针对性经络揉捏疏通淤堵',
    's4.f4':'排浊塑形——玉石刮痧减轻浊气、浮肿与松弛',
    's4.f5':'自然焕活——疏通气血运行，实现全面焕颜',
    's4.btn':'立即预约此疗程 →',
    // Service 5
    's5.h3':'专业电解HPV疣体去除', 's5.dur':'每次',
    's5.f1':'根源靶向——从源头消灭病毒',
    's5.f2':'比冷冻治疗更温和——无水泡、无疤痕',
    's5.f3':'比激光及外用药物更彻底清除',
    's5.f4':'单次见效，恢复期极短',
    's5.btn':'立即预约此疗程 →',
    // Add-on
    'addon.h4':'附加项目',
    // Body Treatments
    'svc.cat-body':'身体护理',
    'bd.badge':'★ 活力焕新系列',
    'bd.title':'魔力养生大师',
    'bd.desc':'精准释放能量，通过高端设备深层穿透，调理身心，激活内在活力，纤体塑形',
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
    'bd3.f1':'高端能量技术松解筋膜粘连与肌肉结节',
    'bd3.f2':'缓解纤维增生、肌肉疲劳、冻结肩',
    'bd3.f3':'改善四肢僵硬疼痛及活动受限',
    'bd3.btn':'立即预约此疗程 →',
    'bd4.h3':'全身塑形紧致护理', 'bd4.dur':'/ 75分钟',
    'bd4.f1':'高科技精准能量靶向减脂',
    'bd4.f2':'全身塑形与肌肤紧致',
    'bd4.f3':'呈现显著纤体塑形效果',
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
    'ft.s3':'微针 + 美塑导入', 'ft.s4':'芳疗经络面部揉捏护理',
    'ft.s5':'HPV疣体去除',
    'ft.s7':'面部刮痧焕肤', 'ft.bd':'魔力养生大师系列',
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
  }
};

const concernDataI18n = {
  en: {
    dullness:    { title: 'For Dullness',         text: 'We recommend the Classic Pore Purifying Treatment ($89), Dermaplaning ($59), or the Purifying Glow Treatment ($188) to restore radiance, even tone, and instant brightness. Aromatherapy Facial Meridian Kneading ($128) also enhances circulation for a natural, lasting glow.', service: 'Classic Pore Purifying Treatment' },
    sensitivity: { title: 'For Sensitivity',      text: 'LED Light Therapy ($49) is ideal for sensitive skin — it calms inflammation and supports the skin barrier without irritation.', service: 'LED Light Therapy' },
    acne:        { title: 'For Acne & Breakouts', text: 'Blue LED Light Therapy ($49) targets acne-causing bacteria. The Classic Pore Purifying Treatment ($89) unclogs pores and reduces excess oil. Enhanced Microneedling with Mesolinfu ($269) also fades acne scars and refines texture.', service: 'LED Light Therapy' },
    pores:       { title: 'For Large Pores',      text: 'The Classic Pore Purifying Treatment ($89) deep-cleans and unclogs pores. Enhanced Microneedling with Mesolinfu ($269) shrinks pores and smooths texture. The Intensive Repair Infusion ($228) offers a pore-minimizing ampoule option for visible refinement.', service: 'Classic Pore Purifying Treatment' },
    wrinkles:    { title: 'For Wrinkles & Lines',  text: 'Enhanced Microneedling with Mesolinfu ($269) deeply smooths wrinkles and fades lines. The Multi-Dimensional Sculpting Treatment ($288) uses dual-frequency ultrasound to stimulate collagen and lift contours. Aromatherapy Facial Meridian Kneading ($128) relieves stagnation and firms facial contours.', service: 'Enhanced Microneedling with Mesolinfu' },
    aging:       { title: 'For Anti-Aging',       text: 'The Multi-Dimensional Sculpting Treatment ($288) stimulates collagen production with dual-frequency ultrasound for firmer, younger-looking skin. Aromatherapy Facial Meridian Kneading ($128) provides holistic rejuvenation through meridian activation. Enhanced Microneedling with Mesolinfu ($269) reactivates collagen and smooths fine lines.', service: 'Multi-Dimensional Sculpting Treatment' },
    glow:        { title: 'For Glow Rescue',      text: 'The Classic Pore Purifying Treatment ($89) delivers an instant peeled-egg glow. Dermaplaning ($59) gives a smooth, radiant finish. Aromatherapy Facial Meridian Kneading ($128) enhances circulation for a natural, radiant complexion.', service: 'Classic Pore Purifying Treatment' },
    warts:       { title: 'For Warts (HPV)',      text: 'Professional Electrolysis HPV Wart Removal ($10/session) destroys the virus at its root — gentler than freezing with no blisters or scarring, and more complete than lasers or topicals. Typically resolved in a single session with minimal downtime.', service: 'Professional Electrolysis HPV Wart Removal' },
  },
  zh: {
    dullness:    { title: '针对暗沉问题',       text: '推荐经典毛孔净化护理（$89）、面部刮痧焕肤（$59）或净透焕肤护理（$188），即刻恢复光泽，均匀肤色，重焕亮采。芳疗经络面部揉捏护理（$128）亦可通过促进循环带来持久自然光泽。', service: 'Classic Pore Purifying Treatment' },
    sensitivity: { title: '针对敏感肌肤',       text: 'LED光疗（$49）专为敏感肌设计——有效平复炎症，修护皮肤屏障，全程无刺激。', service: 'LED Light Therapy' },
    acne:        { title: '针对痘痘与爆痘',     text: '蓝光LED光疗（$49）精准靶向痤疮细菌；经典毛孔净化护理（$89）有效疏通毛孔、减少多余油脂；强化微针导入美塑疗程（$269）还可淡化痘疤、细腻肤质。', service: 'LED Light Therapy' },
    pores:       { title: '针对毛孔粗大',       text: '经典毛孔净化护理（$89）深层清洁疏通毛孔；强化微针导入美塑疗程（$269）收缩毛孔、平滑肤质；精华密集修护导入（$228）提供缩毛孔安瓶选项，呈现显著细腻效果。', service: 'Classic Pore Purifying Treatment' },
    wrinkles:    { title: '针对皱纹与细纹',     text: '强化微针导入美塑疗程（$269）深度抚平皱纹、淡化细纹；多维紧塑焕颜护理（$288）运用双频超声技术刺激胶原生成，提拉面部轮廓；芳疗经络面部揉捏护理（$128）疏通淤堵，紧致面部轮廓。', service: 'Enhanced Microneedling with Mesolinfu' },
    aging:       { title: '针对肌肤抗衰',       text: '多维紧塑焕颜护理（$288）运用双频超声技术刺激胶原蛋白生成，令肌肤更紧致年轻；芳疗经络面部揉捏护理（$128）通过经络激活实现全面焕颜；强化微针导入美塑疗程（$269）激活胶原、抚平细纹。', service: 'Multi-Dimensional Sculpting Treatment' },
    glow:        { title: '针对急速提亮',       text: '经典毛孔净化护理（$89）带来即刻如剥壳鸡蛋般的嫩滑光泽；面部刮痧焕肤（$59）令肌肤光滑亮丽；芳疗经络面部揉捏护理（$128）通过促进循环带来自然亮丽肤色。', service: 'Classic Pore Purifying Treatment' },
    warts:       { title: '针对疣体（HPV）',    text: '专业电解HPV疣体去除（$10/次）从根源消灭病毒——比冷冻治疗更温和，无水泡、无疤痕，比激光及外用药物更彻底。通常单次即可见效，恢复期极短。', service: 'Professional Electrolysis HPV Wart Removal' },
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
