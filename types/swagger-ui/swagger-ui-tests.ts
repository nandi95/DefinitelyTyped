import SwaggerUI = require("swagger-ui");

SwaggerUI({
    configUrl: "http://www.example.com",
    dom_id: "Some id",
    domNode: document.getElementById("#eyedee"),
    spec: {},
    url: "http://www.example.com",
    urls: [{ name: "123", url: "http://www.example.com" }],

    layout: "Idontknow",
    pluginsOptions: {
        pluginLoadType: "legacy",
    },
    plugins: [
        () => {
            return {
                afterLoad: (system: any) => console.log("Plugin system:", system),
            };
        },
    ],
    presets: [
        () => {
            return {
                afterLoad: (system: any) => console.log("Preset system:", system),
            };
        },
    ],

    deepLinking: false,
    displayOperationId: false,
    defaultModelsExpandDepth: 1,
    defaultModelExpandDepth: 1,
    defaultModelRendering: "example",
    displayRequestDuration: false,
    docExpansion: "list",
    filter: true,
    maxDisplayedTags: 20,
    operationsSorter: (a: any) => a,
    showExtensions: false,
    showCommonExtensions: false,
    tagsSorter: (a: any) => a,
    useUnsafeMarkdown: false,
    onComplete: () => console.log("done"),
    syntaxHighlight: {
        activate: true,
        theme: "agate",
    },
    tryItOutEnabled: false,
    requestSnippets: {
        generators: {
            curl_bash: {
                title: "cURL (bash)",
                syntax: "bash",
            },
            curl_powershell: {
                title: "cURL (PowerShell)",
                syntax: "powershell",
            },
            curl_cmd: {
                title: "cURL (CMD)",
                syntax: "bash",
            },
        },
        defaultExpanded: true,
        languagesMask: ["curl_bash"], // e.g. only show curl bash = ["curl_bash"]
    },

    oauth2RedirectUrl: `${window.location.protocol}//${window.location.host}/oauth2-redirect.html`,
    requestInterceptor: a => a,
    responseInterceptor: a => a,
    showMutatedRequest: true,
    supportedSubmitMethods: ["get", "put", "post", "delete", "options", "patch", "trace"],
    validatorUrl: "http://www.example.com",
    withCredentials: true,

    modelPropertyMacro: a => a,
    parameterMacro: (op, param) => 0,

    persistAuthorization: false,
});

const swaggerUI = SwaggerUI({
    syntaxHighlight: false,
});

// $ExpectType SwaggerUIPreset
const _basePreset = SwaggerUI.presets.base;
// $ExpectType SwaggerUIPreset
const _apisPreset = SwaggerUI.presets.apis;

swaggerUI.initOAuth({});
swaggerUI.preauthorizeApiKey("abc", "dec");
swaggerUI.preauthorizeBasic("key", "user", "password");

import SwaggerUIStandalonePreset from "swagger-ui/dist/swagger-ui-standalone-preset";
// $ExpectType SwaggerUIPreset
const _standAlonePreset = SwaggerUIStandalonePreset;

import SwaggerUICSS from "swagger-ui/dist/swagger-ui.css";
// $ExpectType any
const _css = SwaggerUICSS;

import OAuth2RedirectHTML from "swagger-ui/dist/oauth2-redirect.html";
// $ExpectType any
const _html = OAuth2RedirectHTML;
