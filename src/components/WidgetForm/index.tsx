/* eslint-disable react/jsx-no-useless-fragment */
import { useState } from 'react';
import bugImg from '../../assets/bug.svg';
import ideaImg from '../../assets/idea.svg';
import thoughtImg from '../../assets/thought.svg';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImg,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImg,
      alt: 'Imagem de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImg,
      alt: 'Imagem de um balão de pensamento',
    },
  },
};
export type FeedbackType = keyof typeof feedbackTypes;
function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }
  if (feedbackSent) {
    return (
      <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
        <footer className="text-xs text-neutral-400">
          Feito com ♥ pela
          {' '}
          <a
          className="underline underline-offset-2"
          href="https://www.google.com"
          >
            Rocktseat
          </a>
        </footer>
      </div>
    );
  }
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
      ) : (
        <FeedbackContentStep
							feedbackType={feedbackType}
							onFeedbackRestartRequested={handleRestartFeedback}
							onFeedbackSent={() => setFeedbackSent(true)}
        />
      )}
    </div>
  );
}
export { WidgetForm };
