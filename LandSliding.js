:root{
    --emerald:#0F3D3E;
    --champagne:#E6C78B;
    --ivory:#F8F5F0;
    --beige:#EDE7DD;
    --bronze:#B08D57;
}

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    scroll-behavior:smooth;
}

body{
    font-family:'Poppins',sans-serif;
    background:var(--ivory);
    color:#333;
}

/* NAVBAR */

#navbar{
    position:fixed;
    top:0;
    width:100%;
    padding:25px 8%;
    display:flex;
    justify-content:space-between;
    align-items:center;

    background:rgba(248,245,240,.75);
    backdrop-filter:blur(20px);

    z-index:999;
    transition:.4s;
}

#navbar.scrolled{
    background:white;
    box-shadow:0 10px 30px rgba(0,0,0,.08);
}

.logo{
    font-family:'Playfair Display',serif;
    font-size:2rem;
    color:var(--emerald);
    font-style:italic;
    letter-spacing:4px;
}

.nav-links{
    display:flex;
    gap:35px;
    list-style:none;
}

.nav-links a{
    text-decoration:none;
    color:var(--emerald);
    transition:.3s;
    position:relative;
}

.nav-links a:hover{
    color:var(--bronze);
}

.nav-links a::after{
    content:'';
    position:absolute;
    bottom:-6px;
    left:0;
    width:0;
    height:2px;
    background:var(--bronze);
    transition:.4s;
}

.nav-links a:hover::after{
    width:100%;
}

/* HERO */

.hero{
    min-height:100vh;

    background:
    linear-gradient(rgba(255,255,255,.4),rgba(255,255,255,.4)),
    url("https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1800");

    background-size:cover;
    background-position:center;

    display:flex;
    justify-content:center;
    align-items:center;

    text-align:center;
    padding:0 20px;
}

.hero-content{
    max-width:900px;
}

.tagline{
    letter-spacing:5px;
    color:var(--bronze);
}

.hero h1{
    font-family:'Playfair Display',serif;
    font-size:6rem;
    margin:20px 0;
    color:var(--emerald);
    font-style:italic;
}

.hero h1 span{
    display:block;
    color:var(--bronze);
}

.hero p{
    font-size:1.2rem;
    line-height:1.8;
    max-width:700px;
    margin:auto;
}

/* BUTTON */

.btn{
    display:inline-block;
    margin-top:35px;
    padding:16px 40px;

    background:var(--emerald);
    color:white;

    text-decoration:none;
    border:none;

    border-radius:50px;
    cursor:pointer;

    transition:.4s;
}

.btn:hover{
    background:var(--bronze);
    transform:translateY(-3px);
}

/* SECTION */

.section{
    padding:120px 10%;
}

.section h2{
    text-align:center;
    font-size:4rem;
    margin-bottom:50px;

    font-family:'Playfair Display',serif;
    color:var(--emerald);
    font-style:italic;
}

/* SPLIT SECTION */

.split{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:60px;
    align-items:center;
}

.image-box img{
    width:100%;
    border-radius:25px;
}

.content-box span{
    color:var(--bronze);
    text-transform:uppercase;
    letter-spacing:3px;
}

.content-box h2{
    text-align:left;
    margin-top:15px;
    margin-bottom:20px;
}

/* CARDS */

.cards{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:30px;
}

.card{
    background:rgba(255,255,255,.7);

    backdrop-filter:blur(20px);

    padding:40px;

    border-radius:25px;

    transition:.4s;

    box-shadow:0 10px 30px rgba(0,0,0,.05);
}

.card:hover{
    transform:translateY(-10px);
}

.card h3{
    color:var(--emerald);
    margin-bottom:15px;
    font-family:'Playfair Display',serif;
}

/* GALLERY */

.gallery{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:20px;
}

.gallery img{
    width:100%;
    height:320px;
    object-fit:cover;
    border-radius:20px;
    transition:.5s;
}

.gallery img:hover{
    transform:scale(1.05);
}

/* FORM */

form{
    max-width:500px;
    margin:auto;
}

input{
    width:100%;
    padding:15px;
    margin-bottom:15px;

    border:1px solid #ddd;
    border-radius:12px;
}

/* FOOTER */

footer{
    background:var(--emerald);
    color:white;
    text-align:center;
    padding:40px;
}

/* REVEAL */

.reveal{
    opacity:0;
    transform:translateY(80px);
    transition:1s;
}

.reveal.active{
    opacity:1;
    transform:translateY(0);
}

@media(max-width:900px){

    .hero h1{
        font-size:4rem;
    }

    .split{
        grid-template-columns:1fr;
    }

    .nav-links{
        gap:15px;
    }
}