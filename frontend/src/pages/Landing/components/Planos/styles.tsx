import styled from "styled-components"


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const PlanosContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 200px;
    background-color: white;
    height: 200px;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    width: 300px;
    height: 500px;
`;


export const TextPlans = styled.span`
`;

export const TitlePlans = styled.h2`
    margin-top: 20px;
    font-size: 40px;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
`;

export const Giga = styled.h2`
    font-size: 20px;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
`;

export const DescriptionContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
`;

export const DescriptionText = styled.span`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary};
`;



export const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 200px;
`;

export const PricesContainer = styled.div`
    display:flex;
    justify-content: center;
    margin-top: 10px;
`;
export const PricesText = styled.p`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.primaryLigth};
`;

export const PricesCents = styled.p`
    font-size: 10px;
    margin-left: 4px;
    color: ${({ theme }) => theme.colors.primaryLigth};
`;

export const PriceSizeSimbol = styled.p`
    font-size: 10px;
    margin-top: 12px;
    color: ${({ theme }) => theme.colors.primaryLigth};
`;

export const PriceCentsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 14px;
`;

export const PriceText = styled.p`
    font-size: 10px;
    text-align: center;
    margin-top: -14px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.primaryLigth};
`;


export const PriceLink = styled.a`
    text-align: center;
    margin-bottom: 40px;
`;