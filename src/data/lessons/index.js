import { fretboardContent } from './fretboard-overview.js';
import { warmUpsContent } from './warm-ups.js';
import { cagedContent } from './caged-system.js';
import { dropVoicingsContent } from './drop-voicings.js';
import { pentatonicContent } from './pentatonic-scales.js';
import { majorModesContent } from './major-modes.js';
import { advancedScalesContent } from './advanced-scales.js';
import { arpeggiosContent } from './arpeggios.js';
import { rhythmTechniquesContent } from './rhythm-techniques.js';
import { bendingVibratoContent } from './bending-vibrato.js';
import { pickingTechniquesContent } from './picking-techniques.js';
import { fingerstyleContent } from './fingerstyle-clawhammer.js';
import { improvisationContent } from './improvisation.js';

const lessonContentMap = {
  'fretboard-overview': fretboardContent,
  'warm-ups': warmUpsContent,
  'caged-system': cagedContent,
  'drop-voicings': dropVoicingsContent,
  'pentatonic-scales': pentatonicContent,
  'major-modes': majorModesContent,
  'advanced-scales': advancedScalesContent,
  'arpeggios': arpeggiosContent,
  'rhythm-techniques': rhythmTechniquesContent,
  'bending-vibrato': bendingVibratoContent,
  'picking-techniques': pickingTechniquesContent,
  'fingerstyle-clawhammer': fingerstyleContent,
  'improvisation': improvisationContent,
};

export function getLessonContent(lessonId) {
  return lessonContentMap[lessonId] || [];
}

export default lessonContentMap;
