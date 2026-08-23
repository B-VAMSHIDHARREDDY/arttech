const FONT = "var(--font-body), Inter, -apple-system, sans-serif";

function Frame({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
      <defs>
        <clipPath id={`clip-${id}`}>
          <rect width="420" height="280" rx="14" />
        </clipPath>
      </defs>
      <g clipPath={`url(#clip-${id})`}>
        <rect width="420" height="280" fill="#fff" />
        <rect width="420" height="30" fill="#F6F8FB" />
        <circle cx="18" cy="15" r="4" fill="#E85B4F" />
        <circle cx="32" cy="15" r="4" fill="#3B5FCC" />
        <circle cx="46" cy="15" r="4" fill="#C7CCDA" />
        <rect x="64" y="9" width="180" height="12" rx="6" fill="#EEF1F7" />
        {children}
      </g>
    </svg>
  );
}

function Automation({ id }: { id: string }) {
  return (
    <Frame id={id}>
      <line x1="106" y1="88" x2="184" y2="88" stroke="#6C87DE" strokeWidth="2" strokeDasharray="4 5" />
      <line x1="236" y1="88" x2="314" y2="88" stroke="#6C87DE" strokeWidth="2" strokeDasharray="4 5" />
      <circle cx="80" cy="88" r="26" fill="#1B3A8C" />
      <path d="M69 88l7 7 15-15" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="210" cy="88" r="26" fill="#3B5FCC" />
      <path d="M199 88l7 7 15-15" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="340" cy="88" r="26" fill="#E4E9FA" stroke="#3B5FCC" strokeWidth="1.5" />
      <circle cx="340" cy="88" r="5" fill="#3B5FCC" />
      {[152, 196].map((y, i) => (
        <g key={y}>
          <rect x="20" y={y} width="380" height="34" rx="8" fill="#F6F8FB" stroke="#EEF1F7" />
          <text x="34" y={y + 21} fontFamily={FONT} fontSize="11" fill="#28304A">
            {i === 0 ? "Invoice approvals" : "Weekly report"}
          </text>
          <rect x="330" y={y + 7} width="50" height="20" rx="10" fill="#1B3A8C" />
          <circle cx="368" cy={y + 17} r="7" fill="#fff" />
        </g>
      ))}
    </Frame>
  );
}

function Portal({ id }: { id: string }) {
  return (
    <Frame id={id}>
      <rect x="0" y="30" width="108" height="250" fill="#E4E9FA" />
      <rect x="20" y="58" width="72" height="9" rx="4.5" fill="#1B3A8C" />
      <text x="20" y="52" fontFamily={FONT} fontSize="10" fontWeight="700" fill="#122B79">
        Dashboard
      </text>
      <text x="20" y="90" fontFamily={FONT} fontSize="10" fill="#2748A8" opacity="0.7">
        Orders
      </text>
      <text x="20" y="116" fontFamily={FONT} fontSize="10" fill="#2748A8" opacity="0.7">
        Support
      </text>
      <circle cx="180" cy="76" r="22" fill="#3B5FCC" />
      <text x="180" y="81" fontFamily={FONT} fontSize="14" fill="#fff" textAnchor="middle" fontWeight="700">
        A
      </text>
      <text x="214" y="72" fontFamily={FONT} fontSize="12" fontWeight="700" fill="#0B0F1A">
        Alex Morgan
      </text>
      <text x="214" y="88" fontFamily={FONT} fontSize="10" fill="#7A8299">
        Client since 2023
      </text>
      {[
        { x: 148, label: "Order status", value: "Active" },
        { x: 268, label: "Open tickets", value: "2" },
      ].map((c) => (
        <g key={c.x}>
          <rect x={c.x} y="126" width="112" height="72" rx="10" fill="#F6F8FB" stroke="#EEF1F7" />
          <text x={c.x + 14} y="150" fontFamily={FONT} fontSize="9" fill="#7A8299">
            {c.label}
          </text>
          <text x={c.x + 14} y="176" fontFamily={FONT} fontSize="15" fontWeight="700" fill="#122B79">
            {c.value}
          </text>
        </g>
      ))}
      <rect x="148" y="212" width="232" height="34" rx="8" fill="#1B3A8C" />
      <text x="264" y="234" fontFamily={FONT} fontSize="11" fontWeight="700" fill="#fff" textAnchor="middle">
        Track my order
      </text>
    </Frame>
  );
}

function Ecommerce({ id }: { id: string }) {
  const items = [
    { name: "Studio Lamp", price: "$68" },
    { name: "Oak Chair", price: "$142" },
    { name: "Wool Throw", price: "$54" },
    { name: "Ceramic Vase", price: "$36" },
  ];
  return (
    <Frame id={id}>
      <circle cx="392" cy="52" r="14" fill="#E4E9FA" />
      <path
        d="M386 48h3l1.4 8.4a1.6 1.6 0 001.6 1.4h5.4a1.6 1.6 0 001.6-1.3l1-5.5h-9.8"
        stroke="#1B3A8C"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="392" cy="62" r="1.6" fill="#1B3A8C" />
      <circle cx="397" cy="62" r="1.6" fill="#1B3A8C" />
      <circle cx="400" cy="42" r="6" fill="#E85B4F" />
      <text x="400" y="45" fontFamily={FONT} fontSize="8" fontWeight="700" fill="#fff" textAnchor="middle">
        3
      </text>
      {items.map((it, i) => {
        const x = 20 + (i % 2) * 190;
        const y = 46 + Math.floor(i / 2) * 108;
        return (
          <g key={it.name}>
            <rect x={x} y={y} width="172" height="92" rx="10" fill="#F6F8FB" stroke="#EEF1F7" />
            <rect x={x + 12} y={y + 12} width="148" height="48" rx="8" fill="#E4E9FA" />
            <text x={x + 12} y={y + 78} fontFamily={FONT} fontSize="10" fill="#28304A">
              {it.name}
            </text>
            <text x={x + 160} y={y + 78} fontFamily={FONT} fontSize="10" fontWeight="700" fill="#D8342A" textAnchor="end">
              {it.price}
            </text>
          </g>
        );
      })}
    </Frame>
  );
}

function Booking({ id }: { id: string }) {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const highlighted = [9, 14, 17];
  return (
    <Frame id={id}>
      <text x="20" y="50" fontFamily={FONT} fontSize="12" fontWeight="700" fill="#0B0F1A">
        August 2026
      </text>
      {days.map((d, i) => (
        <text key={i} x={30 + i * 30} y="66" fontFamily={FONT} fontSize="9" fill="#7A8299" textAnchor="middle">
          {d}
        </text>
      ))}
      {Array.from({ length: 21 }).map((_, i) => {
        const col = i % 7;
        const row = Math.floor(i / 7);
        const cx = 30 + col * 30;
        const cy = 88 + row * 26;
        const isHi = highlighted.includes(i);
        const isSel = i === 14;
        return (
          <g key={i}>
            {isSel && <circle cx={cx} cy={cy} r="11" fill="#1B3A8C" />}
            {!isSel && isHi && <circle cx={cx} cy={cy} r="11" fill="#E4E9FA" />}
            <text
              x={cx}
              y={cy + 3}
              fontFamily={FONT}
              fontSize="9"
              fill={isSel ? "#fff" : "#28304A"}
              textAnchor="middle"
            >
              {i + 1}
            </text>
          </g>
        );
      })}
      <rect x="240" y="46" width="160" height="180" rx="10" fill="#F6F8FB" stroke="#EEF1F7" />
      <text x="256" y="68" fontFamily={FONT} fontSize="10" fontWeight="700" fill="#0B0F1A">
        Available times
      </text>
      {["9:00 AM", "11:30 AM", "2:00 PM"].map((t, i) => (
        <g key={t}>
          <rect
            x="256"
            y={80 + i * 40}
            width="128"
            height="30"
            rx="8"
            fill={i === 1 ? "#1B3A8C" : "#fff"}
            stroke={i === 1 ? "#1B3A8C" : "#E4E9FA"}
          />
          <text x="270" y={99 + i * 40} fontFamily={FONT} fontSize="10" fill={i === 1 ? "#fff" : "#28304A"}>
            {t}
          </text>
        </g>
      ))}
    </Frame>
  );
}

function CRM({ id }: { id: string }) {
  const cols = [
    { title: "New", color: "#6C87DE", cards: ["Nova Retail", "Bright Path"] },
    { title: "In Progress", color: "#3B5FCC", cards: ["Kestrel Co.", "Vantage"] },
    { title: "Won", color: "#1B3A8C", cards: ["Harbor Group"] },
  ];
  return (
    <Frame id={id}>
      {cols.map((col, i) => {
        const x = 20 + i * 132;
        return (
          <g key={col.title}>
            <rect x={x} y={44} width="4" height="196" rx="2" fill={col.color} />
            <text x={x + 14} y="56" fontFamily={FONT} fontSize="10" fontWeight="700" fill="#0B0F1A">
              {col.title}
            </text>
            {col.cards.map((c, j) => (
              <g key={c}>
                <rect x={x + 8} y={68 + j * 56} width="112" height="46" rx="8" fill="#F6F8FB" stroke="#EEF1F7" />
                <text x={x + 20} y={90 + j * 56} fontFamily={FONT} fontSize="9" fontWeight="700" fill="#28304A">
                  {c}
                </text>
                <rect x={x + 20} y={98 + j * 56} width="46" height="10" rx="5" fill="#E4E9FA" />
              </g>
            ))}
          </g>
        );
      })}
    </Frame>
  );
}

function AIAssistant({ id }: { id: string }) {
  return (
    <Frame id={id}>
      <rect x="20" y="44" width="230" height="40" rx="14" ry="14" fill="#E4E9FA" />
      <text x="36" y="68" fontFamily={FONT} fontSize="10" fill="#122B79">
        Hi! How can I help today?
      </text>
      <rect x="170" y="92" width="210" height="34" rx="14" ry="14" fill="#1B3A8C" />
      <text x="186" y="113" fontFamily={FONT} fontSize="10" fill="#fff">
        Track my last order
      </text>
      <rect x="20" y="134" width="260" height="52" rx="14" ry="14" fill="#E4E9FA" />
      <text x="36" y="153" fontFamily={FONT} fontSize="10" fill="#122B79">
        Order #4821 shipped —
      </text>
      <text x="36" y="169" fontFamily={FONT} fontSize="10" fill="#122B79">
        arriving in 2 days.
      </text>
      <rect x="20" y="228" width="330" height="34" rx="17" fill="#fff" stroke="#E4E9FA" strokeWidth="1.5" />
      <text x="36" y="250" fontFamily={FONT} fontSize="10" fill="#7A8299">
        Ask anything...
      </text>
      <circle cx="376" cy="245" r="17" fill="#1B3A8C" />
      <path d="M370 245l12-6-4 6 4 6z" fill="#fff" />
    </Frame>
  );
}

function Dashboard({ id }: { id: string }) {
  const kpis = [
    { label: "Revenue", value: "$84.2k" },
    { label: "Users", value: "12,480" },
    { label: "Conversion", value: "4.8%" },
  ];
  const bars = [40, 70, 55, 90, 65, 100, 48];
  return (
    <Frame id={id}>
      {kpis.map((k, i) => (
        <g key={k.label}>
          <rect x={20 + i * 132} y="42" width="118" height="56" rx="10" fill="#F6F8FB" stroke="#EEF1F7" />
          <text x={34 + i * 132} y="64" fontFamily={FONT} fontSize="9" fill="#7A8299">
            {k.label}
          </text>
          <text x={34 + i * 132} y="84" fontFamily={FONT} fontSize="14" fontWeight="700" fill="#122B79">
            {k.value}
          </text>
        </g>
      ))}
      <rect x="20" y="112" width="380" height="130" rx="10" fill="#F6F8FB" stroke="#EEF1F7" />
      {bars.map((h, i) => (
        <rect
          key={i}
          x={40 + i * 48}
          y={222 - h}
          width="26"
          rx="4"
          height={h}
          fill={i === 5 ? "#E85B4F" : "#3B5FCC"}
        />
      ))}
      <polyline
        points={bars.map((h, i) => `${53 + i * 48},${232 - h}`).join(" ")}
        fill="none"
        stroke="#1B3A8C"
        strokeWidth="2"
      />
    </Frame>
  );
}

function Enterprise({ id }: { id: string }) {
  const modules = [
    { label: "Finance", x: 40, y: 46 },
    { label: "HR", x: 220, y: 46 },
    { label: "Operations", x: 40, y: 168 },
    { label: "Inventory", x: 220, y: 168 },
  ];
  return (
    <Frame id={id}>
      <line x1="150" y1="86" x2="220" y2="86" stroke="#6C87DE" strokeWidth="2" />
      <line x1="110" y1="86" x2="150" y2="86" stroke="#6C87DE" strokeWidth="2" />
      <line x1="150" y1="86" x2="150" y2="208" stroke="#6C87DE" strokeWidth="2" />
      <line x1="150" y1="208" x2="220" y2="208" stroke="#6C87DE" strokeWidth="2" />
      <circle cx="150" cy="147" r="20" fill="#1B3A8C" />
      <rect x="141" y="138" width="18" height="18" rx="3" fill="none" stroke="#fff" strokeWidth="2" />
      <line x1="141" y1="147" x2="159" y2="147" stroke="#fff" strokeWidth="2" />
      {modules.map((m) => (
        <g key={m.label}>
          <rect x={m.x} y={m.y} width="140" height="70" rx="10" fill="#F6F8FB" stroke="#EEF1F7" />
          <rect x={m.x + 14} y={m.y + 16} width="26" height="26" rx="7" fill="#E4E9FA" />
          <path
            d={`M${m.x + 20} ${m.y + 29}h14M${m.x + 20} ${m.y + 35}h9`}
            stroke="#1B3A8C"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <text x={m.x + 50} y={m.y + 34} fontFamily={FONT} fontSize="11" fontWeight="700" fill="#0B0F1A">
            {m.label}
          </text>
          <text x={m.x + 50} y={m.y + 50} fontFamily={FONT} fontSize="9" fill="#7A8299">
            Synced
          </text>
        </g>
      ))}
    </Frame>
  );
}

const VISUALS: Record<string, (props: { id: string }) => React.ReactElement> = {
  "sol-1": Automation,
  "sol-2": Portal,
  "sol-3": Ecommerce,
  "sol-4": Booking,
  "sol-5": CRM,
  "sol-6": AIAssistant,
  "sol-7": Dashboard,
  "sol-8": Enterprise,
};

export default function SolutionVisual({ id }: { id: string }) {
  const Visual = VISUALS[id] || Automation;
  return <Visual id={id} />;
}
