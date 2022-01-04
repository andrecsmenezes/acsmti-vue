import { VueConstructor } from 'vue'
import { toCurrency }     from './CurrencyFilter'

export default {
    install( Vue: VueConstructor ) {
        Vue.filter( 'toCurrency', toCurrency )
        Vue.filter( 'toAddress',  toAddress )
        Vue.filter( 'toPhone',    toPhone )
        Vue.filter( 'toRequired', toRequired )
    }
}
