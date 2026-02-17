import { useState, useEffect } from "react";

/* ─── Image imports (from src/assets/images) ─── */
import imgHero from "./assets/images/timber-mountain-sawdust-surge-coaster-hero-midjourney.jpg";
import imgMine from "./assets/images/Timber_Mountain_Mine_Train_Ride_Midjourney.png";
import imgEagle from "./assets/images/Eagle image.webp";
import imgCascade from "./assets/images/Timber_Mountain_Cascade_Canyon_Midjourney.png";
import imgHotel from "./assets/images/Timber_Mountain_Hotel_Midjourney.png";
import imgMap from "./assets/images/Map.webp";
import imgBg from "./assets/images/western-textured-background-midjourney.png";
import imgWilly from "./assets/images/wild_willy_transparent.png";
import imgTreeIcon from "./assets/images/tree-icon-green-2C3F2A.png";
import imgAirplane from "./assets/images/noun-air-plane-icon-2125167.svg";
import imgHotelIcon from "./assets/images/noun-hotel-icon-2116568.svg";
import imgCar from "./assets/images/noun-auto-loan-2584618.svg";
import imgTicket from "./assets/images/noun-ticket-73266.svg";
import imgAttraction1 from "./assets/images/attraction1.jpg";
import imgAttraction2 from "./assets/images/atraction 2.jpg";
import imgHotel2 from "./assets/images/hotel 2.jpg";
import imgHotel1Alt from "./assets/images/timebrmountain_hotel1.jpg";

const IMG = {
  hero: imgHero,
  mine: imgMine,
  eagle: imgEagle,
  cascade: imgCascade,
  hotel: imgHotel,
  map: imgMap,
  bg: imgBg,
  willy: imgWilly,
  treeIcon: imgTreeIcon,
  iconAirplane: imgAirplane,
  iconHotel: imgHotelIcon,
  iconCar: imgCar,
  iconTicket: imgTicket,
  attraction1: imgAttraction1,
  attraction2: imgAttraction2,
  hotel2: imgHotel2,
  hotel1Alt: imgHotel1Alt,
};

const gold = "#c9a96e";
const darkGreen = "#2a3f2a";

/* ─── Shared Components ─── */
const navItems = ["Attractions", "Experiences", "Hotels", "Plan Your Visit"];
const navPageMap = { "Attractions": "attractions", "Experiences": "experiences", "Hotels": "hotels", "Plan Your Visit": "plan-visit" };

const Nav = ({ onNavigate, onHome }) => (
  <nav style={{ background: "#1f3724", display: "flex", alignItems: "center", padding: "0 24px", height: 80, position: "sticky", top: 0, zIndex: 40 }}>
    <span onClick={() => onHome && onHome()} style={{ marginRight: "auto", position: "relative", color: gold, fontSize: 24, fontWeight: 400, letterSpacing: 1, fontFamily: '"Rye", serif', textTransform: "uppercase", textShadow: "0 3px 6px rgba(0,0,0,0.5)", cursor: "pointer", transition: "opacity 0.2s" }}
      onMouseEnter={e => { e.currentTarget.style.opacity = "0.7"; }} onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}>
      TIMBER MOUNTAIN
    </span>
    <div style={{ display: "flex", gap: 24, alignItems: "center", marginRight: 40 }}>
      {navItems.map(t => (
        <span key={t} onClick={() => onNavigate && onNavigate(navPageMap[t])}
          style={{ color: gold, fontSize: 15, cursor: "pointer", fontFamily: "Georgia,serif", letterSpacing: 0.5, transition: "opacity 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.opacity = "0.7"; }} onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}>{t}</span>
      ))}
    </div>
    <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: "pointer" }}><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: "pointer" }}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: "pointer" }}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
      <button style={{ background: gold, color: darkGreen, border: "none", padding: "8px 20px", borderRadius: 4, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "Georgia,serif" }}>Buy Tickets</button>
    </div>
  </nav>
);

const Hero = () => (
  <div style={{ position: "relative", aspectRatio: "21/9", width: "100%", overflow: "hidden" }}>
    <img src={IMG.hero} alt="Timber Mountain" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
  </div>
);

const QuoteBanner = () => (
  <div style={{ maxWidth: 1150, margin: "-90px auto 0", position: "relative", zIndex: 5, background: "#fff", border: "1.5px solid #C9A96E", borderRadius: 12, padding: "34px 36px", textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
    <div style={{ fontSize: 22, fontWeight: 700, color: darkGreen, lineHeight: 1.35, fontFamily: "Georgia,serif" }}>&ldquo;Prepare for a majestic, action-packed day&rdquo;</div>
    <div style={{ fontSize: 13, color: "#6a6a6a", marginTop: 4 }}>&#x2014; TripAdvisor &ldquo;Best of the Bay&rdquo; 2025</div>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "14px auto", maxWidth: 400 }}>
      <span style={{ color: darkGreen, fontSize: 8 }}>&#9670;</span>
      <div style={{ flex: 1, height: 1.5, background: darkGreen, margin: "0 6px" }} />
      <svg width="16" height="20" viewBox="0 0 24 28" fill={darkGreen} style={{ flexShrink: 0 }}><path d="M12 0L7 7h3v3H7l5 7 5-7h-3V7h3L12 0z" /><rect x="11" y="18" width="2" height="4" /><rect x="8" y="22" width="8" height="2" rx="1" /></svg>
      <div style={{ flex: 1, height: 1.5, background: darkGreen, margin: "0 6px" }} />
      <span style={{ color: darkGreen, fontSize: 8 }}>&#9670;</span>
    </div>
    <div style={{ fontSize: 14, color: "#5a5a5a", lineHeight: 1.6, fontFamily: "Helvetica,Arial,sans-serif", maxWidth: 850, margin: "0 auto" }}>Experience high-octane roller coasters, enchanting attractions, and rousing shows within a mystical, mountainous Northern California forest.</div>
  </div>
);

const Attractions = ({ onNavigate }) => (
  <div style={{ maxWidth: 1200, margin: "0 auto", padding: "50px 30px 10px" }}>
    <h2 style={{ fontSize: 28, fontWeight: 700, color: darkGreen, textAlign: "center", marginBottom: 30 }}>Featured Attractions</h2>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
      {[
        { img: IMG.mine, title: "Maverick Mine Train", desc: "Ride ore cars through dark tunnels and past glittering caverns, geysers, and hidden falls." },
        { img: IMG.eagle, title: "Wings of the West", desc: "Watch in wonder at the winged stars of this show soar overhead and performing daring feats." },
        { img: IMG.cascade, title: "Cascade Canyon", desc: "Brave roaring rapids, swirling currents, and wild waterfalls in this soaking adventure." },
      ].map(a => (
        <div key={a.title} style={{ background: "#fff", borderRadius: 12, overflow: "hidden", border: "1.5px solid #C9A96E", transition: "transform 0.25s, box-shadow 0.25s", cursor: "pointer" }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.12)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
          <div style={{ height: 180, overflow: "hidden" }}><img src={a.img} alt={a.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
          <div style={{ padding: "16px 18px" }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: darkGreen, marginBottom: 6 }}>{a.title}</div>
            <div style={{ fontSize: 13, color: "#555", lineHeight: 1.5, fontFamily: "Helvetica,Arial,sans-serif" }}>{a.desc}</div>
            <button onClick={() => onNavigate && onNavigate("attractions")} style={{ marginTop: 12, background: darkGreen, color: "#fff", border: "none", padding: "8px 20px", borderRadius: 4, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "Helvetica,Arial,sans-serif" }}>Explore</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Accommodations = () => (
  <div style={{ maxWidth: 1200, margin: "0 auto", padding: "50px 30px 10px" }}>
    <h2 style={{ fontSize: 28, fontWeight: 700, color: darkGreen, textAlign: "center", marginBottom: 28 }}>Accommodations</h2>
    <div style={{ background: "#fff", borderRadius: 12, overflow: "hidden", border: "1.5px solid #C9A96E", display: "flex", padding: 16 }}>
      {/* Image container with rounded corners and scale fix */}
      <div style={{ width: "40%", flexShrink: 0, borderRadius: 12, overflow: "hidden", position: "relative" }}>
        <img src={IMG.hotel} alt="Hotel" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transform: "scale(1.35)" }} />
      </div>
      <div style={{ flex: 1, padding: "0 0 0 24px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, color: darkGreen, marginBottom: 6 }}>Experience the Timber Mountain Hotel</h3>
        <p style={{ fontSize: 13, color: "#555", lineHeight: 1.5, fontFamily: "Helvetica,Arial,sans-serif", marginBottom: 10 }}>Relax in rustic elegance at the Timber Mountain Hotel, just steps from the park entrance.</p>
        {["Skip-the-line passes to Timber Mountain", "Walking distance to Timber Mountain", "Priority restaurant reservations"].map(f => (
          <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            {/* Inline SVG Tree Icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill={darkGreen} xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" />
            </svg>
            <span style={{ fontSize: 13, color: "#555", fontFamily: "Helvetica,Arial,sans-serif" }}>{f}</span>
          </div>
        ))}
        <button style={{ marginTop: 12, background: "transparent", color: darkGreen, border: `1px solid ${darkGreen}`, padding: "8px 20px", borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "Helvetica,Arial,sans-serif", alignSelf: "flex-start" }}>Check Availability</button>
      </div>
    </div>
  </div>
);

const ParkMap = () => (
  <div style={{ padding: "50px 0 0" }}>
    <h2 style={{ fontSize: 28, fontWeight: 700, color: darkGreen, textAlign: "center", marginBottom: 28 }}>Theme Park Map</h2>
    <img src={IMG.map} alt="Theme Park Map" style={{ width: "100%", display: "block" }} />
  </div>
);

const Footer = () => (
  <div style={{ background: "#1f3724", padding: "24px 30px", textAlign: "center", marginTop: 50 }}>
    <span style={{ color: gold, fontSize: 12, opacity: 0.4, fontFamily: "Helvetica,Arial,sans-serif" }}>&copy; 2025 Timber Mountain. All rights reserved.</span>
  </div>
);

/* ─── Variation B: Interactive Wizard ─── */
const TripPlannerWizard = ({ onStartPlanning }) => {
  const [interests, setInterests] = useState({ Flights: false, Hotels: false, "Car Rental": false, Dining: false, Tickets: false });
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const handleStartPlanning = () => {
    if (onStartPlanning) {
      onStartPlanning({
        interests,
        party: { arrival, departure, adults, children },
      });
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "50px 30px 10px" }}>
      <h2 style={{ fontSize: 28, fontWeight: 700, color: darkGreen, textAlign: "center", marginBottom: 28 }}>Let Us Help You Plan Your Trip</h2>
      <div style={{ background: "#fff", border: "1.5px solid #c9a96e", borderRadius: 14, display: "flex", overflow: "hidden", minHeight: 360 }}>
        <div style={{ width: 220, flexShrink: 0, display: "flex", alignItems: "flex-end", justifyContent: "center", background: "transparent" }}>
          <img src={IMG.willy} alt="Wild Willy" style={{ height: 380, objectFit: "contain", display: "block", marginBottom: -4 }} />
        </div>
        <div style={{ flex: 1, padding: "32px 40px 32px 20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h3 style={{ fontSize: 19, fontWeight: 700, color: darkGreen, marginBottom: 16, lineHeight: 1.35 }}>Plan your vacation with Wild Willy, our AI-powered travel planner!</h3>

          {/* Travel icons divider */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: 22 }}>
            <span style={{ color: darkGreen, fontSize: 7 }}>&#9670;</span>
            <div style={{ flex: 1, height: 1.5, background: darkGreen, margin: "0 6px" }} />
            <svg width="16" height="16" viewBox="0 0 24 24" fill={darkGreen} style={{ margin: "0 8px", flexShrink: 0 }}><path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2 1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" /></svg>
            <div style={{ flex: 1, height: 1.5, background: darkGreen, margin: "0 4px" }} />
            <svg width="16" height="16" viewBox="0 0 24 24" fill={darkGreen} style={{ margin: "0 8px", flexShrink: 0 }}><path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z" /></svg>
            <div style={{ flex: 1, height: 1.5, background: darkGreen, margin: "0 4px" }} />
            <svg width="16" height="16" viewBox="0 0 24 24" fill={darkGreen} style={{ margin: "0 8px", flexShrink: 0 }}><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" /></svg>
            <div style={{ flex: 1, height: 1.5, background: darkGreen, margin: "0 4px" }} />
            <svg width="16" height="16" viewBox="0 0 24 24" fill={darkGreen} style={{ margin: "0 8px", flexShrink: 0 }}><path d="M14 6l-1-2H5v17h2v-7h5l1 2h7V6h-6zm4 8h-4l-1-2H7V6h5l1 2h5v6z" /></svg>
            <div style={{ flex: 1, height: 1.5, background: darkGreen, margin: "0 6px" }} />
            <span style={{ color: darkGreen, fontSize: 7 }}>&#9670;</span>
          </div>

          {/* Interest selection */}
          <div style={{ fontSize: 14, color: darkGreen, fontWeight: 700, fontStyle: "italic", marginBottom: 2, fontFamily: "Helvetica,Arial,sans-serif" }}>Tell us what you&apos;re interested in:</div>
          <div style={{ fontSize: 12, color: "#888", marginBottom: 12, fontFamily: "Helvetica,Arial,sans-serif" }}>Select all that apply</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 22 }}>
            {Object.entries(interests).map(([k, v]) => (
              <span key={k} onClick={() => setInterests(p => ({ ...p, [k]: !p[k] }))}
                style={{
                  padding: "8px 22px", border: `1.5px solid ${v ? darkGreen : "#bbb"}`, borderRadius: 6, fontSize: 13, fontWeight: 600,
                  color: v ? "#fff" : "#3a3a3a", background: v ? darkGreen : "#f0ece6", cursor: "pointer", transition: "all 0.2s",
                  fontFamily: "Helvetica,Arial,sans-serif"
                }}>
                {k}
              </span>
            ))}
          </div>

          {/* Party details */}
          <div style={{ fontSize: 14, color: darkGreen, fontWeight: 700, fontStyle: "italic", marginBottom: 12, fontFamily: "Helvetica,Arial,sans-serif" }}>Tell us about your party:</div>

          {/* Date pickers row */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 14 }}>
            <div style={{ flex: "1 1 160px", minWidth: 160 }}>
              <label style={{ display: "block", fontSize: 12, color: "#888", marginBottom: 4, fontFamily: "Helvetica,Arial,sans-serif", fontWeight: 600 }}>Arrival Date</label>
              <input type="date" value={arrival} min={today} onChange={e => setArrival(e.target.value)}
                style={{
                  width: "100%", padding: "8px 12px", border: `1.5px solid ${arrival ? darkGreen : "#bbb"}`, borderRadius: 6, fontSize: 13,
                  fontFamily: "Helvetica,Arial,sans-serif", color: darkGreen, background: arrival ? "#edf5ed" : "#f0ece6", outline: "none", cursor: "pointer"
                }} />
            </div>
            <div style={{ flex: "1 1 160px", minWidth: 160 }}>
              <label style={{ display: "block", fontSize: 12, color: "#888", marginBottom: 4, fontFamily: "Helvetica,Arial,sans-serif", fontWeight: 600 }}>Departure Date</label>
              <input type="date" value={departure} min={arrival || today} onChange={e => setDeparture(e.target.value)}
                style={{
                  width: "100%", padding: "8px 12px", border: `1.5px solid ${departure ? darkGreen : "#bbb"}`, borderRadius: 6, fontSize: 13,
                  fontFamily: "Helvetica,Arial,sans-serif", color: darkGreen, background: departure ? "#edf5ed" : "#f0ece6", outline: "none", cursor: "pointer"
                }} />
            </div>
          </div>

          {/* People counter row */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 22 }}>
            <div style={{ flex: "1 1 160px", minWidth: 160 }}>
              <label style={{ display: "block", fontSize: 12, color: "#888", marginBottom: 4, fontFamily: "Helvetica,Arial,sans-serif", fontWeight: 600 }}>Adults</label>
              <div style={{ display: "flex", alignItems: "center", border: "1.5px solid #bbb", borderRadius: 6, background: "#f0ece6", overflow: "hidden" }}>
                <button onClick={() => setAdults(Math.max(1, adults - 1))}
                  style={{ width: 36, height: 36, border: "none", background: "transparent", fontSize: 18, color: darkGreen, cursor: "pointer", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", padding: 0 }}>&minus;</button>
                <div style={{ flex: 1, textAlign: "center", fontSize: 14, fontWeight: 700, color: darkGreen, fontFamily: "Helvetica,Arial,sans-serif", borderLeft: "1px solid #ddd", borderRight: "1px solid #ddd", padding: "8px 0" }}>{adults}</div>
                <button onClick={() => setAdults(Math.min(10, adults + 1))}
                  style={{ width: 36, height: 36, border: "none", background: "transparent", fontSize: 18, color: darkGreen, cursor: "pointer", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", padding: 0 }}>+</button>
              </div>
            </div>
            <div style={{ flex: "1 1 160px", minWidth: 160 }}>
              <label style={{ display: "block", fontSize: 12, color: "#888", marginBottom: 4, fontFamily: "Helvetica,Arial,sans-serif", fontWeight: 600 }}>Children</label>
              <div style={{ display: "flex", alignItems: "center", border: "1.5px solid #bbb", borderRadius: 6, background: "#f0ece6", overflow: "hidden" }}>
                <button onClick={() => setChildren(Math.max(0, children - 1))}
                  style={{ width: 36, height: 36, border: "none", background: "transparent", fontSize: 18, color: darkGreen, cursor: "pointer", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", padding: 0 }}>&minus;</button>
                <div style={{ flex: 1, textAlign: "center", fontSize: 14, fontWeight: 700, color: darkGreen, fontFamily: "Helvetica,Arial,sans-serif", borderLeft: "1px solid #ddd", borderRight: "1px solid #ddd", padding: "8px 0" }}>{children}</div>
                <button onClick={() => setChildren(Math.min(10, children + 1))}
                  style={{ width: 36, height: 36, border: "none", background: "transparent", fontSize: 18, color: darkGreen, cursor: "pointer", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", padding: 0 }}>+</button>
              </div>
            </div>
          </div>

          <div>
            <button onClick={handleStartPlanning}
              style={{ background: darkGreen, color: "#fff", border: "none", padding: "10px 28px", borderRadius: 6, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "Helvetica,Arial,sans-serif", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(42,63,42,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
              Start Planning &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Trip Planner Results Page ─── */

const formatDate = (dateStr) => {
  if (!dateStr) return null;
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" });
};

const flightData = [
  { airline: "Pacific Airways", route: "SFO \u2192 Sacramento Regional (SMF)", departure: "8:00 AM", arrival: "9:15 AM", price: "$129", provider: "Expedia", url: "https://www.expedia.com" },
  { airline: "West Coast Air", route: "LAX \u2192 Sacramento Regional (SMF)", departure: "10:30 AM", arrival: "12:05 PM", price: "$189", provider: "Booking.com", url: "https://www.booking.com" },
  { airline: "Sierra Express", route: "SJC \u2192 Sacramento Regional (SMF)", departure: "6:45 AM", arrival: "7:50 AM", price: "$99", provider: "Kayak", url: "https://www.kayak.com" },
];

const hotelData = [
  { name: "Timber Mountain Lodge", rating: "4.8", reviews: "2,340", desc: "On-site resort with skip-the-line park passes and rustic mountain elegance.", price: "$279/night", provider: "Booking.com", url: "https://www.booking.com", img: IMG.hotel },
  { name: "Pine Creek Inn", rating: "4.5", reviews: "1,120", desc: "Charming inn nestled in the forest, just 5 minutes from the park entrance.", price: "$179/night", provider: "Expedia", url: "https://www.expedia.com", img: IMG.hotel },
  { name: "Gold Rush Suites", rating: "4.3", reviews: "890", desc: "Family-friendly suites with kitchenettes and a complimentary breakfast buffet.", price: "$149/night", provider: "Hotels.com", url: "https://www.hotels.com", img: IMG.hotel },
];

const carData = [
  { vehicle: "Economy Sedan", model: "Toyota Corolla or similar", price: "$42/day", provider: "Enterprise", url: "https://www.enterprise.com" },
  { vehicle: "Mid-Size SUV", model: "Ford Escape or similar", price: "$68/day", provider: "Hertz", url: "https://www.hertz.com" },
  { vehicle: "Full-Size SUV", model: "Chevy Tahoe or similar", price: "$95/day", provider: "Avis", url: "https://www.avis.com" },
];

const diningData = [
  { name: "The Sawmill Smokehouse", cuisine: "BBQ & American", priceRange: "$$", desc: "Slow-smoked brisket and craft beers in a rustic lodge setting inside the park.", provider: "OpenTable", url: "https://www.opentable.com" },
  { name: "Cascade Creek Bistro", cuisine: "California Farm-to-Table", priceRange: "$$$", desc: "Elevated seasonal dishes with panoramic views of the pine valley.", provider: "OpenTable", url: "https://www.opentable.com" },
  { name: "Wild Willy's Cantina", cuisine: "Tex-Mex & Margaritas", priceRange: "$", desc: "Family-favorite spot for loaded nachos, tacos, and frozen drinks.", provider: "Yelp", url: "https://www.yelp.com" },
];

const ticketData = [
  { name: "Single Day Pass", desc: "Full access to all rides, shows, and attractions for one day.", price: "$89/adult, $69/child", provider: "Timber Mountain", url: "#" },
  { name: "2-Day Adventure Pack", desc: "Two full days of unlimited access plus a souvenir map and skip-the-line pass.", price: "$159/adult, $119/child", provider: "Timber Mountain", url: "#" },
  { name: "Season Pass - Gold", desc: "Unlimited visits for the full season, free parking, and 15% dining discounts.", price: "$249/adult, $189/child", provider: "Timber Mountain", url: "#" },
];

const categoryIcons = {
  Flights: IMG.iconAirplane,
  Hotels: IMG.iconHotel,
  "Car Rental": IMG.iconCar,
  Tickets: IMG.iconTicket,
};

const BookingCard = ({ children }) => (
  <div style={{ background: "#fff", border: "1px solid #e0d8cc", borderRadius: 12, padding: "20px 24px", display: "flex", alignItems: "center", gap: 20, transition: "transform 0.25s, box-shadow 0.25s" }}
    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.12)"; }}
    onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
    {children}
  </div>
);

const BookButton = ({ provider, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer"
    style={{
      background: darkGreen, color: "#fff", border: "none", padding: "10px 22px", borderRadius: 6, fontSize: 12, fontWeight: 700, cursor: "pointer",
      fontFamily: "Helvetica,Arial,sans-serif", textDecoration: "none", whiteSpace: "nowrap", display: "inline-block", transition: "all 0.2s"
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(42,63,42,0.3)"; }}
    onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
    Book on {provider}
  </a>
);

const SectionHeader = ({ title, icon }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20, paddingBottom: 12, borderBottom: `2px solid ${gold}` }}>
    {icon && <img src={icon} alt="" style={{ width: 28, height: 28, filter: "brightness(0) saturate(100%) invert(20%) sepia(15%) saturate(900%) hue-rotate(80deg)" }} />}
    <h3 style={{ fontSize: 22, fontWeight: 700, color: darkGreen, fontFamily: "Georgia,serif" }}>{title}</h3>
  </div>
);

const TripPlannerResults = ({ selections, onBack, onNavigate, onHome }) => {
  const { interests, party } = selections;
  const selectedInterests = Object.entries(interests).filter(([, v]) => v).map(([k]) => k);
  const arrivalFormatted = formatDate(party.arrival);
  const departureFormatted = formatDate(party.departure);
  const totalGuests = party.adults + party.children;

  const partyTags = [];
  if (arrivalFormatted) partyTags.push(`Arrive: ${arrivalFormatted}`);
  if (departureFormatted) partyTags.push(`Depart: ${departureFormatted}`);
  if (party.children > 0) partyTags.push(`${party.children} Child${party.children > 1 ? "ren" : ""}`);

  return (
    <div style={{ animation: "pageIn 0.4s ease", maxWidth: 1200, margin: "0 auto", background: `url(${IMG.bg})`, backgroundSize: "auto", backgroundRepeat: "repeat", backgroundAttachment: "fixed", boxShadow: "0 0 20px rgba(0,0,0,0.1)", minHeight: "100vh" }}>
      <Nav onNavigate={onNavigate} onHome={onHome} />

      {/* Trip Summary Banner with Hero Image */}
      <div style={{ position: "relative", overflow: "hidden", padding: "60px 30px 50px", textAlign: "center" }}>
        <img src={IMG.hero} alt="" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(26,46,26,0.75)" }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ fontSize: 34, fontWeight: 700, color: gold, fontFamily: "Georgia,serif", marginBottom: 12 }}>Your Timber Mountain Trip Plan</h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", fontFamily: "Helvetica,Arial,sans-serif", maxWidth: 600, margin: "0 auto 20px", lineHeight: 1.6 }}>
            Wild Willy has curated personalized recommendations{totalGuests > 0 && ` for your party of ${totalGuests}`}{arrivalFormatted && departureFormatted && ` visiting ${arrivalFormatted} \u2013 ${departureFormatted}`}.
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 10, marginBottom: 10 }}>
            {selectedInterests.map(i => (
              <span key={i} style={{ background: "rgba(201,169,110,0.2)", border: `1px solid ${gold}`, color: gold, padding: "6px 16px", borderRadius: 20, fontSize: 12, fontWeight: 600, fontFamily: "Helvetica,Arial,sans-serif" }}>{i}</span>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 10 }}>
            {partyTags.map(tag => (
              <span key={tag} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", padding: "6px 16px", borderRadius: 20, fontSize: 12, fontWeight: 600, fontFamily: "Helvetica,Arial,sans-serif" }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* AI Recommendation Section */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 30px 10px" }}>
        <div style={{ background: "#fff", border: `1.5px solid ${gold}`, borderRadius: 14, display: "flex", overflow: "hidden", minHeight: 260 }}>
          <div style={{ width: 180, flexShrink: 0, display: "flex", alignItems: "flex-end", justifyContent: "center", background: "linear-gradient(to top, #f5f0e8, #fff)" }}>
            <img src={IMG.willy} alt="Wild Willy" style={{ height: 260, objectFit: "contain", display: "block", marginBottom: -4 }} />
          </div>
          <div style={{ flex: 1, padding: "28px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ fontSize: 11, color: gold, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8, fontFamily: "Helvetica,Arial,sans-serif" }}>Wild Willy&apos;s Recommendation</div>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: darkGreen, marginBottom: 12, lineHeight: 1.35 }}>
              {totalGuests > 0 ? `A Perfect Adventure for Your Party of ${totalGuests}!` : "Your Perfect Timber Mountain Adventure Awaits!"}
            </h3>
            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7, marginBottom: 8, fontFamily: "Helvetica,Arial,sans-serif" }}>
              {arrivalFormatted ? `I've lined up everything for your trip starting ${arrivalFormatted}.` : "Based on your selections, I recommend arriving early to catch the morning sun over Cascade Canyon."}{" "}
              {selectedInterests.includes("Dining") && "Don't miss The Sawmill Smokehouse for lunch \u2014 their brisket is legendary! "}
              {selectedInterests.includes("Hotels") && "Stay at the Timber Mountain Lodge for the full experience with skip-the-line passes. "}
              {selectedInterests.includes("Tickets") && "The 2-Day Adventure Pack gives you the best value for exploring everything the park has to offer. "}
              {party.children > 0 && `With ${party.children} kid${party.children > 1 ? "s" : ""} in the group, I've made sure to include family-friendly options throughout!`}
            </p>
            <p style={{ fontSize: 13, color: "#888", lineHeight: 1.6, fontFamily: "Helvetica,Arial,sans-serif", fontStyle: "italic" }}>Scroll down to browse and book each part of your trip!</p>
          </div>
        </div>
      </div>

      {/* Booking Sections */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "30px 30px 50px" }}>

        {/* Flights */}
        {interests.Flights && (
          <div style={{ marginBottom: 40, animation: "slideUp 0.4s ease 0.1s both" }}>
            <SectionHeader title="Flights" icon={categoryIcons.Flights} />
            {arrivalFormatted && (
              <div style={{ fontSize: 13, color: "#888", marginBottom: 14, fontFamily: "Helvetica,Arial,sans-serif" }}>
                Showing flights for {arrivalFormatted} &bull; {totalGuests} passenger{totalGuests > 1 ? "s" : ""}
              </div>
            )}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[flightData[1]].map(f => (
                <BookingCard key={f.airline}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: darkGreen, marginBottom: 4 }}>{f.airline}</div>
                    <div style={{ fontSize: 13, color: "#666", fontFamily: "Helvetica,Arial,sans-serif", marginBottom: 4 }}>{f.route}</div>
                    <div style={{ fontSize: 12, color: "#999", fontFamily: "Helvetica,Arial,sans-serif" }}>Departs {f.departure} &bull; Arrives {f.arrival}</div>
                  </div>
                  <div style={{ textAlign: "right", minWidth: 120 }}>
                    <div style={{ fontSize: 22, fontWeight: 700, color: darkGreen, marginBottom: 8 }}>{f.price}</div>
                    <BookButton provider={f.provider} url={f.url} />
                  </div>
                </BookingCard>
              ))}
            </div>
          </div>
        )}

        {/* Hotels */}
        {interests.Hotels && (
          <div style={{ marginBottom: 40, animation: "slideUp 0.4s ease 0.15s both" }}>
            <SectionHeader title="Hotels" icon={categoryIcons.Hotels} />
            {arrivalFormatted && departureFormatted && (
              <div style={{ fontSize: 13, color: "#888", marginBottom: 14, fontFamily: "Helvetica,Arial,sans-serif" }}>
                {arrivalFormatted} &ndash; {departureFormatted} &bull; {party.adults} adult{party.adults > 1 ? "s" : ""}{party.children > 0 ? `, ${party.children} child${party.children > 1 ? "ren" : ""}` : ""}
              </div>
            )}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[hotelData[1]].map(h => (
                <BookingCard key={h.name}>
                  <div style={{ width: 120, height: 90, borderRadius: 8, overflow: "hidden", flexShrink: 0 }}>
                    <img src={h.img} alt={h.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: darkGreen, marginBottom: 4 }}>{h.name}</div>
                    <div style={{ fontSize: 12, color: gold, fontWeight: 600, marginBottom: 4, fontFamily: "Helvetica,Arial,sans-serif" }}>&#9733; {h.rating} &bull; {h.reviews} reviews</div>
                    <div style={{ fontSize: 13, color: "#666", fontFamily: "Helvetica,Arial,sans-serif" }}>{h.desc}</div>
                  </div>
                  <div style={{ textAlign: "right", minWidth: 130 }}>
                    <div style={{ fontSize: 20, fontWeight: 700, color: darkGreen, marginBottom: 8 }}>{h.price}</div>
                    <BookButton provider={h.provider} url={h.url} />
                  </div>
                </BookingCard>
              ))}
            </div>
          </div>
        )}

        {/* Car Rental */}
        {interests["Car Rental"] && (
          <div style={{ marginBottom: 40, animation: "slideUp 0.4s ease 0.2s both" }}>
            <SectionHeader title="Car Rental" icon={categoryIcons["Car Rental"]} />
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[carData[1]].map(c => (
                <BookingCard key={c.vehicle}>
                  <div style={{ width: 56, height: 56, borderRadius: 8, background: "#f5f0e8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <img src={IMG.iconCar} alt="" style={{ width: 30, height: 30, filter: "brightness(0) saturate(100%) invert(20%) sepia(15%) saturate(900%) hue-rotate(80deg)" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: darkGreen, marginBottom: 4 }}>{c.vehicle}</div>
                    <div style={{ fontSize: 13, color: "#666", fontFamily: "Helvetica,Arial,sans-serif" }}>{c.model}</div>
                  </div>
                  <div style={{ textAlign: "right", minWidth: 120 }}>
                    <div style={{ fontSize: 20, fontWeight: 700, color: darkGreen, marginBottom: 8 }}>{c.price}</div>
                    <BookButton provider={c.provider} url={c.url} />
                  </div>
                </BookingCard>
              ))}
            </div>
          </div>
        )}

        {/* Dining */}
        {interests.Dining && (
          <div style={{ marginBottom: 40, animation: "slideUp 0.4s ease 0.25s both" }}>
            <SectionHeader title="Dining" />
            {party.children > 0 && (
              <div style={{ fontSize: 13, color: "#888", marginBottom: 14, fontFamily: "Helvetica,Arial,sans-serif" }}>Showing family-friendly dining options</div>
            )}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[diningData[0]].map(d => (
                <BookingCard key={d.name}>
                  <div style={{ width: 56, height: 56, borderRadius: 8, background: "#f5f0e8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 24 }}>&#127869;</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: darkGreen, marginBottom: 4 }}>{d.name}</div>
                    <div style={{ fontSize: 12, color: gold, fontWeight: 600, marginBottom: 4, fontFamily: "Helvetica,Arial,sans-serif" }}>{d.cuisine} &bull; {d.priceRange}</div>
                    <div style={{ fontSize: 13, color: "#666", fontFamily: "Helvetica,Arial,sans-serif" }}>{d.desc}</div>
                  </div>
                  <div style={{ textAlign: "right", minWidth: 130 }}>
                    <BookButton provider={d.provider} url={d.url} />
                  </div>
                </BookingCard>
              ))}
            </div>
          </div>
        )}

        {/* Tickets */}
        {interests.Tickets && (
          <div style={{ marginBottom: 40, animation: "slideUp 0.4s ease 0.3s both" }}>
            <SectionHeader title="Theme Park Tickets" icon={categoryIcons.Tickets} />
            {totalGuests > 0 && (
              <div style={{ fontSize: 13, color: "#888", marginBottom: 14, fontFamily: "Helvetica,Arial,sans-serif" }}>
                Pricing for {party.adults} adult{party.adults > 1 ? "s" : ""}{party.children > 0 ? ` + ${party.children} child${party.children > 1 ? "ren" : ""}` : ""}
              </div>
            )}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[ticketData[1]].map(t => (
                <BookingCard key={t.name}>
                  <div style={{ width: 56, height: 56, borderRadius: 8, background: "#f5f0e8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <img src={IMG.iconTicket} alt="" style={{ width: 30, height: 30, filter: "brightness(0) saturate(100%) invert(20%) sepia(15%) saturate(900%) hue-rotate(80deg)" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: darkGreen, marginBottom: 4 }}>{t.name}</div>
                    <div style={{ fontSize: 13, color: "#666", fontFamily: "Helvetica,Arial,sans-serif" }}>{t.desc}</div>
                  </div>
                  <div style={{ textAlign: "right", minWidth: 140 }}>
                    <div style={{ fontSize: 18, fontWeight: 700, color: darkGreen, marginBottom: 8 }}>{t.price}</div>
                    <a href={t.url} style={{
                      background: gold, color: "#fff", border: "none", padding: "10px 22px", borderRadius: 6, fontSize: 12, fontWeight: 700, cursor: "pointer",
                      fontFamily: "Helvetica,Arial,sans-serif", textDecoration: "none", display: "inline-block", transition: "all 0.2s"
                    }}
                      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(201,169,110,0.4)"; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
                      Buy Tickets
                    </a>
                  </div>
                </BookingCard>
              ))}
            </div>
          </div>
        )}

        {/* No selections message */}
        {selectedInterests.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 20px", color: "#999", fontSize: 16, fontFamily: "Helvetica,Arial,sans-serif" }}>
            No categories were selected. Go back and select your interests to see recommendations.
          </div>
        )}
      </div>

      {/* Back Button */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 30px 40px", textAlign: "center" }}>
        <button onClick={onBack}
          style={{ background: "#fff", color: darkGreen, border: `2px solid ${darkGreen}`, padding: "12px 36px", borderRadius: 8, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "Helvetica,Arial,sans-serif", transition: "all 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.background = darkGreen; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = darkGreen; }}>
          &larr; Back to Homepage
        </button>
      </div>

      <ParkMap />
      <Footer />
    </div>
  );
};

/* ─── Itinerary Data for Variation ─── */
const itineraries = [
  {
    id: "budget",
    name: "Budget Explorer",
    badge: "Best Value",
    badgeColor: "#4a9e6b",
    description: "Smart savings without missing the highlights. Perfect for value-conscious adventurers.",
    flight: flightData[2],    // Sierra Express $99
    hotel: hotelData[2],      // Gold Rush Suites $149/night
    car: carData[0],          // Economy Sedan $42/day
    dining: diningData[2],    // Wild Willy's Cantina $
    ticket: ticketData[0],    // Single Day Pass $89
    priceEstimate: "$458",
  },
  {
    id: "recommended",
    name: "Wild Willy's Pick",
    badge: "Recommended",
    badgeColor: gold,
    description: "The perfect balance of comfort and adventure. Willy's top choice for most families!",
    flight: flightData[1],    // West Coast Air $189
    hotel: hotelData[1],      // Pine Creek Inn $179/night
    car: carData[1],          // Mid-Size SUV $68/day
    dining: diningData[0],    // Sawmill Smokehouse $$
    ticket: ticketData[1],    // 2-Day Adventure Pack $159
    priceEstimate: "$764",
  },
  {
    id: "premium",
    name: "Premium Experience",
    badge: "All-Inclusive",
    badgeColor: "#8b6914",
    description: "The ultimate Timber Mountain trip. First-class everything for an unforgettable visit.",
    flight: flightData[0],    // Pacific Airways $129
    hotel: hotelData[0],      // Timber Mountain Lodge $279/night
    car: carData[2],          // Full-Size SUV $95/day
    dining: diningData[1],    // Cascade Creek Bistro $$$
    ticket: ticketData[2],    // Season Pass Gold $249
    priceEstimate: "$951",
  },
];

/* ─── Trip Planner Results — Variation (3 Itineraries) ─── */
const TripPlannerResultsVariation = ({ selections, onBack, showDescription = true, onNavigate, onHome }) => {
  const { interests, party } = selections;
  const selectedInterests = Object.entries(interests).filter(([, v]) => v).map(([k]) => k);
  const arrivalFormatted = formatDate(party.arrival);
  const departureFormatted = formatDate(party.departure);
  const totalGuests = party.adults + party.children;
  const [selectedItinerary, setSelectedItinerary] = useState("recommended");

  const partyTags = [];
  if (arrivalFormatted) partyTags.push(`Arrive: ${arrivalFormatted}`);
  if (departureFormatted) partyTags.push(`Depart: ${departureFormatted}`);
  if (party.adults > 0) partyTags.push(`${party.adults} Adult${party.adults > 1 ? "s" : ""}`);
  if (party.children > 0) partyTags.push(`${party.children} Child${party.children > 1 ? "ren" : ""}`);

  const currentItinerary = itineraries.find(it => it.id === selectedItinerary);

  return (
    <div style={{ animation: "pageIn 0.4s ease", maxWidth: 1200, margin: "0 auto", background: `url(${IMG.bg})`, backgroundSize: "auto", backgroundRepeat: "repeat", backgroundAttachment: "fixed", boxShadow: "0 0 20px rgba(0,0,0,0.1)", minHeight: "100vh" }}>
      <Nav onNavigate={onNavigate} onHome={onHome} />

      {/* Trip Summary Banner with Hero Image */}
      <div style={{ position: "relative", overflow: "hidden", padding: "60px 30px 50px", textAlign: "center" }}>
        <img src={IMG.hero} alt="" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(26,46,26,0.75)" }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ fontSize: 34, fontWeight: 700, color: gold, fontFamily: "Georgia,serif", marginBottom: 12 }}>Your Timber Mountain Trip Plan</h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", fontFamily: "Helvetica,Arial,sans-serif", maxWidth: 600, margin: "0 auto 20px", lineHeight: 1.6 }}>
            Wild Willy has curated personalized recommendations{totalGuests > 0 && ` for your party of ${totalGuests}`}{arrivalFormatted && departureFormatted && ` visiting ${arrivalFormatted} \u2013 ${departureFormatted}`}.
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 10, marginBottom: 10 }}>
            {selectedInterests.map(i => (
              <span key={i} style={{ background: "rgba(201,169,110,0.2)", border: `1px solid ${gold}`, color: gold, padding: "6px 16px", borderRadius: 20, fontSize: 12, fontWeight: 600, fontFamily: "Helvetica,Arial,sans-serif" }}>{i}</span>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 10 }}>
            {partyTags.map(tag => (
              <span key={tag} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", padding: "6px 16px", borderRadius: 20, fontSize: 12, fontWeight: 600, fontFamily: "Helvetica,Arial,sans-serif" }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* 3 Itinerary Cards */}
      {/* 3 Itinerary Cards */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 30px 10px" }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: darkGreen, textAlign: "center", marginBottom: 8, fontFamily: "Georgia,serif" }}>Choose Your Adventure</h2>
        <p style={{ fontSize: 14, color: "#888", textAlign: "center", marginBottom: 28, fontFamily: "Helvetica,Arial,sans-serif" }}>Select an itinerary below and book each part of your trip</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
          {itineraries.map(it => {
            const isSelected = selectedItinerary === it.id;
            const items = [];
            if (interests.Flights) items.push({ label: "Flight", value: `${it.flight.airline} — ${it.flight.price}` });
            if (interests.Hotels) items.push({ label: "Hotel", value: `${it.hotel.name} — ${it.hotel.price}` });
            if (interests["Car Rental"]) items.push({ label: "Car", value: `${it.car.vehicle} — ${it.car.price}` });
            if (interests.Dining) items.push({ label: "Dining", value: `${it.dining.name} — ${it.dining.priceRange}` });
            if (interests.Tickets) items.push({ label: "Tickets", value: `${it.ticket.name}` });

            return (
              <div key={it.id}
                onClick={() => setSelectedItinerary(it.id)}
                style={{
                  background: "#fff",
                  border: isSelected ? `2.5px solid ${gold}` : "1.5px solid #e0d8cc",
                  borderRadius: 14,
                  padding: "24px 22px",
                  cursor: "pointer",
                  transition: "all 0.25s",
                  position: "relative",
                  boxShadow: isSelected ? `0 8px 24px rgba(201,169,110,0.25)` : "0 2px 8px rgba(0,0,0,0.06)",
                  transform: isSelected ? "translateY(-4px)" : "none",
                }}>
                {/* Badge */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <span style={{ background: it.badgeColor, color: "#fff", padding: "4px 12px", borderRadius: 20, fontSize: 11, fontWeight: 700, fontFamily: "Helvetica,Arial,sans-serif", letterSpacing: 0.5 }}>
                    {it.badge}
                  </span>
                  {isSelected && (
                    <span style={{ background: gold, color: "#fff", width: 24, height: 24, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700 }}>&#10003;</span>
                  )}
                </div>

                {/* Name & description */}
                <h3 style={{ fontSize: 18, fontWeight: 700, color: darkGreen, marginBottom: 6, fontFamily: "Georgia,serif" }}>{it.name}</h3>
                {showDescription && <p style={{ fontSize: 12, color: "#777", lineHeight: 1.5, marginBottom: 16, fontFamily: "Helvetica,Arial,sans-serif", minHeight: 36 }}>{it.description}</p>}
                {!showDescription && <div style={{ marginBottom: 16 }} />}

                {/* Price estimate */}
                <div style={{ fontSize: 28, fontWeight: 700, color: darkGreen, marginBottom: 4, fontFamily: "Georgia,serif" }}>{it.priceEstimate}</div>
                <div style={{ fontSize: 11, color: "#999", marginBottom: 16, fontFamily: "Helvetica,Arial,sans-serif" }}>estimated total</div>

                {/* Included items */}
                {items.length > 0 && (
                  <div style={{ borderTop: "1px solid #eee", paddingTop: 14 }}>
                    {items.map(item => (
                      <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                        <span style={{ color: isSelected ? gold : darkGreen, fontSize: 12, fontWeight: 700 }}>&#10003;</span>
                        <span style={{ fontSize: 12, color: "#555", fontFamily: "Helvetica,Arial,sans-serif" }}>
                          <strong style={{ color: darkGreen }}>{item.label}:</strong> {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Select button */}
                <button style={{
                  width: "100%", marginTop: 16,
                  background: isSelected ? gold : "transparent",
                  color: isSelected ? "#fff" : darkGreen,
                  border: isSelected ? "none" : `2px solid ${darkGreen}`,
                  padding: "10px 20px", borderRadius: 6, fontSize: 13, fontWeight: 700,
                  cursor: "pointer", fontFamily: "Helvetica,Arial,sans-serif", transition: "all 0.2s",
                }}>
                  {isSelected ? "Selected" : "Select This Itinerary"}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Booking Details for Selected Itinerary */}
      {/* Booking Details for Selected Itinerary */}
      {currentItinerary && selectedInterests.length > 0 && (
        <div key={selectedItinerary} style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 30px 50px", animation: "slideUp 0.35s ease" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: darkGreen, fontFamily: "Georgia,serif" }}>Book Your {currentItinerary.name}</h2>
            <span style={{ background: currentItinerary.badgeColor, color: "#fff", padding: "4px 12px", borderRadius: 20, fontSize: 11, fontWeight: 700, fontFamily: "Helvetica,Arial,sans-serif" }}>{currentItinerary.badge}</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

            {/* Flight */}
            {interests.Flights && (
              <BookingCard>
                <div style={{ width: 48, height: 48, borderRadius: 8, background: "#f5f0e8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <img src={IMG.iconAirplane} alt="" style={{ width: 26, height: 26, filter: "brightness(0) saturate(100%) invert(20%) sepia(15%) saturate(900%) hue-rotate(80deg)" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: darkGreen, marginBottom: 4 }}>{currentItinerary.flight.airline}</div>
                  <div style={{ fontSize: 13, color: "#666", fontFamily: "Helvetica,Arial,sans-serif", marginBottom: 4 }}>{currentItinerary.flight.route}</div>
                  <div style={{ fontSize: 12, color: "#999", fontFamily: "Helvetica,Arial,sans-serif" }}>Departs {currentItinerary.flight.departure} &bull; Arrives {currentItinerary.flight.arrival}</div>
                </div>
                <div style={{ textAlign: "right", minWidth: 120 }}>
                  <div style={{ fontSize: 22, fontWeight: 700, color: darkGreen, marginBottom: 8 }}>{currentItinerary.flight.price}</div>
                  <BookButton provider={currentItinerary.flight.provider} url={currentItinerary.flight.url} />
                </div>
              </BookingCard>
            )}

            {/* Hotel */}
            {interests.Hotels && (
              <BookingCard>
                <div style={{ width: 120, height: 90, borderRadius: 8, overflow: "hidden", flexShrink: 0 }}>
                  <img src={currentItinerary.hotel.img} alt={currentItinerary.hotel.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: darkGreen, marginBottom: 4 }}>{currentItinerary.hotel.name}</div>
                  <div style={{ fontSize: 12, color: gold, fontWeight: 600, marginBottom: 4, fontFamily: "Helvetica,Arial,sans-serif" }}>&#9733; {currentItinerary.hotel.rating} &bull; {currentItinerary.hotel.reviews} reviews</div>
                  <div style={{ fontSize: 13, color: "#666", fontFamily: "Helvetica,Arial,sans-serif" }}>{currentItinerary.hotel.desc}</div>
                </div>
                <div style={{ textAlign: "right", minWidth: 130 }}>
                  <div style={{ fontSize: 20, fontWeight: 700, color: darkGreen, marginBottom: 8 }}>{currentItinerary.hotel.price}</div>
                  <BookButton provider={currentItinerary.hotel.provider} url={currentItinerary.hotel.url} />
                </div>
              </BookingCard>
            )}

            {/* Car Rental */}
            {interests["Car Rental"] && (
              <BookingCard>
                <div style={{ width: 48, height: 48, borderRadius: 8, background: "#f5f0e8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <img src={IMG.iconCar} alt="" style={{ width: 26, height: 26, filter: "brightness(0) saturate(100%) invert(20%) sepia(15%) saturate(900%) hue-rotate(80deg)" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: darkGreen, marginBottom: 4 }}>{currentItinerary.car.vehicle}</div>
                  <div style={{ fontSize: 13, color: "#666", fontFamily: "Helvetica,Arial,sans-serif" }}>{currentItinerary.car.model}</div>
                </div>
                <div style={{ textAlign: "right", minWidth: 120 }}>
                  <div style={{ fontSize: 20, fontWeight: 700, color: darkGreen, marginBottom: 8 }}>{currentItinerary.car.price}</div>
                  <BookButton provider={currentItinerary.car.provider} url={currentItinerary.car.url} />
                </div>
              </BookingCard>
            )}

            {/* Dining */}
            {interests.Dining && (
              <BookingCard>
                <div style={{ width: 48, height: 48, borderRadius: 8, background: "#f5f0e8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 22 }}>&#127869;</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: darkGreen, marginBottom: 4 }}>{currentItinerary.dining.name}</div>
                  <div style={{ fontSize: 12, color: gold, fontWeight: 600, marginBottom: 4, fontFamily: "Helvetica,Arial,sans-serif" }}>{currentItinerary.dining.cuisine} &bull; {currentItinerary.dining.priceRange}</div>
                  <div style={{ fontSize: 13, color: "#666", fontFamily: "Helvetica,Arial,sans-serif" }}>{currentItinerary.dining.desc}</div>
                </div>
                <div style={{ textAlign: "right", minWidth: 130 }}>
                  <BookButton provider={currentItinerary.dining.provider} url={currentItinerary.dining.url} />
                </div>
              </BookingCard>
            )}

            {/* Tickets */}
            {interests.Tickets && (
              <BookingCard>
                <div style={{ width: 48, height: 48, borderRadius: 8, background: "#f5f0e8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <img src={IMG.iconTicket} alt="" style={{ width: 26, height: 26, filter: "brightness(0) saturate(100%) invert(20%) sepia(15%) saturate(900%) hue-rotate(80deg)" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: darkGreen, marginBottom: 4 }}>{currentItinerary.ticket.name}</div>
                  <div style={{ fontSize: 13, color: "#666", fontFamily: "Helvetica,Arial,sans-serif" }}>{currentItinerary.ticket.desc}</div>
                </div>
                <div style={{ textAlign: "right", minWidth: 140 }}>
                  <div style={{ fontSize: 18, fontWeight: 700, color: darkGreen, marginBottom: 8 }}>{currentItinerary.ticket.price}</div>
                  <a href={currentItinerary.ticket.url} style={{
                    background: gold, color: "#fff", border: "none", padding: "10px 22px", borderRadius: 6, fontSize: 12, fontWeight: 700, cursor: "pointer",
                    fontFamily: "Helvetica,Arial,sans-serif", textDecoration: "none", display: "inline-block", transition: "all 0.2s"
                  }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(201,169,110,0.4)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
                    Buy Tickets
                  </a>
                </div>
              </BookingCard>
            )}
          </div>

          {/* No selections */}
          {selectedInterests.length === 0 && (
            <div style={{ textAlign: "center", padding: "60px 20px", color: "#999", fontSize: 16, fontFamily: "Helvetica,Arial,sans-serif" }}>
              No categories were selected. Go back and select your interests to see recommendations.
            </div>
          )}
        </div>
      )}

      {/* Back Button */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 30px 40px", textAlign: "center" }}>
        <button onClick={onBack}
          style={{ background: "#fff", color: darkGreen, border: `2px solid ${darkGreen}`, padding: "12px 36px", borderRadius: 8, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "Helvetica,Arial,sans-serif", transition: "all 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.background = darkGreen; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = darkGreen; }}>
          &larr; Back to Homepage
        </button>
      </div>

      <ParkMap />
      <Footer />
    </div>
  );
};

/* ─── Results Page Sidebar ─── */
const resultsSidebarItems = [
  { id: "control", label: "Control", desc: "Single List View", icon: "\uD83D\uDCCB" },
  { id: "varA", label: "Variation A", desc: "Itineraries Only", icon: "\uD83D\uDCCA" },
  { id: "varB", label: "Variation B", desc: "Itineraries + Tagline", icon: "\uD83E\uDDD9" },
];

/* ─── Homepage Sidebar Items ─── */
const homeSidebarItems = [
  { id: "control", label: "Control", desc: "Default Homepage", icon: "\uD83C\uDFE0" },
  { id: "varA", label: "Variation A", desc: "Marketing Module", icon: "\uD83D\uDCE3" },
  { id: "varB", label: "Variation B", desc: "Interactive Wizard", icon: "\uD83E\uDDD9" },
];

/* ─── Variation A: Marketing Module (full-size) ─── */
const TripPlannerModule = ({ onPlanVisit }) => (
  <div style={{ maxWidth: 1200, margin: "0 auto", padding: "50px 30px 10px" }}>
    <h2 style={{ fontSize: 28, fontWeight: 700, color: darkGreen, textAlign: "center", marginBottom: 28 }}>Let Us Help You Plan Your Trip</h2>
    <div style={{ background: "#fff", border: `1.5px solid ${gold}`, borderRadius: 14, display: "flex", overflow: "hidden", minHeight: 300 }}>
      <div style={{ width: 200, flexShrink: 0, display: "flex", alignItems: "flex-end", justifyContent: "center", background: "linear-gradient(to top, #f5f0e8, #fff)" }}>
        <img src={IMG.willy} alt="Wild Willy" style={{ height: 300, objectFit: "contain", display: "block", marginBottom: -4 }} />
      </div>
      <div style={{ flex: 1, padding: "28px 36px 28px 20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h3 style={{ fontSize: 19, fontWeight: 700, color: darkGreen, marginBottom: 14, lineHeight: 1.35 }}>Plan your vacation with Wild Willy, our AI-powered travel planner!</h3>

        {/* Travel icons divider */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: 18 }}>
          <span style={{ color: darkGreen, fontSize: 7 }}>&#9670;</span>
          <div style={{ flex: 1, height: 1.5, background: gold, margin: "0 6px" }} />
          <svg width="16" height="16" viewBox="0 0 24 24" fill={darkGreen} style={{ margin: "0 8px", flexShrink: 0 }}><path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2 1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" /></svg>
          <div style={{ flex: 1, height: 1.5, background: gold, margin: "0 4px" }} />
          <svg width="16" height="16" viewBox="0 0 24 24" fill={darkGreen} style={{ margin: "0 8px", flexShrink: 0 }}><path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z" /></svg>
          <div style={{ flex: 1, height: 1.5, background: gold, margin: "0 4px" }} />
          <svg width="16" height="16" viewBox="0 0 24 24" fill={darkGreen} style={{ margin: "0 8px", flexShrink: 0 }}><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" /></svg>
          <div style={{ flex: 1, height: 1.5, background: gold, margin: "0 4px" }} />
          <svg width="16" height="16" viewBox="0 0 24 24" fill={darkGreen} style={{ margin: "0 8px", flexShrink: 0 }}><path d="M14 6l-1-2H5v17h2v-7h5l1 2h7V6h-6zm4 8h-4l-1-2H7V6h5l1 2h5v6z" /></svg>
          <div style={{ flex: 1, height: 1.5, background: gold, margin: "0 6px" }} />
          <span style={{ color: darkGreen, fontSize: 7 }}>&#9670;</span>
        </div>

        <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7, marginBottom: 10, fontFamily: "Helvetica,Arial,sans-serif" }}>
          Meet Wild Willy, your AI-powered travel planner for effortless flights, hotels, car rentals, dining, and theme park adventures.
        </p>
        <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7, marginBottom: 18, fontFamily: "Helvetica,Arial,sans-serif" }}>
          Let Wild Willy craft your perfect trip, or build it yourself&mdash;backed by hundreds of options and real traveler insights!
        </p>
        <div>
          <button onClick={onPlanVisit}
            style={{ background: darkGreen, color: "#fff", border: "none", padding: "10px 28px", borderRadius: 6, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "Helvetica,Arial,sans-serif", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(42,63,42,0.3)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
            Start Planning &rarr;
          </button>
        </div>
      </div>
    </div>
  </div>
);

/* ─── Inner Page Template ─── */
const InnerPage = ({ children, title, onNavigate, onBack, onHome }) => (
  <div style={{ animation: "pageIn 0.4s ease", maxWidth: 1200, margin: "0 auto", background: "#fff", boxShadow: "0 0 20px rgba(0,0,0,0.1)", minHeight: "100vh" }}>
    <Nav onNavigate={onNavigate} onHome={onHome} />
    {/* Page hero */}
    <div style={{ position: "relative", overflow: "hidden", padding: "50px 30px 40px", textAlign: "center" }}>
      <img src={IMG.hero} alt="" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(26,46,26,0.8)" }} />
      <div style={{ position: "relative", zIndex: 2 }}>
        <h1 style={{ fontSize: 34, fontWeight: 700, color: gold, fontFamily: "Georgia,serif" }}>{title}</h1>
      </div>
    </div>
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 30px 50px" }}>{children}</div>
    {/* Back */}
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 30px 40px", textAlign: "center" }}>
      <button onClick={onBack}
        style={{ background: "#fff", color: darkGreen, border: `2px solid ${darkGreen}`, padding: "12px 36px", borderRadius: 8, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "Helvetica,Arial,sans-serif", transition: "all 0.2s" }}
        onMouseEnter={e => { e.currentTarget.style.background = darkGreen; e.currentTarget.style.color = "#fff"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = darkGreen; }}>
        &larr; Back to Homepage
      </button>
    </div>
    <Footer />
  </div>
);

/* ─── Attractions Page ─── */
const AttractionsPage = ({ onNavigate, onBack, onHome }) => (
  <InnerPage onNavigate={onNavigate} onBack={onBack} onHome={onHome} title="Attractions">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
      {[
        { img: IMG.mine, title: "Maverick Mine Train", desc: "Ride ore cars through dark tunnels and past glittering caverns, geysers, and hidden falls. This family-friendly adventure takes you deep into the heart of the mountain.", thrill: "Moderate", duration: "8 min", height: '36"', price: "Included with park admission", express: "$15/person" },
        { img: IMG.eagle, title: "Wings of the West", desc: "Watch in wonder at the winged stars of this show soar overhead and perform daring feats. Our world-class falconry exhibition features eagles, hawks, and owls.", thrill: "Family", duration: "25 min", height: "All ages", price: "Included with park admission", express: null, showtime: "11 AM, 2 PM, 5 PM" },
        { img: IMG.attraction1, title: "Cascade Canyon", desc: "Brave roaring rapids, swirling currents, and wild waterfalls in this soaking adventure. Hold on tight as your raft plunges through the rugged canyon.", thrill: "High", duration: "12 min", height: '42"', price: "Included with park admission", express: "$15/person" },
        { img: IMG.attraction2, title: "Sawdust Surge", desc: "Timber Mountain's flagship coaster. Rocket through twists, drops, and barrel rolls at speeds up to 65 mph on this adrenaline-pumping ride.", thrill: "Extreme", duration: "3 min", height: '48"', price: "Included with park admission", express: "$20/person" },
      ].map(a => (
        <div key={a.title} style={{ background: "#fff", borderRadius: 10, overflow: "hidden", border: "1px solid #e0d8cc" }}>
          <div style={{ height: 200, overflow: "hidden" }}><img src={a.img} alt={a.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
          <div style={{ padding: "20px 22px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: darkGreen }}>{a.title}</div>
              <span style={{
                background: a.thrill === "Extreme" ? "#c0392b" : a.thrill === "High" ? "#e67e22" : a.thrill === "Moderate" ? darkGreen : "#27ae60",
                color: "#fff", padding: "3px 10px", borderRadius: 12, fontSize: 10, fontWeight: 700, fontFamily: "Helvetica,Arial,sans-serif"
              }}>{a.thrill}</span>
            </div>
            <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6, fontFamily: "Helvetica,Arial,sans-serif", marginBottom: 12 }}>{a.desc}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 14, fontSize: 12, fontFamily: "Helvetica,Arial,sans-serif", color: "#777" }}>
              <span>Duration: <strong style={{ color: darkGreen }}>{a.duration}</strong></span>
              <span>Height Req: <strong style={{ color: darkGreen }}>{a.height}</strong></span>
              {a.showtime && <span>Showtimes: <strong style={{ color: darkGreen }}>{a.showtime}</strong></span>}
            </div>
            <div style={{ borderTop: "1px solid #eee", paddingTop: 12, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontSize: 12, color: "#999", fontFamily: "Helvetica,Arial,sans-serif" }}>{a.price}</div>
                {a.express && <div style={{ fontSize: 11, color: gold, fontWeight: 600, fontFamily: "Helvetica,Arial,sans-serif", marginTop: 2 }}>Skip-the-Line: {a.express}</div>}
              </div>
              {a.express && (
                <button style={{ background: gold, color: "#fff", border: "none", padding: "7px 16px", borderRadius: 4, fontSize: 11, fontWeight: 700, cursor: "pointer", fontFamily: "Helvetica,Arial,sans-serif" }}>
                  Reserve Express
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
    {/* Ticket pricing summary */}
    <div style={{ marginTop: 32, background: "#fff", border: `1.5px solid ${gold}`, borderRadius: 12, padding: "24px 28px" }}>
      <h3 style={{ fontSize: 18, fontWeight: 700, color: darkGreen, marginBottom: 14 }}>Park Admission Tickets</h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
        {ticketData.map(t => (
          <div key={t.name} style={{ border: "1px solid #e0d8cc", borderRadius: 8, padding: "16px 18px", textAlign: "center" }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: darkGreen, marginBottom: 6 }}>{t.name}</div>
            <div style={{ fontSize: 12, color: "#777", fontFamily: "Helvetica,Arial,sans-serif", lineHeight: 1.5, marginBottom: 10, minHeight: 36 }}>{t.desc}</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: darkGreen, marginBottom: 10 }}>{t.price}</div>
            <button style={{ background: darkGreen, color: "#fff", border: "none", padding: "8px 20px", borderRadius: 4, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "Helvetica,Arial,sans-serif", width: "100%" }}>
              Buy Tickets
            </button>
          </div>
        ))}
      </div>
    </div>
  </InnerPage>
);

/* ─── Experiences Page ─── */
const ExperiencesPage = ({ onNavigate, onBack, onHome }) => (
  <InnerPage onNavigate={onNavigate} onBack={onBack} onHome={onHome} title="Experiences">
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {[
        { title: "Gold Panning Adventure", desc: "Try your luck at striking gold in our authentic sluice. Keep what you find! A great hands-on activity for all ages.", img: IMG.cascade, duration: "45 min", age: "All ages", price: "$24/person", priceKid: "$18/child", schedule: "Hourly, 10 AM \u2013 4 PM" },
        { title: "Wild West Stunt Show", desc: "Watch cowboys and outlaws face off in an explosive live-action stunt show featuring horseback riding, pyrotechnics, and comedy.", img: IMG.hero, duration: "30 min", age: "All ages", price: "Included with admission", priceKid: null, schedule: "12 PM, 3 PM, 6 PM" },
        { title: "Pioneer Craft Village", desc: "Learn frontier skills like blacksmithing, candle-making, and leather tooling from skilled artisans in our immersive craft village.", img: IMG.mine, duration: "1\u20132 hrs", age: "Ages 6+", price: "$19/person", priceKid: "$12/child", schedule: "Open 10 AM \u2013 5 PM" },
        { title: "Campfire Stories & S'mores", desc: "End your evening with tales of the Old West around a crackling campfire, complete with gourmet s'mores and hot cocoa.", img: IMG.eagle, duration: "1 hr", age: "All ages", price: "$15/person", priceKid: "$10/child", schedule: "7:30 PM nightly" },
        { title: "Timber Mountain Express Train", desc: "Take a scenic narrow-gauge steam train ride through the park's breathtaking pine forest and past the cascading waterfalls.", img: IMG.cascade, duration: "20 min", age: "All ages", price: "$16/person", priceKid: "$10/child", schedule: "Every 30 min, 9 AM \u2013 6 PM" },
      ].map(e => (
        <div key={e.title} style={{ background: "#fff", borderRadius: 10, border: "1px solid #e0d8cc", display: "flex", overflow: "hidden" }}>
          <div style={{ width: 220, flexShrink: 0, overflow: "hidden" }}><img src={e.img} alt={e.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /></div>
          <div style={{ flex: 1, padding: "22px 26px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ fontSize: 17, fontWeight: 700, color: darkGreen, marginBottom: 6 }}>{e.title}</div>
            <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6, fontFamily: "Helvetica,Arial,sans-serif", marginBottom: 12 }}>{e.desc}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 14, fontSize: 12, fontFamily: "Helvetica,Arial,sans-serif", color: "#777" }}>
              <span>Duration: <strong style={{ color: darkGreen }}>{e.duration}</strong></span>
              <span>Ages: <strong style={{ color: darkGreen }}>{e.age}</strong></span>
              <span>Schedule: <strong style={{ color: darkGreen }}>{e.schedule}</strong></span>
            </div>
            <div style={{ borderTop: "1px solid #eee", paddingTop: 12, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <span style={{ fontSize: 16, fontWeight: 700, color: darkGreen }}>{e.price}</span>
                {e.priceKid && <span style={{ fontSize: 12, color: "#888", fontFamily: "Helvetica,Arial,sans-serif", marginLeft: 10 }}>{e.priceKid}</span>}
              </div>
              {e.price !== "Included with admission" ? (
                <button style={{ background: darkGreen, color: "#fff", border: "none", padding: "8px 20px", borderRadius: 4, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "Helvetica,Arial,sans-serif" }}>
                  Book Now
                </button>
              ) : (
                <span style={{ fontSize: 11, color: gold, fontWeight: 700, fontFamily: "Helvetica,Arial,sans-serif", background: "rgba(201,169,110,0.1)", padding: "6px 14px", borderRadius: 4 }}>Free with Ticket</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </InnerPage>
);

/* ─── Hotels Page ─── */
const HotelsPage = ({ onNavigate, onBack, onHome }) => {
  const [checkingHotel, setCheckingHotel] = useState(null);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [availResult, setAvailResult] = useState(null);
  const today = new Date().toISOString().split("T")[0];

  const handleCheck = (hotelName) => {
    if (checkIn && checkOut) {
      setAvailResult({ hotel: hotelName, checkIn, checkOut, guests });
    }
  };

  const hotels = [
    { img: IMG.hotel1Alt, name: "Timber Mountain Lodge", rating: "4.8", reviews: "2,340", price: "$279", perks: ["Skip-the-line park passes", "Panoramic forest views", "On-site restaurant & spa", "Complimentary valet parking"], desc: "On-site resort with skip-the-line park passes, rustic mountain elegance, and panoramic forest views. Just steps from the park entrance." },
    { img: IMG.hotel, name: "Pine Creek Inn", rating: "4.5", reviews: "1,120", price: "$179", perks: ["Cozy in-room fireplaces", "Complimentary breakfast", "5 min from park entrance", "Free shuttle service"], desc: "Charming inn nestled in the forest, just 5 minutes from the park entrance. Features cozy fireplaces and a complimentary breakfast." },
    { img: IMG.hotel2, name: "Gold Rush Suites", rating: "4.3", reviews: "890", price: "$149", perks: ["Full kitchenettes", "Heated pool & hot tub", "Complimentary breakfast buffet", "Kids stay free (under 12)"], desc: "Family-friendly suites with full kitchenettes, a heated pool, and a complimentary breakfast buffet. Great value for families." },
  ];

  return (
    <InnerPage onNavigate={onNavigate} onBack={onBack} onHome={onHome} title="Hotels &amp; Accommodations">
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {hotels.map(h => (
          <div key={h.name} style={{ background: "#fff", borderRadius: 10, border: "1px solid #e0d8cc", overflow: "hidden" }}>
            <div style={{ display: "flex" }}>
              <div style={{ width: 280, flexShrink: 0, overflow: "hidden" }}><img src={h.img} alt={h.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: 240 }} /></div>
              <div style={{ flex: 1, padding: "24px 28px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                  <div style={{ fontSize: 20, fontWeight: 700, color: darkGreen }}>{h.name}</div>
                  <div style={{ textAlign: "right" }}>
                    <span style={{ fontSize: 24, fontWeight: 700, color: darkGreen }}>{h.price}</span>
                    <span style={{ fontSize: 12, color: "#999", fontFamily: "Helvetica,Arial,sans-serif" }}>/night</span>
                  </div>
                </div>
                <div style={{ fontSize: 12, color: gold, fontWeight: 600, marginBottom: 10, fontFamily: "Helvetica,Arial,sans-serif" }}>&#9733; {h.rating} &bull; {h.reviews} reviews</div>
                <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6, fontFamily: "Helvetica,Arial,sans-serif", marginBottom: 14 }}>{h.desc}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
                  {h.perks.map(p => (
                    <span key={p} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "#666", fontFamily: "Helvetica,Arial,sans-serif", background: "#f5f0e8", padding: "4px 10px", borderRadius: 4 }}>
                      <span style={{ color: darkGreen, fontWeight: 700 }}>&#10003;</span> {p}
                    </span>
                  ))}
                </div>
                <button onClick={() => { setCheckingHotel(checkingHotel === h.name ? null : h.name); setAvailResult(null); }}
                  style={{ background: checkingHotel === h.name ? gold : darkGreen, color: "#fff", border: "none", padding: "10px 24px", borderRadius: 6, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "Helvetica,Arial,sans-serif", alignSelf: "flex-start", transition: "all 0.2s" }}>
                  {checkingHotel === h.name ? "Hide" : "Check Availability"}
                </button>
              </div>
            </div>
            {/* Availability checker panel */}
            {checkingHotel === h.name && (
              <div style={{ borderTop: "1px solid #e0d8cc", padding: "20px 28px", background: "#faf8f4", animation: "slideUp 0.3s ease" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "flex-end", marginBottom: 14 }}>
                  <div style={{ flex: "1 1 150px", minWidth: 140 }}>
                    <label style={{ display: "block", fontSize: 11, color: "#888", marginBottom: 4, fontFamily: "Helvetica,Arial,sans-serif", fontWeight: 600 }}>Check-in</label>
                    <input type="date" value={checkIn} min={today} onChange={e => setCheckIn(e.target.value)}
                      style={{ width: "100%", padding: "8px 10px", border: `1.5px solid ${checkIn ? darkGreen : "#bbb"}`, borderRadius: 6, fontSize: 13, fontFamily: "Helvetica,Arial,sans-serif", color: darkGreen, background: checkIn ? "#edf5ed" : "#fff", outline: "none" }} />
                  </div>
                  <div style={{ flex: "1 1 150px", minWidth: 140 }}>
                    <label style={{ display: "block", fontSize: 11, color: "#888", marginBottom: 4, fontFamily: "Helvetica,Arial,sans-serif", fontWeight: 600 }}>Check-out</label>
                    <input type="date" value={checkOut} min={checkIn || today} onChange={e => setCheckOut(e.target.value)}
                      style={{ width: "100%", padding: "8px 10px", border: `1.5px solid ${checkOut ? darkGreen : "#bbb"}`, borderRadius: 6, fontSize: 13, fontFamily: "Helvetica,Arial,sans-serif", color: darkGreen, background: checkOut ? "#edf5ed" : "#fff", outline: "none" }} />
                  </div>
                  <div style={{ flex: "0 0 100px" }}>
                    <label style={{ display: "block", fontSize: 11, color: "#888", marginBottom: 4, fontFamily: "Helvetica,Arial,sans-serif", fontWeight: 600 }}>Guests</label>
                    <select value={guests} onChange={e => setGuests(Number(e.target.value))}
                      style={{ width: "100%", padding: "8px 10px", border: "1.5px solid #bbb", borderRadius: 6, fontSize: 13, fontFamily: "Helvetica,Arial,sans-serif", color: darkGreen, background: "#fff", outline: "none", cursor: "pointer" }}>
                      {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n} guest{n > 1 ? "s" : ""}</option>)}
                    </select>
                  </div>
                  <button onClick={() => handleCheck(h.name)}
                    style={{ background: darkGreen, color: "#fff", border: "none", padding: "9px 22px", borderRadius: 6, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "Helvetica,Arial,sans-serif", opacity: checkIn && checkOut ? 1 : 0.5 }}>
                    Search
                  </button>
                </div>
                {availResult && availResult.hotel === h.name && (
                  <div style={{ background: "#edf5ed", border: `1px solid ${darkGreen}`, borderRadius: 8, padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", animation: "slideUp 0.25s ease" }}>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: darkGreen, marginBottom: 4 }}>Rooms Available!</div>
                      <div style={{ fontSize: 12, color: "#666", fontFamily: "Helvetica,Arial,sans-serif" }}>
                        {new Date(availResult.checkIn + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" })} &ndash; {new Date(availResult.checkOut + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" })} &bull; {availResult.guests} guest{availResult.guests > 1 ? "s" : ""}
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 18, fontWeight: 700, color: darkGreen, marginBottom: 4 }}>{h.price}/night</div>
                      <button style={{ background: gold, color: "#fff", border: "none", padding: "8px 20px", borderRadius: 4, fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "Helvetica,Arial,sans-serif" }}>
                        Book on Booking.com
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </InnerPage>
  );
};

/* ─── Plan Your Visit Page ─── */
const PlanVisitPage = ({ onNavigate, onBack, onHome, onStartPlanning }) => {
  const [interests, setInterests] = useState({ Flights: false, Hotels: false, "Car Rental": false, Dining: false, Tickets: false });
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = () => {
    if (onStartPlanning) {
      onStartPlanning({ interests, party: { arrival, departure, adults, children } });
    }
  };

  return (
    <div style={{ animation: "pageIn 0.4s ease", maxWidth: 1200, margin: "0 auto", background: "#fff", boxShadow: "0 0 20px rgba(0,0,0,0.1)", minHeight: "100vh" }}>
      <Nav onNavigate={onNavigate} onHome={onHome} />
      {/* Page hero */}
      <div style={{ position: "relative", overflow: "hidden", padding: "50px 30px 40px", textAlign: "center" }}>
        <img src={IMG.hero} alt="" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(26,46,26,0.8)" }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ fontSize: 34, fontWeight: 700, color: gold, fontFamily: "Georgia,serif" }}>Plan Your Visit</h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", fontFamily: "Helvetica,Arial,sans-serif", maxWidth: 600, margin: "10px auto 0", lineHeight: 1.6 }}>
            Everything you need to plan the perfect Timber Mountain adventure, all in one place.
          </p>
        </div>
      </div>

      {/* Intro / Guide section */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 30px 0" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: darkGreen, marginBottom: 12 }}>How It Works</h2>
          <p style={{ fontSize: 14, color: "#666", fontFamily: "Helvetica,Arial,sans-serif", lineHeight: 1.7, maxWidth: 650, margin: "0 auto" }}>
            Planning your trip to Timber Mountain is easy! Use Wild Willy, our AI-powered travel planner, to get personalized recommendations for flights, hotels, car rentals, dining, and park tickets. Just tell us what you need and let Wild Willy do the rest.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginBottom: 40 }}>
          {[
            { step: "1", title: "Select Your Interests", desc: "Choose the categories you want help with \u2014 flights, hotels, car rentals, dining, or theme park tickets.", icon: "\u2705" },
            { step: "2", title: "Tell Us About Your Party", desc: "Enter your travel dates and the number of adults and children in your group.", icon: "\uD83D\uDCC5" },
            { step: "3", title: "Get Recommendations", desc: "Wild Willy will generate personalized options and curated itineraries tailored to your trip.", icon: "\u2728" },
          ].map(s => (
            <div key={s.step} style={{ background: "#fff", border: "1px solid #e0d8cc", borderRadius: 10, padding: "24px 22px", textAlign: "center" }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>{s.icon}</div>
              <div style={{ fontSize: 11, color: gold, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "Helvetica,Arial,sans-serif", marginBottom: 6 }}>Step {s.step}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: darkGreen, marginBottom: 8 }}>{s.title}</div>
              <div style={{ fontSize: 12, color: "#777", lineHeight: 1.6, fontFamily: "Helvetica,Arial,sans-serif" }}>{s.desc}</div>
            </div>
          ))}
        </div>

        {/* Quick info cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 40 }}>
          <div style={{ background: "#fff", border: "1px solid #e0d8cc", borderRadius: 10, padding: "20px 24px", display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 48, height: 48, borderRadius: 8, background: "#f5f0e8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <img src={IMG.iconAirplane} alt="" style={{ width: 26, height: 26, filter: "brightness(0) saturate(100%) invert(20%) sepia(15%) saturate(900%) hue-rotate(80deg)" }} />
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: darkGreen, marginBottom: 4 }}>Getting Here</div>
              <div style={{ fontSize: 12, color: "#777", lineHeight: 1.5, fontFamily: "Helvetica,Arial,sans-serif" }}>Nearest airport: Sacramento Regional (SMF), 45 min drive. Flights from SFO, LAX, and SJC available daily.</div>
            </div>
          </div>
          <div style={{ background: "#fff", border: "1px solid #e0d8cc", borderRadius: 10, padding: "20px 24px", display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 48, height: 48, borderRadius: 8, background: "#f5f0e8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <img src={IMG.iconTicket} alt="" style={{ width: 26, height: 26, filter: "brightness(0) saturate(100%) invert(20%) sepia(15%) saturate(900%) hue-rotate(80deg)" }} />
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: darkGreen, marginBottom: 4 }}>Park Hours</div>
              <div style={{ fontSize: 12, color: "#777", lineHeight: 1.5, fontFamily: "Helvetica,Arial,sans-serif" }}>Open daily 9 AM \u2013 10 PM. Extended hours on weekends and holidays. Gates open 30 minutes early for hotel guests.</div>
            </div>
          </div>
          <div style={{ background: "#fff", border: "1px solid #e0d8cc", borderRadius: 10, padding: "20px 24px", display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 48, height: 48, borderRadius: 8, background: "#f5f0e8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <img src={IMG.iconHotel} alt="" style={{ width: 26, height: 26, filter: "brightness(0) saturate(100%) invert(20%) sepia(15%) saturate(900%) hue-rotate(80deg)" }} />
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: darkGreen, marginBottom: 4 }}>Where to Stay</div>
              <div style={{ fontSize: 12, color: "#777", lineHeight: 1.5, fontFamily: "Helvetica,Arial,sans-serif" }}>Choose from 3 partner hotels ranging from $149\u2013$279/night. The Timber Mountain Lodge offers on-site access and skip-the-line passes.</div>
            </div>
          </div>
          <div style={{ background: "#fff", border: "1px solid #e0d8cc", borderRadius: 10, padding: "20px 24px", display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 48, height: 48, borderRadius: 8, background: "#f5f0e8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <img src={IMG.iconCar} alt="" style={{ width: 26, height: 26, filter: "brightness(0) saturate(100%) invert(20%) sepia(15%) saturate(900%) hue-rotate(80deg)" }} />
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: darkGreen, marginBottom: 4 }}>Getting Around</div>
              <div style={{ fontSize: 12, color: "#777", lineHeight: 1.5, fontFamily: "Helvetica,Arial,sans-serif" }}>Free parking for all guests. Rental cars from $42/day. Complimentary shuttle service from partner hotels.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wild Willy Trip Planner */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 30px 50px" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: darkGreen, textAlign: "center", marginBottom: 24 }}>Start Planning with Wild Willy</h2>
        <div style={{ background: "#fff", border: `1.5px solid ${gold}`, borderRadius: 14, display: "flex", overflow: "hidden", minHeight: 420 }}>
          <div style={{ width: 220, flexShrink: 0, display: "flex", alignItems: "flex-end", justifyContent: "center", background: "linear-gradient(to top, #f5f0e8, #fff)" }}>
            <img src={IMG.willy} alt="Wild Willy" style={{ height: 380, objectFit: "contain", display: "block", marginBottom: -4 }} />
          </div>
          <div style={{ flex: 1, padding: "32px 40px 32px 20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h3 style={{ fontSize: 19, fontWeight: 700, color: darkGreen, marginBottom: 6, lineHeight: 1.35 }}>Plan your vacation with Wild Willy!</h3>
            <p style={{ fontSize: 13, color: "#888", marginBottom: 20, fontFamily: "Helvetica,Arial,sans-serif", lineHeight: 1.5 }}>
              Tell us what you need and we&apos;ll build your perfect Timber Mountain trip.
            </p>

            {/* Interest selection */}
            <div style={{ fontSize: 14, color: darkGreen, fontWeight: 700, fontStyle: "italic", marginBottom: 2, fontFamily: "Helvetica,Arial,sans-serif" }}>Tell us what you&apos;re interested in:</div>
            <div style={{ fontSize: 12, color: "#888", marginBottom: 12, fontFamily: "Helvetica,Arial,sans-serif" }}>Select all that apply</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 22 }}>
              {Object.entries(interests).map(([k, v]) => (
                <span key={k} onClick={() => setInterests(p => ({ ...p, [k]: !p[k] }))}
                  style={{
                    padding: "8px 22px", border: `1.5px solid ${v ? darkGreen : "#bbb"}`, borderRadius: 6, fontSize: 13, fontWeight: 600,
                    color: v ? "#fff" : "#3a3a3a", background: v ? darkGreen : "#f0ece6", cursor: "pointer", transition: "all 0.2s",
                    fontFamily: "Helvetica,Arial,sans-serif"
                  }}>
                  {k}
                </span>
              ))}
            </div>

            {/* Party details */}
            <div style={{ fontSize: 14, color: darkGreen, fontWeight: 700, fontStyle: "italic", marginBottom: 12, fontFamily: "Helvetica,Arial,sans-serif" }}>Tell us about your party:</div>

            {/* Date pickers row */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 14 }}>
              <div style={{ flex: "1 1 160px", minWidth: 160 }}>
                <label style={{ display: "block", fontSize: 12, color: "#888", marginBottom: 4, fontFamily: "Helvetica,Arial,sans-serif", fontWeight: 600 }}>Arrival Date</label>
                <input type="date" value={arrival} min={today} onChange={e => setArrival(e.target.value)}
                  style={{
                    width: "100%", padding: "8px 12px", border: `1.5px solid ${arrival ? darkGreen : "#bbb"}`, borderRadius: 6, fontSize: 13,
                    fontFamily: "Helvetica,Arial,sans-serif", color: darkGreen, background: arrival ? "#edf5ed" : "#f0ece6", outline: "none", cursor: "pointer"
                  }} />
              </div>
              <div style={{ flex: "1 1 160px", minWidth: 160 }}>
                <label style={{ display: "block", fontSize: 12, color: "#888", marginBottom: 4, fontFamily: "Helvetica,Arial,sans-serif", fontWeight: 600 }}>Departure Date</label>
                <input type="date" value={departure} min={arrival || today} onChange={e => setDeparture(e.target.value)}
                  style={{
                    width: "100%", padding: "8px 12px", border: `1.5px solid ${departure ? darkGreen : "#bbb"}`, borderRadius: 6, fontSize: 13,
                    fontFamily: "Helvetica,Arial,sans-serif", color: darkGreen, background: departure ? "#edf5ed" : "#f0ece6", outline: "none", cursor: "pointer"
                  }} />
              </div>
            </div>

            {/* People counter row */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 22 }}>
              <div style={{ flex: "1 1 160px", minWidth: 160 }}>
                <label style={{ display: "block", fontSize: 12, color: "#888", marginBottom: 4, fontFamily: "Helvetica,Arial,sans-serif", fontWeight: 600 }}>Adults</label>
                <div style={{ display: "flex", alignItems: "center", border: "1.5px solid #bbb", borderRadius: 6, background: "#f0ece6", overflow: "hidden" }}>
                  <button onClick={() => setAdults(Math.max(1, adults - 1))}
                    style={{ width: 36, height: 36, border: "none", background: "transparent", fontSize: 18, color: darkGreen, cursor: "pointer", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", padding: 0 }}>&minus;</button>
                  <div style={{ flex: 1, textAlign: "center", fontSize: 14, fontWeight: 700, color: darkGreen, fontFamily: "Helvetica,Arial,sans-serif", borderLeft: "1px solid #ddd", borderRight: "1px solid #ddd", padding: "8px 0" }}>{adults}</div>
                  <button onClick={() => setAdults(Math.min(10, adults + 1))}
                    style={{ width: 36, height: 36, border: "none", background: "transparent", fontSize: 18, color: darkGreen, cursor: "pointer", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", padding: 0 }}>+</button>
                </div>
              </div>
              <div style={{ flex: "1 1 160px", minWidth: 160 }}>
                <label style={{ display: "block", fontSize: 12, color: "#888", marginBottom: 4, fontFamily: "Helvetica,Arial,sans-serif", fontWeight: 600 }}>Children</label>
                <div style={{ display: "flex", alignItems: "center", border: "1.5px solid #bbb", borderRadius: 6, background: "#f0ece6", overflow: "hidden" }}>
                  <button onClick={() => setChildren(Math.max(0, children - 1))}
                    style={{ width: 36, height: 36, border: "none", background: "transparent", fontSize: 18, color: darkGreen, cursor: "pointer", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", padding: 0 }}>&minus;</button>
                  <div style={{ flex: 1, textAlign: "center", fontSize: 14, fontWeight: 700, color: darkGreen, fontFamily: "Helvetica,Arial,sans-serif", borderLeft: "1px solid #ddd", borderRight: "1px solid #ddd", padding: "8px 0" }}>{children}</div>
                  <button onClick={() => setChildren(Math.min(10, children + 1))}
                    style={{ width: 36, height: 36, border: "none", background: "transparent", fontSize: 18, color: darkGreen, cursor: "pointer", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", padding: 0 }}>+</button>
                </div>
              </div>
            </div>

            <div>
              <button onClick={handleSubmit}
                style={{ background: darkGreen, color: "#fff", border: "none", padding: "10px 28px", borderRadius: 6, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "Helvetica,Arial,sans-serif", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(42,63,42,0.3)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
                Start Planning &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Theme Park Map */}
      <ParkMap />

      {/* Back */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "30px 30px 40px", textAlign: "center" }}>
        <button onClick={onBack}
          style={{ background: "#fff", color: darkGreen, border: `2px solid ${darkGreen}`, padding: "12px 36px", borderRadius: 8, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "Helvetica,Arial,sans-serif", transition: "all 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.background = darkGreen; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = darkGreen; }}>
          &larr; Back to Homepage
        </button>
      </div>
      <Footer />
    </div>
  );
};

/* ─── Reusable Sidebar ─── */
const Sidebar = ({ items, activeId, onSelect, sidebarCollapsed, setSidebarCollapsed, sectionLabel, footerLabel, onBackToLanding }) => {
  const sW = sidebarCollapsed ? 56 : 220;
  return (
    <div style={{
      width: sW, flexShrink: 0, background: "#1a2e1a", display: "flex", flexDirection: "column",
      position: "fixed", top: 0, left: 0, bottom: 0, zIndex: 100, transition: "width 0.3s ease", overflow: "hidden",
      boxShadow: "2px 0 20px rgba(0,0,0,0.3)"
    }}>
      <div style={{
        padding: sidebarCollapsed ? "16px 0" : "20px 20px", display: "flex", alignItems: "center", justifyContent: sidebarCollapsed ? "center" : "space-between",
        borderBottom: "1px solid rgba(201,169,110,0.2)", minHeight: 60
      }}>
        {!sidebarCollapsed && <span style={{ color: gold, fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", whiteSpace: "nowrap" }}>A/B Test</span>}
        <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          style={{
            background: "rgba(255,255,255,0.08)", border: "none", color: gold, width: 28, height: 28, borderRadius: 6,
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0, transition: "all 0.2s"
          }}>
          {sidebarCollapsed ? "\u25B6" : "\u25C0"}
        </button>
      </div>
      <div style={{ padding: "12px 0", flex: 1 }}>
        {!sidebarCollapsed && <div style={{ padding: "8px 20px 14px", fontSize: 10, color: "rgba(201,169,110,0.5)", letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "Helvetica,Arial,sans-serif" }}>{sectionLabel}</div>}
        {items.map(item => {
          const active = activeId === item.id;
          return (
            <div key={item.id} onClick={() => onSelect(item.id)}
              style={{
                padding: sidebarCollapsed ? "12px 0" : "12px 20px", cursor: "pointer", display: "flex", alignItems: "center",
                gap: 12, background: active ? "rgba(201,169,110,0.12)" : "transparent",
                borderLeft: active ? `3px solid ${gold}` : "3px solid transparent",
                transition: "all 0.2s", justifyContent: sidebarCollapsed ? "center" : "flex-start"
              }}>
              <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
              {!sidebarCollapsed && (
                <div>
                  <div style={{
                    color: active ? gold : "rgba(255,255,255,0.7)", fontSize: 13, fontWeight: active ? 700 : 500,
                    fontFamily: "Helvetica,Arial,sans-serif", whiteSpace: "nowrap"
                  }}>{item.label}</div>
                  <div style={{
                    color: active ? "rgba(201,169,110,0.6)" : "rgba(255,255,255,0.35)", fontSize: 10, marginTop: 2,
                    fontFamily: "Helvetica,Arial,sans-serif", whiteSpace: "nowrap"
                  }}>{item.desc}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {/* Back to Landing button */}
      <div style={{ padding: sidebarCollapsed ? "12px 0" : "12px 20px", borderTop: "1px solid rgba(201,169,110,0.15)" }}>
        <div onClick={onBackToLanding}
          style={{
            padding: sidebarCollapsed ? "8px 0" : "8px 14px", cursor: "pointer", display: "flex", alignItems: "center",
            gap: 10, background: "rgba(255,255,255,0.05)", borderRadius: 8,
            transition: "all 0.2s", justifyContent: sidebarCollapsed ? "center" : "flex-start"
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(201,169,110,0.12)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}>
          <span style={{ fontSize: 14, flexShrink: 0, color: gold }}>{"\u2190"}</span>
          {!sidebarCollapsed && (
            <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, fontWeight: 600, fontFamily: "Helvetica,Arial,sans-serif", whiteSpace: "nowrap" }}>Back to Tests</span>
          )}
        </div>
      </div>
      {!sidebarCollapsed && (
        <div style={{ padding: "12px 20px", borderTop: "1px solid rgba(201,169,110,0.15)" }}>
          <div style={{ fontSize: 10, color: "rgba(201,169,110,0.4)", fontFamily: "Helvetica,Arial,sans-serif", lineHeight: 1.5 }}>
            {footerLabel}
          </div>
        </div>
      )}
    </div>
  );
};

/* ─── Landing Page ─── */
const SectionLabel = ({ children }) => (
  <span style={{
    display: "inline-block", fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: gold, fontFamily: "Helvetica,Arial,sans-serif",
    background: "rgba(201,169,110,0.1)", padding: "4px 10px", borderRadius: 4, marginBottom: 10
  }}>{children}</span>
);

const LandingPage = ({ onSelectTest }) => (
  <div style={{
    maxWidth: 1200, margin: "0 auto", minHeight: "100vh", fontFamily: "Georgia,serif",
    borderLeft: "1px solid #e0d8cc", borderRight: "1px solid #e0d8cc",
    backgroundImage: `url(${IMG.bg})`, backgroundSize: "auto", backgroundRepeat: "repeat", backgroundAttachment: "fixed"
  }}>

    {/* Hero header */}
    <div style={{ position: "relative", overflow: "hidden", padding: "70px 30px 60px", textAlign: "center", maxWidth: 1200, margin: "0 auto" }}>
      <img src={IMG.hero} alt="" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(180deg, rgba(26,46,26,0.85) 0%, rgba(26,46,26,0.75) 100%)" }} />
      <div style={{ position: "relative", zIndex: 2, animation: "pageIn 0.4s ease" }}>
        <div style={{ display: "inline-block", background: "rgba(201,169,110,0.15)", border: `1px solid rgba(201,169,110,0.3)`, padding: "6px 18px", borderRadius: 20, fontSize: 11, color: gold, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 18, fontFamily: "Helvetica,Arial,sans-serif" }}>Data Scientist, Experimentation &mdash; Case Study</div>
        <h1 style={{ fontSize: 42, fontWeight: 700, color: "#fff", marginBottom: 14, letterSpacing: 1 }}>Timber Mountain 2.0</h1>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", maxWidth: 300 }}>
          <span style={{ color: gold, fontSize: 6 }}>&#9670;</span>
          <div style={{ flex: 1, height: 1, background: "rgba(201,169,110,0.4)", margin: "0 8px" }} />
          <img src={IMG.treeIcon} alt="" style={{ width: 20, height: 20, opacity: 0.7, filter: "brightness(0) invert(1)" }} />
          <div style={{ flex: 1, height: 1, background: "rgba(201,169,110,0.4)", margin: "0 8px" }} />
          <span style={{ color: gold, fontSize: 6 }}>&#9670;</span>
        </div>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", fontFamily: "Helvetica,Arial,sans-serif", maxWidth: 620, margin: "0 auto", lineHeight: 1.7 }}>
          Interactive prototypes for two A/B testing experiments on the Timber Mountain theme park website.
        </p>
      </div>
    </div>

    {/* Background context */}
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 30px 10px", animation: "slideUp 0.5s ease 0.1s both" }}>
      <div style={{ background: "#fff", border: "1px solid #e0d8cc", borderRadius: 14, padding: "32px 36px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 24 }}>
          <img src={IMG.willy} alt="Wild Willy" style={{ width: 90, height: 90, objectFit: "contain", flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: 10, color: gold, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "Helvetica,Arial,sans-serif", marginBottom: 6 }}>Context</div>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: darkGreen, marginBottom: 12, lineHeight: 1.3 }}>Background: Wild Willy AI-Powered Travel Planner</h3>
            <p style={{ fontSize: 13, color: "#555", lineHeight: 1.75, fontFamily: "Helvetica,Arial,sans-serif", marginBottom: 10 }}>
              In January 2024, Timber Mountain launched a pre-booking feature for dining, shows, and rides&mdash;but it led to an 8-point drop in satisfaction scores (85% to 77%). Guests felt overwhelmed managing park experiences on top of flights, hotels, and car rentals.
            </p>
            <p style={{ fontSize: 13, color: "#555", lineHeight: 1.75, fontFamily: "Helvetica,Arial,sans-serif" }}>
              In April 2024, Timber Mountain unveiled <strong style={{ color: darkGreen }}>Wild Willy</strong>, an AI-powered travel planner that lets visitors arrange flights, hotels, rental cars, dining, and rides&mdash;all in one place. The goal: <strong style={{ color: darkGreen }}>turn more planners into purchasers</strong>, boosting ticket conversion and delivering a smoother guest experience.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Section heading for test cards */}
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 30px 0", textAlign: "center", animation: "slideUp 0.5s ease 0.2s both" }}>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: darkGreen, marginBottom: 6 }}>Experiments</h2>
      <p style={{ fontSize: 13, color: "#888", fontFamily: "Helvetica,Arial,sans-serif", marginBottom: 0 }}>Click on a test to explore the interactive prototypes for each experiment.</p>
    </div>

    {/* Two test cards */}
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 30px 60px", animation: "slideUp 0.5s ease 0.3s both" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>

        {/* Test 1 Card */}
        <div onClick={() => onSelectTest("test1")}
          style={{
            background: "#fff", border: `2px solid ${gold}`, borderRadius: 14, overflow: "hidden", cursor: "pointer",
            transition: "all 0.3s", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column"
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(201,169,110,0.25)"; e.currentTarget.style.borderColor = darkGreen; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)"; e.currentTarget.style.borderColor = gold; }}>
          {/* Card header */}
          <div style={{ background: darkGreen, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 10, color: gold, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", fontFamily: "Helvetica,Arial,sans-serif", marginBottom: 5 }}>Part One</div>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>Homepage A/B Test</h2>
            </div>
            <span style={{ background: "rgba(201,169,110,0.2)", border: "1px solid rgba(201,169,110,0.3)", color: gold, padding: "4px 12px", borderRadius: 12, fontSize: 10, fontWeight: 700, fontFamily: "Helvetica,Arial,sans-serif", whiteSpace: "nowrap" }}>Results Analysis</span>
          </div>
          {/* Card body */}
          <div style={{ padding: "24px 24px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
            <SectionLabel>Objective</SectionLabel>
            <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7, fontFamily: "Helvetica,Arial,sans-serif", marginBottom: 18 }}>
              Identify the optimal way to promote the Wild Willy AI-powered travel planner on the Timber Mountain homepage to boost ticket purchase conversion rates.
            </p>

            <SectionLabel>Hypothesis</SectionLabel>
            <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7, fontFamily: "Helvetica,Arial,sans-serif", marginBottom: 18, fontStyle: "italic", borderLeft: `3px solid ${gold}`, paddingLeft: 14 }}>
              Adding an interactive travel planning wizard to the homepage will increase ticket purchase conversion rates compared to the default homepage or a static marketing module.
            </p>

            <SectionLabel>Treatments</SectionLabel>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 18 }}>
              {[
                { label: "Control", desc: "Default Homepage (no trip planner)" },
                { label: "Variation A", desc: "Homepage with marketing module" },
                { label: "Variation B", desc: "Homepage with interactive wizard" },
              ].map(t => (
                <div key={t.label} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 12, fontFamily: "Helvetica,Arial,sans-serif" }}>
                  <span style={{ background: darkGreen, color: "#fff", padding: "3px 10px", borderRadius: 4, fontSize: 10, fontWeight: 700, whiteSpace: "nowrap", minWidth: 72, textAlign: "center" }}>{t.label}</span>
                  <span style={{ color: "#666" }}>{t.desc}</span>
                </div>
              ))}
            </div>

            <SectionLabel>Primary Metric</SectionLabel>
            <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7, fontFamily: "Helvetica,Arial,sans-serif", marginBottom: 0 }}>
              Ticket purchase conversion rate (ticket_purchased)
            </p>

            <div style={{ marginTop: "auto", paddingTop: 18 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "12px 0 0", borderTop: "1px solid #eee" }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: darkGreen, fontFamily: "Helvetica,Arial,sans-serif" }}>View Creatives &rarr;</span>
              </div>
            </div>
          </div>
        </div>

        {/* Test 2 Card */}
        <div onClick={() => onSelectTest("test2")}
          style={{
            background: "#fff", border: `2px solid ${gold}`, borderRadius: 14, overflow: "hidden", cursor: "pointer",
            transition: "all 0.3s", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column"
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(201,169,110,0.25)"; e.currentTarget.style.borderColor = darkGreen; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)"; e.currentTarget.style.borderColor = gold; }}>
          {/* Card header */}
          <div style={{ background: darkGreen, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 10, color: gold, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", fontFamily: "Helvetica,Arial,sans-serif", marginBottom: 5 }}>Part Two</div>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>Results Page A/B Test</h2>
            </div>
            <span style={{ background: "rgba(201,169,110,0.2)", border: "1px solid rgba(201,169,110,0.3)", color: gold, padding: "4px 12px", borderRadius: 12, fontSize: 10, fontWeight: 700, fontFamily: "Helvetica,Arial,sans-serif", whiteSpace: "nowrap" }}>Proposal</span>
          </div>
          {/* Card body */}
          <div style={{ padding: "24px 24px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
            <SectionLabel>Friction Point</SectionLabel>
            <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7, fontFamily: "Helvetica,Arial,sans-serif", marginBottom: 10 }}>
              <strong style={{ color: darkGreen }}>Comparing Alternatives &amp; Decision Support.</strong> Web analytics show travel planning isn&apos;t linear&mdash;visitors research multiple options in parallel. A common UX friction is the inability to compare different travel scenarios side-by-side.
            </p>
            <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7, fontFamily: "Helvetica,Arial,sans-serif", marginBottom: 18 }}>
              Of users who created an itinerary, 35% only created one. Only 20% of tool users create an itinerary at all, and overall ticket conversion from the tool is just 3%.
            </p>

            <SectionLabel>Hypothesis</SectionLabel>
            <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7, fontFamily: "Helvetica,Arial,sans-serif", marginBottom: 18, fontStyle: "italic", borderLeft: `3px solid ${gold}`, paddingLeft: 14 }}>
              Presenting curated, side-by-side itinerary comparisons (Budget, Recommended, Premium) on the results page will reduce decision fatigue and increase ticket purchase conversion rates compared to the current single-list view.
            </p>

            <SectionLabel>Treatments</SectionLabel>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 18 }}>
              {[
                { label: "Control", desc: "Single list of booking options" },
                { label: "Variation A", desc: "3 curated itineraries (no tagline)" },
                { label: "Variation B", desc: "3 curated itineraries (with tagline)" },
              ].map(t => (
                <div key={t.label} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 12, fontFamily: "Helvetica,Arial,sans-serif" }}>
                  <span style={{ background: darkGreen, color: "#fff", padding: "3px 10px", borderRadius: 4, fontSize: 10, fontWeight: 700, whiteSpace: "nowrap", minWidth: 72, textAlign: "center" }}>{t.label}</span>
                  <span style={{ color: "#666" }}>{t.desc}</span>
                </div>
              ))}
            </div>

            <SectionLabel>Primary Metric</SectionLabel>
            <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7, fontFamily: "Helvetica,Arial,sans-serif", marginBottom: 0 }}>
              Ticket purchase conversion rate among trip planner users
            </p>

            <div style={{ marginTop: "auto", paddingTop: 18 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "12px 0 0", borderTop: "1px solid #eee" }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: darkGreen, fontFamily: "Helvetica,Arial,sans-serif" }}>View Creatives &rarr;</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
);

/* ─── Main App ─── */
export default function TimberMountainApp() {
  const [currentView, setCurrentView] = useState("landing");
  const [plannerSelections, setPlannerSelections] = useState(null);
  const [resultsVariant, setResultsVariant] = useState("control");
  const [homeVariant, setHomeVariant] = useState("control");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [prevView, setPrevView] = useState("test1"); // track which test view to return to

  const goTo = (view) => { setCurrentView(view); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const handleNavigate = (page) => {
    setPrevView(currentView); // remember where we came from
    goTo(page);
  };

  const handleStartPlanning = (selections) => {
    setPlannerSelections(selections);
    setCurrentView("test2");
    setResultsVariant("control");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHomeFromResults = () => {
    setCurrentView("test1");
    setHomeVariant("varB");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToLanding = () => goTo("landing");

  // For inner pages, go back to whichever test view they came from
  const handleBackFromInnerPage = () => {
    if (["test1", "test2"].includes(prevView)) goTo(prevView);
    else goTo("test1");
  };

  // Logo click: navigate to the homepage (Test 1)
  const handleGoHome = () => {
    goTo("test1");
  };

  const globalStyles = `
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; zoom: 0.75; }
    @keyframes pageIn { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
    @keyframes slideUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: #f5f0e8; }
    ::-webkit-scrollbar-thumb { background: #c9a96e; border-radius: 4px; }
  `;

  /* Landing page */
  if (currentView === "landing") {
    return (
      <div>
        <LandingPage onSelectTest={(test) => goTo(test)} />
        <style>{globalStyles}</style>
      </div>
    );
  }

  /* Nav inner pages */
  if (currentView === "attractions") {
    return (
      <div style={{ minHeight: "100vh", fontFamily: "Georgia,serif", backgroundImage: `url(${IMG.bg})`, backgroundSize: "auto", backgroundRepeat: "repeat", backgroundAttachment: "fixed" }}>
        <AttractionsPage onNavigate={handleNavigate} onBack={handleBackFromInnerPage} onHome={handleGoHome} />
        <style>{globalStyles}</style>
      </div>
    );
  }
  if (currentView === "experiences") {
    return (
      <div style={{ minHeight: "100vh", fontFamily: "Georgia,serif", backgroundImage: `url(${IMG.bg})`, backgroundSize: "auto", backgroundRepeat: "repeat", backgroundAttachment: "fixed" }}>
        <ExperiencesPage onNavigate={handleNavigate} onBack={handleBackFromInnerPage} onHome={handleGoHome} />
        <style>{globalStyles}</style>
      </div>
    );
  }
  if (currentView === "hotels") {
    return (
      <div style={{ minHeight: "100vh", fontFamily: "Georgia,serif", backgroundImage: `url(${IMG.bg})`, backgroundSize: "auto", backgroundRepeat: "repeat", backgroundAttachment: "fixed" }}>
        <HotelsPage onNavigate={handleNavigate} onBack={handleBackFromInnerPage} onHome={handleGoHome} />
        <style>{globalStyles}</style>
      </div>
    );
  }
  if (currentView === "plan-visit") {
    return (
      <div style={{ minHeight: "100vh", fontFamily: "Georgia,serif", backgroundImage: `url(${IMG.bg})`, backgroundSize: "auto", backgroundRepeat: "repeat", backgroundAttachment: "fixed" }}>
        <PlanVisitPage onNavigate={handleNavigate} onBack={handleBackFromInnerPage} onHome={handleGoHome} onStartPlanning={handleStartPlanning} />
        <style>{globalStyles}</style>
      </div>
    );
  }

  /* Test 2: Results page */
  if (currentView === "test2") {
    const sW = sidebarCollapsed ? 56 : 220;
    const selections = plannerSelections || {
      interests: { Flights: true, Hotels: true, "Car Rental": true, Dining: true, Tickets: true },
      party: { arrival: "", departure: "", adults: 2, children: 0 },
    };
    return (
      <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Georgia,serif" }}>
        <Sidebar
          items={resultsSidebarItems}
          activeId={resultsVariant}
          onSelect={(id) => { setResultsVariant(id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          sidebarCollapsed={sidebarCollapsed}
          setSidebarCollapsed={setSidebarCollapsed}
          sectionLabel="Results Page"
          footerLabel={<>Timber Mountain 2.0<br />Results Page Experiment</>}
          onBackToLanding={handleBackToLanding}
        />

        <div style={{
          flex: 1, marginLeft: sW, transition: "margin-left 0.3s ease",
          backgroundImage: `#fff)`, backgroundSize: "auto", backgroundRepeat: "repeat", backgroundAttachment: "fixed"
        }}>
          <div key={resultsVariant} style={{ animation: "pageIn 0.35s ease" }}>
            {resultsVariant === "control"
              ? <TripPlannerResults selections={selections} onBack={handleBackToHomeFromResults} onNavigate={handleNavigate} onHome={handleGoHome} />
              : <TripPlannerResultsVariation selections={selections} onBack={handleBackToHomeFromResults} showDescription={resultsVariant === "varB"} onNavigate={handleNavigate} onHome={handleGoHome} />
            }
          </div>
        </div>

        <style>{globalStyles}</style>
      </div>
    );
  }

  /* Test 1: Homepage variants */
  if (currentView === "test1") {
    const sW = sidebarCollapsed ? 56 : 220;
    const handlePlanVisit = () => { setPrevView("test1"); goTo("plan-visit"); };
    return (
      <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Georgia,serif" }}>
        <Sidebar
          items={homeSidebarItems}
          activeId={homeVariant}
          onSelect={(id) => { setHomeVariant(id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          sidebarCollapsed={sidebarCollapsed}
          setSidebarCollapsed={setSidebarCollapsed}
          sectionLabel="Homepage"
          footerLabel={<>Timber Mountain 2.0<br />Homepage Experiment</>}
          onBackToLanding={handleBackToLanding}
        />

        <div style={{
          flex: 1, marginLeft: sW, transition: "margin-left 0.3s ease",
          background: "#fff"
        }}>
          <div key={homeVariant} style={{ animation: "pageIn 0.35s ease" }}>
            {/* Control: default homepage without trip planner */}
            {homeVariant === "control" && (
              <div style={{ maxWidth: 1200, margin: "0 auto", minHeight: "100vh", borderLeft: "1px solid #e0d8cc", borderRight: "1px solid #e0d8cc", backgroundImage: `url(${IMG.bg})`, backgroundSize: "auto", backgroundRepeat: "repeat", backgroundAttachment: "fixed" }}>
                <Nav onNavigate={handleNavigate} onHome={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
                <Hero />
                <QuoteBanner />
                <Attractions onNavigate={handleNavigate} />
                <Accommodations />
                <ParkMap />
                <Footer />
              </div>
            )}
            {/* Variation A: homepage with marketing module */}
            {homeVariant === "varA" && (
              <div style={{ maxWidth: 1200, margin: "0 auto", minHeight: "100vh", borderLeft: "1px solid #e0d8cc", borderRight: "1px solid #e0d8cc", backgroundImage: `url(${IMG.bg})`, backgroundSize: "auto", backgroundRepeat: "repeat", backgroundAttachment: "fixed" }}>
                <Nav onNavigate={handleNavigate} onHome={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
                <Hero />
                <QuoteBanner />
                <TripPlannerModule onPlanVisit={handlePlanVisit} />
                <Attractions onNavigate={handleNavigate} />
                <Accommodations />
                <ParkMap />
                <Footer />
              </div>
            )}
            {/* Variation B: homepage with interactive wizard */}
            {homeVariant === "varB" && (
              <div style={{ maxWidth: 1200, margin: "0 auto", minHeight: "100vh", borderLeft: "1px solid #e0d8cc", borderRight: "1px solid #e0d8cc", backgroundImage: `url(${IMG.bg})`, backgroundSize: "auto", backgroundRepeat: "repeat", backgroundAttachment: "fixed" }}>
                <Nav onNavigate={handleNavigate} onHome={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
                <Hero />
                <QuoteBanner />
                <TripPlannerWizard onStartPlanning={handleStartPlanning} />
                <Attractions onNavigate={handleNavigate} />
                <Accommodations />
                <ParkMap />
                <Footer />
              </div>
            )}
          </div>
        </div>

        <style>{globalStyles}</style>
      </div>
    );
  }

  return null;
}
