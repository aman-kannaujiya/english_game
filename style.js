const categories = {
    "General Vocabulary": [
      {"word": "Aberration", "meanings": ["A departure from what is normal", "A type of fruit", "A musical instrument", "A color shade"], "answer": 0},
      {"word": "Benevolent", "meanings": ["Kind and generous", "Evil and harmful", "Neutral", "Lazy"], "answer": 0},
      {"word": "Cacophony", "meanings": ["A harsh discordant mixture of sounds", "A type of bird", "A sweet smell", "A dance style"], "answer": 0},
      {"word": "Ephemeral", "meanings": ["Lasting for a very short time", "Extremely heavy", "Colorful and bright", "Ancient and historical"], "answer": 0},
      {"word": "Gregarious", "meanings": ["Fond of company; sociable", "Angry and hostile", "Slow moving", "Extremely intelligent"], "answer": 0}
    ],
    "Science Terms": [
      {"word": "Photosynthesis", "meanings": ["Process by which plants make food", "Study of light", "A type of cell division", "A chemical reaction in animals"], "answer": 0},
      {"word": "Mitochondria", "meanings": ["Powerhouse of the cell", "A type of bacteria", "Part of the brain", "A bone in the ear"], "answer": 0},
      {"word": "Inertia", "meanings": ["Resistance to change in motion", "Gravitational pull", "Speed of light", "Chemical reaction"], "answer": 0},
      {"word": "Osmosis", "meanings": ["Movement of water through a membrane", "Formation of bones", "Division of cells", "Blood circulation"], "answer": 0},
      {"word": "Entropy", "meanings": ["Measure of disorder in a system", "Energy conservation", "Gravitational constant", "Cell reproduction"], "answer": 0}
    ],
    "Technology": [
      {"word": "Algorithm", "meanings": ["Step-by-step procedure for calculations", "A computer virus", "Hardware component", "Digital currency"], "answer": 0},
      {"word": "Bandwidth", "meanings": ["Data transfer capacity", "Computer memory", "Screen resolution", "Processor speed"], "answer": 0},
      {"word": "Encryption", "meanings": ["Converting data into code", "Deleting files permanently", "Transferring files", "Computer programming"], "answer": 0},
      {"word": "Firewall", "meanings": ["Security system for networks", "Overheated computer", "Backup system", "Video processing unit"], "answer": 0},
      {"word": "Cloud Computing", "meanings": ["Internet-based computing services", "Weather forecasting", "Data visualization", "Computer cooling system"], "answer": 0}
    ],
    "Business Terms": [
      {"word": "Equity", "meanings": ["Ownership interest in a company", "Equal pay for employees", "Business expense", "Company debt"], "answer": 0},
      {"word": "Diversification", "meanings": ["Spreading investments to reduce risk", "Expanding to new markets", "Hiring diverse workforce", "Reducing company size"], "answer": 0},
      {"word": "Leverage", "meanings": ["Using borrowed capital for investment", "Negotiation technique", "Marketing strategy", "Leadership style"], "answer": 0},
      {"word": "Liquidity", "meanings": ["Ability to convert assets to cash", "Company profits", "Cash flow statement", "Debt management"], "answer": 0},
      {"word": "Depreciation", "meanings": ["Reduction in value of an asset", "Economic downturn", "Currency devaluation", "Decrease in stock price"], "answer": 0}
    ],
    "Programming": [
      {"word": "Function", "meanings": ["A reusable block of code", "A variable type", "A hardware component", "A database"], "answer": 0},
      {"word": "Variable", "meanings": ["A named storage location", "A programming language", "A type of loop", "A network protocol"], "answer": 0},
      {"word": "API", "meanings": ["Application Programming Interface", "Advanced Programming Input", "Automated Process Integration", "Application Process Indicator"], "answer": 0},
      {"word": "Repository", "meanings": ["A storage location for code", "A type of variable", "A programming error", "A computer processor"], "answer": 0},
      {"word": "Debugging", "meanings": ["Finding and fixing errors", "Creating new code", "Optimizing performance", "Converting code to machine language"], "answer": 0}
    ],
    "Medical Terms": [
      {"word": "Tachycardia", "meanings": ["Abnormally rapid heart rate", "Low blood pressure", "Inflammation of the lungs", "Kidney disorder"], "answer": 0},
      {"word": "Hypertension", "meanings": ["High blood pressure", "Excessive sweating", "Joint pain", "Memory loss"], "answer": 0},
      {"word": "Arrhythmia", "meanings": ["Irregular heartbeat", "Skin condition", "Bone disease", "Muscle weakness"], "answer": 0},
      {"word": "Dysphagia", "meanings": ["Difficulty swallowing", "Breathing problem", "Liver disease", "Hearing loss"], "answer": 0},
      {"word": "Myalgia", "meanings": ["Muscle pain", "Brain disorder", "Eye disease", "Digestive problem"], "answer": 0}
    ],
    "Psychology": [
      {"word": "Cognition", "meanings": ["Mental process of acquiring knowledge", "Emotional response", "Sleep disorder", "Social behavior"], "answer": 0},
      {"word": "Neuroticism", "meanings": ["Tendency toward anxiety and emotional instability", "Memory enhancement", "Learning disability", "Personality development"], "answer": 0},
      {"word": "Confabulation", "meanings": ["Creating false memories", "Concentration technique", "Behavioral therapy", "Dream analysis"], "answer": 0},
      {"word": "Catharsis", "meanings": ["Release of emotional tension", "Memory formation", "Thought process", "Behavioral conditioning"], "answer": 0},
      {"word": "Habituation", "meanings": ["Decreased response to repeated stimulus", "Memory improvement", "Emotional intelligence", "Social anxiety"], "answer": 0}
    ],
    "Legal Terms": [
      {"word": "Jurisprudence", "meanings": ["Philosophy of law", "Court procedure", "Legal document", "Criminal sentence"], "answer": 0},
      {"word": "Tort", "meanings": ["Civil wrong causing harm or loss", "Legal contract", "Court order", "Criminal charge"], "answer": 0},
      {"word": "Habeas Corpus", "meanings": ["Legal action to review lawfulness of detention", "Property law", "Marriage contract", "Tax regulation"], "answer": 0},
      {"word": "Subpoena", "meanings": ["Legal document ordering witness appearance", "Court verdict", "Settlement agreement", "Legal defense"], "answer": 0},
      {"word": "Affidavit", "meanings": ["Written statement confirmed by oath", "Court ruling", "Legal representation", "Jury selection"], "answer": 0}
    ],
    "Philosophy": [
      {"word": "Epistemology", "meanings": ["Study of knowledge", "Political theory", "Moral principles", "Existence theory"], "answer": 0},
      {"word": "Metaphysics", "meanings": ["Study of reality and existence", "Logic system", "Ethical framework", "Political philosophy"], "answer": 0},
      {"word": "Nihilism", "meanings": ["Rejection of all religious and moral principles", "Knowledge theory", "Happiness pursuit", "Political system"], "answer": 0},
      {"word": "Existentialism", "meanings": ["Philosophy emphasizing individual existence and freedom", "Scientific method", "Religious doctrine", "Mathematical theory"], "answer": 0},
      {"word": "Utilitarianism", "meanings": ["Actions are right if they promote happiness", "Knowledge theory", "Reality perception", "Political system"], "answer": 0}
    ],
    "Architecture": [
      {"word": "Buttress", "meanings": ["Support structure built against a wall", "Roof design", "Interior decoration", "Window type"], "answer": 0},
      {"word": "Facade", "meanings": ["Front of a building", "Foundation type", "Interior wall", "Ceiling design"], "answer": 0},
      {"word": "Cornice", "meanings": ["Decorative molding along the top of a wall", "Building foundation", "Door frame", "Floor pattern"], "answer": 0},
      {"word": "Cantilever", "meanings": ["Projecting structure supported at only one end", "Roof style", "Window frame", "Interior column"], "answer": 0},
      {"word": "Fenestration", "meanings": ["Arrangement of windows in a building", "Floor design", "Wall structure", "Ceiling pattern"], "answer": 0}
    ],
    "Economics": [
      {"word": "Stagflation", "meanings": ["High inflation combined with economic stagnation", "Economic growth", "Market stability", "Price decrease"], "answer": 0},
      {"word": "Arbitrage", "meanings": ["Simultaneous buying and selling to profit from price differences", "Government spending", "Trade deficit", "Market crash"], "answer": 0},
      {"word": "Deflation", "meanings": ["General decrease in prices", "Economic growth", "Currency value increase", "Trade surplus"], "answer": 0},
      {"word": "Liquidity Trap", "meanings": ["Monetary policy becomes ineffective at zero interest rates", "Banking crisis", "Market boom", "Trade imbalance"], "answer": 0},
      {"word": "Elasticity", "meanings": ["Measure of responsiveness to price changes", "Economic depression", "Market volatility", "Inflation rate"], "answer": 0}
    ],
    "Art Terms": [
      {"word": "Chiaroscuro", "meanings": ["Use of strong contrasts between light and dark", "Painting technique using dots", "Sculpture method", "Color theory"], "answer": 0},
      {"word": "Impasto", "meanings": ["Thick application of paint", "Watercolor technique", "Drawing method", "Print making"], "answer": 0},
      {"word": "Trompe l'oeil", "meanings": ["Art that creates optical illusion", "Abstract style", "Color mixing", "Sculpture form"], "answer": 0},
      {"word": "Sfumato", "meanings": ["Technique of allowing tones to shade gradually into one another", "Brush type", "Canvas preparation", "Art movement"], "answer": 0},
      {"word": "Collage", "meanings": ["Art made by sticking various materials on a backing", "Painting style", "Sculpture method", "Drawing technique"], "answer": 0}
    ],
    "Music Theory": [
      {"word": "Crescendo", "meanings": ["Gradual increase in loudness", "Rhythm pattern", "Musical note", "Instrument type"], "answer": 0},
      {"word": "Arpeggio", "meanings": ["Notes of a chord played in sequence", "Musical scale", "Tempo marking", "Voice range"], "answer": 0},
      {"word": "Cadence", "meanings": ["Sequence of chords that brings an end to a phrase", "Musical instrument", "Note duration", "Rhythm pattern"], "answer": 0},
      {"word": "Syncopation", "meanings": ["Displacement of rhythm accents", "Musical key", "Harmony type", "Instrument family"], "answer": 0},
      {"word": "Timbre", "meanings": ["Quality of a musical note", "Volume level", "Rhythm pattern", "Musical notation"], "answer": 0}
    ],
    "Astronomy": [
      {"word": "Nebula", "meanings": ["Cloud of gas and dust in space", "Type of star", "Moon crater", "Planet ring"], "answer": 0},
      {"word": "Quasar", "meanings": ["Extremely luminous active galactic nucleus", "Meteor shower", "Star cluster", "Planet type"], "answer": 0},
      {"word": "Parallax", "meanings": ["Apparent displacement of an object viewed from different positions", "Galaxy formation", "Star death", "Planetary orbit"], "answer": 0},
      {"word": "Magnetosphere", "meanings": ["Region around a planet dominated by its magnetic field", "Star formation", "Galaxy type", "Moon phase"], "answer": 0},
      {"word": "Albedo", "meanings": ["Proportion of light reflected by a surface", "Star temperature", "Planet rotation", "Comet tail"], "answer": 0}
    ],
    "Geology": [
      {"word": "Stratigraphy", "meanings": ["Study of rock layers", "Volcanic activity", "Earthquake measurement", "Mineral formation"], "answer": 0},
      {"word": "Moraine", "meanings": ["Mass of rocks carried by a glacier", "Rock type", "Mountain formation", "Soil layer"], "answer": 0},
      {"word": "Escarpment", "meanings": ["Steep slope or cliff at the edge of a plateau", "Rock formation", "Cave system", "Mineral deposit"], "answer": 0},
      {"word": "Lithification", "meanings": ["Process of converting sediment to solid rock", "Volcanic eruption", "Earthquake prediction", "Fossil formation"], "answer": 0},
      {"word": "Subduction", "meanings": ["Process where one tectonic plate moves under another", "Mountain erosion", "River formation", "Rock weathering"], "answer": 0}
    ],
    "Linguistics": [
      {"word": "Morpheme", "meanings": ["Smallest meaningful unit in a language", "Sentence structure", "Speech sound", "Writing system"], "answer": 0},
      {"word": "Phonology", "meanings": ["Study of sound patterns in language", "Grammar rules", "Word meanings", "Language history"], "answer": 0},
      {"word": "Syntax", "meanings": ["Arrangement of words in a sentence", "Speech sounds", "Word meanings", "Language family"], "answer": 0},
      {"word": "Pragmatics", "meanings": ["Study of language use in context", "Grammar rules", "Speech sounds", "Word formation"], "answer": 0},
      {"word": "Semantics", "meanings": ["Study of meaning in language", "Sentence structure", "Speech sounds", "Writing systems"], "answer": 0}
    ],
    "Culinary Terms": [
      {"word": "Blanch", "meanings": ["Briefly immerse in boiling water", "Slow cooking method", "Frying technique", "Food presentation"], "answer": 0},
      {"word": "Braise", "meanings": ["Cook slowly in fat and liquid in a covered pot", "Quick frying", "Food decoration", "Cooling method"], "answer": 0},
      {"word": "Deglaze", "meanings": ["Add liquid to a hot pan to dissolve food particles", "Cooking oil removal", "Food preservation", "Meat tenderizing"], "answer": 0},
      {"word": "Julienne", "meanings": ["Cut food into thin strips", "Cooking in water", "Food preservation", "Meat preparation"], "answer": 0},
      {"word": "Reduction", "meanings": ["Thickening a liquid by simmering", "Food cooling", "Meat preparation", "Vegetable cutting"], "answer": 0}
    ],
    "Fashion": [
      {"word": "Haute Couture", "meanings": ["High-end fashion custom-fitted clothing", "Casual wear", "Vintage clothing", "Athletic wear"], "answer": 0},
      {"word": "Appliqué", "meanings": ["Ornamental needlework in which pieces are sewn onto a larger piece", "Fabric type", "Clothing size", "Fashion show"], "answer": 0},
      {"word": "Bespoke", "meanings": ["Custom-made clothing", "Mass-produced fashion", "Vintage style", "Fashion accessory"], "answer": 0},
      {"word": "Gusset", "meanings": ["Piece of fabric inserted into a seam for reinforcement", "Sleeve type", "Collar style", "Button type"], "answer": 0},
      {"word": "Toile", "meanings": ["Test garment made before final piece", "Fabric pattern", "Clothing display", "Fashion sketch"], "answer": 0}
    ],
    "Sports": [
      {"word": "Peloton", "meanings": ["Main group of riders in a bicycle race", "Swimming technique", "Baseball pitch", "Football play"], "answer": 0},
      {"word": "Alley-oop", "meanings": ["Basketball play where one player throws the ball near the basket for another to dunk", "Tennis serve", "Golf swing", "Soccer penalty"], "answer": 0},
      {"word": "Hat Trick", "meanings": ["Three goals scored by one player in a game", "Boxing move", "Swimming style", "Tennis serve"], "answer": 0},
      {"word": "Shuttlecock", "meanings": ["Object hit in badminton", "Cricket equipment", "Golf accessory", "Swimming gear"], "answer": 0},
      {"word": "Regatta", "meanings": ["Boat race or series of races", "Wrestling match", "Track event", "Boxing tournament"], "answer": 0}
    ],
    "Film & Theater": [
      {"word": "Mise-en-scène", "meanings": ["Arrangement of scenery and stage properties", "Film editing", "Camera angle", "Sound effect"], "answer": 0},
      {"word": "Diegetic", "meanings": ["Sound that has a visible source in the film", "Camera movement", "Lighting technique", "Acting method"], "answer": 0},
      {"word": "Foley", "meanings": ["Recreation of everyday sound effects", "Camera type", "Film editing", "Screenplay writing"], "answer": 0},
      {"word": "Blocking", "meanings": ["Planning of actors' positions and movements on stage", "Film editing", "Camera angle", "Lighting design"], "answer": 0},
      {"word": "Denouement", "meanings": ["Final part of a narrative where the plot is resolved", "Opening scene", "Character development", "Film setting"], "answer": 0}
    ],
    "Environmental Science": [
      {"word": "Biodiversity", "meanings": ["Variety of plant and animal life in a habitat", "Climate change", "Water pollution", "Soil erosion"], "answer": 0},
      {"word": "Eutrophication", "meanings": ["Excessive richness of nutrients in a body of water", "Forest growth", "Air pollution", "Soil formation"], "answer": 0},
      {"word": "Bioremediation", "meanings": ["Use of organisms to remove pollutants", "Ecosystem study", "Wildlife conservation", "Climate monitoring"], "answer": 0},
      {"word": "Desertification", "meanings": ["Process by which fertile land becomes desert", "Water purification", "Forest management", "Species adaptation"], "answer": 0},
      {"word": "Biomagnification", "meanings": ["Increasing concentration of substances in organisms at higher trophic levels", "Plant growth", "Animal migration", "Ecosystem development"], "answer": 0}
    ],
    "Mathematics": [
      {"word": "Logarithm", "meanings": ["Exponent to which a base must be raised to produce a given number", "Geometric shape", "Equation type", "Number sequence"], "answer": 0},
      {"word": "Eigenvalue", "meanings": ["Special scalar in linear transformations", "Geometric proof", "Number theory", "Mathematical constant"], "answer": 0},
      {"word": "Topology", "meanings": ["Study of geometric properties unaffected by continuous deformations", "Number theory", "Calculus method", "Equation solving"], "answer": 0},
      {"word": "Stochastic", "meanings": ["Randomly determined", "Geometric pattern", "Mathematical proof", "Number sequence"], "answer": 0},
      {"word": "Fractal", "meanings": ["Complex pattern that is self-similar across different scales", "Mathematical equation", "Geometric shape", "Number sequence"], "answer": 0}
    ],
    "Mythology": [
      {"word": "Pantheon", "meanings": ["All the gods of a people", "Ancient temple", "Hero's journey", "Religious text"], "answer": 0},
      {"word": "Apotheosis", "meanings": ["Elevation to divine status", "Hero's death", "Monster creation", "Sacred ritual"], "answer": 0},
      {"word": "Chimera", "meanings": ["Fire-breathing monster with parts from multiple animals", "Greek god", "Norse weapon", "Egyptian symbol"], "answer": 0},
      {"word": "Oracle", "meanings": ["Person through whom a deity speaks", "Sacred building", "Religious text", "Mythical weapon"], "answer": 0},
      {"word": "Ragnarök", "meanings": ["Norse apocalypse", "Greek festival", "Roman ritual", "Egyptian afterlife"], "answer": 0}
    ],
    "World History": [
      {"word": "Renaissance", "meanings": ["Period of European cultural, artistic, and scientific revival", "Ancient war", "Colonial expansion", "Political system"], "answer": 0},
      {"word": "Feudalism", "meanings": ["Medieval social system based on holding land in exchange for service", "Trade agreement", "Religious movement", "Military strategy"], "answer": 0},
      {"word": "Diaspora", "meanings": ["Dispersion of people from their original homeland", "Peace treaty", "Military formation", "Political alliance"], "answer": 0},
      {"word": "Imperialism", "meanings": ["Policy of extending a country's power through colonization", "Democratic system", "Religious movement", "Economic theory"], "answer": 0},
      {"word": "Enlightenment", "meanings": ["Intellectual movement emphasizing reason and individualism", "Military campaign", "Agricultural revolution", "Trade system"], "answer": 0}
    ],
    "Chemistry": [
      {"word": "Catalysis", "meanings": ["Increase in the rate of a chemical reaction by a substance", "Chemical bonding", "Element formation", "Compound separation"], "answer": 0},
      {"word": "Isomer", "meanings": ["Compound with the same formula but different structure", "Chemical reaction", "Element type", "Laboratory equipment"], "answer": 0},
      {"word": "Titration", "meanings": ["Process to determine the concentration of a solution", "Chemical bonding", "Compound formation", "Element discovery"], "answer": 0},
      {"word": "Sublimation", "meanings": ["Transition from solid to gas without becoming liquid", "Chemical reaction", "Compound formation", "Solution mixing"], "answer": 0},
      {"word": "Valence", "meanings": ["Combining capacity of an atom", "Chemical solution", "Laboratory procedure", "Compound weight"], "answer": 0}
    ],
    "Physics": [
      {"word": "Quantum", "meanings": ["Discrete quantity of energy", "Force measurement", "Motion study", "Light property"], "answer": 0},
      {"word": "Entropy", "meanings": ["Measure of disorder in a system", "Energy conservation", "Motion calculation", "Force direction"], "answer": 0},
      {"word": "Relativity", "meanings": ["Theory about the relationship between space and time", "Energy measurement", "Particle study", "Light behavior"], "answer": 0},
      {"word": "Resonance", "meanings": ["Vibration of large amplitude caused by a small stimulus", "Light property", "Energy form", "Motion type"], "answer": 0},
      {"word": "Diffraction", "meanings": ["Bending of waves around obstacles", "Energy transfer", "Particle movement", "Force measurement"], "answer": 0}
    ],
    "Literature": [
      {"word": "Allegory", "meanings": ["Story with hidden moral or political meaning", "Poetry style", "Novel length", "Character type"], "answer": 0},
      {"word": "Bildungsroman", "meanings": ["Novel dealing with someone's formative years", "Poetry collection", "Short story", "Drama technique"], "answer": 0},
      {"word": "Denouement", "meanings": ["Final resolution of a story's complications", "Character introduction", "Setting description", "Plot beginning"], "answer": 0},
      {"word": "Euphemism", "meanings": ["Mild expression substituted for harsh one", "Poetry form", "Writing style", "Character development"], "answer": 0},
      {"word": "Juxtaposition", "meanings": ["Placing contrasting elements side by side", "Novel ending", "Character description", "Narrative voice"], "answer": 0}
    ]
  };
  
  let currentCategory = null;
  let currentWords = [];
  let currentIndex = 0;
  let score = 0;
  let highScores = {};
  let gameActive = false;
  let isDarkMode = true; // Default to dark mode
  
  // Toggle dark/light theme
  function toggleTheme() {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
      document.documentElement.classList.remove('light-theme');
      document.documentElement.classList.add('dark-theme');
      document.getElementById('moonIcon').style.display = 'inline-block';
      document.getElementById('sunIcon').style.display = 'none';
      document.getElementById('themeToggle').querySelector('span').textContent = 'Light mode';
    } else {
      document.documentElement.classList.remove('dark-theme');
      document.documentElement.classList.add('light-theme');
      document.getElementById('moonIcon').style.display = 'none';
      document.getElementById('sunIcon').style.display = 'inline-block';
      document.getElementById('themeToggle').querySelector('span').textContent = 'Dark mode';
    }
  }
  
  // Randomize the correct answers in each category
  function randomizeAnswers() {
    for (const category in categories) {
      categories[category].forEach(wordObj => {
        // Randomly select which option will be correct (0-3)
        const correctIndex = Math.floor(Math.random() * 4);
        
        // If it's already at the correct index, no need to swap
        if (correctIndex === wordObj.answer) return;
        
        // Swap the correct meaning with the one at the randomly selected index
        const correctMeaning = wordObj.meanings[wordObj.answer];
        wordObj.meanings[wordObj.answer] = wordObj.meanings[correctIndex];
        wordObj.meanings[correctIndex] = correctMeaning;
        wordObj.answer = correctIndex;
      });
    }
  }
  
  function populateCategories() {
    const select = document.getElementById('categorySelect');
    Object.keys(categories).forEach(cat => {
      const option = document.createElement('option');
      option.value = cat;
      option.textContent = cat;
      select.appendChild(option);
    });
    
    // Initialize high scores
    Object.keys(categories).forEach(cat => {
      highScores[cat] = 0;
    });
    
    // Load high scores from localStorage if available
    const savedHighScores = localStorage.getItem('wordGameHighScores');
    if (savedHighScores) {
      highScores = JSON.parse(savedHighScores);
    }
  }
  
  function changeCategory() {
    const select = document.getElementById('categorySelect');
    currentCategory = select.value;
    
    if (!currentCategory) {
      document.getElementById('word').textContent = 'Please select a category';
      document.getElementById('options').innerHTML = '';
      document.getElementById('result').textContent = '';
      document.getElementById('startBtn').disabled = true;
      return;
    }
    
    document.getElementById('word').textContent = `Ready to start "${currentCategory}" category`;
    document.getElementById('options').innerHTML = '';
    document.getElementById('result').textContent = '';
    document.getElementById('startBtn').disabled = false;
    document.getElementById('highScore').textContent = `High Score: ${highScores[currentCategory] || 0}`;
  }
  
  function startGame() {
    currentWords = [...categories[currentCategory]]; // Create a copy of the array
    shuffleArray(currentWords); // Shuffle the words
    currentIndex = 0;
    score = 0;
    gameActive = true;
    document.getElementById('score').textContent = 'Score: 0';
    document.getElementById('startBtn').style.display = 'none';
    loadWord();
  }
  
  function loadWord() {
    if (currentIndex >= currentWords.length) {
      // Player completed all words in the category
      gameOver(true);
      return;
    }
    
    const wordObj = currentWords[currentIndex];
    document.getElementById('word').textContent = wordObj.word;
    const optionsList = document.getElementById('options');
    optionsList.innerHTML = '';
    
    wordObj.meanings.forEach((meaning, index) => {
      const li = document.createElement('li');
      li.textContent = meaning;
      li.onclick = () => selectOption(index);
      optionsList.appendChild(li);
    });
    
    document.getElementById('result').textContent = '';
  }
  
  function selectOption(selectedIndex) {
    if (!gameActive) return;
    
    const wordObj = currentWords[currentIndex];
    const options = document.querySelectorAll('#options li');
    
    // Disable all options
    options.forEach(option => {
      option.onclick = null;
    });
    
    if (selectedIndex === wordObj.answer) {
      // Correct answer
      options[selectedIndex].classList.add('correct');
      document.getElementById('result').textContent = 'Correct!';
      score++;
      document.getElementById('score').textContent = `Score: ${score}`;
      
      // Move to next word after a short delay
      setTimeout(() => {
        currentIndex++;
        loadWord();
      }, 1000);
    } else {
      // Wrong answer - game over
      options[selectedIndex].classList.add('wrong');
      options[wordObj.answer].classList.add('correct');
      gameOver(false, wordObj.meanings[wordObj.answer]);
    }
  }
  
  function gameOver(completed, correctAnswer = null) {
    gameActive = false;
    
    // Update high score if needed
    if (score > (highScores[currentCategory] || 0)) {
      highScores[currentCategory] = score;
      localStorage.setItem('wordGameHighScores', JSON.stringify(highScores));
      document.getElementById('highScore').textContent = `High Score: ${score}`;
    }
    
    // Show game over modal
    const modal = document.getElementById('gameOverModal');
    const finalScoreEl = document.getElementById('finalScore');
    const correctAnswerEl = document.getElementById('correctAnswer');
    
    if (completed) {
      finalScoreEl.textContent = `Congratulations! You completed the category with a perfect score of ${score}!`;
      correctAnswerEl.textContent = '';
    } else {
      finalScoreEl.textContent = `Your score: ${score}`;
      correctAnswerEl.textContent = `The correct answer was: "${correctAnswer}"`;
    }
    
    modal.classList.add('active');
  }
  
  function restartGame() {
    document.getElementById('gameOverModal').classList.remove('active');
    document.getElementById('startBtn').style.display = 'block';
    document.getElementById('word').textContent = `Ready to start "${currentCategory}" category`;
    document.getElementById('options').innerHTML = '';
    document.getElementById('result').textContent = '';
  }
  
  // Utility function to shuffle array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  window.onload = () => {
    randomizeAnswers();
    populateCategories();
    
    // Set up theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
  };
  