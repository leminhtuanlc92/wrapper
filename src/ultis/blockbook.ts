import axios from 'axios'
import * as https from 'https'
import { btcBlockbook, blockbookMethods } from './config'

const callBlockbook = async ({ method, data, params = {} }) => {
    try {
        if (method === blockbookMethods.sendtx) {
            const result = await axios({
                url: `${btcBlockbook}/${method}/`,
                data,
                method: 'post',
                httpsAgent: new https.Agent({
                    rejectUnauthorized: false
                })
            })
            return result.data
        } else {
            const result = await axios({
                url: `${btcBlockbook}/${method}/${data}`,
                /* params, */
                method: 'get',
                httpsAgent: new https.Agent({
                    rejectUnauthorized: false
                })
            })
            return result.data
        }
    } catch (e) {
        throw e
    }
}

export { callBlockbook }