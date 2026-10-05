import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";

type IconName =
  | "grid"
  | "activity"
  | "sun"
  | "sliders"
  | "database"
  | "settings"
  | "bell"
  | "chevron"
  | "bolt"
  | "temperature"
  | "compass"
  | "wind"
  | "calendar"
  | "more"
  | "check"
  | "arrow"
  | "download"
  | "refresh"
  | "server";

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="2" />
        <rect x="14" y="3" width="7" height="7" rx="2" />
        <rect x="3" y="14" width="7" height="7" rx="2" />
        <rect x="14" y="14" width="7" height="7" rx="2" />
      </>
    ),
    activity: <path d="M3 12h4l2.5-7 5 14 2.5-7H21" />,
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" />
      </>
    ),
    sliders: (
      <>
        <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3" />
        <path d="M1 14h6M9 8h6M17 16h6" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V21h-4v-.08A1.7 1.7 0 0 0 8.94 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.57 15 1.7 1.7 0 0 0 3 14H3v-4h.08A1.7 1.7 0 0 0 4.6 8.94a1.7 1.7 0 0 0-.34-1.88L4.2 7l2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.57 1.7 1.7 0 0 0 10 3h4a1.7 1.7 0 0 0 1 1.57 1.7 1.7 0 0 0 1.88-.34l.06-.06L19.8 7l-.06.06a1.7 1.7 0 0 0-.34 1.88A1.7 1.7 0 0 0 21 10v4a1.7 1.7 0 0 0-1.6 1Z" />
      </>
    ),
    bell: (
      <>
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M10 21h4" />
      </>
    ),
    chevron: <path d="m9 18 6-6-6-6" />,
    bolt: <path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z" />,
    temperature: (
      <>
        <path d="M14 14.76V5a4 4 0 0 0-8 0v9.76a6 6 0 1 0 8 0Z" />
        <path d="M10 9v8" />
      </>
    ),
    compass: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m16 8-2.5 5.5L8 16l2.5-5.5L16 8Z" />
      </>
    ),
    wind: (
      <>
        <path d="M3 8h10a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h6" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="3" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </>
    ),
    more: (
      <>
        <circle cx="5" cy="12" r="1" fill="currentColor" stroke="none" />
        <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
        <circle cx="19" cy="12" r="1" fill="currentColor" stroke="none" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    download: (
      <>
        <path d="M12 3v12M7 10l5 5 5-5" />
        <path d="M5 21h14" />
      </>
    ),
    refresh: (
      <>
        <path d="M20 11a8 8 0 0 0-14.9-4M4 4v5h5" />
        <path d="M4 13a8 8 0 0 0 14.9 4M20 20v-5h-5" />
      </>
    ),
    server: (
      <>
        <rect x="3" y="4" width="18" height="6" rx="2" />
        <rect x="3" y="14" width="18" height="6" rx="2" />
        <path d="M7 7h.01M7 17h.01" />
      </>
    ),
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

const navItems: { label: string; icon: IconName }[] = [
  { label: "Overview", icon: "grid" },
  { label: "Live Monitoring", icon: "activity" },
  { label: "Solar Tracking", icon: "sun" },
  { label: "Fuzzy Logic", icon: "sliders" },
  { label: "Data Logs", icon: "database" },
];

type Reading = Record<string, string | number | boolean | null>;
type ReadingsResponse = {
  success: boolean;
  data?: Reading[];
  error?: string;
};

function isReading(value: unknown): value is Reading {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isReadingsResponse(value: unknown): value is ReadingsResponse {
  return (
    typeof value === "object" &&
    value !== null &&
    "success" in value &&
    typeof value.success === "boolean" &&
    (!("data" in value) || (Array.isArray(value.data) && value.data.every(isReading))) &&
    (!("error" in value) || typeof value.error === "string")
  );
}

function numericValue(reading: Reading | undefined, key: string): number | null {
  const value = reading?.[key];
  if (value === null || value === undefined || value === "") return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function formatClock(value: string | number | boolean | null | undefined) {
  if (value === null || value === undefined) return "—";
  const date = new Date(String(value));
  return Number.isNaN(date.getTime())
    ? "—"
    : date.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}

function formatAngle(value: number | null) {
  return value === null ? "—" : `${value.toFixed(1)}°`;
}

function isSensorReading(reading: Reading) {
  return reading.voltage != null || reading.power != null || reading.ldr_top_left != null;
}

function estimateEnergyKwh(readings: Reading[]) {
  let energyWh = 0;
  for (let index = 1; index < readings.length; index++) {
    const previous = readings[index - 1];
    const current = readings[index];
    const previousTime = Date.parse(String(previous.created_at ?? ""));
    const currentTime = Date.parse(String(current.created_at ?? ""));
    const previousPower = numericValue(previous, "power");
    const currentPower = numericValue(current, "power");
    const elapsedSeconds = (currentTime - previousTime) / 1000;

    if (
      previousPower !== null &&
      currentPower !== null &&
      elapsedSeconds > 0 &&
      elapsedSeconds <= 300
    ) {
      energyWh += ((previousPower + currentPower) / 2) * (elapsedSeconds / 3600);
    }
  }
  return energyWh / 1000;
}

const preferredColumns = [
  "id",
  "device_id",
  "voltage",
  "current",
  "power",
  "battery_voltage",
  "battery_current",
  "ldr_top_left",
  "ldr_top_right",
  "ldr_bottom_left",
  "ldr_bottom_right",
  "error_horizontal",
  "error_vertikal",
  "servo_azimuth",
  "servo_elevation",
  "temperature",
  "humidity",
  "created_at",
];

const columnLabels: Record<string, string> = {
  id: "ID",
  device_id: "Perangkat",
  voltage: "Tegangan",
  current: "Arus",
  power: "Daya",
  battery_voltage: "Tegangan Baterai",
  battery_current: "Arus Baterai",
  ldr_top_left: "LDR Kiri Atas",
  ldr_top_right: "LDR Kanan Atas",
  ldr_bottom_left: "LDR Kiri Bawah",
  ldr_bottom_right: "LDR Kanan Bawah",
  error_horizontal: "Error Horizontal",
  error_vertikal: "Error Vertikal",
  servo_azimuth: "Servo Azimuth",
  servo_elevation: "Servo Elevasi",
  temperature: "Suhu",
  humidity: "Kelembapan",
  created_at: "Waktu",
};

const fieldUnits: Record<string, string> = {
  voltage: "V",
  current: "mA",
  power: "W",
  battery_voltage: "V",
  battery_current: "mA",
  error_horizontal: "°",
  error_vertikal: "°",
  servo_azimuth: "°",
  servo_elevation: "°",
  temperature: "°C",
  humidity: "%",
};

function formatValue(key: string, value: Reading[string]) {
  if (value === null || value === undefined || value === "") return "—";
  if (key === "created_at") {
    const date = new Date(String(value));
    return Number.isNaN(date.getTime())
      ? String(value)
      : date.toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "medium" });
  }
  return `${String(value)}${fieldUnits[key] ? ` ${fieldUnits[key]}` : ""}`;
}

function csvCell(value: Reading[string]) {
  let text = value === null || value === undefined ? "" : String(value);
  if (/^[=+\-@]/.test(text)) text = `'${text}`;
  return `"${text.replace(/"/g, '""')}"`;
}

function StatCard({
  icon,
  label,
  value,
  unit,
  note,
  accent,
}: {
  icon: IconName;
  label: string;
  value: string;
  unit: string;
  note: string;
  accent: "green" | "amber" | "blue" | "purple";
}) {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${accent}`}>
        <Icon name={icon} size={20} />
      </div>
      <div className="stat-copy">
        <span className="eyebrow">{label}</span>
        <div className="stat-value">
          <strong>{value}</strong>
          <span>{unit}</span>
        </div>
        <span className="stat-note">{note}</span>
      </div>
      <Icon name="more" size={18} />
    </div>
  );
}

function EnergyChart({ readings }: { readings: Reading[] }) {
  const samples = readings
    .map((reading) => ({
      time: reading.created_at,
      power: numericValue(reading, "power"),
    }))
    .filter(
      (sample): sample is { time: string | number | boolean | null; power: number } =>
        sample.power !== null && sample.time !== null && sample.time !== undefined,
    )
    .slice(-48);
  const peak = Math.max(100, ...samples.map((sample) => sample.power));
  const scale = Math.ceil(peak / 100) * 100;
  const points = samples.map((sample, index) => ({
    x: samples.length < 2 ? 380 : (index / (samples.length - 1)) * 760,
    y: 195 - (sample.power / scale) * 170,
  }));
  const linePath = points
    .map((point, index) => `${index === 0 ? "M" : "L"}${point.x.toFixed(1)} ${point.y.toFixed(1)}`)
    .join(" ");
  const fillPath = points.length
    ? `${linePath} L${points[points.length - 1].x.toFixed(1)} 210 L${points[0].x.toFixed(1)} 210Z`
    : "";
  const latestSample = samples.at(-1);

  return (
    <div className="chart-wrap">
      <div className="y-labels">
        <span>{scale}</span>
        <span>{Math.round(scale * 0.75)}</span>
        <span>{Math.round(scale * 0.5)}</span>
        <span>{Math.round(scale * 0.25)}</span>
        <span>0</span>
      </div>
      <div className="chart-area">
        <div className="chart-grid">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <svg viewBox="0 0 760 210" preserveAspectRatio="none" aria-label="Energy output graph">
          <defs>
            <linearGradient id="energyFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#68e094" stopOpacity=".28" />
              <stop offset="100%" stopColor="#68e094" stopOpacity="0" />
            </linearGradient>
          </defs>
          {points.length > 0 && (
            <>
              <path d={fillPath} fill="url(#energyFill)" />
              <path
                d={linePath}
                fill="none"
                stroke="#68e094"
                strokeWidth="3"
                vectorEffect="non-scaling-stroke"
              />
              {points.map((point, index) => (
                <circle
                  key={index}
                  cx={point.x}
                  cy={point.y}
                  r={index === points.length - 1 ? 5 : 2}
                  fill={index === points.length - 1 ? "#111915" : "#68e094"}
                  stroke="#68e094"
                  strokeWidth={index === points.length - 1 ? 3 : 0}
                />
              ))}
            </>
          )}
        </svg>
        {latestSample && (
          <div className="chart-tooltip">
            <span>{formatClock(latestSample.time)}</span>
            <strong>{latestSample.power.toFixed(1)} W</strong>
          </div>
        )}
        {samples.length === 0 && <div className="chart-tooltip">Belum ada data daya</div>}
        <div className="x-labels">
          {Array.from({ length: 7 }, (_, index) => {
            const sampleIndex =
              samples.length < 2 ? 0 : Math.round((index / 6) * (samples.length - 1));
            const sample = samples[sampleIndex];
            return <span key={index}>{sample ? formatClock(sample.time) : "—"}</span>;
          })}
        </div>
      </div>
    </div>
  );
}

function SolarTracker({ reading }: { reading: Reading | undefined }) {
  const azimuth = numericValue(reading, "servo_azimuth");
  const elevation = numericValue(reading, "servo_elevation");

  return (
    <div className="tracker-visual">
      <div className="sun-orbit">
        <div className="sun-dot">
          <Icon name="sun" size={17} />
        </div>
      </div>
      <div className="direction north">N</div>
      <div className="direction east">E</div>
      <div className="direction south">S</div>
      <div className="direction west">W</div>
      <div className="panel-rig">
        <div className="solar-panel">
          {Array.from({ length: 18 }).map((_, index) => (
            <i key={index} />
          ))}
        </div>
        <div className="panel-neck" />
        <div className="panel-base" />
      </div>
      <div className="angle-label azimuth">
        <span>Azimuth</span>
        <strong>{formatAngle(azimuth)}</strong>
      </div>
      <div className="angle-label elevation">
        <span>Elevation</span>
        <strong>{formatAngle(elevation)}</strong>
      </div>
    </div>
  );
}

export default function App() {
  const [activeNav, setActiveNav] = useState("Overview");
  const [autoMode, setAutoMode] = useState(true);
  const [readings, setReadings] = useState<Reading[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [apiError, setApiError] = useState("");
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const requestInProgress = useRef(false);
  const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, "");

  const columns = useMemo(() => {
    const discovered = new Set(readings.flatMap((reading) => Object.keys(reading)));
    return [
      ...preferredColumns.filter((column) => discovered.has(column)),
      ...Array.from(discovered).filter((column) => !preferredColumns.includes(column)),
    ];
  }, [readings]);

  const orderedReadings = useMemo(
    () =>
      [...readings].sort(
        (left, right) =>
          Date.parse(String(left.created_at ?? "")) - Date.parse(String(right.created_at ?? "")),
      ),
    [readings],
  );
  const sensorReadings = useMemo(
    () => orderedReadings.filter(isSensorReading),
    [orderedReadings],
  );
  const latestReading = sensorReadings.at(-1);
  const latestServoReading = [...orderedReadings]
    .reverse()
    .find((reading) => reading.servo_azimuth != null || reading.servo_elevation != null);
  const today = new Date().toLocaleDateString("sv-SE");
  const todayReadings = sensorReadings.filter(
    (reading) =>
      typeof reading.created_at === "string" &&
      new Date(reading.created_at).toLocaleDateString("sv-SE") === today,
  );
  const todayPowers = todayReadings
    .map((reading) => numericValue(reading, "power"))
    .filter((power): power is number => power !== null);
  const todayEnergyKwh = estimateEnergyKwh(todayReadings);
  const peakPower = todayPowers.length ? Math.max(...todayPowers) : null;
  const backendOnline = !apiError && (!isLoading || lastUpdated !== null);
  const deviceOnline =
    latestReading?.created_at != null &&
    Date.now() - Date.parse(String(latestReading.created_at)) < 90_000;

  async function loadReadings() {
    if (requestInProgress.current) return;
    requestInProgress.current = true;
    setIsLoading(true);
    setApiError("");
    try {
      const response = await fetch(`${apiBaseUrl}/api/readings?limit=1000&order=desc`, {
        headers: { Accept: "application/json" },
      });
      const payload: unknown = await response.json();
      if (!response.ok || !isReadingsResponse(payload) || !payload.success || !payload.data) {
        const message =
          isReadingsResponse(payload) && payload.error
            ? payload.error
            : "Format respons backend tidak valid";
        throw new Error(message);
      }
      setReadings(payload.data.reverse());
      setLastUpdated(new Date());
    } catch (error) {
      setApiError(error instanceof Error ? error.message : "Backend tidak dapat dijangkau");
    } finally {
      setIsLoading(false);
      requestInProgress.current = false;
    }
  }

  useEffect(() => {
    void loadReadings();
    const interval = window.setInterval(() => void loadReadings(), 5000);
    return () => window.clearInterval(interval);
  }, []);

  function exportCsv() {
    if (!readings.length || !columns.length) return;
    const content = [
      columns.map((column) => csvCell(columnLabels[column] || column)).join(","),
      ...readings.map((reading) => columns.map((column) => csvCell(reading[column])).join(",")),
    ].join("\r\n");
    const blob = new Blob(["\uFEFF", content], { type: "text/csv;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `solar-tracker-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    URL.revokeObjectURL(link.href);
    link.remove();
  }

  function selectNavigation(label: string) {
    setActiveNav(label);
    if (label === "Data Logs") {
      window.setTimeout(
        () => document.querySelector("#data-telemetry")?.scrollIntoView({ behavior: "smooth" }),
        0,
      );
    }
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">
            <Icon name="sun" size={21} />
          </div>
          <div>
            <strong>HelioTrack</strong>
            <span>Smart Solar System</span>
          </div>
        </div>

        <div className="side-label">MAIN MENU</div>
        <nav className="nav-list">
          {navItems.map((item) => (
            <div
              key={item.label}
              role="button"
              tabIndex={0}
              className={`nav-item ${activeNav === item.label ? "active" : ""}`}
              onClick={() => selectNavigation(item.label)}
              onKeyDown={(event) => event.key === "Enter" && selectNavigation(item.label)}
            >
              <Icon name={item.icon} size={18} />
              <span>{item.label}</span>
              {activeNav === item.label && <i />}
            </div>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="system-card">
            <div className="system-card-head">
              <div className={`pulse-dot ${backendOnline ? "" : "offline"}`} />
              <span>{backendOnline ? "Backend Online" : "Backend Offline"}</span>
            </div>
            <strong>{deviceOnline ? "ESP32 mengirim data" : "Menunggu telemetry ESP32"}</strong>
            <div className="uptime">
              <span>Sinkronisasi</span>
              <span>{lastUpdated ? formatClock(lastUpdated.toISOString()) : "—"}</span>
            </div>
          </div>
          <div
            className="nav-item"
            role="button"
            tabIndex={0}
            onClick={() => setActiveNav("Settings")}
          >
            <Icon name="settings" size={18} />
            <span>Settings</span>
          </div>
          <div className="profile">
            <div className="avatar">AD</div>
            <div>
              <strong>Ardiansyah</strong>
              <span>Administrator</span>
            </div>
            <Icon name="chevron" size={16} />
          </div>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <span className="mobile-brand">HELIO<span>TRACK</span></span>
            <div className="page-title">Solar Tracker Dashboard</div>
            <p>Monitoring & optimasi panel surya secara real-time</p>
          </div>
          <div className="top-actions">
            <div className={`last-sync ${apiError ? "offline" : ""}`}>
              <i />
              <span>{apiError ? "Backend offline" : "Sinkronisasi"}</span>
              <strong>{lastUpdated ? formatClock(lastUpdated.toISOString()) : "—"}</strong>
            </div>
            <div className="icon-button" role="button" tabIndex={0} aria-label="Notifications">
              <Icon name="bell" />
              <i />
            </div>
            <div className="date-chip">
              <Icon name="calendar" size={17} />
              <span>{new Date().toLocaleDateString("id-ID", { dateStyle: "medium" })}</span>
              <Icon name="chevron" size={14} />
            </div>
          </div>
        </header>

        <section className="stats-grid">
          <StatCard
            icon="bolt"
            label="DAYA SAAT INI"
            value={numericValue(latestReading, "power")?.toFixed(1) ?? "—"}
            unit="W"
            note={latestReading ? "Data terbaru backend" : "Menunggu telemetry"}
            accent="green"
          />
          <StatCard
            icon="sun"
            label="LDR KIRI ATAS"
            value={numericValue(latestReading, "ldr_top_left")?.toFixed(0) ?? "—"}
            unit="ADC"
            note="Sensor intensitas cahaya"
            accent="amber"
          />
          <StatCard
            icon="temperature"
            label="SUHU PANEL"
            value={numericValue(latestReading, "temperature")?.toFixed(1) ?? "—"}
            unit="°C"
            note={
              numericValue(latestReading, "humidity") === null
                ? "Sensor lingkungan"
                : `Kelembapan ${numericValue(latestReading, "humidity")?.toFixed(1)}%`
            }
            accent="blue"
          />
          <StatCard
            icon="bolt"
            label="TEGANGAN PANEL"
            value={numericValue(latestReading, "voltage")?.toFixed(2) ?? "—"}
            unit="V"
            note={
              numericValue(latestReading, "current") === null
                ? "Menunggu telemetry"
                : `Arus ${numericValue(latestReading, "current")?.toFixed(1)} mA`
            }
            accent="purple"
          />
        </section>

        <section className="dashboard-grid">
          <div className="panel energy-panel">
            <div className="panel-header">
              <div>
                <span className="panel-kicker">PERFORMA HARI INI</span>
                <div className="panel-title">Produksi Energi</div>
              </div>
              <div className="chart-legend">
                <i />
                <span>Output Aktual</span>
              </div>
            </div>
            <EnergyChart readings={sensorReadings} />
            <div className="energy-summary">
              <div>
                <span>Total hari ini</span>
                <strong>{todayReadings.length ? todayEnergyKwh.toFixed(3) : "—"} <small>kWh</small></strong>
              </div>
              <div>
                <span>Peak output</span>
                <strong>{peakPower === null ? "—" : peakPower.toFixed(1)} <small>W</small></strong>
              </div>
              <div>
                <span>Record hari ini</span>
                <strong>{todayReadings.length.toLocaleString("id-ID")} <small>data</small></strong>
              </div>
            </div>
          </div>

          <div className="panel tracking-panel">
            <div className="panel-header">
              <div>
                <span className="panel-kicker">POSISI REAL-TIME</span>
                <div className="panel-title">Orientasi Panel</div>
              </div>
              <div className="auto-badge">
                <i />
                AUTO TRACKING
              </div>
            </div>
            <SolarTracker reading={latestServoReading} />
            <div className="tracking-footer">
              <div>
                <Icon name="wind" size={16} />
                <span>Update data</span>
                <strong>{formatClock(latestReading?.created_at)}</strong>
              </div>
              <div>
                <Icon name="compass" size={16} />
                <span>Error horizontal</span>
                <strong>{formatAngle(numericValue(latestReading, "error_horizontal"))}</strong>
              </div>
            </div>
          </div>

          <div className="panel fuzzy-panel">
            <div className="panel-header">
              <div>
                <span className="panel-kicker">FUZZY LOGIC CONTROLLER</span>
                <div className="panel-title">Status Kendali</div>
              </div>
              <div className={`status-pill ${deviceOnline ? "" : "offline"}`}>
                <i />
                {deviceOnline ? "ACTIVE" : "OFFLINE"}
              </div>
            </div>
            <div className="fuzzy-content">
              <div className="fuzzy-ring">
                <svg viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="49" className="ring-bg" />
                  <circle
                    cx="60"
                    cy="60"
                    r="49"
                    className="ring-value"
                    style={{
                      strokeDashoffset:
                        numericValue(latestReading, "error_horizontal") === null
                          ? 308
                          : 308 -
                            (Math.min(
                              Math.abs(numericValue(latestReading, "error_horizontal") ?? 0),
                              90,
                            ) /
                              90) *
                              308,
                    }}
                  />
                </svg>
                <div>
                  <strong>{formatAngle(numericValue(latestReading, "error_horizontal"))}</strong>
                  <span>Error horizontal</span>
                </div>
              </div>
              <div className="rule-list">
                <div>
                  <span>Error Azimuth</span>
                  <strong>{formatAngle(numericValue(latestReading, "error_horizontal"))}</strong>
                  <i className="good">{deviceOnline ? "LIVE" : "—"}</i>
                </div>
                <div>
                  <span>Error Elevasi</span>
                  <strong>{formatAngle(numericValue(latestReading, "error_vertikal"))}</strong>
                  <i className="good">{deviceOnline ? "LIVE" : "—"}</i>
                </div>
                <div>
                  <span>Posisi Azimuth</span>
                  <strong>{formatAngle(numericValue(latestServoReading, "servo_azimuth"))}</strong>
                  <i className="good">{latestServoReading ? "SERVO" : "—"}</i>
                </div>
              </div>
            </div>
            <div className="rule-fired">
              <div className="rule-icon">
                <Icon name="check" size={16} />
              </div>
              <div>
                <span>Telemetri terakhir diterima</span>
                <strong>{latestReading ? formatClock(latestReading.created_at) : "Belum ada data"}</strong>
              </div>
              <span>{deviceOnline ? "ESP32 aktif" : "ESP32 offline"}</span>
            </div>
          </div>

          <div className="panel control-panel">
            <div className="panel-header">
              <div>
                <span className="panel-kicker">QUICK CONTROL</span>
                <div className="panel-title">Mode Operasi</div>
              </div>
            </div>
            <div className="mode-switch">
              <div
                role="button"
                tabIndex={0}
                className={autoMode ? "selected" : ""}
                onClick={() => setAutoMode(true)}
              >
                <Icon name="sun" size={17} />
                Otomatis
              </div>
              <div
                role="button"
                tabIndex={0}
                className={!autoMode ? "selected" : ""}
                onClick={() => setAutoMode(false)}
              >
                <Icon name="sliders" size={17} />
                Manual
              </div>
            </div>
            <div className="control-status">
              <div className="control-orb">
                <Icon name={autoMode ? "activity" : "sliders"} size={27} />
              </div>
              <div>
                <span>{autoMode ? "Tracking otomatis aktif" : "Kontrol manual aktif"}</span>
                <strong>{autoMode ? "Mengikuti posisi matahari" : "Menunggu input operator"}</strong>
              </div>
            </div>
            <div className="detail-link" role="button" tabIndex={0}>
              <span>Buka pengaturan lengkap</span>
              <Icon name="arrow" size={17} />
            </div>
          </div>
        </section>

        <section className="panel telemetry-panel" id="data-telemetry">
          <div className="telemetry-header">
            <div>
              <span className="panel-kicker">BACKEND TELEMETRY</span>
              <div className="panel-title">Semua Data Sensor</div>
              <p>Seluruh field dari endpoint /api/readings, maksimal 1.000 record terbaru.</p>
            </div>
            <div className="telemetry-actions">
              <div
                className="secondary-action"
                role="button"
                tabIndex={0}
                onClick={() => void loadReadings()}
                onKeyDown={(event) => event.key === "Enter" && void loadReadings()}
              >
                <Icon name="refresh" size={15} />
                <span>{isLoading ? "Memuat..." : "Refresh"}</span>
              </div>
              <div
                className={`export-action ${readings.length ? "" : "disabled"}`}
                role="button"
                tabIndex={readings.length ? 0 : -1}
                aria-disabled={!readings.length}
                onClick={exportCsv}
                onKeyDown={(event) => event.key === "Enter" && exportCsv()}
              >
                <Icon name="download" size={15} />
                <span>Export CSV</span>
              </div>
            </div>
          </div>

          <div className="connection-strip">
            <div className={`connection-state ${apiError ? "error" : ""}`}>
              <i />
              <span>
                {apiError
                  ? "Backend terputus"
                  : isLoading && !lastUpdated
                    ? "Menghubungkan..."
                    : "Backend terhubung"}
              </span>
            </div>
            <div className="connection-meta">
              <span>{readings.length.toLocaleString("id-ID")} record</span>
              <span>{columns.length} field</span>
              <span>{apiBaseUrl || "Same-origin / proxied API"}</span>
            </div>
          </div>

          {apiError ? (
            <div className="data-message error-message">
              <div className="message-icon">
                <Icon name="server" size={22} />
              </div>
              <div>
                <strong>Data backend belum dapat dimuat</strong>
                <span>{apiError}</span>
                <small>
                  Untuk deployment terpisah, atur VITE_API_BASE_URL ke alamat backend. Saat lokal,
                  jalankan backend pada port 3000 lalu tekan Refresh.
                </small>
              </div>
            </div>
          ) : isLoading && readings.length === 0 ? (
            <div className="data-message">
              <div className="loading-ring" />
              <div>
                <strong>Mengambil data telemetry</strong>
                <span>Memuat record sensor dari backend...</span>
              </div>
            </div>
          ) : readings.length === 0 ? (
            <div className="data-message">
              <div className="message-icon">
                <Icon name="database" size={22} />
              </div>
              <div>
                <strong>Belum ada data sensor</strong>
                <span>Backend terhubung, tetapi tabel readings masih kosong.</span>
              </div>
            </div>
          ) : (
            <div className="data-table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    {columns.map((column) => (
                      <th key={column}>{columnLabels[column] || column.replace(/_/g, " ")}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[...readings].reverse().map((reading, rowIndex) => (
                    <tr key={String(reading.id ?? rowIndex)}>
                      {columns.map((column) => (
                        <td key={column}>{formatValue(column, reading[column])}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
