function sendPageVisit() {
    const apiUrl = 'https://vvgkfs7nn4.execute-api.us-east-1.amazonaws.com/prod/metrics'; // ✅ Replace with your actual API Gateway URL if different

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
