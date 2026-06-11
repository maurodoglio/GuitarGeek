export const fretboardContent = [
  {
    topicId: 0,
    title: 'Diatonic Notes (C Major)',
    content: `
## The Diatonic Fretboard

The diatonic notes are the **natural notes** — no sharps or flats. In the key of C Major, these are:

**C - D - E - F - G - A - B**

Here's how they lay out across the fretboard in standard tuning (EADGBE):

\`\`\`
String/Fret:  0    1    2    3    4    5    6    7    8    9    10   11   12
─────────────────────────────────────────────────────────────────────────────
e (1st):      E    F    ·    G    ·    A    ·    B    C    ·    D    ·    E
B (2nd):      B    C    ·    D    ·    E    F    ·    G    ·    A    ·    B
G (3rd):      G    ·    A    ·    B    C    ·    D    ·    E    F    ·    G
D (4th):      D    ·    E    F    ·    G    ·    A    ·    B    C    ·    D
A (5th):      A    ·    B    C    ·    D    ·    E    F    ·    G    ·    A
E (6th):      E    F    ·    G    ·    A    ·    B    C    ·    D    ·    E
\`\`\`

### Key Observations

- The **1st and 6th strings** are identical (both E)
- Fret 12 is always the same note as the open string (one octave higher)
- Notice the pattern: most notes are **2 frets apart** (a whole tone), except **E-F** and **B-C** which are only **1 fret apart** (semitone)

### How to Practice

1. Pick one string and say/play every natural note ascending
2. Pick a random note (e.g., "G") and find it on ALL six strings
3. Set a timer for 60 seconds — name as many note positions as you can
4. Use the "one string at a time" method: master string 6, then 5, then 4...

### The Logic Behind It

The guitar is tuned in **fourths** (5 semitones between adjacent strings), except between strings 3 and 2 which is a **major third** (4 semitones). This means:

- A note on one string is found **5 frets higher on the next thinner string**
- Exception: going from string 3→2, it's **4 frets higher**

This is why the same patterns shift by one fret when crossing the G-B string boundary.
`
  },
  {
    topicId: 1,
    title: 'Chromatic Notes',
    content: `
## The Chromatic Fretboard

The chromatic scale includes **all 12 notes**: every fret on every string. Between any two natural notes that are a whole tone apart, there's a sharp/flat:

**C - C#/Db - D - D#/Eb - E - F - F#/Gb - G - G#/Ab - A - A#/Bb - B**

\`\`\`
String/Fret:  0     1     2     3     4     5     6     7     8     9     10    11    12
──────────────────────────────────────────────────────────────────────────────────────────
e (1st):      E     F     F#    G     G#    A     A#    B     C     C#    D     D#    E
B (2nd):      B     C     C#    D     D#    E     F     F#    G     G#    A     A#    B
G (3rd):      G     G#    A     A#    B     C     C#    D     D#    E     F     F#    G
D (4th):      D     D#    E     F     F#    G     G#    A     A#    B     C     C#    D
A (5th):      A     A#    B     C     C#    D     D#    E     F     F#    G     G#    A
E (6th):      E     F     F#    G     G#    A     A#    B     C     C#    D     D#    E
\`\`\`

### Key Rules

1. **Each fret = one semitone (half step)**
2. **Two frets = one whole tone (whole step)**
3. **12 frets = one octave** (you're back to the same note)
4. **No sharps/flats** exist between E-F and B-C (they're already a semitone apart)

### Enharmonic Equivalents

The same pitch can have two names:
- C# = Db
- D# = Eb
- F# = Gb
- G# = Ab
- A# = Bb

Which name you use depends on the **key context** — but on guitar they're the same fret.

### Practice Exercise

Play chromatically up one string, naming every note aloud:
- Start on the 6th string open: "E, F, F#, G, G#, A, A#, B, C, C#, D, D#, E"
- Then descend using flat names: "E, Eb, D, Db, C, B, Bb, A, Ab, G, Gb, F, E"
`
  },
  {
    topicId: 2,
    title: 'Octave Shapes',
    content: `
## Octave Shapes on Guitar

Octave shapes are **fixed geometric patterns** that connect the same note in different registers. Because guitar tuning is consistent (mostly in fourths), these shapes stay the same regardless of where you are on the neck.

### The Five Octave Shapes

**Shape 1: Strings 6→4 (skip one string)**
\`\`\`
e ─────────────────
B ─────────────────
G ─────────────────
D ──────●──────────   (2 frets higher)
A ─────────────────
E ──●──────────────   (root)
\`\`\`
Rule: Same fret + 2, skip one string.

**Shape 2: Strings 6→3 (skip two strings)**
\`\`\`
e ─────────────────
B ─────────────────
G ──────────●──────   (3 frets higher)
D ─────────────────
A ─────────────────
E ──●──────────────   (root)
\`\`\`
Rule: Same fret + 3, skip two strings.

**Shape 3: Strings 5→3 (skip one string)**
\`\`\`
e ─────────────────
B ─────────────────
G ──────●──────────   (2 frets higher)
D ─────────────────
A ──●──────────────   (root)
E ─────────────────
\`\`\`
Rule: Same as Shape 1.

**Shape 4: Strings 4→2 (crosses the G-B boundary)**
\`\`\`
e ─────────────────
B ──────────●──────   (3 frets higher)
G ─────────────────
D ──●──────────────   (root)
A ─────────────────
E ─────────────────
\`\`\`
Rule: +3 frets (because of the G→B major third tuning).

**Shape 5: Strings 3→1 (crosses G-B boundary)**
\`\`\`
e ──────────●──────   (3 frets higher)
B ─────────────────
G ──●──────────────   (root)
D ─────────────────
A ─────────────────
E ─────────────────
\`\`\`
Rule: +3 frets.

### Why This Matters

Once you know where one note is, octave shapes instantly show you where that same note lives everywhere else. This is the foundation for:
- Finding chord tones quickly
- Transposing patterns to new positions
- Seeing scale shapes as connected systems

### Practice

1. Play a C on the 6th string (fret 8)
2. Use each octave shape to find C on every other string
3. Repeat with different starting notes (G, A, E, D, F)
4. Try connecting them: play the same note ascending through all octave positions
`
  },
  {
    topicId: 3,
    title: 'Scale Shapes in Octaves',
    content: `
## Scales Within Octave Frames

Every scale pattern on guitar lives **within an octave shape**. By understanding which octave frame you're in, you can see how scale positions connect across the entire neck.

### Example: C Major Scale in Octave Frames

**Position 1 (6th string root, fret 8):**
\`\`\`
e ──────7──8────────
B ────8──10─────────
G ──7──9──10────────
D ──7──9──10────────
A ──7──8──10────────
E ──8──10───────────
     ↑ Root (C)
\`\`\`

The root note (C) on the 6th string defines the frame. The scale fills in the notes between this root and its octave on the 4th string (fret 10).

### How to Use This Concept

1. **Identify your root** — where is the "1" (tonic) of the scale?
2. **See the octave boundary** — where does that same note repeat?
3. **Fill in the pattern** — the scale degrees fit between those two anchors

### Connecting Positions

Scale positions are NOT isolated boxes. They overlap:

\`\`\`
Position 1          Position 2          Position 3
├───────────┤      ├───────────┤      ├───────────┤
    fret 5-8           fret 7-10          fret 10-13
         └─── overlap ───┘    └─── overlap ───┘
\`\`\`

The notes at the end of one position are the beginning of the next. Practice **sliding between positions** using the overlapping notes as pivot points.

### Practical Exercise

1. Play any scale in Position 1
2. Find the octave of your starting note within that position
3. Use that octave note as the ROOT for the next position
4. Continue up the neck until you run out of frets
5. Descend back down connecting all positions smoothly

### Key Insight

The CAGED system (covered next) provides five standard octave frames. Every scale, arpeggio, and chord you learn fits into one of these five frames. Master the frames, and you master the fretboard.
`
  }
];
