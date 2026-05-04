/* ─── PLACES DATA ─── */
const PLACES = {
  boracay: {
    beach: [
      {id:'b1',name:'White Beach Station 1',area:'Station 1, Boracay',distance:"0.5 km from D'Mall",cost:'Free (chair ₱150)',lat:11.9674,lng:121.9213,hours:'Open 24hrs',tips:'Best at sunrise before the crowds.',img:'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=140&q=55'},
      {id:'b2',name:'Puka Beach',area:'North Boracay',distance:"8.2 km from D'Mall",cost:'Free',lat:11.9940,lng:121.9327,hours:'Open 24hrs',tips:'Bring your own food — few vendors here.',img:'https://images.unsplash.com/photo-1559666126-84f389727b9a?w=140&q=55'},
      {id:'b3',name:'Diniwid Beach',area:'North of Station 1',distance:"1.4 km from D'Mall",cost:'Free',lat:11.9720,lng:121.9178,hours:'Open 24hrs',tips:'Rocky entry — wear water shoes.',img:'https://images.unsplash.com/photo-1573790387438-4da905039392?w=140&q=55'}
    ],
    restaurant: [
      {id:'r1',name:"Real Coffee & Tea Café",area:'Station 2',distance:"0.2 km from D'Mall",cost:'₱200–400/person',lat:11.9645,lng:121.9241,hours:'7AM–10PM',tips:'Order the buko pie — sells out fast.',img:'https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=140&q=55'},
      {id:'r2',name:'Smoke BBQ',area:'Station 2 beachfront',distance:"0.3 km from D'Mall",cost:'₱450–700/person',lat:11.9638,lng:121.9248,hours:'11AM–11PM',tips:'Reserve a beachfront table before 6PM.',img:'https://images.unsplash.com/photo-1529516548873-9ce57c8f155e?w=140&q=55'},
      {id:'r3',name:"Jonah's Fruit Shake",area:'Station 2',distance:"0.1 km from D'Mall",cost:'₱80–150/person',lat:11.9642,lng:121.9244,hours:'8AM–11PM',tips:'Queue can be long at sunset.',img:'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=140&q=55'}
    ],
    tourist_spot: [
      {id:'t1',name:'Mt. Luho View Deck',area:'North Boracay',distance:"5.5 km from D'Mall",cost:'₱50 entrance',lat:11.9856,lng:121.9312,hours:'7AM–5PM',tips:'Go at 5AM for sunrise.',img:'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=140&q=55'}
    ],
    shopping: [
      {id:'s1',name:"D'Mall Boracay",area:'Station 2',distance:'0 km (reference)',cost:'Varies',lat:11.9640,lng:121.9243,hours:'9AM–11PM',tips:'Best prices on the second level.',img:'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=140&q=55'}
    ],
    nightlife: [
      {id:'n1',name:'Epic Bar',area:'Station 2 beachfront',distance:"0.2 km from D'Mall",cost:'₱300 min spend',lat:11.9639,lng:121.9246,hours:'10PM–4AM',tips:'Best nights are Thursday and Saturday.',img:'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=140&q=55'}
    ],
    water_sports: [
      {id:'w1',name:"Ariel's Point Cliff Diving",area:'Buruanga (boat trip)',distance:'45 min by boat',cost:'₱1,800/person all incl.',lat:11.9290,lng:121.8950,hours:'Departs 9AM daily',tips:'Bring sunscreen — 6+ hours outdoors.',img:'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=140&q=55'}
    ],
    souvenirs: [
      {id:'sov1',name:"Pasalubong Shops D'Mall",area:'Station 2',distance:"0.1 km from D'Mall",cost:'₱50–500',lat:11.9641,lng:121.9243,hours:'9AM–10PM',tips:'Buy dried mangoes in bulk.',img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=140&q=55'}
    ],
    nature_hike: [
      {id:'nh1',name:'Bat Cave & Forest Trail',area:'North Boracay',distance:"6.0 km from D'Mall",cost:'₱100 guide fee',lat:11.9870,lng:121.9320,hours:'4PM–7PM',tips:'Visit at 5:30PM when bats emerge.',img:'https://images.unsplash.com/photo-1448375240586-882707db888b?w=140&q=55'}
    ],
    camping: [
      {id:'c1',name:'Puka Beach Campsite',area:'North Boracay',distance:"8.2 km from D'Mall",cost:'₱500/tent/night',lat:11.9940,lng:121.9330,hours:'Check-in 3PM',tips:'Only 10 tent slots — book ahead.',img:'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=140&q=55'}
    ]
  }
};

/* ─── EXPENSES ─── */
let EXPENSES = [
  {id:'e1',icon:'✈️',type:'Flight',title:'Cebu Pacific MNL-BOR',total:12000,
   splitMode:'equal',splits:[{name:'You',amount:3000},{name:'Juan',amount:3000},{name:'Maria',amount:3000},{name:'Carlo',amount:3000}],
   paidBy:'You',day:-1,receipt:null},
  {id:'e2',icon:'🏨',type:'Hotel',title:'Sand Bar Resort (2 nights)',total:4800,
   splitMode:'equal',splits:[{name:'You',amount:1200},{name:'Juan',amount:1200},{name:'Maria',amount:1200},{name:'Carlo',amount:1200}],
   paidBy:'Juan',day:-1,receipt:null},
  {id:'e3',icon:'🍽️',type:'Restaurant',title:'Lunch at Real Coffee',total:1200,
   splitMode:'custom',splits:[{name:'You',amount:450},{name:'Juan',amount:280},{name:'Maria',amount:320},{name:'Carlo',amount:150}],
   paidBy:'Maria',day:0,receipt:null},
  {id:'e4',icon:'🤿',type:'Tour',title:"Ariel's Point Island Hopping",total:3600,
   splitMode:'equal',splits:[{name:'You',amount:900},{name:'Juan',amount:900},{name:'Maria',amount:900},{name:'Carlo',amount:900}],
   paidBy:'Carlo',day:1,receipt:null}
];

/* ─── ROLES ─── */
const ROLES = {
  owner:      {label:'👑 Organizer',  color:'#C0392B',fg:'#FDEAEA', canEditTour:true, canEditBudget:true, canManageRoles:true},
  co_owner:   {label:'🤝 Katuwang',   color:'#1A4FA0',fg:'#E6EFFC', canEditTour:true,  canEditBudget:false,canManageRoles:false},
  tour_org:   {label:'🗺️ Tour Maestro',color:'#2D6A4F',fg:'#E8F5EE', canEditTour:true,  canEditBudget:false,canManageRoles:false},
  budget_mgr: {label:'💰 Kwentador',  color:'#B8860B',fg:'#FEF3D0', canEditTour:false, canEditBudget:true, canManageRoles:false},
  guest:      {label:'👁️ Pasahero',   color:'#7A5C4A',fg:'#FAF0D7', canEditTour:false, canEditBudget:false,canManageRoles:false}
};

/* ─── MEMBERS ─── */
let MEMBERS = [
  {id:'m1',name:'You',   role:'owner',     bg:'#1A4FA0',fg:'#E6EFFC'},
  {id:'m2',name:'Juan',  role:'guest',     bg:'#2D6A4F',fg:'#E8F5EE'},
  {id:'m3',name:'Maria', role:'guest',     bg:'#C0392B',fg:'#FDEAEA'},
  {id:'m4',name:'Carlo', role:'guest',     bg:'#F4A800',fg:'#FEF3D0'}
];
/* Keep MEMBERS[0].name in sync with the logged-in user */
function syncMyName() {
  var n = myName();
  var me = MEMBERS.find(function(m){ return m.id === 'm1'; });
  if (!me) return;
  var oldName = me.name;
  if (oldName === n) return;
  me.name = n;
  // Update any sample expense splits that referenced old name
  EXPENSES.forEach(function(e){
    (e.splits||[]).forEach(function(s){ if(s.name===oldName) s.name=n; });
    if(e.paidBy===oldName) e.paidBy=n;
  });
  SOLO_MEMBERS = SOLO_MEMBERS.map(function(m){ return m==='Me'?n:m; });
}

/* ─── STATE ─── */
const S = {
  dest:'Boracay', destKey:'boracay', days:3, group:4,
  budgetAmount:20000, budgetType:'total', wizStep:0, isOwner:true,
  tripDays:[], currentDay:0, user:null,
  selectedET:null, editingExpId:null,
  mapInit:false, leafMap:null,
  roleMemberId:null,
  budgetDayFilter:-2
};


/* ─── USER NAME HELPER ─── */
function myName() {
  return S.user && S.user.name ? S.user.name.split(' ')[0] : 'You';
}

/* ─── SOLO BUDGET STATE ─── */
let SOLO_EXPENSES = [];
let SOLO_MEMBERS  = ['Me'];
let _soloEditingId   = null;
let _soloSelectedET  = null;

/* ─── MY BUDGET (personal, per-member, inside trip) ─── */
let MY_EXPENSES = [];
let _mbEditingId = null;

function renderMyBudget() {
  var list = document.getElementById('mb-exp-list');
  if (!list) return;
  var total = MY_EXPENSES.reduce(function(s,e){ return s+e.total; },0);
  document.getElementById('mb-total').textContent = '₱'+total.toLocaleString();
  document.getElementById('mb-count').textContent = MY_EXPENSES.length + ' expense'+(MY_EXPENSES.length!==1?'s':'');
  if (MY_EXPENSES.length===0) {
    list.innerHTML = '<div style="text-align:center;padding:32px 16px;color:var(--earth-l);font-size:13px;">No personal expenses yet.<br>Tap + to log one.</div>';
    return;
  }
  list.innerHTML = MY_EXPENSES.map(function(e) {
    var itemsHtml = (e.items&&e.items.length) ? '<div style="font-size:10px;color:var(--earth-l);margin-top:3px;">'+e.items.map(function(it){return it.name+' x'+it.qty+' = ₱'+it.subtotal.toLocaleString();}).join(' &middot; ')+'</div>' : '';
    return '<div class="exp-card" style="margin-bottom:8px;">'
      +'<div style="display:flex;justify-content:space-between;align-items:flex-start;">'
      +'<div><span style="font-size:15px;">'+(e.icon||'💸')+'</span> <strong style="font-size:13px;">'+e.label+'</strong></div>'
      +'<div style="display:flex;gap:6px;align-items:center;">'
      +'<span style="font-size:14px;font-weight:700;color:var(--green-d)">₱'+e.total.toLocaleString()+'</span>'
      +'<button style="background:none;border:none;cursor:pointer;color:var(--earth-l);font-size:11px;" onclick="editMbExpense(''+e.id+'')">✏️</button>'
      +'<button style="background:none;border:none;cursor:pointer;color:#c0392b;font-size:11px;" onclick="deleteMbExpense(''+e.id+'')">✕</button>'
      +'</div></div>'
      +(e.note?'<div style="font-size:11px;color:var(--earth-l);margin-top:2px;">'+e.note+'</div>':'')
      +itemsHtml
      +(e.receipt?'<div style="font-size:10px;color:var(--blue);margin-top:3px;">📎 Receipt attached</div>':'')
      +'</div>';
  }).join('');
}

function deleteMbExpense(id) {
  MY_EXPENSES = MY_EXPENSES.filter(function(e){ return e.id!==id; });
  renderMyBudget();
}

function editMbExpense(id) {
  openMyBudgetSheet(id);
}

// openMyBudgetSheet defined below

/* ─── ISLAND GROUP DATA ─── */
const ISLAND_GROUPS = {
  luzon: {
    title:'LUZON',
    destinations:[
      {key:'batanes',  name:'Batanes',     region:'Cagayan Valley',        icon:'🌾',from:'₱3,500'},
      {key:'baguio',   name:'Baguio City', region:'Benguet, CAR',          icon:'🌲',from:'₱1,200'},
      {key:'vigan',    name:'Vigan',       region:'Ilocos Sur',            icon:'🏛️',from:'₱1,800'},
      {key:'sagada',   name:'Sagada',      region:'Mountain Province, CAR',icon:'⛰️',from:'₱900'},
      {key:'batangas', name:'Batangas',    region:'CALABARZON',            icon:'🤿',from:'₱1,100'},
      {key:'launion',  name:'La Union',    region:'Ilocos Region',         icon:'🏄',from:'₱1,000'},
      {key:'ilocosNorte',name:'Ilocos Norte',region:'Ilocos Region',      icon:'🌊',from:'₱1,500'},
      {key:'subic',    name:'Subic Bay',   region:'Zambales, Region III',  icon:'⚓',from:'₱1,800'},
      {key:'manila',   name:'Manila',      region:'Metro Manila, NCR',     icon:'🏙️',from:'₱1,500'},
      {key:'marinduque',name:'Marinduque', region:'MIMAROPA',              icon:'🥁',from:'₱1,200'}
    ]
  },
  visayas: {
    title:'VISAYAS',
    destinations:[
      {key:'boracay',  name:'Boracay',         region:'Aklan, Western Visayas',icon:'🏖️',from:'₱2,500'},
      {key:'cebu',     name:'Cebu',            region:'Central Visayas',       icon:'⛪',from:'₱1,800'},
      {key:'palawan',  name:'Palawan / El Nido',region:'MIMAROPA',             icon:'🏝️',from:'₱3,200'},
      {key:'bohol',    name:'Bohol',           region:'Central Visayas',       icon:'🦎',from:'₱2,000'},
      {key:'iloilo',   name:'Iloilo',          region:'Western Visayas',       icon:'🍜',from:'₱1,400'},
      {key:'bacolod',  name:'Bacolod',         region:'Western Visayas',       icon:'🎭',from:'₱1,200'},
      {key:'dumaguete',name:'Dumaguete',       region:'Negros Oriental',       icon:'🌊',from:'₱1,500'},
      {key:'siquijor', name:'Siquijor',        region:'Central Visayas',       icon:'🔮',from:'₱1,800'}
    ]
  },
  mindanao: {
    title:'MINDANAO',
    destinations:[
      {key:'siargao',  name:'Siargao',         region:'Surigao del Norte',     icon:'🏄',from:'₱2,800'},
      {key:'davao',    name:'Davao City',      region:'Davao Region',          icon:'🦅',from:'₱1,800'},
      {key:'camiguin', name:'Camiguin',        region:'Northern Mindanao',     icon:'🌋',from:'₱1,500'},
      {key:'cdo',      name:'Cagayan de Oro',  region:'Northern Mindanao',     icon:'🛶',from:'₱1,200'},
      {key:'bukidnon', name:'Bukidnon',        region:'Northern Mindanao',     icon:'🌿',from:'₱900'},
      {key:'zamboanga',name:'Zamboanga City',  region:'Zamboanga Peninsula',   icon:'💐',from:'₱1,400'},
      {key:'surigao',  name:'Surigao City',    region:'Caraga',                icon:'🌊',from:'₱1,100'},
      {key:'gensan',   name:'General Santos',  region:'SOCCSKSARGEN',          icon:'🐟',from:'₱1,300'}
    ]
  }
};

/* ─── HOTELS DATA ─── */
const HOTELS_BY_DEST = {
  boracay:[
    {id:'h1',name:'Henann Resort Boracay',address:'Station 1, White Beach',rooms:['Deluxe','Suite','Villa'],pricePerNight:6500,rating:9.1,reviews:2840,trending:true, tier:'luxury', tags:['Beachfront','Pool','Spa'],   img:'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&q=65'},
    {id:'h2',name:'Boracay Sands Hotel',  address:'Station 2, White Beach',rooms:['Standard','Deluxe'],    pricePerNight:2800,rating:8.4,reviews:1200,trending:false,tier:'midrange',tags:['Beachfront','Restaurant'],    img:'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=65'},
    {id:'h3',name:'Puka Shell Beach Resort',address:'Puka Beach, North Boracay',rooms:['Cottage','Bungalow'],pricePerNight:1800,rating:8.0,reviews:650,trending:true,tier:'budget', tags:['Quiet','Nature'],             img:'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&q=65'},
    {id:'h4',name:'Discovery Shores',     address:'Station 1, White Beach',rooms:['Junior Suite','Premier'],pricePerNight:12000,rating:9.5,reviews:3200,trending:true,tier:'luxury', tags:['Luxury','Spa','Beachfront'], img:'https://images.unsplash.com/photo-1455587734955-081b22074882?w=400&q=65'}
  ],
  cebu:[
    {id:'h5',name:"Shangri-La Mactan",    address:'Punta Engano Rd, Lapu-Lapu',rooms:['Garden','Ocean View','Villa'],pricePerNight:14000,rating:9.4,reviews:5100,trending:true, tier:'luxury', tags:['Island Resort','Spa'],img:'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&q=65'},
    {id:'h6',name:'Radisson Blu Cebu',    address:'Serging Osmeña Blvd, Cebu City',rooms:['Superior','Deluxe'],pricePerNight:5200,rating:8.7,reviews:1800,trending:true,tier:'midrange',tags:['City Center','Pool'],      img:'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=400&q=65'}
  ],
  siargao:[
    {id:'h7',name:'Nay Palad Hideaway',   address:'Siargao Island',rooms:['Floating Cottage','Tree House'],pricePerNight:18000,rating:9.7,reviews:340,trending:true, tier:'luxury', tags:['Eco-luxury','Private Beach'],img:'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400&q=65'},
    {id:'h8',name:'Kermit Surf Resort',   address:'General Luna, Siargao',rooms:['Dorm','Private Room'],   pricePerNight:1500, rating:8.5,reviews:1200,trending:true, tier:'budget', tags:['Surfer Vibe','Restaurant'],  img:'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&q=65'},
    {id:'h9',name:'Bravo Beach Resort',   address:'Dapa Road, General Luna',rooms:['Deluxe','Villa'],       pricePerNight:5500, rating:8.9,reviews:780, trending:false,tier:'midrange',tags:['Beach Access','Pool'],       img:'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=400&q=65'}
  ],
  palawan:[
    {id:'h10',name:'El Nido Resorts Lagen',address:'Lagen Island, El Nido',rooms:['Forest Room','Watercottage'],pricePerNight:22000,rating:9.6,reviews:1100,trending:true,tier:'luxury',tags:['Island Resort','All-inclusive'],img:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=65'},
    {id:'h11',name:'La Natura Resort',    address:'El Nido Town, Palawan',rooms:['Standard','Superior'],   pricePerNight:2800, rating:8.1,reviews:650, trending:false,tier:'midrange',tags:['Town Center','AC'],             img:'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&q=65'}
  ],
  manila:[
    {id:'h12',name:'Conrad Manila',       address:'Seaside Blvd, MOA Complex',rooms:['Deluxe','Suite','Penthouse'],pricePerNight:12000,rating:9.3,reviews:4200,trending:true,tier:'luxury',tags:['Bay View','Spa','Casino'],img:'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&q=65'},
    {id:'h13',name:'Seda Vertis North',   address:'Vertis North, Quezon City',rooms:['Deluxe','Executive'],pricePerNight:4500, rating:8.8,reviews:2100,trending:false,tier:'midrange',tags:['Business','Mall Access'],     img:'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&q=65'}
  ],
  baguio:[
    {id:'h14',name:'The Manor at Camp John Hay',address:'Camp John Hay, Baguio',rooms:['Deluxe','Suite','Cabin'],pricePerNight:8500,rating:9.1,reviews:1900,trending:true,tier:'luxury',tags:['Pine Forest','Golf','Spa'],img:'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&q=65'},
    {id:'h15',name:'Casa Vallejo Heritage Hotel',address:'Upper Session Rd, Baguio',rooms:['Standard','Deluxe'],pricePerNight:2800,rating:8.3,reviews:700,trending:true,tier:'midrange',tags:['Heritage','City Center'],   img:'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&q=65'}
  ],
  davao:[
    {id:'h16',name:'Marco Polo Davao',    address:'CM Recto St, Davao City',rooms:['Deluxe','Junior Suite'],pricePerNight:6800,rating:9.0,reviews:2300,trending:true,tier:'luxury',tags:['City Center','Pool','Spa'],      img:'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=65'}
  ]
};
const DEFAULT_HOTELS = [
  {id:'dh1',name:'Grand Plaza Hotel',    address:'Town Center',rooms:['Standard','Deluxe'],pricePerNight:2800,rating:8.2,reviews:450,trending:false,tier:'midrange',tags:['AC','WiFi'],            img:'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=65'},
  {id:'dh2',name:'Island View Resort',   address:'Beach Road',  rooms:['Cottage','Suite'], pricePerNight:4500,rating:8.6,reviews:320,trending:true, tier:'resort',  tags:['Beachfront','Pool'],     img:'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&q=65'},
  {id:'dh3',name:'Budget Inn & Suites',  address:'Main Street', rooms:['Fan Room','AC Room'],pricePerNight:800, rating:7.5,reviews:210,trending:false,tier:'budget',  tags:['Budget','Central'],     img:'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&q=65'}
];

/* ─── KLOOK ─── */
const KLOOK_LINKS = {
  'boracay':'https://www.klook.com/en-PH/city/33-boracay-things-to-do/?utm_source=lakwatsero',
  'palawan':'https://www.klook.com/en-PH/city/159-el-nido-things-to-do/?utm_source=lakwatsero',
  'cebu':'https://www.klook.com/en-PH/city/6-cebu-things-to-do/?utm_source=lakwatsero',
  'siargao':'https://www.klook.com/en-PH/city/291-siargao-things-to-do/?utm_source=lakwatsero',
  'manila':'https://www.klook.com/en-PH/city/3-manila-things-to-do/?utm_source=lakwatsero'
};

/* ─── NAV ─── */
function goTo(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

/* ─── AUTH LANDING ─── */
let _authFormMode = 'signup';

function showAuthForm(mode) {
  _authFormMode = mode;
  const isSignup = mode === 'signup';
  document.getElementById('af-name-field').style.display = isSignup ? 'block' : 'none';
  document.getElementById('af-title').textContent     = isSignup ? 'CREATE ACCOUNT' : 'WELCOME BACK';
  document.getElementById('af-sub').textContent       = isSignup ? 'Free and takes 30 seconds!' : 'Welcome back! Sign in to continue.';
  document.getElementById('af-submit').textContent    = isSignup ? 'Create account' : 'Sign in';
  document.getElementById('af-switch').innerHTML      = isSignup
    ? 'Already have an account? <span onclick="toggleAuthForm()" style="color:var(--gold);cursor:pointer;font-weight:600;">Sign in</span>'
    : 'New here? <span onclick="toggleAuthForm()" style="color:var(--gold);cursor:pointer;font-weight:600;">Create account</span>';
  goTo('s-auth-form');
}

function toggleAuthForm() {
  showAuthForm(_authFormMode === 'signup' ? 'signin' : 'signup');
}

function submitAuthForm() {
  const email = document.getElementById('af-email').value.trim();
  const nameVal = document.getElementById('af-name').value.trim();
  const name = nameVal || email.split('@')[0] || 'Lakwatsero';
  if (!email) { document.getElementById('af-email').focus(); return; }
  S.user = { name, email };
  syncMyName();
  updateGreeting();
  goTo('s-home');
}

function enterAsGuest() {
  S.user = { name:'Lakwatsero', email:'', isGuest:true };
  syncMyName();
  updateGreeting();
  goTo('s-home');
}


function updateGreeting() {
  const el = document.getElementById('home-greeting');
  if (!el) return;
  const first = S.user ? S.user.name.split(' ')[0] : 'Lakwatsero';
  el.innerHTML = 'Hey, <strong>' + first + '!</strong> 👋';
  // Refresh all home-bar user labels across screens
  ['app-bar-user','island-bar-user','hotels-bar-user'].forEach(function(id) {
    var b = document.getElementById(id);
    if (b) b.innerHTML = '<strong>' + first + '</strong>';
  });
  var soloBar = document.getElementById('solo-bar-user');
  if (soloBar) soloBar.innerHTML = '<strong>' + first + "</strong>'s Budget";
  var wizBar = document.getElementById('wiz-bar-user');
  if (wizBar) wizBar.textContent = first + "'s trip";
}

function logout() {
  S.user = null;
  goTo('s-auth-landing');
}

function loadSample() {
  S.isOwner = true;
  buildTripUI();
  goTo('s-app');
}

/* ─── WIZARD REGION → DESTINATION DATA ─── */
/* ─── ALL DESTINATIONS FLAT LIST WITH VIBES ─── */
const ALL_DESTS = [
  // LUZON
  {dest:'Batanes',      region:'Cagayan Valley',         island:'Luzon',
   photo:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=320&q=60',
   hero:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=70',
   grad:'rgba(44,82,130,.75),rgba(15,35,65,.88)',
   vibes:['chill','holyweek','solo','culture']},
  {dest:'Baguio',       region:'Benguet, CAR',            island:'Luzon',
   photo:'https://images.unsplash.com/photo-1448375240586-882707db888b?w=320&q=60',
   hero:'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=70',
   grad:'rgba(27,67,50,.75),rgba(10,30,20,.88)',
   vibes:['chill','christmas','budget','culture']},
  {dest:'Vigan',        region:'Ilocos Sur',              island:'Luzon',
   photo:'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=320&q=60',
   hero:'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=70',
   grad:'rgba(74,35,90,.75),rgba(30,10,40,.88)',
   vibes:['culture','christmas','holyweek','food']},
  {dest:'Sagada',       region:'Mountain Province, CAR',  island:'Luzon',
   photo:'https://images.unsplash.com/photo-1448375240586-882707db888b?w=320&q=60',
   hero:'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=70',
   grad:'rgba(45,80,60,.75),rgba(15,40,25,.88)',
   vibes:['chill','holyweek','solo','adventure']},
  {dest:'Batangas',     region:'CALABARZON',              island:'Luzon',
   photo:'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=320&q=60',
   hero:'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&q=70',
   grad:'rgba(0,80,120,.75),rgba(0,30,60,.88)',
   vibes:['summer','barkada','adventure','budget','island']},
  {dest:'La Union',     region:'Ilocos Region',           island:'Luzon',
   photo:'https://images.unsplash.com/photo-1562602833-0f4ab2fc46e5?w=320&q=60',
   hero:'https://images.unsplash.com/photo-1562602833-0f4ab2fc46e5?w=600&q=70',
   grad:'rgba(20,80,100,.75),rgba(8,40,55,.88)',
   vibes:['summer','barkada','budget','adventure']},
  {dest:'Ilocos Norte', region:'Ilocos Region',           island:'Luzon',
   photo:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=320&q=60',
   hero:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=70',
   grad:'rgba(44,82,130,.75),rgba(15,35,65,.88)',
   vibes:['culture','food','christmas','barkada']},
  {dest:'Subic',        region:'Zambales, Region III',    island:'Luzon',
   photo:'https://images.unsplash.com/photo-1559666126-84f389727b9a?w=320&q=60',
   hero:'https://images.unsplash.com/photo-1559666126-84f389727b9a?w=600&q=70',
   grad:'rgba(13,80,22,.75),rgba(5,40,15,.88)',
   vibes:['adventure','barkada','budget','island']},
  {dest:'Manila',       region:'Metro Manila, NCR',       island:'Luzon',
   photo:'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=320&q=60',
   hero:'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=70',
   grad:'rgba(28,40,51,.75),rgba(10,15,22,.88)',
   vibes:['food','culture','christmas','barkada']},
  {dest:'Marinduque',   region:'MIMAROPA',                island:'Luzon',
   photo:'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=320&q=60',
   hero:'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&q=70',
   grad:'rgba(0,80,120,.75),rgba(0,30,60,.88)',
   vibes:['holyweek','culture','chill','solo']},
  // VISAYAS
  {dest:'Boracay',      region:'Aklan, Western Visayas',  island:'Visayas',
   photo:'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=320&q=60',
   hero:'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&q=70',
   grad:'rgba(0,105,148,.75),rgba(0,40,80,.88)',
   vibes:['summer','barkada','honeymoon','island','adventure']},
  {dest:'Cebu',         region:'Central Visayas',         island:'Visayas',
   photo:'https://images.unsplash.com/photo-1573790387438-4da905039392?w=320&q=60',
   hero:'https://images.unsplash.com/photo-1573790387438-4da905039392?w=600&q=70',
   grad:'rgba(123,63,0,.75),rgba(60,20,0,.88)',
   vibes:['food','culture','adventure','christmas','barkada']},
  {dest:'Palawan',      region:'MIMAROPA',                island:'Visayas',
   photo:'https://images.unsplash.com/photo-1559666126-84f389727b9a?w=320&q=60',
   hero:'https://images.unsplash.com/photo-1559666126-84f389727b9a?w=600&q=70',
   grad:'rgba(13,80,22,.75),rgba(5,40,15,.88)',
   vibes:['honeymoon','island','chill','solo','adventure','summer']},
  {dest:'Bohol',        region:'Central Visayas',         island:'Visayas',
   photo:'https://images.unsplash.com/photo-1562602833-0f4ab2fc46e5?w=320&q=60',
   hero:'https://images.unsplash.com/photo-1562602833-0f4ab2fc46e5?w=600&q=70',
   grad:'rgba(100,60,0,.75),rgba(50,25,0,.88)',
   vibes:['culture','island','chill','honeymoon','barkada']},
  {dest:'Iloilo',       region:'Western Visayas',         island:'Visayas',
   photo:'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=320&q=60',
   hero:'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=70',
   grad:'rgba(74,35,90,.75),rgba(30,10,40,.88)',
   vibes:['food','culture','christmas','barkada']},
  {dest:'Bacolod',      region:'Western Visayas',         island:'Visayas',
   photo:'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=320&q=60',
   hero:'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=70',
   grad:'rgba(28,40,51,.75),rgba(10,15,22,.88)',
   vibes:['food','culture','christmas','budget']},
  {dest:'Dumaguete',    region:'Negros Oriental',         island:'Visayas',
   photo:'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=320&q=60',
   hero:'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&q=70',
   grad:'rgba(0,80,120,.75),rgba(0,30,60,.88)',
   vibes:['solo','chill','island','budget','adventure']},
  {dest:'Siquijor',     region:'Central Visayas',         island:'Visayas',
   photo:'https://images.unsplash.com/photo-1559666126-84f389727b9a?w=320&q=60',
   hero:'https://images.unsplash.com/photo-1559666126-84f389727b9a?w=600&q=70',
   grad:'rgba(50,0,80,.75),rgba(20,0,40,.88)',
   vibes:['honeymoon','chill','solo','holyweek','island']},
  // MINDANAO
  {dest:'Siargao',      region:'Surigao del Norte',       island:'Mindanao',
   photo:'https://images.unsplash.com/photo-1562602833-0f4ab2fc46e5?w=320&q=60',
   hero:'https://images.unsplash.com/photo-1562602833-0f4ab2fc46e5?w=600&q=70',
   grad:'rgba(20,80,100,.75),rgba(8,40,55,.88)',
   vibes:['summer','barkada','adventure','island','honeymoon']},
  {dest:'Davao City',   region:'Davao Region',            island:'Mindanao',
   photo:'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=320&q=60',
   hero:'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=70',
   grad:'rgba(28,40,51,.75),rgba(10,15,22,.88)',
   vibes:['food','culture','adventure','barkada']},
  {dest:'Camiguin',     region:'Northern Mindanao',       island:'Mindanao',
   photo:'https://images.unsplash.com/photo-1559666126-84f389727b9a?w=320&q=60',
   hero:'https://images.unsplash.com/photo-1559666126-84f389727b9a?w=600&q=70',
   grad:'rgba(50,100,20,.75),rgba(20,50,5,.88)',
   vibes:['holyweek','solo','chill','island','adventure']},
  {dest:'Cagayan de Oro',region:'Northern Mindanao',      island:'Mindanao',
   photo:'https://images.unsplash.com/photo-1448375240586-882707db888b?w=320&q=60',
   hero:'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=70',
   grad:'rgba(27,67,50,.75),rgba(10,30,20,.88)',
   vibes:['adventure','barkada','budget','food']},
  {dest:'Bukidnon',     region:'Northern Mindanao',       island:'Mindanao',
   photo:'https://images.unsplash.com/photo-1448375240586-882707db888b?w=320&q=60',
   hero:'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=70',
   grad:'rgba(27,67,50,.75),rgba(10,30,20,.88)',
   vibes:['chill','adventure','solo','christmas']},
  {dest:'Zamboanga City',region:'Zamboanga Peninsula',    island:'Mindanao',
   photo:'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=320&q=60',
   hero:'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&q=70',
   grad:'rgba(0,80,120,.75),rgba(0,30,60,.88)',
   vibes:['culture','island','food']},
  {dest:'Surigao City', region:'Caraga',                  island:'Mindanao',
   photo:'https://images.unsplash.com/photo-1562602833-0f4ab2fc46e5?w=320&q=60',
   hero:'https://images.unsplash.com/photo-1562602833-0f4ab2fc46e5?w=600&q=70',
   grad:'rgba(20,80,100,.75),rgba(8,40,55,.88)',
   vibes:['island','adventure','budget']},
  {dest:'General Santos',region:'SOCCSKSARGEN',           island:'Mindanao',
   photo:'https://images.unsplash.com/photo-1559666126-84f389727b9a?w=320&q=60',
   hero:'https://images.unsplash.com/photo-1559666126-84f389727b9a?w=600&q=70',
   grad:'rgba(13,80,22,.75),rgba(5,40,15,.88)',
   vibes:['food','adventure','culture']}
];

var _activeVibe = 'all';

function buildDestGrid() {
  var grid = document.getElementById('dest-grid-3');
  if (!grid) return;
  grid.innerHTML = ALL_DESTS.map(function(d) {
    var gp = d.grad.split(',');
    var g1 = gp[0].trim(), g2 = gp[1].trim();
    var g135 = g1.replace('.75','.35');
    return '<div class="dc" data-dest="'+d.dest+'" data-hero="'+d.hero
      +'" data-region="'+d.region+'" data-island="'+d.island
      +'" data-vibes="'+d.vibes.join(',')+'" onclick="pickDest(this)">'
      +'<div class="dc-photo" style="background-image:url(\''+d.photo+'\');"></div>'
      +'<div class="dc-grad" style="background:linear-gradient(160deg,'+g1+' 0%,'+g135+' 40%,'+g2+' 100%);"></div>'
      +'<div class="dc-chk">✓</div>'
      +'<div class="dc-lbl"><div class="dc-name">'+d.dest+'</div><div class="dc-reg">'+d.region+'</div></div>'
      +'</div>';
  }).join('');
  // Auto-select first visible card
  var first = grid.querySelector('.dc');
  if (first) pickDest(first);
  filterDestGrid();
}

function setVibe(el) {
  document.querySelectorAll('.vibe-chip').forEach(function(c){ c.classList.remove('active'); });
  el.classList.add('active');
  _activeVibe = el.dataset.vibe;
  filterDestGrid();
}

function filterDestGrid() {
  var query = (document.getElementById('dest-search').value || '').toLowerCase().trim();
  var cards  = document.querySelectorAll('#dest-grid-3 .dc');
  var visible = 0;
  cards.forEach(function(card) {
    var name   = (card.dataset.dest   || '').toLowerCase();
    var region = (card.dataset.region || '').toLowerCase();
    var island = (card.dataset.island || '').toLowerCase();
    var vibes  = (card.dataset.vibes  || '').split(',');
    var matchSearch = !query || name.indexOf(query) !== -1 || region.indexOf(query) !== -1 || island.indexOf(query) !== -1;
    var matchVibe   = _activeVibe === 'all' || vibes.indexOf(_activeVibe) !== -1;
    var show = matchSearch && matchVibe;
    card.style.display = show ? '' : 'none';
    if (show) visible++;
  });
  var noRes = document.getElementById('dest-no-results');
  if (noRes) noRes.style.display = visible === 0 ? 'block' : 'none';
  // If currently selected card is hidden, select first visible
  var sel = document.querySelector('#dest-grid-3 .dc.sel');
  if (sel && sel.style.display === 'none') {
    var firstVisible = document.querySelector('#dest-grid-3 .dc:not([style*="none"])');
    if (firstVisible) pickDest(firstVisible);
  }
  updateWizFooter();
}

/* ─── WIZARD ─── */
const WIZ = [
  ['Where to?',         'Pick your Philippine destination'],
  ['How long?',         'How many days is your vacation?'],
  ['Your group',        'Group size and budget'],
  ["What's your vibe?", 'Pick the experiences you want'],
  ['All set!',          'Review before starting']
];

function initWizard() {
  S.wizStep  = 0;
  _activeVibe = 'all';
  var searchEl = document.getElementById('dest-search');
  if (searchEl) searchEl.value = '';
  document.querySelectorAll('.vibe-chip').forEach(function(c){
    c.classList.toggle('active', c.dataset.vibe === 'all');
  });
  buildDestGrid();
  renderWiz();
}

function renderWiz() {
  var s = S.wizStep;
  document.querySelectorAll('.wiz-panel').forEach(function(p,i){ p.classList.toggle('active', i===s); });
  document.querySelectorAll('.wdot').forEach(function(d,i){
    d.classList.toggle('done',   i < s);
    d.classList.toggle('active', i === s);
  });
  document.getElementById('wiz-h').textContent = WIZ[s][0];
  document.getElementById('wiz-s').textContent = WIZ[s][1];
  document.getElementById('wiz-back').classList.toggle('hidden', s === 0);
  document.getElementById('wiz-next').textContent = s === 4 ? '🚀 Start Planning' : 'Continue →';
  updateWizFooter();
  if (s === 4) buildReview();
}

function updateWizFooter() {
  var nextBtn = document.getElementById('wiz-next');
  var wizFoot = document.querySelector('.wiz-foot');
  if (!nextBtn) return;
  // Hide Continue only if on step 0 AND no destination selected yet
  var hasDest = !!S.dest;
  if (S.wizStep === 0 && !hasDest) {
    nextBtn.style.display = 'none';
    if (wizFoot) wizFoot.style.display = 'none';
  } else {
    nextBtn.style.display = '';
    if (wizFoot) wizFoot.style.display = '';
  }
}

function wizNext() {
  if (S.wizStep === 0 && !S.dest) { return; }
  if (S.wizStep < 4) { S.wizStep++; renderWiz(); } else { startGen(); }
}
function wizPrev() { if (S.wizStep > 0) { S.wizStep--; renderWiz(); } }

function pickDest(el) {
  document.querySelectorAll('.dc').forEach(function(c){ c.classList.remove('sel'); });
  el.classList.add('sel');
  S.dest = el.dataset.dest;
  var keyMap = {
    'boracay':'boracay','palawan':'palawan','cebu':'cebu','siargao':'siargao',
    'batanes':'batanes','vigan':'vigan','banaue':'banaue','manila':'manila',
    'baguio':'baguio','batangas':'batangas','launion':'launion',
    'ilocosnorte':'ilocosNorte','subic':'subic','marinduque':'marinduque',
    'bohol':'bohol','iloilo':'iloilo','bacolod':'bacolod',
    'dumaguete':'dumaguete','siquijor':'siquijor','davaocity':'davao',
    'camiguin':'camiguin','cagayande':'cdo','bukidnon':'bukidnon',
    'zamboangacity':'zamboanga','surigaocity':'surigao','generalsantos':'gensan'
  };
  var raw = S.dest.toLowerCase().replace(/\s+/g,'').replace(/[^a-z]/g,'');
  S.destKey = keyMap[raw] || raw;
  // Update hero on vibe step
  var heroImg    = document.getElementById('wiz-dest-hero-img');
  var heroName   = document.getElementById('wiz-dest-hero-name');
  var heroRegion = document.getElementById('wiz-dest-hero-region');
  if (heroImg && el.dataset.hero) heroImg.style.backgroundImage = 'url(\'' + el.dataset.hero + '\')';
  if (heroName)   heroName.textContent   = S.dest;
  if (heroRegion) heroRegion.textContent = el.dataset.region || '';
  updateWizFooter();
}

function adjDays(d) {
  S.days = Math.max(1, Math.min(14, S.days + d));
  document.getElementById('days-num').textContent = S.days;
  document.querySelectorAll('.preset').forEach(p => p.classList.remove('active'));
}

function setDays(n, el) {
  S.days = n;
  document.getElementById('days-num').textContent = n;
  document.querySelectorAll('.preset').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
}

function setBType(t) {
  S.budgetType = t;
  document.getElementById('btp-tot').classList.toggle('active', t==='total');
  document.getElementById('btp-pp').classList.toggle('active',  t==='pp');
  var hint = document.getElementById('bud-type-hint');
  if (hint) hint.textContent = t==='pp' ? 'Per person budget' : 'Total budget for all travellers';
  onBudgetInput();
}

function onBudgetInput() {
  var v = parseFloat(document.getElementById('inp-budget').value)||0;
  S.budgetAmount = v;
  var pp = S.budgetType==='pp' ? v : Math.round(v/(S.group||1));
  document.getElementById('rv-bud').textContent = '₱' + v.toLocaleString() + (S.budgetType==='pp' ? ' / person' : ' total');
}
function pickBud(el, r) {
  // legacy stub — no-op
  S.budgetRange = r;
}

function buildReview() {
  document.getElementById('rv-t').textContent    = S.dest + ' Trip 🌴';
  document.getElementById('rv-days').textContent = S.days + ' day' + (S.days > 1 ? 's' : '');
  document.getElementById('rv-grp').textContent  = (document.getElementById('inp-grp').value || 4) + ' people';
  var _v=parseFloat(document.getElementById('inp-budget')?document.getElementById('inp-budget').value:20000)||20000; S.budgetAmount=_v;
  document.getElementById('rv-bud').textContent = '₱'+_v.toLocaleString()+(S.budgetType==='pp'?' / person':' total');
  const fc = document.getElementById('rv-flt');
  fc.innerHTML = '';
  document.querySelectorAll('#wp3 .flt-chip.active').forEach(f => {
    const b = document.createElement('span');
    b.style.cssText = 'display:inline-block;background:rgba(244,168,0,.15);color:#B8860B;font-size:10px;font-weight:600;padding:2px 7px;border-radius:999px;margin:2px;';
    b.textContent = f.querySelector('.flt-name').textContent;
    fc.appendChild(b);
  });
}

/* ─── GENERATING ─── */
function startGen() {
  S.group = parseInt(document.getElementById('inp-grp').value) || 4;
  goTo('s-generating');
  document.getElementById('gen-lbl').textContent = S.dest + ' · ' + S.days + ' days · ' + S.group + ' people';
  document.querySelectorAll('[id^="gs"]').forEach(el => el.classList.remove('done','active'));
  let i = 0;
  const iv = setInterval(function() {
    if (i > 0) {
      const p = document.getElementById('gs' + (i-1));
      if (p) { p.classList.remove('active'); p.classList.add('done'); }
    }
    if (i < 5) {
      const c = document.getElementById('gs' + i);
      if (c) c.classList.add('active');
      i++;
    } else {
      clearInterval(iv);
      setTimeout(function() { S.isOwner = true; buildTripUI(); goTo('s-app'); }, 500);
    }
  }, 650);
}

/* ─── BUILD TRIP UI ─── */
function buildTripUI() {
  syncMyName();
  document.getElementById('app-dest').textContent = S.dest.toUpperCase();
  document.getElementById('app-dtag').textContent = S.days + ' days';
  document.getElementById('app-gtag').textContent = S.group + ' people';
  var budDisp = '₱' + (S.budgetAmount||20000).toLocaleString() + (S.budgetType==='pp' ? '/person' : ' total');
  document.getElementById('app-btag').textContent = budDisp;
  document.getElementById('grp-trip-title').textContent = S.dest + ' Trip 🌴';
  document.getElementById('grp-trip-sub').textContent   = S.days + ' days · ' + S.group + ' people · ' + budDisp;
  S.tripDays = Array.from({length:S.days}, function(_,i) {
    return {id:'d'+(i+1), num:i+1, label:'Day '+(i+1), stops:[]};
  });
  renderDayTabs();
  buildBudgetDayTabs();
  renderExpenses();
  renderMembers();
  renderBudgetStats();
}

function renderDayTabs() {
  const tr = document.getElementById('day-tabs-row');
  const pc = document.getElementById('day-panels');
  tr.innerHTML = '';
  pc.innerHTML = '';
  S.tripDays.forEach(function(day, i) {
    const tb = document.createElement('button');
    tb.className = 'day-tab-btn' + (i===0 ? ' active' : '');
    tb.textContent = day.label;
    tb.onclick = function() { switchDay(i); };
    tr.appendChild(tb);
    const panel = document.createElement('div');
    panel.className = 'day-panel' + (i===0 ? ' active' : '');
    panel.id = 'dp' + i;
    renderDayPanel(panel, day, i);
    pc.appendChild(panel);
  });
}

function renderDayPanel(panel, day, idx) {
  const meRole = MEMBERS.find(function(m){ return m.name==='You'; });
  const canEdit = S.isOwner || (meRole && ROLES[meRole.role] && ROLES[meRole.role].canEditTour);
  if (day.stops.length === 0) {
    panel.innerHTML = '<div class="day-empty"><div class="day-empty-icon">🗺️</div>'
      + '<div class="day-empty-title">Day ' + day.num + ' is empty</div>'
      + '<div class="day-empty-sub">Add beaches, restaurants, activities and more.</div>'
      + (canEdit ? '<button class="add-act-btn" onclick="addActFor(' + idx + ')">+ Add activity</button>' : '')
      + '</div>';
  } else {
    let html = '';
    day.stops.forEach(function(stop, si) {
      html += '<div class="stop-card">'
        + '<div class="stop-top"><span class="stop-time">' + (stop.time||'—') + '</span>'
        + '<span class="stop-cat" style="background:' + catBg(stop.category) + ';color:' + catColor(stop.category) + '">' + catLbl(stop.category) + '</span></div>'
        + '<div class="stop-body"><div class="stop-bar" style="background:' + catAccent(stop.category) + ';"></div>'
        + '<div class="stop-info"><div class="stop-name">' + stop.name + '</div>'
        + '<div class="stop-area">📍 ' + stop.area + ' · ' + stop.distance + '</div>'
        + '<div class="stop-pills"><span class="stop-pill">💰 ' + stop.cost + '</span><span class="stop-pill">🕐 ' + stop.hours + '</span></div></div>'
        + (canEdit ? '<button class="stop-del" onclick="removeStop(' + idx + ',' + si + ')">✕</button>' : '')
        + '</div></div>';
    });
    if (canEdit) html += '<button class="add-act-btn" onclick="addActFor(' + idx + ')">+ Add activity</button>';
    panel.innerHTML = html;
  }
}

function switchDay(i) {
  S.currentDay = i;
  document.querySelectorAll('.day-tab-btn').forEach(function(b,j){ b.classList.toggle('active', j===i); });
  document.querySelectorAll('.day-panel').forEach(function(p,j){ p.classList.toggle('active', j===i); });
}

function removeStop(dIdx, sIdx) {
  S.tripDays[dIdx].stops.splice(sIdx, 1);
  renderDayPanel(document.getElementById('dp'+dIdx), S.tripDays[dIdx], dIdx);
  updateMapPins();
}

/* ─── PLACES FLOW ─── */
let _addDay = 0;

function addActFor(idx) { _addDay = idx; openSheet('sh-cat'); }

function openPlaces(cat) {
  closeSheet('sh-cat');
  const data = (PLACES[S.destKey] || PLACES.boracay)[cat] || [];
  document.getElementById('places-title').textContent = catLbl(cat) + ' in ' + S.dest;
  const body = document.getElementById('places-body');
  if (data.length === 0) {
    body.innerHTML = '<div style="text-align:center;padding:40px;color:rgba(255,255,255,.3);font-size:13px;">No data yet for ' + S.dest + '.</div>';
  } else {
    body.innerHTML = data.map(function(p) {
      return '<div class="place-card">'
        + '<div class="place-thumb"><img src="' + p.img + '" alt="' + p.name + '" loading="lazy"/><div class="place-thumb-ov"></div></div>'
        + '<div class="place-info"><div class="place-name">' + p.name + '</div>'
        + '<div class="place-area">📍 ' + p.area + '</div>'
        + '<div class="place-pills"><span class="place-pill">🚶 ' + p.distance + '</span><span class="place-pill">💰 ' + p.cost + '</span><span class="place-pill">🕐 ' + p.hours + '</span></div>'
        + '<div class="place-tip">💡 ' + p.tips + '</div></div>'
        + '<button class="place-add-btn" onclick="addStopById(\'' + p.id + '\',\'' + cat + '\')">+ Add</button></div>';
    }).join('');
  }
  openSheet('sh-places');
}

function addStopById(placeId, cat) {
  const allPlaces = (PLACES[S.destKey] || PLACES.boracay)[cat] || [];
  const place = allPlaces.find(function(p){ return p.id === placeId; });
  if (!place) return;
  const day  = S.tripDays[_addDay];
  const times = ['8:00 AM','9:30 AM','11:00 AM','1:00 PM','2:30 PM','4:00 PM','6:00 PM','8:00 PM'];
  day.stops.push(Object.assign({}, place, {category:cat, time:times[day.stops.length]||'—'}));
  closeSheet('sh-places');
  renderDayPanel(document.getElementById('dp'+_addDay), day, _addDay);
  updateMapPins();
}

/* ─── BUDGET DAY TABS ─── */
function buildBudgetDayTabs() {
  const row = document.getElementById('budget-day-tabs');
  if (!row) return;
  row.innerHTML = '';
  function makeBtn(label, filterVal) {
    const btn = document.createElement('button');
    btn.className = 'bdt-btn' + (filterVal === -2 ? ' active' : '');
    btn.textContent = label;
    btn.onclick = function() { filterBudgetDay(filterVal, btn); };
    row.appendChild(btn);
  }
  makeBtn('All', -2);
  makeBtn('Pre-trip', -1);
  S.tripDays.forEach(function(d, i) { makeBtn(d.label, i); });
}

function filterBudgetDay(df, btn) {
  S.budgetDayFilter = df;
  document.querySelectorAll('.bdt-btn').forEach(function(b){ b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  const lbl = document.getElementById('budget-day-label');
  if (lbl) lbl.textContent = df === -2 ? 'All expenses' : df === -1 ? 'Pre-trip expenses' : 'Day ' + (df+1) + ' expenses';
  renderExpenses();
}

/* ─── EXPENSES ─── */
function renderExpenses() {
  const list = document.getElementById('exp-list');
  if (!list) return;
  const filtered = S.budgetDayFilter === -2 ? EXPENSES : EXPENSES.filter(function(e){ return e.day === S.budgetDayFilter; });
  if (filtered.length === 0) {
    list.innerHTML = '<div style="text-align:center;padding:28px;color:var(--earth-l);font-size:13px;">No expenses here yet.</div>';
  } else {
    list.innerHTML = filtered.map(function(e) {
      const splits  = e.splits || [];
      const myShare = splits.find(function(s){ return s.name === 'You'; });
      const dayLbl  = e.day === -1 ? 'Pre-trip' : (S.tripDays[e.day] ? S.tripDays[e.day].label : 'Day ?');
      const isCustom = e.splitMode === 'custom';

      // Split summary line
      var splitSummary = '';
      if (isCustom) {
        splitSummary = '<div class="exp-split-breakdown">'
          + splits.map(function(s){
              var isMe = s.name === myName() || s.name === 'You';
              return '<span class="exp-split-chip' + (isMe ? ' me' : '') + '">' + s.name + ' ₱' + s.amount.toLocaleString() + '</span>';
            }).join('')
          + '</div>';
      } else {
        var pp = splits.length > 0 ? splits[0].amount : Math.round(e.total / splits.length);
        splitSummary = '';
      }

      var ppLine = '';
      if (splits.length > 0) {
        if (isCustom && myShare) {
          ppLine = myName() + ': ₱' + myShare.amount.toLocaleString();
        } else if (!isCustom && splits.length > 0) {
          ppLine = '₱' + splits[0].amount.toLocaleString() + '/person';
        }
      }

      return '<div class="exp-item" id="eitem-' + e.id + '">'
        + '<div class="exp-item-main">'
        + '<div class="exp-icon-wrap">' + e.icon + '</div>'
        + '<div class="exp-info"><div class="exp-title-txt">' + e.title + '</div>'
        + '<div class="exp-meta-txt">' + e.type + ' · ' + dayLbl + ' · Paid by <strong>' + e.paidBy + '</strong>'
        + ' · ' + splits.length + ' people</div></div>'
        + '<div class="exp-amounts"><div class="exp-total-val">₱' + e.total.toLocaleString() + '</div>'
        + '<div class="exp-pp-val">' + ppLine + '</div>'
        + (e.receipt ? '<img class="exp-receipt-thumb" src="' + e.receipt + '" onclick="viewReceipt(this.src)" title="View receipt"/>' : '')
        + '</div></div>'
        + (isCustom ? splitSummary : '')
        + '<div class="exp-actions">'
        + '<button class="exp-act-btn edit" onclick="editExpense(\'' + e.id + '\')">✏️ Edit</button>'
        + '<button class="exp-act-btn receipt" data-id="' + e.id + '" onclick="viewExpenseReceipt(this.dataset.id,&quot;trip&quot;)">🧾 Receipt</button>'
        + '<button class="exp-act-btn delete" onclick="deleteExpense(\'' + e.id + '\')">🗑 Delete</button>'
        + '</div></div>';
    }).join('');
  }
  renderBudgetStats();
  renderMembers();
  applyRoleUI();
}

function applyRoleUI() {
  var canEditBudget = S.isOwner || (function(){
    var me = MEMBERS.find(function(m){ return m.name===myName(); });
    return me && ROLES[me.role] && ROLES[me.role].canEditBudget;
  })();
  var canEditTour = S.isOwner || (function(){
    var me = MEMBERS.find(function(m){ return m.name===myName(); });
    return me && ROLES[me.role] && ROLES[me.role].canEditTour;
  })();
  // Budget tab: hide log expense button if no edit rights
  var logWrap = document.getElementById('budget-log-btn-wrap');
  if (logWrap) logWrap.style.display = canEditBudget ? 'block' : 'none';
  // Tour tab: add-activity buttons controlled per-day in renderDayPanel
  // Group tab: only owner sees it
  document.querySelectorAll('.tab-btn').forEach(function(btn) {
    var txt = btn.textContent.trim();
    if (txt === 'Group') btn.style.display = S.isOwner ? '' : 'none';
    if (txt === 'Map') btn.style.display = '';  // everyone sees map
  });
}

function renderBudgetStats() {
  const total = EXPENSES.reduce(function(s,e){ return s+e.total; }, 0);
  const budget = S.budgetType==='pp' ? S.budgetAmount * S.group : (S.budgetAmount || 20000);
  const pct    = Math.min(100, Math.round(total/budget*100));
  const left   = budget - total;
  const myTotal = EXPENSES.reduce(function(s,e){
    var sp = (e.splits||[]).find(function(x){ return x.name===myName()||x.name==='You'; });
    return s + (sp ? sp.amount : 0);
  }, 0);
  document.getElementById('bud-total').textContent  = '₱' + budget.toLocaleString();
  document.getElementById('bud-bar').style.width    = pct + '%';
  document.getElementById('bud-pct').textContent    = pct + '% spent';
  document.getElementById('bud-left').textContent   = '₱' + Math.max(0,left).toLocaleString() + ' left';
  document.getElementById('bud-spent').textContent  = '₱' + total.toLocaleString();
  document.getElementById('bud-rem').textContent    = '₱' + Math.max(0,left).toLocaleString();
  document.getElementById('bud-pp').textContent     = '₱' + myTotal.toLocaleString();
  var ppLbl = document.querySelector('#tab-budget .bud-stat .bud-stat-lbl');
  if (ppLbl) ppLbl.textContent = 'My share';
}

function deleteExpense(id) {
  EXPENSES = EXPENSES.filter(function(e){ return e.id !== id; });
  renderExpenses();
}

function editExpense(id) {
  const e = EXPENSES.find(function(x){ return x.id === id; });
  if (!e) return;
  S.editingExpId = id;
  openExpSheet(e);
}

function openExpSheet(prefill) {
  S.editingExpId = prefill ? prefill.id : null;
  document.getElementById('exp-sheet-title').textContent = prefill ? 'Edit expense' : 'Log an expense';
  document.querySelectorAll('.exp-type-chip').forEach(function(c){ c.classList.remove('active'); });
  document.getElementById('exp-form').style.display      = 'none';
  document.getElementById('exp-title-in').value          = '';
  document.getElementById('exp-amt-in').value            = '';
  document.getElementById('receipt-preview').style.display = 'none';
  S.selectedET   = null;
  S._splitMode   = 'equal';

  const paidSel = document.getElementById('exp-paid-by');
  paidSel.innerHTML = MEMBERS.map(function(m){ return '<option value="' + m.name + '">' + m.name + '</option>'; }).join('');

  const daySel = document.getElementById('exp-day-select');
  daySel.innerHTML = '<option value="-1">Pre-trip / General</option>'
    + S.tripDays.map(function(d,i){ return '<option value="' + i + '">' + d.label + '</option>'; }).join('');

  setSplitMode('equal');
  document.querySelector('.btn-save-exp').onclick = saveExpense;
  openSheet('sh-exp');

  if (prefill) {
    document.querySelectorAll('.exp-type-chip').forEach(function(c) {
      var lbl = c.querySelector('.exp-type-lbl');
      if (lbl && lbl.textContent.trim() === prefill.type.split('/')[0].trim()) c.classList.add('active');
    });
    S.selectedET = {icon:prefill.icon, label:prefill.type, cat:''};
    document.getElementById('exp-form').style.display = 'block';
    document.getElementById('exp-title-in').value     = prefill.title;
    document.getElementById('exp-amt-in').value       = prefill.total;
    paidSel.value = prefill.paidBy;
    daySel.value  = prefill.day;

    var mode = prefill.splitMode || 'equal';
    setSplitMode(mode);
    if (mode === 'equal') {
      var selNames = (prefill.splits||[]).map(function(s){ return s.name; });
      renderMemberChecks(selNames);
      calcSplit();
    } else {
      renderCustomSplitInputs(prefill.splits||[]);
      updateSplitBalance();
    }
    if (prefill.receipt) {
      document.getElementById('receipt-preview').src           = prefill.receipt;
      document.getElementById('receipt-preview').style.display = 'block';
    }
  }
}

function setSplitMode(mode) {
  S._splitMode = mode;
  document.getElementById('split-mode-equal').classList.toggle('active', mode === 'equal');
  document.getElementById('split-mode-custom').classList.toggle('active', mode === 'custom');
  document.getElementById('split-equal-section').style.display  = mode === 'equal'  ? 'block' : 'none';
  document.getElementById('split-custom-section').style.display = mode === 'custom' ? 'block' : 'none';

  if (mode === 'equal') {
    renderMemberChecks([]);
    calcSplit();
  } else {
    // Pre-populate custom inputs from current equal selection or prefill
    var amt   = parseFloat(document.getElementById('exp-amt-in').value) || 0;
    var names = Array.from(document.querySelectorAll('#exp-mem-checks .member-chk.active')).map(function(el){ return el.textContent; });
    if (names.length === 0) names = MEMBERS.map(function(m){ return m.name; });
    var pp = names.length > 0 ? Math.round(amt / names.length) : 0;
    renderCustomSplitInputs(names.map(function(n){ return {name:n, amount:pp}; }));
    updateSplitBalance();
  }
}

function renderMemberChecks(presel) {
  var con = document.getElementById('exp-mem-checks');
  var membersToUse = document.getElementById('s-solo-budget').classList.contains('active') ? SOLO_MEMBERS.map(function(n){ return {name:n}; }) : MEMBERS;
  con.innerHTML = membersToUse.map(function(m) {
    var name   = typeof m === 'string' ? m : m.name;
    var active = (!presel || presel.length === 0 || presel.indexOf(name) !== -1) ? ' active' : '';
    return '<div class="member-chk' + active + '" onclick="this.classList.toggle(\'active\');calcSplit()">' + name + '</div>';
  }).join('');
}

function calcSplit() {
  var amt = parseFloat(document.getElementById('exp-amt-in').value) || 0;
  var sel = document.querySelectorAll('#exp-mem-checks .member-chk.active').length || 1;
  var prev = document.getElementById('split-prev');
  if (prev) {
    prev.style.display = amt > 0 ? 'flex' : 'none';
    document.getElementById('split-val').textContent = '₱' + Math.round(amt/sel).toLocaleString();
  }
  // If custom mode is open, refresh custom inputs too
  if (S._splitMode === 'custom') {
    var names = Array.from(document.querySelectorAll('#exp-mem-checks .member-chk.active')).map(function(el){ return el.textContent; });
    var pp = names.length > 0 ? Math.round(amt / names.length) : 0;
    renderCustomSplitInputs(names.map(function(n){ return {name:n, amount:pp}; }));
    updateSplitBalance();
  }
}

function renderCustomSplitInputs(splits) {
  var list = document.getElementById('custom-split-list');
  list.innerHTML = splits.map(function(s) {
    var hasBd = s.breakdown && s.breakdown.length > 0;
    var namedRows = hasBd ? s.breakdown.filter(function(r){ return r.name||r.price; }).length : 0;
    var hasItems = hasBd && namedRows > 0;
    var btnLabel = hasItems ? '\uD83E\uDDFE ' + namedRows + ' item' + (namedRows!==1?'s':'') : '\u2261';
    var btnClass = 'csr-breakdown-btn' + (hasItems ? ' has-items' : '');
    return '<div class="custom-split-row" data-name="' + s.name + '">'
      + '<span class="csr-name">' + s.name + '</span>'
      + '<span style="font-size:12px;color:rgba(255,255,255,.4);flex-shrink:0;">₱</span>'
      + '<input class="csr-input" type="number" min="0" value="' + (s.amount||'') + '" placeholder="0"'
      + ' data-name="' + s.name + '" oninput="updateSplitBalance()" />'
      + '<button class="' + btnClass + '" title="Itemize ' + s.name + '\u2019s share" onclick="openBreakdown(\'' + s.name + '\')">' + btnLabel + '</button>'
      + '</div>';
  }).join('');

  // Restore breakdown arrays onto input elements (so re-editing preserves them)
  splits.forEach(function(s) {
    if (s.breakdown && s.breakdown.length > 0) {
      var inp = list.querySelector('.csr-input[data-name="' + s.name + '"]');
      if (inp) inp._breakdown = s.breakdown.slice();
    }
  });

  document.getElementById('split-balance').style.display = splits.length > 0 ? 'block' : 'none';
}

function updateSplitBalance() {
  var total    = parseFloat(document.getElementById('exp-amt-in').value) || 0;
  var inputs   = document.querySelectorAll('#custom-split-list .csr-input');
  var assigned = 0;
  inputs.forEach(function(inp){ assigned += parseFloat(inp.value)||0; });
  var diff     = total - assigned;
  var pct      = total > 0 ? Math.min(100, Math.round(assigned/total*100)) : 0;
  var bar      = document.getElementById('split-balance-bar');
  var note     = document.getElementById('split-balance-note');
  var valEl    = document.getElementById('split-balance-val');
  if (!bar) return;
  valEl.textContent = '₱' + assigned.toLocaleString();
  bar.style.width = pct + '%';
  if (Math.abs(diff) < 1) {
    bar.style.background = 'var(--green)';
    note.innerHTML = '<span style="color:var(--green)">✓ Balanced!</span>';
  } else if (diff > 0) {
    bar.style.background = 'var(--gold)';
    note.innerHTML = '<span style="color:var(--gold)">₱' + diff.toLocaleString() + ' unassigned</span>';
  } else {
    bar.style.background = 'var(--red)';
    note.innerHTML = '<span style="color:#f08b80">₱' + Math.abs(diff).toLocaleString() + ' over total</span>';
  }
}

function fillRemaining() {
  var total  = parseFloat(document.getElementById('exp-amt-in').value) || 0;
  var inputs = Array.from(document.querySelectorAll('#custom-split-list .csr-input'));
  if (inputs.length === 0) return;
  // Sum all except last
  var sumExceptLast = inputs.slice(0,-1).reduce(function(s,inp){ return s + (parseFloat(inp.value)||0); }, 0);
  var remaining = total - sumExceptLast;
  inputs[inputs.length-1].value = remaining > 0 ? remaining : 0;
  updateSplitBalance();
}

function saveExpense() {
  var title  = document.getElementById('exp-title-in').value.trim();
  var amt    = parseFloat(document.getElementById('exp-amt-in').value) || 0;
  var paidBy = document.getElementById('exp-paid-by').value;
  var dayVal = parseInt(document.getElementById('exp-day-select').value);
  if (!title || !amt || !S.selectedET) { alert('Please fill in all fields.'); return; }

  var splits = [];
  if (S._splitMode === 'custom') {
    // Read custom inputs — also capture any breakdown data stored on element
    var inputs = document.querySelectorAll('#custom-split-list .csr-input');
    var total  = 0;
    inputs.forEach(function(inp){
      var a = parseFloat(inp.value)||0;
      total += a;
      splits.push({name: inp.dataset.name, amount: a, breakdown: inp._breakdown || []});
    });
    // Validate
    if (Math.abs(total - amt) > 1) {
      var diff = amt - total;
      if (!confirm('Split amounts are ₱' + Math.abs(diff).toLocaleString() + (diff>0?' short':' over') + '. Save anyway?')) return;
    }
  } else {
    // Equal split from member checkboxes
    var selNames = Array.from(document.querySelectorAll('#exp-mem-checks .member-chk.active')).map(function(el){ return el.textContent; });
    if (selNames.length === 0) { alert('Select at least one person.'); return; }
    var pp = Math.round(amt / selNames.length);
    splits = selNames.map(function(n){ return {name:n, amount:pp}; });
  }

  var receiptEl = document.getElementById('receipt-preview');
  var receipt   = receiptEl.style.display !== 'none' ? receiptEl.src : null;
  var expData   = {
    icon: S.selectedET.icon, type: S.selectedET.label, title: title,
    total: amt, paidBy: paidBy, day: dayVal,
    splitMode: S._splitMode, splits: splits, receipt: receipt
  };

  if (S.editingExpId) {
    var idx = EXPENSES.findIndex(function(e){ return e.id === S.editingExpId; });
    if (idx > -1) EXPENSES[idx] = Object.assign({}, EXPENSES[idx], expData);
  } else {
    EXPENSES.push(Object.assign({id:'e'+Date.now()}, expData));
  }
  closeSheet('sh-exp');
  renderExpenses();
  S.editingExpId = null;
  S.selectedET   = null;
  S._splitMode   = 'equal';
}

function pickET(el, icon, label, cat) {
  document.querySelectorAll('.exp-type-chip').forEach(function(c){ c.classList.remove('active'); });
  el.classList.add('active');
  var isSolo = document.getElementById('s-solo-budget').classList.contains('active');
  if (isSolo) {
    _soloSelectedET = {icon:icon, label:label, cat:cat};
    // In solo mode, switch to correct member checks
    renderSoloMemberChecks([]);
  } else {
    S.selectedET = {icon:icon, label:label, cat:cat};
    renderMemberChecks([]);
  }
  document.getElementById('exp-form').style.display = 'block';
  // Reset to equal split by default when picking a new type
  setSplitMode(S._splitMode || 'equal');
}

function previewReceipt(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('receipt-preview').src           = e.target.result;
      document.getElementById('receipt-preview').style.display = 'block';
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function viewReceipt(src) {
  var w = window.open('','_blank');
  w.document.write('<img src="' + src + '" style="max-width:100%;"/>');
  w.document.close();
}
function renderMembers() {
  const list = document.getElementById('members-list');
  if (!list) return;
  const balances = {};
  MEMBERS.forEach(function(m){ balances[m.name] = 0; });
  EXPENSES.forEach(function(e) {
    // Each person owes their specific split amount
    (e.splits||[]).forEach(function(s){
      if (balances[s.name] !== undefined) balances[s.name] -= s.amount;
    });
    // The payer gets credited the full total
    if (balances[e.paidBy] !== undefined) balances[e.paidBy] += e.total;
  });
  list.innerHTML = MEMBERS.map(function(m) {
    const bal      = balances[m.name] || 0;
    const initials = m.name.split(' ').map(function(n){ return n[0]; }).join('').slice(0,2).toUpperCase();
    const roleInfo = ROLES[m.role] || ROLES.guest;
    const canChange = S.isOwner && m.role !== 'owner';
    return '<div class="member-row">'
      + '<div class="member-av" style="background:' + m.bg + ';color:' + m.fg + '">' + initials + '</div>'
      + '<div style="flex:1;min-width:0;">'
      + '<div class="member-nm">' + m.name + '</div>'
      + '<div class="member-role-badge" style="background:' + roleInfo.color + '22;color:' + roleInfo.color + '">' + roleInfo.label + '</div>'
      + (canChange ? '<button class="role-change-btn" onclick="openRoleSheet(\'' + m.id + '\')">Change role ↓</button>' : '')
      + '</div>'
      + '<div class="member-bal">'
      + '<div class="member-bal-val" style="color:' + (bal>=0 ? 'var(--green)' : 'var(--red)') + '">' + (bal>=0?'+':'') + '₱' + Math.abs(bal).toLocaleString() + '</div>'
      + '<div class="member-bal-lbl">' + (bal>=0 ? 'gets back' : 'owes') + '</div>'
      + '</div></div>';
  }).join('');
  renderPerPersonReportList();
}

function openRoleSheet(memberId) {
  S.roleMemberId = memberId;
  const m = MEMBERS.find(function(x){ return x.id === memberId; });
  if (!m) return;
  document.getElementById('role-sheet-title').textContent = 'Assign Role to ' + m.name.split(' ')[0];
  document.getElementById('role-member-name').textContent = 'Currently: ' + (ROLES[m.role]||ROLES.guest).label;
  openSheet('sh-role');
}

function selectRole(role) {
  const m = MEMBERS.find(function(x){ return x.id === S.roleMemberId; });
  if (m) {
    m.role = role;
    const ri = ROLES[role] || ROLES.guest;
    m.bg = ri.color;
    m.fg = ri.fg;
  }
  closeSheet('sh-role');
  renderMembers();
}

/* ─── MAP ─── */
function initMap() {
  if (S.mapInit) return;
  S.mapInit = true;
  const CENTERS = {
    boracay:[11.9674,121.9213],
    palawan:[10.1917,119.0067],
    cebu:[10.3157,123.8854],
    siargao:[9.8482,126.0458],
    batanes:[20.448,121.97],
    vigan:[17.5747,120.387],
    banaue:[16.9113,121.0587],
    manila:[14.5995,120.984],
    baguio:[16.4023,120.596],
    sagada:[17.085,120.905],
    batangas:[13.7565,121.0583],
    launion:[16.619,120.316],
    ilocosNorte:[18.198,120.594],
    subic:[14.824,120.267],
    marinduque:[13.368,122.065],
    bohol:[9.6500,124.1532],
    iloilo:[10.7202,122.5621],
    bacolod:[10.6765,122.9562],
    dumaguete:[9.3068,123.3054],
    siquijor:[9.2,123.587],
    davao:[7.0707,125.6087],
    camiguin:[9.176,124.73],
    cdo:[8.4542,124.6319],
    bukidnon:[8.032,125.09],
    zamboanga:[6.9214,122.079],
    surigao:[9.7872,125.4961],
    gensan:[6.1128,125.1717]
  };
  const center = CENTERS[S.destKey] || CENTERS.manila;
  var zoom = {batanes:11,banaue:12,sagada:12,bukidnon:11,marinduque:11,ilocosNorte:11,batangas:12,launion:12}[S.destKey] || 13;
  document.getElementById('map-el').style.height = (window.innerHeight - 200) + 'px';
  const map = L.map('map-el').setView(center, zoom);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution:'© <a href="https://www.openstreetmap.org/copyright">OSM</a>', maxZoom:19}).addTo(map);
  S.leafMap = map;
  updateMapPins();
  const fr = document.getElementById('map-filter-row');
  fr.innerHTML = '<button class="map-f-btn active" onclick="filterMap(\'all\',this)">All days</button>';
  S.tripDays.forEach(function(d, i) {
    const btn = document.createElement('button');
    btn.className   = 'map-f-btn';
    btn.textContent = d.label;
    btn.onclick = function() { filterMap(i, btn); };
    fr.appendChild(btn);
  });
}

let _mapMarkers = [];
function updateMapPins() {
  if (!S.leafMap) return;
  _mapMarkers.forEach(function(m){ m.remove(); });
  _mapMarkers = [];
  let n = 1;
  S.tripDays.forEach(function(day, di) {
    day.stops.forEach(function(stop) {
      if (!stop.lat || !stop.lng) return;
      const icon = L.divIcon({html:'<div style="background:'+catAccent(stop.category)+';color:#fff;width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.3)">'+n+'</div>', className:'', iconSize:[26,26], iconAnchor:[13,13]});
      const marker = L.marker([stop.lat, stop.lng], {icon:icon}).addTo(S.leafMap);
      marker.bindPopup('<b>'+stop.name+'</b><br/>'+stop.area+'<br/>💰 '+stop.cost+'<br/><a href="https://www.google.com/maps/search/'+encodeURIComponent(stop.name)+'" target="_blank">Get directions →</a>');
      marker._day = di;
      _mapMarkers.push(marker);
      n++;
    });
  });
}

function filterMap(f, btn) {
  document.querySelectorAll('.map-f-btn').forEach(function(b){ b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  _mapMarkers.forEach(function(m) {
    const el = m.getElement();
    if (el) el.style.display = (f === 'all' || m._day === f) ? '' : 'none';
  });
}

/* ─── TABS / SHEETS ─── */
function switchTab(name, btn) {
  if (name==='mybudget') renderMyBudget();
  document.querySelectorAll('.tab-btn').forEach(function(t){ t.classList.remove('active'); });
  btn.classList.add('active');
  document.querySelectorAll('.tab-pane').forEach(function(t){ t.classList.remove('active'); });
  document.getElementById('tab-' + name).classList.add('active');
}

function openSheet(id)  { document.getElementById(id).classList.add('open'); }
function closeSheet(id) { document.getElementById(id).classList.remove('open'); }
function closeSheetOut(e, id) { if (e.target.id === id) closeSheet(id); }

/* ─── JOIN ─── */
function joinTrip(skip) {
  const name = document.getElementById('join-name').value.trim();
  if (!skip && !name) { document.getElementById('join-name').focus(); return; }
  if (name && !MEMBERS.find(function(m){ return m.name === name; })) {
    MEMBERS.push({id:'m'+Date.now(), name:name, role:'guest', bg:'#888780', fg:'#F1EFE8'});
  }
  S.isOwner = false;
  S.user = {name: name || 'Guest'};
  loadSample();
  buildTripUI();
  applyRoleUI();
  goTo('s-app');
}

/* ─── COPY ─── */
function copyLink() {
  const el = document.getElementById('share-link-in');
  el.select();
  document.execCommand('copy');
  event.target.textContent = 'Copied!';
  setTimeout(function(){ event.target.textContent = 'Copy'; }, 1500);
}
function copyLink2() {
  const el = document.getElementById('sh-link-val');
  el.select();
  document.execCommand('copy');
  event.target.textContent = 'Copied!';
  setTimeout(function(){ event.target.textContent = 'Copy'; }, 1500);
}

/* ─── ISLAND GROUP & HOTELS ─── */
let _currentGroup = 'luzon';
let _currentDest  = null;
let _hotelFilter  = 'all';

function openIslandGroup(group) {
  _currentGroup = group;
  const g = ISLAND_GROUPS[group];
  const titleEl = document.getElementById('island-group-title');
  titleEl.innerHTML = g.title.slice(0,4) + '<span style="color:var(--gold)">' + g.title.slice(4) + '</span>';
  document.getElementById('island-group-sub').textContent = g.destinations.length + ' destinations — tap a place to see hotels';
  const list = document.getElementById('island-dest-list');
  list.innerHTML = g.destinations.map(function(d) {
    return '<div class="dest-item" onclick="openHotels(\'' + d.key + '\',\'' + d.name + '\',\'' + d.region + '\')">'
      + '<div class="dest-item-left"><div class="dest-item-icon">' + d.icon + '</div>'
      + '<div><div class="dest-item-name">' + d.name + '</div><div class="dest-item-region">' + d.region + '</div></div></div>'
      + '<div class="dest-item-right"><div class="dest-item-from">' + d.from + '/night</div>'
      + '<div class="dest-item-arrow">›</div></div></div>';
  }).join('');
  goTo('s-island');
}

function openHotels(destKey, destName, destRegion) {
  _currentDest = destKey;
  _hotelFilter = 'all';
  document.getElementById('hotels-dest-title').textContent = destName.toUpperCase();
  document.getElementById('hotels-dest-sub').textContent   = destRegion + ' · Hotels & Resorts';
  document.getElementById('hotels-search-input').value     = '';
  document.querySelectorAll('.hf-btn').forEach(function(b){ b.classList.remove('active'); });
  const firstBtn = document.querySelector('.hf-btn');
  if (firstBtn) firstBtn.classList.add('active');
  renderHotels();
  goTo('s-hotels');
}

function setHotelFilter(f, btn) {
  _hotelFilter = f;
  document.querySelectorAll('.hf-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
  renderHotels();
}

function filterHotels() { renderHotels(); }

function renderHotels() {
  const raw   = HOTELS_BY_DEST[_currentDest] || DEFAULT_HOTELS;
  const query = (document.getElementById('hotels-search-input').value || '').toLowerCase();
  const hotels = raw.filter(function(h) {
    const matchSearch = !query || h.name.toLowerCase().indexOf(query) !== -1 || h.address.toLowerCase().indexOf(query) !== -1;
    const matchFilter = _hotelFilter === 'all' || h.tier === _hotelFilter || (_hotelFilter === 'trending' && h.trending);
    return matchSearch && matchFilter;
  });
  const body = document.getElementById('hotels-body');
  if (hotels.length === 0) {
    body.innerHTML = '<div style="text-align:center;padding:48px 20px;color:var(--earth-l);font-size:13px;">No hotels match. Try a different search.</div>';
    return;
  }
  body.innerHTML = hotels.map(function(h) {
    const stars = '★'.repeat(Math.round(h.rating/2));
    const trend = h.trending ? '<div class="hotel-trending-badge">🔥 Trending</div>' : '';
    return '<div class="hotel-card">'
      + '<div class="hotel-card-img" style="background-image:url(\'' + h.img + '\')">'
      + '<div class="hotel-card-img-overlay"></div>' + trend
      + '<div class="hotel-price-badge">₱' + h.pricePerNight.toLocaleString() + '/night</div></div>'
      + '<div class="hotel-card-body">'
      + '<div class="hotel-card-top"><div class="hotel-name">' + h.name + '</div><div class="hotel-stars">' + stars + '</div></div>'
      + '<div class="hotel-address">📍 ' + h.address + '</div>'
      + '<div class="hotel-meta-row">'
      + h.rooms.map(function(r){ return '<span class="hotel-meta-pill">🛏 ' + r + '</span>'; }).join('')
      + h.tags.map(function(t){ return '<span class="hotel-meta-pill">' + t + '</span>'; }).join('')
      + '</div>'
      + '<div class="hotel-rating-row">'
      + '<div class="hotel-rating-badge">' + h.rating.toFixed(1) + '</div>'
      + '<div class="hotel-rating-count">' + h.reviews.toLocaleString() + ' reviews</div>'
      + '<button class="hotel-book-btn" onclick="bookHotel(\'' + h.id + '\',\'' + h.name + '\')">Book on Klook →</button>'
      + '</div></div></div>';
  }).join('');
}

function bookHotel(id, name) {
  const url = 'https://www.klook.com/en-PH/search/?query=' + encodeURIComponent(name + ' ' + (_currentDest||'')) + '&utm_source=lakwatsero';
  window.open(url, '_blank');
}

/* ─── STANDALONE BUDGET (KWENTADOR) ─── */
function openSoloBudget() {
  renderSoloMembers();
  renderSoloExpenses();
  goTo('s-solo-budget');
}

function addSoloMember() {
  const inp  = document.getElementById('solo-member-input');
  const name = inp.value.trim();
  if (!name || SOLO_MEMBERS.indexOf(name) !== -1) return;
  SOLO_MEMBERS.push(name);
  inp.value = '';
  renderSoloMembers();
  renderSoloExpenses();
}

function removeSoloMember(name) {
  if (name === 'Me') return;
  SOLO_MEMBERS = SOLO_MEMBERS.filter(function(m){ return m !== name; });
  renderSoloMembers();
  renderSoloExpenses();
}

function renderSoloMembers() {
  const el = document.getElementById('solo-members-list');
  if (!el) return;
  el.innerHTML = SOLO_MEMBERS.map(function(m) {
    var removeBtn = m !== 'Me'
      ? '<span onclick="removeSoloMember(\'' + m + '\')" style="font-size:10px;color:var(--red);cursor:pointer;margin-left:4px;">✕</span>'
      : '';
    return '<div style="display:flex;align-items:center;gap:5px;background:var(--cream);border:1px solid rgba(28,16,8,.1);border-radius:var(--r-pill);padding:4px 10px;">'
      + '<span style="font-size:12px;font-weight:600;color:var(--earth-m);">' + m + '</span>' + removeBtn + '</div>';
  }).join('');
  const countEl = document.getElementById('solo-bud-members-count');
  if (countEl) countEl.textContent = SOLO_MEMBERS.length + ' people';
}

function renderSoloExpenses() {
  var list = document.getElementById('solo-exp-list');
  if (!list) return;
  var total = SOLO_EXPENSES.reduce(function(s,e){ return s+e.total; }, 0);
  var totalEl = document.getElementById('solo-bud-total');
  if (totalEl) totalEl.textContent = '₱' + total.toLocaleString();
  var pctEl = document.getElementById('solo-bud-pct');
  if (pctEl) pctEl.textContent = SOLO_EXPENSES.length + ' expense' + (SOLO_EXPENSES.length !== 1 ? 's' : '');
  var barEl = document.getElementById('solo-bud-bar');
  if (barEl) barEl.style.width = Math.min(100, Math.round(total / Math.max(total*1.3, 5000) * 100)) + '%';
  if (SOLO_EXPENSES.length === 0) {
    list.innerHTML = '<div style="text-align:center;padding:28px;color:var(--earth-l);font-size:13px;">No expenses yet — add one below! 💸</div>';
    return;
  }
  list.innerHTML = SOLO_EXPENSES.map(function(e) {
    var splits = e.splits || [];
    var isCustom = e.splitMode === 'custom';
    var myShare = splits.find(function(s){ return s.name === 'Me'; });
    var ppLine = '';
    if (isCustom && myShare) ppLine = 'Me: ₱' + myShare.amount.toLocaleString();
    else if (!isCustom && splits.length > 0) ppLine = '₱' + splits[0].amount.toLocaleString() + '/person';
    var breakdown = isCustom ? '<div class="exp-split-breakdown">' + splits.map(function(s){ return '<span class="exp-split-chip' + (s.name==='Me'?' me':'') + '">' + s.name + ' ₱' + s.amount.toLocaleString() + '</span>'; }).join('') + '</div>' : '';
    return '<div class="exp-item">'
      + '<div class="exp-item-main"><div class="exp-icon-wrap">' + e.icon + '</div>'
      + '<div class="exp-info"><div class="exp-title-txt">' + e.title + '</div>'
      + '<div class="exp-meta-txt">' + e.type + ' · Paid by <strong>' + e.paidBy + '</strong> · ' + splits.length + ' people</div></div>'
      + '<div class="exp-amounts"><div class="exp-total-val">₱' + e.total.toLocaleString() + '</div>'
      + '<div class="exp-pp-val">' + ppLine + '</div>'
      + (e.receipt ? '<img class="exp-receipt-thumb" src="' + e.receipt + '" onclick="viewReceipt(this.src)"/>' : '')
      + '</div></div>' + breakdown
      + '<div class="exp-actions">'
      + '<button class="exp-act-btn edit" onclick="openSoloExpSheet(\'' + e.id + '\')">✏️ Edit</button>'
      + '<button class="exp-act-btn receipt" data-id="' + e.id + '" onclick="viewExpenseReceipt(this.dataset.id,&quot;solo&quot;)">🧾 Receipt</button>'
      + '<button class="exp-act-btn delete" onclick="deleteSoloExpense(\'' + e.id + '\')">🗑 Delete</button>'
      + '</div></div>';
  }).join('');
}

function deleteSoloExpense(id) {
  SOLO_EXPENSES = SOLO_EXPENSES.filter(function(e){ return e.id !== id; });
  renderSoloExpenses();
}

function openSoloExpSheet(idOrNull) {
  _soloEditingId = idOrNull;
  var prefill = idOrNull ? SOLO_EXPENSES.find(function(e){ return e.id === idOrNull; }) : null;
  document.getElementById('exp-sheet-title').textContent = prefill ? 'Edit expense' : 'Log expense';
  document.querySelectorAll('.exp-type-chip').forEach(function(c){ c.classList.remove('active'); });
  document.getElementById('exp-form').style.display = 'none';
  document.getElementById('exp-title-in').value = '';
  document.getElementById('exp-amt-in').value = '';
  document.getElementById('receipt-preview').style.display = 'none';
  _soloSelectedET = null;
  S._splitMode = 'equal';
  var paidSel = document.getElementById('exp-paid-by');
  paidSel.innerHTML = SOLO_MEMBERS.map(function(m){ return '<option value="' + m + '">' + m + '</option>'; }).join('');
  var daySel = document.getElementById('exp-day-select');
  daySel.innerHTML = '<option value="-1">General</option>';
  setSplitMode('equal');
  document.querySelector('.btn-save-exp').onclick = saveSoloExpense;
  openSheet('sh-exp');
  if (prefill) {
    document.querySelectorAll('.exp-type-chip').forEach(function(c) {
      var lbl = c.querySelector('.exp-type-lbl');
      if (lbl && lbl.textContent.trim() === prefill.type.split('/')[0].trim()) c.classList.add('active');
    });
    _soloSelectedET = {icon:prefill.icon, label:prefill.type, cat:''};
    document.getElementById('exp-form').style.display = 'block';
    document.getElementById('exp-title-in').value = prefill.title;
    document.getElementById('exp-amt-in').value = prefill.total;
    paidSel.value = prefill.paidBy;
    var mode = prefill.splitMode || 'equal';
    setSplitMode(mode);
    if (mode === 'equal') {
      renderSoloMemberChecks((prefill.splits||[]).map(function(s){ return s.name; }));
      calcSplit();
    } else {
      renderCustomSplitInputs(prefill.splits||[]);
      updateSplitBalance();
    }
    if (prefill.receipt) {
      document.getElementById('receipt-preview').src = prefill.receipt;
      document.getElementById('receipt-preview').style.display = 'block';
    }
  }
}

function renderSoloMemberChecks(presel) {
  var con = document.getElementById('exp-mem-checks');
  con.innerHTML = SOLO_MEMBERS.map(function(m) {
    var active = (!presel || presel.length === 0 || presel.indexOf(m) !== -1) ? ' active' : '';
    return '<div class="member-chk' + active + '" onclick="this.classList.toggle(\'active\');calcSplit()">' + m + '</div>';
  }).join('');
}

function saveSoloExpense() {
  var title = document.getElementById('exp-title-in').value.trim();
  var amt = parseFloat(document.getElementById('exp-amt-in').value) || 0;
  var paidBy = document.getElementById('exp-paid-by').value;
  if (!title || !amt || !_soloSelectedET) { alert('Please fill in all fields.'); return; }
  var splits = [];
  if (S._splitMode === 'custom') {
    var inputs = document.querySelectorAll('#custom-split-list .csr-input');
    var total = 0;
    inputs.forEach(function(inp){ var a = parseFloat(inp.value)||0; total += a; splits.push({name:inp.dataset.name, amount:a}); });
    if (Math.abs(total - amt) > 1 && !confirm('Split amounts do not match total. Save anyway?')) return;
  } else {
    var selNames = Array.from(document.querySelectorAll('#exp-mem-checks .member-chk.active')).map(function(el){ return el.textContent; });
    if (selNames.length === 0) { alert('Select at least one person.'); return; }
    var pp = Math.round(amt / selNames.length);
    splits = selNames.map(function(n){ return {name:n, amount:pp}; });
  }
  var receiptEl = document.getElementById('receipt-preview');
  var receipt = receiptEl.style.display !== 'none' ? receiptEl.src : null;
  var expData = {icon:_soloSelectedET.icon, type:_soloSelectedET.label, title:title, total:amt, paidBy:paidBy, day:-1, splitMode:S._splitMode, splits:splits, receipt:receipt};
  if (_soloEditingId) {
    var idx = SOLO_EXPENSES.findIndex(function(e){ return e.id === _soloEditingId; });
    if (idx > -1) SOLO_EXPENSES[idx] = Object.assign({}, SOLO_EXPENSES[idx], expData);
  } else {
    SOLO_EXPENSES.push(Object.assign({id:'se'+Date.now()}, expData));
  }
  closeSheet('sh-exp');
  renderSoloExpenses();
  _soloEditingId = null;
  _soloSelectedET = null;
  S._splitMode = 'equal';
  document.querySelector('.btn-save-exp').onclick = saveExpense;
}


/* ─── REPORT GENERATOR ─── */
function generateReport() {
  if (SOLO_EXPENSES.length === 0) { alert('No expenses yet! Add some expenses first.'); return; }
  const total = SOLO_EXPENSES.reduce(function(s,e){ return s+e.total; }, 0);
  const now   = new Date().toLocaleDateString('en-PH', {year:'numeric', month:'long', day:'numeric'});

  const balances = {};
  SOLO_MEMBERS.forEach(function(m){ balances[m] = 0; });
  SOLO_EXPENSES.forEach(function(e) {
    (e.splits||[]).forEach(function(s){ if (balances[s.name] !== undefined) balances[s.name] -= s.amount; });
    if (balances[e.paidBy] !== undefined) balances[e.paidBy] += e.total;
  });

  const catTotals = {};
  SOLO_EXPENSES.forEach(function(e){ catTotals[e.type] = (catTotals[e.type]||0) + e.total; });

  const expRows = SOLO_EXPENSES.map(function(e) {
    var splits   = e.splits || [];
    var isCustom = e.splitMode === 'custom';
    var splitStr = isCustom
      ? splits.map(function(s){ return s.name + ' ₱' + s.amount.toLocaleString(); }).join(' · ')
      : (splits.length > 0 ? splits.map(function(s){ return s.name; }).join(', ') + ' (₱' + splits[0].amount.toLocaleString() + ' each)' : '');
    var recEl = e.receipt ? '<div><img src="' + e.receipt + '" class="report-receipt" onclick="window.open(this.src,\'_blank\')"/></div>' : '';
    return '<div class="report-item">'
      + '<div class="report-item-left">'
      + '<div class="report-item-name">' + e.icon + ' ' + e.title + '</div>'
      + '<div class="report-item-meta">' + e.type + ' · Paid by ' + e.paidBy + '</div>'
      + '<div class="report-item-meta" style="margin-top:2px;color:#666;">' + splitStr + '</div>'
      + recEl + '</div>'
      + '<div><div class="report-item-amount">₱' + e.total.toLocaleString() + '</div></div></div>';
  }).join('');

  const catRows = Object.entries(catTotals).map(function(entry) {
    return '<div class="report-item"><div class="report-item-left"><div class="report-item-name">' + entry[0] + '</div></div>'
      + '<div class="report-item-amount">₱' + entry[1].toLocaleString() + '</div></div>';
  }).join('');

  const balRows = SOLO_MEMBERS.map(function(m) {
    const b = balances[m] || 0;
    return '<div class="report-item"><div class="report-item-left"><div class="report-item-name">' + m + '</div></div>'
      + '<div class="report-item-amount" style="color:' + (b>=0 ? 'var(--green)' : 'var(--red)') + '">'
      + (b>=0?'+':'') + '₱' + Math.abs(b).toLocaleString()
      + '<div style="font-size:10px;color:#888">' + (b>=0 ? 'gets back' : 'owes') + '</div></div></div>';
  }).join('');

  document.getElementById('report-content').innerHTML =
    '<div class="report-header">'
    + '<div class="report-brand">LAKWAT<span>SERO</span>PH</div>'
    + '<div class="report-title">💰 Expense Report · Kwentador</div>'
    + '<div class="report-date">Generated: ' + now + '</div></div>'
    + '<div class="report-section-title">All Expenses</div>' + expRows
    + '<div class="report-total-row"><span>Grand Total</span><span>₱' + total.toLocaleString() + '</span></div>'
    + '<div class="report-section-title">By Category</div>' + catRows
    + '<div class="report-section-title">Who Owes What</div>' + balRows
    + '<div class="report-footer">Generated by LakwatseroPH 🇵🇭</div>';
  goTo('s-report');
}

/* ─── TRIP EXPENSE REPORTS ─── */

function generateTripReport(mode, dayIndex, expenseId, personName) {
  var now = new Date().toLocaleDateString('en-PH', {year:'numeric', month:'long', day:'numeric'});
  var filteredExp, reportTitle, reportSub;
  if (mode === 'all') {
    filteredExp = EXPENSES;
    reportTitle = S.dest + ' Trip — Full Expense Report';
    var _bd = '₱'+(S.budgetAmount||20000).toLocaleString()+(S.budgetType==='pp'?'/person':' total');
    reportSub   = S.days + ' days · ' + S.group + ' people · ' + _bd;
  } else if (mode === 'day') {
    filteredExp = EXPENSES.filter(function(e){ return e.day === dayIndex; });
    var dayLabel = dayIndex === -1 ? 'Pre-trip expenses' : (S.tripDays[dayIndex] ? S.tripDays[dayIndex].label : 'Day '+(dayIndex+1));
    reportTitle = S.dest + ' Trip — ' + dayLabel;
    reportSub   = 'Expenses for ' + dayLabel;
  } else if (mode === 'item') {
    var single = EXPENSES.find(function(e){ return e.id === expenseId; });
    filteredExp = single ? [single] : [];
    reportTitle = S.dest + ' Trip — ' + (single ? single.title : 'Expense') + ' breakdown';
    reportSub   = single ? (single.icon + ' ' + single.type) : '';
  } else if (mode === 'person') {
    filteredExp = EXPENSES.filter(function(e){ return (e.splits||[]).some(function(s){ return s.name === personName; }); });
    reportTitle = personName + "'s Expenses";
    reportSub   = S.dest + ' Trip — Personal breakdown';
  }
  var grandTotal = filteredExp.reduce(function(s,e){ return s+e.total; }, 0);
  // Full balances
  var allNames = {};
  filteredExp.forEach(function(e){
    (e.splits||[]).forEach(function(s){ allNames[s.name]=true; });
    if (e.paidBy) allNames[e.paidBy]=true;
  });
  var balances = {};
  Object.keys(allNames).forEach(function(n){ balances[n]=0; });
  filteredExp.forEach(function(e){
    (e.splits||[]).forEach(function(s){ if(balances[s.name]!==undefined) balances[s.name]-=s.amount; });
    if(balances[e.paidBy]!==undefined) balances[e.paidBy]+=e.total;
  });
  // Category totals
  var catTotals = {};
  filteredExp.forEach(function(e){ catTotals[e.type]=(catTotals[e.type]||0)+e.total; });
  // Expense rows
  var expRows = filteredExp.length===0
    ? '<div style="text-align:center;padding:24px;color:#aaa;font-size:13px;">No expenses in this selection.</div>'
    : filteredExp.map(function(e) {
        var splits=e.splits||[];
        var isCustom=e.splitMode==='custom';
        var splitStr=isCustom
          ? splits.map(function(s){ return s.name+' ₱'+s.amount.toLocaleString(); }).join(' · ')
          : (splits.length>0 ? splits.map(function(s){ return s.name; }).join(', ')+'  (₱'+splits[0].amount.toLocaleString()+' each)' : '');
        var dayLbl=e.day===-1?'Pre-trip':(S.tripDays[e.day]?S.tripDays[e.day].label:'');
        var recEl=e.receipt?'<div style="margin-top:8px;"><img src="'+e.receipt+'" class="report-receipt" onclick="window.open(this.src,\'_blank\')"/></div>':'';
        var personShareEl='';
        if(mode==='person'){
          var sp=splits.find(function(s){ return s.name===personName; });
          if(sp) personShareEl='<div style="font-size:11px;font-weight:700;color:#1A4FA0;margin-top:3px;">'
            +personName+': ₱'+sp.amount.toLocaleString()+'</div>';
        }
        return '<div class="report-item">'
          +'<div class="report-item-left">'
          +'<div class="report-item-name">'+e.icon+' '+e.title+'</div>'
          +'<div class="report-item-meta">'+e.type+(dayLbl?' · '+dayLbl:'')+' · Paid by <strong>'+e.paidBy+'</strong></div>'
          +'<div class="report-item-meta" style="margin-top:1px;color:#777;">'+splitStr+'</div>'
          +personShareEl+recEl+'</div>'
          +'<div><div class="report-item-amount">₱'+e.total.toLocaleString()+'</div></div></div>';
      }).join('');

  // Balance rows — for item mode build a detailed per-person table with breakdown items
  var namesToShow = mode==='person' ? [personName] : Object.keys(balances);

  var balRows = namesToShow.map(function(name) {
    var b    = balances[name]||0;
    var paid = filteredExp.reduce(function(s,e){ return s+(e.paidBy===name?e.total:0); },0);
    var owes = filteredExp.reduce(function(s,e){
      var sp=(e.splits||[]).find(function(x){ return x.name===name; });
      return s+(sp?sp.amount:0);
    },0);

    var mathDetail = '';

    // Show math detail table for BOTH person mode AND item mode
    if ((mode==='person' || mode==='item') && filteredExp.length>0) {
      var rows = filteredExp.map(function(e){
        var sp=(e.splits||[]).find(function(x){ return x.name===name; });
        if(!sp) return '';
        var isPayer=e.paidBy===name;
        var net=isPayer?(e.total-sp.amount):(-sp.amount);

        // Per-item breakdown rows for this person (if they have them)
        var bdRows = '';
        if (sp.breakdown && sp.breakdown.length > 0) {
          bdRows = '<tr><td colspan="4" style="padding:0 0 2px 16px;">'
            + '<table style="width:100%;border-collapse:collapse;">';
          sp.breakdown.forEach(function(r){
            var sub = Math.round((r.qty||1)*(r.price||0));
            if (!r.name && !r.price) return;
            bdRows += '<tr style="border-top:1px solid #f5f5f5;">'
              + '<td style="padding:2px 6px 2px 0;font-size:10px;color:#888;">'+( r.name||'—')+'</td>'
              + '<td style="font-size:10px;color:#aaa;text-align:center;padding:2px 6px;">×'+(r.qty||1)+'</td>'
              + '<td style="font-size:10px;color:#aaa;text-align:right;padding:2px 4px;">₱'+(r.price||0).toLocaleString()+'</td>'
              + '<td style="font-size:10px;color:#666;text-align:right;padding:2px 0 2px 6px;font-weight:600;">₱'+sub.toLocaleString()+'</td>'
              + '</tr>';
          });
          bdRows += '</table></td></tr>';
        }

        return '<tr>'
          +'<td style="padding:5px 8px 5px 0;font-size:11px;color:#555;vertical-align:top;">'+e.icon+' '+e.title+'</td>'
          +'<td style="padding:5px 8px;font-size:11px;text-align:center;vertical-align:top;">'+(isPayer?'<span style="color:#2D6A4F;font-weight:600;">paid ₱'+e.total.toLocaleString()+'</span>':'—')+'</td>'
          +'<td style="padding:5px 0 5px 8px;font-size:11px;color:#C0392B;text-align:right;vertical-align:top;">−₱'+sp.amount.toLocaleString()+'</td>'
          +'<td style="padding:5px 0 5px 12px;font-size:11px;font-weight:600;text-align:right;vertical-align:top;color:'+(net>=0?'#2D6A4F':'#C0392B')+';">'+(net>=0?'+':'')+'₱'+Math.abs(net).toLocaleString()+'</td>'
          +'</tr>'
          + bdRows;
      }).filter(Boolean).join('');

      if (rows) {
        mathDetail = '<table style="width:100%;border-collapse:collapse;margin:10px 0 4px;">'
          +'<tr>'
          +'<th style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#aaa;text-align:left;padding:0 8px 6px 0;" colspan="2">Expense</th>'
          +'<th style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#aaa;text-align:right;padding:0 0 6px 8px;">Share</th>'
          +'<th style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#aaa;text-align:right;padding:0 0 6px 12px;">Net</th>'
          +'</tr>'
          +rows
          +'<tr><td colspan="4"><div style="height:1px;background:#ddd;margin:4px 0;"></div></td></tr>'
          +'<tr><td colspan="2" style="font-size:11px;color:#555;padding:4px 0;">Total paid out</td>'
          +'<td colspan="2" style="font-size:11px;font-weight:700;text-align:right;color:#2D6A4F;">+₱'+paid.toLocaleString()+'</td></tr>'
          +'<tr><td colspan="2" style="font-size:11px;color:#555;padding:2px 0 6px;">Total share owed</td>'
          +'<td colspan="2" style="font-size:11px;font-weight:700;text-align:right;color:#C0392B;">−₱'+owes.toLocaleString()+'</td></tr>'
          +'</table>';
      }
    }

    return '<div style="padding:12px 0;border-bottom:1px solid #eee;">'
      +'<div style="display:flex;justify-content:space-between;align-items:flex-start;">'
      +'<div><div style="font-weight:600;font-size:14px;color:#222;">'+name+'</div>'
      +(mode!=='person'&&mode!=='item'?'<div style="font-size:11px;color:#888;margin-top:1px;">Paid: ₱'+paid.toLocaleString()+' · Share: ₱'+owes.toLocaleString()+'</div>':'')
      +'</div>'
      +'<div style="text-align:right;">'
      +'<div style="font-size:18px;font-weight:700;color:'+(b>=0?'#2D6A4F':'#C0392B')+';">'+(b>=0?'+':'')+'₱'+Math.abs(b).toLocaleString()+'</div>'
      +'<div style="font-size:11px;color:#888;">'+(b>=0?'← gets back':'→ owes')+'</div>'
      +'</div></div>'
      +mathDetail+'</div>';
  }).join('');
  // Settlement suggestion
  var settlementNote='';
  if(mode!=='item'&&Object.keys(balances).length>1){
    var debtors=Object.keys(balances).filter(function(n){ return balances[n]<-0.5; });
    var creditors=Object.keys(balances).filter(function(n){ return balances[n]>0.5; });
    if(debtors.length>0&&creditors.length>0){
      var lines=debtors.map(function(d){
        return creditors.map(function(c){
          var settle=Math.min(Math.abs(balances[d]),balances[c]);
          if(settle<1) return '';
          return '<div style="font-size:12px;color:#333;padding:6px 0;border-bottom:1px solid #eee;">'
            +'<strong>'+d+'</strong> pays <strong>'+c+'</strong> — <span style="color:#C0392B;font-weight:700;">₱'+Math.round(settle).toLocaleString()+'</span></div>';
        }).join('');
      }).join('');
      if(lines.trim()){
        settlementNote='<div class="report-section-title">How to Settle Up</div>'
          +'<div style="background:#fff8f0;border:1px solid #f4c07a;border-radius:8px;padding:10px 12px;margin-bottom:8px;font-size:11px;color:#888;">Transfer these amounts to balance everything out:</div>'
          +lines;
      }
    }
  }
  // Category rows
  var catRows = mode==='item' ? '' :
    '<div class="report-section-title">By Category</div>'
    +Object.entries(catTotals).map(function(entry){
      return '<div class="report-item"><div class="report-item-left"><div class="report-item-name">'+entry[0]+'</div></div>'
        +'<div class="report-item-amount">₱'+entry[1].toLocaleString()+'</div></div>';
    }).join('');
  document.getElementById('trip-report-content').innerHTML=
    '<div class="report-header">'
    +'<div class="report-brand">LAKWAT<span>SERO</span>PH</div>'
    +'<div class="report-title">'+reportTitle+'</div>'
    +'<div class="report-date">'+reportSub+' · Generated: '+now+'</div></div>'
    +'<div class="report-section-title">Expenses</div>'
    +expRows
    +(filteredExp.length>0?'<div class="report-total-row"><span>Total</span><span>₱'+grandTotal.toLocaleString()+'</span></div>':'')
    +catRows
    +(namesToShow.length>0&&mode!=='item'?'<div class="report-section-title">'+(mode==='person'?'Balance Breakdown':'Who Owes What')+'</div>'+balRows:'')
    +(mode==='item'&&namesToShow.length>0?'<div class="report-section-title">Who Owes What · Per Person Breakdown</div>'+balRows:'')
    +settlementNote
    +'<div class="report-footer">Generated by LakwatseroPH 🇵🇭</div>';
  goTo('s-trip-report');
}

function openDayReportPicker() {
  var body = document.getElementById('day-report-body');
  // Pre-trip + each day
  var items = [{label:'Pre-trip expenses', day:-1}];
  S.tripDays.forEach(function(d, i){ items.push({label:d.label, day:i}); });
  items.push({label:'Whole trip (all days)', day:'all'});
  body.innerHTML = items.map(function(item) {
    var expCount = item.day === 'all'
      ? EXPENSES.length
      : EXPENSES.filter(function(e){ return e.day === item.day; }).length;
    var onclick = item.day === 'all'
      ? "closeSheet('sh-day-report');generateTripReport('all')"
      : "closeSheet('sh-day-report');generateTripReport('day'," + item.day + ")";
    return '<div class="dest-item" onclick="' + onclick + '">'
      + '<div class="dest-item-left">'
      + '<div class="dest-item-icon">📅</div>'
      + '<div><div class="dest-item-name">' + item.label + '</div>'
      + '<div class="dest-item-region">' + expCount + ' expense' + (expCount!==1?'s':'') + '</div></div></div>'
      + '<div class="dest-item-arrow">›</div></div>';
  }).join('');
  openSheet('sh-day-report');
}

function openItemReportPicker() {
  var body = document.getElementById('item-report-body');
  if (EXPENSES.length === 0) {
    body.innerHTML = '<div style="text-align:center;padding:32px;color:rgba(255,255,255,.35);font-size:13px;">No expenses logged yet.</div>';
  } else {
    body.innerHTML = EXPENSES.map(function(e) {
      var dayLbl = e.day === -1 ? 'Pre-trip' : (S.tripDays[e.day] ? S.tripDays[e.day].label : 'Day ?');
      return '<div class="dest-item" onclick="closeSheet(\'sh-item-report\');generateTripReport(\'item\',-1,\'' + e.id + '\')">'
        + '<div class="dest-item-left">'
        + '<div class="dest-item-icon">' + e.icon + '</div>'
        + '<div><div class="dest-item-name">' + e.title + '</div>'
        + '<div class="dest-item-region">' + dayLbl + ' · ₱' + e.total.toLocaleString() + ' · ' + e.splits.length + ' people</div></div></div>'
        + '<div class="dest-item-arrow">›</div></div>';
    }).join('');
  }
  openSheet('sh-item-report');
}

function renderPerPersonReportList() {
  var el = document.getElementById('per-person-report-list');
  if (!el) return;
  el.innerHTML = MEMBERS.map(function(m) {
    var initials = m.name.split(' ').map(function(n){ return n[0]; }).join('').slice(0,2).toUpperCase();
    var myTotal = EXPENSES.reduce(function(s,e){
      var sp = (e.splits||[]).find(function(x){ return x.name === m.name; });
      return s + (sp ? sp.amount : 0);
    }, 0);
    return '<div class="person-report-btn" onclick="generateTripReport(\'person\',-1,null,\'' + m.name + '\')">'
      + '<div class="prb-left">'
      + '<div class="prb-av" style="background:' + m.bg + ';color:' + m.fg + '">' + initials + '</div>'
      + '<div><div class="prb-name">' + m.name + '</div>'
      + '<div class="prb-share">Total share: ₱' + myTotal.toLocaleString() + '</div></div></div>'
      + '<div class="prb-arrow">📄 →</div></div>';
  }).join('');
}

/* ─── BREAKDOWN MODAL ─── */
/* ─── BREAKDOWN POPUP ─── */
var _bdPersonName  = null;
var _bdRows        = [];
var _bdExpTotal    = 0;

function openBreakdown(personName) {
  _bdPersonName = personName;
  _bdExpTotal   = parseFloat(document.getElementById('exp-amt-in').value) || 0;

  // Read existing amount for this person
  var inp = document.querySelector('#custom-split-list .csr-input[data-name="' + personName + '"]');
  var currentAmt = inp ? (parseFloat(inp.value) || 0) : 0;

  // Load previously saved breakdown rows if present (stored on element)
  _bdRows = (inp && inp._breakdown && inp._breakdown.length > 0)
    ? inp._breakdown.map(function(r){ return Object.assign({}, r); })
    : [{id: Date.now(), name:'', qty:1, price: currentAmt}];

  document.getElementById('bd-person-name').textContent = personName + "'s breakdown";
  document.getElementById('bd-cap').textContent = '₱' + currentAmt.toLocaleString();
  renderBdRows();
  refreshBdTotals();
  document.getElementById('bd-overlay').classList.add('open');
}

function closeBreakdown() {
  document.getElementById('bd-overlay').classList.remove('open');
}

function closeBdIfOutside(e) {
  if (e.target === document.getElementById('bd-overlay')) closeBreakdown();
}

function renderBdRows() {
  var container = document.getElementById('bd-items-list');
  if (_bdRows.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:20px;font-size:12px;color:rgba(255,255,255,.3);">No items yet. Tap + Add item.</div>';
    return;
  }
  container.innerHTML = _bdRows.map(function(r, i) {
    var lineTotal = Math.round((r.qty||1) * (r.price||0));
    return '<div class="bd-item-row">'
      + '<input type="text" placeholder="Item name" value="' + (r.name||'') + '"'
      + ' oninput="_bdRows[' + i + '].name=this.value;">'
      + '<input type="number" min="1" value="' + (r.qty||1) + '"'
      + ' oninput="_bdRows[' + i + '].qty=parseFloat(this.value)||1;refreshBdRow(' + i + ');">'
      + '<input type="number" min="0" placeholder="0" value="' + (r.price||'') + '"'
      + ' oninput="_bdRows[' + i + '].price=parseFloat(this.value)||0;refreshBdRow(' + i + ');">'
      + '<button class="bd-item-del" onclick="removeBdItem(' + i + ')" title="Remove">✏️</button>'
      + '</div>';
  }).join('');
  refreshBdTotals();
}

function refreshBdRow(i) { refreshBdTotals(); }

function refreshBdTotals() {
  var itemsTotal = _bdRows.reduce(function(s,r){ return s + Math.round((r.qty||1)*(r.price||0)); }, 0);
  var inp        = document.querySelector('#custom-split-list .csr-input[data-name="' + _bdPersonName + '"]');
  var personAmt  = inp ? (parseFloat(inp.value)||0) : 0;
  var remaining  = personAmt - itemsTotal;

  var itEl  = document.getElementById('bd-items-total');
  var remEl = document.getElementById('bd-remaining');
  if (itEl) {
    itEl.textContent  = '₱' + itemsTotal.toLocaleString();
    itEl.className    = 'breakdown-total-val' + (itemsTotal > _bdExpTotal ? ' over' : '');
  }
  if (remEl) {
    remEl.textContent = (remaining >= 0 ? '₱' : '-₱') + Math.abs(remaining).toLocaleString();
    remEl.className   = 'breakdown-total-val' + (Math.abs(remaining) < 1 ? ' ok' : remaining < 0 ? ' over' : '');
  }
}

function addBdItem() {
  _bdRows.push({id: Date.now() + Math.random(), name:'', qty:1, price:0});
  renderBdRows();
  var body = document.getElementById('bd-items-list');
  if (body) body.scrollTop = body.scrollHeight;
}

function removeBdItem(i) {
  _bdRows.splice(i, 1);
  renderBdRows();
}

function applyBreakdown() {
  var itemsTotal = _bdRows.reduce(function(s,r){ return s + Math.round((r.qty||1)*(r.price||0)); }, 0);
  var inp = document.querySelector('#custom-split-list .csr-input[data-name="' + _bdPersonName + '"]');
  if (inp) {
    inp.value = itemsTotal;
    inp._breakdown = _bdRows.slice();
    updateSplitBalance();
    var row = inp.closest('.custom-split-row');
    var btn = row ? row.querySelector('.csr-breakdown-btn') : null;
    var namedRows = _bdRows.filter(function(r){ return r.name || r.price; }).length;
    if (btn) {
      if (namedRows > 0) {
        btn.textContent = '🧾 ' + namedRows + ' item' + (namedRows !== 1 ? 's' : '');
        btn.classList.add('has-items');
      } else {
        btn.textContent = '≡';
        btn.classList.remove('has-items');
      }
    }
  }
  document.getElementById('bd-cap').textContent = '₱' + itemsTotal.toLocaleString();
  closeBreakdown();
}

/* ─── VIEW EXPENSE RECEIPT (single expense report) ─── */
function viewExpenseReceipt(id, context) {
  if (context === 'solo') {
    var e = SOLO_EXPENSES.find(function(x){ return x.id === id; });
    if (!e) return;
    var now = new Date().toLocaleDateString('en-PH',{year:'numeric',month:'long',day:'numeric'});
    var splits = e.splits||[];
    var isCustom = e.splitMode === 'custom';
    var splitStr = isCustom
      ? splits.map(function(s){ return s.name + ' ₱' + s.amount.toLocaleString(); }).join(' · ')
      : (splits.length > 0 ? splits.map(function(s){ return s.name; }).join(', ') + ' (₱' + splits[0].amount.toLocaleString() + ' each)' : '');
    var recEl = e.receipt ? '<div style="margin-top:8px;"><img src="' + e.receipt + '" style="max-width:100%;border-radius:8px;"/></div>' : '';
    document.getElementById('report-content').innerHTML =
      '<div class="report-header">'
      + '<div class="report-brand">LAKWAT<span>SERO</span>PH</div>'
      + '<div class="report-title">' + e.icon + ' ' + e.title + '</div>'
      + '<div class="report-date">Generated: ' + now + '</div></div>'
      + '<div class="report-section-title">Expense Details</div>'
      + '<div class="report-item"><div class="report-item-left">'
      + '<div class="report-item-name">' + e.type + '</div>'
      + '<div class="report-item-meta">Paid by ' + e.paidBy + '</div>'
      + '<div class="report-item-meta" style="margin-top:2px;color:#777;">' + splitStr + '</div>'
      + recEl + '</div>'
      + '<div><div class="report-item-amount">₱' + e.total.toLocaleString() + '</div></div></div>'
      + '<div class="report-section-title">Who Owes What</div>'
      + splits.map(function(s){
          var b = e.paidBy === s.name ? (e.total - s.amount) : (-s.amount);
          return '<div style="padding:10px 0;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;">'
            + '<div style="font-weight:600;font-size:13px;">' + s.name + '</div>'
            + '<div style="text-align:right;">'
            + '<div style="font-size:16px;font-weight:700;color:' + (b>=0?'#2D6A4F':'#C0392B') + ';">' + (b>=0?'+':'') + '₱' + Math.abs(b).toLocaleString() + '</div>'
            + '<div style="font-size:10px;color:#888;">' + (b>=0?'gets back':'owes') + '</div></div></div>';
        }).join('')
      + '<div class="report-footer">Generated by LakwatseroPH 🇵🇭</div>';
    goTo('s-report');
  } else {
    generateTripReport('item', -1, id);
  }
}

/* ─── ONBOARDING ─── */
var _obSlide = 0;
var _obTotal = 4;
var _obStartX = 0;
var _obReturnTo = 's-auth-landing'; // default: go to auth after onboarding

function showOnboarding() {
  _obSlide = 0;
  // No personalization at app open — user hasn't signed in yet
  // Build dots on all slides
  ['ob-dots','ob-dots-2','ob-dots-3','ob-dots-4'].forEach(function(id){
    var el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = '';
    for (var i = 0; i < _obTotal; i++) {
      var d = document.createElement('div');
      d.className = 'ob-dot' + (i === 0 ? ' active' : '');
      el.appendChild(d);
    }
  });
  var ob = document.getElementById('s-onboarding');
  ob.classList.add('active');
  ob.style.opacity = '';
  obSetSlide(0);
  // Touch / swipe support — add once
  if (!ob._swipeAttached) {
    ob._swipeAttached = true;
    ob.addEventListener('touchstart', function(e){ _obStartX = e.touches[0].clientX; }, {passive:true});
    ob.addEventListener('touchend',   function(e){
      var dx = e.changedTouches[0].clientX - _obStartX;
      if (dx < -60) obNext();
      else if (dx > 60) obPrev();
    }, {passive:true});
  }
}

function obSetSlide(idx) {
  _obSlide = idx;
  document.getElementById('ob-track').style.transform = 'translateX(-' + (idx * 100) + 'vw)';
  for (var i = 0; i < _obTotal; i++) {
    var s = document.getElementById('ob-slide-' + i);
    if (s) s.classList.toggle('ob-active', i === idx);
  }
  document.querySelectorAll('.ob-dots').forEach(function(dotsEl){
    var dots = dotsEl.querySelectorAll('.ob-dot');
    dots.forEach(function(d, i){ d.classList.toggle('active', i === idx); });
  });
}

function obNext() {
  if (_obSlide < _obTotal - 1) { obSetSlide(_obSlide + 1); }
  else { completeOnboarding(); }
}

function obPrev() {
  if (_obSlide > 0) obSetSlide(_obSlide - 1);
}

function completeOnboarding() {
  localStorage.setItem('lph_onboarded', '1');
  var dest = _obReturnTo || 's-auth-landing';
  _obReturnTo = 's-auth-landing'; // reset for next time
  var ob = document.getElementById('s-onboarding');
  ob.style.transition = 'opacity .4s ease';
  ob.style.opacity    = '0';
  setTimeout(function(){
    ob.classList.remove('active');
    ob.style.opacity    = '';
    ob.style.transition = '';
    goTo(dest);
  }, 400);
}

/* ─── HELPERS ─── */

/* ─── APP INIT ─── */
(function initApp() {
  if (!localStorage.getItem('lph_onboarded')) {
    // First time opening the app — show onboarding
    // s-auth-landing is active by default in HTML; we overlay onboarding on top
    showOnboarding();
  }
  // If already onboarded, auth landing shows as normal (it's the default active screen)
})();

function viewOnboarding() {
  // Detect where we are so we return to the right place
  var currentScreen = document.querySelector('.screen.active');
  _obReturnTo = currentScreen ? currentScreen.id : 's-auth-landing';
  showOnboarding();
}
function catLbl(c) {
  const m = {beach:'Beach',restaurant:'Restaurant',tourist_spot:'Tourist Spot',shopping:'Shopping',souvenirs:'Souvenirs',nightlife:'Night Life',camping:'Camping',nature_hike:'Nature & Hike',water_sports:'Water Sports',cultural:'Cultural'};
  return m[c] || c;
}
function catBg(c) {
  const m = {beach:'rgba(0,134,179,.1)',restaurant:'rgba(232,81,42,.1)',tourist_spot:'rgba(26,79,160,.1)',shopping:'rgba(244,168,0,.15)',nightlife:'rgba(61,43,31,.1)',camping:'rgba(45,106,79,.1)',nature_hike:'rgba(45,106,79,.1)',water_sports:'rgba(0,134,179,.1)'};
  return m[c] || 'rgba(28,16,8,.08)';
}
function catColor(c) {
  const m = {beach:'#0086B3',restaurant:'#E8512A',tourist_spot:'#1A4FA0',shopping:'#B8860B',nightlife:'#3D2B1F',camping:'#1B4332',nature_hike:'#1B4332',water_sports:'#0086B3'};
  return m[c] || '#3D2B1F';
}
function catAccent(c) {
  const m = {beach:'#0086B3',restaurant:'#E8512A',tourist_spot:'#1A4FA0',shopping:'#F4A800',nightlife:'#3D2B1F',camping:'#2D6A4F',nature_hike:'#2D6A4F',water_sports:'#1A4FA0',cultural:'#7D3C98'};
  return m[c] || '#888';
}

/* ─── MY BUDGET JS ─── */
var MB_TYPES = [
  {icon:'🍴',label:'Food',cat:'food'},
  {icon:'🛒',label:'Shopping',cat:'shopping'},
  {icon:'🚗',label:'Transport',cat:'transport'},
  {icon:'🏨',label:'Hotel',cat:'hotel'},
  {icon:'🎡',label:'Activity',cat:'activity'},
  {icon:'💸',label:'Other',cat:'other'}
];
var _mbSelType = null;
var _mbItems   = [];
var _mbReceipt = null;

function openMyBudgetSheet(idOrNull) {
  _mbEditingId = idOrNull;
  _mbSelType = null;
  _mbItems = [];
  _mbReceipt = null;
  var prefill = idOrNull ? MY_EXPENSES.find(function(e){ return e.id===idOrNull; }) : null;
  document.getElementById('mb-sheet-title').textContent = idOrNull ? 'Edit Expense' : 'Log Personal Expense';
  document.getElementById('mb-amt').value = prefill ? prefill.total : '';
  document.getElementById('mb-note-in').value = prefill ? (prefill.note||'') : '';
  document.getElementById('mb-receipt-lbl').textContent = 'Tap to attach receipt photo';
  document.getElementById('mb-form').style.display = prefill ? 'block' : 'none';
  if (prefill) { _mbSelType = {icon:prefill.icon,label:prefill.label,cat:prefill.cat}; _mbItems = prefill.items||[]; }
  // Render type chips
  document.getElementById('mb-type-chips').innerHTML = MB_TYPES.map(function(t){
    var active = prefill && prefill.cat===t.cat ? ' active' : '';
    return '<div class="exp-type-chip'+active+'" onclick="pickMbType(this,''+t.icon+'',''+t.label+'',''+t.cat+'')">'+t.icon+' '+t.label+'</div>';
  }).join('');
  renderMbItemsList();
  openSheet('sh-mybudget');
}

function pickMbType(el, icon, label, cat) {
  document.querySelectorAll('#mb-type-chips .exp-type-chip').forEach(function(c){ c.classList.remove('active'); });
  el.classList.add('active');
  _mbSelType = {icon:icon, label:label, cat:cat};
  document.getElementById('mb-form').style.display = 'block';
}

function addMbItem() {
  _mbItems.push({name:'',qty:1,price:0,subtotal:0});
  renderMbItemsList();
}

function renderMbItemsList() {
  var el = document.getElementById('mb-items-list');
  if (!el) return;
  if (!_mbItems.length) { el.innerHTML=''; return; }
  el.innerHTML = _mbItems.map(function(it,i){
    return '<div style="display:flex;gap:5px;margin-bottom:6px;align-items:center;">'
      +'<input class="finp" style="flex:2;font-size:12px;padding:7px 9px;" placeholder="Item name" value="'+it.name+'" oninput="updateMbItem('+i+','name',this.value)"/>'
      +'<input class="finp" style="width:44px;font-size:12px;padding:7px 6px;text-align:center;" type="number" min="1" value="'+it.qty+'" oninput="updateMbItem('+i+','qty',this.value)"/>'
      +'<input class="finp" style="flex:1;font-size:12px;padding:7px 9px;" type="number" min="0" placeholder="₱" value="'+(it.price||'')+'" oninput="updateMbItem('+i+','price',this.value)"/>'
      +'<button onclick="removeMbItem('+i+')" style="background:none;border:none;color:#c0392b;cursor:pointer;font-size:14px;">✕</button>'
      +'</div>';
  }).join('');
}

function updateMbItem(i, field, val) {
  _mbItems[i][field] = field==='name' ? val : (parseFloat(val)||0);
  _mbItems[i].subtotal = (_mbItems[i].qty||1)*(_mbItems[i].price||0);
  // auto-sum into amount field
  var total = _mbItems.reduce(function(s,it){ return s+it.subtotal; },0);
  if (total>0) document.getElementById('mb-amt').value = total;
}

function removeMbItem(i) {
  _mbItems.splice(i,1);
  renderMbItemsList();
}

function handleMbReceipt(event) {
  var file = event.target.files[0];
  if (!file) return;
  _mbReceipt = file.name;
  document.getElementById('mb-receipt-lbl').textContent = '✔ '+file.name;
}

function saveMbExpense() {
  if (!_mbSelType) { alert('Pick a category first.'); return; }
  var amt = parseFloat(document.getElementById('mb-amt').value)||0;
  if (!amt) { document.getElementById('mb-amt').focus(); return; }
  var note = document.getElementById('mb-note-in').value.trim();
  var expData = {
    icon:_mbSelType.icon, label:_mbSelType.label, cat:_mbSelType.cat,
    total:amt, note:note, items:_mbItems.slice(), receipt:_mbReceipt,
    date: new Date().toLocaleDateString('en-PH',{month:'short',day:'numeric'})
  };
  if (_mbEditingId) {
    var idx = MY_EXPENSES.findIndex(function(e){ return e.id===_mbEditingId; });
    if (idx>-1) MY_EXPENSES[idx] = Object.assign({id:_mbEditingId}, expData);
  } else {
    MY_EXPENSES.push(Object.assign({id:'mb'+Date.now()}, expData));
  }
  closeSheet('sh-mybudget');
  renderMyBudget();
}
