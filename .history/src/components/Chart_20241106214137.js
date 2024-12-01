import React from 'react';
import './Chart.css';

const platformData = [
    { platform: "Facebook", imageUrl: "/path/to/facebook-image.png", grade: "A+" },
    { platform: "Google", imageUrl: "/path/to/google-image.png", grade: "B-" },
    { platform: "Twitter", imageUrl: "/path/to/twitter-image.png", grade: "C+" },
    { platform: "Instagram", imageUrl: "/path/to/instagram-image.png", grade: "D-" },
    { platform: "TikTok", imageUrl: "/path/to/tiktok-image.png", grade: "E+" }
];

const gradePositions = {
    "A+": "10%",
    "B-": "25%",
    "C+": "40%",
    "D-": "55%",
    "E+": "70%",
    "F-": "85%"
};

const SocialMediaGradeChart = () => {
    return (
        <div className="chart-container" style={{ position: 'relative', width: '100%', maxWidth: '1306px', height: '825px', margin: '0 auto', padding: '20px', border: '1px solid #2D79BE', borderRadius: '20px' }}>
            <div className="grade-scale" style={{ position: 'relative', height: '40px', background: 'linear-gradient(to right, #4CAF50, #CDDC39, #FFEB3B, #FFC107, #FF5722)', borderRadius: '20px', margin: '100px auto', width: '80%' }}>
                {Object.keys(gradePositions).map((grade) => (
                    <span key={grade} className="grade-label" style={{ position: 'absolute', left: gradePositions[grade], top: '-30px', transform: 'translateX(-50%)', fontWeight: 'bold', color: '#000' }}>{grade}</span>
                ))}
                {platformData.map((platform) => (
                    <img
                        key={platform.platform}
                        src={platform.imageUrl}
                        alt={platform.platform}
                        className="platform-icon"
                        style={{ position: 'absolute', left: gradePositions[platform.grade], top: '-60px', transform: 'translateX(-50%)', cursor: 'pointer', width: '40px', height: '40px' }}
                    />
                ))}
            </div>
            <div className="platform-icons" style={{ position: 'relative', marginTop: '40px', display: 'flex', justifyContent: 'space-around' }}>
                {platformData.map((platform, index) => (
                    <img
                        key={index}
                        src={platform.imageUrl}
                        alt={platform.platform}
                        style={{ width: '60px', height: '60px', cursor: 'pointer' }}
                    />
                ))}
            </div>
            <div className="description" style={{ textAlign: 'center', marginTop: '20px', color: '#2D79BE' }}>
                <p>Description</p>
            </div>
        </div>
    );
};

export default SocialMediaGradeChart;
