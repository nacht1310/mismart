import "./Header.css"
function Header() {
    return(
        <div className="header">
            <img src="default_avatar.png" alt="Avatar" />

            <div className="details">
                <p>huynhthehainam.mismart@gmail.com</p>
                <p>Quản trị viên</p>
            </div>

            <div className="language">
                <img src="VNFlag.png" alt="Language"/>
                <p>VI</p>
            </div>
        </div>
    );
}

export default Header