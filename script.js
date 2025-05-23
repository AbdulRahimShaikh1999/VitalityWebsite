function sendPageVisit() {
    const apiUrl = 'https://rgk477o9bj.execute-api.us-east-1.amazonaws.com/prod/metrics';

    const data = {
        page: window.location.pathname
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Visit recorded:', data.message);
    })
    .catch((error) => {
        console.error('Tracking error:', error);
    });
}

window.onload = sendPageVisit;
