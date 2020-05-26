import Vue from 'vue'
import App from './App.vue'
import {NovicellButton, TestButton, DatePicker, backgroundpicker,textBackgroundDarkmodePicker} from 'web-components-testing-nvcl';
customElements.define("nvcl-button2", NovicellButton);
customElements.define("test-button2", TestButton);
customElements.define("test-datepicker2", DatePicker);
customElements.define("background-picker",backgroundpicker);
customElements.define("darkmode-picker",textBackgroundDarkmodePicker);

new Vue({
  el: '#app',
  render: h => h(App)
})
