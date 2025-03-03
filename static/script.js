function convertHeaders() {
    var headersInput = document.getElementById('headersInput').value;
    var headersArray = headersInput.split('\n');
    var formattedHeaders = {};
    var formattedHeadersString = 'headers = {\n';

    for (var i = 0; i < headersArray.length; i++) {
        var header = headersArray[i].trim();
        if (header !== '') {
            var separatorIndex = header.indexOf(':');
            if (separatorIndex > -1) {
                var key = header.substring(0, separatorIndex).trim();
                var value = header.substring(separatorIndex + 1).trim();
                formattedHeaders[key] = value;
                formattedHeadersString += `    '${key}': '${value}',\n`;
            }
        }
    }

    formattedHeadersString = formattedHeadersString.slice(0, -2) + '\n}';
    document.getElementById('formattedHeaders').innerText = formattedHeadersString;
}
