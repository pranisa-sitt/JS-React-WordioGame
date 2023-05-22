import wallpaper from "../../images/wallpaper.jpg";

const Background = () => {
    return(
        <div className="img-container">
            <img className="img" src={wallpaper} alt="wallpaper"/>
        </div>

    );
}

export default Background;