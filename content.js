chrome.runtime.onConnect.addListener((port) => {
  port.onMessage.addListener((msg) => {
    if (msg.function == 'html') {
      port.postMessage({ html: "document.documentElement.outerHTML", description: "desp", title: document.title });
      console.log()
    }
  });
});