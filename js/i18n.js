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
    'hero.p':'Professional skin treatments backed by medical precision. Same luxury products as high-end clinics — at a fraction of the price.',
    'hero.cta1':'Book Appointment', 'hero.cta2':'Explore Treatments',
    'hero.stat1':'Expertise', 'hero.stat2':'From / Session', 'hero.stat3':'Targeted Solutions',
    // Hana's motto
    'quote.hook':'Life is like a battery — draining from the moment you\'re born. If you don\'t want to be cast aside like a spent cell, begin the journey of self-renewal — amidst the flood of beauty standards and life\'s chaos, build your own steady order, inside and out.',
    'quote.body':'Every bespoke treatment I craft for you repairs your skin barrier and nurtures a radiant glow, while helping you shed inner fatigue and anxiety. In the gentle touch of my fingertips, set aside the world\'s expectations, listen to your body, and tenderly nourish your soul. Each personalised session is a warm force that guards your inner core and anchors you to life\'s true essence.',
    'quote.close':'Skincare has nothing to do with age — it\'s about loving yourself well, at every stage of life.',
    'quote.sig':', Senior Beauty Specialist',
    // Hero card
    'card.label':'⭐ Most Popular', 'card.title':'Classic Pore Purifying Treatment', 'card.dur':'/ 60 min',
    'card.f1':'Deep pore clean & dead skin removal',
    'card.f2':'Even skin tone & texture refinement',
    'card.f3':'Acne & oil control',
    'card.f4':'Instant glow — the peeled-egg look',
    'card.f5':'+ Add-on deep nourishing $20 / 15\'',
    'card.btn':'Book This Treatment',
    // Hero card 3 (Studio)
    'card3.label':'🏥 Our Studio', 'card3.title':'Premium Private Treatment Space',
    'card3.desc':'Medical-grade sterilisation protocols. Fresh supplies and full sanitisation for every client — a worry-free private environment.',
    'card3.btn':'Learn More',
    // Why Us
    'why.tag':'Why Choose Us', 'why.h2':'The Beauty Expert<br>Difference',
    'why1.h4':'Flagship Device — The Anti-Aging Gold Standard',
    'why1.p':'Featuring Korea\'s top-tier Q Facial device by leading biotech firm ASTERASYS — KC and MFDS dual-certified, standard in 20,000+ premium clinics worldwide. Equipped with multiple patented technologies, it is the only cleansing device that penetrates the dermis — hailed as the "anti-aging ceiling" of cleansing devices and favoured by top celebrities. It deeply repairs the skin foundation, reactivates collagen regeneration, and delivers professional clinic-grade results powered by elite hardware.',
    'why2.h4':'Premium Clinic-Grade Products',
    'why2.p':'Exclusively selected premium professional skincare, sourced through authorised channels with full traceability. Every product is personally tested, rigorously screened, and carefully vetted by our principal therapist — gentle yet precisely targeted formulas with zero unnecessary additives. Paired with professional devices for synergistic results, even sensitive skin can enjoy clinic-grade care with complete confidence.',
    'why3.h4':'30Y Dual-Certified Senior Beautician',
    'why3.p':'Every treatment is performed hands-on by a senior beautician with 30 years of dual China–NZ professional qualifications. Over a decade running her own salon in China with award-winning skincare expertise, followed by roles at leading NZ beauty institutions. Extensive advanced training has built a comprehensive, mature skill system — a rare caliber in the industry. No assembly-line facials — every session is a bespoke, skin-specific plan designed one-on-one, addressing root causes to ensure every device and product performs at its absolute best.',
    'why4.h4':'Medical-Grade Sterilization',
    'why4.p':'An uncompromising safety commitment. Industry-leading sterile disinfection protocols throughout every session. Instruments, accessories, surfaces, and the entire studio undergo thorough, multi-layer sanitization — every detail strictly controlled. Fresh supplies and full sterilization for every client, creating a worry-free private treatment space.',
    // Services intro
    'svc.tag':'Our Treatments', 'svc.h2':'Targeted Beauty<br>Solutions',
    'svc.p':'Every service is designed to deliver real, visible results — backed by science, delivered with care.',
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
    's3.h3':'Enhanced Microneedling with Mesolinfu', 's3.dur':'/ 45 min',
    's3.f1':'Dual-power renewal — pairs microneedling with custom meso serums',
    's3.f2':'Targeted texture fix — shrinks pores, smooths wrinkles, fades acne scars',
    's3.f3':'Deep nourishment — active serums infused while skin repairs',
    's3.f4':'Non-surgical, safe for all skin types',
    's3.btn':'Book This Treatment →',
    // Service 4
    's4.h3':'CM Meridian Revival Facial', 's4.dur':'/ 60 min',
    's4.f1':'Liver Meridian tendon release — erases stress wrinkles',
    's4.f2':'Stomach Meridian work — drains facial puffiness',
    's4.f3':'Bladder Meridian lifting — firms sagging contours',
    's4.f4':'Jade Gua Sha — 48hr glow, instant debloat, 21-day firming',
    's4.btn':'Book This Treatment →',
    // Service 5
    's5.h3':'Professional Electrolysis HPV Wart Removal', 's5.dur':'per session',
    's5.f1':'Root-targeting — destroys the virus at its source',
    's5.f2':'Gentler than freezing — no blisters or scarring',
    's5.f3':'More complete removal versus lasers and topicals',
    's5.f4':'1-session solution with minimal downtime',
    's5.btn':'Book This Treatment →',
    // Service 6
    's6.h3':'RF + Ultrasonic Serum Infusion', 's6.dur':'/ 60 min',
    's6.f1':'Instant results — RF tightens while ultrasound delivers active ingredients',
    's6.f2':'Long-term benefits — stimulates collagen, 30% pore refinement in 4 weeks',
    's6.f3':'5× absorption — ultra-deep serum penetration for maximum efficacy',
    's6.f4':'Optimal: 1–2 sessions weekly for best results',
    's6.btn':'Book This Treatment →',
    // Add-on
    'addon.h4':'Add-On: Deep Nourishing Treatment',
    'addon.p':'Enhance any facial with an intensive nourishing boost. Perfect for dehydrated or sensitised skin.',
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
    'bk.lbl-ao':'Add-On Deep Nourishing ($20 / 15\')',
    'bk.opt-no':'No thanks', 'bk.opt-yes':'Yes, add it!',
    'bk.lbl-dt':'Preferred Date *', 'bk.lbl-tm':'Preferred Time *',
    'bk.lbl-no':'Skin Concerns / Notes',
    'bk.ph-no':'Tell us about your skin concerns or any questions you have…',
    'bk.submit':'Confirm Appointment ✦',
    'bk.note':'We\'ll text or call to confirm within a few hours. No payment needed upfront.',
    // Footer
    'ft.brand':'Professional beauty treatments with 30 years of certified expertise. Honest advice, luxury results, unbeatable value.',
    'ft.svc':'Treatments',
    'ft.s1':'Classic Pore Purifying Treatment', 'ft.s2':'LED Light Therapy',
    'ft.s3':'Microneedling + Meso', 'ft.s4':'CM Meridian Facial',
    'ft.s5':'HPV Wart Removal', 'ft.s6':'RF + Ultrasonic Infusion',
    'ft.s7':'Dermaplaning',
    'ft.links':'Quick Links',
    'ft.l1':'Why Choose Us', 'ft.l2':'Skin Concerns', 'ft.l3':'Book Appointment',
    'ft.hours':'Hours', 'ft.h1':'Mon – Sat: 9am – 7pm', 'ft.h2':'Sun: By appointment',
    'ft.copy':'© 2025 Beauty Expert Studio · Glen Innes, Auckland · All rights reserved.',
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
    'gal.hero.p':'Every treatment performed personally by Hana — 30 years of certified expertise, one-on-one.',
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
    'hero.p':'以医学精准度支撑的专业肌肤护理，使用与高端诊所相同的奢华产品，价格仅为其一小部分。',
    'hero.cta1':'立即预约', 'hero.cta2':'探索疗程',
    'hero.stat1':'专业经验', 'hero.stat2':'起 / 次', 'hero.stat3':'针对性解决方案',
    // Hana's motto
    'quote.hook':'人生这块电池，从出生起便开始消耗。若不想像耗尽的旧电池被时光抛下，就请开启自愈之路——在审美洪流与生活纷扰里，为自己建立内外的安稳秩序。',
    'quote.body':'我为你定制的每一套专业手法，既帮你修护肌肤屏障、养出透亮外在状态，也陪你卸下内心疲惫与焦虑。指尖轻触间，你可暂时放下外界期待，聆听身体的声音，温柔滋养心灵。而这每一套定制化护理，正是守护你心灵内核、锚定生命本真的温暖力量。',
    'quote.close':'保养无关年龄，是每个阶段的你，都在好好爱自己。',
    'quote.sig':'，资深高级美容师',
    // Hero card
    'card.label':'⭐ 最受欢迎', 'card.title':'经典毛孔净化护理', 'card.dur':'/ 60分钟',
    'card.f1':'深层清洁毛孔，去除老废角质',
    'card.f2':'均匀肤色，改善肌肤纹理',
    'card.f3':'祛痘控油',
    'card.f4':'即刻焕亮——如剥壳鸡蛋般光滑嫩肤',
    'card.f5':'+ 加购深层滋养 $20 / 15分钟',
    'card.btn':'立即预约此疗程',
    // Hero card 3 (Studio)
    'card3.label':'🏥 我们的工作室', 'card3.title':'高端私密护理空间',
    'card3.desc':'执行行业高标准无菌消毒流程。坚持一客一换一消毒，打造安心无忧的私密护理空间。',
    'card3.btn':'了解更多',
    // Why Us
    'why.tag':'为何选择我们', 'why.h2':'Beauty Expert Studio<br>的与众不同',
    'why1.h4':'顶级旗舰，穿透真皮的抗衰标杆',
    'why1.p':'甄选韩国顶流旗舰仪器Q Facial，源自韩国头部生物科技企业ASTERASYS，斩获KC与MFDS双重权威认证，全球超20000家高端院线机构标配，稳居行业顶尖标准。仪器搭载多项独家专利技术，是清洁保养类仪器中唯一可穿透真皮层的设备，被誉为"清洁界抗衰天花板"，也是众多顶流明星同款。可深层修护肌底、激活胶原再生，凭借顶配硬件实力，打造专业院线级高效护理体验。',
    'why2.h4':'高端院线正品，专利背书温和高效',
    'why2.p':'严选高端院线专属护肤产品，全程正规渠道引进，源头品质可溯。所有产品均由主理人亲自试用、层层筛选、严格把关，配方温和无刺激，功效精准靶向，零冗余无用添加。搭配专业仪器协同发力，告别无效护肤，敏弱肌也能安心畅享院线级高效护理体验。',
    'why3.h4':'三十年认证高级美容师',
    'why3.p':'由拥有中、新两国专业资质的三十年资深高级美容师亲自实操。主理人深耕美业一线，曾在国内经营美容院十余年，并荣获专业护肤大赛奖项，后于新西兰多家知名美容机构任职，历经大量高阶专业培训与技术深造，技术体系全面成熟，专业实力在业内实属稀缺。摒弃流水线式护理，一对一分肤定制专属方案，以成熟精湛的技术与严谨操作，从根源改善肤质，让仪器与产品功效发挥至最佳。',
    'why4.h4':'高标准无菌消毒，不可妥协的安全承诺',
    'why4.p':'执行行业高标准无菌消毒流程，全程严守卫生规范。仪器、护理配件、操作台及店内全环境，实现全方位清洁、多重消杀，每一处细节都严格把控。坚持一客一换一消毒，打造安心无忧的私密护理空间。',
    // Services intro
    'svc.tag':'我们的疗程', 'svc.h2':'精准美肤<br>解决方案',
    'svc.p':'每一项服务均致力于提供真实可见的效果——以科学为后盾，以用心呈现。',
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
    's3.h3':'强化微针导入美塑疗程', 's3.dur':'/ 45分钟',
    's3.f1':'双重焕肤——微针联合定制美塑精华，协同增效',
    's3.f2':'精准改善肌肤纹理——缩毛孔、抚平皱纹、淡化痘疤',
    's3.f3':'深层滋养——肌肤修复过程中同步导入活性精华',
    's3.f4':'无创手术，适合所有肤质',
    's3.btn':'立即预约此疗程 →',
    // Service 4
    's4.h3':'中医经络焕颜面部护理', 's4.dur':'/ 60分钟',
    's4.f1':'肝经筋膜松解——消除压力性皱纹',
    's4.f2':'胃经疏导——排除面部浮肿',
    's4.f3':'膀胱经提升——紧致松弛轮廓',
    's4.f4':'玉石刮痧——48小时持续光泽，即刻消肿，21天提拉紧致',
    's4.btn':'立即预约此疗程 →',
    // Service 5
    's5.h3':'专业电解HPV疣体去除', 's5.dur':'每次',
    's5.f1':'根源靶向——从源头消灭病毒',
    's5.f2':'比冷冻治疗更温和——无水泡、无疤痕',
    's5.f3':'比激光及外用药物更彻底清除',
    's5.f4':'单次见效，恢复期极短',
    's5.btn':'立即预约此疗程 →',
    // Service 6
    's6.h3':'射频 + 超声波精华导入', 's6.dur':'/ 60分钟',
    's6.f1':'即时见效——射频紧肤，超声波同步导入活性成分',
    's6.f2':'长效改善——刺激胶原再生，4周内毛孔细腻度提升30%',
    's6.f3':'5倍吸收——精华超深层渗透，发挥最大功效',
    's6.f4':'建议每周1–2次，效果最佳',
    's6.btn':'立即预约此疗程 →',
    // Add-on
    'addon.h4':'加购项目：深层滋养护理',
    'addon.p':'任意面部护理均可加购深层滋养，密集补水修护。特别适合干燥或敏感肌肤。',
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
    'bk.lbl-ao':'加购深层滋养（$20 / 15分钟）',
    'bk.opt-no':'不需要', 'bk.opt-yes':'是，加购！',
    'bk.lbl-dt':'期望预约日期 *', 'bk.lbl-tm':'期望预约时间 *',
    'bk.lbl-no':'肌肤问题 / 备注',
    'bk.ph-no':'请描述您的肌肤问题或任何疑问……',
    'bk.submit':'确认预约 ✦',
    'bk.note':'我们将在数小时内以电话或短信确认，无需预付款。',
    // Footer
    'ft.brand':'30年认证高级美容师，专业美肤护理，诚实建议，奢华效果，超值定价。',
    'ft.svc':'护理项目',
    'ft.s1':'经典毛孔净化护理', 'ft.s2':'LED光疗',
    'ft.s3':'微针 + 美塑导入', 'ft.s4':'中医经络面部护理',
    'ft.s5':'HPV疣体去除', 'ft.s6':'射频 + 超声波精华导入',
    'ft.s7':'面部刮痧焕肤',
    'ft.links':'快速导航',
    'ft.l1':'为何选择我们', 'ft.l2':'肌肤问题', 'ft.l3':'预约护理',
    'ft.hours':'营业时间', 'ft.h1':'周一至周六：上午9时–下午7时', 'ft.h2':'周日：需提前预约',
    'ft.copy':'© 2025 Beauty Expert Studio · 奥克兰格伦英尼斯 · 版权所有',
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
    'gal.hero.p':'每次护理均由Hana亲自操作——三十年认证资深美容师，一对一专属服务。',
    'gal.dev1.h':'Q Facial——旗舰仪器',
    'gal.dev1.p':'韩国顶级清洁仪器，KC与MFDS双重认证，全球超20,000家高端院线标配。',
    'gal.dev2.h':'院线级产品',
    'gal.dev2.p':'正规授权高端护肤——主理人亲自试用，温和精准，零冗余添加。',
  }
};

const concernDataI18n = {
  en: {
    dullness:    { title: 'For Dullness',         text: 'We recommend the Classic Pore Purifying Treatment ($89), Dermaplaning ($59), or RF + Ultrasonic Serum Infusion ($150) to restore radiance, even tone, and instant brightness. CM Meridian Revival Facial ($80) also delivers a 48-hour glow with instant debloating.', service: 'Classic Pore Purifying Treatment' },
    sensitivity: { title: 'For Sensitivity',      text: 'LED Light Therapy ($49) is ideal for sensitive skin — it calms inflammation and supports the skin barrier without irritation.', service: 'LED Light Therapy' },
    acne:        { title: 'For Acne & Breakouts', text: 'Blue LED Light Therapy ($49) targets acne-causing bacteria. The Classic Pore Purifying Treatment ($89) unclogs pores and reduces excess oil. Enhanced Microneedling with Mesolinfu ($120) also fades acne scars and refines texture.', service: 'LED Light Therapy' },
    pores:       { title: 'For Large Pores',      text: 'The Classic Pore Purifying Treatment ($89) deep-cleans and unclogs pores. Enhanced Microneedling with Mesolinfu ($120) shrinks pores and smooths texture. RF + Ultrasonic Serum Infusion ($150) delivers 30% pore refinement in 4 weeks.', service: 'Classic Pore Purifying Treatment' },
    wrinkles:    { title: 'For Wrinkles & Lines',  text: 'Enhanced Microneedling with Mesolinfu ($120) deeply smooths wrinkles and fades lines. RF + Ultrasonic ($150) lifts and firms instantly. CM Meridian Revival Facial ($80) releases stress wrinkles and firms sagging contours.', service: 'Enhanced Microneedling with Mesolinfu' },
    aging:       { title: 'For Anti-Aging',       text: 'RF + Ultrasonic Serum Infusion ($150) stimulates collagen with 30% pore refinement in 4 weeks. CM Meridian Revival Facial ($80) provides holistic lifting and 21-day firming. Enhanced Microneedling with Mesolinfu ($120) reactivates collagen and smooths fine lines.', service: 'RF + Ultrasonic Serum Infusion' },
    glow:        { title: 'For Glow Rescue',      text: 'The Classic Pore Purifying Treatment ($89) delivers an instant peeled-egg glow. Dermaplaning ($59) gives a smooth, radiant finish. CM Meridian Revival Facial ($80) offers a 48-hour glow with instant debloating. Add the Deep Nourishing add-on for $20 for maximum luminosity.', service: 'Classic Pore Purifying Treatment' },
    warts:       { title: 'For Warts (HPV)',      text: 'Professional Electrolysis HPV Wart Removal ($10/session) destroys the virus at its root — gentler than freezing with no blisters or scarring, and more complete than lasers or topicals. Typically resolved in a single session with minimal downtime.', service: 'Professional Electrolysis HPV Wart Removal' },
  },
  zh: {
    dullness:    { title: '针对暗沉问题',       text: '推荐经典毛孔净化护理（$89）、面部刮痧焕肤（$59）或射频+超声波精华导入（$150），即刻恢复光泽，均匀肤色，重焕亮采。中医经络焕颜面部护理（$80）亦可带来48小时持续光泽，即刻消肿提亮。', service: 'Classic Pore Purifying Treatment' },
    sensitivity: { title: '针对敏感肌肤',       text: 'LED光疗（$49）专为敏感肌设计——有效平复炎症，修护皮肤屏障，全程无刺激。', service: 'LED Light Therapy' },
    acne:        { title: '针对痘痘与爆痘',     text: '蓝光LED光疗（$49）精准靶向痤疮细菌；经典毛孔净化护理（$89）有效疏通毛孔、减少多余油脂；强化微针导入美塑疗程（$120）还可淡化痘疤、细腻肤质。', service: 'LED Light Therapy' },
    pores:       { title: '针对毛孔粗大',       text: '经典毛孔净化护理（$89）深层清洁疏通毛孔；强化微针导入美塑疗程（$120）收缩毛孔、平滑肤质；射频+超声波精华导入（$150）4周内毛孔细腻度提升30%。', service: 'Classic Pore Purifying Treatment' },
    wrinkles:    { title: '针对皱纹与细纹',     text: '强化微针导入美塑疗程（$120）深度抚平皱纹、淡化细纹；射频+超声波（$150）即刻提升紧致；中医经络焕颜面部护理（$80）松解压力性皱纹，紧致松弛轮廓。', service: 'Enhanced Microneedling with Mesolinfu' },
    aging:       { title: '针对肌肤抗衰',       text: '射频+超声波精华导入（$150）激活胶原再生，4周内毛孔细腻度提升30%；中医经络焕颜面部护理（$80）全面提拉紧致，21天持续紧致；强化微针导入美塑疗程（$120）激活胶原、抚平细纹。', service: 'RF + Ultrasonic Serum Infusion' },
    glow:        { title: '针对急速提亮',       text: '经典毛孔净化护理（$89）带来即刻如剥壳鸡蛋般的嫩滑光泽；面部刮痧焕肤（$59）令肌肤光滑亮丽；中医经络焕颜面部护理（$80）48小时持续光泽，即刻消肿提亮；加购$20深层滋养，最大化焕亮效果。', service: 'Classic Pore Purifying Treatment' },
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
