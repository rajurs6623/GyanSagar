export const getStoryChapters = (book) => {
    if (!book) return { chapters: [], recommendedBuddy: 'monkey' };
    
    const title = book.title || "A Magical Adventure";
    const authorName = book.author || "Unknown Author";
    const cat = book.category || "General";
    const idNum = parseInt(book.id?.replace(/\D/g, '') || '0') % 2; // Use ID for variety

    let chapters = [];
    let recommendedBuddy = 'monkey';

    if (cat === "Classic Indian Folktales") {
        recommendedBuddy = 'bheem';
        if (idNum === 0) {
            chapters = [
                { title: "Intro", content: `Namaste! Today we travel to ancient India to hear "${title}" by ${authorName}.` },
                { title: "Setting", content: `Under the massive banyan tree, the village gathered. The air was filled with the scent of jasmine and the sound of bells.` },
                { title: "The Hero", content: `Our hero was known for wisdom, just like Birbal. A problem had arisen that only a pure heart could solve.` },
                { title: "The Plan", content: `With a smile and a clever riddle, the hero approached the King's court. Everyone watched in silence.` },
                { title: "Victory", content: `Justice was served! The truth revealed in "${title}" made everyone realize that kindness is the greatest strength.` },
                { title: "The End", content: `The village celebrated with dhol and dance. The story reached the gods themselves!` }
            ];
        } else {
            chapters = [
                { title: "Intro", content: `Welcome to the world of legends! Let's listen to "${title}" written by the wise ${authorName}.` },
                { title: "The Village", content: `In a small village near the Ganges, a mystery was brewing. The elders spoke of a hidden treasure of knowledge.` },
                { title: "Discovery", content: `Our hero found an old copper plate. It contained the secret of "${title}". The journey began with a single step of faith.` },
                { title: "Trial", content: `A tricky merchant tried to steal the secret, but wit and honesty protected our brave friend.` },
                { title: "Enlightenment", content: `The King himself bowed to the wisdom of a child. The lessons of this tale will shine forever like the sun.` },
                { title: "Peace", content: `As the evening lamps were lit, the story ended with a blessing for all children of the land.` }
            ];
        }
    } else if (cat === "Space & Science Explorers") {
        recommendedBuddy = 'doraemon';
        if (idNum === 0) {
            chapters = [
                { title: "Ignition", content: `3... 2... 1... Blast off! We are going into the stars with "${title}" by ${authorName}!` },
                { title: "Orbit", content: `The Earth looked like a glowing marble. We zoomed past satellites and skipped over the moon's craters.` },
                { title: "The Nebulae", content: `We entered a cloud of purple gas. A strange signal started beeping on the spaceship's radar.` },
                { title: "Contact", content: `A friendly alien robot waved from a passing comet! We used our science tools to say hello.` },
                { title: "The Discovery", content: `We found a new planet made of crystal! It proved that everything ${authorName} wrote was absolutely true.` },
                { title: "Re-entry", content: `Splashing down into the ocean, we brought back moonrocks and amazing stories of the cosmos.` }
            ];
        } else {
            chapters = [
                { title: "Launch", content: `Attention all astronauts! Commander ${authorName} is taking us on the "${title}" mission!` },
                { title: "Deep Space", content: `We are light-years away now. The Milky Way looks like a river of diamonds across the window.` },
                { title: "The Asteroid", content: `Watch out! We had to dodge a floating space-rock using gravity-boots and quick thinking.` },
                { title: "Fixing Spark", content: `Our robot friend lost its power. We used the sun's energy to fix it and keep the mission going.` },
                { title: "Black Hole", content: `We saw a swirling portal of mystery. It was scary but beautiful, teaching us the secrets of gravity.` },
                { title: "Homefront", content: `Back at the lab, we shared our photos. Space is waiting for the next brave explorer like you!` }
            ];
        }
    } else if (cat === "Animal Adventures" || cat === "Nature & Environment") {
        recommendedBuddy = 'monkey';
        if (idNum === 0) {
            chapters = [
                { title: "The Jungle", content: `Welcome to the Wild! "${title}" by ${authorName} is about to begin in the deep green forest.` },
                { title: "Friendship", content: `A little cub and a wise tortoise were looking for the Magical Lake. The birds sang clues to guide them.` },
                { title: "The Trap", content: `Oh no! A baby elephant was stuck. Every animal in the jungle came together to help, showing true teamwork.` },
                { title: "Rain", content: `The clouds opened up and a rainbow appeared. The forest smelled fresh and everyone felt happy again.` },
                { title: "Celebration", content: `The lion gave a mighty roar of joy! It was a party of paws, claws, and happy hearts.` },
                { title: "Rest", content: `As the moon rose, the jungle went to sleep, dreaming of the next adventure in "${title}".` }
            ];
        } else {
            chapters = [
                { title: "The Meadow", content: `The morning dew sparkled on the grass. Let's find out what happens in "${title}" by ${authorName}.` },
                { title: "The Secret", content: `A squirrel found a golden acorn. It was the key to finding the King of the Forest.` },
                { title: "The Journey", content: `Across the bridge of stones and through the whispering pines, our furry friends marched on.` },
                { title: "The Meeting", content: `The Great Eagle descended with a message. True bravery is helping those smaller than yourself.` },
                { title: "The Rescue", content: `A lost kitten was found! The whole forest cheered as she was returned home safely.` },
                { title: "Sunset", content: `Sunsets in the wild are the best. This story taught us to love every living creature on Earth.` }
            ];
        }
    } else if (cat === "Mystery Solvers") {
        recommendedBuddy = 'cat';
        chapters = [
            { title: "The Clue", content: `Grab your magnifying glass! Detective ${authorName} presents: "${title}".` },
            { title: "Evidence", content: `A blue ribbon and a muddy footprint. The puzzle was becoming very interesting indeed.` },
            { title: "The Suspect", content: `Was it the baker? Or the gardener? Everyone had a secret, but only one could be the truth.` },
            { title: "Trailing", content: `We followed the clues late into the night. The moonlit shadows danced on the walls of the mansion.` },
            { title: "Solved!", content: `A-ha! The missing item was found in the most unlikely place. Thinking outside the box saved the day.` },
            { title: "The Medal", content: `The town gave a gold medal to our young solver. Case closed, but the adventure continues!` }
        ];
    } else {
        // Generic template for others
        recommendedBuddy = 'monkey';
        chapters = [
            { title: "Start", content: `Once upon a time, there was a wonderful story titled "${title}" by ${authorName}.` },
            { title: "Middle", content: `The journey was long and full of surprises. Every chapter brought a new friend and a new lesson.` },
            { title: "The End", content: `And so, after many adventures, they lived happily ever after. The magic of "${title}" stays with us.` }
        ];
    }

    return { chapters, recommendedBuddy };
};

