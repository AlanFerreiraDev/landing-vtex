import './styles.css';

import wpp from './assets/wpp.png';
import social from './assets/social.svg';

export default function Footer() {
  return (
    <footer class="foot">
        <img id="wpp" src={wpp} alt="" />
        <img id="social" src={social} alt="" /> 
    </footer>

  )
}