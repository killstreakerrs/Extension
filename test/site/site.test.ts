import { nextTick } from "vue";
import App from "../../src/site/App.vue";
import { TEST_APP_PROVIDE } from "../test-constants";
import { mount } from "@vue/test-utils";

test("site app can load all services", async () => {
	mount(App, {
		props: {
			test: true,
		},
		global: {
			provide: TEST_APP_PROVIDE,
		},
	});

	await nextTick();
});
