
import { Car, MapPin } from "lucide-react";

const LiveMap = () => {
    return (
        <div className="relative w-full h-[500px] bg-[#e5e7eb] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 font-sans">
            {/* Google-like Map Background */}
            <div className="absolute inset-0 bg-[#f8f9fa]">

                {/* Water / River */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#aadaff] transform -skew-x-12 origin-top-right border-l-4 border-[#9acdf9]" />

                {/* Parks */}
                <div className="absolute top-[10%] left-[10%] w-32 h-32 bg-[#c6e6c6] rounded-full opacity-60 mix-blend-multiply" />
                <div className="absolute bottom-[20%] right-[30%] w-48 h-48 bg-[#c6e6c6] rounded-full opacity-60 mix-blend-multiply" />

                {/* Roads Container for SVG */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    {/* Defs for gradients or styles */}
                    <defs>
                        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow dx="1" dy="1" stdDeviation="1" floodColor="#000" floodOpacity="0.2" />
                        </filter>
                    </defs>

                    {/* Main Roads - Thick Yellow/Orange */}
                    <polyline points="0,400 200,350 400,350 500,100" fill="none" stroke="#fbd354" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="150,500 200,350 250,150 250,0" fill="none" stroke="#fbd354" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />

                    {/* Connecting Roads - White */}
                    <polyline points="0,200 150,200 250,150 400,150 600,200" fill="none" stroke="white" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="400,350 400,500" fill="none" stroke="white" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />

                </svg>

                {/* Vehicle 1 - Following Path - Main Route */}
                <div className="absolute w-8 h-8 z-10" style={{
                    offsetPath: "path('M0,400 L200,350 L400,350 L500,100')",
                    animation: "followPath 10s linear infinite alternate"
                }}>
                    <div className="relative -ml-4 -mt-4 transform rotate-90"> {/* Adjust rotation if needed */}
                        <div className="bg-blue-600 p-1.5 rounded-full shadow-lg border-2 border-white">
                            <Car className="w-5 h-5 text-white" />
                        </div>
                        {/* Tooltip */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-[10px] font-bold px-2 py-0.5 rounded shadow text-gray-700 whitespace-nowrap">
                            Fleet #042
                        </div>
                    </div>
                </div>

                {/* Vehicle 2 - North South Route */}
                <div className="absolute w-8 h-8 z-10" style={{
                    offsetPath: "path('M150,500 L200,350 L250,150 L250,0')",
                    animation: "followPath 14s linear infinite"
                }}>
                    <div className="relative -ml-4 -mt-4">
                        <div className="bg-green-600 p-1.5 rounded-full shadow-lg border-2 border-white">
                            <Car className="w-5 h-5 text-white" />
                        </div>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-[10px] font-bold px-2 py-0.5 rounded shadow text-gray-700 whitespace-nowrap">
                            Delivery #09
                        </div>
                    </div>
                </div>

                {/* Vehicle 3 - East West */}
                <div className="absolute w-8 h-8 z-10" style={{
                    offsetPath: "path('M0,200 L150,200 L250,150 L400,150 L600,200')",
                    animation: "followPath 12s linear infinite reverse"
                }}>
                    <div className="relative -ml-4 -mt-4">
                        <div className="bg-orange-600 p-1.5 rounded-full shadow-lg border-2 border-white">
                            <Car className="w-5 h-5 text-white" />
                        </div>
                    </div>
                </div>


                {/* POI Markers */}
                <div className="absolute top-[28%] left-[45%] text-red-500 hover:-translate-y-1 transition-transform cursor-pointer">
                    <MapPin className="w-8 h-8 drop-shadow-md" fill="currentColor" />
                    <span className="absolute top-full left-1/2 -translate-x-1/2 text-xs font-bold text-gray-600 bg-white/80 px-1 rounded">HQ</span>
                </div>

            </div>

            {/* Map UI Overlay */}
            <div className="absolute top-4 left-4 z-20 flex gap-2">
                <button className="bg-white text-gray-600 px-3 py-1.5 rounded shadow text-sm font-medium hover:bg-gray-50 border border-gray-200">Plan</button>
                <button className="bg-white text-gray-400 px-3 py-1.5 rounded shadow text-sm font-medium hover:bg-gray-50 border border-gray-200">Satellite</button>
            </div>

            <div className="absolute bottom-6 right-4 z-20 flex flex-col gap-2">
                <div className="bg-white p-2 rounded shadow border border-gray-200 hover:bg-gray-50 cursor-pointer text-gray-600 font-bold text-center w-10">+</div>
                <div className="bg-white p-2 rounded shadow border border-gray-200 hover:bg-gray-50 cursor-pointer text-gray-600 font-bold text-center w-10">-</div>
            </div>

            {/* Global CSS for Path Animation */}
            <style>{`
        @keyframes followPath {
            0% { offset-distance: 0%; }
            100% { offset-distance: 100%; }
        }
      `}</style>
        </div>
    );
};

export default LiveMap;
