import { createGlobalStyle } from 'styled-components'
import Colors from 'constants/Colors'
const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        vertical-align: baseline;
        line-height: inherit;
    }
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    #root{
        width:100%;
        height:100%;
    }
    body {
        line-height: 1;
    }
    body,html {
        height: 100%;
        font-size: 16px;
        font-family: inherit;
        color:#000;
        @media (max-width:1199px) {
            font-size:14px;
        }
    }
    ol, ul, li {
        list-style: none;
    } 
    span, p, label{
        line-height:1.5;
        font-size:1rem;
        color:#fff;
        display:block;
    }
    div{
        display:block;
    }
    a{
        color:orange;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    *:focus {
        outline: none;
    }
    ::-webkit-scrollbar {
        width: 5px;
        position:relative;
        z-index:1;
        /* border-left:solid 1px #1A2C38; */
        border-radius:1.5px;
        @media (max-width:767px){
            width:3px;
        }
    }
    ::-webkit-scrollbar-track {
        background:rgba(0, 0, 0, 0.2);
        border-radius:1.5px;
    }
    ::-webkit-scrollbar-thumb {
        background: orange;
        border-radius:1.5px;
    }
    .grecaptcha-badge {
        display: none !important
    }
    button {
        cursor: pointer;
    }
    img {
        max-width: 100%;
    }
    textarea, input {
        /* font-family: 'Google Sans'; */
    }
    a {
        text-decoration: none;
    }
    .hidden {
        display: none;
    }
    .disable {
        cursor: not-allowed !important;
        opacity: 0.4;
    }
    .text-danger {
        color: red;
    }
    .uppercase {
        text-transform: uppercase;
    }
    h1,h2,h4,h5,h6{
        color:${Colors.white};
    }
    h1{
        line-height: 1.5;
        font-weight: 700;
        font-size: 4rem;
    }
    h2{
        font-size:1.5rem;
        line-height:1.5;
        font-weight:700;
    }
    h3{
        font-weight: 600;
        font-size: 1.2rem;
        line-height:1.5;
    }
    button {
        transition: all 0.3s;
        &.save-change {
            background: #3ca2fa;
            border: none;
            border-radius: 5px;
            padding: 10px 20px;
            color: #fff;
            font-weight: bold;
            cursor: pointer;
            @media (min-width: 992px) and (max-width: 1199px) {
                padding: 7px 20px;
            }
            @media (max-width: 991px) {
                padding: 5px 15px;
            }
            &:disabled {
                background: #bbdfff;
                cursor: not-allowed;
            }
            &:hover {
                background: #5e8db7;
                color: #bbdfff;
            }
        }
    }
    input{
        transition: all 0.3s;
        height:40px;
        line-height:40px;
        font-size:1rem;
        border:solid 1px #000;
        border-radius:5px;
        padding:0 1rem;
        width:calc(100% - 2rem);
        &:focus{
            border-color: greenyellow;
            &.error_border{
                border-color:red;
            }
        }
        &::-webkit-outer-spin-button,&::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        &::placeholder{
            color:#c7c7c7;
            font-size:0.8rem;
        }
        &[type=number] {
            -moz-appearance: textfield;
        }
    }
    .error{
        color:#ff0000;
    }
    .problem{
        border:solid 2px red;
    }
    .balance{
        margin-bottom:1rem;
    }
    .get-balance{
        padding:1rem;
        border: solid 1px orange;
        margin-bottom:2rem;
        width:80%;
        text-align:center;
        img{
            width:80px;
        }
        label{
            text-align:left;
            font-size:0.8rem;
        }
        input{
            margin-bottom:1rem;
        }
    }
    .get-balance-trx{
        padding:1rem;
        border: solid 1px white;
        margin-bottom:2rem;
        width:80%;
        text-align:center;
        img{
            width:80px;
        }
        label{
            text-align:left;
            font-size:0.8rem;
        }
        input{
            margin-bottom:1rem;
        }
    }
    .send-balance{
        padding:1rem;
        border: solid 1px green;
        margin-bottom:2rem;
        width:80%;
        text-align:center;
        img{
            width:80px;
        }
        label{
            text-align:left;
            font-size:0.8rem;
        }
        input{
            margin-bottom:1rem;
        }
    }
    .form_body{
        .form_input{
            margin-bottom:1rem;
            span{
                display:block;
                color:#000;
                font-size:0.9rem;
                font-weight:600
            }
            input{
                border: solid 2px rgba(128,163,182,0.22);
                border-radius:4px;
                padding:0 0.8rem;
                height:40px;
                transition: border 0.25s ease 0s, box-shadow 0.25s ease 0s;
                &:focus{
                    border-color: #000;
                }
            }
        }
    }
    button{
        transition: all 0.25s;
        border:none;
        color:${Colors.white};
        font-size:1rem;
        height: 40px;
        line-height: 40px;
        background-color:orangered;
        font-size:1rem;
        cursor:pointer;
        border-radius:5px;
        &:disabled {
            opacity:.4;
            pointer-events:none;
        }
        &:hover {
            background: orange;
        }
    }
`
export default GlobalStyle;