const { ipcRenderer } = require('electron');
window.Shell = {
    sendMessage(id, payload) {
        ipcRenderer.send(id, payload);
    },
    sendToHost(id, payload) {
        ipcRenderer.sendToHost(id, payload)
    },
    on(id, callback) {
        ipcRenderer.on(id, callback);
    },
    off(id, callback) {
        ipcRenderer.removeListener(id, callback);
    },
    once(id, callback) {
        ipcRenderer.once(id, callback);
    },
}