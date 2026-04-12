/**
 * script.js - Main application logic
 * Handles navigation, forms, modals, and interactions
 */

// ── Nav scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ── Mobile nav
const menuBtn   = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
const closeNav  = document.getElementById('closeNav');
menuBtn.addEventListener('click',  () => mobileNav.classList.add('open'));
closeNav.addEventListener('click', () => mobileNav.classList.remove('open'));
mobileNav.addEventListener('click', e => {
  if (e.target === mobileNav) mobileNav.classList.remove('open');
});
document.querySelectorAll('.mobile-link').forEach(l =>
  l.addEventListener('click', () => mobileNav.classList.remove('open'))
);

// ── Hero Carousel
(function() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.hero-dot');
  if (slides.length < 2) return;

  let current  = 0;
  let interval = null;
  const DELAY  = 5000;

  function goTo(idx) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (idx + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function startAuto() {
    if (interval) return;
    interval = setInterval(() => goTo(current + 1), DELAY);
  }

  function stopAuto() {
    clearInterval(interval);
    interval = null;
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      stopAuto();
      goTo(Number(dot.dataset.slide));
      startAuto();
    });
  });

  const heroVisual = document.querySelector('.hero-visual');
  if (heroVisual) {
    heroVisual.addEventListener('mouseenter', stopAuto);
    heroVisual.addEventListener('mouseleave', startAuto);
  }

  startAuto();
})();

// ── Scroll fade-in
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ── Set min date to today
const dateInput = document.getElementById('prefDate');
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);

// ── Service card → prefill booking form
function prefillService(name) {
  document.getElementById('treatment').value = name;
  document.getElementById('booking').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── Concern chips
window.concernData = {
  dullness:    { title: 'For Dullness', text: 'We recommend the Classic Pore Purifying Treatment ($89), Dermaplaning ($59), or the Purifying Glow Treatment ($188) to restore radiance, even tone, and instant brightness. Aromatherapy Facial Meridian Kneading ($128) also enhances circulation for a natural, lasting glow.', service: 'Classic Pore Purifying Treatment' },
  sensitivity: { title: 'For Sensitivity', text: 'LED Light Therapy ($49) is ideal for sensitive skin — it calms inflammation and supports the skin barrier without irritation.', service: 'LED Light Therapy' },
  acne:        { title: 'For Acne & Breakouts', text: 'Blue LED Light Therapy ($49) targets acne-causing bacteria. The Classic Pore Purifying Treatment ($89) unclogs pores and reduces excess oil. Enhanced Microneedling with Mesolinfu ($269) also fades acne scars and refines texture.', service: 'LED Light Therapy' },
  pores:       { title: 'For Large Pores', text: 'The Classic Pore Purifying Treatment ($89) deep-cleans and unclogs pores. Enhanced Microneedling with Mesolinfu ($269) shrinks pores and smooths texture. The Intensive Repair Infusion ($228) offers a pore-minimizing ampoule option for visible refinement.', service: 'Classic Pore Purifying Treatment' },
  wrinkles:    { title: 'For Wrinkles & Lines', text: 'Enhanced Microneedling with Mesolinfu ($269) deeply smooths wrinkles and fades lines. The Multi-Dimensional Sculpting Treatment ($288) uses dual-frequency ultrasound to stimulate collagen and lift contours. Aromatherapy Facial Meridian Kneading ($128) relieves stagnation and firms facial contours.', service: 'Enhanced Microneedling with Mesolinfu' },
  aging:       { title: 'For Anti-Aging', text: 'The Multi-Dimensional Sculpting Treatment ($288) stimulates collagen production with dual-frequency ultrasound for firmer, younger-looking skin. Aromatherapy Facial Meridian Kneading ($128) provides holistic rejuvenation through meridian activation. Enhanced Microneedling with Mesolinfu ($269) reactivates collagen and smooths fine lines.', service: 'Multi-Dimensional Sculpting Treatment' },
  glow:        { title: 'For Glow Rescue', text: 'The Classic Pore Purifying Treatment ($89) delivers an instant peeled-egg glow. Dermaplaning ($59) gives a smooth, radiant finish. Aromatherapy Facial Meridian Kneading ($128) enhances circulation for a natural, radiant complexion.', service: 'Classic Pore Purifying Treatment' },
  warts:       { title: 'For Warts (HPV)', text: 'Professional Electrolysis HPV Wart Removal ($10/session) destroys the virus at its root — gentler than freezing with no blisters or scarring, and more complete than lasers or topicals. Typically resolved in a single session with minimal downtime.', service: 'Professional Electrolysis HPV Wart Removal' },
};
const concernResult = document.getElementById('concernResult');
const concernTitle  = document.getElementById('concernTitle');
const concernText   = document.getElementById('concernText');

document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    const key = chip.dataset.concern;
    if (key === 'all') {
      concernResult.style.display = 'none';
    } else {
      const d = window.concernData[key];
      concernTitle.textContent = d.title;
      concernText.textContent  = d.text;
      // Also set the booking form treatment
      document.querySelector('#concernResult a').onclick = () => {
        prefillService(d.service);
      };
      concernResult.style.display = 'block';
      concernResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// EmailJS Configuration
// ─────────────────────────────────────────────────────────────────
// STEP 1 – Create a free account at https://www.emailjs.com
// STEP 2 – Add an Email Service (Gmail / Outlook / etc.)
// STEP 3 – Create an Email Template (see instructions below)
// STEP 4 – Fill in the three values below
// ─────────────────────────────────────────────────────────────────
const EMAILJS_CONFIG = {
  publicKey:  '6QlllbeMFpQkSODhH',   // Account → API Keys → Public Key
  serviceId:  'service_t00ac06',   // Email Services → your service ID
  templateId: 'template_d93yng9',  // Email Templates → your template ID
  studioEmail:'beautyexperthu@gmail.com', // e.g. beautyexpert@gmail.com
};
// ─────────────────────────────────────────────────────────────────
// EmailJS Template variables to use in your template:
//   {{studio_email}}    {{customer_name}}   {{customer_phone}}
//   {{customer_email}}  {{treatment}}       {{addon}}
//   {{date}}            {{time}}            {{notes}}
//   {{ics_attachment}}  (plain-text .ics content — save as .ics to import)
// ─────────────────────────────────────────────────────────────────

emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });

/**
 * Generate .ics calendar content
 */
function buildICS(name, phone, treatment, dateStr, timeStr) {
  const [year, month, day] = dateStr.split('-').map(Number);
  const isPM = timeStr.includes('PM');
  let [h, m] = timeStr.replace(/\s*[AP]M/i,'').split(':').map(Number);
  if (isPM && h !== 12) h += 12;
  if (!isPM && h === 12) h = 0;
  const pad = n => String(n).padStart(2,'0');
  const dtStart = `${year}${pad(month)}${pad(day)}T${pad(h)}${pad(m)}00`;
  const dtEnd   = `${year}${pad(month)}${pad(day)}T${pad(h+1)}${pad(m)}00`;
  const stamp   = new Date().toISOString().replace(/[-:]/g,'').split('.')[0] + 'Z';
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Beauty Expert Studio//Booking//EN',
    'BEGIN:VEVENT',
    `UID:${stamp}-beautyexpert@studio`,
    `DTSTAMP:${stamp}`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    `SUMMARY:Beauty Expert Studio – ${treatment}`,
    `DESCRIPTION:Client: ${name}\\nPhone: ${phone}\\nTreatment: ${treatment}`,
    'LOCATION:Glen Innes\\, Auckland',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');
}

/**
 * Handle booking form submission
 */
document.getElementById('bookingForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  // Validate required fields
  const required = ['firstName', 'lastName', 'phone', 'treatment', 'prefDate', 'prefTime'];
  let valid = true;
  required.forEach(id => {
    const el = document.getElementById(id);
    if (!el.value.trim()) {
      el.style.borderColor = '#e05555';
      valid = false;
      el.addEventListener('input', () => el.style.borderColor = '', { once: true });
    }
  });
  if (!valid) {
    document.getElementById(required.find(id => !document.getElementById(id).value.trim())).focus();
    return;
  }

  // Collect values
  const firstName = document.getElementById('firstName').value.trim();
  const lastName  = document.getElementById('lastName').value.trim();
  const phone     = document.getElementById('phone').value.trim();
  const email     = document.getElementById('email').value.trim();
  const treatment = document.getElementById('treatment').value;
  const addon     = document.getElementById('addon').value;
  const prefDate  = document.getElementById('prefDate').value;
  const prefTime  = document.getElementById('prefTime').value;
  const notes     = document.getElementById('notes').value.trim();
  const fullName  = `${firstName} ${lastName}`;

  // Loading state
  const submitBtn = this.querySelector('.form-submit');
  const currentLang = localStorage.getItem('lang') || 'en';
  submitBtn.textContent = currentLang === 'zh' ? '发送中……' : 'Sending…';
  submitBtn.disabled = true;

  try {
    await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, {
      studio_email:    EMAILJS_CONFIG.studioEmail,
      customer_name:   fullName,
      customer_phone:  phone,
      customer_email:  email || 'Not provided',
      treatment:       treatment,
      addon:           addon,
      date:            prefDate,
      time:            prefTime,
      notes:           notes || 'None',
      ics_attachment:  buildICS(fullName, phone, treatment, prefDate, prefTime),
    });

    // Success
    const lang = localStorage.getItem('lang') || 'en';
    const T = TRANSLATIONS[lang];
    document.getElementById('modalTitle').textContent = T['mod.ok-title'];
    document.getElementById('modalMsg').textContent = T['mod.ok-msg'];
    document.getElementById('successModal').classList.add('open');
    this.reset();

  } catch (err) {
    console.error('EmailJS error:', err);
    document.getElementById('errorModal').classList.add('open');
  } finally {
    submitBtn.textContent = (localStorage.getItem('lang') === 'zh') ? '确认预约 ✦' : 'Confirm Appointment ✦';
    submitBtn.disabled = false;
  }
});

/**
 * Close success modal
 */
function closeModal() {
  document.getElementById('successModal').classList.remove('open');
}
document.getElementById('successModal').addEventListener('click', e => {
  if (e.target === document.getElementById('successModal')) closeModal();
});

/**
 * Initialize language on page load
 */
document.addEventListener('DOMContentLoaded', () => {
  initLang();
});
