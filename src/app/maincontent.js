'use client'
import React, { useState } from 'react';

function Maincontent() {
    const [provinces] = useState(["Hà Nội", "Đồng Tháp", "Phú Yên", "Đà Lạt", "Bình Định", "Huế", "Quảng Trị", "Đà Nẵng"]);
    const [categories] = useState(["Public Transportations", "Nature & Adventure", "Business Tours"]);

    return (
        <div className='maincontent'>
            <h1>Explore Popular Cities</h1>
            <p>Embark on unforgettable journeys with our expertly curated tours – whether you seek adventure, relaxation, or cultural exploration, we make booking your dream vacation effortless and exciting!</p>
            
            <div className="list-provinces">
                {provinces.map((province, index) => (
                    <div key={index} className="province">
                        <p>{province}</p>
                    </div>
                ))}
            </div>
            
            <div className='province-detail'>
                <img src="background.jpg" alt="Province" className="province-img" />
                <div className="province-info">
                    <div className="province-title">
                        <h1>Đồng Tháp</h1>
                        <p>Đồng Tháp is a province in the Mekong Delta region of southern Vietnam. It shares its border with Cambodia to the west and is surrounded by Long An, Tien Giang, and Vinh Long provinces.</p>
                    </div>
                    
                    <div className="cta-container">
                        <button className="cta-button">Explore Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Maincontent;
