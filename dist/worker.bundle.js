!function(a){var e={};function t(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return a[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=a,t.c=e,t.d=function(a,e,n){t.o(a,e)||Object.defineProperty(a,e,{configurable:!1,enumerable:!0,get:n})},t.r=function(a){Object.defineProperty(a,"__esModule",{value:!0})},t.n=function(a){var e=a&&a.__esModule?function(){return a.default}:function(){return a};return t.d(e,"a",e),e},t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},t.p="/dist/",t(t.s=17)}({17:function(a,e){async function t(){"undefined"==typeof Binaryen&&importScripts("../lib/binaryen.js")}async function n(){"undefined"==typeof wabt&&(self.global=self,importScripts("../lib/libwabt.js"))}var i;onmessage=(a=>{switch(a.data.command){case"optimizeWasmWithBinaryen":postMessage({payload:function(a){t();const e=Binaryen.readBinary(new Uint8Array(a));return e.optimize(),e.emitBinary()}(a.data.payload),id:a.data.id},void 0);break;case"validateWasmWithBinaryen":postMessage({payload:(i=a.data.payload,t(),Binaryen.readBinary(new Uint8Array(i)).validate()),id:a.data.id},void 0);break;case"createWasmCallGraphWithBinaryen":postMessage({payload:function(a){t();const e=Binaryen.readBinary(new Uint8Array(a)),n=Binaryen.print;let i="";return Binaryen.print=(a=>{i+=a+"\n"}),e.runPasses(["print-call-graph"]),Binaryen.print=n,i}(a.data.payload),id:a.data.id},void 0);break;case"convertWasmToAsmWithBinaryen":postMessage({payload:function(a){t();const e=Binaryen.readBinary(new Uint8Array(a));return e.optimize(),e.emitAsmjs()}(a.data.payload),id:a.data.id},void 0);break;case"disassembleWasmWithBinaryen":postMessage({payload:function(a){return t(),Binaryen.readBinary(new Uint8Array(a)).emitText()}(a.data.payload),id:a.data.id},void 0);break;case"assembleWatWithBinaryen":postMessage({payload:function(a){return t(),Binaryen.parseText(a).emitBinary()}(a.data.payload),id:a.data.id},void 0);break;case"disassembleWasmWithWabt":postMessage({payload:function(a){n();const e=wabt.readWasm(a,{readDebugNames:!0});return e.generateNames(),e.applyNames(),e.toText({foldExprs:!1,inlineExport:!0})}(a.data.payload),id:a.data.id},void 0);break;case"assembleWatWithWabt":postMessage({payload:function(a){n();const e=wabt.parseWat("test.wat",a);return e.resolveNames(),e.validate(),e.toBinary({log:!0,write_debug_names:!0}).buffer}(a.data.payload),id:a.data.id},void 0)}})}});
//# sourceMappingURL=worker.bundle.js.map