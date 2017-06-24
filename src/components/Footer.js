import React from 'react';
import {NavLink} from 'react-router-dom';

class Footer extends React.Component{
  render(){
    return (
      <footer>
        <NavLink exact activeClassName='click' to='/'>
          <svg viewBox="0 0 1024 1024" >
            <path d="M1024 590.432l-512-397.44-512 397.44 0-162.048 512-397.44 512 397.44zM896 576l0 384-256 0 0-256-256 0 0 256-256 0 0-384 384-288z"  fill="#ffffff"></path>
          </svg>
          Home
        </NavLink>
        <NavLink activeClassName='click' to='/Blog'>
          <svg viewBox="0 0 1163 1024" version="1.1" >
            <path d="M146.455182 518.108508c-33.638859 33.638859-34.115409 87.769389-1.023182 120.875634L505.00337 998.583543c33.148292 33.148292 87.306855 32.671742 120.95973-1.023182l536.609881-536.623897 0.756874-459.030262L664.549674 0 146.455182 518.108508z m716.788019-304.796094a84.755908 84.755908 0 1 1 84.755908 84.755908 84.769924 84.769924 0 0 1-84.755908-84.755908zM25.579549 519.13169c-33.638859 33.638859-34.157458 87.769389-1.065231 120.917682l359.655467 359.585386c24.332108 24.290059 59.933234 30.303005 90.488531 18.557437a83.928953 83.928953 0 0 1-30.050714-19.118085L85.050248 639.488724c-33.148292-33.148292-32.71379-87.222758 0.981134-120.917681l520.000694-517.337618L543.688057 1.023182 25.579549 519.13169z" fill="#ffffff"></path>
          </svg>
        Blog
        </NavLink>
        <NavLink activeClassName='click' to='/Work'>
        <svg viewBox="0 0 1024 1024" version="1.1" >
          <path d="M740.714667 507.221333c-41.6 0-80.661333-16.213333-110.08-45.653333l-54.741333-54.698667c-29.376-29.418667-45.568-68.48-45.568-110.08s16.192-80.661333 45.568-110.08l54.741333-54.698667c29.418667-29.418667 68.48-45.589333 110.08-45.589333 41.578667 0 80.661333 16.149333 110.037333 45.589333l54.741333 54.698667c29.418667 29.418667 45.610667 68.48 45.610667 110.08s-16.192 80.661333-45.610667 110.08l-54.741333 54.698667C821.376 491.008 782.293333 507.221333 740.714667 507.221333L740.714667 507.221333zM321.066667 491.178667l-77.376 0c-85.845333 0-155.669333-69.866667-155.669333-155.690667l0-77.397333c0-85.824 69.824-155.690667 155.669333-155.690667l77.376 0c85.824 0 155.669333 69.845333 155.669333 155.690667l0 77.397333C476.736 421.333333 406.890667 491.178667 321.066667 491.178667L321.066667 491.178667zM779.370667 939.776l-77.376 0c-85.824 0-155.669333-69.845333-155.669333-155.690667l0-77.397333c0-85.824 69.824-155.690667 155.669333-155.690667l77.376 0c85.824 0 155.669333 69.845333 155.669333 155.690667l0 77.397333C935.04 869.909333 865.216 939.776 779.370667 939.776L779.370667 939.776zM321.066667 939.776l-77.376 0c-85.845333 0-155.669333-69.845333-155.669333-155.690667l0-77.397333c0-85.824 69.824-155.690667 155.669333-155.690667l77.376 0c85.824 0 155.669333 69.845333 155.669333 155.690667l0 77.397333C476.736 869.909333 406.890667 939.776 321.066667 939.776L321.066667 939.776zM243.669333 583.701333"  fill="#ffffff"></path>
        </svg>
          Work
        </NavLink>
        <NavLink activeClassName='click' to='/About'>
        <svg viewBox="0 0 1025 1024" version="1.1">
        <path d="M960.024023 1018.106772 960.024023 1024 64.017731 1024 64.017731 1018.106772C26.785971 1004.889677 0 969.758244 0 928.015923 0 852.661647 96.024842 800.030536 96.024842 800.030536L384.009375 639.988895 384.009375 573.472118C307.537812 529.186432 256.021837 446.688282 256.021837 352.003942L256.021837 256.022205C256.021837 114.596475 370.616975 0 511.998085 0 653.379195 0 768.017582 114.595308 768.017582 256.022205L768.017582 352.003942C768.017582 446.688287 716.458358 529.186432 639.986796 573.472118L639.986796 639.988895 928.014572 800.030536C928.014572 800.030536 1023.504092 855.11852 1023.997338 928.015923 1024.309412 969.716168 997.165783 1004.890849 960.024023 1018.106772Z" fill="#ffffff"></path>
        </svg>

        About
        </NavLink>
      </footer>
    )
  }
}
export default Footer
