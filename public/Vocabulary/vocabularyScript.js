// Global hashmap to store flashcards for each topic
let flashcardsByTopic = {
    "Food": [
        {arabic: 'خُبْزٌ', english: 'Bread'},
        {arabic: 'جُبْنٌ', english: 'Cheese'},
        {arabic: 'بَيْضٌ', english: 'Eggs'},
        {arabic: 'فَوَاكِهٌ', english: 'Fruits'},
        {arabic: 'خُضْرَوَاتٌ', english: 'Vegetables'},
        {arabic: 'لَحْمٌ', english: 'Meat'},
        {arabic: 'دَجَاجٌ', english: 'Chicken'},
        {arabic: 'سَمَكٌ', english: 'Fish'},
        {arabic: 'أَرُزٌّ', english: 'Rice'},
        {arabic: 'مَاءٌ', english: 'Water'}],
    "Common Objects": [
        {arabic: 'بَابٌ', english: 'Door'},
        {arabic: 'نَافِذَةٌ', english: 'Window'},
        {arabic: 'كُرْسِيٌّ', english: 'Chair'},
        {arabic: 'طَاوِلَةٌ', english: 'Table'},
        {arabic: 'سَرِيرٌ', english: 'Bed'},
        {arabic: 'كِتَابٌ', english: 'Book'},
        {arabic: 'قَلَمٌ', english: 'Pen'},
        {arabic: 'هَاتِفٌ', english: 'Phone'},
        {arabic: 'سَيَّارَةٌ', english: 'Car'},
        {arabic: 'حَاسُوبٌ', english: 'Computer'}],
    "Common Phrases": [
        {arabic: 'إسْمِي...', english: 'My name is...'},
        {arabic: 'مِنْ أَيْنَ أَنْتَ؟', english: 'Where are you from?'},
        {arabic: 'أَنَا مِنْ...', english: 'I am from...'},
        {arabic: 'كَيْفَ حَالُكَ؟', english: 'How are you? (masculine)'},
        {arabic: 'كَيْفَ حَالُكِ؟', english: 'How are you? (feminine)'},
        {arabic: 'بِخَيْرٍ، شُكْرًا', english: 'I am fine, thank you'},
        {arabic: 'وَأَنْتَ؟', english: 'And you? (masculine)'},
        {arabic: 'وَأَنْتِ؟', english: 'And you? (feminine)'},
        {arabic: 'لَا أَفْهَمُ', english: "I don't understand"},
        {arabic: 'هَلْ تَتَحَدَّثُ الْعَرَبِيَّةَ؟', english: 'Do you speak Arabic?'},
        {arabic: 'قَلِيلًا', english: 'A little.'},
        {arabic: 'نَعَمْ', english: 'Yes'},
        {arabic: 'لَا', english: 'No'},
        {arabic: 'مِنْ فَضْلِكَ', english: 'Please (masculine)'},
        {arabic: 'مِنْ فَضْلِكِ', english: 'Please (feminine)'},
        {arabic: 'مَعَ السَّلَامَةِ', english: 'Goodbye. (literally "go with peace")'},
        {arabic: 'إلَى اللِّقَاءِ', english: 'See you later.'},
        {arabic: 'شُكْرًا لَكَ', english: 'Thank you (masculine)'},
        {arabic: 'شُكْرًا لَكِ', english: 'Thank you (feminine)'},
        {arabic: 'الْعَفْوُ', english: "You're welcome"},
        {arabic: 'صَبَاحُ الْخَيْرِ', english: 'Good morning'},
        {arabic: 'مَسَاءُ الْخَيْرِ', english: 'Good evening'},
        {arabic: 'لَيْلَةٌ سَعِيدَةٌ', english: 'Good night'}],
    "Ask Questions": [
        {arabic: 'كَيْفَ حَالُكَ؟', english: 'How are you? (masculine)'}, 
        {arabic: 'كَيْفَ حَالُكِ؟', english: 'How are you? (feminine)'},
        {arabic: 'مَاذَا تَفْعَلُ؟', english: 'What are you doing? (masculine)'},
        {arabic: 'مَاذَا تَفْعَلِينَ؟', english: 'What are you doing? (feminine)'},
        {arabic: 'مَا هُوَ رأيُكَ؟', english: 'What is your opinion? (masculine)'},
        {arabic: 'مَا هُوَ رأيُكِ؟', english: 'What is your opinion? (feminine)'}],
    "Describe yourself": [
        {arabic: 'اِسْمِي ...', english: 'My name is ...'},
        {arabic: 'أَنَا ذَكَرٌ / أَنَا أُنثَى.', english: 'I am a male / I am a female.'},
        {arabic: 'عُمْرِي ... سَنَةً.', english: 'I am ... years old.'},
        {arabic: 'أَنَا ... (جِنْسِيَّتُكَ/جِنْسِيَّتُكِ).', english: 'I am ... (your nationality).'},
        {arabic: 'لَوْنُ عَيْنَيَّ ...', english: 'My eye color is ...'},
        {arabic: 'لَوْنُ شَعْرِي ...', english: 'My hair color is ...'}],
    "Pronouns": [
        {arabic: 'أَنَا', english: 'I'},
        {arabic: 'أَنْتَ', english: 'You (masculine singular)'},
        {arabic: 'أَنْتِ', english: 'You (feminine singular)'},
        {arabic: 'هُوَ', english: 'He'},
        {arabic: 'هِيَ', english: 'She'},
        {arabic: 'نَحْنُ', english: 'We'},
        {arabic: 'أَنْتُمْ', english: 'You (masculine plural)'},
        {arabic: 'أَنْتُنَّ', english: 'You (feminine plural)'},
        {arabic: 'هُمْ', english: 'They (masculine)'},
        {arabic: 'هُنَّ', english: 'They (feminine)'}]
};

let numberOfNewGeneratedFlashcards = 5
let subtopic = ""

document.addEventListener('DOMContentLoaded', function() {
    // Adding event listeners to each vocabulary button
    document.querySelectorAll('.vocab-button').forEach(button => {
        button.addEventListener('click', function() { //Flashcard Buttons
            const topic = this.textContent;

            console.log("Flashcard " + topic + " Opened")

            document.getElementById('modalTitle').textContent = topic; //Sets the title of the flashcard
            document.getElementById('vocabModal').style.display = 'block'; //idk

            displayFlashcards(topic);
        });
    });

    // Generate more flashcards for the current topic
    document.getElementById('generateMore').addEventListener('click', function() {
        const currentTopic = document.getElementById('modalTitle').textContent;
        console.log("Generate Button clicked");
        fetchAndDisplayFlashcards(currentTopic);
    });

    // Close functionality for both modals
    document.querySelectorAll('.close').forEach(closeButton => {
        closeButton.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });

    // Handling clicks outside of modals to close them
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    };

    // Event listener for handling Enter key in the new topic input box
    document.getElementById('newTopicName').addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent the default form submission
            document.querySelector('button[onclick="addNewTopic()"]').click(); // Simulate click on the "Create New Topic" button
        }
    });

    document.getElementById('responseInput').addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent the default form submission
            document.querySelector('button[onclick="submitQuestion()"]').click(); // Simulate click on the "Create New Topic" button
        }
    });

    //study button
    document.getElementById('study').addEventListener('click', function() {
        const flashcardsContainer = document.getElementById('flashcardsContainer');
        const flashcards = flashcardsContainer.querySelectorAll('.flashcard');
        let flashcardsMap = {};

        flashcards.forEach((card, index) => {
            const english = card.querySelector('.english').textContent;
            const arabic = card.querySelector('.arabic').textContent;
            flashcardsMap[`${index + 1}`] = { English: english, Arabic: arabic };
        });

        // Store the hashmap and string in localStorage
        localStorage.setItem('flashcardsMap', JSON.stringify(flashcardsMap));
        localStorage.setItem('flashcardsString', JSON.stringify(flashcardsMap));

        // Open a new HTML page
        window.open('Study/study.html', '_blank');
    });


    const toggleButton = document.getElementById('toggleInputs');
    const inputContainer = document.getElementById('inputContainer');

    toggleButton.addEventListener('click', function() {
        // Check the current display status of the input container
        if (inputContainer.style.display === 'none') {
            inputContainer.style.display = 'block'; // Show the inputs
        } else {
            inputContainer.style.display = 'none'; // Hide the inputs
        }
    });


    // Get references to the input elements
    const itemCountInput = document.getElementById('itemCount');
    const subTopicInput = document.getElementById('subTopicInput');

    // Event listener for the item count input
    itemCountInput.addEventListener('input', function() {
        numberOfNewGeneratedFlashcards = parseInt(this.value) || 0;
        console.log('Updated number of flashcards:', numberOfNewGeneratedFlashcards);
    });

    // Event listener for the subtopic input
    subTopicInput.addEventListener('input', function() {
        subtopic = this.value;
        console.log('Updated subtopic:', subtopic);
    });

});


// Function to display flashcards specific to a topic
// Function to display flashcards specific to a topic
function displayFlashcards(topic) {
    const flashcardsContainer = document.getElementById('flashcardsContainer');
    flashcardsContainer.innerHTML = ''; // Clear existing content

    const flashcards = flashcardsByTopic[topic];
    flashcards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'flashcard';
        cardElement.onclick = () => openQuestionWindow(`${card.english} - ${card.arabic}`);

        const englishElement = document.createElement('div');
        englishElement.textContent = card.english;
        englishElement.className = 'english flashcard-part';

        const arabicElement = document.createElement('div');
        arabicElement.textContent = card.arabic;
        arabicElement.className = 'arabic flashcard-part';

        const englishAudioButton = document.createElement('button');
        englishAudioButton.className = 'audio-button';
        englishAudioButton.textContent = '🔊';
        englishAudioButton.onclick = (event) => {
            event.stopPropagation(); // Prevent the flashcard click event
            aiSpeakEnglish(card.english);
        };

        const arabicAudioButton = document.createElement('button');
        arabicAudioButton.className = 'audio-button';
        arabicAudioButton.textContent = '🔊';
        arabicAudioButton.onclick = (event) => {
            event.stopPropagation(); // Prevent the flashcard click event
            aiSpeakArabic(card.arabic);
        };

        cardElement.appendChild(englishElement);
        cardElement.appendChild(englishAudioButton);
        cardElement.appendChild(arabicElement);
        cardElement.appendChild(arabicAudioButton);
        flashcardsContainer.appendChild(cardElement);
    });
}


// Fetch new flashcards and update global hashmap
function fetchAndDisplayFlashcards(topic) {
    console.log("Generating for " + topic);
    
    const previousData = flashcardsByTopic[topic];
    previousDataString = ''
    
    
    if (previousData.length != 0){
        previousDataString = previousData.map(item => item.english).join(', ');
    }
    
    
    const loadingIcon = document.querySelector('#generateMore .loading-icon');
    loadingIcon.style.display = 'inline-block'; // Show loading icon
    
    fetch('https://airabic.site/generate-words', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            topic: topic, 
            prev: previousDataString,
            num: numberOfNewGeneratedFlashcards,
            subtopic: subtopic
        })
    })
    .then(response => response.json())
    .then(data => {

        const parsedFlashcards = parseFlashcards(data.message);

        console.log(parsedFlashcards)

        for (let i = 0; i < parsedFlashcards.length; i++){
            previousData.push(parsedFlashcards[i])
        }

        console.log(parsedFlashcards)

        console.log(previousData)

        flashcardsByTopic[topic] = previousData; // Store new flashcards
        displayFlashcards(topic); // Display the flashcards
        loadingIcon.style.display = 'none'; // Hide loading icon
    })
    .catch(error => {
        console.error('Error fetching new words:', error);
        loadingIcon.style.display = 'none'; // Ensure loading icon is hidden on error
    });
}


// Function to parse flashcards from string
function parseFlashcards(flashcardString) {
    const flashcardLines = flashcardString.trim().split(/\r?\n/);
    const flashcards = [];

    for (let i = 0; i < flashcardLines.length; i++) {
        const line = flashcardLines[i].trim();
        if (line.startsWith('A:')) {
            const arabicPart = line.split('A:')[1]?.trim();
            if (i + 1 < flashcardLines.length && flashcardLines[i + 1].startsWith('E:')) {
                const englishPart = flashcardLines[i + 1].split('E:')[1]?.trim();
                if (arabicPart && englishPart) {
                    flashcards.push({ arabic: arabicPart, english: englishPart });
                    i++; // Skip the next line as it's already processed
                }
            }
        }
    }
    return flashcards;
}

function addNewTopic() {
    const topicName = document.getElementById('newTopicName').value.trim();

    if (topicName === "") {
        alert("Please enter a topic name.");
        return;
    }

    // Check if the topic already exists to avoid duplicates
    if (flashcardsByTopic.hasOwnProperty(topicName)) {
        alert("This topic already exists.");
        return;
    }

    // Add new topic to the flashcardsByTopic object
    flashcardsByTopic[topicName] = [];

    // Create new button for the topic
    const button = document.createElement('button');
    button.className = 'vocab-button';
    button.textContent = topicName;
    button.addEventListener('click', function() {
        console.log("Flashcard " + topicName + " Opened");
        document.getElementById('modalTitle').textContent = topicName;
        document.getElementById('vocabModal').style.display = 'block';
        displayFlashcards(topicName);
    });

    // Append new button to the grid
    document.querySelector('.vocabulary-grid').appendChild(button);

    // Clear input field after adding
    document.getElementById('newTopicName').value = '';
}

// Function to open the question modal
function openQuestionWindow(text) {
    const modal = document.getElementById('questionModal');
    const questionText = document.getElementById('questionText');
    if (modal && questionText) {
        questionText.textContent = text;
        modal.style.display = 'block';
    }
}

function submitQuestion() {
    const input = document.getElementById('responseInput');
    const aiResponse = document.getElementById('aiResponse');
    const question = input.value.trim();
    const contextText = document.getElementById('questionText').textContent;  // The AI-generated sentence

    if (!question) {
        alert('Please enter a question.');
        return;
    }

    fetch('https://airabic.site/ask-gemini', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            question: question,
            context: contextText // Optionally pass the original AI-generated text for context
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.error('Error from server:', data.error);
            aiResponse.textContent = 'Error getting response from AI.';
        } else {
            aiResponse.textContent = data.message; // Display Gemini's response
        }
    })
    .catch(error => {
        console.error('Error getting response:', error);
        aiResponse.textContent = 'Failed to communicate with AI.';
    });

    // Clear the input field after submission
    input.value = '';
}


//functions to speak text
function aiSpeakArabic(text) {
    fetch('https://airabic.site/synthesize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: text, character: "Ayah"})
    })
    .then(response => response.blob())
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const audio = new Audio(url);
        audio.play();
    })
    .catch(error => console.error('Error playing the response:', error));
}

function aiSpeakEnglish(text) {
    fetch('https://airabic.site/synthesize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: text, character: "William"})
    })
    .then(response => response.blob())
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const audio = new Audio(url);
        audio.play();
    })
    .catch(error => console.error('Error playing the response:', error));
}


