import React, { forwardRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Heart, Sparkles, Book as BookIcon, Award, Quote, ChevronRight, ChevronLeft, Trophy, Zap } from 'lucide-react';

const Page = forwardRef((props, ref) => {
    const isLeftPage = props.number % 2 !== 0; // In spread mode after cover, odd pages are left

    return (
        <div className="page bg-white shadow-inner relative overflow-hidden" ref={ref}>
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/paper-fibers.png')" }} />

            {/* Page Header (Match Image) */}
            {!props.isCover && (
                <div className={`absolute top-8 left-10 right-10 flex ${isLeftPage ? 'flex-row' : 'flex-row-reverse'} justify-between items-center z-20 border-b border-slate-200 pb-2`}>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-900">Page {props.number}</span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900 whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px]">{props.headerTitle}</span>
                </div>
            )}

            <div className={`page-content h-full p-12 pt-20 pb-16 flex flex-col relative z-10 ${isLeftPage ? 'border-r border-black/5' : 'border-l border-black/5'}`}>
                {/* Spine Shadow Effect - MORE INTENSE IN THE CENTER */}
                <div className={`absolute top-0 bottom-0 w-32 pointer-events-none z-10 ${isLeftPage ? 'right-0 bg-gradient-to-l from-black/[0.1] to-transparent' : 'left-0 bg-gradient-to-r from-black/[0.1] to-transparent'}`} />
                <div className={`absolute top-0 bottom-0 w-1 pointer-events-none z-20 ${isLeftPage ? 'right-0 bg-black/10' : 'left-0 bg-black/10'}`} />
                {props.children}

                {!props.isCover && (
                    <div className="mt-auto pt-4 flex justify-center">
                        <div className="px-6 py-1.5 bg-slate-50/80 rounded-full border border-slate-100 text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400 select-none">Flip Page</div>
                    </div>
                )}
            </div>
        </div>
    );
});

const RealisticBookReader = ({ author, isOpen, onClose }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const bookRef = React.useRef();

    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!author) return null;

    // Dynamic content generator based on genre/role
    const getDynamicChapters = (author) => {
        const role = author.role?.toLowerCase() || "";
        const genre = (author.tag || author.genre || "").toLowerCase();

        // Base templates for different vibes
        const templates = {
            thriller: {
                intro: `The silence of the alleyway was broken only by the rhythmic dripping of a leaky pipe. I, ${author.name}, have always been fascinated by what happens in the shadows. My work in ${author.role} aims to peel back the layers of urban mystery, exposing the raw nerves of a city that never truly sleeps. Ever since I was a child in the bustling streets of Mumbai, I found myself watching the people in the corners, the ones who didn't want to be noticed. Why were they there? What secrets were they hiding behind a tattered newspaper or a quick glance over their shoulder? My journey into the world of crimes and thrillers began not in a library, but in the observation of life itself. I believe that every shadow has a story, and every silence is a scream waiting for the right frequency to be heard. As you turn these pages, you aren't just reading a story; you are stepping into a world where trust is a liability and the truth is often buried beneath layers of carefully crafted deception. Let us begin our descent into the heart of the enigma.`,
                ch1: "The first clue was a simple envelope, left on a park bench under the dim glow of a flickering streetlamp. It wasn't just paper; it was an invitation to a game I hadn't agreed to play, a labyrinth of secrets spanning the entire district. I picked it up, feeling the weight of the thick, textured parchment. There was no address, no stamp, only my name written in a script that looked all too familiar, yet hauntingly distant. The city continued its mechanical hum around me—the distant roar of traffic, the occasional siren, the laughter of late-night revelers—but everything felt muted. Inside the envelope was a single photograph of a key, and a set of coordinates that pointed to an abandoned warehouse by the old docks. I knew I should have gone to the police, but curiosity is a hard master. My pulse quickened as I realized that this was the moment everything changed. No longer was I just an observer; I was a piece on a board I didn't yet understand. The air grew colder, and as the streetlamp finally flickered out, the darkness felt heavier, almost sentient, as if it were waiting for me to take the first step into the unknown. I took a deep breath, tucked the envelope into my coat, and started walking toward the water.",
                ch2: "Following the trail led me to the abandoned piers, where the air smelled of salt and betrayal. Every footstep echoed like a heartbeat in the void, a constant reminder that in this world of crime, trust is the most expensive currency. The warehouse stood like a metal ghost against the moonlight, its windows long since shattered, looking like hollow eyes watching my approach. I pushed open the heavy iron door, which groaned with the weight of years of neglect. Inside, the silence was absolute, save for the skittering of rats across the concrete floor. My flashlight cut a narrow path through the gloom, revealing stacks of rusted crates and cables that hung from the ceiling like frozen snakes. I followed the coordinates to a small office in the back, its mahogany desk covered in a thick layer of dust. Taped to the underside of the drawer was the key from the photograph. As I held it, a sudden noise from the rafters made me freeze. A shadow moved, too large to be an animal, too swift to be a trick of the light. I wasn't alone. Someone had been waiting for me to find the key, and now that I had it, the game was truly beginning. Every sense was on high alert, the smell of ozone and old oil filling my lungs as I prepared for whatever was coming next.",
                ch3: "The shadow in the corner moved before I did. A tall figure, draped in a trench coat, stood silently watching the rain lash against the window. We were two ghosts in a city built on broken promises, seeking a truth that most preferred to forget. 'You're early,' the figure whispered, its voice like gravel grinding on stone. I didn't recognize the tone, but the authority it carried was unmistakable. 'Who are you?' I asked, my voice steadier than I felt. The figure stepped into the pale moonlight filtering through the dusty glass, revealing a face etched with the weariness of a thousand secrets. It was a man I had seen in old police files, a detective presumed dead for over a decade. He held out a hand, not for the key, but for the envelope I had found on the bench. 'The game you've entered isn't just about a murder,' he said, his eyes scanning the warehouse as if expecting an ambush at any second. 'It's about the very foundation of this city. There are people who will kill to keep that key from turning, and they are already on their way.' As if on cue, the distant sound of tires screeching on the wet pavement echoed from the street. We didn't have much time. He pointed to a trapdoor concealed beneath an old rug. 'Go,' he commanded. 'If they find you with that key, the story ends here.' I didn't argue. I dropped into the darkness below, the sound of the iron door being kicked open above me the last thing I heard before the void swallowed me whole.",
                ch4: "Documents were scattered across the mahogany desk, each one a piece of a puzzle that refused to stay still. The deeper I dug, the more I realized that the architect of this chaos was someone I had once called a friend. The secret basement was filled with filing cabinets and old microfilm readers, a treasure trove of information that had been hidden for years. I started scanning through the pages, my eyes widening as I realized the scale of the conspiracy. It wasn't just local corruption; it involved international trade, hidden bank accounts, and names that were pillars of our community. My friend, the one I had shared coffee with just last week, was at the center of it all. He wasn't just a victim or a bystander; he was the one pulling the strings. The key I held was to a safe-deposit box at the Central Bank, which presumably contained the ledger that would prove everything. I felt a surge of anger, followed by a crushing sense of betrayal. How could I have been so blind? Every conversation, every shared secret, had been a calculated moves to keep me close, to use me. But now, I had the truth, and the weight of it was almost more than I could bear. I knew that leaving this basement would mean entering a world where everyone was a potential enemy, but I couldn't stay hidden forever. The truth needed to be told, even if it meant destroying the lives of those I had once loved.",
                ch5: "A high-speed chase through the neon-lit streets of Mumbai felt like a fever dream. The roar of the engine was the only thing keeping the encroaching darkness at bay as I raced against a clock that was already winding down to zero. I had managed to secure the ledger, but the Syndicate's enforcers were already on my tail. Their black sedans were like sharks in a sea of yellow taxis and colorful rickshaws, closing in with terrifying efficiency. I swerved through the narrow markets, sending stacks of fruit and bolts of cloth flying as I pushed the car to its absolute limit. The rain was coming down in sheets now, turning the asphalt into a mirror that reflected the chaos of the neon signs. Every corner was a gamble, every red light a potential dead end. I could see the city's skyline in the distance, a looming mountain of glass and light, but it felt miles away. My phone was buzzing incessantly—calls from my 'friend,' no doubt, trying to bargain or threaten me into stopping. I ignored them all, my focus entirely on the road and the precious cargo in the passenger seat. One wrong turn and it would all be over. I saw a opening in the traffic and took it, a shortcut through the old industrial district that I hoped would give me the edge. The engine roared in protest as I slammed on the brakes, sliding around a corner and into a narrow alleyway, the sound of the sedans behind me fading, if only for a moment.",
                ch6: "Standing at the edge of the rooftop, looking down at the sprawling metropolis, I realized that the mystery wasn't just about a crime—it was about the human spirit's capacity for both immense darkness and unexpected light. The ledger was safe, handed over to the only person I could still trust, and the truth was already making its way to the headlines. The morning sun was beginning to break through the clouds, casting a golden glow over the city that had tried to bury me. I looked at the key in my hand, now just a piece of metal, no longer a burden or a secret. The friends I had lost, the trust I had broken—it was a heavy price to pay, but as I watched the city wake up, I felt a sense of peace I hadn't known in weeks. The shadows were still there, they always would be, but now I knew how to navigate them. This wasn't the end of my story; it was just the beginning of a new chapter where I would no longer be a pawn in someone else's game. I took one last look at the horizon, the buildings touching the sky like ancient guardians, and felt a surge of hope. We are more than the crimes committed against us, and we are stronger than the secrets we keep. As I walked back from the edge, I knew that whatever came next, I was ready for it. The city was mine again, not because I controlled it, but because I finally understood it.",
                achievements: "With over a dozen successful investigations completed and a growing readership that seeks the truth in every story, I have found my purpose. Every award and every letter of appreciation reminds me why I started this journey—to give a voice to the voiceless and to shine a light into the darkest corners of our world. My work has been featured in top literary magazines and praised for its raw honesty and complex characters. But the greatest achievement is knowing that my words have inspired others to look a little closer, to question the narrative, and to find the courage to seek the truth in their own lives."
            },
            romance: {
                intro: `Love is the only language that transcends time. As ${author.name}, a dreamer in the world of ${author.role}, I've spent my life capturing the quiet gazes and half-spoken words that define our hearts. My stories are love letters to the human experience, written with the ink of passion and the parchment of soul-deep connection. Ever since I was a young girl, I would sit by the window and watch the world go by, imagining the secret romances blooming in the hearts of strangers. I believed then, as I do now, that every person has a story of love waiting to be told, one that is as unique as a fingerprint yet as universal as a heartbeat. My journey into writing wasn't just about creating characters; it was about exploring the vast, uncharted landscapes of the human heart, from the highest peaks of joy to the deepest valleys of longing. As you read these chapters, I hope you find a reflection of your own dreams, a reminder that even in a world that often feels disconnected, we are all bound together by the invisible threads of love and empathy. Let us walk through the garden of emotions together, and perhaps, we will find that the greatest love story is the one we are living every day.`,
                ch1: "The jasmine-scented breeze carried the melody of a distant flute, a tune that seemed to call out to a soul I hadn't yet met. Our first encounter wasn't a clash of stars, but a gentle collision of two wandering paths in a crowded autumn market. The sun was setting, casting a warm amber glow over the stalls filled with colorful spices, hand-woven silks, and the chatter of a hundred voices. I was looking for a specific book of poetry when I reached for the same worn spine as a stranger. Our fingers touched for the briefest of seconds, sending a shock of recognition through my entire being. I looked up to find a pair of eyes that seemed to hold the depth of the ocean and the warmth of a thousand suns. 'I'm sorry,' he said, his voice a soft baritone that resonated like a familiar song. I found my voice, or at least a version of it. 'No, please, take it.' He smiled, and in that moment, the market seemed to fade away. The noise, the lights, the people—everything was just background noise to the quiet connection forming between us. We ended up sharing that book, and a cup of ginger tea in a small corner cafe, talking about poems and dreams until the stars took over the sky. It was a simple beginning, but I knew then that my heart had already started writing a new chapter, one that I never wanted to end.",
                ch2: "Letter by letter, our world began to take shape. Ink on parchment became the bridge across the distance separating our lives, each word a slow-burning flame that kept the chill of loneliness at bay during the long monsoon nights. He had to return to his village in the mountains, but the distance only served to make our connection stronger. We wrote to each other every day, our letters filled with the mundane details of our lives and the profound realizations of our hearts. I would wait for the postman with bated breath, the sight of his elegant script on the envelope enough to make my pulse dance. His words were a sanctuary, a place where I could be entirely myself, without judgment or pretension. He wrote about the way the mist clung to the valleys at dawn, and I wrote about the rhythm of the city and the songs of the birds in my garden. Through these letters, we built a world made of words, a secret garden where only we were allowed to walk. Every page was a testament to our growing affection, each sentence a brick in the foundation of a trust that felt stronger than anything I had ever known. We were growing together, apart, like two vines reaching for the same sun, their roots intertwined beneath the earth in ways that no distance could ever hope to sever.",
                ch3: "Walking through the ancient palace gardens, the history of a thousand love stories seemed to whisper from the weathered stone walls. It was here, under the blooming bougainvillea, that I realized some hearts are destined to find each other across lifetimes. He had finally returned, and we met at the old palace, a place filled with the ghosts of kings and queens who had once loved just as we did. The air was heavy with the scent of earth and old stone, and the sound of a distant fountain provided a rhythmic backdrop to our conversation. We walked for hours, our hands occasionally brushing against each other, the tension between us a tangible thing. We talked about the future, about the dreams we had shared in our letters, and the fears that still lingered in the corners of our minds. I looked at him, standing against the backdrop of a centuries-old archway, and realized that our love wasn't just a fleeting emotion; it was a part of a much larger narrative. We were the latest architects of a legacy that had been built by generations before us, and it was our responsibility to ensure that our story was one of courage and integrity. Under the light of the rising moon, he took my hand and promised that no matter what the world threw at us, we would face it together, two souls joined by a connection that felt as old as the stars and as fresh as the morning dew.",
                ch4: "The dance was more than just movement; it was a conversation without sound. In the middle of the ballroom, surrounded by a blur of light and silk, the world fell away until there was only the steady rhythm of our shared breath. It was my sister's wedding, a grand affair filled with music, laughter, and the swirling colors of traditional attire. He looked magnificent in his deep blue sherwani, his presence commanding without being overwhelming. When the music changed to a slow, melodic raga, he asked me to dance. As he took my hand and led me to the floor, I felt a sense of belonging that was almost overwhelming. Every step we took was in perfect harmony, as if we had been dancing together for centuries. We didn't need words to communicate; the way his hand rested on my waist, the look in his eyes as he spun me around—everything spoke of a love that was deeper than any poem could ever hope to capture. The other guests were just a blur of color around us, their voices a distant hum. In that circle of light, we were the only two people in the world. I felt a profound sense of gratitude for this moment, for the journey that had led me to his side, and for the promise of a future where every day would be a dance of its own, choreographed by the love that had become the very air I breathed.",
                ch5: "Misunderstandings are the thorns on the rose of passion. A single spoken word, misinterpreted in the heat of a summer evening, nearly unraveled the delicate tapestry we had spent months carefully weaving together with our hopes. It was a small thing, really—a comment about a future project that I had misinterpreted as a lack of interest in our shared plans. But the pride of our hearts and the insecurities we still carried made the small thing feel like a mountain. We stopped writing, the silence between us a heavy, suffocating thing. I spent my days in a fog of sadness, the world suddenly devoid of the colors his words had provided. I realized then how much I had come to rely on him, not just for affection, but for clarity and strength. I started writing a letter, then tore it up, then started another. Finally, I realized that true love isn't just about the moments of joy; it's about the courage to be vulnerable, to admit when we are wrong, and to bridge the gaps that pride tries to create. I traveled to his village, my heart in my throat, not knowing how he would receive me. When he saw me standing at his doorstep, the look of relief on his face was better than any apology could have been. We talked all through the night, the thorns of our misunderstanding slowly being pruned away, leaving behind a relationship that was stronger and more resilient than ever before.",
                ch6: "Seasons changed, and the first snow of winter began to blanket the mountains, but our fire only grew brighter. True love isn't just about the beginning; it's about the courage to stay and build a home within each other's laughter. We were married in the same village where his family had lived for generations, a simple ceremony attended by close friends and the local community. The air was crisp and clear, and the world was a pristine white, but the warmth inside our home was absolute. As I look back on the journey that led me here—from that chance encounter in the autumn market to the monsoon letters and the summer dance—I realize that every moment was a necessary step. Our love had transformed from a spark of curiosity into a steady, radiant flame that provided light and warmth to everyone around us. We are building a life together, one filled with the rhythms of the mountains and the echoes of the city, a story that is still being written with every shared meal, every quiet evening, and every dream we build together. The horizon is wide and open, and as we stand together, hand in hand, looking out at the vast world waiting for us, I know that whatever comes next, we are ready. Love is the bridge that brought us here, and it is the foundation upon which we will build everything else. Our story is no longer just ours; it is a part of the universal song of the human spirit, a testament to the enduring power of the heart to find its way home.",
                achievements: "With over seven novels published and translated into multiple languages, my stories have reached hearts in every corner of the world. I have been honored with the National Literary Award for Excellence in Romantic Fiction and have been a guest speaker at international book fairs. But my true achievement lies in the letters I receive from readers who have found hope and healing in my words. Knowing that my work has helped someone find their own voice of love, or provides comfort during a difficult time, is the greatest reward I could ever ask for. I continue to write, not just for the joy of storytelling, but to honor the beautiful, complex, and transformative power of the human heart, ensuring that every soul feels seen, heard, and loved through the pages of my books."
            },
            philosophy: {
                intro: `Searching for meaning is the ultimate human endeavor. I am ${author.name}, and my writing explores the intersection of ancient wisdom and modern struggle. Through ${author.role}, I hope to provide a mirror for your own inner journey, a space where you can pause and reflect on the profound questions that define our existence. My journey into philosophy didn't begin in a classroom, but in the quiet moments of observation and the deep questions that arose during my childhood in a small village by the Ganges. I would sit for hours and watch the current, wondering about the source of the water and the destination of the river, and how it all reflected the flow of life itself. I realized then that the answers we seek aren't often found in books, but in the spaces between our thoughts and the silence of our hearts. My work is an invitation to step away from the noise of the modern world and to enter a dialogue with your own soul. As you read these chapters, I hope you find not just intellectual stimulation, but a sense of peace and a reminder that behind the chaos of our daily lives, there is a fundamental order and a boundless consciousness that connects us all. Let us embark on this exploration together, with open minds and curious hearts.`,
                ch1: "The morning mist on the Ganges reflects the impermanence of our thoughts. I sat on the ghats for hours, watching the water flow past, realizing that we are not the river, but the witnesses of its eternal movement toward the sea. The sun rose slowly, its light filtering through the haze, turning the water into molten silver. Every pilgrim, every boat, every ceremony seemed like a fleeting shadow on the surface of something infinitely deeper. I felt a sense of profound stillness, a realization that the worries and desires that filled my mind were just ripples in an ocean of awareness. We spend so much of our lives trying to control the current, to build dams against change, and to hold onto moments that are already slipping away. But the river teaches us that the only way to truly experience life is to let it flow through us. To be the witness is to let go of the need to be the actor, to observe the rising and falling of emotions without becoming lost in them. As the mist cleared and the city woke up with its usual roar, the sense of peace remained. I understood then that the truth isn't something we find; it's something we are when we stop trying to be something else. The journey of the soul is a return to this fundamental state of being, a realization that we are already home, if only we can learn to sit still and listen to the song of the river.",
                ch2: "Silence is not the absence of sound, but the presence of everything at once. In the quiet of a mountain cave, I discovered that the answers we seek externally are often just distractions from the truth already residing in our hearts. I had traveled for weeks to reach this place, hoping that the isolation would provide the clarity I lacked in the city. The cave was cool and dark, the only sound the occasional drip of water from the ceiling. For the first few days, the silence was terrifying. My mind was like a caged animal, pacing back and forth, replaying every past mistake and every future anxiety. But as I sat, day after day, the noise began to subside. I stopped fighting the thoughts and started observing them, like clouds passing through a clear sky. In that space of non-resistance, I felt a connection to something vast and immovable. I realized that the silence wasn't empty; it was full of a presence that surpassed understanding. It was the background noise of the universe, the steady hum of a consciousness that existed before time and would remain after it. We are so afraid of silence because it forces us to confront ourselves, but it is actually the source of all creativity and insight. When we can be comfortable with our own silence, we can be comfortable with the world. I left the cave not with a set of answers, but with a new way of listening, a way of hearing the truth in the quiet spaces between words and the stillness of a summer afternoon.",
                ch3: "The ego is like a shadow that grows longer as the sun sets. We spend so much energy trying to maintain its shape, forgetting that shadows only exist because of the light. To be truly free is to let go of the need for an outline. My studies of ancient texts had taught me about the 'self' and the 'non-self,' but it was only in the middle of a crowded, chaotic market that I truly understood the lesson. I was frustrated, late for an appointment, and stuck behind a slow-moving cart. My ego was demanding its right to be first, its right to be respected, its right to have its way. I felt the tension in my body, the anger rising in my throat. And then, I caught my reflection in a dusty shop window. I saw the face of someone who was so caught up in their own small drama that they were missing the beauty of the world around them. I laughed, a genuine laugh of realization. This 'Vikram' that I was so attached to was just a collection of memories and habits, a shadow I had mistaken for the light. In that moment of laughter, the frustration vanished. I was no longer an individual trying to force my will; I was part of the market, part of the crowd, part of the chaotic, beautiful dance of life. Letting go of the ego doesn't mean we stop existing; it means we stop trying to be separate. We become the ocean instead of the wave, and in that expansion, we find a freedom that no boundary can ever provide.",
                ch4: "Ancient texts speak of a fire that purifies but does not consume. This is the fire of awareness, the flame that burns away the illusions of duality and leaves behind the golden core of our shared, universal consciousness. I spent months in an ashram, studying the scriptures and practicing the ancient arts of meditation. The teachers spoke of 'tapas,' the heat of discipline that transforms the lead of our base nature into the gold of spiritual realization. At first, the fire was painful. It meant facing the parts of myself I had kept hidden—the greed, the envy, the fear. But as I leaned into the heat, I realized that it wasn't 'me' that was being burned; it was the illusions I had built around myself. The fire didn't destroy my essence; it revealed it. It was like polishing a mirror that had been covered in years of grime. Every habit I broke, every desire I observed without acting upon, was another layer of dust removed. I began to see others not as competitors or strangers, but as fellow sparks from the same eternal flame. The barriers of caste, creed, and nationality began to feel like the flimsy paper walls they are. This shared awareness is the true sun of our existence, the light that provides meaning and direction to our lives. To live with this fire is to live with a constant presence of mind, a realization that every action is a ritual and every moment is an opportunity for a higher connection.",
                ch5: "Technology has connected our devices but fragmented our attention. In an age of constant noise, the bravest act is to sit still with one's own mind, observing the chaotic dance of desires without becoming one of the dancers. I looked around the crowded train and saw everyone buried in their screens, their eyes reflecting the blue light of a thousand distractions. We are more connected than ever, yet more isolated. We have access to all the information in the world, yet less wisdom than our ancestors. We are constantly searching for the next notification, the next like, the next buzz, hoping it will fill the void that only silence can satisfy. I decided to put away my phone and just sit. The temptation to reach for it was almost physical, a twitch in my hand that I had never noticed before. But as I resisted, I began to notice the world again. I saw the way the light hit the rust on a passing bridge, the tired but beautiful smile of a mother holding her child, and the silent dignity of a man reading an old newspaper. My mind started to wander, reflecting on the nature of desire and the way we are sold a version of happiness that is always just one purchase away. But true happiness is something that exists in the present, in the ability to be here, now, without the need for an external stimulant. Sitting still isn't a passive act; it's a revolutionary one. It's an assertion that our attention is our own, and that we choose what we find meaningful. In the stillness, we find the strength to navigate the digital storm without losing our center.",
                ch6: "As I reach the end of these reflections, I understand that the path is the destination. There is no final arrival, only a continuous unfolding of the soul, a journey from the small self to the boundless expanse of the infinite. I am standing on a hill once again, looking out at the city where I have spent my adult life. The lights are beginning to twinkle as the day fades into night, a million stories unfolding beneath the urban canopy. I realize that I don't need to be in a cave or on the banks of the Ganges to find peace. The truth is here, in the traffic, in the office, and in the quiet of my own room. The enlightenment we seek isn't a destination we reach after years of practice; it's the quality of our attention in this very second. Every breath is a whole life, and every step is a sacred journey. I look back on the many versions of myself—the student, the seeker, the writer—and feel a sense of gratitude for all of them. They were all necessary stages in the unfolding of this current moment. The horizon isn't a boundary, but a promise of more to come, more depth to explore, more compassion to give. We are all works in progress, and that is the beauty of our existence. As I walk down the hill and back into the hum of the city, I carry with me a stillness that nothing can disturb. The journey continues, and it is beautiful, perfect exactly as it is. We are travelers in time, but our destination is eternity, and every moment is the door through which we enter.",
                achievements: "With over twelve major works of philosophy published and a dedicated community of seekers spanning the globe, my mission remains the same: to bridge the gap between ancient wisdom and the modern soul. I have been honored with the Global Peace Award and have spoken at world summits on ethics and consciousness. But my greatest achievement is the transformation I see in the eyes of my students and the readers who tell me that my words helped them navigate their own mental storms. I am a lifelong student of the truth, and every sentence I write is a humble attempt to honor the infinite wisdom that resides within every human being."
            },
            poetry: {
                intro: `Words are rhythm, and rhythm is life. I, ${author.name}, write verses that capture the fleeting beauty of a sunrise and the lingering ache of a memory. In ${author.role}, every line is a heartbeat, every stanza a breath, and every poem a bridge between the physical world and the infinite landscapes of the soul. Ever since I could first hold a pen, I found that the prose of the world was too rigid for the melodies playing in my mind. I needed metaphors to describe the smell of rain on hot asphalt, and similes to capture the way a mother looks at her sleeping child. My journey into poetry began with the sound of the wind through the trees and the rhythmic pounding of the ocean against the shore. I realized early on that everything around us is singing a song, if only we have the ears to hear it. My work is an attempt to translate that universal music into human language, to provide a home for the emotions that are too large for ordinary conversation. As you journey through these verses, I hope you find a rhythm that resonates with your own, a reminder that we are all part of a grand, celestial symphony, and our lives are the most beautiful poems ever written. Let us find the magic in the mundane, and the extraordinary in the everyday.`,
                ch1: "The ink flows like a river of obsidian, carving paths across the white desert of the page. Here, in the quiet hours of midnight, the subconscious speaks in metaphors and similes that the daylight would never dare to whisper. I sit at my desk, the only light the soft glow of a candle, the world outside a velvet oblivion. My pen is a conductor's baton, calling forth the ghosts of memories and the sparks of inspiration that have been hiding in the shadows of my mind. The paper is no longer a static surface; it is a limitless expanse where time and space are just suggestions. I write about the childhood house that no longer exists, and the scent of the sea that I have never actually seen. The words aren't just symbols; they are living things, with their own pulse and their own gravity. I am not the creator of the poem; I am the vessel through which the universe chooses to express itself. In these initial moments of creation, there is no judgment, no editing, just the pure, unadulterated flow of existence onto the page. The silence of the house is filled with the sound of the pen scratching against the paper, a rhythmic, therapeutic sound that marks the passage of time in a world where seconds become stanzas and hours become epics. This is the first spark, the moment when the void is filled with the light of a new story, a new melody, a new soul.",
                ch2: "A single petal falling from a cherry blossom tree—this is the physics of sorrow and grace combined. I watch the descent, a slow-motion tragedy that ends in a kiss upon the damp earth, a reminder that endings are also beginnings. Every year, I return to the same grove of trees to witness this seasonal ritual. The trees don't mourn the loss of their blossoms; they let them go with a grace that is both heartbreaking and beautiful. I write about the cycle of birth and decay, the way the world constantly inhales and exhales, and how our own lives are just a small part of this larger movement. We are so afraid of loss, of the falling petals of our own experiences, but the trees teach us that without the fall, there can be no new growth. I find the poetry in the transition, in the space between being and becoming. A poem about a falling petal is really a poem about the courage to let go, the bravery it takes to face the winter of our souls so that we can bloom once again in the spring. I use the language of nature to explore the landscape of the human heart, finding the parallels between the tides of the ocean and the tides of our emotions. Each verse is a small seed planted in the fertile ground of the reader's imagination, waiting for the right moment of empathy to take root and grow into a reflection of their own journey.",
                ch3: "The city screams in neon and steel, a discordant symphony of progress and loss. I find the poetry in the rusted gears and the spray-painted walls, the hidden haikus of the homeless and the epic tragedies of the morning commute. I walk through the streets of Mumbai, a notebook in my hand, capturing the fragments of conversation and the fleeting expressions of strangers. The city is a living, breathing organism, a giant poem with millions of stanzas, all happening at once. I write about the man selling tea under the flyover, his hands a map of a life of hard work, and the girl on the train platform, her eyes filled with the reflected light of a thousand distant stars. There is a harsh beauty in the industrial landscape, a rhythm in the clatter of the trains and the roar of the traffic that most people ignore. But to the poet, every sound is a potential lyric, and every sight is a possible metaphor. I translate the cacophony of the city into a rhythmic, structured verse, finding the order within the chaos and the humanity within the machinery. My work is a love letter to the urban sprawl, a reminder that even in a world of concrete and steel, the spirit of poetry is alive and well, hiding in the cracks of the pavement and the reflections of the glass skyscrapers.",
                ch4: "Love is a fractured mirror, reflecting a thousand versions of ourselves. We try to piece together the shards, but the cracks are where the light gets in, the beautiful imperfections that make the image whole and worth the pain. I have written hundreds of poems about love, yet I feel I have barely scratched the surface of its depth. It is a chameleon emotion, changing colors with every person and every circumstance. I write about the love that is a slow-burning ember, and the love that is a sudden, devastating wildfire. Each poem is a different shard of the mirror, a different perspective on the most profound of human experiences. We are so often told that love is supposed to be perfect, a smooth, unblemished surface, but I find the true beauty in the flaws. The scars of past heartbreaks, the hesitations of a new affection, the profound silence of a long-term connection—these are the things that make love real. I use my verses to explore the complex dance of two souls trying to find a shared rhythm, the way we project our own dreams onto each other and the way we eventually learn to see the truth. Poetry is the only language that can hold the contradictions of love, the way it can be both a prison and a liberation, a source of intense joy and a cause for deep sorrow. Each stanza is a heartbeat, a rhythm of passion and vulnerability that connects us to the universal song of the heart.",
                ch5: "Time is a hungry ghost, devouring the moments before we have a chance to name them. I try to trap the seconds in nets of rhyme, but they slip through the mesh like water, leaving behind only the damp scent of what once was. I sit by the river and watch the sunset, realizing that this specific light, this specific breeze, will never happen again in exactly this way. The poet is a chronicler of the fleeting, a witness to the passing of the seasons and the folding of the days. I write about the way a favorite shirt eventually wears out, and the way a childhood friend's voice starts to fade in the memory. Every poem is a photograph in verse, a way of freezing a moment in time so that it can be revisited and remembered. But I also realize that the beauty of the moment is actually the fact that it is passing. To try to hold onto time is like trying to hold onto the wind; the very act of grasping is what makes it slip away. I find the poetry in the acceptance of mortality, in the realization that our lives are brief, radiant flashes in the long night of history. My work is an invitation to be present, to cherish the now before it becomes a 'then.' We are all travelers in time, but the poet is the one who stops to describe the view along the way, the one who finds the significance in the small, everyday miracles that most people miss in their hurry to reach the future.",
                ch6: "In the end, we are all just stories written in stardust. The universe is a vast library of light, and my poetry is but a small candle illuminating one dusty corner, a brief song sung into the heart of an infinite, roaring silence. I stand at the edge of the ocean, the same ocean that inspired my first verses, and feel a sense of profound scale. The stars above are ancient, their light reaching us from a time before words were ever spoken. We are part of this grand, cosmic narrative, our atoms forged in the hearts of dying stars, our consciousness a way for the universe to look at itself. I realize that my poetry isn't just about me or my experiences; it is a part of the stardust, a way of honoring the source from which we all came. The silence of the universe isn't a void; it is a canvas, a space where every thought and every emotion is a brushstroke of light. As I reach the end of this collection, I feel a sense of peace. I have sung my song, I have shared my rhythm, and now I can return to the silence, knowing that my words are a permanent part of the library. The horizon is no longer a limit, but an invitation to the next poem, the next story, the next journey. We are all infinite, and our lives are the most beautiful poetry the universe will ever know. As I walk back from the water, the stars watching over me like ancient guardians, I feel a surge of hope. The song continues, and it is beautiful.",
                achievements: "With over twenty volumes of poetry published and a lifetime of dedication to the rhythmic arts, I have found that the greatest achievement is the connection formed through a single verse. I have been honored with the National Poet Laureate title and have been featured in journals worldwide. But the true reward is the way my words have given voice to the unspoken emotions of my readers, helping them find their own rhythm in a chaotic world. I continue to write, for every heartbeat is a potential line, and every breath is an opportunity to honor the infinite, poetic beauty of the human experience, ensuring that every soul feels seen and heard through the power of verse."
            },
            generic: {
                intro: `Hello! I am ${author.name}, a writer from India with a passion for storytelling that captures the essence of human emotions. My story, "${author.role || author.tag || 'The Journey'}", is all about the power of young voices in a changing world. Ever since I was a child, I felt that words were more than just sounds; they were keys to unlock hidden worlds and windows into the hearts of others. I began writing in the margins of my school notebooks, creating characters who were braver than I felt and stories that took me far beyond the walls of my classroom. I realized early on that my voice, though young, had a weight and a significance that the world was waiting to hear. My journey into the literary world was driven by a desire to share the unique perspective of my generation, to explore the challenges we face and the dreams we hold for a future that is still being written. This book is a culmination of years of observation, reflection, and the sheer joy of creation. As you turn these pages, I hope you see a reflection of your own journey, a reminder that every story matters, and every voice has the power to inspire change. Let us walk through these chapters together, exploring the landscapes of imagination and the truths of our shared humanity.`,
                ch1: "The stars were bright that night, casting a silver glow over the silent landscape. It was as if they were trying to tell a story of their own, one that had been waiting for centuries to be heard. I remember picking up my pen for the first time, the rough texture of the paper beneath my hand feeling like a promise of new beginnings. The world was quiet, but my mind was a cacophony of ideas, each one competing for the chance to be the first word on the page. I wrote about a world where the mountains could speak and the trees held the secrets of the ancients. It was a simple tale, born of childhood wonder, but as the ink flowed, I felt a sense of power and liberation that I had never known. For the first time, I was the one in control, the one who decided how the story would unfold and who the heroes would be. This first spark was the moment I realized that I wasn't just an observer in the world; I was a creator. The act of writing was like opening a door that I didn't even know existed, leading into a room filled with light and limitless possibilities. I sat there for hours, the candle burning low, as the stars watched over me, witnesses to the birth of a new author and the beginning of a lifelong love affair with the written word.",
                ch2: "As time went on, my stories grew with me, evolving from simple childhood fantasies into complex narratives that explored the deeper truths of our existence. Every word felt like a step into a new reality where I could explore my limits and challenge the boundaries of what I thought was possible. I started writing about the social issues I saw around me—the importance of education, the need for environmental protection, and the struggles of being a teenager in a fast-paced world. These weren't just stories; they were reflections of my growing awareness of the world and my place within it. I found that the characters I created were becoming like best friends, their voices sounding in my head even when I wasn't writing. I spent my days observing the people on the street, the rhythm of the city, and the quiet beauty of nature, always looking for that next bit of inspiration. My writing sessions became more structured, with a focus on character development and thematic depth. I learned that every word had to earn its place on the page, and every scene had to serve a purpose. This was a time of immense growth and discovery, as I honed my craft and found my unique voice as an author, a voice that was no longer just about childhood wonder, but about meaningful impact and the power of storytelling to make an actual difference.",
                ch3: "Success didn't come overnight. There were moments of doubt and pages filled with crossed-out lines that seemed to go nowhere. But with every challenge, I learned the importance of perseverance and the power of a single idea. I remember the day I received my first rejection letter. The sting of it was sharp, but instead of quitting, I used it as motivation to improve. I realized that writing wasn't just about talent; it was about work. It meant showing up every day, even when the inspiration wasn't there, and pushing through the moments of frustration. I joined a local writing group, sharing my work with others and learning from their feedback. This community was a source of strength and encouragement, a reminder that I wasn't alone on this journey. I started to see that my stories were resonating with others, that the themes I was exploring were ones that many people could relate to. This realization gave me a new sense of responsibility. I wasn't just writing for myself anymore; I was writing for my readers. This was the rising path, the gradual ascent toward a professional career, built on a foundation of hard work, continuous learning, and an unwavering belief in the power of stories. Every challenge was a stepping stone, and every doubt was an opportunity to reaffirm my commitment to my craft and my vision for the future.",
                ch4: "Every author encounters a moment that changes their perspective. For me, it was receiving a letter from a reader who found solace in my characters. This shift changed my focus from telling stories to creating deep community impact. The reader was a young student who felt alone and misunderstood, but through my book, they found a friend who shared their struggles and hopes. This letter was a profound reminder that our words have a life of their own once they leave our hands. They travel into the hearts and minds of people we will never meet, providing comfort, inspiration, and a sense of connection. I realized then that my work wasn't just about individual expression; it was about collective healing and empowerment. I started hosting workshops for other young writers, helping them find their own voices and share their own stories. I saw the way their faces lit up when they realized that they, too, had something important to say. This was the turning point in my career, the moment I understood that the true measure of success isn't the number of books sold, but the number of lives touched and the positive change we inspire. My writing became more focused on themes of empathy and community, as I sought to use my platform to advocate for a more inclusive and compassionate world, a world where every voice is heard and every story is valued.",
                ch5: "As I look toward the future, I am reminded that our work is never truly finished. Each chapter I write is a seed planted for the next generation of storytellers to cultivate, ensuring our cultural narrative continues to thrive. I am constantly inspired by the young writers who are coming up behind me, their voices filled with energy, optimism, and a fresh perspective on the world. I see myself in them, remember the same passion and the same drive that I felt when I was first starting out. My goal is to create a legacy of support and encouragement, to provide the same mentorship and community that helped me on my own journey. I am currently working on a foundation that will provide resources and scholarships for student authors, ensuring that financial barriers don't stand in the way of their dreams. This is a time of reflection and renewal, as I look back on how far I've come and forward to the possibilities that still lie ahead. I realized that the journey of an author is not a destination, but a continuous cycle of creation and contribution. Each book I finish is just a preparation for the next one, a new opportunity to explore a different facet of the human experience and to share another piece of my soul with the world. The echoes of tomorrow are the voices of the future, and it is my joy and privilege to help them be heard.",
                ch6: "We have reached the gateway of this journey, but it is merely the entrance to a much larger universe. Completing this book has taught me that the end of one story is always the beginning of another, more exciting path. I am standing at a threshold, looking out at a world full of potential and adventure. The skills I have learned, the friendships I have made, and the stories I have told are all parts of the equipment I carry for the next stage of my life. I feel a sense of profound gratitude for the opportunities I've had and the people who have supported me along the way. This book is a testament to the fact that our dreams are possible if we have the courage to pursue them and the resilience to overcome the obstacles we encounter. As I close this chapter and prepare to start the next one, I am filled with a sense of hope and excitement. I know that there are many more stories to tell, many more characters to meet, and many more lessons to learn. The horizon is wide and open, and as I step into the future, I carry with me the lessons of the past and the vision of a world where every young person is empowered to share their own truth and to make their own mark on the world. This is not the end; it is a beautiful, radiant beginning, a gateway into a universe of infinite possibilities and endless stories waiting to be told.",
                achievements: "With over fifteen stories published and a national award for student literacy, my journey has been one of incredible growth and fulfillment. My work has been used in school curriculums and praised for its relatability and impact on young readers. I have had the opportunity to speak at national youth summits and have been featured in major news outlets as a voice of my generation. But the greatest achievement is the community I have built and the many young writers I have been able to support and mentor. Knowing that my passion has provided a platform for others to find their own voices is the true reward. I continue to write every day, for I know that the power of a single word can change a life, and the power of a shared story can change the world, ensuring that our collective narrative is one of hope, courage, and the unwavering belief in the potential of every young voice."
            }
        };

        // Determine which template to use based on role/tag
        let selected = templates.generic;
        if (role.includes("mystery") || role.includes("crime") || role.includes("thriller")) selected = templates.thriller;
        else if (role.includes("romance") || role.includes("fiction") || genre.includes("fiction")) selected = templates.romance;
        else if (role.includes("philosophical") || role.includes("spirituality") || role.includes("academic")) selected = templates.philosophy;
        else if (role.includes("poetry")) selected = templates.poetry;

        return [
            { title: "Introduction", content: selected.intro, quote: author.bio },
            { title: "Chapter 1: The Initial Spark", content: selected.ch1 },
            { title: "Chapter 2: The Rising Path", content: selected.ch2 },
            { title: "Chapter 3: The Deepening", content: selected.ch3 },
            { title: "Chapter 4: The Turning", content: selected.ch4 },
            { title: "Chapter 5: The Reflection", content: selected.ch5 },
            { title: "Chapter 6: The Horizon", content: selected.ch6 },
            { title: "Achievements", content: selected.achievements, stats: author.stats }
        ];
    };

    const chapters = getDynamicChapters(author);

    // Helper to split text into pages based on character limits
    const paginateText = (text, firstPageLimit, nextPageLimit) => {
        const words = text.split(' ');
        const pages = [];
        let currentPageText = [];
        let currentLength = 0;
        let isFirstPage = true;

        words.forEach(word => {
            const limit = isFirstPage ? firstPageLimit : nextPageLimit;
            if (currentLength + word.length > limit) {
                pages.push(currentPageText.join(' '));
                currentPageText = [word];
                currentLength = word.length;
                isFirstPage = false;
            } else {
                currentPageText.push(word);
                currentLength += word.length + 1;
            }
        });
        if (currentPageText.length > 0) pages.push(currentPageText.join(' '));
        return pages;
    };

    // Generate flat list of all book pages
    const bookPages = [];
    chapters.forEach((ch, chIdx) => {
        const pagedContent = paginateText(ch.content, 450, 550);
        pagedContent.forEach((content, pIdx) => {
            bookPages.push({
                title: ch.title,
                content,
                isChapterStart: pIdx === 0,
                isLastInChapter: pIdx === pagedContent.length - 1,
                stats: ch.stats,
                quote: ch.quote
            });
        });
    });

    const onFlip = (e) => {
        setCurrentPage(e.data);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[99999] flex items-center justify-center p-8 bg-black/95 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 50 }}
                        className="relative w-full max-w-6xl h-screen flex flex-col items-center justify-center pt-2"
                    >
                        {/* CLOSE BUTTON */}
                        <button
                            onClick={onClose}
                            className="absolute top-10 right-10 p-3 bg-white/10 hover:bg-amber-500 rounded-full text-white transition-all z-[130]"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* THE BOOK WRAPPER WITH 3D SHADOWS */}
                        <div className="relative group transition-all duration-700 hover:scale-[1.02]">
                            <div className="absolute inset-x-0 -bottom-20 h-32 bg-black/60 blur-[60px] rounded-full transform scale-x-125 z-0" />

                            <div className="book-container relative rounded-lg flex z-10" style={{ perspective: '3000px' }}>
                                <div className="relative shadow-[0_50px_100px_rgba(0,0,0,0.7)] rounded-lg overflow-hidden">
                                    <HTMLFlipBook
                                        width={600}
                                        height={800}
                                        size="stretch"
                                        minWidth={450}
                                        maxWidth={900}
                                        minHeight={650}
                                        maxHeight={1100}
                                        maxShadowOpacity={0.7}
                                        showCover={true}
                                        mobileScrollSupport={true}
                                        onFlip={onFlip}
                                        className="demo-book"
                                        ref={bookRef}
                                        useMouseEvents={true}
                                        flippingTime={1000}
                                        usePortrait={false}
                                        startPage={0}
                                        drawShadow={true}
                                    >
                                        {[
                                            // 1. FRONT COVER
                                            <div key="front-cover" className="page bg-amber-600 shadow-2xl relative" data-density="hard">
                                                <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                                                <div className="h-full flex flex-col items-center justify-center p-12 text-center text-white relative z-10 border-r-8 border-amber-700/50">
                                                    <div className="w-24 h-24 bg-white/20 rounded-3xl backdrop-blur-md mb-8 flex items-center justify-center rotate-6">
                                                        <BookIcon className="w-12 h-12 text-white" />
                                                    </div>
                                                    <h1 className="text-4xl font-black uppercase tracking-tighter mb-2 italic underline underline-offset-8 decoration-white/30">{author.name}</h1>
                                                    <p className="text-amber-100 font-bold tracking-widest uppercase text-xs mb-10">THE PROJECT LOGS</p>

                                                    {/* STICKERS */}
                                                    <div className="absolute top-12 left-12 -rotate-12 bg-lime-400 p-2 rounded-lg shadow-[5px_5px_0px_rgba(0,0,0,0.1)] text-lime-900 border-2 border-white group hover:scale-110 transition-transform z-20">
                                                        <Zap className="w-6 h-6 fill-current" />
                                                    </div>

                                                    <div className="absolute top-10 right-10 rotate-12 bg-yellow-400 p-2 rounded-lg shadow-[5px_5px_0px_rgba(0,0,0,0.1)] text-amber-900 border-2 border-white group hover:scale-110 transition-transform z-20">
                                                        <Star className="w-8 h-8 fill-current" />
                                                    </div>

                                                    <div className="absolute bottom-32 left-14 -rotate-12 bg-rose-500 p-2 rounded-full shadow-[5px_5px_0px_rgba(0,0,0,0.1)] text-white border-2 border-white group hover:scale-110 transition-transform z-20">
                                                        <Heart className="w-8 h-8 fill-current" />
                                                    </div>

                                                    <div className="absolute bottom-40 right-12 rotate-6 bg-indigo-500 p-2 rounded-xl shadow-[5px_5px_0px_rgba(0,0,0,0.1)] text-white border-2 border-white group hover:scale-110 transition-transform z-20">
                                                        <Award className="w-8 h-8" />
                                                    </div>

                                                    <div className="absolute top-1/2 left-4 rotate-12 bg-white text-amber-600 p-2 rounded-md shadow-lg border border-amber-100 z-20">
                                                        <Sparkles className="w-5 h-5" />
                                                    </div>

                                                    <div className="absolute top-[60%] right-4 -rotate-12 bg-orange-400 p-2 rounded-lg shadow-lg text-white border-2 border-white z-20">
                                                        <Quote className="w-5 h-5 fill-current" />
                                                    </div>

                                                    <div className="absolute top-1/2 -right-2 -rotate-90 bg-white text-amber-600 px-4 py-1 rounded-t-lg shadow-md font-black text-[10px] tracking-widest border-x border-t border-amber-100 uppercase z-20">
                                                        Handmade Story
                                                    </div>

                                                    <div className="mt-auto pt-10 border-t border-white/20 w-full text-[10px] font-black tracking-[0.4em]">NATION'S YOUNG AUTHORS © 2026</div>
                                                </div>
                                                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/20 to-transparent" />
                                            </div>,

                                            // 2. CREDITS
                                            <Page key="credits" number={1} headerTitle="Credits" isCover={false}>
                                                <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                                                    <div className="w-12 h-[1px] bg-slate-300 mb-4" />
                                                    <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">Published by Nation's Young Authors</p>
                                                </div>
                                            </Page>,

                                            // 3. TABLE OF CONTENTS
                                            <Page key="toc" number={2} headerTitle="Table of Contents" isCover={false}>
                                                <div className="h-full flex flex-col pt-10">
                                                    <div className="flex items-center gap-3 mb-10 pb-4 border-b-2 border-slate-900/5">
                                                        <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                                                            <BookIcon className="w-4 h-4 text-white" />
                                                        </div>
                                                        <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter">Contents</h2>
                                                    </div>

                                                    <div className="space-y-4">
                                                        {chapters.map((ch, idx) => {
                                                            let startPage = 3;
                                                            for (let i = 0; i < idx; i++) {
                                                                startPage += paginateText(chapters[i].content, 450, 550).length;
                                                            }
                                                            const pagedContent = paginateText(ch.content, 450, 550);
                                                            const endPage = startPage + pagedContent.length - 1;

                                                            return (
                                                                <div key={idx} className="cursor-pointer" onClick={() => bookRef.current.pageFlip().flip(startPage)}>
                                                                    <div className="flex items-center gap-4 text-slate-600 transition-colors">
                                                                        <span className="text-[10px] font-black w-4 opacity-30">{idx + 1}.</span>
                                                                        <div className="flex-1 flex items-baseline border-b border-dotted border-slate-200">
                                                                            <span className="text-xs font-bold uppercase tracking-widest leading-none">{ch.title}</span>
                                                                            <div className="flex-1" />
                                                                            <span className="text-[10px] font-black text-slate-400">
                                                                                {startPage === endPage ? `Page ${startPage}` : `P. ${startPage} - ${endPage}`}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>

                                                    <div className="mt-auto pt-10 text-center">
                                                        <p className="text-[9px] font-serif italic text-slate-400">"Every story begins with a single word, but its journey is defined by its contents."</p>
                                                    </div>
                                                </div>
                                            </Page>,

                                            // 4. CONTENT PAGES
                                            ...bookPages.map((page, i) => (
                                                <Page key={`content-${i}`} number={i + 3} headerTitle={page.title.toUpperCase()} isCover={false}>
                                                    <div className="h-full flex flex-col pt-10">
                                                        <div className="w-full">
                                                            <div className="text-slate-700 font-serif text-lg leading-[1.8] antialiased text-left space-y-6">
                                                                <p className="relative">
                                                                    {page.isChapterStart ? (
                                                                        <>
                                                                            <span className="float-left mr-3 text-7xl font-black text-amber-500 font-serif leading-[0.8] mt-2 select-none">
                                                                                {page.content.trim().charAt(0)}
                                                                            </span>
                                                                            {page.content.trim().slice(1)}
                                                                        </>
                                                                    ) : (
                                                                        page.content
                                                                    )}
                                                                </p>

                                                                {page.isLastInChapter && page.stats && (
                                                                    <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-2 gap-4">
                                                                        <div className="text-center">
                                                                            <div className="text-amber-600 font-black text-2xl">{page.stats.stories}</div>
                                                                            <div className="text-[9px] uppercase tracking-widest text-slate-400">Stories</div>
                                                                        </div>
                                                                        <div className="text-center">
                                                                            <div className="text-amber-600 font-black text-2xl">{page.stats.readers}</div>
                                                                            <div className="text-[9px] uppercase tracking-widest text-slate-400">Readers</div>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Page>
                                            )),

                                            // 5. FILLER PAGE (Optional)
                                            ((bookPages.length + 3) % 2 !== 0) ? (
                                                <Page key="filler" number={bookPages.length + 3} headerTitle="The End" isCover={false}>
                                                    <div className="h-full flex flex-col items-center justify-center opacity-10">
                                                        <BookIcon className="w-16 h-16 mb-4" />
                                                        <div className="w-12 h-1 bg-slate-900 rounded-full" />
                                                    </div>
                                                </Page>
                                            ) : null,

                                            // 6. BACK COVER
                                            <div key="back-cover" className="page bg-amber-600 shadow-2xl relative" data-density="hard">
                                                <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                                                <div className="h-full flex flex-col items-center justify-center p-12 text-center text-white relative z-10 border-l-8 border-amber-700/50">
                                                    <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md mb-8 ring-4 ring-white/5">
                                                        <Award className="w-16 h-16 text-white" />
                                                    </div>

                                                    <h3 className="text-xl font-black uppercase tracking-widest mb-2">The End</h3>
                                                    <p className="text-[10px] text-amber-100 font-bold uppercase tracking-[0.3em] mb-12">Thank you for reading</p>

                                                    <button
                                                        onClick={() => {
                                                            bookRef.current.pageFlip().flip(0);
                                                        }}
                                                        className="group relative px-8 py-3 bg-white text-amber-600 font-black rounded-full shadow-2xl overflow-hidden hover:scale-110 active:scale-95 transition-all flex items-center gap-3"
                                                    >
                                                        <span className="relative z-10 uppercase text-xs tracking-widest group-hover:text-white transition-colors">Read From Start</span>
                                                        <ChevronLeft className="w-4 h-4 relative z-10 group-hover:-translate-x-1 group-hover:text-white transition-all" />
                                                        <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                                    </button>

                                                    <div className="mt-16 text-[10px] font-black tracking-widest opacity-40">NATION'S YOUNG AUTHORS</div>
                                                </div>
                                                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/20 to-transparent" />
                                            </div>
                                        ].filter(child => child !== null && child !== false)}
                                    </HTMLFlipBook>
                                </div>
                            </div>
                        </div>


                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default RealisticBookReader;
