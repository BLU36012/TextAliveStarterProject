// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"7wZbQ":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "9440bf780f77c784";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"2R06K":[function(require,module,exports,__globalThis) {
var _textaliveAppApi = require("textalive-app-api");
//Initialize the player
const player = new (0, _textaliveAppApi.Player)({
    app: {
        token: "axMa03SlS6U3CHwQ",
        parameters: []
    },
    mediaElement: document.querySelector("#media"),
    mediaBannerPosition: "bottom-left"
});
//Initialize UI Elements
const textContainer = document.querySelector("#text");
const playBtn = document.querySelector("#play");
const stopBtn = document.querySelector("#stop");
//Tutorial function 
const animateWord = function(now, unit) {
    if (unit.contains(now)) document.querySelector("#text").textContent = unit.text;
};
player.addListener({
    // Fired when the app is ready. You can load a song here.
    onAppReady: (app)=>{
        console.log("Status: App Ready");
        app.managed;
        if (!app.songUrl) {
            console.log("Video Ready to Play");
            player.createFromSongUrl("https://piapro.jp/t/RoPB/20220122172830");
        }
    },
    // Fired when the video/audio is ready to be played
    onVideoReady: (video)=>{
        console.log("Status: Video Ready");
        textContainer.textContent = "Ready! Press Play.";
        playBtn.disabled = false;
        stopBtn.disabled = false;
    },
    onBeatUpdate: (beat)=>{
        // This example slightly rotates the gradient on every beat
        document.body.style.filter = `hue-rotate(${beat.index * 10}deg)`;
    },
    onTimeUpdate: (position)=>{
        if (player.video) {
            const currentWord = player.video.findWord(position);
            if (currentWord) textContainer.textContent = currentWord.text;
            else // Check if we are in the middle of a song or just the intro
            textContainer.textContent = player.isPlaying ? "\u266A \u266A \u266A" : "Waiting...";
        }
    }
});
playBtn.addEventListener("click", ()=>{
    if (player.isPlaying) {
        player.requestPause();
        playBtn.textContent = "Play";
    } else {
        player.requestPlay().catch((err)=>{
            console.error("Playback failed to start:", err);
            // Sometimes clicking a second time fixes it after the first interaction
            alert("Please click the page once more to enable audio!");
        });
        playBtn.textContent = "Pause";
    }
});
stopBtn.addEventListener("click", ()=>{
    player.requestStop();
    playBtn.textContent = "Play";
    textContainer.textContent = "Stopped.";
});

},{"textalive-app-api":"at0lQ"}],"at0lQ":[function(require,module,exports,__globalThis) {
/** textalive-app-api v0.4.0 | Copyright 2024 AIST TextAlive Project <textalive-ml@aist.go.jp> (https://textalive.jp) */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BasicTimer", ()=>wn);
parcelHelpers.export(exports, "Color", ()=>X);
parcelHelpers.export(exports, "Ease", ()=>Ai);
parcelHelpers.export(exports, "Matrix2D", ()=>pt);
parcelHelpers.export(exports, "Player", ()=>Hi);
parcelHelpers.export(exports, "PlayerLogoImage", ()=>Fi);
parcelHelpers.export(exports, "Point", ()=>ht);
parcelHelpers.export(exports, "SongleTimer", ()=>En);
parcelHelpers.export(exports, "TimedUnit", ()=>$);
parcelHelpers.export(exports, "UnitTypes", ()=>n);
parcelHelpers.export(exports, "dataUrlToString", ()=>S);
parcelHelpers.export(exports, "findTimedObject", ()=>st);
parcelHelpers.export(exports, "findTimedObjectsInRange", ()=>at);
parcelHelpers.export(exports, "isStringEncodedDataUrl", ()=>O);
parcelHelpers.export(exports, "sortedIndex", ()=>Xi);
parcelHelpers.export(exports, "stringToDataUrl", ()=>T);
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
var global = arguments[3];
"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
var e = {
    exports: {}
};
!function(t) {
    function e(t, e, r) {
        for(var n = r && "number" != typeof e ? r(e) : e, i = 0, o = t.length; i < o;){
            var s = i + o >>> 1;
            (r ? r(t[s]) : t[s]) < n ? i = s + 1 : o = s;
        }
        return i;
    }
    t.sortedIndex = e, Object.defineProperty(t, "__esModule", {
        value: !0
    });
}(e.exports);
var r = e.exports, n = {
    NONE: 0,
    PHRASE: 1,
    WORD: 2,
    CHAR: 4,
    GRAPHIC: 8,
    ALL: 63,
    PUBLIC: 64
}, i = /^https?:\/\/uploader\.ongaaccel\.jp\/files\?guid=([a-zA-Z0-9]+)/i, o = /^https?:\/\/songle\.jp\/uploads\/([a-zA-Z0-9]+)\.mp3$/i, s = /^uploaded:([a-zA-Z0-9]+)$/i, a = /^songle\.jp\/uploads\/([a-zA-Z0-9]+)\.mp3$/i, u = /^https?:\/\/piapro\.jp\/t\/([^/]+)(\/[0-9]+)?$/i, c = {
    getSongPathFromUrl: function(t) {
        if (c.isUploaderUrl(t)) {
            var e = o.exec(t);
            if (e) return "songle.jp/uploads/".concat(e[1], ".mp3");
            var r = i.exec(t);
            if (r) return "songle.jp/uploads/".concat(r[1], ".mp3");
        }
        return /https?:\/\/(.+)/.exec(t)[1];
    },
    isUploaderUrl: function(t) {
        return o.test(t) || i.test(t);
    },
    isUploaderPath: function(t) {
        return a.test(t) || s.test(t);
    },
    getUploaderGuid: function(t) {
        var e = a.exec(t);
        if (e) return e[1];
        var r = s.exec(t);
        return r ? r[1] : null;
    },
    getSongUrlFromUploaderGuid: function(t) {
        return t ? "https://songle.jp/uploads/".concat(t, ".mp3") : null;
    },
    getAltSongUrlFromUploaderGuid: function(t) {
        return t ? "https://api.textalive.jp/songle/me/uploads/".concat(t) : null;
    },
    getSongUrlFromPath: function(t) {
        var e = c.getUploaderGuid(t);
        return e ? c.getSongUrlFromUploaderGuid(e) : "https://".concat(t);
    },
    isYouTubeUrl: function(t) {
        return /^https?:\/\/((www|m)\.)?youtube\.com/i.test(t);
    },
    isNicovideoUrl: function(t) {
        return /^https?:\/\/(www\.)?nicovideo.jp/i.test(t);
    },
    isVideoSiteUrl: function(t) {
        return c.isYouTubeUrl(t) || c.isNicovideoUrl(t);
    },
    isPiaproUrl: function(t) {
        return u.test(t);
    }
}, l = /^https:\/\/songle\.jp\/api\/v[0-9]+\/users\/(.+)\/uploads\/(.+)$/, p = function(t) {
    return l.test(t);
}, h = function(t) {
    var e = l.exec(t);
    return e ? {
        user: e[1],
        identifier: e[2]
    } : {
        user: null,
        identifier: null
    };
}, d = function() {
    function t() {}
    return t.prototype.isLicenseLoading = function(t) {
        return !t || !t.song || void 0 === t.lyrics || void 0 === t.backgroundImage;
    }, t.prototype.checkLicenses = function(t) {
        return !this.isLicenseLoading(t) && this.checkLicense(t.song) && this.checkLicense(t.lyrics) && this.checkLicense(t.backgroundImage);
    }, t.prototype.checkLicense = function(t) {
        return null === t || (1 === t.contentType ? this.checkMusicLicense(t.license) : 2 === t.contentType ? this.checkTextLicense(t.license) : 0 === t.contentType && (!!this.isBackgroundColorAsset(t) || this.checkBackgroundImageLicense(t.license)));
    }, t.prototype.checkMusicLicense = function(t) {
        return t.condition && t.condition.uploader || !(!t.condition || t.condition.ns || t.condition.nc || t.condition.org || t.condition.clb);
    }, t.prototype.checkTextLicense = function(t) {
        return t.condition && t.condition.uploader || !(!t.condition || t.condition.ns || t.condition.org || t.condition.clb);
    }, t.prototype.checkBackgroundImageLicense = function(t) {
        return !(!t.condition || t.condition.ns || t.condition.nc || t.condition.org || t.condition.clb);
    }, t.prototype.isUploaderAsset = function(t) {
        return t && t.url && (c.isUploaderUrl(t.url) || p(t.url));
    }, t.prototype.isPiaproAsset = function(t) {
        return t && t.url && c.isPiaproUrl(t.url);
    }, t.prototype.isBlankBackgroundAsset = function(t) {
        return !t || !t.originalUrl;
    }, t.prototype.isBackgroundColorAsset = function(t) {
        var e = t && t.originalUrl ? t.originalUrl : "";
        return /^#[0-9a-fA-F]{3,6}$/.test(e);
    }, t.prototype.isBackgroundPiaproImageAsset = function(t) {
        var e = t && t.originalUrl ? t.originalUrl : "";
        return c.isPiaproUrl(e);
    }, t.prototype.isBackgroundSpecialImageAsset = function(t) {
        var e = t && t.originalUrl ? t.originalUrl : "";
        return /^snowmiku2016-([0-9]{2})$/.test(e);
    }, t.prototype.getQueryParameter = function(t) {
        return !t || t.license && !this.checkBackgroundImageLicense(t.license) ? null : t.originalUrl;
    }, t;
}(), f = function(t, e) {
    return f = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(t, e) {
        t.__proto__ = e;
    } || function(t, e) {
        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    }, f(t, e);
}, y = function() {
    return y = Object.assign || function(t) {
        for(var e, r = 1, n = arguments.length; r < n; r++)for(var i in e = arguments[r])Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t;
    }, y.apply(this, arguments);
};
function g(t, e, r, n) {
    return new (r || (r = Promise))(function(e, i) {
        function o(t) {
            try {
                a(n.next(t));
            } catch (t) {
                i(t);
            }
        }
        function s(t) {
            try {
                a(n.throw(t));
            } catch (t) {
                i(t);
            }
        }
        function a(t) {
            var n;
            t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(function(t) {
                t(n);
            })).then(o, s);
        }
        a((n = n.apply(t, [])).next());
    });
}
function v(t, e) {
    var r, n, i, o, s = {
        label: 0,
        sent: function() {
            if (1 & i[0]) throw i[1];
            return i[1];
        },
        trys: [],
        ops: []
    };
    return o = {
        next: a(0),
        throw: a(1),
        return: a(2)
    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this;
    }), o;
    function a(a) {
        return function(u) {
            return function(a) {
                if (r) throw new TypeError("Generator is already executing.");
                for(; o && (o = 0, a[0] && (s = 0)), s;)try {
                    if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                    switch(n = 0, i && (a = [
                        2 & a[0],
                        i.value
                    ]), a[0]){
                        case 0:
                        case 1:
                            i = a;
                            break;
                        case 4:
                            return s.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            s.label++, n = a[1], a = [
                                0
                            ];
                            continue;
                        case 7:
                            a = s.ops.pop(), s.trys.pop();
                            continue;
                        default:
                            if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                s = 0;
                                continue;
                            }
                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                s.label = a[1];
                                break;
                            }
                            if (6 === a[0] && s.label < i[1]) {
                                s.label = i[1], i = a;
                                break;
                            }
                            if (i && s.label < i[2]) {
                                s.label = i[2], s.ops.push(a);
                                break;
                            }
                            i[2] && s.ops.pop(), s.trys.pop();
                            continue;
                    }
                    a = e.call(t, s);
                } catch (t) {
                    a = [
                        6,
                        t
                    ], n = 0;
                } finally{
                    r = i = 0;
                }
                if (5 & a[0]) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                };
            }([
                a,
                u
            ]);
        };
    }
}
"function" == typeof SuppressedError && SuppressedError;
var m = {
    fallback: {
        protocol: "https"
    },
    songle: {
        domain: "songle.jp"
    },
    textalive: {
        domain: "api.textalive.jp"
    },
    content: {
        domain: "content.textalive.jp"
    },
    client: {
        version: "0.10.0",
        axios: null
    }
};
function b(e, r, n) {
    var i, o, s;
    return g(this, 0, void 0, function() {
        var a;
        return v(this, function(u) {
            switch(u.label){
                case 0:
                    a = {
                        responseType: (null == n ? void 0 : n.responseType) || "json"
                    }, r && (a.params = r), (null == n ? void 0 : n.auth) && (a.auth = {
                        username: null === (i = n.auth) || void 0 === i ? void 0 : i.username,
                        password: null === (o = n.auth) || void 0 === o ? void 0 : o.password
                    }), (null == n ? void 0 : n.withCredentials) && (a.withCredentials = !0), a.headers = {}, 0 === e.indexOf(m.textalive.server) && (m.textalive.appToken && (a.headers["x-ta-app-token"] = m.textalive.appToken), m.textalive.authUser && m.textalive.authToken && (a.headers["x-ta-auth-user"] = m.textalive.authUser, a.headers["x-ta-auth-token"] = m.textalive.authToken)), (null == n ? void 0 : n.headers) && (a.headers = y(y({}, a.headers), n.headers)), u.label = 1;
                case 1:
                    return u.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]), [
                        4,
                        ((null == n ? void 0 : n.client) || (null === (s = m.client) || void 0 === s ? void 0 : s.axios) || (0, _axiosDefault.default)).get(e, a)
                    ];
                case 2:
                    return [
                        2,
                        u.sent()
                    ];
                case 3:
                    return u.sent(), [
                        2,
                        null
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
}
function _(t) {
    var e, r, n = 0;
    if (0 === t.length) return n;
    for(e = 0, r = t.length; e < r; e++)n = (n << 5) - n + t.charCodeAt(e), n |= 0;
    return n;
}
m.songle.protocol = m.songle.protocol || m.fallback.protocol, m.songle.server = "".concat(m.songle.protocol, "://").concat(m.songle.domain), m.textalive.protocol = m.textalive.protocol || m.fallback.protocol, m.textalive.server = "".concat(m.textalive.protocol, "://").concat(m.textalive.domain), m.textalive.appToken = null, m.content.protocol = m.content.protocol || m.fallback.protocol, m.content.server = "".concat(m.content.protocol, "://").concat(m.content.domain);
var w = new (function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        function r() {
            this.constructor = t;
        }
        f(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
    }(e, t), Object.defineProperty(e.prototype, "endpoint", {
        get: function() {
            return "".concat(m.textalive.server, "/etc/license");
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.read = function(t, e) {
        var r;
        return void 0 === e && (e = !0), g(this, 0, void 0, function() {
            var n, i;
            return v(this, function(o) {
                switch(o.label){
                    case 0:
                        return [
                            4,
                            b(this.endpoint, {
                                url: t,
                                token: _("ta" + t),
                                skipOptoutCheck: !!e || void 0
                            })
                        ];
                    case 1:
                        return !(n = o.sent()) || 200 !== n.status || (null === (r = n.data) || void 0 === r ? void 0 : r.error) ? [
                            2,
                            {
                                originalUrl: null,
                                license: {
                                    code: n ? n.status : 404
                                }
                            }
                        ] : ((i = n.data).license.code = n.status, 0 === i.contentType && (i.css = 'url("' + i.contentUrl + '")'), [
                            2,
                            i
                        ]);
                }
            });
        });
    }, e;
}(d));
function P(e, r, n) {
    var i;
    return g(this, 0, void 0, function() {
        var o;
        return v(this, function(s) {
            switch(s.label){
                case 0:
                    r || (r = {}), o = {
                        responseType: (null == n ? void 0 : n.responseType) || "json"
                    }, (null == n ? void 0 : n.withCredentials) && (o.withCredentials = !0), o.headers = {}, 0 === e.indexOf(m.textalive.server) && (m.textalive.appToken && (o.headers["x-ta-app-token"] = m.textalive.appToken), m.textalive.authUser && m.textalive.authToken && (o.headers["x-ta-auth-user"] = m.textalive.authUser, o.headers["x-ta-auth-token"] = m.textalive.authToken)), (null == n ? void 0 : n.postToken) && (o.headers["x-ta-post-token"] = n.postToken), (null == n ? void 0 : n.headers) && (o.headers || (o.headers = {}), o.headers = y(y({}, o.headers), n.headers)), s.label = 1;
                case 1:
                    return s.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]), [
                        4,
                        ((null == n ? void 0 : n.client) || (null === (i = m.client) || void 0 === i ? void 0 : i.axios) || (0, _axiosDefault.default)).post(e, r, o)
                    ];
                case 2:
                    return [
                        2,
                        s.sent()
                    ];
                case 3:
                    return s.sent(), [
                        2,
                        null
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
}
var E = "data:text/plain;base64,";
function O(t) {
    return "string" == typeof t && 0 === t.indexOf(E);
}
function S(t) {
    if (!O(t)) return null;
    var e = t.split(",")[1];
    return decodeURIComponent(atob(e).split("").map(function(t) {
        return "%" + ("00" + t.charCodeAt(0).toString(16)).slice(-2);
    }).join(""));
}
function T(t) {
    return "string" != typeof t ? null : E + btoa(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, function(t, e) {
        return String.fromCharCode(parseInt("0x" + e));
    }));
}
function x(t, e, r, n, i) {
    var o = void 0 === window.screenLeft ? screen.left : window.screenLeft, s = void 0 === window.screenTop ? screen.top : window.screenTop, a = (window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width) / 2 - r / 2 + o, u = (window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height) / 2 - n / 2 + s, c = window.open(t, e, "width=" + r + ",height=" + n + ",top=" + u + ",left=" + a + "," + i);
    return window.focus && c.focus(), c;
}
var A = new (function() {
    function t() {
        this.listeners = [], this.pollingTimeout = null;
    }
    return Object.defineProperty(t.prototype, "endpoint", {
        get: function() {
            return "".concat(m.textalive.server, "/");
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "songleEndpoint", {
        get: function() {
            return "".concat(m.songle.server, "/");
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isLoading = function() {
        return !!this.userProfile;
    }, t.prototype.spoof = function(t) {
        this.userProfile = t;
    }, t.prototype.getServerStatus = function() {
        return g(this, 0, void 0, function() {
            return v(this, function(t) {
                return [
                    2,
                    this.serverStatus || this.doGetServerStatus()
                ];
            });
        });
    }, t.prototype.doGetServerStatus = function() {
        return g(this, 0, void 0, function() {
            var t;
            return v(this, function(e) {
                switch(e.label){
                    case 0:
                        return this.serverStatusRequest || (this.serverStatusRequest = b(this.endpoint, null, {
                            withCredentials: !0
                        })), [
                            4,
                            this.serverStatusRequest
                        ];
                    case 1:
                        return t = e.sent(), this.serverStatusRequest = null, t && 200 === t.status ? (this.serverStatus = t.data, [
                            2,
                            this.serverStatus
                        ]) : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.getProfile = function() {
        return g(this, 0, void 0, function() {
            return v(this, function(t) {
                return [
                    2,
                    this.userProfile || this.doGetProfile()
                ];
            });
        });
    }, t.prototype.doGetProfile = function() {
        return g(this, 0, void 0, function() {
            var t;
            return v(this, function(e) {
                switch(e.label){
                    case 0:
                        return this.userProfileRequest || (this.userProfileRequest = b("".concat(this.endpoint, "profile"), null, {
                            withCredentials: !0
                        })), [
                            4,
                            this.userProfileRequest
                        ];
                    case 1:
                        return t = e.sent(), this.userProfileRequest = null, t && 200 === t.status ? (this.emitUserProfile(t.data), this.userProfile = t.data, [
                            2,
                            this.userProfile
                        ]) : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.getMergingUsers = function() {
        return g(this, 0, void 0, function() {
            var t;
            return v(this, function(e) {
                switch(e.label){
                    case 0:
                        return [
                            4,
                            b("".concat(this.endpoint, "profile/merge"), null, {
                                withCredentials: !0
                            })
                        ];
                    case 1:
                        return (t = e.sent()) && 200 === t.status && t.data ? [
                            2,
                            [
                                t.data.user,
                                t.data.mergeWith
                            ]
                        ] : [
                            2,
                            [
                                null,
                                null
                            ]
                        ];
                }
            });
        });
    }, t.prototype.mergeUsers = function() {
        var t;
        return g(this, 0, void 0, function() {
            var e, r, n, i, o, s;
            return v(this, function(a) {
                switch(a.label){
                    case 0:
                        return [
                            4,
                            this.getToken()
                        ];
                    case 1:
                        return e = a.sent(), [
                            4,
                            P("".concat(this.endpoint, "profile/merge"), null, {
                                postToken: e,
                                withCredentials: !0
                            })
                        ];
                    case 2:
                        if (!(r = a.sent()) || 200 !== r.status || !(null === (t = r.data) || void 0 === t ? void 0 : t.success)) return [
                            2,
                            null
                        ];
                        for(n = r.data.user, i = 0, o = this.listeners; i < o.length; i++)(s = o[i]).onUserMerged && s.onUserMerged(n);
                        return [
                            2,
                            n
                        ];
                }
            });
        });
    }, t.prototype.updateUser = function(t) {
        var e;
        return g(this, 0, void 0, function() {
            var r, n, i, o;
            return v(this, function(s) {
                switch(s.label){
                    case 0:
                        return [
                            4,
                            this.getToken()
                        ];
                    case 1:
                        return r = s.sent(), [
                            4,
                            P("".concat(this.endpoint, "profile"), t, {
                                postToken: r,
                                withCredentials: !0
                            })
                        ];
                    case 2:
                        return (n = s.sent()) && 200 === n.status && (null === (e = n.data) || void 0 === e ? void 0 : e.success) ? (i = n.data.user, [
                            4,
                            this.getProfile()
                        ]) : [
                            2,
                            null
                        ];
                    case 3:
                        return (o = s.sent()).user = i, this.emitUserProfile(o), [
                            2,
                            i
                        ];
                }
            });
        });
    }, t.prototype.isYouTubeUser = function(t) {
        return t && t.user && "string" == typeof t.user.youtubeIdString;
    }, t.prototype.isPiaproUser = function(t) {
        return t && t.user && "string" == typeof t.user.piaproIdString;
    }, t.prototype.isSongleUser = function(t) {
        return t && t.user && ("number" == typeof t.user.songleUserId && t.user.songleUserId >= 0 || "string" == typeof t.user.songleAccessToken);
    }, t.prototype.isSpoofingSongleUser = function(t) {
        return this.isSongleUser(t) && ("number" != typeof t.user.id || t.user.id < 0);
    }, t.prototype.addListener = function(t) {
        t && this.listeners.push(t);
    }, t.prototype.removeListener = function(t) {
        this.listeners = this.listeners.filter(function(e) {
            return e !== t;
        });
    }, t.prototype.emitUserProfile = function(t) {
        this.userProfile = t;
        for(var e = 0, r = this.listeners; e < r.length; e++){
            var n = r[e];
            n.onUserProfileUpdated && n.onUserProfileUpdated(t), this.userProfile.user ? n.onUserLoggedIn && n.onUserLoggedIn(t.user) : n.onUserLoggedOut && n.onUserLoggedOut();
        }
    }, t.prototype.authenticate = function(t, e) {
        return g(this, 0, void 0, function() {
            var r;
            return v(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            b("".concat(this.endpoint, "profile/logins/basic"), null, {
                                auth: {
                                    username: String(t),
                                    password: e
                                },
                                withCredentials: !0
                            })
                        ];
                    case 1:
                        return (r = n.sent()) && 200 === r.status && r.data ? [
                            2,
                            r.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.loginTwitter = function(t) {
        return this.login(t, "twitter");
    }, t.prototype.loginGitHub = function(t) {
        return this.login(t, "github");
    }, t.prototype.loginYouTube = function(t) {
        return this.login(t, "youtube");
    }, t.prototype.loginPiapro = function(t) {
        return this.login(t, "piapro");
    }, t.prototype.loginSongle = function(t) {
        return this.login(t, "songle");
    }, t.prototype.login = function(t, e) {
        return t && t.preventDefault(), !!e && (x("".concat(this.endpoint, "profile/logins/").concat(e), "TextAliveAuth", 600, 480, "status=no,toolbar=no,menubar=no"), this.startMonitoringAuthState(), !1);
    }, t.prototype.logoutTwitter = function(t) {
        return this.logout(t, "twitter");
    }, t.prototype.logoutGitHub = function(t) {
        return this.logout(t, "github");
    }, t.prototype.logoutYouTube = function(t) {
        return this.logout(t, "youtube");
    }, t.prototype.logoutPiapro = function(t) {
        return this.logout(t, "piapro");
    }, t.prototype.logoutSongle = function(t) {
        return this.logout(t, "songle");
    }, t.prototype.logout = function(t, e) {
        return void 0 === e && (e = null), t && t.preventDefault(), x("".concat(this.endpoint, "profile/logouts/").concat(e || "all"), "TextAliveAuth", 600, 480, "status=no,toolbar=no,menubar=no"), this.startMonitoringAuthState(), !1;
    }, t.prototype.startMonitoringAuthState = function() {
        var t = this;
        this.pollingTimeout && (clearTimeout(this.pollingTimeout), this.pollingTimeout = null);
        var e = function(r) {
            if (r.data && r.data.textalive) {
                if (r.source.postMessage("close", r.origin), r.data.merge) return t.getMergingUsers().then(function(e) {
                    for(var r = e[0], n = e[1], i = 0, o = t.listeners; i < o.length; i++){
                        var s = o[i];
                        s.onUserMergeRequired && s.onUserMergeRequired(r, n);
                    }
                }).catch(function() {}), void window.removeEventListener("message", e);
                t.doGetProfile(), window.removeEventListener("message", e);
            }
        };
        window.addEventListener("message", e);
    }, t.prototype.getToken = function() {
        return g(this, 0, void 0, function() {
            return v(this, function(t) {
                return this.userProfile ? [
                    2,
                    this.userProfile.status.token
                ] : this.token ? [
                    2,
                    this.token
                ] : [
                    2,
                    this.doGetToken()
                ];
            });
        });
    }, t.prototype.doGetToken = function() {
        var t;
        return g(this, 0, void 0, function() {
            var e;
            return v(this, function(r) {
                switch(r.label){
                    case 0:
                        return [
                            4,
                            b("".concat(this.endpoint, "profile/token"), null, {
                                withCredentials: !0
                            })
                        ];
                    case 1:
                        return e = r.sent(), (null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.token) && (this.token = e.data.token), [
                            2,
                            this.token
                        ];
                }
            });
        });
    }, t;
}()), R = new (function() {
    function t() {}
    return Object.defineProperty(t.prototype, "endpoint", {
        get: function() {
            return "".concat(m.textalive.server, "/text-parser/");
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.parse = function(t) {
        return g(this, 0, void 0, function() {
            var e, r;
            return v(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            A.getToken()
                        ];
                    case 1:
                        return e = n.sent(), [
                            4,
                            P(this.endpoint, {
                                text: t
                            }, {
                                postToken: e,
                                withCredentials: !0
                            })
                        ];
                    case 2:
                        return (r = n.sent()) && 200 === r.status ? [
                            2,
                            r.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t;
}()), C = new (function() {
    function t() {}
    return Object.defineProperty(t.prototype, "endpoint", {
        get: function() {
            return "".concat(m.content.server, "/fonts");
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.listAvailableFonts = function() {
        return g(this, 0, void 0, function() {
            var t = this;
            return v(this, function(e) {
                switch(e.label){
                    case 0:
                        return this.data ? [
                            3,
                            2
                        ] : [
                            4,
                            this.fetchInfo()
                        ];
                    case 1:
                        e.sent(), e.label = 2;
                    case 2:
                        return this.data && this.data.fontFamilies ? [
                            2,
                            Object.keys(this.data.fontFamilies).map(function(e) {
                                return y({
                                    key: e
                                }, t.data.fontFamilies[e]);
                            })
                        ] : [
                            2,
                            []
                        ];
                }
            });
        });
    }, t.prototype.getFrequentChars = function() {
        return g(this, 0, void 0, function() {
            return v(this, function(t) {
                switch(t.label){
                    case 0:
                        return this.data ? [
                            3,
                            2
                        ] : [
                            4,
                            this.fetchInfo()
                        ];
                    case 1:
                        t.sent(), t.label = 2;
                    case 2:
                        return [
                            2,
                            this.data && this.data.frequentChars || ""
                        ];
                }
            });
        });
    }, t.prototype.clearCache = function() {
        this.data = null;
    }, t.prototype.fetchInfo = function() {
        return g(this, 0, void 0, function() {
            var t, e, r, n;
            return v(this, function(i) {
                switch(i.label){
                    case 0:
                        return [
                            4,
                            b("".concat(this.endpoint, "/index.json"))
                        ];
                    case 1:
                        if (!(t = i.sent()) || 200 !== t.status || !t.data) return this.data = null, [
                            2,
                            null
                        ];
                        for(r in this.data = t.data, e = this.data.fontUrlPrefix, this.data.fontFamilies)(n = this.data.fontFamilies[r]).typesquare || n.typekit || n.google || n.url || (n.url = "".concat(e, "/").concat(r, "-all.css"), n.compactUrl = "".concat(e, "/").concat(r, ".css"));
                        return [
                            2
                        ];
                }
            });
        });
    }, t;
}());
var N = new RegExp("\\b([CDEFGAB](?:b|bb)*(?:#|##|sus|maj|min|aug|m|M)*[\\d/]*(?:[CDEFGAB](?:b|bb)*(?:#|##|sus|maj|min|aug|m|M)*[\\d/]*)*\\-){2}");
function k(t, e, r) {
    return !N.test(t) && !t.match(/[（(].+(?:転載|書き起こし).*[）)]/) && (!t.match(/(作詞|作曲).+(作詞|作曲)/) || 0 !== e && e !== r.length - 2);
}
function j(t) {
    return !t.match(new RegExp("[\uFF08(]?\u203B"));
}
var I = {}, U = {}, F = function() {
    function t() {}
    return Object.defineProperty(t.prototype, "endpoint", {
        get: function() {
            return "".concat(m.songle.server, "/lyrics/");
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "localLyricsEndpoint", {
        get: function() {
            return "".concat(m.textalive.server, "/etc/lyrics");
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "timingEndpoint", {
        get: function() {
            return "".concat(m.songle.server, "/songs/");
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "lyricsParserEndpoint", {
        get: function() {
            return m.songle.server;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "lyricsPostEndpoint", {
        get: function() {
            return m.songle.server;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isUploaderUrl = function(t) {
        return p(t);
    }, t.prototype.parseUploaderUrl = function(t) {
        return h(t);
    }, t.prototype.getRecentlySynchronizedList = function(t) {
        return void 0 === t && (t = {}), g(this, 0, void 0, function() {
            var e, r;
            return v(this, function(n) {
                switch(n.label){
                    case 0:
                        return e = {}, "number" == typeof t ? e.page = t : t && (e.page = t.page, e.per_page = t.perPage), [
                            4,
                            b("".concat(this.endpoint, "recently_synchronized.json"), e)
                        ];
                    case 1:
                        return (r = n.sent()) && 200 === r.status ? [
                            2,
                            r.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.load = function(t) {
        return g(this, 0, void 0, function() {
            var e;
            return v(this, function(r) {
                switch(r.label){
                    case 0:
                        return [
                            4,
                            b("".concat(this.timingEndpoint + t, "/lyrics.json"))
                        ];
                    case 1:
                        return (e = r.sent()) && 200 === e.status ? [
                            2,
                            e.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.clearCache = function() {
        I = {};
    }, t.prototype.loadDetail = function(t, e) {
        return g(this, 0, void 0, function() {
            var r, n;
            return v(this, function(i) {
                switch(i.label){
                    case 0:
                        return I[t] && I[t][e] ? [
                            2,
                            I[t][e]
                        ] : [
                            4,
                            b("".concat(this.timingEndpoint + t, "/lyrics/").concat(e < 0 ? "latest" : e, ".json"))
                        ];
                    case 1:
                        return (r = i.sent()) && 200 === r.status ? (n = r.data, I[t] || (I[t] = {}), I[t][n.id] = n, e < 0 && (I[t][-1] = n), [
                            2,
                            n
                        ]) : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.loadDiffs = function(t, e) {
        return g(this, 0, void 0, function() {
            var r;
            return v(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            b("".concat(this.timingEndpoint + t, "/lyrics/").concat(e, "/diffs.json"))
                        ];
                    case 1:
                        return (r = n.sent()) && 200 === r.status ? [
                            2,
                            r.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.loadDiff = function(t, e, r) {
        return g(this, 0, void 0, function() {
            return v(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            b("".concat(this.timingEndpoint + t, "/lyrics/").concat(e).concat(r < 0 ? "" : 0 === r ? "/original" : "/diffs/".concat(r, "/lyrics"), ".json"))
                        ];
                    case 1:
                        return [
                            2,
                            n.sent().data
                        ];
                }
            });
        });
    }, t.prototype.loadAllRevisionsForSong = function(t) {
        return g(this, 0, void 0, function() {
            var e, r, n, i, o, s, a, u, c, l;
            return v(this, function(p) {
                switch(p.label){
                    case 0:
                        return [
                            4,
                            this.load(t)
                        ];
                    case 1:
                        if (!(e = p.sent())) return [
                            2,
                            null
                        ];
                        r = [], n = 0, i = e.lyrics, p.label = 2;
                    case 2:
                        return n < i.length ? (o = i[n], [
                            4,
                            this.loadDetail(t, o.id)
                        ]) : [
                            3,
                            6
                        ];
                    case 3:
                        return s = p.sent(), [
                            4,
                            this.loadDiffs(t, s.id)
                        ];
                    case 4:
                        if (a = p.sent(), r.push({
                            lyrics: s,
                            updated_at: new Date(s.created_at)
                        }), Array.isArray(a)) for(u = 0, c = a; u < c.length; u++)l = c[u], r.push({
                            diff_id: l.id,
                            source_id: l.source_id,
                            lyrics: s,
                            updated_at: new Date(l.updated_at)
                        });
                        p.label = 5;
                    case 5:
                        return n++, [
                            3,
                            2
                        ];
                    case 6:
                        return [
                            2,
                            r.sort(function(t, e) {
                                var r = e.updated_at.getTime() - t.updated_at.getTime();
                                return 0 === r ? e.diff_id - t.diff_id : r;
                            })
                        ];
                }
            });
        });
    }, t.prototype.getLatestRevision = function(t) {
        return t.filter(function(t) {
            return !(t.lyrics.processing || t.lyrics.failed);
        })[0];
    }, t.prototype.fetchLocalLyricBody = function(t) {
        return g(this, 0, void 0, function() {
            var e, r, n, i;
            return v(this, function(o) {
                switch(o.label){
                    case 0:
                        return this.verbose && ("string" == typeof t ? console.log("load locally-stored lyrics for song code", t) : console.log("load locally-stored lyrics for lyric id", t)), e = {}, "string" == typeof t ? e.code = t : e.lyricId = t, [
                            4,
                            b("".concat(this.localLyricsEndpoint, "/token"), e)
                        ];
                    case 1:
                        return !(r = o.sent()) || 200 !== r.status || r.data.error ? [
                            2,
                            null
                        ] : (n = r.data.token, e.token = n, [
                            4,
                            b(this.localLyricsEndpoint, e)
                        ]);
                    case 2:
                        return (i = o.sent()) && 200 === i.status ? (this.verbose && console.log("loaded locally-stored lyrics with params", e), [
                            2,
                            i.data
                        ]) : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.fetchSongleLyricBody = function(t, e) {
        return g(this, 0, void 0, function() {
            var r, n, i, o, s, a, u, c, l, p, h;
            return v(this, function(d) {
                switch(d.label){
                    case 0:
                        if (!(r = this.parseUploaderUrl(t)).identifier) throw new Error("unsupported lyrics url ".concat(t));
                        return [
                            4,
                            A.getProfile()
                        ];
                    case 1:
                        if (n = d.sent(), !A.isSongleUser(n)) throw new Error("Songle authentication is required");
                        return i = "".concat(t, "//").concat(e), U[i] ? [
                            2,
                            U[i]
                        ] : (A.isSpoofingSongleUser(n) && (s = n.user, a = s.songleUserId, u = s.songleAccessToken, c = s.songleRefreshToken, o = {
                            songleUserId: a,
                            songleAccessToken: u,
                            songleRefreshToken: c
                        }), [
                            4,
                            b("".concat(m.textalive.server, "/songle/users/").concat(r.user, "/uploads/").concat(r.identifier), o, {
                                withCredentials: !0,
                                responseType: "text"
                            })
                        ]);
                    case 2:
                        return l = d.sent(), p = null == l ? void 0 : l.data, h = p ? {
                            text: p,
                            url: t
                        } : null, p && (U[i] = h), [
                            2,
                            h
                        ];
                }
            });
        });
    }, t.prototype.fetchPiaproLyricBody = function(t, e) {
        return g(this, 0, void 0, function() {
            var r, n, i, o, s;
            return v(this, function(a) {
                switch(a.label){
                    case 0:
                        if (!c.isPiaproUrl(t)) throw new Error("unsupported lyrics url ".concat(t));
                        return r = "".concat(t, "//").concat(e), U[r] ? [
                            2,
                            U[r]
                        ] : [
                            4,
                            w.read(t, !0)
                        ];
                    case 1:
                        if (n = a.sent(), !w.isPiaproAsset(n)) throw new Error("unsupported piapro lyrics url ".concat(t));
                        return i = S(n.contentUrl), [
                            4,
                            this.parseLyricBody(i, e)
                        ];
                    case 2:
                        return o = a.sent(), (s = o ? {
                            text: o,
                            artist: {
                                name: n.authorName,
                                url: n.authorPath ? "https://piapro.jp".concat(n.authorPath) : null
                            },
                            name: n.name,
                            url: t
                        } : null) && (U[r] = s), [
                            2,
                            s
                        ];
                }
            });
        });
    }, t.prototype.fetchInternalLyricBody = function(t, e) {
        return g(this, 0, void 0, function() {
            var r;
            return v(this, function(n) {
                if (r = new URL(t), "undefined" == typeof location || location.protocol !== r.protocol || location.hostname !== r.hostname) throw new Error("direct access not supported for lyrics url ".concat(t));
                return [
                    2,
                    this.fetchCrossOriginLyricBody(t, e)
                ];
            });
        });
    }, t.prototype.fetchCrossOriginLyricBody = function(t, e) {
        return g(this, 0, void 0, function() {
            var r, n, i, o, s;
            return v(this, function(a) {
                switch(a.label){
                    case 0:
                        return r = "".concat(t, "//").concat(e), U[r] ? [
                            2,
                            U[r]
                        ] : [
                            4,
                            b(t, null, {
                                responseType: "text"
                            })
                        ];
                    case 1:
                        return n = a.sent(), i = null == n ? void 0 : n.data, n && 200 === n.status && i ? [
                            4,
                            this.parseLyricBody(i, e)
                        ] : (this.verbose && console.error("direct access not supported for lyrics url ".concat(t)), [
                            2,
                            this.fetchProxiedLyricBody(t, e)
                        ]);
                    case 2:
                        return o = a.sent(), (s = o ? {
                            text: o,
                            url: t
                        } : null) && (U[r] = s), [
                            2,
                            s
                        ];
                }
            });
        });
    }, t.prototype.fetchProxiedLyricBody = function(t, e) {
        return g(this, 0, void 0, function() {
            var r, n, i;
            return v(this, function(o) {
                switch(o.label){
                    case 0:
                        return r = "".concat(t, "//").concat(e), U[r] ? [
                            2,
                            U[r]
                        ] : (this.verbose && console.log("load lyrics from the external server", t), [
                            4,
                            L(this.lyricsParserEndpoint + e, function(e) {
                                return new Promise(function(r, n) {
                                    e.Songle.Utils.url2Lyric(t, function(t) {
                                        return r(t);
                                    }, function(t) {
                                        return n(t);
                                    });
                                });
                            }, this.verbose)
                        ]);
                    case 1:
                        return n = o.sent(), (i = n ? {
                            text: n,
                            url: t
                        } : null) && (U[r] = i), [
                            2,
                            i
                        ];
                }
            });
        });
    }, t.prototype.parseLyricBody = function(t, e) {
        return g(this, 0, void 0, function() {
            var r;
            return v(this, function(n) {
                switch(n.label){
                    case 0:
                        return n.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]), [
                            4,
                            L(this.lyricsParserEndpoint + e, function(e) {
                                return e.Songle.Utils.parseLyric(t);
                            }, this.verbose)
                        ];
                    case 1:
                        return r = n.sent(), [
                            3,
                            3
                        ];
                    case 2:
                        return n.sent(), r = function(t) {
                            return function(t) {
                                return t = function(t) {
                                    var e, r = t.split(/\n/);
                                    return r.forEach(function(t, r) {
                                        t.match(/^\S+：\S+$/m) && (e = r);
                                    }), void 0 !== e && e < 5 ? r.slice(e + 1).join("\n") : t;
                                }(t), t = function(t) {
                                    for(var e, r, n, i, o, s = new RegExp("[\uFF08(]?(.)\u7E70\u308A\u8FD4\u3057[)\uFF09]?", "g"); null !== (r = s.exec(t));)n = r[1], i = new RegExp("^(" + n + "[\\s\\S]+?)(?=\\n\\n[^\\u3000|\\s])", "m"), null !== (o = t.match(i)) && (e = o[1].replace(new RegExp("^" + n, "m"), "").replace(new RegExp("^\\n"), "").replace(new RegExp("^\\u3000", "mg"), ""), t = (t = t.replace(i, function() {
                                        return e;
                                    })).replace(new RegExp("[\uFF08\\(]?" + n + "\u7E70\u308A\u8FD4\u3057[\\)\uFF09]?", "g"), e).replace(new RegExp("^" + n, "m"), ""));
                                    return t;
                                }(t = t.split(/\n/).filter(k).join("\n")), t = function(t) {
                                    var e = new RegExp("[\\u4E00-\\u9FAF|\\uFF66-\\uFF9D|\\u31F0-\\u31FF]+[\uFF08\\(]([\\u3041-\\u3096\\u309D-\\u309F]+)[\\)\uFF09]", "g");
                                    return t.replace(e, function(t, e) {
                                        return e;
                                    });
                                }(t), t.split(/\n/).filter(j).join("\n").replace(/\n\n+/g, "\n\n").replace(/\n+$/g, "\n");
                            }(t.replace(/^\ufeff/, "").replace(/\r/, "").split(/\n/).filter(k).filter(function(t) {
                                return !t.match(/^#/);
                            }).join("\n").replace(/^\s+/, ""));
                        }(t), [
                            3,
                            3
                        ];
                    case 3:
                        return [
                            2,
                            r
                        ];
                }
            });
        });
    }, t.prototype.clearLyricBodyCache = function() {
        U = {};
    }, t.prototype.fetchLyricBody = function(t, e) {
        var r, n, i = e.parserPath, o = e.directAccess;
        return g(this, 0, void 0, function() {
            var e, s;
            return v(this, function(a) {
                switch(a.label){
                    case 0:
                        if (O(t)) return this.verbose && console.log("load lyrics from the data url", t), [
                            2,
                            {
                                text: S(t)
                            }
                        ];
                        if (this.isUploaderUrl(t)) return [
                            2,
                            this.fetchSongleLyricBody(t, i)
                        ];
                        if (c.isPiaproUrl(t)) return [
                            2,
                            this.fetchPiaproLyricBody(t, i)
                        ];
                        a.label = 1;
                    case 1:
                        return a.trys.push([
                            1,
                            5,
                            ,
                            6
                        ]), e = new URL(t), o || "undefined" != typeof location && location.protocol !== e.protocol && "https:" !== e.protocol ? [
                            3,
                            4
                        ] : "undefined" != typeof location && location.hostname !== e.hostname ? [
                            3,
                            2
                        ] : (o = !0, [
                            3,
                            4
                        ]);
                    case 2:
                        return [
                            4,
                            b("".concat(this.localLyricsEndpoint, "/cors"), {
                                url: t
                            })
                        ];
                    case 3:
                        s = a.sent(), o = s && 200 === s.status && (null === (n = null === (r = s.data) || void 0 === r ? void 0 : r.data) || void 0 === n ? void 0 : n.enabled), a.label = 4;
                    case 4:
                        return o ? (this.verbose && console.log("load lyrics directly", t), [
                            2,
                            this.fetchCrossOriginLyricBody(t, i)
                        ]) : [
                            3,
                            6
                        ];
                    case 5:
                        return a.sent(), [
                            3,
                            6
                        ];
                    case 6:
                        return [
                            2,
                            this.fetchProxiedLyricBody(t, i)
                        ];
                }
            });
        });
    }, t.prototype.post = function(t) {
        return g(this, 0, void 0, function() {
            var e, r;
            return v(this, function(n) {
                switch(n.label){
                    case 0:
                        return e = t.forceUpdate ? {
                            url: t.lyricsUrl,
                            force_create: "true"
                        } : {
                            url: t.lyricsUrl
                        }, [
                            4,
                            P("".concat(this.lyricsPostEndpoint, "/songs/").concat(t.songId, "/lyrics.json"), e)
                        ];
                    case 1:
                        return (r = n.sent()) && 200 === r.status && r.data ? [
                            2,
                            {
                                success: !0,
                                lyricsId: r.data.id
                            }
                        ] : [
                            2,
                            {
                                success: !1,
                                error: "failed to update lyrics url"
                            }
                        ];
                }
            });
        });
    }, t.prototype.postPrivate = function(t) {
        return g(this, 0, void 0, function() {
            var e, r, n, i, o, s, a, u, c, l, p;
            return v(this, function(h) {
                switch(h.label){
                    case 0:
                        return [
                            4,
                            A.getProfile()
                        ];
                    case 1:
                        if (e = h.sent(), !A.isSongleUser(e)) throw new Error("Songle authentication is required");
                        return A.isSpoofingSongleUser(e) ? (n = e.user, i = n.songleUserId, o = n.songleAccessToken, s = n.songleRefreshToken, a = {
                            songleUserId: i,
                            songleAccessToken: o,
                            songleRefreshToken: s
                        }, r = "?" + Object.keys(a).map(function(t) {
                            return "".concat(t, "=").concat(encodeURIComponent(a[t]));
                        }).join("&")) : r = "", u = t.songId, c = t.lyricsText, (l = new FormData).append("text", c), [
                            4,
                            P("".concat(m.textalive.server, "/songle/me/songs/").concat(u, "/lyrics.json").concat(r), l, {
                                withCredentials: !0
                            })
                        ];
                    case 2:
                        return (p = h.sent()) && 200 === p.status && p.data ? [
                            2,
                            {
                                success: !0,
                                lyrics: p.data.data.lyric
                            }
                        ] : [
                            2,
                            {
                                success: !1,
                                error: "failed to post lyrics text"
                            }
                        ];
                }
            });
        });
    }, t.prototype.update = function(t) {
        var e;
        return g(this, 0, void 0, function() {
            var r;
            return v(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            P("".concat(this.lyricsPostEndpoint, "/songs/").concat(t.songCode, "/lyrics/").concat(t.lyricsId, "/diffs.json"), t.lyricsData ? {
                                lyric: JSON.stringify(t.lyricsData)
                            } : {
                                source_diff_id: t.lyricsDiffId
                            })
                        ];
                    case 1:
                        return r = n.sent(), [
                            2,
                            (null === (e = null == r ? void 0 : r.data) || void 0 === e ? void 0 : e.lyric_diff) ? {
                                success: 200 === r.status,
                                lyricsId: r.data.lyric_diff.lyric_id,
                                lyricsDiffId: r.data.lyric_diff.id
                            } : {
                                success: 200 === r.status
                            }
                        ];
                }
            });
        });
    }, t;
}();
function L(t, e, r) {
    var n, i = this;
    return "undefined" == typeof window || !(null === (n = null === window || void 0 === window ? void 0 : window.navigator) || void 0 === n ? void 0 : n.userAgent) || window.navigator.userAgent.includes("Node.js") || window.navigator.userAgent.includes("jsdom") ? function(t, e, r) {
        return r && console.log("parse lyrics: loading on Node.js", t), new Promise(function(r, n) {
            b(t, {
                responseType: "text"
            }).then(function(t) {
                var i = t.data, o = new Function("let g=global;global={};".concat(i, ";let res=global;global=g")), s = {};
                try {
                    o.bind(s)(), r(e(s));
                } catch (t) {
                    n(t);
                }
            }).catch(n);
        });
    }(t, e, r) : (r && console.log("parse lyrics: loading", t), new Promise(function(n, o) {
        try {
            var s = document.createElement("script"), a = null;
            window.module && (a = window.module, delete window.module), s.src = t, s.onload = function() {
                return g(i, 0, void 0, function() {
                    var i, u;
                    return v(this, function(c) {
                        switch(c.label){
                            case 0:
                                document.body.removeChild(s), r && console.log("parse lyrics: load", t), window.Songle && window.Songle.Utils && window.Songle.Utils.url2Lyric || (a && (window.module = a), o("url2Lyric not found")), c.label = 1;
                            case 1:
                                return c.trys.push([
                                    1,
                                    3,
                                    4,
                                    5
                                ]), i = n, [
                                    4,
                                    e(window)
                                ];
                            case 2:
                                return i.apply(void 0, [
                                    c.sent()
                                ]), [
                                    3,
                                    5
                                ];
                            case 3:
                                return u = c.sent(), o(u), [
                                    3,
                                    5
                                ];
                            case 4:
                                return a && (window.module = a), [
                                    7
                                ];
                            case 5:
                                return [
                                    2
                                ];
                        }
                    });
                });
            }, s.onerror = function(t) {
                return o(t.message);
            }, document.body.appendChild(s);
        } catch (e) {
            console.error("failed to call lyrics parser", t, e);
        }
    }));
}
var D = new F, M = {}, B = {}, V = new (function() {
    function t() {}
    return Object.defineProperty(t.prototype, "endpoint", {
        get: function() {
            return m.textalive.server;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "songleEndpoint", {
        get: function() {
            return m.songle.server;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.getSongPathFromUrl = function(t) {
        return c.getSongPathFromUrl(t);
    }, t.prototype.isUploaderUrl = function(t) {
        return c.isUploaderUrl(t);
    }, t.prototype.isUploaderPath = function(t) {
        return c.isUploaderPath(t);
    }, t.prototype.getUploaderGuid = function(t) {
        return c.getUploaderGuid(t);
    }, t.prototype.getAltSongUrlFromUploaderGuid = function(t) {
        return c.getAltSongUrlFromUploaderGuid(t);
    }, t.prototype.getSongUrlFromUploaderGuid = function(t) {
        return c.getSongUrlFromUploaderGuid(t);
    }, t.prototype.getSongUrlFromPath = function(t) {
        return c.getSongUrlFromPath(t);
    }, t.prototype.isYouTubeUrl = function(t) {
        return c.isYouTubeUrl(t);
    }, t.prototype.isNicovideoUrl = function(t) {
        return c.isNicovideoUrl(t);
    }, t.prototype.isVideoSiteUrl = function(t) {
        return c.isVideoSiteUrl(t);
    }, t.prototype.isPiaproUrl = function(t) {
        return c.isPiaproUrl(t);
    }, t.prototype.load = function(t) {
        return g(this, 0, void 0, function() {
            var e, r;
            return v(this, function(n) {
                switch(n.label){
                    case 0:
                        return e = t.code || "number" == typeof t.id && String(t.id) || encodeURIComponent(t.songPath), M[e] ? [
                            2,
                            M[e]
                        ] : (M[e] = this.doLoad(e), [
                            4,
                            M[e]
                        ]);
                    case 1:
                        return r = n.sent(), this.use(r), [
                            2,
                            r
                        ];
                }
            });
        });
    }, t.prototype.use = function(t) {
        if (t) {
            var e = String(t.song.id), r = t.song.code, n = this.getSongPathFromUrl(t.song.permalink);
            M[e] = M[r] = M[n] = Promise.resolve(t);
        }
    }, t.prototype.clearCache = function() {
        M = {}, B = {};
    }, t.prototype.doLoad = function(t) {
        var e;
        return g(this, 0, void 0, function() {
            var r, n, i;
            return v(this, function(o) {
                switch(o.label){
                    case 0:
                        return [
                            4,
                            b("".concat(this.songleEndpoint, "/songs/").concat(t, "?format=json"))
                        ];
                    case 1:
                        return (r = o.sent()) && 200 === r.status ? (n = r.data, this.isUploaderUrl(null === (e = null == n ? void 0 : n.song) || void 0 === e ? void 0 : e.permalink) ? [
                            4,
                            this.doLoadPrivateSong(n.song.id)
                        ] : [
                            3,
                            3
                        ]) : [
                            2,
                            null
                        ];
                    case 2:
                        if (i = o.sent()) return n.status = n.status || {}, n.status.owner = !0, [
                            2,
                            y(y({}, n), {
                                song: i
                            })
                        ];
                        n.status = n.status || {}, n.status.owner = !1, o.label = 3;
                    case 3:
                        return [
                            2,
                            n
                        ];
                }
            });
        });
    }, t.prototype.doLoadPrivateSong = function(t) {
        var e, r;
        return g(this, 0, void 0, function() {
            var n, i, o, s, a, u, c;
            return v(this, function(l) {
                switch(l.label){
                    case 0:
                        return [
                            4,
                            A.getProfile()
                        ];
                    case 1:
                        return n = l.sent(), A.isSongleUser(n) ? (A.isSpoofingSongleUser(n) && (o = n.user, s = o.songleUserId, a = o.songleAccessToken, u = o.songleRefreshToken, i = {
                            songleUserId: s,
                            songleAccessToken: a,
                            songleRefreshToken: u
                        }), [
                            4,
                            b("".concat(this.endpoint, "/songle/me/songs/").concat(t, ".json"), i, {
                                withCredentials: !0
                            })
                        ]) : [
                            2,
                            null
                        ];
                    case 2:
                        return (c = l.sent()) && 200 === c.status && (null === (r = null === (e = c.data) || void 0 === e ? void 0 : e.data) || void 0 === r ? void 0 : r.song) ? [
                            2,
                            c.data.data.song
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.loadInfo = function(t, e) {
        return g(this, 0, void 0, function() {
            var r;
            return v(this, function(n) {
                return r = this.cacheKey(t, e), B[r] || (B[r] = this.doLoadInfo(t, {
                    min: !0,
                    revisions: null == e ? void 0 : e.revisions
                })), [
                    2,
                    B[r]
                ];
            });
        });
    }, t.prototype.loadDetailInfo = function(t, e) {
        return g(this, 0, void 0, function() {
            var r;
            return v(this, function(n) {
                return r = this.cacheKey(t, e) + "/dt", B[r] || (B[r] = this.doLoadInfo(t, {
                    min: !1,
                    revisions: null == e ? void 0 : e.revisions
                })), [
                    2,
                    B[r]
                ];
            });
        });
    }, t.prototype.cacheKey = function(t, e) {
        var r = String(t);
        return (null == e ? void 0 : e.revisions) && ("number" == typeof e.revisions.chord && (r += "/cd" + e.revisions.chord), "number" == typeof e.revisions.beat && (r += "/bt" + e.revisions.beat), "number" == typeof e.revisions.chorus && (r += "/cr" + e.revisions.chorus)), r;
    }, t.prototype.doLoadInfo = function(t, e) {
        var r = void 0 === e ? {
            min: !0
        } : e, n = r.min, i = r.revisions;
        return g(this, 0, void 0, function() {
            var e, r;
            return v(this, function(o) {
                switch(o.label){
                    case 0:
                        return e = {
                            min: n ? 1 : 0
                        }, "number" == typeof (null == i ? void 0 : i.chord) && (e.chord_revision_id = i.chord), "number" == typeof (null == i ? void 0 : i.beat) && (e.beat_revision_id = i.beat), "number" == typeof (null == i ? void 0 : i.chorus) && (e.chorus_revision_id = i.chorus), [
                            4,
                            b("".concat(this.songleEndpoint, "/songs/").concat(t, "/info.json"), e)
                        ];
                    case 1:
                        return (r = o.sent()) && 200 === r.status ? [
                            2,
                            r.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.loadVocalAmplitude = function(t) {
        return g(this, 0, void 0, function() {
            var e;
            return v(this, function(r) {
                switch(r.label){
                    case 0:
                        return [
                            4,
                            b("".concat(this.songleEndpoint, "/songs/").concat(t, "/vamplitude.json"))
                        ];
                    case 1:
                        return (e = r.sent()) && 200 === e.status && e.data ? [
                            2,
                            e.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.loadValenceArousal = function(t) {
        return g(this, 0, void 0, function() {
            var e;
            return v(this, function(r) {
                switch(r.label){
                    case 0:
                        return [
                            4,
                            b("".concat(this.songleEndpoint, "/songs/").concat(t, "/av.json"))
                        ];
                    case 1:
                        return (e = r.sent()) && 200 === e.status && e.data ? [
                            2,
                            e.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.list = function(t) {
        return void 0 === t && (t = {}), g(this, 0, void 0, function() {
            var e;
            return v(this, function(r) {
                switch(r.label){
                    case 0:
                        return [
                            4,
                            b(this.endpoint + "/songs", t)
                        ];
                    case 1:
                        return (e = r.sent()) && 200 === e.status ? [
                            2,
                            e.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.listPrivate = function(t) {
        return void 0 === t && (t = {}), g(this, 0, void 0, function() {
            var e, r, n, i, o, s, a;
            return v(this, function(u) {
                switch(u.label){
                    case 0:
                        return [
                            4,
                            A.getProfile()
                        ];
                    case 1:
                        return e = u.sent(), A.isSongleUser(e) ? (r = {}, A.isSpoofingSongleUser(e) && (n = e.user, i = n.songleUserId, o = n.songleAccessToken, s = n.songleRefreshToken, r = {
                            songleUserId: i,
                            songleAccessToken: o,
                            songleRefreshToken: s
                        }), "number" == typeof t.page && (r.page = t.page), "number" == typeof t.perPage && (r.per_page = t.perPage), [
                            4,
                            b("".concat(this.endpoint, "/songle/me/songs.json"), y(y({}, r), {
                                private: !0
                            }), {
                                withCredentials: !0
                            })
                        ]) : [
                            2,
                            {
                                data: null,
                                error: "Songle authentication is required"
                            }
                        ];
                    case 2:
                        return (a = u.sent()) && 200 === a.status ? [
                            2,
                            a.data
                        ] : [
                            2,
                            {
                                data: null,
                                error: "private songs not found"
                            }
                        ];
                }
            });
        });
    }, t.prototype.create = function(t) {
        return g(this, 0, void 0, function() {
            return v(this, function(e) {
                return [
                    2,
                    this.doCreate(t, !1)
                ];
            });
        });
    }, t.prototype.createPrivate = function(t) {
        return g(this, 0, void 0, function() {
            var e;
            return v(this, function(r) {
                switch(r.label){
                    case 0:
                        return [
                            4,
                            A.getProfile()
                        ];
                    case 1:
                        return e = r.sent(), A.isSongleUser(e) ? [
                            2,
                            this.doCreate(t, !0)
                        ] : [
                            2,
                            {
                                success: !1,
                                song: null,
                                error: "Songle authentication is required"
                            }
                        ];
                }
            });
        });
    }, t.prototype.doCreate = function(t, e) {
        var r, n;
        return g(this, 0, void 0, function() {
            var i, o, s, a, u;
            return v(this, function(c) {
                switch(c.label){
                    case 0:
                        return i = t.url, o = t.name, s = t.artistName, [
                            4,
                            A.getToken()
                        ];
                    case 1:
                        return a = c.sent(), [
                            4,
                            P(e ? this.endpoint + "/etc/songs/private" : this.endpoint + "/etc/songs", {
                                url: i,
                                name: o,
                                artist: s
                            }, {
                                postToken: a,
                                withCredentials: !0
                            })
                        ];
                    case 2:
                        return (u = c.sent()) && 200 === u.status ? e ? [
                            2,
                            {
                                success: !0,
                                song: u.data.data.song
                            }
                        ] : [
                            2,
                            {
                                success: !0,
                                song: u.data.song
                            }
                        ] : [
                            2,
                            {
                                success: !1,
                                error: ((null === (r = null == u ? void 0 : u.data) || void 0 === r ? void 0 : r.data) ? u.data.data.message : null === (n = null == u ? void 0 : u.data) || void 0 === n ? void 0 : n.message) || "failed to register a song"
                            }
                        ];
                }
            });
        });
    }, t.prototype.uploadPrivate = function(t) {
        return g(this, 0, void 0, function() {
            var e, r, n, i, o, s, a, u, c;
            return v(this, function(l) {
                switch(l.label){
                    case 0:
                        return [
                            4,
                            A.getProfile()
                        ];
                    case 1:
                        if (e = l.sent(), !A.isSongleUser(e)) throw new Error("Songle authentication is required");
                        return A.isSpoofingSongleUser(e) ? (n = e.user, i = n.songleUserId, o = n.songleAccessToken, s = n.songleRefreshToken, a = {
                            songleUserId: i,
                            songleAccessToken: o,
                            songleRefreshToken: s
                        }, r = "?" + Object.keys(a).map(function(t) {
                            return "".concat(t, "=").concat(encodeURIComponent(a[t]));
                        }).join("&")) : r = "", (u = new FormData).append("file", t), [
                            4,
                            P("".concat(this.endpoint, "/songle/me/uploads.json").concat(r), u, {
                                withCredentials: !0
                            })
                        ];
                    case 2:
                        return (c = l.sent()) && 200 === c.status && c.data ? [
                            2,
                            c.data.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.search = function(t, e) {
        return void 0 === e && (e = !0), g(this, 0, void 0, function() {
            var r;
            return v(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            b("".concat(this.songleEndpoint, "/songs/search.json"), {
                                q: t,
                                lyrics: e ? 1 : 0
                            })
                        ];
                    case 1:
                        return (r = n.sent()) && 200 === r.status && r.data ? [
                            2,
                            {
                                success: !0,
                                data: r.data
                            }
                        ] : [
                            2,
                            {
                                success: !1
                            }
                        ];
                }
            });
        });
    }, t.prototype.copySongMap = function(t) {
        var e;
        return g(this, 0, void 0, function() {
            var r, n, i, o;
            return v(this, function(s) {
                switch(s.label){
                    case 0:
                        return r = t.sourceId, n = t.destinationId, i = t.types || [
                            "beat",
                            "chord",
                            "chorus",
                            "melody"
                        ], [
                            4,
                            P("".concat(this.endpoint, "/songle/me/songs/").concat(n, "/actions/copy_music_map.json"), {
                                source_id: r,
                                types: i
                            }, {
                                withCredentials: !0
                            })
                        ];
                    case 1:
                        return (o = s.sent()) && (null === (e = o.data) || void 0 === e ? void 0 : e.success) ? [
                            2,
                            {
                                success: !0
                            }
                        ] : [
                            2,
                            {
                                success: !1,
                                error: null == o ? void 0 : o.data
                            }
                        ];
                }
            });
        });
    }, t.prototype.createStage = function() {
        var t;
        return g(this, 0, void 0, function() {
            var e, r;
            return v(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            A.getProfile()
                        ];
                    case 1:
                        return e = n.sent(), [
                            4,
                            P("".concat(this.endpoint, "/etc/songs/stage"), null, {
                                postToken: null === (t = null == e ? void 0 : e.status) || void 0 === t ? void 0 : t.token,
                                withCredentials: !0
                            })
                        ];
                    case 2:
                        return [
                            2,
                            (null == (r = n.sent()) ? void 0 : r.data) || null
                        ];
                }
            });
        });
    }, t;
}()), G = function() {
    function t() {}
    return Object.defineProperty(t.prototype, "endpoint", {
        get: function() {
            return "".concat(m.textalive.server, "/templates/");
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.list = function(t) {
        return g(this, 0, void 0, function() {
            var e;
            return v(this, function(r) {
                switch(r.label){
                    case 0:
                        return [
                            4,
                            b("".concat(this.endpoint), t)
                        ];
                    case 1:
                        return (e = r.sent()) && 200 === e.status ? [
                            2,
                            e.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.load = function(t) {
        return g(this, 0, void 0, function() {
            var e;
            return v(this, function(r) {
                switch(r.label){
                    case 0:
                        return [
                            4,
                            b("".concat(this.endpoint + t))
                        ];
                    case 1:
                        return (e = r.sent()) && 200 === e.status ? [
                            2,
                            e.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.loadByName = function(t) {
        return g(this, 0, void 0, function() {
            var e, r, n;
            return v(this, function(i) {
                switch(i.label){
                    case 0:
                        return r = "latest", t && (e = t.match(/(.+)@([0-9]+)/)) && (t = e[1], r = e[2]), [
                            4,
                            b("".concat(this.endpoint + t, "/").concat(r))
                        ];
                    case 1:
                        return (n = i.sent()) && 200 === n.status ? [
                            2,
                            n.data
                        ] : "latest" !== r ? [
                            2,
                            this.loadByName(t)
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.loadForVideo = function(t, e) {
        return void 0 === e && (e = {
            script: !0,
            withoutAuthors: !0
        }), g(this, 0, void 0, function() {
            var r;
            return v(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            b("".concat(this.endpoint, "for/").concat(t), e)
                        ];
                    case 1:
                        return (r = n.sent()) && 200 === r.status ? [
                            2,
                            r.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.create = function(t) {
        return g(this, 0, void 0, function() {
            var e, r, n;
            return v(this, function(i) {
                switch(i.label){
                    case 0:
                        return [
                            4,
                            A.getToken()
                        ];
                    case 1:
                        return e = i.sent(), [
                            4,
                            P(this.endpoint, t, {
                                postToken: e,
                                withCredentials: !0
                            })
                        ];
                    case 2:
                        return (r = i.sent()) ? 200 !== r.status || Array.isArray(r.data) || r.data.error ? (n = Array.isArray(r.data) ? {
                            parseErrors: r.data
                        } : r.data, [
                            2,
                            y(y({}, n), {
                                success: !1
                            })
                        ]) : [
                            2,
                            y(y({}, r.data), {
                                success: !0
                            })
                        ] : [
                            2,
                            {
                                success: !1
                            }
                        ];
                }
            });
        });
    }, t.prototype.listContributors = function(t, e) {
        return g(this, 0, void 0, function() {
            var r;
            return v(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            b("".concat(this.endpoint).concat(t, "/").concat(e, "/contributors"))
                        ];
                    case 1:
                        return (r = n.sent()) && 200 === r.status ? [
                            2,
                            r.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t;
}(), q = new G, W = new (function() {
    function t() {}
    return Object.defineProperty(t.prototype, "endpoint", {
        get: function() {
            return "".concat(m.textalive.server, "/videos/");
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "rendererEndpoint", {
        get: function() {
            return "".concat(m.textalive.server, "/renderer/");
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.list = function(t) {
        return g(this, 0, void 0, function() {
            var e;
            return v(this, function(r) {
                switch(r.label){
                    case 0:
                        return [
                            4,
                            b("".concat(this.endpoint), t)
                        ];
                    case 1:
                        return (e = r.sent()) && 200 === e.status ? [
                            2,
                            e.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.load = function(t) {
        return g(this, 0, void 0, function() {
            var e, r, n, i, o, s, a;
            return v(this, function(u) {
                switch(u.label){
                    case 0:
                        return e = {}, [
                            4,
                            A.getProfile()
                        ];
                    case 1:
                        return r = u.sent(), A.isSpoofingSongleUser(r) && (n = r.user, i = n.songleUserId, o = n.songleAccessToken, s = n.songleRefreshToken, e = {
                            songleUserId: i,
                            songleAccessToken: o,
                            songleRefreshToken: s
                        }), [
                            4,
                            b("".concat(this.endpoint + t), e, {
                                withCredentials: !0
                            })
                        ];
                    case 2:
                        return (a = u.sent()) && 200 === a.status ? [
                            2,
                            a.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.create = function(t) {
        return g(this, 0, void 0, function() {
            var e, r;
            return v(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            A.getToken()
                        ];
                    case 1:
                        return e = n.sent(), [
                            4,
                            P(this.endpoint, t, {
                                postToken: e,
                                withCredentials: !0
                            })
                        ];
                    case 2:
                        return (r = n.sent()) ? 200 !== r.status || r.data.error ? [
                            2,
                            y(y({}, r.data), {
                                success: !1
                            })
                        ] : [
                            2,
                            y(y({}, r.data), {
                                success: !0
                            })
                        ] : [
                            2,
                            {
                                success: !1
                            }
                        ];
                }
            });
        });
    }, t.prototype.delete = function(t) {
        return g(this, 0, void 0, function() {
            var e, r;
            return v(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            A.getToken()
                        ];
                    case 1:
                        return e = n.sent(), [
                            4,
                            P("".concat(this.endpoint, "delete"), {
                                id: t
                            }, {
                                postToken: e,
                                withCredentials: !0
                            })
                        ];
                    case 2:
                        return (r = n.sent()) && 200 === r.status ? [
                            2,
                            {
                                success: !0,
                                video: r.data
                            }
                        ] : [
                            2,
                            {
                                success: !1,
                                video: null
                            }
                        ];
                }
            });
        });
    }, t.prototype.listContributors = function(t) {
        return g(this, 0, void 0, function() {
            var e;
            return v(this, function(r) {
                switch(r.label){
                    case 0:
                        return [
                            4,
                            b("".concat(this.endpoint).concat(t, "/contributors"), null, {
                                withCredentials: !0
                            })
                        ];
                    case 1:
                        return (e = r.sent()) && 200 === e.status ? [
                            2,
                            e.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.listRenderings = function(t) {
        return g(this, 0, void 0, function() {
            var e;
            return v(this, function(r) {
                switch(r.label){
                    case 0:
                        return [
                            4,
                            b("".concat(this.rendererEndpoint, "list"), {
                                videoId: t
                            }, {
                                withCredentials: !0
                            })
                        ];
                    case 1:
                        return (e = r.sent()) && 200 === e.status ? [
                            2,
                            e.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.getRenderingStatus = function(t) {
        return g(this, 0, void 0, function() {
            var e;
            return v(this, function(r) {
                switch(r.label){
                    case 0:
                        return [
                            4,
                            b("".concat(this.rendererEndpoint, "status"), {
                                id: t
                            }, {
                                withCredentials: !0
                            })
                        ];
                    case 1:
                        return (e = r.sent()) && 200 === e.status ? [
                            2,
                            e.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.render = function(t, e, r) {
        return g(this, 0, void 0, function() {
            var n, i, o;
            return v(this, function(s) {
                switch(s.label){
                    case 0:
                        return [
                            4,
                            A.getToken()
                        ];
                    case 1:
                        return n = s.sent(), i = {
                            token: n,
                            videoId: t,
                            quality: e
                        }, r && (i.authentication = !0), [
                            4,
                            P("".concat(this.rendererEndpoint, "render"), i, {
                                withCredentials: !0
                            })
                        ];
                    case 2:
                        return (o = s.sent()) && 200 === o.status ? [
                            2,
                            o.data
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.getDownloadInfo = function() {
        return g(this, 0, void 0, function() {
            var t;
            return v(this, function(e) {
                switch(e.label){
                    case 0:
                        return t = {
                            endpoint: "".concat(this.rendererEndpoint, "download")
                        }, [
                            4,
                            A.getToken()
                        ];
                    case 1:
                        return [
                            2,
                            (t.token = e.sent(), t)
                        ];
                }
            });
        });
    }, t;
}()), Y = {
    asset: w,
    endpoint: m,
    lyrics: D,
    song: V,
    template: q,
    text: R,
    font: C,
    user: A,
    video: W
}, z = function(t, e) {
    return z = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(t, e) {
        t.__proto__ = e;
    } || function(t, e) {
        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    }, z(t, e);
};
function J(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    function r() {
        this.constructor = t;
    }
    z(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
}
function H(t, e, r) {
    if (2 === arguments.length) for(var n, i = 0, o = e.length; i < o; i++)!n && i in e || (n || (n = Array.prototype.slice.call(e, 0, i)), n[i] = e[i]);
    return t.concat(n || Array.prototype.slice.call(e));
}
"function" == typeof SuppressedError && SuppressedError;
var X = function() {
    function t(t) {
        this.a = 0, this.r = 0, this.g = 0, this.b = 0, this.from(t);
    }
    return Object.defineProperty(t.prototype, "value", {
        get: function() {
            return this.valueArgb;
        },
        set: function(t) {
            this.fromNumber(t, !0);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "valueArgb", {
        get: function() {
            return this.valueRgb + 16777216 * (255 & this.a);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "valueRgb", {
        get: function() {
            return ((255 & this.r) << 8 | 255 & this.g) << 8 | 255 & this.b;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "hexRgb", {
        get: function() {
            return ("000000" + (16777215 & this.value).toString(16)).slice(-6);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "hexA", {
        get: function() {
            return ("00" + (255 & this.a).toString(16)).slice(-2);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "rgb", {
        get: function() {
            return "#".concat(this.hexRgb);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "cssRgb", {
        get: function() {
            return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "rgba", {
        get: function() {
            return "".concat(this.rgb).concat(this.hexA);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "argb", {
        get: function() {
            return "0x".concat(this.hexA).concat(this.rgb.substring(1));
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "cssRgba", {
        get: function() {
            return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a / 255 + ")";
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.eq = function(e) {
        return typeof this == typeof e && e instanceof t && this.value === e.value;
    }, t.prototype.toString = function(t) {
        return void 0 === t && (t = !0), t ? this.rgba : this.rgb;
    }, t.prototype.from = function(t) {
        if (void 0 === t && (t = "#000"), "object" == typeof t) {
            if (!t) return;
            return "number" == typeof t.value ? void (this.value = t.value) : "number" == typeof t.r && "number" == typeof t.g && "number" == typeof t.b ? (this.a = "number" == typeof t.a ? t.a : 255, this.r = t.r, this.g = t.g, void (this.b = t.b)) : void 0;
        }
        "string" == typeof t ? this.fromString(t) : "number" == typeof t && this.fromNumber(t);
    }, t.prototype.fromString = function(t) {
        if (t) {
            if ("#" === t.charAt(0) && (t = t.substring(1)), 4 === t.length) {
                var e = t.charAt(0), r = t.charAt(1), n = t.charAt(2), i = t.charAt(3);
                t = "".concat(e).concat(e).concat(r).concat(r).concat(n).concat(n).concat(i).concat(i);
            } else 3 === t.length && (e = t.charAt(0), r = t.charAt(1), n = t.charAt(2), t = "".concat(e).concat(e).concat(r).concat(r).concat(n).concat(n)), 6 === t.length && (t = "".concat(t, "ff"));
            var o = parseInt("".concat(t.substring(6)).concat(t.substring(0, 6)), 16);
            this.fromNumber(o, !0);
        }
    }, t.prototype.fromNumber = function(t, e) {
        void 0 === e && (e = !0), isNaN(t) || (this.a = e ? t >>> 24 & 255 : 0, this.r = t >>> 16 & 255, this.g = t >>> 8 & 255, this.b = t >>> 0 & 255);
    }, t;
}();
var Z = function() {
    function t(t, e, r) {
        void 0 === t && (t = "Noto Sans Japanese"), void 0 === e && (e = 40), void 0 === r && (r = ""), this._family = t, this._size = e, this._style = r;
    }
    return Object.defineProperty(t.prototype, "family", {
        get: function() {
            return this._family;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this._size;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "style", {
        get: function() {
            return this._style;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.deriveFamily = function(e) {
        return new t(e, this._size, this._style);
    }, t.prototype.deriveStyle = function(e) {
        return new t(this._family, this._size, e);
    }, t.prototype.deriveSize = function(e) {
        return new t(this._family, e, this._style);
    }, t.prototype.clone = function() {
        return new t(this._family, this._size, this._style);
    }, t.prototype.eq = function(t) {
        return this._family === t._family && this._size === t._size && this._style === t._style;
    }, t.prototype.toString = function(t) {
        void 0 === t && (t = 1);
        var e, r = function(t) {
            if (!t || t.length <= 0) return [];
            for(var e = [], r = "", n = !1, i = !1, o = !1, s = 0, a = t; s < a.length; s++){
                var u = a[s];
                if (i ? o ? o = !1 : "\\" === u ? o = !0 : u === i && (i = !1) : '"' === u || "'" === u ? i = u : "," === u && (n = !0), n) {
                    var c = r.trim();
                    "" !== c && e.push(c), r = "", n = !1;
                } else r += u;
            }
            var l = r.trim();
            return "" !== l && e.push(l), e;
        }(this._family);
        return e = r.length < 1 ? "" : r.length > 1 ? " " + r.join(", ") : (e = r[0]).length > 1 && e[0] !== e[e.length - 1] || "'" !== e[0] && '"' !== e[0] ? " '".concat(e, "'") : " ".concat(e), this._style + (this._style.length > 0 ? " " : "") + this._size * t + "px" + e;
    }, t;
}(), $ = function() {
    function t() {}
    return Object.defineProperty(t.prototype, "duration", {
        get: function() {
            return this.endTime - this.startTime;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.contains = function(t) {
        return t >= this.startTime && t <= this.endTime;
    }, t.prototype.overlaps = function(t, e) {
        if ("object" == typeof t) return this.overlaps(t.startTime, t.endTime);
        var r = t;
        return this.contains(r) || this.contains(e) || this.startTime <= r && this.endTime >= e;
    }, t.prototype.progress = function(t) {
        return this.contains(t) ? (t - this.startTime) / this.duration : -1;
    }, t;
}(), K = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e._parent = null, e._children = [], e._previous = null, e._next = null, e._runtime = null, e._templates = [], e;
    }
    return J(e, t), Object.defineProperty(e.prototype, "video", {
        get: function() {
            return this.parent && this.parent.video;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "parent", {
        get: function() {
            return this._parent;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "children", {
        get: function() {
            return this._children;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "previous", {
        get: function() {
            return this._previous;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "next", {
        get: function() {
            return this._next;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "startTime", {
        get: function() {
            return this._data ? this._data.startTime : 0;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "endTime", {
        get: function() {
            return this._data ? this._data.endTime : 0;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "duration", {
        get: function() {
            return this.endTime - this.startTime;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "rendering", {
        get: function() {
            return this._runtime ? this._runtime.rendering : null;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "graphics", {
        get: function() {
            return this._runtime ? this._runtime.graphics : null;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "templates", {
        get: function() {
            return this._templates.slice();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "templateCount", {
        get: function() {
            return this._templates.length;
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.maximize = function() {
        var t = !1, e = this.endTime, r = Math.max(null === this._parent ? 0 : this._parent.startTime, null === this._previous ? 0 : this._previous.endTime);
        r !== this.startTime && (this.moveWithChildren(r - this.startTime), t = !0);
        var n = Math.min(null === this._parent ? this.video.duration : this._parent.endTime, null === this._next ? this.video.duration : this._next.startTime);
        return n !== this.endTime && (this._data.endTime = n, t = e !== n), t;
    }, e.prototype.moveWithChildren = function(t) {
        var e = [];
        for(e.push(this); e.length > 0;){
            var r = e.pop();
            null != r._children && r._children.forEach(function(t) {
                return e.push(t);
            }), r._data.startTime += t, r._data.endTime += t;
        }
    }, e.prototype.getTemplate = function(t) {
        return void 0 === t && (t = 0), t < 0 || t >= this._templates.length ? null : this._templates[t];
    }, e.prototype.addTemplateAt = function(t, e) {
        this._templates.splice(e, 0, t), t.assignedUnit = this;
    }, e.prototype.addTemplate = function(t) {
        this._templates.push(t), t.assignedUnit = this;
    }, e.prototype.removeTemplates = function() {
        for(var t = this._templates.slice(); this._templates.length > 0;)this._templates.pop();
        return t;
    }, e.prototype.removeTemplateAt = function(t) {
        if (t < 0 || t >= this._templates.length) return null;
        var e = this._templates.splice(t, 1)[0];
        return e.assignedUnit = null, e;
    }, e.prototype.removeTemplate = function(t) {
        for(var e = 0; e < this._templates.length; e++){
            var r = this._templates[e];
            if (r === t) return this._templates.splice(e, 1), t.assignedUnit = null, r;
        }
        return null;
    }, e.prototype.getType = function() {
        return n.NONE;
    }, e.prototype.toString = function() {
        return "RenderingUnit";
    }, e;
}($);
function Q(t, e) {
    return "number" == typeof e && !isNaN(e) && e > t ? e : t;
}
function tt(t, e) {
    return "number" == typeof e && !isNaN(e) && e < t ? e : t;
}
var et = function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return J(e, t), Object.defineProperty(e.prototype, "text", {
        get: function() {
            var t = "";
            return this.children.forEach(function(e) {
                t += e.text;
            }), t;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "color", {
        get: function() {
            return this.children.reduce(function(t, e) {
                return null === t ? e.color : void 0 === t || t.eq(e.color) ? t : void 0;
            }, null);
        },
        set: function(t) {
            null !== t && this.children.forEach(function(e) {
                e.color = t;
            });
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "font", {
        set: function(t) {
            null !== t && this.children.forEach(function(e) {
                e.font = t;
            });
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "fontFamily", {
        get: function() {
            return this.children.reduce(function(t, e) {
                var r = e.fontFamily;
                return void 0 === t || null !== t && t !== r ? void 0 : r;
            }, null);
        },
        set: function(t) {
            this.children.forEach(function(e) {
                e.fontFamily = t;
            });
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "fontStyle", {
        get: function() {
            return this.children.reduce(function(t, e) {
                var r = e.fontStyle;
                return void 0 === t || null !== t && t !== r ? void 0 : r;
            }, null);
        },
        set: function(t) {
            this.children.forEach(function(e) {
                e.fontStyle = t;
            });
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "fontSize", {
        get: function() {
            return this.children.length <= 0 ? 0 : this.children.reduce(function(t, e) {
                return t + e.fontSize;
            }, 0) / this.children.length;
        },
        set: function(t) {
            this.children.forEach(function(e) {
                e.fontSize = t;
            });
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "advance", {
        get: function() {
            return this.children.reduce(function(t, e) {
                return t + e.advance;
            }, 0);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "ascent", {
        get: function() {
            return this.children.reduce(function(t, e) {
                return Math.max(t, e.ascent);
            }, 0);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "descent", {
        get: function() {
            return this.children.reduce(function(t, e) {
                return Math.max(t, e.descent);
            }, 0);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "height", {
        get: function() {
            return this.ascent + this.descent;
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.expandTime = function(t) {
        return {
            startTime: tt(this.startTime, t.startTime),
            endTime: Q(this.endTime, t.endTime)
        };
    }, e.prototype.toString = function() {
        return this.text;
    }, e;
}(K), rt = function(t) {
    function e(e) {
        var r = t.call(this) || this;
        return r._data = e, r._font = new Z(e && e.fontFamily, e && e.fontSize, e && e.fontStyle), r._color = new X, r;
    }
    return J(e, t), Object.defineProperty(e.prototype, "parent", {
        get: function() {
            return this._parent;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "previous", {
        get: function() {
            return this._previous;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "next", {
        get: function() {
            return this._next;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "text", {
        get: function() {
            return this._data && this._data.char || "?";
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "advance", {
        get: function() {
            return this._runtime ? this._runtime.advance : 0;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "ascent", {
        get: function() {
            return this._runtime ? this._runtime.ascent : 0;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "descent", {
        get: function() {
            return this._runtime ? this._runtime.descent : 0;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "font", {
        get: function() {
            return this._font;
        },
        set: function(t) {
            null === t || this.font.eq(t) || (this._font = t.clone(), this._data.fontFamily = t.family, this._data.fontSize = t.size, this._data.fontStyle = t.style, this._runtime && this._runtime.onFontUpdate(this.font));
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "fontFamily", {
        get: function() {
            return this.font.family;
        },
        set: function(t) {
            this.font.family !== t && (this._font = this.font.deriveFamily(t), this._data.fontFamily = t, this._runtime && this._runtime.onFontUpdate(this.font));
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "fontStyle", {
        get: function() {
            return this.font.style;
        },
        set: function(t) {
            this.font.style !== t && (this._font = this.font.deriveStyle(t), this._data.fontStyle = t, this._runtime && this._runtime.onFontUpdate(this.font));
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "fontSize", {
        get: function() {
            return this.font.size;
        },
        set: function(t) {
            isNaN(t) || this.font.size === t || (this._font = this.font.deriveSize(t), this._data.fontSize = t, this._runtime && this._runtime.onFontUpdate(this.font));
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "color", {
        get: function() {
            return this._color;
        },
        set: function(t) {
            t && !t.eq(this.color) && (this._color = t, this._runtime && this._runtime.onColorUpdate(t));
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.getType = function() {
        return n.CHAR;
    }, e;
}(et), nt = function(t) {
    function e(e) {
        var r = t.call(this) || this;
        return r._data = e, r;
    }
    return J(e, t), e.prototype.getType = function() {
        return n.GRAPHIC;
    }, e.prototype.toString = function() {
        return "Graphic";
    }, e;
}(K), it = function(t) {
    function e(e) {
        var r = t.call(this) || this;
        return r._data = e, r;
    }
    return J(e, t), Object.defineProperty(e.prototype, "parent", {
        get: function() {
            return this._parent;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "children", {
        get: function() {
            return this._children.slice();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "previous", {
        get: function() {
            return this._previous;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "next", {
        get: function() {
            return this._next;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "startTime", {
        get: function() {
            return this.firstChar ? this.firstChar.startTime : 0;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "endTime", {
        get: function() {
            return this.lastChar ? this.lastChar.endTime : 0;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "pos", {
        get: function() {
            return this._data && this._data.pos || "";
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "rawPos", {
        get: function() {
            return this._data && this._data.rawPoS || "";
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "language", {
        get: function() {
            return this._data && this._data.language || "";
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "countDown", {
        get: function() {
            return this._data ? this._data.countDown : -1;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "countUp", {
        get: function() {
            return this._data ? this._data.countUp : -1;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "initialCount", {
        get: function() {
            return this._data ? this._data.initialCount : -1;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "charCount", {
        get: function() {
            return this._children.length;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "firstChar", {
        get: function() {
            return this._children.length <= 0 ? null : this._children[0];
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "lastChar", {
        get: function() {
            return this._children.length <= 0 ? null : this._children[this._children.length - 1];
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.addChar = function(t) {
        if (t) {
            this._children.length > 0 && (t._previous = this.lastChar, this.lastChar._next = t), this._children.push(t), t._parent = this;
            var e = this.expandTime(t), r = e.startTime, n = e.endTime;
            this._data.startTime = r, this._data.endTime = n;
        }
    }, e.prototype.findIndex = function(t) {
        return t instanceof rt ? this._children.indexOf(t) : -1;
    }, e.prototype.getType = function() {
        return n.WORD;
    }, e;
}(et), ot = function(t) {
    function e(e, r) {
        var n = t.call(this) || this;
        return n._video = e, n._data = r, n.createUnits(), n;
    }
    return J(e, t), e.prototype.createUnits = function() {
        var t = this, e = this._data;
        e && Array.isArray(e.words) && e.words.forEach(function(e) {
            if (e) {
                var r = new it(e);
                Array.isArray(e.characters) && e.characters.forEach(function(t) {
                    return r.addChar(new rt(t));
                }), t.addWord(r);
            }
        });
    }, Object.defineProperty(e.prototype, "children", {
        get: function() {
            return this._children.slice();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "previous", {
        get: function() {
            return this._previous;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "next", {
        get: function() {
            return this._next;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "video", {
        get: function() {
            return this._video;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "startTime", {
        get: function() {
            return this.firstChar ? this.firstChar.startTime : 0;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "endTime", {
        get: function() {
            return this.lastChar ? this.lastChar.endTime : 0;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "wordCount", {
        get: function() {
            return this._children.length;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "charCount", {
        get: function() {
            return this._children.reduce(function(t, e) {
                return t + e.charCount;
            }, 0);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "firstWord", {
        get: function() {
            return this._children.length <= 0 ? null : this._children[0];
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "lastWord", {
        get: function() {
            return this._children.length <= 0 ? null : this._children[this._children.length - 1];
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "firstChar", {
        get: function() {
            var t = this.firstWord;
            return null === t ? null : t.firstChar;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "lastChar", {
        get: function() {
            var t = this.lastWord;
            return null === t ? null : t.lastChar;
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.getWord = function(t) {
        return t < 0 || t >= this._children.length ? null : this._children[t];
    }, e.prototype.getChar = function(t) {
        if (t < 0) return null;
        for(var e = 0, r = this.firstWord;;){
            if (!r) return null;
            if (e + r.children.length > t) break;
            e += r.children.length, r = r.next;
        }
        return r.children[t - e];
    }, e.prototype.addWord = function(t) {
        if (t) {
            this._children.length > 0 && (t._previous = this.lastWord, t._previous._next = t, t.firstChar._previous = t._previous.lastChar, t._previous.lastChar._next = t.firstChar), this._children.push(t), t._parent = this;
            var e = this.expandTime(t), r = e.startTime, n = e.endTime;
            this._data.startTime = r, this._data.endTime = n;
        }
    }, e.prototype.findIndex = function(t) {
        if (t instanceof it) return this._children.indexOf(t);
        if (t instanceof rt) {
            for(var e = 0, r = !1, n = 0, i = this._children; n < i.length; n++){
                var o = i[n], s = o.findIndex(t);
                if (!(s < 0)) {
                    e += s, r = !0;
                    break;
                }
                e += o.charCount;
            }
            return r ? e : -1;
        }
        return -1;
    }, e.prototype.getType = function() {
        return n.PHRASE;
    }, e;
}(et);
function st(t, e, n) {
    if (!t || t.length <= 0) return null;
    var i = r.sortedIndex(t, e, function(t) {
        return t.endTime;
    });
    if (i < 0) return null;
    if (n && "endTime" in n && "number" == typeof n.endTime) {
        i >= t.length && (i = t.length - 1);
        var o = e, s = n.endTime;
        return t[i].overlaps(o, s) ? t[i] : i < 1 ? null : t[i - 1].overlaps(o, s) ? t[i - 1] : null;
    }
    return i >= t.length ? null : n && "loose" in n && n.loose || t[i].contains(e) ? t[i] : null;
}
function at(t, e, n) {
    if (!t || t.length <= 0) return {
        current: null,
        entered: [],
        left: [],
        previous: null,
        next: null
    };
    var i = r.sortedIndex(t, e, function(t) {
        return t.startTime;
    });
    i < t.length && t[i].startTime === e && i++;
    var o, s, a, u = i - 1 < 0 ? -1 : t[i - 1].startTime <= e && t[i - 1].endTime > e ? i - 2 : i - 1, c = r.sortedIndex(t, n, function(t) {
        return t.endTime;
    });
    c >= t.length ? (o = -1, s = -1, a = t[c - 1].endTime > e ? t.length : 0) : (t[c].startTime > n ? (o = -1, s = c) : c + 1 >= t.length || t[c + 1].startTime > n ? (o = t[c].endTime > n && t[c].startTime <= n ? c : -1, s = c + 1) : (o = c + 1, s = c + 2), a = t[c].endTime <= n ? c + 1 : c);
    var l = u >= 0 ? t[u] : null, p = s >= 0 && s < t.length ? t[s] : null;
    return {
        current: o >= 0 ? t[o] : null,
        entered: t.slice(i, s),
        left: t.slice(u + 1, a),
        previous: l,
        next: p
    };
}
var ut = function(t) {
    function e(e) {
        var r = t.call(this) || this;
        return r._credits = [], r._phrases = [], r._graphics = [], r.data = e || {}, r.createUnits(), r;
    }
    return J(e, t), Object.defineProperty(e.prototype, "credits", {
        get: function() {
            return this._credits.slice();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "phrases", {
        get: function() {
            return this._phrases.slice();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "words", {
        get: function() {
            return this._phrases.reduce(function(t, e) {
                return t.splice.apply(t, H([
                    t.length,
                    0
                ], e._children, !1)), t;
            }, []);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "chars", {
        get: function() {
            return this.words.reduce(function(t, e) {
                return t.splice.apply(t, H([
                    t.length,
                    0
                ], e._children, !1)), t;
            }, []);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "graphics", {
        get: function() {
            return this._graphics.slice();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "rendering", {
        get: function() {
            return this._runtime.rendering;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "duration", {
        get: function() {
            return this.data.duration || 0;
        },
        set: function(t) {
            this.data.duration = t;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "startTime", {
        get: function() {
            return this.data.startTime || 0;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "endTime", {
        get: function() {
            return this.data.endTime || 0;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "creditCount", {
        get: function() {
            return this._credits.length;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "phraseCount", {
        get: function() {
            return this._phrases.length;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "graphicCount", {
        get: function() {
            return this._graphics.length;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "wordCount", {
        get: function() {
            return this._phrases.reduce(function(t, e) {
                return t + e.wordCount;
            }, 0);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "charCount", {
        get: function() {
            return this._phrases.reduce(function(t, e) {
                return t + e.charCount;
            }, 0);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "firstCredit", {
        get: function() {
            return this._credits.length <= 0 ? null : this._credits[0];
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "lastCredit", {
        get: function() {
            return this._credits.length <= 0 ? null : this._credits[this._credits.length - 1];
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "firstPhrase", {
        get: function() {
            return this._phrases.length <= 0 ? null : this._phrases[0];
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "lastPhrase", {
        get: function() {
            return this._phrases.length <= 0 ? null : this._phrases[this._phrases.length - 1];
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "firstWord", {
        get: function() {
            var t;
            return (null === (t = this.firstPhrase) || void 0 === t ? void 0 : t.firstWord) || null;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "lastWord", {
        get: function() {
            var t;
            return (null === (t = this.lastPhrase) || void 0 === t ? void 0 : t.lastWord) || null;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "firstChar", {
        get: function() {
            var t;
            return (null === (t = this.firstWord) || void 0 === t ? void 0 : t.firstChar) || null;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "lastChar", {
        get: function() {
            var t;
            return (null === (t = this.lastWord) || void 0 === t ? void 0 : t.lastChar) || null;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "firstGraphic", {
        get: function() {
            return this._graphics.length <= 0 ? null : this._graphics[0];
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "lastGraphic", {
        get: function() {
            return this._graphics.length <= 0 ? null : this._graphics[this._graphics.length - 1];
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.createUnits = function() {
        var t, e, r = this;
        Array.isArray(this.data.credits) ? (this.data.credits.sort(ct), this.data.credits.forEach(function(t) {
            return r.doAddCredit(new ot(r, t), !1);
        }), this.organizeTimings(null === (t = this.firstCredit) || void 0 === t ? void 0 : t.firstChar)) : this.data.credits = [], Array.isArray(this.data.phrases) ? (this.data.phrases.sort(ct), this.data.phrases.forEach(function(t) {
            return r.doAddPhrase(new ot(r, t), !1);
        }), this.organizeTimings(null === (e = this.firstPhrase) || void 0 === e ? void 0 : e.firstChar)) : this.data.phrases = [], Array.isArray(this.data.graphics) ? (this.data.graphics.sort(ct), this.data.graphics.forEach(function(t) {
            return r.doAddGraphic(new nt(t), !1);
        })) : this.data.graphics = [];
    }, e.prototype.organizeTimings = function(t) {
        for(; t;)t.startTime === t.endTime && t.maximize(), t = t.next;
    }, e.prototype.exportData = function(t) {
        this.updateTemplateData(t);
        for(var r = e.exportUnitData(this.data.credits, !0), n = r.units, i = r.templateClasses, o = e.exportUnitData(this.data.phrases, !1), s = o.units, a = o.templateClasses, u = e.exportUnitData(this.data.graphics, !0), c = u.units, l = u.templateClasses, p = i.concat(a, l).filter(function(t, e, r) {
            return r.indexOf(t) === e;
        }), h = {}; p.length > 0;){
            var d = p.shift(), f = t.getByName(d);
            if (f) {
                h[d] = f.id;
                for(var y = 0, g = t.getRequiredTemplates(f.script); y < g.length; y++){
                    var v = g[y];
                    h[v] || p.push(v);
                }
            } else console.log("template class not found", d);
        }
        return {
            credits: n,
            phrases: s,
            graphics: c,
            templateClasses: h
        };
    }, e.exportUnitData = function(t, r) {
        if (void 0 === r && (r = !1), !t) return {
            units: [],
            templateClasses: []
        };
        for(var n = [], i = [], o = 0, s = t; o < s.length; o++){
            var a = s[o], u = {
                templates: a.templates ? a.templates.map(function(t) {
                    var e = t.type;
                    i.push(e);
                    var r = {};
                    return Object.keys(t.value).forEach(function(e) {
                        var n = t.value[e];
                        r[e] = "object" == typeof n ? Object.assign({}, n) : n;
                    }), {
                        type: e,
                        value: r
                    };
                }) : []
            }, c = void 0;
            if (a.words) {
                var l = a, p = e.exportUnitData(l.words);
                u.words = p.units, c = p.templateClasses;
            } else if (a.characters) {
                var h = a, d = e.exportUnitData(h.characters);
                u.characters = d.units, c = d.templateClasses;
            } else {
                for(var f = 0, y = [
                    "fontFamily",
                    "fontSize",
                    "fontStyle"
                ]; f < y.length; f++){
                    var g = y[f];
                    a[g] && (u[g] = a[g]);
                }
                c = [];
            }
            r && (u.startTime = a.startTime, u.endTime = a.endTime), n.push(u), i = i.concat(c);
        }
        return {
            units: n,
            templateClasses: i = i.filter(function(t, e, r) {
                return r.indexOf(t) === e;
            })
        };
    }, e.prototype.updateTemplateData = function(t) {
        e.updateTemplateDataForUnits(t, this.firstCredit, this.data.credits), e.updateTemplateDataForUnits(t, this.firstPhrase, this.data.phrases), e.updateTemplateDataForUnits(t, this.firstGraphic, this.data.graphics);
    }, e.updateTemplateDataForUnits = function(t, r, n) {
        if (r && n) for(var i = 0, o = n; i < o.length; i++){
            var s = o[i];
            s.templates = [];
            for(var a = 0; a < r.templateCount; a++){
                var u = r.getTemplate(a), c = t.exportInstance(u);
                s.templates.push(c);
            }
            if (s.words) {
                var l = s;
                e.updateTemplateDataForUnits(t, r.children[0], l.words);
            } else if (s.characters) {
                var p = s;
                e.updateTemplateDataForUnits(t, r.children[0], p.characters);
            }
            r = r.next;
        }
    }, e.prototype.addCredit = function(t) {
        this.doAddCredit(t, !0);
    }, e.prototype.doAddCredit = function(t, e) {
        var r = this.addRenderingUnit(this._credits, t);
        e && this.data.credits.splice(r, 0, t._data), this._runtime && this._runtime.addCredit(t);
    }, e.prototype.addPhrase = function(t) {
        this.doAddPhrase(t, !0);
    }, e.prototype.doAddPhrase = function(t, e) {
        var r = this.addRenderingUnit(this._phrases, t);
        e && this.data.phrases.splice(r, 0, t._data), this._runtime && this._runtime.addPhrase(t);
    }, e.prototype.addGraphic = function(t) {
        this.doAddGraphic(t, !0);
    }, e.prototype.doAddGraphic = function(t, e) {
        if (t) {
            var r = this.addRenderingUnit(this._graphics, t);
            e && this.data.graphics.splice(r, 0, t._data), this._runtime && this._runtime.addGraphic(t);
        }
    }, e.prototype.addRenderingUnit = function(t, e) {
        if (e) {
            var n = r.sortedIndex(t, e, lt), i = n > 0 ? t[n - 1] : null, o = n < t.length ? t[n] : null;
            if (t.splice(n, 0, e), i && (e._previous = i, e._previous._next = e), o && (o._previous = e, e._next = o), e instanceof ot && e.wordCount > 0) {
                for(var s = i; s && !s.lastWord;)s = s.previous;
                for(var a = o; a && !a.firstWord;)a = a.next;
                if (s && (e.firstWord._previous = s.lastWord, s.lastWord._next = e.firstWord), a && (e.lastWord._next = a.firstWord, a.firstWord._previous = e.lastWord), e.charCount > 0) {
                    for(var u = null == s ? void 0 : s.lastWord; u && null === u.lastChar;)u = u.previous;
                    for(var c = null == a ? void 0 : a.firstWord; c && null === c.firstChar;)c = c.next;
                    u && (e.firstChar._previous = u.lastChar, u.lastChar._next = e.firstChar), c && (e.lastChar._next = c.firstChar, c.firstChar._previous = e.lastChar);
                }
            }
            return this.updateStartAndEndTime(), n;
        }
    }, e.prototype.removeCredit = function(t) {
        var e = this.removeRenderingUnit(this._credits, t);
        return !(e < 0 || (this.data.credits.splice(e, 1), this._runtime && this._runtime.removeCredit(t), 0));
    }, e.prototype.removeCredits = function() {
        var t = this;
        this._runtime && this._credits.forEach(function(e) {
            return t._runtime.removeCredit(e);
        }), this._credits = [], this.data.credits.splice(0, this.data.credits.length);
    }, e.prototype.removePhrase = function(t) {
        var e = this.removeRenderingUnit(this._phrases, t);
        return !(e < 0 || (this.data.phrases.splice(e, 1), this._runtime && this._runtime.removePhrase(t), 0));
    }, e.prototype.removePhrases = function() {
        var t = this;
        this._runtime && this._phrases.forEach(function(e) {
            return t._runtime.removePhrase(e);
        }), this._phrases = [], this.data.phrases.splice(0, this.data.phrases.length);
    }, e.prototype.removeGraphic = function(t) {
        var e = this.removeRenderingUnit(this._graphics, t);
        return !(e < 0 || (this.data.graphics.splice(e, 1), this._runtime && this._runtime.removeGraphic(t), 0));
    }, e.prototype.removeGraphics = function() {
        var t = this;
        this._runtime && this._graphics.forEach(function(e) {
            return t._runtime.removeGraphic(e);
        }), this._graphics = [], this.data.graphics.splice(0, this.data.graphics.length), this.rendering.reset();
    }, e.prototype.removeRenderingUnit = function(t, e) {
        var n = r.sortedIndex(t, e, lt);
        if (n < 0 || t[n] !== e) return -1;
        if (t.splice(n, 1), e instanceof ot) {
            if (e.charCount > 0) {
                for(var i = e._previous; i && null === i.lastChar;)i = i.previous;
                for(var o = e._next; o && null === o.firstChar;)o = o.next;
                i && o ? (i.lastChar._next = o.firstChar, o.firstChar._previous = i.lastChar) : i ? i.lastChar._next = null : o && (o.firstChar._previous = null);
            }
            if (e.wordCount > 0) {
                for(i = e._previous; i && null === i.lastWord;)i = i.previous;
                for(o = e._next; o && null === o.firstWord;)o = o.next;
                i && o ? (i.lastWord._next = o.firstWord, o.firstWord._previous = i.lastWord) : i ? i.lastWord._next = null : o && (o.firstWord._previous = null);
            }
        }
        e._previous && (e._previous._next = e._next), e._next && (e._next._previous = e._previous), this.updateStartAndEndTime();
    }, e.prototype.updateStartAndEndTime = function() {
        var t, e, r, n, i, o, s, a;
        this.data.endTime = Math.max((null === (e = null === (t = this.lastCredit) || void 0 === t ? void 0 : t.lastChar) || void 0 === e ? void 0 : e.endTime) || 0, (null === (r = this.lastChar) || void 0 === r ? void 0 : r.endTime) || 0, (null === (n = this.lastGraphic) || void 0 === n ? void 0 : n.endTime) || 0);
        var u = null === (o = null === (i = this.firstCredit) || void 0 === i ? void 0 : i.firstChar) || void 0 === o ? void 0 : o.startTime, c = null === (s = this.firstChar) || void 0 === s ? void 0 : s.startTime, l = null === (a = this.firstGraphic) || void 0 === a ? void 0 : a.startTime;
        this.data.startTime = Math.min("number" == typeof u ? u : Number.MAX_VALUE, "number" == typeof c ? c : Number.MAX_VALUE, "number" == typeof l ? l : Number.MAX_VALUE, this.data.endTime);
    }, e.prototype.findIndex = function(t) {
        if (t instanceof ot) return (e = this._phrases.indexOf(t)) >= 0 ? e : this._credits.indexOf(t);
        if (t instanceof it) {
            for(var e = 0, r = !1, n = 0, i = this._phrases; n < i.length; n++){
                if (!((u = (a = i[n]).findIndex(t)) < 0)) {
                    e += u, r = !0;
                    break;
                }
                e += a.wordCount;
            }
            return r ? e : -1;
        }
        if (t instanceof rt) {
            e = 0, r = !1;
            for(var o = 0, s = this._phrases; o < s.length; o++){
                var a, u;
                if (!((u = (a = s[o]).findIndex(t)) < 0)) {
                    e += u, r = !0;
                    break;
                }
                e += a.charCount;
            }
            return r ? e : -1;
        }
        return t instanceof nt ? this._graphics.indexOf(t) : -1;
    }, e.prototype.getCredit = function(t) {
        return t < 0 || t >= this._credits.length ? null : this._credits[t];
    }, e.prototype.getPhrase = function(t) {
        return t < 0 || t >= this._phrases.length ? null : this._phrases[t];
    }, e.prototype.getWord = function(t) {
        if (t < 0) return null;
        for(var e = 0, r = this.firstPhrase;;){
            if (!r) return null;
            if (e + r.children.length > t) break;
            e += r.children.length, r = r.next;
        }
        return r.children[t - e];
    }, e.prototype.getChar = function(t) {
        if (t < 0) return null;
        for(var e = 0, r = this.firstWord;;){
            if (!r) return null;
            if (e + r.children.length > t) break;
            e += r.children.length, r = r.next;
        }
        return r.children[t - e];
    }, e.prototype.getGraphic = function(t) {
        return t < 0 || t >= this._graphics.length ? null : this._graphics[t];
    }, e.prototype.findCredit = function(t, e) {
        return st(this._credits, t, e);
    }, e.prototype.findCreditChange = function(t, e) {
        return at(this._credits, t, e);
    }, e.prototype.findPhrase = function(t, e) {
        return st(this._phrases, t, e);
    }, e.prototype.findPhraseChange = function(t, e) {
        return at(this._phrases, t, e);
    }, e.prototype.findWord = function(t, e) {
        var r = this.findPhrase(t, e);
        return r ? st(r._children, t, e) : null;
    }, e.prototype.findWordChange = function(t, e) {
        return at(this.words, t, e);
    }, e.prototype.findChar = function(t, e) {
        var r = this.findWord(t, e);
        return r ? st(r._children, t, e) : null;
    }, e.prototype.findCharChange = function(t, e) {
        return at(this.chars, t, e);
    }, e.prototype.findGraphic = function(t, e) {
        return st(this._graphics, t, e);
    }, e.prototype.findGraphicChange = function(t, e) {
        return at(this._graphics, t, e);
    }, e;
}($);
function ct(t, e) {
    return t.startTime - e.startTime;
}
function lt(t) {
    return t.startTime;
}
var pt = function() {
    function t(t, e, r, n, i, o) {
        void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === r && (r = 0), void 0 === n && (n = 1), void 0 === i && (i = 0), void 0 === o && (o = 0), this.setValues(t, e, r, n, i, o);
    }
    return t.prototype.setValues = function(t, e, r, n, i, o) {
        return void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === r && (r = 0), void 0 === n && (n = 1), void 0 === i && (i = 0), void 0 === o && (o = 0), this.a = t, this.b = e, this.c = r, this.d = n, this.tx = i, this.ty = o, this;
    }, t.prototype.append = function(t, e, r, n, i, o) {
        var s = this.a, a = this.b, u = this.c, c = this.d;
        return 1 == t && 0 == e && 0 == r && 1 == n || (this.a = s * t + u * e, this.b = a * t + c * e, this.c = s * r + u * n, this.d = a * r + c * n), this.tx = s * i + u * o + this.tx, this.ty = a * i + c * o + this.ty, this;
    }, t.prototype.prepend = function(t, e, r, n, i, o) {
        var s = this.a, a = this.c, u = this.tx;
        return this.a = t * s + r * this.b, this.b = e * s + n * this.b, this.c = t * a + r * this.d, this.d = e * a + n * this.d, this.tx = t * u + r * this.ty + i, this.ty = e * u + n * this.ty + o, this;
    }, t.prototype.appendMatrix = function(t) {
        return this.append(t.a, t.b, t.c, t.d, t.tx, t.ty);
    }, t.prototype.prependMatrix = function(t) {
        return this.prepend(t.a, t.b, t.c, t.d, t.tx, t.ty);
    }, t.prototype.appendTransform = function(e, r, n, i, o, s, a, u, c) {
        var l, p, h;
        return o % 360 ? (l = o * t.DEG_TO_RAD, p = Math.cos(l), h = Math.sin(l)) : (p = 1, h = 0), s || a ? (s *= t.DEG_TO_RAD, a *= t.DEG_TO_RAD, this.append(Math.cos(a), Math.sin(a), -Math.sin(s), Math.cos(s), e, r), this.append(p * n, h * n, -h * i, p * i, 0, 0)) : this.append(p * n, h * n, -h * i, p * i, e, r), (u || c) && (this.tx -= u * this.a + c * this.c, this.ty -= u * this.b + c * this.d), this;
    }, t.prototype.prependTransform = function(e, r, n, i, o, s, a, u, c) {
        var l, p, h;
        return o % 360 ? (l = o * t.DEG_TO_RAD, p = Math.cos(l), h = Math.sin(l)) : (p = 1, h = 0), (u || c) && (this.tx -= u, this.ty -= c), s || a ? (s *= t.DEG_TO_RAD, a *= t.DEG_TO_RAD, this.prepend(p * n, h * n, -h * i, p * i, 0, 0), this.prepend(Math.cos(a), Math.sin(a), -Math.sin(s), Math.cos(s), e, r)) : this.prepend(p * n, h * n, -h * i, p * i, e, r), this;
    }, t.prototype.rotate = function(e) {
        e *= t.DEG_TO_RAD;
        var r = Math.cos(e), n = Math.sin(e), i = this.a, o = this.b;
        return this.a = i * r + this.c * n, this.b = o * r + this.d * n, this.c = -i * n + this.c * r, this.d = -o * n + this.d * r, this;
    }, t.prototype.skew = function(e, r) {
        return e *= t.DEG_TO_RAD, r *= t.DEG_TO_RAD, this.append(Math.cos(r), Math.sin(r), -Math.sin(e), Math.cos(e), 0, 0), this;
    }, t.prototype.scale = function(t, e) {
        return this.a *= t, this.b *= t, this.c *= e, this.d *= e, this;
    }, t.prototype.translate = function(t, e) {
        return this.tx += this.a * t + this.c * e, this.ty += this.b * t + this.d * e, this;
    }, t.prototype.identity = function() {
        return this.a = this.d = 1, this.b = this.c = this.tx = this.ty = 0, this;
    }, t.prototype.invert = function() {
        var t = this.a, e = this.b, r = this.c, n = this.d, i = this.tx, o = t * n - e * r;
        return this.a = n / o, this.b = -e / o, this.c = -r / o, this.d = t / o, this.tx = (r * this.ty - n * i) / o, this.ty = -(t * this.ty - e * i) / o, this;
    }, t.prototype.isIdentity = function() {
        return 0 === this.tx && 0 === this.ty && 1 === this.a && 0 === this.b && 0 === this.c && 1 === this.d;
    }, t.prototype.equals = function(t) {
        return this.tx === t.tx && this.ty === t.ty && this.a === t.a && this.b === t.b && this.c === t.c && this.d === t.d;
    }, t.prototype.transformPoint = function(t, e, r) {
        return r.x = t * this.a + e * this.c + this.tx, r.y = t * this.b + e * this.d + this.ty, r;
    }, t.prototype.decompose = function(e) {
        void 0 === e && (e = {}), e.x = this.tx, e.y = this.ty, e.scaleX = Math.sqrt(this.a * this.a + this.b * this.b), e.scaleY = Math.sqrt(this.c * this.c + this.d * this.d);
        var r = Math.atan2(-this.c, this.d), n = Math.atan2(this.b, this.a);
        return Math.abs(1 - r / n) < 1e-5 ? (e.rotation = n / t.DEG_TO_RAD, this.a < 0 && this.d >= 0 && (e.rotation += e.rotation <= 0 ? 180 : -180), e.skewX = e.skewY = 0) : (e.skewX = r / t.DEG_TO_RAD, e.skewY = n / t.DEG_TO_RAD), e;
    }, t.prototype.copy = function(t) {
        return this.setValues(t.a, t.b, t.c, t.d, t.tx, t.ty);
    }, t.prototype.clone = function() {
        return new t(this.a, this.b, this.c, this.d, this.tx, this.ty);
    }, t.prototype.toString = function() {
        return "[".concat(this.constructor.name, " (a=").concat(this.a, " b=").concat(this.b, " c=").concat(this.c, " d=").concat(this.d, " tx=").concat(this.tx, " ty=").concat(this.ty, ")]");
    }, t.DEG_TO_RAD = Math.PI / 180, t.identity = new t, t;
}(), ht = function() {
    function t(t, e) {
        void 0 === t && (t = 0), void 0 === e && (e = 0), this.setValues(t, e);
    }
    return t.prototype.setValues = function(t, e) {
        return void 0 === t && (t = 0), void 0 === e && (e = 0), this.x = t, this.y = e, this;
    }, t.prototype.copy = function(t) {
        return this.x = t.x, this.y = t.y, this;
    }, t.prototype.clone = function() {
        return new t(this.x, this.y);
    }, t.prototype.toString = function() {
        return "[".concat(this.constructor.name, " (x=").concat(this.x, " y=").concat(this.y, ")]");
    }, t;
}(), dt = function() {
    function t() {
        this.tx = new pt, this.alpha = 0, this.composite = "", this.visible = !0;
    }
    return t.prototype.reset = function() {}, t;
}(), ft = function() {
    function t() {
        this.rendering = new dt;
    }
    return t.prototype.addCredit = function(t) {
        this.doAddPhrase(t);
    }, t.prototype.removeCredit = function(t) {
        t._runtime = null;
    }, t.prototype.addPhrase = function(t) {
        this.doAddPhrase(t);
    }, t.prototype.removePhrase = function(t) {
        t._runtime = null;
    }, t.prototype.doAddPhrase = function(t) {
        t._runtime = {
            graphics: {
                clear: function() {}
            },
            rendering: new dt,
            update: function() {}
        };
        for(var e = t.firstWord; e;){
            e._runtime = {
                graphics: {
                    clear: function() {}
                },
                rendering: new dt,
                update: function() {}
            };
            for(var r = e.firstChar; r && (r._runtime = {
                graphics: {
                    clear: function() {}
                },
                rendering: new dt,
                update: function() {},
                advance: 0,
                ascent: 0,
                descent: 0,
                onFontUpdate: function() {},
                onColorUpdate: function() {}
            }, r !== e.lastChar);)r = r.next;
            if (e === t.lastWord) break;
            e = e.next;
        }
    }, t.prototype.addGraphic = function(t) {
        t._runtime = {
            graphics: {
                clear: function() {}
            },
            rendering: new dt,
            update: function() {}
        };
    }, t.prototype.removeGraphic = function(t) {
        t._runtime = null;
    }, t;
}(), yt = function() {
    function t() {
        this.wrapperTable = {};
    }
    return t.prototype.isGraphics = function() {
        return !1;
    }, t.prototype.setCanvas = function() {
        return Promise.resolve();
    }, t.prototype.createRuntime = function(t) {
        return function(t, e, r, n) {
            return new (r || (r = Promise))(function(e, i) {
                function o(t) {
                    try {
                        a(n.next(t));
                    } catch (t) {
                        i(t);
                    }
                }
                function s(t) {
                    try {
                        a(n.throw(t));
                    } catch (t) {
                        i(t);
                    }
                }
                function a(t) {
                    var n;
                    t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(function(t) {
                        t(n);
                    })).then(o, s);
                }
                a((n = n.apply(t, [])).next());
            });
        }(this, 0, void 0, function() {
            var e, r, n;
            return function(t, e) {
                var r, n, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1];
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this;
                }), o;
                function a(a) {
                    return function(u) {
                        return function(a) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for(; o && (o = 0, a[0] && (s = 0)), s;)try {
                                if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                                switch(n = 0, i && (a = [
                                    2 & a[0],
                                    i.value
                                ]), a[0]){
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, n = a[1], a = [
                                            0
                                        ];
                                        continue;
                                    case 7:
                                        a = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                            s = 0;
                                            continue;
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            s.label = a[1];
                                            break;
                                        }
                                        if (6 === a[0] && s.label < i[1]) {
                                            s.label = i[1], i = a;
                                            break;
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(a);
                                            break;
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue;
                                }
                                a = e.call(t, s);
                            } catch (t) {
                                a = [
                                    6,
                                    t
                                ], n = 0;
                            } finally{
                                r = i = 0;
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            };
                        }([
                            a,
                            u
                        ]);
                    };
                }
            }(this, function(i) {
                for(this.video = t, t._runtime = new ft, e = t.firstCredit; e;)t._runtime.addCredit(e), e = e.next;
                for(r = t.firstPhrase; r;)t._runtime.addPhrase(r), r = r.next;
                for(n = t.firstGraphic; n;)t._runtime.addGraphic(n), n = n.next;
                return [
                    2,
                    t._runtime
                ];
            });
        });
    }, t.prototype.reset = function() {
        var t, e;
        this.resetTextUnitsFrom(this.video.firstCredit), this.resetTextUnitsFrom(null === (t = this.video.firstCredit) || void 0 === t ? void 0 : t.firstWord), this.resetTextUnitsFrom(null === (e = this.video.firstCredit) || void 0 === e ? void 0 : e.firstChar), this.resetTextUnitsFrom(this.video.firstPhrase), this.resetTextUnitsFrom(this.video.firstWord), this.resetTextUnitsFrom(this.video.firstChar), this.video._runtime.rendering.reset();
    }, t.prototype.resetTextUnitsFrom = function(t) {
        for(; t;)t.rendering.reset(), t.graphics.clear(), t = t.next;
    }, t.prototype.update = function() {
        var t, e;
        this.updateCharsFrom(null === (t = this.video.firstCredit) || void 0 === t ? void 0 : t.firstChar), this.updateCharsFrom(null === (e = this.video.firstPhrase) || void 0 === e ? void 0 : e.firstChar);
    }, t.prototype.updateCharsFrom = function(t) {
        for(; t;)t._runtime.update(), t = t.next;
    }, t.prototype.updateStageTx = function() {}, t;
}();
function gt(t) {
    if (void 0 !== t && "function" != typeof t) {
        if ("object" != typeof t) return t;
        if (null === t) return null;
        if (t instanceof X) return {
            type: "Color",
            value: {
                r: t.r,
                g: t.g,
                b: t.b,
                a: t.a
            }
        };
        throw new Error;
    }
}
function vt(t, e) {
    if ("object" != typeof t || null === t) return t;
    if (t.type && (e[t.type] || "Color" === t.type)) {
        var r;
        if ("Color" === t.type) {
            var n = new X;
            n.r = Number(t.value.r), n.g = Number(t.value.g), n.b = Number(t.value.b), n.a = Number(t.value.a), r = n;
        } else {
            for(var i = new e[t.type], o = 0, s = Object.keys(t.value); o < s.length; o++){
                var a = s[o];
                i[a] = t.value[a];
            }
            r = i;
        }
        return r;
    }
}
var mt, bt, _t, wt, Pt, Et, Ot, St, Tt, xt, At, Rt, Ct, Nt, kt, jt, It, Ut, Ft, Lt, Dt = function(t, e) {
    return bt = String(t), _t = bt.length, function(t) {
        for(var e in mt = t || {}, Mt)Object.prototype.hasOwnProperty.call(mt, e) || (mt[e] = Mt[e]);
        wt = mt.sourceFile || null;
    }(e), Ct = 1, Pt = Nt = 0, Rt = !0, pr(), function(t) {
        kt = jt = Pt, mt.locations && (It = new ar), Ut = Lt = null, Ft = [], hr();
        var e = t || Or(), r = !0;
        for(t || (e.body = []); xt !== Jt;){
            var n = Fr();
            e.body.push(n), r && xr(n) && wr(!0), r = !1;
        }
        return Tr(e, "Program");
    }(mt.program);
}, Mt = {
    ecmaVersion: 5,
    strictSemicolons: !1,
    allowTrailingCommas: !0,
    forbidReserved: !1,
    locations: !1,
    onComment: null,
    ranges: !1,
    program: null,
    sourceFile: null,
    directSourceFile: null
}, Bt = function(t, e) {
    for(var r = 1, n = 0;;){
        ir.lastIndex = n;
        var i = ir.exec(t);
        if (!(i && i.index < e)) break;
        ++r, n = i.index + i[0].length;
    }
    return {
        line: r,
        column: e - n
    };
};
function Vt(t, e) {
    var r = Bt(bt, t);
    e += " (" + r.line + ":" + r.column + ")";
    var n = new SyntaxError(e);
    throw n.pos = t, n.loc = r, n.raisedAt = Pt, n;
}
var Gt = [], qt = {
    type: "num"
}, Wt = {
    type: "regexp"
}, Yt = {
    type: "string"
}, zt = {
    type: "name"
}, Jt = {
    type: "eof"
}, Ht = {
    keyword: "break"
}, Xt = {
    keyword: "case",
    beforeExpr: !0
}, Zt = {
    keyword: "catch"
}, $t = {
    keyword: "continue"
}, Kt = {
    keyword: "debugger"
}, Qt = {
    keyword: "default"
}, te = {
    keyword: "do",
    isLoop: !0
}, ee = {
    keyword: "else",
    beforeExpr: !0
}, re = {
    keyword: "finally"
}, ne = {
    keyword: "for",
    isLoop: !0
}, ie = {
    keyword: "function"
}, oe = {
    keyword: "if"
}, se = {
    keyword: "return",
    beforeExpr: !0
}, ae = {
    keyword: "switch"
}, ue = {
    keyword: "throw",
    beforeExpr: !0
}, ce = {
    keyword: "try"
}, le = {
    keyword: "var"
}, pe = {
    keyword: "while",
    isLoop: !0
}, he = {
    keyword: "with"
}, de = {
    keyword: "new",
    beforeExpr: !0
}, fe = {
    keyword: "this"
}, ye = {
    keyword: "null",
    atomValue: null
}, ge = {
    keyword: "true",
    atomValue: !0
}, ve = {
    keyword: "false",
    atomValue: !1
}, me = {
    keyword: "in",
    binop: 7,
    beforeExpr: !0
}, be = {
    break: Ht,
    case: Xt,
    catch: Zt,
    continue: $t,
    debugger: Kt,
    default: Qt,
    do: te,
    else: ee,
    finally: re,
    for: ne,
    function: ie,
    if: oe,
    return: se,
    switch: ae,
    throw: ue,
    try: ce,
    var: le,
    while: pe,
    with: he,
    null: ye,
    true: ge,
    false: ve,
    new: de,
    in: me,
    instanceof: {
        keyword: "instanceof",
        binop: 7,
        beforeExpr: !0
    },
    this: fe,
    typeof: {
        keyword: "typeof",
        prefix: !0,
        beforeExpr: !0
    },
    void: {
        keyword: "void",
        prefix: !0,
        beforeExpr: !0
    },
    delete: {
        keyword: "delete",
        prefix: !0,
        beforeExpr: !0
    }
}, _e = {
    type: "[",
    beforeExpr: !0
}, we = {
    type: "]"
}, Pe = {
    type: "{",
    beforeExpr: !0
}, Ee = {
    type: "}"
}, Oe = {
    type: "(",
    beforeExpr: !0
}, Se = {
    type: ")"
}, Te = {
    type: ",",
    beforeExpr: !0
}, xe = {
    type: ";",
    beforeExpr: !0
}, Ae = {
    type: ":",
    beforeExpr: !0
}, Re = {
    type: "."
}, Ce = {
    type: "?",
    beforeExpr: !0
}, Ne = {
    binop: 10,
    beforeExpr: !0
}, ke = {
    isAssign: !0,
    beforeExpr: !0
}, je = {
    isAssign: !0,
    beforeExpr: !0
}, Ie = {
    postfix: !0,
    prefix: !0,
    isUpdate: !0
}, Ue = {
    prefix: !0,
    beforeExpr: !0
}, Fe = {
    binop: 1,
    beforeExpr: !0
}, Le = {
    binop: 2,
    beforeExpr: !0
}, De = {
    binop: 3,
    beforeExpr: !0
}, Me = {
    binop: 4,
    beforeExpr: !0
}, Be = {
    binop: 5,
    beforeExpr: !0
}, Ve = {
    binop: 6,
    beforeExpr: !0
}, Ge = {
    binop: 7,
    beforeExpr: !0
}, qe = {
    binop: 8,
    beforeExpr: !0
}, We = {
    binop: 9,
    prefix: !0,
    beforeExpr: !0
}, Ye = {
    binop: 10,
    beforeExpr: !0
};
function ze(t) {
    t = t.split(" ");
    var e = "", r = [];
    t: for(var n = 0; n < t.length; ++n){
        for(var i = 0; i < r.length; ++i)if (r[i][0].length == t[n].length) {
            r[i].push(t[n]);
            continue t;
        }
        r.push([
            t[n]
        ]);
    }
    function o(t) {
        if (1 == t.length) return e += "return str === " + JSON.stringify(t[0]) + ";";
        e += "switch(str){";
        for(var r = 0; r < t.length; ++r)e += "case " + JSON.stringify(t[r]) + ":";
        e += "return true}return false;";
    }
    if (r.length > 3) {
        for(r.sort(function(t, e) {
            return e.length - t.length;
        }), e += "switch(str.length){", n = 0; n < r.length; ++n){
            var s = r[n];
            e += "case " + s[0].length + ":", o(s);
        }
        e += "}";
    } else o(t);
    return new Function("str", e);
}
var Je, He = ze("abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile"), Xe = ze("class enum extends super const export import"), Ze = ze("implements interface let package private protected public static yield"), $e = ze("eval arguments"), Ke = ze("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this"), Qe = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/, tr = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F0\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC", er = new RegExp("[" + tr + "]"), rr = new RegExp("[" + tr + "\u0300-\u036F\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u0620-\u0649\u0672-\u06D3\u06E7-\u06E8\u06FB-\u06FC\u0730-\u074A\u0800-\u0814\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0840-\u0857\u08E4-\u08FE\u0900-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962-\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09D7\u09DF-\u09E0\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5F-\u0B60\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C01-\u0C03\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62-\u0C63\u0C66-\u0C6F\u0C82\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2-\u0CE3\u0CE6-\u0CEF\u0D02\u0D03\u0D46-\u0D48\u0D57\u0D62-\u0D63\u0D66-\u0D6F\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E34-\u0E3A\u0E40-\u0E45\u0E50-\u0E59\u0EB4-\u0EB9\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F41-\u0F47\u0F71-\u0F84\u0F86-\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1029\u1040-\u1049\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u170E-\u1710\u1720-\u1730\u1740-\u1750\u1772\u1773\u1780-\u17B2\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1920-\u192B\u1930-\u193B\u1951-\u196D\u19B0-\u19C0\u19C8-\u19C9\u19D0-\u19D9\u1A00-\u1A15\u1A20-\u1A53\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1B46-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C00-\u1C22\u1C40-\u1C49\u1C5B-\u1C7D\u1CD0-\u1CD2\u1D00-\u1DBE\u1E01-\u1F15\u200C\u200D\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2D81-\u2D96\u2DE0-\u2DFF\u3021-\u3028\u3099\u309A\uA640-\uA66D\uA674-\uA67D\uA69F\uA6F0-\uA6F1\uA7F8-\uA800\uA806\uA80B\uA823-\uA827\uA880-\uA881\uA8B4-\uA8C4\uA8D0-\uA8D9\uA8F3-\uA8F7\uA900-\uA909\uA926-\uA92D\uA930-\uA945\uA980-\uA983\uA9B3-\uA9C0\uAA00-\uAA27\uAA40-\uAA41\uAA4C-\uAA4D\uAA50-\uAA59\uAA7B\uAAE0-\uAAE9\uAAF2-\uAAF3\uABC0-\uABE1\uABEC\uABED\uABF0-\uABF9\uFB20-\uFB28\uFE00-\uFE0F\uFE20-\uFE26\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F]"), nr = /[\n\r\u2028\u2029]/, ir = /\r\n|[\n\r\u2028\u2029]/g, or = function(t) {
    return t < 65 ? 36 === t : t < 91 || (t < 97 ? 95 === t : t < 123 || t >= 170 && er.test(String.fromCharCode(t)));
}, sr = function(t) {
    return t < 48 ? 36 === t : t < 58 || !(t < 65) && (t < 91 || (t < 97 ? 95 === t : t < 123 || t >= 170 && rr.test(String.fromCharCode(t))));
};
function ar() {
    this.line = Ct, this.column = Pt - Nt;
}
function ur(t, e) {
    Ot = Pt, mt.locations && (Tt = new ar), xt = t, pr(), At = e, Rt = t.beforeExpr;
}
function cr() {
    var t, e = mt.onComment && mt.locations && new ar, r = Pt, n = bt.indexOf("*/", Pt += 2);
    if (-1 === n && Vt(Pt - 2, "Unterminated comment"), Pt = n + 2, mt.locations) for(ir.lastIndex = r; (t = ir.exec(bt)) && t.index < Pt;)++Ct, Nt = t.index + t[0].length;
    mt.onComment && mt.onComment(!0, bt.slice(r + 2, n), r, Pt, e, mt.locations && new ar);
}
function lr() {
    for(var t = Pt, e = mt.onComment && mt.locations && new ar, r = bt.charCodeAt(Pt += 2); Pt < _t && 10 !== r && 13 !== r && 8232 !== r && 8233 !== r;)++Pt, r = bt.charCodeAt(Pt);
    mt.onComment && mt.onComment(!1, bt.slice(t + 2, Pt), t, Pt, e, mt.locations && new ar);
}
function pr() {
    for(; Pt < _t;){
        var t = bt.charCodeAt(Pt);
        if (32 === t) ++Pt;
        else if (13 === t) ++Pt, 10 === (e = bt.charCodeAt(Pt)) && ++Pt, mt.locations && (++Ct, Nt = Pt);
        else if (10 === t || 8232 === t || 8233 === t) ++Pt, mt.locations && (++Ct, Nt = Pt);
        else if (t > 8 && t < 14) ++Pt;
        else if (47 === t) {
            var e;
            if (42 === (e = bt.charCodeAt(Pt + 1))) cr();
            else {
                if (47 !== e) break;
                lr();
            }
        } else if (160 === t) ++Pt;
        else {
            if (!(t >= 5760 && Qe.test(String.fromCharCode(t)))) break;
            ++Pt;
        }
    }
}
function hr(t) {
    if (t ? Pt = Et + 1 : Et = Pt, mt.locations && (St = new ar), t) return fr();
    if (Pt >= _t) return ur(Jt);
    var e = bt.charCodeAt(Pt);
    if (or(e) || 92 === e) return br();
    var r = function(t) {
        switch(t){
            case 46:
                return function() {
                    var t = bt.charCodeAt(Pt + 1);
                    return t >= 48 && t <= 57 ? gr(!0) : (++Pt, ur(Re));
                }();
            case 40:
                return ++Pt, ur(Oe);
            case 41:
                return ++Pt, ur(Se);
            case 59:
                return ++Pt, ur(xe);
            case 44:
                return ++Pt, ur(Te);
            case 91:
                return ++Pt, ur(_e);
            case 93:
                return ++Pt, ur(we);
            case 123:
                return ++Pt, ur(Pe);
            case 125:
                return ++Pt, ur(Ee);
            case 58:
                return ++Pt, ur(Ae);
            case 63:
                return ++Pt, ur(Ce);
            case 48:
                var e = bt.charCodeAt(Pt + 1);
                if (120 === e || 88 === e) return function() {
                    Pt += 2;
                    var t = yr(16);
                    return null == t && Vt(Et + 2, "Expected hexadecimal number"), or(bt.charCodeAt(Pt)) && Vt(Pt, "Identifier directly after number"), ur(qt, t);
                }();
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
                return gr(!1);
            case 34:
            case 39:
                return function(t) {
                    Pt++;
                    for(var e = "";;){
                        Pt >= _t && Vt(Et, "Unterminated string constant");
                        var r = bt.charCodeAt(Pt);
                        if (r === t) return ++Pt, ur(Yt, e);
                        if (92 === r) {
                            r = bt.charCodeAt(++Pt);
                            var n = /^[0-7]+/.exec(bt.slice(Pt, Pt + 3));
                            for(n && (n = n[0]); n && parseInt(n, 8) > 255;)n = n.slice(0, -1);
                            if ("0" === n && (n = null), ++Pt, n) Lt && Vt(Pt - 2, "Octal literal in strict mode"), e += String.fromCharCode(parseInt(n, 8)), Pt += n.length - 1;
                            else switch(r){
                                case 110:
                                    e += "\n";
                                    break;
                                case 114:
                                    e += "\r";
                                    break;
                                case 120:
                                    e += String.fromCharCode(vr(2));
                                    break;
                                case 117:
                                    e += String.fromCharCode(vr(4));
                                    break;
                                case 85:
                                    e += String.fromCharCode(vr(8));
                                    break;
                                case 116:
                                    e += "\t";
                                    break;
                                case 98:
                                    e += "\b";
                                    break;
                                case 118:
                                    e += "\v";
                                    break;
                                case 102:
                                    e += "\f";
                                    break;
                                case 48:
                                    e += "\0";
                                    break;
                                case 13:
                                    10 === bt.charCodeAt(Pt) && ++Pt;
                                case 10:
                                    mt.locations && (Nt = Pt, ++Ct);
                                    break;
                                default:
                                    e += String.fromCharCode(r);
                            }
                        } else 13 !== r && 10 !== r && 8232 !== r && 8233 !== r || Vt(Et, "Unterminated string constant"), e += String.fromCharCode(r), ++Pt;
                    }
                }(t);
            case 47:
                return function(t) {
                    var e = bt.charCodeAt(Pt + 1);
                    return Rt ? (++Pt, fr()) : 61 === e ? dr(je, 2) : dr(Ne, 1);
                }();
            case 37:
            case 42:
                return 61 === bt.charCodeAt(Pt + 1) ? dr(je, 2) : dr(Ye, 1);
            case 124:
            case 38:
                return function(t) {
                    var e = bt.charCodeAt(Pt + 1);
                    return e === t ? dr(124 === t ? Fe : Le, 2) : 61 === e ? dr(je, 2) : dr(124 === t ? De : Be, 1);
                }(t);
            case 94:
                return 61 === bt.charCodeAt(Pt + 1) ? dr(je, 2) : dr(Me, 1);
            case 43:
            case 45:
                return function(t) {
                    var e = bt.charCodeAt(Pt + 1);
                    return e === t ? 45 == e && 62 == bt.charCodeAt(Pt + 2) && nr.test(bt.slice(jt, Pt)) ? (Pt += 3, lr(), pr(), hr()) : dr(Ie, 2) : 61 === e ? dr(je, 2) : dr(We, 1);
                }(t);
            case 60:
            case 62:
                return function(t) {
                    var e = bt.charCodeAt(Pt + 1), r = 1;
                    return e === t ? (r = 62 === t && 62 === bt.charCodeAt(Pt + 2) ? 3 : 2, 61 === bt.charCodeAt(Pt + r) ? dr(je, r + 1) : dr(qe, r)) : 33 == e && 60 == t && 45 == bt.charCodeAt(Pt + 2) && 45 == bt.charCodeAt(Pt + 3) ? (Pt += 4, lr(), pr(), hr()) : (61 === e && (r = 61 === bt.charCodeAt(Pt + 2) ? 3 : 2), dr(Ge, r));
                }(t);
            case 61:
            case 33:
                return function(t) {
                    return 61 === bt.charCodeAt(Pt + 1) ? dr(Ve, 61 === bt.charCodeAt(Pt + 2) ? 3 : 2) : dr(61 === t ? ke : Ue, 1);
                }(t);
            case 126:
                return dr(Ue, 1);
        }
        return !1;
    }(e);
    if (!1 === r) {
        var n = String.fromCharCode(e);
        if ("\\" === n || er.test(n)) return br();
        Vt(Pt, "Unexpected character '" + n + "'");
    }
    return r;
}
function dr(t, e) {
    var r = bt.slice(Pt, Pt + e);
    Pt += e, ur(t, r);
}
function fr() {
    for(var t, e, r = Pt;;){
        Pt >= _t && Vt(r, "Unterminated regular expression");
        var n = bt.charAt(Pt);
        if (nr.test(n) && Vt(r, "Unterminated regular expression"), t) t = !1;
        else {
            if ("[" === n) e = !0;
            else if ("]" === n && e) e = !1;
            else if ("/" === n && !e) break;
            t = "\\" === n;
        }
        ++Pt;
    }
    var i = bt.slice(r, Pt);
    ++Pt;
    var o = mr();
    return o && !/^[gmsiy]*$/.test(o) && Vt(r, "Invalid regexp flag"), ur(Wt, new RegExp(i, o));
}
function yr(t, e) {
    for(var r = Pt, n = 0, i = 0, o = null == e ? 1 / 0 : e; i < o; ++i){
        var s, a = bt.charCodeAt(Pt);
        if ((s = a >= 97 ? a - 97 + 10 : a >= 65 ? a - 65 + 10 : a >= 48 && a <= 57 ? a - 48 : 1 / 0) >= t) break;
        ++Pt, n = n * t + s;
    }
    return Pt === r || null != e && Pt - r !== e ? null : n;
}
function gr(t) {
    var e = Pt, r = !1, n = 48 === bt.charCodeAt(Pt);
    t || null !== yr(10) || Vt(e, "Invalid number"), 46 === bt.charCodeAt(Pt) && (++Pt, yr(10), r = !0);
    var i = bt.charCodeAt(Pt);
    69 !== i && 101 !== i || (43 !== (i = bt.charCodeAt(++Pt)) && 45 !== i || ++Pt, null === yr(10) && Vt(e, "Invalid number"), r = !0), or(bt.charCodeAt(Pt)) && Vt(Pt, "Identifier directly after number");
    var o, s = bt.slice(e, Pt);
    return r ? o = parseFloat(s) : n && 1 !== s.length ? /[89]/.test(s) || Lt ? Vt(e, "Invalid number") : o = parseInt(s, 8) : o = parseInt(s, 10), ur(qt, o);
}
function vr(t) {
    var e = yr(16, t);
    return null === e && Vt(Et, "Bad character escape sequence"), e;
}
function mr() {
    Je = !1;
    for(var t, e = !0, r = Pt;;){
        var n = bt.charCodeAt(Pt);
        if (sr(n)) Je && (t += bt.charAt(Pt)), ++Pt;
        else {
            if (92 !== n) break;
            Je || (t = bt.slice(r, Pt)), Je = !0, 117 != bt.charCodeAt(++Pt) && Vt(Pt, "Expecting Unicode escape sequence \\uXXXX"), ++Pt;
            var i = vr(4), o = String.fromCharCode(i);
            o || Vt(Pt - 1, "Invalid Unicode escape"), (e ? or(i) : sr(i)) || Vt(Pt - 4, "Invalid Unicode escape"), t += o;
        }
        e = !1;
    }
    return Je ? t : bt.slice(r, Pt);
}
function br() {
    var t = mr(), e = zt;
    return Je || (Ke(t) ? e = be[t] : (mt.forbidReserved && (3 === mt.ecmaVersion ? He : Xe)(t) || Lt && Ze(t)) && Vt(Et, "The keyword '" + t + "' is reserved")), ur(e, t);
}
function _r() {
    kt = Et, jt = Ot, It = Tt, hr();
}
function wr(t) {
    if (Lt = t, Pt = jt, mt.locations) for(; Pt < Nt;)Nt = bt.lastIndexOf("\n", Nt - 2) + 1, --Ct;
    pr(), hr();
}
function Pr() {
    this.type = null, this.start = Et, this.end = null;
}
function Er() {
    this.start = St, this.end = null, null !== wt && (this.source = wt);
}
function Or() {
    var t = new Pr;
    return mt.locations && (t.loc = new Er), mt.directSourceFile && (t.sourceFile = mt.directSourceFile), mt.ranges && (t.range = [
        Et,
        0
    ]), t;
}
function Sr(t) {
    var e = new Pr;
    return e.start = t.start, mt.locations && (e.loc = new Er, e.loc.start = t.loc.start), mt.ranges && (e.range = [
        t.range[0],
        0
    ]), e;
}
function Tr(t, e) {
    return t.type = e, t.end = jt, mt.locations && (t.loc.end = It), mt.ranges && (t.range[1] = jt), t;
}
function xr(t) {
    return mt.ecmaVersion >= 5 && "ExpressionStatement" === t.type && "Literal" === t.expression.type && "use strict" === t.expression.value;
}
function Ar(t) {
    if (xt === t) return _r(), !0;
}
function Rr() {
    return !mt.strictSemicolons && (xt === Jt || xt === Ee || nr.test(bt.slice(jt, Et)));
}
function Cr() {
    Ar(xe) || Rr() || kr();
}
function Nr(t) {
    xt === t ? _r() : kr();
}
function kr() {
    Vt(Et, "Unexpected token");
}
function jr(t) {
    "Identifier" !== t.type && "MemberExpression" !== t.type && Vt(t.start, "Assigning to rvalue"), Lt && "Identifier" === t.type && $e(t.name) && Vt(t.start, "Assigning to " + t.name + " in strict mode");
}
var Ir = {
    kind: "loop"
}, Ur = {
    kind: "switch"
};
function Fr() {
    (xt === Ne || xt === je && "/=" == At) && hr(!0);
    var t = xt, e = Or();
    switch(t){
        case Ht:
        case $t:
            _r();
            var r = t === Ht;
            Ar(xe) || Rr() ? e.label = null : xt !== zt ? kr() : (e.label = $r(), Cr());
            for(var n = 0; n < Ft.length; ++n){
                var i = Ft[n];
                if (null == e.label || i.name === e.label.name) {
                    if (null != i.kind && (r || "loop" === i.kind)) break;
                    if (e.label && r) break;
                }
            }
            return n === Ft.length && Vt(e.start, "Unsyntactic " + t.keyword), Tr(e, r ? "BreakStatement" : "ContinueStatement");
        case Kt:
            return _r(), Cr(), Tr(e, "DebuggerStatement");
        case te:
            return _r(), Ft.push(Ir), e.body = Fr(), Ft.pop(), Nr(pe), e.test = Lr(), Cr(), Tr(e, "DoWhileStatement");
        case ne:
            if (_r(), Ft.push(Ir), Nr(Oe), xt === xe) return Mr(e, null);
            if (xt === le) {
                var o = Or();
                return _r(), Vr(o, !0), Tr(o, "VariableDeclaration"), 1 === o.declarations.length && Ar(me) ? Br(e, o) : Mr(e, o);
            }
            return o = Gr(!1, !0), Ar(me) ? (jr(o), Br(e, o)) : Mr(e, o);
        case ie:
            return _r(), Xr(e, !0);
        case oe:
            return _r(), e.test = Lr(), e.consequent = Fr(), e.alternate = Ar(ee) ? Fr() : null, Tr(e, "IfStatement");
        case se:
            return Ut || Vt(Et, "'return' outside of function"), _r(), Ar(xe) || Rr() ? e.argument = null : (e.argument = Gr(), Cr()), Tr(e, "ReturnStatement");
        case ae:
            _r(), e.discriminant = Lr(), e.cases = [], Nr(Pe), Ft.push(Ur);
            for(var s, a; xt != Ee;)if (xt === Xt || xt === Qt) {
                var u = xt === Xt;
                s && Tr(s, "SwitchCase"), e.cases.push(s = Or()), s.consequent = [], _r(), u ? s.test = Gr() : (a && Vt(kt, "Multiple default clauses"), a = !0, s.test = null), Nr(Ae);
            } else s || kr(), s.consequent.push(Fr());
            return s && Tr(s, "SwitchCase"), _r(), Ft.pop(), Tr(e, "SwitchStatement");
        case ue:
            return _r(), nr.test(bt.slice(jt, Et)) && Vt(jt, "Illegal newline after throw"), e.argument = Gr(), Cr(), Tr(e, "ThrowStatement");
        case ce:
            if (_r(), e.block = Dr(), e.handler = null, xt === Zt) {
                var c = Or();
                _r(), Nr(Oe), c.param = $r(), Lt && $e(c.param.name) && Vt(c.param.start, "Binding " + c.param.name + " in strict mode"), Nr(Se), c.guard = null, c.body = Dr(), e.handler = Tr(c, "CatchClause");
            }
            return e.guardedHandlers = Gt, e.finalizer = Ar(re) ? Dr() : null, e.handler || e.finalizer || Vt(e.start, "Missing catch or finally clause"), Tr(e, "TryStatement");
        case le:
            return _r(), Vr(e), Cr(), Tr(e, "VariableDeclaration");
        case pe:
            return _r(), e.test = Lr(), Ft.push(Ir), e.body = Fr(), Ft.pop(), Tr(e, "WhileStatement");
        case he:
            return Lt && Vt(Et, "'with' in strict mode"), _r(), e.object = Lr(), e.body = Fr(), Tr(e, "WithStatement");
        case Pe:
            return Dr();
        case xe:
            return _r(), Tr(e, "EmptyStatement");
        default:
            var l = At, p = Gr();
            if (t === zt && "Identifier" === p.type && Ar(Ae)) {
                for(n = 0; n < Ft.length; ++n)Ft[n].name === l && Vt(p.start, "Label '" + l + "' is already declared");
                var h = xt.isLoop ? "loop" : xt === ae ? "switch" : null;
                return Ft.push({
                    name: l,
                    kind: h
                }), e.body = Fr(), Ft.pop(), e.label = p, Tr(e, "LabeledStatement");
            }
            return e.expression = p, Cr(), Tr(e, "ExpressionStatement");
    }
}
function Lr() {
    Nr(Oe);
    var t = Gr();
    return Nr(Se), t;
}
function Dr(t) {
    var e, r = Or(), n = !0, i = !1;
    for(r.body = [], Nr(Pe); !Ar(Ee);){
        var o = Fr();
        r.body.push(o), n && t && xr(o) && (e = i, wr(i = !0)), n = !1;
    }
    return i && !e && wr(!1), Tr(r, "BlockStatement");
}
function Mr(t, e) {
    return t.init = e, Nr(xe), t.test = xt === xe ? null : Gr(), Nr(xe), t.update = xt === Se ? null : Gr(), Nr(Se), t.body = Fr(), Ft.pop(), Tr(t, "ForStatement");
}
function Br(t, e) {
    return t.left = e, t.right = Gr(), Nr(Se), t.body = Fr(), Ft.pop(), Tr(t, "ForInStatement");
}
function Vr(t, e) {
    for(t.declarations = [], t.kind = "var";;){
        var r = Or();
        if (r.id = $r(), Lt && $e(r.id.name) && Vt(r.id.start, "Binding " + r.id.name + " in strict mode"), r.init = Ar(ke) ? Gr(!0, e) : null, t.declarations.push(Tr(r, "VariableDeclarator")), !Ar(Te)) break;
    }
    return t;
}
function Gr(t, e) {
    var r = qr(e);
    if (!t && xt === Te) {
        var n = Sr(r);
        for(n.expressions = [
            r
        ]; Ar(Te);)n.expressions.push(qr(e));
        return Tr(n, "SequenceExpression");
    }
    return r;
}
function qr(t) {
    var e = function(t) {
        var e = function(t) {
            return Wr(Yr(), -1, t);
        }(t);
        if (Ar(Ce)) {
            var r = Sr(e);
            return r.test = e, r.consequent = Gr(!0), Nr(Ae), r.alternate = Gr(!0, t), Tr(r, "ConditionalExpression");
        }
        return e;
    }(t);
    if (xt.isAssign) {
        var r = Sr(e);
        return r.operator = At, r.left = e, _r(), r.right = qr(t), jr(e), Tr(r, "AssignmentExpression");
    }
    return e;
}
function Wr(t, e, r) {
    var n = xt.binop;
    if (null != n && (!r || xt !== me) && n > e) {
        var i = Sr(t);
        i.left = t, i.operator = At;
        var o = xt;
        return _r(), i.right = Wr(Yr(), n, r), Wr(Tr(i, o === Fe || o === Le ? "LogicalExpression" : "BinaryExpression"), e, r);
    }
    return t;
}
function Yr() {
    if (xt.prefix) {
        var t = Or(), e = xt.isUpdate;
        return t.operator = At, t.prefix = !0, Rt = !0, _r(), t.argument = Yr(), e ? jr(t.argument) : Lt && "delete" === t.operator && "Identifier" === t.argument.type && Vt(t.start, "Deleting local variable in strict mode"), Tr(t, e ? "UpdateExpression" : "UnaryExpression");
    }
    for(var r = zr(Jr()); xt.postfix && !Rr();)(t = Sr(r)).operator = At, t.prefix = !1, t.argument = r, jr(r), _r(), r = Tr(t, "UpdateExpression");
    return r;
}
function zr(t, e) {
    var r;
    return Ar(Re) ? ((r = Sr(t)).object = t, r.property = $r(!0), r.computed = !1, zr(Tr(r, "MemberExpression"), e)) : Ar(_e) ? ((r = Sr(t)).object = t, r.property = Gr(), r.computed = !0, Nr(we), zr(Tr(r, "MemberExpression"), e)) : !e && Ar(Oe) ? ((r = Sr(t)).callee = t, r.arguments = Zr(Se, !1), zr(Tr(r, "CallExpression"), e)) : t;
}
function Jr() {
    switch(xt){
        case fe:
            var t = Or();
            return _r(), Tr(t, "ThisExpression");
        case zt:
            return $r();
        case qt:
        case Yt:
        case Wt:
            return (t = Or()).value = At, t.raw = bt.slice(Et, Ot), _r(), Tr(t, "Literal");
        case ye:
        case ge:
        case ve:
            return (t = Or()).value = xt.atomValue, t.raw = xt.keyword, _r(), Tr(t, "Literal");
        case Oe:
            var e = St, r = Et;
            _r();
            var n = Gr();
            return n.start = r, n.end = Ot, mt.locations && (n.loc.start = e, n.loc.end = Tt), mt.ranges && (n.range = [
                r,
                Ot
            ]), Nr(Se), n;
        case _e:
            return t = Or(), _r(), t.elements = Zr(we, !0, !0), Tr(t, "ArrayExpression");
        case Pe:
            return function() {
                var t = Or(), e = !0, r = !1;
                for(t.properties = [], _r(); !Ar(Ee);){
                    if (e) e = !1;
                    else if (Nr(Te), mt.allowTrailingCommas && Ar(Ee)) break;
                    var n, i = {
                        key: Hr()
                    }, o = !1;
                    if (Ar(Ae) ? (i.value = Gr(!0), n = i.kind = "init") : mt.ecmaVersion >= 5 && "Identifier" === i.key.type && ("get" === i.key.name || "set" === i.key.name) ? (o = r = !0, n = i.kind = i.key.name, i.key = Hr(), xt !== Oe && kr(), i.value = Xr(Or(), !1)) : kr(), "Identifier" === i.key.type && (Lt || r)) for(var s = 0; s < t.properties.length; ++s){
                        var a = t.properties[s];
                        if (a.key.name === i.key.name) {
                            var u = n == a.kind || o && "init" === a.kind || "init" === n && ("get" === a.kind || "set" === a.kind);
                            u && !Lt && "init" === n && "init" === a.kind && (u = !1), u && Vt(i.key.start, "Redefinition of property");
                        }
                    }
                    t.properties.push(i);
                }
                return Tr(t, "ObjectExpression");
            }();
        case ie:
            return t = Or(), _r(), Xr(t, !1);
        case de:
            return function() {
                var t = Or();
                return _r(), t.callee = zr(Jr(), !0), Ar(Oe) ? t.arguments = Zr(Se, !1) : t.arguments = Gt, Tr(t, "NewExpression");
            }();
        default:
            kr();
    }
}
function Hr() {
    return xt === qt || xt === Yt ? Jr() : $r(!0);
}
function Xr(t, e) {
    xt === zt ? t.id = $r() : e ? kr() : t.id = null, t.params = [];
    var r = !0;
    for(Nr(Oe); !Ar(Se);)r ? r = !1 : Nr(Te), t.params.push($r());
    var n = Ut, i = Ft;
    if (Ut = !0, Ft = [], t.body = Dr(!0), Ut = n, Ft = i, Lt || t.body.body.length && xr(t.body.body[0])) for(var o = t.id ? -1 : 0; o < t.params.length; ++o){
        var s = o < 0 ? t.id : t.params[o];
        if ((Ze(s.name) || $e(s.name)) && Vt(s.start, "Defining '" + s.name + "' in strict mode"), o >= 0) for(var a = 0; a < o; ++a)s.name === t.params[a].name && Vt(s.start, "Argument name clash in strict mode");
    }
    return Tr(t, e ? "FunctionDeclaration" : "FunctionExpression");
}
function Zr(t, e, r) {
    for(var n = [], i = !0; !Ar(t);){
        if (i) i = !1;
        else if (Nr(Te), e && mt.allowTrailingCommas && Ar(t)) break;
        r && xt === Te ? n.push(null) : n.push(Gr(!0));
    }
    return n;
}
function $r(t) {
    var e = Or();
    return e.name = xt === zt ? At : t && !mt.forbidReserved && xt.keyword || kr(), Rt = !1, _r(), Tr(e, "Identifier");
}
var Kr = function() {
    function t(e, r) {
        var n, i = "string" == typeof e ? Dt(e, t.PARSE_OPTIONS) : e;
        this.ast = i, this.initFunc_ = r, this.paused_ = !1, this.polyfills_ = [], this.functionCounter_ = 0, this.stepFunctions_ = Object.create(null);
        for(var o, s = /^step([A-Z]\w*)$/, a = Object.getOwnPropertyNames(t.prototype), u = 0; u < a.length; u++){
            var c = a[u];
            "function" == typeof t.prototype[c] && (o = c.match(s)) && (this.stepFunctions_[o[1]] = t.prototype[c].bind(this));
        }
        this.global = this.createScope(this.ast, null), this.ast = Dt(this.polyfills_.join("\n"), t.PARSE_OPTIONS), this.polyfills_ = void 0, this.stripLocations_(this.ast, void 0, void 0), (n = new tn(this.ast, this.global)).done = !1, this.stateStack = [
            n
        ], this.run(), this.value = void 0, this.ast = i, (n = new tn(this.ast, this.global)).done = !1, this.stateStack.length = 0, this.stateStack[0] = n, this.nodeConstructor = n.node.constructor, this.stateStack = this.stateStack, this.OBJECT = this.OBJECT, this.OBJECT_PROTO = this.OBJECT_PROTO, this.FUNCTION = this.FUNCTION, this.FUNCTION_PROTO = this.FUNCTION_PROTO, this.ARRAY = this.ARRAY, this.ARRAY_PROTO = this.ARRAY_PROTO, this.REGEXP = this.REGEXP, this.REGEXP_PROTO = this.REGEXP_PROTO, this.UNDEFINED = void 0, this.NULL = null, this.NAN = NaN, this.TRUE = !0, this.FALSE = !1, this.STRING_EMPTY = "", this.NUMBER_ZERO = 0, this.NUMBER_ONE = 1;
    }
    return t.prototype.wrap = function(t) {
        return t;
    }, t.prototype.unwrap = function(t, e) {
        return t;
    }, t.prototype.appendCode = function(e) {
        var r = this.stateStack[0];
        if (!r || "Program" !== r.node.type) throw Error("Expecting original AST to start with a Program node.");
        var n = "string" == typeof e ? Dt(e, t.PARSE_OPTIONS) : e;
        if (!n || "Program" !== n.type) throw Error("Expecting new AST to start with a Program node.");
        this.populateScope_(n, r.scope);
        for(var i, o = 0; i = n.body[o]; o++)r.node.body.push(i);
        r.done = !1;
    }, t.prototype.step = function() {
        var e = this.stateStack, r = e[e.length - 1];
        if (!r) return !1;
        var n = r.node, i = n.type;
        if ("Program" === i && r.done) return !1;
        if (this.paused_) return !0;
        try {
            var o = this.stepFunctions_[i](e, r, n);
        } catch (e) {
            if (e !== t.STEP_ERROR) throw e;
        }
        return o && e.push(o), !!n.end || this.step();
    }, t.prototype.run = function() {
        for(; !this.paused_ && this.step(););
        return this.paused_;
    }, t.prototype.initGlobalScope = function(e) {
        this.setProperty(e, "NaN", NaN, t.READONLY_DESCRIPTOR), this.setProperty(e, "Infinity", 1 / 0, t.READONLY_DESCRIPTOR), this.setProperty(e, "undefined", void 0, t.READONLY_DESCRIPTOR), this.setProperty(e, "window", e, t.READONLY_DESCRIPTOR), this.setProperty(e, "this", e, t.READONLY_DESCRIPTOR), this.setProperty(e, "self", e), this.OBJECT_PROTO = new Qr(null), this.FUNCTION_PROTO = new Qr(this.OBJECT_PROTO), this.initFunction(e), this.initObject(e), e.proto = this.OBJECT_PROTO, this.setProperty(e, "constructor", this.OBJECT), this.initArray(e), this.initString(e), this.initBoolean(e), this.initNumber(e), this.initDate(e), this.initRegExp(e), this.initError(e), this.initMath(e), this.initJSON(e);
        var r = this, n = this.createNativeFunction(function(t) {
            throw EvalError("Can't happen");
        }, !1);
        n.eval = !0, this.setProperty(e, "eval", n), this.setProperty(e, "parseInt", this.createNativeFunction(parseInt, !1)), this.setProperty(e, "parseFloat", this.createNativeFunction(parseFloat, !1)), this.setProperty(e, "isNaN", this.createNativeFunction(isNaN, !1)), this.setProperty(e, "isFinite", this.createNativeFunction(isFinite, !1));
        for(var i = [
            [
                escape,
                "escape"
            ],
            [
                unescape,
                "unescape"
            ],
            [
                decodeURI,
                "decodeURI"
            ],
            [
                decodeURIComponent,
                "decodeURIComponent"
            ],
            [
                encodeURI,
                "encodeURI"
            ],
            [
                encodeURIComponent,
                "encodeURIComponent"
            ]
        ], o = 0; o < i.length; o++){
            var s = function(t) {
                return function(e) {
                    try {
                        return t(e);
                    } catch (t) {
                        r.throwException(r.URI_ERROR, t.message);
                    }
                };
            }(i[o][0]);
            this.setProperty(e, i[o][1], this.createNativeFunction(s, !1), t.NONENUMERABLE_DESCRIPTOR);
        }
        this.initFunc_ && this.initFunc_(this, e);
    }, t.prototype.initFunction = function(e) {
        var r, n = this, i = /^[A-Za-z_$][\w$]*$/;
        r = function(e) {
            if (n.calledWithNew()) var r = this;
            else r = n.createObjectProto(n.FUNCTION_PROTO);
            if (arguments.length) var o = String(arguments[arguments.length - 1]);
            else o = "";
            for(var s = [], a = 0; a < arguments.length - 1; a++){
                var u = String(arguments[a]);
                u.match(i) || n.throwException(n.SYNTAX_ERROR, "Invalid function argument: " + u), s.push(u);
            }
            s = s.join(", "), r.parentScope = n.global;
            try {
                var c = Dt("$ = function(" + s + ") {" + o + "};", t.PARSE_OPTIONS);
            } catch (t) {
                n.throwException(n.SYNTAX_ERROR, "Invalid code: " + t.message);
            }
            return 1 !== c.body.length && n.throwException(n.SYNTAX_ERROR, "Invalid code in function body."), r.node = c.body[0].expression.right, n.setProperty(r, "length", r.node.length, t.READONLY_DESCRIPTOR), r;
        }, r.id = this.functionCounter_++, this.FUNCTION = this.createObjectProto(this.FUNCTION_PROTO), this.setProperty(e, "Function", this.FUNCTION), this.setProperty(this.FUNCTION, "prototype", this.FUNCTION_PROTO), this.FUNCTION.nativeFunc = r, this.setProperty(this.FUNCTION_PROTO, "constructor", this.FUNCTION, t.NONENUMERABLE_DESCRIPTOR), this.FUNCTION_PROTO.nativeFunc = function() {}, this.FUNCTION_PROTO.nativeFunc.id = this.functionCounter_++, this.setProperty(this.FUNCTION_PROTO, "length", 0, t.READONLY_DESCRIPTOR);
        var o = function(t) {
            if (!(t && t.isObject || n.getScope().strict)) {
                if (null == t) t = n.global;
                else {
                    var e = n.createObjectProto(n.getPrototype(t));
                    e.data = t, t = e;
                }
            }
            return t;
        };
        r = function(t, e) {
            var r = n.stateStack[n.stateStack.length - 1];
            r.func_ = this, r.funcThis_ = o(t), r.arguments_ = [], null != e && (e.isObject ? r.arguments_ = n.pseudoToNative(e) : n.throwException(n.TYPE_ERROR, "CreateListFromArrayLike called on non-object")), r.doneExec_ = !1;
        }, this.setNativeFunctionPrototype(this.FUNCTION, "apply", r), r = function(t, e) {
            var r = n.stateStack[n.stateStack.length - 1];
            r.func_ = this, r.funcThis_ = o(t), r.arguments_ = [];
            for(var i = 1; i < arguments.length; i++)r.arguments_.push(arguments[i]);
            r.doneExec_ = !1;
        }, this.setNativeFunctionPrototype(this.FUNCTION, "call", r), this.polyfills_.push("Object.defineProperty(Function.prototype, 'bind',", "{configurable: true, writable: true, value:", "function(oThis) {", "if (typeof this !== 'function') {", "throw TypeError('What is trying to be bound is not callable');", "}", "var aArgs   = Array.prototype.slice.call(arguments, 1),", "fToBind = this,", "fNOP    = function() {},", "fBound  = function() {", "return fToBind.apply(this instanceof fNOP", "? this", ": oThis,", "aArgs.concat(Array.prototype.slice.call(arguments)));", "};", "if (this.prototype) {", "fNOP.prototype = this.prototype;", "}", "fBound.prototype = new fNOP();", "return fBound;", "}", "});", ""), r = function() {
            return this.toString();
        }, this.setNativeFunctionPrototype(this.FUNCTION, "toString", r), this.setProperty(this.FUNCTION, "toString", this.createNativeFunction(r, !1), t.NONENUMERABLE_DESCRIPTOR), r = function() {
            return this.valueOf();
        }, this.setNativeFunctionPrototype(this.FUNCTION, "valueOf", r), this.setProperty(this.FUNCTION, "valueOf", this.createNativeFunction(r, !1), t.NONENUMERABLE_DESCRIPTOR);
    }, t.prototype.initObject = function(e) {
        var r, n = this;
        r = function(t) {
            if (null == t) return n.calledWithNew() ? this : n.createObjectProto(n.OBJECT_PROTO);
            if (!t.isObject) {
                var e = n.createObjectProto(n.getPrototype(t));
                return e.data = t, e;
            }
            return t;
        }, this.OBJECT = this.createNativeFunction(r, !0), this.setProperty(this.OBJECT, "prototype", this.OBJECT_PROTO), this.setProperty(this.OBJECT_PROTO, "constructor", this.OBJECT), this.setProperty(e, "Object", this.OBJECT);
        var i = function(t) {
            null == t && n.throwException(n.TYPE_ERROR, "Cannot convert '" + t + "' to object");
        };
        r = function(t) {
            i(t);
            var e = t.isObject ? t.properties : t;
            return n.nativeToPseudo(Object.getOwnPropertyNames(e));
        }, this.setProperty(this.OBJECT, "getOwnPropertyNames", this.createNativeFunction(r, !1), t.NONENUMERABLE_DESCRIPTOR), r = function(t) {
            return i(t), t.isObject ? n.nativeToPseudo(Object.keys(t.properties)) : n.nativeToPseudo(Object.keys(t));
        }, this.setProperty(this.OBJECT, "keys", this.createNativeFunction(r, !1), t.NONENUMERABLE_DESCRIPTOR), r = function(t) {
            return null === t ? n.createObjectProto(null) : (void 0 !== t && t.isObject || n.throwException(n.TYPE_ERROR, "Object prototype may only be an Object or null"), n.createObjectProto(t));
        }, this.setProperty(this.OBJECT, "create", this.createNativeFunction(r, !1), t.NONENUMERABLE_DESCRIPTOR), this.polyfills_.push("(function() {", "var create_ = Object.create;", "Object.create = function(proto, props) {", "var obj = create_(proto);", "props && Object.defineProperties(obj, props);", "return obj;", "};", "})();", ""), r = function(t, e, r) {
            return e = String(e), t && t.isObject || n.throwException(n.TYPE_ERROR, "Object.defineProperty called on non-object"), r && r.isObject || n.throwException(n.TYPE_ERROR, "Property description must be an object"), !t.properties[e] && t.preventExtensions && n.throwException(n.TYPE_ERROR, "Can't define property '" + e + "', object is not extensible"), n.setProperty(t, e, ReferenceError, r.properties), t;
        }, this.setProperty(this.OBJECT, "defineProperty", this.createNativeFunction(r, !1), t.NONENUMERABLE_DESCRIPTOR), this.polyfills_.push("(function() {", "var defineProperty_ = Object.defineProperty;", "Object.defineProperty = function(obj, prop, d1) {", "var d2 = {};", "if ('configurable' in d1) d2.configurable = d1.configurable;", "if ('enumerable' in d1) d2.enumerable = d1.enumerable;", "if ('writable' in d1) d2.writable = d1.writable;", "if ('value' in d1) d2.value = d1.value;", "if ('get' in d1) d2.get = d1.get;", "if ('set' in d1) d2.set = d1.set;", "return defineProperty_(obj, prop, d2);", "};", "})();", "Object.defineProperty(Object, 'defineProperties',", "{configurable: true, writable: true, value:", "function(obj, props) {", "var keys = Object.keys(props);", "for (var i = 0; i < keys.length; i++) {", "Object.defineProperty(obj, keys[i], props[keys[i]]);", "}", "return obj;", "}", "});", ""), r = function(t, e) {
            if (t && t.isObject || n.throwException(n.TYPE_ERROR, "Object.getOwnPropertyDescriptor called on non-object"), (e = String(e)) in t.properties) {
                var r = Object.getOwnPropertyDescriptor(t.properties, e), i = t.getter[e], o = t.setter[e];
                (i || o) && (r.get = i, r.set = o, delete r.value, delete r.writable);
                var s = n.nativeToPseudo(r);
                return "value" in r && n.setProperty(s, "value", r.value), s;
            }
        }, this.setProperty(this.OBJECT, "getOwnPropertyDescriptor", this.createNativeFunction(r, !1), t.NONENUMERABLE_DESCRIPTOR), r = function(t) {
            return i(t), n.getPrototype(t);
        }, this.setProperty(this.OBJECT, "getPrototypeOf", this.createNativeFunction(r, !1), t.NONENUMERABLE_DESCRIPTOR), r = function(t) {
            return Boolean(t) && !t.preventExtensions;
        }, this.setProperty(this.OBJECT, "isExtensible", this.createNativeFunction(r, !1), t.NONENUMERABLE_DESCRIPTOR), r = function(t) {
            return t && t.isObject && (t.preventExtensions = !0), t;
        }, this.setProperty(this.OBJECT, "preventExtensions", this.createNativeFunction(r, !1), t.NONENUMERABLE_DESCRIPTOR), this.setNativeFunctionPrototype(this.OBJECT, "toString", Qr.prototype.toString), this.setNativeFunctionPrototype(this.OBJECT, "toLocaleString", Qr.prototype.toString), this.setNativeFunctionPrototype(this.OBJECT, "valueOf", Qr.prototype.valueOf), r = function(t) {
            return i(this), this.isObject ? String(t) in this.properties : this.hasOwnProperty(t);
        }, this.setNativeFunctionPrototype(this.OBJECT, "hasOwnProperty", r), r = function(t) {
            return i(this), Object.prototype.propertyIsEnumerable.call(this.properties, t);
        }, this.setNativeFunctionPrototype(this.OBJECT, "propertyIsEnumerable", r), r = function(t) {
            for(;;){
                if (!(t = n.getPrototype(t))) return !1;
                if (t === this) return !0;
            }
        }, this.setNativeFunctionPrototype(this.OBJECT, "isPrototypeOf", r);
    }, t.prototype.initArray = function(e) {
        var r, n = this;
        r = function(e) {
            if (n.calledWithNew()) var r = this;
            else r = n.createObjectProto(n.ARRAY_PROTO);
            var i = arguments[0];
            if (1 === arguments.length && "number" == typeof i) isNaN(t.legalArrayLength(i)) && n.throwException(n.RANGE_ERROR, "Invalid array length"), r.properties.length = i;
            else {
                for(var o = 0; o < arguments.length; o++)r.properties[o] = arguments[o];
                r.properties.length = o;
            }
            return r;
        }, this.ARRAY = this.createNativeFunction(r, !0), this.ARRAY_PROTO = this.ARRAY.properties.prototype, this.setProperty(e, "Array", this.ARRAY), r = function(t) {
            return t && "Array" === t.class;
        }, this.setProperty(this.ARRAY, "isArray", this.createNativeFunction(r, !1), t.NONENUMERABLE_DESCRIPTOR), r = function() {
            return Array.prototype.pop.call(this.properties);
        }, this.setNativeFunctionPrototype(this.ARRAY, "pop", r), r = function(t) {
            return Array.prototype.push.apply(this.properties, arguments);
        }, this.setNativeFunctionPrototype(this.ARRAY, "push", r), r = function() {
            return Array.prototype.shift.call(this.properties);
        }, this.setNativeFunctionPrototype(this.ARRAY, "shift", r), r = function(t) {
            return Array.prototype.unshift.apply(this.properties, arguments);
        }, this.setNativeFunctionPrototype(this.ARRAY, "unshift", r), r = function() {
            return Array.prototype.reverse.call(this.properties), this;
        }, this.setNativeFunctionPrototype(this.ARRAY, "reverse", r), r = function(t, e) {
            var r = Array.prototype.splice.apply(this.properties, arguments);
            return n.unwrap && (r = r.map(n.unwrap)), n.nativeToPseudo(r);
        }, this.setNativeFunctionPrototype(this.ARRAY, "splice", r), r = function(t, e) {
            var r = Array.prototype.slice.call(this.properties, t, e);
            return n.unwrap && (r = r.map(n.unwrap)), n.nativeToPseudo(r);
        }, this.setNativeFunctionPrototype(this.ARRAY, "slice", r), r = function(t) {
            return Array.prototype.join.call(this.properties, t);
        }, this.setNativeFunctionPrototype(this.ARRAY, "join", r), r = function(t) {
            for(var e = [], r = 0, i = n.getProperty(this, "length"), o = 0; o < i; o++){
                if (n.hasProperty(this, o)) {
                    var s = n.getProperty(this, o);
                    e[r] = s;
                }
                r++;
            }
            for(o = 0; o < arguments.length; o++){
                var a = arguments[o];
                if (n.isa(a, n.ARRAY)) for(var u = n.getProperty(a, "length"), c = 0; c < u; c++)n.hasProperty(a, c) && (e[r] = n.getProperty(a, c)), r++;
                else e[r] = a;
            }
            return n.unwrap && (e = e.map(n.unwrap)), n.nativeToPseudo(e);
        }, this.setNativeFunctionPrototype(this.ARRAY, "concat", r), r = function(t, e) {
            return Array.prototype.indexOf.apply(this.properties, arguments);
        }, this.setNativeFunctionPrototype(this.ARRAY, "indexOf", r), r = function(t, e) {
            return Array.prototype.lastIndexOf.apply(this.properties, arguments);
        }, this.setNativeFunctionPrototype(this.ARRAY, "lastIndexOf", r), r = function() {
            return Array.prototype.sort.call(this.properties), this;
        }, this.setNativeFunctionPrototype(this.ARRAY, "sort", r), this.polyfills_.push("Object.defineProperty(Array.prototype, 'every',", "{configurable: true, writable: true, value:", "function(callbackfn, thisArg) {", "if (!this || typeof callbackfn !== 'function') throw TypeError();", "var T, k;", "var O = Object(this);", "var len = O.length >>> 0;", "if (arguments.length > 1) T = thisArg;", "k = 0;", "while (k < len) {", "if (k in O && !callbackfn.call(T, O[k], k, O)) return false;", "k++;", "}", "return true;", "}", "});", "Object.defineProperty(Array.prototype, 'filter',", "{configurable: true, writable: true, value:", "function(fun/*, thisArg*/) {", "if (this === void 0 || this === null || typeof fun !== 'function') throw TypeError();", "var t = Object(this);", "var len = t.length >>> 0;", "var res = [];", "var thisArg = arguments.length >= 2 ? arguments[1] : void 0;", "for (var i = 0; i < len; i++) {", "if (i in t) {", "var val = t[i];", "if (fun.call(thisArg, val, i, t)) res.push(val);", "}", "}", "return res;", "}", "});", "Object.defineProperty(Array.prototype, 'forEach',", "{configurable: true, writable: true, value:", "function(callback, thisArg) {", "if (!this || typeof callback !== 'function') throw TypeError();", "var T, k;", "var O = Object(this);", "var len = O.length >>> 0;", "if (arguments.length > 1) T = thisArg;", "k = 0;", "while (k < len) {", "if (k in O) callback.call(T, O[k], k, O);", "k++;", "}", "}", "});", "Object.defineProperty(Array.prototype, 'map',", "{configurable: true, writable: true, value:", "function(callback, thisArg) {", "if (!this || typeof callback !== 'function') new TypeError;", "var T, A, k;", "var O = Object(this);", "var len = O.length >>> 0;", "if (arguments.length > 1) T = thisArg;", "A = new Array(len);", "k = 0;", "while (k < len) {", "if (k in O) A[k] = callback.call(T, O[k], k, O);", "k++;", "}", "return A;", "}", "});", "Object.defineProperty(Array.prototype, 'reduce',", "{configurable: true, writable: true, value:", "function(callback /*, initialValue*/) {", "if (!this || typeof callback !== 'function') throw TypeError();", "var t = Object(this), len = t.length >>> 0, k = 0, value;", "if (arguments.length === 2) {", "value = arguments[1];", "} else {", "while (k < len && !(k in t)) k++;", "if (k >= len) {", "throw TypeError('Reduce of empty array with no initial value');", "}", "value = t[k++];", "}", "for (; k < len; k++) {", "if (k in t) value = callback(value, t[k], k, t);", "}", "return value;", "}", "});", "Object.defineProperty(Array.prototype, 'reduceRight',", "{configurable: true, writable: true, value:", "function(callback /*, initialValue*/) {", "if (null === this || 'undefined' === typeof this || 'function' !== typeof callback) throw TypeError();", "var t = Object(this), len = t.length >>> 0, k = len - 1, value;", "if (arguments.length >= 2) {", "value = arguments[1];", "} else {", "while (k >= 0 && !(k in t)) k--;", "if (k < 0) {", "throw TypeError('Reduce of empty array with no initial value');", "}", "value = t[k--];", "}", "for (; k >= 0; k--) {", "if (k in t) value = callback(value, t[k], k, t);", "}", "return value;", "}", "});", "Object.defineProperty(Array.prototype, 'some',", "{configurable: true, writable: true, value:", "function(fun/*, thisArg*/) {", "if (!this || typeof fun !== 'function') throw TypeError();", "var t = Object(this);", "var len = t.length >>> 0;", "var thisArg = arguments.length >= 2 ? arguments[1] : void 0;", "for (var i = 0; i < len; i++) {", "if (i in t && fun.call(thisArg, t[i], i, t)) {", "return true;", "}", "}", "return false;", "}", "});", "(function() {", "var sort_ = Array.prototype.sort;", "Array.prototype.sort = function(opt_comp) {", "if (typeof opt_comp !== 'function') {", "return sort_.call(this);", "}", "for (var i = 0; i < this.length; i++) {", "var changes = 0;", "for (var j = 0; j < this.length - i - 1; j++) {", "if (opt_comp(this[j], this[j + 1]) > 0) {", "var swap = this[j];", "this[j] = this[j + 1];", "this[j + 1] = swap;", "changes++;", "}", "}", "if (!changes) break;", "}", "return this;", "};", "})();", "Object.defineProperty(Array.prototype, 'toLocaleString',", "{configurable: true, writable: true, value:", "function() {", "var out = [];", "for (var i = 0; i < this.length; i++) {", "out[i] = (this[i] === null || this[i] === undefined) ? '' : this[i].toLocaleString();", "}", "return out.join(',');", "}", "});", "");
    }, t.prototype.initString = function(e) {
        var r, n = this;
        r = function(t) {
            return t = String(t), n.calledWithNew() ? (this.data = t, this) : t;
        }, this.STRING = this.createNativeFunction(r, !0), this.setProperty(e, "String", this.STRING), this.setProperty(this.STRING, "fromCharCode", this.createNativeFunction(String.fromCharCode, !1), t.NONENUMERABLE_DESCRIPTOR);
        for(var i = [
            "trim",
            "toLowerCase",
            "toUpperCase",
            "toLocaleLowerCase",
            "toLocaleUpperCase",
            "charAt",
            "charCodeAt",
            "substring",
            "slice",
            "substr",
            "indexOf",
            "lastIndexOf",
            "concat"
        ], o = 0; o < i.length; o++)this.setNativeFunctionPrototype(this.STRING, i[o], String.prototype[i[o]]);
        r = function(t, e, r) {
            return e = e ? n.pseudoToNative(e) : void 0, r = r ? n.pseudoToNative(r) : void 0, String(this).localeCompare(t, e, r);
        }, this.setNativeFunctionPrototype(this.STRING, "localeCompare", r), r = function(t, e) {
            n.isa(t, n.REGEXP) && (t = t.data);
            var r = String(this).split(t, e);
            return n.nativeToPseudo(r);
        }, this.setNativeFunctionPrototype(this.STRING, "split", r), r = function(t) {
            t = t ? t.data : void 0;
            var e = String(this).match(t);
            return e ? n.nativeToPseudo(e) : null;
        }, this.setNativeFunctionPrototype(this.STRING, "match", r), r = function(t) {
            return n.isa(t, n.REGEXP) && (t = t.data), String(this).search(t);
        }, this.setNativeFunctionPrototype(this.STRING, "search", r), r = function(t, e) {
            return String(this).replace(t.data || t, e);
        }, this.setNativeFunctionPrototype(this.STRING, "replace", r), this.polyfills_.push("(function() {", "var replace_ = String.prototype.replace;", "String.prototype.replace = function(substr, newSubstr) {", "if (typeof newSubstr !== 'function') {", "return replace_.call(this, substr, newSubstr);", "}", "var str = this;", "if (substr instanceof RegExp) {", "var subs = [];", "var m = substr.exec(str);", "while (m) {", "m.push(m.index, str);", "var inject = newSubstr.apply(null, m);", "subs.push([m.index, m[0].length, inject]);", "m = substr.global ? substr.exec(str) : null;", "}", "for (var i = subs.length - 1; i >= 0; i--) {", "str = str.substring(0, subs[i][0]) + subs[i][2] + str.substring(subs[i][0] + subs[i][1]);", "}", "} else {", "var i = str.indexOf(substr);", "if (i !== -1) {", "var inject = newSubstr(str.substr(i, substr.length), i, str);", "str = str.substring(0, i) + inject + str.substring(i + substr.length);", "}", "}", "return str;", "};", "})();", "");
    }, t.prototype.initBoolean = function(t) {
        var e, r = this;
        e = function(t) {
            return t = Boolean(t), r.calledWithNew() ? (this.data = t, this) : t;
        }, this.BOOLEAN = this.createNativeFunction(e, !0), this.setProperty(t, "Boolean", this.BOOLEAN);
    }, t.prototype.initNumber = function(e) {
        var r, n = this;
        r = function(t) {
            return t = Number(t), n.calledWithNew() ? (this.data = t, this) : t;
        }, this.NUMBER = this.createNativeFunction(r, !0), this.setProperty(e, "Number", this.NUMBER);
        for(var i = [
            "MAX_VALUE",
            "MIN_VALUE",
            "NaN",
            "NEGATIVE_INFINITY",
            "POSITIVE_INFINITY"
        ], o = 0; o < i.length; o++)this.setProperty(this.NUMBER, i[o], Number[i[o]], t.READONLY_NONENUMERABLE_DESCRIPTOR);
        r = function(t) {
            try {
                return Number(this).toExponential(t);
            } catch (t) {
                n.throwException(n.ERROR, t.message);
            }
        }, this.setNativeFunctionPrototype(this.NUMBER, "toExponential", r), r = function(t) {
            try {
                return Number(this).toFixed(t);
            } catch (t) {
                n.throwException(n.ERROR, t.message);
            }
        }, this.setNativeFunctionPrototype(this.NUMBER, "toFixed", r), r = function(t) {
            try {
                return Number(this).toPrecision(t);
            } catch (t) {
                n.throwException(n.ERROR, t.message);
            }
        }, this.setNativeFunctionPrototype(this.NUMBER, "toPrecision", r), r = function(t) {
            try {
                return Number(this).toString(t);
            } catch (t) {
                n.throwException(n.ERROR, t.message);
            }
        }, this.setNativeFunctionPrototype(this.NUMBER, "toString", r), r = function(t, e) {
            return t = t ? n.pseudoToNative(t) : void 0, e = e ? n.pseudoToNative(e) : void 0, Number(this).toLocaleString(t, e);
        }, this.setNativeFunctionPrototype(this.NUMBER, "toLocaleString", r);
    }, t.prototype.initDate = function(e) {
        var r, n = this;
        r = function(t, e) {
            if (!n.calledWithNew()) return Date();
            var r = [
                null
            ].concat([].slice.call(arguments));
            return this.data = new (Function.prototype.bind.apply(Date, r)), this;
        }, this.DATE = this.createNativeFunction(r, !0), this.setProperty(e, "Date", this.DATE), this.setProperty(this.DATE, "now", this.createNativeFunction(Date.now, !1), t.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.DATE, "parse", this.createNativeFunction(Date.parse, !1), t.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.DATE, "UTC", this.createNativeFunction(Date.UTC, !1), t.NONENUMERABLE_DESCRIPTOR);
        for(var i = [
            "getDate",
            "getDay",
            "getFullYear",
            "getHours",
            "getMilliseconds",
            "getMinutes",
            "getMonth",
            "getSeconds",
            "getTime",
            "getTimezoneOffset",
            "getUTCDate",
            "getUTCDay",
            "getUTCFullYear",
            "getUTCHours",
            "getUTCMilliseconds",
            "getUTCMinutes",
            "getUTCMonth",
            "getUTCSeconds",
            "getYear",
            "setDate",
            "setFullYear",
            "setHours",
            "setMilliseconds",
            "setMinutes",
            "setMonth",
            "setSeconds",
            "setTime",
            "setUTCDate",
            "setUTCFullYear",
            "setUTCHours",
            "setUTCMilliseconds",
            "setUTCMinutes",
            "setUTCMonth",
            "setUTCSeconds",
            "setYear",
            "toDateString",
            "toISOString",
            "toJSON",
            "toGMTString",
            "toLocaleDateString",
            "toLocaleString",
            "toLocaleTimeString",
            "toTimeString",
            "toUTCString"
        ], o = 0; o < i.length; o++)r = function(t) {
            return function(e) {
                for(var r = [], i = 0; i < arguments.length; i++)r[i] = n.pseudoToNative(arguments[i]);
                return this.data[t].apply(this.data, r);
            };
        }(i[o]), this.setNativeFunctionPrototype(this.DATE, i[o], r);
    }, t.prototype.initRegExp = function(e) {
        var r, n = this;
        r = function(t, e) {
            if (n.calledWithNew()) var r = this;
            else r = n.createObjectProto(n.REGEXP_PROTO);
            return t = t ? t.toString() : "", e = e ? e.toString() : "", n.populateRegExp(r, new RegExp(t, e)), r;
        }, this.REGEXP = this.createNativeFunction(r, !0), this.REGEXP_PROTO = this.REGEXP.properties.prototype, this.setProperty(e, "RegExp", this.REGEXP), this.setProperty(this.REGEXP.properties.prototype, "global", void 0, t.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(this.REGEXP.properties.prototype, "ignoreCase", void 0, t.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(this.REGEXP.properties.prototype, "multiline", void 0, t.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(this.REGEXP.properties.prototype, "source", "(?:)", t.READONLY_NONENUMERABLE_DESCRIPTOR), r = function(t) {
            return this.data.test(t);
        }, this.setNativeFunctionPrototype(this.REGEXP, "test", r), r = function(t) {
            t = t.toString(), this.data.lastIndex = Number(n.getProperty(this, "lastIndex"));
            var e = this.data.exec(t);
            if (n.setProperty(this, "lastIndex", this.data.lastIndex), e) {
                for(var r = n.createObjectProto(n.ARRAY_PROTO), i = 0; i < e.length; i++)n.setProperty(r, i, e[i]);
                return n.setProperty(r, "index", e.index), n.setProperty(r, "input", e.input), r;
            }
            return null;
        }, this.setNativeFunctionPrototype(this.REGEXP, "exec", r);
    }, t.prototype.initError = function(e) {
        var r = this;
        this.ERROR = this.createNativeFunction(function(e) {
            if (r.calledWithNew()) var n = this;
            else n = r.createObject(r.ERROR);
            return e && r.setProperty(n, "message", String(e), t.NONENUMERABLE_DESCRIPTOR), n;
        }, !0), this.setProperty(e, "Error", this.ERROR), this.setProperty(this.ERROR.properties.prototype, "message", "", t.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.ERROR.properties.prototype, "name", "Error", t.NONENUMERABLE_DESCRIPTOR);
        var n = function(n) {
            var i = r.createNativeFunction(function(e) {
                if (r.calledWithNew()) var n = this;
                else n = r.createObject(i);
                return e && r.setProperty(n, "message", String(e), t.NONENUMERABLE_DESCRIPTOR), n;
            }, !0);
            return r.setProperty(i, "prototype", r.createObject(r.ERROR)), r.setProperty(i.properties.prototype, "name", n, t.NONENUMERABLE_DESCRIPTOR), r.setProperty(e, n, i), i;
        };
        this.EVAL_ERROR = n("EvalError"), this.RANGE_ERROR = n("RangeError"), this.REFERENCE_ERROR = n("ReferenceError"), this.SYNTAX_ERROR = n("SyntaxError"), this.TYPE_ERROR = n("TypeError"), this.URI_ERROR = n("URIError");
    }, t.prototype.initMath = function(e) {
        var r = this.createObjectProto(this.OBJECT_PROTO);
        this.setProperty(e, "Math", r);
        for(var n = [
            "E",
            "LN2",
            "LN10",
            "LOG2E",
            "LOG10E",
            "PI",
            "SQRT1_2",
            "SQRT2"
        ], i = 0; i < n.length; i++)this.setProperty(r, n[i], Math[n[i]], t.READONLY_NONENUMERABLE_DESCRIPTOR);
        var o = [
            "abs",
            "acos",
            "asin",
            "atan",
            "atan2",
            "ceil",
            "cos",
            "exp",
            "floor",
            "log",
            "max",
            "min",
            "pow",
            "random",
            "round",
            "sin",
            "sqrt",
            "tan"
        ];
        for(i = 0; i < o.length; i++)this.setProperty(r, o[i], this.createNativeFunction(Math[o[i]], !1), t.NONENUMERABLE_DESCRIPTOR);
    }, t.prototype.initJSON = function(t) {
        var e = this, r = e.createObjectProto(this.OBJECT_PROTO);
        this.setProperty(t, "JSON", r);
        var n = function(t) {
            try {
                var r = JSON.parse(t.toString());
            } catch (t) {
                e.throwException(e.SYNTAX_ERROR, t.message);
            }
            return e.nativeToPseudo(r);
        };
        this.setProperty(r, "parse", this.createNativeFunction(n, !1)), n = function(t) {
            var r = e.pseudoToNative(t);
            try {
                var n = JSON.stringify(r);
            } catch (t) {
                e.throwException(e.TYPE_ERROR, t.message);
            }
            return n;
        }, this.setProperty(r, "stringify", this.createNativeFunction(n, !1));
    }, t.prototype.isa = function(t, e) {
        if (null == t || !e) return !1;
        var r = e.properties.prototype;
        if (t === r) return !0;
        for(var n = this.getPrototype(t); n;){
            if (n === r) return !0;
            n = n.proto;
        }
        return !1;
    }, t.legalArrayLength = function(t) {
        var e = t >>> 0;
        return e === Number(t) ? e : NaN;
    }, t.legalArrayIndex = function(t) {
        var e = t >>> 0;
        return String(e) === String(t) && 4294967295 !== e ? e : NaN;
    }, t.prototype.createObject = function(t) {
        return this.createObjectProto(t && t.properties.prototype);
    }, t.prototype.createObjectProto = function(t) {
        var e = new Qr(t);
        return this.isa(e, this.FUNCTION) && (this.setProperty(e, "prototype", this.createObjectProto(this.OBJECT_PROTO || null)), e.class = "Function"), this.isa(e, this.ARRAY) && (this.setProperty(e, "length", 0, {
            configurable: !1,
            enumerable: !1,
            writable: !0
        }), e.class = "Array"), this.isa(e, this.ERROR) && (e.class = "Error"), e;
    }, t.prototype.populateRegExp = function(e, r) {
        e.data = r, this.setProperty(e, "lastIndex", r.lastIndex, t.NONENUMERABLE_DESCRIPTOR), this.setProperty(e, "source", r.source, t.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(e, "global", r.global, t.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(e, "ignoreCase", r.ignoreCase, t.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(e, "multiline", r.multiline, t.READONLY_NONENUMERABLE_DESCRIPTOR);
    }, t.prototype.createFunction = function(e, r) {
        var n = this.createObjectProto(this.FUNCTION_PROTO);
        return n.parentScope = r, n.node = e, this.setProperty(n, "length", n.node.params.length, t.READONLY_DESCRIPTOR), n;
    }, t.prototype.createNativeFunction = function(e, r) {
        var n = this.createObjectProto(this.FUNCTION_PROTO);
        return n.nativeFunc = e, e.id = this.functionCounter_++, this.setProperty(n, "length", e.length, t.READONLY_DESCRIPTOR), r ? this.setProperty(n.properties.prototype, "constructor", n, t.NONENUMERABLE_DESCRIPTOR) : !1 === r && (n.illegalConstructor = !0, this.setProperty(n, "prototype", void 0)), n;
    }, t.prototype.createAsyncFunction = function(e) {
        var r = this.createObjectProto(this.FUNCTION_PROTO);
        return r.asyncFunc = e, e.id = this.functionCounter_++, this.setProperty(r, "length", e.length, t.READONLY_DESCRIPTOR), r;
    }, t.prototype.nativeToPseudo = function(t) {
        if ("boolean" == typeof t || "number" == typeof t || "string" == typeof t || null == t) return t;
        if (t instanceof RegExp) {
            var e = this.createObjectProto(this.REGEXP_PROTO);
            return this.populateRegExp(e, t), e;
        }
        if (t instanceof Function) {
            var r = this;
            return this.createNativeFunction(function() {
                return r.nativeToPseudo(t.apply(r, Array.prototype.slice.call(arguments).map(function(t) {
                    return r.pseudoToNative(t);
                })));
            }, void 0);
        }
        var n;
        if (Array.isArray(t)) {
            n = this.createObjectProto(this.ARRAY_PROTO);
            for(var i = 0; i < t.length; i++)i in t && this.setProperty(n, i, this.wrap ? this.wrap(t[i]) : this.nativeToPseudo(t[i]));
        } else for(var o in n = this.createObjectProto(this.OBJECT_PROTO), t)this.setProperty(n, o, this.wrap ? this.wrap(t[i]) : this.nativeToPseudo(t[i]));
        return n;
    }, t.prototype.pseudoToNative = function(t, e) {
        if ("boolean" == typeof t || "number" == typeof t || "string" == typeof t || null == t) return t;
        if (this.isa(t, this.REGEXP)) return t.data;
        var r, n = e || {
            pseudo: [],
            native: []
        };
        if (-1 !== (o = n.pseudo.indexOf(t))) return n.native[o];
        if (n.pseudo.push(t), this.isa(t, this.ARRAY)) {
            r = [], n.native.push(r);
            for(var i = this.getProperty(t, "length"), o = 0; o < i; o++)this.hasProperty(t, o) && (r[o] = this.unwrap ? this.unwrap(this.getProperty(t, o), n) : this.pseudoToNative(this.getProperty(t, o), n));
        } else {
            if (t._native) return t._native;
            r = {}, n.native.push(r);
            var s = void 0;
            for(var a in t.properties)s = t.properties[a], r[a] = this.unwrap ? this.unwrap(s, n) : this.pseudoToNative(s, n);
        }
        return n.pseudo.pop(), n.native.pop(), r;
    }, t.prototype.getPrototype = function(t) {
        switch(typeof t){
            case "number":
                return this.NUMBER.properties.prototype;
            case "boolean":
                return this.BOOLEAN.properties.prototype;
            case "string":
                return this.STRING.properties.prototype;
        }
        return t ? t.proto : null;
    }, t.prototype.getProperty = function(e, r) {
        if (r = String(r), null == e && this.throwException(this.TYPE_ERROR, "Cannot read property '" + r + "' of " + e), "length" === r) {
            if (this.isa(e, this.STRING)) return String(e).length;
        } else if (r.charCodeAt(0) < 64 && this.isa(e, this.STRING)) {
            var n = t.legalArrayIndex(r);
            if (!isNaN(n) && n < String(e).length) return String(e)[n];
        }
        do {
            var i = e;
            if (i.properties && r in i.properties) {
                var o = i.getter[r];
                return o ? (o.isGetter = !0, o) : i.properties[r];
            }
            if (void 0 !== i._native && "_" !== r.charAt(0) && "function" != typeof i._native[r]) return this.wrap ? this.wrap(i._native[r]) : i._native[r];
        }while (e = this.getPrototype(e));
    }, t.prototype.hasProperty = function(e, r) {
        if (!e.isObject) throw TypeError("Primitive data type has no properties");
        if ("length" === (r = String(r)) && this.isa(e, this.STRING)) return !0;
        if (this.isa(e, this.STRING)) {
            var n = t.legalArrayIndex(r);
            if (!isNaN(n) && n < String(e).length) return !0;
        }
        do {
            var i = e;
            if (i.properties && r in i.properties) return !0;
            if (void 0 !== i._native && "_" != r.charAt(0)) {
                var o = typeof i._native[r];
                return "function" !== o && ("undefined" !== o || en(i._native.constructor, r));
            }
        }while (e = this.getPrototype(e));
        return !1;
    }, t.prototype.setProperty = function(e, r, n, i) {
        r = String(r), null == e && this.throwException(this.TYPE_ERROR, "Cannot set property '" + r + "' of " + e), i && ("get" in i || "set" in i) && ("value" in i || "writable" in i) && this.throwException(this.TYPE_ERROR, "Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
        var o = !this.stateStack || this.getScope().strict;
        if (e.isObject) {
            if (this.isa(e, this.STRING)) {
                var s = t.legalArrayIndex(r);
                if ("length" === r || !isNaN(s) && s < String(e).length) return void (o && this.throwException(this.TYPE_ERROR, "Cannot assign to read only property '" + r + "' of String '" + e.data + "'"));
            }
            if ("Array" === e.class) {
                var a = e.properties.length, u = void 0;
                if ("length" === r) {
                    if (n = t.legalArrayLength(n), isNaN(n) && this.throwException(this.RANGE_ERROR, "Invalid array length"), n < a) for(u in e.properties)u = t.legalArrayIndex(u), !isNaN(u) && n <= u && delete e.properties[u];
                } else isNaN(u = t.legalArrayIndex(r)) || (e.properties.length = Math.max(a, u + 1));
            }
            if (!e.preventExtensions || r in e.properties) {
                if (i) {
                    "get" in i && (i.get ? e.getter[r] = i.get : delete e.getter[r]), "set" in i && (i.set ? e.setter[r] = i.set : delete e.setter[r]);
                    var c = {};
                    "configurable" in i && (c.configurable = i.configurable), "enumerable" in i && (c.enumerable = i.enumerable), "writable" in i && (c.writable = i.writable, delete e.getter[r], delete e.setter[r]), "value" in i ? (c.value = i.value, delete e.getter[r], delete e.setter[r]) : n !== ReferenceError && (c.value = n, delete e.getter[r], delete e.setter[r]);
                    try {
                        Object.defineProperty(e.properties, r, c);
                    } catch (t) {
                        this.throwException(this.TYPE_ERROR, "Cannot redefine property: " + r);
                    }
                } else {
                    if (n === ReferenceError) throw ReferenceError("Value not specified.");
                    if (void 0 !== e._native && "_" != r.charAt(0)) {
                        var l = typeof e._native[r];
                        if ("function" !== l && ("undefined" !== l || en(e._native.constructor, r))) {
                            var p = this.unwrap ? this.unwrap(n) : n;
                            return void (e._native[r] = p);
                        }
                    }
                    for(var h = e; !(r in h.properties);)if (!(h = this.getPrototype(h))) {
                        h = e;
                        break;
                    }
                    if (h.setter && h.setter[r]) return h.setter[r];
                    if (h.getter && h.getter[r]) o && this.throwException(this.TYPE_ERROR, "Cannot set property '" + r + "' of object '" + e + "' which only has a getter");
                    else try {
                        e.properties[r] = n;
                    } catch (t) {
                        o && this.throwException(this.TYPE_ERROR, "Cannot assign to read only property '" + r + "' of object '" + e + "'");
                    }
                }
            } else o && this.throwException(this.TYPE_ERROR, "Can't add property '" + r + "', object is not extensible");
        } else o && this.throwException(this.TYPE_ERROR, "Can't create property '" + r + "' on '" + e + "'");
    }, t.prototype.setNativeFunctionPrototype = function(e, r, n) {
        this.setProperty(e.properties.prototype, r, this.createNativeFunction(n, !1), t.NONENUMERABLE_DESCRIPTOR);
    }, t.prototype.getScope = function() {
        var t = this.stateStack[this.stateStack.length - 1].scope;
        if (!t) throw Error("No scope found.");
        return t;
    }, t.prototype.createScope = function(t, e) {
        var r = this.createObjectProto(null);
        if (r.parentScope = e, e || this.initGlobalScope(r), this.populateScope_(t, r), r.strict = !1, e && e.strict) r.strict = !0;
        else {
            var n = t.body && t.body[0];
            n && n.expression && "Literal" === n.expression.type && "use strict" === n.expression.value && (r.strict = !0);
        }
        return r;
    }, t.prototype.createSpecialScope = function(t, e) {
        if (!t) throw Error("parentScope required");
        var r = e || this.createObjectProto(null);
        return r.parentScope = t, r.strict = t.strict, r;
    }, t.prototype.getValueFromScope = function(t) {
        for(var e = this.getScope(); e && e !== this.global;){
            if (t in e.properties) return e.properties[t];
            e = e.parentScope;
        }
        if (e === this.global && this.hasProperty(e, t)) return this.getProperty(e, t);
        var r = this.stateStack[this.stateStack.length - 1].node;
        "UnaryExpression" === r.type && "typeof" === r.operator || this.throwException(this.REFERENCE_ERROR, t + " is not defined");
    }, t.prototype.setValueToScope = function(t, e) {
        for(var r = this.getScope(), n = r.strict; r && r !== this.global;){
            if (t in r.properties) return void (r.properties[t] = e);
            r = r.parentScope;
        }
        if (r === this.global && (!n || this.hasProperty(r, t))) return this.setProperty(r, t, e);
        this.throwException(this.REFERENCE_ERROR, t + " is not defined");
    }, t.prototype.populateScope_ = function(e, r) {
        if ("VariableDeclaration" === e.type) for(var n = 0; n < e.declarations.length; n++)this.setProperty(r, e.declarations[n].id.name, void 0, t.VARIABLE_DESCRIPTOR);
        else {
            if ("FunctionDeclaration" === e.type) return void this.setProperty(r, e.id.name, this.createFunction(e, r), t.VARIABLE_DESCRIPTOR);
            if ("FunctionExpression" === e.type) return;
            if ("ExpressionStatement" === e.type) return;
        }
        var i = e.constructor;
        for(var o in e){
            var s = e[o];
            if (s && "object" == typeof s) {
                if (Array.isArray(s)) for(n = 0; n < s.length; n++)s[n] && s[n].constructor === i && this.populateScope_(s[n], r);
                else s.constructor === i && this.populateScope_(s, r);
            }
        }
    }, t.prototype.stripLocations_ = function(t, e, r) {
        for(var n in e ? t.start = e : delete t.start, r ? t.end = r : delete t.end, t)if (t.hasOwnProperty(n)) {
            var i = t[n];
            i && "object" == typeof i && this.stripLocations_(i, e, r);
        }
    }, t.prototype.calledWithNew = function() {
        return this.stateStack[this.stateStack.length - 1].isConstructor;
    }, t.prototype.getValue = function(e) {
        return e[0] === t.SCOPE_REFERENCE ? this.getValueFromScope(e[1]) : this.getProperty(e[0], e[1]);
    }, t.prototype.setValue = function(e, r) {
        return e[0] === t.SCOPE_REFERENCE ? this.setValueToScope(e[1], r) : this.setProperty(e[0], e[1], r);
    }, t.prototype.throwException = function(e, r) {
        if (void 0 === r) var n = e;
        else n = this.createObject(e), this.setProperty(n, "message", r, t.NONENUMERABLE_DESCRIPTOR);
        throw this.executeException(n), t.STEP_ERROR;
    }, t.prototype.executeException = function(t) {
        var e, r = this.stateStack.slice();
        do {
            this.stateStack.pop();
            var n = this.stateStack[this.stateStack.length - 1];
            if ("TryStatement" === n.node.type) return void (n.throwValue = t);
        }while (n && "Program" !== n.node.type);
        if (this.isa(t, this.ERROR)) {
            var i = {
                EvalError: EvalError,
                RangeError: RangeError,
                ReferenceError: ReferenceError,
                SyntaxError: SyntaxError,
                TypeError: TypeError,
                URIError: URIError
            }, o = this.getProperty(t, "name").toString(), s = this.getProperty(t, "message").valueOf();
            e = (i[o] || Error)(s);
        } else e = t.toString();
        throw this.stateStack = r, e;
    }, t.prototype.createGetter_ = function(t, e) {
        var r = Array.isArray(e) ? e[0] : e, n = new this.nodeConstructor;
        n.type = "CallExpression";
        var i = new tn(n, this.stateStack[this.stateStack.length - 1].scope);
        return i.doneCallee_ = !0, i.funcThis_ = r, i.func_ = t, i.doneArgs_ = !0, i.arguments_ = [], i;
    }, t.prototype.createSetter_ = function(t, e, r) {
        var n = Array.isArray(e) ? e[0] : this.global, i = new this.nodeConstructor;
        i.type = "CallExpression";
        var o = new tn(i, this.stateStack[this.stateStack.length - 1].scope);
        return o.doneCallee_ = !0, o.funcThis_ = n, o.func_ = t, o.doneArgs_ = !0, o.arguments_ = [
            r
        ], o;
    }, t.prototype.stepArrayExpression = function(t, e, r) {
        var n = r.elements, i = e.n_ || 0;
        for(e.array_ ? (this.setProperty(e.array_, i, e.value), i++) : (e.array_ = this.createObjectProto(this.ARRAY_PROTO), e.array_.properties.length = n.length); i < n.length;){
            if (n[i]) return e.n_ = i, new tn(n[i], e.scope);
            i++;
        }
        t.pop(), t[t.length - 1].value = e.array_;
    }, t.prototype.stepAssignmentExpression = function(t, e, r) {
        if (!e.doneLeft_) {
            e.doneLeft_ = !0;
            var n = new tn(r.left, e.scope);
            return n.components = !0, n;
        }
        if (!e.doneRight_) {
            if (e.leftReference_ || (e.leftReference_ = e.value), e.doneGetter_ && (e.leftValue_ = e.value), !e.doneGetter_ && "=" !== r.operator) {
                var i = this.getValue(e.leftReference_);
                if (e.leftValue_ = i, i && "object" == typeof i && i.isGetter) {
                    i.isGetter = !1, e.doneGetter_ = !0;
                    var o = i;
                    return this.createGetter_(o, e.leftReference_);
                }
            }
            return e.doneRight_ = !0, new tn(r.right, e.scope);
        }
        if (e.doneSetter_) return t.pop(), void (t[t.length - 1].value = e.doneSetter_);
        var s = e.leftValue_, a = e.value;
        switch(r.operator){
            case "=":
                s = a;
                break;
            case "+=":
                s += a;
                break;
            case "-=":
                s -= a;
                break;
            case "*=":
                s *= a;
                break;
            case "/=":
                s /= a;
                break;
            case "%=":
                s %= a;
                break;
            case "<<=":
                s <<= a;
                break;
            case ">>=":
                s >>= a;
                break;
            case ">>>=":
                s >>>= a;
                break;
            case "&=":
                s &= a;
                break;
            case "^=":
                s ^= a;
                break;
            case "|=":
                s |= a;
                break;
            default:
                throw SyntaxError("Unknown assignment expression: " + r.operator);
        }
        var u = this.setValue(e.leftReference_, s);
        if (u) return e.doneSetter_ = s, this.createSetter_(u, e.leftReference_, s);
        t.pop(), t[t.length - 1].value = s;
    }, t.prototype.stepBinaryExpression = function(t, e, r) {
        if (!e.doneLeft_) return e.doneLeft_ = !0, new tn(r.left, e.scope);
        if (!e.doneRight_) return e.doneRight_ = !0, e.leftValue_ = e.value, new tn(r.right, e.scope);
        t.pop();
        var n, i = e.leftValue_, o = e.value;
        switch(r.operator){
            case "==":
                n = i == o;
                break;
            case "!=":
                n = i != o;
                break;
            case "===":
                n = i === o;
                break;
            case "!==":
                n = i !== o;
                break;
            case ">":
                n = i > o;
                break;
            case ">=":
                n = i >= o;
                break;
            case "<":
                n = i < o;
                break;
            case "<=":
                n = i <= o;
                break;
            case "+":
                n = i + o;
                break;
            case "-":
                n = i - o;
                break;
            case "*":
                n = i * o;
                break;
            case "/":
                n = i / o;
                break;
            case "%":
                n = i % o;
                break;
            case "&":
                n = i & o;
                break;
            case "|":
                n = i | o;
                break;
            case "^":
                n = i ^ o;
                break;
            case "<<":
                n = i << o;
                break;
            case ">>":
                n = i >> o;
                break;
            case ">>>":
                n = i >>> o;
                break;
            case "in":
                o && o.isObject || this.throwException(this.TYPE_ERROR, "'in' expects an object, not '" + o + "'"), n = this.hasProperty(o, i);
                break;
            case "instanceof":
                this.isa(o, this.FUNCTION) || this.throwException(this.TYPE_ERROR, "Right-hand side of instanceof is not an object"), n = !!i.isObject && this.isa(i, o);
                break;
            default:
                throw SyntaxError("Unknown binary operator: " + r.operator);
        }
        t[t.length - 1].value = n;
    }, t.prototype.stepBlockStatement = function(t, e, r) {
        var n = e.n_ || 0, i = r.body[n];
        if (i) return e.n_ = n + 1, new tn(i, e.scope);
        t.pop();
    }, t.prototype.stepBreakStatement = function(t, e, r) {
        t.pop();
        var n = null;
        for(r.label && (n = r.label.name); e && "CallExpression" !== e.node.type && "NewExpression" !== e.node.type;){
            if (n) {
                if (e.labels && -1 !== e.labels.indexOf(n)) return;
            } else if (e.isLoop || e.isSwitch) return;
            e = t.pop();
        }
        throw SyntaxError("Illegal break statement");
    }, t.prototype.stepCallExpression = function(e, r, n) {
        if (!r.doneCallee_) {
            r.doneCallee_ = 1;
            var i = new tn(n.callee, r.scope);
            return i.components = !0, i;
        }
        if (1 === r.doneCallee_) {
            r.doneCallee_ = 2;
            var o = r.value;
            if (Array.isArray(o)) {
                if (r.func_ = this.getValue(o), o[0] !== t.SCOPE_REFERENCE && (r.funcThis_ = o[0]), (o = r.func_) && "object" == typeof o && o.isGetter) return o.isGetter = !1, r.doneCallee_ = 1, this.createGetter_(o, r.value);
            } else r.func_ = o;
            r.arguments_ = [], r.n_ = 0;
        }
        if (o = r.func_, !r.doneArgs_) {
            if (0 !== r.n_ && r.arguments_.push(r.value), n.arguments[r.n_]) return new tn(n.arguments[r.n_++], r.scope);
            "NewExpression" === n.type ? (o.illegalConstructor && this.throwException(this.TYPE_ERROR, o + " is not a constructor"), r.funcThis_ = this.createObject(o), r.isConstructor = !0) : void 0 === r.funcThis_ && (r.funcThis_ = r.scope.strict ? void 0 : this.global), r.doneArgs_ = !0;
        }
        if (r.doneExec_) e.pop(), r.isConstructor && "object" != typeof r.value ? e[e.length - 1].value = r.funcThis_ : e[e.length - 1].value = r.value;
        else {
            r.doneExec_ = !0, o && o.isObject || (console.log("non-function called", o, r), this.throwException(this.TYPE_ERROR, o + " is not a function"));
            var s = o.node;
            if (s) {
                for(var a = this.createScope(s.body, o.parentScope), u = 0; u < s.params.length; u++){
                    var c = s.params[u].name, l = r.arguments_.length > u ? r.arguments_[u] : void 0;
                    this.setProperty(a, c, l);
                }
                var p = this.createObjectProto(this.ARRAY_PROTO);
                for(u = 0; u < r.arguments_.length; u++)this.setProperty(p, u, r.arguments_[u]);
                this.setProperty(a, "arguments", p);
                var h = s.id && s.id.name;
                return h && this.setProperty(a, h, o), this.setProperty(a, "this", r.funcThis_, t.READONLY_DESCRIPTOR), r.value = void 0, new tn(s.body, a);
            }
            if (o.eval) {
                var d = r.arguments_[0];
                if ("string" == typeof d) {
                    try {
                        var f = Dt(d.toString(), t.PARSE_OPTIONS);
                    } catch (t) {
                        this.throwException(this.SYNTAX_ERROR, "Invalid code: " + t.message);
                    }
                    var y = new this.nodeConstructor;
                    return y.type = "EvalProgram_", y.body = f.body, this.stripLocations_(y, n.start, n.end), (a = r.scope).strict ? a = this.createScope(f, a) : this.populateScope_(f, a), this.value = void 0, new tn(y, a);
                }
                r.value = d;
            } else if (o.nativeFunc) void 0 !== r.funcThis_ && void 0 !== r.funcThis_._native ? r.value = o.nativeFunc.call(r.funcThis_, r.arguments_) : r.value = o.nativeFunc.apply(r.funcThis_, r.arguments_);
            else {
                if (o.asyncFunc) {
                    var g = this, v = r.arguments_.concat(function(t) {
                        r.value = t, g.paused_ = !1;
                    });
                    return this.paused_ = !0, void o.asyncFunc.apply(r.funcThis_, v);
                }
                this.throwException(this.TYPE_ERROR, o.class + " is not a function");
            }
        }
    }, t.prototype.stepCatchClause = function(t, e, r) {
        if (!e.done_) {
            e.done_ = !0;
            var n = this.createSpecialScope(e.scope);
            return this.setProperty(n, r.param.name, e.throwValue), new tn(r.body, n);
        }
        t.pop();
    }, t.prototype.stepConditionalExpression = function(t, e, r) {
        var n = e.mode_ || 0;
        if (0 === n) return e.mode_ = 1, new tn(r.test, e.scope);
        if (1 === n) {
            e.mode_ = 2;
            var i = Boolean(e.value);
            if (i && r.consequent) return new tn(r.consequent, e.scope);
            if (!i && r.alternate) return new tn(r.alternate, e.scope);
            this.value = void 0;
        }
        t.pop(), "ConditionalExpression" === r.type && (t[t.length - 1].value = e.value);
    }, t.prototype.stepContinueStatement = function(t, e, r) {
        t.pop();
        var n = null;
        for(r.label && (n = r.label.name), e = t[t.length - 1]; e && "CallExpression" !== e.node.type && "NewExpression" !== e.node.type;){
            if (e.isLoop && (!n || e.labels && -1 !== e.labels.indexOf(n))) return;
            t.pop(), e = t[t.length - 1];
        }
        throw SyntaxError("Illegal continue statement");
    }, t.prototype.stepDebuggerStatement = function(t, e, r) {
        t.pop();
    }, t.prototype.stepDoWhileStatement = function(t, e, r) {
        if ("DoWhileStatement" === r.type && void 0 === e.test_ && (e.value = !0, e.test_ = !0), !e.test_) return e.test_ = !0, new tn(r.test, e.scope);
        if (e.value) {
            if (r.body) return e.test_ = !1, e.isLoop = !0, new tn(r.body, e.scope);
        } else t.pop();
    }, t.prototype.stepEmptyStatement = function(t, e, r) {
        t.pop();
    }, t.prototype.stepEvalProgram_ = function(t, e, r) {
        var n = e.n_ || 0, i = r.body[n];
        if (i) return e.n_ = n + 1, new tn(i, e.scope);
        t.pop(), t[t.length - 1].value = this.value;
    }, t.prototype.stepExpressionStatement = function(t, e, r) {
        if (!e.done_) return e.done_ = !0, new tn(r.expression, e.scope);
        t.pop(), this.value = e.value;
    }, t.prototype.stepForInStatement = function(e, r, n) {
        if (!r.doneInit_ && (r.doneInit_ = !0, n.left.declarations && n.left.declarations[0].init)) return r.scope.strict && this.throwException(this.SYNTAX_ERROR, "for-in loop variable declaration may not have an initializer."), new tn(n.left, r.scope);
        if (!r.doneObject_) return r.doneObject_ = !0, r.variable_ || (r.variable_ = r.value), new tn(n.right, r.scope);
        if (r.isLoop || (r.isLoop = !0, r.object_ = r.value, r.visited_ = Object.create(null)), void 0 === r.name_) {
            t: do {
                if (r.object_ && r.object_.isObject) {
                    r.props_ || (r.props_ = Object.getOwnPropertyNames(r.object_.properties));
                    do var i = r.props_.shift();
                    while (i && (r.visited_[i] || !Object.prototype.hasOwnProperty.call(r.object_.properties, i)));
                    if (i && (r.visited_[i] = !0, Object.prototype.propertyIsEnumerable.call(r.object_.properties, i))) {
                        r.name_ = i;
                        break t;
                    }
                } else if (null !== r.object_) {
                    r.props_ || (r.props_ = Object.getOwnPropertyNames(r.object_));
                    do i = r.props_.shift();
                    while (i && r.visited_[i]);
                    if (i) {
                        r.visited_[i] = !0, r.name_ = i;
                        break t;
                    }
                }
                r.object_ = this.getPrototype(r.object_), r.props_ = null;
            }while (null !== r.object_);
            if (null === r.object_) return void e.pop();
        }
        if (!r.doneVariable_) {
            r.doneVariable_ = !0;
            var o = n.left;
            if ("VariableDeclaration" !== o.type) {
                r.variable_ = null;
                var s = new tn(o, r.scope);
                return s.components = !0, s;
            }
            r.variable_ = [
                t.SCOPE_REFERENCE,
                o.declarations[0].id.name
            ];
        }
        if (r.variable_ || (r.variable_ = r.value), !r.doneSetter_) {
            r.doneSetter_ = !0;
            var a = r.name_, u = this.setValue(r.variable_, a);
            if (u) return this.createSetter_(u, r.variable_, a);
        }
        return r.name_ = void 0, r.doneVariable_ = !1, r.doneSetter_ = !1, n.body ? new tn(n.body, r.scope) : void 0;
    }, t.prototype.stepForStatement = function(t, e, r) {
        var n = e.mode_ || 0;
        if (0 === n) {
            if (e.mode_ = 1, r.init) return new tn(r.init, e.scope);
        } else if (1 === n) {
            if (e.mode_ = 2, r.test) return new tn(r.test, e.scope);
        } else if (2 === n) {
            if (e.mode_ = 3, !r.test || e.value) return e.isLoop = !0, new tn(r.body, e.scope);
            t.pop();
        } else if (3 === n && (e.mode_ = 1, r.update)) return new tn(r.update, e.scope);
    }, t.prototype.stepFunctionDeclaration = function(t, e, r) {
        t.pop();
    }, t.prototype.stepFunctionExpression = function(t, e, r) {
        t.pop(), t[t.length - 1].value = this.createFunction(r, e.scope);
    }, t.prototype.stepIdentifier = function(e, r, n) {
        if (e.pop(), r.components) e[e.length - 1].value = [
            t.SCOPE_REFERENCE,
            n.name
        ];
        else {
            var i = this.getValueFromScope(n.name);
            if (i && "object" == typeof i && i.isGetter) {
                i.isGetter = !1;
                for(var o = r.scope; !this.hasProperty(o, n.name);)o = o.parentScope;
                var s = i;
                return this.createGetter_(s, this.global);
            }
            e[e.length - 1].value = i;
        }
    }, t.prototype.stepIfStatement = function(t, e, r) {
        return this.stepConditionalExpression(t, e, r);
    }, t.prototype.stepLabeledStatement = function(t, e, r) {
        t.pop();
        var n = e.labels || [];
        n.push(r.label.name);
        var i = new tn(r.body, e.scope);
        return i.labels = n, i;
    }, t.prototype.stepLiteral = function(t, e, r) {
        t.pop();
        var n = r.value;
        if (n instanceof RegExp) {
            var i = this.createObjectProto(this.REGEXP_PROTO);
            this.populateRegExp(i, n), n = i;
        }
        t[t.length - 1].value = n;
    }, t.prototype.stepLogicalExpression = function(t, e, r) {
        if ("&&" !== r.operator && "||" !== r.operator) throw SyntaxError("Unknown logical operator: " + r.operator);
        if (!e.doneLeft_) return e.doneLeft_ = !0, new tn(r.left, e.scope);
        if (e.doneRight_) t.pop(), t[t.length - 1].value = e.value;
        else {
            if (!("&&" === r.operator && !e.value || "||" === r.operator && e.value)) return e.doneRight_ = !0, new tn(r.right, e.scope);
            t.pop(), t[t.length - 1].value = e.value;
        }
    }, t.prototype.stepMemberExpression = function(t, e, r) {
        if (!e.doneObject_) return e.doneObject_ = !0, new tn(r.object, e.scope);
        var n;
        if (r.computed) {
            if (!e.doneProperty_) return e.object_ = e.value, e.doneProperty_ = !0, new tn(r.property, e.scope);
            n = e.value;
        } else e.object_ = e.value, n = r.property.name;
        if (t.pop(), e.components) t[t.length - 1].value = [
            e.object_,
            n
        ];
        else {
            var i = this.getProperty(e.object_, n);
            if (i && "object" == typeof i && i.isGetter) {
                i.isGetter = !1;
                var o = i;
                return this.createGetter_(o, e.object_);
            }
            t[t.length - 1].value = i;
        }
    }, t.prototype.stepNewExpression = function(t, e, r) {
        return this.stepCallExpression(t, e, r);
    }, t.prototype.stepObjectExpression = function(t, e, r) {
        var n = e.n_ || 0, i = r.properties[n];
        if (e.object_) {
            var o = i.key;
            if ("Identifier" === o.type) var s = o.name;
            else {
                if ("Literal" !== o.type) throw SyntaxError("Unknown object structure: " + o.type);
                s = o.value;
            }
            e.properties_[s] || (e.properties_[s] = {}), e.properties_[s][i.kind] = e.value, e.n_ = ++n, i = r.properties[n];
        } else e.object_ = this.createObjectProto(this.OBJECT_PROTO), e.properties_ = Object.create(null);
        if (i) return new tn(i.value, e.scope);
        for(var a in e.properties_){
            var u = e.properties_[a];
            if ("get" in u || "set" in u) {
                var c = {
                    configurable: !0,
                    enumerable: !0,
                    get: u.get,
                    set: u.set
                };
                this.setProperty(e.object_, a, null, c);
            } else this.setProperty(e.object_, a, u.init);
        }
        t.pop(), t[t.length - 1].value = e.object_;
    }, t.prototype.stepProgram = function(t, e, r) {
        var n = e.n_ || 0, i = r.body[n];
        if (i) return e.done = !1, e.n_ = n + 1, new tn(i, e.scope);
        e.done = !0;
    }, t.prototype.stepReturnStatement = function(t, e, r) {
        if (r.argument && !e.done_) return e.done_ = !0, new tn(r.argument, e.scope);
        var n = e.value, i = t.length - 1;
        for(e = t[i]; "CallExpression" !== e.node.type && "NewExpression" !== e.node.type;){
            if ("TryStatement" !== e.node.type && t.splice(i, 1), --i < 0) throw SyntaxError("Illegal return statement");
            e = t[i];
        }
        e.value = n;
    }, t.prototype.stepSequenceExpression = function(t, e, r) {
        var n = e.n_ || 0, i = r.expressions[n];
        if (i) return e.n_ = n + 1, new tn(i, e.scope);
        t.pop(), t[t.length - 1].value = e.value;
    }, t.prototype.stepSwitchStatement = function(t, e, r) {
        if (!e.test_) return e.test_ = 1, new tn(r.discriminant, e.scope);
        for(1 === e.test_ && (e.test_ = 2, e.switchValue_ = e.value);;){
            var n = e.index_ || 0, i = r.cases[n];
            if (e.matched_ || !i || i.test) {
                if (i || e.matched_ || !e.defaultCase_) {
                    if (!i) return void t.pop();
                    if (!e.matched_ && !e.tested_ && i.test) return e.tested_ = !0, new tn(i.test, e.scope);
                    if (e.matched_ || e.value === e.switchValue_) {
                        e.matched_ = !0;
                        var o = e.n_ || 0;
                        if (i.consequent[o]) return e.isSwitch = !0, e.n_ = o + 1, new tn(i.consequent[o], e.scope);
                    }
                    e.tested_ = !1, e.n_ = 0, e.index_ = n + 1;
                } else e.matched_ = !0, e.index_ = e.defaultCase_;
            } else e.defaultCase_ = n, e.index_ = n + 1;
        }
    }, t.prototype.stepThisExpression = function(t, e, r) {
        t.pop(), t[t.length - 1].value = this.getValueFromScope("this");
    }, t.prototype.stepThrowStatement = function(t, e, r) {
        if (!e.done_) return e.done_ = !0, new tn(r.argument, e.scope);
        this.throwException(e.value);
    }, t.prototype.stepTryStatement = function(t, e, r) {
        if (!e.doneBlock_) return e.doneBlock_ = !0, new tn(r.block, e.scope);
        if (e.throwValue && !e.doneHandler_ && r.handler) {
            e.doneHandler_ = !0;
            var n = new tn(r.handler, e.scope);
            return n.throwValue = e.throwValue, e.throwValue = null, n;
        }
        if (!e.doneFinalizer_ && r.finalizer) return e.doneFinalizer_ = !0, new tn(r.finalizer, e.scope);
        e.throwValue ? this.executeException(e.throwValue) : t.pop();
    }, t.prototype.stepUnaryExpression = function(e, r, n) {
        if (!r.done_) {
            r.done_ = !0;
            var i = new tn(n.argument, r.scope);
            return i.components = "delete" === n.operator, i;
        }
        e.pop();
        var o = r.value;
        if ("-" === n.operator) o = -o;
        else if ("+" === n.operator) o = +o;
        else if ("!" === n.operator) o = !o;
        else if ("~" === n.operator) o = ~o;
        else if ("delete" === n.operator) {
            var s = !0;
            if (Array.isArray(o)) {
                var a = o[0];
                a === t.SCOPE_REFERENCE && (a = r.scope);
                var u = String(o[1]);
                try {
                    delete a.properties[u];
                } catch (t) {
                    r.scope.strict ? this.throwException(this.TYPE_ERROR, "Cannot delete property '" + u + "' of '" + a + "'") : s = !1;
                }
            }
            o = s;
        } else if ("typeof" === n.operator) o = o && "Function" === o.class ? "function" : typeof o;
        else {
            if ("void" !== n.operator) throw SyntaxError("Unknown unary operator: " + n.operator);
            o = void 0;
        }
        e[e.length - 1].value = o;
    }, t.prototype.stepUpdateExpression = function(t, e, r) {
        if (!e.doneLeft_) {
            e.doneLeft_ = !0;
            var n = new tn(r.argument, e.scope);
            return n.components = !0, n;
        }
        if (e.leftSide_ || (e.leftSide_ = e.value), e.doneGetter_ && (e.leftValue_ = e.value), !e.doneGetter_) {
            var i = this.getValue(e.leftSide_);
            if (e.leftValue_ = i, i && "object" == typeof i && i.isGetter) {
                i.isGetter = !1, e.doneGetter_ = !0;
                var o = i;
                return this.createGetter_(o, e.leftSide_);
            }
        }
        if (e.doneSetter_) return t.pop(), void (t[t.length - 1].value = e.doneSetter_);
        var s;
        if (i = Number(e.leftValue_), "++" === r.operator) s = i + 1;
        else {
            if ("--" !== r.operator) throw SyntaxError("Unknown update expression: " + r.operator);
            s = i - 1;
        }
        var a = r.prefix ? s : i, u = this.setValue(e.leftSide_, s);
        if (u) return e.doneSetter_ = a, this.createSetter_(u, e.leftSide_, s);
        t.pop(), t[t.length - 1].value = a;
    }, t.prototype.stepVariableDeclaration = function(t, e, r) {
        var n = r.declarations, i = e.n_ || 0, o = n[i];
        for(e.init_ && o && (this.setValueToScope(o.id.name, e.value), e.init_ = !1, o = n[++i]); o;){
            if (o.init) return e.n_ = i, e.init_ = !0, new tn(o.init, e.scope);
            o = n[++i];
        }
        t.pop();
    }, t.prototype.stepWithStatement = function(t, e, r) {
        if (!e.doneObject_) return e.doneObject_ = !0, new tn(r.object, e.scope);
        if (!e.doneBody_) {
            e.doneBody_ = !0;
            var n = this.createSpecialScope(e.scope, e.value);
            return new tn(r.body, n);
        }
        t.pop();
    }, t.prototype.stepWhileStatement = function(t, e, r) {
        return this.stepDoWhileStatement(t, e, r);
    }, t.PARSE_OPTIONS = {
        ecmaVersion: 5
    }, t.READONLY_DESCRIPTOR = {
        configurable: !0,
        enumerable: !0,
        writable: !1
    }, t.NONENUMERABLE_DESCRIPTOR = {
        configurable: !0,
        enumerable: !1,
        writable: !0
    }, t.READONLY_NONENUMERABLE_DESCRIPTOR = {
        configurable: !0,
        enumerable: !1,
        writable: !1
    }, t.VARIABLE_DESCRIPTOR = {
        configurable: !1,
        enumerable: !0,
        writable: !0
    }, t.STEP_ERROR = {}, t.SCOPE_REFERENCE = {}, t.toStringCycles_ = [], t;
}(), Qr = function() {
    function t(t) {
        this.proto = null, this.isObject = !0, this.class = "Object", this.data = null, this._native = void 0, this.getter = Object.create(null), this.setter = Object.create(null), this.properties = Object.create(null), this.proto = t;
    }
    return t.prototype.toString = function() {
        if ("Array" === this.class) {
            (n = Kr.toStringCycles_).push(this);
            try {
                for(var t = [], e = 0; e < this.properties.length; e++){
                    var r = this.properties[e];
                    t[e] = r && r.isObject && -1 !== n.indexOf(r) ? "..." : r;
                }
            } finally{
                n.pop();
            }
            return t.join(",");
        }
        if ("Error" === this.class) {
            var n;
            if (-1 !== (n = Kr.toStringCycles_).indexOf(this)) return "[object Error]";
            var i, o = void 0, s = this;
            do if ("name" in s.properties) {
                i = s.properties.name;
                break;
            }
            while (s = s.proto);
            s = this;
            do if ("message" in s.properties) {
                o = s.properties.message;
                break;
            }
            while (s = s.proto);
            n.push(this);
            try {
                i = i && i.toString(), o = o && o.toString();
            } finally{
                n.pop();
            }
            return o ? i + ": " + o : String(i);
        }
        return null !== this.data ? String(this.data) : "[object " + this.class + "]";
    }, t.prototype.valueOf = function() {
        return void 0 === this.data || null === this.data || this.data instanceof RegExp ? this : this.data instanceof Date ? this.data.valueOf() : this.data;
    }, t;
}(), tn = function(t, e) {
    this.node = t, this.scope = e;
}, en = function(t, e) {
    for(var r = t; r && r.prototype;){
        if (Object.getOwnPropertyNames(r.prototype).indexOf(e) >= 0) return !0;
        r = Object.getPrototypeOf(r);
    }
    return !1;
};
function rn(t, e) {
    var r = {}, n = Dt(t, {
        locations: !0,
        onComment: function(t, e, n, i, o, s) {
            r[s.line] = e;
        }
    });
    if ("Program" !== n.type || 1 !== n.body.length || "FunctionDeclaration" !== n.body[0].type) throw new Error("JavaScript program should only have one function definition");
    var i = n.body[0].body.body, o = [], s = [];
    return i.forEach(function(t) {
        if ("ExpressionStatement" === t.type) {
            var n = t.expression;
            if ("AssignmentExpression" === n.type && "=" === n.operator && "MemberExpression" === n.left.type && "ThisExpression" === n.left.object.type && "Identifier" === n.left.property.type) {
                for(var i = [], a = n.loc.start.line - 1; a >= 0 && void 0 !== r[a]; a--)i.push(r[a]);
                if (!(i.length <= 0)) {
                    var u = n.left.property.name;
                    if (!(Array.isArray(e) && e.indexOf(u) >= 0) && "FunctionExpression" !== n.right.type) {
                        var c = function(t, e, r) {
                            var n = {
                                name: t,
                                title: {},
                                className: null,
                                proposed: !1,
                                initialValue: null
                            };
                            if (e.forEach(function(t) {
                                var e = t.indexOf("@ui ");
                                if (e >= 0) n.description = t.substring(e + 4).trim();
                                else {
                                    var r = t.indexOf("@title ");
                                    if (r >= 0) {
                                        var i = t.substring(r + 7).trim();
                                        0 === i.indexOf("@ja ") ? n.title.ja = i.substring(4).trim() : n.title.default = i;
                                    } else if (t.indexOf("@proposed") >= 0) n.proposed = !0;
                                    else {
                                        var o = t.indexOf("@comment ");
                                        if (o >= 0) {
                                            var s = t.substring(o + 9).trim();
                                            return n.comment || (n.comment = {}), void (0 === s.indexOf("@ja ") ? n.comment.ja = s.substring(4).trim() : n.comment.default = s);
                                        }
                                    }
                                }
                            }), !n.description && !n.comment) return null;
                            if (n.proposed || n.comment) return n;
                            var i = n.description.indexOf("("), o = n.description.indexOf(")", i);
                            if (!(i < 0 || o < 0)) {
                                n.className = n.description.substr(0, i);
                                try {
                                    var s = new Kr("[".concat(n.description.substr(i + 1, o - i - 1), "]")), a = Date.now();
                                    for(s.unwrap = null, s.wrap = null; s.step() && !(Date.now() - a > 100););
                                    n.params = s.pseudoToNative(s.value);
                                } catch (t) {}
                                return n.params || (n.params = []), n;
                            }
                        }(u, i);
                        s.push(n), c && o.push(c);
                    }
                }
            }
        }
    }), {
        widgets: o,
        fields: s,
        ast: n
    };
}
function nn(t, e) {
    if (void 0 === e && (e = -1), !t) return {
        dependencyAtCursor: null,
        dependencies: []
    };
    for(var r = [], n = null, i = ("string" == typeof t ? Dt(t, Kr.PARSE_OPTIONS) : t).body[0].body.body.slice(0); i.length > 0;){
        var o = i.shift();
        if (null != o) {
            if ("CallExpression" !== o.type) o.expression && i.push(o.expression), o.object && i.push(o.object), o.property && i.push(o.property), o.name && "string" != typeof name && i.push(o.name), o.left && i.push(o.left), o.right && i.push(o.right), o.id && i.push(o.id), o.init && i.push(o.init), o.callee && i.push(o.callee), o.body && Array.isArray(o.body) && i.push.apply(i, o.body), o.declarations && Array.isArray(o.declarations) && i.push.apply(i, o.declarations), o.arguments && Array.isArray(o.arguments) && i.push.apply(i, o.arguments), o.params && Array.isArray(o.params) && i.push.apply(i, o.params);
            else if (o.callee.name && "require" === o.callee.name) {
                var s = o.arguments;
                if (s && Array.isArray(s) && 1 === s.length) {
                    var a = s[0];
                    if ("Literal" === a.type) {
                        var u = a.value;
                        r.push(u), o.start && o.end && o.start <= e && o.end >= e && (n = u);
                    }
                }
            }
        }
    }
    return {
        dependencyAtCursor: n,
        dependencies: r
    };
}
Kr.Object = Qr, Kr.State = tn;
var on = function() {
    return on = Object.assign || function(t) {
        for(var e, r = 1, n = arguments.length; r < n; r++)for(var i in e = arguments[r])Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t;
    }, on.apply(this, arguments);
};
function sn(t, e, r) {
    for(var n, i = 0, o = e.length; i < o; i++)!n && i in e || (n || (n = Array.prototype.slice.call(e, 0, i)), n[i] = e[i]);
    return t.concat(n || Array.prototype.slice.call(e));
}
function an(t) {
    return "boolean" == typeof t || "number" == typeof t || "string" == typeof t || null == t;
}
"function" == typeof SuppressedError && SuppressedError;
var un = {
    type: "ExpressionStatement",
    start: null,
    end: null,
    expression: {
        type: "CallExpression",
        start: null,
        end: null,
        expression: null,
        arguments: null
    },
    arguments: null
}, cn = function() {
    function t(t, e, r) {
        void 0 === r && (r = null), this.wrapperTable = t, this.ignoredPropNames = e, this.wrapMethodParameter = r, this.verbose = !1, this.initialize();
    }
    return t.prototype.initialize = function() {
        var t = this, e = new Kr("", function(e, r) {
            t.globalScope = r;
        });
        this.interpreter = e, this.interpreter.wrap = function(e) {
            return t.wrap(e);
        }, this.interpreter.unwrap = function(e, r) {
            return t.unwrap(e, r);
        }, this.wrappers = {}, Object.keys(this.wrapperTable).forEach(function(e) {
            return t.wrapClass(t.wrapperTable[e], e);
        });
    }, t.prototype.createGlobalFunction = function(t, e) {
        var r, n = this, i = e.func, o = e.raw, s = e.isConstructor, a = e.async, u = function() {
            for(var t = [], e = 0; e < arguments.length; e++)t[e] = arguments[e];
            var r = i(o ? t : t.map(function(e, r) {
                return r < t.length - 1 || !a ? n.unwrap(e) : e;
            }));
            return o ? r : n.wrap(r);
        };
        r = a ? this.interpreter.createAsyncFunction(u) : this.interpreter.createNativeFunction(u, s), this.interpreter.setProperty(this.globalScope, t, r);
    }, t.prototype.createFunction = function(t, e) {
        return void 0 === e && (e = !1), this.interpreter.createNativeFunction(t, e);
    }, t.prototype.setProperty = function(t, e, r) {
        this.interpreter.setProperty(t, e, this.wrap(r));
    }, t.prototype.setRawProperty = function(t, e, r) {
        this.interpreter.setProperty(t, e, r);
    }, t.prototype.getProperty = function(t, e) {
        return this.unwrap(this.interpreter.getProperty(t, e));
    }, t.prototype.getRawProperty = function(t, e) {
        return this.interpreter.getProperty(t, e);
    }, t.prototype.prepareRun = function(t) {
        var e;
        e = "string" == typeof t ? Dt(t, Kr.PARSE_OPTIONS) : t;
        var r = this.interpreter.createScope(e, this.globalScope);
        return this.interpreter.stateStack = [
            {
                node: e,
                scope: r,
                done: !1
            }
        ], r;
    }, t.prototype.newStatementFor = function(t) {
        return Dt("new " + t + "();", Kr.PARSE_OPTIONS);
    }, t.prototype.prepareNewInstance = function(t, e) {
        var r = this.interpreter.createScope(Dt("", Kr.PARSE_OPTIONS), e);
        return this.interpreter.stateStack = [
            {
                node: t,
                scope: r,
                thisExpression: r
            }
        ], r;
    }, t.prototype.exec = function(t, e, r, n) {
        var i = this, o = this.interpreter;
        un.expression.arguments = [];
        var s = [];
        return r.forEach(function(t) {
            un.expression.arguments.push(null), s.push(i.wrap(t));
        }), o.stateStack = [
            {
                node: {
                    type: "Program",
                    body: [
                        un
                    ]
                },
                scope: this.globalScope,
                done: !0,
                n_: 1
            },
            {
                node: un,
                scope: this.globalScope,
                done_: !0
            },
            {
                node: un.expression,
                doneCallee_: 2,
                doneArgs_: !0,
                arguments_: s,
                funcThis_: t,
                func_: o.getProperty(t, e),
                scope: t,
                n_: s.length,
                value: [
                    t,
                    e
                ]
            }
        ], this.run(700, "call a method (" + t.className + "." + e + (n || "") + ")");
    }, t.prototype.run = function(t, e) {
        var r = this.interpreter, n = Date.now(), i = !1;
        try {
            for(; r.step();)if (Date.now() - n > t) {
                i = !0;
                break;
            }
        } catch (o) {
            throw this.verbose && console.log(r.stateStack), "string" == typeof o && (o = new Error(o)), r.stateStack.length > 0 && (o.node = r.stateStack[r.stateStack.length - 1].node), o;
        }
        if (i) {
            var o = new Error("timeout: spent too long time (> " + t + "ms) to " + e);
            throw r.stateStack.length > 0 && (o.node = r.stateStack[0].node), o;
        }
        return this.interpreter.value;
    }, t.prototype.cleanupProperties = function(t) {
        if (!t) return null;
        for(var e in this.ignoredPropNames.forEach(function(e) {
            void 0 !== t.properties[e] && delete t.properties[e];
        }), t.properties)this.cleanupProperty(t.properties[e]) || delete t.properties[e];
        return t.properties;
    }, t.prototype.cleanupProperty = function(t) {
        if (an(t)) return !0;
        var e = t;
        if (e._native) return !0;
        var r = this.globalScope.properties;
        if (e.parent === r.Array) {
            for(var n = e.length, i = 0; i < e.length; i++)this.cleanupProperty(e.properties[i]) || (delete e.properties[i], n--);
            return e.length = n, n > 0;
        }
        if (e.parent === r.Object) {
            var o = !0;
            for(var s in e.properties)this.cleanupProperty(e.properties[s]) ? o = !1 : delete e.properties[s];
            return !o;
        }
        return !1;
    }, t.prototype.restoreProperties = function(t, e) {
        e && (t.properties = on(on({}, t.properties), e));
    }, t.prototype.wrap = function(t) {
        if ("object" == typeof t && null !== t && void 0 !== t.constructor && "string" == typeof t.constructor.className) {
            var e = t.constructor.className, r = this.wrappers[e];
            if (void 0 === r) return;
            var n = this.interpreter.createObject(r);
            return n._native = t, n;
        }
        return this.verbose && (an(t) || Array.isArray(t) || console.log("wrap complex obj:", String(t))), this.interpreter.nativeToPseudo(t);
    }, t.prototype.unwrap = function(t, e) {
        return "object" == typeof t && null !== t && t._native ? t._native : this.interpreter.pseudoToNative(t, e);
    }, t.prototype.wrapClass = function(t, e) {
        this.verbose && console.log("--- wrapping " + e + " ---"), t.className = e;
        var r = this, n = this.interpreter.createNativeFunction(function(e) {
            var i, o;
            if (i = r.interpreter.calledWithNew() ? this : r.interpreter.createObjectProto(n.properties.prototype), void 0 !== e) {
                if (Array.isArray(e)) for(var s = 0; s < e.length; s++)o[s] = r.unwrap(e[s]);
                else o = r.unwrap(e);
            }
            if (t) {
                var a = Object.create(t.prototype), u = t.apply(a, [
                    null
                ].concat(o).splice(1));
                i._native = null !== u && "object" == typeof u ? u : a;
            }
            return i;
        });
        return this.interpreter.setProperty(this.globalScope, e, n), this.wrapStaticMembers(n, t), this.wrapInstanceMembers(n, t), this.wrappers[e] = n, n;
    }, t.prototype.wrapStaticMembers = function(t, e) {
        var r = this, n = function(n) {
            var o = n;
            if (i.interpreter.setProperty(t, n, ReferenceError, {
                get: function() {
                    return r.wrap(e[o]);
                },
                set: function(t) {
                    return e[o] = r.unwrap(t);
                }
            }), i.verbose) {
                var s = void 0;
                try {
                    s = typeof e[o];
                } catch (t) {
                    s = "not accessible";
                }
                console.log("static " + o + " (" + s + ")");
            }
        }, i = this;
        for(var o in e)n(o);
    }, t.prototype.wrapInstanceMembers = function(t, e) {
        for(var r, n = new e, i = 0, o = sn(sn([], Object.keys(n)), function(t) {
            for(var e = t, r = []; e && e.prototype;)r = sn(sn([], r), Object.getOwnPropertyNames(e.prototype)), e = Object.getPrototypeOf(e);
            return r;
        }(e)).filter(function(t, e, r) {
            return r.indexOf(t) === e;
        }); i < o.length; i++){
            var s = o[i];
            if ("constructor" !== s && !this.interpreter.hasProperty(t, s) && !this.interpreter.hasProperty(t.properties.prototype, s) && "_" !== s.charAt(0)) {
                if (this.verbose) {
                    var a = void 0;
                    try {
                        a = typeof n[s];
                    } catch (t) {
                        a = "not accessible";
                    }
                    r = s + " (" + a + ")";
                }
                try {
                    if ("function" == typeof n[s]) {
                        var u = function(e, r) {
                            return function(n) {
                                var i;
                                return r.wrap((i = this._native)[e].apply(i, n.map(function(e) {
                                    var n = r.unwrap(e);
                                    return r.wrapMethodParameter ? r.wrapMethodParameter(t, n) : n;
                                })));
                            };
                        }(s, this);
                        this.interpreter.setProperty(t.properties.prototype, s, this.interpreter.createNativeFunction(u)), this.verbose && (r += " native method");
                    }
                } catch (t) {}
                this.verbose && console.log(r);
            }
        }
    }, t;
}();
function ln(t) {
    var e = parseFloat(t);
    return isNaN(e) ? 0 : e;
}
function pn(t) {
    var e;
    if ("undefined" == typeof window || !(null === (e = null === window || void 0 === window ? void 0 : window.location) || void 0 === e ? void 0 : e.search)) return null;
    for(var r = 0, n = window.location.search.substring(1).split("&"); r < n.length; r++){
        var i = n[r].split("=");
        if (decodeURIComponent(i[0]) === t) return decodeURIComponent(i[1]);
    }
    return null;
}
var hn = function(t, e) {
    return hn = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(t, e) {
        t.__proto__ = e;
    } || function(t, e) {
        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    }, hn(t, e);
};
function dn(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    function r() {
        this.constructor = t;
    }
    hn(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
}
var fn = function() {
    return fn = Object.assign || function(t) {
        for(var e, r = 1, n = arguments.length; r < n; r++)for(var i in e = arguments[r])Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t;
    }, fn.apply(this, arguments);
};
function yn(t, e, r, n) {
    return new (r || (r = Promise))(function(e, i) {
        function o(t) {
            try {
                a(n.next(t));
            } catch (t) {
                i(t);
            }
        }
        function s(t) {
            try {
                a(n.throw(t));
            } catch (t) {
                i(t);
            }
        }
        function a(t) {
            var n;
            t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(function(t) {
                t(n);
            })).then(o, s);
        }
        a((n = n.apply(t, [])).next());
    });
}
function gn(t, e) {
    var r, n, i, o, s = {
        label: 0,
        sent: function() {
            if (1 & i[0]) throw i[1];
            return i[1];
        },
        trys: [],
        ops: []
    };
    return o = {
        next: a(0),
        throw: a(1),
        return: a(2)
    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this;
    }), o;
    function a(a) {
        return function(u) {
            return function(a) {
                if (r) throw new TypeError("Generator is already executing.");
                for(; o && (o = 0, a[0] && (s = 0)), s;)try {
                    if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                    switch(n = 0, i && (a = [
                        2 & a[0],
                        i.value
                    ]), a[0]){
                        case 0:
                        case 1:
                            i = a;
                            break;
                        case 4:
                            return s.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            s.label++, n = a[1], a = [
                                0
                            ];
                            continue;
                        case 7:
                            a = s.ops.pop(), s.trys.pop();
                            continue;
                        default:
                            if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                s = 0;
                                continue;
                            }
                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                s.label = a[1];
                                break;
                            }
                            if (6 === a[0] && s.label < i[1]) {
                                s.label = i[1], i = a;
                                break;
                            }
                            if (i && s.label < i[2]) {
                                s.label = i[2], s.ops.push(a);
                                break;
                            }
                            i[2] && s.ops.pop(), s.trys.pop();
                            continue;
                    }
                    a = e.call(t, s);
                } catch (t) {
                    a = [
                        6,
                        t
                    ], n = 0;
                } finally{
                    r = i = 0;
                }
                if (5 & a[0]) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                };
            }([
                a,
                u
            ]);
        };
    }
}
function vn(t, e, r) {
    if (2 === arguments.length) for(var n, i = 0, o = e.length; i < o; i++)!n && i in e || (n || (n = Array.prototype.slice.call(e, 0, i)), n[i] = e[i]);
    return t.concat(n || Array.prototype.slice.call(e));
}
"function" == typeof SuppressedError && SuppressedError;
var mn, bn, _n = [
    0,
    0,
    0,
    0
], wn = function() {
    function t() {
        this._position = 0, this._wait = 50, this.update = this.update.bind(this);
    }
    return Object.defineProperty(t.prototype, "wait", {
        get: function() {
            return this._wait;
        },
        set: function(t) {
            this._wait = t, this._isPlaying && this.start();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "isPlaying", {
        get: function() {
            return this._isPlaying;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "position", {
        get: function() {
            if (!this.isPlaying) return this._position;
            var t = this.basePosition.position + (Date.now() - this.basePosition.time);
            return Math.min(t, this.player.video.duration);
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.initialize = function(t) {
        var e = t.player, r = t.updater, n = t.emitter;
        return yn(this, 0, void 0, function() {
            return gn(this, function(t) {
                return this.player = e, this.updateMediaPosition = r, this.emitter = n, [
                    2
                ];
            });
        });
    }, t.prototype.play = function() {
        this.start(), this.emitter.onPlay();
    }, t.prototype.stop = function() {
        this.clearInterval(), this._isPlaying = !1, this.seek(0), this.pause(), this.emitter.onStop();
    }, t.prototype.pause = function() {
        this.clearInterval(), this._isPlaying = !1, this.emitter.onPause();
    }, t.prototype.seek = function(t) {
        var e = this;
        this._position = t, this.updateMediaPosition(t).then(function() {
            e.emitter.onSeek(t), e.emitter.onSeekComplete(t);
        }), this.isPlaying && this.start();
    }, t.prototype.dispose = function() {
        this.clearInterval();
    }, t.prototype.clearInterval = function() {
        window.clearInterval(this.intervalId);
    }, t.prototype.start = function() {
        this.clearInterval(), this._isPlaying = !0, this.basePosition = {
            time: Date.now(),
            position: this._position
        }, this.intervalId = window.setInterval(this.update, this.wait);
    }, t.prototype.update = function() {
        this.player.video || this.stop();
        var t = this.basePosition.position + (Date.now() - this.basePosition.time);
        this._position = Math.min(t, this.player.video.duration), this.updateMediaPosition(this.position), this._position >= this.player.video.duration && this.stop();
    }, t;
}();
function Pn() {
    return yn(this, 0, void 0, function() {
        return gn(this, function(t) {
            return bn && bn.Player ? [
                2,
                bn
            ] : "undefined" == typeof window ? [
                2,
                require("9b2ba0ceede257b")
            ] : window.Songle && window.Songle.Player ? [
                2,
                window.Songle
            ] : (mn || (mn = new Promise(function(t) {
                var e = !1;
                window.onSongleAPIReady = function(r) {
                    e = !0, t(bn = r);
                }, setTimeout(function() {
                    if (!e) {
                        var t = [];
                        document.querySelectorAll("script").forEach(function(e) {
                            var r = e.getAttribute("src");
                            r && r.indexOf("songle.jp/v2/api.js") >= 0 && t.push(e);
                        }), t.forEach(function(t) {
                            return t.parentElement.removeChild(t);
                        });
                        var r = document.createElement("script");
                        r.src = "https://api.songle.jp/v2/api.js", document.head.appendChild(r);
                    }
                }, 1e3);
            })), [
                2,
                mn
            ]);
        });
    });
}
var En = function() {
    function t(t) {
        void 0 === t && (t = {}), this.options = t, this.wait = 50, this.volumeListener = {
            onVolumeUpdate: this.onVolumeUpdate.bind(this)
        }, this.resetProps();
    }
    return Object.defineProperty(t.prototype, "songlePlayer", {
        get: function() {
            return this._songlePlayer;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "isPlaying", {
        get: function() {
            return !!this._songlePlayer && this._songlePlayer.isPlaying;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "withSync", {
        get: function() {
            var t, e;
            return !(!(null === (t = this.options) || void 0 === t ? void 0 : t.accessToken) && !(null === (e = this.options) || void 0 === e ? void 0 : e.secretToken));
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "position", {
        get: function() {
            var t;
            if (!this._songlePlayer) return 0;
            if (this.lastPosition > 0 && this.lastTime > 0) return Date.now() + this.lastPosition - this.lastTime;
            var e = this._songlePlayer.positionTime;
            if ("songle-api-html-media-element-media" === (null === (t = this._songlePlayer.media) || void 0 === t ? void 0 : t.dispatcherName)) {
                var r = this.lastTime, n = this.lastPosition, i = void 0;
                if (r > 0) {
                    var o = Date.now() - r;
                    i = Math.max(0, this.wait - o);
                } else i = this.wait;
                0 === n && e >= 500 ? e = 0 : 0 === r && e - n >= 800 && (e = n + i);
            }
            return e;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.initialize = function(t) {
        var e, r, n, i, o = t.player, s = t.updater, a = t.emitter, u = t.altSourceUrl;
        return yn(this, 0, void 0, function() {
            var t, l, p;
            return gn(this, function(h) {
                switch(h.label){
                    case 0:
                        return this.player && this.player.removeListener(this.volumeListener), this.player = o, this.player.addListener(this.volumeListener), this.updateMediaPosition = s, this.emitter = a, this._songlePlayer ? [
                            3,
                            2
                        ] : [
                            4,
                            this.initializeSonglePlayer()
                        ];
                    case 1:
                        h.sent(), h.label = 2;
                    case 2:
                        return t = this.options.headless, l = u || this.options.altSourceUrls && (null === (e = this.player.data.song) || void 0 === e ? void 0 : e.permalink) && this.options.altSourceUrls[null === (r = this.player.data.song) || void 0 === r ? void 0 : r.permalink] || (null === (n = this.player.data.song) || void 0 === n ? void 0 : n.permalink) || void 0, c.isUploaderUrl(l) && (l = c.getAltSongUrlFromUploaderGuid(c.getUploaderGuid(c.getSongPathFromUrl(l)))), (p = (null === (i = this.player.data.song) || void 0 === i ? void 0 : i.permalink) || l) === l && (l = void 0), [
                            4,
                            this._songlePlayer.useMedia(p, {
                                headless: t,
                                altSourceUrl: l
                            })
                        ];
                    case 3:
                        return h.sent(), this.ignoreSonglePlayerEvents = !0, this._songlePlayer.volume = 0 * (1 - this.player.volume / 100) + 100 * this.player.volume / 100, this._songlePlayer.play(), this._songlePlayer.stop(), this.ignoreSonglePlayerEvents = !1, this.resetProps(), [
                            2
                        ];
                }
            });
        });
    }, t.prototype.resetProps = function() {
        this.lastPosition = 0, this.lastTime = 0, this.elapsedTimes = [];
    }, t.prototype.initializeSonglePlayer = function() {
        var t;
        return yn(this, 0, void 0, function() {
            var e, r, n, i, o, s, a, u = this;
            return gn(this, function(c) {
                switch(c.label){
                    case 0:
                        return e = this.options, r = e.accessToken, n = e.secretToken, (o = this.options.songle) ? [
                            3,
                            2
                        ] : [
                            4,
                            Pn()
                        ];
                    case 1:
                        o = c.sent(), c.label = 2;
                    case 2:
                        return (i = o).System && (i.System.showLicense = !1), s = null === (t = this.options) || void 0 === t ? void 0 : t.autoUseMedia, this._songlePlayer = this.withSync ? new i.SyncPlayer({
                            mediaElement: this.player.mediaSourceElement,
                            accessToken: r,
                            secretToken: n,
                            autoUseMedia: s
                        }) : new i.Player({
                            mediaElement: this.player.mediaSourceElement
                        }), a = !1, this._songlePlayer.on("play", function() {
                            u.ignoreSonglePlayerEvents || (a = !1, u.handler || (u.startPolling(), u.emitter.onPlay()));
                        }), this._songlePlayer.on("pause", function() {
                            return yn(u, 0, void 0, function() {
                                return gn(this, function(t) {
                                    switch(t.label){
                                        case 0:
                                            return this.ignoreSonglePlayerEvents ? [
                                                2
                                            ] : (a = !1, this.stopPolling(), this.emitter.onPause(), this.stopping ? (this.stopping = !1, [
                                                4,
                                                this.updateMediaPosition(0)
                                            ]) : [
                                                3,
                                                2
                                            ]);
                                        case 1:
                                            t.sent(), this.resetProps(), this.emitter.onStop(), t.label = 2;
                                        case 2:
                                            return [
                                                2
                                            ];
                                    }
                                });
                            });
                        }), this._songlePlayer.on("finish", function() {
                            return yn(u, 0, void 0, function() {
                                return gn(this, function(t) {
                                    switch(t.label){
                                        case 0:
                                            return a = !1, this.handler ? (this.stopPolling(), [
                                                4,
                                                this.updateMediaPosition(0)
                                            ]) : [
                                                3,
                                                2
                                            ];
                                        case 1:
                                            t.sent(), this.emitter.onStop(), t.label = 2;
                                        case 2:
                                            return [
                                                2
                                            ];
                                    }
                                });
                            });
                        }), this._songlePlayer.on("seek", function(t) {
                            var e = t.data;
                            return yn(u, 0, void 0, function() {
                                return gn(this, function(t) {
                                    switch(t.label){
                                        case 0:
                                            return this._songlePlayer.isPlaying ? [
                                                3,
                                                2
                                            ] : (a = !1, [
                                                4,
                                                this.updateMediaPosition(e.positionTime)
                                            ]);
                                        case 1:
                                            return t.sent(), this.emitter.onSeekComplete(e.positionTime), [
                                                3,
                                                4
                                            ];
                                        case 2:
                                            return a = !0, [
                                                4,
                                                this.updateMediaPosition(this._songlePlayer.positionTime)
                                            ];
                                        case 3:
                                            t.sent(), t.label = 4;
                                        case 4:
                                            return [
                                                2
                                            ];
                                    }
                                });
                            });
                        }), this._songlePlayer.on("mediaSeek", function() {
                            a && (u.emitter.onSeekComplete(u.position), a = !1);
                        }), this.withSync && (this._songlePlayer.on("mediaPlay", function() {
                            u.handler || (u.startPolling(), u.emitter.onPlay());
                        }), this._songlePlayer.on("mediaFinish", function() {
                            u.handler && (u.stopPolling(), u.emitter.onStop());
                        })), [
                            2
                        ];
                }
            });
        });
    }, t.prototype.play = function() {
        if (this._songlePlayer) return this._songlePlayer.play();
        this.emitter.onPlay();
    }, t.prototype.stop = function() {
        if (this._songlePlayer) return this.stopping = this._songlePlayer.isPlaying, this._songlePlayer.stop();
        this.emitter.onStop();
    }, t.prototype.pause = function() {
        if (this._songlePlayer) return this.stopping = !1, this._songlePlayer.pause();
        this.emitter.onPause();
    }, t.prototype.seek = function(t) {
        var e = this;
        this._songlePlayer ? (this._songlePlayer.seekTo(t), this.emitter.onSeek(t)) : this.updateMediaPosition(t).then(function() {
            e.emitter.onSeek(t);
        });
    }, t.prototype.startPolling = function() {
        var t, e = this;
        if (this.lastTime > 0) {
            var r = Date.now() - this.lastTime;
            t = Math.max(0, this.wait - r);
        } else t = this.wait;
        this.handler = setTimeout(function() {
            return yn(e, 0, void 0, function() {
                var e, r, n, i, o, s, a, u, c;
                return gn(this, function(l) {
                    switch(l.label){
                        case 0:
                            return this._songlePlayer ? (r = (e = this).lastTime, n = e.lastPosition, i = this._songlePlayer.positionTime, o = !1, "songle-api-html-media-element-media" === (null === (c = this._songlePlayer.media) || void 0 === c ? void 0 : c.dispatcherName) && (0 === n && i >= 500 ? (i = 0, o = !0) : 0 === r && i - n >= 800 && (i = n + t, o = !0)), s = r > 0 ? Date.now() - r : t, this.updateElapsedTimes(s), a = n > 0 ? n + s : i, u = Math.abs(i - a), (a = u > 2 * this.wait ? i : a <= i ? .5 * (a + i) : Math.max(n, i)) < this.lastPosition && (this.lastPosition - a > 5 * this.wait || (a = this.lastPosition)), o || (this.lastTime = Date.now()), this.lastPosition = a, [
                                4,
                                this.updateMediaPosition(a)
                            ]) : [
                                2
                            ];
                        case 1:
                            return l.sent(), this.handler && this.startPolling(), [
                                2
                            ];
                    }
                });
            });
        }, t);
    }, t.prototype.updateElapsedTimes = function(t) {
        if (this.elapsedTimes.unshift(t), this.elapsedTimes = this.elapsedTimes.slice(0, 10), this.elapsedTimes.length >= 10) {
            var e = this.elapsedTimes.reduce(function(t, e) {
                return t + e;
            }) / 10;
            e > 5 * this.wait && (this.player.stageScale = Math.max(.25, .9 * this.player.stageScale), this.elapsedTimes = []), e < 1.2 * this.wait && this.player.stageScale < 1 && (this.player.stageScale = Math.min(1, this.player.stageScale / .9), this.elapsedTimes = []);
        }
    }, t.prototype.stopPolling = function() {
        var t;
        if (this.handler) {
            if (clearTimeout(this.handler), this._songlePlayer) {
                if ("songle-api-html-media-element-media" === (null === (t = this._songlePlayer.media) || void 0 === t ? void 0 : t.dispatcherName)) {
                    var e = this.lastTime, r = this.lastPosition, n = Date.now() - e;
                    this.lastPosition = r + n;
                } else this.lastPosition = this._songlePlayer.positionTime;
            }
            this.lastTime = 0;
        }
        this.handler = null;
    }, t.prototype.dispose = function() {
        if (this.player && this.player.removeListener(this.volumeListener), this._songlePlayer) {
            try {
                this._songlePlayer.stop();
            } catch (t) {}
            this._songlePlayer = null;
        }
    }, t.prototype.onVolumeUpdate = function(t) {
        this._songlePlayer && (this._songlePlayer.volume = t);
    }, t;
}(), On = function() {
    function t(t) {
        this.listeners = [], this.throttleInterval = t && t.throttleInterval ? Number(t.throttleInterval) : 100;
    }
    return t.prototype.onVideoLoad = function(t, e) {
        this.listeners.forEach(function(r) {
            return r.onVideoLoad && r.onVideoLoad(t, e);
        });
    }, t.prototype.onSongLoad = function(t, e) {
        this.listeners.forEach(function(r) {
            return r.onSongLoad && r.onSongLoad(t, e);
        });
    }, t.prototype.onSongMapLoad = function(t, e) {
        this.listeners.forEach(function(r) {
            return r.onSongMapLoad && r.onSongMapLoad(t, e);
        });
    }, t.prototype.onSongInfoLoad = function(t, e) {
        var r = !1;
        this.listeners.forEach(function(n) {
            n.onSongInfoLoad && (n.onSongInfoLoad(t, e), r = !0);
        }), r && console.warn('[TextAlive API] "onSongInfoLoad" event is deprecated; use "onSongMapLoad" event instead');
    }, t.prototype.onVocalAmplitudeLoad = function(t, e) {
        this.listeners.forEach(function(r) {
            return r.onVocalAmplitudeLoad && r.onVocalAmplitudeLoad(t, e);
        });
    }, t.prototype.onValenceArousalLoad = function(t, e) {
        this.listeners.forEach(function(r) {
            return r.onValenceArousalLoad && r.onValenceArousalLoad(t, e);
        });
    }, t.prototype.onLyricsLoad = function(t, e) {
        this.listeners.forEach(function(r) {
            return r.onLyricsLoad && r.onLyricsLoad(t, e);
        });
    }, t.prototype.onTextLoad = function(t, e) {
        this.listeners.forEach(function(r) {
            return r.onTextLoad && r.onTextLoad(t, e);
        });
    }, t.prototype.onAppLoad = function(t) {
        this.listeners.forEach(function(e) {
            return e.onAppLoad && e.onAppLoad(t);
        });
    }, t.prototype.onAppReady = function(t) {
        this.listeners.forEach(function(e) {
            return e.onAppReady && e.onAppReady(t);
        });
    }, t.prototype.onAppParameterUpdate = function(t, e) {
        this.listeners.forEach(function(r) {
            return r.onAppParameterUpdate && r.onAppParameterUpdate(t, e);
        });
    }, t.prototype.onAppMediaChange = function(t, e) {
        this.listeners.forEach(function(r) {
            return r.onAppMediaChange && r.onAppMediaChange(t, e);
        });
    }, t.prototype.onTemplateUpdate = function(t) {
        this.listeners.forEach(function(e) {
            return e.onTemplateUpdate && e.onTemplateUpdate(t);
        });
    }, t.prototype.onTemplateCommit = function(t) {
        this.listeners.forEach(function(e) {
            return e.onTemplateCommit && e.onTemplateCommit(t);
        });
    }, t.prototype.onTemplatesLoad = function(t, e) {
        this.listeners.forEach(function(r) {
            return r.onTemplatesLoad && r.onTemplatesLoad(t, e);
        });
    }, t.prototype.onFontsLoad = function(t, e) {
        this.listeners.forEach(function(r) {
            return r.onFontsLoad && r.onFontsLoad(t, e);
        });
    }, t.prototype.onVideoReady = function(t) {
        this.listeners.forEach(function(e) {
            return e.onVideoReady && e.onVideoReady(t);
        });
    }, t.prototype.onTimerReady = function(t) {
        this.listeners.forEach(function(e) {
            return e.onTimerReady && e.onTimerReady(t);
        });
    }, t.prototype.onStageElementSet = function(t) {
        this.listeners.forEach(function(e) {
            return e.onStageElementSet && e.onStageElementSet(t);
        });
    }, t.prototype.onMediaElementSet = function(t) {
        this.listeners.forEach(function(e) {
            return e.onMediaElementSet && e.onMediaElementSet(t);
        });
    }, t.prototype.onTimeUpdate = function(t) {
        var e = this;
        this.listeners.forEach(function(e) {
            return e.onTimeUpdate && e.onTimeUpdate(t);
        }), this.position = t, this.throttledTimeUpdate || (this.throttledTimeUpdate = new Promise(function(t, r) {
            setTimeout(function() {
                e.onThrottledTimeUpdate(e.position), e.throttledTimeUpdate = null, t();
            }, e.throttleInterval);
        }));
    }, t.prototype.onThrottledTimeUpdate = function(t) {
        this.listeners.forEach(function(e) {
            return e.onThrottledTimeUpdate && e.onThrottledTimeUpdate(t);
        });
    }, t.prototype.onBackgroundGraphicsUpdate = function(t) {
        this.listeners.forEach(function(e) {
            return e.onBackgroundGraphicsUpdate && e.onBackgroundGraphicsUpdate(t);
        });
    }, t.prototype.onMediaSeek = function(t) {
        this.listeners.forEach(function(e) {
            return e.onMediaSeek && e.onMediaSeek(t);
        });
    }, t.prototype.onVideoSeekStart = function() {
        this.listeners.forEach(function(t) {
            return t.onVideoSeekStart && t.onVideoSeekStart();
        });
    }, t.prototype.onVideoSeekEnd = function() {
        this.listeners.forEach(function(t) {
            return t.onVideoSeekEnd && t.onVideoSeekEnd();
        });
    }, t.prototype.onVideoSeek = function(t) {
        this.listeners.forEach(function(e) {
            return e.onVideoSeek && e.onVideoSeek(t);
        });
    }, t.prototype.onPlay = function() {
        this.listeners.forEach(function(t) {
            return t.onPlay && t.onPlay();
        });
    }, t.prototype.onPause = function() {
        this.listeners.forEach(function(t) {
            return t.onPause && t.onPause();
        });
    }, t.prototype.onSeek = function(t) {
        this.listeners.forEach(function(e) {
            return e.onSeek && e.onSeek(t);
        });
    }, t.prototype.onSeekComplete = function(t) {
        this.listeners.forEach(function(e) {
            return e.onSeekComplete && e.onSeekComplete(t);
        });
    }, t.prototype.onStop = function() {
        this.listeners.forEach(function(t) {
            return t.onStop && t.onStop();
        });
    }, t.prototype.onDispose = function() {
        this.listeners.forEach(function(t) {
            return t.onDispose && t.onDispose();
        });
    }, t.prototype.onResize = function(t) {
        this.listeners.forEach(function(e) {
            return e.onResize && e.onResize(t);
        });
    }, t.prototype.onVolumeUpdate = function(t) {
        this.listeners.forEach(function(e) {
            return e.onVolumeUpdate && e.onVolumeUpdate(t);
        });
    }, t.prototype.addListener = function(t) {
        !t || this.listeners.indexOf(t) >= 0 || this.listeners.push(t);
    }, t.prototype.removeListener = function(t) {
        var e = !1;
        return this.listeners = this.listeners.filter(function(r) {
            var n = r === t;
            return e = e || n, !n;
        }), e;
    }, t;
}(), Sn = function() {
    function t(t, e, r) {
        var n = this;
        this.player = t, this.manager = e, this.emitter = r, this._defaultBackgroundCss = null, this._background = null, t.addListener({
            onStageElementSet: function(t) {
                return n.doUpdateBackground(n.background);
            }
        });
    }
    return Object.defineProperty(t.prototype, "background", {
        get: function() {
            return this._background;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "defaultBackgroundCss", {
        get: function() {
            return this._defaultBackgroundCss ? this._defaultBackgroundCss : "";
        },
        set: function(t) {
            this._defaultBackgroundCss = t, this.updateBackground(this._background);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "ready", {
        get: function() {
            return null !== this._background;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.settingBackground = function(t) {
        return yn(this, 0, void 0, function() {
            return gn(this, function(e) {
                switch(e.label){
                    case 0:
                        return [
                            4,
                            this.doSetBackground(t)
                        ];
                    case 1:
                        return [
                            2,
                            e.sent() && this.doUpdateBackground(t)
                        ];
                }
            });
        });
    }, t.prototype.setBackground = function(t) {
        return yn(this, 0, void 0, function() {
            var e;
            return gn(this, function(r) {
                switch(r.label){
                    case 0:
                        return [
                            4,
                            this.doSetBackground(t)
                        ];
                    case 1:
                        return [
                            2,
                            (e = r.sent()) && this.updateBackground(e)
                        ];
                }
            });
        });
    }, t.prototype.doSetBackground = function(t) {
        return yn(this, 0, void 0, function() {
            var e, r, n;
            return gn(this, function(i) {
                switch(i.label){
                    case 0:
                        return e = t && t.originalUrl ? t.originalUrl : "", this.manager.isBackgroundColorAsset(t) ? [
                            2,
                            {
                                css: e,
                                originalUrl: e
                            }
                        ] : this.manager.isBackgroundPiaproImageAsset(t) ? [
                            4,
                            this.manager.read(e)
                        ] : [
                            3,
                            2
                        ];
                    case 1:
                        return (r = i.sent()) && r.url && this.manager.checkBackgroundImageLicense(r.license) ? (r.originalUrl = e, t && (r.x = t.x, r.y = t.y), [
                            2,
                            r
                        ]) : [
                            2,
                            {
                                css: "",
                                originalUrl: e,
                                x: t ? t.x : void 0,
                                y: t ? t.y : void 0,
                                license: r ? r.license : void 0
                            }
                        ];
                    case 2:
                        return this.manager.isBackgroundSpecialImageAsset(t) ? [
                            2,
                            {
                                css: 'url("https://api.textalive.jp/images/backgrounds/snowmiku2016/' + (n = /^snowmiku2016-([0-9]{2})$/.exec(e))[1] + '.jpg")',
                                contentUrl: "https://api.textalive.jp/images/backgrounds/snowmiku2016/" + n[1] + ".jpg",
                                url: "https://snowmiku.com/2016/info_chara.html",
                                name: "SNOW MIKU 2016",
                                authorName: "\u8C46\u306E\u7D20",
                                originalUrl: e,
                                x: t ? t.x : void 0,
                                y: t ? t.y : void 0,
                                defaultY: 0
                            }
                        ] : [
                            2,
                            {
                                originalUrl: null,
                                css: "",
                                x: t ? t.x : void 0,
                                y: t ? t.y : void 0
                            }
                        ];
                }
            });
        });
    }, t.prototype.updateBackground = function(t) {
        return !!this.doUpdateBackground(t) && (this.emitter && this.emitter.onBackgroundGraphicsUpdate && this.emitter.onBackgroundGraphicsUpdate(t), !0);
    }, t.prototype.doUpdateBackground = function(t) {
        if (!t) return !1;
        if (!this.player.stageElement) return this._background = t, !0;
        var e = this.player.stageElement.style;
        return t.css.length <= 0 ? e.background = this.defaultBackgroundCss : e.background = t.css, "number" == typeof t.x || this._background && "number" == typeof this._background.x ? ("number" != typeof t.x && (t.x = this._background.x), e.backgroundPositionX = e.backgroundPositionX + "%") : e.backgroundPositionX = "number" == typeof t.defaultX ? t.defaultX + "%" : "center", "number" == typeof t.y || this._background && "number" == typeof this._background.y ? ("number" != typeof t.y && (t.y = this._background.y), e.backgroundPositionY = e.backgroundPositionY + "%") : e.backgroundPositionY = "number" == typeof t.defaultY ? t.defaultY + "%" : "center", e.backgroundSize = "cover", this._background = t, !0;
    }, t.prototype.export = function() {
        if (!this.background || !this.background.originalUrl) return null;
        var t = {
            originalUrl: this.background.originalUrl
        };
        return void 0 !== this.background.x && (t.x = this.background.x), void 0 !== this.background.y && (t.y = this.background.y), t;
    }, t.prototype.exportPartialVideoEntry = function(t) {
        return {
            background: this.export()
        };
    }, t;
}();
function Tn(t, e, r) {
    return yn(this, 0, void 0, function() {
        var n, i, o, s, a, u, c, l, p, h, d, f, y, g;
        return gn(this, function(v) {
            switch(v.label){
                case 0:
                    if (n = {
                        loaded: [],
                        failed: []
                    }, "undefined" == typeof window || !window.document || !window.document.head) return n.failed = t.slice(), [
                        2,
                        n
                    ];
                    for(i = r.split("").filter(function(t, e, r) {
                        return r.indexOf(t) === e;
                    }).sort(), o = !0, s = 0, i.forEach(function(t) {
                        var r = e.indexOf(t, s);
                        o = o && r >= 0, s = r;
                    }), a = window.document.head, u = [], c = 0; c < a.children.length; c++)"link" === (l = a.children.item(c)).tagName.toLowerCase() && "stylesheet" === l.getAttribute("rel") && u.push(l.getAttribute("href"));
                    if (p = [], h = [], d = [], t.forEach(function(t) {
                        if (t.google) d.push(t.key);
                        else {
                            var e = o && t.compactUrl || t.url;
                            u.includes(e) ? n.loaded.push(t) : (h.push(t.en), p.push(e));
                        }
                    }), f = {
                        classes: !1,
                        active: null,
                        inactive: null,
                        fontactive: function(e) {
                            n.loaded.push(t.find(function(t) {
                                return t.en === e;
                            })), n.failed = n.failed.filter(function(t) {
                                return t.en !== e;
                            });
                        },
                        fontinactive: function(e) {
                            n.failed.push(t.find(function(t) {
                                return t.en === e;
                            }));
                        },
                        timeout: 5e3
                    }, d.length > 0 && (f.google = {
                        families: d
                    }), h.length > 0 && (f.custom = {
                        families: h,
                        urls: p
                    }), !f.google && !f.custom) return [
                        3,
                        6
                    ];
                    v.label = 1;
                case 1:
                    return v.trys.push([
                        1,
                        5,
                        ,
                        6
                    ]), (g = "undefined" != typeof window && (null === window || void 0 === window ? void 0 : window.WebFont)) ? [
                        3,
                        3
                    ] : [
                        4,
                        require("d32dff30d595d4e2")
                    ];
                case 2:
                    g = v.sent(), v.label = 3;
                case 3:
                    return y = g, [
                        4,
                        new Promise(function(t) {
                            f.active = f.inactive = t, y.load(f);
                        })
                    ];
                case 4:
                case 5:
                    return v.sent(), [
                        3,
                        6
                    ];
                case 6:
                    return [
                        2,
                        n
                    ];
            }
        });
    });
}
function xn(t, e) {
    return yn(this, 0, void 0, function() {
        var r, n, i, o, s, a, u;
        return gn(this, function(c) {
            switch(c.label){
                case 0:
                    if (r = {
                        loaded: [],
                        failed: []
                    }, !("undefined" != typeof window && window.document && window.document.head && window.Ts && window.Ts.loadFontAsync)) return r.failed = t.slice(), [
                        2,
                        r
                    ];
                    for(n = window.document.head, i = {}, o = function(t) {
                        var e = n.children.item(t);
                        if ("style" !== e.tagName.toLowerCase() || "text/css" !== e.getAttribute("type") || "stylesheet" !== e.getAttribute("rel") || !e.hasAttribute("data-cssName")) return "continue";
                        var r = e.getAttribute("data-cssName");
                        if (void 0 === i[r]) return i[r] = new Set(e.getAttribute("data-text")), "continue";
                        e.getAttribute("data-text").split("").forEach(function(t) {
                            return i[r].add(t);
                        });
                    }, s = 0; s < n.children.length; s++)o(s);
                    return a = window.Ts, u = [], t.forEach(function(t) {
                        var n = new Set(e + t.en + t.ja);
                        if (i[t.en] && i[t.en].forEach(function(t) {
                            return n.delete(t);
                        }), n.size <= 0) return r.loaded.push(t), r;
                        u.push(new Promise(function(e) {
                            return function(t, e, r, n, i) {
                                var o = e.en;
                                t.loadFontAsync({
                                    cssName: o,
                                    text: n,
                                    outputType: "json",
                                    callback: function(t) {
                                        try {
                                            !function(t, e, r) {
                                                var n = JSON.parse(r), i = JSON.parse(n.res), o = document.createElement("style");
                                                o.setAttribute("data-cssName", t), o.setAttribute("data-text", e), o.setAttribute("type", "text/css"), o.setAttribute("rel", "stylesheet"), o.innerHTML = "@font-face {font-family: '" + i.fontFamily + "';font-weight: " + i["font-weight"] + ";src: url(data:font/woff;base64," + i.src + ");}", document.head.appendChild(o);
                                            }(o, n, t.data), r.loaded.push(e);
                                        } catch (t) {
                                            r.failed.push(e);
                                        }
                                        i();
                                    }
                                });
                            }(a, t, r, Array.from(n.values()).join(""), e);
                        }));
                    }), [
                        4,
                        Promise.all(u)
                    ];
                case 1:
                    return c.sent(), [
                        2,
                        r
                    ];
            }
        });
    });
}
var An = function(t) {
    function e(e, r) {
        var n = this.constructor, i = t.call(this, e) || this;
        return i.fonts = r, Object.setPrototypeOf(i, n.prototype), i;
    }
    return dn(e, t), e;
}(Error), Rn = function() {
    function t(t, e, r) {
        this.fontInfoManager = t, this.textFetcher = e, this.listener = r, this._failed = [], this._loaded = [];
    }
    return Object.defineProperty(t.prototype, "failed", {
        get: function() {
            return this._failed;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "loaded", {
        get: function() {
            return this._loaded;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.loadAll = function() {
        return yn(this, 0, void 0, function() {
            var t;
            return gn(this, function(e) {
                switch(e.label){
                    case 0:
                        return [
                            4,
                            this.listAvailableFonts()
                        ];
                    case 1:
                        return t = e.sent(), [
                            2,
                            this.loadFonts(t)
                        ];
                }
            });
        });
    }, t.prototype.loadForVideo = function(t) {
        return yn(this, 0, void 0, function() {
            var e, r;
            return gn(this, function(n) {
                switch(n.label){
                    case 0:
                        return (e = this.listFontFamiliesInVideo(t)) ? [
                            4,
                            this.listAvailableFonts()
                        ] : (this.listener && this.listener.onFontsLoad && this.listener.onFontsLoad(this.loaded), [
                            2,
                            Promise.resolve(this.loaded)
                        ]);
                    case 1:
                        return r = n.sent(), [
                            2,
                            this.loadFonts(r.filter(function(t) {
                                return e.indexOf(t.en) >= 0;
                            }))
                        ];
                }
            });
        });
    }, t.prototype.listFontFamiliesInVideo = function(t) {
        if (!t || !t.phrases) return null;
        var e = [];
        return t.phrases.forEach(function(t) {
            return t.words.forEach(function(t) {
                return t.characters.forEach(function(t) {
                    return e.push(t.fontFamily);
                });
            });
        }), e.filter(function(t, e, r) {
            return r.indexOf(t) === e;
        });
    }, t.prototype.listAvailableFonts = function() {
        return yn(this, 0, void 0, function() {
            return gn(this, function(t) {
                return [
                    2,
                    this.fontInfoManager.listAvailableFonts()
                ];
            });
        });
    }, t.prototype.isLoading = function() {
        return !!this.queue;
    }, t.prototype.load = function(t) {
        return yn(this, 0, void 0, function() {
            var e, r;
            return gn(this, function(n) {
                switch(n.label){
                    case 0:
                        return e = [], r = [], t.forEach(function(t) {
                            "string" == typeof t ? e.push(t) : r.push(t);
                        }), [
                            4,
                            this.fontInfoManager.listAvailableFonts()
                        ];
                    case 1:
                        return n.sent().forEach(function(t) {
                            e.indexOf(t.key) >= 0 && r.push(t);
                        }), [
                            2,
                            this.loadFonts(r)
                        ];
                }
            });
        });
    }, t.prototype.loadFonts = function(t) {
        return yn(this, 0, void 0, function() {
            var e = this;
            return gn(this, function(r) {
                return this.queue ? (this.listener && this.listener.onFontsLoad && this.listener.onFontsLoad(null, new An("Failed to load some fonts because there is an ongoing font loding process", this.failed.slice())), [
                    2,
                    this.loaded
                ]) : (this.queue = this.doLoad(t).then(function(t) {
                    return e.queue = null, t;
                }), [
                    2,
                    this.queue
                ]);
            });
        });
    }, t.prototype.doLoad = function(t) {
        return yn(this, 0, void 0, function() {
            var e, r, n, i, o = this;
            return gn(this, function(s) {
                switch(s.label){
                    case 0:
                        return e = [], r = [], [
                            4,
                            this.fontInfoManager.getFrequentChars()
                        ];
                    case 1:
                        return n = s.sent(), t.forEach(function(t) {
                            t.typesquare || t.typekit || e.push(t), t.typesquare && r.push(t);
                        }), i = (this.textFetcher && this.textFetcher() || "").split("").filter(function(t, e, r) {
                            return r.indexOf(t) === e;
                        }).sort().join(""), [
                            2,
                            Promise.all([
                                Tn(e, n, i),
                                xn(r, i)
                            ]).then(function(t) {
                                var e = t[0], r = t[1], n = e.loaded.concat(r.loaded);
                                if (o.addLoadedFonts(n), e.failed.length > 0 || r.failed.length > 0) {
                                    var i = e.failed.concat(r.failed);
                                    o.addFailedFonts(i), o.listener && o.listener.onFontsLoad && o.listener.onFontsLoad(null, new An("Failed to load some fonts", o.failed.slice()));
                                } else o.listener && o.listener.onFontsLoad && o.listener.onFontsLoad(n);
                                return o.loaded;
                            }).catch(function(t) {
                                return o.listener && o.listener.onFontsLoad && o.listener.onFontsLoad(null, new An(t, o.failed.slice())), o.loaded;
                            })
                        ];
                }
            });
        });
    }, t.prototype.addLoadedFonts = function(t) {
        var e = this;
        this._loaded = this.loaded.concat(t.filter(function(t) {
            return e.failed.findIndex(function(e) {
                return e.key === t.key;
            }) < 0;
        }));
    }, t.prototype.addFailedFonts = function(t) {
        var e = this;
        this._failed = this.failed.concat(t.filter(function(t) {
            return e.failed.findIndex(function(e) {
                return e.key === t.key;
            }) < 0;
        }));
    }, t;
}(), Cn = function() {
    function t() {}
    return Object.defineProperty(t.prototype, "duration", {
        get: function() {
            return this.endTime - this.startTime;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.contains = function(t) {
        return t >= this.startTime && t <= this.endTime;
    }, t.prototype.overlaps = function(t, e) {
        if ("object" == typeof t) return this.overlaps(t.startTime, t.endTime);
        var r = t;
        return this.contains(r) || this.contains(e) || this.startTime <= r && this.endTime >= e;
    }, t.prototype.progress = function(t) {
        return this.contains(t) ? this.startTime === this.endTime ? 0 : (t - this.startTime) / (this.endTime - this.startTime) : -1;
    }, t;
}(), Nn = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.previous = e.next = null, e;
    }
    return dn(e, t), Object.defineProperty(e.prototype, "endTime", {
        get: function() {
            return this.next ? this.next.startTime : this.startTime;
        },
        enumerable: !1,
        configurable: !0
    }), e;
}(Cn), kn = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.previous = e.next = null, e;
    }
    return dn(e, t), e;
}(Cn), jn = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.previous = e.next = null, e;
    }
    return dn(e, t), e;
}(Cn), In = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.previous = e.next = null, e;
    }
    return dn(e, t), e;
}(Cn), Un = function() {
    function t(t) {
        var e = t.analysis, r = t.info;
        this.beats = [], this.chords = [], this.segments = [], this.voice = [], this._revisions = {
            beatId: (null == r ? void 0 : r.beatRevisionId) || -1,
            chordId: (null == r ? void 0 : r.chordRevisionId) || -1,
            repetitiveSegmentId: (null == r ? void 0 : r.chorusRevisionId) || -1
        }, this.parseBeats(null == e ? void 0 : e.beats), this.parseSegments(null == e ? void 0 : e.repetitive_segment), this.parseChords(null == e ? void 0 : e.chords), this.parseVoice(e.voice);
    }
    return Object.defineProperty(t.prototype, "revisions", {
        get: function() {
            return this._revisions;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.parseBeats = function(t) {
        var e = this;
        if (this.beats.splice(0, this.beats.length), Array.isArray(t) && Array.isArray(t[0])) {
            var r = null, n = 0;
            t[0].forEach(function(t) {
                var i = new Nn;
                i.startTime = 1e3 * t[0], i.length = t[2], i.position = t[3], i.previous = r, null !== r && (r.next = i), i.index = n++, e.beats.push(i), r = i;
            }), null !== r && (r.next = null);
        }
    }, t.prototype.parseChords = function(t) {
        var e = this;
        if (this.chords.splice(0, this.chords.length), Array.isArray(t)) {
            var r = null, n = 0;
            t.forEach(function(t) {
                var i = new kn;
                i.startTime = 1e3 * t[0], i.endTime = 1e3 * t[1], i.name = t[2], i.previous = r, null !== r && (r.next = i), i.index = n++, e.chords.push(i), r = i;
            }), null !== r && (r.next = null);
        }
    }, t.prototype.parseSegments = function(t) {
        var e = this;
        this.segments.splice(0, this.segments.length), Array.isArray(t) && t.forEach(function(t) {
            var r = {
                chorus: !!t.chorus,
                duration: 10 * t.segment_length,
                segments: null
            }, n = null, i = 0;
            r.segments = t.start_frames.map(function(t) {
                var e = new jn;
                return e.startTime = 10 * t, e.endTime = e.startTime + r.duration, e.previous = n, null !== n && (n.next = e), e.index = i++, n = e, e;
            }), null !== n && (n.next = null), e.segments.push(r);
        });
    }, t.prototype.parseVoice = function(t) {
        var e = this;
        this.voice.splice(0, this.voice.length), Array.isArray(t) && t.forEach(function(t) {
            var r = [], n = null, i = 0, o = 0;
            t.forEach(function(t) {
                var e = new In;
                e.startTime = o, e.endTime = e.startTime + 10 * t[1], e.f0 = t[0][0], e.initialF0 = t[0][1], e.previous = n, null !== n && (n.next = e), e.index = i++, r.push(e), n = e, o = e.endTime;
            }), null !== n && (n.next = null), e.voice.push(r);
        });
    }, t;
}(), Fn = function() {
    function t(t) {
        var e = t.song, r = t.analysis, n = t.vocalAmplitude, i = t.maxVocalAmplitude, o = t.valenceArousal;
        this._song = e, this._analysis = r, this._vocalAmplitude = n, this._maxVocalAmplitude = i, this._valenceArousal = o;
    }
    return Object.defineProperty(t.prototype, "song", {
        get: function() {
            return this._song;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "analysis", {
        get: function() {
            return this._analysis;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "vocalAmplitude", {
        get: function() {
            return this._vocalAmplitude;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "maxVocalAmplitude", {
        get: function() {
            return this._maxVocalAmplitude;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "valenceArousal", {
        get: function() {
            return this._valenceArousal;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.getChoruses = function() {
        var t;
        if (!this._analysis) return [];
        var e = this._analysis.segments.filter(function(t) {
            return t.chorus;
        });
        return e.length <= 0 ? [] : (null === (t = e[0].segments) || void 0 === t ? void 0 : t.slice()) || [];
    }, t.prototype.findChorus = function(t, e) {
        return st(this.getChoruses(), t, e);
    }, t.prototype.findChorusBetween = function(t, e) {
        return this.findChorus(t, {
            endTime: e
        });
    }, t.prototype.findChorusChange = function(t, e) {
        return at(this.getChoruses(), t, e);
    }, t.prototype.getBeats = function() {
        var t, e;
        return (null === (e = null === (t = this._analysis) || void 0 === t ? void 0 : t.beats) || void 0 === e ? void 0 : e.slice()) || [];
    }, t.prototype.findBeat = function(t, e) {
        return st(this.getBeats(), t, e);
    }, t.prototype.findBeatChange = function(t, e) {
        return at(this.getBeats(), t, e);
    }, t.prototype.getChords = function() {
        var t, e;
        return (null === (e = null === (t = this._analysis) || void 0 === t ? void 0 : t.chords) || void 0 === e ? void 0 : e.slice()) || [];
    }, t.prototype.findChord = function(t, e) {
        return st(this.getChords(), t, e);
    }, t.prototype.findChordChange = function(t, e) {
        return at(this.getChords(), t, e);
    }, t.prototype.getVocalFrequency = function(t) {
        var e;
        if (!Array.isArray(null === (e = this._analysis) || void 0 === e ? void 0 : e.voice)) return -1;
        var n = this._analysis.voice[0];
        if (n.length <= 0) return -1;
        var i = r.sortedIndex(n, t, function(t) {
            return t.endTime;
        });
        return n[i].contains(t) ? n[i].f0 : -1;
    }, t.prototype.getVocalAmplitude = function(t) {
        var e = this._vocalAmplitude, r = Math.round(t / 10);
        return !Array.isArray(this._vocalAmplitude) || r < 0 || r >= e.length ? -1 : this._vocalAmplitude[r];
    }, t.prototype.getMaxVocalAmplitude = function() {
        return "number" == typeof this._maxVocalAmplitude ? this._maxVocalAmplitude : -1;
    }, t.prototype.getValenceArousal = function(t) {
        var e = this._valenceArousal;
        if (!e) return null;
        var n = r.sortedIndex(e.seq, t, function(t) {
            return 1e3 * t.t[1];
        });
        if (n < 0) return {
            a: e.seq[0].a,
            v: e.seq[0].v
        };
        if (n + 1 >= e.seq.length || t < 1e3 * e.seq[n + 1].t[0]) return {
            a: e.seq[Math.min(n, e.seq.length - 1)].a,
            v: e.seq[Math.min(n, e.seq.length - 1)].v
        };
        var i = e.seq[n], o = e.seq[n + 1], s = t / 1e3, a = o.t[0], u = i.t[1], c = u - a;
        return {
            a: (i.a * (u - s) + o.a * (s - a)) / c,
            v: (i.v * (u - s) + o.v * (s - a)) / c
        };
    }, t.prototype.getMedianValenceArousal = function() {
        var t = this._valenceArousal;
        return t ? t.stats.median : null;
    }, t;
}(), Ln = function() {
    function t(t, e, r) {
        this.songManager = t, this.options = r, this.listener = e;
    }
    return Object.defineProperty(t.prototype, "song", {
        get: function() {
            return this._song;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "analysis", {
        get: function() {
            return this._analysis;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "vocalAmplitude", {
        get: function() {
            return this._vocalAmplitude;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "maxVocalAmplitude", {
        get: function() {
            return this._maxVocalAmplitude;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "valenceArousal", {
        get: function() {
            return this._valenceArousal;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.loadSong = function(t, e) {
        var r, n, i;
        return yn(this, 0, void 0, function() {
            var o, s;
            return gn(this, function(a) {
                switch(a.label){
                    case 0:
                        return "number" == typeof t && t < 0 || !t ? (this.onSongLoad(null, new Error("Neither Songle ID or code provided")), [
                            2,
                            null
                        ]) : [
                            4,
                            this.songManager.load("number" == typeof t ? {
                                id: t
                            } : {
                                code: t
                            })
                        ];
                    case 1:
                        return o = a.sent(), this.onSongLoad(o, o ? void 0 : new Error("Song data not found")), o ? (s = {
                            chord: null == e ? void 0 : e.chordId,
                            beat: null == e ? void 0 : e.beatId,
                            chorus: null == e ? void 0 : e.repetitiveSegmentId
                        }, [
                            4,
                            Promise.all([
                                (null === (r = this.options) || void 0 === r ? void 0 : r.vocalFrequencyEnabled) ? this.loadSongDetailInfo(o.song.code, {
                                    revisions: s
                                }) : this.loadSongInfo(o.song.code, {
                                    revisions: s
                                }),
                                (null === (n = this.options) || void 0 === n ? void 0 : n.vocalAmplitudeEnabled) ? this.loadVocalAmplitude(o.song.code) : Promise.resolve(null),
                                (null === (i = this.options) || void 0 === i ? void 0 : i.valenceArousalEnabled) ? this.loadValenceArousal(o.song.code) : Promise.resolve(null)
                            ])
                        ]) : [
                            2,
                            null
                        ];
                    case 2:
                        return a.sent(), [
                            2,
                            new Fn(this)
                        ];
                }
            });
        });
    }, t.prototype.onSongLoad = function(t, e) {
        this._song = t, this.listener && this.listener.onSongLoad && this.listener.onSongLoad(t, e);
    }, t.prototype.loadSongInfo = function(t, e) {
        return yn(this, 0, void 0, function() {
            var r;
            return gn(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            this.songManager.loadInfo(String(t), e)
                        ];
                    case 1:
                        return r = n.sent(), this.onSongMapLoad(r, r ? void 0 : new Error("Song analysis data not found")), [
                            2,
                            r
                        ];
                }
            });
        });
    }, t.prototype.loadSongDetailInfo = function(t, e) {
        return yn(this, 0, void 0, function() {
            var r;
            return gn(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            this.songManager.loadDetailInfo(String(t), e)
                        ];
                    case 1:
                        return r = n.sent(), this.onSongMapLoad(r, r ? void 0 : new Error("Song analysis data not found")), [
                            2,
                            r
                        ];
                }
            });
        });
    }, t.prototype.mockSongInfo = function(t) {
        var e = function(t) {
            for(var e = t.beat, r = t.chorusSegment, n = t.duration, i = [], o = 0; 60 * o / e.bpm < n / 1e3;)i.push([
                60 * o / e.bpm,
                1,
                e.length,
                o % e.length + 1,
                1
            ]), o++;
            return {
                beats: [
                    i
                ],
                chords: null,
                repetitive_segment: [
                    {
                        chorus: !0,
                        index: 0,
                        segment_length: r.duration / 10,
                        start_frames: r.startTimes.map(function(t) {
                            return t / 10;
                        })
                    }
                ],
                voice: null
            };
        }(t);
        return this._song = null, this.onSongMapLoad({
            analysis: e,
            info: null
        }), new Fn(this);
    }, t.prototype.onSongMapLoad = function(t, e) {
        var r, n;
        this._analysis = new Un(t), (null === (r = this.listener) || void 0 === r ? void 0 : r.onSongMapLoad) && this.listener.onSongMapLoad(this._analysis, e), (null === (n = this.listener) || void 0 === n ? void 0 : n.onSongInfoLoad) && this.listener.onSongInfoLoad(t, e);
    }, t.prototype.loadVocalAmplitude = function(t) {
        var e;
        return yn(this, 0, void 0, function() {
            var r;
            return gn(this, function(n) {
                switch(n.label){
                    case 0:
                        return r = this, [
                            4,
                            this.songManager.loadVocalAmplitude(String(t))
                        ];
                    case 1:
                        return r._vocalAmplitude = n.sent(), this._maxVocalAmplitude = Math.max.apply(Math, this._vocalAmplitude), (null === (e = this.listener) || void 0 === e ? void 0 : e.onVocalAmplitudeLoad) && this.listener.onVocalAmplitudeLoad(this._vocalAmplitude, this._vocalAmplitude ? void 0 : new Error("Vocal amplitude data not found")), [
                            2,
                            this._vocalAmplitude
                        ];
                }
            });
        });
    }, t.prototype.loadValenceArousal = function(t) {
        var e;
        return yn(this, 0, void 0, function() {
            var r;
            return gn(this, function(n) {
                switch(n.label){
                    case 0:
                        return r = this, [
                            4,
                            this.songManager.loadValenceArousal(String(t))
                        ];
                    case 1:
                        return r._valenceArousal = n.sent(), (null === (e = this.listener) || void 0 === e ? void 0 : e.onValenceArousalLoad) && this.listener.onValenceArousalLoad(this._valenceArousal, this._valenceArousal ? void 0 : new Error("Valence arousal data not found")), [
                            2,
                            this._valenceArousal
                        ];
                }
            });
        });
    }, t;
}(), Dn = function() {
    function t(t, e, r) {
        this.managers = t, this.listener = e, this.options = r;
    }
    return t.prototype.loadRawText = function(t) {
        var e;
        return e = !t.phrases || t.phrases.length < 0 ? "" : t.phrases.map(function(t) {
            return t.words.map(function(t) {
                return t.characters.map(function(t) {
                    return t.char;
                }).join("");
            }).join("");
        }).join(""), this.onTextLoad({
            text: e
        }), {
            lyricsId: -1,
            lyrics: null,
            lyricsBody: {
                text: e,
                artist: null,
                name: null,
                url: null
            }
        };
    }, t.prototype.loadLyrics = function(t) {
        var e = t.songCode, r = t.lyricId, n = void 0 === r ? -1 : r, i = t.lyricDiffId, o = void 0 === i ? -1 : i, s = t.altLyricsUrl, a = t.directAccess;
        return yn(this, 0, void 0, function() {
            var t, r, i, u;
            return gn(this, function(c) {
                switch(c.label){
                    case 0:
                        return n <= 0 ? (0 === n ? this.onLyricsLoad(null, new Error("Lyrics not loaded")) : this.onLyricsLoad(null, new Error("Lyrics not found")), [
                            2,
                            null
                        ]) : [
                            4,
                            this.managers.lyrics.loadDiff(e, n, o)
                        ];
                    case 1:
                        return (null == (t = c.sent()) ? void 0 : t.data) ? (r = fn(fn({}, t), {
                            processing: !1,
                            failed: !1,
                            id: n,
                            diff: {
                                id: o
                            }
                        }), this.onLyricsLoad(r), s || a ? [
                            3,
                            3
                        ] : [
                            4,
                            this.managers.lyrics.fetchLocalLyricBody(n)
                        ]) : (this.onLyricsLoad(null, new Error("Lyrics timing information not found")), [
                            2,
                            null
                        ]);
                    case 2:
                        i = c.sent(), c.label = 3;
                    case 3:
                        if (null == i ? void 0 : i.text) return [
                            3,
                            7
                        ];
                        c.label = 4;
                    case 4:
                        return c.trys.push([
                            4,
                            6,
                            ,
                            7
                        ]), [
                            4,
                            this.loadLyricsText(t, {
                                altLyricsUrl: s,
                                directAccess: a
                            })
                        ];
                    case 5:
                        return i = c.sent(), [
                            3,
                            7
                        ];
                    case 6:
                        return u = c.sent(), this.onTextLoad(null, u), [
                            3,
                            7
                        ];
                    case 7:
                        return i && this.onTextLoad(i), [
                            2,
                            {
                                lyricsId: r.id,
                                lyrics: r,
                                lyricsBody: i
                            }
                        ];
                }
            });
        });
    }, t.prototype.loadLyricsText = function(t, e) {
        var r = void 0 === e ? {} : e, n = r.altLyricsUrl, i = r.directAccess;
        return yn(this, 0, void 0, function() {
            var e, r, o = this;
            return gn(this, function(s) {
                switch(s.label){
                    case 0:
                        return e = this.options && "number" == typeof this.options.lyricsFetchTimeout && this.options.lyricsFetchTimeout >= 0, r = this.managers.lyrics.fetchLyricBody(n || t.url, {
                            parserPath: t.parser_path,
                            directAccess: i
                        }), [
                            4,
                            e ? Promise.race([
                                r,
                                new Promise(function(t, e) {
                                    return setTimeout(function() {
                                        return e(new Error("Fetching lyrics text timeout"));
                                    }, o.options.lyricsFetchTimeout);
                                })
                            ]) : r
                        ];
                    case 1:
                        return [
                            2,
                            s.sent()
                        ];
                }
            });
        });
    }, t.prototype.onLyricsLoad = function(t, e) {
        this.listener && this.listener.onLyricsLoad && this.listener.onLyricsLoad(t, e);
    }, t.prototype.onTextLoad = function(t, e) {
        this.listener && this.listener.onTextLoad && this.listener.onTextLoad(t, e);
    }, t;
}(), Mn = function() {
    function t(t) {
        var e = t.video;
        this._video = e;
    }
    return Object.defineProperty(t.prototype, "video", {
        get: function() {
            return this._video;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "data", {
        get: function() {
            return this._video.json;
        },
        enumerable: !1,
        configurable: !0
    }), t;
}(), Bn = function() {
    function t(t, e) {
        this.managers = t, this.listener = e, this.listener = e;
    }
    return Object.defineProperty(t.prototype, "video", {
        get: function() {
            return this._video;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.onVideoLoad = function(t, e) {
        var r = t ? Object.assign(t, e) : null;
        return r && ("string" == typeof r.json ? r.json = JSON.parse(r.json) : "object" == typeof r.json && null !== r.json || (r.json = {}), "string" == typeof r.config ? r.config = JSON.parse(r.config) : "object" == typeof r.config && null !== r.config || (r.config = {})), this._video = r, this.listener && this.listener.onVideoLoad && this.listener.onVideoLoad(r), new Mn({
            video: r
        });
    }, t.prototype.createFromVideoId = function(t, e) {
        return yn(this, 0, void 0, function() {
            var r;
            return gn(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            this.managers.video.load(t)
                        ];
                    case 1:
                        return r = n.sent(), [
                            2,
                            this.onVideoLoad(r, e)
                        ];
                }
            });
        });
    }, t.prototype.createFromVideo = function(t, e) {
        return this.onVideoLoad(t, e);
    }, t.prototype.createFromSongUrl = function(t, e) {
        return yn(this, 0, void 0, function() {
            return gn(this, function(r) {
                return [
                    2,
                    this.createFromSongPath(this.managers.song.getSongPathFromUrl(t), e)
                ];
            });
        });
    }, t.prototype.createFromSongPath = function(t, e) {
        return yn(this, 0, void 0, function() {
            var r;
            return gn(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            this.managers.song.load({
                                songPath: t
                            })
                        ];
                    case 1:
                        return (r = n.sent()) ? [
                            2,
                            this.createFromSong(r.song, e)
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.createFromSongId = function(t, e) {
        return yn(this, 0, void 0, function() {
            var r;
            return gn(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            this.managers.song.load({
                                id: t
                            })
                        ];
                    case 1:
                        return (r = n.sent()) ? [
                            2,
                            this.createFromSong(r.song, e)
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.createFromSongCode = function(t, e) {
        return yn(this, 0, void 0, function() {
            var r;
            return gn(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            this.managers.song.load({
                                code: t
                            })
                        ];
                    case 1:
                        return (r = n.sent()) ? [
                            2,
                            this.createFromSong(r.song, e)
                        ] : [
                            2,
                            null
                        ];
                }
            });
        });
    }, t.prototype.createFromSong = function(t, e) {
        var r;
        return yn(this, 0, void 0, function() {
            var n, i, o, s, a, u;
            return gn(this, function(c) {
                switch(c.label){
                    case 0:
                        return n = null == e ? void 0 : e.lyricId, i = null == e ? void 0 : e.lyricDiffId, "number" != typeof n || n < 0 ? [
                            4,
                            this.managers.lyrics.load(t.code)
                        ] : [
                            3,
                            4
                        ];
                    case 1:
                        return o = c.sent(), (a = o && !o.status.failed && !o.status.processing && Array.isArray(o.lyrics) && o.lyrics.length > 0) ? [
                            4,
                            this.managers.lyrics.loadDetail(t.code, o.lyrics[0].id)
                        ] : [
                            3,
                            3
                        ];
                    case 2:
                        a = c.sent(), c.label = 3;
                    case 3:
                        (s = a) && (n = s.id, i = null === (r = s.diff) || void 0 === r ? void 0 : r.id), c.label = 4;
                    case 4:
                        return "number" != typeof n && (n = -1), "number" != typeof i && (i = -1), u = {
                            id: -1,
                            sourceId: -1,
                            sourceOriginId: -1,
                            songleId: t.id,
                            songleCode: t.code,
                            lyricId: n,
                            lyricDiffId: i,
                            title: null,
                            log: null,
                            background: null,
                            config: null,
                            json: null,
                            synthJson: null,
                            author: null,
                            createdDate: null,
                            accessCount: -1,
                            altUrl: null
                        }, [
                            2,
                            this.onVideoLoad(u, e)
                        ];
                }
            });
        });
    }, t.prototype.createFromText = function(t, e) {
        return yn(this, 0, void 0, function() {
            var r, n, i, o, s, a;
            return gn(this, function(u) {
                switch(u.label){
                    case 0:
                        return [
                            4,
                            this.managers.text.parse(t)
                        ];
                    case 1:
                        return r = u.sent(), n = r && "success" === r.status ? this.createVideoDataFromParsedText(r, t) : this.createVideoDataFromText(t), i = n[n.length - 1], o = i && i.words[i.words.length - 1], s = o && o.characters[o.characters.length - 1], a = s ? s.endTime : 0, [
                            2,
                            this.createFromJSON({
                                phrases: n,
                                startTime: 0,
                                endTime: a,
                                duration: a
                            }, e)
                        ];
                }
            });
        });
    }, t.prototype.createFromJSON = function(t, e) {
        var r = {
            id: -1,
            sourceId: -1,
            sourceOriginId: -1,
            songleId: -1,
            lyricId: -1,
            lyricDiffId: -1,
            title: null,
            log: null,
            background: null,
            config: null,
            json: t,
            synthJson: null,
            author: null,
            createdDate: null,
            accessCount: -1,
            altUrl: null
        };
        return this.onVideoLoad(r, e);
    }, t.prototype.createVideoDataFromParsedText = function(t, e) {
        var r = 0, n = e.split(/\r\n|[\n\v\f\r\x85\u2028\u2029]/);
        return t.result.map(function(t, e) {
            return {
                words: t.map(function(t) {
                    return {
                        characters: n[e].substr(t.startPosition, t.wordLength).split("").map(function(t) {
                            return {
                                char: t,
                                startTime: 300 * r,
                                endTime: 300 * ++r
                            };
                        }),
                        pos: t.PoS,
                        rawPoS: t.rawPoS,
                        language: t.language
                    };
                }),
                templates: [
                    {
                        type: "DefaultAlignment"
                    }
                ]
            };
        });
    }, t.prototype.createVideoDataFromText = function(t) {
        for(var e, r = {
            characters: []
        }, n = {
            words: [
                r
            ],
            templates: [
                {
                    type: "DefaultAlignment"
                }
            ]
        }, i = 0, o = [
            n
        ], s = 0; s < t.length; s++){
            var a = t.charAt(s);
            "\n" !== a ? " " !== a ? (e = {
                char: a,
                startTime: 300 * i,
                endTime: 300 * ++i
            }, r.characters.push(e)) : (r = {
                characters: []
            }, n.words.push(r)) : (n = {
                words: [
                    r = {
                        characters: []
                    }
                ],
                templates: [
                    {
                        type: "DefaultAlignment"
                    }
                ]
            }, o.push(n));
        }
        return r.characters.length <= 0 && n.words.pop(), n.words.length <= 0 && o.pop(), o;
    }, t;
}(), Vn = function() {
    function t(t, e, r) {
        void 0 === e && (e = null);
        var n = this;
        this.managers = t, this.listener = e, this.options = r, this.fontLoader = new Rn(t.font, function() {
            return n.text;
        }, e);
    }
    return Object.defineProperty(t.prototype, "permalink", {
        get: function() {
            var t;
            return "https://textalive.jp".concat((null === (t = this.song) || void 0 === t ? void 0 : t.permalink) ? "/songs/".concat(encodeURIComponent(c.getSongPathFromUrl(this.song.permalink))) : "");
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "video", {
        get: function() {
            var t;
            return null === (t = this.videoProvider) || void 0 === t ? void 0 : t.video;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "song", {
        get: function() {
            var t, e;
            return null === (e = null === (t = this.songProvider) || void 0 === t ? void 0 : t.song) || void 0 === e ? void 0 : e.song;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "songStatus", {
        get: function() {
            var t, e;
            return null === (e = null === (t = this.songProvider) || void 0 === t ? void 0 : t.song) || void 0 === e ? void 0 : e.status;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "songMap", {
        get: function() {
            var t;
            return null === (t = this.songProvider) || void 0 === t ? void 0 : t.analysis;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "lyricsId", {
        get: function() {
            var t, e;
            return null === (e = null === (t = this.textProvider) || void 0 === t ? void 0 : t.lyrics) || void 0 === e ? void 0 : e.id;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "lyrics", {
        get: function() {
            var t;
            return null === (t = this.textProvider) || void 0 === t ? void 0 : t.lyrics;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "lyricsBody", {
        get: function() {
            var t;
            return null === (t = this.textProvider) || void 0 === t ? void 0 : t.lyricsBody;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "text", {
        get: function() {
            var t, e;
            return null === (e = null === (t = this.textProvider) || void 0 === t ? void 0 : t.lyricsBody) || void 0 === e ? void 0 : e.text;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "fonts", {
        get: function() {
            return this.fontLoader;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.createFromVideoId = function(t, e) {
        return yn(this, 0, void 0, function() {
            var r;
            return gn(this, function(n) {
                switch(n.label){
                    case 0:
                        return r = this, [
                            4,
                            new Bn(this.managers, this.listener).createFromVideoId(t, e)
                        ];
                    case 1:
                        return r.videoProvider = n.sent(), [
                            2,
                            this.videoProvider
                        ];
                }
            });
        });
    }, t.prototype.createFromVideo = function(t, e) {
        return this.videoProvider = new Bn(this.managers, this.listener).createFromVideo(t, e), this.videoProvider;
    }, t.prototype.createFromSongUrl = function(t, e) {
        return yn(this, 0, void 0, function() {
            var r;
            return gn(this, function(n) {
                switch(n.label){
                    case 0:
                        return r = this, [
                            4,
                            new Bn(this.managers, this.listener).createFromSongUrl(t, e)
                        ];
                    case 1:
                        return r.videoProvider = n.sent(), [
                            2,
                            this.videoProvider
                        ];
                }
            });
        });
    }, t.prototype.createFromSongPath = function(t, e) {
        return yn(this, 0, void 0, function() {
            var r;
            return gn(this, function(n) {
                switch(n.label){
                    case 0:
                        return r = this, [
                            4,
                            new Bn(this.managers, this.listener).createFromSongPath(t, e)
                        ];
                    case 1:
                        return r.videoProvider = n.sent(), [
                            2,
                            this.videoProvider
                        ];
                }
            });
        });
    }, t.prototype.createFromSongId = function(t, e) {
        return yn(this, 0, void 0, function() {
            var r;
            return gn(this, function(n) {
                switch(n.label){
                    case 0:
                        return r = this, [
                            4,
                            new Bn(this.managers, this.listener).createFromSongId(t, e)
                        ];
                    case 1:
                        return r.videoProvider = n.sent(), [
                            2,
                            this.videoProvider
                        ];
                }
            });
        });
    }, t.prototype.createFromSongCode = function(t, e) {
        return yn(this, 0, void 0, function() {
            var r;
            return gn(this, function(n) {
                switch(n.label){
                    case 0:
                        return r = this, [
                            4,
                            new Bn(this.managers, this.listener).createFromSongCode(t, e)
                        ];
                    case 1:
                        return r.videoProvider = n.sent(), [
                            2,
                            this.videoProvider
                        ];
                }
            });
        });
    }, t.prototype.createFromText = function(t, e) {
        return yn(this, 0, void 0, function() {
            var r;
            return gn(this, function(n) {
                switch(n.label){
                    case 0:
                        return r = this, [
                            4,
                            new Bn(this.managers, this.listener).createFromText(t, e)
                        ];
                    case 1:
                        return r.videoProvider = n.sent(), [
                            2,
                            this.videoProvider
                        ];
                }
            });
        });
    }, t.prototype.createFromJSON = function(t, e) {
        return this.videoProvider = new Bn(this.managers, this.listener).createFromJSON(t, e), this.videoProvider;
    }, t.prototype.finalize = function(t) {
        return yn(this, 0, void 0, function() {
            return gn(this, function(e) {
                switch(e.label){
                    case 0:
                        return this.video ? [
                            4,
                            this.loadSong()
                        ] : [
                            2,
                            null
                        ];
                    case 1:
                        return e.sent(), [
                            4,
                            this.loadText(t)
                        ];
                    case 2:
                        return e.sent(), [
                            4,
                            this.loadFonts()
                        ];
                    case 3:
                        return e.sent(), [
                            2
                        ];
                }
            });
        });
    }, t.prototype.mockSongInfo = function(t) {
        this.songProvider = new Ln(this.managers.song, this.listener, this.options).mockSongInfo(t);
    }, t.prototype.loadSong = function() {
        return yn(this, 0, void 0, function() {
            var t;
            return gn(this, function(e) {
                switch(e.label){
                    case 0:
                        return t = this, [
                            4,
                            new Ln(this.managers.song, this.listener, this.options).loadSong(this.video.songleCode || this.video.songleId, this.video)
                        ];
                    case 1:
                        return t.songProvider = e.sent(), [
                            2
                        ];
                }
            });
        });
    }, t.prototype.loadText = function(t) {
        var e, r;
        return yn(this, 0, void 0, function() {
            var n, i, o, s, a, u, c, l;
            return gn(this, function(p) {
                switch(p.label){
                    case 0:
                        return n = this.video, i = n.lyricId, o = n.lyricDiffId, s = this.song ? this.song.code : null, a = new Dn(this.managers, this.listener, this.options), !s && i < 0 ? (u = a.loadRawText(null === (e = this.videoProvider) || void 0 === e ? void 0 : e.data), [
                            3,
                            3
                        ]) : [
                            3,
                            1
                        ];
                    case 1:
                        return c = (null == t ? void 0 : t.altLyricsUrl) || void 0, l = (null == t ? void 0 : t.lyricsDirectAccess) || void 0, [
                            4,
                            a.loadLyrics({
                                songCode: s,
                                lyricId: i,
                                lyricDiffId: o,
                                altLyricsUrl: c,
                                directAccess: l
                            })
                        ];
                    case 2:
                        u = p.sent(), p.label = 3;
                    case 3:
                        return this.textProvider = u, (null == u ? void 0 : u.lyrics) && (null === (r = null == u ? void 0 : u.lyricsBody) || void 0 === r ? void 0 : r.text) && this.importLyrics(), [
                            2
                        ];
                }
            });
        });
    }, t.prototype.loadFonts = function() {
        var t, e, r;
        return yn(this, 0, void 0, function() {
            return gn(this, function(n) {
                switch(n.label){
                    case 0:
                        return "number" == typeof this.video.id && this.video.id >= 0 ? [
                            4,
                            this.fontLoader.loadForVideo(null === (t = this.videoProvider) || void 0 === t ? void 0 : t.data)
                        ] : [
                            3,
                            2
                        ];
                    case 1:
                    case 3:
                    case 5:
                        return n.sent(), [
                            2
                        ];
                    case 2:
                        return Array.isArray(null === (e = this.options) || void 0 === e ? void 0 : e.fontFamilies) ? [
                            4,
                            this.fontLoader.load(this.options.fontFamilies)
                        ] : [
                            3,
                            4
                        ];
                    case 4:
                        return null !== (null === (r = this.options) || void 0 === r ? void 0 : r.fontFamilies) ? [
                            3,
                            6
                        ] : [
                            4,
                            this.fontLoader.loadAll()
                        ];
                    case 6:
                        return [
                            2
                        ];
                }
            });
        });
    }, t.prototype.importLyrics = function() {
        var t = this.text.replace(/[\s\r\n]/g, ""), e = 0, r = {
            phrases: this.lyrics.data.map(function(r) {
                return {
                    words: r.map(function(r) {
                        return {
                            characters: r.map(function(r) {
                                return {
                                    char: t.charAt(e++),
                                    startTime: 1e3 * r.start_time,
                                    endTime: 1e3 * r.end_time
                                };
                            })
                        };
                    })
                };
            })
        };
        this.video.json && Array.isArray(this.video.json.phrases) ? this.video.json.phrases.forEach(function(t, e) {
            t.words.forEach(function(t, n) {
                t.characters.forEach(function(t, i) {
                    var o = r.phrases[e].words[n].characters[i];
                    t.char = o.char, t.startTime = o.startTime, t.endTime = o.endTime;
                });
            });
        }) : this.video.json = r;
    }, t.prototype.getChoruses = function() {
        var t;
        return null === (t = this.songProvider) || void 0 === t ? void 0 : t.getChoruses();
    }, t.prototype.findChorus = function(t, e) {
        var r;
        return null === (r = this.songProvider) || void 0 === r ? void 0 : r.findChorus(t, e);
    }, t.prototype.findChorusBetween = function(t, e) {
        var r;
        return null === (r = this.songProvider) || void 0 === r ? void 0 : r.findChorusBetween(t, e);
    }, t.prototype.findChorusChange = function(t, e) {
        var r;
        return null === (r = this.songProvider) || void 0 === r ? void 0 : r.findChorusChange(t, e);
    }, t.prototype.getBeats = function() {
        var t;
        return null === (t = this.songProvider) || void 0 === t ? void 0 : t.getBeats();
    }, t.prototype.findBeat = function(t, e) {
        var r;
        return null === (r = this.songProvider) || void 0 === r ? void 0 : r.findBeat(t, e);
    }, t.prototype.findBeatChange = function(t, e) {
        var r;
        return null === (r = this.songProvider) || void 0 === r ? void 0 : r.findBeatChange(t, e);
    }, t.prototype.getChords = function() {
        var t;
        return null === (t = this.songProvider) || void 0 === t ? void 0 : t.getChords();
    }, t.prototype.findChord = function(t, e) {
        var r;
        return null === (r = this.songProvider) || void 0 === r ? void 0 : r.findChord(t, e);
    }, t.prototype.findChordChange = function(t, e) {
        var r;
        return null === (r = this.songProvider) || void 0 === r ? void 0 : r.findChordChange(t, e);
    }, t.prototype.getVocalFrequency = function(t) {
        var e;
        return null === (e = this.songProvider) || void 0 === e ? void 0 : e.getVocalFrequency(t);
    }, t.prototype.getVocalAmplitude = function(t) {
        var e;
        return null === (e = this.songProvider) || void 0 === e ? void 0 : e.getVocalAmplitude(t);
    }, t.prototype.getMaxVocalAmplitude = function() {
        var t;
        return null === (t = this.songProvider) || void 0 === t ? void 0 : t.getMaxVocalAmplitude();
    }, t.prototype.getValenceArousal = function(t) {
        var e;
        return null === (e = this.songProvider) || void 0 === e ? void 0 : e.getValenceArousal(t);
    }, t.prototype.getMedianValenceArousal = function() {
        var t;
        return null === (t = this.songProvider) || void 0 === t ? void 0 : t.getMedianValenceArousal();
    }, t;
}(), Gn = function() {
    function t(t, e) {
        this.player = t, this.listener = e, this.initialize();
    }
    return Object.defineProperty(t.prototype, "options", {
        get: function() {
            return this._options ? fn({}, this._options) : null;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "name", {
        get: function() {
            return this._name;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "author", {
        get: function() {
            return this._author;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "status", {
        get: function() {
            return this._status;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "server", {
        get: function() {
            return this._server;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "managed", {
        get: function() {
            return !!this._host;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "host", {
        get: function() {
            return this._host;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "songUrl", {
        get: function() {
            return this._songUrl;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "songOptions", {
        get: function() {
            return this._songOptions;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "parameters", {
        get: function() {
            return this._parameters;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "isConnecting", {
        get: function() {
            return !!this.connecting;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.initialize = function() {
        var t, e, r, n;
        return yn(this, 0, void 0, function() {
            return gn(this, function(i) {
                switch(i.label){
                    case 0:
                        return this._options = null === (e = null === (t = this.player) || void 0 === t ? void 0 : t.options) || void 0 === e ? void 0 : e.app, this._options && (this._options = fn({}, this._options), this._name = null === (r = this._options) || void 0 === r ? void 0 : r.appName, this._author = null === (n = this._options) || void 0 === n ? void 0 : n.appAuthor, this._options.token && (m.textalive.appToken = this._options.token)), this._parameters = {}, this.parseQueryString(), this.initializeServerConnection(), "undefined" != typeof window && this._options ? [
                            4,
                            this.connect()
                        ] : [
                            3,
                            2
                        ];
                    case 1:
                        i.sent(), this.initializePlayerListener(), this.initializeMessageListener(), i.label = 2;
                    case 2:
                        return this._songUrl && this.createFromSongUrl(), [
                            2
                        ];
                }
            });
        });
    }, t.prototype.initializeServerConnection = function() {
        var t, e, r, n, i, o;
        return yn(this, 0, void 0, function() {
            var s, a, u, c, l;
            return gn(this, function(p) {
                switch(p.label){
                    case 0:
                        return [
                            4,
                            A.getServerStatus()
                        ];
                    case 1:
                        return s = p.sent(), a = "ja" === (null == s ? void 0 : s.lang), m.textalive.appToken && (null == s ? void 0 : s.app) && (s.app.data && (this._name = null === (t = s.app.data) || void 0 === t ? void 0 : t.name, this._author = null === (r = null === (e = s.app) || void 0 === e ? void 0 : e.data) || void 0 === r ? void 0 : r.author, u = null === (i = null === (n = s.app) || void 0 === n ? void 0 : n.data) || void 0 === i ? void 0 : i.status, this._status = "number" == typeof u ? u : -1), this._server = {
                            version: s.version,
                            message: s.app.message,
                            error: s.app.error
                        }, !this._server.error) ? (c = this._server.message ? "\n".concat(this._server.message) : "", a ? console.info("[TextAlive API] \u30AF\u30E9\u30A4\u30A2\u30F3\u30C8 v".concat(m.client.version, " \u3067\u30B5\u30FC\u30D0 v").concat(this._server.version || "0.0.0", " \u306B\u63A5\u7D9A").concat(c)) : console.info("[TextAlive API] App API client v".concat(m.client.version, " connected to server v").concat(this._server.version || "0.0.0").concat(c)), this.listener.onAppLoad(this), [
                            2
                        ]) : (l = (null === (o = this._server) || void 0 === o ? void 0 : o.error) ? "\n".concat(this._server.error) : "", a ? console.warn("[TextAlive API] \u3053\u306E\u30A2\u30D7\u30EA\u306F\u30C8\u30FC\u30AF\u30F3\u304C\u6B63\u3057\u304F\u6307\u5B9A\u3055\u308C\u3066\u3044\u306A\u3044\u305F\u3081\u52D5\u4F5C\u3057\u307E\u305B\u3093\u3002 https://developer.textalive.jp \u304B\u3089\u30C8\u30FC\u30AF\u30F3\u3092\u5165\u624B\u3057\u3066\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002".concat(l)) : console.warn("[TextAlive API] This app requires a valid app token to run properly. You could get a token from https://developer.textalive.jp. ".concat(l)), this.listener.onAppLoad(null, l), [
                            2
                        ]);
                }
            });
        });
    }, t.prototype.initializePlayerListener = function() {
        var t = this;
        this.playerListener = {
            onVideoReady: function(e) {
                t._host && window.parent.postMessage({
                    kind: "ta_video",
                    options: {
                        lyrics: !!t.player.data.lyrics,
                        duration: t.player.video.duration
                    }
                }, "*");
            },
            onThrottledTimeUpdate: function(e) {
                t._host && window.parent.postMessage({
                    kind: "ta_position",
                    options: {
                        position: e
                    }
                }, "*");
            },
            onPlay: function() {
                t._host && window.parent.postMessage({
                    kind: "ta_status",
                    options: {
                        status: "play"
                    }
                }, "*");
            },
            onPause: function() {
                t._host && window.parent.postMessage({
                    kind: "ta_status",
                    options: {
                        status: "pause"
                    }
                }, "*");
            },
            onStop: function() {
                t._host && window.parent.postMessage({
                    kind: "ta_status",
                    options: {
                        status: "stop"
                    }
                }, "*");
            },
            onVolumeUpdate: function(e) {
                t._host && window.parent.postMessage({
                    kind: "ta_volume",
                    options: {
                        volume: e
                    }
                }, "*");
            },
            onDispose: function() {
                t.dispose();
            }
        }, this.player.addListener(this.playerListener);
    }, t.prototype.initializeMessageListener = function() {
        var t = this;
        this.messageListener = function(e) {
            if (e.data.kind && /^ta_/.test(e.data.kind)) {
                var r = t.player;
                switch(e.data.kind.substring(3)){
                    case "status":
                        switch(e.data.options.status){
                            case "play":
                                r.requestPlay();
                                break;
                            case "pause":
                                r.requestPause();
                                break;
                            case "stop":
                                r.requestStop();
                        }
                        break;
                    case "seek":
                        r.requestMediaSeek(e.data.options.position);
                        break;
                    case "volume":
                        r.volume = e.data.options.volume;
                        break;
                    case "parameter":
                        var n = e.data.options, i = n.name, o = n.value;
                        t.parameters[i] = o, t.listener.onAppParameterUpdate(i, o);
                        break;
                    case "media":
                        t._songUrl = e.data.options.url, t._songOptions = e.data.options.options || {}, r.requestStop();
                        var s = t.createFromSongUrl();
                        t.listener.onAppMediaChange(t._songUrl, s);
                }
            }
        }, window.addEventListener("message", this.messageListener);
    }, t.prototype.createFromSongUrl = function() {
        var t, e = this._songOptions;
        return e && (t = {
            video: {}
        }, e.altLyricsUrl && (t.altLyricsUrl = e.altLyricsUrl), e.lyricsDirectAccess && (t.lyricsDirectAccess = e.lyricsDirectAccess), e.lyricId && (t.video.lyricId = e.lyricId), e.lyricDiffId && (t.video.lyricDiffId = e.lyricDiffId), e.chordId && (t.video.chordId = e.chordId), e.beatId && (t.video.beatId = e.beatId), e.repetitiveSegmentId && (t.video.repetitiveSegmentId = e.repetitiveSegmentId)), this.player.createFromSongUrl(this._songUrl, t);
    }, t.prototype.parseQueryString = function() {
        var t = pn("ta_app_token");
        t && (m.textalive.appToken = t), this._songUrl = pn("ta_song_url"), this._songOptions = {};
        var e = pn("ta_lyric_id");
        e && (this._songOptions.lyricId = parseInt(e), isNaN(this._songOptions.lyricId) && delete this._songOptions.lyricId);
        var r = pn("ta_lyric_diff_id");
        r && (this._songOptions.lyricDiffId = parseInt(r), isNaN(this._songOptions.lyricDiffId) && delete this._songOptions.lyricDiffId);
        var n = pn("ta_alt_lyrics_url");
        n && (this._songOptions.altLyricsUrl = n);
        var i = pn("ta_lyrics_direct_access");
        i && (this._songOptions.lyricsDirectAccess = "true" === i, this._songOptions.lyricsDirectAccess || delete this._songOptions.lyricsDirectAccess);
        var o = pn("ta_chord_id");
        o && (this._songOptions.chordId = parseInt(o), isNaN(this._songOptions.chordId) && delete this._songOptions.chordId);
        var s = pn("ta_beat_id");
        s && (this._songOptions.beatId = parseInt(s), isNaN(this._songOptions.beatId) && delete this._songOptions.beatId);
        var a = pn("ta_repetitive_segment_id");
        a && (this._songOptions.repetitiveSegmentId = parseInt(a), isNaN(this._songOptions.repetitiveSegmentId) && delete this._songOptions.repetitiveSegmentId);
    }, t.prototype.connect = function() {
        return yn(this, 0, void 0, function() {
            var t, e = this;
            return gn(this, function(r) {
                switch(r.label){
                    case 0:
                        return this.connecting ? [
                            2,
                            this.connecting
                        ] : "undefined" != typeof window && this.options && window.parent && window !== window.parent ? [
                            3,
                            2
                        ] : [
                            4,
                            new Promise(function(t) {
                                return setTimeout(t, 1);
                            })
                        ];
                    case 1:
                        return r.sent(), this.listener.onAppReady(this), [
                            2,
                            !1
                        ];
                    case 2:
                        return this.connecting = Promise.race([
                            new Promise(function(r) {
                                t = function(n) {
                                    n.data.kind && /^ta_/.test(n.data.kind) && "ack" === n.data.kind.substring(3) && (window.removeEventListener("message", t), e._host = n.data.options, r(!0));
                                }, window.addEventListener("message", t);
                            }),
                            yn(e, 0, void 0, function() {
                                var e;
                                return gn(this, function(r) {
                                    switch(r.label){
                                        case 0:
                                            e = 0, r.label = 1;
                                        case 1:
                                            return e < 5 ? (window.parent.postMessage({
                                                kind: "ta_connect",
                                                options: this.options
                                            }, "*"), [
                                                4,
                                                new Promise(function(t) {
                                                    return setTimeout(t, 200);
                                                })
                                            ]) : [
                                                3,
                                                4
                                            ];
                                        case 2:
                                            if (r.sent(), this._host) return [
                                                3,
                                                4
                                            ];
                                            r.label = 3;
                                        case 3:
                                            return e++, [
                                                3,
                                                1
                                            ];
                                        case 4:
                                            return !this._host && t && window.removeEventListener("message", t), [
                                                2,
                                                !!this._host
                                            ];
                                    }
                                });
                            })
                        ]), this.connecting.finally(function() {
                            e.connecting = null, e.listener.onAppReady(e);
                        }), [
                            2,
                            this.connecting
                        ];
                }
            });
        });
    }, t.prototype.dispose = function() {
        "undefined" != typeof window && this.options && (this.player.removeListener(this.playerListener), window.removeEventListener("message", this.messageListener)), this._host = null, this.player = null;
    }, t;
}();
function qn(t) {
    return t;
}
function Wn(t) {
    return t < -1 ? t = -1 : t > 1 && (t = 1), function(e) {
        return 0 == t ? e : t < 0 ? e * (e * -t + 1 + t) : e * ((2 - e) * t + (1 - t));
    };
}
function Yn(t) {
    return function(e) {
        return Math.pow(e, t);
    };
}
function zn(t) {
    return function(e) {
        return 1 - Math.pow(1 - e, t);
    };
}
function Jn(t) {
    return function(e) {
        return (e *= 2) < 1 ? .5 * Math.pow(e, t) : 1 - .5 * Math.abs(Math.pow(2 - e, t));
    };
}
var Hn = Yn(2), Xn = zn(2), Zn = Jn(2), $n = Yn(3), Kn = zn(3), Qn = Jn(3), ti = Yn(4), ei = zn(4), ri = Jn(4), ni = Yn(5), ii = zn(5), oi = Jn(5);
function si(t) {
    return 1 - Math.cos(t * Math.PI / 2);
}
function ai(t) {
    return Math.sin(t * Math.PI / 2);
}
function ui(t) {
    return -0.5 * (Math.cos(Math.PI * t) - 1);
}
function ci(t) {
    return function(e) {
        return e * e * ((t + 1) * e - t);
    };
}
var li = ci(1.7);
function pi(t) {
    return function(e) {
        return --e * e * ((t + 1) * e + t) + 1;
    };
}
var hi = pi(1.7);
function di(t) {
    return t *= 1.525, function(e) {
        return (e *= 2) < 1 ? e * e * ((t + 1) * e - t) * .5 : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2);
    };
}
var fi = di(1.7);
function yi(t) {
    return -(Math.sqrt(1 - t * t) - 1);
}
function gi(t) {
    return Math.sqrt(1 - --t * t);
}
function vi(t) {
    return (t *= 2) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
}
function mi(t) {
    return 1 - bi(1 - t);
}
function bi(t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
}
function _i(t) {
    return t < .5 ? .5 * mi(2 * t) : .5 * bi(2 * t - 1) + .5;
}
function wi(t, e) {
    var r = 2 * Math.PI;
    return function(n) {
        if (0 == n || 1 == n) return n;
        var i = e / r * Math.asin(1 / t);
        return -t * Math.pow(2, 10 * (n -= 1)) * Math.sin((n - i) * r / e);
    };
}
var Pi = wi(1, .3);
function Ei(t, e) {
    var r = 2 * Math.PI;
    return function(n) {
        if (0 == n || 1 == n) return n;
        var i = e / r * Math.asin(1 / t);
        return t * Math.pow(2, -10 * n) * Math.sin((n - i) * r / e) + 1;
    };
}
var Oi = Ei(1, .3);
function Si(t, e) {
    var r = 2 * Math.PI;
    return function(n) {
        var i = e / r * Math.asin(1 / t);
        return (n *= 2) < 1 ? t * Math.pow(2, 10 * (n -= 1)) * Math.sin((n - i) * r / e) * -0.5 : t * Math.pow(2, -10 * (n -= 1)) * Math.sin((n - i) * r / e) * .5 + 1;
    };
}
var Ti = Si(1, .3 * 1.5), xi = Object.freeze({
    __proto__: null,
    backIn: li,
    backInOut: fi,
    backOut: hi,
    bounceIn: mi,
    bounceInOut: _i,
    bounceOut: bi,
    circIn: yi,
    circInOut: vi,
    circOut: gi,
    cubicIn: $n,
    cubicInOut: Qn,
    cubicOut: Kn,
    elasticIn: Pi,
    elasticInOut: Ti,
    elasticOut: Oi,
    get: Wn,
    getBackIn: ci,
    getBackInOut: di,
    getBackOut: pi,
    getElasticIn: wi,
    getElasticInOut: Si,
    getElasticOut: Ei,
    getPowIn: Yn,
    getPowInOut: Jn,
    getPowOut: zn,
    linear: qn,
    quadIn: Hn,
    quadInOut: Zn,
    quadOut: Xn,
    quartIn: ti,
    quartInOut: ri,
    quartOut: ei,
    quintIn: ni,
    quintInOut: oi,
    quintOut: ii,
    sineIn: si,
    sineInOut: ui,
    sineOut: ai
}), Ai = function() {
    function t() {}
    return t.linear = qn, t.get = Wn, t.getPowIn = Yn, t.getPowOut = zn, t.getPowInOut = Jn, t.quadIn = Hn, t.quadOut = Xn, t.quadInOut = Zn, t.cubicIn = $n, t.cubicOut = Kn, t.cubicInOut = Qn, t.quartIn = ti, t.quartOut = ei, t.quartInOut = ri, t.quintIn = ni, t.quintOut = ii, t.quintInOut = oi, t.sineIn = si, t.sineOut = ai, t.sineInOut = ui, t.getBackIn = ci, t.backIn = li, t.getBackOut = pi, t.backOut = hi, t.getBackInOut = di, t.backInOut = fi, t.circIn = yi, t.circOut = gi, t.circInOut = vi, t.bounceIn = mi, t.bounceOut = bi, t.bounceInOut = _i, t.getElasticIn = wi, t.elasticIn = Pi, t.getElasticOut = Ei, t.elasticOut = Oi, t.getElasticInOut = Si, t.elasticInOut = Ti, t;
}(), Ri = function() {
    function t() {
        this.cursor = -1, this.widgets = [], this.instances = [], this.model = {
            id: -1,
            type: n.NONE,
            sourceId: -1,
            author: null,
            originalAuthor: null,
            className: null,
            createdDate: null
        };
    }
    return Object.defineProperty(t.prototype, "id", {
        get: function() {
            return this.model ? this.model.id : -1;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "script", {
        get: function() {
            return this.model ? this.model.script : null;
        },
        enumerable: !1,
        configurable: !0
    }), t;
}(), Ci = function() {}, Ni = function() {
    function t(t, e) {
        this.onTemplateLoad = e, this._emitter = null, this._loaded = null, this._loading = null, this.verbose = !1, this._emitter = t, this.clear();
    }
    return Object.defineProperty(t.prototype, "loaded", {
        get: function() {
            return this._loaded;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "loading", {
        get: function() {
            return this._loading;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.clear = function() {
        this._loaded = {}, this._loading = {};
    }, t.prototype.loadLatest = function(t) {
        return void 0 === t && (t = 100), yn(this, 0, void 0, function() {
            var e;
            return gn(this, function(r) {
                switch(r.label){
                    case 0:
                        return [
                            4,
                            q.list({
                                maxResults: t,
                                withoutAuthors: !0,
                                withoutOriginalAuthors: !0,
                                script: !0
                            })
                        ];
                    case 1:
                        return (e = r.sent()) && e.list ? (this.verbose && console.log("--- loading template classes ---"), [
                            2,
                            this.registerMany(e.list)
                        ]) : [
                            2
                        ];
                }
            });
        });
    }, t.prototype.loadForVideo = function(t) {
        return yn(this, 0, void 0, function() {
            var e, r = this;
            return gn(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            q.loadForVideo(t)
                        ];
                    case 1:
                        return (e = n.sent()) && e.list ? (this.verbose && console.log("--- loading template classes for vid:".concat(t, " ---")), [
                            4,
                            this.registerMany(e.list)
                        ]) : [
                            2,
                            null
                        ];
                    case 2:
                        return [
                            2,
                            n.sent().map(function(t) {
                                return t ? r.getByName(t) : null;
                            })
                        ];
                }
            });
        });
    }, t.prototype.loadByNames = function(t) {
        return yn(this, 0, void 0, function() {
            var e, r = this;
            return gn(this, function(n) {
                switch(n.label){
                    case 0:
                        return !Array.isArray(t) || t.length <= 0 ? [
                            2,
                            []
                        ] : (this.verbose && console.log("--- loading template classes ---"), [
                            4,
                            Promise.all(t.map(function(t) {
                                return r.doLoadByName(t);
                            }))
                        ]);
                    case 1:
                        return (e = n.sent()) && this._emitter.onTemplatesLoad(e.filter(function(t) {
                            return !!t;
                        }).map(function(t) {
                            return t.className;
                        })), [
                            2,
                            e
                        ];
                }
            });
        });
    }, t.prototype.loadByName = function(t) {
        return yn(this, 0, void 0, function() {
            var e, r;
            return gn(this, function(n) {
                switch(n.label){
                    case 0:
                        return n.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]), [
                            4,
                            this.doLoadByName(t)
                        ];
                    case 1:
                        return e = n.sent(), this._emitter.onTemplatesLoad([
                            e.className
                        ]), [
                            2,
                            e
                        ];
                    case 2:
                        return r = n.sent(), this._emitter.onTemplatesLoad(null, r), [
                            2,
                            null
                        ];
                    case 3:
                        return [
                            2
                        ];
                }
            });
        });
    }, t.prototype.doLoadByName = function(t) {
        return yn(this, 0, void 0, function() {
            var e, r, n = this;
            return gn(this, function(i) {
                return null !== (e = this.getByName(t)) ? [
                    2,
                    e
                ] : this._loading[t] ? [
                    2,
                    this._loading[t]
                ] : (r = new Promise(function(e) {
                    return q.loadByName(t).then(function(t) {
                        return n.onTemplateLoad(t);
                    }).then(e);
                }), this._loading[t] = r, r.finally(function() {
                    return delete n._loading[t];
                }), [
                    2,
                    r
                ]);
            });
        });
    }, t.prototype.loadById = function(t) {
        return yn(this, 0, void 0, function() {
            var e, r, n;
            return gn(this, function(i) {
                switch(i.label){
                    case 0:
                        return i.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]), [
                            4,
                            this.doLoadById(t)
                        ];
                    case 1:
                        return e = i.sent(), r = null, [
                            3,
                            3
                        ];
                    case 2:
                        return n = i.sent(), r = n, [
                            3,
                            3
                        ];
                    case 3:
                        return this._emitter.onTemplatesLoad(e ? [
                            e.className
                        ] : null, r), [
                            2,
                            e
                        ];
                }
            });
        });
    }, t.prototype.doLoadById = function(t) {
        return yn(this, 0, void 0, function() {
            var e, r, n = this;
            return gn(this, function(i) {
                return (e = this.getById(t)) ? [
                    2,
                    e
                ] : this._loading[t] ? [
                    2,
                    this._loading[t]
                ] : (r = new Promise(function(e) {
                    return q.load(t).then(function(t) {
                        return n.onTemplateLoad(t);
                    }).then(e);
                }), this._loading[t] = r, r.finally(function() {
                    return delete n._loading[t];
                }), [
                    2,
                    r
                ]);
            });
        });
    }, t.prototype.registerMany = function(t) {
        return yn(this, 0, void 0, function() {
            var e, r, n = this;
            return gn(this, function(i) {
                switch(i.label){
                    case 0:
                        return e = t.map(function(t) {
                            var e = n.onTemplateLoad(t);
                            return n._loading[t.className] = e, n._loading["".concat(t.className, "@").concat(t.id)] = e, e;
                        }), [
                            4,
                            Promise.all(e.map(function(t) {
                                return t.then(function(t) {
                                    return t.className;
                                }).catch(function(t) {
                                    return null;
                                });
                            }))
                        ];
                    case 1:
                        return r = i.sent().filter(function(t) {
                            return !!t;
                        }), this._emitter.onTemplatesLoad(r), [
                            2,
                            r
                        ];
                }
            });
        });
    }, t.prototype.commit = function(t, e) {
        return yn(this, 0, void 0, function() {
            var r;
            return gn(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            q.create({
                                sourceId: t.model.sourceId,
                                script: t.model.script,
                                log: e
                            })
                        ];
                    case 1:
                        return (r = n.sent()).success && (t.model.id = r.id, this._emitter.onTemplateCommit(t.className)), [
                            2,
                            r
                        ];
                }
            });
        });
    }, t.prototype.getByName = function(t, e) {
        var r;
        if (void 0 === e && (e = !1), t && (r = t.match(/(.+)@([0-9]+)/))) {
            t = r[1];
            var n = parseInt(r[2]);
            if (!this._loaded[t]) return null;
            var i = this._loaded[t].model;
            if (i.id !== n) {
                if (!e) return null;
                this.verbose && console.log("[warning] template ".concat(t, " version ").concat(n, " is requested but ").concat(i.id, " is used"));
            }
        }
        return this._loaded[t] ? this._loaded[t] : null;
    }, t.prototype.getById = function(t) {
        var e = null;
        for(var r in this._loaded)if (this._loaded[r].model.id === t) {
            e = this._loaded[r];
            break;
        }
        return e;
    }, t;
}(), ki = {
    Matrix2D: pt,
    Point: ht,
    Color: X,
    Font: Z,
    RenderingUnit: K,
    TextUnit: et,
    Graphic: nt,
    Phrase: ot,
    Word: it,
    Char: rt,
    Beat: Nn,
    RepetitiveSegment: jn
}, ji = [
    "headTime",
    "tailTime",
    "insomnia"
], Ii = [
    "animate",
    "getAssignedUnit",
    "name",
    "type"
], Ui = function() {
    function t(t, e, r) {
        this._emitter = null, this._player = null, this.interpreter = null, this.unsafeAcceleration = !1, this._verbose = !1, this.ignoreVersion = !1, this.rawConsole = !1, this._player = t, this._emitter = e, this.unsafeAcceleration = r, this.loader = new Ni(e, this.register.bind(this)), t.addListener({
            onVideoReady: this.onVideoReady.bind(this)
        });
    }
    return Object.defineProperty(t.prototype, "verbose", {
        get: function() {
            return this._verbose;
        },
        set: function(t) {
            this._verbose = this.loader.verbose = t;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "ready", {
        get: function() {
            return !!this.interpreter;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "loaded", {
        get: function() {
            return this.loader.loaded;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.initialize = function() {
        var t = this;
        if (!this.ready) {
            var e = function(t) {
                var e = t.player, r = t.ignoredPropNames, i = t.rawConsole, o = t.templateGetter, s = e.graphics.wrapperTable, a = new cn(fn(fn({}, ki), s), r, function(t, r) {
                    return e.graphics.isGraphics(t) && r instanceof X ? r.toString() : r;
                }), u = {
                    require: {
                        func: function(t) {
                            if (!(t.length < 1 || "string" != typeof t[0])) {
                                var e = t[0], r = o(e);
                                return null === r ? void 0 : r.functionDefinition;
                            }
                        },
                        raw: !0,
                        isConstructor: !0
                    },
                    print: {
                        func: function(t) {
                            e.isEditing && console.log.apply(console, t);
                        },
                        raw: i
                    },
                    findChorus: {
                        func: function(t) {
                            return t.length < 1 || "number" != typeof t[0] ? null : e.findChorus(t[0]);
                        }
                    },
                    findBeat: {
                        func: function(t) {
                            return t.length < 1 || "number" != typeof t[0] ? null : e.findBeat(t[0]);
                        }
                    },
                    getVocalFrequency: {
                        func: function(t) {
                            return t.length < 1 || "number" != typeof t[0] ? null : e.getVocalFrequency(t[0]);
                        }
                    },
                    getVocalAmplitude: {
                        func: function(t) {
                            return t.length < 1 || "number" != typeof t[0] ? -1 : e.getVocalAmplitude(t[0]);
                        }
                    },
                    getMaxVocalAmplitude: {
                        func: function(t) {
                            return e.getMaxVocalAmplitude();
                        }
                    },
                    getValenceArousal: {
                        func: function(t) {
                            return t.length < 1 || "number" != typeof t[0] ? null : e.getValenceArousal(t[0]);
                        }
                    },
                    getMedianValenceArousal: {
                        func: function(t) {
                            return e.getMedianValenceArousal();
                        }
                    }
                };
                Object.keys(n).forEach(function(t) {
                    a.setProperty(a.globalScope, t, n[t]), u[t] = {
                        value: n[t]
                    };
                }), Object.keys(xi).forEach(function(t) {
                    var e = xi[t];
                    0 !== t.indexOf("get") && (u[t] = {
                        func: e
                    });
                });
                var c = Object.keys(a.wrapperTable);
                return c && c.forEach(function(t) {
                    return u[t] = {
                        cls: a.wrapperTable[t]
                    };
                }), Object.keys(u).forEach(function(t) {
                    var e = u[t];
                    e.func ? a.createGlobalFunction(t, e) : e.value && a.setProperty(a.globalScope, t, e.value);
                }), {
                    interpreter: a,
                    unsafeGlobalScope: u
                };
            }({
                player: this._player,
                ignoredPropNames: Ii,
                rawConsole: this.rawConsole,
                templateGetter: function(e) {
                    return t.getByName(e, !0);
                }
            }), r = e.interpreter, i = e.unsafeGlobalScope;
            this.unsafeGlobalScope = i, this.interpreter = r, this.onVideoReady(this._player.video);
        }
    }, t.prototype.getByName = function(t, e) {
        return void 0 === e && (e = !1), this.loader.getByName(t, e);
    }, t.prototype.getById = function(t) {
        return this.loader.getById(t);
    }, t.prototype.clear = function() {
        this.loader.clear();
    }, t.prototype.loadLatest = function(t) {
        return void 0 === t && (t = 100), yn(this, 0, void 0, function() {
            return gn(this, function(e) {
                return this.ready || this.initialize(), [
                    2,
                    this.loader.loadLatest(t)
                ];
            });
        });
    }, t.prototype.loadForVideo = function(t) {
        return yn(this, 0, void 0, function() {
            return gn(this, function(e) {
                return this.ready || this.initialize(), [
                    2,
                    this.loader.loadForVideo(t)
                ];
            });
        });
    }, t.prototype.loadByNames = function(t) {
        return yn(this, 0, void 0, function() {
            return gn(this, function(e) {
                return this.ready || this.initialize(), [
                    2,
                    this.loader.loadByNames(t)
                ];
            });
        });
    }, t.prototype.loadByName = function(t) {
        return yn(this, 0, void 0, function() {
            return gn(this, function(e) {
                return this.ready || this.initialize(), [
                    2,
                    this.loader.loadByName(t)
                ];
            });
        });
    }, t.prototype.loadById = function(t) {
        return yn(this, 0, void 0, function() {
            return gn(this, function(e) {
                return this.ready || this.initialize(), [
                    2,
                    this.loader.loadById(t)
                ];
            });
        });
    }, t.prototype.commit = function(t, e) {
        return yn(this, 0, void 0, function() {
            return gn(this, function(r) {
                return [
                    2,
                    this.loader.commit(t, e)
                ];
            });
        });
    }, t.prototype.register = function(t) {
        return yn(this, 0, void 0, function() {
            var e, r, n, i, o, s, a = this;
            return gn(this, function(u) {
                switch(u.label){
                    case 0:
                        if (!t) return [
                            2,
                            null
                        ];
                        if ("number" == typeof t.sourceId) {
                            if (e = t, !(r = this.createClass(t.script))) return [
                                2,
                                null
                            ];
                        } else r = t;
                        n = nn(r.ast).dependencies, u.label = 1;
                    case 1:
                        return u.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]), [
                            4,
                            Promise.all(n.map(function(t) {
                                var e = a.getByName(t, a.ignoreVersion);
                                return e ? Promise.resolve(e) : a.loadByName(t);
                            }))
                        ];
                    case 2:
                        return u.sent(), this.verbose && console.log("load dependencies for", r.className, n), [
                            3,
                            4
                        ];
                    case 3:
                        return i = u.sent(), this.verbose && console.error("failed loading dependencies for", r.className, i), [
                            3,
                            4
                        ];
                    case 4:
                        try {
                            if (!(e ? this.loadModel(r, e) : this.createModel(r))) throw new Error("failed to create a template instance");
                            return [
                                2,
                                this.registerClass(r)
                            ];
                        } catch (t) {
                            throw o = void 0, e && (delete (s = fn({}, e)).script, o = s), {
                                error: t.message,
                                stack: t.stack,
                                cause: o
                            };
                        }
                        return [
                            2
                        ];
                }
            });
        });
    }, t.prototype.updateClassScript = function(t, e) {
        var r = this.createClass(e);
        return this.updateClass(t, r);
    }, t.prototype.registerClass = function(t) {
        if (!t) return null;
        if (this.loader.loaded[t.className]) {
            this.verbose && console.log("updating", t.className, t.model.id);
            var e = this.updateClass(this.loader.loaded[t.className], t);
            return this.verbose && console.log("updated", e.className, e.id), e;
        }
        return this.loader.loaded[t.className] = t, this.verbose && console.log("loaded", t.className, t.model.id), t;
    }, t.prototype.updateClass = function(t, e) {
        var r = t, n = e;
        if (!n) return null;
        if (r.model.script === n.model.script) return this.verbose && console.log("no diff for", r.className), r;
        if (!this.createModel(n)) return null;
        if (r.className !== n.className) {
            var i = this.getByName(n.className);
            if (!i) return n.cursor = r.cursor, this.loader.loaded[n.className] = n, this.verbose && console.log("create", n.className), n;
            r = i;
        }
        return r.newStatement = n.newStatement, r.widgets = n.widgets, r.scope = n.scope, r.functionDefinition = n.functionDefinition, r.newStatement = n.newStatement, r.unsafeConstructorGenerator = n.unsafeConstructorGenerator, r.ast = n.ast, r.cursor < 0 && (r.cursor = n.cursor), n.id >= 0 ? (this.verbose && console.log("replace", n.className, r.id, n.id), r.model = n.model) : (this.verbose && console.log("update", n.className, r.id, n.id), r.model.type = n.model.type, r.model.className = n.model.className, r.model.prettyName = n.model.prettyName, r.model.script = n.model.script, r.model.createdDate = null, r.id >= 0 && (r.model.sourceId = r.model.id, r.model.id = -1)), n = r, this.updateInstances(r.instances.slice(), n), this._emitter.onTemplateUpdate(n.className), n;
    }, t.prototype.loadModel = function(t, e) {
        var r = this.newRawInstance(t);
        return t.model = e, this.updateWidgetInitialValues(t, r), r;
    }, t.prototype.createModel = function(t) {
        var e = this.newRawInstance(t);
        if (null === e) return !1;
        if (t.id >= 0) return !0;
        var r = e.templateInstance, n = t.model.script;
        return t.model = {
            id: -1,
            sourceId: -1,
            className: t.className,
            prettyName: r ? this.interpreter.getProperty(r, "name") : e.unsafeTemplateInstance.name,
            type: r ? this.interpreter.getProperty(r, "type") : e.unsafeTemplateInstance.type,
            script: n,
            author: null,
            originalAuthor: null,
            createdDate: null
        }, this.updateWidgetInitialValues(t, e), e;
    }, t.prototype.updateWidgetInitialValues = function(t, e) {
        var r = this;
        t.widgets.forEach(function(t) {
            t.initialValue = r.getProperty(e, t.name);
        });
    }, t.prototype.updateInstances = function(t, e) {
        var r = this;
        t.forEach(function(t) {
            try {
                r.updateInstance(t, e);
            } catch (r) {
                console.log("failed updating template for", t.assignedUnit, ":", e);
            }
        }), this._player.isPlaying || this._player.requestStageUpdate();
    }, t.prototype.createClass = function(t) {
        var e = this;
        this.ready || this.initialize();
        var r = new Ri;
        r.model = {
            id: -1,
            sourceId: -1,
            className: null,
            prettyName: null,
            type: 0,
            script: t,
            author: null,
            originalAuthor: null,
            createdDate: null
        };
        var n = rn(t, Ii), i = n.ast, o = n.widgets;
        if (r.ast = i, r.widgets = o, r.className = r.ast.body[0].id.name, r.scope = this.interpreter.prepareRun(r.ast), this.interpreter.run(1e3, "to define " + r.className), r.functionDefinition = this.interpreter.getRawProperty(r.scope, r.className), r.newStatement = this.interpreter.newStatementFor(r.className), this.unsafeAcceleration) {
            var s = Object.keys(this.unsafeGlobalScope), a = Object.keys(this.getGlobalProperties()).map(function(t) {
                return "".concat(t, "=props.").concat(t);
            }).join(","), u = "return function(props){var ".concat(a, ";").concat(t, "return ").concat(r.className, ";}"), c = new (Function.bind.apply(Function, vn(vn([
                void 0
            ], s, !1), [
                u
            ], !1))), l = function(t) {
                var r = e.getByName(t);
                return r ? r.unsafeConstructorGenerator(e.getGlobalProperties()) : null;
            }, p = s.map(function(t) {
                if ("require" === t) return l;
                var r = e.unsafeGlobalScope[t];
                return r.func ? function() {
                    for(var t = [], e = 0; e < arguments.length; e++)t[e] = arguments[e];
                    return r.func(t);
                } : r.cls || r.value;
            });
            r.unsafeConstructorGenerator = c.apply({}, p);
        }
        return r;
    }, t.prototype.getGlobalProperties = function() {
        var t;
        return {
            width: this._player.videoWidth,
            height: this._player.videoHeight,
            margin: this._player.margin,
            duration: (null === (t = this._player.video) || void 0 === t ? void 0 : t.duration) || 0
        };
    }, t.prototype.newRawInstance = function(t) {
        var e = t, r = new Ci;
        if (this.unsafeAcceleration) {
            var n = new (e.unsafeConstructorGenerator(this.getGlobalProperties()));
            r.unsafeTemplateInstance = n;
        } else {
            this.interpreter.prepareNewInstance(e.newStatement, e.scope);
            var i = this.interpreter.run(700, "to instantiate " + e.className);
            r.templateInstance = i, r.templateInstance._nativeInstance = r;
        }
        return r.templateClass = e, r.ignore = !1, r;
    }, t.prototype.setProperty = function(t, e, r) {
        this.unsafeAcceleration ? t.unsafeTemplateInstance[e] = r : this.interpreter.setProperty(t.templateInstance, e, r);
    }, t.prototype.getProperty = function(t, e) {
        return this.unsafeAcceleration ? t.unsafeTemplateInstance[e] : this.interpreter.getProperty(t.templateInstance, e);
    }, t.prototype.exportInstance = function(t) {
        for(var e = {}, r = 0, n = t.templateClass.widgets.map(function(t) {
            return t.name;
        }).concat(ji); r < n.length; r++){
            var i = n[r], o = this.getProperty(t, i);
            try {
                var s = gt(o);
                void 0 !== s && (e[i] = s);
            } catch (e) {
                console.error("cannot export ".concat(t.templateClass.className, ".").concat(i), o, "assigned to", t.assignedUnit);
            }
        }
        return {
            type: t.templateClass.className,
            value: e
        };
    }, t.prototype.importInstances = function(t, e) {
        try {
            this.importPhraseTemplates(t.firstCredit, e.credits), this.importPhraseTemplates(t.firstPhrase, e.phrases);
            for(var r = e.graphics, n = t.firstGraphic, i = 0; null !== n;){
                var o = r[i++];
                this.importTemplates(n, o.templates), n = n.next;
            }
        } catch (t) {
            return console.error("restoring templates failed", t), !1;
        }
        return !0;
    }, t.prototype.importPhraseTemplates = function(t, e) {
        if (Array.isArray(e)) for(var r = 0; t;){
            var n = e[r++];
            this.importTemplates(t, n.templates);
            for(var i = t.firstWord, o = 0; o < t.wordCount; o++){
                var s = n.words[o];
                this.importTemplates(i, s.templates);
                for(var a = i.firstChar, u = 0; u < i.charCount; u++){
                    var c = s.characters[u];
                    this.importTemplates(a, c.templates), a = a.next;
                }
                i = i.next;
            }
            if (e.length < r + 1) break;
            t = t.next;
        }
    }, t.prototype.importTemplates = function(t, e) {
        if (Array.isArray(e)) for(var r = 0, n = e; r < n.length; r++){
            var i = n[r], o = this.importInstance(i);
            o && t.addTemplate(o);
        }
    }, t.prototype.importInstance = function(t) {
        var e = this.getByName(t.type), r = this.newInstance(e);
        if (!r || !t.value) return null;
        for(var n = 0, i = Object.keys(t.value); n < i.length; n++){
            var o = i[n], s = vt(t.value[o], this.interpreter.wrapperTable);
            void 0 !== s && this.setProperty(r, o, s);
        }
        return r;
    }, t.prototype.updateInstance = function(t, e) {
        var r = t, n = e, i = this.newRawInstance(n), o = r.templateInstance, s = this.interpreter.cleanupProperties(o);
        r.templateClass !== n && (this.disposeInstance(r), n.instances.push(r)), r.templateClass = n, r.scope = i.scope, r.templateInstance = i.templateInstance, r.ignore = i.ignore, this.interpreter.restoreProperties(r.templateInstance, s), this.attachGetAssignedUnitMethod(r);
    }, t.prototype.newInstance = function(t) {
        var e;
        try {
            if (null === (e = this.newRawInstance(t))) return null;
        } catch (t) {
            return null;
        }
        return this.attachGetAssignedUnitMethod(e), t.instances.push(e), e;
    }, t.prototype.attachGetAssignedUnitMethod = function(t) {
        var e = this;
        if (this.unsafeAcceleration) t.unsafeTemplateInstance.getAssignedUnit = function() {
            return t.assignedUnit;
        };
        else {
            var r = this.interpreter.createFunction(function() {
                return e.interpreter.wrap(t.assignedUnit);
            });
            this.interpreter.setRawProperty(t.templateInstance, "getAssignedUnit", r);
        }
    }, t.prototype.disposeInstance = function(t) {
        var e = t.templateClass;
        e.instances = e.instances.filter(function(e) {
            return e !== t;
        });
    }, t.prototype.disposeInstances = function(t) {
        var e = this;
        if (Array.isArray(t)) t.forEach(function(t) {
            return e.disposeInstance(t);
        });
        else {
            var r = t;
            [
                r.firstCredit,
                r.firstPhrase,
                r.firstWord,
                r.firstChar,
                r.firstGraphic
            ].forEach(function(t) {
                for(; t;)e.disposeInstances(t.removeTemplates()), t = t.next;
            });
        }
    }, t.prototype.setTemplate = function(t, e) {
        this.removeTemplates(t), t.addTemplate(e);
    }, t.prototype.clearTemplate = function(t) {
        this.removeTemplates(t);
    }, t.prototype.removeTemplateAt = function(t, e) {
        var r = t.removeTemplateAt(e);
        r && this.disposeInstance(r);
    }, t.prototype.removeTemplates = function(t) {
        var e = t.removeTemplates();
        this.disposeInstances(e);
    }, t.prototype.getRequiredTemplates = function(t) {
        return nn(t).dependencies;
    }, t.prototype.getRequiredTemplateAt = function(t, e) {
        return nn(t, e).dependencyAtCursor;
    }, t.prototype.exec = function(t, e, r) {
        if (t.unsafeTemplateInstance) {
            var n = t.unsafeTemplateInstance;
            return n[e].apply(n, r);
        }
        var i = this.interpreter.exec(t.templateInstance, e, r, t.assignedUnit ? " assigned to " + t.assignedUnit.toString() : "");
        return this.interpreter.unwrap(i);
    }, t.prototype.declareVariable = function(t, e, r, n) {
        return this.updateClassScript(t, function(t, e, r, n) {
            try {
                var i = rn(t), o = i.ast, s = i.fields, a = s[s.length - 1], u = t.match(/(\r\n|[\n\v\f\r\x85\u2028\u2029])/), c = u ? u.pop() : "\n", l = t.split(c), p = a ? Array(a.loc.start.column + 1).join(" ") : "  ", h = a ? a.loc.end.line : 0;
                if (h <= 0) {
                    var d = o.body[0].body, f = l[d.loc.start.line - 1], y = f.substring(0, d.loc.start.column + 1), g = f.substring(d.loc.start.column + 1);
                    l[d.loc.start.line - 1] = y, l.splice(d.loc.start.line, 0, g), h = d.loc.start.line;
                }
                for(var v = void 0; (v = "var" + Math.random().toString().substring(2)).length > 8 && (v = v.substring(0, 8)), !(t.indexOf(v) < 0););
                l.length > h && l[h].length > 0 && l.splice(h, 0, ""), l.splice(h, 0, "", p + "// @proposed", p + "// @title " + e, p + "// " + function(t, e) {
                    if ("Slider" === t) return "@ui Slider(" + e.min + ", " + e.max + ")";
                    if ("Check" === t) return "@ui Check()";
                    if ("Color" === t) return "@ui Color()";
                    var r = e.etc;
                    return "@comment " + (r = r.replace(/(\r\n|[\n\v\f\r\x85\u2028\u2029])/g, "")).replace(/\/[*/]/g, "");
                }(r, n), p + "this." + v + " = " + function(t, e) {
                    return "Slider" === t ? ((e.min + e.max) / 2).toString() : "Check" === t ? "false" : "Color" === t ? 'new Color("#000000")' : "null";
                }(r, n) + ";"), t = l.join(c);
            } catch (t) {}
            return t;
        }(t.model.script, e, r, n));
    }, t.prototype.onVideoReady = function(t) {
        this.ready && (this.interpreter.setRawProperty(this.interpreter.globalScope, "width", this._player.resolutionWidth), this.interpreter.setRawProperty(this.interpreter.globalScope, "height", this._player.resolutionHeight), this.interpreter.setRawProperty(this.interpreter.globalScope, "margin", this.interpreter.wrap(this._player.margin)), this.interpreter.setRawProperty(this.interpreter.globalScope, "duration", (null == t ? void 0 : t.duration) || 0));
    }, t;
}(), Fi = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><style>.bg{fill:#1f4391;}.fg{fill:#fff;}</style></defs><g class="logo-sq"><rect class="bg" x="-20" y="-20" width="240" height="240"/><g class="textalive-logo-art"><path class="fg" d="M97.33,130.81V142a3,3,0,0,0,4.78,2.41l56.81-42.09a3,3,0,0,0,0-4.81l-8.33-6.14Z"/><path class="fg" d="M137.14,81.43l-35-25.84A3,3,0,0,0,97.33,58v52.92Z"/><path class="fg" d="M51,55H80.33a2,2,0,0,1,2,2V71.67a0,0,0,0,1,0,0H51a2,2,0,0,1-2-2V57A2,2,0,0,1,51,55Z"/><path class="fg" d="M44.83,107.5h56.33a2,2,0,0,1,2,2v12.67a2,2,0,0,1-2,2H44.83a0,0,0,0,1,0,0V107.5A0,0,0,0,1,44.83,107.5Z" transform="translate(189.83 41.84) rotate(90)"/></g></g></svg>', Li = "https://textalive.jp", Di = function() {
    function t(t) {
        var e, r = this;
        if (this.player = t, this._position = "embed", this._rounded = !1, this._bordered = !1, this._shadowed = !1, this._background = "#fff", this._color = "#1f4391", void 0 !== (null === (e = t.options) || void 0 === e ? void 0 : e.mediaBannerPosition) && (this._position = t.options.mediaBannerPosition), this.domEnabled) {
            this.logoAnchor = document.createElement("a"), this.logoAnchor.className = "textalive-logo", this.logoAnchor.innerHTML = Fi, this.logoAnchor.style.padding = this.bordered ? "1px 2px" : "1px 3px", this.logoAnchor.href = Li, this.logoAnchor.target = "_blank", this.logoAnchor.title = "Powered by TextAlive App API", this.logoSvg = this.logoAnchor.querySelector("svg"), this.logoSvg.style.width = "24px", this.songNameDiv = document.createElement("div"), this.songNameDiv.className = "name", this.songNameDiv.style.fontWeight = "bold", this.songNameDiv.style.overflow = "hidden", this.songNameDiv.style.textOverflow = "ellipsis", this.songNameDiv.style.marginBottom = "2px", this.songNameDiv.textContent = "-", this.songArtistDiv = document.createElement("div"), this.songArtistDiv.className = "artist", this.songArtistDiv.textContent = "-", this.songArtistDiv.style.overflow = "hidden", this.songArtistDiv.style.textOverflow = "ellipsis";
            var n = document.createElement("span");
            n.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150"><g class="song"><path d="M120.95,45.77l-59.12,13a2.57,2.57,0,0,0-2,2.51v47.8c0,13.61-12.4,23.74-24.2,23.74-8.92,0-14.82-4.23-14.82-13,0-13,12.86-21.93,23.9-21.93a16.33,16.33,0,0,1,10,3V35a2.57,2.57,0,0,1,2-2.51l69.41-15.29a2.57,2.57,0,0,1,3.13,2.51V92.84c0,13.61-12.1,23.9-24.2,23.9-8.92,0-14.82-4.24-14.82-13,0-13.16,12.86-21.93,23.9-21.93a16.31,16.31,0,0,1,10,2.87V48.29A2.57,2.57,0,0,0,120.95,45.77Z"/><path d="M35.61,134.36c-10.22,0-16.32-5.42-16.32-14.51,0-13.81,13.38-23.43,25.4-23.43a18.4,18.4,0,0,1,8.48,1.88V35a4,4,0,0,1,3.2-4l69.41-15.29a4.07,4.07,0,0,1,5,4V92.83c0,15-13.54,25.4-25.7,25.4-10.22,0-16.32-5.42-16.32-14.51,0-13.81,13.38-23.43,25.4-23.43A19,19,0,0,1,122.57,82V48.29a1.07,1.07,0,0,0-1.3-1h0l-59.12,13a1.08,1.08,0,0,0-.84,1v47.8C61.3,124,47.76,134.36,35.61,134.36Zm9.07-34.94c-10.57,0-22.4,8.74-22.4,20.43,0,10,8.35,11.51,13.32,11.51,13.38,0,22.7-11.72,22.7-22.24V61.31a4.1,4.1,0,0,1,3.2-4l59.12-13h0a4.07,4.07,0,0,1,5,4V87.56l-2.37-1.67a14.88,14.88,0,0,0-9.12-2.6c-10.59,0-22.4,8.39-22.4,20.43,0,10,8.35,11.51,13.32,11.51,10.74,0,22.7-9.2,22.7-22.4V19.72a1.07,1.07,0,0,0-1.3-1L57,34a1.07,1.07,0,0,0-.84,1v68.83l-2.37-1.67A14.87,14.87,0,0,0,44.68,99.42Z"/></g></svg>', n.style.padding = "0 3px 0 0", this.songSvg = n.querySelector("svg"), this.songSvg.style.width = "14px", this.songWrapper = document.createElement("div"), this.songWrapper.style.width = "203px", this.songWrapper.style.maxWidth = "203px", this.songWrapper.appendChild(this.songNameDiv), this.songWrapper.appendChild(this.songArtistDiv), this.songAnchor = document.createElement("a"), this.songAnchor.className = "song", this.songAnchor.target = "_blank", this.songAnchor.style.display = "flex", this.songAnchor.style.lineHeight = "1.2em", this.songAnchor.style.padding = "4px 3px 3px 3px", this.songAnchor.style.textDecoration = "none", this.songAnchor.appendChild(n), this.songAnchor.appendChild(this.songWrapper), this.lyricsNameDiv = document.createElement("div"), this.lyricsNameDiv.className = "name", this.lyricsNameDiv.style.fontWeight = "bold", this.lyricsNameDiv.textContent = "-", this.lyricsNameDiv.style.overflow = "hidden", this.lyricsNameDiv.style.textOverflow = "ellipsis", this.lyricsNameDiv.style.marginBottom = "2px", this.lyricsArtistDiv = document.createElement("div"), this.lyricsArtistDiv.className = "artist", this.lyricsArtistDiv.textContent = "-", this.lyricsArtistDiv.style.overflow = "hidden", this.lyricsArtistDiv.style.textOverflow = "ellipsis";
            var i = document.createElement("span");
            i.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150"><g class="lyrics"><path d="M78,126.3H67.52l-6.26-23.82H24.4L18.14,126.3H7.7L35.7,22H50ZM27,92.39H58.65l-15.82-61Z"/><path d="M78,128.3H67.52a2,2,0,0,1-1.93-1.49l-5.87-22.33H25.94l-5.87,22.33a2,2,0,0,1-1.93,1.49H7.7a2,2,0,0,1-1.93-2.52l28-104.34A2,2,0,0,1,35.7,20H50a2,2,0,0,1,1.93,1.48l28,104.34A2,2,0,0,1,78,128.3Zm-8.89-4h6.29L48.43,24H37.23L10.31,124.3h6.28L22.46,102a2,2,0,0,1,1.93-1.49H61.26A2,2,0,0,1,63.2,102ZM58.65,94.39H27a2,2,0,0,1-1.94-2.5l15.82-61a2,2,0,0,1,3.87,0l15.82,61a2,2,0,0,1-1.94,2.5Zm-29.06-4H56.07L42.83,39.32Z"/><path d="M106.82,128c-17.74,0-26.43-13-26.43-36.52S89.09,55,106.82,55a21.78,21.78,0,0,1,15.83,6.43L134,56.22V112c0,5.22,1.56,8,4.7,8a7.31,7.31,0,0,0,3.65-1v6.61A17.77,17.77,0,0,1,133.6,128a9.61,9.61,0,0,1-9.74-7.65A22.4,22.4,0,0,1,106.82,128Zm0-10.09a18.15,18.15,0,0,0,16.69-10.61V75.7a18.15,18.15,0,0,0-16.69-10.61c-11.3,0-16,9.56-16,26.43S95.52,118,106.82,118Z"/><path d="M133.6,130A11.61,11.61,0,0,1,123.08,124,24.48,24.48,0,0,1,106.82,130c-13,0-28.43-6.68-28.43-38.52S93.85,53,106.82,53A23.88,23.88,0,0,1,123,59.05l10.08-4.65A2,2,0,0,1,136,56.22V112c0,4,.91,6,2.7,6a5.3,5.3,0,0,0,2.66-.78,2,2,0,0,1,3,1.74v6.61a2,2,0,0,1-1,1.74A19.64,19.64,0,0,1,133.6,130Zm-9.74-11.65a2,2,0,0,1,1.95,1.55,7.63,7.63,0,0,0,7.79,6.1,15.19,15.19,0,0,0,6.69-1.64v-2.52a8.51,8.51,0,0,1-1.65.16c-2.5,0-6.7-1.3-6.7-10V59.34l-8.46,3.91a2,2,0,0,1-2.25-.4A19.67,19.67,0,0,0,106.82,57C90.61,57,82.39,68.62,82.39,91.52S90.61,126,106.82,126a20.33,20.33,0,0,0,15.55-7A2,2,0,0,1,123.86,118.39Zm-17,1.57c-11.94,0-18-9.57-18-28.43s6.06-28.43,18-28.43a20.07,20.07,0,0,1,18.5,11.75,2,2,0,0,1,.19.86v31.65a2,2,0,0,1-.19.86A20.06,20.06,0,0,1,106.82,120Zm0-52.86c-12.55,0-14,13.94-14,24.43,0,21.9,8,24.43,14,24.43a16.13,16.13,0,0,0,14.69-9.07V76.16A16.13,16.13,0,0,0,106.82,67.09Z"/></g></svg>', i.style.padding = "0 3px 0 0", this.lyricsSvg = i.querySelector("svg"), this.lyricsSvg.style.width = "14px", this.lyricsWrapper = document.createElement("div"), this.lyricsWrapper.style.width = "90px", this.lyricsWrapper.style.maxWidth = "90px", this.lyricsWrapper.appendChild(this.lyricsNameDiv), this.lyricsWrapper.appendChild(this.lyricsArtistDiv), this.lyricsAnchor = document.createElement("a"), this.lyricsAnchor.className = "lyrics", this.lyricsAnchor.target = "_blank", this.lyricsAnchor.style.display = "flex", this.lyricsAnchor.style.lineHeight = "1.2em", this.lyricsAnchor.style.padding = "4px 3px 3px 3px", this.lyricsAnchor.style.textDecoration = "none", this.lyricsAnchor.appendChild(i), this.lyricsAnchor.appendChild(this.lyricsWrapper), this.bannerDiv = document.createElement("div"), this.bannerDiv.className = "textalive-banner", this.bannerDiv.style.cursor = "pointer", this.bannerDiv.style.zIndex = "10000", this.bannerDiv.style.background = "#1f4391", this.bannerDiv.style.lineHeight = "0", this.bannerDiv.style.display = "flex", this.bannerDiv.style.maxWidth = "256px", this.bannerDiv.style.fontFamily = "'Hiragino Kaku Gothic Pro','\u6E38\u30B4\u30B7\u30C3\u30AF\u4F53','Yu Gothic',YuGothic,Meiryo,HelveticaNeue,'Helvetica Neue',Helvetica,Arial,sans-serif", this.bannerDiv.style.fontSize = "9px", this.bannerDiv.style.alignItems = "center", this.bannerDiv.style.whiteSpace = "nowrap", this.bannerDiv.appendChild(this.logoAnchor), this.bannerDiv.appendChild(this.songAnchor), this.bannerDiv.appendChild(this.lyricsAnchor), this.songAnchor.style.display = "none", this.lyricsAnchor.style.display = "none", this.updatePosition(), this.updateRounded(), this.updateBordered(), this.updateShadowed(), this.updateBackground(), this.updateColor();
        }
        this.listener = {
            onAppReady: function() {
                r.updatePosition();
            },
            onMediaElementSet: function(t) {
                r.domEnabled && (r.bannerDiv && r.bannerDiv.parentElement && r.bannerDiv.parentElement.removeChild(r.bannerDiv), r.player.mediaBannerElement && r.player.mediaBannerElement.appendChild(r.bannerDiv));
            },
            onVideoLoad: function() {
                r.domEnabled && (r.logoAnchor.href = Li, r.songAnchor.style.display = "none", r.lyricsAnchor.style.display = "none", r.songAnchor.style.borderRadius = "0");
            },
            onSongLoad: function(t) {
                return yn(r, 0, void 0, function() {
                    var e, r, n, i, o, s, a, u, l;
                    return gn(this, function(p) {
                        switch(p.label){
                            case 0:
                                return t ? (e = null === (a = null === (s = null == t ? void 0 : t.song) || void 0 === s ? void 0 : s.artist) || void 0 === a ? void 0 : a.name, r = null === (u = null == t ? void 0 : t.song) || void 0 === u ? void 0 : u.name, n = null === (l = null == t ? void 0 : t.song) || void 0 === l ? void 0 : l.permalink, i = "".concat(Li).concat(n ? "/songs/".concat(encodeURIComponent(c.getSongPathFromUrl(n))) : ""), this.domEnabled && (this.logoAnchor.href = i, this.songArtistDiv.textContent = Mi(e), this.songNameDiv.textContent = Mi(r), this.songAnchor.title = "".concat(Mi(r), " by ").concat(Mi(e)), this.songAnchor.href = n, this.songAnchor.style.display = "flex", this.songAnchor.style.borderRadius = this.rounded ? "0 4px 4px 0" : "0", this.songWrapper.style.width = "auto"), [
                                    4,
                                    A.getServerStatus()
                                ]) : [
                                    2
                                ];
                            case 1:
                                return "ja" === (null == (o = p.sent()) ? void 0 : o.lang) ? console.warn("[TextAlive API] \u697D\u66F2 \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8:", Mi(e), "/ \u697D\u66F2\u540D:", Mi(r), "/ \u914D\u4FE1\u5143\u30B5\u30A4\u30C8:", Mi(n)) : console.warn("[TextAlive API] Song artist:", Mi(e), "/ song name:", Mi(r), "/ distributed at:", Mi(n)), [
                                    2
                                ];
                        }
                    });
                });
            },
            onLyricsLoad: function(t) {
                t && r.domEnabled && (r.songWrapper.style.maxWidth = "90px", r.lyricsAnchor.style.display = "flex", r.songAnchor.style.borderRadius = "0");
            },
            onTextLoad: function(t) {
                return yn(r, 0, void 0, function() {
                    var e, r, n, i, o;
                    return gn(this, function(s) {
                        switch(s.label){
                            case 0:
                                return t ? (e = null === (o = null == t ? void 0 : t.artist) || void 0 === o ? void 0 : o.name, r = null == t ? void 0 : t.name, n = null == t ? void 0 : t.url, this.domEnabled && (this.lyricsArtistDiv.textContent = Mi(e), this.lyricsNameDiv.textContent = Mi(r), this.lyricsAnchor.title = "".concat(Mi(r), " by ").concat(Mi(e)), this.lyricsAnchor.href = n, this.lyricsWrapper.style.width = "auto"), [
                                    4,
                                    A.getServerStatus()
                                ]) : [
                                    2
                                ];
                            case 1:
                                return "ja" === (null == (i = s.sent()) ? void 0 : i.lang) ? console.warn("[TextAlive API] \u6B4C\u8A5E \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8:", Mi(e), "/ \u6B4C\u8A5E\u540D:", Mi(r), "/ \u914D\u4FE1\u5143\u30B5\u30A4\u30C8:", Mi(n)) : console.warn("[TextAlive API] Song lyrics artist:", Mi(e), "/ lyrics name:", Mi(r), "/ distributed at:", Mi(n)), [
                                    2
                                ];
                        }
                    });
                });
            },
            onDispose: function() {
                r.dispose();
            }
        }, t.addListener(this.listener), t.mediaBannerElement && this.player.mediaBannerElement.appendChild(this.bannerDiv);
    }
    return Object.defineProperty(t.prototype, "domEnabled", {
        get: function() {
            return "undefined" != typeof window && "undefined" != typeof document && "function" == typeof document.createElement;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "position", {
        get: function() {
            return this._position;
        },
        set: function(t) {
            this._position = t, this.updatePosition();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "rounded", {
        get: function() {
            return this._rounded;
        },
        set: function(t) {
            this._rounded = t, this.updateRounded();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "bordered", {
        get: function() {
            return this._bordered;
        },
        set: function(t) {
            this._bordered = t, this.updateBordered();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "shadowed", {
        get: function() {
            return this._shadowed;
        },
        set: function(t) {
            this._shadowed = t, this.updateShadowed();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "background", {
        get: function() {
            return this._background;
        },
        set: function(t) {
            this._background = t, this.updateBackground();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "color", {
        get: function() {
            return this._color;
        },
        set: function(t) {
            this._color = t, this.updateColor();
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.dispose = function() {
        this.player.removeListener(this.listener);
    }, t.prototype.updatePosition = function() {
        var t, e;
        if (this.domEnabled) {
            var r = this.position, n = this.player;
            if (null === r || !(null === (t = n.options) || void 0 === t ? void 0 : t.app) || (null === (e = n.app) || void 0 === e ? void 0 : e.managed)) this.bannerDiv.style.display = "none";
            else if (this.bannerDiv.style.display = "flex", "embed" === r) this.bannerDiv.style.position = "initial", this.bannerDiv.style.marginTop = "4px", this.songAnchor.style.flexGrow = "1", this.lyricsAnchor.style.flexGrow = "1";
            else {
                this.bannerDiv.style.position = "fixed", this.bannerDiv.style.marginTop = "0";
                var i = r.indexOf("top") >= 0, o = r.indexOf("right") >= 0, s = r.indexOf("bottom") >= 0, a = r.indexOf("left") >= 0;
                this.bannerDiv.style.top = i ? "4px" : "initial", this.bannerDiv.style.right = o ? "4px" : "initial", this.bannerDiv.style.bottom = s ? "4px" : "initial", this.bannerDiv.style.left = a ? "4px" : "initial", this.songAnchor.style.flexGrow = "0", this.lyricsAnchor.style.flexGrow = "0";
            }
        }
    }, t.prototype.updateRounded = function() {
        if (this.domEnabled) {
            var t = this.rounded;
            this.logoSvg.style.borderRadius = t ? "4px 0 0 4px" : "0", this.lyricsAnchor.style.borderRadius = t ? "0 4px 4px 0" : "0", this.bannerDiv.style.borderRadius = t ? "4px" : "0";
        }
    }, t.prototype.updateBordered = function() {
        if (this.domEnabled) {
            var t = this.bordered;
            this.logoAnchor.style.padding = t ? "1px 2px" : "1px 3px", this.bannerDiv.style.border = t ? "1px solid rgba(31, 67, 145, 0.3)" : "none";
        }
    }, t.prototype.updateShadowed = function() {
        if (this.domEnabled) {
            var t = this.shadowed;
            this.bannerDiv.style.boxShadow = t ? "1px 1px 3px 0 rgba(9, 19, 42, 0.9)" : "none";
        }
    }, t.prototype.updateBackground = function() {
        this.domEnabled && (this.songAnchor.style.background = this.background, this.lyricsAnchor.style.background = this.background);
    }, t.prototype.updateColor = function() {
        this.domEnabled && (this.songSvg.style.fill = this.color, this.songAnchor.style.color = this.color, this.lyricsSvg.style.fill = this.color, this.lyricsAnchor.style.color = this.color);
    }, t;
}();
function Mi(t) {
    return t && "" !== t ? t : "-";
}
var Bi = function() {
    this.halted = [], this.errors = [];
}, Vi = function() {
    function t(t, e) {
        var r = this;
        this.listener = e, this.player = null, this._scale = 1, this.playerListener = {
            onResize: function(t) {
                r.elementWidth = Math.floor(t.width), r.updateSize();
            },
            onVideoReady: function() {
                r.elementWidth = r.calcWidth(), r.updateSize();
            },
            onStageElementSet: function(t) {
                r.elementWidth = r.calcWidth(), r.updateSize(), r.player.graphics.setCanvas(t);
            },
            onDispose: function() {
                r.dispose();
            }
        }, this.requestedTime = 0, this.request = null, this.player = t, t.addListener(this.playerListener);
    }
    return Object.defineProperty(t.prototype, "scale", {
        get: function() {
            return this._scale;
        },
        set: function(t) {
            this._scale = t, this.updateSize();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "width", {
        get: function() {
            return this.player.graphics.width;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "height", {
        get: function() {
            return this.player.graphics.height;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.requestUpdate = function(t) {
        return yn(this, 0, void 0, function() {
            var e = this;
            return gn(this, function(r) {
                return this.requestedTime = void 0 === t ? this.player.videoPosition : t, this.request || (this.request = new Promise(function(t) {
                    setTimeout(function() {
                        try {
                            e.update(e.requestedTime);
                        } catch (t) {}
                        e.request = null, t(e.requestedTime);
                    }, 0);
                })), [
                    2,
                    this.request
                ];
            });
        });
    }, t.prototype.update = function(t) {
        t || (t = this.player.mediaPosition), "number" == typeof t && (this.player.graphics.reset(), this.animate(t), this.player.graphics.update(), this.listener.onStageUpdate(t));
    }, t.prototype.animate = function(t) {
        for(var e = new Bi, r = e.errors, n = e.halted, i = 0, o = [
            this.player.video.firstCredit,
            this.player.video.firstPhrase,
            this.player.video.firstWord,
            this.player.video.firstChar,
            this.player.video.firstGraphic
        ]; i < o.length; i++)for(var s = o[i]; s;)this.animateRenderingUnit(t, s, e), s = s.next;
        if (n.length > 0) {
            console.error("---");
            for(var a = 0; a < n.length; a++)console.error("halted", n[a], r[a]);
        }
    }, t.prototype.animateRenderingUnit = function(t, e, r) {
        if (e.animate) e.animate(t, e);
        else if (e.templateCount <= 0) Gi(e) && e.getType() === n.CHAR && (e.rendering.visible = !1);
        else for(var i = 0; i < e.templateCount; i++)this.animateTemplate(t, e, e.getTemplate(i), r);
    }, t.prototype.animateTemplate = function(t, e, r, i) {
        var o = this;
        if (r.ignore) e.rendering.visible = !1;
        else {
            if (e.getType() !== n.GRAPHIC) for(var s = e.parent; s;){
                if (s.templateCount > 0 && (!s.rendering.visible || 0 === s.rendering.alpha)) return void (e.rendering.visible = !1);
                s = s.parent;
            }
            var a = this.player.templates.getProperty(r, "insomnia"), u = Gi(e);
            if (!a && u) {
                var c = function(t, e, r, i) {
                    var o = i && t(i, "headTime") || 500, s = i && t(i, "tailTime") || 500;
                    return !(r.startTime - o <= e && r.endTime + s >= e) && (r.getType() !== n.GRAPHIC && (r.rendering.visible = !1), !0);
                }(function(t, e) {
                    return o.player.templates.getProperty(t, e);
                }, t, e, r);
                if (c) return;
            }
            this.doAnimateTemplate(t, r, i);
        }
    }, t.prototype.doAnimateTemplate = function(t, e, r) {
        var n = r.errors, i = r.halted;
        try {
            this.player.templates.exec(e, "animate", [
                t
            ]);
        } catch (t) {
            n.push(t), i.push(e);
        }
    }, t.prototype.calcWidth = function() {
        var t = this.player.stageElement;
        if (!t) return 0;
        var e = window.getComputedStyle(t);
        return t.offsetWidth - ln(e.borderLeftWidth) - ln(e.borderRightWidth) - ln(e.paddingLeft) - ln(e.paddingRight);
    }, t.prototype.updateSize = function() {
        var t = this.player.stageElement;
        if (t) {
            var e = this.elementWidth * this.player.videoProportion;
            if (t.style.height = "".concat(e, "px"), t.width = this.elementWidth * this._scale, t.height = e * this._scale, this.player.video) {
                var r = t.width / this.player.videoWidth;
                this.player.graphics.updateStageTx(r, this.player.margin), this.player.isPlaying || this.requestUpdate();
            }
        }
    }, t.prototype.dispose = function() {
        this.player.removeListener(this.playerListener), this.player = null;
    }, t;
}();
function Gi(t) {
    if (t.getType() === n.GRAPHIC) return !0;
    for(var e = !0, r = t.parent; r;){
        if (r.templateCount > 0) {
            e = !1;
            break;
        }
        r = r.parent;
    }
    return e;
}
var qi = function(t) {
    function e(e, r) {
        var n = this.constructor, i = t.call(this, e) || this;
        return i.video = r, Object.setPrototypeOf(i, n.prototype), i;
    }
    return dn(e, t), e;
}(Error);
function Wi(t, e) {
    var r = e.parser;
    return yn(this, 0, void 0, function() {
        var e, n, i;
        return gn(this, function(o) {
            switch(o.label){
                case 0:
                    return t && t.length > 0 && t[0].words && t[0].words.length > 0 && t[0].words[0] && !t[0].words[0].pos ? (e = t.map(function(t) {
                        return t.words.map(function(t) {
                            return t.characters.map(function(t) {
                                return t.char;
                            }).join("");
                        }).join(" ");
                    }), n = e.join("\n"), [
                        4,
                        r(n)
                    ]) : [
                        2
                    ];
                case 1:
                    return (i = o.sent()) && "success" === i.status ? (t.forEach(function(t, r) {
                        var n = i.result[r], o = 0;
                        t.words.forEach(function(t) {
                            var i = t.characters.map(function(t) {
                                return t.char;
                            }).join(""), s = e[r].indexOf(i, o);
                            if (!(s < 0)) {
                                o = s;
                                var a = n.find(function(t) {
                                    return t.startPosition <= s && t.endPosition >= s;
                                });
                                a && (t.pos = a.PoS, t.rawPoS = a.rawPoS, t.language = a.language);
                            }
                        });
                    }), [
                        2
                    ]) : [
                        2
                    ];
            }
        });
    });
}
function Yi(t) {
    for(; t.firstElementChild;)t.removeChild(t.firstElementChild);
}
function zi(t, e) {
    var r = e.id, n = e.data, i = e.loader, o = e.deserializer;
    return yn(this, 0, void 0, function() {
        return gn(this, function(e) {
            switch(e.label){
                case 0:
                    return r && r >= 0 ? [
                        4,
                        i(r)
                    ] : [
                        3,
                        2
                    ];
                case 1:
                    e.sent(), e.label = 2;
                case 2:
                    return o(t, n), [
                        2
                    ];
            }
        });
    });
}
function Ji(t) {
    return "string" != typeof t ? t : "undefined" == typeof window ? null : document.querySelector(t);
}
var Hi = function() {
    function t(t) {
        this._mediaPosition = 0, this._videoPosition = 0, this.isEditing = !1, this._isVideoSeeking = !1, this._volume = 100, this._options = t, this.emitter = new On(t), this._templates = new Ui(this, this.emitter, t && t.unsafeAcceleration);
        var e = Object.assign({}, Y);
        t && t.managers && (e = Object.assign(e, t.managers)), this.managers = e, this._timer = t && t.timer || this.createDefaultTimer(), this._data = new Vn(e, this.emitter, t), this._backgroundGraphics = new Sn(this, e.asset, this.emitter), this._graphics = t && t.graphics || this.createDefaultGraphicsDriver(), this.stage = new Vi(this, {
            onStageUpdate: this.onStageUpdate.bind(this)
        }), this._banner = new Di(this), this.stageElement = Ji(null == t ? void 0 : t.stageElement) || null, this.mediaElement = Ji(null == t ? void 0 : t.mediaElement) || null, this._app = new Gn(this, this.emitter);
    }
    return Object.defineProperty(t.prototype, "options", {
        get: function() {
            return this._options ? fn({}, this._options) : null;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "app", {
        get: function() {
            return this._app;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "data", {
        get: function() {
            return this._data;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "backgroundGraphics", {
        get: function() {
            return this._backgroundGraphics;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "video", {
        get: function() {
            return this._video;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "templates", {
        get: function() {
            return this._templates;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "graphics", {
        get: function() {
            return this._graphics;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "stageElement", {
        get: function() {
            return this._stageElement;
        },
        set: function(t) {
            this._stageElement = t, this.emitter.onStageElementSet(t);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "stageScale", {
        get: function() {
            return this.stage.scale;
        },
        set: function(t) {
            this.stage.scale = t;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "mediaElement", {
        get: function() {
            return this._mediaElement;
        },
        set: function(t) {
            this.updateMediaElement(t);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "mediaSourceElement", {
        get: function() {
            return this._mediaSourceElement;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "mediaBannerElement", {
        get: function() {
            return this._mediaBannerElement;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "mediaPosition", {
        get: function() {
            return this._mediaPosition;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "videoPosition", {
        get: function() {
            return this._videoPosition;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "wait", {
        get: function() {
            return this._timer ? this._timer.wait : 0;
        },
        set: function(t) {
            this._timer && (this._timer.wait = t);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "fps", {
        get: function() {
            return 1e3 / this.wait;
        },
        set: function(t) {
            this.wait = 1e3 / t;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "resolutionWidth", {
        get: function() {
            var t, e, r, n;
            return "object" == typeof (null === (e = null === (t = this._data) || void 0 === t ? void 0 : t.video) || void 0 === e ? void 0 : e.config) && "number" == typeof this._data.video.config.width ? this._data.video.config.width : "number" == typeof (null === (n = null === (r = this._options) || void 0 === r ? void 0 : r.defaultVideoSize) || void 0 === n ? void 0 : n.width) ? this._options.defaultVideoSize.width : 1280;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "resolutionHeight", {
        get: function() {
            var t, e, r, n;
            return "object" == typeof (null === (e = null === (t = this._data) || void 0 === t ? void 0 : t.video) || void 0 === e ? void 0 : e.config) && "number" == typeof this._data.video.config.height ? this._data.video.config.height : "number" == typeof (null === (n = null === (r = this._options) || void 0 === r ? void 0 : r.defaultVideoSize) || void 0 === n ? void 0 : n.height) ? this._options.defaultVideoSize.height : 720;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "resolutionProportion", {
        get: function() {
            return this.resolutionHeight / this.resolutionWidth;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "margin", {
        get: function() {
            var t, e, r, n;
            return "object" == typeof (null === (e = null === (t = this._data) || void 0 === t ? void 0 : t.video) || void 0 === e ? void 0 : e.config) && this._data.video.config.margin ? this._data.video.config.margin : (null === (n = null === (r = this._options) || void 0 === r ? void 0 : r.defaultVideoSize) || void 0 === n ? void 0 : n.margin) || _n;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "videoWidth", {
        get: function() {
            var t = this.resolutionWidth, e = this.margin;
            return t + e[1] + e[3];
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "videoHeight", {
        get: function() {
            var t = this.resolutionHeight, e = this.margin;
            return t + e[0] + e[2];
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "videoProportion", {
        get: function() {
            return this.videoHeight / this.videoWidth;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "stageWidth", {
        get: function() {
            return this.stage.width;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "stageHeight", {
        get: function() {
            return this.stage.height;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "isLoading", {
        get: function() {
            return !!this._videoPromise;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "isPlaying", {
        get: function() {
            return !!this._timer && this._timer.isPlaying;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "isVideoSeeking", {
        get: function() {
            return this._isVideoSeeking;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "banner", {
        get: function() {
            return this._banner;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "timer", {
        get: function() {
            return this._timer;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "volume", {
        get: function() {
            return this._volume;
        },
        set: function(t) {
            isNaN(t) || (this._volume = Math.min(100, Math.max(0, t)), this.emitter.onVolumeUpdate(this._volume));
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.createDefaultTimer = function() {
        try {
            if ("undefined" != typeof window && "basic" !== pn("ta_timer")) return new En;
        } catch (t) {}
        return new wn;
    }, t.prototype.createDefaultGraphicsDriver = function() {
        return new yt;
    }, t.prototype.addListener = function(t) {
        return this.emitter.addListener(t);
    }, t.prototype.removeListener = function(t) {
        return this.emitter.removeListener(t);
    }, t.prototype.createFromVideoId = function(t, e) {
        return yn(this, 0, void 0, function() {
            var r = this;
            return gn(this, function(n) {
                return [
                    2,
                    this.create(function() {
                        return r.doCreateFromVideoId(t, e);
                    }, null == e ? void 0 : e.dryRun)
                ];
            });
        });
    }, t.prototype.doCreateFromVideoId = function(t, e) {
        return yn(this, 0, void 0, function() {
            var r;
            return gn(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            (r = new Vn(this.managers, this.emitter, this._options)).createFromVideoId(t, null == e ? void 0 : e.video)
                        ];
                    case 1:
                        return n.sent(), [
                            2,
                            this.finalize(r, e)
                        ];
                }
            });
        });
    }, t.prototype.createFromVideo = function(t, e) {
        return yn(this, 0, void 0, function() {
            var r = this;
            return gn(this, function(n) {
                return [
                    2,
                    this.create(function() {
                        return r.doCreateFromVideo(t, e);
                    }, null == e ? void 0 : e.dryRun)
                ];
            });
        });
    }, t.prototype.doCreateFromVideo = function(t, e) {
        return yn(this, 0, void 0, function() {
            var r;
            return gn(this, function(n) {
                return (r = new Vn(this.managers, this.emitter, this._options)).createFromVideo(t, null == e ? void 0 : e.video), [
                    2,
                    this.finalize(r, e)
                ];
            });
        });
    }, t.prototype.createFromSongUrl = function(t, e) {
        return yn(this, 0, void 0, function() {
            var r = this;
            return gn(this, function(n) {
                return [
                    2,
                    this.create(function() {
                        return r.doCreateFromSongUrl(t, e);
                    }, null == e ? void 0 : e.dryRun)
                ];
            });
        });
    }, t.prototype.doCreateFromSongUrl = function(t, e) {
        return yn(this, 0, void 0, function() {
            var r;
            return gn(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            (r = new Vn(this.managers, this.emitter, this._options)).createFromSongUrl(t, null == e ? void 0 : e.video)
                        ];
                    case 1:
                        return n.sent(), [
                            2,
                            this.finalize(r, e)
                        ];
                }
            });
        });
    }, t.prototype.createFromSongPath = function(t, e) {
        return yn(this, 0, void 0, function() {
            var r = this;
            return gn(this, function(n) {
                return [
                    2,
                    this.create(function() {
                        return r.doCreateFromSongPath(t, e);
                    }, null == e ? void 0 : e.dryRun)
                ];
            });
        });
    }, t.prototype.doCreateFromSongPath = function(t, e) {
        return yn(this, 0, void 0, function() {
            var r;
            return gn(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            (r = new Vn(this.managers, this.emitter, this._options)).createFromSongPath(t, null == e ? void 0 : e.video)
                        ];
                    case 1:
                        return n.sent(), [
                            2,
                            this.finalize(r, e)
                        ];
                }
            });
        });
    }, t.prototype.createFromSongId = function(t, e) {
        return yn(this, 0, void 0, function() {
            var r = this;
            return gn(this, function(n) {
                return [
                    2,
                    this.create(function() {
                        return r.doCreateFromSongId(t, e);
                    }, null == e ? void 0 : e.dryRun)
                ];
            });
        });
    }, t.prototype.doCreateFromSongId = function(t, e) {
        return yn(this, 0, void 0, function() {
            var r;
            return gn(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            (r = new Vn(this.managers, this.emitter, this._options)).createFromSongId(t, null == e ? void 0 : e.video)
                        ];
                    case 1:
                        return n.sent(), [
                            2,
                            this.finalize(r, e)
                        ];
                }
            });
        });
    }, t.prototype.createFromSongCode = function(t, e) {
        return yn(this, 0, void 0, function() {
            var r = this;
            return gn(this, function(n) {
                return [
                    2,
                    this.create(function() {
                        return r.doCreateFromSongCode(t, e);
                    }, null == e ? void 0 : e.dryRun)
                ];
            });
        });
    }, t.prototype.doCreateFromSongCode = function(t, e) {
        return yn(this, 0, void 0, function() {
            var r;
            return gn(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            (r = new Vn(this.managers, this.emitter, this._options)).createFromSongCode(t, null == e ? void 0 : e.video)
                        ];
                    case 1:
                        return n.sent(), [
                            2,
                            this.finalize(r, e)
                        ];
                }
            });
        });
    }, t.prototype.createFromText = function(t, e) {
        return yn(this, 0, void 0, function() {
            var r = this;
            return gn(this, function(n) {
                return [
                    2,
                    this.create(function() {
                        return r.doCreateFromText(t, e);
                    }, null == e ? void 0 : e.dryRun)
                ];
            });
        });
    }, t.prototype.doCreateFromText = function(t, e) {
        return yn(this, 0, void 0, function() {
            var r;
            return gn(this, function(n) {
                switch(n.label){
                    case 0:
                        return [
                            4,
                            (r = new Vn(this.managers, this.emitter, this._options)).createFromText(t, null == e ? void 0 : e.video)
                        ];
                    case 1:
                        return n.sent(), [
                            2,
                            this.finalize(r, e)
                        ];
                }
            });
        });
    }, t.prototype.createFromJSON = function(t, e) {
        return yn(this, 0, void 0, function() {
            var r = this;
            return gn(this, function(n) {
                return [
                    2,
                    this.create(function() {
                        return r.doCreateFromJSON(t, e);
                    }, null == e ? void 0 : e.dryRun)
                ];
            });
        });
    }, t.prototype.doCreateFromJSON = function(t, e) {
        return yn(this, 0, void 0, function() {
            var r;
            return gn(this, function(n) {
                return (r = new Vn(this.managers, this.emitter, this._options)).createFromJSON(t, null == e ? void 0 : e.video), [
                    2,
                    this.finalize(r, e)
                ];
            });
        });
    }, t.prototype.create = function(t, e) {
        return yn(this, 0, void 0, function() {
            var r, n = this;
            return gn(this, function(i) {
                if (this._videoPromise && !e) throw new qi("Player.createFrom* method calls cannot run in parallel", this._videoPromise);
                return r = t(), e || (this._videoPromise = r, r.finally(function() {
                    return n._videoPromise = null;
                })), [
                    2,
                    r
                ];
            });
        });
    }, t.prototype.finalize = function(t, e) {
        return yn(this, 0, void 0, function() {
            var r, n, i, o = this;
            return gn(this, function(s) {
                switch(s.label){
                    case 0:
                        return t.video ? [
                            4,
                            Promise.all([
                                t.finalize(e),
                                this.backgroundGraphics.setBackground(t.video.background)
                            ])
                        ] : [
                            2,
                            null
                        ];
                    case 1:
                        return s.sent(), (null == e ? void 0 : e.dryRun) ? [
                            2,
                            null
                        ] : (r = t.video.json, function(t, e) {
                            var r = e.config, n = e.song;
                            r && "object" == typeof r && "number" == typeof r.duration ? t.duration = r.duration : n ? t.duration = 1e3 * n.length : t.duration || (t.duration = t.endTime);
                        }(n = new ut(r), {
                            config: t.video.config,
                            song: t.song
                        }), [
                            4,
                            Promise.all([
                                this.graphics.createRuntime(n),
                                zi(n, {
                                    id: t.video.id,
                                    data: r,
                                    loader: function(t) {
                                        return yn(o, 0, void 0, function() {
                                            return gn(this, function(e) {
                                                switch(e.label){
                                                    case 0:
                                                        return [
                                                            4,
                                                            this.templates.loadForVideo(t)
                                                        ];
                                                    case 1:
                                                        return e.sent(), [
                                                            2
                                                        ];
                                                }
                                            });
                                        });
                                    },
                                    deserializer: function(t, e) {
                                        return o.templates.importInstances(t, e);
                                    }
                                }),
                                Wi(null == r ? void 0 : r.phrases, {
                                    parser: R.parse.bind(R)
                                })
                            ])
                        ]);
                    case 2:
                        return s.sent(), this._data, this._video && this.templates.disposeInstances(this._video), this._data = t, this._video = n, this.emitter.onVideoReady(n), i = (null == e ? void 0 : e.altSourceUrl) || void 0, [
                            4,
                            this._timer.initialize({
                                player: this,
                                updater: this.updateMediaPosition.bind(this),
                                emitter: this.emitter,
                                altSourceUrl: i
                            })
                        ];
                    case 3:
                        return s.sent(), this.emitter.onTimerReady(this._timer), [
                            2,
                            n
                        ];
                }
            });
        });
    }, t.prototype.updateMediaPosition = function(t) {
        return yn(this, 0, void 0, function() {
            var e = this;
            return gn(this, function(r) {
                return this._isVideoSeeking ? (this._mediaPosition = t, this.emitter.onMediaSeek(t), [
                    2,
                    t
                ]) : [
                    2,
                    this.stage.requestUpdate(t).then(function(t) {
                        return e._mediaPosition = t, e._videoPosition = t, e.emitter.onMediaSeek(t), t;
                    })
                ];
            });
        });
    }, t.prototype.exportVideo = function(t) {
        var e, r, n, i, o, s, a;
        return void 0 === t && (t = {
            legacyStringMode: !0
        }), yn(this, 0, void 0, function() {
            var u, c, l, p;
            return gn(this, function(h) {
                return u = {
                    sourceId: (null === (e = this._data.video) || void 0 === e ? void 0 : e.id) || -1,
                    sourceOriginId: (null === (r = this._data.video) || void 0 === r ? void 0 : r.sourceOriginId) || -1,
                    songleId: (null === (n = this._data.song) || void 0 === n ? void 0 : n.id) || -1,
                    lyricId: this._data.lyricsId || -1,
                    lyricDiffId: (null === (i = this._data.lyrics) || void 0 === i ? void 0 : i.id) || -1,
                    config: ((null == t ? void 0 : t.legacyStringMode) ? (null === (o = this._data.video) || void 0 === o ? void 0 : o.config) && JSON.stringify(this._data.video.config) : null === (s = this._data.video) || void 0 === s ? void 0 : s.config) || null
                }, c = this.backgroundGraphics.exportPartialVideoEntry(t), l = (null === (a = this._video) || void 0 === a ? void 0 : a.exportData(this._templates)) || null, p = (null == t ? void 0 : t.legacyStringMode) ? JSON.stringify(l) : l, [
                    2,
                    fn(fn(fn({}, u), c), {
                        json: p
                    })
                ];
            });
        });
    }, t.prototype.getChoruses = function() {
        return this._data.getChoruses();
    }, t.prototype.findChorus = function(t, e) {
        return this._data.findChorus(t, e);
    }, t.prototype.findChorusBetween = function(t, e) {
        return this._data.findChorusBetween(t, e);
    }, t.prototype.findChorusChange = function(t, e) {
        return this._data.findChorusChange(t, e);
    }, t.prototype.getBeats = function() {
        return this._data.getBeats();
    }, t.prototype.findBeat = function(t, e) {
        return this._data.findBeat(t, e);
    }, t.prototype.findBeatChange = function(t, e) {
        return this._data.findBeatChange(t, e);
    }, t.prototype.getChords = function() {
        return this._data.getChords();
    }, t.prototype.findChord = function(t, e) {
        return this._data.findChord(t, e);
    }, t.prototype.findChordChange = function(t, e) {
        return this._data.findChordChange(t, e);
    }, t.prototype.getVocalFrequency = function(t) {
        return this._data.getVocalFrequency(t);
    }, t.prototype.getVocalAmplitude = function(t) {
        return this._data.getVocalAmplitude(t);
    }, t.prototype.getMaxVocalAmplitude = function() {
        return this._data.getMaxVocalAmplitude();
    }, t.prototype.getValenceArousal = function(t) {
        return this._data.getValenceArousal(t);
    }, t.prototype.getMedianValenceArousal = function() {
        return this._data.getMedianValenceArousal();
    }, t.prototype.resize = function(t) {
        return this.emitter.onResize(t);
    }, t.prototype.onResize = function(t) {
        return this.resize(t);
    }, t.prototype.setStageElement = function(t) {
        return this._stageElement = t, this.emitter.onStageElementSet(t);
    }, t.prototype.setMediaElement = function(t) {
        this.mediaElement = t;
    }, t.prototype.updateMediaElement = function(t) {
        "undefined" != typeof document && (this._mediaElement && Yi(this._mediaElement), t ? (Yi(t), this._mediaSourceElement || (this._mediaSourceElement = document.createElement("div"), this._mediaSourceElement.classList.add("textalive-media-wrapper")), t.appendChild(this._mediaSourceElement), this._mediaBannerElement || (this._mediaBannerElement = document.createElement("div"), this._mediaSourceElement.classList.add("textalive-banner-wrapper")), t.appendChild(this._mediaBannerElement)) : (this._mediaSourceElement = null, this._mediaBannerElement = null)), this._mediaElement = t, this.emitter.onMediaElementSet(t);
    }, t.prototype.setVideoPosition = function(t) {
        return yn(this, 0, void 0, function() {
            var e = this;
            return gn(this, function(r) {
                return [
                    2,
                    this.stage.requestUpdate(t).then(function(t) {
                        return e._videoPosition = t, e.emitter.onVideoSeek(t), t;
                    })
                ];
            });
        });
    }, t.prototype.setMediaPosition = function(t) {
        return yn(this, 0, void 0, function() {
            return gn(this, function(e) {
                return this.requestMediaSeek(t), [
                    2
                ];
            });
        });
    }, t.prototype.requestPlay = function() {
        return this._timer.play(), !0;
    }, t.prototype.requestStop = function() {
        return this._timer.stop(), !0;
    }, t.prototype.requestPause = function() {
        return this._timer.pause(), !0;
    }, t.prototype.requestMediaSeek = function(t) {
        return this._timer.seek(t), !0;
    }, t.prototype.startVideoSeek = function() {
        return this._isVideoSeeking = !0, this.emitter.onVideoSeekStart();
    }, t.prototype.endVideoSeek = function() {
        return this._isVideoSeeking = !1, this.emitter.onVideoSeekEnd();
    }, t.prototype.requestSettingBackground = function(t) {
        return yn(this, 0, void 0, function() {
            return gn(this, function(e) {
                return [
                    2,
                    this.backgroundGraphics.settingBackground(t)
                ];
            });
        });
    }, t.prototype.requestSetBackground = function(t) {
        return yn(this, 0, void 0, function() {
            return gn(this, function(e) {
                return [
                    2,
                    this.backgroundGraphics.setBackground(t)
                ];
            });
        });
    }, t.prototype.requestStageUpdate = function() {
        return yn(this, 0, void 0, function() {
            return gn(this, function(t) {
                return [
                    2,
                    this.stage.requestUpdate()
                ];
            });
        });
    }, t.prototype.onStageUpdate = function(t) {
        this._isVideoSeeking || this.emitter.onTimeUpdate(t);
    }, t.prototype.dispose = function() {
        this._timer && (this._timer.dispose(), this._timer = null), this.mediaElement && (Yi(this._mediaElement), this._mediaElement = null), this.stageElement && (this._stageElement = null), this.emitter.onDispose();
    }, t;
}();
console.log("# \u30E9\u30A4\u30BB\u30F3\u30B9\u8868\u8A18\u306B\u95A2\u3059\u308B\u30AC\u30A4\u30C9\u30E9\u30A4\u30F3\n\n\u56FD\u7ACB\u7814\u7A76\u958B\u767A\u6CD5\u4EBA\u7523\u696D\u6280\u8853\u7DCF\u5408\u7814\u7A76\u6240\n\u4EBA\u9593\u60C5\u5831\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u7814\u7A76\u90E8\u9580\n\u30E1\u30C7\u30A3\u30A2\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u7814\u7A76\u30B0\u30EB\u30FC\u30D7\n\nTextAlive App API\u306F\u975E\u5546\u7528\u5229\u7528\u306B\u9650\u308A\u3001\u3069\u306A\u305F\u3067\u3082\u7121\u6599\u30FB\u7121\u4FDD\u8A3C\u3067\u5229\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\n\u305F\u3060\u3057\u3001\u539F\u5247\u3068\u3057\u3066TextAlive App API\u3092\u5229\u7528\u3057\u3066\u3044\u308B\u65E8\u3092 TextAlive https://textalive.jp/ \u30B5\u30A4\u30C8\u5185\u697D\u66F2\u30DA\u30FC\u30B8\u307E\u305F\u306F https://developer.textalive.jp/ \u306B\u30CF\u30A4\u30D1\u30FC\u30EA\u30F3\u30AF\u3057\u305F\u4E0A\u3067\u3001\u5229\u7528\u3057\u3066\u3044\u308B\u30B7\u30B9\u30C6\u30E0\u3082\u3057\u304F\u306F\u5916\u90E8\u30B5\u30A4\u30C8\u7B49\u306B\u8868\u793A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\n\n# \u304A\u554F\u3044\u5408\u308F\u305B\n\ntextalive-ml@aist.go.jp");
var Xi = r.sortedIndex;

},{"axios":"kooH4","9b2ba0ceede257b":"fLVoR","d32dff30d595d4e2":"8dxKq","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kooH4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _axiosJsDefault.default));
parcelHelpers.export(exports, "create", ()=>create);
parcelHelpers.export(exports, "Axios", ()=>Axios);
parcelHelpers.export(exports, "AxiosError", ()=>AxiosError);
parcelHelpers.export(exports, "CanceledError", ()=>CanceledError);
parcelHelpers.export(exports, "isCancel", ()=>isCancel);
parcelHelpers.export(exports, "CancelToken", ()=>CancelToken);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
parcelHelpers.export(exports, "all", ()=>all);
parcelHelpers.export(exports, "Cancel", ()=>Cancel);
parcelHelpers.export(exports, "isAxiosError", ()=>isAxiosError);
parcelHelpers.export(exports, "spread", ()=>spread);
parcelHelpers.export(exports, "toFormData", ()=>toFormData);
parcelHelpers.export(exports, "AxiosHeaders", ()=>AxiosHeaders);
parcelHelpers.export(exports, "HttpStatusCode", ()=>HttpStatusCode);
parcelHelpers.export(exports, "formToJSON", ()=>formToJSON);
parcelHelpers.export(exports, "getAdapter", ()=>getAdapter);
parcelHelpers.export(exports, "mergeConfig", ()=>mergeConfig);
var _axiosJs = require("./lib/axios.js");
var _axiosJsDefault = parcelHelpers.interopDefault(_axiosJs);
// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const { Axios, AxiosError, CanceledError, isCancel, CancelToken, VERSION, all, Cancel, isAxiosError, spread, toFormData, AxiosHeaders, HttpStatusCode, formToJSON, getAdapter, mergeConfig, create } = (0, _axiosJsDefault.default);

},{"./lib/axios.js":"le7Ue","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"le7Ue":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _bindJs = require("./helpers/bind.js");
var _bindJsDefault = parcelHelpers.interopDefault(_bindJs);
var _axiosJs = require("./core/Axios.js");
var _axiosJsDefault = parcelHelpers.interopDefault(_axiosJs);
var _mergeConfigJs = require("./core/mergeConfig.js");
var _mergeConfigJsDefault = parcelHelpers.interopDefault(_mergeConfigJs);
var _indexJs = require("./defaults/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _formDataToJSONJs = require("./helpers/formDataToJSON.js");
var _formDataToJSONJsDefault = parcelHelpers.interopDefault(_formDataToJSONJs);
var _canceledErrorJs = require("./cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _cancelTokenJs = require("./cancel/CancelToken.js");
var _cancelTokenJsDefault = parcelHelpers.interopDefault(_cancelTokenJs);
var _isCancelJs = require("./cancel/isCancel.js");
var _isCancelJsDefault = parcelHelpers.interopDefault(_isCancelJs);
var _dataJs = require("./env/data.js");
var _toFormDataJs = require("./helpers/toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
var _axiosErrorJs = require("./core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _spreadJs = require("./helpers/spread.js");
var _spreadJsDefault = parcelHelpers.interopDefault(_spreadJs);
var _isAxiosErrorJs = require("./helpers/isAxiosError.js");
var _isAxiosErrorJsDefault = parcelHelpers.interopDefault(_isAxiosErrorJs);
var _axiosHeadersJs = require("./core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _adaptersJs = require("./adapters/adapters.js");
var _adaptersJsDefault = parcelHelpers.interopDefault(_adaptersJs);
var _httpStatusCodeJs = require("./helpers/HttpStatusCode.js");
var _httpStatusCodeJsDefault = parcelHelpers.interopDefault(_httpStatusCodeJs);
'use strict';
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */ function createInstance(defaultConfig) {
    const context = new (0, _axiosJsDefault.default)(defaultConfig);
    const instance = (0, _bindJsDefault.default)((0, _axiosJsDefault.default).prototype.request, context);
    // Copy axios.prototype to instance
    (0, _utilsJsDefault.default).extend(instance, (0, _axiosJsDefault.default).prototype, context, {
        allOwnKeys: true
    });
    // Copy context to instance
    (0, _utilsJsDefault.default).extend(instance, context, null, {
        allOwnKeys: true
    });
    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
        return createInstance((0, _mergeConfigJsDefault.default)(defaultConfig, instanceConfig));
    };
    return instance;
}
// Create the default instance to be exported
const axios = createInstance((0, _indexJsDefault.default));
// Expose Axios class to allow class inheritance
axios.Axios = (0, _axiosJsDefault.default);
// Expose Cancel & CancelToken
axios.CanceledError = (0, _canceledErrorJsDefault.default);
axios.CancelToken = (0, _cancelTokenJsDefault.default);
axios.isCancel = (0, _isCancelJsDefault.default);
axios.VERSION = (0, _dataJs.VERSION);
axios.toFormData = (0, _toFormDataJsDefault.default);
// Expose AxiosError class
axios.AxiosError = (0, _axiosErrorJsDefault.default);
// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;
// Expose all/spread
axios.all = function all(promises) {
    return Promise.all(promises);
};
axios.spread = (0, _spreadJsDefault.default);
// Expose isAxiosError
axios.isAxiosError = (0, _isAxiosErrorJsDefault.default);
// Expose mergeConfig
axios.mergeConfig = (0, _mergeConfigJsDefault.default);
axios.AxiosHeaders = (0, _axiosHeadersJsDefault.default);
axios.formToJSON = (thing)=>(0, _formDataToJSONJsDefault.default)((0, _utilsJsDefault.default).isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = (0, _adaptersJsDefault.default).getAdapter;
axios.HttpStatusCode = (0, _httpStatusCodeJsDefault.default);
axios.default = axios;
// this module should only have a default export
exports.default = axios;

},{"./utils.js":"jI6DP","./helpers/bind.js":"bgexy","./core/Axios.js":"cBDUi","./core/mergeConfig.js":"311Mu","./defaults/index.js":"9WXKx","./helpers/formDataToJSON.js":"fefHq","./cancel/CanceledError.js":"9yG1c","./cancel/CancelToken.js":"kSqbX","./cancel/isCancel.js":"fkTUi","./env/data.js":"9SLyZ","./helpers/toFormData.js":"2RXm4","./core/AxiosError.js":"7z85x","./helpers/spread.js":"i5yWF","./helpers/isAxiosError.js":"2FN3e","./core/AxiosHeaders.js":"9EzTj","./adapters/adapters.js":"hI0HS","./helpers/HttpStatusCode.js":"7tr76","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jI6DP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _bindJs = require("./helpers/bind.js");
var _bindJsDefault = parcelHelpers.interopDefault(_bindJs);
var global = arguments[3];
'use strict';
// utils is a library of generic helper functions non-specific to axios
const { toString } = Object.prototype;
const { getPrototypeOf } = Object;
const { iterator, toStringTag } = Symbol;
const kindOf = ((cache)=>(thing)=>{
        const str = toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    })(Object.create(null));
const kindOfTest = (type)=>{
    type = type.toLowerCase();
    return (thing)=>kindOf(thing) === type;
};
const typeOfTest = (type)=>(thing)=>typeof thing === type;
/**
 * Determine if a value is a non-null object
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */ const { isArray } = Array;
/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */ const isUndefined = typeOfTest('undefined');
/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ const isArrayBuffer = kindOfTest('ArrayBuffer');
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) result = ArrayBuffer.isView(val);
    else result = val && val.buffer && isArrayBuffer(val.buffer);
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */ const isString = typeOfTest('string');
/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ const isFunction = typeOfTest('function');
/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */ const isNumber = typeOfTest('number');
/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */ const isObject = (thing)=>thing !== null && typeof thing === 'object';
/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */ const isBoolean = (thing)=>thing === true || thing === false;
/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */ const isPlainObject = (val)=>{
    if (kindOf(val) !== 'object') return false;
    const prototype = getPrototypeOf(val);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(toStringTag in val) && !(iterator in val);
};
/**
 * Determine if a value is an empty object (safely handles Buffers)
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an empty object, otherwise false
 */ const isEmptyObject = (val)=>{
    // Early return for non-objects or Buffers to prevent RangeError
    if (!isObject(val) || isBuffer(val)) return false;
    try {
        return Object.keys(val).length === 0 && Object.getPrototypeOf(val) === Object.prototype;
    } catch (e) {
        // Fallback for any other objects that might cause RangeError with Object.keys()
        return false;
    }
};
/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */ const isDate = kindOfTest('Date');
/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const isFile = kindOfTest('File');
/**
 * Determine if a value is a React Native Blob
 * React Native "blob": an object with a `uri` attribute. Optionally, it can
 * also have a `name` and `type` attribute to specify filename and content type
 *
 * @see https://github.com/facebook/react-native/blob/26684cf3adf4094eb6c405d345a75bf8c7c0bf88/Libraries/Network/FormData.js#L68-L71
 *
 * @param {*} value The value to test
 *
 * @returns {boolean} True if value is a React Native Blob, otherwise false
 */ const isReactNativeBlob = (value)=>{
    return !!(value && typeof value.uri !== 'undefined');
};
/**
 * Determine if environment is React Native
 * ReactNative `FormData` has a non-standard `getParts()` method
 *
 * @param {*} formData The formData to test
 *
 * @returns {boolean} True if environment is React Native, otherwise false
 */ const isReactNative = (formData)=>formData && typeof formData.getParts !== 'undefined';
/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */ const isBlob = kindOfTest('Blob');
/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a FileList, otherwise false
 */ const isFileList = kindOfTest('FileList');
/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */ const isStream = (val)=>isObject(val) && isFunction(val.pipe);
/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */ function getGlobal() {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    return {};
}
const G = getGlobal();
const FormDataCtor = typeof G.FormData !== 'undefined' ? G.FormData : undefined;
const isFormData = (thing)=>{
    if (!thing) return false;
    if (FormDataCtor && thing instanceof FormDataCtor) return true;
    // Reject plain objects inheriting directly from Object.prototype so prototype-pollution gadgets can't spoof FormData.
    const proto = getPrototypeOf(thing);
    if (!proto || proto === Object.prototype) return false;
    if (!isFunction(thing.append)) return false;
    const kind = kindOf(thing);
    return kind === 'formdata' || // detect form-data instance
    kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]';
};
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ const isURLSearchParams = kindOfTest('URLSearchParams');
const [isReadableStream, isRequest, isResponse, isHeaders] = [
    'ReadableStream',
    'Request',
    'Response',
    'Headers'
].map(kindOfTest);
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */ const trim = (str)=>{
    return str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array<unknown>} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Object} [options]
 * @param {Boolean} [options.allOwnKeys = false]
 * @returns {any}
 */ function forEach(obj, fn, { allOwnKeys = false } = {}) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') return;
    let i;
    let l;
    // Force an array if not already something iterable
    if (typeof obj !== 'object') /*eslint no-param-reassign:0*/ obj = [
        obj
    ];
    if (isArray(obj)) // Iterate over array values
    for(i = 0, l = obj.length; i < l; i++)fn.call(null, obj[i], i, obj);
    else {
        // Buffer check
        if (isBuffer(obj)) return;
        // Iterate over object keys
        const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
        const len = keys.length;
        let key;
        for(i = 0; i < len; i++){
            key = keys[i];
            fn.call(null, obj[key], key, obj);
        }
    }
}
/**
 * Finds a key in an object, case-insensitive, returning the actual key name.
 * Returns null if the object is a Buffer or if no match is found.
 *
 * @param {Object} obj - The object to search.
 * @param {string} key - The key to find (case-insensitive).
 * @returns {?string} The actual key name if found, otherwise null.
 */ function findKey(obj, key) {
    if (isBuffer(obj)) return null;
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while(i-- > 0){
        _key = keys[i];
        if (key === _key.toLowerCase()) return _key;
    }
    return null;
}
const _global = (()=>{
    /*eslint no-undef:0*/ if (typeof globalThis !== 'undefined') return globalThis;
    return typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : global;
})();
const isContextDefined = (context)=>!isUndefined(context) && context !== _global;
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * const result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */ function merge(...objs) {
    const { caseless, skipUndefined } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key)=>{
        // Skip dangerous property names to prevent prototype pollution
        if (key === '__proto__' || key === 'constructor' || key === 'prototype') return;
        const targetKey = caseless && findKey(result, key) || key;
        // Read via own-prop only — a bare `result[targetKey]` walks the prototype
        // chain, so a polluted Object.prototype value could surface here and get
        // copied into the merged result.
        const existing = hasOwnProperty(result, targetKey) ? result[targetKey] : undefined;
        if (isPlainObject(existing) && isPlainObject(val)) result[targetKey] = merge(existing, val);
        else if (isPlainObject(val)) result[targetKey] = merge({}, val);
        else if (isArray(val)) result[targetKey] = val.slice();
        else if (!skipUndefined || !isUndefined(val)) result[targetKey] = val;
    };
    for(let i = 0, l = objs.length; i < l; i++)objs[i] && forEach(objs[i], assignValue);
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Object} [options]
 * @param {Boolean} [options.allOwnKeys]
 * @returns {Object} The resulting value of object a
 */ const extend = (a, b, thisArg, { allOwnKeys } = {})=>{
    forEach(b, (val, key)=>{
        if (thisArg && isFunction(val)) Object.defineProperty(a, key, {
            // Null-proto descriptor so a polluted Object.prototype.get cannot
            // hijack defineProperty's accessor-vs-data resolution.
            __proto__: null,
            value: (0, _bindJsDefault.default)(val, thisArg),
            writable: true,
            enumerable: true,
            configurable: true
        });
        else Object.defineProperty(a, key, {
            __proto__: null,
            value: val,
            writable: true,
            enumerable: true,
            configurable: true
        });
    }, {
        allOwnKeys
    });
    return a;
};
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */ const stripBOM = (content)=>{
    if (content.charCodeAt(0) === 0xfeff) content = content.slice(1);
    return content;
};
/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */ const inherits = (constructor, superConstructor, props, descriptors)=>{
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    Object.defineProperty(constructor.prototype, 'constructor', {
        __proto__: null,
        value: constructor,
        writable: true,
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(constructor, 'super', {
        __proto__: null,
        value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
};
/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */ const toFlatObject = (sourceObj, destObj, filter, propFilter)=>{
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    // eslint-disable-next-line no-eq-null,eqeqeq
    if (sourceObj == null) return destObj;
    do {
        props = Object.getOwnPropertyNames(sourceObj);
        i = props.length;
        while(i-- > 0){
            prop = props[i];
            if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
                destObj[prop] = sourceObj[prop];
                merged[prop] = true;
            }
        }
        sourceObj = filter !== false && getPrototypeOf(sourceObj);
    }while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
};
/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */ const endsWith = (str, searchString, position)=>{
    str = String(str);
    if (position === undefined || position > str.length) position = str.length;
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
};
/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */ const toArray = (thing)=>{
    if (!thing) return null;
    if (isArray(thing)) return thing;
    let i = thing.length;
    if (!isNumber(i)) return null;
    const arr = new Array(i);
    while(i-- > 0)arr[i] = thing[i];
    return arr;
};
/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */ // eslint-disable-next-line func-names
const isTypedArray = ((TypedArray)=>{
    // eslint-disable-next-line func-names
    return (thing)=>{
        return TypedArray && thing instanceof TypedArray;
    };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));
/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */ const forEachEntry = (obj, fn)=>{
    const generator = obj && obj[iterator];
    const _iterator = generator.call(obj);
    let result;
    while((result = _iterator.next()) && !result.done){
        const pair = result.value;
        fn.call(obj, pair[0], pair[1]);
    }
};
/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */ const matchAll = (regExp, str)=>{
    let matches;
    const arr = [];
    while((matches = regExp.exec(str)) !== null)arr.push(matches);
    return arr;
};
/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */ const isHTMLForm = kindOfTest('HTMLFormElement');
const toCamelCase = (str)=>{
    return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
    });
};
/* Creating a function that will check if an object has a property. */ const hasOwnProperty = (({ hasOwnProperty })=>(obj, prop)=>hasOwnProperty.call(obj, prop))(Object.prototype);
/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */ const isRegExp = kindOfTest('RegExp');
const reduceDescriptors = (obj, reducer)=>{
    const descriptors = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach(descriptors, (descriptor, name)=>{
        let ret;
        if ((ret = reducer(descriptor, name, obj)) !== false) reducedDescriptors[name] = ret || descriptor;
    });
    Object.defineProperties(obj, reducedDescriptors);
};
/**
 * Makes all methods read-only
 * @param {Object} obj
 */ const freezeMethods = (obj)=>{
    reduceDescriptors(obj, (descriptor, name)=>{
        // skip restricted props in strict mode
        if (isFunction(obj) && [
            'arguments',
            'caller',
            'callee'
        ].includes(name)) return false;
        const value = obj[name];
        if (!isFunction(value)) return;
        descriptor.enumerable = false;
        if ('writable' in descriptor) {
            descriptor.writable = false;
            return;
        }
        if (!descriptor.set) descriptor.set = ()=>{
            throw Error("Can not rewrite read-only method '" + name + "'");
        };
    });
};
/**
 * Converts an array or a delimited string into an object set with values as keys and true as values.
 * Useful for fast membership checks.
 *
 * @param {Array|string} arrayOrString - The array or string to convert.
 * @param {string} delimiter - The delimiter to use if input is a string.
 * @returns {Object} An object with keys from the array or string, values set to true.
 */ const toObjectSet = (arrayOrString, delimiter)=>{
    const obj = {};
    const define = (arr)=>{
        arr.forEach((value)=>{
            obj[value] = true;
        });
    };
    isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
};
const noop = ()=>{};
const toFiniteNumber = (value, defaultValue)=>{
    return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};
/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */ function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[toStringTag] === 'FormData' && thing[iterator]);
}
/**
 * Recursively converts an object to a JSON-compatible object, handling circular references and Buffers.
 *
 * @param {Object} obj - The object to convert.
 * @returns {Object} The JSON-compatible object.
 */ const toJSONObject = (obj)=>{
    const stack = new Array(10);
    const visit = (source, i)=>{
        if (isObject(source)) {
            if (stack.indexOf(source) >= 0) return;
            //Buffer check
            if (isBuffer(source)) return source;
            if (!('toJSON' in source)) {
                stack[i] = source;
                const target = isArray(source) ? [] : {};
                forEach(source, (value, key)=>{
                    const reducedValue = visit(value, i + 1);
                    !isUndefined(reducedValue) && (target[key] = reducedValue);
                });
                stack[i] = undefined;
                return target;
            }
        }
        return source;
    };
    return visit(obj, 0);
};
/**
 * Determines if a value is an async function.
 *
 * @param {*} thing - The value to test.
 * @returns {boolean} True if value is an async function, otherwise false.
 */ const isAsyncFn = kindOfTest('AsyncFunction');
/**
 * Determines if a value is thenable (has then and catch methods).
 *
 * @param {*} thing - The value to test.
 * @returns {boolean} True if value is thenable, otherwise false.
 */ const isThenable = (thing)=>thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
// original code
// https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34
/**
 * Provides a cross-platform setImmediate implementation.
 * Uses native setImmediate if available, otherwise falls back to postMessage or setTimeout.
 *
 * @param {boolean} setImmediateSupported - Whether setImmediate is supported.
 * @param {boolean} postMessageSupported - Whether postMessage is supported.
 * @returns {Function} A function to schedule a callback asynchronously.
 */ const _setImmediate = ((setImmediateSupported, postMessageSupported)=>{
    if (setImmediateSupported) return setImmediate;
    return postMessageSupported ? ((token, callbacks)=>{
        _global.addEventListener('message', ({ source, data })=>{
            if (source === _global && data === token) callbacks.length && callbacks.shift()();
        }, false);
        return (cb)=>{
            callbacks.push(cb);
            _global.postMessage(token, '*');
        };
    })(`axios@${Math.random()}`, []) : (cb)=>setTimeout(cb);
})(typeof setImmediate === 'function', isFunction(_global.postMessage));
/**
 * Schedules a microtask or asynchronous callback as soon as possible.
 * Uses queueMicrotask if available, otherwise falls back to process.nextTick or _setImmediate.
 *
 * @type {Function}
 */ const asap = typeof queueMicrotask !== 'undefined' ? queueMicrotask.bind(_global) : _setImmediate;
// *********************
const isIterable = (thing)=>thing != null && isFunction(thing[iterator]);
exports.default = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isPlainObject,
    isEmptyObject,
    isReadableStream,
    isRequest,
    isResponse,
    isHeaders,
    isUndefined,
    isDate,
    isFile,
    isReactNativeBlob,
    isReactNative,
    isBlob,
    isRegExp,
    isFunction,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop,
    toFiniteNumber,
    findKey,
    global: _global,
    isContextDefined,
    isSpecCompliantForm,
    toJSONObject,
    isAsyncFn,
    isThenable,
    setImmediate: _setImmediate,
    asap,
    isIterable
};

},{"./helpers/bind.js":"bgexy","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bgexy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>bind);
'use strict';
function bind(fn, thisArg) {
    return function wrap() {
        return fn.apply(thisArg, arguments);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"cBDUi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _buildURLJs = require("../helpers/buildURL.js");
var _buildURLJsDefault = parcelHelpers.interopDefault(_buildURLJs);
var _interceptorManagerJs = require("./InterceptorManager.js");
var _interceptorManagerJsDefault = parcelHelpers.interopDefault(_interceptorManagerJs);
var _dispatchRequestJs = require("./dispatchRequest.js");
var _dispatchRequestJsDefault = parcelHelpers.interopDefault(_dispatchRequestJs);
var _mergeConfigJs = require("./mergeConfig.js");
var _mergeConfigJsDefault = parcelHelpers.interopDefault(_mergeConfigJs);
var _buildFullPathJs = require("./buildFullPath.js");
var _buildFullPathJsDefault = parcelHelpers.interopDefault(_buildFullPathJs);
var _validatorJs = require("../helpers/validator.js");
var _validatorJsDefault = parcelHelpers.interopDefault(_validatorJs);
var _axiosHeadersJs = require("./AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _transitionalJs = require("../defaults/transitional.js");
var _transitionalJsDefault = parcelHelpers.interopDefault(_transitionalJs);
'use strict';
const validators = (0, _validatorJsDefault.default).validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */ class Axios {
    constructor(instanceConfig){
        this.defaults = instanceConfig || {};
        this.interceptors = {
            request: new (0, _interceptorManagerJsDefault.default)(),
            response: new (0, _interceptorManagerJsDefault.default)()
        };
    }
    /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */ async request(configOrUrl, config) {
        try {
            return await this._request(configOrUrl, config);
        } catch (err) {
            if (err instanceof Error) {
                let dummy = {};
                Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = new Error();
                // slice off the Error: ... line
                const stack = (()=>{
                    if (!dummy.stack) return '';
                    const firstNewlineIndex = dummy.stack.indexOf('\n');
                    return firstNewlineIndex === -1 ? '' : dummy.stack.slice(firstNewlineIndex + 1);
                })();
                try {
                    if (!err.stack) err.stack = stack;
                    else if (stack) {
                        const firstNewlineIndex = stack.indexOf('\n');
                        const secondNewlineIndex = firstNewlineIndex === -1 ? -1 : stack.indexOf('\n', firstNewlineIndex + 1);
                        const stackWithoutTwoTopLines = secondNewlineIndex === -1 ? '' : stack.slice(secondNewlineIndex + 1);
                        if (!String(err.stack).endsWith(stackWithoutTwoTopLines)) err.stack += '\n' + stack;
                    }
                } catch (e) {
                // ignore the case where "stack" is an un-writable property
                }
            }
            throw err;
        }
    }
    _request(configOrUrl, config) {
        /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
        if (typeof configOrUrl === 'string') {
            config = config || {};
            config.url = configOrUrl;
        } else config = configOrUrl || {};
        config = (0, _mergeConfigJsDefault.default)(this.defaults, config);
        const { transitional, paramsSerializer, headers } = config;
        if (transitional !== undefined) (0, _validatorJsDefault.default).assertOptions(transitional, {
            silentJSONParsing: validators.transitional(validators.boolean),
            forcedJSONParsing: validators.transitional(validators.boolean),
            clarifyTimeoutError: validators.transitional(validators.boolean),
            legacyInterceptorReqResOrdering: validators.transitional(validators.boolean)
        }, false);
        if (paramsSerializer != null) {
            if ((0, _utilsJsDefault.default).isFunction(paramsSerializer)) config.paramsSerializer = {
                serialize: paramsSerializer
            };
            else (0, _validatorJsDefault.default).assertOptions(paramsSerializer, {
                encode: validators.function,
                serialize: validators.function
            }, true);
        }
        // Set config.allowAbsoluteUrls
        if (config.allowAbsoluteUrls !== undefined) ;
        else if (this.defaults.allowAbsoluteUrls !== undefined) config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
        else config.allowAbsoluteUrls = true;
        (0, _validatorJsDefault.default).assertOptions(config, {
            baseUrl: validators.spelling('baseURL'),
            withXsrfToken: validators.spelling('withXSRFToken')
        }, true);
        // Set config.method
        config.method = (config.method || this.defaults.method || 'get').toLowerCase();
        // Flatten headers
        let contextHeaders = headers && (0, _utilsJsDefault.default).merge(headers.common, headers[config.method]);
        headers && (0, _utilsJsDefault.default).forEach([
            'delete',
            'get',
            'head',
            'post',
            'put',
            'patch',
            'query',
            'common'
        ], (method)=>{
            delete headers[method];
        });
        config.headers = (0, _axiosHeadersJsDefault.default).concat(contextHeaders, headers);
        // filter out skipped interceptors
        const requestInterceptorChain = [];
        let synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) return;
            synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
            const transitional = config.transitional || (0, _transitionalJsDefault.default);
            const legacyInterceptorReqResOrdering = transitional && transitional.legacyInterceptorReqResOrdering;
            if (legacyInterceptorReqResOrdering) requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
            else requestInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        const responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        let promise;
        let i = 0;
        let len;
        if (!synchronousRequestInterceptors) {
            const chain = [
                (0, _dispatchRequestJsDefault.default).bind(this),
                undefined
            ];
            chain.unshift(...requestInterceptorChain);
            chain.push(...responseInterceptorChain);
            len = chain.length;
            promise = Promise.resolve(config);
            while(i < len)promise = promise.then(chain[i++], chain[i++]);
            return promise;
        }
        len = requestInterceptorChain.length;
        let newConfig = config;
        while(i < len){
            const onFulfilled = requestInterceptorChain[i++];
            const onRejected = requestInterceptorChain[i++];
            try {
                newConfig = onFulfilled(newConfig);
            } catch (error) {
                onRejected.call(this, error);
                break;
            }
        }
        try {
            promise = (0, _dispatchRequestJsDefault.default).call(this, newConfig);
        } catch (error) {
            return Promise.reject(error);
        }
        i = 0;
        len = responseInterceptorChain.length;
        while(i < len)promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
        return promise;
    }
    getUri(config) {
        config = (0, _mergeConfigJsDefault.default)(this.defaults, config);
        const fullPath = (0, _buildFullPathJsDefault.default)(config.baseURL, config.url, config.allowAbsoluteUrls);
        return (0, _buildURLJsDefault.default)(fullPath, config.params, config.paramsSerializer);
    }
}
// Provide aliases for supported request methods
(0, _utilsJsDefault.default).forEach([
    'delete',
    'get',
    'head',
    'options'
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, config) {
        return this.request((0, _mergeConfigJsDefault.default)(config || {}, {
            method,
            url,
            data: (config || {}).data
        }));
    };
});
(0, _utilsJsDefault.default).forEach([
    'post',
    'put',
    'patch',
    'query'
], function forEachMethodWithData(method) {
    function generateHTTPMethod(isForm) {
        return function httpMethod(url, data, config) {
            return this.request((0, _mergeConfigJsDefault.default)(config || {}, {
                method,
                headers: isForm ? {
                    'Content-Type': 'multipart/form-data'
                } : {},
                url,
                data
            }));
        };
    }
    Axios.prototype[method] = generateHTTPMethod();
    // QUERY is a safe/idempotent read method; multipart form bodies don't fit
    // its semantics, so no queryForm shorthand is generated.
    if (method !== 'query') Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});
exports.default = Axios;

},{"../utils.js":"jI6DP","../helpers/buildURL.js":"3CNaw","./InterceptorManager.js":"bt5wS","./dispatchRequest.js":"1p0aT","./mergeConfig.js":"311Mu","./buildFullPath.js":"kg0Bk","../helpers/validator.js":"9wnyh","./AxiosHeaders.js":"9EzTj","../defaults/transitional.js":"cKdyU","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3CNaw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * It replaces URL-encoded forms of `:`, `$`, `,`, and spaces with
 * their plain counterparts (`:`, `$`, `,`, `+`).
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */ parcelHelpers.export(exports, "encode", ()=>encode);
parcelHelpers.export(exports, "default", ()=>buildURL);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosURLSearchParamsJs = require("../helpers/AxiosURLSearchParams.js");
var _axiosURLSearchParamsJsDefault = parcelHelpers.interopDefault(_axiosURLSearchParamsJs);
'use strict';
function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+');
}
function buildURL(url, params, options) {
    if (!params) return url;
    const _encode = options && options.encode || encode;
    const _options = (0, _utilsJsDefault.default).isFunction(options) ? {
        serialize: options
    } : options;
    const serializeFn = _options && _options.serialize;
    let serializedParams;
    if (serializeFn) serializedParams = serializeFn(params, _options);
    else serializedParams = (0, _utilsJsDefault.default).isURLSearchParams(params) ? params.toString() : new (0, _axiosURLSearchParamsJsDefault.default)(params, _options).toString(_encode);
    if (serializedParams) {
        const hashmarkIndex = url.indexOf('#');
        if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
    return url;
}

},{"../utils.js":"jI6DP","../helpers/AxiosURLSearchParams.js":"i7MZs","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"i7MZs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toFormDataJs = require("./toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
'use strict';
/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */ function encode(str) {
    const charMap = {
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+'
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20/g, function replacer(match) {
        return charMap[match];
    });
}
/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */ function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && (0, _toFormDataJsDefault.default)(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
    this._pairs.push([
        name,
        value
    ]);
};
prototype.toString = function toString(encoder) {
    const _encode = encoder ? function(value) {
        return encoder.call(this, value, encode);
    } : encode;
    return this._pairs.map(function each(pair) {
        return _encode(pair[0]) + '=' + _encode(pair[1]);
    }, '').join('&');
};
exports.default = AxiosURLSearchParams;

},{"./toFormData.js":"2RXm4","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2RXm4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored
var _formDataJs = require("../platform/node/classes/FormData.js");
var _formDataJsDefault = parcelHelpers.interopDefault(_formDataJs);
var Buffer = require("adfd9b103875c2dd").Buffer;
'use strict';
/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */ function isVisitable(thing) {
    return (0, _utilsJsDefault.default).isPlainObject(thing) || (0, _utilsJsDefault.default).isArray(thing);
}
/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */ function removeBrackets(key) {
    return (0, _utilsJsDefault.default).endsWith(key, '[]') ? key.slice(0, -2) : key;
}
/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */ function renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
        // eslint-disable-next-line no-param-reassign
        token = removeBrackets(token);
        return !dots && i ? '[' + token + ']' : token;
    }).join(dots ? '.' : '');
}
/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */ function isFlatArray(arr) {
    return (0, _utilsJsDefault.default).isArray(arr) && !arr.some(isVisitable);
}
const predicates = (0, _utilsJsDefault.default).toFlatObject((0, _utilsJsDefault.default), {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
});
/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/ /**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */ function toFormData(obj, formData, options) {
    if (!(0, _utilsJsDefault.default).isObject(obj)) throw new TypeError('target must be an object');
    // eslint-disable-next-line no-param-reassign
    formData = formData || new ((0, _formDataJsDefault.default) || FormData)();
    // eslint-disable-next-line no-param-reassign
    options = (0, _utilsJsDefault.default).toFlatObject(options, {
        metaTokens: true,
        dots: false,
        indexes: false
    }, false, function defined(option, source) {
        // eslint-disable-next-line no-eq-null,eqeqeq
        return !(0, _utilsJsDefault.default).isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    // eslint-disable-next-line no-use-before-define
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
    const maxDepth = options.maxDepth === undefined ? 100 : options.maxDepth;
    const useBlob = _Blob && (0, _utilsJsDefault.default).isSpecCompliantForm(formData);
    if (!(0, _utilsJsDefault.default).isFunction(visitor)) throw new TypeError('visitor must be a function');
    function convertValue(value) {
        if (value === null) return '';
        if ((0, _utilsJsDefault.default).isDate(value)) return value.toISOString();
        if ((0, _utilsJsDefault.default).isBoolean(value)) return value.toString();
        if (!useBlob && (0, _utilsJsDefault.default).isBlob(value)) throw new (0, _axiosErrorJsDefault.default)('Blob is not supported. Use a Buffer instead.');
        if ((0, _utilsJsDefault.default).isArrayBuffer(value) || (0, _utilsJsDefault.default).isTypedArray(value)) return useBlob && typeof Blob === 'function' ? new Blob([
            value
        ]) : Buffer.from(value);
        return value;
    }
    /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */ function defaultVisitor(value, key, path) {
        let arr = value;
        if ((0, _utilsJsDefault.default).isReactNative(formData) && (0, _utilsJsDefault.default).isReactNativeBlob(value)) {
            formData.append(renderKey(path, key, dots), convertValue(value));
            return false;
        }
        if (value && !path && typeof value === 'object') {
            if ((0, _utilsJsDefault.default).endsWith(key, '{}')) {
                // eslint-disable-next-line no-param-reassign
                key = metaTokens ? key : key.slice(0, -2);
                // eslint-disable-next-line no-param-reassign
                value = JSON.stringify(value);
            } else if ((0, _utilsJsDefault.default).isArray(value) && isFlatArray(value) || ((0, _utilsJsDefault.default).isFileList(value) || (0, _utilsJsDefault.default).endsWith(key, '[]')) && (arr = (0, _utilsJsDefault.default).toArray(value))) {
                // eslint-disable-next-line no-param-reassign
                key = removeBrackets(key);
                arr.forEach(function each(el, index) {
                    !((0, _utilsJsDefault.default).isUndefined(el) || el === null) && formData.append(// eslint-disable-next-line no-nested-ternary
                    indexes === true ? renderKey([
                        key
                    ], index, dots) : indexes === null ? key : key + '[]', convertValue(el));
                });
                return false;
            }
        }
        if (isVisitable(value)) return true;
        formData.append(renderKey(path, key, dots), convertValue(value));
        return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
        defaultVisitor,
        convertValue,
        isVisitable
    });
    function build(value, path, depth = 0) {
        if ((0, _utilsJsDefault.default).isUndefined(value)) return;
        if (depth > maxDepth) throw new (0, _axiosErrorJsDefault.default)('Object is too deeply nested (' + depth + ' levels). Max depth: ' + maxDepth, (0, _axiosErrorJsDefault.default).ERR_FORM_DATA_DEPTH_EXCEEDED);
        if (stack.indexOf(value) !== -1) throw Error('Circular reference detected in ' + path.join('.'));
        stack.push(value);
        (0, _utilsJsDefault.default).forEach(value, function each(el, key) {
            const result = !((0, _utilsJsDefault.default).isUndefined(el) || el === null) && visitor.call(formData, el, (0, _utilsJsDefault.default).isString(key) ? key.trim() : key, path, exposedHelpers);
            if (result === true) build(el, path ? path.concat(key) : [
                key
            ], depth + 1);
        });
        stack.pop();
    }
    if (!(0, _utilsJsDefault.default).isObject(obj)) throw new TypeError('data must be an object');
    build(obj);
    return formData;
}
exports.default = toFormData;

},{"adfd9b103875c2dd":"bCaf4","../utils.js":"jI6DP","../core/AxiosError.js":"7z85x","../platform/node/classes/FormData.js":"dVGJ4","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bCaf4":[function(require,module,exports,__globalThis) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ 'use strict';
const base64 = require("9c62938f1dccc73c");
const ieee754 = require("aceacb6a4531a9d2");
const customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' // eslint-disable-line dot-notation
 ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, 'parent', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, 'offset', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === 'string') return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === 'number') throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== 'number') throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';
    if (!Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + ' bytes');
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== 'string') throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case 'ascii':
        case 'latin1':
        case 'binary':
            return len;
        case 'utf8':
        case 'utf-8':
            return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return len * 2;
        case 'hex':
            return len >>> 1;
        case 'base64':
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return '';
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return '';
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return '';
    if (!encoding) encoding = 'utf8';
    while(true)switch(encoding){
        case 'hex':
            return hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
            return utf8Slice(this, start, end);
        case 'ascii':
            return asciiSlice(this, start, end);
        case 'latin1':
        case 'binary':
            return latin1Slice(this, start, end);
        case 'base64':
            return base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
    for(let i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return '';
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = '';
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
    if (this.length > max) str += ' ... ';
    return '<Buffer ' + str + '>';
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError('out of range index');
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === 'string') val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError('val must be string, number or Buffer');
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i;
    if (dir) {
        let foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError('Attempt to write outside buffer bounds');
    if (!encoding) encoding = 'utf8';
    let loweredCase = false;
    for(;;)switch(encoding){
        case 'hex':
            return hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
            return utf8Write(this, string, offset, length);
        case 'ascii':
        case 'latin1':
        case 'binary':
            return asciiWrite(this, string, offset, length);
        case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = '';
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = '';
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = '';
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = '';
    for(let i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = '';
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset + --byteLength];
    let mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let i = byteLength;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 2 ** 16 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let i = byteLength - 1;
    let mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = byteLength - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError('targetStart out of bounds');
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== 'string') throw new TypeError('encoding must be a string');
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === 'number') val = val & 255;
    else if (typeof val === 'boolean') val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError('Out of range index');
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === 'number') for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, 'message', {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, 'code', {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
E('ERR_BUFFER_OUT_OF_BOUNDS', function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return 'Attempt to access memory outside buffer bounds';
}, RangeError);
E('ERR_INVALID_ARG_TYPE', function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E('ERR_OUT_OF_RANGE', function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
    else if (typeof input === 'bigint') {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
        received += 'n';
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = '';
    let i = val.length;
    const start = val[0] === '-' ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength) {
    validateNumber(offset, 'offset');
    if (buf[offset] === undefined || buf[offset + byteLength] === undefined) boundsError(offset, buf.length - (byteLength + 1));
}
function checkIntBI(value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
        const n = typeof min === 'bigint' ? 'n' : '';
        let range;
        if (byteLength > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new errors.ERR_OUT_OF_RANGE('value', range, value);
    }
    checkBounds(buf, offset, byteLength);
}
function validateNumber(value, name) {
    if (typeof value !== 'number') throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value);
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value);
    }
    if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new errors.ERR_OUT_OF_RANGE(type || 'offset', `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + '=';
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error('Invalid code point');
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = '0123456789abcdef';
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error('BigInt not supported');
}

},{"9c62938f1dccc73c":"9I2RJ","aceacb6a4531a9d2":"geXY6"}],"9I2RJ":[function(require,module,exports,__globalThis) {
'use strict';
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join('');
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
    }
    return parts.join('');
}

},{}],"geXY6":[function(require,module,exports,__globalThis) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"7z85x":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosHeadersJs = require("./AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
'use strict';
const REDACTED = '[REDACTED ****]';
function hasOwnOrPrototypeToJSON(source) {
    if ((0, _utilsJsDefault.default).hasOwnProp(source, 'toJSON')) return true;
    let prototype = Object.getPrototypeOf(source);
    while(prototype && prototype !== Object.prototype){
        if ((0, _utilsJsDefault.default).hasOwnProp(prototype, 'toJSON')) return true;
        prototype = Object.getPrototypeOf(prototype);
    }
    return false;
}
// Build a plain-object snapshot of `config` and replace the value of any key
// (case-insensitive) listed in `redactKeys` with REDACTED. Walks through arrays
// and AxiosHeaders, and short-circuits on circular references.
function redactConfig(config, redactKeys) {
    const lowerKeys = new Set(redactKeys.map((k)=>String(k).toLowerCase()));
    const seen = [];
    const visit = (source)=>{
        if (source === null || typeof source !== 'object') return source;
        if ((0, _utilsJsDefault.default).isBuffer(source)) return source;
        if (seen.indexOf(source) !== -1) return undefined;
        if (source instanceof (0, _axiosHeadersJsDefault.default)) source = source.toJSON();
        seen.push(source);
        let result;
        if ((0, _utilsJsDefault.default).isArray(source)) {
            result = [];
            source.forEach((v, i)=>{
                const reducedValue = visit(v);
                if (!(0, _utilsJsDefault.default).isUndefined(reducedValue)) result[i] = reducedValue;
            });
        } else {
            if (!(0, _utilsJsDefault.default).isPlainObject(source) && hasOwnOrPrototypeToJSON(source)) {
                seen.pop();
                return source;
            }
            result = Object.create(null);
            for (const [key, value] of Object.entries(source)){
                const reducedValue = lowerKeys.has(key.toLowerCase()) ? REDACTED : visit(value);
                if (!(0, _utilsJsDefault.default).isUndefined(reducedValue)) result[key] = reducedValue;
            }
        }
        seen.pop();
        return result;
    };
    return visit(config);
}
class AxiosError extends Error {
    static from(error, code, config, request, response, customProps) {
        const axiosError = new AxiosError(error.message, code || error.code, config, request, response);
        axiosError.cause = error;
        axiosError.name = error.name;
        // Preserve status from the original error if not already set from response
        if (error.status != null && axiosError.status == null) axiosError.status = error.status;
        customProps && Object.assign(axiosError, customProps);
        return axiosError;
    }
    /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */ constructor(message, code, config, request, response){
        super(message);
        // Make message enumerable to maintain backward compatibility
        // The native Error constructor sets message as non-enumerable,
        // but axios < v1.13.3 had it as enumerable
        Object.defineProperty(this, 'message', {
            // Null-proto descriptor so a polluted Object.prototype.get cannot turn
            // this data descriptor into an accessor descriptor on the way in.
            __proto__: null,
            value: message,
            enumerable: true,
            writable: true,
            configurable: true
        });
        this.name = 'AxiosError';
        this.isAxiosError = true;
        code && (this.code = code);
        config && (this.config = config);
        request && (this.request = request);
        if (response) {
            this.response = response;
            this.status = response.status;
        }
    }
    toJSON() {
        // Opt-in redaction: when the request config carries a `redact` array, the
        // value of any matching key (case-insensitive, at any depth) is replaced
        // with REDACTED in the serialized snapshot. Undefined or empty leaves the
        // existing serialization behavior unchanged.
        const config = this.config;
        const redactKeys = config && (0, _utilsJsDefault.default).hasOwnProp(config, 'redact') ? config.redact : undefined;
        const serializedConfig = (0, _utilsJsDefault.default).isArray(redactKeys) && redactKeys.length > 0 ? redactConfig(config, redactKeys) : (0, _utilsJsDefault.default).toJSONObject(config);
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: serializedConfig,
            code: this.code,
            status: this.status
        };
    }
}
// This can be changed to static properties as soon as the parser options in .eslint.cjs are updated.
AxiosError.ERR_BAD_OPTION_VALUE = 'ERR_BAD_OPTION_VALUE';
AxiosError.ERR_BAD_OPTION = 'ERR_BAD_OPTION';
AxiosError.ECONNABORTED = 'ECONNABORTED';
AxiosError.ETIMEDOUT = 'ETIMEDOUT';
AxiosError.ECONNREFUSED = 'ECONNREFUSED';
AxiosError.ERR_NETWORK = 'ERR_NETWORK';
AxiosError.ERR_FR_TOO_MANY_REDIRECTS = 'ERR_FR_TOO_MANY_REDIRECTS';
AxiosError.ERR_DEPRECATED = 'ERR_DEPRECATED';
AxiosError.ERR_BAD_RESPONSE = 'ERR_BAD_RESPONSE';
AxiosError.ERR_BAD_REQUEST = 'ERR_BAD_REQUEST';
AxiosError.ERR_CANCELED = 'ERR_CANCELED';
AxiosError.ERR_NOT_SUPPORT = 'ERR_NOT_SUPPORT';
AxiosError.ERR_INVALID_URL = 'ERR_INVALID_URL';
AxiosError.ERR_FORM_DATA_DEPTH_EXCEEDED = 'ERR_FORM_DATA_DEPTH_EXCEEDED';
exports.default = AxiosError;

},{"../utils.js":"jI6DP","./AxiosHeaders.js":"9EzTj","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9EzTj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _parseHeadersJs = require("../helpers/parseHeaders.js");
var _parseHeadersJsDefault = parcelHelpers.interopDefault(_parseHeadersJs);
'use strict';
const $internals = Symbol('internals');
const INVALID_HEADER_VALUE_CHARS_RE = /[^\x09\x20-\x7E\x80-\xFF]/g;
function trimSPorHTAB(str) {
    let start = 0;
    let end = str.length;
    while(start < end){
        const code = str.charCodeAt(start);
        if (code !== 0x09 && code !== 0x20) break;
        start += 1;
    }
    while(end > start){
        const code = str.charCodeAt(end - 1);
        if (code !== 0x09 && code !== 0x20) break;
        end -= 1;
    }
    return start === 0 && end === str.length ? str : str.slice(start, end);
}
function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
}
function sanitizeHeaderValue(str) {
    return trimSPorHTAB(str.replace(INVALID_HEADER_VALUE_CHARS_RE, ''));
}
function normalizeValue(value) {
    if (value === false || value == null) return value;
    return (0, _utilsJsDefault.default).isArray(value) ? value.map(normalizeValue) : sanitizeHeaderValue(String(value));
}
function parseTokens(str) {
    const tokens = Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while(match = tokensRE.exec(str))tokens[match[1]] = match[2];
    return tokens;
}
const isValidHeaderName = (str)=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
    if ((0, _utilsJsDefault.default).isFunction(filter)) return filter.call(this, value, header);
    if (isHeaderNameFilter) value = header;
    if (!(0, _utilsJsDefault.default).isString(value)) return;
    if ((0, _utilsJsDefault.default).isString(filter)) return value.indexOf(filter) !== -1;
    if ((0, _utilsJsDefault.default).isRegExp(filter)) return filter.test(value);
}
function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str)=>{
        return char.toUpperCase() + str;
    });
}
function buildAccessors(obj, header) {
    const accessorName = (0, _utilsJsDefault.default).toCamelCase(' ' + header);
    [
        'get',
        'set',
        'has'
    ].forEach((methodName)=>{
        Object.defineProperty(obj, methodName + accessorName, {
            // Null-proto descriptor so a polluted Object.prototype.get cannot turn
            // this data descriptor into an accessor descriptor on the way in.
            __proto__: null,
            value: function(arg1, arg2, arg3) {
                return this[methodName].call(this, header, arg1, arg2, arg3);
            },
            configurable: true
        });
    });
}
class AxiosHeaders {
    constructor(headers){
        headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
        const self = this;
        function setHeader(_value, _header, _rewrite) {
            const lHeader = normalizeHeader(_header);
            if (!lHeader) throw new Error('header name must be a non-empty string');
            const key = (0, _utilsJsDefault.default).findKey(self, lHeader);
            if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) self[key || _header] = normalizeValue(_value);
        }
        const setHeaders = (headers, _rewrite)=>(0, _utilsJsDefault.default).forEach(headers, (_value, _header)=>setHeader(_value, _header, _rewrite));
        if ((0, _utilsJsDefault.default).isPlainObject(header) || header instanceof this.constructor) setHeaders(header, valueOrRewrite);
        else if ((0, _utilsJsDefault.default).isString(header) && (header = header.trim()) && !isValidHeaderName(header)) setHeaders((0, _parseHeadersJsDefault.default)(header), valueOrRewrite);
        else if ((0, _utilsJsDefault.default).isObject(header) && (0, _utilsJsDefault.default).isIterable(header)) {
            let obj = {}, dest, key;
            for (const entry of header){
                if (!(0, _utilsJsDefault.default).isArray(entry)) throw TypeError('Object iterator must return a key-value pair');
                obj[key = entry[0]] = (dest = obj[key]) ? (0, _utilsJsDefault.default).isArray(dest) ? [
                    ...dest,
                    entry[1]
                ] : [
                    dest,
                    entry[1]
                ] : entry[1];
            }
            setHeaders(obj, valueOrRewrite);
        } else header != null && setHeader(valueOrRewrite, header, rewrite);
        return this;
    }
    get(header, parser) {
        header = normalizeHeader(header);
        if (header) {
            const key = (0, _utilsJsDefault.default).findKey(this, header);
            if (key) {
                const value = this[key];
                if (!parser) return value;
                if (parser === true) return parseTokens(value);
                if ((0, _utilsJsDefault.default).isFunction(parser)) return parser.call(this, value, key);
                if ((0, _utilsJsDefault.default).isRegExp(parser)) return parser.exec(value);
                throw new TypeError('parser must be boolean|regexp|function');
            }
        }
    }
    has(header, matcher) {
        header = normalizeHeader(header);
        if (header) {
            const key = (0, _utilsJsDefault.default).findKey(this, header);
            return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
        }
        return false;
    }
    delete(header, matcher) {
        const self = this;
        let deleted = false;
        function deleteHeader(_header) {
            _header = normalizeHeader(_header);
            if (_header) {
                const key = (0, _utilsJsDefault.default).findKey(self, _header);
                if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
                    delete self[key];
                    deleted = true;
                }
            }
        }
        if ((0, _utilsJsDefault.default).isArray(header)) header.forEach(deleteHeader);
        else deleteHeader(header);
        return deleted;
    }
    clear(matcher) {
        const keys = Object.keys(this);
        let i = keys.length;
        let deleted = false;
        while(i--){
            const key = keys[i];
            if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
                delete this[key];
                deleted = true;
            }
        }
        return deleted;
    }
    normalize(format) {
        const self = this;
        const headers = {};
        (0, _utilsJsDefault.default).forEach(this, (value, header)=>{
            const key = (0, _utilsJsDefault.default).findKey(headers, header);
            if (key) {
                self[key] = normalizeValue(value);
                delete self[header];
                return;
            }
            const normalized = format ? formatHeader(header) : String(header).trim();
            if (normalized !== header) delete self[header];
            self[normalized] = normalizeValue(value);
            headers[normalized] = true;
        });
        return this;
    }
    concat(...targets) {
        return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
        const obj = Object.create(null);
        (0, _utilsJsDefault.default).forEach(this, (value, header)=>{
            value != null && value !== false && (obj[header] = asStrings && (0, _utilsJsDefault.default).isArray(value) ? value.join(', ') : value);
        });
        return obj;
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([header, value])=>header + ': ' + value).join('\n');
    }
    getSetCookie() {
        return this.get('set-cookie') || [];
    }
    get [Symbol.toStringTag]() {
        return 'AxiosHeaders';
    }
    static from(thing) {
        return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
        const computed = new this(first);
        targets.forEach((target)=>computed.set(target));
        return computed;
    }
    static accessor(header) {
        const internals = this[$internals] = this[$internals] = {
            accessors: {}
        };
        const accessors = internals.accessors;
        const prototype = this.prototype;
        function defineAccessor(_header) {
            const lHeader = normalizeHeader(_header);
            if (!accessors[lHeader]) {
                buildAccessors(prototype, _header);
                accessors[lHeader] = true;
            }
        }
        (0, _utilsJsDefault.default).isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
        return this;
    }
}
AxiosHeaders.accessor([
    'Content-Type',
    'Content-Length',
    'Accept',
    'Accept-Encoding',
    'User-Agent',
    'Authorization'
]);
// reserved names hotfix
(0, _utilsJsDefault.default).reduceDescriptors(AxiosHeaders.prototype, ({ value }, key)=>{
    let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
    return {
        get: ()=>value,
        set (headerValue) {
            this[mapped] = headerValue;
        }
    };
});
(0, _utilsJsDefault.default).freezeMethods(AxiosHeaders);
exports.default = AxiosHeaders;

},{"../utils.js":"jI6DP","../helpers/parseHeaders.js":"H8RrA","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"H8RrA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
'use strict';
// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = (0, _utilsJsDefault.default).toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent'
]);
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */ exports.default = (rawHeaders)=>{
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
        i = line.indexOf(':');
        key = line.substring(0, i).trim().toLowerCase();
        val = line.substring(i + 1).trim();
        if (!key || parsed[key] && ignoreDuplicateOf[key]) return;
        if (key === 'set-cookie') {
            if (parsed[key]) parsed[key].push(val);
            else parsed[key] = [
                val
            ];
        } else parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    });
    return parsed;
};

},{"../utils.js":"jI6DP","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dVGJ4":[function(require,module,exports,__globalThis) {
// eslint-disable-next-line strict
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = null;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bt5wS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
'use strict';
class InterceptorManager {
    constructor(){
        this.handlers = [];
    }
    /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */ use(fulfilled, rejected, options) {
        this.handlers.push({
            fulfilled,
            rejected,
            synchronous: options ? options.synchronous : false,
            runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
    }
    /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */ eject(id) {
        if (this.handlers[id]) this.handlers[id] = null;
    }
    /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */ clear() {
        if (this.handlers) this.handlers = [];
    }
    /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */ forEach(fn) {
        (0, _utilsJsDefault.default).forEach(this.handlers, function forEachHandler(h) {
            if (h !== null) fn(h);
        });
    }
}
exports.default = InterceptorManager;

},{"../utils.js":"jI6DP","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1p0aT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>dispatchRequest);
var _transformDataJs = require("./transformData.js");
var _transformDataJsDefault = parcelHelpers.interopDefault(_transformDataJs);
var _isCancelJs = require("../cancel/isCancel.js");
var _isCancelJsDefault = parcelHelpers.interopDefault(_isCancelJs);
var _indexJs = require("../defaults/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _canceledErrorJs = require("../cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _adaptersJs = require("../adapters/adapters.js");
var _adaptersJsDefault = parcelHelpers.interopDefault(_adaptersJs);
'use strict';
/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */ function throwIfCancellationRequested(config) {
    if (config.cancelToken) config.cancelToken.throwIfRequested();
    if (config.signal && config.signal.aborted) throw new (0, _canceledErrorJsDefault.default)(null, config);
}
function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = (0, _axiosHeadersJsDefault.default).from(config.headers);
    // Transform request data
    config.data = (0, _transformDataJsDefault.default).call(config, config.transformRequest);
    if ([
        'post',
        'put',
        'patch'
    ].indexOf(config.method) !== -1) config.headers.setContentType('application/x-www-form-urlencoded', false);
    const adapter = (0, _adaptersJsDefault.default).getAdapter(config.adapter || (0, _indexJsDefault.default).adapter, config);
    return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        // Expose the current response on config so that transformResponse can
        // attach it to any AxiosError it throws (e.g. on JSON parse failure).
        // We clean it up afterwards to avoid polluting the config object.
        config.response = response;
        try {
            response.data = (0, _transformDataJsDefault.default).call(config, config.transformResponse, response);
        } finally{
            delete config.response;
        }
        response.headers = (0, _axiosHeadersJsDefault.default).from(response.headers);
        return response;
    }, function onAdapterRejection(reason) {
        if (!(0, _isCancelJsDefault.default)(reason)) {
            throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) {
                config.response = reason.response;
                try {
                    reason.response.data = (0, _transformDataJsDefault.default).call(config, config.transformResponse, reason.response);
                } finally{
                    delete config.response;
                }
                reason.response.headers = (0, _axiosHeadersJsDefault.default).from(reason.response.headers);
            }
        }
        return Promise.reject(reason);
    });
}

},{"./transformData.js":"8ANo1","../cancel/isCancel.js":"fkTUi","../defaults/index.js":"9WXKx","../cancel/CanceledError.js":"9yG1c","../core/AxiosHeaders.js":"9EzTj","../adapters/adapters.js":"hI0HS","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8ANo1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>transformData);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _indexJs = require("../defaults/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
'use strict';
function transformData(fns, response) {
    const config = this || (0, _indexJsDefault.default);
    const context = response || config;
    const headers = (0, _axiosHeadersJsDefault.default).from(context.headers);
    let data = context.data;
    (0, _utilsJsDefault.default).forEach(fns, function transform(fn) {
        data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
    });
    headers.normalize();
    return data;
}

},{"../utils.js":"jI6DP","../defaults/index.js":"9WXKx","../core/AxiosHeaders.js":"9EzTj","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9WXKx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _transitionalJs = require("./transitional.js");
var _transitionalJsDefault = parcelHelpers.interopDefault(_transitionalJs);
var _toFormDataJs = require("../helpers/toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
var _toURLEncodedFormJs = require("../helpers/toURLEncodedForm.js");
var _toURLEncodedFormJsDefault = parcelHelpers.interopDefault(_toURLEncodedFormJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _formDataToJSONJs = require("../helpers/formDataToJSON.js");
var _formDataToJSONJsDefault = parcelHelpers.interopDefault(_formDataToJSONJs);
'use strict';
const own = (obj, key)=>obj != null && (0, _utilsJsDefault.default).hasOwnProp(obj, key) ? obj[key] : undefined;
/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */ function stringifySafely(rawValue, parser, encoder) {
    if ((0, _utilsJsDefault.default).isString(rawValue)) try {
        (parser || JSON.parse)(rawValue);
        return (0, _utilsJsDefault.default).trim(rawValue);
    } catch (e) {
        if (e.name !== 'SyntaxError') throw e;
    }
    return (encoder || JSON.stringify)(rawValue);
}
const defaults = {
    transitional: (0, _transitionalJsDefault.default),
    adapter: [
        'xhr',
        'http',
        'fetch'
    ],
    transformRequest: [
        function transformRequest(data, headers) {
            const contentType = headers.getContentType() || '';
            const hasJSONContentType = contentType.indexOf('application/json') > -1;
            const isObjectPayload = (0, _utilsJsDefault.default).isObject(data);
            if (isObjectPayload && (0, _utilsJsDefault.default).isHTMLForm(data)) data = new FormData(data);
            const isFormData = (0, _utilsJsDefault.default).isFormData(data);
            if (isFormData) return hasJSONContentType ? JSON.stringify((0, _formDataToJSONJsDefault.default)(data)) : data;
            if ((0, _utilsJsDefault.default).isArrayBuffer(data) || (0, _utilsJsDefault.default).isBuffer(data) || (0, _utilsJsDefault.default).isStream(data) || (0, _utilsJsDefault.default).isFile(data) || (0, _utilsJsDefault.default).isBlob(data) || (0, _utilsJsDefault.default).isReadableStream(data)) return data;
            if ((0, _utilsJsDefault.default).isArrayBufferView(data)) return data.buffer;
            if ((0, _utilsJsDefault.default).isURLSearchParams(data)) {
                headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
                return data.toString();
            }
            let isFileList;
            if (isObjectPayload) {
                const formSerializer = own(this, 'formSerializer');
                if (contentType.indexOf('application/x-www-form-urlencoded') > -1) return (0, _toURLEncodedFormJsDefault.default)(data, formSerializer).toString();
                if ((isFileList = (0, _utilsJsDefault.default).isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
                    const env = own(this, 'env');
                    const _FormData = env && env.FormData;
                    return (0, _toFormDataJsDefault.default)(isFileList ? {
                        'files[]': data
                    } : data, _FormData && new _FormData(), formSerializer);
                }
            }
            if (isObjectPayload || hasJSONContentType) {
                headers.setContentType('application/json', false);
                return stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            const transitional = own(this, 'transitional') || defaults.transitional;
            const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            const responseType = own(this, 'responseType');
            const JSONRequested = responseType === 'json';
            if ((0, _utilsJsDefault.default).isResponse(data) || (0, _utilsJsDefault.default).isReadableStream(data)) return data;
            if (data && (0, _utilsJsDefault.default).isString(data) && (forcedJSONParsing && !responseType || JSONRequested)) {
                const silentJSONParsing = transitional && transitional.silentJSONParsing;
                const strictJSONParsing = !silentJSONParsing && JSONRequested;
                try {
                    return JSON.parse(data, own(this, 'parseReviver'));
                } catch (e) {
                    if (strictJSONParsing) {
                        if (e.name === 'SyntaxError') throw (0, _axiosErrorJsDefault.default).from(e, (0, _axiosErrorJsDefault.default).ERR_BAD_RESPONSE, this, null, own(this, 'response'));
                        throw e;
                    }
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: (0, _indexJsDefault.default).classes.FormData,
        Blob: (0, _indexJsDefault.default).classes.Blob
    },
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    headers: {
        common: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': undefined
        }
    }
};
(0, _utilsJsDefault.default).forEach([
    'delete',
    'get',
    'head',
    'post',
    'put',
    'patch',
    'query'
], (method)=>{
    defaults.headers[method] = {};
});
exports.default = defaults;

},{"../utils.js":"jI6DP","../core/AxiosError.js":"7z85x","./transitional.js":"cKdyU","../helpers/toFormData.js":"2RXm4","../helpers/toURLEncodedForm.js":"keaer","../platform/index.js":"626Zd","../helpers/formDataToJSON.js":"fefHq","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cKdyU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
'use strict';
exports.default = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false,
    legacyInterceptorReqResOrdering: true
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"keaer":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>toURLEncodedForm);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _toFormDataJs = require("./toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
'use strict';
function toURLEncodedForm(data, options) {
    return (0, _toFormDataJsDefault.default)(data, new (0, _indexJsDefault.default).classes.URLSearchParams(), {
        visitor: function(value, key, path, helpers) {
            if ((0, _indexJsDefault.default).isNode && (0, _utilsJsDefault.default).isBuffer(value)) {
                this.append(key, value.toString('base64'));
                return false;
            }
            return helpers.defaultVisitor.apply(this, arguments);
        },
        ...options
    });
}

},{"../utils.js":"jI6DP","./toFormData.js":"2RXm4","../platform/index.js":"626Zd","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"626Zd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./node/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _utilsJs = require("./common/utils.js");
exports.default = {
    ..._utilsJs,
    ...(0, _indexJsDefault.default)
};

},{"./node/index.js":"1TZsR","./common/utils.js":"3Z7Gl","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1TZsR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _urlsearchParamsJs = require("./classes/URLSearchParams.js");
var _urlsearchParamsJsDefault = parcelHelpers.interopDefault(_urlsearchParamsJs);
var _formDataJs = require("./classes/FormData.js");
var _formDataJsDefault = parcelHelpers.interopDefault(_formDataJs);
var _blobJs = require("./classes/Blob.js");
var _blobJsDefault = parcelHelpers.interopDefault(_blobJs);
exports.default = {
    isBrowser: true,
    classes: {
        URLSearchParams: (0, _urlsearchParamsJsDefault.default),
        FormData: (0, _formDataJsDefault.default),
        Blob: (0, _blobJsDefault.default)
    },
    protocols: [
        'http',
        'https',
        'file',
        'blob',
        'url',
        'data'
    ]
};

},{"./classes/URLSearchParams.js":"6cHm6","./classes/FormData.js":"7ag3a","./classes/Blob.js":"hRvHl","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6cHm6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _axiosURLSearchParamsJs = require("../../../helpers/AxiosURLSearchParams.js");
var _axiosURLSearchParamsJsDefault = parcelHelpers.interopDefault(_axiosURLSearchParamsJs);
'use strict';
exports.default = typeof URLSearchParams !== 'undefined' ? URLSearchParams : (0, _axiosURLSearchParamsJsDefault.default);

},{"../../../helpers/AxiosURLSearchParams.js":"i7MZs","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7ag3a":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
'use strict';
exports.default = typeof FormData !== 'undefined' ? FormData : null;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hRvHl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
'use strict';
exports.default = typeof Blob !== 'undefined' ? Blob : null;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3Z7Gl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasBrowserEnv", ()=>hasBrowserEnv);
parcelHelpers.export(exports, "hasStandardBrowserWebWorkerEnv", ()=>hasStandardBrowserWebWorkerEnv);
parcelHelpers.export(exports, "hasStandardBrowserEnv", ()=>hasStandardBrowserEnv);
parcelHelpers.export(exports, "navigator", ()=>_navigator);
parcelHelpers.export(exports, "origin", ()=>origin);
const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';
const _navigator = typeof navigator === 'object' && navigator || undefined;
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */ const hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || [
    'ReactNative',
    'NativeScript',
    'NS'
].indexOf(_navigator.product) < 0);
/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */ const hasStandardBrowserWebWorkerEnv = (()=>{
    return typeof WorkerGlobalScope !== 'undefined' && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === 'function';
})();
const origin = hasBrowserEnv && window.location.href || 'http://localhost';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fefHq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
'use strict';
/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */ function parsePropPath(name) {
    // foo[x][y][z]
    // foo.x.y.z
    // foo-x-y-z
    // foo x y z
    return (0, _utilsJsDefault.default).matchAll(/\w+|\[(\w*)]/g, name).map((match)=>{
        return match[0] === '[]' ? '' : match[1] || match[0];
    });
}
/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */ function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for(i = 0; i < len; i++){
        key = keys[i];
        obj[key] = arr[key];
    }
    return obj;
}
/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */ function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
        let name = path[index++];
        if (name === '__proto__') return true;
        const isNumericKey = Number.isFinite(+name);
        const isLast = index >= path.length;
        name = !name && (0, _utilsJsDefault.default).isArray(target) ? target.length : name;
        if (isLast) {
            if ((0, _utilsJsDefault.default).hasOwnProp(target, name)) target[name] = (0, _utilsJsDefault.default).isArray(target[name]) ? target[name].concat(value) : [
                target[name],
                value
            ];
            else target[name] = value;
            return !isNumericKey;
        }
        if (!target[name] || !(0, _utilsJsDefault.default).isObject(target[name])) target[name] = [];
        const result = buildPath(path, value, target[name], index);
        if (result && (0, _utilsJsDefault.default).isArray(target[name])) target[name] = arrayToObject(target[name]);
        return !isNumericKey;
    }
    if ((0, _utilsJsDefault.default).isFormData(formData) && (0, _utilsJsDefault.default).isFunction(formData.entries)) {
        const obj = {};
        (0, _utilsJsDefault.default).forEachEntry(formData, (name, value)=>{
            buildPath(parsePropPath(name), value, obj, 0);
        });
        return obj;
    }
    return null;
}
exports.default = formDataToJSON;

},{"../utils.js":"jI6DP","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fkTUi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isCancel);
'use strict';
function isCancel(value) {
    return !!(value && value.__CANCEL__);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9yG1c":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
'use strict';
class CanceledError extends (0, _axiosErrorJsDefault.default) {
    /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */ constructor(message, config, request){
        super(message == null ? 'canceled' : message, (0, _axiosErrorJsDefault.default).ERR_CANCELED, config, request);
        this.name = 'CanceledError';
        this.__CANCEL__ = true;
    }
}
exports.default = CanceledError;

},{"../core/AxiosError.js":"7z85x","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hI0HS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _httpJs = require("./http.js");
var _httpJsDefault = parcelHelpers.interopDefault(_httpJs);
var _xhrJs = require("./xhr.js");
var _xhrJsDefault = parcelHelpers.interopDefault(_xhrJs);
var _fetchJs = require("./fetch.js");
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
/**
 * Known adapters mapping.
 * Provides environment-specific adapters for Axios:
 * - `http` for Node.js
 * - `xhr` for browsers
 * - `fetch` for fetch API-based requests
 *
 * @type {Object<string, Function|Object>}
 */ const knownAdapters = {
    http: (0, _httpJsDefault.default),
    xhr: (0, _xhrJsDefault.default),
    fetch: {
        get: _fetchJs.getFetch
    }
};
// Assign adapter names for easier debugging and identification
(0, _utilsJsDefault.default).forEach(knownAdapters, (fn, value)=>{
    if (fn) {
        try {
            // Null-proto descriptors so a polluted Object.prototype.get cannot turn
            // these data descriptors into accessor descriptors on the way in.
            Object.defineProperty(fn, 'name', {
                __proto__: null,
                value
            });
        } catch (e) {
        // eslint-disable-next-line no-empty
        }
        Object.defineProperty(fn, 'adapterName', {
            __proto__: null,
            value
        });
    }
});
/**
 * Render a rejection reason string for unknown or unsupported adapters
 *
 * @param {string} reason
 * @returns {string}
 */ const renderReason = (reason)=>`- ${reason}`;
/**
 * Check if the adapter is resolved (function, null, or false)
 *
 * @param {Function|null|false} adapter
 * @returns {boolean}
 */ const isResolvedHandle = (adapter)=>(0, _utilsJsDefault.default).isFunction(adapter) || adapter === null || adapter === false;
/**
 * Get the first suitable adapter from the provided list.
 * Tries each adapter in order until a supported one is found.
 * Throws an AxiosError if no adapter is suitable.
 *
 * @param {Array<string|Function>|string|Function} adapters - Adapter(s) by name or function.
 * @param {Object} config - Axios request configuration
 * @throws {AxiosError} If no suitable adapter is available
 * @returns {Function} The resolved adapter function
 */ function getAdapter(adapters, config) {
    adapters = (0, _utilsJsDefault.default).isArray(adapters) ? adapters : [
        adapters
    ];
    const { length } = adapters;
    let nameOrAdapter;
    let adapter;
    const rejectedReasons = {};
    for(let i = 0; i < length; i++){
        nameOrAdapter = adapters[i];
        let id;
        adapter = nameOrAdapter;
        if (!isResolvedHandle(nameOrAdapter)) {
            adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
            if (adapter === undefined) throw new (0, _axiosErrorJsDefault.default)(`Unknown adapter '${id}'`);
        }
        if (adapter && ((0, _utilsJsDefault.default).isFunction(adapter) || (adapter = adapter.get(config)))) break;
        rejectedReasons[id || '#' + i] = adapter;
    }
    if (!adapter) {
        const reasons = Object.entries(rejectedReasons).map(([id, state])=>`adapter ${id} ` + (state === false ? 'is not supported by the environment' : 'is not available in the build'));
        let s = length ? reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0]) : 'as no adapter specified';
        throw new (0, _axiosErrorJsDefault.default)(`There is no suitable adapter to dispatch the request ` + s, 'ERR_NOT_SUPPORT');
    }
    return adapter;
}
/**
 * Exports Axios adapters and utility to resolve an adapter
 */ exports.default = {
    /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */ getAdapter,
    /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */ adapters: knownAdapters
};

},{"../utils.js":"jI6DP","./http.js":"dVGJ4","./xhr.js":"ao6fA","./fetch.js":"d5PZl","../core/AxiosError.js":"7z85x","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ao6fA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _settleJs = require("../core/settle.js");
var _settleJsDefault = parcelHelpers.interopDefault(_settleJs);
var _transitionalJs = require("../defaults/transitional.js");
var _transitionalJsDefault = parcelHelpers.interopDefault(_transitionalJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _canceledErrorJs = require("../cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _parseProtocolJs = require("../helpers/parseProtocol.js");
var _parseProtocolJsDefault = parcelHelpers.interopDefault(_parseProtocolJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _progressEventReducerJs = require("../helpers/progressEventReducer.js");
var _resolveConfigJs = require("../helpers/resolveConfig.js");
var _resolveConfigJsDefault = parcelHelpers.interopDefault(_resolveConfigJs);
const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';
exports.default = isXHRAdapterSupported && function(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        const _config = (0, _resolveConfigJsDefault.default)(config);
        let requestData = _config.data;
        const requestHeaders = (0, _axiosHeadersJsDefault.default).from(_config.headers).normalize();
        let { responseType, onUploadProgress, onDownloadProgress } = _config;
        let onCanceled;
        let uploadThrottled, downloadThrottled;
        let flushUpload, flushDownload;
        function done() {
            flushUpload && flushUpload(); // flush events
            flushDownload && flushDownload(); // flush events
            _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
            _config.signal && _config.signal.removeEventListener('abort', onCanceled);
        }
        let request = new XMLHttpRequest();
        request.open(_config.method.toUpperCase(), _config.url, true);
        // Set the request timeout in MS
        request.timeout = _config.timeout;
        function onloadend() {
            if (!request) return;
            // Prepare the response
            const responseHeaders = (0, _axiosHeadersJsDefault.default).from('getAllResponseHeaders' in request && request.getAllResponseHeaders());
            const responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
            const response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config,
                request
            };
            (0, _settleJsDefault.default)(function _resolve(value) {
                resolve(value);
                done();
            }, function _reject(err) {
                reject(err);
                done();
            }, response);
            // Clean up request
            request = null;
        }
        if ('onloadend' in request) // Use onloadend if available
        request.onloadend = onloadend;
        else // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) return;
            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.startsWith('file:'))) return;
            // readystate handler is calling before onerror or ontimeout handlers,
            // so we should call onloadend on the next 'tick'
            setTimeout(onloadend);
        };
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) return;
            reject(new (0, _axiosErrorJsDefault.default)('Request aborted', (0, _axiosErrorJsDefault.default).ECONNABORTED, config, request));
            done();
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError(event) {
            // Browsers deliver a ProgressEvent in XHR onerror
            // (message may be empty; when present, surface it)
            // See https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/error_event
            const msg = event && event.message ? event.message : 'Network Error';
            const err = new (0, _axiosErrorJsDefault.default)(msg, (0, _axiosErrorJsDefault.default).ERR_NETWORK, config, request);
            // attach the underlying event for consumers who want details
            err.event = event || null;
            reject(err);
            done();
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            let timeoutErrorMessage = _config.timeout ? 'timeout of ' + _config.timeout + 'ms exceeded' : 'timeout exceeded';
            const transitional = _config.transitional || (0, _transitionalJsDefault.default);
            if (_config.timeoutErrorMessage) timeoutErrorMessage = _config.timeoutErrorMessage;
            reject(new (0, _axiosErrorJsDefault.default)(timeoutErrorMessage, transitional.clarifyTimeoutError ? (0, _axiosErrorJsDefault.default).ETIMEDOUT : (0, _axiosErrorJsDefault.default).ECONNABORTED, config, request));
            done();
            // Clean up request
            request = null;
        };
        // Remove Content-Type if data is undefined
        requestData === undefined && requestHeaders.setContentType(null);
        // Add headers to the request
        if ('setRequestHeader' in request) (0, _utilsJsDefault.default).forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
            request.setRequestHeader(key, val);
        });
        // Add withCredentials to request if needed
        if (!(0, _utilsJsDefault.default).isUndefined(_config.withCredentials)) request.withCredentials = !!_config.withCredentials;
        // Add responseType to request if needed
        if (responseType && responseType !== 'json') request.responseType = _config.responseType;
        // Handle progress if needed
        if (onDownloadProgress) {
            [downloadThrottled, flushDownload] = (0, _progressEventReducerJs.progressEventReducer)(onDownloadProgress, true);
            request.addEventListener('progress', downloadThrottled);
        }
        // Not all browsers support upload events
        if (onUploadProgress && request.upload) {
            [uploadThrottled, flushUpload] = (0, _progressEventReducerJs.progressEventReducer)(onUploadProgress);
            request.upload.addEventListener('progress', uploadThrottled);
            request.upload.addEventListener('loadend', flushUpload);
        }
        if (_config.cancelToken || _config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = (cancel)=>{
                if (!request) return;
                reject(!cancel || cancel.type ? new (0, _canceledErrorJsDefault.default)(null, config, request) : cancel);
                request.abort();
                done();
                request = null;
            };
            _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
            if (_config.signal) _config.signal.aborted ? onCanceled() : _config.signal.addEventListener('abort', onCanceled);
        }
        const protocol = (0, _parseProtocolJsDefault.default)(_config.url);
        if (protocol && !(0, _indexJsDefault.default).protocols.includes(protocol)) {
            reject(new (0, _axiosErrorJsDefault.default)('Unsupported protocol ' + protocol + ':', (0, _axiosErrorJsDefault.default).ERR_BAD_REQUEST, config));
            return;
        }
        // Send the request
        request.send(requestData || null);
    });
};

},{"../utils.js":"jI6DP","../core/settle.js":"2vmJg","../defaults/transitional.js":"cKdyU","../core/AxiosError.js":"7z85x","../cancel/CanceledError.js":"9yG1c","../helpers/parseProtocol.js":"af3D4","../platform/index.js":"626Zd","../core/AxiosHeaders.js":"9EzTj","../helpers/progressEventReducer.js":"6rzPu","../helpers/resolveConfig.js":"3RDMa","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2vmJg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>settle);
var _axiosErrorJs = require("./AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
'use strict';
function settle(resolve, reject, response) {
    const validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response);
    else reject(new (0, _axiosErrorJsDefault.default)('Request failed with status code ' + response.status, response.status >= 400 && response.status < 500 ? (0, _axiosErrorJsDefault.default).ERR_BAD_REQUEST : (0, _axiosErrorJsDefault.default).ERR_BAD_RESPONSE, response.config, response.request, response));
}

},{"./AxiosError.js":"7z85x","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"af3D4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>parseProtocol);
'use strict';
function parseProtocol(url) {
    const match = /^([-+\w]{1,25}):(?:\/\/)?/.exec(url);
    return match && match[1] || '';
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6rzPu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "progressEventReducer", ()=>progressEventReducer);
parcelHelpers.export(exports, "progressEventDecorator", ()=>progressEventDecorator);
parcelHelpers.export(exports, "asyncDecorator", ()=>asyncDecorator);
var _speedometerJs = require("./speedometer.js");
var _speedometerJsDefault = parcelHelpers.interopDefault(_speedometerJs);
var _throttleJs = require("./throttle.js");
var _throttleJsDefault = parcelHelpers.interopDefault(_throttleJs);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
const progressEventReducer = (listener, isDownloadStream, freq = 3)=>{
    let bytesNotified = 0;
    const _speedometer = (0, _speedometerJsDefault.default)(50, 250);
    return (0, _throttleJsDefault.default)((e)=>{
        const rawLoaded = e.loaded;
        const total = e.lengthComputable ? e.total : undefined;
        const loaded = total != null ? Math.min(rawLoaded, total) : rawLoaded;
        const progressBytes = Math.max(0, loaded - bytesNotified);
        const rate = _speedometer(progressBytes);
        bytesNotified = Math.max(bytesNotified, loaded);
        const data = {
            loaded,
            total,
            progress: total ? loaded / total : undefined,
            bytes: progressBytes,
            rate: rate ? rate : undefined,
            estimated: rate && total ? (total - loaded) / rate : undefined,
            event: e,
            lengthComputable: total != null,
            [isDownloadStream ? 'download' : 'upload']: true
        };
        listener(data);
    }, freq);
};
const progressEventDecorator = (total, throttled)=>{
    const lengthComputable = total != null;
    return [
        (loaded)=>throttled[0]({
                lengthComputable,
                total,
                loaded
            }),
        throttled[1]
    ];
};
const asyncDecorator = (fn)=>(...args)=>(0, _utilsJsDefault.default).asap(()=>fn(...args));

},{"./speedometer.js":"cCdi6","./throttle.js":"esfhP","../utils.js":"jI6DP","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cCdi6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
'use strict';
/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */ function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== undefined ? min : 1000;
    return function push(chunkLength) {
        const now = Date.now();
        const startedAt = timestamps[tail];
        if (!firstSampleTS) firstSampleTS = now;
        bytes[head] = chunkLength;
        timestamps[head] = now;
        let i = tail;
        let bytesCount = 0;
        while(i !== head){
            bytesCount += bytes[i++];
            i = i % samplesCount;
        }
        head = (head + 1) % samplesCount;
        if (head === tail) tail = (tail + 1) % samplesCount;
        if (now - firstSampleTS < min) return;
        const passed = startedAt && now - startedAt;
        return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
    };
}
exports.default = speedometer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"esfhP":[function(require,module,exports,__globalThis) {
/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Function}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function throttle(fn, freq) {
    let timestamp = 0;
    let threshold = 1000 / freq;
    let lastArgs;
    let timer;
    const invoke = (args, now = Date.now())=>{
        timestamp = now;
        lastArgs = null;
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        fn(...args);
    };
    const throttled = (...args)=>{
        const now = Date.now();
        const passed = now - timestamp;
        if (passed >= threshold) invoke(args, now);
        else {
            lastArgs = args;
            if (!timer) timer = setTimeout(()=>{
                timer = null;
                invoke(lastArgs);
            }, threshold - passed);
        }
    };
    const flush = ()=>lastArgs && invoke(lastArgs);
    return [
        throttled,
        flush
    ];
}
exports.default = throttle;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3RDMa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _isURLSameOriginJs = require("./isURLSameOrigin.js");
var _isURLSameOriginJsDefault = parcelHelpers.interopDefault(_isURLSameOriginJs);
var _cookiesJs = require("./cookies.js");
var _cookiesJsDefault = parcelHelpers.interopDefault(_cookiesJs);
var _buildFullPathJs = require("../core/buildFullPath.js");
var _buildFullPathJsDefault = parcelHelpers.interopDefault(_buildFullPathJs);
var _mergeConfigJs = require("../core/mergeConfig.js");
var _mergeConfigJsDefault = parcelHelpers.interopDefault(_mergeConfigJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _buildURLJs = require("./buildURL.js");
var _buildURLJsDefault = parcelHelpers.interopDefault(_buildURLJs);
const FORM_DATA_CONTENT_HEADERS = [
    'content-type',
    'content-length'
];
function setFormDataHeaders(headers, formHeaders, policy) {
    if (policy !== 'content-only') {
        headers.set(formHeaders);
        return;
    }
    Object.entries(formHeaders).forEach(([key, val])=>{
        if (FORM_DATA_CONTENT_HEADERS.includes(key.toLowerCase())) headers.set(key, val);
    });
}
/**
 * Encode a UTF-8 string to a Latin-1 byte string for use with btoa().
 * This is a modern replacement for the deprecated unescape(encodeURIComponent(str)) pattern.
 *
 * @param {string} str The string to encode
 *
 * @returns {string} UTF-8 bytes as a Latin-1 string
 */ const encodeUTF8 = (str)=>encodeURIComponent(str).replace(/%([0-9A-F]{2})/gi, (_, hex)=>String.fromCharCode(parseInt(hex, 16)));
exports.default = (config)=>{
    const newConfig = (0, _mergeConfigJsDefault.default)({}, config);
    // Read only own properties to prevent prototype pollution gadgets
    // (e.g. Object.prototype.baseURL = 'https://evil.com').
    const own = (key)=>(0, _utilsJsDefault.default).hasOwnProp(newConfig, key) ? newConfig[key] : undefined;
    const data = own('data');
    let withXSRFToken = own('withXSRFToken');
    const xsrfHeaderName = own('xsrfHeaderName');
    const xsrfCookieName = own('xsrfCookieName');
    let headers = own('headers');
    const auth = own('auth');
    const baseURL = own('baseURL');
    const allowAbsoluteUrls = own('allowAbsoluteUrls');
    const url = own('url');
    newConfig.headers = headers = (0, _axiosHeadersJsDefault.default).from(headers);
    newConfig.url = (0, _buildURLJsDefault.default)((0, _buildFullPathJsDefault.default)(baseURL, url, allowAbsoluteUrls), config.params, config.paramsSerializer);
    // HTTP basic authentication
    if (auth) headers.set('Authorization', 'Basic ' + btoa((auth.username || '') + ':' + (auth.password ? encodeUTF8(auth.password) : '')));
    if ((0, _utilsJsDefault.default).isFormData(data)) {
        if ((0, _indexJsDefault.default).hasStandardBrowserEnv || (0, _indexJsDefault.default).hasStandardBrowserWebWorkerEnv) headers.setContentType(undefined); // browser handles it
        else if ((0, _utilsJsDefault.default).isFunction(data.getHeaders)) // Node.js FormData (like form-data package)
        setFormDataHeaders(headers, data.getHeaders(), own('formDataHeaderPolicy'));
    }
    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if ((0, _indexJsDefault.default).hasStandardBrowserEnv) {
        if ((0, _utilsJsDefault.default).isFunction(withXSRFToken)) withXSRFToken = withXSRFToken(newConfig);
        // Strict boolean check — prevents proto-pollution gadgets (e.g. Object.prototype.withXSRFToken = 1)
        // and misconfigurations (e.g. "false") from short-circuiting the same-origin check and leaking
        // the XSRF token cross-origin.
        const shouldSendXSRF = withXSRFToken === true || withXSRFToken == null && (0, _isURLSameOriginJsDefault.default)(newConfig.url);
        if (shouldSendXSRF) {
            const xsrfValue = xsrfHeaderName && xsrfCookieName && (0, _cookiesJsDefault.default).read(xsrfCookieName);
            if (xsrfValue) headers.set(xsrfHeaderName, xsrfValue);
        }
    }
    return newConfig;
};

},{"../platform/index.js":"626Zd","../utils.js":"jI6DP","./isURLSameOrigin.js":"d9uxL","./cookies.js":"hoVvn","../core/buildFullPath.js":"kg0Bk","../core/mergeConfig.js":"311Mu","../core/AxiosHeaders.js":"9EzTj","./buildURL.js":"3CNaw","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"d9uxL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
exports.default = (0, _indexJsDefault.default).hasStandardBrowserEnv ? ((origin, isMSIE)=>(url)=>{
        url = new URL(url, (0, _indexJsDefault.default).origin);
        return origin.protocol === url.protocol && origin.host === url.host && (isMSIE || origin.port === url.port);
    })(new URL((0, _indexJsDefault.default).origin), (0, _indexJsDefault.default).navigator && /(msie|trident)/i.test((0, _indexJsDefault.default).navigator.userAgent)) : ()=>true;

},{"../platform/index.js":"626Zd","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hoVvn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
exports.default = (0, _indexJsDefault.default).hasStandardBrowserEnv ? {
    write (name, value, expires, path, domain, secure, sameSite) {
        if (typeof document === 'undefined') return;
        const cookie = [
            `${name}=${encodeURIComponent(value)}`
        ];
        if ((0, _utilsJsDefault.default).isNumber(expires)) cookie.push(`expires=${new Date(expires).toUTCString()}`);
        if ((0, _utilsJsDefault.default).isString(path)) cookie.push(`path=${path}`);
        if ((0, _utilsJsDefault.default).isString(domain)) cookie.push(`domain=${domain}`);
        if (secure === true) cookie.push('secure');
        if ((0, _utilsJsDefault.default).isString(sameSite)) cookie.push(`SameSite=${sameSite}`);
        document.cookie = cookie.join('; ');
    },
    read (name) {
        if (typeof document === 'undefined') return null;
        // Match name=value by splitting on the semicolon separator instead of building a
        // RegExp from `name` — interpolating an unescaped string into a RegExp would let
        // metacharacters (e.g. `.+?` in an attacker-influenced cookie name) cause ReDoS or
        // match the wrong cookie. Browsers may serialize cookie pairs as either ";" or
        // "; ", so ignore optional whitespace before each cookie name.
        const cookies = document.cookie.split(';');
        for(let i = 0; i < cookies.length; i++){
            const cookie = cookies[i].replace(/^\s+/, '');
            const eq = cookie.indexOf('=');
            if (eq !== -1 && cookie.slice(0, eq) === name) return decodeURIComponent(cookie.slice(eq + 1));
        }
        return null;
    },
    remove (name) {
        this.write(name, '', Date.now() - 86400000, '/');
    }
} : {
    write () {},
    read () {
        return null;
    },
    remove () {}
};

},{"../utils.js":"jI6DP","../platform/index.js":"626Zd","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kg0Bk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>buildFullPath);
var _isAbsoluteURLJs = require("../helpers/isAbsoluteURL.js");
var _isAbsoluteURLJsDefault = parcelHelpers.interopDefault(_isAbsoluteURLJs);
var _combineURLsJs = require("../helpers/combineURLs.js");
var _combineURLsJsDefault = parcelHelpers.interopDefault(_combineURLsJs);
'use strict';
function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls) {
    let isRelativeUrl = !(0, _isAbsoluteURLJsDefault.default)(requestedURL);
    if (baseURL && (isRelativeUrl || allowAbsoluteUrls === false)) return (0, _combineURLsJsDefault.default)(baseURL, requestedURL);
    return requestedURL;
}

},{"../helpers/isAbsoluteURL.js":"6XRC7","../helpers/combineURLs.js":"l5Wmt","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6XRC7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isAbsoluteURL);
'use strict';
function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    if (typeof url !== 'string') return false;
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"l5Wmt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>combineURLs);
'use strict';
function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"311Mu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>mergeConfig);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosHeadersJs = require("./AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
'use strict';
const headersToObject = (thing)=>thing instanceof (0, _axiosHeadersJsDefault.default) ? {
        ...thing
    } : thing;
function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    // Use a null-prototype object so that downstream reads such as `config.auth`
    // or `config.baseURL` cannot inherit polluted values from Object.prototype.
    // `hasOwnProperty` is restored as a non-enumerable own slot to preserve
    // ergonomics for user code that relies on it.
    const config = Object.create(null);
    Object.defineProperty(config, 'hasOwnProperty', {
        // Null-proto descriptor so a polluted Object.prototype.get cannot turn
        // this data descriptor into an accessor descriptor on the way in.
        __proto__: null,
        value: Object.prototype.hasOwnProperty,
        enumerable: false,
        writable: true,
        configurable: true
    });
    function getMergedValue(target, source, prop, caseless) {
        if ((0, _utilsJsDefault.default).isPlainObject(target) && (0, _utilsJsDefault.default).isPlainObject(source)) return (0, _utilsJsDefault.default).merge.call({
            caseless
        }, target, source);
        else if ((0, _utilsJsDefault.default).isPlainObject(source)) return (0, _utilsJsDefault.default).merge({}, source);
        else if ((0, _utilsJsDefault.default).isArray(source)) return source.slice();
        return source;
    }
    function mergeDeepProperties(a, b, prop, caseless) {
        if (!(0, _utilsJsDefault.default).isUndefined(b)) return getMergedValue(a, b, prop, caseless);
        else if (!(0, _utilsJsDefault.default).isUndefined(a)) return getMergedValue(undefined, a, prop, caseless);
    }
    // eslint-disable-next-line consistent-return
    function valueFromConfig2(a, b) {
        if (!(0, _utilsJsDefault.default).isUndefined(b)) return getMergedValue(undefined, b);
    }
    // eslint-disable-next-line consistent-return
    function defaultToConfig2(a, b) {
        if (!(0, _utilsJsDefault.default).isUndefined(b)) return getMergedValue(undefined, b);
        else if (!(0, _utilsJsDefault.default).isUndefined(a)) return getMergedValue(undefined, a);
    }
    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(a, b, prop) {
        if ((0, _utilsJsDefault.default).hasOwnProp(config2, prop)) return getMergedValue(a, b);
        else if ((0, _utilsJsDefault.default).hasOwnProp(config1, prop)) return getMergedValue(undefined, a);
    }
    const mergeMap = {
        url: valueFromConfig2,
        method: valueFromConfig2,
        data: valueFromConfig2,
        baseURL: defaultToConfig2,
        transformRequest: defaultToConfig2,
        transformResponse: defaultToConfig2,
        paramsSerializer: defaultToConfig2,
        timeout: defaultToConfig2,
        timeoutMessage: defaultToConfig2,
        withCredentials: defaultToConfig2,
        withXSRFToken: defaultToConfig2,
        adapter: defaultToConfig2,
        responseType: defaultToConfig2,
        xsrfCookieName: defaultToConfig2,
        xsrfHeaderName: defaultToConfig2,
        onUploadProgress: defaultToConfig2,
        onDownloadProgress: defaultToConfig2,
        decompress: defaultToConfig2,
        maxContentLength: defaultToConfig2,
        maxBodyLength: defaultToConfig2,
        beforeRedirect: defaultToConfig2,
        transport: defaultToConfig2,
        httpAgent: defaultToConfig2,
        httpsAgent: defaultToConfig2,
        cancelToken: defaultToConfig2,
        socketPath: defaultToConfig2,
        allowedSocketPaths: defaultToConfig2,
        responseEncoding: defaultToConfig2,
        validateStatus: mergeDirectKeys,
        headers: (a, b, prop)=>mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true)
    };
    (0, _utilsJsDefault.default).forEach(Object.keys({
        ...config1,
        ...config2
    }), function computeConfigValue(prop) {
        if (prop === '__proto__' || prop === 'constructor' || prop === 'prototype') return;
        const merge = (0, _utilsJsDefault.default).hasOwnProp(mergeMap, prop) ? mergeMap[prop] : mergeDeepProperties;
        const a = (0, _utilsJsDefault.default).hasOwnProp(config1, prop) ? config1[prop] : undefined;
        const b = (0, _utilsJsDefault.default).hasOwnProp(config2, prop) ? config2[prop] : undefined;
        const configValue = merge(a, b, prop);
        (0, _utilsJsDefault.default).isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
}

},{"../utils.js":"jI6DP","./AxiosHeaders.js":"9EzTj","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"d5PZl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getFetch", ()=>getFetch);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _composeSignalsJs = require("../helpers/composeSignals.js");
var _composeSignalsJsDefault = parcelHelpers.interopDefault(_composeSignalsJs);
var _trackStreamJs = require("../helpers/trackStream.js");
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _progressEventReducerJs = require("../helpers/progressEventReducer.js");
var _resolveConfigJs = require("../helpers/resolveConfig.js");
var _resolveConfigJsDefault = parcelHelpers.interopDefault(_resolveConfigJs);
var _settleJs = require("../core/settle.js");
var _settleJsDefault = parcelHelpers.interopDefault(_settleJs);
var _estimateDataURLDecodedBytesJs = require("../helpers/estimateDataURLDecodedBytes.js");
var _estimateDataURLDecodedBytesJsDefault = parcelHelpers.interopDefault(_estimateDataURLDecodedBytesJs);
var _dataJs = require("../env/data.js");
const DEFAULT_CHUNK_SIZE = 65536;
const { isFunction } = (0, _utilsJsDefault.default);
const test = (fn, ...args)=>{
    try {
        return !!fn(...args);
    } catch (e) {
        return false;
    }
};
const factory = (env)=>{
    const globalObject = (0, _utilsJsDefault.default).global ?? globalThis;
    const { ReadableStream, TextEncoder } = globalObject;
    env = (0, _utilsJsDefault.default).merge.call({
        skipUndefined: true
    }, {
        Request: globalObject.Request,
        Response: globalObject.Response
    }, env);
    const { fetch: envFetch, Request, Response } = env;
    const isFetchSupported = envFetch ? isFunction(envFetch) : typeof fetch === 'function';
    const isRequestSupported = isFunction(Request);
    const isResponseSupported = isFunction(Response);
    if (!isFetchSupported) return false;
    const isReadableStreamSupported = isFetchSupported && isFunction(ReadableStream);
    const encodeText = isFetchSupported && (typeof TextEncoder === 'function' ? ((encoder)=>(str)=>encoder.encode(str))(new TextEncoder()) : async (str)=>new Uint8Array(await new Request(str).arrayBuffer()));
    const supportsRequestStream = isRequestSupported && isReadableStreamSupported && test(()=>{
        let duplexAccessed = false;
        const request = new Request((0, _indexJsDefault.default).origin, {
            body: new ReadableStream(),
            method: 'POST',
            get duplex () {
                duplexAccessed = true;
                return 'half';
            }
        });
        const hasContentType = request.headers.has('Content-Type');
        if (request.body != null) request.body.cancel();
        return duplexAccessed && !hasContentType;
    });
    const supportsResponseStream = isResponseSupported && isReadableStreamSupported && test(()=>(0, _utilsJsDefault.default).isReadableStream(new Response('').body));
    const resolvers = {
        stream: supportsResponseStream && ((res)=>res.body)
    };
    isFetchSupported && (()=>{
        [
            'text',
            'arrayBuffer',
            'blob',
            'formData',
            'stream'
        ].forEach((type)=>{
            !resolvers[type] && (resolvers[type] = (res, config)=>{
                let method = res && res[type];
                if (method) return method.call(res);
                throw new (0, _axiosErrorJsDefault.default)(`Response type '${type}' is not supported`, (0, _axiosErrorJsDefault.default).ERR_NOT_SUPPORT, config);
            });
        });
    })();
    const getBodyLength = async (body)=>{
        if (body == null) return 0;
        if ((0, _utilsJsDefault.default).isBlob(body)) return body.size;
        if ((0, _utilsJsDefault.default).isSpecCompliantForm(body)) {
            const _request = new Request((0, _indexJsDefault.default).origin, {
                method: 'POST',
                body
            });
            return (await _request.arrayBuffer()).byteLength;
        }
        if ((0, _utilsJsDefault.default).isArrayBufferView(body) || (0, _utilsJsDefault.default).isArrayBuffer(body)) return body.byteLength;
        if ((0, _utilsJsDefault.default).isURLSearchParams(body)) body = body + '';
        if ((0, _utilsJsDefault.default).isString(body)) return (await encodeText(body)).byteLength;
    };
    const resolveBodyLength = async (headers, body)=>{
        const length = (0, _utilsJsDefault.default).toFiniteNumber(headers.getContentLength());
        return length == null ? getBodyLength(body) : length;
    };
    return async (config)=>{
        let { url, method, data, signal, cancelToken, timeout, onDownloadProgress, onUploadProgress, responseType, headers, withCredentials = 'same-origin', fetchOptions, maxContentLength, maxBodyLength } = (0, _resolveConfigJsDefault.default)(config);
        const hasMaxContentLength = (0, _utilsJsDefault.default).isNumber(maxContentLength) && maxContentLength > -1;
        const hasMaxBodyLength = (0, _utilsJsDefault.default).isNumber(maxBodyLength) && maxBodyLength > -1;
        let _fetch = envFetch || fetch;
        responseType = responseType ? (responseType + '').toLowerCase() : 'text';
        let composedSignal = (0, _composeSignalsJsDefault.default)([
            signal,
            cancelToken && cancelToken.toAbortSignal()
        ], timeout);
        let request = null;
        const unsubscribe = composedSignal && composedSignal.unsubscribe && (()=>{
            composedSignal.unsubscribe();
        });
        let requestContentLength;
        try {
            // Enforce maxContentLength for data: URLs up-front so we never materialize
            // an oversized payload. The HTTP adapter applies the same check (see http.js
            // "if (protocol === 'data:')" branch).
            if (hasMaxContentLength && typeof url === 'string' && url.startsWith('data:')) {
                const estimated = (0, _estimateDataURLDecodedBytesJsDefault.default)(url);
                if (estimated > maxContentLength) throw new (0, _axiosErrorJsDefault.default)('maxContentLength size of ' + maxContentLength + ' exceeded', (0, _axiosErrorJsDefault.default).ERR_BAD_RESPONSE, config, request);
            }
            // Enforce maxBodyLength against the outbound request body before dispatch.
            // Mirrors http.js behavior (ERR_BAD_REQUEST / 'Request body larger than
            // maxBodyLength limit'). Skip when the body length cannot be determined
            // (e.g. a live ReadableStream supplied by the caller).
            if (hasMaxBodyLength && method !== 'get' && method !== 'head') {
                const outboundLength = await resolveBodyLength(headers, data);
                if (typeof outboundLength === 'number' && isFinite(outboundLength) && outboundLength > maxBodyLength) throw new (0, _axiosErrorJsDefault.default)('Request body larger than maxBodyLength limit', (0, _axiosErrorJsDefault.default).ERR_BAD_REQUEST, config, request);
            }
            if (onUploadProgress && supportsRequestStream && method !== 'get' && method !== 'head' && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
                let _request = new Request(url, {
                    method: 'POST',
                    body: data,
                    duplex: 'half'
                });
                let contentTypeHeader;
                if ((0, _utilsJsDefault.default).isFormData(data) && (contentTypeHeader = _request.headers.get('content-type'))) headers.setContentType(contentTypeHeader);
                if (_request.body) {
                    const [onProgress, flush] = (0, _progressEventReducerJs.progressEventDecorator)(requestContentLength, (0, _progressEventReducerJs.progressEventReducer)((0, _progressEventReducerJs.asyncDecorator)(onUploadProgress)));
                    data = (0, _trackStreamJs.trackStream)(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
                }
            }
            if (!(0, _utilsJsDefault.default).isString(withCredentials)) withCredentials = withCredentials ? 'include' : 'omit';
            // Cloudflare Workers throws when credentials are defined
            // see https://github.com/cloudflare/workerd/issues/902
            const isCredentialsSupported = isRequestSupported && 'credentials' in Request.prototype;
            // If data is FormData and Content-Type is multipart/form-data without boundary,
            // delete it so fetch can set it correctly with the boundary
            if ((0, _utilsJsDefault.default).isFormData(data)) {
                const contentType = headers.getContentType();
                if (contentType && /^multipart\/form-data/i.test(contentType) && !/boundary=/i.test(contentType)) headers.delete('content-type');
            }
            // Set User-Agent header if not already set (fetch defaults to 'node' in Node.js)
            headers.set('User-Agent', 'axios/' + (0, _dataJs.VERSION), false);
            const resolvedOptions = {
                ...fetchOptions,
                signal: composedSignal,
                method: method.toUpperCase(),
                headers: headers.normalize().toJSON(),
                body: data,
                duplex: 'half',
                credentials: isCredentialsSupported ? withCredentials : undefined
            };
            request = isRequestSupported && new Request(url, resolvedOptions);
            let response = await (isRequestSupported ? _fetch(request, fetchOptions) : _fetch(url, resolvedOptions));
            // Cheap pre-check: if the server honestly declares a content-length that
            // already exceeds the cap, reject before we start streaming.
            if (hasMaxContentLength) {
                const declaredLength = (0, _utilsJsDefault.default).toFiniteNumber(response.headers.get('content-length'));
                if (declaredLength != null && declaredLength > maxContentLength) throw new (0, _axiosErrorJsDefault.default)('maxContentLength size of ' + maxContentLength + ' exceeded', (0, _axiosErrorJsDefault.default).ERR_BAD_RESPONSE, config, request);
            }
            const isStreamResponse = supportsResponseStream && (responseType === 'stream' || responseType === 'response');
            if (supportsResponseStream && response.body && (onDownloadProgress || hasMaxContentLength || isStreamResponse && unsubscribe)) {
                const options = {};
                [
                    'status',
                    'statusText',
                    'headers'
                ].forEach((prop)=>{
                    options[prop] = response[prop];
                });
                const responseContentLength = (0, _utilsJsDefault.default).toFiniteNumber(response.headers.get('content-length'));
                const [onProgress, flush] = onDownloadProgress && (0, _progressEventReducerJs.progressEventDecorator)(responseContentLength, (0, _progressEventReducerJs.progressEventReducer)((0, _progressEventReducerJs.asyncDecorator)(onDownloadProgress), true)) || [];
                let bytesRead = 0;
                const onChunkProgress = (loadedBytes)=>{
                    if (hasMaxContentLength) {
                        bytesRead = loadedBytes;
                        if (bytesRead > maxContentLength) throw new (0, _axiosErrorJsDefault.default)('maxContentLength size of ' + maxContentLength + ' exceeded', (0, _axiosErrorJsDefault.default).ERR_BAD_RESPONSE, config, request);
                    }
                    onProgress && onProgress(loadedBytes);
                };
                response = new Response((0, _trackStreamJs.trackStream)(response.body, DEFAULT_CHUNK_SIZE, onChunkProgress, ()=>{
                    flush && flush();
                    unsubscribe && unsubscribe();
                }), options);
            }
            responseType = responseType || 'text';
            let responseData = await resolvers[(0, _utilsJsDefault.default).findKey(resolvers, responseType) || 'text'](response, config);
            // Fallback enforcement for environments without ReadableStream support
            // (legacy runtimes). Detect materialized size from typed output; skip
            // streams/Response passthrough since the user will read those themselves.
            if (hasMaxContentLength && !supportsResponseStream && !isStreamResponse) {
                let materializedSize;
                if (responseData != null) {
                    if (typeof responseData.byteLength === 'number') materializedSize = responseData.byteLength;
                    else if (typeof responseData.size === 'number') materializedSize = responseData.size;
                    else if (typeof responseData === 'string') materializedSize = typeof TextEncoder === 'function' ? new TextEncoder().encode(responseData).byteLength : responseData.length;
                }
                if (typeof materializedSize === 'number' && materializedSize > maxContentLength) throw new (0, _axiosErrorJsDefault.default)('maxContentLength size of ' + maxContentLength + ' exceeded', (0, _axiosErrorJsDefault.default).ERR_BAD_RESPONSE, config, request);
            }
            !isStreamResponse && unsubscribe && unsubscribe();
            return await new Promise((resolve, reject)=>{
                (0, _settleJsDefault.default)(resolve, reject, {
                    data: responseData,
                    headers: (0, _axiosHeadersJsDefault.default).from(response.headers),
                    status: response.status,
                    statusText: response.statusText,
                    config,
                    request
                });
            });
        } catch (err) {
            unsubscribe && unsubscribe();
            // Safari can surface fetch aborts as a DOMException-like object whose
            // branded getters throw. Prefer our composed signal reason before reading
            // the caught error, preserving timeout vs cancellation semantics.
            if (composedSignal && composedSignal.aborted && composedSignal.reason instanceof (0, _axiosErrorJsDefault.default)) {
                const canceledError = composedSignal.reason;
                canceledError.config = config;
                request && (canceledError.request = request);
                err !== canceledError && (canceledError.cause = err);
                throw canceledError;
            }
            if (err && err.name === 'TypeError' && /Load failed|fetch/i.test(err.message)) throw Object.assign(new (0, _axiosErrorJsDefault.default)('Network Error', (0, _axiosErrorJsDefault.default).ERR_NETWORK, config, request, err && err.response), {
                cause: err.cause || err
            });
            throw (0, _axiosErrorJsDefault.default).from(err, err && err.code, config, request, err && err.response);
        }
    };
};
const seedCache = new Map();
const getFetch = (config)=>{
    let env = config && config.env || {};
    const { fetch: fetch1, Request, Response } = env;
    const seeds = [
        Request,
        Response,
        fetch1
    ];
    let len = seeds.length, i = len, seed, target, map = seedCache;
    while(i--){
        seed = seeds[i];
        target = map.get(seed);
        target === undefined && map.set(seed, target = i ? new Map() : factory(env));
        map = target;
    }
    return target;
};
const adapter = getFetch();
exports.default = adapter;

},{"../platform/index.js":"626Zd","../utils.js":"jI6DP","../core/AxiosError.js":"7z85x","../helpers/composeSignals.js":"fy9c7","../helpers/trackStream.js":"6dI08","../core/AxiosHeaders.js":"9EzTj","../helpers/progressEventReducer.js":"6rzPu","../helpers/resolveConfig.js":"3RDMa","../core/settle.js":"2vmJg","../helpers/estimateDataURLDecodedBytes.js":"918ps","../env/data.js":"9SLyZ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fy9c7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _canceledErrorJs = require("../cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
const composeSignals = (signals, timeout)=>{
    const { length } = signals = signals ? signals.filter(Boolean) : [];
    if (timeout || length) {
        let controller = new AbortController();
        let aborted;
        const onabort = function(reason) {
            if (!aborted) {
                aborted = true;
                unsubscribe();
                const err = reason instanceof Error ? reason : this.reason;
                controller.abort(err instanceof (0, _axiosErrorJsDefault.default) ? err : new (0, _canceledErrorJsDefault.default)(err instanceof Error ? err.message : err));
            }
        };
        let timer = timeout && setTimeout(()=>{
            timer = null;
            onabort(new (0, _axiosErrorJsDefault.default)(`timeout of ${timeout}ms exceeded`, (0, _axiosErrorJsDefault.default).ETIMEDOUT));
        }, timeout);
        const unsubscribe = ()=>{
            if (signals) {
                timer && clearTimeout(timer);
                timer = null;
                signals.forEach((signal)=>{
                    signal.unsubscribe ? signal.unsubscribe(onabort) : signal.removeEventListener('abort', onabort);
                });
                signals = null;
            }
        };
        signals.forEach((signal)=>signal.addEventListener('abort', onabort));
        const { signal } = controller;
        signal.unsubscribe = ()=>(0, _utilsJsDefault.default).asap(unsubscribe);
        return signal;
    }
};
exports.default = composeSignals;

},{"../cancel/CanceledError.js":"9yG1c","../core/AxiosError.js":"7z85x","../utils.js":"jI6DP","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6dI08":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "streamChunk", ()=>streamChunk);
parcelHelpers.export(exports, "readBytes", ()=>readBytes);
parcelHelpers.export(exports, "trackStream", ()=>trackStream);
const streamChunk = function*(chunk, chunkSize) {
    let len = chunk.byteLength;
    if (!chunkSize || len < chunkSize) {
        yield chunk;
        return;
    }
    let pos = 0;
    let end;
    while(pos < len){
        end = pos + chunkSize;
        yield chunk.slice(pos, end);
        pos = end;
    }
};
const readBytes = async function*(iterable, chunkSize) {
    for await (const chunk of readStream(iterable))yield* streamChunk(chunk, chunkSize);
};
const readStream = async function*(stream) {
    if (stream[Symbol.asyncIterator]) {
        yield* stream;
        return;
    }
    const reader = stream.getReader();
    try {
        for(;;){
            const { done, value } = await reader.read();
            if (done) break;
            yield value;
        }
    } finally{
        await reader.cancel();
    }
};
const trackStream = (stream, chunkSize, onProgress, onFinish)=>{
    const iterator = readBytes(stream, chunkSize);
    let bytes = 0;
    let done;
    let _onFinish = (e)=>{
        if (!done) {
            done = true;
            onFinish && onFinish(e);
        }
    };
    return new ReadableStream({
        async pull (controller) {
            try {
                const { done, value } = await iterator.next();
                if (done) {
                    _onFinish();
                    controller.close();
                    return;
                }
                let len = value.byteLength;
                if (onProgress) {
                    let loadedBytes = bytes += len;
                    onProgress(loadedBytes);
                }
                controller.enqueue(new Uint8Array(value));
            } catch (err) {
                _onFinish(err);
                throw err;
            }
        },
        cancel (reason) {
            _onFinish(reason);
            return iterator.return();
        }
    }, {
        highWaterMark: 2
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"918ps":[function(require,module,exports,__globalThis) {
/**
 * Estimate decoded byte length of a data:// URL *without* allocating large buffers.
 * - For base64: compute exact decoded size using length and padding;
 *               handle %XX at the character-count level (no string allocation).
 * - For non-base64: use UTF-8 byteLength of the encoded body as a safe upper bound.
 *
 * @param {string} url
 * @returns {number}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>estimateDataURLDecodedBytes);
var Buffer = require("620f4bc93a83451b").Buffer;
function estimateDataURLDecodedBytes(url) {
    if (!url || typeof url !== 'string') return 0;
    if (!url.startsWith('data:')) return 0;
    const comma = url.indexOf(',');
    if (comma < 0) return 0;
    const meta = url.slice(5, comma);
    const body = url.slice(comma + 1);
    const isBase64 = /;base64/i.test(meta);
    if (isBase64) {
        let effectiveLen = body.length;
        const len = body.length; // cache length
        for(let i = 0; i < len; i++)if (body.charCodeAt(i) === 37 /* '%' */  && i + 2 < len) {
            const a = body.charCodeAt(i + 1);
            const b = body.charCodeAt(i + 2);
            const isHex = (a >= 48 && a <= 57 || a >= 65 && a <= 70 || a >= 97 && a <= 102) && (b >= 48 && b <= 57 || b >= 65 && b <= 70 || b >= 97 && b <= 102);
            if (isHex) {
                effectiveLen -= 2;
                i += 2;
            }
        }
        let pad = 0;
        let idx = len - 1;
        const tailIsPct3D = (j)=>j >= 2 && body.charCodeAt(j - 2) === 37 && // '%'
            body.charCodeAt(j - 1) === 51 && // '3'
            (body.charCodeAt(j) === 68 || body.charCodeAt(j) === 100); // 'D' or 'd'
        if (idx >= 0) {
            if (body.charCodeAt(idx) === 61 /* '=' */ ) {
                pad++;
                idx--;
            } else if (tailIsPct3D(idx)) {
                pad++;
                idx -= 3;
            }
        }
        if (pad === 1 && idx >= 0) {
            if (body.charCodeAt(idx) === 61 /* '=' */ ) pad++;
            else if (tailIsPct3D(idx)) pad++;
        }
        const groups = Math.floor(effectiveLen / 4);
        const bytes = groups * 3 - (pad || 0);
        return bytes > 0 ? bytes : 0;
    }
    if (typeof Buffer !== 'undefined' && typeof Buffer.byteLength === 'function') return Buffer.byteLength(body, 'utf8');
    // Compute UTF-8 byte length directly from UTF-16 code units without allocating
    // a byte buffer (TextEncoder.encode would defeat the DoS guard on large bodies).
    // Using body.length here would undercount non-ASCII (e.g. '€' is 1 code unit
    // but 3 UTF-8 bytes).
    let bytes = 0;
    for(let i = 0, len = body.length; i < len; i++){
        const c = body.charCodeAt(i);
        if (c < 0x80) bytes += 1;
        else if (c < 0x800) bytes += 2;
        else if (c >= 0xd800 && c <= 0xdbff && i + 1 < len) {
            const next = body.charCodeAt(i + 1);
            if (next >= 0xdc00 && next <= 0xdfff) {
                bytes += 4;
                i++;
            } else bytes += 3;
        } else bytes += 3;
    }
    return bytes;
}

},{"620f4bc93a83451b":"bCaf4","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9SLyZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
const VERSION = "1.16.0";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9wnyh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dataJs = require("../env/data.js");
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
'use strict';
const validators = {};
// eslint-disable-next-line func-names
[
    'object',
    'boolean',
    'number',
    'function',
    'string',
    'symbol'
].forEach((type, i)=>{
    validators[type] = function validator(thing) {
        return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
    };
});
const deprecatedWarnings = {};
/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */ validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
        return '[Axios v' + (0, _dataJs.VERSION) + "] Transitional option '" + opt + "'" + desc + (message ? '. ' + message : '');
    }
    // eslint-disable-next-line func-names
    return (value, opt, opts)=>{
        if (validator === false) throw new (0, _axiosErrorJsDefault.default)(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), (0, _axiosErrorJsDefault.default).ERR_DEPRECATED);
        if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
validators.spelling = function spelling(correctSpelling) {
    return (value, opt)=>{
        // eslint-disable-next-line no-console
        console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
        return true;
    };
};
/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */ function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== 'object') throw new (0, _axiosErrorJsDefault.default)('options must be an object', (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION_VALUE);
    const keys = Object.keys(options);
    let i = keys.length;
    while(i-- > 0){
        const opt = keys[i];
        // Use hasOwnProperty so a polluted Object.prototype.<opt> cannot supply
        // a non-function validator and cause a TypeError.
        const validator = Object.prototype.hasOwnProperty.call(schema, opt) ? schema[opt] : undefined;
        if (validator) {
            const value = options[opt];
            const result = value === undefined || validator(value, opt, options);
            if (result !== true) throw new (0, _axiosErrorJsDefault.default)('option ' + opt + ' must be ' + result, (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION_VALUE);
            continue;
        }
        if (allowUnknown !== true) throw new (0, _axiosErrorJsDefault.default)('Unknown option ' + opt, (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION);
    }
}
exports.default = {
    assertOptions,
    validators
};

},{"../env/data.js":"9SLyZ","../core/AxiosError.js":"7z85x","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kSqbX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _canceledErrorJs = require("./CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
'use strict';
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */ class CancelToken {
    constructor(executor){
        if (typeof executor !== 'function') throw new TypeError('executor must be a function.');
        let resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
            resolvePromise = resolve;
        });
        const token = this;
        // eslint-disable-next-line func-names
        this.promise.then((cancel)=>{
            if (!token._listeners) return;
            let i = token._listeners.length;
            while(i-- > 0)token._listeners[i](cancel);
            token._listeners = null;
        });
        // eslint-disable-next-line func-names
        this.promise.then = (onfulfilled)=>{
            let _resolve;
            // eslint-disable-next-line func-names
            const promise = new Promise((resolve)=>{
                token.subscribe(resolve);
                _resolve = resolve;
            }).then(onfulfilled);
            promise.cancel = function reject() {
                token.unsubscribe(_resolve);
            };
            return promise;
        };
        executor(function cancel(message, config, request) {
            if (token.reason) // Cancellation has already been requested
            return;
            token.reason = new (0, _canceledErrorJsDefault.default)(message, config, request);
            resolvePromise(token.reason);
        });
    }
    /**
   * Throws a `CanceledError` if cancellation has been requested.
   */ throwIfRequested() {
        if (this.reason) throw this.reason;
    }
    /**
   * Subscribe to the cancel signal
   */ subscribe(listener) {
        if (this.reason) {
            listener(this.reason);
            return;
        }
        if (this._listeners) this._listeners.push(listener);
        else this._listeners = [
            listener
        ];
    }
    /**
   * Unsubscribe from the cancel signal
   */ unsubscribe(listener) {
        if (!this._listeners) return;
        const index = this._listeners.indexOf(listener);
        if (index !== -1) this._listeners.splice(index, 1);
    }
    toAbortSignal() {
        const controller = new AbortController();
        const abort = (err)=>{
            controller.abort(err);
        };
        this.subscribe(abort);
        controller.signal.unsubscribe = ()=>this.unsubscribe(abort);
        return controller.signal;
    }
    /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */ static source() {
        let cancel;
        const token = new CancelToken(function executor(c) {
            cancel = c;
        });
        return {
            token,
            cancel
        };
    }
}
exports.default = CancelToken;

},{"./CanceledError.js":"9yG1c","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"i5yWF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>spread);
'use strict';
function spread(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2FN3e":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isAxiosError);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
'use strict';
function isAxiosError(payload) {
    return (0, _utilsJsDefault.default).isObject(payload) && payload.isAxiosError === true;
}

},{"../utils.js":"jI6DP","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7tr76":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
    WebServerIsDown: 521,
    ConnectionTimedOut: 522,
    OriginIsUnreachable: 523,
    TimeoutOccurred: 524,
    SslHandshakeFailed: 525,
    InvalidSslCertificate: 526
};
Object.entries(HttpStatusCode).forEach(([key, value])=>{
    HttpStatusCode[value] = key;
});
exports.default = HttpStatusCode;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fLVoR":[function(require,module,exports,__globalThis) {
module.exports = import("./main.926e72c2.js").then(()=>module.bundle.root('3I5eU'));

},{"3I5eU":"3I5eU"}],"8dxKq":[function(require,module,exports,__globalThis) {
module.exports = import("./webfontloader.475e8ddf.js").then(()=>module.bundle.root('kxh0x'));

},{"kxh0x":"kxh0x"}]},["7wZbQ","2R06K"], "2R06K", "parcelRequire28b5", {})

//# sourceMappingURL=TextAliveStarterProject.0f77c784.js.map
