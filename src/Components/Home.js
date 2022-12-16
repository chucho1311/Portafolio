import Header from "../Common/header";
import foto from "../images/Foto.jpg"
import react from "../images/favicon.ico"

const Home = () => {

    return (
        <div className="container-fluid" style={{ backgroundColor: "black" }}>
            <Header />
            <div className="row" style={{ margin: "5px" }}>
                <div className="col-1">

                </div>
                <div className="col-10 col-lg-8" style={{ maxWidth: "1500px" }}>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img className="img-foto" src={foto} alt='mi foto'/>
                        </div>
                        <div className="col-12 col-md-6 text-start">
                            <h6 style={{ color: "red" }}>Hello Im Carlos</h6>
                            <label>Developer Front-End</label>
                            <h5 style={{ color: "white" }}>
                                My name is Carlos Cristancho. I'm a ReactJS developer based in Bucaramanga, Colombia, and I'm very passionate and dedicated to my work. With 1 year experience as a
                                Front End Developer, I have acquired the skills necessary to build great and premium websites.
                            </h5>
                        </div>
                    </div>

                </div>
                <div className="col-1">

                </div>
            </div>
            <div className="row centrar skills" style={{ padding: "5px" }}>
                <div className="col-6 col-sm-6">

                </div>
                <div className="col-6 col-sm-6">

                </div>
            </div>
            <div className="row centrar" style={{ marginTop: "-250px" }}>
                <div className="col-10 skill-box" style={{ maxWidth: "300px" }}>
                    <img src={react} alt="react" style={{padding:"5px"}}/>
                </div>
                <div className="col-10 skill-box" style={{ maxWidth: "300px" }}>
                    <i className="zmdi zmdi-language-javascript zmdi-hc-5x mdc-text-red"></i>

                </div>
                <div className="col-10 skill-box" style={{ maxWidth: "300px" }}>

                </div>
            </div>
            <div className="row centrar projects">
                <div className="col-4">

                </div>
            </div>
        </div>
    )
}

export default Home;