/**
 * Type definitions for Love Letter — Girlfriend's Day Surprise
 */

export interface MemoryItem {
  id: string;
  image: string;
  title: string;
  date: string;
  location?: string;
  caption: string;
  rotation?: number; // e.g. -3, 2, -2, 3 degrees for natural polaroid scatter
}

export interface ReasonItem {
  id: string;
  number: number;
  iconName?: string;
  title: string;
  description: string;
}

export interface LoveData {
  // 1. Girlfriend & Sender Names
  girlfriendName: string;
  senderName: string;

  // 2. Relationship Date & Label
  relationshipDate: string; // e.g., "2023-04-14" or "April 14, 2023"
  anniversaryLabel: string; // e.g., "Our Beautiful Journey Together"

  // 3. Hero Section Details
  hero: {
    badgeText: string;
    title: string;
    subtitle: string;
    scrollPromptText: string;
    image: string; // /images/hero.jpg
  };

  // 4. Intro Section
  intro: {
    greeting: string;
    storyParagraphs: string[];
    milestoneStats: {
      daysTogetherLabel: string;
      smilesShared: string;
      cozyDates: string;
      foreverPromise: string;
    };
  };

  // 5. Special Song Section
  song: {
    title: string;
    artist: string;
    audio: string; // /audio/our-song.mp3
    cover: string; // /images/song-cover.jpg
    note: string;
    lyricsQuote: string;
  };

  // 6. Love Letter (Multi-paragraph array & special endings)
  loveLetter: string[];
  letterHeading?: string;
  letterSubtitle?: string;
  letterSpecialEnding?: {
    line1: string;
    line2: string;
    line3: string;
    signature: string;
  };

  // 7. Memory Scrapbook
  memories: MemoryItem[];

  // 8. Reasons I Love You
  reasons: ReasonItem[];
  secretReason?: {
    title: string;
    description: string;
  };

  // 9. Special Message
  specialMessage: {
    heading: string;
    quote: string;
    author: string;
    note: string;
  };

  // 10. Final Section
  final: {
    heading: string;
    paragraph: string;
    closingNote: string;
  };
}
