import { useState, useMemo,  useEffect, useId } from 'react'
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom'
import dayjs from 'dayjs'
import { 
    BsChevronBarLeft, 
    BsChevronLeft, 
    BsChevronRight, 
    BsChevronBarRight } from 'react-icons/bs'

import { 
    Table as T, 
    LoadingProgress } from 'components'

import { useOrder } from '../hooks'

import { 
    Container,
    Item,
    Body,
    Row } from './styles'

type Header = {
    title: string
    name?: string
    sort?: boolean
    size: string
    position?: any
}

type PaginatedProps = {
    limit: number
    data: []
}

type Props = {
    header: Array<Header>
    data: PaginatedProps |  Array<any>
    formattedData?: Array<any>
    searchBy?: string
    searchValue?: string
    multipleSearch?: Array<{
        field: string
        value?: any
        isDate?: boolean
        from?: string
        to?: string
    }>
    isLoading?: boolean,
    hasPagination?: boolean
    paginationOptions?: Array<number>
}


export function Default(props : Props) {
    const { 
        header,
        data,
        formattedData,
        searchBy = '', 
        searchValue = '' ,
        multipleSearch,
        hasPagination,
        isLoading,
        paginationOptions = [5, 10, 25, 50, 100] } = props

    const navigate = useNavigate()
    
    const [params] = useSearchParams()
    const { search } = useLocation()
    
    const [activeFilter, setActiveFilter] = useState('')
    const [activeRow, setActiveRow] = useState()
       
    const insideFormattedData = useMemo(() => {
        if(!data) return []
        // @ts-ignore
        const pagedData = hasPagination? data?.data: data

        return pagedData?.map((item: any, index: number) => ({
            ...item,
            id: index
        }))
    },[data])

    const { order, handleOrder, data: orderedData } = useOrder(insideFormattedData)

    const handleChangeOrder = (name: string) => {
        setActiveFilter(name)
        handleOrder(name)
    }

    const sizes = useMemo(() => {
        return header
            .map(({ size }) => size)
            .join()
            .replace(/,/g, ' ')
    },[header])

    const dataKeys = useMemo(() => {
        return orderedData.length? Object.keys(orderedData[0]).filter(item => item !== 'id'): []
    },[orderedData])

    const width = header.reduce((acc, item) => acc + +item.size.replace(/[^0-9]/g, ""), 0)    
    
    const page = params.get('pagina')
    const limit = params.get('itensPorPagina')
    // @ts-ignore
    const lastPage = Math.ceil(data?.total / Number(limit))

    const searchRegegex = /itensPorPagina=[0-9]+&pagina=[0-9]+/
    
    function handleFirsPage () {
        if(Number(page) === 1) return 

        setActiveRow(null as any)

        const newUrl = `itensPorPagina=${limit || 50}&pagina=1`

        const url = search.replace(searchRegegex, newUrl)

        navigate(url)
    }

    function handlePreviousPage () {
        if(Number(page) === 1) return 

        const nextPage = Number(page) - 1

        setActiveRow(null as any)

        const newUrl = `itensPorPagina=${limit || 50}&pagina=${nextPage}`

        const url = search.replace(searchRegegex, newUrl)  

        navigate(url)
    }


    function handleNextPage () {
        if(Number(page) === lastPage) return 
        
        const nextPage = Number(page) + 1

        setActiveRow(null as any)
        navigate(`?itensPorPagina=${limit}&pagina=${nextPage}`)
    }

    function handlLastPage () {
        if(Number(page) === lastPage) return 

        const nextPage = Number(page) - 1

        setActiveRow(null as any)
        
        const newUrl = `itensPorPagina=${limit || 50}&pagina=${nextPage}`

        const url = search.replace(searchRegegex, newUrl)

        navigate(url)
    }

    function handleChangeLimit(e: any){
        const newUrl = `itensPorPagina=${e.currentTarget.value}&pagina=${params.get('pagina')}`
       
        const url = search.replace(searchRegegex, newUrl)
       
        navigate(url)
    }

    useEffect(() => {
        if(hasPagination){
            navigate(`?itensPorPagina=${paginationOptions[0]}&pagina=1`)
        }
    }, [hasPagination])
    
    return(
        <Container
            sizes={sizes}
            style={{ width }}
        >
            <header
                className='alares-table-header'
            >
                {
                    header.map(item => (
                        <Item 
                            sort={item.sort? item.sort: false}
                            key={useId()} 
                            className={`${activeFilter === item.name && item.sort? 'active': ''}`} 
                            onClick={()=> item.sort? handleChangeOrder(String(item.name)): null}
                        >
                            <h1>{ item.title }</h1>

                            { item.sort && <T.SortIcon order={order} name={String(item.name)}/> }
                        </Item>
                    ))
                }
            </header>

            <Body  
                className='alares-table-body'
                hasPagination={hasPagination as any}
            >
                <LoadingProgress
                    isLoading={isLoading as any}
                    rects={15}
                >
                    { 
                        orderedData
                            .filter((item: any ) => {
                                const items = multipleSearch?.map(search => {
                                    if(search.isDate){
                                        const dateField = item[search.field]

                                        const before = dayjs(dateField).add(1, 'day').format('YYYY-MM-DD')
                                        const after = dayjs(dateField).add(-1, 'day').format('YYYY-MM-DD')
                                        
                                        const from = dayjs(search.from).isBefore(before)
                                        const to = dayjs(search.to).isAfter(after)
                                            
                                        return from && to
                                    }else {
                                        return item[search.field].toLowerCase().includes(search.value.toLowerCase()) 
                                    }
                                }) 
                                                        
                                return multipleSearch
                                ?  items?.every(item => item)
                                : searchBy? item[searchBy || dataKeys[0]].toLowerCase().includes(searchValue.toLowerCase()): true
                            })
                            .map((item: any) => {
                                return (
                                    <Row
                                        key={item.id}
                                        sizes={sizes}
                                        className={`alares-table-row ${item.id === activeRow && 'alares-table-row-active'}`}
                                        onClick={() => setActiveRow(item.id)}
                                    >
                                        {   
                                            !!formattedData
                                                ? formattedData[item.id]
                                                : dataKeys.map(key => (
                                                    <p key={item.id}>{item[key]}</p>
                                                ))
                                        }
                                    </Row>
                                )
                            })
                    }
                    {
                        hasPagination && !isLoading && (
                            <footer className='alares-table-footer'>
                                <section className={`pagination ${Number(page) === 1 && 'disabled'}`}>
                                    <BsChevronBarLeft 
                                        onClick={handleFirsPage}
                                    />

                                    <BsChevronLeft 
                                        onClick={handlePreviousPage}
                                    />
                                </section>

                                <section>
                                    <p>Itens por página</p> 
                                    
                                    <select 
                                        name="" 
                                        id=""
                                        onChange={handleChangeLimit}
                                        value={Number(limit)}
                                    >
                                        {
                                            paginationOptions.map(item => (
                                                <option key={item} value={item}>
                                                    { item }
                                                </option>
                                            ))
                                        }
                                    </select>

                                    <p>
                                        {    
                                            page === '1'? '1': (Number(page) - 1) * Number(limit)} - {Number(page) === Number(lastPage)
                                                ?// @ts-ignore  
                                                data?.total
                                                :Number(limit) * Number(page)                                        
                                        } de {
                                         // @ts-ignore
                                        data?.total
                                    }</p>
                                </section>

                                <section className={`pagination ${Number(page) === lastPage && 'disabled'}`}>
                                        <BsChevronRight 
                                            onClick={handleNextPage}
                                        />

                                        <BsChevronBarRight 
                                            onClick={handlLastPage}
                                        />
                                </section>
                            </footer>
                        )
                    }
                </LoadingProgress>
            </Body>
        </Container>
    )
}

