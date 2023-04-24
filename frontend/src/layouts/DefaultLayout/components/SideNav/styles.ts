import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 40px 30px;
    min-height: calc(100vh - 60px);

    h1 {
        font-weight: 800;
        font-size: 10px;
        line-height: 12px;
        display: flex;
        align-items: center;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        margin-left: 20px;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 20px;

        li {
            border-radius: 15px;

            svg {
                transform: scale(1.4);
                fill: ${({ theme }) => theme.colors.primary};
            }

            a { 
                display: flex;
                flex-direction: row;
                gap: 20px;
                padding: 16px;
                font-weight: 700;
                font-size: 14px;
                line-height: 18px;
                color: ${({ theme }) => theme.colors.primary};
                min-width: 239px;
            }
        }

        li.active {
            background-color: ${({ theme }) => theme.colors.primary};

            svg {
                fill: ${({ theme }) => theme.colors.White};
            }

            a {
                color: ${({ theme }) => theme.colors.White};
            }
        }
    }
`