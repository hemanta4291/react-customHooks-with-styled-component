import styled from "styled-components";

export const UserListTop = styled.div``


export const UserListWrapper = styled.div`
    padding: 80px 0;
    max-width:1400px;
    width: 100%;
    margin: 0 auto;
    


    ${UserListTop}{
        display: flex; 
        justify-content: space-between;
        padding: 0 0 40px 0;
        
        & input{
            {
            border: 1px solid ${({theme})=>theme.color.border};
            font-size: ${({theme})=>theme.fontSize.fs_16};
            height: 40px;
            border-radius: 6px;
            padding: 16px;
            max-width: 400px;
            width: 100%;

            &:focus{
                outline: 0;
            }
        }
        }
    }

    & .rdt_Table{
        border: 1px solid ${({theme})=>theme.color.border};
        border-bottom:0;
        border-radius: 6px;
        font-family: ${({theme})=>theme.fontFamily.Lato};
        

        & .rdt_TableHeadRow{
            background-color: ${({theme})=>theme.color.ghost_white};
            font-size: ${({theme})=>theme.fontSize.fs_16};
            font-weight: ${({theme})=>theme.fontWeight.fw_600};
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
        }

        & .rdt_TableRow{
            font-size: ${({theme})=>theme.fontSize.fs_16};
            font-weight: ${({theme})=>theme.fontWeight.fw_500};
            border-radius: 6px;
            transition: all linear 0.3s;

            &:hover{
                background: ${({theme})=>theme.color.gray_4};
            }

        }
        
    }
    

`


export const Company = styled.div`
    padding: 16px 0;
    line-height:${({theme})=>theme.lineHeight.lh_28};

    & span{
        display: inline-flex;
        font-weight: ${({theme})=>theme.fontWeight.fw_600};
    }
`