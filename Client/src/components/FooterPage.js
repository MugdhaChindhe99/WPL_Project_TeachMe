import React,{Component} from 'react';

class FooterPage extends Component{
    render (){
        return(
            <footer class="social-footer text-white-50">
        <div class="social-footer-icons">
            <a href="https://www.facebook.com/"><i class="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="https://www.instagram.com/?hl=en"><i class="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="https://twitter.com/?lang=en"><i class="fa fa-twitter" aria-hidden="true"></i></a>
        </div>
        <div class="footer-copyright text-right">© 2020 Copyright:
            <a href="#" class="text-white-50"> TeachMe.com</a>
          </div>
    </footer>
        );
    }
}

export default FooterPage;