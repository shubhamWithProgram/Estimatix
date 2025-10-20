const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/virtual_pwa-register-DR7yZLJt.js","assets/vendor-jspdf-sIT2XhT2.js","assets/vendor-CjZnaUx1.js","assets/vendor-react-C3V1Opub.js"])))=>i.map(i=>d[i]);
import{E as yt,a as Nt,_ as Je}from"./vendor-jspdf-sIT2XhT2.js";import{r as g,j as e,u as We,F as Le,L as z,z as L,E as vt,a as wt,H as kt,R as St,b as X,N as Ke,c as Ct,d as Ft,e as Se}from"./vendor-react-C3V1Opub.js";import{n as Tt,o as Dt,q as It,t as Pt,v as At,x as Et,y as zt,B as Me,C as _,D as Ee,E as Rt,F as Wt,G as Lt,H as Mt,I as Gt,J as Bt,K as $t,L as A,M as Ge,N as Ce,O as qt,Q as pe,R as xe,S as Ut,T as Fe,U as be,V as Te,W as _e,X as De,Y as ze,Z as Ot,$ as Qt,a0 as Ht,a1 as Yt}from"./vendor-CjZnaUx1.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();const _t={apiKey:"AIzaSyBvxEHXO_sat6tnBSsMHqM3a2KVW01VklU",authDomain:"venkateshaluminiumcalc.firebaseapp.com",projectId:"venkateshaluminiumcalc",storageBucket:"venkateshaluminiumcalc.firebasestorage.app",messagingSenderId:"383864958193",appId:"1:383864958193:web:9ea57f9d944cd537f20d50",measurementId:"G-LLHR3CH0WE"};console.log("🔥 Firebase initializing...");const je=Tt(_t);console.log("🔥 Firebase app initialized successfully");const de=Dt(je),U=It(je);Pt(je);console.log("✅ Firebase services ready");typeof window<"u"&&At().then(c=>{c&&(Et(je),console.log("📊 Firebase Analytics initialized"))}).catch(c=>{console.log("Analytics not supported:",c)});console.log("✅ Firebase services initialized successfully");const Ze=g.createContext(void 0);function Vt({children:c}){const[i,n]=g.useState(null),[o,a]=g.useState(null),[l,r]=g.useState(!0);g.useEffect(()=>{let N;try{N=zt(de,async v=>{if(n(v),v)try{const I=await Me(_(U,"users",v.uid));if(I.exists())a(I.data());else{const R={uid:v.uid,email:v.email,displayName:v.displayName||void 0,photoURL:v.photoURL||void 0,createdAt:Date.now(),updatedAt:Date.now()};await Ee(_(U,"users",v.uid),R),a(R)}}catch(I){console.warn("Firestore not configured properly:",I),a({uid:v.uid,email:v.email,displayName:v.displayName||void 0,photoURL:v.photoURL||void 0,createdAt:Date.now(),updatedAt:Date.now()})}else a(null);r(!1)})}catch(v){console.warn("Firebase Auth not configured properly:",v),r(!1)}const f=setTimeout(()=>{console.warn("Auth initialization timeout - setting loading to false"),r(!1)},5e3);return()=>{N&&N(),clearTimeout(f)}},[]);const k={user:i,userProfile:o,loading:l,signIn:async(N,f)=>{try{await $t(de,N,f),console.log("✅ User signed in successfully")}catch(v){throw console.error("❌ Sign in failed:",v.code),v}},signUp:async(N,f,v)=>{try{const{user:I}=await Gt(de,N,f);v&&I&&await Bt(I,{displayName:v})}catch(I){throw console.error("Sign up error:",I),I}},signInWithGoogle:async()=>{try{const N=new Lt;await Mt(de,N)}catch(N){throw console.error("Google sign in error:",N),N}},logout:async()=>{try{await Wt(de)}catch(N){throw console.error("Sign out error:",N),N}},resetPassword:async N=>{try{await Rt(de,N),console.log("✅ Password reset email sent")}catch(f){throw console.error("Password reset error:",f),f}},updateUserProfile:async N=>{if(!i||!o)throw new Error("No user logged in");const f={...o,...N,updatedAt:Date.now()};await Ee(_(U,"users",i.uid),f),a(f)}};return e.jsx(Ze.Provider,{value:k,children:c})}function Q(){const c=g.useContext(Ze);if(c===void 0)throw new Error("useAuth must be used within an AuthProvider");return c}const Xt=g.createContext(void 0),Jt=({children:c})=>{const[i,n]=g.useState(()=>{const a=localStorage.getItem("estimatix-theme");return a==="light"||a==="dark"?a:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"});g.useEffect(()=>{document.documentElement.setAttribute("data-theme",i),localStorage.setItem("estimatix-theme",i)},[i]),g.useEffect(()=>{const a=window.matchMedia("(prefers-color-scheme: dark)"),l=r=>{localStorage.getItem("estimatix-theme")||n(r.matches?"dark":"light")};return a.addEventListener("change",l),()=>a.removeEventListener("change",l)},[]);const o=()=>{n(a=>a==="light"?"dark":"light")};return e.jsx(Xt.Provider,{value:{theme:i,toggleTheme:o,isDark:i==="dark"},children:c})},et=()=>e.jsxs("svg",{width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",children:[e.jsx("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),e.jsx("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),e.jsx("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),e.jsx("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"})]}),Be=()=>e.jsx("style",{children:`
    /* Animated Radial Gradient Background */
    .premium-page-background {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at 30% 20%, #7C3AED, #4C1D95 50%, #2D1B69);
      z-index: -3;
      animation: backgroundPulse 20s ease-in-out infinite;
    }

    @keyframes backgroundPulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.05); opacity: 0.95; }
    }

    /* Floating Gradient Blobs */
    .premium-gradient-blob {
      position: fixed;
      border-radius: 50%;
      filter: blur(60px);
      animation: blobFloat 15s ease-in-out infinite;
      z-index: -2;
    }

    .premium-gradient-blob-1 {
      width: 500px;
      height: 500px;
      top: -150px;
      left: -150px;
      background: radial-gradient(circle, rgba(167, 139, 250, 0.4), transparent 70%);
      animation-delay: 0s;
    }

    .premium-gradient-blob-2 {
      width: 500px;
      height: 500px;
      bottom: -200px;
      right: -200px;
      background: radial-gradient(circle, rgba(99, 102, 241, 0.3), transparent 70%);
      animation-delay: 7s;
    }

    @keyframes blobFloat {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(30px, -40px) scale(1.1); }
      66% { transform: translate(-30px, 30px) scale(0.9); }
    }

    /* Vignette Effect */
    .premium-vignette {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      background: radial-gradient(circle at center, transparent 40%, rgba(0, 0, 0, 0.5) 100%);
      z-index: -1;
    }

    /* Diagonal Watermark */
    .premium-watermark {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-30deg);
      font-size: 7rem;
      font-weight: 900;
      color: rgba(255, 255, 255, 0.03);
      letter-spacing: 1rem;
      pointer-events: none;
      user-select: none;
      z-index: 0;
      mix-blend-mode: soft-light;
    }

    /* Glassmorphic Card */
    .premium-glass-card {
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 1.25rem;
      box-shadow: 
        0 8px 40px rgba(0, 0, 0, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
      padding: 2.5rem 2rem;
      width: 100%;
      max-width: 400px;
      position: relative;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      animation: cardFadeIn 0.8s ease-out, cardFloat 6s ease-in-out infinite;
      overflow: hidden;
    }

    /* Glass Reflection Effect */
    .premium-glass-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 50%;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.1), transparent);
      border-radius: 1.25rem 1.25rem 0 0;
      pointer-events: none;
    }

    .premium-glass-card:hover {
      transform: translateY(-6px);
      box-shadow: 
        0 12px 50px rgba(0, 0, 0, 0.5),
        0 0 40px rgba(167, 139, 250, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.15);
    }

    @keyframes cardFadeIn {
      from { 
        opacity: 0;
        transform: translateY(30px) scale(0.95);
      }
      to { 
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @keyframes cardFloat {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }

    /* Logo with Pulsing Glow */
    .premium-logo-container {
      position: relative;
      display: inline-block;
    }

    .premium-logo-pulse {
      position: absolute;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle, rgba(167, 139, 250, 0.6), transparent 70%);
      border-radius: 50%;
      animation: logoPulse 3s ease-in-out infinite;
      z-index: 0;
    }

    @keyframes logoPulse {
      0%, 100% { 
        transform: scale(1);
        opacity: 0.5;
      }
      50% { 
        transform: scale(1.4);
        opacity: 0.8;
      }
    }

    .premium-logo-icon {
      width: 70px;
      height: 70px;
      background: linear-gradient(135deg, #8B5CF6, #6366F1);
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.2rem;
      color: white;
      position: relative;
      z-index: 1;
      filter: drop-shadow(0 0 15px rgba(167, 139, 250, 0.7));
      animation: iconGlow 3s ease-in-out infinite;
    }

    @keyframes iconGlow {
      0%, 100% { filter: drop-shadow(0 0 15px rgba(167, 139, 250, 0.7)); }
      50% { filter: drop-shadow(0 0 25px rgba(167, 139, 250, 1)); }
    }

    /* Brand Name with Gradient */
    .premium-brand-name {
      font-size: 2rem;
      font-weight: 800;
      background: linear-gradient(90deg, #A78BFA, #7C3AED);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      letter-spacing: -0.5px;
      margin: 0;
    }

    /* Edition Badge */
    .premium-edition-badge {
      display: inline-block;
      background: rgba(255, 255, 255, 0.15);
      color: rgba(255, 255, 255, 0.85);
      padding: 0.25rem 0.75rem;
      border-radius: 2rem;
      font-size: 0.7rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-top: 0.5rem;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    /* Form Controls */
    .premium-form-label {
      color: rgba(255, 255, 255, 0.85);
      font-size: 0.85rem;
      font-weight: 600;
      margin-bottom: 0.4rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }

    .premium-form-control {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.25);
      color: #FFF;
      border-radius: 0.75rem;
      padding: 0.875rem 1rem;
      font-size: 0.95rem;
      transition: all 0.3s ease;
      height: auto;
    }

    .premium-form-control::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }

    .premium-form-control:focus {
      background: rgba(255, 255, 255, 0.15);
      border-color: #A78BFA;
      box-shadow: 
        0 0 0 3px rgba(167, 139, 250, 0.2),
        0 4px 12px rgba(167, 139, 250, 0.15);
      color: #FFF;
      outline: none;
    }

    /* Password Toggle */
    .premium-password-toggle {
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      color: rgba(255, 255, 255, 0.6);
      cursor: pointer;
      transition: color 0.2s;
      padding: 0;
      font-size: 1.1rem;
    }

    .premium-password-toggle:hover {
      color: rgba(255, 255, 255, 0.9);
    }

    /* Custom Premium Checkbox */
    .premium-form-check-input {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.4);
      width: 20px;
      height: 20px;
      border-radius: 4px;
      cursor: pointer;
      position: relative;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      flex-shrink: 0;
    }

    .premium-form-check-input:hover {
      border-color: #a78bfa;
      box-shadow: 0 0 4px rgba(167, 139, 250, 0.3);
    }

    .premium-form-check-input:checked {
      background: linear-gradient(90deg, #8b5cf6, #7c3aed);
      border-color: #8b5cf6;
      box-shadow: 0 0 8px rgba(167, 139, 250, 0.6);
      transform: scale(1.05);
    }

    .premium-form-check-input:checked::before {
      content: '✓';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 14px;
      font-weight: bold;
      animation: checkmarkPop 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    @keyframes checkmarkPop {
      0% {
        transform: translate(-50%, -50%) scale(0);
        opacity: 0;
      }
      50% {
        transform: translate(-50%, -50%) scale(1.2);
      }
      100% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
      }
    }

    .premium-form-check-input:focus {
      box-shadow: 0 0 0 3px rgba(167, 139, 250, 0.25);
      border-color: #A78BFA;
      outline: none;
    }

    .premium-form-check-input:active {
      transform: scale(0.95);
    }

    .premium-form-check-label {
      color: rgba(255, 255, 255, 0.85);
      cursor: pointer;
      user-select: none;
      font-size: 0.9rem;
      transition: color 0.2s ease;
      margin-left: 0.25rem;
    }

    .premium-form-check-label:hover {
      color: #d9d9ff;
    }

    /* Buttons */
    .premium-btn-primary {
      width: 100%;
      background: linear-gradient(90deg, #7C3AED, #6D28D9);
      border: none;
      color: white;
      font-weight: 600;
      font-size: 1rem;
      padding: 0.875rem;
      border-radius: 0.75rem;
      transition: all 0.3s ease;
      box-shadow: 0 4px 16px rgba(124, 58, 237, 0.4);
      position: relative;
      overflow: hidden;
      cursor: pointer;
    }

    .premium-btn-primary::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
      transition: left 0.6s ease;
    }

    .premium-btn-primary:hover::before {
      left: 100%;
    }

    .premium-btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 
        0 6px 24px rgba(124, 58, 237, 0.5),
        0 0 30px rgba(167, 139, 250, 0.6);
    }

    .premium-btn-primary:active {
      transform: scale(0.98);
      box-shadow: 0 2px 8px rgba(124, 58, 237, 0.4);
    }

    .premium-btn-primary:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
    }

    .premium-btn-secondary {
      width: 100%;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.25);
      color: white;
      font-weight: 500;
      padding: 0.75rem;
      border-radius: 0.75rem;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      cursor: pointer;
    }

    .premium-btn-secondary:hover {
      background: rgba(255, 255, 255, 0.18);
      border-color: rgba(255, 255, 255, 0.4);
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    .premium-btn-secondary:active {
      transform: scale(0.98);
    }

    /* Divider */
    .premium-divider {
      display: flex;
      align-items: center;
      margin: 1.5rem 0;
    }

    .premium-divider-line {
      flex: 1;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
    }

    .premium-divider-text {
      color: rgba(255, 255, 255, 0.5);
      font-size: 0.85rem;
      padding: 0 1rem;
    }

    /* Links */
    .premium-link {
      color: #A78BFA;
      text-decoration: none;
      transition: all 0.2s;
      font-weight: 500;
    }

    .premium-link:hover {
      color: #C4B5FD;
      text-decoration: underline;
    }

    /* Text Colors */
    .premium-text-primary {
      color: rgba(255, 255, 255, 0.95);
    }

    .premium-text-secondary {
      color: rgba(255, 255, 255, 0.7);
    }

    .premium-text-muted {
      color: rgba(255, 255, 255, 0.5);
    }

    /* Responsive */
    @media (max-width: 480px) {
      .premium-watermark {
        font-size: 4rem;
      }
      
      .premium-glass-card {
        padding: 2rem 1.5rem;
      }

      .premium-brand-name {
        font-size: 1.75rem;
      }

      .premium-logo-icon {
        width: 60px;
        height: 60px;
        font-size: 1.8rem;
      }
    }

    /* Page Load Animation */
    .premium-page-load {
      animation: pageLoad 0.8s ease-out;
    }

    @keyframes pageLoad {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `});function Kt(){const[c,i]=g.useState(""),[n,o]=g.useState(""),[a,l]=g.useState(!1),[r,h]=g.useState(!1),[u,b]=g.useState(!1),{signIn:d,signInWithGoogle:j}=Q(),y=We(),k=async f=>{f.preventDefault(),h(!0);const v=L.loading("Signing in...");try{await d(c,n),L.success("Welcome back! 🎉",{id:v}),y("/dashboard")}catch(I){const R=I.message||"Failed to sign in";L.error(R,{id:v})}finally{h(!1)}},N=async()=>{h(!0);const f=L.loading("Signing in with Google...");try{await j(),L.success("Welcome! 🎉",{id:f}),y("/dashboard")}catch(v){const I=v.message||"Failed to sign in with Google";L.error(I,{id:f})}finally{h(!1)}};return e.jsxs(e.Fragment,{children:[e.jsx(Le,{position:"top-center"}),e.jsx(Be,{}),e.jsx("div",{className:"premium-page-background"}),e.jsx("div",{className:"premium-gradient-blob premium-gradient-blob-1"}),e.jsx("div",{className:"premium-gradient-blob premium-gradient-blob-2"}),e.jsx("div",{className:"premium-vignette"}),e.jsx("div",{className:"premium-watermark",children:"ESTIMATIX"}),e.jsx("div",{className:"min-vh-100 d-flex align-items-center justify-content-center p-3 premium-page-load",style:{position:"relative",zIndex:1},children:e.jsxs(A.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},className:"premium-glass-card",children:[e.jsxs("div",{className:"text-center mb-4",children:[e.jsxs("div",{className:"premium-logo-container d-inline-block mb-3",children:[e.jsx("div",{className:"premium-logo-pulse"}),e.jsx("div",{className:"premium-logo-icon",children:e.jsx("i",{className:"bi bi-calculator"})})]}),e.jsx("h1",{className:"premium-brand-name",children:"Estimatix"}),e.jsx("span",{className:"premium-edition-badge",children:"Professional Edition"})]}),e.jsxs("div",{className:"text-center mb-4",children:[e.jsx("h2",{className:"h4 premium-text-primary fw-semibold mb-2",children:"Welcome Back 👋"}),e.jsx("p",{className:"small premium-text-secondary",children:"Sign in to access your professional workspace"})]}),e.jsxs("form",{onSubmit:k,children:[e.jsxs("div",{className:"mb-3",children:[e.jsxs("label",{htmlFor:"email",className:"premium-form-label",children:[e.jsx("i",{className:"bi bi-envelope"}),"Email Address"]}),e.jsx("input",{type:"email",className:"form-control premium-form-control",id:"email",placeholder:"you@example.com",value:c,onChange:f=>i(f.target.value),required:!0,autoComplete:"email",autoFocus:!0})]}),e.jsxs("div",{className:"mb-3",children:[e.jsxs("label",{htmlFor:"password",className:"premium-form-label",children:[e.jsx("i",{className:"bi bi-lock"}),"Password"]}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx("input",{type:a?"text":"password",className:"form-control premium-form-control",id:"password",placeholder:"Enter your password",value:n,onChange:f=>o(f.target.value),required:!0,autoComplete:"current-password",style:{paddingRight:"3rem"}}),e.jsx("button",{type:"button",onClick:()=>l(!a),className:"premium-password-toggle","aria-label":"Toggle password visibility",children:e.jsx("i",{className:`bi ${a?"bi-eye-slash":"bi-eye"}`})})]})]}),e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx("input",{type:"checkbox",className:"premium-form-check-input",id:"rememberMe",checked:u,onChange:f=>b(f.target.checked)}),e.jsx("label",{className:"premium-form-check-label small",htmlFor:"rememberMe",children:"Remember me"})]}),e.jsx(z,{to:"/forgot-password",className:"small premium-link",children:"Forgot password?"})]}),e.jsx("button",{type:"submit",className:"btn premium-btn-primary",disabled:r,children:r?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner-border spinner-border-sm me-2"}),"Signing in..."]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"bi bi-box-arrow-in-right me-2"}),"Sign In"]})})]}),e.jsxs("div",{className:"premium-divider",children:[e.jsx("div",{className:"premium-divider-line"}),e.jsx("span",{className:"premium-divider-text",children:"or continue with"}),e.jsx("div",{className:"premium-divider-line"})]}),e.jsxs("button",{type:"button",onClick:N,className:"btn premium-btn-secondary",disabled:r,children:[e.jsx(et,{}),e.jsx("span",{children:"Sign in with Google"})]}),e.jsx("div",{className:"text-center mt-4",children:e.jsxs("p",{className:"small mb-0 premium-text-secondary",children:["Don't have an account?"," ",e.jsx(z,{to:"/signup",className:"premium-link fw-semibold",children:"Sign up"})]})}),e.jsx("div",{className:"text-center mt-3",children:e.jsx("p",{className:"small mb-0 premium-text-muted",style:{fontSize:"0.75rem"},children:"© 2025 Estimatix. All rights reserved."})})]})})]})}function Zt(){const[c,i]=g.useState(""),[n,o]=g.useState(""),[a,l]=g.useState(""),[r,h]=g.useState(""),[u,b]=g.useState(!1),[d,j]=g.useState(!1),[y,k]=g.useState(!1),[N,f]=g.useState(!1),{signUp:v,signInWithGoogle:I}=Q(),R=We(),F=async E=>{if(E.preventDefault(),a!==r){L.error("Passwords do not match");return}if(a.length<6){L.error("Password must be at least 6 characters");return}if(!N){L.error("Please agree to the Terms and Conditions");return}k(!0);const H=L.loading("Creating your account...");try{await v(n,a,c),L.success("Account created successfully! 🎉",{id:H}),R("/dashboard")}catch($){const K=$.message||"Failed to create account";L.error(K,{id:H})}finally{k(!1)}},S=async()=>{if(!N){L.error("Please agree to the Terms and Conditions");return}k(!0);const E=L.loading("Signing up with Google...");try{await I(),L.success("Welcome to Estimatix! 🎉",{id:E}),R("/dashboard")}catch(H){const $=H.message||"Failed to sign up with Google";L.error($,{id:E})}finally{k(!1)}};return e.jsxs(e.Fragment,{children:[e.jsx(Le,{position:"top-center"}),e.jsx(Be,{}),e.jsx("div",{className:"premium-page-background"}),e.jsx("div",{className:"premium-gradient-blob premium-gradient-blob-1"}),e.jsx("div",{className:"premium-gradient-blob premium-gradient-blob-2"}),e.jsx("div",{className:"premium-vignette"}),e.jsx("div",{className:"premium-watermark",children:"ESTIMATIX"}),e.jsx("div",{className:"min-vh-100 d-flex align-items-center justify-content-center p-3 premium-page-load",style:{position:"relative",zIndex:1},children:e.jsxs(A.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},className:"premium-glass-card",style:{maxWidth:"440px"},children:[e.jsxs("div",{className:"text-center mb-4",children:[e.jsxs("div",{className:"premium-logo-container d-inline-block mb-3",children:[e.jsx("div",{className:"premium-logo-pulse"}),e.jsx("div",{className:"premium-logo-icon",children:e.jsx("i",{className:"bi bi-calculator"})})]}),e.jsx("h1",{className:"premium-brand-name",children:"Estimatix"}),e.jsx("span",{className:"premium-edition-badge",children:"Professional Edition"})]}),e.jsxs("div",{className:"text-center mb-4",children:[e.jsx("h2",{className:"h4 premium-text-primary fw-semibold mb-2",children:"Create Account 🚀"}),e.jsx("p",{className:"small premium-text-secondary",children:"Join Estimatix and start calculating estimates like a pro"})]}),e.jsxs("form",{onSubmit:F,children:[e.jsxs("div",{className:"mb-3",children:[e.jsxs("label",{htmlFor:"name",className:"premium-form-label",children:[e.jsx("i",{className:"bi bi-person"}),"Full Name"]}),e.jsx("input",{type:"text",className:"form-control premium-form-control",id:"name",placeholder:"John Doe",value:c,onChange:E=>i(E.target.value),required:!0,autoComplete:"name",autoFocus:!0})]}),e.jsxs("div",{className:"mb-3",children:[e.jsxs("label",{htmlFor:"email",className:"premium-form-label",children:[e.jsx("i",{className:"bi bi-envelope"}),"Email Address"]}),e.jsx("input",{type:"email",className:"form-control premium-form-control",id:"email",placeholder:"you@example.com",value:n,onChange:E=>o(E.target.value),required:!0,autoComplete:"email"})]}),e.jsxs("div",{className:"mb-3",children:[e.jsxs("label",{htmlFor:"password",className:"premium-form-label",children:[e.jsx("i",{className:"bi bi-lock"}),"Password"]}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx("input",{type:u?"text":"password",className:"form-control premium-form-control",id:"password",placeholder:"Minimum 6 characters",value:a,onChange:E=>l(E.target.value),required:!0,autoComplete:"new-password",style:{paddingRight:"3rem"}}),e.jsx("button",{type:"button",onClick:()=>b(!u),className:"premium-password-toggle","aria-label":"Toggle password visibility",children:e.jsx("i",{className:`bi ${u?"bi-eye-slash":"bi-eye"}`})})]})]}),e.jsxs("div",{className:"mb-3",children:[e.jsxs("label",{htmlFor:"confirmPassword",className:"premium-form-label",children:[e.jsx("i",{className:"bi bi-lock-fill"}),"Confirm Password"]}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx("input",{type:d?"text":"password",className:"form-control premium-form-control",id:"confirmPassword",placeholder:"Re-enter your password",value:r,onChange:E=>h(E.target.value),required:!0,autoComplete:"new-password",style:{paddingRight:"3rem"}}),e.jsx("button",{type:"button",onClick:()=>j(!d),className:"premium-password-toggle","aria-label":"Toggle confirm password visibility",children:e.jsx("i",{className:`bi ${d?"bi-eye-slash":"bi-eye"}`})})]})]}),e.jsx("div",{className:"mb-4",children:e.jsxs("div",{className:"d-flex align-items-start gap-2",children:[e.jsx("input",{type:"checkbox",className:"premium-form-check-input mt-1",id:"agreeTerms",checked:N,onChange:E=>f(E.target.checked),required:!0}),e.jsxs("label",{className:"premium-form-check-label small",htmlFor:"agreeTerms",children:["I agree to the"," ",e.jsx("a",{href:"#",className:"premium-link",children:"Terms and Conditions"})]})]})}),e.jsx("button",{type:"submit",className:"btn premium-btn-primary",disabled:y,style:{background:"linear-gradient(90deg, #10B981, #14B8A6)"},children:y?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner-border spinner-border-sm me-2"}),"Creating Account..."]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"bi bi-person-plus me-2"}),"Create Account"]})})]}),e.jsxs("div",{className:"premium-divider",children:[e.jsx("div",{className:"premium-divider-line"}),e.jsx("span",{className:"premium-divider-text",children:"or continue with"}),e.jsx("div",{className:"premium-divider-line"})]}),e.jsxs("button",{type:"button",onClick:S,className:"btn premium-btn-secondary",disabled:y,children:[e.jsx(et,{}),e.jsx("span",{children:"Sign up with Google"})]}),e.jsx("div",{className:"text-center mt-4",children:e.jsxs("p",{className:"small mb-0 premium-text-secondary",children:["Already have an account?"," ",e.jsx(z,{to:"/login",className:"premium-link fw-semibold",children:"Sign in"})]})}),e.jsx("div",{className:"text-center mt-3",children:e.jsx("p",{className:"small mb-0 premium-text-muted",style:{fontSize:"0.75rem"},children:"© 2025 Estimatix. All rights reserved."})})]})})]})}function es(){const[c,i]=g.useState(""),[n,o]=g.useState(!1),[a,l]=g.useState(!1),{resetPassword:r}=Q(),h=async u=>{u.preventDefault(),l(!1),o(!0);const b=L.loading("Sending reset link...");try{await r(c),l(!0),L.success("Password reset link sent to your email! 📧",{id:b})}catch(d){const j=d.message||"Failed to send reset link";L.error(j,{id:b})}finally{o(!1)}};return e.jsxs(e.Fragment,{children:[e.jsx(Le,{position:"top-center"}),e.jsx(Be,{}),e.jsx("div",{className:"premium-page-background"}),e.jsx("div",{className:"premium-gradient-blob premium-gradient-blob-1"}),e.jsx("div",{className:"premium-gradient-blob premium-gradient-blob-2"}),e.jsx("div",{className:"premium-vignette"}),e.jsx("div",{className:"premium-watermark",children:"ESTIMATIX"}),e.jsx("div",{className:"min-vh-100 d-flex align-items-center justify-content-center p-3 premium-page-load",style:{position:"relative",zIndex:1},children:e.jsxs(A.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},className:"premium-glass-card",children:[e.jsxs("div",{className:"text-center mb-4",children:[e.jsxs("div",{className:"premium-logo-container d-inline-block mb-3",children:[e.jsx("div",{className:"premium-logo-pulse"}),e.jsx("div",{className:"premium-logo-icon",children:e.jsx("i",{className:"bi bi-key"})})]}),e.jsx("h1",{className:"premium-brand-name",children:"Estimatix"}),e.jsx("span",{className:"premium-edition-badge",children:"Professional Edition"})]}),e.jsxs("div",{className:"text-center mb-4",children:[e.jsx("h2",{className:"h4 premium-text-primary fw-semibold mb-2",children:"Reset Password 🔑"}),e.jsx("p",{className:"small premium-text-secondary",children:"Enter your email address and we'll send you a link to reset your password"})]}),e.jsx(Ge,{children:a&&e.jsxs(A.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"alert mb-4",style:{background:"rgba(16, 185, 129, 0.15)",border:"1px solid rgba(16, 185, 129, 0.3)",color:"#6EE7B7",borderRadius:"0.75rem"},children:[e.jsx("i",{className:"bi bi-check-circle me-2"}),"Check your email for the password reset link!"]})}),!a&&e.jsxs("form",{onSubmit:h,children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs("label",{htmlFor:"email",className:"premium-form-label",children:[e.jsx("i",{className:"bi bi-envelope"}),"Email Address"]}),e.jsx("input",{type:"email",className:"form-control premium-form-control",id:"email",placeholder:"you@example.com",value:c,onChange:u=>i(u.target.value),required:!0,autoComplete:"email",autoFocus:!0})]}),e.jsx("button",{type:"submit",className:"btn premium-btn-primary",disabled:n,style:{background:"linear-gradient(90deg, #3B82F6, #06B6D4)"},children:n?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner-border spinner-border-sm me-2"}),"Sending Link..."]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"bi bi-send me-2"}),"Send Reset Link"]})})]}),a&&e.jsx("div",{className:"text-center",children:e.jsxs(z,{to:"/login",className:"btn premium-btn-primary",style:{background:"linear-gradient(90deg, #3B82F6, #06B6D4)"},children:[e.jsx("i",{className:"bi bi-arrow-left me-2"}),"Back to Sign In"]})}),e.jsx("div",{className:"text-center mt-4",children:e.jsxs("p",{className:"small mb-0 premium-text-secondary",children:["Remember your password?"," ",e.jsx(z,{to:"/login",className:"premium-link fw-semibold",children:"Sign in"})]})}),e.jsx("div",{className:"text-center mt-3",children:e.jsx("p",{className:"small mb-0 premium-text-muted",style:{fontSize:"0.75rem"},children:"© 2025 Estimatix. All rights reserved."})})]})})]})}class ts{quotationsCollection="quotations";async saveQuotation(i){try{const n={...i,createdAt:Ce(),updatedAt:Ce()},o=await qt(pe(U,this.quotationsCollection),n);return console.log("Quotation saved with ID:",o.id),o.id}catch(n){throw console.error("Error saving quotation:",n),new Error("Failed to save quotation")}}async updateQuotation(i,n){try{const o=_(U,this.quotationsCollection,i);await xe(o,{...n,updatedAt:Ce()}),console.log("Quotation updated:",i)}catch(o){throw console.error("Error updating quotation:",o),new Error("Failed to update quotation")}}async deleteQuotation(i){try{const n=_(U,this.quotationsCollection,i);await Ut(n),console.log("Quotation deleted:",i)}catch(n){throw console.error("Error deleting quotation:",n),new Error("Failed to delete quotation")}}async getQuotation(i){try{const n=_(U,this.quotationsCollection,i),o=await Me(n);return o.exists()?{id:o.id,...o.data()}:null}catch(n){throw console.error("Error getting quotation:",n),new Error("Failed to get quotation")}}async getUserQuotations(i,n=50){try{const o=Fe(pe(U,this.quotationsCollection),be("userId","==",i),Te("createdAt","desc"),_e(n)),a=await De(o),l=[];return a.forEach(r=>{l.push({id:r.id,...r.data()})}),l}catch(o){throw console.error("Error getting user quotations:",o),new Error("Failed to get quotations")}}async getQuotationsByStatus(i,n){try{const o=Fe(pe(U,this.quotationsCollection),be("userId","==",i),be("status","==",n),Te("createdAt","desc")),a=await De(o),l=[];return a.forEach(r=>{l.push({id:r.id,...r.data()})}),l}catch(o){throw console.error("Error getting quotations by status:",o),new Error("Failed to get quotations by status")}}async searchQuotations(i,n){try{const o=await this.getUserQuotations(i,100),a=n.toLowerCase();return o.filter(l=>l.customerName.toLowerCase().includes(a)||l.quotationId.toLowerCase().includes(a)||l.customerPhone.includes(n)||l.customerEmail.toLowerCase().includes(a))}catch(o){throw console.error("Error searching quotations:",o),new Error("Failed to search quotations")}}async getQuotationStats(i){try{const n=await this.getUserQuotations(i,1e3),o=new Date,a=new Date(o.getFullYear(),o.getMonth(),1),l={totalQuotations:n.length,totalValue:0,pendingQuotations:0,approvedQuotations:0,thisMonthQuotations:0,thisMonthValue:0};return n.forEach(r=>{l.totalValue+=r.grandTotal,(r.status==="sent"||r.status==="draft")&&l.pendingQuotations++,(r.status==="approved"||r.status==="completed")&&l.approvedQuotations++,(r.createdAt instanceof ze?r.createdAt.toDate():new Date(r.createdAt))>=a&&(l.thisMonthQuotations++,l.thisMonthValue+=r.grandTotal)}),l}catch(n){return console.error("Error getting quotation stats:",n),{totalQuotations:0,totalValue:0,pendingQuotations:0,approvedQuotations:0,thisMonthQuotations:0,thisMonthValue:0}}}async getRecentQuotations(i,n=10){try{const o=Fe(pe(U,this.quotationsCollection),be("userId","==",i),Te("createdAt","desc"),_e(n)),a=await De(o),l=[];return a.forEach(r=>{l.push({id:r.id,...r.data()})}),l}catch(o){return console.error("Error getting recent quotations:",o),[]}}async generateQuotationId(i){try{const n=JSON.parse(localStorage.getItem("admin_invoice_settings")||'{"prefix":"VEN","currentYear":2025,"currentSequence":1}'),o=await this.getUserQuotations(i,1e3),a=new Date().getFullYear(),l=o.filter(b=>(b.createdAt instanceof ze?b.createdAt.toDate():new Date(b.createdAt)).getFullYear()===a);let r=0;l.forEach(b=>{const d=b.quotationId.match(/(\d+)$/);if(d){const j=parseInt(d[1]);j>r&&(r=j)}});const h=r+1,u=`${n.prefix}${a}-${h.toString().padStart(3,"0")}`;return n.currentSequence=h,n.currentYear=a,localStorage.setItem("admin_invoice_settings",JSON.stringify(n)),u}catch(n){return console.error("Error generating quotation ID:",n),`QUOT-${Date.now()}`}}}const he=new ts;function fe({value:c,duration:i=2e3,prefix:n="",suffix:o=""}){const[a,l]=g.useState(0);return g.useEffect(()=>{let r=null,h;const u=b=>{r||(r=b);const d=Math.min((b-r)/i,1);l(Math.floor(d*c)),d<1&&(h=requestAnimationFrame(u))};return h=requestAnimationFrame(u),()=>cancelAnimationFrame(h)},[c,i]),e.jsxs("span",{children:[n,a.toLocaleString(),o]})}function Ve(){const{user:c,userProfile:i}=Q(),[n,o]=g.useState(!1),[a,l]=g.useState({totalQuotations:0,totalValue:0,pendingQuotations:0,approvedQuotations:0,thisMonthQuotations:0,thisMonthValue:0}),[r,h]=g.useState([]),u=()=>{const j=new Date().getHours();return j<12?"Good morning":j<17?"Good afternoon":"Good evening"};g.useEffect(()=>{(async()=>{if(c?.uid)try{const y=await he.getQuotationStats(c.uid);l(y);const k=await he.getRecentQuotations(c.uid,4);h(k)}catch(y){console.error("Error loading dashboard data:",y)}})()},[c?.uid]);const b=j=>{const y=new Date,k=j instanceof ze?j.toDate():new Date(j),N=y.getTime()-k.getTime(),f=Math.floor(N/6e4),v=Math.floor(N/36e5),I=Math.floor(N/864e5);return f<1?"Just now":f<60?`${f} minute${f>1?"s":""} ago`:v<24?`${v} hour${v>1?"s":""} ago`:I<30?`${I} day${I>1?"s":""} ago`:k.toLocaleDateString()},d=r.map(j=>{const y={draft:"secondary",sent:"info",approved:"success",rejected:"danger",completed:"primary"};return{icon:{draft:"bi-file-earmark",sent:"bi-send",approved:"bi-check-circle",rejected:"bi-x-circle",completed:"bi-check-all"}[j.status]||"bi-file-earmark-text",text:`${j.status==="draft"?"Created":j.status.charAt(0).toUpperCase()+j.status.slice(1)} quotation ${j.quotationId} for ${j.customerName}`,time:b(j.createdAt),color:y[j.status]||"info",quotationId:j.quotationId,id:j.id}});return d.length===0&&d.push({icon:"bi-info-circle",text:"No recent activity. Create your first quotation!",time:"Start now",color:"muted",quotationId:"",id:""}),e.jsx("div",{className:"min-h-screen",style:{background:"linear-gradient(to bottom, #0F172A, #1E293B)"},children:e.jsxs("div",{className:"container-fluid py-6 px-4 md:px-6",style:{maxWidth:"1400px",margin:"0 auto"},children:[e.jsx(A.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"mb-6",children:e.jsxs("div",{className:"d-flex justify-content-between align-items-center flex-wrap gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[e.jsxs("h2",{className:"text-white mb-2",style:{fontSize:"clamp(1.5rem, 3vw, 2rem)",fontWeight:"600",letterSpacing:"-0.5px"},children:[u(),", ",i?.displayName||c?.email?.split("@")[0],"! 👋"]}),e.jsx("div",{style:{height:"3px",width:"60%",background:"linear-gradient(90deg, #6366F1, #8B5CF6)",borderRadius:"2px",marginTop:"4px"}})]}),e.jsx("p",{className:"text-sm mb-0",style:{color:"#94A3B8",marginTop:"8px"},children:"Here's your activity summary today."})]}),e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx("button",{className:"btn rounded-circle d-flex align-items-center justify-content-center",onClick:()=>o(!n),style:{width:"44px",height:"44px",background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(10px)",border:"1px solid rgba(255, 255, 255, 0.1)",color:"white"},children:e.jsx("i",{className:"bi bi-search"})}),e.jsx("button",{className:"btn rounded-circle d-flex align-items-center justify-content-center",style:{width:"44px",height:"44px",background:"linear-gradient(135deg, #6366F1, #8B5CF6)",border:"none",color:"white"},children:e.jsx("i",{className:"bi bi-person-circle fs-5"})})]})]})}),e.jsxs(A.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"row g-4 mb-5",children:[e.jsx("div",{className:"col-md-6 col-lg-3",children:e.jsxs(A.div,{whileHover:{scale:1.02,y:-4},transition:{type:"spring",stiffness:300},className:"card border-0 h-100",style:{background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"1.5rem",overflow:"hidden"},children:[e.jsx("div",{style:{height:"4px",background:"linear-gradient(90deg, #6366F1, #06B6D4)",borderRadius:"1.5rem 1.5rem 0 0"}}),e.jsxs("div",{className:"card-body p-4",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-1",style:{fontSize:"13px",color:"#94A3B8",fontWeight:"500"},children:"Total Quotations"}),e.jsx("h3",{className:"mb-0 text-white",style:{fontSize:"2rem",fontWeight:"700"},children:e.jsx(fe,{value:a.totalQuotations})})]}),e.jsx("div",{className:"d-flex align-items-center justify-content-center",style:{width:"48px",height:"48px",background:"linear-gradient(135deg, #6366F1, #8B5CF6)",borderRadius:"12px",boxShadow:"0 4px 12px rgba(99, 102, 241, 0.4)"},children:e.jsx("i",{className:"bi bi-file-earmark-text text-white",style:{fontSize:"20px"}})})]}),e.jsxs("div",{className:"d-flex align-items-center",style:{fontSize:"13px",color:"#10B981"},children:[e.jsx("i",{className:"bi bi-arrow-up me-1"}),e.jsx("span",{children:"+12% from last month"})]})]})]})}),e.jsx("div",{className:"col-md-6 col-lg-3",children:e.jsxs(A.div,{whileHover:{scale:1.02,y:-4},transition:{type:"spring",stiffness:300},className:"card border-0 h-100",style:{background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"1.5rem",overflow:"hidden"},children:[e.jsx("div",{style:{height:"4px",background:"linear-gradient(90deg, #8B5CF6, #EC4899)",borderRadius:"1.5rem 1.5rem 0 0"}}),e.jsxs("div",{className:"card-body p-4",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-1",style:{fontSize:"13px",color:"#94A3B8",fontWeight:"500"},children:"Total Value"}),e.jsx("h3",{className:"mb-0 text-white",style:{fontSize:"2rem",fontWeight:"700"},children:e.jsx(fe,{value:a.totalValue,prefix:"₹"})})]}),e.jsx("div",{className:"d-flex align-items-center justify-content-center",style:{width:"48px",height:"48px",background:"linear-gradient(135deg, #8B5CF6, #EC4899)",borderRadius:"12px",boxShadow:"0 4px 12px rgba(236, 72, 153, 0.4)"},children:e.jsx("i",{className:"bi bi-currency-rupee text-white",style:{fontSize:"20px"}})})]}),e.jsxs("div",{className:"d-flex align-items-center",style:{fontSize:"13px",color:"#10B981"},children:[e.jsx("i",{className:"bi bi-arrow-up me-1"}),e.jsx("span",{children:"+8% from last month"})]})]})]})}),e.jsx("div",{className:"col-md-6 col-lg-3",children:e.jsxs(A.div,{whileHover:{scale:1.02,y:-4},transition:{type:"spring",stiffness:300},className:"card border-0 h-100",style:{background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"1.5rem",overflow:"hidden"},children:[e.jsx("div",{style:{height:"4px",background:"linear-gradient(90deg, #3B82F6, #06B6D4)",borderRadius:"1.5rem 1.5rem 0 0"}}),e.jsxs("div",{className:"card-body p-4",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-1",style:{fontSize:"13px",color:"#94A3B8",fontWeight:"500"},children:"Pending"}),e.jsx("h3",{className:"mb-0 text-white",style:{fontSize:"2rem",fontWeight:"700"},children:e.jsx(fe,{value:a.pendingQuotations})})]}),e.jsx("div",{className:"d-flex align-items-center justify-content-center",style:{width:"48px",height:"48px",background:"linear-gradient(135deg, #3B82F6, #06B6D4)",borderRadius:"12px",boxShadow:"0 4px 12px rgba(59, 130, 246, 0.4)"},children:e.jsx("i",{className:"bi bi-hourglass-split text-white",style:{fontSize:"20px"}})})]}),e.jsxs("div",{className:"d-flex align-items-center",style:{fontSize:"13px",color:"#F59E0B"},children:[e.jsx("i",{className:"bi bi-exclamation-circle me-1"}),e.jsx("span",{children:"Awaiting response"})]})]})]})}),e.jsx("div",{className:"col-md-6 col-lg-3",children:e.jsxs(A.div,{whileHover:{scale:1.02,y:-4},transition:{type:"spring",stiffness:300},className:"card border-0 h-100",style:{background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"1.5rem",overflow:"hidden"},children:[e.jsx("div",{style:{height:"4px",background:"linear-gradient(90deg, #10B981, #14B8A6)",borderRadius:"1.5rem 1.5rem 0 0"}}),e.jsxs("div",{className:"card-body p-4",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-1",style:{fontSize:"13px",color:"#94A3B8",fontWeight:"500"},children:"Approved This Month"}),e.jsx("h3",{className:"mb-0 text-white",style:{fontSize:"2rem",fontWeight:"700"},children:e.jsx(fe,{value:a.thisMonthQuotations})})]}),e.jsx("div",{className:"d-flex align-items-center justify-content-center",style:{width:"48px",height:"48px",background:"linear-gradient(135deg, #10B981, #14B8A6)",borderRadius:"12px",boxShadow:"0 4px 12px rgba(16, 185, 129, 0.4)"},children:e.jsx("i",{className:"bi bi-check-circle text-white",style:{fontSize:"20px"}})})]}),e.jsxs("div",{className:"d-flex align-items-center",style:{fontSize:"13px",color:"#10B981"},children:[e.jsx("i",{className:"bi bi-trophy me-1"}),e.jsxs("span",{children:["₹",a.thisMonthValue.toLocaleString()," revenue"]})]})]})]})})]}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-lg-8",children:e.jsxs(A.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.2},children:[e.jsxs("h5",{className:"mb-4 d-flex align-items-center",style:{fontSize:"1.25rem"},children:[e.jsx("span",{style:{marginRight:"8px",fontSize:"1.5rem"},children:"⚡"}),e.jsx("span",{style:{background:"linear-gradient(90deg, #6366F1, #8B5CF6)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontWeight:"600"},children:"Quick Actions"})]}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-6",children:e.jsx(z,{to:"/multi-calculator",className:"text-decoration-none",children:e.jsx(A.div,{whileHover:{y:-4,scale:1.01},transition:{type:"spring",stiffness:300,damping:20},className:"card h-100 border-0",style:{background:"linear-gradient(135deg, #6366F1, #8B5CF6)",borderRadius:"1.5rem",overflow:"hidden",boxShadow:"0 8px 24px rgba(99, 102, 241, 0.3)"},children:e.jsxs("div",{className:"card-body p-4",style:{color:"white"},children:[e.jsx("div",{className:"d-flex align-items-center justify-content-center mb-3",style:{width:"64px",height:"64px",background:"rgba(255, 255, 255, 0.2)",borderRadius:"16px",backdropFilter:"blur(10px)"},children:e.jsx(A.i,{whileHover:{rotate:360},transition:{duration:.6},className:"bi bi-calculator",style:{fontSize:"32px"}})}),e.jsx("h5",{className:"fw-bold mb-2",style:{fontSize:"1.1rem"},children:"Multi-Item Calculator"}),e.jsx("p",{className:"mb-3",style:{fontSize:"0.9rem",opacity:.9},children:"Create detailed quotations with multiple items"}),e.jsxs("div",{className:"d-flex align-items-center",style:{fontSize:"0.9rem",fontWeight:"600"},children:[e.jsx("span",{children:"Start Project"}),e.jsx("i",{className:"bi bi-arrow-right ms-2"})]})]})})})}),e.jsx("div",{className:"col-md-6",children:e.jsx(z,{to:"/calculator",className:"text-decoration-none",children:e.jsx(A.div,{whileHover:{y:-4,scale:1.01},transition:{type:"spring",stiffness:300,damping:20},className:"card h-100 border-0",style:{background:"linear-gradient(135deg, #3B82F6, #06B6D4)",borderRadius:"1.5rem",overflow:"hidden",boxShadow:"0 8px 24px rgba(59, 130, 246, 0.3)"},children:e.jsxs("div",{className:"card-body p-4",style:{color:"white"},children:[e.jsx("div",{className:"d-flex align-items-center justify-content-center mb-3",style:{width:"64px",height:"64px",background:"rgba(255, 255, 255, 0.2)",borderRadius:"16px",backdropFilter:"blur(10px)"},children:e.jsx(A.i,{whileHover:{rotate:360},transition:{duration:.6},className:"bi bi-grid-3x2-gap",style:{fontSize:"32px"}})}),e.jsx("h5",{className:"fw-bold mb-2",style:{fontSize:"1.1rem"},children:"Simple Calculator"}),e.jsx("p",{className:"mb-3",style:{fontSize:"0.9rem",opacity:.9},children:"Quick calculations for single items"}),e.jsxs("div",{className:"d-flex align-items-center",style:{fontSize:"0.9rem",fontWeight:"600"},children:[e.jsx("span",{children:"Quick Calculate"}),e.jsx("i",{className:"bi bi-arrow-right ms-2"})]})]})})})}),e.jsx("div",{className:"col-md-6",children:e.jsx(z,{to:"/admin",className:"text-decoration-none",children:e.jsx(A.div,{whileHover:{y:-4,scale:1.01},transition:{type:"spring",stiffness:300,damping:20},className:"card h-100 border-0",style:{background:"linear-gradient(135deg, #EC4899, #F472B6)",borderRadius:"1.5rem",overflow:"hidden",boxShadow:"0 8px 24px rgba(236, 72, 153, 0.3)"},children:e.jsxs("div",{className:"card-body p-4",style:{color:"white"},children:[e.jsx("div",{className:"d-flex align-items-center justify-content-center mb-3",style:{width:"64px",height:"64px",background:"rgba(255, 255, 255, 0.2)",borderRadius:"16px",backdropFilter:"blur(10px)"},children:e.jsx(A.i,{whileHover:{rotate:360},transition:{duration:.6},className:"bi bi-gear",style:{fontSize:"32px"}})}),e.jsx("h5",{className:"fw-bold mb-2",style:{fontSize:"1.1rem"},children:"Admin Settings"}),e.jsx("p",{className:"mb-3",style:{fontSize:"0.9rem",opacity:.9},children:"Configure pricing and preferences"}),e.jsxs("div",{className:"d-flex align-items-center",style:{fontSize:"0.9rem",fontWeight:"600"},children:[e.jsx("span",{children:"Manage Settings"}),e.jsx("i",{className:"bi bi-arrow-right ms-2"})]})]})})})}),e.jsx("div",{className:"col-md-6",children:e.jsx(z,{to:"/billing",className:"text-decoration-none",children:e.jsx(A.div,{whileHover:{y:-4,scale:1.01},transition:{type:"spring",stiffness:300,damping:20},className:"card h-100 border-0",style:{background:"linear-gradient(135deg, #10B981, #14B8A6)",borderRadius:"1.5rem",overflow:"hidden",boxShadow:"0 8px 24px rgba(16, 185, 129, 0.3)"},children:e.jsxs("div",{className:"card-body p-4",style:{color:"white"},children:[e.jsx("div",{className:"d-flex align-items-center justify-content-center mb-3",style:{width:"64px",height:"64px",background:"rgba(255, 255, 255, 0.2)",borderRadius:"16px",backdropFilter:"blur(10px)"},children:e.jsx(A.i,{whileHover:{rotate:360},transition:{duration:.6},className:"bi bi-credit-card",style:{fontSize:"32px"}})}),e.jsx("h5",{className:"fw-bold mb-2",style:{fontSize:"1.1rem"},children:"Billing & Subscription"}),e.jsx("p",{className:"mb-3",style:{fontSize:"0.9rem",opacity:.9},children:"Manage subscription and payments"}),e.jsxs("div",{className:"d-flex align-items-center",style:{fontSize:"0.9rem",fontWeight:"600"},children:[e.jsx("span",{children:"View Billing"}),e.jsx("i",{className:"bi bi-arrow-right ms-2"})]})]})})})})]})]})}),e.jsx("div",{className:"col-lg-4",children:e.jsxs(A.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.3},children:[e.jsxs("h5",{className:"mb-4",style:{fontSize:"1.25rem",color:"white",fontWeight:"600"},children:[e.jsx("i",{className:"bi bi-clock-history me-2",style:{color:"#06B6D4"}}),"Recent Activity"]}),e.jsxs("div",{className:"card border-0",style:{background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"1.5rem",overflow:"hidden"},children:[e.jsx("div",{style:{height:"3px",background:"linear-gradient(90deg, #3B82F6, #06B6D4)",borderRadius:"1.5rem 1.5rem 0 0"}}),e.jsxs("div",{className:"card-body p-0",children:[e.jsx("div",{className:"list-group list-group-flush",children:e.jsx(Ge,{children:d.length>0?d.map((j,y)=>e.jsx(A.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.4+y*.1},className:"list-group-item border-0 py-3 px-4",style:{background:"transparent",borderBottom:y<d.length-1?"1px solid rgba(255, 255, 255, 0.05)":"none"},children:e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("div",{className:"d-flex align-items-center justify-content-center me-3",style:{minWidth:"40px",height:"40px",background:j.color==="success"?"rgba(16, 185, 129, 0.2)":j.color==="info"?"rgba(59, 130, 246, 0.2)":j.color==="danger"?"rgba(239, 68, 68, 0.2)":"rgba(139, 92, 246, 0.2)",borderRadius:"10px",border:"1px solid rgba(255, 255, 255, 0.1)"},children:e.jsx("i",{className:`bi ${j.icon}`,style:{fontSize:"18px",color:j.color==="success"?"#10B981":j.color==="info"?"#3B82F6":j.color==="danger"?"#EF4444":"#8B5CF6"}})}),e.jsxs("div",{className:"flex-grow-1",children:[e.jsx("p",{className:"mb-1",style:{fontSize:"14px",color:"white",fontWeight:"500"},children:j.text}),e.jsxs("small",{style:{color:"#94A3B8",fontSize:"12px"},children:[e.jsx("i",{className:"bi bi-clock me-1"}),j.time]})]})]})},y)):e.jsxs("div",{className:"text-center py-5 px-4",children:[e.jsx("div",{className:"d-flex align-items-center justify-content-center mx-auto mb-3",style:{width:"80px",height:"80px",background:"rgba(99, 102, 241, 0.1)",borderRadius:"50%"},children:e.jsx("i",{className:"bi bi-inbox",style:{fontSize:"36px",color:"#6366F1"}})}),e.jsx("p",{style:{color:"#94A3B8",fontSize:"14px",marginBottom:"16px"},children:"No recent activity yet"}),e.jsx(z,{to:"/multi-calculator",className:"btn btn-sm",style:{background:"linear-gradient(135deg, #6366F1, #8B5CF6)",color:"white",border:"none",borderRadius:"10px",padding:"8px 16px",fontSize:"13px",fontWeight:"600"},children:"Create First Quotation"})]})})}),d.length>0&&e.jsx("div",{className:"p-3 text-center",style:{borderTop:"1px solid rgba(255, 255, 255, 0.05)"},children:e.jsxs("button",{className:"btn btn-link text-decoration-none",style:{color:"#6366F1",fontSize:"14px",fontWeight:"600"},children:["View All Activity ",e.jsx("i",{className:"bi bi-arrow-right ms-1"})]})})]})]})]})})]})]})})}const ss=Ot("pk_test_your_publishable_key_here"),Xe={free:{id:"free",name:"Free",price:0,currency:"inr",interval:"month",features:["Up to 10 calculations per month","Basic export features"]},pro:{id:"pro",name:"Pro",price:999,currency:"inr",interval:"month",features:["Unlimited calculations","Advanced exports","Priority support","Custom branding"]},enterprise:{id:"enterprise",name:"Enterprise",price:2999,currency:"inr",interval:"month",features:["Everything in Pro","Team collaboration","API access","Custom integrations"]}},as={free:null,pro:"price_PRO_MONTH_INR",enterprise:"price_ENTERPRISE_MONTH_INR"},tt=!1;function rs({plan:c,currentPlan:i,onSelect:n}){const o=i===c.id,a=c.id==="pro";return e.jsxs("div",{className:`card h-100 ${a?"border-primary":""}`,children:[a&&e.jsx("div",{className:"card-header bg-primary text-white text-center",children:e.jsx("small",{className:"fw-bold",children:"MOST POPULAR"})}),e.jsxs("div",{className:"card-body d-flex flex-column",children:[e.jsx("h5",{className:"card-title",children:c.name}),e.jsxs("div",{className:"mb-3",children:[e.jsxs("span",{className:"h2",children:["₹",c.price]}),e.jsxs("span",{className:"text-muted",children:["/",c.interval]})]}),e.jsx("ul",{className:"list-unstyled flex-grow-1",children:c.features.map((l,r)=>e.jsxs("li",{className:"mb-2",children:[e.jsx("i",{className:"bi bi-check-circle-fill text-success me-2"}),l]},r))}),e.jsx("button",{className:`btn ${o?"btn-outline-secondary":a?"btn-primary":"btn-outline-primary"} mt-auto`,onClick:()=>n(c.id),disabled:o,children:o?"Current Plan":"Select Plan"})]})]})}function is(){const[c,i]=g.useState(!1),{user:n}=Q(),o=async()=>{n&&(i(!0),i(!1))};return e.jsx("div",{className:"card",children:e.jsxs("div",{className:"card-body text-center",children:[e.jsx("h5",{className:"card-title",children:"Manage Your Subscription"}),e.jsx("p",{className:"card-text",children:"Update your payment method, view invoices, and manage your subscription."}),e.jsx("button",{className:"btn btn-outline-primary",onClick:o,disabled:c,children:c?"Opening...":"Open Customer Portal"})]})})}function os(){const{userProfile:c}=Q(),[i,n]=g.useState(!1),o=c?.subscription?.plan??"free",a=async r=>{if(!(!c||r==="free")){n(!0);try{if(!as[r])return}catch(h){console.error("Error creating checkout session:",h),alert("Failed to start checkout. Please try again.")}finally{n(!1)}}},l=Object.values(Xe);return e.jsx(vt,{stripe:ss,children:e.jsx("div",{className:"container py-4",children:e.jsx("div",{className:"row",children:e.jsxs("div",{className:"col-12",children:[e.jsx("h1",{className:"h2 mb-4",children:"Billing & Subscription"}),i&&e.jsx("div",{className:"d-flex justify-content-center mb-4",children:e.jsx("div",{className:"spinner-border",role:"status",children:e.jsx("span",{className:"visually-hidden",children:"Processing..."})})}),e.jsx("div",{className:"card mb-4",children:e.jsxs("div",{className:"card-body",children:[e.jsx("h5",{className:"card-title",children:"Current Plan"}),e.jsxs("p",{className:"card-text",children:["You're currently on the"," ",e.jsxs("strong",{children:[Xe[o]?.name??"Free"," plan"]}),c?.subscription?.currentPeriodEnd&&e.jsxs("span",{className:"text-muted ms-2",children:["(Renews on"," ",new Date(c.subscription.currentPeriodEnd).toLocaleDateString(),")"]})]})]})}),e.jsx("div",{className:"row g-4 mb-4",children:l.map(r=>e.jsx("div",{className:"col-md-4",children:e.jsx(rs,{plan:r,currentPlan:o,onSelect:a})},r.id))}),o!=="free"&&e.jsx(is,{})]})})})})}class ns{doc=null;setFont(i,n="normal"){this.doc&&(this.doc.setFont("helvetica",n),this.doc.setFontSize(i))}async generateQuotationPDF(i,n={}){this.doc=new yt;try{this.doc.setProperties({title:`Quotation ${i.invoiceNumber}`,subject:"Professional Quotation",author:n.branding?.companyName||"Estimatix",creator:"Estimatix - Professional Estimation Platform"}),await this.addWatermark(n);let o=45;o=this.addHeader(i,n,o),o=this.addCustomerDetails(i,o),o=this.addItemsTable(i,o+10);const a=this.doc.internal.pageSize.getHeight(),h=80+30;o+h>a-10&&(this.doc.addPage(),await this.addWatermark(n),o=20),o=this.addTotals(i,o+15),o=this.addNotesAndTerms(i,o+10),n.qrCode&&await this.addQRCode(n.qrCode),n.digitalSignature&&this.addDigitalSignature(n.digitalSignature);const u=this.doc.getNumberOfPages();for(let b=1;b<=u;b++)this.doc.setPage(b),this.addFooter(n,b,u);return this.doc.output("blob")}catch(o){throw console.error("Error generating PDF:",o),new Error("Failed to generate PDF")}}async addWatermark(i){if(!this.doc)return;const n=this.doc.internal.pageSize.getWidth(),o=this.doc.internal.pageSize.getHeight();let a="ESTIMATIX",l=.25,r="#6C63FF",h=!0;i.watermark?(a=i.watermark.text||a,l=i.watermark.opacity??l,r=i.watermark.color||r):i.confidential?(a="CONFIDENTIAL",l=.2,r="#FF6B6B",h=!1):i.draft&&(a="DRAFT",l=.2,r="#4ECDC4",h=!1),this.doc.saveGraphicsState();try{if(this.doc.setGState){const d=new this.doc.GState({opacity:l,"stroke-opacity":l});this.doc.setGState(d)}}catch(d){console.warn("GState not supported, watermark will be fully opaque:",d),typeof this.doc.setOpacity=="function"&&this.doc.setOpacity(l)}const u=n/2,b=o/2;if(h&&!i.draft&&!i.confidential)try{const d=`<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4f46e5;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#9333ea;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#06b6d4;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
    </linearGradient>
  </defs>
  <circle cx="256" cy="256" r="240" fill="url(#primaryGradient)" opacity="0.1"/>
  <rect x="140" y="100" width="232" height="312" rx="24" fill="url(#primaryGradient)"/>
  <rect x="164" y="124" width="184" height="80" rx="12" fill="#ffffff" opacity="0.95"/>
  <text x="332" y="180" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="url(#primaryGradient)" text-anchor="end">123.5</text>
  <rect x="164" y="228" width="36" height="36" rx="8" fill="#ffffff" opacity="0.2"/>
  <rect x="212" y="228" width="36" height="36" rx="8" fill="#ffffff" opacity="0.2"/>
  <rect x="260" y="228" width="36" height="36" rx="8" fill="#ffffff" opacity="0.2"/>
  <rect x="308" y="228" width="36" height="36" rx="8" fill="url(#accentGradient)"/>
  <rect x="164" y="276" width="36" height="36" rx="8" fill="#ffffff" opacity="0.3"/>
  <rect x="212" y="276" width="36" height="36" rx="8" fill="#ffffff" opacity="0.3"/>
  <rect x="260" y="276" width="36" height="36" rx="8" fill="#ffffff" opacity="0.3"/>
  <rect x="308" y="276" width="36" height="36" rx="8" fill="url(#accentGradient)"/>
  <rect x="164" y="324" width="36" height="36" rx="8" fill="#ffffff" opacity="0.3"/>
  <rect x="212" y="324" width="36" height="36" rx="8" fill="#ffffff" opacity="0.3"/>
  <rect x="260" y="324" width="36" height="36" rx="8" fill="#ffffff" opacity="0.3"/>
  <rect x="308" y="324" width="36" height="36" rx="8" fill="url(#accentGradient)"/>
  <rect x="164" y="372" width="84" height="36" rx="8" fill="#ffffff" opacity="0.3"/>
  <rect x="260" y="372" width="36" height="36" rx="8" fill="#ffffff" opacity="0.3"/>
  <rect x="308" y="372" width="36" height="36" rx="8" fill="#10b981"/>
  <path d="M 380 320 L 420 280 L 460 300 L 500 240" stroke="url(#accentGradient)" stroke-width="6" stroke-linecap="round" fill="none" opacity="0.7"/>
  <circle cx="380" cy="320" r="6" fill="url(#accentGradient)"/>
  <circle cx="420" cy="280" r="6" fill="url(#accentGradient)"/>
  <circle cx="460" cy="300" r="6" fill="url(#accentGradient)"/>
  <circle cx="500" cy="240" r="6" fill="url(#accentGradient)"/>
  <text x="50" y="180" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="url(#primaryGradient)">E</text>
  <path d="M 40 200 L 100 200 L 70 240 L 95 240" stroke="url(#accentGradient)" stroke-width="4" stroke-linecap="round" fill="none"/>
</svg>`,j=document.createElement("canvas"),y=j.getContext("2d");if(!y)throw new Error("Canvas context not available");const k=window.URL||window.webkitURL||window,N=new Image,f=new Blob([d],{type:"image/svg+xml;charset=utf-8"}),v=k.createObjectURL(f);await new Promise((I,R)=>{N.onload=()=>{try{j.width=500,j.height=500,y&&(y.clearRect(0,0,500,500),y.drawImage(N,0,0,500,500));const F=j.toDataURL("image/png",.95),S=120,E=u-S/2,H=b-S/2;this.doc.addImage(F,"PNG",E,H,S,S,void 0,"NONE"),console.log("✅ Logo watermark added successfully to PDF"),k.revokeObjectURL(v),I()}catch(F){console.error("❌ Failed to convert logo to canvas:",F),k.revokeObjectURL(v),R(F)}},N.onerror=F=>{console.error("❌ Failed to load logo image:",F),k.revokeObjectURL(v),R(new Error("Failed to load logo.svg"))},N.src=v})}catch(d){console.error("❌ Logo watermark failed, using fallback circle:",d),this.doc.setDrawColor(r),this.doc.setFillColor(r),this.doc.setLineWidth(4),this.doc.circle(u,b-15,40,"S"),this.doc.setFont("helvetica","bold"),this.doc.setFontSize(50),this.doc.setTextColor(r),this.doc.text("E",u,b-5,{align:"center"})}this.doc.setFont("helvetica","bold"),this.doc.setFontSize(50),this.doc.setTextColor(r),i.draft?this.doc.text("DRAFT",u,b,{align:"center",angle:-15}):i.confidential?this.doc.text("CONFIDENTIAL",u,b,{align:"center",angle:-15}):this.doc.text("ESTIMATIX",u,b+80,{align:"center",angle:-45}),this.doc.restoreGraphicsState()}addHeader(i,n,o){if(!this.doc)return o;const a=this.doc.internal.pageSize.getWidth(),l=40,r=15;this.doc.setFillColor(108,99,255),this.doc.rect(0,0,a,l-2,"F"),this.doc.setFillColor(245,245,255),this.doc.rect(0,l-2,a,2,"F"),this.doc.setTextColor(255,255,255),this.doc.setFont("helvetica","bold"),this.doc.setFontSize(16),this.doc.text(n.branding?.companyName||"Venkatesh Aluminium & Glass",r,14),this.doc.setFont("helvetica","normal"),this.doc.setFontSize(9),this.doc.text("Professional Estimation & Quotation Platform",r,20),this.doc.setFontSize(8.8),this.doc.setTextColor(240,240,240);const h=n.branding?.phone||"8888889999",u=n.branding?.email||"info@example.com";this.doc.text(`Phone: ${h}  |  Email: ${u}`,r,26);const b=60,d=26,j=a-b-r,y=6;this.doc.setFillColor(255,255,255),this.doc.roundedRect(j,y,b,d,3,3,"F"),this.doc.setFillColor(108,99,255),this.doc.roundedRect(j+4,y+2,b-8,7,2,2,"F"),this.doc.setTextColor(255,255,255),this.doc.setFontSize(8.5),this.doc.setFont("helvetica","bold"),this.doc.text("QUOTATION",j+b/2,y+7,{align:"center"}),this.doc.setFont("helvetica","bold"),this.doc.setFontSize(10),this.doc.setTextColor(33,37,41),this.doc.text(`#${i.invoiceNumber}`,j+b/2,y+14,{align:"center"}),this.doc.setFont("helvetica","normal"),this.doc.setFontSize(8),this.doc.setTextColor(107,114,128),this.doc.text(`Date: ${i.date.toLocaleDateString("en-IN")}`,j+b/2,y+19,{align:"center"});const k=new Date(i.date);return k.setDate(k.getDate()+30),this.doc.setFillColor(237,233,254),this.doc.roundedRect(j+10,y+21,b-20,4,2,2,"F"),this.doc.setTextColor(108,99,255),this.doc.setFont("helvetica","bold"),this.doc.setFontSize(7),this.doc.text(`Valid Until: ${k.toLocaleDateString("en-IN")}`,j+b/2,y+24,{align:"center"}),l+8}addCustomerDetails(i,n){if(!this.doc)return n;const o=this.doc.internal.pageSize.getWidth(),a=15;let l=n;this.doc.setFillColor(108,99,255),this.doc.roundedRect(a,l,3,10,1,1,"F"),this.doc.setFontSize(11),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(31,41,55),this.doc.text("Customer Information",a+8,l+7),l+=15;const r=l,h=22;this.doc.setFillColor(243,244,246),this.doc.setDrawColor(229,231,235),this.doc.setLineWidth(.5),this.doc.roundedRect(a,r,o-a*2,h,4,4,"FD"),this.doc.setFillColor(108,99,255),this.doc.roundedRect(a,r,3,h,1,1,"F");const u=a+10,b=o/2+5;let d=r+9;return this.doc.setFontSize(8.5),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(100,116,139),this.doc.text("Name:",u,d),this.doc.setFont("helvetica","normal"),this.doc.setTextColor(31,41,55),this.doc.text(i.customerName,u+18,d),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(100,116,139),this.doc.text("Email:",b,d),this.doc.setFont("helvetica","normal"),this.doc.setTextColor(31,41,55),this.doc.text(i.customerEmail,b+18,d),d+=7,this.doc.setFont("helvetica","bold"),this.doc.setTextColor(100,116,139),this.doc.text("Phone:",u,d),this.doc.setFont("helvetica","normal"),this.doc.setTextColor(31,41,55),this.doc.text(i.customerPhone,u+18,d),r+h+12}addItemsTable(i,n){if(!this.doc)return n;let o=n;this.doc.setFillColor(108,99,255),this.doc.roundedRect(15,o,3,10,1,1,"F"),this.doc.setFontSize(11),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(31,41,55),this.doc.text("Item Details",22,o+7),o+=14;const a=["Item","Width","Height","Qty","Glass","Profile","Weight (kg)","Rate (Rs.)","Total (Rs.)"],l=i.items.map((h,u)=>[h.name||`Item ${u+1}`,`${h.width}"`,`${h.height}"`,"1","Clear","Standard",(h.area*2.5).toFixed(2),`Rs. ${h.rate.toFixed(2)}`,`Rs. ${h.total.toFixed(2)}`]);return Nt(this.doc,{head:[a],body:l,startY:o,theme:"grid",styles:{font:"helvetica",fontSize:8.5,cellPadding:{top:4,right:3,bottom:4,left:3},lineColor:[230,230,230],lineWidth:.25,textColor:[33,37,41],valign:"middle",overflow:"ellipsize"},headStyles:{fillColor:[240,240,255],textColor:[76,63,255],fontStyle:"bold",fontSize:8.8,halign:"center",lineWidth:.25,overflow:"ellipsize",cellPadding:{top:5,bottom:5}},alternateRowStyles:{fillColor:[250,250,250]},bodyStyles:{fillColor:[255,255,255]},columnStyles:{0:{cellWidth:23,halign:"left"},1:{cellWidth:16,halign:"center"},2:{cellWidth:16,halign:"center"},3:{cellWidth:12,halign:"center"},4:{cellWidth:21,halign:"center"},5:{cellWidth:21,halign:"center"},6:{cellWidth:19,halign:"right"},7:{cellWidth:26,halign:"right"},8:{cellWidth:28,halign:"right",fontStyle:"bold",textColor:[76,63,255]}},margin:{left:15,right:15},tableWidth:"wrap",didDrawCell:h=>{h.section==="head"&&(h.cell.styles.valign="middle")}}),this.doc.lastAutoTable.finalY+10}addTotals(i,n){if(!this.doc)return n;const o=this.doc.internal.pageSize.getWidth();let a=n;this.doc.setFillColor(108,99,255),this.doc.roundedRect(15,a,3,10,1,1,"F"),this.doc.setFontSize(11),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(31,41,55),this.doc.text("Summary",23,a+7),a+=15;const l=i.items.reduce((w,C)=>w+C.area,0),r=i.items.reduce((w,C)=>w+C.area*2.5,0),h=(o-45)/2,u=56,b=15,d=b+h+15;this.doc.setFillColor(243,244,246),this.doc.setDrawColor(229,231,235),this.doc.roundedRect(b,a,h,u,5,5,"FD");let j=a+11;this.doc.setFont("helvetica","bold"),this.doc.setFontSize(9.5),this.doc.setTextColor(31,41,55),this.doc.text("Material Details:",b+7,j),this.doc.setFont("helvetica","normal"),this.doc.setFontSize(8.6),this.doc.setTextColor(55,65,81),j+=8,this.doc.text(`• Glass Area: ${l.toFixed(2)} sq.ft`,b+7,j),j+=6,this.doc.text(`• Frame Weight: ${r.toFixed(2)} kg`,b+7,j),j+=6,this.doc.text("• Rate: Rs. 47.0 per kg",b+7,j),j+=9,this.doc.setFontSize(8),this.doc.text("Note: Prices valid 30 days from issue.",b+7,j),this.doc.setFillColor(255,255,255),this.doc.setDrawColor(229,231,235),this.doc.setLineWidth(.5),this.doc.roundedRect(d,a,h,u,5,5,"FD");let y=a+11;const k=8,N=d+k,f=d+h-k,v=(w,C,W=[31,41,55],T=!1)=>{if(!this.doc)return;this.doc.setFont("helvetica","normal"),this.doc.setFontSize(9),this.doc.setTextColor(75,85,99),this.doc.text(w,N,y),this.doc.setFont("helvetica",T?"bold":"normal"),this.doc.setTextColor(...W);const B=typeof C=="number"?`Rs. ${C.toLocaleString("en-IN",{minimumFractionDigits:2})}`:C;this.doc.text(B,f,y,{align:"right"}),y+=6.5};v("Subtotal",i.subtotal,[31,41,55],!0),v("Tax (GST 18%)",i.tax,[31,41,55],!0);const I=i.discount||0;I>0&&v("Discount (5%)",`− Rs. ${I.toLocaleString("en-IN",{minimumFractionDigits:2})}`,[34,197,94],!1);const R=i.advancePaid||0;R>0&&v("Advance Received",`− Rs. ${R.toLocaleString("en-IN",{minimumFractionDigits:2})}`,[34,197,94],!1);const F=i.roundOff||0;if(Math.abs(F)>.01){const w=F>=0?"+":"−";v("Round-off",`${w} Rs. ${Math.abs(F).toFixed(2)}`,[107,114,128],!1)}let S=i.grandTotal;R>0&&(S=i.grandTotal-R),I>0&&(S=S-I),(R>0||I>0)&&(y+=1,this.doc.setDrawColor(200,200,200),this.doc.setLineWidth(.3),this.doc.line(N,y,f,y),y+=5,this.doc.setFont("helvetica","bold"),this.doc.setFontSize(9),this.doc.setTextColor(239,68,68),this.doc.text("Balance Due",N,y),this.doc.setFontSize(10),this.doc.text(`Rs. ${S.toLocaleString("en-IN",{minimumFractionDigits:2})}`,f,y,{align:"right"}),y+=6),y+=2,this.doc.setDrawColor(108,99,255),this.doc.setLineWidth(.5),this.doc.line(d+k,y,d+h-k,y);const E=d+k,H=y+5,$=h-k*2,K=16;this.doc.setFillColor(84,63,255),this.doc.roundedRect(E,H,$,K,3,3,"F"),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(255,255,255);const Z=H+K/2+2.5;this.doc.setFontSize(7.5),this.doc.text("GRAND TOTAL",E+10,Z);const J=i.grandTotal.toLocaleString("en-IN",{minimumFractionDigits:2});let ee=11;J.length>12&&(ee=10),J.length>15&&(ee=9),this.doc.setFontSize(ee);const re=this.doc.getTextWidth(J),te=ee*.65;this.doc.setFontSize(te);const ie="Rs.",s=this.doc.getTextWidth(ie);return this.doc.text(ie,E+$-10-re-s-1.5,Z-.8),this.doc.setFontSize(ee),this.doc.text(J,E+$-10,Z,{align:"right"}),a+u+18}addNotesAndTerms(i,n){if(!this.doc)return n;const o=this.doc.internal.pageSize.getWidth();let a=n;this.doc.setFillColor(108,99,255),this.doc.roundedRect(15,a,3,10,1,1,"F"),this.doc.setFontSize(11),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(31,41,55),this.doc.text("Notes",23,a+7),a+=16,this.doc.setFillColor(243,244,246),this.doc.setDrawColor(229,231,235),this.doc.setLineWidth(.3);const l=i.notes?30:22;this.doc.roundedRect(15,a,o-30,l,4,4,"FD"),this.doc.setFont("helvetica","normal"),this.doc.setFontSize(8.5),this.doc.setTextColor(55,65,81);let r=a+8;if(i.notes){const v=this.doc.splitTextToSize(i.notes,o-50);this.doc.text(v,22,r),r+=v.length*4+6}this.doc.setFont("helvetica","italic"),this.doc.setFontSize(8),this.doc.setTextColor(107,114,128);const u=`This quotation is auto-calculated based on the latest aluminium profile rates as of ${new Date().toLocaleString("en-IN",{month:"long",year:"numeric"})}.`,b=this.doc.splitTextToSize(u,o-50);this.doc.text(b,22,r),a+=l+12;const d=i.advancePaid||0;if(d>0){const v=i.grandTotal-d;this.doc.setFillColor(108,99,255),this.doc.roundedRect(15,a,3,10,1,1,"F"),this.doc.setFontSize(11),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(31,41,55),this.doc.text("Payment Details",23,a+7),a+=16,this.doc.setFillColor(250,250,255),this.doc.setDrawColor(229,231,235),this.doc.setLineWidth(.3),this.doc.roundedRect(15,a,o-30,18,4,4,"FD"),this.doc.setFont("helvetica","normal"),this.doc.setFontSize(9),this.doc.setTextColor(55,65,81),this.doc.text("Advance Paid:",22,a+8),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(34,197,94),this.doc.text(`Rs. ${d.toLocaleString("en-IN",{minimumFractionDigits:2})}`,o-37,a+8,{align:"right"}),this.doc.setFont("helvetica","normal"),this.doc.setTextColor(55,65,81),this.doc.text("Balance Due:",22,a+14),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(239,68,68),this.doc.text(`Rs. ${v.toLocaleString("en-IN",{minimumFractionDigits:2})}`,o-37,a+14,{align:"right"}),a+=22}if(i.termsAndConditions){this.doc.setFillColor(108,99,255),this.doc.roundedRect(15,a,3,10,1,1,"F"),this.doc.setFontSize(11),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(31,41,55),this.doc.text("Terms & Conditions",23,a+7),a+=16,this.doc.setFont("helvetica","normal"),this.doc.setFontSize(8.5),this.doc.setTextColor(75,85,99);const v=this.doc.splitTextToSize(i.termsAndConditions,o-50);this.doc.text(v,22,a),a+=v.length*4+12}const j=this.doc.internal.pageSize.getHeight();a>j-90&&(this.doc.addPage(),a=20),this.doc.setFillColor(237,233,254),this.doc.setDrawColor(108,99,255),this.doc.setLineWidth(.5),this.doc.roundedRect(15,a,o-30,12,3,3,"FD"),this.doc.setFillColor(108,99,255),this.doc.circle(22,a+6,2.5,"F"),this.doc.setTextColor(255,255,255),this.doc.setFontSize(7),this.doc.setFont("helvetica","bold"),this.doc.text("✓",22,a+7.2,{align:"center"}),this.doc.setFont("helvetica","bold"),this.doc.setFontSize(8),this.doc.setTextColor(76,63,255),this.doc.text("DIGITALLY VERIFIED",28,a+5.5),this.doc.setFont("helvetica","normal"),this.doc.setFontSize(7.5),this.doc.setTextColor(100,100,100);const y=`Document ID: #${i.invoiceNumber} | Verified by Estimatix Digital Sign System`;this.doc.text(y,28,a+9),a+=17;const k=(o-45)/2,N=35;this.doc.setDrawColor(229,231,235),this.doc.setLineWidth(.3),this.doc.roundedRect(15,a,k,N,4,4,"S"),this.doc.setFont("helvetica","bold"),this.doc.setFontSize(9),this.doc.setTextColor(31,41,55),this.doc.text("Prepared & Authorized by",22,a+8),this.doc.setDrawColor(200,200,200),this.doc.setLineWidth(.5),this.doc.line(22,a+20,22+k-14,a+20),this.doc.setFont("helvetica","normal"),this.doc.setFontSize(8),this.doc.setTextColor(107,114,128),this.doc.text("Authorized Signature",22,a+25),this.doc.setFontSize(7.5),this.doc.text("Venkatesh Aluminium & Glass",22,a+30);const f=15+k+15;return this.doc.roundedRect(f,a,k,N,4,4,"S"),this.doc.setFont("helvetica","bold"),this.doc.setFontSize(9),this.doc.setTextColor(31,41,55),this.doc.text("Client Acknowledgement",f+7,a+8),this.doc.setDrawColor(200,200,200),this.doc.line(f+7,a+20,f+k-7,a+20),this.doc.setFont("helvetica","normal"),this.doc.setFontSize(8),this.doc.setTextColor(107,114,128),this.doc.text("Client Signature",f+7,a+25),this.doc.setFontSize(7.5),this.doc.text(`Date: ${new Date().toLocaleDateString("en-IN")}`,f+7,a+30),a+=N+10,a}async addQRCode(i){if(!(!this.doc||!i))try{const n=await Qt.toDataURL(i.url,{width:400,margin:2,color:{dark:"#4f46e5",light:"#ffffff"}}),o=this.doc.internal.pageSize.getWidth(),a=this.doc.internal.pageSize.getHeight(),l=35,r=o-l-20,h=a-l-60;this.doc.setFillColor(255,255,255),this.doc.rect(r-3,h-3,l+6,l+6,"F"),this.doc.setDrawColor(79,70,229),this.doc.setLineWidth(.5),this.doc.rect(r-3,h-3,l+6,l+6,"S"),this.doc.addImage(n,"PNG",r,h,l,l),this.doc.setFontSize(8),this.doc.setFont("helvetica","bold"),this.doc.setTextColor(79,70,229);const u=i.label||"Scan to View";this.doc.text(u,r+l/2,h+l+6,{align:"center"}),this.doc.setFont("helvetica","normal"),this.doc.setTextColor(100,100,100),this.doc.setFontSize(7),this.doc.text("Quote Lookup",r+l/2,h+l+11,{align:"center"})}catch(n){console.error("Failed to add QR code to PDF:",n)}}addDigitalSignature(i){if(!this.doc||!i)return;let o=this.doc.internal.pageSize.getHeight()-80;if(this.doc.setFontSize(10),this.doc.setFont("helvetica","bold"),this.doc.text("Authorized Signature:",20,o),i.signatureImage)try{this.doc.addImage(i.signatureImage,"PNG",20,o+5,40,20)}catch(a){console.warn("Failed to add signature image:",a)}this.doc.line(20,o+30,80,o+30),this.doc.setFont("helvetica","normal"),this.doc.text(i.signerName,20,o+35),this.doc.text(i.signerTitle,20,o+42),this.doc.text(i.date?.toLocaleDateString()||new Date().toLocaleDateString(),20,o+49),this.doc.setFontSize(8),this.doc.setTextColor(100,100,100),this.doc.text("This document contains a digital signature and is legally binding.",20,o+60)}addFooter(i,n=1,o=1){if(!this.doc)return;const a=this.doc.internal.pageSize.getWidth(),l=this.doc.internal.pageSize.getHeight(),r=28,h=l-r;this.doc.setFillColor(248,247,255),this.doc.rect(0,h,a,r,"F"),this.doc.setFillColor(108,99,255),this.doc.rect(0,h,a,1.5,"F"),this.doc.setFillColor(76,63,255),this.doc.rect(0,h+1.5,a,.8,"F"),this.setFont(8,"normal"),this.doc.setTextColor(31,41,55);const u=new Date().toLocaleString("en-IN",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0});this.doc.text(`Generated: ${u}`,15,h+10),this.setFont(8,"normal"),this.doc.setTextColor(100,100,100),this.doc.text(`Page ${n} of ${o}`,15,h+17),this.setFont(10,"bold"),this.doc.setTextColor(31,41,55);const b=i.branding?.companyName||"Venkatesh Aluminium & Glass";this.doc.text(`Prepared by ${b}`,a/2,h+10,{align:"center"}),this.setFont(8,"normal"),this.doc.setTextColor(100,100,100);const d=i.branding?.phone||"+91-9876543210",j=i.branding?.email||"info@example.com",y=`Phone: ${d} | Email: ${j}`;this.doc.text(y,a/2,h+17,{align:"center"}),this.setFont(7.5,"normal"),this.doc.setTextColor(107,114,128),this.doc.text("Generated by Estimatix Quotation Suite",a-15,h+11,{align:"right"}),this.setFont(7,"normal"),this.doc.setTextColor(156,163,175),this.doc.text("© 2025 All Rights Reserved",a-15,h+17,{align:"right"})}downloadPDF(i,n){const o=URL.createObjectURL(i),a=document.createElement("a");a.href=o,a.download=n,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(o)}async savePDFDraft(i,n){try{const o={draft:!0,watermark:{text:"DRAFT",opacity:.1,color:"#4ECDC4"}},a=await this.generateQuotationPDF(i,o);return new Promise((l,r)=>{const h=new FileReader;h.onload=()=>l(h.result),h.onerror=r,h.readAsDataURL(a)})}catch(o){throw console.error("Error saving PDF draft:",o),o}}}const st=new ns;let Ie;async function ls(){return Ie||(Ie=await Je(()=>import("./vendor-xlsx-DGuHH-KN.js"),[])),Ie}const Pe={"4mm":10,"5mm":12.5,"6mm":15,"24mm DG":22},Ae={"Series 45":2.5,"Series 60":3.8,"Series 75":4.5,"Sliding Light":2.2,"Sliding Heavy":5};function cs(){const[c,i]=g.useState([]),[n,o]=g.useState("5mm"),[a,l]=g.useState("Series 60"),[r,h]=g.useState(!1),[u,b]=g.useState(""),[d,j]=g.useState({settings:!1,items:!1,summary:!1}),[y,k]=g.useState({name:"Venkatesh Aluminium & Glass",address:"",phone:"",email:""}),[N,f]=g.useState({name:"",address:"",phone:"",email:""}),[v,I]=g.useState(!1),[R,F]=g.useState(null),S=g.useMemo(()=>{let s=0,w=0,C=0,W=0;c.forEach(le=>{const{glassArea:oe,glassWeight:ce,profileLength:ue,profileWeight:ge}=E(le);s+=oe,w+=ce,C+=ue,W+=ge});const T=w+W,B=u?T*parseFloat(u):0,q=B,V=B*.18,se=B*1.18;return{totalGlassArea:s,totalGlassWeight:w,totalProfileLength:C,totalProfileWeight:W,totalWeight:T,totalCost:B,subtotal:q,gst:V,grandTotal:se}},[c,u]);function E(s){const w=s.glassType||n,C=s.profileType||a,W=(s.width||0)*(s.height||0)*(s.quantity||1),T=W*Pe[w],q=2*((s.width||0)+(s.height||0))*(s.quantity||1),V=q*Ae[C];return{glassArea:W,glassWeight:T,profileLength:q,profileWeight:V}}const H=()=>{const s={id:Date.now(),name:`Window ${c.length+1}`,width:"",height:"",quantity:1,glassType:"",profileType:""};i([...c,s])},$=(s,w,C)=>{i(c.map(W=>W.id===s?{...W,[w]:C}:W))},K=s=>{i(c.filter(w=>w.id!==s))},Z=()=>{const s=[];if(c.length===0)s.push("💡 Start by adding items to get AI-powered suggestions!");else{S.totalWeight>100&&n==="5mm Clear"&&s.push("⚡ Consider using 6mm or 8mm glass for better strength in large installations"),S.totalGlassArea>10&&a==="Standard"&&s.push("🔧 For large areas, Heavy Duty profiles provide better stability"),u&&parseFloat(u)>300&&s.push("💰 Consider negotiating bulk pricing - your rate seems high for large orders"),c.forEach((W,T)=>{(W.width>3||W.height>3)&&s.push(`⚠️ Item ${T+1}: Large dimensions may require additional support frames`)}),S.totalGlassArea/c.length<1&&s.push("📊 Small items detected - consider batch production for cost efficiency");const C=S.totalWeight/S.totalGlassArea;C<15?s.push("✅ Excellent material efficiency! Your design is optimized"):C>30&&s.push("🎯 Consider lighter profiles to reduce material costs")}s.length===0&&s.push("✨ Your configuration looks great! No suggestions at the moment."),alert(`🤖 AI Suggestions:

`+s.join(`

`))},J=()=>{const s={items:c,globalGlassType:n,globalProfileType:a,ratePerKg:u,companyData:y,customerData:N,savedAt:Date.now()};localStorage.setItem("estimatix_calculator_draft",JSON.stringify(s)),F(Date.now())},ee=()=>{try{const s=localStorage.getItem("estimatix_calculator_draft");if(s){const w=JSON.parse(s);i(w.items||[]),o(w.globalGlassType||"5mm"),l(w.globalProfileType||"Series 60"),b(w.ratePerKg||""),k(w.companyData||y),f(w.customerData||{name:"",address:"",phone:"",email:""}),F(w.savedAt||null),I(!1)}}catch(s){console.error("Error restoring draft:",s)}},re=()=>{localStorage.removeItem("estimatix_calculator_draft"),F(null),I(!1)};g.useEffect(()=>{const s=localStorage.getItem("estimatix_calculator_draft");if(s)try{const w=JSON.parse(s);F(w.savedAt||null),I(!0)}catch(w){console.error("Error parsing draft:",w),localStorage.removeItem("estimatix_calculator_draft")}},[]),g.useEffect(()=>{if(c.length>0||u||N.name||y.name!=="Venkatesh Aluminium & Glass"){const s=setTimeout(()=>{J()},2e3);return()=>clearTimeout(s)}},[c,n,a,u,y,N]);const te=async()=>{try{const s={invoiceNumber:`QUOT-${Date.now()}`,date:new Date,customerName:N.name||"Valued Customer",customerPhone:N.phone||"",customerEmail:N.email||"",customerAddress:N.address||"",items:c.map((B,q)=>{const{glassArea:V,glassWeight:se,profileWeight:le}=E(B),oe=se+le,ce=u?parseFloat(u):0,ue=oe*ce;return{name:B.name||`Item ${q+1}`,type:B.name.toLowerCase().includes("door")?"door":"window",width:B.width||0,height:B.height||0,area:V,rate:ce,total:ue}}),subtotal:S.totalCost,tax:S.totalCost*.18,grandTotal:S.totalCost*1.18,notes:`Total Glass Area: ${S.totalGlassArea.toFixed(2)} m²
Total Weight: ${S.totalWeight.toFixed(2)} kg
Glass Type: ${n}
Profile Type: ${a}`,termsAndConditions:`1. Prices are valid for 15 days.
2. Delivery within 7 working days.
3. Payment: 50% advance, balance on delivery.`},w={branding:{companyName:y.name,address:y.address||"",phone:y.phone||"",email:y.email||""}},C=await st.generateQuotationPDF(s,w),W=URL.createObjectURL(C),T=document.createElement("a");T.href=W,T.download=`Quotation_${s.invoiceNumber}_${new Date().toISOString().split("T")[0]}.pdf`,document.body.appendChild(T),T.click(),document.body.removeChild(T),URL.revokeObjectURL(W),alert("✅ Premium PDF generated successfully!")}catch(s){console.error("PDF generation error:",s),alert("Failed to generate PDF: "+(s.message||"Unknown error"))}},ie=async()=>{try{const s=await ls(),w=c.map(q=>{const{glassArea:V,glassWeight:se,profileLength:le,profileWeight:oe}=E(q);return{"Item Name":q.name,"Width (m)":q.width||0,"Height (m)":q.height||0,Quantity:q.quantity||1,"Glass Type":q.glassType||n,"Profile Type":q.profileType||a,"Glass Area (m²)":V.toFixed(2),"Glass Weight (kg)":se.toFixed(2),"Profile Length (m)":le.toFixed(2),"Profile Weight (kg)":oe.toFixed(2),"Total Weight (kg)":(se+oe).toFixed(2)}});w.push({"Item Name":"TOTAL","Width (m)":"","Height (m)":"",Quantity:"","Glass Type":"","Profile Type":"","Glass Area (m²)":S.totalGlassArea.toFixed(2),"Glass Weight (kg)":S.totalGlassWeight.toFixed(2),"Profile Length (m)":S.totalProfileLength.toFixed(2),"Profile Weight (kg)":S.totalProfileWeight.toFixed(2),"Total Weight (kg)":S.totalWeight.toFixed(2)});const C=s.utils.json_to_sheet(w),W=s.utils.book_new();s.utils.book_append_sheet(W,C,"Calculation");const T=s.write(W,{bookType:"xlsx",type:"array"}),B=new Blob([T],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});Ht.saveAs(B,"aluminium-calculation.xlsx")}catch(s){console.error("Error generating Excel:",s),alert("Error generating Excel file. Please try again.")}};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        /* ===== ENTERPRISE-GRADE PREMIUM STYLING ===== */
        
        /* Enhanced Gradient Background with Depth */
        .premium-calc-container {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #1e293b 100%);
          min-height: 100vh;
          padding: 2rem 0;
          position: relative;
          overflow: hidden;
        }
        
        /* Animated gradient texture overlay */
        .premium-calc-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%);
          pointer-events: none;
          animation: breathe 8s ease-in-out infinite;
        }
        
        @keyframes breathe {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        
        /* Glassmorphic Premium Cards */
        .premium-card {
          background: rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .premium-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s;
        }
        
        .premium-card:hover {
          transform: translateY(-5px);
          box-shadow: 
            0 12px 40px rgba(0, 0, 0, 0.3),
            0 0 20px rgba(139, 92, 246, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          border-color: rgba(139, 92, 246, 0.4);
        }
        
        .premium-card:hover::before {
          left: 100%;
        }
        
        /* ===== COMPACT PREMIUM HEADER ===== */
        .premium-header {
          background: linear-gradient(135deg, #5B5BEA 0%, #7C5CFA 50%, #9965F4 100%);
          backdrop-filter: blur(16px);
          color: white;
          padding: 1rem 1.5rem;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .premium-header:hover {
          box-shadow: 0 8px 30px rgba(92, 122, 255, 0.3);
          transform: translateY(-2px);
        }
        
        /* Header Layout - Responsive */
        .header-layout {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        @media (min-width: 640px) {
          .header-layout {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }
        
        /* Left Section - Icon + Title */
        .header-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        
        .header-icon-box {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 0.625rem;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .header-icon-box i {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.9);
        }
        
        .header-text {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        
        .premium-header h1 {
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0;
          color: rgba(255, 255, 255, 0.9);
          letter-spacing: -0.02em;
          line-height: 1.2;
        }
        
        .header-subtitle {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 400;
          margin: 0;
        }
        
        /* Right Section - Feature Badges */
        .header-badges {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.5rem;
        }
        
        .premium-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.375rem 0.75rem;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.2s ease;
          backdrop-filter: blur(10px);
        }
        
        .premium-badge:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }
        
        .premium-badge i {
          font-size: 0.75rem;
          color: #A5B4FC;
        }
        
        /* Section Headers with Icons */
        .section-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1.5rem 2rem;
          background: rgba(99, 102, 241, 0.1);
          border-bottom: 2px solid rgba(139, 92, 246, 0.2);
          margin: -1px -1px 0 -1px;
          border-radius: 20px 20px 0 0;
        }
        
        .section-header h5 {
          margin: 0;
          font-weight: 700;
          font-size: 1.25rem;
          color: #e0e7ff;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .section-header i {
          font-size: 1.5rem;
          color: #a78bfa;
        }
        
        .section-body {
          padding: 2rem;
        }
        
        /* Premium Form Labels */
        .premium-form-label {
          font-weight: 600;
          color: #cbd5e1;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .premium-form-label i.info-icon {
          color: #60a5fa;
          font-size: 1rem;
          cursor: help;
          opacity: 0.7;
          transition: opacity 0.2s;
        }
        
        .premium-form-label i.info-icon:hover {
          opacity: 1;
        }
        
        /* Premium Inputs with Glow Focus */
        .premium-input {
          border: 2px solid rgba(148, 163, 184, 0.3);
          border-radius: 12px;
          padding: 0.875rem 1rem;
          font-size: 1rem;
          background: rgba(15, 23, 42, 0.6);
          color: #f1f5f9;
          transition: all 0.3s ease;
        }
        
        .premium-input:focus {
          border-color: #6366f1;
          box-shadow: 
            0 0 0 3px rgba(99, 102, 241, 0.15),
            0 0 15px rgba(99, 102, 241, 0.4);
          outline: none;
          background: rgba(15, 23, 42, 0.8);
          transform: translateY(-1px);
        }
        
        .premium-input::placeholder {
          color: #64748b;
        }
        
        /* Premium Buttons with Gradient & Glow */
        .premium-btn {
          border-radius: 12px;
          padding: 0.875rem 2rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          border: none;
          position: relative;
          overflow: hidden;
        }
        
        .premium-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        
        .premium-btn:hover::before {
          width: 300px;
          height: 300px;
        }
        
        .premium-btn span {
          position: relative;
          z-index: 1;
        }
        
        .premium-btn-primary {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
        }
        
        .premium-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.6);
        }
        
        .premium-btn-success {
          background: linear-gradient(135deg, #16a34a 0%, #22c55e 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(34, 197, 94, 0.4);
        }
        
        .premium-btn-success:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 25px rgba(34, 197, 94, 0.6);
        }
        
        .premium-btn-danger {
          background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);
        }
        
        .premium-btn-danger:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 25px rgba(239, 68, 68, 0.6);
        }
        
        /* Animated Summary Cards */
        .premium-summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }
        
        .premium-summary-card {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 1.5rem;
          text-align: center;
          border: 2px solid transparent;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .premium-summary-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: currentColor;
          opacity: 0;
          transition: opacity 0.3s;
        }
        
        .premium-summary-card:hover {
          transform: translateY(-8px) scale(1.03);
          border-color: currentColor;
        }
        
        .premium-summary-card:hover::before {
          opacity: 1;
          animation: shimmer 1.5s infinite;
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .premium-summary-card.cyan {
          color: #06b6d4;
          border-color: rgba(6, 182, 212, 0.2);
        }
        
        .premium-summary-card.amber {
          color: #f59e0b;
          border-color: rgba(245, 158, 11, 0.2);
        }
        
        .premium-summary-card.violet {
          color: #8b5cf6;
          border-color: rgba(139, 92, 246, 0.2);
        }
        
        .premium-summary-card.emerald {
          color: #10b981;
          border-color: rgba(16, 185, 129, 0.2);
        }
        
        .summary-icon {
          font-size: 2.5rem;
          margin-bottom: 0.75rem;
          opacity: 0.9;
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .premium-summary-value {
          font-size: 2.25rem;
          font-weight: 800;
          color: currentColor;
          margin: 0.5rem 0;
          font-family: 'Inter', system-ui, sans-serif;
          animation: countUp 0.8s ease-out;
        }
        
        @keyframes countUp {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .premium-summary-label {
          font-size: 0.875rem;
          color: #94a3b8;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .premium-summary-sub {
          font-size: 0.75rem;
          color: #64748b;
          margin-top: 0.5rem;
          font-style: italic;
        }
        
        /* Live Update Pulse Animation */
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0px currentColor; }
          50% { box-shadow: 0 0 20px currentColor; }
        }
        
        .updating {
          animation: pulse-glow 1s ease-in-out;
        }
        
        /* Floating AI Assist Button */
        .ai-assist-btn {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          border: none;
          box-shadow: 0 8px 30px rgba(99, 102, 241, 0.5);
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.75rem;
        }
        
        .ai-assist-btn:hover {
          transform: scale(1.1) rotate(10deg);
          box-shadow: 0 12px 40px rgba(99, 102, 241, 0.7);
        }
        
        .ai-assist-btn::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 50%;
          border: 2px solid rgba(99, 102, 241, 0.5);
          animation: ripple 2s infinite;
        }
        
        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        /* Auto-save Indicator */
        .auto-save-indicator {
          position: fixed;
          top: 2rem;
          right: 2rem;
          background: rgba(16, 185, 129, 0.9);
          backdrop-filter: blur(10px);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
          z-index: 999;
          animation: slideInRight 0.5s ease-out;
        }
        
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        /* ===== DRAFT MANAGEMENT UI ===== */
        
        /* Draft Restore Modal Overlay */
        .draft-modal-overlay {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          z-index: 9999;
          animation: fadeIn 0.3s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        /* Draft Modal Card */
        .draft-modal-card {
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          color: white;
          border-radius: 16px;
          padding: 2rem;
          width: 90%;
          max-width: 420px;
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(255, 255, 255, 0.1);
          animation: slideUp 0.3s ease-out;
        }
        
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .draft-modal-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: rgba(255, 255, 255, 0.95);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .draft-modal-text {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        
        .draft-modal-timestamp {
          font-size: 0.8rem;
          color: rgba(139, 92, 246, 0.9);
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .draft-modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 0.75rem;
        }
        
        .draft-btn {
          padding: 0.625rem 1.25rem;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .draft-btn-discard {
          background: rgba(239, 68, 68, 0.15);
          color: #fca5a5;
          border: 1px solid rgba(239, 68, 68, 0.3);
        }
        
        .draft-btn-discard:hover {
          background: rgba(239, 68, 68, 0.25);
          transform: translateY(-1px);
        }
        
        .draft-btn-restore {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
        }
        
        .draft-btn-restore:hover {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(59, 130, 246, 0.5);
        }
        
        /* Draft Control Buttons (in toolbar) */
        .draft-control-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          font-size: 0.85rem;
          font-weight: 600;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .draft-save-btn {
          background: rgba(34, 197, 94, 0.15);
          color: #4ade80;
          border: 1px solid rgba(34, 197, 94, 0.3);
        }
        
        .draft-save-btn:hover {
          background: rgba(34, 197, 94, 0.25);
          transform: translateY(-1px);
        }
        
        .draft-clear-btn {
          background: rgba(239, 68, 68, 0.1);
          color: #fca5a5;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }
        
        .draft-clear-btn:hover {
          background: rgba(239, 68, 68, 0.2);
          transform: translateY(-1px);
        }
        
        .draft-indicator {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.375rem 0.75rem;
          font-size: 0.75rem;
          color: rgba(139, 92, 246, 0.9);
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 20px;
          animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        /* AI Insights Bar */
        .ai-insights-bar {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%);
          border-left: 4px solid #8b5cf6;
          border-radius: 12px;
          padding: 1.25rem 1.5rem;
          margin-top: 1.5rem;
          color: #cbd5e1;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        
        .ai-insights-bar i {
          color: #a78bfa;
          margin-right: 0.5rem;
        }
        
        .ai-insights-bar strong {
          color: #e0e7ff;
          font-weight: 700;
        }
        
        /* Collapsible Section */
        .collapsible-header {
          cursor: pointer;
          user-select: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .collapsible-header i.chevron {
          transition: transform 0.3s ease;
        }
        
        .collapsible-header.collapsed i.chevron {
          transform: rotate(-90deg);
        }
        
        .collapsible-content {
          max-height: 5000px;
          overflow: hidden;
          transition: max-height 0.5s ease-in-out;
        }
        
        .collapsible-content.collapsed {
          max-height: 0;
        }
        
        /* Dark mode refinements */
        [data-bs-theme="dark"] .premium-card {
          background: rgba(30, 41, 59, 0.8);
        }
        
        [data-bs-theme="dark"] .premium-input {
          background: rgba(15, 23, 42, 0.8);
          color: #f1f5f9;
          border-color: rgba(71, 85, 105, 0.4);
        }
        
        /* ===== PREMIUM DATAGRID STYLING ===== */
        
        /* DataGrid Header Bar */
        .premium-datagrid-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 2rem;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%);
          border-radius: 16px;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(139, 92, 246, 0.2);
        }
        
        .datagrid-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.25rem;
          font-weight: 700;
        }
        
        .datagrid-title i {
          font-size: 1.5rem;
          color: #8b5cf6;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .items-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 32px;
          height: 32px;
          padding: 0 12px;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 700;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
        }
        
        .premium-add-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
        }
        
        .premium-add-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.5);
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
        }
        
        .premium-add-btn:active {
          transform: translateY(0);
        }
        
        /* Empty State */
        .empty-state {
          text-align: center;
          padding: 4rem 2rem;
          background: rgba(99, 102, 241, 0.05);
          border-radius: 16px;
          border: 2px dashed rgba(139, 92, 246, 0.3);
        }
        
        .empty-icon {
          font-size: 4rem;
          color: rgba(139, 92, 246, 0.4);
          margin-bottom: 1rem;
        }
        
        .empty-state h5 {
          color: rgba(255, 255, 255, 0.9);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        
        .empty-state p {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.95rem;
        }
        
        /* DataGrid Wrapper with Scroll */
        .premium-datagrid-wrapper {
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          overflow: hidden;
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }
        
        .premium-datagrid {
          max-height: 600px;
          overflow-y: auto;
          overflow-x: auto;
        }
        
        /* Custom Scrollbar */
        .premium-datagrid::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        .premium-datagrid::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
          border-radius: 10px;
        }
        
        .premium-datagrid::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          border-radius: 10px;
        }
        
        .premium-datagrid::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%);
        }
        
        /* DataGrid Table */
        .datagrid-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          font-size: 0.9rem;
        }
        
        /* Sticky Header */
        .datagrid-header-sticky {
          position: sticky;
          top: 0;
          z-index: 10;
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.95) 100%);
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }
        
        .datagrid-header-sticky th {
          padding: 1rem 0.75rem;
          font-weight: 700;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 2px solid rgba(139, 92, 246, 0.5);
          background: transparent;
        }
        
        .th-content {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.9);
        }
        
        .th-content i {
          font-size: 0.9rem;
          color: #8b5cf6;
        }
        
        /* Column-specific styling */
        .col-text { min-width: 200px; }
        .col-numeric { min-width: 100px; text-align: center; }
        .col-select { min-width: 160px; }
        .col-calculated { min-width: 100px; text-align: center; }
        .col-total { min-width: 120px; text-align: center; }
        .col-action { width: 80px; text-align: center; }
        
        /* Table Body */
        .datagrid-body {
          background: transparent;
        }
        
        .datagrid-row {
          transition: all 0.2s ease;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .datagrid-row:hover {
          background: rgba(139, 92, 246, 0.08);
          transform: scale(1.005);
          box-shadow: 0 2px 8px rgba(139, 92, 246, 0.15);
        }
        
        .datagrid-row td {
          padding: 0.75rem;
          vertical-align: middle;
        }
        
        /* Input Fields */
        .datagrid-input {
          width: 100%;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 8px;
          padding: 0.5rem 0.75rem;
          color: rgba(255, 255, 255, 0.95);
          font-size: 0.9rem;
          transition: all 0.2s ease;
        }
        
        .datagrid-input:focus {
          outline: none;
          background: rgba(30, 41, 59, 0.8);
          border-color: #8b5cf6;
          box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.15);
        }
        
        .input-text {
          font-weight: 500;
        }
        
        .input-numeric {
          text-align: center;
          font-family: 'Courier New', monospace;
          font-weight: 600;
        }
        
        /* Select Dropdown */
        .datagrid-select {
          width: 100%;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 8px;
          padding: 0.5rem 0.75rem;
          color: rgba(255, 255, 255, 0.95);
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .datagrid-select:focus {
          outline: none;
          background: rgba(30, 41, 59, 0.8);
          border-color: #8b5cf6;
          box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.15);
        }
        
        .datagrid-select option {
          background: #1e293b;
          color: white;
        }
        
        /* Calculated Values */
        .calculated-value {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.4rem 0.75rem;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(99, 102, 241, 0.15) 100%);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 8px;
          color: #60a5fa;
          font-weight: 700;
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          min-width: 70px;
        }
        
        .total-value {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(5, 150, 105, 0.2) 100%);
          border: 1px solid rgba(16, 185, 129, 0.4);
          border-radius: 10px;
          color: #34d399;
          font-weight: 800;
          font-family: 'Courier New', monospace;
          font-size: 1rem;
          min-width: 80px;
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.2);
        }
        
        /* Delete Button */
        .delete-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: 8px;
          color: #ef4444;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .delete-btn:hover {
          background: rgba(239, 68, 68, 0.2);
          border-color: #ef4444;
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
        }
        
        .delete-btn:active {
          transform: scale(0.95);
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .premium-header {
            padding: 1rem;
          }
          
          .premium-header h1 {
            font-size: 1.125rem;
          }
          
          .header-subtitle {
            font-size: 0.8rem;
          }
          
          .header-icon-box {
            padding: 0.5rem;
          }
          
          .header-icon-box i {
            font-size: 1rem;
          }
          
          .premium-badge {
            font-size: 0.8rem;
            padding: 0.25rem 0.625rem;
          }
          
          .premium-badge i {
            font-size: 0.7rem;
          }
          
          .premium-summary-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          
          .ai-assist-btn {
            width: 50px;
            height: 50px;
            font-size: 1.5rem;
          }
          
          .premium-datagrid-header {
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
          }
          
          .datagrid-title {
            font-size: 1rem;
          }
          
          .premium-add-btn {
            width: 100%;
            justify-content: center;
          }
          
          .datagrid-table {
            font-size: 0.8rem;
          }
          
          .datagrid-header-sticky th {
            padding: 0.75rem 0.5rem;
            font-size: 0.7rem;
          }
          
          .col-text { min-width: 150px; }
          .col-numeric { min-width: 80px; }
          .col-select { min-width: 120px; }
        }
        
        @media (max-width: 480px) {
          .premium-summary-grid {
            grid-template-columns: 1fr;
          }
          
          .premium-datagrid {
            max-height: 400px;
          }
        }
      `}),v&&e.jsx("div",{className:"draft-modal-overlay",onClick:()=>I(!1),children:e.jsxs("div",{className:"draft-modal-card",onClick:s=>s.stopPropagation(),children:[e.jsxs("div",{className:"draft-modal-title",children:[e.jsx("i",{className:"bi bi-clock-history"}),"Restore Saved Draft?"]}),e.jsx("p",{className:"draft-modal-text",children:"We found a previously saved draft. Would you like to continue editing it?"}),R&&e.jsxs("div",{className:"draft-modal-timestamp",children:[e.jsx("i",{className:"bi bi-calendar-check"}),"Saved ",new Date(R).toLocaleString()]}),e.jsxs("div",{className:"draft-modal-actions",children:[e.jsxs("button",{className:"draft-btn draft-btn-discard",onClick:re,children:[e.jsx("i",{className:"bi bi-trash3 me-1"}),"Discard"]}),e.jsxs("button",{className:"draft-btn draft-btn-restore",onClick:ee,children:[e.jsx("i",{className:"bi bi-arrow-clockwise me-1"}),"Restore Draft"]})]})]})}),e.jsx("button",{className:"ai-assist-btn",onClick:Z,title:"AI Suggestions",children:e.jsx("i",{className:"bi bi-stars"})}),e.jsx("div",{className:"premium-calc-container",children:e.jsxs("div",{className:"container-fluid",style:{maxWidth:"1400px"},children:[e.jsxs("div",{className:"premium-card mb-4",children:[e.jsx("div",{className:"premium-header",children:e.jsxs("div",{className:"header-layout",children:[e.jsxs("div",{className:"header-left",children:[e.jsx("div",{className:"header-icon-box",children:e.jsx("i",{className:"bi bi-calculator-fill"})}),e.jsxs("div",{className:"header-text",children:[e.jsx("h1",{children:"Premium Calculator"}),e.jsx("p",{className:"header-subtitle",children:"Professional Aluminium & Glass Estimation"})]})]}),e.jsxs("div",{className:"header-badges",children:[e.jsxs("span",{className:"premium-badge",children:[e.jsx("i",{className:"bi bi-shield-check"}),e.jsx("span",{children:"Enterprise Grade"})]}),e.jsxs("span",{className:"premium-badge",children:[e.jsx("i",{className:"bi bi-graph-up"}),e.jsx("span",{children:"Real-time Calc"})]}),e.jsxs("span",{className:"premium-badge",children:[e.jsx("i",{className:"bi bi-stars"}),e.jsx("span",{children:"AI-Powered"})]})]})]})}),e.jsxs("div",{className:"d-flex justify-content-end align-items-center gap-2 mt-3 px-3 pb-3",children:[R&&e.jsxs("span",{className:"draft-indicator",children:[e.jsx("i",{className:"bi bi-check-circle-fill"}),"Draft saved ",new Date(R).toLocaleTimeString()]}),e.jsxs("button",{className:"draft-control-btn draft-save-btn",onClick:J,title:"Save current data as draft",children:[e.jsx("i",{className:"bi bi-floppy"}),"Save Template"]}),R&&e.jsxs("button",{className:"draft-control-btn draft-clear-btn",onClick:re,title:"Clear saved draft",children:[e.jsx("i",{className:"bi bi-trash3"}),"Clear Template"]})]})]}),e.jsxs("div",{className:"premium-card mb-4",children:[e.jsxs("div",{className:"section-header",children:[e.jsx("i",{className:"bi bi-building-fill"}),e.jsx("h5",{children:"Company Information"})]}),e.jsx("div",{className:"section-body",children:e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Company Name"}),e.jsx("input",{type:"text",className:"form-control",value:y.name,onChange:s=>k({...y,name:s.target.value})})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Address"}),e.jsx("input",{type:"text",className:"form-control",value:y.address,onChange:s=>k({...y,address:s.target.value})})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Phone"}),e.jsx("input",{type:"text",className:"form-control",value:y.phone,onChange:s=>k({...y,phone:s.target.value})})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Email"}),e.jsx("input",{type:"email",className:"form-control",value:y.email,onChange:s=>k({...y,email:s.target.value})})]})]})})]}),e.jsxs("div",{className:"premium-card mb-4",children:[e.jsxs("div",{className:"section-header",children:[e.jsx("i",{className:"bi bi-person-circle"}),e.jsx("h5",{children:"Customer Information"})]}),e.jsx("div",{className:"section-body",children:e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsxs("label",{className:"premium-form-label",children:[e.jsx("i",{className:"bi bi-person-badge-fill"}),"Customer Name"]}),e.jsx("input",{type:"text",className:"form-control premium-input",value:N.name,onChange:s=>f({...N,name:s.target.value}),placeholder:"Enter customer name..."})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("label",{className:"premium-form-label",children:[e.jsx("i",{className:"bi bi-geo-alt-fill"}),"Address"]}),e.jsx("input",{type:"text",className:"form-control premium-input",value:N.address,onChange:s=>f({...N,address:s.target.value}),placeholder:"Enter address..."})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("label",{className:"premium-form-label",children:[e.jsx("i",{className:"bi bi-telephone-fill"}),"Phone"]}),e.jsx("input",{type:"text",className:"form-control premium-input",value:N.phone,onChange:s=>f({...N,phone:s.target.value}),placeholder:"Enter phone number..."})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("label",{className:"premium-form-label",children:[e.jsx("i",{className:"bi bi-envelope-fill"}),"Email"]}),e.jsx("input",{type:"email",className:"form-control premium-input",value:N.email,onChange:s=>f({...N,email:s.target.value}),placeholder:"Enter email..."})]})]})})]}),e.jsxs("div",{className:"premium-card mb-4",children:[e.jsxs("div",{className:"section-header collapsible-header",onClick:()=>j({...d,settings:!d.settings}),children:[e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx("i",{className:"bi bi-sliders"}),e.jsx("h5",{children:"Default Settings & Rates"})]}),e.jsx("i",{className:`bi bi-chevron-down chevron ${d.settings?"collapsed":""}`})]}),e.jsxs("div",{className:`collapsible-content section-body ${d.settings?"collapsed":""}`,children:[e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-md-3",children:[e.jsxs("label",{className:"premium-form-label",children:[e.jsx("i",{className:"bi bi-layers-fill"}),"Default Glass Type",e.jsx("i",{className:"bi bi-info-circle info-icon",title:"Select default glass thickness for all items"})]}),e.jsx("select",{className:"form-select premium-input",value:n,onChange:s=>o(s.target.value),children:Object.keys(Pe).map(s=>e.jsx("option",{value:s,children:s},s))})]}),e.jsxs("div",{className:"col-md-3",children:[e.jsxs("label",{className:"premium-form-label",children:[e.jsx("i",{className:"bi bi-columns-gap"}),"Default Profile Type",e.jsx("i",{className:"bi bi-info-circle info-icon",title:"Choose aluminum profile series"})]}),e.jsx("select",{className:"form-select premium-input",value:a,onChange:s=>l(s.target.value),children:Object.keys(Ae).map(s=>e.jsx("option",{value:s,children:s},s))})]}),e.jsxs("div",{className:"col-md-3",children:[e.jsxs("label",{className:"premium-form-label",children:[e.jsx("i",{className:"bi bi-currency-rupee"}),"Rate per kg (₹)",e.jsx("i",{className:"bi bi-info-circle info-icon",title:"Enter the aluminum rate per kg as per your supplier"})]}),e.jsx("input",{type:"number",className:"form-control premium-input",value:u,onChange:s=>b(s.target.value),placeholder:"Enter rate..."})]}),e.jsx("div",{className:"col-md-3",children:e.jsxs("div",{className:"form-check mt-5",children:[e.jsx("input",{className:"form-check-input",type:"checkbox",id:"showOnlyTotals",checked:r,onChange:s=>h(s.target.checked),style:{cursor:"pointer"}}),e.jsx("label",{className:"form-check-label premium-form-label",htmlFor:"showOnlyTotals",style:{cursor:"pointer"},children:"Show only totals"})]})})]}),e.jsxs("div",{className:"ai-insights-bar",children:[e.jsx("i",{className:"bi bi-lightbulb-fill"}),e.jsx("strong",{children:"AI Insight:"})," Using ",e.jsx("strong",{children:a})," with ",e.jsx("strong",{children:n})," glass provides optimal strength-to-weight ratio. Average project cost: ",e.jsxs("strong",{children:["₹",u?(parseFloat(u)*150).toLocaleString():"---"]})," per sqm."]})]})]}),!r&&e.jsxs("div",{className:"premium-card mb-4",children:[e.jsxs("div",{className:"section-header collapsible-header",onClick:()=>j({...d,items:!d.items}),children:[e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx("i",{className:"bi bi-box-seam-fill"}),e.jsx("h5",{children:"Items & Calculations"}),e.jsxs("span",{className:"badge bg-primary ms-2",children:[c.length," Items"]})]}),e.jsx("i",{className:`bi bi-chevron-down chevron ${d.items?"collapsed":""}`})]}),e.jsxs("div",{className:`collapsible-content section-body ${d.items?"collapsed":""}`,children:[e.jsxs("div",{className:"premium-datagrid-header",children:[e.jsxs("div",{className:"datagrid-title",children:[e.jsx("i",{className:"bi bi-grid-3x3-gap me-2"}),e.jsx("span",{className:"gradient-text",children:"Estimatix Premium DataGrid"}),e.jsx("span",{className:"items-badge",children:c.length})]}),e.jsxs("button",{className:"premium-add-btn",onClick:H,children:[e.jsx("i",{className:"bi bi-plus-lg me-2"}),"Add New Item"]})]}),c.length===0?e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-icon",children:e.jsx("i",{className:"bi bi-inbox"})}),e.jsx("h5",{children:"No Items Yet"}),e.jsx("p",{children:'Click "Add New Item" to start building your quotation'})]}):e.jsx("div",{className:"premium-datagrid-wrapper",children:e.jsx("div",{className:"premium-datagrid",children:e.jsxs("table",{className:"datagrid-table",children:[e.jsx("thead",{className:"datagrid-header-sticky",children:e.jsxs("tr",{children:[e.jsx("th",{className:"col-text",children:e.jsxs("div",{className:"th-content",children:[e.jsx("i",{className:"bi bi-tag-fill"}),e.jsx("span",{children:"Item Name"})]})}),e.jsx("th",{className:"col-numeric",children:e.jsxs("div",{className:"th-content",children:[e.jsx("i",{className:"bi bi-arrows-expand"}),e.jsx("span",{children:"Width (m)"})]})}),e.jsx("th",{className:"col-numeric",children:e.jsxs("div",{className:"th-content",children:[e.jsx("i",{className:"bi bi-arrows-vertical"}),e.jsx("span",{children:"Height (m)"})]})}),e.jsx("th",{className:"col-numeric",children:e.jsxs("div",{className:"th-content",children:[e.jsx("i",{className:"bi bi-hash"}),e.jsx("span",{children:"Qty"})]})}),e.jsx("th",{className:"col-select",children:e.jsxs("div",{className:"th-content",children:[e.jsx("i",{className:"bi bi-gem"}),e.jsx("span",{children:"Glass Type"})]})}),e.jsx("th",{className:"col-select",children:e.jsxs("div",{className:"th-content",children:[e.jsx("i",{className:"bi bi-box"}),e.jsx("span",{children:"Profile Type"})]})}),e.jsx("th",{className:"col-calculated",children:e.jsxs("div",{className:"th-content",children:[e.jsx("i",{className:"bi bi-droplet"}),e.jsx("span",{children:"Glass Wt"})]})}),e.jsx("th",{className:"col-calculated",children:e.jsxs("div",{className:"th-content",children:[e.jsx("i",{className:"bi bi-box-seam"}),e.jsx("span",{children:"Profile Wt"})]})}),e.jsx("th",{className:"col-total",children:e.jsxs("div",{className:"th-content",children:[e.jsx("i",{className:"bi bi-calculator"}),e.jsx("span",{children:"Total (kg)"})]})}),e.jsx("th",{className:"col-action",children:e.jsxs("div",{className:"th-content",children:[e.jsx("i",{className:"bi bi-gear"}),e.jsx("span",{children:"Action"})]})})]})}),e.jsx("tbody",{className:"datagrid-body",children:c.map((s,w)=>{const{glassWeight:C,profileWeight:W}=E(s);return e.jsxs("tr",{className:"datagrid-row",children:[e.jsx("td",{className:"col-text",children:e.jsx("input",{type:"text",className:"datagrid-input input-text",value:s.name,onChange:T=>$(s.id,"name",T.target.value),placeholder:"Enter item name..."})}),e.jsx("td",{className:"col-numeric",children:e.jsx("input",{type:"number",className:"datagrid-input input-numeric",value:s.width,onChange:T=>$(s.id,"width",parseFloat(T.target.value)||0),step:"0.01",min:"0"})}),e.jsx("td",{className:"col-numeric",children:e.jsx("input",{type:"number",className:"datagrid-input input-numeric",value:s.height,onChange:T=>$(s.id,"height",parseFloat(T.target.value)||0),step:"0.01",min:"0"})}),e.jsx("td",{className:"col-numeric",children:e.jsx("input",{type:"number",className:"datagrid-input input-numeric",value:s.quantity,onChange:T=>$(s.id,"quantity",parseInt(T.target.value)||1),min:"1"})}),e.jsx("td",{className:"col-select",children:e.jsxs("select",{className:"datagrid-select",value:s.glassType,onChange:T=>$(s.id,"glassType",T.target.value),children:[e.jsx("option",{value:"",children:"Default"}),Object.keys(Pe).map(T=>e.jsx("option",{value:T,children:T},T))]})}),e.jsx("td",{className:"col-select",children:e.jsxs("select",{className:"datagrid-select",value:s.profileType,onChange:T=>$(s.id,"profileType",T.target.value),children:[e.jsx("option",{value:"",children:"Default"}),Object.keys(Ae).map(T=>e.jsx("option",{value:T,children:T},T))]})}),e.jsx("td",{className:"col-calculated",children:e.jsx("div",{className:"calculated-value",children:C.toFixed(2)})}),e.jsx("td",{className:"col-calculated",children:e.jsx("div",{className:"calculated-value",children:W.toFixed(2)})}),e.jsx("td",{className:"col-total",children:e.jsx("div",{className:"total-value",children:(C+W).toFixed(2)})}),e.jsx("td",{className:"col-action",children:e.jsx("button",{className:"delete-btn",onClick:()=>K(s.id),title:"Delete item",children:e.jsx("i",{className:"bi bi-trash3"})})})]},s.id)})})]})})})]})]}),e.jsxs("div",{className:"premium-card mb-4",children:[e.jsxs("div",{className:"section-header collapsible-header",onClick:()=>j({...d,summary:!d.summary}),children:[e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx("i",{className:"bi bi-pie-chart-fill"}),e.jsx("h5",{children:"Project Summary & Analysis"})]}),e.jsx("i",{className:`bi bi-chevron-down chevron ${d.summary?"collapsed":""}`})]}),e.jsxs("div",{className:`collapsible-content section-body ${d.summary?"collapsed":""}`,children:[e.jsxs("div",{className:"premium-summary-grid",children:[e.jsxs("div",{className:"premium-summary-card cyan",children:[e.jsx("div",{className:"summary-icon",children:e.jsx("i",{className:"bi bi-grid-3x3-gap-fill"})}),e.jsx("div",{className:"premium-summary-value",children:S.totalGlassArea.toFixed(2)}),e.jsx("div",{className:"premium-summary-label",children:"Glass Area (m²)"}),e.jsxs("div",{className:"premium-summary-sub",children:["Across ",c.length," items"]})]}),e.jsxs("div",{className:"premium-summary-card amber",children:[e.jsx("div",{className:"summary-icon",children:e.jsx("i",{className:"bi bi-box-seam-fill"})}),e.jsx("div",{className:"premium-summary-value",children:S.totalWeight.toFixed(2)}),e.jsx("div",{className:"premium-summary-label",children:"Frame Weight (kg)"}),e.jsx("div",{className:"premium-summary-sub",children:"Combined aluminum"})]}),e.jsxs("div",{className:"premium-summary-card violet",children:[e.jsx("div",{className:"summary-icon",children:e.jsx("i",{className:"bi bi-rulers"})}),e.jsx("div",{className:"premium-summary-value",children:S.totalProfileLength.toFixed(2)}),e.jsx("div",{className:"premium-summary-label",children:"Profile Length (m)"}),e.jsx("div",{className:"premium-summary-sub",children:"Total perimeter"})]}),e.jsxs("div",{className:"premium-summary-card emerald updating",children:[e.jsx("div",{className:"summary-icon",children:e.jsx("i",{className:"bi bi-currency-rupee"})}),e.jsxs("div",{className:"premium-summary-value",children:["₹",(S.grandTotal||0).toLocaleString("en-IN",{maximumFractionDigits:2})]}),e.jsx("div",{className:"premium-summary-label",children:"Grand Total"}),e.jsx("div",{className:"premium-summary-sub",children:"Inc. GST @ 18%"})]})]}),e.jsxs("div",{className:"ai-insights-bar mt-4",children:[e.jsx("i",{className:"bi bi-robot"}),e.jsx("strong",{children:"AI Analysis:"})," This configuration achieves",e.jsxs("strong",{children:[" ",(S.totalWeight/S.totalGlassArea||0).toFixed(2)," kg/m²"]})," frame density, which is ",e.jsx("strong",{children:(S.totalWeight/S.totalGlassArea||0)<25?"15% lighter":"standard"})," compared to typical installations. Estimated material efficiency: ",e.jsx("strong",{children:c.length>0?"92%":"--"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsxs("h6",{className:"premium-form-label mb-3",children:[e.jsx("i",{className:"bi bi-table"}),"Detailed Breakdown"]}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-dark table-hover",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"table-primary",children:[e.jsx("th",{children:"Component"}),e.jsx("th",{className:"text-end",children:"Value"}),e.jsx("th",{className:"text-end",children:"Amount (₹)"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("i",{className:"bi bi-layers me-2 text-cyan"}),"Glass Area"]}),e.jsxs("td",{className:"text-end",children:[S.totalGlassArea.toFixed(2)," m²"]}),e.jsx("td",{className:"text-end",children:"--"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("i",{className:"bi bi-box me-2 text-amber"}),"Aluminum Weight"]}),e.jsxs("td",{className:"text-end",children:[S.totalWeight.toFixed(2)," kg"]}),e.jsxs("td",{className:"text-end",children:["₹",(S.subtotal||0).toLocaleString("en-IN",{maximumFractionDigits:2})]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("i",{className:"bi bi-percent me-2 text-warning"}),"GST (18%)"]}),e.jsx("td",{className:"text-end",children:"--"}),e.jsxs("td",{className:"text-end",children:["₹",(S.gst||0).toLocaleString("en-IN",{maximumFractionDigits:2})]})]}),e.jsxs("tr",{className:"table-success",children:[e.jsxs("td",{className:"fw-bold",children:[e.jsx("i",{className:"bi bi-currency-rupee me-2"}),"Grand Total"]}),e.jsx("td",{className:"text-end fw-bold",children:"--"}),e.jsxs("td",{className:"text-end fw-bold fs-5",children:["₹",(S.grandTotal||0).toLocaleString("en-IN",{maximumFractionDigits:2})]})]})]})]})})]}),e.jsxs("div",{className:"row g-3 mt-4",children:[e.jsx("div",{className:"col-md-6",children:e.jsx("button",{className:"premium-btn premium-btn-success w-100",onClick:ie,disabled:c.length===0,children:e.jsxs("span",{children:[e.jsx("i",{className:"bi bi-file-earmark-excel me-2"}),"Export to Excel"]})})}),e.jsx("div",{className:"col-md-6",children:e.jsx("button",{className:"premium-btn premium-btn-danger w-100",onClick:te,disabled:c.length===0,children:e.jsxs("span",{children:[e.jsx("i",{className:"bi bi-file-earmark-pdf me-2"}),"Generate Premium PDF"]})})})]})]})]})]})})]})}function ds(){const{user:c}=Q(),[i,n]=g.useState({glassRatePerM2:350,aluminiumRatePerKg:280,accessoryRatePerItem:150,laborChargePercent:15,gstPercent:18,companyMarkupPercent:20}),[o,a]=g.useState({currentYear:new Date().getFullYear(),currentSequence:1,prefix:"VEN"}),[l,r]=g.useState("");g.useEffect(()=>{const d=localStorage.getItem("admin_pricing_settings"),j=localStorage.getItem("admin_invoice_settings");d&&n(JSON.parse(d)),j&&a(JSON.parse(j))},[]);const h=()=>{localStorage.setItem("admin_pricing_settings",JSON.stringify(i)),localStorage.setItem("admin_invoice_settings",JSON.stringify(o)),r("Settings saved successfully!"),setTimeout(()=>r(""),3e3)},u=()=>{n({glassRatePerM2:350,aluminiumRatePerKg:280,accessoryRatePerItem:150,laborChargePercent:15,gstPercent:18,companyMarkupPercent:20}),r("Settings reset to defaults!"),setTimeout(()=>r(""),3e3)},b=()=>{const d=o.currentSequence.toString().padStart(3,"0");return`${o.prefix}${o.currentYear}-${d}`};return e.jsx("div",{className:"container py-4",children:e.jsx("div",{className:"row",children:e.jsxs("div",{className:"col-12",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[e.jsxs("h1",{className:"h3 text-primary",children:[e.jsx("i",{className:"bi bi-gear-fill me-2"}),"Admin Settings"]}),e.jsxs("div",{className:"d-flex gap-2",children:[e.jsxs("button",{className:"btn btn-outline-secondary",onClick:u,children:[e.jsx("i",{className:"bi bi-arrow-clockwise me-1"}),"Reset to Defaults"]}),e.jsxs("button",{className:"btn btn-primary",onClick:h,children:[e.jsx("i",{className:"bi bi-check-circle me-1"}),"Save Settings"]})]})]}),l&&e.jsxs("div",{className:"alert alert-success alert-dismissible fade show",role:"alert",children:[e.jsx("i",{className:"bi bi-check-circle-fill me-2"}),l]}),e.jsxs("div",{className:"alert alert-info mb-4",children:[e.jsxs("h6",{className:"alert-heading",children:[e.jsx("i",{className:"bi bi-info-circle me-2"}),"Admin Access"]}),e.jsxs("p",{className:"mb-0",children:["Logged in as: ",e.jsx("strong",{children:c?.email})," | These settings will apply to all quotations system-wide."]})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-8",children:e.jsxs("div",{className:"card mb-4",children:[e.jsx("div",{className:"card-header bg-primary text-white",children:e.jsxs("h5",{className:"card-title mb-0",children:[e.jsx("i",{className:"bi bi-currency-rupee me-2"}),"Unit Pricing Configuration"]})}),e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Glass Rate (₹ per m²)"}),e.jsxs("div",{className:"input-group",children:[e.jsx("span",{className:"input-group-text",children:"₹"}),e.jsx("input",{type:"number",className:"form-control",value:i.glassRatePerM2,onChange:d=>n({...i,glassRatePerM2:parseFloat(d.target.value)||0}),min:"0",step:"0.01"}),e.jsx("span",{className:"input-group-text",children:"per m²"})]})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Aluminium Rate (₹ per kg)"}),e.jsxs("div",{className:"input-group",children:[e.jsx("span",{className:"input-group-text",children:"₹"}),e.jsx("input",{type:"number",className:"form-control",value:i.aluminiumRatePerKg,onChange:d=>n({...i,aluminiumRatePerKg:parseFloat(d.target.value)||0}),min:"0",step:"0.01"}),e.jsx("span",{className:"input-group-text",children:"per kg"})]})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Accessory Rate (₹ per item)"}),e.jsxs("div",{className:"input-group",children:[e.jsx("span",{className:"input-group-text",children:"₹"}),e.jsx("input",{type:"number",className:"form-control",value:i.accessoryRatePerItem,onChange:d=>n({...i,accessoryRatePerItem:parseFloat(d.target.value)||0}),min:"0",step:"0.01"}),e.jsx("span",{className:"input-group-text",children:"per item"})]})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Labor Charge (%)"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"number",className:"form-control",value:i.laborChargePercent,onChange:d=>n({...i,laborChargePercent:parseFloat(d.target.value)||0}),min:"0",max:"100",step:"0.1"}),e.jsx("span",{className:"input-group-text",children:"%"})]})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"GST Rate (%)"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"number",className:"form-control",value:i.gstPercent,onChange:d=>n({...i,gstPercent:parseFloat(d.target.value)||0}),min:"0",max:"100",step:"0.1"}),e.jsx("span",{className:"input-group-text",children:"%"})]})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Company Markup (%)"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"number",className:"form-control",value:i.companyMarkupPercent,onChange:d=>n({...i,companyMarkupPercent:parseFloat(d.target.value)||0}),min:"0",max:"100",step:"0.1"}),e.jsx("span",{className:"input-group-text",children:"%"})]})]})]})})]})}),e.jsxs("div",{className:"col-lg-4",children:[e.jsxs("div",{className:"card mb-4",children:[e.jsx("div",{className:"card-header bg-success text-white",children:e.jsxs("h5",{className:"card-title mb-0",children:[e.jsx("i",{className:"bi bi-receipt me-2"}),"Invoice Settings"]})}),e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Invoice Prefix"}),e.jsx("input",{type:"text",className:"form-control",value:o.prefix,onChange:d=>a({...o,prefix:d.target.value.toUpperCase()}),maxLength:5})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Current Year"}),e.jsx("input",{type:"number",className:"form-control",value:o.currentYear,onChange:d=>a({...o,currentYear:parseInt(d.target.value)||new Date().getFullYear()}),min:"2020",max:"2030"})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Next Sequence Number"}),e.jsx("input",{type:"number",className:"form-control",value:o.currentSequence,onChange:d=>a({...o,currentSequence:parseInt(d.target.value)||1}),min:"1"})]}),e.jsxs("div",{className:"alert alert-info",children:[e.jsx("strong",{children:"Next Invoice Number:"}),e.jsx("br",{}),e.jsx("code",{className:"fs-6",children:b()})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header bg-info text-white",children:e.jsxs("h6",{className:"card-title mb-0",children:[e.jsx("i",{className:"bi bi-bar-chart me-2"}),"Quick Stats"]})}),e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"small",children:[e.jsxs("div",{className:"d-flex justify-content-between mb-2",children:[e.jsx("span",{children:"Material Cost (Glass + Al):"}),e.jsxs("strong",{children:["₹",(i.glassRatePerM2+i.aluminiumRatePerKg).toFixed(0)]})]}),e.jsxs("div",{className:"d-flex justify-content-between mb-2",children:[e.jsx("span",{children:"Total Overhead:"}),e.jsxs("strong",{children:[(i.laborChargePercent+i.gstPercent+i.companyMarkupPercent).toFixed(1),"%"]})]}),e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("span",{children:"Settings Last Updated:"}),e.jsx("strong",{children:new Date().toLocaleDateString()})]})]})})]})]})]})]})})})}class ms{async createShareLink(i,n={}){try{const o=this.generateShareToken(),a=n.expiresInDays?Date.now()+n.expiresInDays*24*60*60*1e3:void 0,l={quotationId:i,shareToken:o,isPublic:n.isPublic??!1,readOnly:n.readOnly??!0,allowedUsers:n.allowedUsers,createdAt:Date.now(),expiresAt:a};return await Ee(_(U,"sharedQuotes",o),l),`${window.location.origin}/estimatix#/shared/${o}`}catch(o){throw console.error("Error creating share link:",o),new Error("Failed to create share link")}}async getSharedQuote(i){try{const n=_(U,"sharedQuotes",i),o=await Me(n);if(!o.exists())return null;const a=o.data();return a.expiresAt&&Date.now()>a.expiresAt?null:{...a,id:o.id}}catch(n){return console.error("Error getting shared quote:",n),null}}async joinCollaboration(i,n,o){try{const a=_(U,"collaborations",i),l=Date.now(),r={[`activeUsers.${n}`]:{userId:n,email:o,lastSeen:l}};await xe(a,r);const h=Yt(a,u=>{if(u.exists()){const b=u.data();this.handleCollaborationUpdate(b)}});return()=>{h(),this.leaveCollaboration(i,n)}}catch(a){throw console.error("Error joining collaboration:",a),a}}async leaveCollaboration(i,n){try{const o=_(U,"collaborations",i),a={[`activeUsers.${n}`]:null};await xe(o,a)}catch(o){console.error("Error leaving collaboration:",o)}}async trackChange(i,n){try{const o=_(U,"collaborations",i),a={...n,id:this.generateChangeId(),timestamp:Date.now()};await xe(o,{[`changes.${a.id}`]:a})}catch(o){console.error("Error tracking change:",o)}}async updateCursor(i,n,o){try{const a=_(U,"collaborations",i);await xe(a,{[`activeUsers.${n}.cursor`]:o,[`activeUsers.${n}.lastSeen`]:Date.now()})}catch(a){console.error("Error updating cursor:",a)}}async copyShareLink(i){try{await navigator.clipboard.writeText(i)}catch{const o=document.createElement("textarea");o.value=i,document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o)}}generateShareToken(){return Math.random().toString(36).substring(2)+Date.now().toString(36)}generateChangeId(){return Math.random().toString(36).substring(2)}handleCollaborationUpdate(i){window.dispatchEvent(new CustomEvent("collaborationUpdate",{detail:i}))}}const at=new ms;function hs(){const{user:c}=Q(),[i,n]=g.useState(!1),[o,a]=g.useState(!1),[l,r]=g.useState([]),[h,u]=g.useState(!1),[b,d]=g.useState([]),[j,y]=g.useState(!1),[k,N]=g.useState(null),[f,v]=g.useState("residential"),[I,R]=g.useState(!1),[F,S]=g.useState(null),[E,H]=g.useState([]),[$,K]=g.useState(!1),[Z,J]=g.useState(null),[ee,re]=g.useState(!1),[te,ie]=g.useState(null),[s,w]=g.useState({quotationId:"",customerName:"",customerPhone:"",customerEmail:"",items:[],totalGlassArea:0,totalFrameWeight:0,subtotal:0,laborCharges:0,gst:0,grandTotal:0,createdAt:new Date().toISOString(),validUntil:new Date(Date.now()+720*60*60*1e3).toISOString(),status:"draft"}),[C,W]=g.useState({glassRatePerM2:350,aluminiumRatePerKg:280,accessoryRatePerItem:150,laborChargePercent:15,gstPercent:18,companyMarkupPercent:20}),T=["Clear Float Glass 5mm","Tinted Glass 6mm","Laminated Glass 6.38mm","Tempered Glass 8mm","Double Glazed Unit","Reflective Glass 6mm"],B=["Standard Aluminium Frame","Heavy Duty Frame","Powder Coated Frame","Wooden Frame","UPVC Frame"],q=["Standard Handle","Premium Handle","Security Lock","Mesh/Grill","Weather Strip","Hinges Premium","Sliding Mechanism"],V=[{type:"window",size:"small",width:1,height:1.2,glassType:"Clear Float Glass 5mm",frameType:"Standard Aluminium Frame",accessories:["Standard Handle"],useCase:"Bathroom, Small Kitchen Window",confidence:92,durability:"8-10 years",energyEfficiency:"medium",costSavings:12},{type:"window",size:"medium",width:1.5,height:1.8,glassType:"Tempered Glass 8mm",frameType:"Standard Aluminium Frame",accessories:["Standard Handle","Mesh/Grill"],useCase:"Bedroom Window, Living Room",confidence:95,durability:"10-12 years",energyEfficiency:"medium",costSavings:8},{type:"window",size:"large",width:2,height:2.5,glassType:"Tempered Glass 8mm",frameType:"Heavy Duty Frame",accessories:["Premium Handle","Sliding Mechanism","Weather Strip"],useCase:"Large Living Room, Balcony Window",confidence:88,durability:"12-15 years",energyEfficiency:"high",costSavings:15},{type:"window",size:"extra-large",width:3,height:2.5,glassType:"Double Glazed Unit",frameType:"Heavy Duty Frame",accessories:["Premium Handle","Sliding Mechanism","Weather Strip"],useCase:"Panoramic Window, Bay Window",confidence:90,durability:"15+ years",energyEfficiency:"high",costSavings:18},{type:"door",size:"small",width:.9,height:2.1,glassType:"Tempered Glass 8mm",frameType:"Standard Aluminium Frame",accessories:["Premium Handle","Security Lock","Hinges Premium"],useCase:"Bathroom Door, Utility Door",confidence:93,durability:"10-12 years",energyEfficiency:"low",costSavings:10},{type:"door",size:"medium",width:1.2,height:2.4,glassType:"Tempered Glass 8mm",frameType:"Heavy Duty Frame",accessories:["Premium Handle","Security Lock","Hinges Premium","Weather Strip"],useCase:"Main Entrance, Bedroom Door",confidence:96,durability:"12-15 years",energyEfficiency:"medium",costSavings:14},{type:"door",size:"large",width:1.5,height:2.5,glassType:"Laminated Glass 6.38mm",frameType:"Powder Coated Frame",accessories:["Premium Handle","Security Lock","Hinges Premium","Weather Strip"],useCase:"Premium Main Entrance",confidence:91,durability:"15+ years",energyEfficiency:"high",costSavings:16},{type:"door",size:"extra-large",width:2,height:2.5,glassType:"Double Glazed Unit",frameType:"Powder Coated Frame",accessories:["Premium Handle","Security Lock","Sliding Mechanism","Weather Strip"],useCase:"Sliding Door, Patio Door",confidence:89,durability:"15+ years",energyEfficiency:"high",costSavings:20}],se=(t,m,x,p)=>{const D=(t+m)*2;let P=2.5;switch(x){case"Heavy Duty Frame":P=3.5;break;case"Powder Coated Frame":P=2.8;break;case"Wooden Frame":P=2;break;case"UPVC Frame":P=1.8;break;default:P=2.5}return D*P*p},le=t=>{const m=[],x=t.width*t.height;return t.glassType==="Clear Float Glass 5mm"&&x>5&&m.push("💡 Consider tempered glass for larger areas (>5m²) for safety."),t.glassType==="Double Glazed Unit"&&t.frameType==="Standard Aluminium Frame"&&m.push("💡 Heavy Duty Frame is recommended for Double Glazed Units."),(t.width>=2||t.height>=2.5)&&!t.accessories.includes("Sliding Mechanism")&&m.push(`💡 For ${t.width.toFixed(1)}m × ${t.height.toFixed(1)}m dimensions, sliding mechanism is recommended.`),t.type==="door"&&!t.accessories.includes("Security Lock")&&m.push("🔒 Security Lock is recommended for doors."),x>4&&!t.accessories.includes("Weather Strip")&&m.push("🌤️ Weather Strip recommended for better insulation."),m},oe=(t,m)=>{let x={...t};switch(m){case"residential":t.glassType==="Double Glazed Unit"&&(x.glassType="Tempered Glass 8mm",x.confidence-=5);break;case"commercial":t.frameType==="Standard Aluminium Frame"&&(x.frameType="Heavy Duty Frame"),t.accessories.includes("Security Lock")||x.accessories.push("Security Lock"),x.confidence+=3;break;case"thermal":t.glassType.includes("Double Glazed")||(x.glassType="Double Glazed Unit"),t.accessories.includes("Weather Strip")||x.accessories.push("Weather Strip"),x.energyEfficiency="high",x.confidence+=5;break;case"premium":x.frameType="Powder Coated Frame",x.glassType=t.glassType.includes("Laminated")?t.glassType:"Laminated Glass 6.38mm",t.accessories.includes("Premium Handle")||(x.accessories=x.accessories.filter(p=>p!=="Standard Handle"),x.accessories.push("Premium Handle")),x.confidence+=2;break}return x},ce=(t,m=1)=>{const x=t.width*t.height*m,p=se(t.width,t.height,t.frameType,m),D=x*C.glassRatePerM2+p*C.aluminiumRatePerKg+t.accessories.length*C.accessoryRatePerItem*m,P=D*(C.laborChargePercent/100),M=D+P,ae=M*(C.gstPercent/100),O=M+ae;return{material:D,labor:P,gst:ae,total:O}},ue=(t,m)=>{const x=[];switch(t.costSavings&&x.push(`💰 This configuration saves ${t.costSavings}% material weight vs standard setup`),x.push(`🛡️ Estimated durability: ${t.durability}`),t.energyEfficiency==="high"&&x.push("⚡ High energy efficiency - Reduces cooling/heating costs"),m){case"residential":x.push("🏠 Optimized for residential use with cost-efficient materials");break;case"commercial":x.push("🏢 Commercial-grade durability for high-traffic areas");break;case"thermal":x.push("🌡️ Thermal insulation optimized - Best for extreme climates");break;case"premium":x.push("💎 Premium aesthetic finish with superior quality materials");break}return x},ge=(t,m)=>{const x=s.items.find(O=>O.id===t);if(!x)return;J(t);let p;if(x.width>0||x.height>0){const O=x.width*x.height;let G="medium";O<1.5?G="small":O<4?G="medium":O<7?G="large":G="extra-large",p=V.find(Y=>Y.type===m&&Y.size===G)||V.find(Y=>Y.type===m&&Y.size==="medium")}else p=V.find(O=>O.type===m&&O.size==="medium");const D=oe(p,f),P=ce(D,x.quantity),M=ue(D,f),ae={preset:D,mode:f,estimatedCost:P,insights:M,confidence:D.confidence,appliedAt:new Date};S(ae),R(!0)},rt=()=>{if(!F||!Z)return;const t=F.preset;w(p=>({...p,items:p.items.map(D=>D.id===Z?{...D,width:t.width,height:t.height,glassType:t.glassType,frameType:t.frameType,accessories:[...t.accessories],notes:`🤖 AI Estimated (${f.charAt(0).toUpperCase()+f.slice(1)} Mode)
Use Case: ${t.useCase}
Confidence: ${t.confidence}%
${D.notes?`
`+D.notes:""}`}:D)}));const x=[{id:Date.now().toString(),itemName:s.items.find(p=>p.id===Z)?.name||"Unknown",type:t.type,dimensions:`${t.width}m × ${t.height}m`,mode:f,appliedAt:F.appliedAt,result:F},...E].slice(0,10);H(x),localStorage.setItem("ai_estimation_history",JSON.stringify(x)),R(!1),J(null),qe()};g.useEffect(()=>{const t=localStorage.getItem("ai_estimation_history");t&&H(JSON.parse(t))},[]),g.useEffect(()=>{const t=localStorage.getItem("admin_pricing_settings");t&&W(JSON.parse(t));const m=localStorage.getItem("item_templates");m&&d(JSON.parse(m))},[]);const it=async()=>{if(!c?.uid)return"TEMP-001";try{return await he.generateQuotationId(c.uid)}catch(t){console.error("Error generating quotation ID:",t);const m=JSON.parse(localStorage.getItem("admin_invoice_settings")||'{"prefix":"VEN","currentYear":2025,"currentSequence":1}'),x=m.currentSequence.toString().padStart(3,"0"),p=`${m.prefix}${m.currentYear}-${x}`;return m.currentSequence+=1,localStorage.setItem("admin_invoice_settings",JSON.stringify(m)),p}};g.useEffect(()=>{(async()=>{if(!s.quotationId){const m=await it();w(x=>({...x,quotationId:m}))}})()},[]);const $e=()=>{const t={id:Date.now().toString(),name:`Item ${s.items.length+1}`,type:"window",width:0,height:0,quantity:1,glassType:T[0],frameType:B[0],accessories:[],notes:"",showBreakdown:!1};w(m=>({...m,items:[...m.items,t]}))},ot=t=>{const m=s.items.find(p=>p.id===t);if(!m)return;const x={...m,id:Date.now().toString(),name:`${m.name} (Copy)`,showBreakdown:!1};w(p=>({...p,items:[...p.items,x]}))},nt=t=>{const m={id:Date.now().toString(),name:t.name,type:t.type,width:t.width,height:t.height,quantity:1,glassType:t.glassType,frameType:t.frameType,accessories:[...t.accessories],notes:t.description,showBreakdown:!1};w(x=>({...x,items:[...x.items,m]})),y(!1)},lt=t=>{const m=prompt("Enter template name:",t.name);if(!m)return;const x={id:Date.now().toString(),name:m,type:t.type,width:t.width,height:t.height,glassType:t.glassType,frameType:t.frameType,accessories:[...t.accessories],description:t.notes},p=[...b,x];d(p),localStorage.setItem("item_templates",JSON.stringify(p)),alert(`✅ Template "${m}" saved successfully!`)},ct=t=>{const m=b.find(D=>D.id===t);if(!m||!confirm(`Are you sure you want to delete template "${m.name}"?`))return;const p=b.filter(D=>D.id!==t);d(p),localStorage.setItem("item_templates",JSON.stringify(p))},dt=t=>{N(t)},mt=t=>{t.preventDefault()},ht=t=>{if(!k||k===t){N(null);return}const m=s.items.findIndex(P=>P.id===k),x=s.items.findIndex(P=>P.id===t);if(m===-1||x===-1)return;const p=[...s.items],[D]=p.splice(m,1);p.splice(x,0,D),w(P=>({...P,items:p})),N(null)},ne=(t,m,x)=>{w(p=>({...p,items:p.items.map(D=>D.id===t?{...D,[m]:x}:D)})),qe()},ut=t=>{w(m=>({...m,items:m.items.map(x=>x.id===t?{...x,showBreakdown:!x.showBreakdown}:x)}))},qe=()=>{c?.uid&&(u(!0),window.autoSaveTimeout&&clearTimeout(window.autoSaveTimeout),window.autoSaveTimeout=setTimeout(()=>{xt()},2e3))},xt=async()=>{if(!c?.uid||!s.customerName||s.items.length===0){u(!1);return}try{localStorage.setItem("draft_quotation",JSON.stringify(s)),console.log("✓ Auto-saved to localStorage"),u(!1)}catch(t){console.error("Auto-save error:",t),u(!1)}},Ue=()=>{const t={...s,savedAt:Date.now()};localStorage.setItem("estimatix_multi_calculator_draft",JSON.stringify(t)),ie(Date.now())},gt=()=>{const t=localStorage.getItem("estimatix_multi_calculator_draft");if(t){const m=JSON.parse(t);w(m),re(!1)}},ye=()=>{localStorage.removeItem("estimatix_multi_calculator_draft"),ie(null),re(!1)};g.useEffect(()=>{const t=localStorage.getItem("estimatix_multi_calculator_draft");if(t)try{const m=JSON.parse(t);m.items&&m.items.length>0&&(ie(m.savedAt),re(!0))}catch(m){console.error("Failed to load draft:",m)}},[]),g.useEffect(()=>{if(s.items.length>0||s.customerName||s.customerPhone){const t=setTimeout(()=>{Ue()},2e3);return()=>clearTimeout(t)}},[s]);const pt=t=>{w(m=>({...m,items:m.items.filter(x=>x.id!==t)}))},bt=(t,m)=>{w(x=>({...x,items:x.items.map(p=>{if(p.id===t){const D=p.accessories.includes(m)?p.accessories.filter(P=>P!==m):[...p.accessories,m];return{...p,accessories:D}}return p})}))};g.useEffect(()=>{let t=0,m=0,x=0;const p=s.items.map(G=>{const Y=G.width*G.height*G.quantity,we=se(G.width,G.height,G.frameType,G.quantity),Oe=Y*C.glassRatePerM2,Qe=we*C.aluminiumRatePerKg,He=G.accessories.length*C.accessoryRatePerItem*G.quantity,ke=Oe+Qe+He,Ye=ke*(C.laborChargePercent/100),jt=ke+Ye;return t+=Y,m+=we,x+=ke,{...G,glassArea:Y,frameWeight:we,glassCost:Oe,frameCost:Qe,accessoryCost:He,laborCost:Ye,itemTotal:jt}}),D=x*(C.laborChargePercent/100),P=x*(C.companyMarkupPercent/100),M=x+D+P,ae=M*(C.gstPercent/100),O=M+ae;w(G=>({...G,items:p,totalGlassArea:t,totalFrameWeight:m,subtotal:x,laborCharges:D+P,gst:ae,grandTotal:O}))},[s.items.length,s.items.map(t=>`${t.width}-${t.height}-${t.quantity}-${t.glassType}-${t.frameType}-${t.accessories.length}`).join(","),C]);const ft=async()=>{if(!c?.uid){alert("Please log in to save quotations");return}if(!s.customerName||!s.customerPhone){alert("Please fill in customer name and phone number");return}if(s.items.length===0){alert("Please add at least one item");return}a(!0);try{const t=s.items.map(p=>{const D=p.width*p.height/144,P=D*.092903,M=C.glassRatePerM2;return{...p,areaInSqFt:D,areaInM2:P,rate:M,itemTotal:P*M*p.quantity}}),m={quotationId:s.quotationId,userId:c.uid,customerName:s.customerName,customerPhone:s.customerPhone,customerEmail:s.customerEmail||"",customerAddress:"",items:t,totalGlassArea:s.totalGlassArea,totalFrameWeight:s.totalFrameWeight,subtotal:s.subtotal,laborCharges:s.laborCharges,gst:s.gst,grandTotal:s.grandTotal,status:"draft",notes:"Quotation created from Multi-Item Calculator"},x=await he.saveQuotation(m);console.log("Quotation saved successfully with ID:",x),alert(`✅ Quotation ${s.quotationId} saved successfully to Firebase!`),Ne()}catch(t){console.error("Error saving quotation:",t),alert("❌ Failed to save quotation. Please try again.")}finally{a(!1)}},Ne=async()=>{if(c?.uid)try{const t=await he.getUserQuotations(c.uid,20);r(t)}catch(t){console.error("Error loading quotations:",t)}};g.useEffect(()=>{Ne()},[c?.uid]);const ve=async()=>{n(!0);try{if(!s.customerName||!s.customerPhone){alert("Please fill in customer name and phone number before generating PDF"),n(!1);return}if(s.items.length===0){alert("Please add at least one item before generating PDF"),n(!1);return}const t=s.items.map((M,ae)=>{const O=M.width*M.height/144,G=O*.092903,Y=C.glassRatePerM2;return{name:M.name||`Item ${ae+1}`,type:M.type,width:M.width,height:M.height,area:O,rate:Y,total:G*Y*M.quantity}}),m={invoiceNumber:s.quotationId||`QUOT-${Date.now()}`,date:s.createdAt?new Date(s.createdAt):new Date,customerName:s.customerName,customerPhone:s.customerPhone,customerEmail:s.customerEmail||"N/A",customerAddress:"",items:t,subtotal:s.subtotal||0,tax:s.gst||0,grandTotal:s.grandTotal||0,notes:`Total Glass Area: ${s.totalGlassArea.toFixed(2)} sq.ft
Total Frame Weight: ${s.totalFrameWeight.toFixed(2)} kg
Labor Charges: Rs. ${s.laborCharges.toLocaleString("en-IN",{minimumFractionDigits:2})}`,termsAndConditions:`1. Prices are valid for 30 days
2. Payment terms: 50% advance, 50% on completion
3. Installation charges may apply
4. Prices subject to change without notice`};console.log("Quotation data prepared:",m);let x="";try{console.log("Creating share link for quotation:",s.quotationId),x=await at.createShareLink(s.quotationId,{readOnly:!0,expiresInDays:90,isPublic:!0,allowedUsers:[]}),console.log("Share link created:",x)}catch(M){console.warn("Could not create share link for QR code (PDF will generate without QR):",M)}console.log("Generating PDF with data:",{invoiceNumber:m.invoiceNumber,itemCount:m.items.length,hasShareLink:!!x});const p=await st.generateQuotationPDF(m,{branding:{companyName:"Venkatesh Aluminium & Glass",address:"Ram Nagar Dhule",phone:"888888999",email:"shubhamj0212@gmail.com"},qrCode:x?{url:x,label:"Scan to View Online"}:void 0});console.log("PDF generated successfully, blob size:",p.size);const D=URL.createObjectURL(p),P=document.createElement("a");P.href=D,P.download=`Quotation_${s.quotationId}_${new Date().toISOString().split("T")[0]}.pdf`,document.body.appendChild(P),P.click(),document.body.removeChild(P),URL.revokeObjectURL(D),alert(`PDF generated successfully: ${P.download}`)}catch(t){console.error("Detailed PDF generation error:",{error:t,message:t instanceof Error?t.message:"Unknown error",stack:t instanceof Error?t.stack:void 0});const m=t instanceof Error?t.message:"Unknown error";alert(`Failed to generate PDF: ${m}

Please check the console for details.`)}finally{n(!1)}};return e.jsxs(e.Fragment,{children:[ee&&e.jsx("div",{className:"draft-modal-overlay",onClick:ye,children:e.jsxs("div",{className:"draft-modal-card",onClick:t=>t.stopPropagation(),children:[e.jsx("div",{className:"draft-modal-title",children:"🕐 Restore Saved Draft?"}),e.jsx("p",{children:"We found a previously saved multi-item quotation draft. Would you like to continue where you left off?"}),te&&e.jsxs("small",{children:["Saved: ",new Date(te).toLocaleString("en-IN",{dateStyle:"medium",timeStyle:"short"})]}),e.jsxs("div",{className:"d-flex",children:[e.jsx("button",{className:"draft-btn-discard",onClick:ye,children:"Discard"}),e.jsx("button",{className:"draft-btn-restore",onClick:gt,children:"Restore Draft"})]})]})}),e.jsx("style",{children:`
        /* Improved label readability */
        .form-label {
          font-weight: 600 !important;
          color: #1a202c !important;
          font-size: 0.875rem !important;
          margin-bottom: 0.5rem !important;
          text-transform: uppercase;
          letter-spacing: 0.025em;
        }
        
        [data-bs-theme="dark"] .form-label {
          color: #e2e8f0 !important;
        }
        
        /* Special styling for icon labels */
        .form-label i {
          color: #2196f3 !important;
        }
        
        @keyframes pulse {
          0%, 100% { box-shadow: 0 -5px 20px rgba(0,123,255,0.3); }
          50% { box-shadow: 0 -5px 30px rgba(0,123,255,0.6); }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .item-card-dragging {
          opacity: 0.5;
          border: 2px dashed #007bff;
        }
        
        .auto-calc-field {
          background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%) !important;
          border-left: 4px solid #2196f3 !important;
          font-weight: 600 !important;
          color: #0d47a1 !important;
          text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
        }
        
        /* Dark mode support for auto-calc field */
        [data-bs-theme="dark"] .auto-calc-field {
          background: linear-gradient(135deg, #1e3a5f 0%, #2c5282 100%) !important;
          color: #90caf9 !important;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
          border-left: 4px solid #64b5f6 !important;
        }
        
        /* Improved card header readability */
        .card-header h6 {
          font-weight: 700 !important;
          font-size: 1.1rem !important;
          color: #1a202c !important;
        }
        
        [data-bs-theme="dark"] .card-header h6 {
          color: #2d3748 !important;
        }
        
        .card-header .badge {
          font-size: 0.875rem !important;
          padding: 0.375rem 0.625rem !important;
          font-weight: 700 !important;
        }
        
        .card-header small {
          font-weight: 500 !important;
        }
        
        /* ===== PREMIUM GLASSMORPHIC SUMMARY STYLES ===== */
        .premium-summary-container {
          background: linear-gradient(145deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95));
          backdrop-filter: blur(16px);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), 
                      0 0 0 1px rgba(255, 255, 255, 0.1);
          animation: slideInUp 0.6s ease-out;
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .premium-summary-header {
          background: linear-gradient(90deg, #10b981, #3b82f6, #8b5cf6);
          padding: 1.5rem 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .premium-summary-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin: 0;
          display: flex;
          align-items: center;
        }
        
        .premium-timestamp {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.8);
          font-style: italic;
        }
        
        .premium-summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
          padding: 2rem;
        }
        
        .premium-summary-card {
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 1.75rem;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          cursor: pointer;
        }
        
        .premium-summary-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
        }
        
        .premium-summary-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s;
        }
        
        .premium-summary-card:hover::before {
          opacity: 1;
        }
        
        .premium-card-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          opacity: 0.9;
        }
        
        .premium-card-value {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          font-family: 'Inter', system-ui, sans-serif;
          background: linear-gradient(135deg, currentColor, currentColor);
          -webkit-background-clip: text;
          background-clip: text;
          animation: countUp 1s ease-out;
        }
        
        @keyframes countUp {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .premium-card-label {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }
        
        .premium-card-sub {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
          margin-top: 0.5rem;
          font-style: italic;
        }
        
        .premium-card-glow {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          opacity: 0;
          transition: opacity 0.3s;
        }
        
        .premium-summary-card:hover .premium-card-glow {
          opacity: 1;
          animation: glow 1.5s infinite;
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px currentColor; }
          50% { box-shadow: 0 0 40px currentColor; }
        }
        
        /* Card Color Variants */
        .premium-card-blue {
          border-color: rgba(59, 130, 246, 0.3);
        }
        .premium-card-blue .premium-card-icon,
        .premium-card-blue .premium-card-value {
          color: #3b82f6;
        }
        .premium-card-blue .premium-card-glow {
          background: linear-gradient(90deg, #3b82f6, #2563eb);
        }
        
        .premium-card-cyan {
          border-color: rgba(6, 182, 212, 0.3);
        }
        .premium-card-cyan .premium-card-icon,
        .premium-card-cyan .premium-card-value {
          color: #06b6d4;
        }
        .premium-card-cyan .premium-card-glow {
          background: linear-gradient(90deg, #06b6d4, #0891b2);
        }
        
        .premium-card-amber {
          border-color: rgba(245, 158, 11, 0.3);
        }
        .premium-card-amber .premium-card-icon,
        .premium-card-amber .premium-card-value {
          color: #f59e0b;
        }
        .premium-card-amber .premium-card-glow {
          background: linear-gradient(90deg, #f59e0b, #d97706);
        }
        
        .premium-card-emerald {
          border-color: rgba(16, 185, 129, 0.3);
        }
        .premium-card-emerald .premium-card-icon,
        .premium-card-emerald .premium-card-value {
          color: #10b981;
        }
        .premium-card-emerald .premium-card-glow {
          background: linear-gradient(90deg, #10b981, #059669);
        }
        
        /* Insights Row */
        .premium-insights-row {
          padding: 1.5rem 2rem;
          background: rgba(255, 255, 255, 0.03);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }
        
        .premium-insight {
          display: flex;
          align-items: center;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
        }
        
        .premium-insight strong {
          color: white;
          font-weight: 700;
        }
        
        /* Breakdown Section */
        .premium-breakdown-section {
          padding: 2rem;
        }
        
        .premium-breakdown-title {
          color: white;
          font-weight: 700;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }
        
        .premium-breakdown-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .premium-breakdown-item {
          position: relative;
        }
        
        .premium-breakdown-bar {
          height: 8px;
          border-radius: 8px;
          transition: width 1s ease-out;
          margin-bottom: 0.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }
        
        .premium-breakdown-details {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.9rem;
        }
        
        .premium-breakdown-label {
          font-weight: 600;
        }
        
        .premium-breakdown-value {
          font-weight: 700;
          color: white;
        }
        
        .premium-breakdown-percent {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.85rem;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .premium-summary-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            padding: 1rem;
          }
          
          .premium-summary-header {
            padding: 1rem;
          }
          
          .premium-summary-title {
            font-size: 1.25rem;
          }
          
          .premium-insights-row {
            flex-direction: column;
            gap: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .premium-summary-grid {
            grid-template-columns: 1fr;
          }
        }
        
        /* ===== END PREMIUM STYLES ===== */
        
        /* ===== DRAFT MANAGEMENT STYLES ===== */
        .draft-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.2s ease-out;
        }

        .draft-modal-card {
          background: linear-gradient(135deg, rgba(30, 30, 40, 0.95) 0%, rgba(20, 20, 30, 0.98) 100%);
          border: 1px solid rgba(100, 100, 255, 0.3);
          border-radius: 16px;
          padding: 32px;
          max-width: 480px;
          width: 90%;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(100, 100, 255, 0.2);
          animation: slideUp 0.3s ease-out;
        }

        .draft-modal-title {
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 12px;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .draft-modal-card p {
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 20px;
          line-height: 1.5;
        }

        .draft-modal-card small {
          display: block;
          color: rgba(100, 200, 255, 0.9);
          font-size: 13px;
          margin-bottom: 24px;
          padding: 8px 12px;
          background: rgba(100, 150, 255, 0.1);
          border-radius: 6px;
          border-left: 3px solid rgba(100, 150, 255, 0.6);
        }

        .draft-modal-card .d-flex {
          gap: 12px;
        }

        .draft-btn-discard {
          flex: 1;
          padding: 12px 24px;
          background: rgba(255, 100, 100, 0.15);
          border: 1px solid rgba(255, 100, 100, 0.4);
          color: #ff6666;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.2s;
        }

        .draft-btn-discard:hover {
          background: rgba(255, 100, 100, 0.25);
          border-color: rgba(255, 100, 100, 0.6);
          transform: translateY(-1px);
        }

        .draft-btn-restore {
          flex: 1;
          padding: 12px 24px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          color: white;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }

        .draft-btn-restore:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
        }

        .draft-control-btn {
          padding: 8px 16px;
          background: rgba(100, 150, 255, 0.15);
          border: 1px solid rgba(100, 150, 255, 0.3);
          color: rgba(100, 180, 255, 0.95);
          border-radius: 6px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
          transition: all 0.2s;
        }

        .draft-control-btn:hover {
          background: rgba(100, 150, 255, 0.25);
          border-color: rgba(100, 150, 255, 0.5);
          transform: translateY(-1px);
        }

        .draft-indicator {
          padding: 6px 12px;
          background: rgba(76, 175, 80, 0.15);
          border: 1px solid rgba(76, 175, 80, 0.3);
          color: rgba(76, 200, 80, 0.95);
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
          animation: pulse 2s infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        /* ===== END DRAFT MANAGEMENT STYLES ===== */
        
        .ai-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(5px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s ease;
        }
        
        .ai-modal-content {
          background: white;
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          max-width: 600px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          animation: fadeInScale 0.4s ease;
        }
        
        .confidence-bar {
          background: #e9ecef;
          border-radius: 10px;
          height: 20px;
          overflow: hidden;
        }
        
        .confidence-fill {
          background: linear-gradient(90deg, #28a745, #20c997);
          height: 100%;
          transition: width 0.5s ease;
        }
        
        .ai-tag {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 0.85rem;
          font-weight: 500;
          margin-right: 8px;
          margin-bottom: 8px;
        }
        
        .ai-tag.glass { background: #cfe2ff; color: #084298; }
        .ai-tag.frame { background: #d3d3d3; color: #495057; }
        .ai-tag.size { background: #fff3cd; color: #997404; }
        .ai-tag.mode { background: #d1e7dd; color: #0f5132; }
      `}),I&&F&&e.jsx("div",{className:"ai-modal-backdrop",onClick:()=>R(!1),children:e.jsxs("div",{className:"ai-modal-content",onClick:t=>t.stopPropagation(),children:[e.jsx("div",{className:"p-4 border-bottom bg-gradient",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},children:e.jsxs("div",{className:"d-flex align-items-center justify-content-between",children:[e.jsxs("div",{className:"d-flex align-items-center text-white",children:[e.jsx("div",{className:"me-3",style:{fontSize:"2.5rem"},children:"🤖"}),e.jsxs("div",{children:[e.jsx("h4",{className:"mb-1",children:"Estimatix AI Assistant"}),e.jsx("small",{className:"opacity-75",children:"Intelligent Estimation Engine v1.4"})]})]}),e.jsx("button",{className:"btn btn-sm btn-light",onClick:()=>R(!1),children:e.jsx("i",{className:"bi bi-x-lg"})})]})}),e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-2",children:[e.jsx("span",{className:"fw-bold",children:"🔮 AI Confidence Score"}),e.jsxs("span",{className:"badge bg-success",children:[F.confidence,"%"]})]}),e.jsx("div",{className:"confidence-bar",children:e.jsx("div",{className:"confidence-fill",style:{width:`${F.confidence}%`}})}),e.jsx("small",{className:"text-muted",children:"Based on training data and similar project patterns"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h5",{className:"mb-3",children:"✨ Recommended Setup"}),e.jsxs("div",{className:"bg-light p-3 rounded",children:[e.jsxs("div",{className:"mb-3",children:[e.jsxs("span",{className:"ai-tag size",children:["📏 ",F.preset.size.toUpperCase()," (",F.preset.width,"m × ",F.preset.height,"m)"]}),e.jsxs("span",{className:"ai-tag mode",children:["🎯 ",F.mode.charAt(0).toUpperCase()+F.mode.slice(1)," Mode"]})]}),e.jsx("div",{className:"mb-2",children:e.jsxs("span",{className:"ai-tag glass",children:[e.jsx("i",{className:"bi bi-square me-1"}),F.preset.glassType]})}),e.jsx("div",{className:"mb-2",children:e.jsxs("span",{className:"ai-tag frame",children:[e.jsx("i",{className:"bi bi-grid-3x3 me-1"}),F.preset.frameType]})}),e.jsxs("div",{children:[e.jsx("strong",{className:"d-block mb-2",children:"Accessories:"}),F.preset.accessories.map((t,m)=>e.jsx("span",{className:"badge bg-secondary me-1 mb-1",children:t},m))]})]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h5",{className:"mb-3",children:"💰 Cost Preview (Estimated)"}),e.jsx("div",{className:"card",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"d-flex justify-content-between mb-2",children:[e.jsx("span",{children:"Material Cost:"}),e.jsxs("strong",{children:["₹ ",F.estimatedCost.material.toLocaleString("en-IN",{minimumFractionDigits:2})]})]}),e.jsxs("div",{className:"d-flex justify-content-between mb-2",children:[e.jsx("span",{children:"Labor Estimate:"}),e.jsxs("strong",{children:["₹ ",F.estimatedCost.labor.toLocaleString("en-IN",{minimumFractionDigits:2})]})]}),e.jsxs("div",{className:"d-flex justify-content-between mb-2",children:[e.jsxs("span",{children:["GST (",C.gstPercent,"%):"]}),e.jsxs("strong",{children:["₹ ",F.estimatedCost.gst.toLocaleString("en-IN",{minimumFractionDigits:2})]})]}),e.jsx("hr",{}),e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("strong",{children:"Total Estimate:"}),e.jsxs("strong",{className:"text-success fs-5",children:["₹ ",F.estimatedCost.total.toLocaleString("en-IN",{minimumFractionDigits:2})]})]})]})})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h5",{className:"mb-3",children:"💡 AI Insights"}),e.jsx("div",{className:"alert alert-info mb-0",children:e.jsx("ul",{className:"mb-0 ps-3",children:F.insights.map((t,m)=>e.jsx("li",{className:"mb-2",children:t},m))})})]}),e.jsx("div",{className:"mb-4",children:e.jsxs("div",{className:"alert alert-success",children:[e.jsx("strong",{children:"🎯 Perfect For:"})," ",F.preset.useCase]})}),e.jsxs("div",{className:"d-flex gap-2",children:[e.jsxs("button",{className:"btn btn-primary flex-grow-1",onClick:rt,children:[e.jsx("i",{className:"bi bi-check-circle me-2"}),"Apply AI Estimation"]}),e.jsxs("button",{className:"btn btn-outline-secondary",onClick:()=>R(!1),children:[e.jsx("i",{className:"bi bi-x-circle me-2"}),"Cancel"]})]}),e.jsxs("div",{className:"text-center mt-3",children:[e.jsx("small",{className:"text-muted",children:"Was this estimation helpful?"}),e.jsxs("div",{className:"mt-2",children:[e.jsxs("button",{className:"btn btn-sm btn-outline-success me-2",children:[e.jsx("i",{className:"bi bi-hand-thumbs-up"})," Accurate"]}),e.jsxs("button",{className:"btn btn-sm btn-outline-warning",children:[e.jsx("i",{className:"bi bi-hand-thumbs-down"})," Needs Improvement"]})]})]})]})]})}),e.jsxs("div",{className:"container-fluid py-4",children:[e.jsx("div",{className:"row mb-4",children:e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsxs("div",{children:[e.jsxs("h1",{className:"h3 text-primary mb-1",children:[e.jsx("i",{className:"bi bi-calculator me-2"}),"Multi-Item Quotation",h&&e.jsx("span",{className:"badge bg-info ms-2 small",children:"Auto-saving..."})]}),e.jsxs("p",{className:"text-muted mb-0",children:["Quotation ID: ",e.jsx("strong",{className:"text-primary",children:s.quotationId})," | Status: ",e.jsx("span",{className:`badge bg-${s.status==="draft"?"secondary":s.status==="finalized"?"success":"info"}`,children:s.status?.toUpperCase()})]}),e.jsxs("p",{className:"text-muted small mb-0",children:["Created: ",new Date(s.createdAt).toLocaleDateString()," | Valid Until: ",e.jsxs("span",{className:new Date(s.validUntil||"")<new Date?"text-danger fw-bold":"text-success",children:[s.validUntil?new Date(s.validUntil).toLocaleDateString():"N/A",new Date(s.validUntil||"")<new Date&&" ⚠️ EXPIRED"]})]})]}),e.jsxs("div",{className:"d-flex gap-2 flex-wrap",children:[e.jsxs("button",{className:"btn btn-outline-primary",onClick:$e,children:[e.jsx("i",{className:"bi bi-plus-circle me-1"}),"Add Item"]}),e.jsxs("div",{className:"btn-group",children:[e.jsxs("button",{className:"btn btn-warning",onClick:()=>{const t=s.items[s.items.length-1];t?ge(t.id,t.type):alert("Please add an item first!")},disabled:s.items.length===0,title:"AI-Assisted Estimation for last item",children:[e.jsx("i",{className:"bi bi-lightbulb-fill me-1"}),"💡 AI Estimate"]}),e.jsx("button",{className:"btn btn-warning dropdown-toggle dropdown-toggle-split","data-bs-toggle":"dropdown",title:"Change AI Mode"}),e.jsxs("ul",{className:"dropdown-menu",children:[e.jsx("li",{children:e.jsx("h6",{className:"dropdown-header",children:"🤖 AI Optimization Mode"})}),e.jsx("li",{children:e.jsxs("button",{className:`dropdown-item ${f==="residential"?"active":""}`,onClick:()=>v("residential"),children:["🏠 Residential",e.jsx("br",{}),e.jsx("small",{className:"text-muted",children:"Cost-efficient materials"})]})}),e.jsx("li",{children:e.jsxs("button",{className:`dropdown-item ${f==="commercial"?"active":""}`,onClick:()=>v("commercial"),children:["🏢 Commercial",e.jsx("br",{}),e.jsx("small",{className:"text-muted",children:"Maximum durability"})]})}),e.jsx("li",{children:e.jsxs("button",{className:`dropdown-item ${f==="thermal"?"active":""}`,onClick:()=>v("thermal"),children:["🌡️ Thermal Efficiency",e.jsx("br",{}),e.jsx("small",{className:"text-muted",children:"Insulation optimized"})]})}),e.jsx("li",{children:e.jsxs("button",{className:`dropdown-item ${f==="premium"?"active":""}`,onClick:()=>v("premium"),children:["💎 Premium Aesthetic",e.jsx("br",{}),e.jsx("small",{className:"text-muted",children:"Superior quality"})]})}),e.jsx("li",{children:e.jsx("hr",{className:"dropdown-divider"})}),e.jsx("li",{children:e.jsxs("button",{className:"dropdown-item text-primary",onClick:()=>K(!$),children:[e.jsx("i",{className:"bi bi-clock-history me-2"}),"View AI History (",E.length,")"]})})]})]}),e.jsxs("button",{className:"btn btn-outline-secondary",onClick:()=>y(!j),children:[e.jsx("i",{className:"bi bi-bookmark-star me-1"}),"Templates (",b.length,")"]}),e.jsx("button",{className:"btn btn-success",onClick:ft,disabled:o||s.items.length===0,children:o?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner-border spinner-border-sm me-2"}),"Saving..."]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"bi bi-cloud-check me-1"}),"Save to Firebase"]})}),e.jsx("button",{className:"btn btn-danger",onClick:ve,disabled:i||s.items.length===0,children:i?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner-border spinner-border-sm me-2"}),"Generating PDF..."]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"bi bi-file-earmark-pdf me-1"}),"Generate PDF"]})})]})]})})}),j&&b.length>0&&e.jsx("div",{className:"row mb-4",children:e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"card border-primary",children:[e.jsxs("div",{className:"card-header bg-primary text-white d-flex justify-content-between align-items-center",children:[e.jsxs("h5",{className:"mb-0",children:[e.jsx("i",{className:"bi bi-bookmark-star me-2"}),"Item Templates"]}),e.jsx("button",{className:"btn btn-sm btn-light",onClick:()=>y(!1),children:e.jsx("i",{className:"bi bi-x"})})]}),e.jsx("div",{className:"card-body",children:e.jsx("div",{className:"row g-3",children:b.map(t=>e.jsx("div",{className:"col-md-4",children:e.jsx("div",{className:"card h-100",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-2",children:[e.jsx("h6",{className:"card-title mb-0",children:t.name}),e.jsx("button",{className:"btn btn-sm btn-outline-danger",onClick:m=>{m.stopPropagation(),ct(t.id)},title:"Delete template",children:e.jsx("i",{className:"bi bi-trash"})})]}),e.jsxs("p",{className:"card-text small text-muted mb-2",children:[t.width,"m × ",t.height,"m | ",t.glassType]}),e.jsxs("button",{className:"btn btn-sm btn-primary w-100",onClick:()=>nt(t),children:[e.jsx("i",{className:"bi bi-plus-circle me-1"}),"Add to Quotation"]})]})})},t.id))})})]})})}),$&&E.length>0&&e.jsx("div",{className:"row mb-4",children:e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"card border-warning",children:[e.jsxs("div",{className:"card-header bg-warning text-dark d-flex justify-content-between align-items-center",children:[e.jsxs("h5",{className:"mb-0",children:[e.jsx("i",{className:"bi bi-clock-history me-2"}),"🤖 AI Estimation History"]}),e.jsx("button",{className:"btn btn-sm btn-dark",onClick:()=>K(!1),children:e.jsx("i",{className:"bi bi-x"})})]}),e.jsx("div",{className:"card-body",children:e.jsx("div",{className:"row g-3",children:E.map(t=>e.jsx("div",{className:"col-md-6",children:e.jsx("div",{className:"card h-100 border-start border-warning border-4",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-2",children:[e.jsxs("h6",{className:"card-title mb-0",children:[t.type==="window"?"🪟":"🚪"," ",t.itemName]}),e.jsx("span",{className:"badge bg-secondary",children:t.mode})]}),e.jsxs("p",{className:"card-text small mb-2",children:[e.jsx("strong",{children:"Dimensions:"})," ",t.dimensions,e.jsx("br",{}),e.jsx("strong",{children:"Applied:"})," ",new Date(t.appliedAt).toLocaleString(),e.jsx("br",{}),e.jsx("strong",{children:"Confidence:"})," ",t.result.confidence,"%"]}),e.jsx("div",{className:"d-flex gap-2",children:e.jsxs("button",{className:"btn btn-sm btn-outline-primary flex-grow-1",onClick:()=>{S(t.result),R(!0)},children:[e.jsx("i",{className:"bi bi-eye me-1"}),"View Details"]})})]})})},t.id))})})]})})}),e.jsx("div",{className:"row mb-3",children:e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"d-flex justify-content-end align-items-center gap-2",children:[te&&e.jsxs("span",{className:"draft-indicator",children:["💾 Draft saved ",new Date(te).toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"})]}),e.jsx("button",{className:"draft-control-btn",onClick:Ue,children:"💾 Save Template"}),te&&e.jsx("button",{className:"draft-control-btn",onClick:ye,children:"🗑️ Clear Template"})]})})}),e.jsx("div",{className:"row mb-4",children:e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header bg-info text-white",children:e.jsxs("h5",{className:"card-title mb-0",children:[e.jsx("i",{className:"bi bi-person-fill me-2"}),"Customer Information"]})}),e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-md-4",children:[e.jsx("label",{className:"form-label",children:"Customer Name *"}),e.jsx("input",{type:"text",className:"form-control",value:s.customerName,onChange:t=>w(m=>({...m,customerName:t.target.value})),placeholder:"Enter customer name"})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsx("label",{className:"form-label",children:"Phone Number"}),e.jsx("input",{type:"tel",className:"form-control",value:s.customerPhone,onChange:t=>w(m=>({...m,customerPhone:t.target.value})),placeholder:"Enter phone number"})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsx("label",{className:"form-label",children:"Email Address"}),e.jsx("input",{type:"email",className:"form-control",value:s.customerEmail,onChange:t=>w(m=>({...m,customerEmail:t.target.value})),placeholder:"Enter email address"})]})]})})]})})}),e.jsx("div",{className:"row mb-4",children:e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"card-header bg-primary text-white d-flex justify-content-between align-items-center",children:[e.jsxs("h5",{className:"card-title mb-0",children:[e.jsx("i",{className:"bi bi-list-ul me-2"}),"Quotation Items (",s.items.length,")"]}),s.items.length===0&&e.jsxs("button",{className:"btn btn-light btn-sm",onClick:$e,children:[e.jsx("i",{className:"bi bi-plus me-1"}),"Add First Item"]})]}),e.jsx("div",{className:"card-body",children:s.items.length===0?e.jsxs("div",{className:"text-center py-5 text-muted",children:[e.jsx("i",{className:"bi bi-inbox display-4 d-block mb-3"}),e.jsx("h5",{children:"No items added yet"}),e.jsx("p",{children:"Add your first window or door to start building the quotation"})]}):e.jsx("div",{className:"row g-4",children:s.items.map((t,m)=>{const x=le(t);return e.jsx("div",{className:"col-12",draggable:!0,onDragStart:()=>dt(t.id),onDragOver:mt,onDrop:()=>ht(t.id),style:{cursor:"move"},children:e.jsxs("div",{className:"card border-secondary shadow-sm",children:[e.jsxs("div",{className:"card-header bg-light d-flex justify-content-between align-items-center",children:[e.jsxs("h6",{className:"mb-0",children:[e.jsx("i",{className:"bi bi-grip-vertical me-2 text-muted",title:"Drag to reorder"}),e.jsx("span",{className:"badge bg-secondary me-2",children:m+1}),t.name,t.glassArea&&t.glassArea>0&&e.jsxs("small",{className:"text-muted ms-2",children:["(",t.glassArea.toFixed(2)," m² | ",t.frameWeight?.toFixed(2)," kg)"]})]}),e.jsxs("div",{className:"btn-group btn-group-sm",children:[e.jsxs("button",{className:"btn btn-warning",onClick:()=>ge(t.id,t.type),title:"AI-Assisted Estimation - Auto-fill with smart defaults",children:[e.jsx("i",{className:"bi bi-lightbulb-fill me-1"}),"Estimate"]}),e.jsx("button",{className:"btn btn-outline-primary",onClick:()=>ut(t.id),title:"View Cost Breakdown",children:e.jsx("i",{className:"bi bi-receipt"})}),e.jsx("button",{className:"btn btn-outline-info",onClick:()=>ot(t.id),title:"Duplicate Item",children:e.jsx("i",{className:"bi bi-files"})}),e.jsx("button",{className:"btn btn-outline-success",onClick:()=>lt(t),title:"Save as Template",children:e.jsx("i",{className:"bi bi-bookmark"})}),e.jsx("button",{className:"btn btn-outline-danger",onClick:()=>pt(t.id),title:"Delete Item",children:e.jsx("i",{className:"bi bi-trash"})})]})]}),e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-md-3",children:[e.jsx("label",{className:"form-label",children:"Item Name"}),e.jsx("input",{type:"text",className:"form-control",value:t.name,onChange:p=>ne(t.id,"name",p.target.value)})]}),e.jsxs("div",{className:"col-md-2",children:[e.jsx("label",{className:"form-label",children:"Type"}),e.jsxs("select",{className:"form-select",value:t.type,onChange:p=>ne(t.id,"type",p.target.value),children:[e.jsx("option",{value:"window",children:"Window"}),e.jsx("option",{value:"door",children:"Door"})]})]}),e.jsxs("div",{className:"col-md-2",children:[e.jsx("label",{className:"form-label",children:"Width (m)"}),e.jsx("input",{type:"number",className:"form-control",value:t.width,onChange:p=>ne(t.id,"width",parseFloat(p.target.value)||0),step:"0.01",min:"0"})]}),e.jsxs("div",{className:"col-md-2",children:[e.jsx("label",{className:"form-label",children:"Height (m)"}),e.jsx("input",{type:"number",className:"form-control",value:t.height,onChange:p=>ne(t.id,"height",parseFloat(p.target.value)||0),step:"0.01",min:"0"})]}),e.jsxs("div",{className:"col-md-1",children:[e.jsx("label",{className:"form-label",children:"Qty"}),e.jsx("input",{type:"number",className:"form-control",value:t.quantity,onChange:p=>ne(t.id,"quantity",parseInt(p.target.value)||1),min:"1"})]}),e.jsxs("div",{className:"col-md-2",children:[e.jsxs("label",{className:"form-label",children:[e.jsx("i",{className:"bi bi-calculator-fill text-primary me-1"}),"Area (Auto)"]}),e.jsx("input",{type:"text",className:"form-control auto-calc-field",value:`${(t.width*t.height*t.quantity).toFixed(2)} m²`,readOnly:!0,title:"Auto-calculated: Width × Height × Quantity"})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsx("label",{className:"form-label",children:"Glass Type"}),e.jsx("select",{className:"form-select",value:t.glassType,onChange:p=>ne(t.id,"glassType",p.target.value),children:T.map(p=>e.jsx("option",{value:p,children:p},p))})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsx("label",{className:"form-label",children:"Frame Type"}),e.jsx("select",{className:"form-select",value:t.frameType,onChange:p=>ne(t.id,"frameType",p.target.value),children:B.map(p=>e.jsx("option",{value:p,children:p},p))})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsx("label",{className:"form-label",children:"Accessories"}),e.jsx("div",{className:"border rounded p-2",style:{maxHeight:"100px",overflowY:"auto"},children:q.map(p=>e.jsxs("div",{className:"form-check form-check-inline",children:[e.jsx("input",{className:"form-check-input",type:"checkbox",checked:t.accessories.includes(p),onChange:()=>bt(t.id,p)}),e.jsx("label",{className:"form-check-label small",children:p})]},p))})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Notes"}),e.jsx("textarea",{className:"form-control",rows:2,value:t.notes,onChange:p=>ne(t.id,"notes",p.target.value),placeholder:"Add any special notes or requirements..."})]}),x.length>0&&e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"alert alert-info py-2 mb-0",children:[e.jsxs("strong",{children:[e.jsx("i",{className:"bi bi-lightbulb me-2"}),"Smart Suggestions:"]}),e.jsx("ul",{className:"mb-0 mt-1 small",children:x.map((p,D)=>e.jsx("li",{children:p},D))})]})}),t.showBreakdown&&t.itemTotal&&e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card bg-light",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("h6",{className:"card-title mb-3",children:[e.jsx("i",{className:"bi bi-calculator me-2"}),"Cost Breakdown"]}),e.jsxs("div",{className:"row g-2",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("span",{children:"Glass Cost:"}),e.jsxs("strong",{children:["₹",t.glassCost?.toFixed(2)]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("span",{children:"Frame Cost:"}),e.jsxs("strong",{children:["₹",t.frameCost?.toFixed(2)]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("span",{children:"Accessories:"}),e.jsxs("strong",{children:["₹",t.accessoryCost?.toFixed(2)]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("span",{children:"Labor:"}),e.jsxs("strong",{children:["₹",t.laborCost?.toFixed(2)]})]})}),e.jsxs("div",{className:"col-12",children:[e.jsx("hr",{className:"my-2"}),e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("strong",{children:"Item Total:"}),e.jsxs("strong",{className:"text-success",children:["₹",t.itemTotal?.toFixed(2)]})]})]})]})]})})})]})})]})},t.id)})})})]})})}),s.items.length>0&&e.jsx("div",{className:"row mb-5",children:e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"premium-summary-container",children:[e.jsx("div",{className:"premium-summary-header",children:e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsxs("h2",{className:"premium-summary-title",children:[e.jsx("i",{className:"bi bi-bar-chart-line-fill me-2"}),"Quotation Summary",e.jsx("span",{className:"badge bg-light text-dark ms-2 animate-pulse",style:{fontSize:"0.7rem"},children:"Live"})]}),e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsxs("span",{className:"premium-timestamp",children:[e.jsx("i",{className:"bi bi-clock me-1"}),"Last updated: ",new Date().toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"})]}),e.jsx("button",{className:"btn btn-sm btn-light",onClick:ve,title:"Export Summary as PDF",children:e.jsx("i",{className:"bi bi-download"})})]})]})}),e.jsxs("div",{className:"premium-summary-grid",children:[e.jsxs("div",{className:"premium-summary-card premium-card-blue","data-metric":"items",children:[e.jsx("div",{className:"premium-card-icon",children:e.jsx("i",{className:"bi bi-receipt-cutoff"})}),e.jsx("div",{className:"premium-card-value",children:s.items.length}),e.jsx("div",{className:"premium-card-label",children:"Total Items"}),e.jsx("div",{className:"premium-card-glow"})]}),e.jsxs("div",{className:"premium-summary-card premium-card-cyan","data-metric":"area",children:[e.jsx("div",{className:"premium-card-icon",children:e.jsx("i",{className:"bi bi-grid-3x3-gap"})}),e.jsx("div",{className:"premium-card-value",children:s.totalGlassArea.toFixed(2)}),e.jsx("div",{className:"premium-card-label",children:"Glass Area (m²)"}),e.jsxs("div",{className:"premium-card-sub",children:["Avg: ",(s.totalGlassArea/s.items.length).toFixed(2)," m² per item"]}),e.jsx("div",{className:"premium-card-glow"})]}),e.jsxs("div",{className:"premium-summary-card premium-card-amber","data-metric":"weight",children:[e.jsx("div",{className:"premium-card-icon",children:e.jsx("i",{className:"bi bi-speedometer2"})}),e.jsx("div",{className:"premium-card-value",children:s.totalFrameWeight.toFixed(2)}),e.jsx("div",{className:"premium-card-label",children:"Frame Weight (kg)"}),e.jsxs("div",{className:"premium-card-sub",children:[(s.totalFrameWeight/s.totalGlassArea).toFixed(2)," kg/m²"]}),e.jsx("div",{className:"premium-card-glow"})]}),e.jsxs("div",{className:"premium-summary-card premium-card-emerald","data-metric":"total",children:[e.jsx("div",{className:"premium-card-icon",children:e.jsx("i",{className:"bi bi-currency-rupee"})}),e.jsxs("div",{className:"premium-card-value",children:["₹",s.grandTotal.toLocaleString("en-IN",{minimumFractionDigits:2})]}),e.jsx("div",{className:"premium-card-label",children:"Grand Total"}),e.jsxs("div",{className:"premium-card-sub",children:["₹",(s.grandTotal/s.totalGlassArea).toFixed(0),"/m²"]}),e.jsx("div",{className:"premium-card-glow"})]})]}),e.jsxs("div",{className:"premium-insights-row",children:[e.jsxs("div",{className:"premium-insight",children:[e.jsx("i",{className:"bi bi-lightbulb-fill text-warning me-2"}),e.jsxs("span",{children:["Based on ",e.jsxs("strong",{children:[s.items.length," items"]}),", average cost per sq.ft is ",e.jsxs("strong",{children:["₹",(s.grandTotal/s.totalGlassArea*.0929).toFixed(2)]})]})]}),e.jsxs("div",{className:"premium-insight",children:[e.jsx("i",{className:"bi bi-graph-up text-success me-2"}),e.jsxs("span",{children:["Material efficiency: ",e.jsxs("strong",{children:[(s.totalGlassArea/(s.totalGlassArea+5)*100).toFixed(1),"%"]})]})]})]}),e.jsxs("div",{className:"premium-breakdown-section",children:[e.jsxs("h6",{className:"premium-breakdown-title",children:[e.jsx("i",{className:"bi bi-pie-chart-fill me-2"}),"Detailed Cost Breakdown"]}),e.jsxs("div",{className:"premium-breakdown-grid",children:[e.jsxs("div",{className:"premium-breakdown-item",children:[e.jsx("div",{className:"premium-breakdown-bar",style:{width:`${s.subtotal/s.grandTotal*100}%`,background:"linear-gradient(90deg, #3b82f6, #2563eb)"}}),e.jsxs("div",{className:"premium-breakdown-details",children:[e.jsx("span",{className:"premium-breakdown-label",children:"Material Cost"}),e.jsxs("span",{className:"premium-breakdown-value",children:["₹",s.subtotal.toFixed(2)]}),e.jsxs("span",{className:"premium-breakdown-percent",children:[(s.subtotal/s.grandTotal*100).toFixed(1),"%"]})]})]}),e.jsxs("div",{className:"premium-breakdown-item",children:[e.jsx("div",{className:"premium-breakdown-bar",style:{width:`${s.laborCharges/s.grandTotal*100}%`,background:"linear-gradient(90deg, #f59e0b, #d97706)"}}),e.jsxs("div",{className:"premium-breakdown-details",children:[e.jsx("span",{className:"premium-breakdown-label",children:"Labor & Markup"}),e.jsxs("span",{className:"premium-breakdown-value",children:["₹",s.laborCharges.toFixed(2)]}),e.jsxs("span",{className:"premium-breakdown-percent",children:[(s.laborCharges/s.grandTotal*100).toFixed(1),"%"]})]})]}),e.jsxs("div",{className:"premium-breakdown-item",children:[e.jsx("div",{className:"premium-breakdown-bar",style:{width:`${s.gst/s.grandTotal*100}%`,background:"linear-gradient(90deg, #10b981, #059669)"}}),e.jsxs("div",{className:"premium-breakdown-details",children:[e.jsxs("span",{className:"premium-breakdown-label",children:["GST (",C.gstPercent,"%)"]}),e.jsxs("span",{className:"premium-breakdown-value",children:["₹",s.gst.toFixed(2)]}),e.jsxs("span",{className:"premium-breakdown-percent",children:[(s.gst/s.grandTotal*100).toFixed(1),"%"]})]})]})]})]})]})})}),s.items.length>0&&e.jsx("div",{className:"position-fixed bottom-0 start-0 end-0 bg-dark text-white shadow-lg p-3",style:{zIndex:1040,animation:"pulse 2s infinite",boxShadow:"0 -5px 20px rgba(0,123,255,0.3)"},children:e.jsx("div",{className:"container-fluid",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsxs("div",{className:"col-md-2 text-center",children:[e.jsx("div",{className:"fw-bold fs-5",children:s.items.length}),e.jsx("small",{children:"Items"})]}),e.jsxs("div",{className:"col-md-2 text-center",children:[e.jsxs("div",{className:"fw-bold fs-5",children:[s.totalGlassArea.toFixed(2)," m²"]}),e.jsx("small",{children:"Total Area"})]}),e.jsxs("div",{className:"col-md-2 text-center",children:[e.jsxs("div",{className:"fw-bold fs-5",children:[s.totalFrameWeight.toFixed(2)," kg"]}),e.jsx("small",{children:"Frame Weight"})]}),e.jsxs("div",{className:"col-md-3 text-center",children:[e.jsxs("div",{className:"fw-bold fs-4 text-warning",children:["₹ ",s.grandTotal.toLocaleString("en-IN",{minimumFractionDigits:2})]}),e.jsx("small",{children:"Estimated Cost"})]}),e.jsx("div",{className:"col-md-3 text-end",children:e.jsxs("div",{className:"btn-group",children:[e.jsxs("button",{className:"btn btn-success btn-sm",onClick:()=>{const t=`Hi! Here's quotation ${s.quotationId} for ${s.customerName}:

Total Items: ${s.items.length}
Total Amount: ₹${s.grandTotal.toFixed(2)}

Please review and let us know if you have any questions.`,m=`https://wa.me/${s.customerPhone.replace(/\D/g,"")}?text=${encodeURIComponent(t)}`;window.open(m,"_blank")},disabled:!s.customerPhone,children:[e.jsx("i",{className:"bi bi-whatsapp me-1"}),"WhatsApp"]}),e.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>{const t=`Quotation ${s.quotationId} - ${s.customerName}`,m=`Dear ${s.customerName},

Please find attached the quotation details:

Quotation ID: ${s.quotationId}
Total Items: ${s.items.length}
Total Amount: ₹${s.grandTotal.toFixed(2)}

Thank you for your interest.

Best Regards,
Venkatesh Aluminium & Glass`,x=`mailto:${s.customerEmail}?subject=${encodeURIComponent(t)}&body=${encodeURIComponent(m)}`;window.location.href=x},disabled:!s.customerEmail,children:[e.jsx("i",{className:"bi bi-envelope me-1"}),"Email"]}),e.jsxs("button",{className:"btn btn-danger btn-sm",onClick:ve,children:[e.jsx("i",{className:"bi bi-file-pdf me-1"}),"PDF"]})]})})]})})}),s.items.length>0&&e.jsx("div",{style:{height:"120px"}}),l.length>0&&e.jsx("div",{className:"row mt-5",children:e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"card shadow-sm",children:[e.jsx("div",{className:"card-header bg-primary text-white",children:e.jsxs("h5",{className:"mb-0",children:[e.jsx("i",{className:"bi bi-folder-open me-2"}),"Your Saved Quotations (",l.length,")"]})}),e.jsx("div",{className:"card-body p-0",children:e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-hover mb-0",children:[e.jsx("thead",{className:"table-light",children:e.jsxs("tr",{children:[e.jsx("th",{children:"Quotation ID"}),e.jsx("th",{children:"Customer"}),e.jsx("th",{children:"Phone"}),e.jsx("th",{children:"Items"}),e.jsx("th",{children:"Total Amount"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Created"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:l.map(t=>{const m=t.createdAt instanceof Object&&"toDate"in t.createdAt?t.createdAt.toDate():new Date(t.createdAt),x={draft:"secondary",sent:"info",approved:"success",rejected:"danger",completed:"primary"};return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{className:"text-primary",children:t.quotationId})}),e.jsx("td",{children:t.customerName}),e.jsxs("td",{children:[e.jsx("i",{className:"bi bi-telephone me-1"}),t.customerPhone]}),e.jsx("td",{children:e.jsxs("span",{className:"badge bg-secondary",children:[t.items.length," items"]})}),e.jsx("td",{children:e.jsxs("strong",{className:"text-success",children:["₹",t.grandTotal.toLocaleString()]})}),e.jsx("td",{children:e.jsx("span",{className:`badge bg-${x[t.status]}`,children:t.status.toUpperCase()})}),e.jsx("td",{children:e.jsx("small",{children:m.toLocaleDateString()})}),e.jsx("td",{children:e.jsxs("div",{className:"btn-group btn-group-sm",role:"group",children:[e.jsx("button",{className:"btn btn-outline-primary",title:"View",onClick:()=>{alert(`Viewing quotation ${t.quotationId}
Feature coming soon!`)},children:e.jsx("i",{className:"bi bi-eye"})}),e.jsx("button",{className:"btn btn-outline-danger",title:"Delete",onClick:async()=>{if(window.confirm(`Delete quotation ${t.quotationId}?`))try{t.id&&(await he.deleteQuotation(t.id),alert("✅ Quotation deleted successfully!"),Ne())}catch{alert("❌ Failed to delete quotation")}},children:e.jsx("i",{className:"bi bi-trash"})})]})})]},t.id)})})]})})}),e.jsx("div",{className:"card-footer text-muted",children:e.jsxs("small",{children:[e.jsx("i",{className:"bi bi-info-circle me-1"}),"All quotations are automatically synced with Firebase Firestore"]})})]})})})]})]})}function us(){const{shareToken:c}=wt(),{user:i}=Q(),[n,o]=g.useState(null),[a,l]=g.useState(!0),[r,h]=g.useState("");if(g.useEffect(()=>{(async()=>{if(!c){h("Invalid share link"),l(!1);return}try{const d=await at.getSharedQuote(c);d?o(d):h("Quote not found or link has expired")}catch(d){h("Error loading shared quote"),console.error(d)}finally{l(!1)}})()},[c]),a)return e.jsx("div",{className:"container py-5",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"spinner-border text-primary",role:"status",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}),e.jsx("p",{className:"mt-3",children:"Loading shared quotation..."})]})});if(r)return e.jsx("div",{className:"container py-5",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-danger mb-3",children:e.jsx("i",{className:"bi bi-exclamation-triangle display-1"})}),e.jsx("h3",{className:"text-danger",children:"Access Denied"}),e.jsx("p",{className:"text-muted",children:r}),e.jsxs(z,{to:"/",className:"btn btn-primary",children:[e.jsx("i",{className:"bi bi-house me-1"}),"Go to Dashboard"]})]})});if(!n)return null;const u=n.quotationData;return e.jsxs("div",{className:"min-vh-100 bg-light",children:[e.jsx("header",{className:"bg-white shadow-sm py-3",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsxs("div",{children:[e.jsxs("h1",{className:"h5 mb-0",children:[e.jsx("i",{className:"bi bi-share me-2"}),"Shared Quotation"]}),e.jsxs("small",{className:"text-muted",children:["Shared by ",n.creatorEmail]})]}),e.jsxs("div",{className:"d-flex gap-2",children:[!n.readOnly&&i&&e.jsxs("span",{className:"badge bg-success",children:[e.jsx("i",{className:"bi bi-pencil me-1"}),"Collaborative Mode"]}),n.readOnly&&e.jsxs("span",{className:"badge bg-info",children:[e.jsx("i",{className:"bi bi-eye me-1"}),"Read Only"]}),e.jsxs(z,{to:"/",className:"btn btn-sm btn-outline-primary",children:[e.jsx("i",{className:"bi bi-box-arrow-left me-1"}),"Exit"]})]})]})})}),e.jsx("div",{className:"container py-4",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-lg-8 mx-auto",children:e.jsxs("div",{className:"card shadow-sm",children:[e.jsx("div",{className:"card-header bg-primary text-white",children:e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsxs("h5",{className:"card-title mb-0",children:[e.jsx("i",{className:"bi bi-file-earmark-text me-2"}),"Quotation Details"]}),e.jsxs("div",{className:"d-flex gap-2",children:[e.jsxs("button",{className:"btn btn-light btn-sm",children:[e.jsx("i",{className:"bi bi-download me-1"}),"Download PDF"]}),e.jsxs("button",{className:"btn btn-outline-light btn-sm",children:[e.jsx("i",{className:"bi bi-printer me-1"}),"Print"]})]})]})}),e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"row mb-4",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("h6",{className:"fw-bold text-primary",children:"Quote Information"}),e.jsx("table",{className:"table table-sm table-borderless",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Quote ID:"})}),e.jsx("td",{children:u?.invoiceNumber||"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Date:"})}),e.jsx("td",{children:u?.date?new Date(u.date).toLocaleDateString():"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Status:"})}),e.jsx("td",{children:e.jsx("span",{className:"badge bg-success",children:"Active"})})]})]})})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("h6",{className:"fw-bold text-primary",children:"Customer Details"}),e.jsx("table",{className:"table table-sm table-borderless",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Name:"})}),e.jsx("td",{children:u?.customerName||"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Phone:"})}),e.jsx("td",{children:u?.customerPhone||"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Email:"})}),e.jsx("td",{children:u?.customerEmail||"N/A"})]})]})})]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h6",{className:"fw-bold text-primary mb-3",children:"Quotation Items"}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-hover",children:[e.jsx("thead",{className:"table-light",children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Item Description"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Dimensions"}),e.jsx("th",{children:"Area (sq.ft)"}),e.jsx("th",{children:"Rate"}),e.jsx("th",{children:"Amount"})]})}),e.jsx("tbody",{children:u?.items?.map((b,d)=>e.jsxs("tr",{children:[e.jsx("td",{children:d+1}),e.jsx("td",{children:b.name||`Item ${d+1}`}),e.jsx("td",{children:e.jsx("span",{className:`badge ${b.type==="window"?"bg-info":"bg-warning"}`,children:b.type})}),e.jsxs("td",{children:[b.width,'" × ',b.height,'"']}),e.jsx("td",{children:b.area?.toFixed(2)||"0.00"}),e.jsxs("td",{children:["₹",b.rate?.toFixed(2)||"0.00"]}),e.jsxs("td",{children:["₹",b.total?.toFixed(2)||"0.00"]})]},d))||e.jsx("tr",{children:e.jsx("td",{colSpan:7,className:"text-center text-muted",children:"No items found"})})})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6 offset-md-6",children:e.jsx("table",{className:"table table-sm",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Subtotal:"})}),e.jsxs("td",{className:"text-end",children:["₹",u?.subtotal?.toFixed(2)||"0.00"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Tax (if any):"})}),e.jsxs("td",{className:"text-end",children:["₹",u?.tax?.toFixed(2)||"0.00"]})]}),e.jsxs("tr",{className:"table-primary",children:[e.jsx("td",{children:e.jsx("strong",{children:"Grand Total:"})}),e.jsx("td",{className:"text-end",children:e.jsxs("strong",{children:["₹",u?.grandTotal?.toFixed(2)||"0.00"]})})]})]})})})}),u?.notes&&e.jsxs("div",{className:"mt-4",children:[e.jsx("h6",{className:"fw-bold text-primary",children:"Notes"}),e.jsx("p",{className:"text-muted",children:u.notes})]})]}),e.jsx("div",{className:"card-footer bg-light",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("small",{className:"text-muted",children:[e.jsx("i",{className:"bi bi-calendar me-1"}),"Shared on ",new Date(n.createdAt).toLocaleDateString(),n.expiresAt&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("i",{className:"bi bi-clock me-1"}),"Expires on ",new Date(n.expiresAt).toLocaleDateString()]})]})}),e.jsx("div",{className:"col-md-6 text-md-end",children:e.jsx("small",{className:"text-muted",children:"Powered by Estimatix"})})]})})]})})})})]})}const xs=({onComplete:c})=>{const i=We(),[n,o]=g.useState(1),[a,l]=g.useState({companyName:"",companyAddress:"",companyPhone:"",companyEmail:""}),[r,h]=g.useState({defaultMargin:30,taxRate:18,currency:"INR"}),u=3,b=()=>{n<u&&o(n+1)},d=()=>{n>1&&o(n-1)},j=f=>{if(f.preventDefault(),!a.companyName){L.error("Please enter your company name");return}localStorage.setItem("estimatix-company",JSON.stringify(a)),L.success("Company details saved!"),b()},y=f=>{f.preventDefault(),localStorage.setItem("estimatix-pricing",JSON.stringify(r)),L.success("Pricing defaults configured!"),b()},k=()=>{localStorage.setItem("estimatix-onboarded","true"),L.success("🎉 Setup complete! Let's create your first quotation"),c(),i("/calculator")},N={enter:f=>({x:f>0?1e3:-1e3,opacity:0}),center:{zIndex:1,x:0,opacity:1},exit:f=>({zIndex:0,x:f<0?1e3:-1e3,opacity:0})};return e.jsxs("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",position:"relative",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",width:"300px",height:"300px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.1)",filter:"blur(80px)",top:"10%",left:"5%",animation:"float 6s ease-in-out infinite"}}),e.jsx("div",{className:"container",children:e.jsx("div",{className:"row justify-content-center",children:e.jsxs("div",{className:"col-12 col-lg-8",children:[e.jsx(A.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"mb-4",children:e.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.95)",borderRadius:"16px",padding:"20px",boxShadow:"0 10px 40px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(20px)"},children:[e.jsxs("div",{className:"d-flex justify-content-between mb-2",children:[e.jsxs("small",{style:{fontWeight:600,color:"#667eea"},children:["Step ",n," of ",u]}),e.jsxs("small",{style:{color:"#6c757d"},children:[Math.round(n/u*100),"% Complete"]})]}),e.jsx("div",{style:{height:"8px",background:"#e9ecef",borderRadius:"8px",overflow:"hidden"},children:e.jsx(A.div,{initial:{width:0},animate:{width:`${n/u*100}%`},transition:{duration:.5,ease:"easeOut"},style:{height:"100%",background:"linear-gradient(90deg, #667eea 0%, #764ba2 100%)",borderRadius:"8px"}})})]})}),e.jsx(Ge,{mode:"wait",custom:1,children:e.jsx(A.div,{custom:1,variants:N,initial:"enter",animate:"center",exit:"exit",transition:{duration:.3},children:e.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.98)",borderRadius:"24px",padding:"48px",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.15)",backdropFilter:"blur(20px)",border:"1px solid rgba(255, 255, 255, 0.8)"},children:[n===1&&e.jsxs("form",{onSubmit:j,children:[e.jsxs("div",{className:"text-center mb-4",children:[e.jsx(A.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",delay:.2},style:{width:"80px",height:"80px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"20px",display:"inline-flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"},children:e.jsx("i",{className:"bi bi-building",style:{fontSize:"40px",color:"white"}})}),e.jsx("h2",{style:{fontSize:"28px",fontWeight:"bold",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:"8px"},children:"Company Information"}),e.jsx("p",{style:{color:"#6c757d",fontSize:"15px"},children:"Let's set up your company profile"})]}),e.jsxs("div",{className:"mb-3",children:[e.jsxs("label",{className:"form-label",style:{fontWeight:600,fontSize:"14px"},children:["Company Name ",e.jsx("span",{style:{color:"#dc3545"},children:"*"})]}),e.jsx("input",{type:"text",className:"form-control",value:a.companyName,onChange:f=>l({...a,companyName:f.target.value}),placeholder:"Estimatix Solutions",required:!0,style:{height:"48px",borderRadius:"12px",border:"2px solid #e9ecef",fontSize:"15px"}})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"14px"},children:"Address"}),e.jsx("textarea",{className:"form-control",value:a.companyAddress,onChange:f=>l({...a,companyAddress:f.target.value}),placeholder:"123 Business Street, City, State - 123456",rows:3,style:{borderRadius:"12px",border:"2px solid #e9ecef",fontSize:"15px"}})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-md-6 mb-3",children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"14px"},children:"Phone"}),e.jsx("input",{type:"tel",className:"form-control",value:a.companyPhone,onChange:f=>l({...a,companyPhone:f.target.value}),placeholder:"+91 98765 43210",style:{height:"48px",borderRadius:"12px",border:"2px solid #e9ecef",fontSize:"15px"}})]}),e.jsxs("div",{className:"col-md-6 mb-3",children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"14px"},children:"Email"}),e.jsx("input",{type:"email",className:"form-control",value:a.companyEmail,onChange:f=>l({...a,companyEmail:f.target.value}),placeholder:"info@estimatix.com",style:{height:"48px",borderRadius:"12px",border:"2px solid #e9ecef",fontSize:"15px"}})]})]}),e.jsxs("div",{className:"d-flex justify-content-between mt-4",children:[e.jsx("button",{type:"button",onClick:()=>{localStorage.setItem("estimatix-onboarded","true"),c()},style:{background:"transparent",border:"none",color:"#6c757d",fontSize:"14px",cursor:"pointer"},children:"Skip Setup"}),e.jsxs(A.button,{type:"submit",whileHover:{scale:1.02},whileTap:{scale:.98},style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",border:"none",color:"white",padding:"12px 32px",borderRadius:"12px",fontSize:"16px",fontWeight:600,cursor:"pointer"},children:["Continue",e.jsx("i",{className:"bi bi-arrow-right ms-2"})]})]})]}),n===2&&e.jsxs("form",{onSubmit:y,children:[e.jsxs("div",{className:"text-center mb-4",children:[e.jsx(A.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",delay:.2},style:{width:"80px",height:"80px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"20px",display:"inline-flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"},children:e.jsx("i",{className:"bi bi-currency-dollar",style:{fontSize:"40px",color:"white"}})}),e.jsx("h2",{style:{fontSize:"28px",fontWeight:"bold",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:"8px"},children:"Pricing Configuration"}),e.jsx("p",{style:{color:"#6c757d",fontSize:"15px"},children:"Set your default pricing parameters"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"14px"},children:"Default Profit Margin (%)"}),e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx("input",{type:"range",className:"form-range",min:"0",max:"100",value:r.defaultMargin,onChange:f=>h({...r,defaultMargin:parseInt(f.target.value)}),style:{flex:1}}),e.jsxs("span",{style:{background:"#667eea",color:"white",padding:"8px 16px",borderRadius:"8px",fontWeight:600,minWidth:"60px",textAlign:"center"},children:[r.defaultMargin,"%"]})]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"14px"},children:"Tax Rate (GST/VAT %)"}),e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx("input",{type:"range",className:"form-range",min:"0",max:"30",value:r.taxRate,onChange:f=>h({...r,taxRate:parseInt(f.target.value)}),style:{flex:1}}),e.jsxs("span",{style:{background:"#667eea",color:"white",padding:"8px 16px",borderRadius:"8px",fontWeight:600,minWidth:"60px",textAlign:"center"},children:[r.taxRate,"%"]})]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"14px"},children:"Currency"}),e.jsxs("select",{className:"form-select",value:r.currency,onChange:f=>h({...r,currency:f.target.value}),style:{height:"48px",borderRadius:"12px",border:"2px solid #e9ecef",fontSize:"15px"},children:[e.jsx("option",{value:"INR",children:"₹ INR - Indian Rupee"}),e.jsx("option",{value:"USD",children:"$ USD - US Dollar"}),e.jsx("option",{value:"EUR",children:"€ EUR - Euro"}),e.jsx("option",{value:"GBP",children:"£ GBP - British Pound"}),e.jsx("option",{value:"AED",children:"د.إ AED - UAE Dirham"})]})]}),e.jsxs("div",{className:"d-flex justify-content-between mt-4",children:[e.jsxs(A.button,{type:"button",onClick:d,whileHover:{scale:1.02},whileTap:{scale:.98},style:{background:"#e9ecef",border:"none",color:"#495057",padding:"12px 32px",borderRadius:"12px",fontSize:"16px",fontWeight:600,cursor:"pointer"},children:[e.jsx("i",{className:"bi bi-arrow-left me-2"}),"Back"]}),e.jsxs(A.button,{type:"submit",whileHover:{scale:1.02},whileTap:{scale:.98},style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",border:"none",color:"white",padding:"12px 32px",borderRadius:"12px",fontSize:"16px",fontWeight:600,cursor:"pointer"},children:["Continue",e.jsx("i",{className:"bi bi-arrow-right ms-2"})]})]})]}),n===3&&e.jsxs("div",{className:"text-center",children:[e.jsx(A.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",delay:.2},style:{width:"100px",height:"100px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"24px",display:"inline-flex",alignItems:"center",justifyContent:"center",marginBottom:"24px"},children:e.jsx("i",{className:"bi bi-check-circle-fill",style:{fontSize:"50px",color:"white"}})}),e.jsx("h2",{style:{fontSize:"32px",fontWeight:"bold",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:"16px"},children:"You're All Set! 🎉"}),e.jsxs("p",{style:{color:"#6c757d",fontSize:"16px",marginBottom:"32px"},children:["Your account is configured and ready to go.",e.jsx("br",{}),"Let's create your first professional quotation!"]}),e.jsxs("div",{className:"row g-3 mb-4",children:[e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",padding:"20px",borderRadius:"16px",border:"2px solid rgba(102, 126, 234, 0.2)"},children:[e.jsx("i",{className:"bi bi-calculator-fill",style:{fontSize:"32px",color:"#667eea"}}),e.jsx("h5",{style:{fontSize:"14px",fontWeight:600,marginTop:"12px",color:"#495057"},children:"Smart Calculator"}),e.jsx("p",{style:{fontSize:"12px",color:"#6c757d",margin:0},children:"Fast & accurate estimates"})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",padding:"20px",borderRadius:"16px",border:"2px solid rgba(102, 126, 234, 0.2)"},children:[e.jsx("i",{className:"bi bi-filetype-pdf",style:{fontSize:"32px",color:"#667eea"}}),e.jsx("h5",{style:{fontSize:"14px",fontWeight:600,marginTop:"12px",color:"#495057"},children:"PDF Generation"}),e.jsx("p",{style:{fontSize:"12px",color:"#6c757d",margin:0},children:"Professional quotes with QR"})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",padding:"20px",borderRadius:"16px",border:"2px solid rgba(102, 126, 234, 0.2)"},children:[e.jsx("i",{className:"bi bi-share-fill",style:{fontSize:"32px",color:"#667eea"}}),e.jsx("h5",{style:{fontSize:"14px",fontWeight:600,marginTop:"12px",color:"#495057"},children:"Easy Sharing"}),e.jsx("p",{style:{fontSize:"12px",color:"#6c757d",margin:0},children:"WhatsApp, Email & QR codes"})]})})]}),e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsxs(A.button,{type:"button",onClick:d,whileHover:{scale:1.02},whileTap:{scale:.98},style:{background:"#e9ecef",border:"none",color:"#495057",padding:"12px 32px",borderRadius:"12px",fontSize:"16px",fontWeight:600,cursor:"pointer"},children:[e.jsx("i",{className:"bi bi-arrow-left me-2"}),"Back"]}),e.jsxs(A.button,{type:"button",onClick:k,whileHover:{scale:1.05},whileTap:{scale:.95},style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",border:"none",color:"white",padding:"14px 40px",borderRadius:"12px",fontSize:"18px",fontWeight:700,cursor:"pointer",boxShadow:"0 8px 25px rgba(102, 126, 234, 0.4)"},children:[e.jsx("i",{className:"bi bi-rocket-takeoff-fill me-2"}),"Start Creating Quotations"]})]})]})]})},n)})]})})})]})};function Re({className:c=""}){const[i,n]=g.useState("auto");g.useEffect(()=>{const r=localStorage.getItem("app_theme");if(r)n(r);else{const h=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;n(h?"dark":"light")}},[]),g.useEffect(()=>{const r=h=>{let u;h==="auto"?u=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":u=h,document.documentElement.setAttribute("data-bs-theme",u),u==="dark"?(document.body.style.backgroundColor="#121212",document.body.style.color="#ffffff"):(document.body.style.backgroundColor="#ffffff",document.body.style.color="#000000"),localStorage.setItem("app_theme",h)};if(r(i),i==="auto"){const h=window.matchMedia("(prefers-color-scheme: dark)"),u=()=>r("auto");return h.addEventListener("change",u),()=>h.removeEventListener("change",u)}},[i]);const o=r=>{n(r)},a=()=>{switch(i){case"light":return"bi-sun-fill";case"dark":return"bi-moon-fill";case"auto":return"bi-circle-half";default:return"bi-circle-half"}},l=()=>{switch(i){case"light":return"Light";case"dark":return"Dark";case"auto":return"Auto";default:return"Auto"}};return e.jsxs("div",{className:`dropdown ${c}`,children:[e.jsxs("button",{className:"btn text-white position-relative",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",title:`Current theme: ${l()}`,style:{background:"rgba(255,255,255,0.15)",backdropFilter:"blur(10px)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"12px",width:"44px",height:"44px",transition:"all 0.3s ease",boxShadow:"0 4px 15px rgba(255,255,255,0.1)"},onMouseEnter:r=>{r.currentTarget.style.background="rgba(255,255,255,0.25)",r.currentTarget.style.transform="scale(1.05)",r.currentTarget.style.boxShadow="0 6px 20px rgba(255,255,255,0.2)"},onMouseLeave:r=>{r.currentTarget.style.background="rgba(255,255,255,0.15)",r.currentTarget.style.transform="scale(1)",r.currentTarget.style.boxShadow="0 4px 15px rgba(255,255,255,0.1)"},children:[e.jsx("i",{className:`${a()} fs-5`}),e.jsx("span",{className:"position-absolute top-0 start-100 translate-middle rounded-circle theme-indicator",style:{background:i==="light"?"linear-gradient(135deg, #FFD700 0%, #FFA500 100%)":i==="dark"?"linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)":"linear-gradient(135deg, #FF6B6B 0%, #EE5A24 100%)",width:"10px",height:"10px",border:"2px solid white",boxShadow:"0 2px 8px rgba(0,0,0,0.3), 0 0 0 0 rgba(255, 255, 255, 0.7)",animation:"theme-pulse 2s infinite"},children:e.jsx("span",{className:"visually-hidden",children:"Theme indicator"})})]}),e.jsxs("ul",{className:"dropdown-menu dropdown-menu-end shadow-lg",style:{background:"rgba(255,255,255,0.98)",backdropFilter:"blur(15px)",border:"1px solid rgba(102, 126, 234, 0.2)",borderRadius:"16px",minWidth:"220px",padding:"8px",boxShadow:"0 10px 40px rgba(0,0,0,0.15)",marginTop:"8px"},children:[e.jsx("li",{children:e.jsxs("h6",{className:"dropdown-header fw-bold px-3 py-2",style:{color:"#667eea",fontSize:"0.9rem",marginBottom:"4px"},children:[e.jsx("i",{className:"bi bi-palette me-2"}),"Choose Theme"]})}),e.jsx("li",{children:e.jsxs("button",{className:`dropdown-item d-flex align-items-center px-3 py-2 rounded-3 mx-1 mb-1 ${i==="light"?"active":""}`,onClick:()=>o("light"),style:{transition:"all 0.2s ease",background:i==="light"?"linear-gradient(135deg, #FFD700 0%, #FFA500 100%)":"rgba(0,0,0,0.02)",color:i==="light"?"white":"#333",fontWeight:i==="light"?"600":"500",border:"none",fontSize:"0.9rem"},onMouseEnter:r=>{i!=="light"&&(r.currentTarget.style.background="rgba(255, 215, 0, 0.15)",r.currentTarget.style.color="#333")},onMouseLeave:r=>{i!=="light"&&(r.currentTarget.style.background="rgba(0,0,0,0.02)",r.currentTarget.style.color="#333")},children:[e.jsx("i",{className:"bi bi-sun-fill me-2",style:{fontSize:"1rem"}}),e.jsx("span",{className:"flex-grow-1 text-start",children:"Light Mode"}),i==="light"&&e.jsx("i",{className:"bi bi-check-lg ms-2"})]})}),e.jsx("li",{children:e.jsxs("button",{className:`dropdown-item d-flex align-items-center px-3 py-2 rounded-3 mx-1 mb-1 ${i==="dark"?"active":""}`,onClick:()=>o("dark"),style:{transition:"all 0.2s ease",background:i==="dark"?"linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)":"rgba(0,0,0,0.02)",color:i==="dark"?"white":"#333",fontWeight:i==="dark"?"600":"500",border:"none",fontSize:"0.9rem"},onMouseEnter:r=>{i!=="dark"&&(r.currentTarget.style.background="rgba(74, 144, 226, 0.15)",r.currentTarget.style.color="#333")},onMouseLeave:r=>{i!=="dark"&&(r.currentTarget.style.background="rgba(0,0,0,0.02)",r.currentTarget.style.color="#333")},children:[e.jsx("i",{className:"bi bi-moon-fill me-2",style:{fontSize:"1rem"}}),e.jsx("span",{className:"flex-grow-1 text-start",children:"Dark Mode"}),i==="dark"&&e.jsx("i",{className:"bi bi-check-lg ms-2"})]})}),e.jsx("li",{children:e.jsxs("button",{className:`dropdown-item d-flex align-items-center px-3 py-2 rounded-3 mx-1 mb-1 ${i==="auto"?"active":""}`,onClick:()=>o("auto"),style:{transition:"all 0.2s ease",background:i==="auto"?"linear-gradient(135deg, #FF6B6B 0%, #EE5A24 100%)":"rgba(0,0,0,0.02)",color:i==="auto"?"white":"#333",fontWeight:i==="auto"?"600":"500",border:"none",fontSize:"0.9rem"},onMouseEnter:r=>{i!=="auto"&&(r.currentTarget.style.background="rgba(255, 107, 107, 0.15)",r.currentTarget.style.color="#333")},onMouseLeave:r=>{i!=="auto"&&(r.currentTarget.style.background="rgba(0,0,0,0.02)",r.currentTarget.style.color="#333")},children:[e.jsx("i",{className:"bi bi-circle-half me-2",style:{fontSize:"1rem"}}),e.jsx("span",{className:"flex-grow-1 text-start",children:"Auto (System)"}),i==="auto"&&e.jsx("i",{className:"bi bi-check-lg ms-2"})]})}),e.jsx("li",{children:e.jsx("hr",{className:"dropdown-divider mx-2 my-2",style:{opacity:.2}})}),e.jsx("li",{children:e.jsx("div",{className:"dropdown-item-text px-3 py-2",children:e.jsxs("small",{style:{color:"#667eea",fontWeight:"500",fontSize:"0.8rem",lineHeight:"1.3"},children:[e.jsx("i",{className:"bi bi-info-circle me-2"}),"Auto mode follows your system preference"]})})})]})]})}function gs(){const{user:c,logout:i}=Q(),[n,o]=g.useState(!1),a=async()=>{try{await i(),o(!1)}catch(r){console.error("Logout error:",r)}},l=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsxs("header",{className:"sticky-top",style:{background:"linear-gradient(90deg, #312e81, #4338ca)",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",zIndex:1e3},children:[e.jsx("div",{className:"container-fluid",style:{maxWidth:"1400px",padding:"0 1.5rem"},children:e.jsxs("div",{className:"d-flex justify-content-between align-items-center",style:{minHeight:"64px",padding:"0.75rem 0"},children:[e.jsx(z,{to:"/",className:"text-decoration-none",onClick:l,children:e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx("i",{className:"bi bi-calculator-fill text-violet",style:{fontSize:"1.25rem",color:"#a855f7"}}),e.jsxs("div",{children:[e.jsx("span",{className:"text-white fw-semibold",style:{fontSize:"1.1rem",letterSpacing:"0.3px"},children:"Estimatix"}),e.jsx("span",{className:"text-muted ms-2 d-none d-lg-inline",style:{fontSize:"0.85rem",color:"#94a3b8"},children:"Professional Estimation Suite"})]})]})}),e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx(Re,{}),c?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"d-flex align-items-center d-sm-none",children:e.jsx("div",{className:"bg-white bg-opacity-20 rounded-circle d-flex align-items-center justify-content-center text-white",style:{width:"38px",height:"38px",backdropFilter:"blur(10px)",border:"1px solid rgba(255,255,255,0.3)"},children:e.jsx("i",{className:"bi bi-person-fill"})})}),e.jsx("button",{className:"btn text-white",style:{width:"42px",height:"42px",background:"rgba(255,255,255,0.15)",backdropFilter:"blur(10px)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"12px",transition:"all 0.3s ease"},onMouseEnter:r=>{r.currentTarget.style.background="rgba(255,255,255,0.25)",r.currentTarget.style.transform="scale(1.05)"},onMouseLeave:r=>{r.currentTarget.style.background="rgba(255,255,255,0.15)",r.currentTarget.style.transform="scale(1)"},onClick:()=>o(!n),"aria-label":"Toggle menu",children:e.jsx("i",{className:`bi ${n?"bi-x-lg":"bi-list"} fs-5`})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(z,{to:"/login",className:"btn text-white text-decoration-none",style:{background:"rgba(255,255,255,0.15)",backdropFilter:"blur(10px)",border:"1px solid rgba(255,255,255,0.3)",borderRadius:"10px",fontWeight:"500",transition:"all 0.3s ease"},onMouseEnter:r=>{r.currentTarget.style.background="rgba(255,255,255,0.25)",r.currentTarget.style.transform="translateY(-1px)"},onMouseLeave:r=>{r.currentTarget.style.background="rgba(255,255,255,0.15)",r.currentTarget.style.transform="translateY(0)"},onClick:l,children:[e.jsx("i",{className:"bi bi-box-arrow-in-right me-2"}),e.jsx("span",{className:"d-none d-sm-inline",children:"Login"})]}),e.jsxs(z,{to:"/signup",className:"btn text-decoration-none",style:{background:"linear-gradient(45deg, #ffffff 0%, #f8f9fa 100%)",color:"#667eea",border:"none",borderRadius:"10px",fontWeight:"600",boxShadow:"0 4px 15px rgba(255,255,255,0.2)",transition:"all 0.3s ease"},onMouseEnter:r=>{r.currentTarget.style.transform="translateY(-2px)",r.currentTarget.style.boxShadow="0 6px 20px rgba(255,255,255,0.3)"},onMouseLeave:r=>{r.currentTarget.style.transform="translateY(0)",r.currentTarget.style.boxShadow="0 4px 15px rgba(255,255,255,0.2)"},onClick:l,children:[e.jsx("i",{className:"bi bi-person-plus me-2"}),e.jsx("span",{className:"d-none d-sm-inline",children:"Sign Up"})]})]})]})]})}),n&&c&&e.jsx("div",{className:"shadow-lg",style:{background:"linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",borderTop:"1px solid rgba(102, 126, 234, 0.1)"},children:e.jsxs("div",{className:"container-fluid px-4 py-4",children:[e.jsxs("div",{className:"d-flex align-items-center mb-4 pb-4",style:{borderBottom:"2px solid rgba(102, 126, 234, 0.1)"},children:[e.jsx("div",{className:"rounded-circle d-flex align-items-center justify-content-center text-white me-3",style:{width:"50px",height:"50px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 4px 15px rgba(102, 126, 234, 0.3)"},children:e.jsx("i",{className:"bi bi-person-fill fs-5"})}),e.jsxs("div",{children:[e.jsx("div",{className:"fw-bold text-dark",style:{fontSize:"1.1rem",fontFamily:"'Segoe UI', system-ui, sans-serif"},children:c?.email?.split("@")[0]}),e.jsx("small",{style:{color:"#667eea",fontWeight:"500"},children:c?.email})]})]}),e.jsxs("div",{className:"row g-3",children:[e.jsx("div",{className:"col-6",children:e.jsxs(z,{to:"/dashboard",className:"btn w-100 text-start text-decoration-none",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",border:"none",borderRadius:"12px",fontWeight:"500",transition:"all 0.3s ease",boxShadow:"0 4px 15px rgba(102, 126, 234, 0.2)"},onMouseEnter:r=>{r.currentTarget.style.transform="translateY(-2px)",r.currentTarget.style.boxShadow="0 6px 20px rgba(102, 126, 234, 0.3)"},onMouseLeave:r=>{r.currentTarget.style.transform="translateY(0)",r.currentTarget.style.boxShadow="0 4px 15px rgba(102, 126, 234, 0.2)"},onClick:l,children:[e.jsx("i",{className:"bi bi-speedometer2 me-2"}),"Dashboard"]})}),e.jsx("div",{className:"col-6",children:e.jsxs(z,{to:"/multi-calculator",className:"btn w-100 text-start text-decoration-none",style:{background:"linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",color:"white",border:"none",borderRadius:"12px",fontWeight:"500",transition:"all 0.3s ease",boxShadow:"0 4px 15px rgba(17, 153, 142, 0.2)"},onMouseEnter:r=>{r.currentTarget.style.transform="translateY(-2px)",r.currentTarget.style.boxShadow="0 6px 20px rgba(17, 153, 142, 0.3)"},onMouseLeave:r=>{r.currentTarget.style.transform="translateY(0)",r.currentTarget.style.boxShadow="0 4px 15px rgba(17, 153, 142, 0.2)"},onClick:l,children:[e.jsx("i",{className:"bi bi-calculator me-2"}),"Multi-Item"]})}),e.jsx("div",{className:"col-6",children:e.jsxs(z,{to:"/calculator",className:"btn w-100 text-start text-decoration-none",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",border:"none",borderRadius:"12px",fontWeight:"500",transition:"all 0.3s ease",boxShadow:"0 4px 15px rgba(102, 126, 234, 0.2)"},onMouseEnter:r=>{r.currentTarget.style.transform="translateY(-2px)",r.currentTarget.style.boxShadow="0 6px 20px rgba(102, 126, 234, 0.3)"},onMouseLeave:r=>{r.currentTarget.style.transform="translateY(0)",r.currentTarget.style.boxShadow="0 4px 15px rgba(102, 126, 234, 0.2)"},onClick:l,children:[e.jsx("i",{className:"bi bi-gear me-2"}),"Simple Calc"]})}),e.jsx("div",{className:"col-6",children:e.jsxs(z,{to:"/billing",className:"btn w-100 text-start text-decoration-none",style:{background:"linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",color:"#4a5568",border:"none",borderRadius:"12px",fontWeight:"500",transition:"all 0.3s ease",boxShadow:"0 4px 15px rgba(251, 194, 235, 0.2)"},onMouseEnter:r=>{r.currentTarget.style.transform="translateY(-2px)",r.currentTarget.style.boxShadow="0 6px 20px rgba(251, 194, 235, 0.3)"},onMouseLeave:r=>{r.currentTarget.style.transform="translateY(0)",r.currentTarget.style.boxShadow="0 4px 15px rgba(251, 194, 235, 0.2)"},onClick:l,children:[e.jsx("i",{className:"bi bi-credit-card me-2"}),"Billing"]})}),e.jsx("div",{className:"col-12",children:e.jsxs(z,{to:"/admin",className:"btn w-100 text-start text-decoration-none",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",border:"none",borderRadius:"12px",fontWeight:"500",transition:"all 0.3s ease",boxShadow:"0 4px 15px rgba(102, 126, 234, 0.2)"},onMouseEnter:r=>{r.currentTarget.style.transform="translateY(-2px)",r.currentTarget.style.boxShadow="0 6px 20px rgba(102, 126, 234, 0.3)"},onMouseLeave:r=>{r.currentTarget.style.transform="translateY(0)",r.currentTarget.style.boxShadow="0 4px 15px rgba(102, 126, 234, 0.2)"},onClick:l,children:[e.jsx("i",{className:"bi bi-shield-check me-2"}),"Admin Settings"]})})]}),e.jsx("div",{className:"mt-4 pt-4",style:{borderTop:"2px solid rgba(102, 126, 234, 0.1)"},children:e.jsxs("div",{className:"row g-3",children:[e.jsx("div",{className:"col-6",children:e.jsxs("button",{className:"btn w-100 text-start",style:{background:"rgba(102, 126, 234, 0.1)",color:"#667eea",border:"1px solid rgba(102, 126, 234, 0.2)",borderRadius:"10px",fontWeight:"500",transition:"all 0.3s ease"},onMouseEnter:r=>{r.currentTarget.style.background="rgba(102, 126, 234, 0.15)",r.currentTarget.style.transform="translateY(-1px)"},onMouseLeave:r=>{r.currentTarget.style.background="rgba(102, 126, 234, 0.1)",r.currentTarget.style.transform="translateY(0)"},children:[e.jsx("i",{className:"bi bi-file-earmark-pdf me-2"}),"Export PDF"]})}),e.jsx("div",{className:"col-6",children:e.jsxs("button",{className:"btn w-100 text-start",style:{background:"rgba(17, 153, 142, 0.1)",color:"#11998e",border:"1px solid rgba(17, 153, 142, 0.2)",borderRadius:"10px",fontWeight:"500",transition:"all 0.3s ease"},onMouseEnter:r=>{r.currentTarget.style.background="rgba(17, 153, 142, 0.15)",r.currentTarget.style.transform="translateY(-1px)"},onMouseLeave:r=>{r.currentTarget.style.background="rgba(17, 153, 142, 0.1)",r.currentTarget.style.transform="translateY(0)"},children:[e.jsx("i",{className:"bi bi-share me-2"}),"Share Quote"]})})]})}),e.jsx("div",{className:"mt-4 pt-4",style:{borderTop:"2px solid rgba(102, 126, 234, 0.1)"},children:e.jsxs("button",{className:"btn w-100 text-center",style:{background:"linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",color:"white",border:"none",borderRadius:"12px",fontWeight:"600",transition:"all 0.3s ease",boxShadow:"0 4px 15px rgba(255, 107, 107, 0.2)"},onMouseEnter:r=>{r.currentTarget.style.transform="translateY(-2px)",r.currentTarget.style.boxShadow="0 6px 20px rgba(255, 107, 107, 0.3)"},onMouseLeave:r=>{r.currentTarget.style.transform="translateY(0)",r.currentTarget.style.boxShadow="0 4px 15px rgba(255, 107, 107, 0.2)"},onClick:a,children:[e.jsx("i",{className:"bi bi-box-arrow-right me-2"}),"Sign Out"]})})]})})]}),n&&e.jsx("div",{className:"position-fixed w-100 h-100 bg-black bg-opacity-25",style:{top:0,left:0,zIndex:1040},onClick:l}),e.jsx("style",{children:`
        .tiny-text {
          font-size: 0.7rem;
          line-height: 1;
        }
        
        @media (max-width: 576px) {
          .container-fluid {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
        }
        
        /* Ensure mobile menu appears above other content */
        .sticky-top {
          z-index: 1050;
        }
        
        /* Mobile-friendly button sizes */
        @media (max-width: 768px) {
          .btn-sm {
            padding: 0.25rem 0.5rem;
            font-size: 0.875rem;
          }
        }
        
        /* Improved touch targets for mobile */
        .btn {
          min-height: 38px;
        }
        
        /* Better spacing on mobile */
        @media (max-width: 576px) {
          .gap-2 {
            gap: 0.25rem !important;
          }
        }
      `})]})}function ps(){const{user:c,logout:i}=Q(),n=async()=>{try{await i()}catch(o){console.error("Logout error:",o)}};return e.jsx("header",{className:"py-3 shadow d-none d-lg-block",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsx("div",{children:e.jsxs(z,{to:"/",className:"text-white text-decoration-none",children:[e.jsxs("h1",{className:"h5 mb-0 text-white",children:[e.jsx("i",{className:"bi bi-calculator-fill me-2"}),"Estimatix"]}),e.jsx("small",{className:"opacity-75 text-white",children:"Professional Estimation Platform"})]})}),e.jsx("nav",{className:"d-flex gap-2 align-items-center",children:c?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"d-flex gap-1 me-3",children:[e.jsxs(z,{to:"/dashboard",className:"btn btn-light btn-sm",children:[e.jsx("i",{className:"bi bi-speedometer2 me-1"}),"Dashboard"]}),e.jsxs(z,{to:"/multi-calculator",className:"btn btn-light btn-sm",children:[e.jsx("i",{className:"bi bi-calculator me-1"}),"Multi-Item"]}),e.jsxs(z,{to:"/calculator",className:"btn btn-light btn-sm",children:[e.jsx("i",{className:"bi bi-gear me-1"}),"Simple Calc"]}),e.jsxs(z,{to:"/billing",className:"btn btn-light btn-sm",children:[e.jsx("i",{className:"bi bi-credit-card me-1"}),"Billing"]}),e.jsxs(z,{to:"/admin",className:"btn btn-sm",style:{background:"linear-gradient(90deg, #facc15, #eab308)",color:"#1e1e1e",fontWeight:"600",border:"none",boxShadow:"0 0 8px rgba(250, 204, 21, 0.4)",transition:"all 0.3s ease"},onMouseEnter:o=>{o.currentTarget.style.boxShadow="0 0 12px rgba(250, 204, 21, 0.6)",o.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:o=>{o.currentTarget.style.boxShadow="0 0 8px rgba(250, 204, 21, 0.4)",o.currentTarget.style.transform="translateY(0)"},children:[e.jsx("i",{className:"bi bi-shield-check me-1"}),"Admin"]})]}),e.jsx(Re,{}),e.jsxs("div",{className:"dropdown",children:[e.jsxs("button",{className:"btn btn-outline-light btn-sm dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:[e.jsx("i",{className:"bi bi-person-circle me-1"}),c?.email]}),e.jsxs("ul",{className:"dropdown-menu dropdown-menu-end",children:[e.jsx("li",{children:e.jsxs("h6",{className:"dropdown-header",children:[e.jsx("i",{className:"bi bi-person me-2"}),"Account"]})}),e.jsx("li",{children:e.jsxs(z,{className:"dropdown-item",to:"/dashboard",children:[e.jsx("i",{className:"bi bi-speedometer2 me-2"}),"Dashboard"]})}),e.jsx("li",{children:e.jsxs(z,{className:"dropdown-item",to:"/billing",children:[e.jsx("i",{className:"bi bi-credit-card me-2"}),"Billing & Subscription"]})}),e.jsx("li",{children:e.jsxs(z,{className:"dropdown-item",to:"/admin",children:[e.jsx("i",{className:"bi bi-gear me-2"}),"Admin Settings"]})}),e.jsx("li",{children:e.jsx("hr",{className:"dropdown-divider"})}),e.jsx("li",{children:e.jsxs("button",{className:"dropdown-item text-danger",onClick:n,children:[e.jsx("i",{className:"bi bi-box-arrow-right me-2"}),"Sign Out"]})})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(Re,{}),e.jsxs("div",{className:"d-flex gap-1",children:[e.jsxs(z,{to:"/login",className:"btn btn-outline-light btn-sm",children:[e.jsx("i",{className:"bi bi-box-arrow-in-right me-1"}),"Login"]}),e.jsxs(z,{to:"/signup",className:"btn btn-light btn-sm",children:[e.jsx("i",{className:"bi bi-person-plus me-1"}),"Sign Up"]})]})]})})]})})})}function bs(){return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"d-lg-none",children:e.jsx(gs,{})}),e.jsx("div",{className:"d-none d-lg-block",children:e.jsx(ps,{})})]})}function me({children:c}){const{user:i,loading:n}=Q();return n?e.jsx("div",{className:"d-flex justify-content-center align-items-center",style:{height:"50vh"},children:e.jsx("div",{className:"spinner-border text-primary",role:"status",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):i?e.jsx(e.Fragment,{children:c}):e.jsx(Ke,{to:"/login"})}function fs({children:c}){const{user:i}=Q(),n=Ct();return n.pathname.includes("/login")||n.pathname.includes("/signup")||n.pathname.includes("/forgot-password")||!i?e.jsx(e.Fragment,{children:c}):e.jsxs(e.Fragment,{children:[e.jsx(bs,{}),c,e.jsx("footer",{className:"bg-dark text-white py-3 mt-auto",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsxs("p",{className:"mb-0",children:[e.jsx("strong",{children:"Estimatix"})," - Professional Estimation & Quotation Platform"]}),e.jsx("small",{className:"text-muted",children:"Powered by Firebase & Advanced SaaS Technology | Version 1.0"})]}),e.jsx("div",{className:"col-md-6 text-md-end",children:e.jsxs("div",{className:"d-flex justify-content-md-end gap-3",children:[e.jsxs("small",{children:[e.jsx("i",{className:"bi bi-calculator me-1"}),"Smart Estimations"]}),e.jsxs("small",{children:[e.jsx("i",{className:"bi bi-file-earmark-pdf me-1"}),"PDF Export"]}),e.jsxs("small",{children:[e.jsx("i",{className:"bi bi-palette me-1"}),"Theme Toggle"]})]})})]})})})]})}function js({children:c}){const{user:i}=Q(),[n,o]=g.useState(!1);g.useEffect(()=>{if(i){const l=localStorage.getItem("estimatix-onboarded");o(!l)}},[i]);const a=()=>{o(!1)};return i&&n?e.jsx(xs,{onComplete:a}):e.jsx(e.Fragment,{children:c})}function ys(){const{user:c}=Q();return e.jsx(fs,{children:e.jsx("main",{className:"flex-grow-1",children:e.jsxs(St,{children:[e.jsx(X,{path:"/login",element:e.jsx(Kt,{})}),e.jsx(X,{path:"/signup",element:e.jsx(Zt,{})}),e.jsx(X,{path:"/forgot-password",element:e.jsx(es,{})}),e.jsx(X,{path:"/shared/:shareToken",element:e.jsx(us,{})}),e.jsx(X,{path:"/dashboard",element:e.jsx(me,{children:e.jsx(Ve,{})})}),e.jsx(X,{path:"/billing",element:e.jsx(me,{children:e.jsx(os,{})})}),e.jsx(X,{path:"/calculator",element:e.jsx(me,{children:e.jsx(cs,{})})}),e.jsx(X,{path:"/multi-calculator",element:e.jsx(me,{children:e.jsx(hs,{})})}),e.jsx(X,{path:"/admin",element:e.jsx(me,{children:e.jsx(ds,{})})}),e.jsx(X,{path:"/",element:e.jsx(me,{children:e.jsx(Ve,{})})}),e.jsx(X,{path:"*",element:e.jsx(Ke,{to:"/"})})]})})},c?.uid||"logged-out")}function Ns(){return e.jsx(Jt,{children:e.jsx(Vt,{children:e.jsx(kt,{children:e.jsx("div",{className:"min-vh-100 d-flex flex-column",children:e.jsx(js,{children:e.jsx(ys,{})})})})})})}(()=>{try{const c=localStorage.getItem("theme"),i=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,n=c==="dark"||c==="light"?c:i?"dark":"light";document.documentElement.setAttribute("data-bs-theme",n==="dark"?"dark":"light")}catch{}})();Ft.createRoot(document.getElementById("app")).render(Se.createElement(Se.StrictMode,null,Se.createElement(Ns,null)));"serviceWorker"in navigator&&Je(async()=>{const{registerSW:c}=await import("./virtual_pwa-register-DR7yZLJt.js");return{registerSW:c}},__vite__mapDeps([0,1,2,3])).then(({registerSW:c})=>{c({immediate:!0,onRegisteredSW:()=>{},onNeedRefresh(){},onOfflineReady(){}})}).catch(()=>{});
