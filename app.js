<<<<<<< HEAD
const cart=[];const q=s=>document.querySelector(s);const money=n=>`${n.toLocaleString('ar-EG')} ج.م`;
const render=()=>{q('#cartCount').textContent=cart.length;q('#total').textContent=money(cart.reduce((a,x)=>a+x.price,0));q('#sideTotal').textContent=q('#total').textContent;q('#cartItems').innerHTML=cart.length?cart.map((x,i)=>`<div class="cart-line"><div><b>${x.name}</b><span>${money(x.price)}</span></div><button data-remove="${i}">حذف</button></div>`).join(''):'<p>لسه ما أضفتش أي منتجات.</p>';document.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{cart.splice(+b.dataset.remove,1);render()})};
const toast=()=>{q('#toast').classList.add('show');setTimeout(()=>q('#toast').classList.remove('show'),2200)};
document.querySelectorAll('[data-add]').forEach(b=>b.onclick=()=>{cart.push({name:b.dataset.add,price:+b.dataset.price});render();toast()});
document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-filter]').forEach(x=>x.classList.remove('active'));b.classList.add('active');document.querySelectorAll('.product').forEach(p=>p.hidden=b.dataset.filter!=='all'&&p.dataset.type!==b.dataset.filter)});
const panel=open=>{q('#cart').classList.toggle('open',open);q('#overlay').classList.toggle('show',open)};q('#openCart').onclick=()=>panel(true);q('#closeCart').onclick=()=>panel(false);q('#overlay').onclick=()=>panel(false);q('#goCheckout').onclick=()=>panel(false);q('#reserveBtn').onclick=()=>q('#checkout').scrollIntoView();
q('#orderForm').onsubmit=e=>{e.preventDefault();const d=new FormData(e.target);if(!cart.length){alert('أضف منتجاً واحداً للسلة أولاً.');q('#shop').scrollIntoView();return}const list=cart.map(x=>`- ${x.name}: ${money(x.price)}`).join('\n');const message=`مرحباً الغرابلي ستور، أريد تأكيد طلبي:\n${list}\nالإجمالي: ${money(cart.reduce((a,x)=>a+x.price,0))}\nالاسم: ${d.get('name')}\nالموبايل: ${d.get('phone')}\nالعنوان: ${d.get('address')}\nالاستلام: ${d.get('delivery')}\nالدفع: ${d.get('payment')}`;window.open(`https://wa.me/201000000000?text=${encodeURIComponent(message)}`,'_blank')};
q('#whatsappLink').onclick=e=>{e.preventDefault();window.open('https://wa.me/201000000000?text='+encodeURIComponent('مرحباً الغرابلي ستور، أريد معرفة المتاح حالياً.'),'_blank')};render();
=======
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
>>>>>>> 875a9a57edd10e406138ef6df26a44aab2c48c71
