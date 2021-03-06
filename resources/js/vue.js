import Vue from 'vue'
import Message from './components/message.vue'
import LocaleSelect from './components/locale-select.vue'
import Chat from './components/chat.vue'
import TimeSeriesChart from './components/time-series-chart.vue'
import PieChart from './components/pie-chart.vue'
import CountdownTimer from './components/countdown-timer'

let vm = new Vue({
    el: '#app',
    components: { Message, LocaleSelect, Chat, TimeSeriesChart, PieChart, CountdownTimer }
});

export default vm
