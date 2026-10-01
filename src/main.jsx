import React from 'react';
import { createRoot } from 'react-dom/client';
import { CakeSlice, Heart, MapPin, Phone, Clock3, ArrowUpRight, Menu } from 'lucide-react';
import './styles.css';

const cakes = [
  { name: 'Berry Bliss', note: 'Vanilla sponge · seasonal berries', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=85' },
  { name: 'Velvet Dream', note: 'Rich cocoa · silky cream', image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=900&q=85' },
  { name: 'Golden Celebration', note: 'A little sparkle for your big day', image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=900&q=85' }
];

function App() {
  return <div className="site">
    <div className="announcement">A little sweetness goes a long way <span>✦</span> Made with love in Djibouti</div>
    <header className="nav wrap">
      <a className="brand" href="#"><span className="brand-icon"><CakeSlice size={23}/></span><span>Bella <i>Cake</i><small>CAKES & SWEET MOMENTS</small></span></a>
      <nav><a href="#story">Our story</a><a href="#collection">Our cakes</a><a href="#visit">Find us</a></nav>
      <a className="nav-cta" href="https://wa.me/25377188178" target="_blank" rel="noreferrer">Order on WhatsApp <ArrowUpRight size={16}/></a>
      <button className="mobile-menu" aria-label="Menu"><Menu/></button>
    </header>
    <main>
      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="line"></span> BAKED FOR YOUR MOMENTS</div>
          <h1>Every slice<br/>tells a <em>sweet</em> story.</h1>
          <p>Thoughtful details, lovely flavours, and a little bit of magic in every bake. Make your everyday moments feel like a celebration.</p>
          <div className="hero-actions"><a className="button primary" href="https://wa.me/25377188178" target="_blank" rel="noreferrer">Order something sweet <ArrowUpRight size={17}/></a><a className="text-link" href="#collection">Explore our cakes <span>↓</span></a></div>
          <div className="rating"><div className="stars">★★★★★</div><strong>5.0</strong><span>from 5 lovely Google reviews</span></div>
        </div>
        <div className="hero-art">
          <div className="hero-photo"><img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1300&q=90" alt="Beautiful celebration cake decorated with cream and berries"/></div>
          <div className="photo-label"><span>✳</span><div>Made with care<small>For the moments that matter</small></div></div>
          <div className="floating-heart"><Heart size={19} fill="currentColor"/></div>
          <div className="hero-stamp">BAKED<br/>WITH<br/><b>LOVE</b></div>
        </div>
      </section>
      <section className="trust-strip"><div className="wrap trust-inner"><div><span className="trust-icon">✦</span><b>Beautifully crafted</b><small>Creative details in every bake</small></div><div><span className="trust-icon">♡</span><b>Made for your moments</b><small>Little treats, big celebrations</small></div><div><span className="trust-icon">✿</span><b>Easy takeaway</b><small>Pick up something lovely</small></div></div></section>
      <section className="collection wrap" id="collection">
        <div className="section-heading"><div><div className="eyebrow centered">A LITTLE SOMETHING LOVELY</div><h2>Sweet things, <em>made special.</em></h2></div><p>From a just-because treat to a cake worth remembering, find a little joy in every bite.</p></div>
        <div className="cake-grid">{cakes.map((cake,i)=><article className="cake-card" key={cake.name}><div className="cake-image"><img src={cake.image} alt={cake.name}/><span className="number">0{i+1}</span></div><div className="cake-info"><div><h3>{cake.name}</h3><p>{cake.note}</p></div><span className="round-arrow">↗</span></div></article>)}</div>
        <p className="menu-note">Have a flavour or occasion in mind? <a href="https://wa.me/25377188178" target="_blank" rel="noreferrer">Tell us what you’re dreaming of <ArrowUpRight size={14}/></a></p>
      </section>
      <section className="story" id="story"><div className="wrap story-inner"><div className="story-image"><img src="https://images.unsplash.com/photo-1558301211-0d8c8d0d0cb7?auto=format&fit=crop&w=1000&q=85" alt="Freshly prepared cake and bakery details" onError={e=>e.currentTarget.src='https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1000&q=85'}/><span className="story-caption">A little joy, baked daily</span></div><div className="story-copy"><div className="eyebrow"><span className="line"></span> THE BELLA FEELING</div><h2>Good cakes.<br/><em>Even better</em> memories.</h2><p>At Bella Cake, we believe the sweetest things are the moments we share. With creative touches and care in every detail, we’re here to add something special to your day.</p><div className="quote">“Creative precision with a magical touch. Thank you.”<small>— A Bella Cake customer</small></div><a className="text-link" href="https://wa.me/25377188178" target="_blank" rel="noreferrer">Let’s make your moment sweet <span>↗</span></a></div></div></section>
      <section className="visit wrap" id="visit"><div className="visit-card"><div className="visit-copy"><div className="eyebrow"><span className="line"></span> COME SAY HELLO</div><h2>Your next sweet<br/><em>moment awaits.</em></h2><p>Stop by for takeaway or get in touch to talk about a cake for your celebration.</p><div className="contact-list"><div><MapPin size={18}/><span>H4JR+C62 FNP, Djibouti</span></div><div><Phone size={18}/><a href="tel:+25377188178">+253 77 18 81 78</a></div><div><Clock3 size={18}/><span>Open daily · Closes at 10:00 PM</span></div></div><a className="button primary" href="https://wa.me/25377188178" target="_blank" rel="noreferrer">Message Bella Cake <ArrowUpRight size={17}/></a></div><div className="map-panel"><div className="map-pattern"><div className="map-pin"><MapPin size={25} fill="currentColor"/></div><div className="map-label"><b>Bella Cake</b><small>Djibouti</small></div><div className="map-road road-one"></div><div className="map-road road-two"></div><div className="map-road road-three"></div></div><a className="map-link" href="https://www.google.com/maps/search/?api=1&query=H4JR%2BC62%20FNP%2C%20Djibouti" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={15}/></a></div></div></section>
      <section className="review-band"><div className="wrap review-inner"><div className="review-stars">★★★★★</div><h2>“Best Cakes in Djibouti”</h2><p>Thank you for sharing the love — your kind words make our day.</p><span>5.0 ★★★★★ · Google Reviews</span></div></section>
    </main>
    <footer><div className="wrap footer-inner"><a className="brand" href="#"><span className="brand-icon"><CakeSlice size={22}/></span><span>Bella <i>Cake</i><small>CAKES & SWEET MOMENTS</small></span></a><p>Sweet moments, beautifully made.</p><div className="footer-links"><a href="tel:+25377188178"><Phone size={16}/></a><a href="https://wa.me/25377188178" target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={14}/></a><a href="#visit">Visit us</a></div></div><div className="copyright">© 2026 Bella Cake · Djibouti. Made with a little sweetness.</div></footer>
  </div>
}
createRoot(document.getElementById('root')).render(<App/>);
