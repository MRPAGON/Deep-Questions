const questions = [
        "What is the smallest thing for which you are grateful?",
        
        "Who has had the most positive impact on your life?",
        
        "If you could use a time machine, would you rather have one that only goes back in time or only goes forward?",
        
        "If you got a promotion, a job, a college acceptance, an accolade/award, or just generally accomplished something major, who is the first person you'd tell and how do you think they'd react?",
        
        "If you were an inanimate object, what would you be and why?",
        
        "What is the smallest thing for which you are grateful?",
        
        "Who has had the most positive impact on your life?",
        
        "If you could use a time machine, would you rather have one that only goes back in time or only goes forward?",
        
        "If you got a promotion, a job, a college acceptance, an accolade/award, or just generally accomplished something major, who is the first person you'd tell and how do you think they'd react?",
        
        "If you were an inanimate object, what would you be and why?",
        
        "Where do you wish you had grown up?",
        
        "If you could be good at any profession without having to receive the accompanying education or trade experience, which would you choose?",
        
        "What is something you're terrible at but wish you could do well?",
        
        "What is the quality you admire the most in the person you dislike the most?",
        
        "What was the most recent thing that made you cry?",
        
        "What are the books/movies/games that never get old and always make you feel better when you get down?",
        
        "What is the most trivial thing about which you have a strong opinion?",
        
        "If you could be any mythical creature, what would you be and why?",
        
        "If you've had more than one job, which job taught you the most?",
        
        "If you could change one thing about yourself physically, what would you change?",
        
        "What single event or decision do you think most affected the rest of your life? Was there a turning point in your life?",
        
        "What is the one thing you've made that you're the most proud of?",
        
        "Some historical figures have epithets attached to their names, like The Mad or The Wise. What would you like yours to be?",
        
        "What was the best year of your life? The worst?",
        
        "What one thing, whether it's something you did or something you made or something you caused to happen, would you like to be remembered by?",
        
        "What has been the biggest change of heart you've had? Have you ever started off on one side of an issue and wound up on the other? What influenced that change?",
        
        "What is your biggest non-academic, non work-related accomplishment?",
        
        "What is your biggest academic or work-related accomplishment?",
        
        "What is something you've done/felt/seen/etc. that you wish you could experience again for the first time?",
        
        "If you could erase one thing or event from your memory, what would you choose?",
        
        "Is there something about you that people assume because of your appearance or demeanor? What is a trait or preference you have that people don't expect you to have?",
        
        "If you were a character in a movie, book, or television show, what genre would you live in?",
        
        "What is the hardest way you've learned an important lesson?",
        
        "What cliché do you think is bullshit? What cliché do you think holds truth?",
        
        "What do you fear, despite having no real reason to do so? Basically, what is an irrational fear you have?",
        
        "Imagine that you could choose when and how you die. At what age would you like to die (no maximum here) and how would you like to go?",
        
        "What character archetype is closest to your personality?",
        
        "What was the happiest moment of your life so far?",
        
        "What is one childhood memory that you remember especially well?",
        
        "Is there a song/movie/food/etc. that strongly reminds you of someone whenever you experience it? Who does it remind you of?",
        
        "What is your ideal birthday? Not the date, but rather your ideal way to spend the day.",
        
        "Are there any smells that bring back memories for you? What are they, and what memories do they elicit?",
        
        "What is the closest you've ever come to dying?",
        
        "Do you have a personal mantra? If so, what is it?",
        
        "What is the most memorable meal you've ever had? (It can be good or bad.) What made it so memorable?",
        
        "What's the worst advice you've ever been given?",
        
        "In what ways do you benefit the world?",
        
        "What fact about yourself took you the longest to understand or accept?",

        "What is your least popular or most controversial opinion?",
        
        "If you could live in another time period but stay in the same place you live now, when would you want to live?",
        
        "Do you have any conspiracy theories? If so, what are they?",
        
        "What is the 'strangest' thing you believe in? Do you believe in the supernatural? Heaven, angels, ghosts? Luck, fate, magic? Mind reading, lizard people, the Illuminati? Where do you draw the line of belief and disbelief?",
        
        "What fictional character do you most relate to?",
        
        "What have you been meaning to do but haven't yet done? Why haven't you done it?",
        
        "Let's say that regardless of what job you have, you'll make $100,000 a year (£78,000; €90,000), enough to live comfortably without having to worry about expenses. What job would you choose to have if money were no object?",
        
        "What do you get the most compliments about?",
        
        "Have you ever had an epiphany? What was it about, and what sparked the realization?",
        
        "What is the most important quality you look for in a friend? A romantic partner?",
        
        "What is a childhood habit or preference that you'll never outgrow?",
        
        "What is your favorite word and why?",
        
        "Which of your flaws are you most proud of?",
        
        "What is the most ordinary-seeming thing that you find fascinating?",
        
        "What lesson have you had to learn again and again?",
        
        "What was your favorite thing about the place you grew up?",
        
        "What scientific or technological advance blows your mind? Is there any technology that seems so futuristic and advanced you're surprised it actually exists?",
        
        "If you could ask your future self one thing, what would it be?",
        
        "What is something that gets cooler/more interesting the more you learn about it?",
        
        "What would you title your memoir?",
        
        "What was the hardest decision you've ever made?",
        
        "What word would your best friend use to describe you? Your parents? Your significant other (if applicable)?",
        
        "In what way would you most like to become famous?",
        
        "How would you summarize your life so far in one sentence?",
        
        "You're old and on your deathbed. With your last breath, you may deliver your last words to anyone you know. What do you say and who do say it to?",
        
        "If seasons never changed, which would you most like to live in eternally?",
        
        "What is the best advice you've ever received?",
        
        "You have one year to live: how do you spend it?",
        
        "Think of the best teacher you've ever had. What did they teach, and what made them so special?",
        
        "What is something you never thought you'd be able to do, until you actually did it?",
        
        "If you could go back and relive one day in your life without changing anything about it, which day would you revisit?",
        
        "If you had the power to completely eradicate one disease, which would you choose to abolish?",
        
        "If you had the power to completely solve one social or political issue affecting the world today, which would you choose?",
        
        "What was the scariest moment of your life thus far?",
        
        "If you lived in a colonial or Medieval village, what would your job be?",
        
        "Have you ever desired or longed for something, but once you got it, discovered it was overrated?",
        
        "What is something you've done that you recommend everyone do before they die?",
        
        "What do you know isn't real, but want badly for it to exist?",
        
        "What is the greatest physical pain you've ever felt?",
        
        "What is something you don't realize is weird until you really think about it?",
        
        "What's your favorite joke you've ever heard?",
        
        "Is there something you wish everybody knew about you without you having to tell them?",
        
        "What trait do you admire in others but don't possess yourself?",
        
        "What question do you most hate being asked?",
        
        "What is something other people admire about you?",
        
        "What's the best outcome of a complete accident you've experienced in your life?",
        
        "Have you ever gotten the giggles in an inappropriate place? Where was it?",

        "What's the best lesson you've learned from a difficult situation?",
        
        "What do you think 'success' means? How do you define it in your own life?",
        
        "What's your favourite article of clothing you own?",
        
        "What's something you wish you enjoyed but never can seem to?",
        
        "If you could play any instrument or learn any language in two hours, which would you choose and how would you use your talent?",
        
        "Have you ever challenged or questioned a belief you held for a long time? What prompted it and what was the result?",
        
        "What, if anything, is too serious to be joked about?",
        
        "What's the coolest project you've ever worked on?",
        
        "Are you currently pursuing what makes you happy? Why or why not?",
        
        "What did you know was a mistake as soon as you decided to do it, and why did you go through with it anyway?",
        
        "In what ways are you stubborn?",
        
        "What's a brief summary of your outlook on life?",
        
        "What are you most likely to be arrested for (even if you don't do anything illegal—what crime do you think you're most likely to commit)?",
        
        "Think of your biggest regret. If you could go back in time and make a decision to keep it from happening, would you?",
        
        "If you could be any animal, what would you be and why?",
        
        "What is the worst thing about the place you live?",
        
        "What is the best thing about the place you live?",
        
        "Does anybody beside yourself know your deepest secret? Do you ever intend to tell anyone?",
        
        "What is one small change you made in your life that had a much bigger impact that you anticipated?",
        
        "What historical event would you most like to have experienced?",
        
        "Do you believe in fate, the idea that 'whatever is meant to happen will happen'? Or do you believe more in a universe governed mainly by chaos and the unknown?",
        
        "What unpleasant experience are you most proud of yourself for making it through?",
        
        "In a 'Freaky Friday' situation where you woke up in someone else's body, who would you like to be for a day and have them inhabit your body?",
        
        "Do you have a crush currently?",
        
        "What's the craziest thing you've ever done?",
        
        "Are you currently holding a grudge against anyone or anything?",
        
        "What small thing annoys you to an irrational degree?",
        
        "Have you gone through any phases in your life? What is the most notable one?",
        
        "What historical figure do you most admire and why?",
        
        "Was there ever a moment when you thought you were going to die?",
        
        "What was the best opportunity you ever received?",
        
        "What always makes you nostalgic?",
        
        "What would you like to accomplish before the year is over?",
        
        "Have you ever been offered a good opportunity but refused? What was the situation?",
        
        "Would you prefer your family to be smaller or larger than it is now, or neither? Do you wish you were more involved with your extended family?",
        
        "What is something you're hypocritical about; something you believe but have a hard time sticking to in practice?",
        
        "Has anyone close to you ever died? Was there anything that helped you to move past their death?",
        
        "What is something you're inherently bad at, no matter how hard you try to improve?",
        
        "Do you have any inherent talents?",
        
        "What small, insignificant thing gives you joy?",
        
        "If you could live anywhere in the world in any kind of domicile, and money was no object, where would you live and what would your dwelling be like?",
        
        "What is one thing you've done/seen/eaten/etc. that turned out to be really good, even though you initially didn't expect it to be?",
        
        "In the movie Inside Out, each person has a set of 'core memories' that define who they are and how they behave. What's one of yours?",
        
        "What is the biggest mistake you've made that actually turned out alright?",
        
        "What's the best decision you've ever made?",
        
        "When you're sick, what are some things you eat/drink/watch/etc. to be comfortable?",
        
        "What are some core principles you have that you'll never give up or change?",
        
        "Have you ever invented something? It doesn't have to be a traditional product either, it can be creating a new dish, coining a term.",
        
        "What cause do you strongly support, even though it wouldn't directly benefit you?",
        
        "What book, movie, film, or video game had the best ending?",
        
        "You have enough money to make a sizeable charitable donation—to which charity do you donate it and why? Or, if you choose not to go through a charity, how would you spend this money in a philanthropic way?",
        
        "What is something weird you do that you wonder if other people do as well?",
        
        "Suddenly you're in a horror film, running from a masked murderer. Your only companion is the last person you texted, and your only weapon is whatever is currently closest to your left hand. What is the movie like and do you think you could survive?",
        
        "What is one thing you're tired of telling/explaining to people?",
        
        "What embarrassing memory will forever be burned into your mind?",
        
        "What was the busiest day of your life thus far?",
        
        "What was the greatest day of your life thus far?",
        
        "What was the worst day of your life thus far?",
        
        "What is one thing you're good at that people don't expect?",
        
        "In what way do you differ most from your parents?",

        "In what way do you differ most from your best friend?",
        
        "What stereotype are you most like?",
        
        "What is one thing you're proud you haven't done?",
        
        "What is something that's difficult for you but easy for most other people?",
        
        "What is something that's easy for you but difficult for most other people?",
        
        "What are you glad you learned as a child?",
        
        "If you could know either when you die or how, which would you choose, if either?",
        
        "What is something you had to learn the hard way?",
        
        "What is something you want but will never have?",
        
        "If you could know for certain the answer to any question, what would that question be?",
        
        "What is a quote that speaks to you, and why do you like it?",
        
        "What advice do you wish you'd received earlier?",
        
        "What was the hardest time of your life, and how did you make it through?",
        
        "What is the best compliment you've ever received?",
        "What character trait instantly makes you respect someone?",
        
        "What is the best compliment you've ever given someone?",
        
        "What is a fear you've faced and how did you face it?",
        
        "What is an 'everyday evil' you experience often? Something banal but deeply unfair.",
        
        "What person you know do you look up to most and why?",
        
        "Has anyone ever saved your life? Have you ever saved someone else's?",
        
        "What expensive thing is absolutely worth the money?",
        
        "If you could change your name (first, last, middle, or any combination of the three), what would you change it to and why?",
        
        "What historical figure would you most like to sit and have a conversation with over tea?",
        
        "Who do you wish was still alive?",
        
        "What is a story you always fall back on—one you've told so many times you nearly have it memorised?",
        
        "How has your year been going?",
        
        "There is an old, old man who lives deep in the forest. He is immortal, and was born in the year 0. You may ask him one question. What do you ask?",
        
        "How are you? No, really. How are you? Not 'Fine,' not 'Good, thanks, and you?' How are you really? Now, today, at this moment?",
        
        "What were you severely underprepared for?",
        
        "What's the most selfish thing you've done?",
        
        "What's the most selfless thing you've done?",
        
        "If you could live in any fictional world, where would it be and why?",
        
        "What is your favourite question to answer?",
        
        "What is the biggest punishment you've ever received? Getting grounded, disciplinary file, prison?",
        
        "What about yourself is completely different from what you were like 10 years ago?",
        
        "What about yourself hasn't changed in the last 10 years?",
        
        "If you could erase one memory from your mind, what would it be and why?",
        
        "What wouldn't you do for someone you love?",
        
        "If you could enhance one of your senses twofold (e.g. your hearing would be twice as good as it is now), which would you choose to enhance?",
        
        "What's the best gift you've ever received? Who gave it to you?",
        
        "What's the best gift you've ever given? Who did you give it to?",
        
        "What one thing changed the way you see the world?",
        
        "If you died today, what would be your biggest regret?",
        
        "What is a completely rational, justified fear that you have?",
        
        "What is something you love that most people hate?",
        
        "What is something you hate that most people love?",
        
        "What do you wish was possible?",
        
        "Who was the last person you called, and what did you talk about?",
        
        "What will never cease to make you smile?",
        
        "What will always be funny to you?",
        
        "What is something that happened to you, despite the odds being stacked against you?",
        
        "If you were a superhero, what would be your name, costume, and catchphrase? Who would you fight?",
        
        
        "What was the last song that got stuck in your head?",
        
        "What is the longest or most complex thing you have memorised?",
        
        "Assume that god exists. For our purposes, he created the universe and has witnessed everything that has happened since. He also has control over everyone's lives and destinies. Once a millennium, he appears to somebody in his human form and will answer one question with absolute truth. He has chosen you. What do you ask him?",
        
        "If you could have any superpower for just one day, but you get to choose the superpower and when you activate it, what would you choose and when would you use it?",
        
        "In what way have you experienced the saying, 'You don't know what you have until you lose it'?",
        
        "Someone you love will die at the end of today. Only you know this; they don't. How do you spend your last day with them and when do you tell them that they're going to die, if ever?",
        
        "What do you wish you remembered better?",
        
        "Who is the single best person you have ever met? What makes them the best?",
        
        "What is something you know is going to happen, but hasn't yet?",
        
        "Have you ever gotten a 'hunch' about something that turned out to be true?",
        
        "What is the most dangerous thing you've ever done, and why did you do it?",
        
        "What do you think is worth dying for, if anything?",
        
        "Is there anything you have vowed never to do?",
        
        "What's your favourite memory with your best friend?",
        
        "What is a profession you admire but could never be a part of?",
        
        "What is something you enjoyed doing but would never do again?",
        
        "What object best defines who you are?",
        
        "What is the strongest emotional connection you've ever felt with a person? (It doesn't have to be romantic.)",
        
        "Do you have or have you ever had a nemesis?",
        
        "What's the biggest fight you've gotten into, and what was it about?",
        
        "What would the ideal version of your life look like?",
        
        "What was the most recent thing that made you belly laugh?",
        
        "What is the dumbest purchase you've ever made?",
        
        "If you had to write your own eulogy to be read at your funeral, what would it say in brief?",
        
        "You have the opportunity to give a 10 minute speech which will be broadcast worldwide. What do you say?",
        
        "How long do you think you could survive in a remote forest with no tools?",
        
        "What person in your life would you most want to be stuck in an elevator with for 24 hours?",
        
        "What is the most obscure fact you know?",
        
        "Is there something you want to tell someone, but haven't? Why haven't you done it, and how do you think they would react if you told them?",
        
        "What's a rant you've been holding in?",
        
        "What subject could you teach a college course on? What would be the title of the course, and what units would you cover?",
        
        "Have you ever had, a recurring dream or nightmare? What was it?",
        
        "What gives you hope for the future?",
        
        "What is something you fantasise about often?",
        
        "What do you find yourself thinking about just before you fall asleep?",
        
        "What was your favourite family tradition growing up? Have you created a tradition of your own?",
        
        "What is something you're embarrassed to admit you enjoy? Why are you embarrassed about it?",
        
        "What if the first thing you hope people notice about you?",
        
        "When was the last time you did something nice for someone completely unprompted?",
        
        "What is a misconception people have about your profession?",
        
        "What do you want written on your headstone?",
        
        "What situation made you feel like a complete idiot?",
        
        "What outfit makes you feel invincible?",
        
        "Have you ever hit “rock bottom”? What did it look and feel like to you? What situations or decisions led to it? How did you get out, or have you gotten out yet?",
        
        "What current trend do you find troubling and why?",
        
        "What is the worst thing in your life that has resulted from a complete misunderstanding or miscommunication?",

        "What are you currently worrying about, if anything? What could happen to make you stop worrying about it?",

        "How do you think humanity will go extinct? When do you think it will happen?",
        
        "Is there a problem or situation for which you could use some advice?",
        
        "Has your gut feeling or first impression about something ever been wrong?",
        
        "What is your catchphrase, or something you find yourself saying often?",
        
        "At a party, are you the social butterfly who chats with everyone, the intense conversationalist who gets really deep with someone, the person who showed up for the snacks, the person getting drunk, the person dancing, the host, the person hanging around the edges and not talking much, or someone else?",
        
        "A stranger is inhabiting your body for the day. What are some tips you'd give them?",
        
        "Are you currently waiting for something? What are you waiting for? What are the best and worst possible scenarios?",
        
        "Is there someone you knew once but have lost touch with? What happened? Do you know where they are now, and how they're doing?",
        
        "What is something you love, but can't recommend to anyone you know because you know they won't like it?",
        
        "Who was your childhood hero? Do you still look up to them? Why or why not?",
        
        "What's something you've done so many times, you could do it with your eyes closed?",
        
        "What instantly makes you feel like a child again?",
        
        "What do you think happens after we die, if anything?",
        
        "Have you ever written a thank-you note to someone who created or helped create something you enjoy? If not, who would you write to and what would you thank them for?",
        
        "What is your perfect meal? Describe it—everything from the company to the setting to the music to, of course, the food.",
        
        "What are people not grateful enough for?",
        
        "What is the smallest thing that can ruin your day?",
        
        "Is there anyone you envy? What is it about them that you envy? If not, what is something people might envy you for?",
        
        "What is the most recent thing (skill, technique, theory, subject, etc.) you taught yourself?",
        
        "What is something you wish people cared less about? How do you think the world would be better if people cared less about it?",
        
        "What is something you wish people cared more about? How do you think the world would be better if people cared more about it?",
        
        "How do you feel about the future right now? Are you nervous, excited, unenthused?",
        
        "Have you ever cried in public? If so, was the reason?",
        
        "Do you have an inside joke with friends or family? How did it begin?",
        
        "What immediately makes you think less of someone?",
        
        "What immediately makes you think more highly of someone?",
        
        "Who could you listen to for hours? It can be someone you know or someone you don't.",
        
        "What social custom do you wish would end and why?",
        
        "If a biopic were made of your life, which parts would you want to be left out and why?",
        
        "What were the longest five minutes you've ever experienced?",
        
        "Have you discovered anything about yourself in the past year?",
        
        "How would you want your children's childhoods to be different from your own?",
        
        "What's the quickest way to get you angry?",
        
        "Have you ever hidden something from your family or friends? How long did you hide it for, and why?",
        
        "How does the current generation of children differ from what children were like when you were younger?",
        
        "How would your life change if you inherited $100,000 tomorrow?",
        
        "What's the strangest situation you've ever found yourself in?",
        
        "What is the best thing that happened to you this week?",
        
        "Do you have a nickname? If so, who gave it to you and how did it come about? If you could choose a nickname for yourself, what would you want it to be and why?",
        
        "What's the most beautiful view you've ever seen?",
        
        "How did you and your best friend (or significant other, if applicable) meet?",
        
        "What are you looking forward to?",
        
        "What activity makes you lose track of time?",
        
        "What is the most useless talent or skill you possess? How and why did you learn it?",
        
        "If you opened a business, what type of business would it be? What would you name it?",
        
        "When you were a kid, were you excited to be a grownup? What about growing up excited you?",
        
        "Assume you have a lot of musical talent. If you started a band, how many people would be in it and which position would you be? What would you name it? What genre would you play?",
        "When was the last time you tried something new? What was it? Did you enjoy it?",
        
        "What's something you went through that you wouldn't wish on your worst enemy?",
        
        "When do you feel like the best version of yourself?",
        
        "What keeps you up at night?",
        
        "Has a piece of media (book, film, play, song, etc.) ever changed the way you thought about the world?",
        
        "What is a conspiracy theory you believe to be true?",
        
        "If you were a ghost tied to one location in the afterlife, where would you haunt?",
        
        "What are the stories behind your scars/tattoos, if you have any?",
        
        "Would you prefare dateing someone younger or older than you?",
        
        "Who is your biggest role model?",
        
        "What does a healthy relationship look like to you?",
        
        "What is your favorite part about our relationship?",
        
        "What does the ideal date look like?",
        
        "What's your love language?",
        
        "What is one thing that will get on your nerves immediately?",
        
        "What do you think happens after we die?",
        
        "Do you believe in alien life?",
        
        "What are you most afraid of?",
        
        "What is one thing that never fails to make you feel better?",
        
        "What do you get out of traveling?",
        
        "What are your biggest priorities in life?",
        
        "Who are you most similar to in your family?",
        
        "What do you dread doing?",
        
        "How do you cope when you're upset?",
        
        "What do you most look forward to every day?",
        
        "What was your proudest moment?",
        
        "Have you ever had a deepest fear come true?",
        
        "Does everyone truly deserve a second chance?",
        
        "What's the strangest encounter you've ever had?",
        
        "What single thing makes you feel the most alive?",
        
        "When is the last time you felt lost?",
        
        "What's something you really love about yourself?",
        
        "What do you consider the scariest question?"
]