import fetch from '@/utils/fetch'

export function merchantGetOrderList(query) {
    return fetch({
        url: 'merchant.getOrderList',
        method: 'get',
        params: query

    })
}
