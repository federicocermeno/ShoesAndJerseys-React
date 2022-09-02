import './Footer.css'

const Footer = () =>
 <footer className="page-footer font-small blue pt-4 footer-real" style={{backgroundColor:'rgb(5 240 5 / 18%)', marginTop:'8em'}}>
    <div className="container-fluid text-center text-md-left ">
        <div className="row">
            <div className="col-4" id='col4'>
                <h5 className="text-uppercase">React Shop</h5>
                <p>Made by Federico Cermeño.</p>
                <h6>
                    <a 
                        href="https://github.com/federicocermeno/E-Commerce__React" 
                        target={"_blank"} 
                        className='href-t-none'>
                        <strong>Github de proyecto</strong>
                    </a>
                </h6>
            </div>
            <hr className="clearfix w-100 d-md-none pb-0"/>
            <div className="col-2">
            </div>
            <div className="col-6" id='col6'>
                <h5>
                    <a 
                        href="https://www.linkedin.com/in/federicocermeno/"
                        target={"_blank"}
                        className='href-t-none'>Linkedin</a></h5>
                <h5>
                    <a 
                        href="https://github.com/federicocermeno"
                        target={"_blank"}
                        className='href-t-none'>Github</a></h5>
            </div>

        </div>
    </div>

    <div className="footer-copyright text-center py-3">
       <p> © 2022 </p>
    </div>

</footer>

export default Footer
