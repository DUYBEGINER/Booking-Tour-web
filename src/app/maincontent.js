import React from 'react';

function Maincontent(props) {
    return (
        <div className='maincontent'>
            <h1>Explore Popular Cities</h1>
            <p>Embark on unforgettable journeys with our expertly curated tours – whether you seek adventure, relaxation, or cultural exploration, we make booking your dream vacation effortless and exciting!</p>
            <div className="list-provinces">
                <div className="province"><p>Đồng Tháp</p></div>
                <div className="province"><p>Đồng Tháp</p></div>
                <div className="province"><p>Đồng Tháp</p></div>
                <div className="province"><p>Đồng Tháp</p></div>
                <div className="province"><p>Đồng Tháp</p></div>
                <div className="province"><p>Đồng Tháp</p></div>
                <div className="province"><p>Đồng Tháp</p></div>
                <div className="province"><p>Đồng Tháp</p></div>
            </div>
            <div className='province-detail'>
                <img src="background.jpg" className="province-img"></img>
                <div className="province-info">
                    <div className="province-title">
                        <h1>Đồng Tháp</h1>
                        <p>Đồng Tháp is a province in the Mekong Delta region of southern Vietnam. It shares its border with Cambodia to the west and is surrounded by Long An, Tien Giang, and Vinh Long provinces.</p>
                    </div>
                    <div className="province-cta">
                        <div className="item1"><p>Public Transportations</p></div>
                        <div className="item2"><p>Nature & Adventure</p></div>
                        <div className="item3"><p>Business Tours</p></div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Maincontent;