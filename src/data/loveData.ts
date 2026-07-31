import { LoveData } from '../types/love';

/**
 * ============================================================================
 * central configuration & PERSONAL DATA FILE
 * ============================================================================
 * 
 * Edit any values below to personalize this digital scrapbook!
 * 
 * PERSONALIZATION INDEX:
 * 1. Girlfriend's Name:  Edit `Akshiti`
 * 2. My Name (Sender):   Edit `Aaruuu`
 * 3. Relationship Date:  Edit `12 may 2026`
 * 4. Hero Photo:         Edit `hero.image` (default: "/images/hero.jpg")
 * 5. Song Title:         Edit `song.title`
 * 6. Song Artist:        Edit `song.artist`
 * 7. Song MP3 Path:      Edit `song.audio` (default: "/audio/our-song.mp3")
 * 8. Song Cover Photo:   Edit `song.cover` (default: "/images/song-cover.jpg")
 * 9. Love Letter:        Edit `loveLetter` array (add/edit paragraphs)
 * 10. Memory Photos:     Edit `memories[].image`
 * 11. Memory Captions:   Edit `memories[].caption`
 * 12. Memory Dates:      Edit `memories[].date`
 * 13. Reasons I Love Her: Edit `reasons[]` array
 * 14. Special Messages:  Edit `specialMessage` and `final` sections
 * ============================================================================
 */

export const loveData: LoveData = {
  // 1. Girlfriend's Name
  girlfriendName: "Akshiti",

  // 2. Sender Name (Your Name)
  senderName: "Aaruuu",

  // 3. Relationship Start Date (Used for live counter calculation)
  relationshipDate: "2026-05-12",

  // 4. Anniversary Label
  anniversaryLabel: "Every moment with you is my favorite memory ♡",

  // 5. Landing / Hero Section
  hero: {
    badgeText: "FOR THE GIRL I ADORE",
    title: "A little world, made for you.",
    subtitle: "Happy Girlfriend's Day, my love ♡",
    scrollPromptText: "Scroll slowly, my love ↓",
    // Hero photo path in /public/images/
    image: "/images/hero.jpg",
  },

  // 6. Introduction Section
  intro: {
    greeting: "To my favorite person in the entire universe...",
    storyParagraphs: [
      "Every moment with you has a way of becoming my favorite memory, because the happiest part of my day is hearing your voice, sharing little moments with you, and making new memories together.",
      "This is my little reminder for you: no matter what happens, you'll always be deeply loved, cherished, and adored by me, every single day."
    ],
    milestoneStats: {
      daysTogetherLabel: "Days of Pure Bliss",
      smilesShared: "The happiest part of my day.",
      cozyDates: "Where I feel safe, calm, and completely at home with you.",
      foreverPromise: "One Forever Promise."
    }
  },

  // 7. Special Song Section
  song: {
    title: "Until I Found You",
    artist: "Stephen Sanchez",
    audio: "/audio/our-song.mp3",
    cover: "/images/song-cover.jpg",
    note: "The song that will forever remind me of us and how blessed I am to have found you.",
    lyricsQuote: "“I would never fall in love until I found her... I said, 'I would never fall unless it's you I fall into.'”"
  },

  // 8. Multi-paragraph Love Letter
  letterHeading: "A Letter From My Heart ♡",
  letterSubtitle: "For my sweetest princess, my happiness, my safe place ♡",
  loveLetter: [
    "Good morning my sweetuuu cupcake 😚❤️",
    "I wish you a very Happy Girlfriend Day, my happiness, my little babyyy girl. 💖",
    "First of all, thank you... thank you for coming into my life and making it so beautiful. Every single day I thank God because He blessed me with someone as amazing as you. I truly feel lucky that our paths crossed and that today I get to call you mine.",
    "In just a few more days, our relationship will complete 3 months. Honestly, it feels like time flies whenever I'm with you. Whenever we're together, I never realize how quickly the time passes. Suddenly it's time to go home, and every single time I wish I could stay with you a little longer... hug you a little tighter... talk to you for a few more hours... and keep you close to me just a little more.",
    "Whenever I can't talk to you properly, my heart feels incomplete until we finally do. You already know that I'm a very emotional person, and yes... I overthink a lot. Sometimes even the smallest things make me think too much, and I end up hurting myself for no reason. But every time you patiently explain things to me with love, all those thoughts slowly disappear. That's one of the many reasons why I feel so safe with you.",
    "I know this phase of our lives won't always be easy. There will be stress, responsibilities, busy schedules and many new challenges. But one thing I believe with all my heart is that whatever comes, we'll face it together. It won't be your problem or my problem—it'll be our problem. We'll fight every situation side by side, hand in hand.",
    "I know you'll become busier because of your work, and I completely understand that. But no matter how busy life gets, I'll always try to make a little time for us because even a few minutes with you make my whole day better. Your voice, your smile, your presence... they give me peace that I can't explain.",
    "Honey, thank you for making me feel loved, cared for, respected, safe and comfortable. Around you, I never have to pretend to be someone else. I can be my real self, and that's the greatest gift anyone can give. You make my heart feel like it has found its home.",
    "I really want you to know something very important. You are one of the most precious people in my life. You are so valuable to me, not because of what you do, but because of who you are. Your kindness, your strength, your discipline, your beautiful heart, your confidence, the way you care for people, and the way you work so hard for your dreams... all of these make me admire you more every single day.",
    "I believe in you more than you know. I know you can achieve everything you dream of because I've seen how hardworking and determined you are. I'll always be your biggest supporter, cheering for you in every step of your journey.",
    "There's something else I want you to always remember. You never have to carry your worries alone. If you ever feel stressed, scared, tired, confused or if you're overthinking anything—whether it's something small or something big—please tell me. I want to listen to everything. I don't want you to hide your feelings from me because your happiness and your peace matter so much to me. We'll solve everything together.",
    "Sometimes I overthink too, especially because I love you so deeply. It's not because I don't trust you; it's because you're so important to me that the thought of losing you scares me. But whenever you reassure me with your love, everything becomes okay again. Thank you for always understanding me with so much patience.",
    "I hope we always keep talking to each other no matter what happens. Communication is our biggest strength. If something ever hurts you, if you're upset with me or if anything feels wrong, promise me you'll tell me. Never keep your feelings inside. We'll always choose conversation over silence because together we can solve anything.",
    "Every day I spend with you makes my love grow even more. It never becomes less—it only becomes stronger. I promise to keep loving you, respecting you, caring for you and making you feel appreciated every single day.",
    "I want you to always feel safe with me. I want you to know that you are deeply loved, deeply respected and incredibly important. No matter how busy life becomes, I never want you to doubt your place in my heart. You'll always be special to me.",
    "Today is your first day at the office, and I'm genuinely so proud of you. ❤️ I know you'll do amazing. Listen carefully, learn everything confidently, understand your work properly and don't worry—you've got this. Believe in yourself because I already believe in you. I can't wait to hear all about your first day. 🥹",
    "Thank you for understanding me, for loving me, for accepting all my emotions and for making me feel that I'm never alone. Thank you for becoming my safe place, my comfort and one of the biggest reasons behind my smile.",
    "For as long as I have this life, I want to spend it loving you, laughing with you, growing with you, and creating beautiful memories together. Every single day, I want to love you a little more than the day before.",
    "I hope you'll always be by my side, because life feels so much more beautiful with you in it. I want to experience every chapter, every dream, and every little moment with you. Do you want to live all those beautiful moments with me too, honey? ❤️"
  ],
  letterSpecialEnding: {
    line1: "I always love you... more and more and more every single day. ❤️",
    line2: "Happy Girlfriend Day once again to my sweetest princess, my happiness, my safe place, my biggest blessing and my forever favorite person. 😚💖",
    line3: "I loveeeee youuuu sooo muchhhh. ❤️✨",
    signature: "Forever yours. 🫶"
  },

  // 9. Memory Scrapbook Gallery
  memories: [
    {
      id: "mem-1",
      image: "/images/memory-1.jpg",
      title: "Our First Coffee Date",
      date: "29 April 2023",
      location: "Our First Coffee Date",
      caption: "The day I realised you were my favourite hello.",
      rotation: -3
    },
    {
      id: "mem-2",
      image: "/images/memory-2.jpg",
      title: "Most Memorable Day",
      date: "18 June 2023",
      location: "Most Memorable Day",
      caption: "Laughing until our stomachs hurt under the evening sky.",
      rotation: 2
    },
    {
      id: "mem-3",
      image: "/images/memory-3.jpg",
      title: "Weekend Trip",
      date: "12 August 2023",
      location: "Weekend Trip",
      caption: "Holding hands and making quiet promises together.",
      rotation: -2
    },
    {
      id: "mem-4",
      image: "/images/memory-4.jpg",
      title: "Favourite Smile",
      date: "05 November 2023",
      location: "Favourite Smile",
      caption: "Your smile is the morning sun—the sweetest sight.",
      rotation: 3
    },
    {
      id: "mem-5",
      image: "/images/memory-5.jpg",
      title: "City Adventures",
      date: "14 February 2024",
      location: "City Adventures",
      caption: "Exploring cozy little places with my favourite human.",
      rotation: -2
    },
    {
      id: "mem-6",
      image: "/images/memory-6.jpg",
      title: "Forever & Always",
      date: "14 April 2024",
      location: "Forever & Always",
      caption: "Just us holding a tiny universe together.",
      rotation: 2
    }
  ],

  // 10. Reasons I Love You
  reasons: [
    {
      id: "r-1",
      number: 1,
      iconName: "Heart",
      title: "Your Laughter",
      description: "Your laugh is my absolute favourite sound in the world."
    },
    {
      id: "r-2",
      number: 2,
      iconName: "Sparkles",
      title: "Feeling Like Home",
      description: "You feel like home, no matter where we are."
    },
    {
      id: "r-3",
      number: 3,
      iconName: "Coffee",
      title: "Favorite Memories",
      description: "You make ordinary days feel like my favorite memories."
    },
    {
      id: "r-4",
      number: 4,
      iconName: "Sun",
      title: "Our Conversations",
      description: "Talking to you is my favorite part of every day—I never want our conversations to end."
    },
    {
      id: "r-5",
      number: 5,
      iconName: "ShieldCheck",
      title: "Becoming Better",
      description: "You make me want to be a better person every single day."
    },
    {
      id: "r-6",
      number: 6,
      iconName: "Music",
      title: "Always You",
      description: "It's you. It has always been you."
    }
  ],
  secretReason: {
    title: "Because With You, I Feel Safe",
    description: "I don't think love has to be explained with a list of reasons. All I know is that whenever I'm with you, I feel safe, comfortable, and completely myself. That's the feeling I never want to lose, and that's why you'll always be the most special person in my life. ❤️"
  },

  // 11. Dedicated Special Message
  specialMessage: {
    heading: "You are my favorite part of every day.",
    quote: "If I had a flower for every time I thought of you, I could walk through my garden forever.",
    author: "Alfred Lord Tennyson",
    note: "Thank you for being my dream come true, my best friend, and my greatest blessing."
  },

  // 12. Final Romantic Section
  final: {
    heading: "Forever Yours ♡",
    paragraph: "I love you more and more with every single passing day, every sunrise, and every quiet night under the stars.",
    closingNote: "Made with love, just for you."
  }
};
