import React from "react";
import "./GameGrid.css";
import Cards from "./Cards.jsx";

export default function GameGrid() {
    return (
        <div className="container">
            <div className="row">
                <h3>Indie</h3>
                <a href="#">View More →</a>
            </div>
            <div className="grid">
                <Cards
                img="https://image.api.playstation.com/vulcan/ap/rnd/202401/2211/07b7236708c1c0791eb7aaa6601d014f6a2b5b69b0bcda9f.png" />
                <Cards 
                img="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ8EbOC1gOG3eCQtIdkAPnuEQGQK6mNjChrtxMR7GG_rElkoXEE"/>
                <Cards 
                img="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/04/deltarune-wallpaper.jpg?w=1600&h=900&fit=crop"/>
                <Cards
                img="https://www.gamingdragons.com/images/game_img/terraria.jpg" />
                <Cards
                img="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQeRfNRNqstlMELPzjoNEkLHM2iZriWzBgY4Dg6LYs5djfVrtVDaBJvFMzuDwEVk1aqiQ44-g" />
                <Cards 
                img="https://m.media-amazon.com/images/M/MV5BY2NkZTAxNTQtNDg0YS00ZDdhLTk4OTgtZWQyMzJmODJlYmVkXkEyXkFqcGc@._V1_.jpg"/>
                <Cards
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Celeste_box_art_full.png/960px-Celeste_box_art_full.png" />
                <Cards 
                img="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTW_bAypISduMXh-QNecUxYP2svWKs_g-Bu-MQUXTpyYSsmAFYe2sXx5lmcBiW554a8EuYj"/>
            </div>

            <div className="row">
                <h3>Action</h3>
                <a href="#">View More →</a>
            </div>
            <div className="grid">
                <Cards 
                img="https://image.api.playstation.com/vulcan/img/rnd/202010/2620/eIO6Ka26JChNo8KaFi7wON4L.jpg"/>
                <Cards
                img="https://cdn1.epicgames.com/offer/fn/FNBR_37-00_C6S4_EGS_Launcher_KeyArt_FNLogo_Blade_1200x1600_1200x1600-0924136c90b79f9006796f69f24a07f6" />
              <Cards
              img="https://image.api.playstation.com/vulcan/img/cfn/113073miFl8n5KuJvbUODdSI8QAHJwVxQEnl2RAiJczrztnMIS-g3T2CyOvhthnE5hHJ7sRZ55W76sk30gfZWILvL0UAkzbT.png" />
            <Cards
            img="https://image.api.playstation.com/vulcan/ap/rnd/202507/2917/3bcfe09c4fbb3890f6c45a5cf9464570e36f2b08770187a2.png" />
           <Cards
           img="https://upload.wikimedia.org/wikipedia/en/f/f2/CS2_Cover_Art.jpg" />
           <Cards 
           img="https://m.media-amazon.com/images/I/614s2Yfv2iL.jpg"/>
           <Cards 
           img="https://cdn1.epicgames.com/spt-assets/eb15454c010f4a748498cd3a62096a52/marvel-rivals-wq3mr.png"/>
           <Cards 
           img="https://cdn1.epicgames.com/offer/076207fa2b5c4803a636af606c3c28b7/SMITE-Portrait-1200x1600_jan25_1200x1600-97ca4ff09898f9abba5f6c66ed0e135c"/>
            </div>

            <div className="row">
                <h3>RPG</h3>
                <a href="#">View More →</a>
            </div>
            <div className="grid">
                <Cards
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLQ6h9axBnn7fgIGtqUoQmSzMfqoTU-RoVjA&s" />
                <Cards 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4I1h_15pNfLjmKZzVqGgufgSKxkZlxuUQ8Ap6IG12jWJOrZlwkzC0LfzlOSNeu1-06PY&usqp=CAU"/>
                <Cards 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKRCCPp1HiW9auzLiwkZrJ_ko6Aq4Gd9LV0DNDS-ug9q0AIsNPToGcZhXfcz13MdwxlU20"/>
                <Cards
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0T25dto3Q-J7wGDOSRbgLbE5v5Nht1EdTenquChhFrj_vU17SREeDJpPAE_d7DHkbh80VKA" />
               <Cards
               img="https://images.igdb.com/igdb/image/upload/t_1080p/co39vc.jpg" />
                <Cards 
                img="https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRtA3njHTaHKYu6wE6B5uIvHhX44a74qeQmJd-To1QfdOJepAxEN9hyxLeErjd7R_eM"/>
                <Cards 
                img="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTBnVoX75sR5vPuaZSUuZtCBlVF82Mbv1dn0b71LHK-XSXs0_Dnm02v7GfHNIof2GkiXZZuJA"/>
                <Cards 
                img="https://upload.wikimedia.org/wikipedia/en/b/b0/Persona_5_cover_art.jpg"/>
            </div>
        </div>
    );
}