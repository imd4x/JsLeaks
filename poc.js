(()=>{"use strict";var e={},a={};function d(f){var c=a[f];if(void 0!==c)return c.exports;var t=a[f]={id:f,loaded:!1,exports:{}},r=!0;try{e[f].call(t.exports,t,t.exports,d),r=!1}finally{r&&delete a[f]}return t.loaded=!0,t.exports}d.m=e,d.amdO={},(()=>{var e=[];d.O=(a,f,c,t)=>{if(f){t=t||0;for(var r=e.length;r>0&&e[r-1][2]>t;r--)e[r]=e[r-1];e[r]=[f,c,t];return}for(var b=1/0,r=0;r<e.length;r++){for(var[f,c,t]=e[r],o=!0,n=0;n<f.length;n++)(!1&t||b>=t)&&Object.keys(d.O).every(e=>d.O[e](f[n]))?f.splice(n--,1):(o=!1,t<b&&(b=t));if(o){e.splice(r--,1);var i=c();void 0!==i&&(a=i)}}return a}})(),

/* =========================
   🔥 ACTION ID (REAL TARGET)
   ========================= */
d.actionStore = {
    "login": "a3f5c9d8b12e4a90c3d1e7f5a6b8c9d0e1f2a3b4",
    "deleteUser": "b7c91f2e3d4a5b6c7d8e9f001122334455667788",
    "updateProfile": "c1d2e3f4a5b67890123456789abcdef1234567890"
};

d.executeAction = function(name){
    var actionId = d.actionStore[name];
    return {
        action: name,
        id: actionId
    };
};

})();