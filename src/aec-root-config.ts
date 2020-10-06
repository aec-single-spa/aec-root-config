import "./importmap.json";
import { registerApplication, start } from "single-spa";

registerApplication({
    name: "@aec/header-app",
    app: () => System.import("@aec/header-app"),
    activeWhen: ["/"],
});
registerApplication({
    name: "@aec/sidebar-app",
    app: () => System.import("@aec/sidebar-app"),
    activeWhen: ["/"],
});
registerApplication({
    name: "@aec/table-app",
    app: () => System.import("@aec/table-app"),
    activeWhen: ["/"],
});
registerApplication({
    name: "@aec/form-app",
    app: () => System.import("@aec/form-app"),
    activeWhen: ["/"],
});
registerApplication({
    name: "@aec/list-app",
    app: () => System.import("@aec/list-app"),
    activeWhen: ["/"],
});

start({
    urlRerouteOnly: true,
});
