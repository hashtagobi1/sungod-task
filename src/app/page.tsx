'use client';
import { useLensGuideActions, useLensGuideState } from '@/store';
import LensGuide from './components/LensGuide';

export default function Home() {
  const { showGuide } = useLensGuideState();
  const { setShowGuide } = useLensGuideActions();
  return (
    <main>
      {!showGuide ? (
        <button onClick={() => setShowGuide(!showGuide)}>
          Context = {showGuide ? 'visible' : 'invisible'}
        </button>
      ) : null}
      {showGuide ? <LensGuide /> : null}
    </main>
  );
}
