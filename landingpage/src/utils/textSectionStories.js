 import { errorCircle, checkCircle, spend1, spend2 } from '../utils/exportImages'

export const withSpend = {
    title:'Track Business Expenses until its Milisecond',
    list_image:checkCircle,
    details:[
        'Analyze your business cost easily with group transaction thorugh tagging feature.',
        'Add more than one card for payment. Integrated with more than 50+ payment method and support bulk payment.',
        'Arrange your business expenses by date, name, etc.,  with just one click.'
    ],
    imageStatistics:spend1
}

export const withoutSpend = {
    title:'Taking too long to tidy up administrative files makes it unproductive',
    list_image:errorCircle,
    details:[
        'Complex recording process due to every administrative file in a different place.',
        'Need more effort to pay manually one by one invoice because there is no payment accommodation.',
        'Manual data arranging needs a long time because the different months/years are not in the same place.'
    ],
    imageStatistics:spend2
}