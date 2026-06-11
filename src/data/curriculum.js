// Curriculum data derived from BIMM Guitar Techniques syllabus
export const curriculum = [
  {
    id: 'fretboard-overview',
    title: 'Fretboard Overview',
    chapter: 2,
    description: 'Master the layout of the guitar fretboard. Learn diatonic and chromatic note positions, octave shapes, and how scales relate to fretboard positions.',
    level: 'beginner',
    duration: '2-3 weeks',
    objectives: [
      'Identify all natural notes on the fretboard',
      'Understand chromatic vs diatonic note layouts',
      'Learn octave shapes across all string groupings',
      'Visualize scale shapes within octave patterns',
      'Navigate the fretboard confidently in any key'
    ],
    topics: [
      { name: 'Diatonic Notes (C Major)', description: 'All natural notes across the fretboard in standard tuning' },
      { name: 'Chromatic Notes', description: 'All twelve notes including sharps/flats on every string' },
      { name: 'Octave Shapes', description: 'Recurring octave patterns that contain all scales and chords' },
      { name: 'Scale Shapes in Octaves', description: 'How scale patterns fit within octave frames' }
    ],
    practiceGoals: [
      'Name any note on the fretboard within 3 seconds',
      'Play all octave shapes from any starting note',
      'Identify at least 3 positions for any given note'
    ]
  },
  {
    id: 'warm-ups',
    title: 'Warm Ups & Conditioning',
    chapter: 3,
    description: 'Essential warm-up exercises to prevent injury and build dexterity. Includes chromatic patterns, sequenced scales, arpeggios, intervals, and stretching.',
    level: 'beginner',
    duration: '1-2 weeks',
    objectives: [
      'Develop a consistent warm-up routine',
      'Build finger independence and dexterity',
      'Prevent repetitive strain injuries',
      'Master chromatic pattern variations',
      'Build speed gradually with proper technique'
    ],
    topics: [
      { name: 'Descending/Ascending Sextuplets', description: 'Pattern-based warm-ups using sextuplet groupings' },
      { name: 'Sequencing Patterns', description: 'Three and two note per string sequencing exercises' },
      { name: 'Arpeggios Across Strings', description: 'Two-string arpeggio patterns for coordination' },
      { name: 'Cells', description: 'Small moveable patterns that build into larger scale runs' },
      { name: 'Interval Exercises', description: 'Playing sixths and other intervals ascending/descending' },
      { name: 'Picking Patterns', description: 'Alternate picking warm-ups with semitone shifts' },
      { name: 'Stretching Exercises', description: 'Let-ring stretching patterns for flexibility' },
      { name: 'Fingering Combinations', description: 'All permutations of finger patterns' },
      { name: 'Slurs (Hammer-ons/Pull-offs)', description: 'Legato technique builders' },
      { name: 'Fingerstyle Variations', description: 'Right-hand finger independence patterns' }
    ],
    practiceGoals: [
      'Complete full warm-up routine in under 15 minutes',
      'Play chromatic exercises cleanly at 120 BPM (16th notes)',
      'Execute all fingering combinations without tension'
    ]
  },
  {
    id: 'caged-system',
    title: 'The CAGED Chord System',
    chapter: 4,
    description: 'Learn the CAGED system — a powerful framework for connecting the entire fretboard. Understand how five basic chord shapes link together and relate to scales.',
    level: 'beginner',
    duration: '3-4 weeks',
    objectives: [
      'Understand the five CAGED shapes',
      'Play Major and Minor chords across the fretboard',
      'Connect chord shapes seamlessly',
      'See the relationship between chords and scales',
      'Apply CAGED to seventh and extended chords'
    ],
    topics: [
      { name: 'CAGED Major Chords', description: 'Five positions of major chords (1, 3, 5)' },
      { name: 'CAGED Minor Chords', description: 'Five positions of minor chords (1, b3, 5)' },
      { name: 'Suspended Fourths', description: 'Sus4 chord shapes across all positions' },
      { name: 'Major 7th Chords', description: 'Maj7 voicings in all CAGED positions' },
      { name: 'Dominant 7th Chords', description: 'Dom7 voicings connecting across the neck' },
      { name: 'Minor 7th Chords', description: 'Min7 shapes in all five positions' },
      { name: 'Minor 7(b5) Chords', description: 'Half-diminished shapes across the fretboard' },
      { name: '9th Chord Voicings', description: 'Extended ninth chord shapes' },
      { name: '11th Chord Voicings', description: 'Extended eleventh chord voicings' },
      { name: '13th Chord Voicings', description: 'Extended thirteenth chord voicings' },
      { name: 'Altered Chord Voicings', description: 'Altered dominant chord shapes' },
      { name: '6/9 Voicings', description: 'Common 6/9 chord shapes' },
      { name: '7th Chord Transformations', description: 'How to transform between seventh chord types' }
    ],
    practiceGoals: [
      'Play any major chord in all 5 CAGED positions',
      'Transition smoothly between adjacent CAGED shapes',
      'Identify CAGED position of any chord voicing you encounter'
    ]
  },
  {
    id: 'drop-voicings',
    title: 'Drop 2 & Drop 3 Voicings',
    chapter: 5,
    description: 'Advanced chord voicings derived from close-harmony arrangements. Essential for jazz, R&B, and sophisticated chord work.',
    level: 'intermediate',
    duration: '3-4 weeks',
    objectives: [
      'Understand close vs open voicings',
      'Construct Drop 2 chords from close harmony',
      'Construct Drop 3 chords from close harmony',
      'Apply these voicings in musical contexts',
      'Use inversions for smooth voice leading'
    ],
    topics: [
      { name: 'Close Harmony Voicings', description: 'Major and minor triads in close position' },
      { name: 'Open Voicings', description: 'Spreading voicings across a wider range' },
      { name: 'Drop 2 Major 7', description: 'All inversions of Maj7 Drop 2 chords' },
      { name: 'Drop 2 Dominant 7', description: 'All inversions of Dom7 Drop 2 chords' },
      { name: 'Drop 2 Minor 7', description: 'All inversions of Min7 Drop 2 chords' },
      { name: 'Drop 2 Minor 7(b5)', description: 'Half-diminished Drop 2 voicings' },
      { name: 'Drop 2 Major 7(b5)', description: 'Lydian-flavored Drop 2 voicings' },
      { name: 'Drop 2 Major 7(#5)', description: 'Augmented major seventh Drop 2 voicings' },
      { name: 'Drop 2 Minor Major 7', description: 'Minor-major seventh Drop 2 voicings' },
      { name: 'Drop 3 Major 7', description: 'All inversions of Maj7 Drop 3 chords' },
      { name: 'Drop 3 Dominant 7', description: 'All inversions of Dom7 Drop 3 chords' },
      { name: 'Drop 3 Minor 7', description: 'All inversions of Min7 Drop 3 chords' },
      { name: 'Drop 3 Minor 7(b5)', description: 'Half-diminished Drop 3 voicings' }
    ],
    practiceGoals: [
      'Play all 4 inversions of any Drop 2 chord type',
      'Voice-lead through a ii-V-I using Drop 2 voicings',
      'Construct any Drop 3 voicing from its close-harmony root'
    ]
  },
  {
    id: 'pentatonic-scales',
    title: 'Pentatonic & Blues Scales',
    chapter: 6,
    description: 'Master the essential five-note scales that form the backbone of rock, blues, and pop guitar. Learn minor, major, and dominant pentatonics plus the blues scale.',
    level: 'beginner',
    duration: '3-4 weeks',
    objectives: [
      'Learn all 5 positions of the minor pentatonic',
      'Learn all 5 positions of the major pentatonic',
      'Understand the dominant pentatonic',
      'Add blues notes to create the blues scale',
      'Connect pentatonic shapes across the neck'
    ],
    topics: [
      { name: 'Minor Pentatonic (1, b3, 4, 5, b7)', description: 'Five shapes corresponding to CAGED minor forms' },
      { name: 'Pentatonic Legato Sequences', description: '16th note and triplet patterns for fluidity' },
      { name: 'Major Pentatonic (1, 2, 3, 5, 6)', description: 'Five shapes corresponding to CAGED major forms' },
      { name: 'Dominant Pentatonic (1, 2, 3, 5, b7)', description: 'Hybrid pentatonic for dominant chord contexts' },
      { name: 'Minor Blues Scale (1, b3, 4, b5, 5, b7)', description: 'The classic blues hexatonic scale' },
      { name: 'Major Blues Scale (1, 2, b3, 3, 5, 6)', description: 'Major pentatonic with added blue note' }
    ],
    practiceGoals: [
      'Play all 5 minor pentatonic shapes from memory',
      'Solo over a 12-bar blues using connected positions',
      'Execute legato pentatonic sequences at 100 BPM'
    ]
  },
  {
    id: 'major-modes',
    title: 'Modes of the Major Scale',
    chapter: 6,
    description: 'Explore the seven modes derived from the major scale. Each mode creates a unique mood and color, essential for expressive soloing and composition.',
    level: 'intermediate',
    duration: '4-6 weeks',
    objectives: [
      'Learn the interval formula for each mode',
      'Play all modes in five positions',
      'Hear the unique character of each mode',
      'Apply modes over appropriate chord types',
      'Use sequences and patterns within modal contexts'
    ],
    topics: [
      { name: 'Ionian / Major Scale (1,2,3,4,5,6,7)', description: 'The foundation scale — bright and resolved' },
      { name: 'Dorian (1,2,b3,4,5,6,b7)', description: 'Minor with a natural 6th — soulful and jazzy' },
      { name: 'Phrygian (1,b2,b3,4,5,b6,b7)', description: 'Dark and exotic — Spanish/metal flavors' },
      { name: 'Lydian (1,2,3,#4,5,6,7)', description: 'Bright and dreamy — floating quality' },
      { name: 'Mixolydian (1,2,3,4,5,6,b7)', description: 'Major with flat 7 — bluesy, rock-dominant' },
      { name: 'Aeolian / Natural Minor (1,2,b3,4,5,b6,b7)', description: 'The natural minor — sad, reflective' },
      { name: 'Locrian (1,b2,b3,4,b5,b6,b7)', description: 'Diminished and unstable — used over m7b5' }
    ],
    practiceGoals: [
      'Play any mode in all 5 positions without hesitation',
      'Improvise over a static chord using the correct mode',
      'Drill scale sequences (groups of 3, 4, 6) through each mode'
    ]
  },
  {
    id: 'advanced-scales',
    title: 'Harmonic Minor, Melodic Minor & Symmetric Scales',
    chapter: 6,
    description: 'Advanced scale systems that unlock jazz, fusion, and neoclassical sounds. Includes harmonic minor modes, melodic minor modes, diminished and whole tone scales.',
    level: 'advanced',
    duration: '4-6 weeks',
    objectives: [
      'Master the harmonic minor scale and its modes',
      'Master the melodic minor scale and key modes',
      'Understand symmetric scale construction',
      'Apply these scales in improvisation',
      'Use three-note-per-string shapes for speed'
    ],
    topics: [
      { name: 'Harmonic Minor (1,2,b3,4,5,b6,7)', description: 'Classical minor with raised 7th — dramatic sound' },
      { name: 'Phrygian Dominant (1,b2,3,4,5,b6,b7)', description: '5th mode of harmonic minor — Middle Eastern flavor' },
      { name: 'Melodic Minor (1,2,b3,4,5,6,7)', description: 'Jazz minor — versatile and smooth' },
      { name: 'Super Locrian / Altered (1,b2,b3,b4,b5,b6,b7)', description: '7th mode of melodic minor — for altered dominants' },
      { name: 'Lydian Dominant (1,2,3,#4,5,6,b7)', description: '4th mode of melodic minor — fusion favorite' },
      { name: 'Diminished Scale (H-W / W-H)', description: 'Eight-note symmetric scale — tense and angular' },
      { name: 'Whole Tone Scale (1,2,3,#4,#5,b7)', description: 'Six-note symmetric scale — dreamy and unresolved' },
      { name: 'Three Notes Per String Shapes', description: 'Linear patterns for maximum speed and fluidity' }
    ],
    practiceGoals: [
      'Play harmonic minor in all positions across the neck',
      'Use altered scale over a V7 chord in a ii-V-I',
      'Execute diminished scale patterns at 100+ BPM'
    ]
  },
  {
    id: 'arpeggios',
    title: 'Arpeggios',
    chapter: 7,
    description: 'Learn to outline chord tones through arpeggio patterns. Essential for targeting the right notes in solos and creating melodic, chord-aware lines.',
    level: 'intermediate',
    duration: '3-4 weeks',
    objectives: [
      'Play major and minor triad arpeggios in all positions',
      'Play seventh chord arpeggios across the neck',
      'Connect arpeggio shapes to CAGED positions',
      'Apply arpeggios in improvisation over chord changes',
      'Combine arpeggios with scale passages'
    ],
    topics: [
      { name: 'Major Triad Arpeggios (1, 3, 5)', description: 'All five positions of major triads' },
      { name: 'Minor Triad Arpeggios (1, b3, 5)', description: 'All five positions of minor triads' },
      { name: 'Major 7th Arpeggios (1, 3, 5, 7)', description: 'Four-note arpeggios for major seventh chords' },
      { name: 'Dominant 7th Arpeggios (1, 3, 5, b7)', description: 'Four-note arpeggios for dominant chords' },
      { name: 'Minor 7th Arpeggios (1, b3, 5, b7)', description: 'Four-note arpeggios for minor seventh chords' },
      { name: 'Minor 7(b5) Arpeggios (1, b3, b5, b7)', description: 'Half-diminished arpeggio shapes' }
    ],
    practiceGoals: [
      'Play any seventh arpeggio type from any root',
      'Outline a ii-V-I progression using only arpeggios',
      'Sweep pick through triad arpeggios cleanly at 80 BPM'
    ]
  },
  {
    id: 'rhythm-techniques',
    title: 'Rhythm Guitar Techniques',
    chapter: 8,
    description: 'Develop solid rhythm guitar skills. Learn strumming patterns, muting techniques, syncopation, and groove-building approaches.',
    level: 'beginner',
    duration: '2-3 weeks',
    objectives: [
      'Develop solid time-keeping with a metronome',
      'Master palm muting and dead notes',
      'Play syncopated rhythm patterns',
      'Apply different strumming dynamics',
      'Play to a click track or drum loop consistently'
    ],
    topics: [
      { name: 'Straight 8th and 16th Patterns', description: 'Foundation rhythm patterns with down/up strumming' },
      { name: 'Syncopation', description: 'Off-beat accents and rhythmic displacement' },
      { name: 'Palm Muting', description: 'Controlling sustain for tight, percussive rhythms' },
      { name: 'Dead Notes / Ghost Notes', description: 'Muted percussive strums for groove' },
      { name: 'Dynamic Control', description: 'Playing with varied intensity and volume' }
    ],
    practiceGoals: [
      'Play 16th-note funk pattern cleanly at 90 BPM',
      'Maintain steady time against a click for 5 minutes',
      'Execute palm-muted riffs with consistent tone'
    ]
  },
  {
    id: 'bending-vibrato',
    title: 'Bending & Vibrato',
    chapter: 8,
    description: 'Master the expressive techniques of string bending and vibrato — the skills that give your playing vocal quality and emotional depth.',
    level: 'intermediate',
    duration: '2-3 weeks',
    objectives: [
      'Execute accurate half-step and whole-step bends',
      'Develop controlled, even vibrato',
      'Learn pre-bends and bend-releases',
      'Apply bending within scale contexts',
      'Build finger strength for reliable pitch accuracy'
    ],
    topics: [
      { name: 'Half-Step Bends', description: 'Bending up one fret in pitch accurately' },
      { name: 'Whole-Step Bends', description: 'Bending up two frets with control' },
      { name: 'Pre-Bends & Releases', description: 'Bending before picking, then releasing' },
      { name: 'Unison Bends', description: 'Matching a bent note to an adjacent string' },
      { name: 'Vibrato Styles', description: 'Classical, blues, and rock vibrato approaches' }
    ],
    practiceGoals: [
      'Hit target pitch on bends consistently (use tuner)',
      'Sustain even vibrato for 4+ beats',
      'Execute bend-release-pull-off combinations fluently'
    ]
  },
  {
    id: 'picking-techniques',
    title: 'Picking Exercises & Approaches',
    chapter: 8,
    description: 'Develop precise right-hand technique. Covers alternate picking, economy picking, string skipping, and building speed with accuracy.',
    level: 'intermediate',
    duration: '4-6 weeks',
    objectives: [
      'Master strict alternate picking',
      'Develop economy/sweep picking basics',
      'Build speed gradually with proper mechanics',
      'Handle string-crossing efficiently',
      'Apply picking techniques to musical phrases'
    ],
    topics: [
      { name: 'Alternate Picking', description: 'Strict down-up picking for maximum precision' },
      { name: 'Economy Picking', description: 'Combining alternate and sweep for efficiency' },
      { name: 'String Skipping', description: 'Picking across non-adjacent strings cleanly' },
      { name: 'Inside/Outside Picking', description: 'Managing pick direction at string changes' },
      { name: 'Speed Building', description: 'Systematic approaches to increasing tempo' },
      { name: 'Scale Sequencing with Picks', description: 'Applying picking to scalar sequences' },
      { name: 'Displacement', description: 'Rhythmic displacement of patterns for interest' }
    ],
    practiceGoals: [
      'Alternate pick through 3-note-per-string scales at 120 BPM',
      'String-skip arpeggio patterns cleanly at 100 BPM',
      'Play 16th-note scale runs across all 6 strings without errors'
    ]
  },
  {
    id: 'fingerstyle-clawhammer',
    title: 'Fingerstyle & Clawhammer',
    chapter: 8,
    description: 'Explore fingerpicking techniques from classical fingerstyle to clawhammer and hybrid picking. Build independence between thumb and fingers.',
    level: 'intermediate',
    duration: '4-6 weeks',
    objectives: [
      'Develop thumb independence from fingers',
      'Master basic fingerstyle patterns (p-i-m-a)',
      'Learn clawhammer technique',
      'Apply hybrid picking (pick + fingers)',
      'Play simultaneous bass lines and melodies'
    ],
    topics: [
      { name: 'Classical Fingerstyle (p-i-m-a)', description: 'Thumb and finger assignments for clean patterns' },
      { name: 'Travis Picking', description: 'Alternating bass with melody on top' },
      { name: 'Clawhammer Technique', description: 'Downward striking motion with back of nails' },
      { name: 'Hybrid Picking', description: 'Combining flatpick with middle/ring fingers' },
      { name: 'Fingerstyle Arpeggios', description: 'Broken chord patterns with fingers' },
      { name: 'Independence Exercises', description: 'Building separate control of each finger' }
    ],
    practiceGoals: [
      'Play a Travis picking pattern with steady bass for 2 minutes',
      'Execute fingerstyle arpeggios across 4 chord changes',
      'Hybrid pick a melody over chord voicings'
    ]
  },
  {
    id: 'improvisation',
    title: 'Improvisational Approaches',
    chapter: 8,
    description: 'Learn structured approaches to improvisation. Combine scales, arpeggios, and techniques into expressive, musical solos over chord progressions.',
    level: 'advanced',
    duration: '6-8 weeks',
    objectives: [
      'Develop a personal improvisational vocabulary',
      'Target chord tones in real-time over changes',
      'Use approach notes and enclosures',
      'Build musical phrases with tension and release',
      'Combine all learned techniques in a musical context'
    ],
    topics: [
      { name: 'Chord Tone Targeting', description: 'Landing on chord tones at strong beats' },
      { name: 'Approach Notes', description: 'Chromatic and diatonic leading tones' },
      { name: 'Enclosures', description: 'Surrounding target notes from above and below' },
      { name: 'Motivic Development', description: 'Developing short ideas through repetition and variation' },
      { name: 'Call and Response', description: 'Building dialogues within your solo' },
      { name: 'Tension and Release', description: 'Using outside notes and resolving them' },
      { name: 'Open String Approaches', description: 'Creative use of open strings in solos' }
    ],
    practiceGoals: [
      'Improvise a 32-bar solo with clear phrasing',
      'Solo over a jazz standard using chord tones as anchors',
      'Record and critically evaluate your own improvisation'
    ]
  }
];

export const getLevelColor = (level) => {
  switch (level) {
    case 'beginner': return 'var(--color-beginner)';
    case 'intermediate': return 'var(--color-intermediate)';
    case 'advanced': return 'var(--color-advanced)';
    default: return 'var(--color-text-muted)';
  }
};

export const getLevelLabel = (level) => {
  switch (level) {
    case 'beginner': return 'Beginner';
    case 'intermediate': return 'Intermediate';
    case 'advanced': return 'Advanced';
    default: return level;
  }
};
