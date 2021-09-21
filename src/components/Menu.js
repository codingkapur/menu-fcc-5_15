function Menu({ item }) {
    return (
        <div className="menu__item">
            <img src={item.img} alt={item.title}></img>
            <div className="menu__item--right-container">
                <div className="menu__item--top-row">
                    <h3 className="menu__item--title">{item.title}</h3>
                    <h3 className="menu__item--price">$ {item.price}</h3>
                </div>
                <p className="menu__item--info">{item.desc}</p>
            </div>
        </div>
    )
}

export default Menu