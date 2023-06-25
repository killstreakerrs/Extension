import { SITE_WORKER_URL } from "../src/common/Constant";

export const TEST_WORKER_URL = new URL("../src/worker/worker.root.ts", import.meta.url).toString();

export const TEST_APP_PROVIDE = {
	"app-id": "test",
	[SITE_WORKER_URL as symbol]: TEST_WORKER_URL,
};
