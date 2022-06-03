const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
     
            <div class="footer-content">
                <img src="img/logolight.png" alt="" class="logo">
                <div class="footer-ul-container">
                    <ul class="category">
                        <li class="category-title">Popular Brands</li>
                        <li>
                            <a href="" class="footer-link">Gucci</a>
                        </li>
                        <li>
                            <a href="" class="footer-link">Chanel</a>
                        </li>
                        <li>
                            <a href="" class="footer-link">Chloe'</a>
                        </li>
                        <li>
                            <a href="" class="footer-link">Dior</a>
                        </li>
                        <li>
                            <a href="" class="footer-link">Kayali</a>
                        </li>
                        <li>
                            <a href="" class="footer-link">Le Labo</a>
                        </li>
                    </ul>

                    <ul class="category">
                        <li class="category-title">Popular Brands</li>
                        <li>
                            <a href="" class="footer-link">Gucci</a>
                        </li>
                        <li>
                            <a href="" class="footer-link">Chanel</a>
                        </li>
                        <li>
                            <a href="" class="footer-link">Chloe'</a>
                        </li>
                        <li>
                            <a href="" class="footer-link">Dior</a>
                        </li>
                        <li>
                            <a href="" class="footer-link">Kayali</a>
                        </li>
                        <li>
                            <a href="" class="footer-link">Le Labo</a>
                        </li>
                    </ul>

                </div >

            </div> 
            <p class = "footer-title" > About Comapny <p> 
            <p class = "info" > Lorem ipsum, dolor sit amet consectetur adipisicing elit.Et, ratione vitae iusto natus nemo incidunt.Optio necessitatibus natus dolore autem ? Quidem sapiente soluta provident odit blanditiis.Quos mollitia perspiciatis ipsum ? </p> 
            <p class="info"> Support emails - help@sweetsmells.com, customersupport@sweetsmells.com </p> 
            <p class="info"> telephone - +254 712 345 678, +254 787 654 321 </p>

            <div class = "footer-social-container" >
                <div>
                    <a href="" class="social-link"> terms & services </a> 
                    <a href="" class="social-link"> privacy page </a> 
                </div> 
                <div>
                    <a href="" class ="social-link"> instagram </a> 
                    <a href="" class ="social-link"> facebook </a> 
                    <a href="" class ="social-link"> twitter </a>
                </div >

            </div> 
            <p class = "footer-credit"> Sweet smells, best online cologne store </p>

        `;
}

createFooter();