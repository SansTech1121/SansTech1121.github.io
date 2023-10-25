/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './index.vue'
import { registerLicense } from '@syncfusion/ej2-base';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)
registerLicense('Ngo9BigBOggjHTQxAR8/V1NHaF5cWWJCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdgWH9cdXVRRWlYUkx/XkU=');
createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')