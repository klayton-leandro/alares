import { BiWifi, BiBadgeCheck, BiUpload, BiDownload } from 'react-icons/bi'

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
import { Button, Overlay } from 'components';
import { useQuery } from 'react-query';
import { userKeY } from 'consts/queries';
import { fetchWebPlans } from 'services/users';
import { useMemo } from 'react';
import { useUsers } from 'store';

import { PlanosBuyModal } from '../PlanosBuyModal';

export function Planos() {  

    const { data: plansWeb,  isFetching: isLoadingWeb } = useQuery([userKeY], () => fetchWebPlans())     
    const { state: { modals }, actions} = useUsers()

    const plansSection = useMemo(() => {

        return plansWeb?.map((object: {
            id: number,
            name: string,
            price: string
         }) => { 
            
            if(String(object.name).toLowerCase() == '2g') { 
                return {
                    id: object.id,
                    type: '2',
                    descriptions: [
                        {text: 'Super Wifi 6', icon: <BiWifi color={theme.colors.primaryLigth}/>},
                        {text: 'Instalação grátis', icon: <BiBadgeCheck color={theme.colors.primaryLigth}/>},
                        {text: '2 Giga de download', icon: <BiDownload color={theme.colors.primaryLigth}/>},
                        {text: '1 Giga de upload', icon: <BiUpload color={theme.colors.primaryLigth}/>},
                        
                    ],
                    price: '399.99'
                }
            }

            if(String(object.name).toLowerCase() == '1g') { 
                return {
                    id: object.id,
                    type: '1',
                    descriptions: [
                        {text: 'Super Wifi 6', icon: <BiWifi color={theme.colors.primaryLigth}/>},
                        {text: 'Instalação grátis', icon: <BiBadgeCheck color={theme.colors.primaryLigth}/>},
                        {text: '1 Giga de download', icon: <BiDownload color={theme.colors.primaryLigth}/>},
                        {text: '500 Mega de upload', icon: <BiUpload color={theme.colors.primaryLigth}/>},
                        
                    ],
                    price: '99.99'
                }
            }

            if(String(object.name).toLowerCase() == '1.5g') { 
                return {
                    id: object.id,
                    type: '1.5',
                    descriptions: [
                        {text: 'Super Wifi 6', icon: <BiWifi color={theme.colors.primaryLigth}/>},
                        {text: 'Instalação grátis', icon: <BiBadgeCheck color={theme.colors.primaryLigth}/>},
                        {text: '1.5 Giga de download', icon: <BiDownload color={theme.colors.primaryLigth}/>},
                        {text: '750 Mega de upload', icon: <BiUpload color={theme.colors.primaryLigth}/>},
                        
                    ],
                    price: '149.99'
                }
            }
            
        })

    },[plansWeb, isLoadingWeb]) as Array<{
        id: number
        type: string
        descriptions: Array<{text: string, icon: React.ReactElement}>,
        price: string
    }>

    return (
        <Container>
            {plansSection?.map(section => (
                <PlanosContainer key={section?.id}>
                    <TitlePlans>{section?.type}</TitlePlans>
                    <Giga>Giga</Giga>
                    {section?.descriptions.map(description => (
                        <DescriptionContainer>
                            {description?.icon}
                            <DescriptionText>{description?.text}</DescriptionText>
                        </DescriptionContainer>
                    ))}
                     <PricesContainer>
                        <PriceSizeSimbol>R$</PriceSizeSimbol>
                        <PricesText>{section?.price.split('.')[0]}</PricesText>
                        <PriceCentsContainer>
                            <PricesCents>,{section?.price.split('.')[1]}</PricesCents>
                            <PricesCents>/mês</PricesCents>
                        </PriceCentsContainer>
                    </PricesContainer>
                    <PriceText>na conta digital</PriceText>
                    <PriceLink>{`<< Consulte condições >>`}</PriceLink>
                    <Button 
                        title='Contrate Já'
                        onClick={() => actions.openModal({
                            modal: 'purchaseBuy',
                            title: `Contratar um Pedido de ${section.type} GB`,
                            id: section.id,
                            price: section.price
                        })}
                        style={{    
                            borderRadius: 20,
                            border: `3px solid ${theme.colors.primary}`,
                            marginLeft: 20,
                            marginRight: 20
                        }}
                    />
                </PlanosContainer> 
            ))}
            <Overlay isOpen={isLoadingWeb} />
            {
                modals.purchaseBuy.isOpen && (
                    <PlanosBuyModal />
                )
            }
        </Container>
    )    
}