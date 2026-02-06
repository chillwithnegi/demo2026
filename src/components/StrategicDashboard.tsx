import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Area, AreaChart, ComposedChart
} from "recharts";

const locationGrowthData = [
  { year: "'80", value: 50 },
  { year: "'90", value: 100 },
  { year: "'00", value: 200 },
  { year: "'05", value: 350 },
  { year: "'10", value: 600 },
  { year: "'15", value: 1100 },
  { year: "'20", value: 1800 },
  { year: "'23", value: 2400 },
];

const investmentReturnsData = [
  { city: "Delhi", value: 25 },
  { city: "Mumbai", value: 40 },
  { city: "Bangalore", value: 60 },
  { city: "Hyderabad", value: 80 },
  { city: "Pune", value: 100 },
  { city: "Gurgaon", value: 160 },
  { city: "Noida", value: 130 },
];

const propertyTrendsData = [
  { year: "'00", value: 45 },
  { year: "'05", value: 55 },
  { year: "'10", value: 70 },
  { year: "'15", value: 95 },
  { year: "'18", value: 110 },
  { year: "'20", value: 85 },
  { year: "'23", value: 135 },
];

const marketShareData = [
  { name: "Residential", value: 45 },
  { name: "Commercial", value: 30 },
  { name: "Industrial", value: 15 },
  { name: "Hospitality", value: 10 },
];

const portfolioGrowthData = [
  { year: "'04", value: 10 },
  { year: "'08", value: 30 },
  { year: "'12", value: 60 },
  { year: "'16", value: 120 },
  { year: "'20", value: 200 },
  { year: "'23", value: 280 },
];

const propertyAnalyticsData = [
  { year: "'06", value: 150 },
  { year: "'08", value: 250 },
  { year: "'10", value: 350 },
  { year: "'12", value: 500 },
  { year: "'14", value: 600 },
  { year: "'16", value: 750 },
  { year: "'18", value: 900 },
];

const GOLD = "#C9A84C";
const GOLD_LIGHT = "#E5C76B";
const GOLD_DIM = "rgba(201,168,76,0.3)";

const COLORS = [GOLD, GOLD_LIGHT, "#8B7635", "#A68D3C"];

export default function StrategicDashboard() {
  return (
    <div className="w-full rounded-2xl border-2 border-gold/30 bg-card overflow-hidden shadow-elegant">
      {/* Header */}
      <div className="flex items-center justify-between px-4 md:px-8 py-4 md:py-5 border-b border-gold/20">
        <h3 className="font-serif text-lg md:text-2xl lg:text-3xl font-bold text-foreground tracking-wide">
          STRATEGIC REAL ESTATE MARKET ANALYSIS
        </h3>
        <img
          src="/images/logo.webp"
          alt="Wealth X Multiplier"
          className="h-8 md:h-10 lg:h-12 w-auto hidden sm:block"
        />
      </div>

      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-b border-gold/20">
        {/* Location Performance */}
        <div className="p-4 md:p-5 border-b md:border-b-0 md:border-r border-gold/20">
          <p className="text-gold text-xs font-semibold tracking-wider uppercase mb-3">
            Location Performance
          </p>
          <ResponsiveContainer width="100%" height={160}>
            <ComposedChart data={locationGrowthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(201,168,76,0.1)" />
              <XAxis dataKey="year" tick={{ fill: '#999', fontSize: 10 }} axisLine={{ stroke: GOLD_DIM }} />
              <YAxis tick={{ fill: '#999', fontSize: 10 }} axisLine={{ stroke: GOLD_DIM }} />
              <Tooltip
                contentStyle={{ background: '#1a1a1a', border: `1px solid ${GOLD}`, borderRadius: 8 }}
                labelStyle={{ color: GOLD }}
              />
              <Bar dataKey="value" fill={GOLD_DIM} radius={[2, 2, 0, 0]} />
              <Line type="monotone" dataKey="value" stroke={GOLD} strokeWidth={2} dot={{ fill: GOLD, r: 3 }} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Growth Location Stats */}
        <div className="p-4 md:p-5 border-b md:border-b-0 md:border-r border-gold/20">
          <p className="text-gold text-xs font-semibold tracking-wider uppercase mb-3">
            Growth Indicators
          </p>
          <div className="flex gap-4 mb-4">
            <div className="flex-1 rounded-lg bg-background/50 p-3 border border-gold/10">
              <p className="text-gold text-xl md:text-2xl font-bold">₹2,698 Cr</p>
              <p className="text-muted-foreground text-xs">Avg. Annual Investments</p>
            </div>
            <div className="flex-1 rounded-lg bg-background/50 p-3 border border-gold/10">
              <p className="text-gold text-xl md:text-2xl font-bold">36,616</p>
              <p className="text-muted-foreground text-xs">Ongoing Investments</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={100}>
            <BarChart data={investmentReturnsData}>
              <XAxis dataKey="city" tick={{ fill: '#999', fontSize: 8 }} axisLine={{ stroke: GOLD_DIM }} />
              <YAxis tick={{ fill: '#999', fontSize: 9 }} axisLine={{ stroke: GOLD_DIM }} />
              <Tooltip contentStyle={{ background: '#1a1a1a', border: `1px solid ${GOLD}`, borderRadius: 8 }} />
              <Bar dataKey="value" fill={GOLD} radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Global Presence Map Placeholder */}
        <div className="p-4 md:p-5">
          <p className="text-gold text-xs font-semibold tracking-wider uppercase mb-3">
            Active Regions
          </p>
          <div className="flex flex-col items-center justify-center h-[160px] rounded-lg bg-background/30 border border-gold/10">
            <div className="grid grid-cols-3 gap-2 text-center w-full px-4">
              {["Delhi NCR", "Mumbai", "Bangalore", "Hyderabad", "Pune", "Noida"].map((city) => (
                <div key={city} className="rounded-md bg-gold/10 border border-gold/20 px-2 py-2">
                  <p className="text-foreground text-xs font-semibold">{city}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-xs mt-3">6 Key Markets Across India</p>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
        {/* Property Trends */}
        <div className="p-4 md:p-5 border-b sm:border-b-0 sm:border-r border-gold/20">
          <p className="text-gold text-xs font-semibold tracking-wider uppercase mb-3">
            Property Price Trends
          </p>
          <ResponsiveContainer width="100%" height={120}>
            <AreaChart data={propertyTrendsData}>
              <defs>
                <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={GOLD} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={GOLD} stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="year" tick={{ fill: '#999', fontSize: 9 }} axisLine={{ stroke: GOLD_DIM }} />
              <YAxis tick={{ fill: '#999', fontSize: 9 }} axisLine={{ stroke: GOLD_DIM }} />
              <Tooltip contentStyle={{ background: '#1a1a1a', border: `1px solid ${GOLD}`, borderRadius: 8 }} />
              <Area type="monotone" dataKey="value" stroke={GOLD} fill="url(#goldGrad)" strokeWidth={2} />
              <Line type="monotone" dataKey="value" stroke={GOLD_LIGHT} dot={{ fill: GOLD_LIGHT, r: 2 }} strokeWidth={1.5} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Market Segments */}
        <div className="p-4 md:p-5 border-b sm:border-b-0 lg:border-r border-gold/20">
          <p className="text-gold text-xs font-semibold tracking-wider uppercase mb-3">
            Market Segments
          </p>
          <ResponsiveContainer width="100%" height={120}>
            <PieChart>
              <Pie
                data={marketShareData}
                cx="50%"
                cy="50%"
                innerRadius={30}
                outerRadius={50}
                dataKey="value"
                stroke="none"
              >
                {marketShareData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: '#1a1a1a', border: `1px solid ${GOLD}`, borderRadius: 8 }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-2 justify-center mt-1">
            {marketShareData.map((item, i) => (
              <span key={item.name} className="flex items-center gap-1 text-[10px] text-muted-foreground">
                <span className="w-2 h-2 rounded-full inline-block" style={{ background: COLORS[i] }} />
                {item.name}
              </span>
            ))}
          </div>
        </div>

        {/* Portfolio Growth */}
        <div className="p-4 md:p-5 border-b sm:border-b-0 sm:border-r border-gold/20">
          <p className="text-gold text-xs font-semibold tracking-wider uppercase mb-3">
            Portfolio Growth
          </p>
          <ResponsiveContainer width="100%" height={120}>
            <LineChart data={portfolioGrowthData}>
              <XAxis dataKey="year" tick={{ fill: '#999', fontSize: 9 }} axisLine={{ stroke: GOLD_DIM }} />
              <YAxis tick={{ fill: '#999', fontSize: 9 }} axisLine={{ stroke: GOLD_DIM }} />
              <Tooltip contentStyle={{ background: '#1a1a1a', border: `1px solid ${GOLD}`, borderRadius: 8 }} />
              <Line type="monotone" dataKey="value" stroke={GOLD} strokeWidth={2} dot={{ fill: GOLD, r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Property Analytics */}
        <div className="p-4 md:p-5">
          <p className="text-gold text-xs font-semibold tracking-wider uppercase mb-3">
            Property Analytics
          </p>
          <ResponsiveContainer width="100%" height={120}>
            <BarChart data={propertyAnalyticsData}>
              <XAxis dataKey="year" tick={{ fill: '#999', fontSize: 9 }} axisLine={{ stroke: GOLD_DIM }} />
              <YAxis tick={{ fill: '#999', fontSize: 9 }} axisLine={{ stroke: GOLD_DIM }} />
              <Tooltip contentStyle={{ background: '#1a1a1a', border: `1px solid ${GOLD}`, borderRadius: 8 }} />
              <Bar dataKey="value" fill={GOLD} radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 md:px-8 py-3 border-t border-gold/20 flex items-center justify-between">
        <p className="text-muted-foreground text-[10px] md:text-xs">
          Professional Insights & Strategic Real Estate Analysis by Wealth X Multiplier
        </p>
        <p className="text-muted-foreground text-[10px] md:text-xs hidden sm:block">
          Data-Driven Investment Strategy
        </p>
      </div>
    </div>
  );
}