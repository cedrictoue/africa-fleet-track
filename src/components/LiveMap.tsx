
import { Plus, Minus, Maximize } from "lucide-react";
import mapBackground from "@/assets/map-background.png";
import carIcon from "@/assets/car-icon.png";

const CarMarker = ({ label, showPulse }) => (
    <div className="relative">
        {showPulse && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 bg-blue-500/20 rounded-full animate-ping absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <div className="w-16 h-16 bg-blue-500/30 rounded-full animate-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
        )}
        <div className="relative z-10 w-20 h-20 -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-110 cursor-pointer">
            <img src={carIcon} alt="Car" className="w-full h-full object-contain drop-shadow-lg" />
        </div>
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-xs font-bold text-slate-700 whitespace-nowrap z-20">
            {label}
        </div>
    </div>
);

const LiveMap = () => {
    return (
        <div className="relative w-full h-[500px] bg-slate-100 rounded-xl overflow-hidden shadow-xl border border-gray-200 group">

            {/* Map Layer - Zoomed */}
            <div className="absolute inset-0 transform scale-125 origin-center">
                <img src={mapBackground} alt="Map" className="w-full h-full object-cover opacity-90" />

                {/* --- Vehicles Following Visual Roads --- */}

                {/* 1. Highway Curve (Right side - South to North) */}
                {/* Traces the big curved road on the right */}
                <div className="absolute w-0 h-0" style={{ animation: "routeHighway 20s linear infinite" }}>
                    <CarMarker label="Convoi #12" showPulse={true} />
                </div>

                {/* 2. Main Avenue (West to East) */}
                <div className="absolute w-0 h-0" style={{ animation: "routeAvenue 18s linear infinite" }}>
                    <CarMarker label="Navette #03" />
                </div>

                {/* 3. Vertical Street (Top Left to Bottom Left) */}
                <div className="absolute w-0 h-0" style={{ animation: "routeVertical 25s linear infinite" }}>
                    <CarMarker label="Diagnostic" />
                </div>

                {/* 4. Bridge Entry (Bottom Right) */}
                <div className="absolute w-0 h-0" style={{ animation: "routeBridge 15s linear infinite" }}>
                    <CarMarker label="Patrouille" />
                </div>

                {/* 5. Inner City Loop */}
                <div className="absolute w-0 h-0" style={{ animation: "routeCity 30s linear infinite" }}>
                    <CarMarker label="Superviseur" />
                </div>

            </div>

            {/* UI Controls */}
            <div className="absolute top-3 left-3 flex bg-white rounded shadow border border-gray-300 overflow-hidden">
                <button className="px-3 py-1 text-xs font-semibold text-gray-700 hover:bg-gray-50 border-r">Plan</button>
                <button className="px-3 py-1 text-xs font-semibold text-gray-500 hover:bg-gray-50">Satellite</button>
            </div>
            <div className="absolute bottom-4 right-3 flex flex-col bg-white rounded shadow border border-gray-300">
                <button className="p-2 border-b hover:bg-gray-50"><Plus className="w-4 h-4 text-gray-600" /></button>
                <button className="p-2 hover:bg-gray-50"><Minus className="w-4 h-4 text-gray-600" /></button>
            </div>

            <style>{`
                /* Interpolated coordinates to match visual roads */
                
                @keyframes routeHighway {
                    0% { top: 100%; left: 80%; }
                    25% { top: 75%; left: 75%; }
                    50% { top: 50%; left: 78%; }
                    75% { top: 25%; left: 70%; }
                    100% { top: 0%; left: 55%; }
                }

                @keyframes routeAvenue {
                    0% { top: 45%; left: 0%; }
                    40% { top: 42%; left: 40%; }
                    60% { top: 40%; left: 60%; }
                    100% { top: 35%; left: 100%; }
                }

                @keyframes routeVertical {
                    0% { top: 0%; left: 25%; }
                    100% { top: 100%; left: 15%; }
                }
                
                @keyframes routeBridge {
                    0% { top: 100%; left: 100%; }
                    100% { top: 70%; left: 70%; }
                }
                
                @keyframes routeCity {
                    0% { top: 30%; left: 30%; }
                    25% { top: 30%; left: 50%; }
                    50% { top: 60%; left: 50%; }
                    75% { top: 60%; left: 30%; }
                    100% { top: 30%; left: 30%; }
                }
            `}</style>
        </div>
    );
};

export default LiveMap;
