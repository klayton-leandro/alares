export type Category= {
    id: number
    name: string
    description: string
  }
  
  type Image = {
      src: string
      alt: string
    }
  
  type Option = {
    value: number
    label: string
  }

  export type Asset = {
    id: number
    assetsExternalId: string
    groupsId: number
    categoryId: number
    creditAmount: string
    installmentAmountWithoutInsurance: string
    installmentAmountWithInsurance: string
    reserveFund: string
    status: string
    statusId: string
  }
  
  
  export type Group = {
      administratorName: string
      id: number
      administratorId: number
      externalGroupId: string
      reserveFundPercentage: number
      reservehistoricFundMax: string
      reservehistoricFundMin: string
      maximumCredit: string
      minimumCredit: string
      maximumMonths: number
      minimumMonths: number
      maximumInstallment: string
      minimumInstallment: string
      latestBidValue: string
      dateMarketing: number
      flex: number
      createdAt: string
      updatedAt: string
      deletedAt: any
      image: Image
      categoryName?: string
      categoryId?: number
      deadlines?: Array<Option>
      assets: Array<Asset>
      statusId?: number
      rates?: Array<any>
      deadline?: any
      status?: string
      insurance: number
      meetingDate: string
      servopaFile?: File
      rate: number
  }


export type Modules = {
  id: number,
  name: string,
  userId: number,
  createdAt: string,
  updatedAt: string,
  deletedAt: null
}