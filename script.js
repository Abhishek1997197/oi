// Updated Clicker App - JavaScript Code

function startClicker() {
    let url = document.getElementById('mainLink').value;
    if (!url) return alert('Please enter a valid link');
    
    let container = document.getElementById('mainContainer');
    container.innerHTML = '';
    
    for (let i = 0; i < 6; i++) {
        let iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.className = 'content-frame';
        container.appendChild(iframe);
    }
    
    setTimeout(() => {
        startClicker();
    }, 35000);
}

function autoClickFrames() {
    let iframes = document.querySelectorAll('.content-frame');
    iframes.forEach(iframe => {
        try {
            let doc = iframe.contentDocument || iframe.contentWindow.document;
            let elements = doc.querySelectorAll('*');
            if (elements.length > 0) {
                let randomElement = elements[Math.floor(Math.random() * elements.length)];
                randomElement.click();
            }
        } catch (e) {
            console.warn('Cross-origin frame, cannot auto-click');
        }
    });
    setTimeout(autoClickFrames, 5000);
}

function autoScrollFrames() {
    let iframes = document.querySelectorAll('.content-frame');
    iframes.forEach(iframe => {
        try {
            let doc = iframe.contentDocument || iframe.contentWindow.document;
            doc.documentElement.scrollBy(0, 50);
        } catch (e) {
            console.warn('Cross-origin frame, cannot auto-scroll');
        }
    });
    setTimeout(autoScrollFrames, 5000);
}

function startYouTube() {
    let url = document.getElementById('youtubeLink').value;
    if (!url) return;
    
    for (let i = 0; i < 6; i++) {
        let left = (i % 2 === 0) ? 100 : window.screen.width - 500;
        window.open(url, '_blank', `width=400,height=300,left=${left},top=${i * 100}`);
    }
    setTimeout(startYouTube, 35000);
}

function handleBlockedWebsites() {
    let url = document.getElementById('mainLink').value;
    if (!url) return;
    
    for (let i = 0; i < 6; i++) {
        let left = (i % 2 === 0) ? 100 : window.screen.width - 500;
        window.open(url, '_blank', `width=400,height=300,left=${left},top=${i * 100}`);
    }
    setTimeout(handleBlockedWebsites, 35000);
}

document.getElementById('startBtn').addEventListener('click', startClicker);
document.getElementById('startYouTube').addEventListener('click', startYouTube);

autoClickFrames();
autoScrollFrames();
