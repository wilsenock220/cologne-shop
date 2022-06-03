const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
            <div class="nav">
                <img src="img/Logo.png" class="brand-logo" alt="">
                <div class="nav-items">
                    <div class="search">
                        <input type="text" class="search-box" placeholder="search brand, product">
                        <button class="search-btn">Search</button>
                    </div>
                    <a href=""><img src="img/user (1).png" alt=""></a>
                    <a href=""><img src="img/shopping-cart.png" alt=""></a>
                </div>
            </div>
            <ul class="links-container">
                <li class="link-item">
                    <a href="" class="link">Home</a>
                </li>
                <li class="link-item">
                    <a href="" class="link">Home</a>
                </li>
                <li class="link-item">
                    <a href="" class="link">Home</a>
                </li>
                <li class="link-item">
                    <a href="" class="link">Home</a>
                </li>
                <li class="link-item">
                    <a href="" class="link">Home</a>
                </li>

            </ul>


        `;
}

createNav();