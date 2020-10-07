"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var Colors_1 = require("constants/Colors");
var GlobalStyle = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    html, body, div, span, applet, object, iframe,\n    h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n    a, abbr, acronym, address, big, cite, code,\n    del, dfn, em, img, ins, kbd, q, s, samp,\n    small, strike, strong, sub, sup, tt, var,\n    b, u, i, center,\n    dl, dt, dd, ol, ul, li,\n    fieldset, form, label, legend,\n    table, caption, tbody, tfoot, thead, tr, th, td,\n    article, aside, canvas, details, embed, \n    figure, figcaption, footer, header, hgroup, \n    menu, nav, output, ruby, section, summary,\n    time, mark, audio, video{\n        margin: 0;\n        padding: 0;\n        border: 0;\n        font-size: 100%;\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n        sans-serif;\n        vertical-align: baseline;\n        line-height: inherit;\n    }\n    article, aside, details, figcaption, figure, \n    footer, header, hgroup, menu, nav, section {\n        display: block;\n    }\n    #root{\n        width:100%;\n        height:100%;\n    }\n    body {\n        line-height: 1;\n    }\n    body,html {\n        height: 100%;\n        font-size: 16px;\n        font-family: inherit;\n        color:#000;\n        @media (max-width:1199px) {\n            font-size:14px;\n        }\n    }\n    ol, ul, li {\n        list-style: none;\n    } \n    span, p, label{\n        line-height:1.5;\n        font-size:1rem;\n        color:#fff;\n        display:block;\n    }\n    div{\n        display:block;\n    }\n    a{\n        color:orange;\n    }\n    blockquote, q {\n        quotes: none;\n    }\n    blockquote:before, blockquote:after,\n    q:before, q:after {\n        content: '';\n        content: none;\n    }\n    table {\n        border-collapse: collapse;\n        border-spacing: 0;\n    }\n    *:focus {\n        outline: none;\n    }\n    ::-webkit-scrollbar {\n        width: 5px;\n        position:relative;\n        z-index:1;\n        /* border-left:solid 1px #1A2C38; */\n        border-radius:1.5px;\n        @media (max-width:767px){\n            width:3px;\n        }\n    }\n    ::-webkit-scrollbar-track {\n        background:rgba(0, 0, 0, 0.2);\n        border-radius:1.5px;\n    }\n    ::-webkit-scrollbar-thumb {\n        background: orange;\n        border-radius:1.5px;\n    }\n    .grecaptcha-badge {\n        display: none !important\n    }\n    button {\n        cursor: pointer;\n    }\n    img {\n        max-width: 100%;\n    }\n    textarea, input {\n        /* font-family: 'Google Sans'; */\n    }\n    a {\n        text-decoration: none;\n    }\n    .hidden {\n        display: none;\n    }\n    .disable {\n        cursor: not-allowed !important;\n        opacity: 0.4;\n    }\n    .text-danger {\n        color: red;\n    }\n    .uppercase {\n        text-transform: uppercase;\n    }\n    h1,h2,h4,h5,h6{\n        color:", ";\n    }\n    h1{\n        line-height: 1.5;\n        font-weight: 700;\n        font-size: 4rem;\n    }\n    h2{\n        font-size:1.5rem;\n        line-height:1.5;\n        font-weight:700;\n    }\n    h3{\n        font-weight: 600;\n        font-size: 1.2rem;\n        line-height:1.5;\n    }\n    button {\n        transition: all 0.3s;\n        &.save-change {\n            background: #3ca2fa;\n            border: none;\n            border-radius: 5px;\n            padding: 10px 20px;\n            color: #fff;\n            font-weight: bold;\n            cursor: pointer;\n            @media (min-width: 992px) and (max-width: 1199px) {\n                padding: 7px 20px;\n            }\n            @media (max-width: 991px) {\n                padding: 5px 15px;\n            }\n            &:disabled {\n                background: #bbdfff;\n                cursor: not-allowed;\n            }\n            &:hover {\n                background: #5e8db7;\n                color: #bbdfff;\n            }\n        }\n    }\n    input{\n        transition: all 0.3s;\n        height:40px;\n        line-height:40px;\n        font-size:1rem;\n        border:solid 1px #000;\n        border-radius:5px;\n        padding:0 1rem;\n        width:calc(100% - 2rem);\n        &:focus{\n            border-color: greenyellow;\n            &.error_border{\n                border-color:red;\n            }\n        }\n        &::-webkit-outer-spin-button,&::-webkit-inner-spin-button {\n            -webkit-appearance: none;\n            margin: 0;\n        }\n        &::placeholder{\n            color:#c7c7c7;\n            font-size:0.8rem;\n        }\n        &[type=number] {\n            -moz-appearance: textfield;\n        }\n    }\n    .error{\n        color:#ff0000;\n    }\n    .success{\n        color:yellowgreen;\n    }\n    .problem{\n        border:solid 2px red;\n    }\n    .balance{\n        margin-bottom:1rem;\n    }\n    .balance{\n        display:flex;\n        justify-content:space-between;\n        width:80%;\n        >div{\n            width:45%;\n        }\n        .get-balance{\n            padding:1rem;\n            border: solid 1px orange;\n            margin-bottom:2rem;\n            text-align:center;\n            img{\n                width:80px;\n            }\n            label{\n                text-align:left;\n                font-size:0.8rem;\n            }\n            input{\n                margin-bottom:1rem;\n            }\n        }\n        .get-balance-trx{\n            padding:1rem;\n            border: solid 1px white;\n            margin-bottom:2rem;\n            text-align:center;\n            img{\n                width:80px;\n            }\n            label{\n                text-align:left;\n                font-size:0.8rem;\n            }\n            input{\n                margin-bottom:1rem;\n            }\n        }\n    }\n    .action{\n        display:flex;\n        justify-content:space-between;\n        width:80%;\n        >div{\n            width:45%;\n        }\n        .send-balance{\n            padding:1rem;\n            border: solid 1px green;\n            margin-bottom:2rem;\n            text-align:center;\n            img{\n                width:80px;\n            }\n            label{\n                text-align:left;\n                font-size:0.8rem;\n            }\n            input{\n                margin-bottom:1rem;\n            }\n        }\n        .unwrap{\n            padding:1rem;\n            border: solid 1px yellow;\n            margin-bottom:2rem;\n            text-align:center;\n            img{\n                width:80px;\n            }\n            label{\n                text-align:left;\n                font-size:0.8rem;\n            }\n            input{\n                margin-bottom:1rem;\n            }\n        }\n    }\n    .form_body{\n        .form_input{\n            margin-bottom:1rem;\n            span{\n                display:block;\n                color:#000;\n                font-size:0.9rem;\n                font-weight:600\n            }\n            input{\n                border: solid 2px rgba(128,163,182,0.22);\n                border-radius:4px;\n                padding:0 0.8rem;\n                height:40px;\n                transition: border 0.25s ease 0s, box-shadow 0.25s ease 0s;\n                &:focus{\n                    border-color: #000;\n                }\n            }\n        }\n    }\n    button{\n        transition: all 0.25s;\n        border:none;\n        color:", ";\n        font-size:1rem;\n        height: 40px;\n        line-height: 40px;\n        background-color:orangered;\n        font-size:1rem;\n        cursor:pointer;\n        border-radius:5px;\n        &:disabled {\n            opacity:.4;\n            pointer-events:none;\n        }\n        &:hover {\n            background: orange;\n        }\n    }\n"], ["\n    html, body, div, span, applet, object, iframe,\n    h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n    a, abbr, acronym, address, big, cite, code,\n    del, dfn, em, img, ins, kbd, q, s, samp,\n    small, strike, strong, sub, sup, tt, var,\n    b, u, i, center,\n    dl, dt, dd, ol, ul, li,\n    fieldset, form, label, legend,\n    table, caption, tbody, tfoot, thead, tr, th, td,\n    article, aside, canvas, details, embed, \n    figure, figcaption, footer, header, hgroup, \n    menu, nav, output, ruby, section, summary,\n    time, mark, audio, video{\n        margin: 0;\n        padding: 0;\n        border: 0;\n        font-size: 100%;\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n        sans-serif;\n        vertical-align: baseline;\n        line-height: inherit;\n    }\n    article, aside, details, figcaption, figure, \n    footer, header, hgroup, menu, nav, section {\n        display: block;\n    }\n    #root{\n        width:100%;\n        height:100%;\n    }\n    body {\n        line-height: 1;\n    }\n    body,html {\n        height: 100%;\n        font-size: 16px;\n        font-family: inherit;\n        color:#000;\n        @media (max-width:1199px) {\n            font-size:14px;\n        }\n    }\n    ol, ul, li {\n        list-style: none;\n    } \n    span, p, label{\n        line-height:1.5;\n        font-size:1rem;\n        color:#fff;\n        display:block;\n    }\n    div{\n        display:block;\n    }\n    a{\n        color:orange;\n    }\n    blockquote, q {\n        quotes: none;\n    }\n    blockquote:before, blockquote:after,\n    q:before, q:after {\n        content: '';\n        content: none;\n    }\n    table {\n        border-collapse: collapse;\n        border-spacing: 0;\n    }\n    *:focus {\n        outline: none;\n    }\n    ::-webkit-scrollbar {\n        width: 5px;\n        position:relative;\n        z-index:1;\n        /* border-left:solid 1px #1A2C38; */\n        border-radius:1.5px;\n        @media (max-width:767px){\n            width:3px;\n        }\n    }\n    ::-webkit-scrollbar-track {\n        background:rgba(0, 0, 0, 0.2);\n        border-radius:1.5px;\n    }\n    ::-webkit-scrollbar-thumb {\n        background: orange;\n        border-radius:1.5px;\n    }\n    .grecaptcha-badge {\n        display: none !important\n    }\n    button {\n        cursor: pointer;\n    }\n    img {\n        max-width: 100%;\n    }\n    textarea, input {\n        /* font-family: 'Google Sans'; */\n    }\n    a {\n        text-decoration: none;\n    }\n    .hidden {\n        display: none;\n    }\n    .disable {\n        cursor: not-allowed !important;\n        opacity: 0.4;\n    }\n    .text-danger {\n        color: red;\n    }\n    .uppercase {\n        text-transform: uppercase;\n    }\n    h1,h2,h4,h5,h6{\n        color:", ";\n    }\n    h1{\n        line-height: 1.5;\n        font-weight: 700;\n        font-size: 4rem;\n    }\n    h2{\n        font-size:1.5rem;\n        line-height:1.5;\n        font-weight:700;\n    }\n    h3{\n        font-weight: 600;\n        font-size: 1.2rem;\n        line-height:1.5;\n    }\n    button {\n        transition: all 0.3s;\n        &.save-change {\n            background: #3ca2fa;\n            border: none;\n            border-radius: 5px;\n            padding: 10px 20px;\n            color: #fff;\n            font-weight: bold;\n            cursor: pointer;\n            @media (min-width: 992px) and (max-width: 1199px) {\n                padding: 7px 20px;\n            }\n            @media (max-width: 991px) {\n                padding: 5px 15px;\n            }\n            &:disabled {\n                background: #bbdfff;\n                cursor: not-allowed;\n            }\n            &:hover {\n                background: #5e8db7;\n                color: #bbdfff;\n            }\n        }\n    }\n    input{\n        transition: all 0.3s;\n        height:40px;\n        line-height:40px;\n        font-size:1rem;\n        border:solid 1px #000;\n        border-radius:5px;\n        padding:0 1rem;\n        width:calc(100% - 2rem);\n        &:focus{\n            border-color: greenyellow;\n            &.error_border{\n                border-color:red;\n            }\n        }\n        &::-webkit-outer-spin-button,&::-webkit-inner-spin-button {\n            -webkit-appearance: none;\n            margin: 0;\n        }\n        &::placeholder{\n            color:#c7c7c7;\n            font-size:0.8rem;\n        }\n        &[type=number] {\n            -moz-appearance: textfield;\n        }\n    }\n    .error{\n        color:#ff0000;\n    }\n    .success{\n        color:yellowgreen;\n    }\n    .problem{\n        border:solid 2px red;\n    }\n    .balance{\n        margin-bottom:1rem;\n    }\n    .balance{\n        display:flex;\n        justify-content:space-between;\n        width:80%;\n        >div{\n            width:45%;\n        }\n        .get-balance{\n            padding:1rem;\n            border: solid 1px orange;\n            margin-bottom:2rem;\n            text-align:center;\n            img{\n                width:80px;\n            }\n            label{\n                text-align:left;\n                font-size:0.8rem;\n            }\n            input{\n                margin-bottom:1rem;\n            }\n        }\n        .get-balance-trx{\n            padding:1rem;\n            border: solid 1px white;\n            margin-bottom:2rem;\n            text-align:center;\n            img{\n                width:80px;\n            }\n            label{\n                text-align:left;\n                font-size:0.8rem;\n            }\n            input{\n                margin-bottom:1rem;\n            }\n        }\n    }\n    .action{\n        display:flex;\n        justify-content:space-between;\n        width:80%;\n        >div{\n            width:45%;\n        }\n        .send-balance{\n            padding:1rem;\n            border: solid 1px green;\n            margin-bottom:2rem;\n            text-align:center;\n            img{\n                width:80px;\n            }\n            label{\n                text-align:left;\n                font-size:0.8rem;\n            }\n            input{\n                margin-bottom:1rem;\n            }\n        }\n        .unwrap{\n            padding:1rem;\n            border: solid 1px yellow;\n            margin-bottom:2rem;\n            text-align:center;\n            img{\n                width:80px;\n            }\n            label{\n                text-align:left;\n                font-size:0.8rem;\n            }\n            input{\n                margin-bottom:1rem;\n            }\n        }\n    }\n    .form_body{\n        .form_input{\n            margin-bottom:1rem;\n            span{\n                display:block;\n                color:#000;\n                font-size:0.9rem;\n                font-weight:600\n            }\n            input{\n                border: solid 2px rgba(128,163,182,0.22);\n                border-radius:4px;\n                padding:0 0.8rem;\n                height:40px;\n                transition: border 0.25s ease 0s, box-shadow 0.25s ease 0s;\n                &:focus{\n                    border-color: #000;\n                }\n            }\n        }\n    }\n    button{\n        transition: all 0.25s;\n        border:none;\n        color:", ";\n        font-size:1rem;\n        height: 40px;\n        line-height: 40px;\n        background-color:orangered;\n        font-size:1rem;\n        cursor:pointer;\n        border-radius:5px;\n        &:disabled {\n            opacity:.4;\n            pointer-events:none;\n        }\n        &:hover {\n            background: orange;\n        }\n    }\n"])), Colors_1["default"].white, Colors_1["default"].white);
exports["default"] = GlobalStyle;
var templateObject_1;