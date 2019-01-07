(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/components/Button.mdx":function(A,e,n){"use strict";n.r(e);n("./node_modules/@emotion/core/dist/core.browser.esm.js");var t=n("./node_modules/react/index.js"),o=n.n(t),r=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),a=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");function c(A,e){if(null==A)return{};var n,t,o=function(A,e){if(null==A)return{};var n,t,o={},r=Object.keys(A);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||(o[n]=A[n]);return o}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(A,n)&&(o[n]=A[n])}return o}var l={small:"\n    padding: 5px 10px;\n    font-size: 14px;\n  ",normal:"\n    padding: 10px 20px;\n    font-size: 16px;\n  ",big:"\n    padding: 20px 30px;\n    font-size: 18px;\n  "},m=function(A){var e=A.scale;return l[void 0===e?"normal":e]},u=function(A){var e=A.kind,n=void 0===e?"primary":e,t=A.outline;return function(A){var e=function(A){return function(e,n){var t=A?e:"transparent";return"\n    background: ".concat(A?"transparent":e,";\n    box-shadow: inset 0 0 0 1px ").concat(t,";\n    color: ").concat(A?e:n,";\n    transition: all .3s;\n\n    &:hover {\n      box-shadow: inset 0 0 0 1000px ").concat(t,";\n      color: ").concat(n,";\n    }\n  ")}}(A);return{primary:e("#1FB6FF","white"),secondary:e("#5352ED","white"),cancel:e("#FF4949","white"),dark:e("#273444","white"),gray:e("#8492A6","white")}}(void 0!==t&&t)[n]},s=Object(a.a)("button",{target:"er65ree0"})(u,";",m,";cursor:pointer;margin:3px 5px;border:none;border-radius:3px;"),B=function(A){var e=A.children,n=c(A,["children"]);return o.a.createElement(s,n,e)};try{B.displayName="Button",B.__docgenInfo={description:"",displayName:"Button",props:{scale:{defaultValue:null,description:"",name:"scale",required:!0,type:{name:'"small" | "normal" | "big"'}},kind:{defaultValue:null,description:"",name:"kind",required:!0,type:{name:'"primary" | "secondary" | "cancel" | "dark" | "gray"'}},outline:{defaultValue:null,description:"",name:"outline",required:!0,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button.tsx#Button"]={docgenInfo:B.__docgenInfo,name:"Button",path:"src/components/Button.tsx#Button"})}catch(w){}function g(A){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(A){return typeof A}:function(A){return A&&"function"===typeof Symbol&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A})(A)}function E(A,e){if(null==A)return{};var n,t,o=function(A,e){if(null==A)return{};var n,t,o={},r=Object.keys(A);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||(o[n]=A[n]);return o}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(A,n)&&(o[n]=A[n])}return o}function d(A,e){for(var n=0;n<e.length;n++){var t=e[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(A,t.key,t)}}function p(A,e){return!e||"object"!==g(e)&&"function"!==typeof e?function(A){if(void 0===A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return A}(A):e}function Y(A){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(A){return A.__proto__||Object.getPrototypeOf(A)})(A)}function D(A,e){return(D=Object.setPrototypeOf||function(A,e){return A.__proto__=e,A})(A,e)}n.d(e,"default",function(){return M});var M=function(A){function e(A){var n;return function(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=p(this,Y(e).call(this,A))).layout=null,n}var n,t,a;return function(A,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");A.prototype=Object.create(e&&e.prototype,{constructor:{value:A,writable:!0,configurable:!0}}),e&&D(A,e)}(e,o.a.Component),n=e,(t=[{key:"render",value:function(){var A=this.props,e=A.components,n=E(A,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:e},o.a.createElement(r.MDXTag,{name:"h1",components:e,props:{id:"button"}},"Button"),o.a.createElement(r.MDXTag,{name:"p",components:e},"Buttons make common actions more obvious and help users more easily perform them. Buttons use labels and sometimes icons to communicate the action that will occur when the user touches them."),o.a.createElement(r.MDXTag,{name:"h3",components:e,props:{id:"best-practices"}},"Best practices"),o.a.createElement(r.MDXTag,{name:"ul",components:e},o.a.createElement(r.MDXTag,{name:"li",components:e,parentName:"ul"},"Group buttons logically into sets based on usage and importance."),o.a.createElement(r.MDXTag,{name:"li",components:e,parentName:"ul"},"Ensure that button actions are clear and consistent."),o.a.createElement(r.MDXTag,{name:"li",components:e,parentName:"ul"},"The main action of a group set can be a primary button."),o.a.createElement(r.MDXTag,{name:"li",components:e,parentName:"ul"},"Select a single button variation and do not mix them.")),o.a.createElement(r.MDXTag,{name:"h2",components:e,props:{id:"properties"}},"Properties"),o.a.createElement(i.f,{of:B}),o.a.createElement(r.MDXTag,{name:"h2",components:e,props:{id:"basic-usage"}},"Basic usage"),o.a.createElement(i.e,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgHYG9wgicx5DdE12k9OABHIQEnWofQ4EkWCbmof0BXtTVzSQuUFXNdo7Q1dhoM0HxEONCiAAEYCIEQBlQTCumogNUF0VFjlOAAvZwCESbF2G4Oj1iiARnlQK52gABnYZMZiwdp9xrGZOxYWdlIAFk09gADZNO09YwBAgAxH1oESZT-GcQ5EUdTB2AABSEfglg4n44D0xErJrGyaGcCARMudgAEYjJ0-RwQE6ghIAQTmaT2EjaDyBsKB0HDdh5E5aSxGymMZHYVFJJgbhgEPMSJOxeRt1rYA8ugQrggAMh68ZEnmShmk6gqiu4Cb5TAUIBJ7VB2nYAB-DYuvDSNSquUbutQJKaykGRq3fMxYVozAwDCKApnWsqKr2jKVxrRMgylHBbMyFJrwINrazrfD4LTKBYl2Y8pD-6hvrrSRnoIV73s-tqpHuw6zG_EA0Iwz4NxoXCwdQHACDgLAgN0UCDHA4jaOhpZoOcWz7GK8j2H4M0pX4VVUAph0atgHJmKZkA2I4ubJG57I2eSwSpjgOIpJk4B1jgKIEiuYpVz0rsCiuABWUzYpUzT2Z-8LLXyaKrnig31mKHSLB-AQlZVtX9M1uL9Z8AAmN3DdrY2LVNmLYosrBvet9YPAgFJHce_tncM9hPdM5MvdXX3_fNgAOS2a1Vnb2bMSX2G2VQssjfZAZdK4vEoCkPxuyMPEj6q0QKJYqCgYUrlRGcUlK7hyvlmsC-qZw_BOEZHHbo4ZLLtBumWhv2Cufg0XcILXHDUQQG9ofJW2FIhBm9AJ-FLKZ5dJb-ZX1A143_hF_YBu85rLoCD6cwc5-jxd_3toMCuAASYAX8dg_0PsfAQ8hvYWGqH7UeowrhoDgGOdgalUFxVMoA4ecDx7V2FJA1cbcO7sEAWfOeD85ybVwRAqB4xMjXxeFxK48QoDsBwMmOAT8fo9UQMMVgGRZLR2gd4WBnZ4GcGvsgtBak9YqTdsQoB3gR6iJwZPfBgiiyTwAR1Khaifq7RKOzNRZgJLzHYAAaWLjJfgA4BTr0SHfAAPvzJBuh0B2McfzOIAkFweP4G4gQ2xfEgH3q4exW9jGDW6BYjAdgZLiioAIdAjBomLCbt3MQT8C5FxiSXUhldhA105FcFJsT-7rALmeLK2THykM_MlCwL834CJ-jY-STlRwEGjCAAAxLFWyN4zK2Vsn5fmIwbC0H4JyG2tYXHUH8e0s8XTula2TFrd255tQjP4GMl4TIQBTIIe4REUAriLP4N0oZRkACc1ytkgB2RM_Z0yLD-O2KcscSz3YAHZkxGT-Xch5eyDnRxCQsj55z07XPdmlMyALxlAvWGooxLosAkXEbQAQ513K4x8pQIcA8LDS3iDFfgitmFBLtkrIJ4dCjhJrNUpeIBWnuJAOwJxpKthzJZWyzxRyfGsvZSAV5QTQXixrHkh-BSJSoEMRLVKUwzzOBlt0GSOVqrKqyvwSl8Q77yCuDiwccBe7lSJdiAA2qamAABddmFSxwpJLtBapmqmX9DaSM0hWVzpQCQcVfVcFqC4ruMa9Y1S4Cl3COXGAnIzXVJtXK6-UxcbiVqjkGSotHz8A8AGgM-yP7yLPCk3RBaxxKuJcW3oAg4BEKFGgDF3t5KKSuBpHwOtg5h2FNOK4PwXTey8IkjIFpMgsDyM2rOxQn4nQdAXXGVxab2EYAavFcByqqtyvlbaSwcDboHMu4qxrbqJmTc1PMwBt04F3XcVqHUN3hnkKDHNKaeaHXZqjYK2xXBpAAtW1AxMQL6AYAS_mqAfR7MZUCYkVRvCDt_OSPZ0z-B8KrVxfgjKVI4HQypPy6w_HwHIP0GYc1UP8zStVYisAYRYB9HB44MBySUESHmPIBRJxagtBBkE0GBDYZrPwKIaBiP8FUNgb9PGLC4fmBGASEB4DEaA-JwQWpBMgAAHqBxwF8jDYnaz8EFpxagPEwP8zU5hnAWttMKb08LDNymTMYbMxZ_mLNLTWls-pzTWGQCIrMPIVGkHqgfGoJAFI37qB_r0GBEA8sQC0F9FkVD_B8MSloEOtjswZj8F8_IbLQA",__position:1,__code:"<Button>Click me</Button>",__scope:{props:this?this.props:n,Button:B}},o.a.createElement(B,null,"Click me")),o.a.createElement(r.MDXTag,{name:"h2",components:e,props:{id:"with-different-sizes"}},"With different sizes"),o.a.createElement(i.e,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgHYG9wgicx5DdE12k9OABHIQEnWofQ4EkWCbmof0BXtTVzSQuUFXNdo7Q1dhoM0HxEONCiAAEYCIEQBlQTCumogNUF0VFjlOAAvZwCESbF2G4Oj1iiARnlQK52gABnYZMZiwdp9xrGZOxYWdlIAFk09gADZNO09YwBAgAxH1oESZT-GcQ5EUdTB2AABSEfglg4n44D0xErJrGyaGcCARMudgAEYjJ0-RwQE6ghIAQTmaT2EjaDyBsKB0HDdh5E5aSxGymMZHYVFJJgbhgEPMSJOxeRt1rYA8ugQrggAMh68ZEnmShmk6gqiu4Cb5TAUIBJ7VB2nYAB-DYuvDSNSquUbutQJKaykGRq3fMxYVozAwDCKApnWsqKr2jKVxrRMgylHBbMyFJrwINrazrfD4OquJYD4EA4CiBJxHsKBYl2Y8pD-6hvtrRh4fMOBAbq_gfgEMGIahnZ2FhvC4IR1dExRgH4gxkAPAgQoQDTPGYZgOHidQRGpGeghXvez62qke7DrMb8QfQzCMxwomCNQHACDgLAgN0UCDHA4jaM5pZoOcWz7GK8j2H4M0pX4VVUFVh0atgHJmP1kA2I4ubJAt7JjeSwSpjRym7Bk4B1lB-IoCuYpVz0rsCiuABWUzYpUzSTZ-8LLXyaKrni2P1mKHSLCxsHA-D_Sw7imOfAAJiLuPawTi0k5i2KLKwcuM_WGmUlzx7-3zwz2FL0zkzL1dK-rlOAA405rIOdpNsw3fYbZVCyyN9ihl0ri8SgKQ_G7Iw8FvqrRAolioKBhSuVEZxSUruHKn2a2n6pnD8E4RkcI-jhkxe0G6Zbt_YK5-DRdwgquHDKIEA5db6Sm2CkIQM10DP2FFld-Lolo23_qgQBwD-A_3YNvSeNYugED6OYceP0PAQKgW0DAVwAAkwBSE7HITAuBAh5DlwsNUKuD9RhXDQHAMc7A1ICLiqZGhd9OFPzXsKFhq5D7H3YDQxBn9sFzk2hI5hrDxiZDQS8LiVx_bsBwMmOAuCfo9UQMMVgGRZJtzYd4DhnYuGcDQXwwRalo4qSLnI2h3h772PES_KR1iiwv2oR1VRASfq7RKCbAJZgJLzHYAAaTnjJfgA4BRAMSJggAPjbXhuh0AZOyTbOIAkFxFP4AUgQ2xykgCga4TJoDYmDW6EkjAXt2DiioAIdAjBWmLF3mfMQuDp6zzafPBRK9hDr05FcPpXsr7rGnmeLKozHwKM_MlCw-DCFWJ-mk-STlRwEGjCAAAxLFWyN4zK2Vsn5G2IwbC0H4JyTOtY8nUEqYcs8JzTnh2TOHYu55tR3P4A8l4TIQAvOke4REAcjk_JuUZAAnMikFIAwVPMha8iwlTthXG-fwU5xcADsyYjLkrRRiiFUK251K-WOH5Q9kXFzSmZSljzqXrACTEl0WASKONoAIc67kUY-UoEOa-FgPawF_iDMGUAanZ3iDU5uLsayrNlfswpIB2A5P4O8jA2rdXFJhWUnVeqQC4pqXStVFgJnYKmRKVA0TXapSmGeZw6N57QWld0FJIAlUKp1fIK4orBxwAvuVX1cAADavqAC6Jslljj6d6meySbZaoEA0pYCisrnSgLw4qobWZiruJG9Yqy4AL3CEvGAnIY2rMTa6tBUwUbiVqjkGSTtHz8A8KzZ5xDPFnj6eE4dY5PWUzHb0AQcBZFCjQIK8u8lFJXA0j4SO9cm7CmnFcH4Lpy5eG6RkC0mQWB5DXaPYouCToOmnijK4Wt7DI1LeG8qMkcorTGnQJYOA_0DnFXYEqm8YztuanmYAf6cAAbuK1Dq-VtryBZlLDtltDom2FsFbYrg0gATnagBWIF9AMElTbVAPoIWyqBMSKo3gT2_nJBC15_ALGzq4vwWVKkcBcZUn5dYFT4DkH6DMOaHGbZpWqsRWAMIsA-kY8cGA5JKCJDzHkAok4tQWmoyCOjAg-M1n4FENAYn-CqGwHh_TFgBPzAjAJCA8AxOkas4ILUJmQAAD1a44GJdxyztZ-B204tQHilGbaeZ4zgcOfnnOBYdj2tz4XuOReizbQ2lprQJa8z53jIAuVmHkMLGj1QPjUEgCkPD1BCN6DAiAH2IBaC-iyBx_gQmJS0FPZp2YMx-AFfkH1oAA",__position:2,__code:'<Button scale="small">Click me</Button>\n<Button scale="normal">Click me</Button>\n<Button scale="big">Click me</Button>',__scope:{props:this?this.props:n,Button:B}},o.a.createElement(B,{scale:"small"},"Click me"),o.a.createElement(B,{scale:"normal"},"Click me"),o.a.createElement(B,{scale:"big"},"Click me")),o.a.createElement(r.MDXTag,{name:"h2",components:e,props:{id:"with-different-colors"}},"With different colors"),o.a.createElement(i.e,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgHYG9wgicx5DdE12k9OABHIQEnWofQ4EkWCbmof0BXtTVzSQuUFXNdo7Q1dhoM0HxEONCiAAEYCIEQBlQTCumogNUF0VFjlOAAvZwCESbF2G4Oj1iiARnlQK52gABnYZMZiwdp9xrGZOxYWdlIAFk09gADZNO09YwBAgAxH1oESZT-GcQ5EUdTB2AABSEfglg4n44D0xErJrGyaGcCARMudgAEYjJ0-RwQE6ghIAQTmaT2EjaDyBsKB0HDdh5E5aSxGymMZHYVFJJgbhgEPMSJOxeRt1rYA8ugQrggAMh68ZEnmShmk6gqiu4Cb5TAUIBJ7VB2nYAB-DYuvDSNSquUbutQJKaykGRq3fMxYVozAwDCKApnWsqKr2jKVxrRMgylHBbMyFJrwINrazrfD4PYbZVD4EABwFVwBEScR7CgWJdmPKQ_uob7a0YRHzEBjBgbgLZqHQcHIZANMYZ2dh4bwuCkdXRM0YBoH-DiASFyh4m4ZgBGKdQZHqY52nMf4PGBG2ZnYdJtnyYIzmqd-nmMZ4fgUkyAmiZFsm0eRqRnoIV73s-tqpHuw6zG_EA0Iwz4NxoXC0ZwAg4CwIDdFAgxwOI2jNaWaDnFs-xivI9h-DNKV-FVVBXYdGrYByZj_ZANiOLmyQI-yYPksEqY4DiKSZOAdY4CiBIrmKVc9K7AorgAVlM2KVM0kOfvCy18miq54tr9Zih0iwfgEfPC-L_Sy7imufAAJmHuvawbi0m5i2KLKwCeO_WDwIBSPvHv7AfDPYMfTOTcfVynmeW4ADjbmsi52kOzDT3mchkyN9hhl0ri8SgKQ_G7Iw8NfqrRAolhUCgMKK4qIZwpFKtwcqOcay32qM4PwJwRiOGAUcGST80DdGWj_dgVx-BoncEFcG-gU6wNSlMDwkptgKzaBgFBwosoYJdEtGOBDUBEPDKIEAuD2A_2vjWLoBA-jmEvj9ShOwaEzXQFcAAJMAcR1ChBSPoQIeQE8LDVGnog0YVw0DYymGpQxcVTJyPgdo5B79hRqNXEAkB7A5FMKwbwucm1LGqPUeMTI7CXhcSuPEKA7AcDJjgPwn6PVEDDFYBkWSG8NHeC0Z2HRnB2FjnYEYtS1cVLD3sfI7wCDEkWNQdY2JRZUGyI6m44pP1dolBDsUswEl5jsAANKqCyvwUG8kCbsAAD4x2xroAW3S-n03cIiKA_BekxwFkLbhIyQAK1cATEOjTuitIwHYGS4oqACHQIwdZiw_7gLEPw2-stNnZUca_YQH9ORXAOZs6B6xb5niyrLR-4Rn4wE_MlCwgjhExJ-p0_GVwzzRhAAAYlirZG8ZlbK2T8jHEYNhaD8E5J3WsAzcYgtHAQcFELy7JnLiPc82pEX8GRS8JkIB0U2LGQuUFY58XwqMgATjZeSkAlLUU0oxRYGZjK8X8AhSPAA7MmIykrOXcupbSjeiynK4vxSfNlI80pmWlSi2V6xin1JdFgEiyTaACHOu5NGPlKBDhgRYDO8QYr8Dzv4yZ8zu752dTHFehQQAT1lngkG_QunuodTjDA-Mg06HpRMuZ0zwazKmfLRWpCLBXN4TciUqA6mp3Ibi5wmdugP2gra2A7SQCuviJM-QVxzWDjgJA8qRb4AAG0G0AF0Q4vLHAcrKOU74luBRDRFjisrnSgNjYqVaOYWruHW9Y5yPkEC-ZyRtss21ZvYVMNG4lar3z_tu8FHgOZotETks8ByqknrHLmu157egCDgHYoUaBjUT3kopK4GkfCVwXsvYU04rg_BdBPLwuyMgWkyCwPI77z7FH4SdB0t80ZXC9vYVGk6a3lQLStMadAlg4DwwOS1dgSpfxjJu5qeZgB4ZwARu4rUOr5W2vIdmEst2R0OiHY2wVtiuDSABe9qAHYgX0Awa1MdUA-mpX6oExIqjeFA7-ck1KMX8CiXeri_A_UqRwFplSfl1j83gOQfoMw5oaZjmlaqxFi0KeLZgcklBEh5jyAUScWoLTSZBHJgQemaz8CiGgMz_BVDYD4z5iwBn5gRgEhAeAZnRPhcEFqQLIAAB6c8cCiu02F2s_A46cWoDxSTMc0s6ZwOXbLCW8sJyTugZLJXtNlYqzHQOlprR1fS5l3TIAdVmHkMbGT1QPjUEgCkPj1BBN6DAiAHOIBaC-iyBp-mZpaBgbc7MGY_A-vyG20AA",__position:3,__code:'<Button kind="primary">Click me</Button>\n<Button kind="secondary">Click me</Button>\n<Button kind="cancel">Click me</Button>\n<Button kind="dark">Click me</Button>\n<Button kind="gray">Click me</Button>',__scope:{props:this?this.props:n,Button:B}},o.a.createElement(B,{kind:"primary"},"Click me"),o.a.createElement(B,{kind:"secondary"},"Click me"),o.a.createElement(B,{kind:"cancel"},"Click me"),o.a.createElement(B,{kind:"dark"},"Click me"),o.a.createElement(B,{kind:"gray"},"Click me")),o.a.createElement(r.MDXTag,{name:"h2",components:e,props:{id:"outlined"}},"Outlined"),o.a.createElement(i.e,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgHYG9wgicx5DdE12k9OABHIQEnWofQ4EkWCbmof0BXtTVzSQuUFXNdo7Q1dhoM0HxEONCiAAEYCIEQBlQTCumogNUF0VFjlOAAvZwCESbF2G4Oj1iiARnlQK52gABnYZMZiwdp9xrGZOxYWdlIAFk09gADZNO09YwBAgAxH1oESZT-GcQ5EUdTB2AABSEfglg4n44D0xErJrGyaGcCARMudgAEYjJ0-RwQE6ghIAQTmaT2EjaDyBsKB0HDdh5E5aSxGymMZHYVFJJgbhgEPMSJOxeRt1rYA8ugQrggAMh68ZEnmShmk6gqiu4Cb5TAUIBJ7VB2nYAB-DYuvDSNSquUbutQJKaykGRq3fMxYVozAwDCKApnWsqKr2jKVxrRMgylHBbMyFJrwINrazrfD4PYbZVD4EABwFVwBESfg9nCKA0Bgb6focWGdnYY9Vx3P7qARxNMfMQGMGBuAtmodBwchkBoYIWGXWx2t7GR3Y0ce2spFx2nGFxgGgf4OIBIXKH9mp-H0bphnUaZZmMbgrGRY56W8e5kBSYEbYBZhuHaYsenYkZiXEbrPD5fZzn8Z4fgUkycnKaFzWkZ18XZcNgjUARqRnoIV73s-tqpHuw6zG_EA0Iwz4NxoXDcZwAg4CwIDdFAgxwOI2j3aWaDnFs-xivI9h-DNKV-FVVBk4dGrYByZjc5ANiOLmyQy-yQvksEqY4DiKSZOAdY4CiBIrmKVc9K7AorgAVlM2KVM0oufvCy18miq54un9Zih0iwfgEXv-8H_SR7iqefAAJkPmfazni0F5i2KLKwM-1_WDwIBSHfmaHgyX_YE_TOTU_Vwvq-S8AAcK8awDx2kXMwLcuYYCypGQWcMrheEoBSD8N1IweE_qiGcKQlhUCgMKK42CCilW4OVLuNZoHVGcH4E4IxHAEKODJBBLolrsEwewK4_A0TuCCuDfQTdKGpSmB4SU2wLZtAwAw4UWUWHdGWtwzIqA-HhlEBTJBKRIE1i6AQPo5hwE_VETsCRM10BXAACTACMeIoQpjpECHkGfCw1RL60NGFcNARMphqR8XFUyljqFuPoSg4UjjVz4MIewSxci2EcM2iEhxTjxhKPyHNK48QoDsBwMmOAWifo9UQMMVgGRZKS3Yd4VxnZ3GcGUWOdgvi1KTxUofKJVjvA0KqcExhYSykRPLK0vpPSfq7RKEXHpZgJLzHYAAaVUFlfgoN5JWwAD5VyJroZWKyq680RFAKGqz-DK1VhTA5IALauHJkXSZ3RZkYDsDJcUVABDoEYLcxY1U0QFDEFo6Bpt7nZTkUg4QqDORXDefc8h6xoFniyqbeB6sXSfmShYHRejSk_UWWTK4Z5owgAAMSxVsjeMytlbJ-SriMGwtB-CcnXrWdZJMsWjgILivFo9kyjyPuebU5L-CUpeEyEAtLwnuF2discrLSVGQAJwyt5SAfl1KhV0osEc8VLL-B4qPgAdmTEZfV8rFWCuFczc5TlmWsqATKo-aUzKGqpca9YPTxkuiwCRGptABDnXcrjHylAhwUIsG3eIMV-A9wyfsqum9e6Rv4E_QoIAz6my4SDfoSzY1B2JhgMmGadn8xOVXI5GazWCIsIC8pKCJSoDGc3YRzLnDt26DJHK1VG3zJANG-IUN5BXF9YOOApDyrBuxAAbWHTAAAukXaFY43lwOgqbdtmKIbkpiTJc6UAibFV7fLP1dxB3rD-fCqmcNOQjtNlO2tyipi43ErVHIMkG6PjjfLGlBjWlnjeUMj9Y4G0hu_b0AQcBIlCjQJ6s-8lFJXA0j4ced9H7CmnFcH4Loz5eGeRkC0mQWB5Gg6A4oWiToOmgbjK4Gd7By2dnuuA5Vm25XyttJYOBmMDn9XYEq6CYy3uanmYAzGcCsbuK1DqDHwzyFZvLO95dDpF0DsFbYrg0gAWA6gOOIF9AMEDVGn0gqU1AmJFUbwmHfzkkFXS_gxSgNcX4CmlSOA7MqT8usQ58ByD9BmHNGzVc0rVWIrAGEWAfSmeODAcklBEh5jyAUScWoLT6ZBEZgQTmaz8CiGgLz_BVDYGU8liwLn5gRgEhAeAXmtN5cEFqDLIAAB6N8cDavs7l2s_Aa6cWoDxXTVdasOZwKPJr5XWt1yfVV7r9nev9arvnS01oRt1Ya45kATqzDyEDgZ6oHxqCQBSMp6gam9BgRAF3EAtBfRZBszzM0tAsOxdmDMfgK35CPaAA",__position:4,__code:'<Button kind="primary" outline>\n  Click me\n</Button>\n<Button kind="secondary" outline>\n  Click me\n</Button>\n<Button kind="cancel" outline>\n  Click me\n</Button>\n<Button kind="dark" outline>\n  Click me\n</Button>\n<Button kind="gray" outline>\n  Click me\n</Button>',__scope:{props:this?this.props:n,Button:B}},o.a.createElement(B,{kind:"primary",outline:!0},"Click me"),o.a.createElement(B,{kind:"secondary",outline:!0},"Click me"),o.a.createElement(B,{kind:"cancel",outline:!0},"Click me"),o.a.createElement(B,{kind:"dark",outline:!0},"Click me"),o.a.createElement(B,{kind:"gray",outline:!0},"Click me")))}}])&&d(n.prototype,t),a&&d(n,a),e}()}}]);
//# sourceMappingURL=src-components-button.a5979a7434dfbc16496b.js.map