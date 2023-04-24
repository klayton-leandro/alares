import { BiWifi, BiBadgeCheck, BiUpload, BiDownload, BiCategory } from 'react-icons/bi'

import {
    Container,
    PlanosContainer,
    TitlePlans,
    Giga,
    DescriptionContainer,
    DescriptionText,
    PricesContainer,
    PricesText,
    PriceSizeSimbol,
    PricesCents,
    PriceCentsContainer,
    PriceText,
    PriceLink
} from "./styles";
import theme from 'styles/theme';
import { Button } from 'components';


const plans = [
    {plan: 1, icon: "", details: [
        {text: "", icon: ""}
    ]}
]

export function Planos() { 
    return (
        <Container>
            <PlanosContainer>
                <TitlePlans>2</TitlePlans>
                <Giga>Giga</Giga>
                <DescriptionContainer>
                    <BiWifi color={theme.colors.primaryLigth} />
                    <DescriptionText>Super WI-FI 6</DescriptionText>
                </DescriptionContainer>
                <DescriptionContainer>
                    <BiBadgeCheck color={theme.colors.primaryLigth} />
                    <DescriptionText>Instalação grátis</DescriptionText>
                </DescriptionContainer>
                <DescriptionContainer>
                    <BiDownload color={theme.colors.primaryLigth} />
                    <DescriptionText>2 Giga de download</DescriptionText>
                </DescriptionContainer>
                <DescriptionContainer>
                    <BiUpload color={theme.colors.primaryLigth} />
                    <DescriptionText>1 Giga de upload</DescriptionText>
                </DescriptionContainer>
                <DescriptionContainer>
                    <BiCategory color={theme.colors.primaryLigth} />
                    <DescriptionText>Apps de conteúdo:</DescriptionText>
                </DescriptionContainer>
                <PricesContainer>
                    <PriceSizeSimbol>R$</PriceSizeSimbol>
                    <PricesText>99</PricesText>
                    <PriceCentsContainer>
                        <PricesCents>,99</PricesCents>
                        <PricesCents>/mês</PricesCents>
                    </PriceCentsContainer>
                </PricesContainer>
                <PriceText>na conta digital</PriceText>
                <PriceLink>{`<< Consulte condições >>`}</PriceLink>
                <Button 
                    title='Contrate Já'
                    style={{    
                        borderRadius: 20,
                        border: `3px solid ${theme.colors.primary}`,
                        marginLeft: 20,
                        marginRight: 20
                    }}
                />
            </PlanosContainer>
        </Container>
    )    
}