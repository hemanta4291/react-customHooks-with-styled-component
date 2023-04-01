import {createGlobalStyle} from "styled-components";


const GlobalStyled = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
}
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');




body{
  font-family: ${({theme})=>theme.fontFamily.Lato};
  line-height: ${({theme})=>theme.lineHeight.lh_28};
    
}

h2{
    font-size: ${({theme})=>theme.fontSize.fs_32};
    font-weight: ${({theme})=>theme.fontWeight.fw_700};
    color: ${({theme})=>theme.color.text_primary};
    line-height: ${({theme})=>theme.lineHeight.lh_34};
}

h3{
    font-size: ${({theme})=>theme.fontSize.fs_28};
    font-weight: ${({theme})=>theme.fontWeight.fw_700};
    color: ${({theme})=>theme.color.text_primary};
    line-height: ${({theme})=>theme.lineHeight.lh_32};
}
h4{
    font-size: ${({theme})=>theme.fontSize.fs_24};
    font-weight: ${({theme})=>theme.fontWeight.fw_700};
    color: ${({theme})=>theme.color.text_primary};
    line-height: ${({theme})=>theme.lineHeight.lh_30};
}
h5{
    font-size: ${({theme})=>theme.fontSize.fs_20};
    font-weight: ${({theme})=>theme.fontWeight.fw_700};
    color: ${({theme})=>theme.color.text_primary};
    line-height: ${({theme})=>theme.lineHeight.lh_20};
}
h6{
    font-size: ${({theme})=>theme.fontSize.fs_20};
    font-weight: ${({theme})=>theme.fontWeight.fw_700};
    color: ${({theme})=>theme.color.text_primary};
    line-height: ${({theme})=>theme.lineHeight.lh_24};
}



ol,
ul {
    list-style: none;
    margin-bottom: 0 !important;
}

a,
a:hover,
a:focus {
    text-decoration: none;
    outline: 0;
}

`

export default GlobalStyled;