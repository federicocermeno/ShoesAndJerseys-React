import React from "react"

const Footer = () =>
 <footer className="page-footer font-small blue pt-4 footer-real" style={{backgroundColor:'#f1f2f3', marginTop:'8em'}}>
    <div className="container-fluid text-center text-md-left ">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">React Shop</h5>
                <p>Made by Federico Cermeño.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                 
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 Copyright:
        <a href="https://www.linkedin.com/in/federicocermeno/" target={"_blank"}>LINKEDIN</a>
    </div>

</footer>

export default Footer
