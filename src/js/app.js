// Futuristic Black Grid Background Component
class GridBackground {
  constructor(parent = document.body) {
    this.parent = parent;
    this.gridSize = 30;
    this.lightColor = '#550C78'; // Neon blue grid
    this.darkColor = 'rgba(17,24,39,1)'; // Deep black background
    this.init();
  }

  init() {
    this.container = document.createElement('div');
    Object.assign(this.container.style, {
      position: 'absolute',
      width: '100%',
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: this.darkColor,
      overflowX: 'hidden'
    });

    this.gridElement = document.createElement('div');
    Object.assign(this.gridElement.style, {
      position: 'fixed',
      inset: '0',
      backgroundColor: this.darkColor,
      backgroundSize: `${this.gridSize}px ${this.gridSize}px`,
      backgroundImage: `
        linear-gradient(to right, ${this.lightColor} 1px, transparent 1px),
        linear-gradient(to bottom, ${this.lightColor} 1px, transparent 1px)
      `,
      maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 90%)',
      pointerEvents: 'none',
      zIndex: '0'
    });

    this.contentContainer = document.createElement('div');
    Object.assign(this.contentContainer.style, {
      position: 'relative',
      zIndex: '1',
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '80px 20px',
      color: '#d1d5db' // Light text for dark bg
    });

    this.container.appendChild(this.gridElement);
    this.container.appendChild(this.contentContainer);
    this.parent.appendChild(this.container);
    return this.contentContainer;
  }
}

// Responsive Futuristic Navbar + Sidebar
// Responsive Glassmorphic Navbar + Sidebar
class Navbar {
  constructor(parent) {
    // Sidebar for mobile
    const sidebar = document.createElement('aside');
    sidebar.className = 'sidebar';
    Object.assign(sidebar.style, {
      position: 'fixed',
      left: '-260px',
      top: '0',
      height: '100vh',
      width: '240px',
      background: 'linear-gradient(135deg, #18181b 65%, #27272a 100%)',
      zIndex: '120',
      transition: 'left 0.3s cubic-bezier(0.4,0,0.2,1)',
      boxShadow: '2px 0 24px 4px #38bdf866',
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem 1rem',
      gap: '2rem',
      borderRight: '2px solid #6366f144',
      borderRadius: '0 16px 16px 0'
    });
    sidebar.innerHTML = `
  <div style="font-size: 1.6rem; font-weight: bold; color: #a5b4fc; margin-bottom: 2rem; letter-spacing: 1px; text-shadow: 0 2px 18px #38bdf888">
    Unreal Solutions
  </div>
  <a href="/index.html" class="sidebar-link" style="color:#c7d2fe; font-size:1.1rem; text-decoration:none; margin-bottom:1.1rem;">Home</a>
  <a href="/index.html#about" class="sidebar-link" style="color:#c7d2fe; font-size:1.1rem; text-decoration:none; margin-bottom:1.1rem;">About</a>
  <a href="/index.html#services" class="sidebar-link" style="color:#c7d2fe; font-size:1.1rem; text-decoration:none; margin-bottom:1.1rem;">Services</a>
  <a href="/index.html#contact" class="sidebar-link" style="color:#c7d2fe; font-size:1.1rem; text-decoration:none;">Contact</a>
  <button class="close-sidebar" style="margin-top:auto;color:#818cf8;background:transparent;border:none;font-size:2rem;cursor:pointer;align-self:flex-end;">&times;</button>
`;

    document.body.appendChild(sidebar);


    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    Object.assign(overlay.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      zIndex: '110',
      opacity: '0',
      pointerEvents: 'none',
      transition: 'opacity 0.3s ease'
    });
    document.body.appendChild(overlay);

    // Toggle sidebar function
    const toggleSidebar = (show) => {
      if (show) {
        sidebar.style.left = '0';
        overlay.style.opacity = '1';
        overlay.style.pointerEvents = 'auto';
      } else {
        sidebar.style.left = '-260px';
        overlay.style.opacity = '0';
        overlay.style.pointerEvents = 'none';
      }
    };

    // GLASSMORPHIC NAVBAR
    const nav = document.createElement('nav');
    nav.style.cssText = `
      position: fixed;
      top: 18px;
      left: 50%;
      transform: translateX(-52%);
      width: calc(100% - 28px);
      max-width: 1200px;
      z-index: 100;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      font-family: 'Segoe UI', 'Arial', sans-serif;
      background: rgba(21,30,48,0.36);
      border-radius: 20px;
      border: 1.7px solid rgba(99,102,241,0.20);
      box-shadow: 0 8px 48px 0 #6366f188, 0 1.5px 0 #38bdf880;
      backdrop-filter: blur(38px) saturate(210%);
      -webkit-backdrop-filter: blur(38px) saturate(210%);
      transition: background 0.3s, box-shadow 0.3s;
      margin: 0 10px;
    `;
    // Detect if current page is homepage
const isHomePage =
  window.location.pathname.endsWith('index.html') ||
  window.location.pathname === '/' ||
  window.location.pathname === '';

// Build navbar HTML
nav.innerHTML = `
  <div id="nav-brand" style="font-size: 1.5rem; font-weight: bold; color: #818cf8; letter-spacing:1.5px; text-shadow: 0 2px 22px #818cf844;">
    Unreal Solutions
  </div>
  <div class="nav-links" style="display: flex; gap: 2.2rem;">
    <a href="${isHomePage ? '#home' : 'index.html#home'}" style="color: #c7d2fe; text-decoration: none; font-weight:500;">Home</a>
    <a href="${isHomePage ? '#about' : 'index.html#about'}" style="color: #c7d2fe; text-decoration: none; font-weight:500;">About</a>
    <a href="${isHomePage ? '#services' : 'index.html#services'}" style="color: #c7d2fe; text-decoration: none; font-weight:500;">Services</a>
    <a href="${isHomePage ? '#contact' : 'index.html#contact'}" style="color: #c7d2fe; text-decoration: none; font-weight:500;">Contact</a>
  </div>
  <button class="menu-btn" style="display: none; background: none; border: none; color: #a5b4fc; font-size:2.1rem; cursor:pointer; margin-left:1.2rem;">
    <svg width="30" height="30" fill="none" stroke="#a5b4fc" stroke-width="2" viewBox="0 0 24 24">
      <path d="M4 8h16M4 16h16"/>
    </svg>
  </button>
`;

    document.body.prepend(nav);

    // --- Responsive: Reduce brand font size on small screens ---
    const navBrand = document.getElementById('nav-brand');
    function adjustBrandSize() {
      if(window.innerWidth <= 600) {
        navBrand.style.fontSize = '1.1rem';
      } else {
        navBrand.style.fontSize = '1.5rem';
      }
    }
    adjustBrandSize();
    window.addEventListener('resize', adjustBrandSize);

    // Sidebar actions for mobile
    const menuBtn = nav.querySelector('.menu-btn');
    const closeBtn = sidebar.querySelector('.close-sidebar');
    menuBtn.addEventListener('click', () => toggleSidebar(true));
    closeBtn.addEventListener('click', () => toggleSidebar(false));
    overlay.addEventListener('click', () => toggleSidebar(false));

    // Sidebar link clicks: close sidebar & smooth scroll
    sidebar.querySelectorAll('.sidebar-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    toggleSidebar(false);

    const href = this.getAttribute('href');

    // If it's a full page link (e.g., index.html#about) go there
    if (href.includes('.html')) {
      window.location.href = href;
    } else {
      // Same page smooth scroll
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});


    // Responsive logic: hide nav-links and show menu on small screens
    function updateForScreen() {
      const wide = window.innerWidth > 768;
      nav.querySelector('.nav-links').style.display = wide ? 'flex' : 'none';
      menuBtn.style.display = wide ? 'none' : 'block';
    }
    window.addEventListener('resize', updateForScreen);
    updateForScreen();

    // Smooth scroll for all anchor links
    nav.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
      });
    });
  }
}

// Hero Section: Futuristic dark mode
class Hero {
  constructor(parent) {
    const responsiveStyle = document.createElement('style');
    responsiveStyle.textContent = `
      .typing-header {
        font-size: clamp(1.8rem, 6vw, 4.1rem);
        min-height: 1.2em;
        letter-spacing: 1.5px;
        font-family: 'Orbitron', 'Segoe UI', 'Arial', sans-serif;
        line-height: 1.3;
        background: linear-gradient(to right, #a5b4fc 10%, #38bdf8 40%, #a21caf 90%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 1.6rem;
        word-break: break-word;
        overflow-wrap: break-word;
      }
      
      .hero-container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 2rem;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
      }
      
      .hero-content {
        flex: 1;
        min-width: 280px;
        padding: 0 1rem;
        text-align: center;
      }
      
      .hero-image {
        flex: 1;
        min-width: 280px;
        position: relative;
        height: 350px;
        border-radius: 1rem;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      }
      
      .hero-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
      
      .hero-bottom-content {
        width: 100%;
        margin-top: 2rem;
        text-align: center;
        padding: 0 1rem;
      }
      
      .hero-description {
        font-size: clamp(1rem, 3vw, 1.3rem);
        margin-bottom: 2rem;
        color: #d1d5db;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
        text-shadow: 0 1px 10px #18181b;
      }
      
      .hero-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
      }
      
      @media (max-width: 768px) {
        .hero-container {
          flex-direction: column;
        }
        
        .hero-image {
          height: 250px;
          order: -1;
          margin-bottom: 1.5rem;
        }
        
        .typing-header {
          font-size: clamp(1.5rem, 7vw, 2.5rem);
          letter-spacing: 1px;
        }
        
        .hero-buttons {
          flex-direction: column;
          align-items: center;
        }
      }
    `;
    document.head.appendChild(responsiveStyle);

    const section = document.createElement('section');
    section.id = 'home';
    section.style.cssText = `
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding: 2rem 1rem;
      background: none;
      position: relative;
      overflow: hidden;
    `;

    section.innerHTML = `
      <div class="hero-container">
        <div class="hero-content">
          <h1 id="typing-text" class="typing-header"></h1>
        </div>
        
        <div class="hero-image">
          <img src="./src/assets/images/ngFbanner.jpg" 
               alt="Futuristic technology solutions" 
               loading="lazy">
        </div>
        
        <div class="hero-bottom-content">
          <p class="hero-description">
            We bridge the gap between imagination and reality through <span style="color:#38bdf8;">cutting-edge technology</span> solutions.
          </p>
          <div class="hero-buttons">
            <button
              onclick="document.querySelector('#services').scrollIntoView({behavior: 'smooth'});"
              style="
                padding: 0.9rem 2.1rem;
                background: linear-gradient(90deg,#6366f1,#38bdf8);
                color: white; border: none; border-radius: 0.6rem;
                font-size: 1.1rem; font-weight:600;
                box-shadow:0 2px 18px 0 #1e293b66;
                transition:background 0.2s; cursor:pointer;">
              Explore Services
            </button>
            <button
              onclick="document.querySelector('#contact').scrollIntoView({behavior: 'smooth'});"
              style="
                padding: 0.9rem 2.1rem;
                border: 1.5px solid #38bdf8;
                color: #38bdf8; background: transparent;
                border-radius: 0.6rem; font-size: 1.1rem;
                font-weight:600; transition:background 0.2s, color 0.2s; cursor:pointer;">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    `;

    parent.appendChild(section);
    this.typeText();
  }

  typeText() {
    const textElement = document.getElementById('typing-text');
    const fullText = "Transforming Reality with Unreal Solutions";
    let charIndex = 0;
    const typingSpeed = 50;

    const type = () => {
      if (charIndex < fullText.length) {
        textElement.textContent = fullText.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(type, typingSpeed);
      }
    };
    type();
  }
}
// About Section: Futuristic, black glass
class About {
  constructor(parent) {
    const section = document.createElement('section');
    section.id = 'about';
    section.style.cssText = `
      padding: 6rem 2rem;
      background: rgba(24,24,27,0.92);
      border-radius: 1.6rem;
      margin: 2.5rem 0;
      box-shadow: 0 8px 60px #6366f11c, 0 1.5px 0 #18181b;
    `;
    section.innerHTML = `
      <div style="max-width: 1200px; margin: 0 auto">
        <h2 style="text-align: center; font-size: 2.4rem; margin-bottom: 2.6rem; color: #f3f4f6;">
          About <span style="color: #38bdf8;">Unreal Solutions</span>
        </h2>
        <div style="display: flex; flex-wrap: wrap; gap: 3rem; justify-content: center">
          <div style="flex: 1; min-width: 300px; max-width: 600px; color: #d1d5db; font-size: 1.09rem;">
            <p style="margin-bottom: 1.5rem; line-height: 1.68;">
              Unreal Solutions began with a simple idea: what if your digital presence didn’t just look good, but <b>felt real</b>? Founded by visionaries and technologists with decades of experience, we set out to eliminate the barriers between the digital and the tangible. Today, we empower brands to inspire belief—one digital solution at a time.
            </p>
            <h3 style="font-size: 1.17rem; margin-bottom: 0.9rem; color: #a5b4fc;">Mission Statement</h3>
            <p style="margin-bottom: 1.5rem; padding-left: 1rem;">To blur the line between virtual and real with cutting-edge digital solutions.</p>
            <h3 style="font-size: 1.17rem; margin-bottom: 0.9rem; color: #a5b4fc;">Our Values</h3>
            <ul style="margin-bottom: 1.2rem; padding-left: 1.2rem; color: #d1d5db;">
              <li><b>Innovation:</b> We push boundaries with creativity and technology.</li>
              <li><b>Authenticity:</b> Realism and credibility drive everything we do.</li>
              <li><b>Collaboration:</b> Success comes from working closely with clients and partners.</li>
              <li><b>Client Success:</b> Your results are our passion.</li>
            </ul>
          </div>
          
          </div>
        </div>
      </div>
    `;
    parent.appendChild(section);
  }
}

 

// Services: Cards with glass effect & neon edges
// Services: Cards with glass effect & neon edges
class Services {
  constructor(parent) {
    const section = document.createElement('section');
    section.id = 'services';
    section.style.cssText = `
      padding: 6rem 2rem;
      background: rgba(24,24,27,0.88);
      border-radius: 1.6rem;
      margin: 2.5rem 0;
    `;

    const services = [
      {
        title: 'Immersive VR Walkthroughs',
        desc: 'Step inside your designs before they’re built. Perfect for architecture, real estate, and product showcases.',
        img: './src/assets/images/vr.jpg',
        link: 'vr-walkthroughs.html'
      },
      {
        title: 'Web Development',
        desc: 'We design and develop modern, responsive websites that deliver high performance and are built to stand out and scale with your business.',
        img: './src/assets/images/coder.jpg',
        link: 'web-development.html'
      },
      {
        title: 'ERP Systems',
        desc: 'Engage users with 3D portfolios and interactive product visualizations.',
        img: './src/assets/images/erp.jpg',
        link: 'erp-systems.html'
      },
      {
        title: 'AI Call Assistants',
        desc: 'Next-gen, AI-powered call center solutions: natural language, low wait time, happy users.',
        img: './src/assets/images/ai call.png',
        link: 'ai-call-assistants.html'
      }
    ];

    section.innerHTML = `
      <div style="max-width: 1200px; margin: 0 auto">
        <h2 style="text-align: center; font-size: 2.4rem; margin-bottom: 1rem; color: #f3f4f6;">
          Our <span style="color: #38bdf8;">Services</span>
        </h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-top: 3rem;">
          ${services.map(service => `
            <div style="background: rgba(17,24,39,0.85); border-radius: 1rem; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.3); display:flex; flex-direction:column; justify-content:space-between;">
              <img src="${service.img}" alt="${service.title}" style="width:100%; height:200px; object-fit:cover;">
              <div style="padding:1.5rem; flex:1; display:flex; flex-direction:column; justify-content:space-between;">
                <div>
                  <h3 style="color:#a5b4fc; font-size:1.3rem; margin-bottom:0.8rem;">${service.title}</h3>
                  <p style="color:#d1d5db; font-size:0.95rem; margin-bottom:1.5rem;">${service.desc}</p>
                </div>
                <a href="${service.link}" style="display:inline-block; text-align:center; padding:0.6rem 1.2rem; background:linear-gradient(90deg,#6366f1,#38bdf8); color:white; border-radius:0.5rem; text-decoration:none; font-weight:500; transition: background 0.3s;">
                  Know More
                </a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    parent.appendChild(section);
  }
}


class Contact {
  constructor(parent) {
    const section = document.createElement('section');
    section.id = 'contact';
    section.style.cssText = `
      padding: 6rem 2rem;
      background: rgba(24,24,27,0.94);
      border-radius: 1.6rem;
      margin:2.5rem 0;
      box-shadow: 0 4px 34px #38bdf844, 0 1.5px 0 #18181b;
      color: #d1d5db;
    `;
    section.innerHTML = `
      <div style="max-width: 700px; margin: 0 auto">
        <h2 style="text-align: center; font-size: 2.4rem; margin-bottom: 2.8rem; color: #f3f4f6;">
          Get in <span style="color: #38bdf8;">Touch</span>
        </h2>
        <form class="contact-form"
              action="https://api.web3forms.com/submit"
              method="POST"
              style="background: rgba(30,41,59,0.93); border-radius:1rem; border:1.5px solid #6366f1; padding: 2.5rem 2rem; box-shadow: 0 2px 18px #1e293b77; display:grid; gap:1.5rem;">
          <input type="hidden" name="access_key" value="aa3ddfd1-7f89-4eef-ab50-935b3df39e03" />
          <div>
            <label style="display: block; margin-bottom: 0.5rem; color: #a5b4fc; font-size: 1.02rem;">Name</label>
            <input type="text" name="name" required placeholder="Your Name"
                   style="width: 100%; padding: 0.75rem; background:#0f172a; color:#c7d2fe; border:1.2px solid #38bdf8; border-radius:0.55rem; font-size:1.02rem;">
          </div>
          <div>
            <label style="display: block; margin-bottom: 0.5rem; color: #a5b4fc; font-size: 1.02rem;">Email</label>
            <input type="email" name="email" required placeholder="Your Email"
                   style="width: 100%; padding: 0.75rem; background:#0f172a; color:#c7d2fe; border:1.2px solid #38bdf8; border-radius:0.55rem; font-size:1.02rem;">
          </div>
          <div>
            <label style="display: block; margin-bottom: 0.5rem; color: #a5b4fc; font-size: 1.02rem;">Message</label>
            <textarea name="message" required placeholder="Your Message" rows="5"
                      style="width: 100%; padding: 0.75rem; background:#0f172a; color:#c7d2fe; border:1.2px solid #38bdf8; border-radius:0.55rem; font-size:1.02rem;"></textarea>
          </div>
          <button type="submit" style="
            padding: 0.9rem 2.1rem; background: linear-gradient(90deg,#38bdf8,#818cf8); 
            color: white; border: none; border-radius: 0.6rem; font-size: 1.12rem; font-weight: 600;
            box-shadow:0 2px 16px 0 #38bdf822; cursor:pointer;">
            Send Message
          </button>
        </form>
      </div>
    `;
    parent.appendChild(section);
  }
}


// Footer: Futuristic dark w/ neon accent
class Footer {
  constructor(parent) {
    const footer = document.createElement('footer');
    footer.style.cssText = `
      padding: 4rem 2rem;
      background: linear-gradient(135deg, #18181b 65%, #27272a 100%);
      color: #d1d5db;
      border-radius: 1.4rem 1.4rem 0 0;
      margin:2.5rem 0 0 0;
      box-shadow: 0 -2px 18px #38bdf822;
    `;
    footer.innerHTML = `
      <div style="max-width: 1200px; margin: 0 auto">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 3rem; margin-bottom: 2.5rem;">
          <div>
            <h3 style="font-size: 1.17rem; margin-bottom: 1.5rem; color: #38bdf8; font-weight:bold;">Unreal Solutions</h3>
            <p style="color: #a5b4fc; line-height: 1.6; font-size: 0.97rem;">
              Transforming reality through innovative technology solutions.
            </p>
          </div>
          <div>
            <h4 style="font-size: 1rem; margin-bottom: 1.5rem; color: #f3f4f6">Quick Links</h4>
            <div style="display: flex; flex-direction: column; gap: 0.75rem">
              <a href="#home" style="color: #a5b4fc; text-decoration:none;">Home</a>
              <a href="#about" style="color: #a5b4fc; text-decoration:none;">About</a>
              <a href="#services" style="color: #a5b4fc; text-decoration:none;">Services</a>
              <a href="#contact" style="color: #a5b4fc; text-decoration:none;">Contact</a>
            </div>
          </div>
          <div>
            <h4 style="font-size: 1rem; margin-bottom: 1.5rem; color: #f3f4f6">Services</h4>
            <div style="display: flex; flex-direction: column; gap: 0.75rem">
              <a href="#" style="color: #a5b4fc; text-decoration:none;">VR Walkthroughs</a>
              <a href="#" style="color: #a5b4fc; text-decoration:none;">Web Development</a>
              <a href="#" style="color: #a5b4fc; text-decoration:none;">ERP Systems</a>
              <a href="#" style="color: #a5b4fc; text-decoration:none;">AI Assistants</a>
            </div>
          </div>
        </div>
        <div style="display: flex; justify-content: center; align-items: center; gap: 1.2rem; margin-bottom: 1.8rem; flex-wrap: wrap;">
  <span style="display: flex; align-items: center; gap: 0.6rem; color: #38bdf8; font-size: 1.08rem; font-weight: 600;">
    <img src="./src/assets/images/phone.png" alt="Call" style="width: 22px; height: 22px; vertical-align: middle;" />
    <img src="./src/assets/images/whatsapp.png" alt="WhatsApp" style="width: 22px; height: 22px; vertical-align: middle;" /> 
    +91 7507374446 | </br>+91 9529102559
  </span>
</div>

        
        <div style="border-top: 1.5px solid #1e293b; padding-top: 1.85rem; text-align: center; color: #6b7280; font-size:0.97rem;">
          &copy; ${new Date().getFullYear()} Unreal Solutions. All rights reserved.
        </div>
      </div>
    `;
    parent.appendChild(footer);
  }
}

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Add Google Fonts
  const font = document.createElement('link');
  font.rel = 'stylesheet';
  font.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap';
  document.head.appendChild(font);

  // App Main Container
  const app = document.getElementById('app');
  const content = new GridBackground(app).contentContainer;

  new Navbar(content);
  new Hero(content);
  new About(content);
  new Services(content);
  new Contact(content);
  new Footer(content);


 
});

