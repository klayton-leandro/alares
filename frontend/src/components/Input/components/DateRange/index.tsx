import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 


import { useState, useEffect, InputHTMLAttributes } from 'react'
import {  DateRangePicker  } from 'react-date-range';
import dayjs from 'dayjs'
import { RiSpamLine } from 'react-icons/ri'
import { IoIosArrowDropdown } from 'react-icons/io'

// @ts-ignore
import { pt } from 'react-date-range/dist/locale'

import { Container } from '../styles/globals'

import { 
    Wrapper,
    Icon,
    ConfirmBox } from './styles'

import { 
    Modal,
    Button } from 'components'


interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    active?: boolean
    isLoading?: boolean
    error?: string |  any
    onSelect: (e: any) => void
}



export function DateRange (props: Props) {
    const { label, active, isLoading, error, onSelect } = props
    
    const [value, setValue] = useState('Selecione uma data')
    const [isModalOpen, setIsModalOpen] = useState(false)

    const [state, setState] = useState({
        selection: {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      });

    const today = dayjs().format('YYYY-MM-DD')
    const startWeek = new Date(dayjs().subtract(7 + (dayjs().day() - 7), 'days').toISOString())
    const startMonth = new Date(`${dayjs().year()}-${dayjs().month() + 1}-01`)
    const startYear = new Date(`${dayjs().year()}-01-01`)
    const startDate = dayjs(state.selection.startDate).format('YYYY-MM-DD')
    const endDate = dayjs(state.selection.endDate).format('YYYY-MM-DD')

    const isToday = startDate === today && endDate === today
    const isActualWeek = startDate === dayjs(startWeek).format('YYYY-MM-DD') && endDate === today
    const isActualMonth = startDate === dayjs(startMonth).format('YYYY-MM-DD') && endDate === today
    const isActualYear = startDate === dayjs(startYear).format('YYYY-MM-DD') && endDate === today
   
    const handleConfirm = () => {
        const { startDate, endDate } = state.selection
        
        onSelect({
            from: startDate,
            to: endDate
        })
    
        const formatedValue = 
            isToday ? 'Hoje'
            : isActualWeek ? 'Nesta semana'
            : isActualMonth ? 'Neste mês'
            : isActualYear ? 'Neste ano'
            : `De ${dayjs(startDate).format('DD/MM/YYYY')} à ${dayjs(endDate).format('DD/MM/YYYY')}`

        setValue(formatedValue)

        setIsModalOpen(false)
    }

    useEffect(() => {
        if(!props.value){
            setValue('Selecione uma data')
        }
    },[props.value])
    
    return (
        <Wrapper>
            <Container
                    active={active}
                    error={!!error?.length}
                    type={props.type}
            >
                <span>{ label}</span>

                <Icon
                    label={label}
                >
                    <IoIosArrowDropdown />

                    
                </Icon>

                <input 
                    type="submit"
                    value={isLoading? 'Carregando...': value}
                    disabled={props.disabled? props.disabled: isLoading}
                    onClick={() => setIsModalOpen(true)}
                /> 
                        

                {
                    error?.length && (
                        <div className="input-error">
                        <RiSpamLine />  <p>{ error }</p>
                        </div>
                    )
                }
            </Container>
               
            { isModalOpen && (
                <Modal
                    isOpen={isModalOpen}
                    handleClose={() => setIsModalOpen(false)}
                    title='Selecione uma data'
                >
                    <DateRangePicker
                        locale={pt}
                        onChange={item => setState({ ...state, ...item })}
                        months={1}
                        showDateDisplay={false}
                        direction="vertical"
                        ranges={[state.selection as any]}
                        staticRanges={[
                            {
                              label: "Hoje",
                              range: () => ({
                                startDate: new Date(),
                                endDate: new Date()
                              }),
                              isSelected() {
                                return isToday
                              }
                            },
                            {
                                label: "Nesta semana",
                                range: () => ({
                                    startDate: startWeek,
                                    endDate: new Date()
                                }),
                                isSelected() {
                                    return isActualWeek
                                }
                            },
                            {
                                label: "Neste mês",
                                range: () => ({
                                    startDate: startMonth,
                                    endDate: new Date()
                                }),
                                isSelected() {
                                    return isActualMonth
                                }
                            },
                            {
                                label: "Neste ano",
                                range: () => ({
                                    startDate: startYear,
                                    endDate: new Date()
                                }),
                                isSelected() {
                                    return isActualYear
                                }
                            }
                          ]}
                        />                  

                        <ConfirmBox>
                            <Button
                                onClick={handleConfirm}
                            >
                                Confirmar
                            </Button>
                        </ConfirmBox>
                </Modal>
            )}
        </Wrapper>
    )
}