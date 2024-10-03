import React from 'react';

const BeachActivityPage = () => {
    return (
        <div
            style={{
                backgroundImage: "url('https://www.themiracleisland.com/images/acommodation/jungle-beach/23.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                padding: '20px',
                position: 'relative',
            }}
        >
            {/* Gradient Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            }}></div>

            <h1 className="text-3xl font-bold text-black text-center mb-8" style={{ marginTop: '20px' }}>Beach & Water Activities</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <ActivityCard 
                    title="Snorkeling" 
                    description="Explore the vibrant underwater world teeming with colorful coral reefs and tropical fish. Snorkeling is perfect for beginners and offers a glimpse into the marine life surrounding Sri Lanka's coasts."
                />
                <ActivityCard 
                    title="Scuba Diving" 
                    description="Dive deeper into the ocean to discover stunning dive sites featuring shipwrecks, coral gardens, and diverse marine species. Scuba diving lessons and guided dives are available for all skill levels."
                />
                <ActivityCard 
                    title="Surfing" 
                    description="Ride the waves. Whether you're a seasoned surfer or a beginner, the consistent swells provide an exhilarating experience."
                />
                <ActivityCard 
                    title="Jet Skiing" 
                    description="Experience the thrill of speeding across the water on a jet ski."
                />
                <ActivityCard 
                    title="Kayaking" 
                    description="Paddle through calm waters and explore the coastline or nearby lagoons. Kayaking is a peaceful way to enjoy the scenery while getting a bit of exercise."
                />
                <ActivityCard 
                    title="Beach Volleyball" 
                    description="Join in a friendly game of beach volleyball with fellow guests or staff."
                />
                <ActivityCard 
                    title="Sunbathing" 
                    description="Relax on the sandy shores, soaking up the sun while enjoying the sound of the waves. We provide sunbeds and umbrellas for your comfort."
                />
                <ActivityCard 
                    title="Boat Tours" 
                    description="Take a boat tour to explore nearby islands, lagoons, or wildlife hotspots. Dolphin and whale watching tours are particularly popular along the coast."
                />
            </div>
        </div>
    );
};

const ActivityCard = ({ title, description }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 text-gray-800">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-2">{description}</p>
        </div>
    );
};

export default BeachActivityPage;
