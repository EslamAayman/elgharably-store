/* Replace with the confirmed WhatsApp number (country code, no + or spaces). */
const STORE_WHATSAPP = "";
const fallbackMessage = "رقم واتساب الغرابلي ستور سيُضاف قريباً. راسلنا عبر صفحة فيسبوك لحين تحديثه.";
const modal = document.querySelector('.order-modal');
const modalWa = document.querySelector('.modal-wa');
document.querySelectorAll('.reveal').forEach((element) => element.classList.add('in'));

function whatsapp(message) {
  if (!STORE_WHATSAPP) { alert(fallbackMessage); return; }
  window.open(`https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
}
document.querySelectorAll('[data-wa]').forEach((el) => el.addEventListener('click', (event) => { event.preventDefault(); whatsapp(el.dataset.message); }));
document.querySelectorAll('[data-product]').forEach((button) => button.addEventListener('click', () => { modal.classList.add('show'); modalWa.dataset.message = `مرحباً، أريد الاستفسار عن: ${button.dataset.product}`; }));
document.querySelector('.close-modal').addEventListener('click', () => modal.classList.remove('show'));
modal.addEventListener('click', (event) => { if (event.target === modal) modal.classList.remove('show'); });
modalWa.addEventListener('click', (event) => { event.preventDefault(); whatsapp(modalWa.dataset.message); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') modal.classList.remove('show'); });

const filters = document.querySelectorAll('[data-filter]');
filters.forEach((filter) => filter.addEventListener('click', () => { filters.forEach((item) => item.classList.remove('active')); filter.classList.add('active'); document.querySelectorAll('.product-card').forEach((card) => card.classList.toggle('hidden', filter.dataset.filter !== 'all' && !card.dataset.category.includes(filter.dataset.filter))); }));
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('in'); }), { threshold: .14 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
document.querySelector('.menu').addEventListener('click', (event) => { const nav = document.querySelector('nav'); const open = nav.classList.toggle('open'); event.currentTarget.setAttribute('aria-expanded', open); });
document.querySelectorAll('nav a').forEach((link) => link.addEventListener('click', () => document.querySelector('nav').classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();
