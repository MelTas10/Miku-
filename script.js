document.addEventListener('DOMContentLoaded', function() {
    const chatBox = document.getElementById('chatBox');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
    
    // Sample responses from Miku
    const mikuResponses = [
        "Ауф, красавчик! (≧▽≦)",
        "Лойс тебе, бро! ❤️",
        "~99%~98% (но сигмы не спрашивают %) 🤣",
        "<i>Ща накидаю на питоне...</i> (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧\n<pre><code>print(\"Hello world!\")</code></pre>",
        "Сам такой, скибиди туалет! (╬ Ò﹏Ó)",
        "Запилим мега-бэнгер? 🎵 [название]",
        "Ауф, самый вайбовый чечик! 😎",
        "<i>Держи анализ:</i> 42% омлет 🍳",
        "Ну и ~флекс~ у тебя... 💀",
        "Чилл, бро, не агрись (✿ﾟ▽ﾟ)"
    ];
    
    // Add message to chat
    function addMessage(text, isUser) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'miku-message'}`;
        
        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'avatar';
        avatarDiv.textContent = isUser ? '👤' : '🎤';
        
        const textDiv = document.createElement('div');
        textDiv.className = 'text';
        
        if (!isUser) {
            const typingSpan = document.createElement('span');
            typingSpan.className = 'typing-animation';
            textDiv.appendChild(typingSpan);
            
            // Simulate typing animation
            let i = 0;
            const typingInterval = setInterval(() => {
                if (i < text.length) {
                    typingSpan.textContent += text.charAt(i);
                    i++;
                    chatBox.scrollTop = chatBox.scrollHeight;
                } else {
                    clearInterval(typingInterval);
                }
            }, 30);
        } else {
            textDiv.textContent = text;
        }
        
        messageDiv.appendChild(avatarDiv);
        messageDiv.appendChild(textDiv);
        chatBox.appendChild(messageDiv);
        
        if (isUser) {
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    }
    
    // Handle user input
    function handleUserInput() {
        const text = userInput.value.trim();
        if (text) {
            addMessage(text, true);
            userInput.value = '';
            
            // Simulate Miku thinking
            setTimeout(() => {
                const randomResponse = mikuResponses[Math.floor(Math.random() * mikuResponses.length)];
                addMessage(randomResponse, false);
            }, 1000);
        }
    }
    
    // Event listeners
    sendButton.addEventListener('click', handleUserInput);
    
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });
    
    // Initial animation
    setTimeout(() => {
        document.querySelector('.chat-container').style.opacity = '1';
        document.querySelector('.chat-container').style.transform = 'translateY(0)';
    }, 100);
});
