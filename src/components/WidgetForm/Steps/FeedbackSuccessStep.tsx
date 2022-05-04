import { CloseButton } from '../../CloseButton';
import successImg from '../../../assets/success.svg';

interface FeedbackSuccessStepProps {
	onFeedbackRestartRequested: () => void;
}

function FeedbackSuccessStep({ onFeedbackRestartRequested }: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>
      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successImg} alt="imagem de um sinal de successo" />
        <span className="text-xl mt-2">
          Agradecemos o feedback!
        </span>
        <button
					type="button"
					className="py-2 px-6 mt-6 bg-zinc-600 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500 transition-colors"
					onClick={onFeedbackRestartRequested}
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
}
export { FeedbackSuccessStep };
