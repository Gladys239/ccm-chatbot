
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const questionsGrid = document.getElementById('questionsGrid');
const chatLog = document.getElementById('chatLog');
const questionButtons = document.querySelectorAll('.question-btn');

// Hide questions when user starts typing
chatInput.addEventListener('input', () => {
  questionsGrid.style.display = 'none';
});

// Handle send button
sendBtn.addEventListener('click', () => {
  const message = chatInput.value.trim();
  if (message) {
    appendMessage('You', message);
    respondAsAI(message);
    chatInput.value = '';
  }
});

// Handle question button clicks
questionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const question = button.textContent;
    appendMessage('You', question);
    respondAsAI(question);
    questionsGrid.style.display = 'none';
  });
});

// Append message to chat log
function appendMessage(sender, text) {
  const msg = document.createElement('div');
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatLog.appendChild(msg);
  chatLog.scrollTop = chatLog.scrollHeight;
}

// Simulate AI response
function respondAsAI(userText) {
  let reply = "Let me look that up for you...";

  if (userText.toLowerCase().includes("ccm political party")) {
    reply = "CCM stands for Chama Cha Mapinduzi, the ruling party in Tanzania since 1977.";
  } else if (userText.toLowerCase().includes("leader")) {
    reply = "The current leader of CCM is Samia Suluhu Hassan, President of Tanzania.";
  } else if (userText.toLowerCase().includes("goals")) {
    reply = "CCM aims to promote unity, development, and social justice across Tanzania.";
  } else if (userText.toLowerCase().includes("history")) {
    reply = "CCM was formed in 1977 through the merger of TANU and ASP, shaping Tanzania’s post-independence politics.";
  } else if (userText.toLowerCase().includes("policies")) {
    reply = "Key policies include education reform, infrastructure development, and economic empowerment.";
  } else if (userText.toLowerCase().includes("role")) {
    reply = "CCM plays a dominant role in Tanzanian politics, influencing legislation and national development strategies.";
  }

  setTimeout(() => {
    appendMessage('CCM Chatbot', reply);
  }, 800);
}