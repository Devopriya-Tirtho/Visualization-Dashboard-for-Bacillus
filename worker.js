self.addEventListener('message', function(e) {
    const data = e.data;
    // Perform data processing here
    const processedData = processData(data);
    self.postMessage(processedData);
});

function processData(data) {
    // Implement your data processing logic
    // For example, let's say you want to filter data
    return data.filter(d => d.Weight > 0);
}
