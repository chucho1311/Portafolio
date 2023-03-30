import Header from "../Common/header";
import foto from "../images/Foto.jpg"
import reactFavicon from "../images/favicon.ico"

const Home = () => {

    return (
        <div className="col-12 h-full" style={{ backgroundColor: "#2c2c2c" }}>
            <Header />
            <div className="row sm:h-full xl:h-96  centrar gap-x-10 " style={{ backgroundColor: "rgba(49,49,49,255)", paddingTop: "10px" }}>
                <div className="col-sm-10 col-md-5 col-lg-4 col-xl-3 grid content-center">
                    <div className="h-max-80 w-max-72" style={{ border: "solid #ffb633 10px" }}>
                        <div className="h-80 w-max-72 centrar" style={{ backgroundColor: "white", border: "solid #3e3e40 10px", marginTop: "-40px", marginLeft: "20px", overflow: "hidden" }}>
                            <img className="" src={foto} alt="perfil" />
                        </div>
                    </div>

                </div>
                <div className="col-sm-10 col-md-6 col-lg-5 centrar ">
                    <h2 className="text-5xl text-white">About Me</h2>
                    <hr className="text-white" />
                    <h4 className="text-gray-400 text-justify ">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </h4>
                </div>
            </div>

            {/* <div className="row centrar h-40" style={{ backgroundColor: "#2c2c2c" }}>
                <h2 className="col-sm-8 text-5xl text-white text-left" >Projects</h2>
                <hr className="col-11 col-sm-8 " style={{ color: "#ffb633" }} />
            </div>
            <a href="https://landingpage-2-0.netlify.app" target="_blank" className=" row h-1/6  centrar gap-x-10" style={{ backgroundColor: "#2c2c2c", margin: "10px 0px" }}>
                <div className="col-sm-8 col-md-7 col-lg-4 col-xl-3 h-max-96 w-max-72 centrar bg-[url('https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669_640.jpg')] bg-no-repeat bg-cover" style={{ backgroundColor: "white", borderRadius: "10px", padding: "10px" }}>
                    <div className="backdrop-blur-md" style={{ padding: "10px", borderRadius: "10px" }}>
                        <h3 className="text-black">Landing page</h3>
                        <img className="w-52" src="https://screenshot-proxy.netlify.app/f_jpg,w_204/https://d33wubrfki0l68.cloudfront.net/64224ec7b9ab9500081487e8/screenshot_2023-03-28-02-20-24-0000.png" alt="landing"/>
                    </div>
                </div>
            </a> */}

            <div className="row centrar h-40" style={{ backgroundColor: "#2c2c2c" }}>
                <h2 className="col-sm-8 text-5xl text-white text-left" >Services</h2>
                <hr className="col-11 col-sm-8 " style={{ color: "#ffb633" }} />
            </div>
            <div className=" row h-1/6  centrar gap-x-10" style={{ backgroundColor: "#2c2c2c", margin: "10px 0px" }}>
                <div className="col-sm-8 col-md-7 col-lg-5 col-xl-3 h-max-96 w-max-72 centrar bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwjZwhhePcwSvsGyH6keRe2lkU3iJWq_W6wXheJyuIOQv6msmepcpfwKB-xdjYhOWiFSs&usqp=CAU')] bg-no-repeat bg-cover" style={{ backgroundColor: "white", borderRadius: "10px", padding: "10px" }}>
                    <div className="backdrop-blur-md" style={{ padding: "20px", borderRadius: "10px" }}>
                        <i className="zmdi zmdi-devices zmdi-hc-4x text-white"></i>
                        <h3 className="text-white">Web Delopment</h3>
                        <h5 className="text-slate-50 text-justify ">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iru"
                        </h5>
                    </div>
                </div>
            </div>

            <div className="row centrar h-40" style={{ backgroundColor: "#2c2c2c" }}>
                <h2 className="col-sm-8 text-5xl text-white text-left" >Projects</h2>
                <hr className="col-11 col-sm-8" style={{ color: "#ffb633" }} />
            </div>
            <div className="row centrar my-10" style={{ backgroundColor: "#2c2c2c" }}>
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="container " style={{ margin: "10px" }}>
                        <div className="profile-container" style={{ background: `url("https://previews.123rf.com/images/zhogolevpv/zhogolevpv1705/zhogolevpv170500002/77974836-un-logotipo-de-club-de-ajedrez-en-blanco-y-negro-vector-para-su-dise%C3%B1o-de-diferentes-tipos-de.jpg") no-repeat center center/cover` }}>
                            <div className="profile-wrapper effect-wrap">
                                <img
                                    src={reactFavicon}
                                    width="27"
                                    height="26"
                                    alt="shape"
                                    className="shape shape-1"
                                />
                                <div className="profile-card">
                                    <img src="https://screenshot-proxy.netlify.app/f_jpg,w_204/https://d33wubrfki0l68.cloudfront.net/64224ec7b9ab9500081487e8/screenshot_2023-03-28-02-20-24-0000.png" alt="profile pics" />

                                    <h2>Landing Page</h2>
                                    <h4>Frontend Developer</h4>

                                    {/* <p>
                                    With my expertise in Frontend, I can help you to create a stunning
                                    website that truly represents your brand and engages your
                                    audience.
                                </p> */}

                                    {/* <div className="icons">
                                    <i className="bx bxl-facebook"></i>
                                    <i className="bx bxl-twitter"></i>
                                    <i className="bx bxl-instagram"></i>
                                    <i className="bx bxl-linkedin"></i>
                                    <i className="bx bx-globe"></i>
                                </div> */}

                                    <a href="https://landingpage-2-0.netlify.app" rel="noreferrer" target="_blank">Click Me</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="container " style={{ margin: "10px" }}>
                        <div className="profile-container" style={{ background: `url("https://previews.123rf.com/images/zhogolevpv/zhogolevpv1705/zhogolevpv170500002/77974836-un-logotipo-de-club-de-ajedrez-en-blanco-y-negro-vector-para-su-dise%C3%B1o-de-diferentes-tipos-de.jpg") no-repeat center center/cover` }}>
                            <div className="profile-wrapper effect-wrap">
                                <img
                                    src={reactFavicon}
                                    width="27"
                                    height="26"
                                    alt="shape"
                                    className="shape shape-1"
                                />
                                <div className="profile-card">
                                    <img src="https://screenshot-proxy.netlify.app/f_jpg,w_204/https://d33wubrfki0l68.cloudfront.net/64224ec7b9ab9500081487e8/screenshot_2023-03-28-02-20-24-0000.png" alt="profile pics" />

                                    <h2>Landing Page</h2>
                                    <h4>Frontend Developer</h4>

                                    {/* <p>
                                    With my expertise in Frontend, I can help you to create a stunning
                                    website that truly represents your brand and engages your
                                    audience.
                                </p> */}

                                    {/* <div className="icons">
                                    <i className="bx bxl-facebook"></i>
                                    <i className="bx bxl-twitter"></i>
                                    <i className="bx bxl-instagram"></i>
                                    <i className="bx bxl-linkedin"></i>
                                    <i className="bx bx-globe"></i>
                                </div> */}

                                    <a href="https://landingpage-2-0.netlify.app" rel="noreferrer" target="_blank">Click Me</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;